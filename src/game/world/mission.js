var ROUTE_GLIDE_SLOPE = Math.tan((Math.PI * 4) / 180);
var ROUTE_CLIMB_SLOPE = 0.08;
var ROUTE_SAMPLE_SPACING = 20;
var ROUTE_LIFTOFF_DISTANCE = 350;
var ROUTE_DEPARTURE_EXTENSION = 800;
var ROUTE_FINAL_APPROACH_LENGTH = 3000;
var ROUTE_TOUCHDOWN_OFFSET = 150;
var ROUTE_LANDING_ROLLOUT = 350;
var ROUTE_RUNWAY_ALTITUDE_OFFSET = 2.5;
var ROUTE_PREFERRED_TERRAIN_CLEARANCE = 120;
var ROUTE_MINIMUM_CLEARANCE_CAP = 60;
var ROUTE_CRUISE_HEIGHT_OFFSET = 200;
function chooseUpwindRunwayDirection(e, t) {
	if (t.x * e.dirX + t.z * e.dirZ > 0) {
		return {
			dx: -e.dirX,
			dz: -e.dirZ,
		};
	} else {
		return {
			dx: e.dirX,
			dz: e.dirZ,
		};
	}
}
var COMPASS_DIRECTION_NAMES = [
	`North`,
	`Northeast`,
	`East`,
	`Southeast`,
	`South`,
	`Southwest`,
	`West`,
	`Northwest`,
];
function bearingBetweenPoints(e, t, n, r) {
	return ((Math.atan2(n - e, -(r - t)) * 180) / Math.PI + 360) % 360;
}
function nameAirfields(e) {
	let t = e[0];
	let n = e.map((e, n) => {
		if (n === 0) {
			return `Home Field`;
		}
		let r = bearingBetweenPoints(t.x, t.z, e.x, e.z);
		return `${COMPASS_DIRECTION_NAMES[Math.round(r / 45) % 8]} Field`;
	});
	for (let r = 1; r < n.length; r++) {
		for (let i = r + 1; i < n.length; i++) {
			if (n[r] === n[i]) {
				if (
					Math.hypot(e[r].x - t.x, e[r].z - t.z) >
					Math.hypot(e[i].x - t.x, e[i].z - t.z)
				) {
					n[r] = `Far ${n[r]}`;
				} else {
					n[i] = `Far ${n[i]}`;
				}
			}
		}
	}
	return n;
}
var PLANE_ROUTE_TURN_RADII = {
	biplane: 700,
	turboprop: 1000,
	jet: 1500,
};
var PLANE_ROUTE_CRUISE_SPEEDS = {
	biplane: 44,
	turboprop: 72,
	jet: 115,
};
var ROUTE_FULL_TURN = Math.PI * 2;
var normalizeRouteAngle = (e) =>
	((e % ROUTE_FULL_TURN) + ROUTE_FULL_TURN) % ROUTE_FULL_TURN;
function solveDubinsCandidates(e, t, n) {
	let r = Math.sin(e);
	let i = Math.sin(t);
	let a = Math.cos(e);
	let o = Math.cos(t);
	let s = Math.cos(e - t);
	let c = [];
	{
		let l = 2 + n * n - s * 2 + n * 2 * (r - i);
		if (l >= 0) {
			let s = Math.atan2(o - a, n + r - i);
			c.push([
				[`L`, `S`, `L`],
				normalizeRouteAngle(-e + s),
				Math.sqrt(l),
				normalizeRouteAngle(t - s),
			]);
		}
	}
	{
		let l = 2 + n * n - s * 2 + n * 2 * (i - r);
		if (l >= 0) {
			let s = Math.atan2(a - o, n - r + i);
			c.push([
				[`R`, `S`, `R`],
				normalizeRouteAngle(e - s),
				Math.sqrt(l),
				normalizeRouteAngle(-t + s),
			]);
		}
	}
	{
		let l = -2 + n * n + s * 2 + n * 2 * (r + i);
		if (l >= 0) {
			let s = Math.sqrt(l);
			let u = Math.atan2(-a - o, n + r + i) - Math.atan2(-2, s);
			c.push([
				[`L`, `S`, `R`],
				normalizeRouteAngle(-e + u),
				s,
				normalizeRouteAngle(-t + u),
			]);
		}
	}
	{
		let l = n * n - 2 + s * 2 - n * 2 * (r + i);
		if (l >= 0) {
			let s = Math.sqrt(l);
			let u = Math.atan2(a + o, n - r - i) - Math.atan2(2, s);
			c.push([
				[`R`, `S`, `L`],
				normalizeRouteAngle(e - u),
				s,
				normalizeRouteAngle(t - u),
			]);
		}
	}
	return c;
}
function sampleDubinsSegments(e, t, n, r, i, a) {
	let { x: o, z: s, h: c } = e;
	for (let e = 0; e < 3; e++) {
		let l = n[e] * r;
		let u = Math.max(1, Math.ceil(l / i));
		let d = l / u;
		for (let n = 0; n < u; n++) {
			if (t[e] === `S`) {
				o += Math.cos(c) * d;
				s += Math.sin(c) * d;
			} else {
				let n = (d / r) * (t[e] === `L` ? 1 : -1);
				let i = r * 2 * Math.sin(Math.abs(n) / 2);
				let a = c + n / 2;
				o += Math.cos(a) * i;
				s += Math.sin(a) * i;
				c += n;
			}
			a?.(o, s);
		}
	}
	return {
		x: o,
		z: s,
		h: c,
	};
}
function buildDubinsPath(e, t, n, r = ROUTE_SAMPLE_SPACING) {
	let i = t.x - e.x;
	let a = t.z - e.z;
	let o = Math.hypot(i, a) / n;
	let s = Math.atan2(a, i);
	let c = normalizeRouteAngle(e.h - s);
	let l = normalizeRouteAngle(t.h - s);
	let u = null;
	for (let [r, i, a, s] of solveDubinsCandidates(c, l, o)) {
		let o = i + a + s;
		if (u && o >= u.len) {
			continue;
		}
		let c = sampleDubinsSegments(e, r, [i, a, s], n, 50);
		if (
			!(Math.hypot(c.x - t.x, c.z - t.z) > 2) &&
			!(Math.abs(Math.sin((c.h - t.h) / 2)) > 0.01)
		) {
			u = {
				word: r,
				lens: [i, a, s],
				len: o,
			};
		}
	}
	let d = [];
	if (!u) {
		let t = Math.max(1, Math.ceil(Math.hypot(i, a) / r));
		for (let n = 1; n <= t; n++) {
			d.push({
				x: e.x + (i * n) / t,
				z: e.z + (a * n) / t,
			});
		}
		return d;
	}
	sampleDubinsSegments(e, u.word, u.lens, n, r, (e, t) =>
		d.push({
			x: e,
			z: t,
		}),
	);
	d[d.length - 1] = {
		x: t.x,
		z: t.z,
	};
	return d;
}
function planFlightRoute(e, t, n, r, i = 700) {
	let a = chooseUpwindRunwayDirection(t, r);
	let o = chooseUpwindRunwayDirection(n, r);
	let s = (e) => ({
		dx: -e.dx,
		dz: -e.dz,
	});
	let c = Math.hypot(r.x, r.z) * ROUTE_TAILWIND_PENALTY;
	let l = null;
	for (let [r, u] of [
		[a, 0],
		[s(a), c],
	]) {
		for (let [a, d] of [
			[o, 0],
			[s(o), c],
		]) {
			for (let o of [ROUTE_DEPARTURE_EXTENSION, 300]) {
				let s = buildRouteCandidate(e, t, n, r, a, o, i);
				let c =
					s.violation * 40000 +
					(Math.max(0, s.r.climb - 0.1) + Math.max(0, s.r.glide - 0.1)) *
						400000;
				let f =
					s.r.length + u + d + (o === ROUTE_DEPARTURE_EXTENSION ? 0 : 300) + c;
				if (!l || f < l.score) {
					l = {
						r: s.r,
						score: f,
					};
				}
			}
		}
	}
	return l.r;
}
var ROUTE_TAILWIND_PENALTY = 1800;
// Clear only terrain-feasible candidates, preferring the fewest reciprocal ends.
function planAtcFlightRoute(terrain, from, to, wind, turnRadius = 700) {
	const departure = chooseUpwindRunwayDirection(from, wind);
	const arrival = chooseUpwindRunwayDirection(to, wind);
	const opposite = ({ dx, dz }) => ({ dx: -dx, dz: -dz });
	const assignments = [
		[[departure, arrival]],
		[
			[departure, opposite(arrival)],
			[opposite(departure), arrival],
		],
		[[opposite(departure), opposite(arrival)]],
	];
	for (const group of assignments) {
		let best = null;
		for (const [depart, land] of group) {
			for (const extension of [ROUTE_DEPARTURE_EXTENSION, 300]) {
				const { r: route } = buildRouteCandidate(
					terrain,
					from,
					to,
					depart,
					land,
					extension,
					turnRadius,
				);
				if (
					route.climb <= 0.1 &&
					route.glide <= 0.1 &&
					(!best || route.length < best.length)
				)
					best = route;
			}
		}
		if (best) return best;
	}
	return null;
}

function planAtcArrivalRoute(
	terrain,
	position,
	forward,
	target,
	wind,
	turnRadius = 700,
) {
	const upwind = chooseUpwindRunwayDirection(target, wind);
	for (const land of [upwind, { dx: -upwind.dx, dz: -upwind.dz }]) {
		const route = buildAtcArrivalCandidate(
			terrain,
			position,
			forward,
			target,
			land,
			turnRadius,
		);
		if (route) return route;
	}
	return null;
}

function planAtcDepartureRoute(terrain, airport, wind, turnRadius = 700) {
	const upwind = chooseUpwindRunwayDirection(airport, wind);
	for (const depart of [upwind, { dx: -upwind.dx, dz: -upwind.dz }]) {
		const start = {
			x: airport.x - depart.dx * (airport.paved / 2 - 20),
			z: airport.z - depart.dz * (airport.paved / 2 - 20),
		};
		const runwayY = airport.height + ROUTE_RUNWAY_ALTITUDE_OFFSET;
		const runwayEnd = airport.paved - 20;
		const length = runwayEnd + 3000;
		const count = Math.ceil(length / ROUTE_SAMPLE_SPACING);
		const points = [];
		let feasible = true;
		for (let index = 0; index <= count; index++) {
			const s = Math.min(length, index * ROUTE_SAMPLE_SPACING);
			points.push({
				x: start.x + depart.dx * s,
				z: start.z + depart.dz * s,
				s,
			});
		}
		// Include liftoff exactly even when the usual sample spacing misses it.
		points.push({
			x: start.x + depart.dx * ROUTE_LIFTOFF_DISTANCE,
			z: start.z + depart.dz * ROUTE_LIFTOFF_DISTANCE,
			s: ROUTE_LIFTOFF_DISTANCE,
		});
		points.sort((a, b) => a.s - b.s);
		for (const point of points) {
			const ceiling =
				runwayY + Math.max(0, point.s - ROUTE_LIFTOFF_DISTANCE) * 0.1;
			let ground = Math.max(0, terrain.height(point.x, point.z));
			if (point.s > runwayEnd) {
				for (const offset of [-200, -100, 100, 200])
					ground = Math.max(
						ground,
						terrain.height(
							point.x - depart.dz * offset,
							point.z + depart.dx * offset,
						),
					);
			}
			const clearance = Math.min(
				ROUTE_MINIMUM_CLEARANCE_CAP,
				Math.max(0, point.s - runwayEnd) * 0.048,
			);
			if (ground + clearance > ceiling + 1e-8) {
				feasible = false;
				break;
			}
			// Climb steadily into a terrain-safe outbound segment, without a fake landing.
			point.y = ceiling;
		}
		if (!feasible) continue;
		const end = points.at(-1);
		return {
			from: airport,
			to: { x: end.x, z: end.z, height: end.y },
			pts: points,
			length,
			depart,
			land: depart,
			sLift: ROUTE_LIFTOFF_DISTANCE,
			sAim: length,
			sFinal: runwayEnd,
			turnRadius,
			maxAlt: end.y,
			climb: 0.1,
			glide: 0,
			departureOnly: true,
		};
	}
	return null;
}

function buildAtcArrivalCandidate(
	terrain,
	position,
	forward,
	target,
	land,
	turnRadius,
) {
	if (
		![position.x, position.y, position.z, forward.x, forward.z].every(
			Number.isFinite,
		) ||
		Math.hypot(forward.x, forward.z) === 0
	)
		return null;
	const touchdown = {
		x: target.x - land.dx * (target.paved / 2 - ROUTE_TOUCHDOWN_OFFSET),
		z: target.z - land.dz * (target.paved / 2 - ROUTE_TOUCHDOWN_OFFSET),
	};
	const final = {
		x: touchdown.x - land.dx * ROUTE_FINAL_APPROACH_LENGTH,
		z: touchdown.z - land.dz * ROUTE_FINAL_APPROACH_LENGTH,
		h: Math.atan2(land.dz, land.dx),
	};
	const points = [
		{ x: position.x, z: position.z },
		...buildDubinsPath(
			{ x: position.x, z: position.z, h: Math.atan2(forward.z, forward.x) },
			final,
			turnRadius,
		),
	];
	const finalIndex = points.length - 1;
	const appendLine = (start, distance) => {
		const count = Math.ceil(distance / ROUTE_SAMPLE_SPACING);
		for (let step = 1; step <= count; step++)
			points.push({
				x: start.x + (land.dx * distance * step) / count,
				z: start.z + (land.dz * distance * step) / count,
			});
	};
	appendLine(final, ROUTE_FINAL_APPROACH_LENGTH);
	const aimIndex = points.length - 1;
	appendLine(touchdown, ROUTE_LANDING_ROLLOUT);
	const distances = [0];
	for (let index = 1; index < points.length; index++)
		distances.push(
			distances[index - 1] +
				Math.hypot(
					points[index].x - points[index - 1].x,
					points[index].z - points[index - 1].z,
				),
		);
	const aim = distances[aimIndex];
	const endY = target.height + ROUTE_RUNWAY_ALTITUDE_OFFSET;
	const minimum = [];
	const preferred = [];
	for (let index = 0; index < points.length; index++) {
		const point = points[index];
		const ground = Math.max(0, terrain.height(point.x, point.z));
		const remaining = Math.max(0, aim - distances[index]);
		const clearance = Math.max(
			0,
			Math.min(
				ROUTE_MINIMUM_CLEARANCE_CAP,
				distances[index] * 0.048,
				(remaining - ROUTE_TOUCHDOWN_OFFSET) * 0.04,
			),
		);
		minimum.push(ground + clearance);
		const next = points[Math.min(points.length - 1, index + 1)];
		const previous = points[Math.max(0, index - 1)];
		const dx = next.x - previous.x;
		const dz = next.z - previous.z;
		const length = Math.hypot(dx, dz) || 1;
		let corridor = ground;
		for (const offset of [-200, -100, 100, 200])
			corridor = Math.max(
				corridor,
				terrain.height(
					point.x - (dz / length) * offset,
					point.z + (dx / length) * offset,
				),
			);
		preferred.push(
			Math.max(
				corridor + ROUTE_PREFERRED_TERRAIN_CLEARANCE,
				target.height + ROUTE_CRUISE_HEIGHT_OFFSET,
			),
		);
	}
	minimum[0] = Math.max(minimum[0], position.y);
	for (let index = aimIndex; index < points.length; index++)
		minimum[index] = Math.max(minimum[index], endY);
	// Envelopes enforce a 0.1 slope between every sampled pair, including terrain peaks.
	const envelope = (values) => {
		const result = [...values];
		for (let index = result.length - 2; index >= 0; index--)
			result[index] = Math.max(
				result[index],
				result[index + 1] - 0.1 * (distances[index + 1] - distances[index]),
			);
		for (let index = 1; index < result.length; index++)
			result[index] = Math.max(
				result[index],
				result[index - 1] - 0.1 * (distances[index] - distances[index - 1]),
			);
		return result;
	};
	const floor = envelope(minimum);
	if (
		floor[0] > position.y + 1e-8 ||
		floor[aimIndex] > endY + 1e-8 ||
		minimum.slice(aimIndex).some((y) => y > endY + 1e-8)
	)
		return null;
	const desired = envelope(preferred);
	let climb = 0;
	let glide = 0;
	for (let index = 0; index < points.length; index++) {
		const s = distances[index];
		const y =
			index >= aimIndex
				? endY
				: Math.max(
						floor[index],
						Math.min(
							desired[index],
							position.y + 0.1 * s,
							endY + 0.1 * (aim - s),
						),
					);
		points[index] = { ...points[index], y, s };
		if (index > 0) {
			const slope = (y - points[index - 1].y) / (s - distances[index - 1] || 1);
			climb = Math.max(climb, slope);
			glide = Math.max(glide, -slope);
		}
	}
	// Floating point interpolation at caps can exceed the limit by roundoff only.
	if (climb > 0.1 + 1e-8 || glide > 0.1 + 1e-8) return null;
	return {
		from: position,
		to: target,
		pts: points,
		length: distances.at(-1),
		depart: {
			dx: forward.x / Math.hypot(forward.x, forward.z),
			dz: forward.z / Math.hypot(forward.x, forward.z),
		},
		land,
		sLift: 0,
		sAim: aim,
		sFinal: distances[finalIndex],
		turnRadius,
		maxAlt: Math.max(...points.map((point) => point.y)),
		climb: Math.min(climb, 0.1),
		glide: Math.min(glide, 0.1),
	};
}
function buildRouteCandidate(e, t, n, r, i, a, o) {
	let s = (t, n) => Math.max(e.height(t, n), 0);
	let c = [];
	let l = (e, t, n, r, i) => {
		let a = Math.max(
			1,
			Math.ceil(Math.hypot(n - e, r - t) / ROUTE_SAMPLE_SPACING),
		);
		for (let o = +!i; o <= a; o++) {
			c.push({
				x: e + ((n - e) * o) / a,
				z: t + ((r - t) * o) / a,
			});
		}
	};
	let u = t.paved / 2 - 20;
	let d = t.x - r.dx * u;
	let f = t.z - r.dz * u;
	let p = t.x + r.dx * (t.paved / 2 + a);
	let m = t.z + r.dz * (t.paved / 2 + a);
	let h = n.x - i.dx * (n.paved / 2);
	let g = n.z - i.dz * (n.paved / 2);
	let _ = h + i.dx * ROUTE_TOUCHDOWN_OFFSET;
	let v = g + i.dz * ROUTE_TOUCHDOWN_OFFSET;
	let y = _ - i.dx * ROUTE_FINAL_APPROACH_LENGTH;
	let b = v - i.dz * ROUTE_FINAL_APPROACH_LENGTH;
	l(d, f, p, m, true);
	for (let e of buildDubinsPath(
		{
			x: p,
			z: m,
			h: Math.atan2(r.dz, r.dx),
		},
		{
			x: y,
			z: b,
			h: Math.atan2(i.dz, i.dx),
		},
		o,
	)) {
		c.push(e);
	}
	let x = c.length - 1;
	l(y, b, _, v, false);
	let S = c.length - 1;
	l(
		_,
		v,
		_ + i.dx * ROUTE_LANDING_ROLLOUT,
		v + i.dz * ROUTE_LANDING_ROLLOUT,
		false,
	);
	let C = c.length;
	let w = new Float64Array(C);
	for (let e = 1; e < C; e++) {
		w[e] = w[e - 1] + Math.hypot(c[e].x - c[e - 1].x, c[e].z - c[e - 1].z);
	}
	let T = ROUTE_LIFTOFF_DISTANCE;
	let E = w[S];
	let D = w[x];
	let O = new Float64Array(C);
	let k = new Float64Array(C);
	for (let e = 0; e < C; e++) {
		let t = Math.min(C - 1, e + 1);
		let n = Math.max(0, e - 1);
		let r = c[t].x - c[n].x;
		let i = c[t].z - c[n].z;
		let a = Math.hypot(r, i) || 1;
		r /= a;
		i /= a;
		O[e] = s(c[e].x, c[e].z);
		let o = O[e];
		for (let t of [-200, -100, 100, 200]) {
			o = Math.max(o, s(c[e].x - i * t, c[e].z + r * t));
		}
		k[e] = o;
	}
	let A = Math.round(200 / ROUTE_SAMPLE_SPACING);
	let j = new Float64Array(C);
	for (let e = 0; e < C; e++) {
		let t = 0;
		for (let n = Math.max(0, e - A); n <= Math.min(C - 1, e + A); n++) {
			t = Math.max(t, k[n]);
		}
		j[e] = t;
	}
	let ee = t.height + ROUTE_RUNWAY_ALTITUDE_OFFSET;
	let te = n.height + ROUTE_RUNWAY_ALTITUDE_OFFSET;
	let M = u + t.paved / 2;
	let N = E - ROUTE_TOUCHDOWN_OFFSET;
	let P = Math.max(t.height, n.height) + ROUTE_CRUISE_HEIGHT_OFFSET;
	let ne = new Float64Array(C);
	let re = new Float64Array(C);
	for (let e = 0; e < C; e++) {
		if (w[e] <= T) {
			ne[e] = re[e] = ee;
		} else if (w[e] >= E) {
			ne[e] = re[e] = te;
		} else {
			let t =
				w[e] > M && w[e] < N
					? Math.min(
							ROUTE_MINIMUM_CLEARANCE_CAP,
							10 + (w[e] - M) * ROUTE_CLIMB_SLOPE * 0.6,
							10 + (N - w[e]) * ROUTE_GLIDE_SLOPE * 0.6,
						)
					: 0;
			ne[e] = O[e] + t;
			re[e] = Math.max(ne[e], j[e] + ROUTE_PREFERRED_TERRAIN_CLEARANCE, P);
		}
	}
	let ie = ROUTE_CLIMB_SLOPE;
	let ae = ROUTE_GLIDE_SLOPE;
	for (let e = 0; e < C; e++) {
		if (w[e] > 351) {
			ie = Math.max(ie, (ne[e] - ee) / (w[e] - T));
		}
		if (w[e] < E - 1) {
			ae = Math.max(ae, (ne[e] - te) / (E - w[e]));
		}
	}
	let oe = (e, t, n) => {
		let r = new Float64Array(C);
		let i = new Float64Array(C);
		r[C - 1] = e[C - 1];
		for (let n = C - 2; n >= 0; n--) {
			r[n] = Math.max(e[n], r[n + 1] - t * (w[n + 1] - w[n]));
		}
		i[0] = e[0];
		for (let t = 1; t < C; t++) {
			i[t] = Math.max(e[t], i[t - 1] - n * (w[t] - w[t - 1]));
		}
		for (let e = 0; e < C; e++) {
			r[e] = Math.max(r[e], i[e]);
		}
		return r;
	};
	let se = oe(ne, ie, ae);
	let F = oe(re, ROUTE_CLIMB_SLOPE, ROUTE_GLIDE_SLOPE);
	let ce = Math.round(300 / ROUTE_SAMPLE_SPACING);
	let le = [];
	let ue = 0;
	for (let e = 0; e < C; e++) {
		let t = 0;
		let n = 0;
		for (let r = Math.max(0, e - ce); r <= Math.min(C - 1, e + ce); r++) {
			t += F[r];
			n++;
		}
		let r = Math.max(F[e], t / n);
		let i = ee + Math.max(0, w[e] - T) * ie;
		let a = te + Math.max(0, E - w[e]) * ae;
		let o = Math.max(Math.min(r, i, a), se[e]);
		ue = Math.max(ue, o);
		le.push({
			x: c[e].x,
			y: o,
			z: c[e].z,
			s: w[e],
		});
	}
	let de =
		Math.max(0, ie - ROUTE_CLIMB_SLOPE) + Math.max(0, ae - ROUTE_GLIDE_SLOPE);
	return {
		r: {
			from: t,
			to: n,
			pts: le,
			length: w[C - 1],
			depart: r,
			land: i,
			sLift: T,
			sAim: E,
			sFinal: D,
			turnRadius: o,
			maxAlt: ue,
			climb: ie,
			glide: ae,
		},
		violation: de,
	};
}
function sampleRoutePosition(e, t, n) {
	let r = e.pts;
	if (t <= 0) {
		return Object.assign(n, {
			x: r[0].x,
			y: r[0].y,
			z: r[0].z,
		});
	}
	if (t >= e.length) {
		let e = r[r.length - 1];
		return Object.assign(n, {
			x: e.x,
			y: e.y,
			z: e.z,
		});
	}
	let i = 0;
	let a = r.length - 1;
	while (a - i > 1) {
		let e = (i + a) >> 1;
		if (r[e].s <= t) {
			i = e;
		} else {
			a = e;
		}
	}
	let o = r[i];
	let s = r[a];
	let c = (t - o.s) / (s.s - o.s || 1);
	n.x = o.x + (s.x - o.x) * c;
	n.y = o.y + (s.y - o.y) * c;
	n.z = o.z + (s.z - o.z) * c;
	return n;
}
var RouteTracker = class {
	route;
	idx = 0;
	progress = 0;
	lateral = 0;
	vertical = 0;
	constructor(e) {
		this.route = e;
	}
	update(e, t, n) {
		let r = this.route.pts;
		let i = (i, a) => {
			let o = -1;
			let s = Infinity;
			for (let c = Math.max(0, i); c <= Math.min(r.length - 1, a); c++) {
				let i = r[c];
				let a = (i.x - e) ** 2 + (i.z - n) ** 2 + ((i.y - t) * 2) ** 2;
				if (a < s) {
					s = a;
					o = c;
				}
			}
			return {
				best: o,
				bd: s,
			};
		};
		let a = i(this.idx - 5, this.idx + 150);
		if (a.bd > 2250000) {
			let e = i(this.idx - 5, r.length - 1);
			if (e.bd < a.bd) {
				a = e;
			}
		}
		if (a.best >= 0) {
			this.idx = a.best;
		}
		let o = r[this.idx];
		this.progress = o.s;
		this.lateral = Math.hypot(o.x - e, o.z - n);
		this.vertical = t - o.y;
	}
	onPath() {
		return this.lateral < 150 && Math.abs(this.vertical) < 70;
	}
};

export {
	bearingBetweenPoints,
	buildDubinsPath,
	buildRouteCandidate,
	COMPASS_DIRECTION_NAMES,
	chooseUpwindRunwayDirection,
	nameAirfields,
	normalizeRouteAngle,
	PLANE_ROUTE_CRUISE_SPEEDS,
	PLANE_ROUTE_TURN_RADII,
	planAtcArrivalRoute,
	planAtcDepartureRoute,
	planAtcFlightRoute,
	planFlightRoute,
	ROUTE_CLIMB_SLOPE,
	ROUTE_CRUISE_HEIGHT_OFFSET,
	ROUTE_DEPARTURE_EXTENSION,
	ROUTE_FINAL_APPROACH_LENGTH,
	ROUTE_FULL_TURN,
	ROUTE_GLIDE_SLOPE,
	ROUTE_LANDING_ROLLOUT,
	ROUTE_LIFTOFF_DISTANCE,
	ROUTE_MINIMUM_CLEARANCE_CAP,
	ROUTE_PREFERRED_TERRAIN_CLEARANCE,
	ROUTE_RUNWAY_ALTITUDE_OFFSET,
	ROUTE_SAMPLE_SPACING,
	ROUTE_TAILWIND_PENALTY,
	ROUTE_TOUCHDOWN_OFFSET,
	RouteTracker,
	sampleDubinsSegments,
	sampleRoutePosition,
	solveDubinsCandidates,
};
