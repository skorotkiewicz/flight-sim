import assert from "node:assert/strict";
import test from "node:test";
import {
	airportToWorld,
	formatRunwayNumber,
	getAirportLayout,
	worldToAirport,
} from "../src/game/flight/airport-layout.js";

const airport = {
	x: 100,
	z: 200,
	height: 30,
	heading: Math.PI / 2,
	dirX: 0,
	dirZ: 1,
	width: 60,
	pavedWidth: 30,
	paved: 900,
};

test("rotated airport transforms retain along/across and airport elevation", () => {
	assert.deepEqual(airportToWorld(airport, -50, 54), { x: 46, y: 30, z: 150 });
	assert.deepEqual(worldToAirport(airport, { x: 46, z: 150 }), {
		along: -50,
		across: 54,
	});
});

test("runway numbers follow compass headings and reciprocal ends", () => {
	for (const [dx, dz, want] of [
		[0, -1, "36"],
		[1, 0, "09"],
		[0, 1, "18"],
		[-1, 0, "27"],
	])
		assert.equal(formatRunwayNumber(dx, dz), want);
});

test("parking and taxi hold stay on apron/connector until separate runway entry", () => {
	for (const direction of [
		{ dx: 0, dz: 1 },
		{ dx: 0, dz: -1 },
	]) {
		const layout = getAirportLayout(airport, direction);
		assert.deepEqual(layout.parking, { x: 46, y: 30, z: 150 });
		assert.deepEqual(layout.parkingHeading, { dx: 1, dz: 0 });
		assert.ok(worldToAirport(airport, layout.holding).across > 30);
		for (const point of layout.taxiPath) {
			const local = worldToAirport(airport, point);
			assert.equal(local.along, -50);
			assert.ok(local.across > 15);
		}
		assert.deepEqual(worldToAirport(airport, layout.entry), {
			along: -50,
			across: 0,
		});
		assert.equal(
			worldToAirport(airport, layout.lineup).along,
			direction.dz > 0 ? -430 : 430,
		);
		assert.deepEqual(layout.runway, {
			...direction,
			number: direction.dz > 0 ? "18" : "36",
			heading: direction.dz > 0 ? 180 : 0,
		});
		assert.deepEqual(layout.lineupPath.at(-1), layout.lineup);
		assert.deepEqual(layout.vacatePath.at(-1), layout.parking);
	}
});

test("stand leaves aircraft clearance from apron edges and hangars", () => {
	const parking = worldToAirport(
		airport,
		getAirportLayout(airport, { dx: 0, dz: 1 }).parking,
	);
	// A 20 m aircraft envelope fits inside the existing 110 by 32 m apron.
	assert.ok(parking.along - 10 >= -105 && parking.along + 10 <= 5);
	assert.ok(parking.across - 10 >= 38 && parking.across + 10 <= 70);
});
