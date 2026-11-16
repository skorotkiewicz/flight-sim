function airportToWorld(airport, along, across) {
	return {
		x: airport.x + airport.dirX * along - airport.dirZ * across,
		y: airport.height,
		z: airport.z + airport.dirZ * along + airport.dirX * across,
	};
}

function worldToAirport(airport, position) {
	const x = position.x - airport.x;
	const z = position.z - airport.z;
	return {
		along: x * airport.dirX + z * airport.dirZ || 0,
		across: -x * airport.dirZ + z * airport.dirX || 0,
	};
}

function formatRunwayNumber(dx, dz) {
	const heading = ((Math.atan2(dx, -dz) * 180) / Math.PI + 360) % 360;
	return String(Math.round(heading / 10) % 36 || 36).padStart(2, "0");
}

function getAirportLayout(airport, direction) {
	const sign =
		direction.dx * airport.dirX + direction.dz * airport.dirZ >= 0 ? 1 : -1;
	const dx = airport.dirX * sign || 0;
	const dz = airport.dirZ * sign || 0;
	const parking = airportToWorld(airport, -50, airport.width / 2 + 24);
	// Keep the entire aircraft clear of pavement until runway entry is read back.
	const holding = airportToWorld(airport, -50, airport.pavedWidth / 2 + 20);
	const entry = airportToWorld(airport, -50, 0);
	const lineup = airportToWorld(airport, -sign * (airport.paved / 2 - 20), 0);
	return {
		parking,
		parkingHeading: { dx: airport.dirZ, dz: -airport.dirX || 0 },
		holding,
		entry,
		lineup,
		exit: holding,
		runway: {
			dx,
			dz,
			number: formatRunwayNumber(dx, dz),
			heading: ((Math.atan2(dx, -dz) * 180) / Math.PI + 360) % 360,
		},
		taxiPath: [parking, holding],
		lineupPath: [holding, entry, lineup],
		vacatePath: [entry, holding, parking],
	};
}

export { airportToWorld, formatRunwayNumber, getAirportLayout, worldToAirport };
