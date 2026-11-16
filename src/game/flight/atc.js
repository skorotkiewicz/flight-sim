import { chooseUpwindRunwayDirection } from "../world/mission.js";
import { getAirportLayout, worldToAirport } from "./airport-layout.js";

const GROUND_PHASES = new Set([
	"parked",
	"taxi",
	"holding",
	"lineup",
	"takeoff",
]);
const ARRIVAL_PHASES = new Set(["approach", "landing", "rollout"]);
const distance = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const safeRoute = (route) =>
	route &&
	Number.isFinite(route.climb) &&
	Number.isFinite(route.glide) &&
	route.climb <= 0.1 &&
	route.glide <= 0.1;

/** Simulation-only guided radio. Requests never confer authority until read back. */
class AtcController {
	constructor({
		airfields,
		names = [],
		wind = { x: 0, z: 0 },
		departure,
		departureRoute = null,
		departurePlan = null,
		arrivalProvider = () => null,
	}) {
		this.airfields = airfields;
		this.names = names;
		this.wind = wind;
		this.departure = departure ?? airfields[0];
		this.departureRoute = departureRoute;
		this.departurePlan = departurePlan;
		this.arrivalProvider = arrivalProvider;
		this.session = 0;
		this.revision = 0;
		this.reset();
	}

	reset() {
		this.session += 1;
		this.revision += 1;
		this.phase = "parked";
		this.time = 0;
		this.pending = null;
		this.messages = [];
		this.messageId = 0;
		this.actions = [];
		this.actionEpoch = 0;
		this.actionSignature = "";
		this.warningTimes = new Map();
		this.gearWarningActive = false;
		this.failedArrivals = new Map();
		this.lastRepeat = -Infinity;
		this.observation = null;
		this.airborneTime = 0;
		this.contactTime = 0;
		this.departureTime = 0;
		this.hasFlown = false;
		this.finishRequested = false;
		this.routeBlocked = Boolean(
			(this.departureRoute && !safeRoute(this.departureRoute)) ||
				(this.departurePlan && !safeRoute(this.departurePlan)),
		);
		this.arrivalRoute = this.routeBlocked
			? null
			: (this.departureRoute ?? this.departurePlan);
		this.arrivalAirport = this.routeBlocked
			? null
			: (this.departureRoute?.to ?? null);
		this.departureLayout = getAirportLayout(
			this.departure,
			this.departureRoute?.depart ??
				this.departurePlan?.depart ??
				chooseUpwindRunwayDirection(this.departure, this.wind),
		);
		this.arrivalLayout = this.arrivalAirport
			? getAirportLayout(this.arrivalAirport, this.arrivalRoute.land)
			: null;
		this.airport = this.departure;
		this.layout = this.departureLayout;
		this.controller = "Ground";
		this.guideIndex = 0;
		this.goAroundUntil = 0;
		this.say(
			this.routeBlocked
				? "Baron One, terrain prevents ATC from offering a safe route. Choose another destination or turn guided ATC off before departure."
				: `Baron One, ${this.name(this.departure)} Ground. Parking brake set. Request taxi when ready.`,
		);
		this.syncActions();
	}

	name(airport) {
		return this.names[this.airfields.indexOf(airport)] ?? "Airfield";
	}

	say(text, speaker = this.controller) {
		if (speaker === "pilot") speaker = "Pilot";
		this.messages.push({
			id: `${this.session}:${++this.messageId}`,
			speaker,
			text,
		});
		if (this.messages.length > 40) this.messages.shift();
		if (speaker !== "Pilot") this.latestInstruction = text;
		this.revision += 1;
	}

	warn(key, text) {
		if (this.time - (this.warningTimes.get(key) ?? -Infinity) < 15) return;
		this.warningTimes.set(key, this.time);
		this.say(text);
	}

	transition(phase) {
		this.phase = phase;
		this.pending = null;
		this.guideIndex = 0;
		this.revision += 1;
	}

	onRunway(airport, pos) {
		const local = worldToAirport(airport, pos);
		return (
			Math.abs(local.along) <= airport.paved / 2 + 15 &&
			Math.abs(local.across) <= (airport.pavedWidth ?? airport.width) / 2 + 3
		);
	}

	aligned(runway) {
		const forward = this.observation?.forward;
		if (!forward) return false;
		return (
			(forward.x * runway.dx + forward.z * runway.dz) /
				(Math.hypot(forward.x, forward.z) || 1) >
			0.93
		);
	}

	readyAtHold() {
		const obs = this.observation;
		return (
			obs?.onGround &&
			obs.speed <= 6 &&
			distance(obs.pos, this.departureLayout.holding) <= 8
		);
	}

	readyForTakeoff() {
		const obs = this.observation;
		return (
			obs?.onGround &&
			obs.speed <= 8 &&
			distance(obs.pos, this.departureLayout.lineup) <= 65 &&
			this.aligned(this.departureLayout.runway)
		);
	}

	readyForLanding() {
		const obs = this.observation;
		if (
			!obs ||
			obs.onGround ||
			!this.arrivalLayout ||
			!safeRoute(this.arrivalRoute) ||
			this.time < this.goAroundUntil
		)
			return false;
		const runway = this.arrivalLayout.runway;
		const x = obs.pos.x - this.arrivalAirport.x;
		const z = obs.pos.z - this.arrivalAirport.z;
		const along = x * runway.dx + z * runway.dz;
		const across = -x * runway.dz + z * runway.dx;
		const height = obs.pos.y - this.arrivalAirport.height;
		return (
			along >= -4500 &&
			along < 0 &&
			Math.abs(across) <= Math.max(100, -along * 0.15) &&
			height >= 0 &&
			height <= 600 &&
			this.aligned(runway)
		);
	}

	nextArrival() {
		if (!this.observation) return null;
		return (
			this.airfields
				.filter(
					(airport) =>
						(this.failedArrivals.get(airport) ?? -Infinity) <= this.time,
				)
				.sort(
					(a, b) =>
						distance(a, this.observation.pos) -
						distance(b, this.observation.pos),
				)[0] ?? null
		);
	}

	syncActions() {
		const choices = [];
		if (this.phase !== "completed") {
			if (this.pending) choices.push(["readback", "Read back clearance"]);
			else if (this.phase === "parked" && !this.routeBlocked)
				choices.push(["request-taxi", "Request taxi"]);
			else if (this.phase === "holding" && this.readyAtHold())
				choices.push(["report-ready", "Report ready at holding point"]);
			else if (this.phase === "lineup" && this.readyForTakeoff())
				choices.push(["request-takeoff", "Request takeoff clearance"]);
			else if (this.phase === "approach" && this.readyForLanding())
				choices.push(["request-landing", "Request landing clearance"]);
			else if (
				this.phase === "rollout" &&
				this.observation?.onGround &&
				this.observation.speed <= 1.5 &&
				this.contactTime >= 0.7
			)
				choices.push(["finish", "Finish flight"]);
			if (["approach", "landing"].includes(this.phase))
				choices.push(["go-around", "Go around"]);
			if (
				!this.departureRoute &&
				(["departure", "enroute"].includes(this.phase) ||
					(this.phase === "approach" && !this.arrivalRoute))
			) {
				const airport = this.nextArrival();
				if (airport)
					choices.push([
						"request-arrival",
						`Request landing at ${this.name(airport)}`,
					]);
			}
			if (
				this.departureRoute &&
				this.phase === "approach" &&
				!this.arrivalRoute &&
				(this.failedArrivals.get(this.arrivalAirport) ?? 0) <= this.time
			)
				choices.push([
					"retry-arrival",
					`Retry approach to ${this.name(this.arrivalAirport)}`,
				]);
			choices.push(["say-again", "Say again"]);
		}
		const signature = JSON.stringify([
			this.phase,
			this.pending?.phase,
			choices,
		]);
		if (signature !== this.actionSignature) {
			this.actionSignature = signature;
			this.actionEpoch += 1;
			this.actions = choices.map(([kind, label]) => ({
				id: `${this.session}:${this.actionEpoch}:${kind}`,
				label,
			}));
			this.revision += 1;
		}
	}

	clearance(phase, text, readback) {
		this.pending = { phase, readback };
		this.say(text);
	}

	selectArrival() {
		const airport = this.nextArrival();
		if (!airport) return;
		this.say(`Baron One requests landing at ${this.name(airport)}.`, "pilot");
		const route = this.arrivalProvider(airport, this.observation);
		if (!safeRoute(route)) {
			this.failedArrivals.set(airport, this.time + 30);
			this.say(
				`Baron One, terrain prevents a safe arrival at ${this.name(airport)}. Request another airfield or retry later.`,
			);
			return;
		}
		this.arrivalAirport = airport;
		this.arrivalRoute = route;
		this.arrivalLayout = getAirportLayout(airport, route.land);
		this.beginApproach();
	}

	runwayAdvisory(runway) {
		const tailwind = this.wind.x * runway.dx + this.wind.z * runway.dz;
		return tailwind > 0.1
			? ` Terrain requires this alternate runway with ${Math.round(tailwind * 3.6)} km/h tailwind.`
			: "";
	}

	beginApproach() {
		this.airport = this.arrivalAirport;
		this.layout = this.arrivalLayout;
		this.controller = "Approach";
		this.transition("approach");
		const runway = this.layout.runway;
		const range = Math.round(distance(this.observation.pos, this.airport));
		this.say(
			`Baron One, ${this.name(this.airport)} Approach. Runway ${runway.number}, heading ${Math.round(runway.heading)} degrees, ${range} m to field. Follow the terrain-aware approach guide.${this.runwayAdvisory(runway)}`,
		);
	}

	rejoinApproach() {
		this.transition("approach");
		this.controller = "Approach";
		this.goAroundUntil = this.time + 1;
		const route = this.arrivalProvider(this.arrivalAirport, this.observation);
		if (safeRoute(route)) {
			this.arrivalRoute = route;
			this.arrivalLayout = getAirportLayout(this.arrivalAirport, route.land);
			this.layout = this.arrivalLayout;
			this.say(
				`Baron One, landing clearance cancelled. Climb and follow the new terrain-aware approach guide for runway ${this.layout.runway.number}.${this.runwayAdvisory(this.layout.runway)}`,
			);
		} else {
			this.arrivalRoute = null;
			this.failedArrivals.set(this.arrivalAirport, this.time + 30);
			this.say(
				`Baron One, landing clearance cancelled. Terrain prevents a safe approach from here. Continue safe flight. ${this.departureRoute ? "Retry the assigned arrival after repositioning." : "Request another airfield or retry after repositioning."}`,
			);
		}
	}

	act(actionId) {
		const action = this.actions.find(({ id }) => id === actionId);
		if (!action) return false;
		const kind = action.id.split(":").at(-1);
		if (kind === "say-again") {
			if (this.time - this.lastRepeat < 3) return false;
			this.lastRepeat = this.time;
			const text = this.latestInstruction;
			this.say("Baron One, say again.", "pilot");
			this.say(text);
		} else if (kind === "readback") {
			const pending = this.pending;
			this.say(pending.readback, "pilot");
			this.transition(pending.phase);
			if (
				this.phase === "lineup" ||
				this.phase === "takeoff" ||
				this.phase === "landing"
			)
				this.controller = "Tower";
		} else if (kind === "request-taxi") {
			const runway = this.departureLayout.runway;
			this.say("Baron One requests taxi.", "pilot");
			this.clearance(
				"taxi",
				`Baron One, taxi to holding point runway ${runway.number}. Hold short. Read back before releasing the parking brake.${this.runwayAdvisory(runway)}`,
				`Taxi to holding point runway ${runway.number}, hold short, Baron One.`,
			);
		} else if (kind === "report-ready") {
			this.controller = "Tower";
			this.say(
				`Baron One ready at runway ${this.layout.runway.number} holding point.`,
				"pilot",
			);
			this.clearance(
				"lineup",
				`Baron One, enter runway ${this.layout.runway.number}, backtrack to the threshold, line up and wait. Read back before entering.`,
				`Enter, backtrack, line up and wait runway ${this.layout.runway.number}, Baron One.`,
			);
		} else if (kind === "request-takeoff") {
			this.say("Baron One requests takeoff clearance.", "pilot");
			this.clearance(
				"takeoff",
				`Baron One, runway ${this.layout.runway.number}, cleared for takeoff. Read back clearance.`,
				`Cleared for takeoff runway ${this.layout.runway.number}, Baron One.`,
			);
		} else if (kind === "request-arrival") {
			this.selectArrival();
		} else if (kind === "request-landing") {
			this.controller = "Tower";
			this.say("Baron One requests landing clearance.", "pilot");
			this.clearance(
				"landing",
				`Baron One, runway ${this.layout.runway.number}, cleared to land. Read back clearance.`,
				`Cleared to land runway ${this.layout.runway.number}, Baron One.`,
			);
		} else if (kind === "retry-arrival") {
			this.say(
				`Baron One requests a new approach to ${this.name(this.arrivalAirport)}.`,
				"pilot",
			);
			this.rejoinApproach();
		} else if (kind === "go-around") {
			this.say("Baron One going around.", "pilot");
			this.rejoinApproach();
		} else if (kind === "finish") {
			this.finishRequested = true;
			this.transition("completed");
			this.say("Baron One, flight complete. Parking brake set.");
		}
		this.syncActions();
		return true;
	}

	update(dt, observation) {
		if (!(dt > 0) || !Number.isFinite(dt) || this.phase === "completed") return;
		this.time += dt;
		this.observation = observation;
		if (!observation.alive) {
			this.transition("completed");
			this.syncActions();
			return;
		}
		this.airborneTime = observation.onGround ? 0 : this.airborneTime + dt;
		this.contactTime = observation.onGround ? this.contactTime + dt : 0;
		const airTime = Math.max(this.airborneTime, observation.airTime ?? 0);
		const contactTime = Math.max(this.contactTime, observation.groundTime ?? 0);
		const sustainedFlight =
			!observation.onGround &&
			airTime >= 1 &&
			observation.pos.y - observation.groundHeight > 8;

		if (GROUND_PHASES.has(this.phase) && sustainedFlight) {
			const authorized = this.phase === "takeoff";
			this.transition("departure");
			this.controller = "Departure";
			this.departureTime = this.time;
			this.hasFlown = true;
			this.say(
				authorized
					? `Baron One, airborne. Continue departure guidance${this.arrivalAirport ? ` to ${this.name(this.arrivalAirport)}` : ". Request an arrival airfield when ready"}.`
					: "Baron One, airborne without takeoff clearance. Continue safe flight. Contact Departure for arrival guidance.",
			);
		} else if (
			["parked", "taxi", "holding"].includes(this.phase) &&
			observation.onGround &&
			this.onRunway(this.departure, observation.pos)
		) {
			this.warn(
				"runway-entry",
				"Baron One, runway entered without clearance. Hold clear of the runway. Request and read back runway entry clearance.",
			);
		}
		if (this.phase === "taxi" && this.readyAtHold()) {
			this.transition("holding");
			this.say(
				`Baron One, holding point runway ${this.layout.runway.number}. Hold short and report ready.`,
			);
		}
		if (
			this.phase === "departure" &&
			this.time > this.departureTime &&
			(distance(observation.pos, this.departure) > 1600 ||
				this.time - this.departureTime > 5)
		) {
			this.transition("enroute");
			this.say(
				`Baron One, en route${this.arrivalAirport ? ` to ${this.name(this.arrivalAirport)}` : ". Request landing at an airfield when ready"}.`,
			);
		}
		if (
			["departure", "enroute"].includes(this.phase) &&
			this.arrivalAirport &&
			this.time > this.departureTime &&
			distance(observation.pos, this.arrivalAirport) <= 6000
		)
			this.beginApproach();

		if (
			this.hasFlown &&
			observation.onGround &&
			contactTime >= 0.7 &&
			this.phase !== "completed" &&
			this.phase !== "rollout"
		) {
			if (
				this.arrivalAirport &&
				this.onRunway(this.arrivalAirport, observation.pos)
			) {
				if (this.phase !== "rollout") {
					const authorized = this.phase === "landing";
					this.transition("rollout");
					this.airport = this.arrivalAirport;
					this.layout = this.arrivalLayout;
					this.controller = "Tower";
					this.say(
						`${authorized ? "Baron One, touchdown." : "Baron One, landed without landing clearance."} Slow down, vacate toward the apron connector. Stop safely, then select Finish flight. A safe runway stop can also finish.`,
					);
				}
			} else {
				const other = this.airfields.find((airport) =>
					this.onRunway(airport, observation.pos),
				);
				this.transition("completed");
				this.say(
					other
						? `Baron One, landed at ${this.name(other)}, another field than assigned. Ending guidance for normal landing review.`
						: "Baron One, landing away from the assigned runway. Ending guidance for normal landing review.",
				);
			}
		}
		if (this.phase === "rollout" && sustainedFlight && airTime >= 2) {
			this.rejoinApproach();
		}
		if (
			this.phase === "approach" &&
			this.arrivalAirport &&
			distance(observation.pos, this.arrivalAirport) < 4000 &&
			this.controller !== "Tower"
		) {
			this.controller = "Tower";
			this.revision += 1;
		}
		this.advanceGuide();
		this.checkLandingGear(observation);
		this.syncActions();
	}

	checkLandingGear(observation) {
		if (!["approach", "landing"].includes(this.phase) || observation.onGround) {
			this.gearWarningActive = false;
			return;
		}
		if (this.pending || observation.gearRetractable !== true) return;
		if (observation.gearDownLocked === true) {
			if (this.gearWarningActive) {
				this.gearWarningActive = false;
				this.warningTimes.delete("landing-gear");
				this.say("Baron One, gear down and locked. Continue the approach.");
			}
			return;
		}
		if (observation.gearDownLocked !== false || !this.arrivalAirport) return;
		const height = observation.pos.y - observation.groundHeight;
		if (
			height > 5 &&
			height < 300 &&
			distance(observation.pos, this.arrivalAirport) < 3500
		) {
			this.gearWarningActive = true;
			this.warn(
				"landing-gear",
				"Baron One, check landing gear. Lower the gear and confirm DOWN and locked before touchdown.",
			);
		}
	}

	guide() {
		const common = { airport: this.airport, layout: this.layout };
		if (this.phase === "parked")
			return {
				...common,
				points: [this.layout.parking],
				target: this.layout.parking,
				kind: "parking",
			};
		const [points, kind] =
			this.phase === "holding"
				? [[this.layout.holding], "taxi"]
				: this.phase === "taxi"
					? [this.layout.taxiPath, "taxi"]
					: this.phase === "lineup"
						? [this.layout.lineupPath, "lineup"]
						: this.phase === "rollout"
							? [this.layout.vacatePath, "vacate"]
							: [null, null];
		return points
			? {
					...common,
					points,
					target: points[Math.min(this.guideIndex, points.length - 1)],
					kind,
				}
			: null;
	}

	advanceGuide() {
		const guide = this.guide();
		if (!guide || !this.observation) return;
		while (
			this.guideIndex < guide.points.length - 1 &&
			distance(this.observation.pos, guide.points[this.guideIndex]) < 24
		) {
			this.guideIndex += 1;
			this.revision += 1;
		}
	}

	snapshot() {
		const objective =
			this.routeBlocked && this.phase === "parked"
				? "Choose another destination or turn guided ATC off."
				: this.pending
					? "Read back the pending clearance."
					: {
							parked: "Request taxi clearance.",
							taxi: "Taxi to the holding point. Hold short of the runway.",
							holding: "Hold short and report ready.",
							lineup: "Backtrack to the threshold, line up and wait.",
							takeoff: "Take off on the assigned runway.",
							departure: "Climb and follow departure guidance.",
							enroute: this.arrivalAirport
								? `Fly to ${this.name(this.arrivalAirport)}.`
								: "Request landing at a nearby airfield.",
							approach:
								"Follow the arrival guide and request landing when aligned.",
							landing: "Land on the assigned runway.",
							rollout: "Vacate toward the apron and stop safely.",
							completed: "Flight guidance complete.",
						}[this.phase];
		return {
			revision: this.revision,
			phase: this.phase,
			controller: this.controller,
			airfieldName: this.name(this.airport),
			runway: { ...this.layout.runway },
			latestInstruction: this.latestInstruction,
			messages: this.messages.map((message) => ({ ...message })),
			actions: this.actions.map((action) => ({ ...action })),
			brakeHeld: this.phase === "parked",
			guide: this.guide(),
			objective,
			arrivalRoute: this.arrivalRoute,
			deferLanding: ARRIVAL_PHASES.has(this.phase),
			finishRequested: this.finishRequested,
		};
	}
}

export { AtcController };
