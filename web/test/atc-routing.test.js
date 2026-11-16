import assert from "node:assert/strict";
import test from "node:test";
import {
	planAtcArrivalRoute,
	planAtcDepartureRoute,
	planAtcFlightRoute,
	RouteTracker,
	sampleRoutePosition,
} from "../src/game/world/mission.js";
import {
	createSeededRandom,
	hashSeedIntegers,
} from "../src/game/world/noise.js";
import { Terrain } from "../src/game/world/terrain.js";

const field = (x, z = 0) => ({
	x,
	z,
	height: 20,
	heading: 0,
	dirX: 1,
	dirZ: 0,
	width: 60,
	pavedWidth: 30,
	paved: 900,
});
const flat = { height: () => 20 };
function assertSafe(route) {
	assert.ok(route);
	assert.ok(route.climb <= 0.1 + 1e-10, `climb ${route.climb}`);
	assert.ok(route.glide <= 0.1 + 1e-10, `glide ${route.glide}`);
	assert.ok(route.pts.every((point) => Number.isFinite(point.y)));
}

test("ATC runway assignment opposes wind travel at both ends", () => {
	for (const sign of [-1, 1]) {
		const route = planAtcFlightRoute(
			flat,
			field(0),
			field(6000),
			{ x: sign * 8, z: 0 },
			700,
		);
		assertSafe(route);
		assert.equal(route.depart.dx, -sign);
		assert.equal(route.land.dx, -sign);
	}
});

test("terrain fallback selects reciprocal and leaves measurable tailwind", () => {
	const terrain = {
		height: (x, z) => (x > 4800 && x < 5500 && Math.abs(z) < 250 ? 600 : 20),
	};
	const route = planAtcFlightRoute(
		terrain,
		field(0),
		field(6000),
		{ x: -8, z: 0 },
		700,
	);
	assertSafe(route);
	assert.equal(route.land.dx, -1);
	assert.equal(route.land.dx * -8, 8);
});

test("unsafe approaches have no ATC clearance", () => {
	const terrain = {
		height: (x, z) =>
			Math.abs(x - 6000) > 451 && Math.abs(x - 6000) < 1300 && Math.abs(z) < 250
				? 1000
				: 20,
	};
	assert.equal(
		planAtcFlightRoute(terrain, field(0), field(6000), { x: 8, z: 0 }, 700),
		null,
	);
});

test("airborne arrival starts at actual aircraft pose and works with guide tracker", () => {
	const position = { x: -5000, y: 300, z: 1200 };
	const route = planAtcArrivalRoute(
		flat,
		position,
		{ x: 1, z: 0 },
		field(0),
		{ x: -8, z: 0 },
		700,
	);
	assertSafe(route);
	assert.deepEqual(route.pts[0], { ...position, s: 0 });
	assert.ok(route.pts[1].x > position.x);
	assert.equal(route.land.dx, 1);
	const tracker = new RouteTracker(route);
	tracker.update(position.x, position.y, position.z);
	assert.equal(tracker.progress, 0);
	assert.deepEqual(sampleRoutePosition(route, 0, {}), position);
	for (const point of route.pts)
		assert.ok(point.y >= flat.height(point.x, point.z));
});

test("arrival rejects terrain above aircraft instead of inventing a safe altitude", () => {
	assert.equal(
		planAtcArrivalRoute(
			{ height: () => 1000 },
			{ x: -5000, y: 50, z: 0 },
			{ x: 1, z: 0 },
			field(0),
			{ x: -8, z: 0 },
			700,
		),
		null,
	);
});

test("seed 3 destination 2 never receives an unsafe clearance", () => {
	const terrain = new Terrain(3);
	for (const wind of [
		{ x: 8, z: 3 },
		{ x: -8, z: -3 },
	]) {
		const route = planAtcFlightRoute(
			terrain,
			terrain.airfields[0],
			terrain.airfields[2],
			wind,
			700,
		);
		if (route) assertSafe(route);
	}
});

test("free flight departure prefers upwind with a threshold and liftoff profile", () => {
	for (const sign of [-1, 1]) {
		const route = planAtcDepartureRoute(flat, field(0), { x: sign * 8, z: 0 });
		assertSafe(route);
		assert.equal(route.departureOnly, true);
		assert.equal(route.depart.dx, -sign);
		assert.equal(route.pts[0].x, sign * 430);
		assert.equal(route.pts[0].y, 22.5);
		assert.ok(route.length >= 3000);
		assert.ok(
			route.pts.some((point) => point.s === route.sLift && point.y === 22.5),
		);
		assert.ok(route.pts.at(-1).y > 100);
		for (let index = 1; index < route.pts.length; index++) {
			const previous = route.pts[index - 1];
			const point = route.pts[index];
			assert.ok(
				Math.abs((point.y - previous.y) / (point.s - previous.s)) <=
					0.1 + 1e-10,
			);
		}
	}
});

test("free flight departure rejects both unsafe ends and samples the outbound corridor", () => {
	const unsafe = { height: (x) => (Math.abs(x) > 900 ? 1000 : 20) };
	assert.equal(planAtcDepartureRoute(unsafe, field(0), { x: 8, z: 0 }), null);
	const sidePeak = {
		height: (x, z) => (x > 800 && x < 1400 && z > 80 ? 600 : 20),
	};
	const route = planAtcDepartureRoute(sidePeak, field(0), { x: -8, z: 0 });
	assertSafe(route);
	assert.equal(route.depart.dx, -1);
});

test("seed 1 free flight departure rejects the steep upwind side", () => {
	const terrain = new Terrain(1);
	const rng = createSeededRandom(hashSeedIntegers(1, 2024));
	rng(); // World time selection.
	rng(); // Cloud cover.
	const angle = rng() * Math.PI * 2;
	const speed = 1.5 + rng() * 3.5;
	const wind = { x: Math.cos(angle) * speed, z: Math.sin(angle) * speed };
	const route = planAtcDepartureRoute(terrain, terrain.airfields[0], wind);
	assertSafe(route);
	assert.ok(
		route.depart.dx * wind.x + route.depart.dz * wind.z > 0,
		"terrain requires the reciprocal tailwind departure",
	);
});
