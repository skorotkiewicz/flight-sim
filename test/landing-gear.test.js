import assert from "node:assert/strict";
import test from "node:test";
import { Vector3 } from "../src/game/core/three.js";
import {
	createFlightInput,
	DEFAULT_FLIGHT_SPEC,
	FlightState,
	stepFlight,
} from "../src/game/flight/flight.js";
import {
	buildFlightContacts,
	buildFlightSpec,
} from "../src/game/plane/planemodels.js";

const spec = { ...DEFAULT_FLIGHT_SPEC, retractableGear: true, gearDrag: 0.006 };
const world = { wind: new Vector3(), groundHeight: () => 0 };
const contacts = {
	wheels: [new Vector3(-0.9, -1.36, 0), new Vector3(0.9, -1.36, 0)],
	third: new Vector3(0, -1.36, -2),
	tricycle: true,
	crash: [{ p: new Vector3(0, -0.65, 0), kind: "belly" }],
};

function aircraft(height, gearPosition = 1) {
	const state = new FlightState();
	state.pos.y = height;
	state.gearPosition = gearPosition;
	state.gearTarget = gearPosition >= 1 ? 1 : 0;
	return state;
}

test("retracted gear reduces actual aerodynamic deceleration through force integration", () => {
	const down = aircraft(100, 1);
	const up = aircraft(100, 0);
	down.vel.z = up.vel.z = -50;
	stepFlight(down, spec, createFlightInput(), world, 0.1, contacts);
	stepFlight(up, spec, createFlightInput(), world, 0.1, contacts);
	// q=1500, area=21.5, removed cd=.006, mass=650, dt=.1.
	assert.ok(Math.abs(down.vel.z - up.vel.z - 0.02976923076923) < 1e-10);
});

test("gear travel advances with simulation steps and a zero step cannot jump velocity", () => {
	const state = aircraft(100);
	state.gearTarget = 0;
	state.vel.z = -50;
	stepFlight(state, spec, createFlightInput(), world, 0, contacts);
	assert.equal(state.vel.z, -50);
	assert.equal(state.gearPosition, 1);
	stepFlight(state, spec, createFlightInput(), world, 0.75, contacts);
	assert.equal(state.gearPosition, 0.75);
});

test("unlocked gear cannot support wheels or apply wheel brakes", () => {
	for (const extension of [0, 0.5, 0.998]) {
		const coast = aircraft(1.3, extension);
		const brake = aircraft(1.3, extension);
		coast.vel.z = brake.vel.z = -10;
		stepFlight(coast, spec, createFlightInput(), world, 0.01, contacts);
		stepFlight(
			brake,
			spec,
			{ ...createFlightInput(), brake: true },
			world,
			0.01,
			contacts,
		);
		assert.equal(coast.wheels, 0);
		assert.equal(coast.onGround, false);
		assert.equal(coast.vel.z, brake.vel.z);
		assert.ok(coast.vel.y < 0);
	}
});

test("down and locked gear retains wheel support, braking, and ordinary touchdown", () => {
	const coast = aircraft(1.3);
	const brake = aircraft(1.3);
	coast.vel.z = brake.vel.z = -10;
	coast.airTime = brake.airTime = 2;
	const event = stepFlight(
		coast,
		spec,
		createFlightInput(),
		world,
		0.01,
		contacts,
	);
	stepFlight(
		brake,
		spec,
		{ ...createFlightInput(), brake: true },
		world,
		0.01,
		contacts,
	);
	assert.equal(coast.wheels, 3);
	assert.equal(coast.onGround, true);
	assert.ok(brake.vel.z > coast.vel.z);
	assert.ok(event.touchdown);
	assert.notEqual(event.touchdown.gearUp, true);
});

test("belly contact supports and slows a surviving skid without counting wheels", () => {
	const state = aircraft(0.6, 0);
	state.airTime = 2;
	state.lastSink = -1;
	state.vel.set(0, -1, -8);
	const event = stepFlight(
		state,
		spec,
		createFlightInput(),
		world,
		0.01,
		contacts,
	);
	assert.equal(event.crashed, null);
	assert.equal(event.scrape, true);
	assert.equal(event.touchdown?.gearUp, true);
	assert.equal(event.touchdown.sink, 1);
	assert.equal(state.wheels, 0);
	assert.equal(state.onGround, true);
	assert.equal(state.airTime, 0);
	assert.equal(state.groundTime, 0.01);
	assert.ok(state.vel.y > -1);
	assert.ok(state.vel.z > -8);
	const next = stepFlight(
		state,
		spec,
		createFlightInput(),
		world,
		0.01,
		contacts,
	);
	assert.equal(next.touchdown, null);
	assert.equal(state.groundTime, 0.02);
});

test("a hard or fast belly impact crashes as a gear-up landing", () => {
	for (const velocity of [
		[0, -10, -8],
		[0, -1, -60],
	]) {
		const state = aircraft(0.6, 0);
		state.vel.set(...velocity);
		assert.equal(
			stepFlight(state, spec, createFlightInput(), world, 0.01, contacts)
				.crashed,
			"Gear-up landing",
		);
	}
});

test("legacy specs retain fixed wheel support even with stray gear state", () => {
	const state = aircraft(1.3, 0);
	stepFlight(
		state,
		DEFAULT_FLIGHT_SPEC,
		createFlightInput(),
		world,
		0.01,
		contacts,
	);
	assert.equal(state.wheels, 3);
	assert.equal(state.onGround, true);
});

test("gear controls reverse continuous travel, freeze on pause, and reach both locks", async () => {
	const gear = await import("../src/game/flight/landing-gear.js");
	const state = new FlightState();
	state.pos.y = 100;
	assert.equal(gear.getGearStatus(state, spec), "DOWN");
	assert.equal(gear.toggleLandingGear(state, spec, 0), "retracting");
	gear.updateLandingGear(state, spec, 0.75);
	assert.equal(state.gearPosition, 0.75);
	assert.equal(gear.getGearStatus(state, spec), "TRANSIT");
	gear.updateLandingGear(state, spec, 0);
	assert.equal(state.gearPosition, 0.75);
	assert.equal(gear.toggleLandingGear(state, spec, 0), "extending");
	assert.equal(state.gearPosition, 0.75);
	gear.updateLandingGear(state, spec, 0.75);
	assert.equal(gear.getGearStatus(state, spec), "DOWN");
	gear.toggleLandingGear(state, spec, 0);
	gear.updateLandingGear(state, spec, 3);
	assert.equal(state.gearPosition, 0);
	assert.equal(gear.getGearStatus(state, spec), "UP");
	gear.toggleLandingGear(state, spec, 0);
	gear.updateLandingGear(state, spec, 30);
	assert.equal(state.gearPosition, 1);
});

test("retraction guards parked starts, weight on wheels, and body ground contact but permits extension", async () => {
	const gear = await import("../src/game/flight/landing-gear.js");
	for (const setup of [
		{ height: 102.5, ground: 100 },
		{ height: 100, ground: 0, wheels: 1 },
		{ height: 100, ground: 0, onGround: true },
	]) {
		const state = aircraft(setup.height);
		Object.assign(state, {
			wheels: setup.wheels ?? 0,
			onGround: setup.onGround ?? false,
		});
		assert.equal(
			gear.toggleLandingGear(state, spec, setup.ground),
			"ground-locked",
		);
		assert.equal(state.gearTarget, 1);
		state.gearTarget = 0;
		state.gearPosition = 0.5;
		assert.equal(
			gear.toggleLandingGear(state, spec, setup.ground),
			"extending",
		);
	}
	const airborne = aircraft(102.501);
	assert.equal(gear.toggleLandingGear(airborne, spec, 100), "retracting");
});

test("fixed and legacy gear ignore toggles and keep their original drag", async () => {
	const gear = await import("../src/game/flight/landing-gear.js");
	for (const fixed of [
		DEFAULT_FLIGHT_SPEC,
		{ ...spec, retractableGear: false },
	]) {
		const state = aircraft(100, 0);
		assert.equal(gear.getGearStatus(state, fixed), "FIXED");
		assert.equal(gear.toggleLandingGear(state, fixed, 0), "fixed");
		assert.equal(gear.isGearDownLocked(state, fixed), true);
		assert.equal(gear.getGearParasiteDrag(state, fixed), 0.035);
	}
	assert.equal(gear.isGearDownLocked(aircraft(100, 0.999), spec), true);
	assert.equal(gear.isGearDownLocked(aircraft(100, 0.998), spec), false);
	assert.equal(gear.getGearParasiteDrag(aircraft(100, 0.5), spec), 0.032);
});

test("both retractable aircraft can survive a slow skid and remain grounded after stopping", () => {
	for (const style of ["jet", "turboprop"]) {
		const loadout = { style, wheels: "medium" };
		const actualSpec = buildFlightSpec(loadout);
		const actualContacts = buildFlightContacts(loadout);
		const state = aircraft(0.6, 0);
		state.vel.set(0, -1, -8);
		state.airTime = 2;
		let touchdowns = 0;
		for (let tick = 0; tick < 900; tick++) {
			const event = stepFlight(
				state,
				actualSpec,
				createFlightInput(),
				world,
				1 / 120,
				actualContacts,
			);
			assert.equal(event.crashed, null, style);
			if (event.touchdown) {
				touchdowns++;
				assert.equal(event.touchdown.gearUp, true);
			}
		}
		assert.equal(touchdowns, 1, style);
		assert.equal(state.wheels, 0, style);
		assert.equal(state.onGround, true, style);
		assert.ok(state.vel.length() < 2.5, style);
		assert.ok(state.groundTime > 1.2, style);
	}
});
