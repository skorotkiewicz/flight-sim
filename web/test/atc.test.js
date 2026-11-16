import assert from "node:assert/strict";
import test from "node:test";
import { getAirportLayout } from "../src/game/flight/airport-layout.js";
import { AtcController } from "../src/game/flight/atc.js";

const home = {
	x: 0,
	z: 0,
	height: 20,
	heading: 0,
	dirX: 1,
	dirZ: 0,
	paved: 900,
	pavedWidth: 36,
	width: 58,
};
const destination = { ...home, x: 12000 };
const other = { ...home, x: 17000, z: 3000 };
const direction = { dx: 1, dz: 0 };
const route = {
	from: home,
	to: destination,
	depart: direction,
	land: direction,
	climb: 0.08,
	glide: 0.07,
	pts: [],
};

test("free departure plan chooses the approved runway without assigning an arrival", () => {
	const departurePlan = {
		...route,
		departureOnly: true,
		depart: { dx: -1, dz: 0 },
	};
	const controller = create({ departureRoute: null, departurePlan });
	assert.equal(controller.departureLayout.runway.dx, -1);
	assert.equal(controller.arrivalAirport, null);
	assert.equal(controller.snapshot().arrivalRoute, departurePlan);
	act(controller, "request-taxi");
	assert.match(
		controller.snapshot().latestInstruction,
		/alternate runway.*tailwind/i,
	);
});

function create(options = {}) {
	return new AtcController({
		airfields: [home, destination, other],
		names: ["Home Field", "East Field", "Far Field"],
		wind: { x: -3, z: 0 },
		departure: home,
		departureRoute: route,
		arrivalProvider: (airport) => ({ ...route, to: airport }),
		...options,
	});
}
function observation(pos, extra = {}) {
	return {
		pos: { ...pos, y: pos.y ?? 22 },
		forward: { x: 1, z: 0 },
		speed: 0,
		onGround: true,
		airTime: 0,
		groundTime: 2,
		groundHeight: 20,
		alive: true,
		...extra,
	};
}
function action(controller, kind) {
	return controller
		.snapshot()
		.actions.find(({ id }) => id.endsWith(`:${kind}`));
}
function act(controller, kind) {
	const current = action(controller, kind);
	assert.ok(current, `expected ${kind} in ${controller.snapshot().phase}`);
	assert.equal(controller.act(current.id), true);
}
function depart(controller) {
	act(controller, "request-taxi");
	act(controller, "readback");
	controller.update(1, observation(controller.departureLayout.holding));
	act(controller, "report-ready");
	act(controller, "readback");
	controller.update(1, observation(controller.departureLayout.lineup));
	act(controller, "request-takeoff");
	act(controller, "readback");
	controller.update(
		2,
		observation({ x: 600, z: 0, y: 80 }, { onGround: false, airTime: 2 }),
	);
}
function approach(controller) {
	depart(controller);
	controller.update(
		2,
		observation({ x: 9000, z: 0, y: 160 }, { onGround: false, airTime: 4 }),
	);
}

test("full sortie keeps each clearance pending until readback and finishes after touchdown", () => {
	const controller = create();
	const initial = controller.snapshot();
	assert.equal(initial.phase, "parked");
	assert.equal(initial.brakeHeld, true);
	act(controller, "request-taxi");
	assert.equal(controller.snapshot().phase, "parked");
	assert.equal(controller.snapshot().brakeHeld, true);
	assert.equal(controller.act(initial.actions[0].id), false);
	act(controller, "readback");
	assert.equal(controller.snapshot().phase, "taxi");
	assert.equal(controller.snapshot().brakeHeld, false);
	controller.update(1, observation(controller.departureLayout.parking));
	assert.equal(controller.snapshot().phase, "taxi");
	assert.equal(action(controller, "report-ready"), undefined);
	controller.update(1, observation(controller.departureLayout.holding));
	assert.equal(controller.snapshot().phase, "holding");
	act(controller, "report-ready");
	assert.equal(controller.snapshot().phase, "holding");
	act(controller, "readback");
	assert.equal(controller.snapshot().phase, "lineup");
	assert.equal(action(controller, "request-takeoff"), undefined);
	controller.update(1, observation(controller.departureLayout.lineup));
	act(controller, "request-takeoff");
	assert.equal(controller.snapshot().phase, "lineup");
	act(controller, "readback");
	controller.update(
		2,
		observation({ x: 600, z: 0, y: 80 }, { onGround: false, airTime: 2 }),
	);
	assert.equal(controller.snapshot().phase, "departure");
	controller.update(
		2,
		observation({ x: 9000, z: 0, y: 160 }, { onGround: false, airTime: 4 }),
	);
	assert.equal(controller.snapshot().phase, "approach");
	act(controller, "request-landing");
	assert.equal(controller.snapshot().phase, "approach");
	act(controller, "readback");
	assert.equal(controller.snapshot().phase, "landing");
	controller.update(
		0.2,
		observation({ x: 11800, z: 0, y: 23 }, { speed: 25, groundTime: 0.2 }),
	);
	assert.equal(controller.snapshot().phase, "landing");
	controller.update(
		0.2,
		observation({ x: 11820, z: 0, y: 25 }, { onGround: false, airTime: 0.2 }),
	);
	assert.equal(controller.snapshot().phase, "landing");
	controller.update(
		1,
		observation({ x: 11900, z: 0 }, { speed: 15, groundTime: 1 }),
	);
	assert.equal(controller.snapshot().phase, "rollout");
	assert.equal(action(controller, "finish"), undefined);
	controller.update(
		1,
		observation(getAirportLayout(destination, direction).exit),
	);
	act(controller, "finish");
	assert.equal(controller.snapshot().phase, "completed");
	assert.equal(controller.snapshot().finishRequested, true);
});

test("position, speed and alignment gate reports and landing requests", () => {
	const controller = create();
	act(controller, "request-taxi");
	act(controller, "readback");
	controller.update(
		1,
		observation(controller.departureLayout.holding, { speed: 20 }),
	);
	assert.equal(action(controller, "report-ready"), undefined);
	controller.update(1, observation(controller.departureLayout.holding));
	act(controller, "report-ready");
	act(controller, "readback");
	controller.update(
		1,
		observation(controller.departureLayout.lineup, {
			forward: { x: -1, z: 0 },
		}),
	);
	assert.equal(action(controller, "request-takeoff"), undefined);
	const inbound = create();
	approach(inbound);
	inbound.update(
		1,
		observation({ x: 9000, z: 1800, y: 160 }, { onGround: false, airTime: 5 }),
	);
	assert.equal(action(inbound, "request-landing"), undefined);
	inbound.update(
		1,
		observation(
			{ x: 9000, z: 0, y: 160 },
			{ onGround: false, airTime: 6, forward: { x: -1, z: 0 } },
		),
	);
	assert.equal(action(inbound, "request-landing"), undefined);
});

test("unauthorized runway entry warns with cooldown and every ground phase recovers an airborne departure", () => {
	for (const stage of ["parked", "pending-taxi", "taxi", "holding", "lineup"]) {
		const controller = create();
		if (stage !== "parked") act(controller, "request-taxi");
		if (!["parked", "pending-taxi"].includes(stage))
			act(controller, "readback");
		if (["holding", "lineup"].includes(stage))
			controller.update(1, observation(controller.departureLayout.holding));
		if (stage === "lineup") {
			act(controller, "report-ready");
			act(controller, "readback");
		}
		controller.update(
			2,
			observation({ x: 1000, z: 0, y: 70 }, { onGround: false, airTime: 2 }),
		);
		assert.equal(controller.snapshot().phase, "departure", stage);
		assert.equal(controller.snapshot().brakeHeld, false);
		assert.equal(action(controller, "readback"), undefined);
		assert.match(
			controller.snapshot().messages.at(-1).text,
			/without.*clearance/i,
		);
	}
	const controller = create();
	act(controller, "request-taxi");
	act(controller, "readback");
	controller.update(1, observation({ x: 0, z: 0 }));
	const count = controller.snapshot().messages.length;
	controller.update(1, observation({ x: 0, z: 0 }));
	assert.equal(controller.snapshot().messages.length, count);
});

test("free flight chooses nearest including home, then offers a feasible alternative", () => {
	const calls = [];
	const controller = create({
		departureRoute: null,
		arrivalProvider: (airport) => {
			calls.push(airport);
			return airport === home ? null : { ...route, to: airport };
		},
	});
	depart(controller);
	assert.match(action(controller, "request-arrival").label, /Home Field/);
	act(controller, "request-arrival");
	assert.equal(controller.snapshot().phase, "departure");
	assert.deepEqual(calls, [home]);
	assert.equal(action(controller, "readback"), undefined);
	assert.match(action(controller, "request-arrival").label, /East Field/);
	act(controller, "request-arrival");
	assert.equal(controller.snapshot().arrivalRoute.to, destination);
	assert.equal(controller.snapshot().airfieldName, "East Field");
});

test("cross-country retains selected destination and ignores nearest alternative", () => {
	const controller = create();
	depart(controller);
	controller.update(
		1,
		observation({ x: 16000, z: 2500, y: 160 }, { onGround: false, airTime: 4 }),
	);
	assert.equal(controller.snapshot().arrivalRoute.to, destination);
	assert.equal(controller.snapshot().airfieldName, "East Field");
});

test("go-around cancels pending or acknowledged landing and rejects stale readbacks", () => {
	const controller = create();
	approach(controller);
	act(controller, "request-landing");
	const stale = action(controller, "readback").id;
	act(controller, "go-around");
	assert.equal(controller.act(stale), false);
	assert.equal(controller.snapshot().phase, "approach");
	assert.equal(action(controller, "request-landing"), undefined);
	controller.update(
		1,
		observation({ x: 9000, z: 0, y: 160 }, { onGround: false, airTime: 6 }),
	);
	act(controller, "request-landing");
	act(controller, "readback");
	act(controller, "go-around");
	assert.equal(controller.snapshot().phase, "approach");
});

test("low passes never touch down, rollout tolerates short bounces and safe runway stop can finish", () => {
	const controller = create();
	approach(controller);
	act(controller, "request-landing");
	act(controller, "readback");
	controller.update(
		2,
		observation({ x: 11800, z: 0, y: 25 }, { onGround: false, airTime: 6 }),
	);
	assert.equal(controller.snapshot().phase, "landing");
	controller.update(1, observation({ x: 11800, z: 0 }, { speed: 15 }));
	controller.update(
		0.2,
		observation(
			{ x: 11810, z: 0, y: 25 },
			{ onGround: false, airTime: 0.2, speed: 15 },
		),
	);
	assert.equal(controller.snapshot().phase, "rollout");
	controller.update(1, observation({ x: 11850, z: 0 }));
	assert.ok(action(controller, "finish"));
});

test("wrong-field landings and crashes release automatic completion", () => {
	const controller = create();
	approach(controller);
	assert.equal(controller.snapshot().deferLanding, true);
	controller.update(1, observation({ x: other.x, z: other.z }));
	assert.equal(controller.snapshot().deferLanding, false);
	assert.match(
		controller.snapshot().messages.at(-1).text,
		/another|Far Field/i,
	);
	const crashed = create();
	approach(crashed);
	crashed.update(1, observation({ x: 9000, z: 0 }, { alive: false }));
	assert.equal(crashed.snapshot().deferLanding, false);
	assert.equal(crashed.snapshot().guide, null);
});

test("zero dt freezes all observations; reset clears timers, messages, pending and action ids", () => {
	const controller = create();
	act(controller, "request-taxi");
	const before = controller.snapshot();
	controller.update(
		0,
		observation({ x: 600, z: 0, y: 100 }, { onGround: false, airTime: 5 }),
	);
	assert.deepEqual(controller.snapshot(), before);
	controller.update(
		-1,
		observation({ x: 600, z: 0, y: 100 }, { onGround: false, airTime: 5 }),
	);
	assert.deepEqual(controller.snapshot(), before);
	controller.reset();
	assert.equal(controller.snapshot().phase, "parked");
	assert.equal(controller.snapshot().brakeHeld, true);
	assert.equal(controller.act(before.actions[0].id), false);
	assert.equal(action(controller, "readback"), undefined);
});

test("say again repeats the controller instruction, preserves authorization and bounds messages", () => {
	const controller = create();
	const instruction = controller.snapshot().latestInstruction;
	act(controller, "say-again");
	assert.equal(controller.snapshot().messages.at(-1).text, instruction);
	for (let i = 0; i < 80; i++) {
		controller.update(4, observation(controller.departureLayout.parking));
		act(controller, "say-again");
	}
	assert.ok(controller.snapshot().messages.length <= 40);
	assert.equal(controller.snapshot().phase, "parked");
});

test("free-flight departure uses opposing wind and route-provided reciprocal is frozen", () => {
	const free = create({ departureRoute: null, wind: { x: 4, z: 0 } });
	assert.equal(free.snapshot().runway.dx, -1);
	const fixed = create({ wind: { x: 4, z: 0 } });
	assert.equal(fixed.snapshot().runway.dx, 1);
});

test("unsafe departure and arrival routes never produce pending clearances", () => {
	const unsafe = create({ departureRoute: { ...route, glide: 0.6 } });
	assert.equal(action(unsafe, "request-taxi"), undefined);
	assert.match(unsafe.snapshot().latestInstruction, /terrain|safe route/i);
	const arrival = create({
		departureRoute: null,
		arrivalProvider: (airport) => ({ ...route, to: airport, climb: 0.11 }),
	});
	depart(arrival);
	act(arrival, "request-arrival");
	assert.equal(arrival.snapshot().arrivalRoute, null);
	assert.equal(action(arrival, "readback"), undefined);
});

test("controller and pilot messages remain distinct and stale geometry actions are rejected", () => {
	const controller = create();
	act(controller, "request-taxi");
	assert.equal(controller.snapshot().messages.at(-2).speaker, "Pilot");
	assert.equal(controller.snapshot().messages.at(-1).speaker, "Ground");
	act(controller, "readback");
	controller.update(1, observation(controller.departureLayout.holding));
	const stale = action(controller, "report-ready").id;
	controller.update(1, observation(controller.departureLayout.parking));
	assert.equal(controller.act(stale), false);
	controller.update(1, observation(controller.departureLayout.holding));
	assert.notEqual(action(controller, "report-ready").id, stale);
	assert.equal(controller.act(stale), false);
});

test("warning and infeasible arrival retries use simulation cooldowns", () => {
	const controller = create();
	act(controller, "request-taxi");
	act(controller, "readback");
	controller.update(1, observation({ x: 0, z: 0 }));
	const warningCount = controller.snapshot().messages.length;
	controller.update(14, observation({ x: 0, z: 0 }));
	assert.equal(controller.snapshot().messages.length, warningCount);
	controller.update(1, observation({ x: 0, z: 0 }));
	assert.equal(controller.snapshot().messages.length, warningCount + 1);
	const calls = [];
	const free = create({
		departureRoute: null,
		arrivalProvider: (airport) => {
			calls.push(airport);
			return null;
		},
	});
	depart(free);
	act(free, "request-arrival");
	act(free, "request-arrival");
	act(free, "request-arrival");
	assert.equal(calls.length, 3);
	assert.equal(action(free, "request-arrival"), undefined);
	free.update(
		30,
		observation({ x: 600, z: 0, y: 100 }, { onGround: false, airTime: 32 }),
	);
	assert.match(action(free, "request-arrival").label, /Home Field/);
});

test("runway vacation stays in rollout and sustained climb after touchdown returns to approach", () => {
	const controller = create();
	approach(controller);
	controller.update(
		1,
		observation({ x: destination.x, z: destination.z }, { speed: 12 }),
	);
	assert.equal(controller.snapshot().phase, "rollout");
	controller.update(
		1,
		observation(getAirportLayout(destination, direction).parking),
	);
	assert.equal(controller.snapshot().phase, "rollout");
	assert.ok(action(controller, "finish"));
	controller.update(
		2,
		observation({ x: 12500, z: 0, y: 80 }, { onGround: false, airTime: 2 }),
	);
	assert.equal(controller.snapshot().phase, "approach");
	assert.equal(action(controller, "finish"), undefined);
});

test("go-around regenerates terrain-aware guidance and updates assigned runway", () => {
	const calls = [];
	const replacement = { ...route, land: { dx: -1, dz: 0 } };
	const controller = create({
		arrivalProvider: (airport, obs) => {
			calls.push({ airport, obs });
			return replacement;
		},
	});
	approach(controller);
	act(controller, "request-landing");
	act(controller, "readback");
	act(controller, "go-around");
	assert.equal(calls.length, 1);
	assert.equal(calls[0].airport, destination);
	assert.equal(calls[0].obs.pos.x, 9000);
	assert.equal(controller.snapshot().arrivalRoute, replacement);
	assert.equal(controller.snapshot().runway.dx, -1);
	assert.equal(action(controller, "readback"), undefined);
});

test("infeasible go-around cancels clearance and free flight offers another field", () => {
	let feasible = true;
	const controller = create({
		departureRoute: null,
		arrivalProvider: (airport) => (feasible ? { ...route, to: airport } : null),
	});
	depart(controller);
	act(controller, "request-arrival");
	feasible = false;
	act(controller, "go-around");
	assert.equal(controller.snapshot().arrivalRoute, null);
	assert.equal(action(controller, "request-landing"), undefined);
	assert.match(action(controller, "request-arrival").label, /East Field/);
	assert.match(
		controller.snapshot().latestInstruction,
		/terrain|safe approach/i,
	);
});

test("ATC reminds low approaches about unlocked gear with simulation cooldown", () => {
	const controller = create();
	approach(controller);
	const inbound = observation(
		{ x: 9000, z: 0, y: 160 },
		{
			onGround: false,
			airTime: 10,
			gearRetractable: true,
			gearDownLocked: false,
		},
	);
	controller.update(1, inbound);
	assert.match(controller.snapshot().latestInstruction, /gear.*down.*locked/i);
	const messageId = controller.snapshot().messages.at(-1).id;
	controller.update(1, inbound);
	assert.equal(controller.snapshot().messages.at(-1).id, messageId);
	controller.update(14, inbound);
	assert.notEqual(controller.snapshot().messages.at(-1).id, messageId);
	controller.update(1, { ...inbound, gearDownLocked: true });
	assert.match(
		controller.snapshot().latestInstruction,
		/gear down and locked.*continue/i,
	);
});

test("gear reminders preserve pending clearances and ignore fixed or legacy aircraft", () => {
	for (const gear of [{}, { gearRetractable: false, gearDownLocked: false }]) {
		const controller = create();
		approach(controller);
		const before = controller.snapshot().messages.length;
		controller.update(
			1,
			observation(
				{ x: 9000, z: 0, y: 160 },
				{
					onGround: false,
					airTime: 10,
					...gear,
				},
			),
		);
		assert.equal(controller.snapshot().messages.length, before);
	}
	const controller = create();
	approach(controller);
	act(controller, "request-landing");
	const instruction = controller.snapshot().latestInstruction;
	controller.update(
		1,
		observation(
			{ x: 9000, z: 0, y: 160 },
			{
				onGround: false,
				airTime: 10,
				gearRetractable: true,
				gearDownLocked: false,
			},
		),
	);
	assert.equal(controller.snapshot().latestInstruction, instruction);
	assert.ok(action(controller, "readback"));
});
