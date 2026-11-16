import {
	BoxGeometry,
	CircleGeometry,
	Color,
	ConeGeometry,
	CylinderGeometry,
	Group,
	IcosahedronGeometry,
	MathUtils,
	Mesh,
	MeshBasicMaterial,
	Quaternion,
	Vector3,
} from "../core/three.js";
import {
	createFlightInput,
	DEFAULT_FLIGHT_SPEC,
	FLAP_DEFLECTION_RADIANS,
	FlightState,
} from "../flight/flight.js";
import {
	createOutlinedMesh,
	createTaperedFuselageGeometry,
	makeMesh,
	mergeParts,
} from "./meshkit.js";

var DEFAULT_PLANE_LOADOUT = {
	style: `biplane`,
	paint: `sunflower`,
	wheels: `medium`,
};
var PLANE_STYLES = [
	{
		id: `biplane`,
		name: `Biplane`,
		trait: `Wooden prop. Floaty, nimble, shortest takeoff`,
		icon: `🛩️`,
	},
	{
		id: `turboprop`,
		name: `Turboprop`,
		trait: `Turbo prop. Balanced speed and handling`,
		icon: `✈️`,
	},
	{
		id: `jet`,
		name: `Jet`,
		trait: `Jet engine. Very fast, slow to spool, lands hot`,
		icon: `🚀`,
	},
];
var PLANE_WHEEL_OPTIONS = [
	{
		id: `hard`,
		name: `Hard`,
		trait: `Quick on asphalt, bouncy landings`,
		icon: `⚫`,
	},
	{
		id: `medium`,
		name: `Medium`,
		trait: `All-rounder`,
		icon: `🛞`,
	},
	{
		id: `soft`,
		name: `Soft`,
		trait: `Forgiving landings, longer takeoff`,
		icon: `🎈`,
	},
];
var PLANE_PAINT_OPTIONS = [
	{
		id: `sunflower`,
		name: `Sunflower`,
		body: 15905076,
		accent: 2792847,
	},
	{
		id: `scarlet`,
		name: `Scarlet`,
		body: 14240317,
		accent: 2508371,
	},
	{
		id: `sky`,
		name: `Sky`,
		body: 4891615,
		accent: 15905076,
		stripe: 2051705,
	},
	{
		id: `teal`,
		name: `Teal`,
		body: 2792847,
		accent: 15167313,
	},
	{
		id: `meadow`,
		name: `Meadow`,
		body: 7061337,
		accent: 2508371,
	},
	{
		id: `plum`,
		name: `Plum`,
		body: 9329589,
		accent: 16241518,
	},
	{
		id: `snow`,
		name: `Snow`,
		body: 16052712,
		accent: 14240317,
		stripe: 4013893,
	},
	{
		id: `charcoal`,
		name: `Charcoal`,
		body: 4013893,
		accent: 15905076,
	},
];
var planePaintColor = new Color();
var planePaintWhite = new Color(16777215);
function lightenPlaneColor(e, t) {
	return planePaintColor.setHex(e).lerp(planePaintWhite, t).getHex();
}
function getPlaneLivery(e) {
	let t = PLANE_PAINT_OPTIONS.find((t) => t.id === e) ?? PLANE_PAINT_OPTIONS[0];
	if (t.id === `sunflower`) {
		return {
			body: 15905076,
			accent: 2792847,
			wing: 16241518,
			wingUnder: 15318869,
			emblemOuter: 2792847,
			emblemInner: 16774084,
			stripe: null,
		};
	} else {
		return {
			body: t.body,
			accent: t.accent,
			wing: lightenPlaneColor(t.body, 0.2),
			wingUnder: lightenPlaneColor(t.body, 0.08),
			emblemOuter: t.accent,
			emblemInner: 16774084,
			stripe: t.stripe ?? null,
		};
	}
}
var PLANE_MODELS = {
	biplane: {
		spec: {},
		retractableGear: false,
		gearDrag: 0,
		engine: `prop`,
		gear: `taildragger`,
		mains: [
			[-0.92, -1, -0.6],
			[0.92, -1, -0.6],
		],
		third: [0, -0.22, 3.85],
		engineMount: [0, 0.05, -2.9],
		eye: [0, 1.05, 0.05],
		crash: [
			{
				p: [-4, -0.45, -0.55],
				kind: `wing`,
			},
			{
				p: [4, -0.45, -0.55],
				kind: `wing`,
			},
			{
				p: [-4.3, 1.5, -1],
				kind: `wing`,
			},
			{
				p: [4.3, 1.5, -1],
				kind: `wing`,
			},
			{
				p: [0, 0.05, -3],
				kind: `nose`,
			},
			{
				p: [0, 1.65, -1],
				kind: `top`,
			},
			{
				p: [0, 1.2, 4.1],
				kind: `top`,
			},
		],
	},
	turboprop: {
		retractableGear: true,
		gearDrag: 0.006,
		spec: {
			mass: 1300,
			wingArea: 16,
			flapSpeed: 52,
			cl0: 0.15,
			clSlope: 5,
			stallAlpha: 0.24,
			cd0: 0.024,
			inducedK: 0.06,
			sideArea: 7,
			pitchAcc: 5.2,
			rollAcc: 8,
			yawAcc: 2.2,
			qRef: 1100,
			groundSteer: 1.4,
		},
		engine: `turbo`,
		gear: `tricycle`,
		mains: [
			[-1.35, -1.05, 0.35],
			[1.35, -1.05, 0.35],
		],
		third: [0, -1.05, -2.5],
		engineMount: [0, 0.05, -3.6],
		eye: [0, 1.02, -0.6],
		crash: [
			{
				p: [-4.9, -0.4, 0.1],
				kind: `wing`,
			},
			{
				p: [4.9, -0.4, 0.1],
				kind: `wing`,
			},
			{
				p: [0, 0, -3.6],
				kind: `nose`,
			},
			{
				p: [0, -0.35, 4],
				kind: `tail`,
			},
			{
				p: [0, 1.25, -0.3],
				kind: `top`,
			},
			{
				p: [0, 1.7, 4.3],
				kind: `top`,
			},
		],
	},
	jet: {
		retractableGear: true,
		gearDrag: 0.005,
		spec: {
			mass: 2500,
			wingArea: 22,
			flapSpeed: 65,
			cl0: 0.1,
			clSlope: 3.8,
			stallAlpha: 0.32,
			cd0: 0.02,
			inducedK: 0.08,
			sideArea: 9,
			pitchAcc: 6.2,
			rollAcc: 12,
			yawAcc: 2,
			rollDamp: 4.5,
			qRef: 1700,
			groundSteer: 1.2,
		},
		engine: `jet`,
		gear: `tricycle`,
		mains: [
			[-1.3, -0.9, 0.7],
			[1.3, -0.9, 0.7],
		],
		third: [0, -0.9, -2.9],
		engineMount: [0, 0.05, 4.75],
		eye: [0, 0.95, -2.36],
		crash: [
			{
				p: [-4.4, -0.2, 2],
				kind: `wing`,
			},
			{
				p: [4.4, -0.2, 2],
				kind: `wing`,
			},
			{
				p: [0, 0, -5.6],
				kind: `nose`,
			},
			{
				p: [0, -0.35, 4.6],
				kind: `tail`,
			},
			{
				p: [0, 1.2, -1.8],
				kind: `top`,
			},
			{
				p: [0, 2.2, 4.4],
				kind: `top`,
			},
		],
	},
};
var PLANE_ENGINE_SPECS = {
	prop: {
		thrustToWeight:
			DEFAULT_FLIGHT_SPEC.maxThrust / (DEFAULT_FLIGHT_SPEC.mass * 9.81),
		propVmax: 95,
		spoolRate: 1.6,
		massAdd: 0,
		propRadius: 1.3,
	},
	turbo: {
		thrustToWeight: 0.5,
		propVmax: 140,
		spoolRate: 0.9,
		massAdd: 120,
		propRadius: 1.15,
	},
	jet: {
		thrustToWeight: 0.55,
		propVmax: 200,
		spoolRate: 0.45,
		massAdd: 250,
		propRadius: 0,
	},
};
var PLANE_WHEEL_SPECS = {
	hard: {
		radius: 0.3,
		width: 0.14,
		gearKMul: 1.4,
		gearCMul: 0.9,
		rollFriction: 0.02,
		brakeFriction: 0.605,
		crashSpeed: 5,
		cd0Add: 0,
		gripPaved: 1,
		gripGrass: 0.75,
	},
	medium: {
		radius: 0.36,
		width: 0.17,
		gearKMul: 1,
		gearCMul: 1,
		rollFriction: 0.03,
		brakeFriction: 0.495,
		crashSpeed: 6,
		cd0Add: 0,
		gripPaved: 1,
		gripGrass: 1,
	},
	soft: {
		radius: 0.48,
		width: 0.3,
		gearKMul: 0.65,
		gearCMul: 1.35,
		rollFriction: 0.045,
		brakeFriction: 0.418,
		crashSpeed: 8,
		cd0Add: 0.002,
		gripPaved: 0.85,
		gripGrass: 1,
	},
};
function buildFlightSpec(e) {
	let t = PLANE_MODELS[e.style];
	let n = PLANE_ENGINE_SPECS[t.engine];
	let r = PLANE_WHEEL_SPECS[e.wheels];
	let i = {
		...DEFAULT_FLIGHT_SPEC,
		...t.spec,
	};
	i.mass += n.massAdd;
	let a = i.mass / DEFAULT_FLIGHT_SPEC.mass;
	i.inertiaPitch = DEFAULT_FLIGHT_SPEC.inertiaPitch * a;
	i.inertiaYaw = DEFAULT_FLIGHT_SPEC.inertiaYaw * a;
	i.inertiaRoll = DEFAULT_FLIGHT_SPEC.inertiaRoll * a;
	i.maxThrust = n.thrustToWeight * i.mass * 9.81;
	i.propVmax = n.propVmax;
	i.spoolRate = n.spoolRate;
	i.gearK = DEFAULT_FLIGHT_SPEC.gearK * a * r.gearKMul;
	i.gearC = DEFAULT_FLIGHT_SPEC.gearC * a * r.gearCMul;
	i.rollFriction = r.rollFriction;
	i.brakeFriction = r.brakeFriction;
	i.crashSpeed = r.crashSpeed;
	i.cd0 += r.cd0Add;
	i.gripPaved = r.gripPaved;
	i.gripGrass = r.gripGrass;
	i.retractableGear = t.retractableGear;
	i.gearDrag = t.gearDrag;
	return i;
}
function getPlaneEngineKind(e) {
	return PLANE_MODELS[e].engine;
}
var planePointToVector = (e) => new Vector3(e[0], e[1], e[2]);
function buildFlightContacts(e) {
	let t = PLANE_MODELS[e.style];
	let n = PLANE_WHEEL_SPECS[e.wheels].radius;
	let r = t.mains.map((e) => planePointToVector(e).setY(e[1] - n));
	let i =
		t.gear === `tricycle`
			? planePointToVector(t.third).setY(t.third[1] - n)
			: planePointToVector(t.third);
	let a = t.crash.map((e) => ({
		p: planePointToVector(e.p),
		kind: e.kind,
	}));
	let o = PLANE_ENGINE_SPECS[t.engine].propRadius;
	if (t.retractableGear) {
		a.push({ p: new Vector3(0, -0.65, 0), kind: `belly` });
	}
	if (o > 0) {
		let e = t.engineMount;
		a.push({
			p: new Vector3(e[0], e[1] - o + 0.05, e[2] - 0.05),
			kind: `prop`,
		});
	}
	return {
		wheels: r,
		third: i,
		tricycle: t.gear === `tricycle`,
		crash: a,
	};
}
function estimateStallSpeed(e, t = 0) {
	let n = e.cl0 + e.flapCl * t + e.clSlope * (e.stallAlpha - e.flapStall * t);
	return Math.sqrt((e.mass * 2 * 9.81) / (e.rho * e.wingArea * n));
}
var estimateThrustAtSpeed = (e, t) =>
	e.maxThrust * Math.max(0, 1 - t / e.propVmax);
function estimatePlanePerformance(e) {
	let t = estimateStallSpeed(e);
	let n = e.mass * 9.81;
	let r = 0;
	let i = 0;
	for (let a = t; a < 260; a += 0.5) {
		let t = e.rho * 0.5 * a * a;
		let o = n / (t * e.wingArea);
		let s = t * e.wingArea * (e.cd0 + e.inducedK * o * o);
		let c = estimateThrustAtSpeed(e, a) - s;
		if (c > 0) {
			r = a;
		}
		i = Math.max(i, (c * a) / n);
	}
	let a = 0;
	let o = 0;
	let s = t * 1.25;
	let c = e.rollFriction / e.gripGrass;
	for (let t = 0; t < 6000 && a < s; t++) {
		let t = e.rho * 0.5 * a * a;
		let r = t * e.wingArea * e.cl0;
		let i = t * e.wingArea * e.cd0;
		let s = (estimateThrustAtSpeed(e, a) - i - c * Math.max(0, n - r)) / e.mass;
		a += s * 0.02;
		o += a * 0.02;
	}
	let l = MathUtils.clamp(
		(e.rollAcc / 12) * 0.6 + (1 - e.mass / 3200) * 0.4,
		0,
		1,
	);
	let u = MathUtils.clamp(
		(e.crashSpeed / 8) * 0.6 + (1 - (t - 15) / 32) * 0.4,
		0,
		1,
	);
	return {
		topSpeed: r,
		climb: i,
		takeoffRun: o,
		stall: t,
		handling: l,
		landing: u,
	};
}
var PLANE_LOADOUT_STORAGE_KEY = `baron.loadout.v1`;
var PLANE_LOADOUT_ALLOWED_VALUES = {
	style: PLANE_STYLES.map((e) => e.id),
	paint: PLANE_PAINT_OPTIONS.map((e) => e.id),
	wheels: PLANE_WHEEL_OPTIONS.map((e) => e.id),
};
function sanitizePlaneLoadout(e) {
	let t = {
		...DEFAULT_PLANE_LOADOUT,
	};
	if (!e) {
		return t;
	}
	for (let n of Object.keys(PLANE_LOADOUT_ALLOWED_VALUES)) {
		let r = e[n];
		if (typeof r == `string` && PLANE_LOADOUT_ALLOWED_VALUES[n].includes(r)) {
			t[n] = r;
		}
	}
	return t;
}
function parsePlaneLoadoutCode(e) {
	let t = e.split(`.`);
	if (t.length < 3) {
		return null;
	}
	let [n, r] = t;
	return sanitizePlaneLoadout({
		style: n,
		paint: r,
		wheels: t[t.length - 1],
	});
}
function loadPlaneLoadout() {
	try {
		let e = new URLSearchParams(location.search).get(`plane`);
		let t = e ? parsePlaneLoadoutCode(e) : null;
		if (t) {
			return t;
		}
	} catch {}
	try {
		let e = localStorage.getItem(PLANE_LOADOUT_STORAGE_KEY);
		if (e) {
			return sanitizePlaneLoadout(JSON.parse(e));
		}
	} catch {}
	return {
		...DEFAULT_PLANE_LOADOUT,
	};
}
function savePlaneLoadout(e) {
	try {
		localStorage.setItem(PLANE_LOADOUT_STORAGE_KEY, JSON.stringify(e));
	} catch {}
}
function formatPlaneLoadout(e) {
	let t = (e, t) => e.find((e) => e.id === t)?.name ?? t;
	return `${t(PLANE_STYLES, e.style)} · ${t(PLANE_PAINT_OPTIONS, e.paint)} · ${t(PLANE_WHEEL_OPTIONS, e.wheels)} wheels`;
}
var PLANE_METAL_COLOR = 6120299;
var PLANE_PROPELLER_METAL_COLOR = 9278363;
var PLANE_WOOD_COLOR = 8014374;
var PLANE_DARK_COLOR = 3090982;
var PLANE_TIRE_COLOR = 2829099;
var PLANE_GLASS_COLOR = 10475759;
function createSweptTailFinGeometry(e, t, n, r, i) {
	let a = new BoxGeometry(i, e, t);
	a.translate(0, e / 2, 0);
	let o = a.getAttribute(`position`);
	for (let i = 0; i < o.count; i++) {
		if (o.getY(i) > e / 2) {
			o.setZ(i, (o.getZ(i) * n) / t + r);
		}
	}
	a.computeVertexNormals();
	return a;
}
var createPlaneWheelParts = (e, t, n, r) => [
	makeMesh(new CylinderGeometry(t, t, n, 14), PLANE_TIRE_COLOR, {
		pos: e,
		rot: [0, 0, Math.PI / 2],
	}),
	makeMesh(new CylinderGeometry(t * 0.45, t * 0.45, n + 0.02, 10), r, {
		pos: e,
		rot: [0, 0, Math.PI / 2],
	}),
];
var createPlaneRoundelParts = (e, t, n, r, i, a = false) => [
	makeMesh(new CylinderGeometry(r, r, 0.03, 20), i.emblemOuter, {
		pos: [e, t, n],
	}),
	makeMesh(new CylinderGeometry(r * 0.52, r * 0.52, 0.03, 20), i.emblemInner, {
		pos: [e, t + (a ? -0.015 : 0.015), n],
	}),
];
function createBiplaneParts(e) {
	let t = [
		makeMesh(new BoxGeometry(1.05, 1.15, 2.4), e.body, {
			pos: [0, 0.05, -1],
		}),
		makeMesh(
			createTaperedFuselageGeometry(1.05, 1.15, 3.7, 0.3, 0.45, 0.2),
			e.body,
			{
				pos: [0, 0.05, 0.2],
			},
		),
		makeMesh(new BoxGeometry(1.08, 1.18, 0.3), e.accent, {
			pos: [0, 0.05, 0.6],
		}),
		makeMesh(new CylinderGeometry(0.64, 0.6, 0.6, 14), PLANE_METAL_COLOR, {
			pos: [0, 0.05, -2.45],
			rot: [Math.PI / 2, 0, 0],
		}),
		makeMesh(new CylinderGeometry(0.66, 0.66, 0.12, 14), e.accent, {
			pos: [0, 0.05, -2.72],
			rot: [Math.PI / 2, 0, 0],
		}),
		makeMesh(new BoxGeometry(0.72, 0.08, 0.95), PLANE_DARK_COLOR, {
			pos: [0, 0.62, 0],
		}),
		makeMesh(new BoxGeometry(8.6, 0.14, 1.5), e.wing, {
			pos: [0, 1.5, -1],
		}),
		makeMesh(new BoxGeometry(8, 0.14, 1.4), e.wingUnder, {
			pos: [0, -0.45, -0.55],
		}),
		makeMesh(new BoxGeometry(0.56, 0.18, 1.56), e.stripe ?? e.accent, {
			pos: [-4.05, 1.5, -1],
		}),
		makeMesh(new BoxGeometry(0.56, 0.18, 1.56), e.stripe ?? e.accent, {
			pos: [4.05, 1.5, -1],
		}),
		...[-2.9, 2.9].flatMap((e) => [
			makeMesh(new BoxGeometry(0.09, 1.85, 0.09), PLANE_WOOD_COLOR, {
				pos: [e, 0.52, -1.25],
			}),
			makeMesh(new BoxGeometry(0.09, 1.85, 0.09), PLANE_WOOD_COLOR, {
				pos: [e, 0.52, -0.45],
			}),
		]),
		...[-0.42, 0.42].flatMap((e) => [
			makeMesh(new BoxGeometry(0.07, 0.95, 0.07), PLANE_WOOD_COLOR, {
				pos: [e, 1, -1.4],
			}),
			makeMesh(new BoxGeometry(0.07, 0.95, 0.07), PLANE_WOOD_COLOR, {
				pos: [e, 1, -0.6],
			}),
		]),
		...[-3, 3].flatMap((t) => [
			...createPlaneRoundelParts(t, 1.585, -1, 0.62, e),
			...createPlaneRoundelParts(t, -0.535, -0.55, 0.58, e, true),
		]),
		...[-0.55, 0.55].map((e) =>
			makeMesh(new BoxGeometry(0.08, 0.95, 0.08), PLANE_WOOD_COLOR, {
				pos: [e, -0.78, -0.6],
				rot: [0, 0, e > 0 ? -0.35 : 0.35],
			}),
		),
		makeMesh(new BoxGeometry(1.84, 0.08, 0.08), PLANE_WOOD_COLOR, {
			pos: [0, -1, -0.6],
		}),
		makeMesh(new BoxGeometry(0.06, 0.42, 0.06), PLANE_WOOD_COLOR, {
			pos: [0, -0.02, 3.78],
			rot: [0.45, 0, 0],
		}),
		makeMesh(new BoxGeometry(3, 0.08, 0.8), e.wing, {
			pos: [0, 0.32, 3.45],
		}),
		makeMesh(new BoxGeometry(0.08, 0.85, 0.75), e.accent, {
			pos: [0, 0.75, 3.55],
		}),
	];
	if (e.stripe) {
		t.push(
			makeMesh(new BoxGeometry(1.09, 0.2, 2.3), e.stripe, {
				pos: [0, -0.15, -1],
			}),
		);
	}
	return {
		body: t,
		cockpit: [
			makeMesh(new IcosahedronGeometry(0.25, 1), 7029286, {
				pos: [0, 0.86, 0.08],
				flat: true,
			}),
			makeMesh(new BoxGeometry(0.42, 0.1, 0.12), PLANE_GLASS_COLOR, {
				pos: [0, 0.9, -0.15],
			}),
			makeMesh(new BoxGeometry(0.16, 0.08, 0.6), 16645104, {
				pos: [0.18, 0.7, 0.42],
				rot: [0.2, 0.3, 0],
			}),
			makeMesh(new BoxGeometry(0.55, 0.28, 0.04), 12576511, {
				pos: [0, 0.78, -0.55],
				rot: [-0.3, 0, 0],
			}),
		],
		ailL: {
			at: [-3, 1.5, -0.25],
			geo: makeMesh(new BoxGeometry(2.2, 0.08, 0.42), e.accent, {
				pos: [0, 0, 0.21],
			}),
		},
		ailR: {
			at: [3, 1.5, -0.25],
			geo: makeMesh(new BoxGeometry(2.2, 0.08, 0.42), e.accent, {
				pos: [0, 0, 0.21],
			}),
		},
		flapL: {
			at: [-1.75, -0.45, 0.15],
			geo: makeMesh(new BoxGeometry(2, 0.08, 0.38), e.accent, {
				pos: [0, 0, 0.19],
			}),
		},
		flapR: {
			at: [1.75, -0.45, 0.15],
			geo: makeMesh(new BoxGeometry(2, 0.08, 0.38), e.accent, {
				pos: [0, 0, 0.19],
			}),
		},
		elev: {
			at: [0, 0.32, 3.85],
			geo: makeMesh(new BoxGeometry(2.9, 0.07, 0.5), e.accent, {
				pos: [0, 0, 0.25],
			}),
		},
		rudder: {
			at: [0, 0.72, 3.92],
			geo: makeMesh(new BoxGeometry(0.07, 1.1, 0.5), e.body, {
				pos: [0, 0.05, 0.25],
			}),
		},
	};
}
function createTurbopropParts(e) {
	let t = [
		makeMesh(new CylinderGeometry(0.6, 0.68, 1, 14), e.body, {
			pos: [0, 0.05, -3.05],
			rot: [Math.PI / 2, 0, 0],
		}),
		makeMesh(new CylinderGeometry(0.62, 0.62, 0.12, 14), e.accent, {
			pos: [0, 0.05, -3.5],
			rot: [Math.PI / 2, 0, 0],
		}),
		...[-1, 1].map((e) =>
			makeMesh(new BoxGeometry(0.16, 0.16, 0.5), PLANE_METAL_COLOR, {
				pos: [e * 0.66, -0.1, -2.65],
				rot: [0.3, 0, 0],
			}),
		),
		makeMesh(new BoxGeometry(1.3, 1.3, 2.6), e.body, {
			pos: [0, 0, -1.3],
		}),
		makeMesh(
			createTaperedFuselageGeometry(1.3, 1.3, 4.3, 0.35, 0.5, 0.25),
			e.body,
			{
				pos: [0, 0, 0],
			},
		),
		makeMesh(new BoxGeometry(1.33, 1.33, 0.3), e.accent, {
			pos: [0, 0, 0.9],
		}),
		makeMesh(new BoxGeometry(9.8, 0.18, 1.8), e.wing, {
			pos: [0, -0.42, -0.2],
		}),
		makeMesh(new BoxGeometry(9.6, 0.04, 1.7), e.wingUnder, {
			pos: [0, -0.53, -0.2],
		}),
		makeMesh(new BoxGeometry(0.56, 0.24, 1.86), e.stripe ?? e.accent, {
			pos: [-4.65, -0.42, -0.2],
		}),
		makeMesh(new BoxGeometry(0.56, 0.24, 1.86), e.stripe ?? e.accent, {
			pos: [4.65, -0.42, -0.2],
		}),
		...[-3.1, 3.1].flatMap((t) =>
			createPlaneRoundelParts(t, -0.315, -0.3, 0.55, e),
		),
		makeMesh(new BoxGeometry(3.6, 0.08, 0.9), e.wing, {
			pos: [0, 0.3, 3.7],
		}),
		makeMesh(createSweptTailFinGeometry(1.4, 1.5, 0.8, 0.55, 0.1), e.accent, {
			pos: [0, 0.35, 3.6],
			flat: true,
		}),
	];
	if (e.stripe) {
		t.push(
			makeMesh(new BoxGeometry(1.33, 0.22, 2.5), e.stripe, {
				pos: [0, -0.1, -1.3],
			}),
		);
	}
	return {
		body: t,
		gear: [
			...[-1.35, 1.35].map((x) => ({
				at: [x, -0.505, 0.35],
				strut: makeMesh(new BoxGeometry(0.1, 0.55, 0.1), PLANE_METAL_COLOR, {
					pos: [x, -0.78, 0.35],
				}),
			})),
			{
				at: [0, -0.625, -2.5],
				strut: makeMesh(new BoxGeometry(0.1, 0.45, 0.1), PLANE_METAL_COLOR, {
					pos: [0, -0.85, -2.5],
				}),
			},
		],
		cockpit: [
			makeMesh(new IcosahedronGeometry(0.62, 1), PLANE_GLASS_COLOR, {
				pos: [0, 0.55, -0.7],
				scale: [0.85, 0.72, 1.55],
				flat: true,
			}),
			makeMesh(new IcosahedronGeometry(0.22, 1), 7029286, {
				pos: [0, 0.75, -0.55],
				flat: true,
			}),
		],
		ailL: {
			at: [-3.6, -0.42, 0.7],
			geo: makeMesh(new BoxGeometry(2.4, 0.09, 0.42), e.accent, {
				pos: [0, 0, 0.21],
			}),
		},
		ailR: {
			at: [3.6, -0.42, 0.7],
			geo: makeMesh(new BoxGeometry(2.4, 0.09, 0.42), e.accent, {
				pos: [0, 0, 0.21],
			}),
		},
		flapL: {
			at: [-1.6, -0.42, 0.7],
			geo: makeMesh(new BoxGeometry(1.6, 0.09, 0.42), e.accent, {
				pos: [0, 0, 0.21],
			}),
		},
		flapR: {
			at: [1.6, -0.42, 0.7],
			geo: makeMesh(new BoxGeometry(1.6, 0.09, 0.42), e.accent, {
				pos: [0, 0, 0.21],
			}),
		},
		elev: {
			at: [0, 0.3, 4.15],
			geo: makeMesh(new BoxGeometry(3.5, 0.07, 0.45), e.accent, {
				pos: [0, 0, 0.22],
			}),
		},
		rudder: {
			at: [0, 1.05, 4.6],
			rot: [0.37, 0, 0],
			geo: makeMesh(new BoxGeometry(0.09, 1.2, 0.4), e.body, {
				pos: [0, 0, 0.2],
			}),
		},
	};
}
function createJetParts(e) {
	let t = 0.45;
	let n = (n) => [
		makeMesh(new BoxGeometry(4.2, 0.14, 2.2), e.wing, {
			pos: [n * 2.39, -0.15, 1.11],
			rot: [0, -n * t, 0],
		}),
		makeMesh(new BoxGeometry(0.45, 0.2, 1.4), e.stripe ?? e.accent, {
			pos: [n * 4.15, -0.15, 2],
			rot: [0, -n * t, 0],
		}),
		...createPlaneRoundelParts(n * 2.5, -0.07, 1.2, 0.5, e),
		makeMesh(new BoxGeometry(1.7, 0.08, 1), e.wing, {
			pos: [n * 1.1, 0.1, 3.85],
			rot: [0, -n * 0.4, 0],
		}),
	];
	let r = [
		makeMesh(new ConeGeometry(0.55, 1.6, 12), e.body, {
			pos: [0, 0, -4.8],
			rot: [-Math.PI / 2, 0, 0],
		}),
		makeMesh(new BoxGeometry(1.1, 1.1, 4), e.body, {
			pos: [0, 0, -2],
		}),
		makeMesh(
			createTaperedFuselageGeometry(1.1, 1.1, 4.2, 0.95, 0.95, 0.05),
			e.body,
			{
				pos: [0, 0, 0],
			},
		),
		makeMesh(new BoxGeometry(1.13, 1.13, 0.25), e.accent, {
			pos: [0, 0, -3.6],
		}),
		...[-1, 1].flatMap((t) => [
			makeMesh(new BoxGeometry(0.45, 0.7, 1.6), e.body, {
				pos: [t * 0.75, -0.05, -1.4],
			}),
			makeMesh(new BoxGeometry(0.36, 0.56, 0.05), PLANE_DARK_COLOR, {
				pos: [t * 0.78, -0.05, -2.21],
			}),
		]),
		...n(-1),
		...n(1),
		makeMesh(createSweptTailFinGeometry(1.9, 2.2, 0.9, 1.2, 0.12), e.accent, {
			pos: [0, 0.4, 3.2],
			flat: true,
		}),
		makeMesh(new CylinderGeometry(0.5, 0.42, 0.7, 12), PLANE_METAL_COLOR, {
			pos: [0, 0.05, 4.4],
			rot: [Math.PI / 2, 0, 0],
		}),
		makeMesh(new CylinderGeometry(0.33, 0.33, 0.05, 12), PLANE_DARK_COLOR, {
			pos: [0, 0.05, 4.76],
			rot: [Math.PI / 2, 0, 0],
		}),
	];
	if (e.stripe) {
		r.push(
			makeMesh(new BoxGeometry(1.16, 0.2, 3.9), e.stripe, {
				pos: [0, -0.1, -2],
			}),
		);
	}
	return {
		body: r,
		gear: [
			...[-1.3, 1.3].map((x) => ({
				at: [x, -0.2, 0.7],
				strut: makeMesh(new BoxGeometry(0.1, 0.7, 0.1), PLANE_METAL_COLOR, {
					pos: [x, -0.55, 0.7],
				}),
			})),
			{
				at: [0, -0.475, -2.9],
				strut: makeMesh(new BoxGeometry(0.1, 0.45, 0.1), PLANE_METAL_COLOR, {
					pos: [0, -0.7, -2.9],
				}),
			},
		],
		cockpit: [
			makeMesh(new IcosahedronGeometry(0.55, 1), PLANE_GLASS_COLOR, {
				pos: [0, 0.55, -2.4],
				scale: [0.85, 0.7, 2],
				flat: true,
			}),
			makeMesh(new IcosahedronGeometry(0.2, 1), 7029286, {
				pos: [0, 0.72, -2.3],
				flat: true,
			}),
		],
		ailL: {
			at: [-3.1, -0.15, 1.95],
			rot: [0, t, 0],
			geo: makeMesh(new BoxGeometry(1.8, 0.08, 0.4), e.accent, {
				pos: [0, 0, 0.2],
			}),
		},
		ailR: {
			at: [3.1, -0.15, 1.95],
			rot: [0, -0.45, 0],
			geo: makeMesh(new BoxGeometry(1.8, 0.08, 0.4), e.accent, {
				pos: [0, 0, 0.2],
			}),
		},
		flapL: {
			at: [-1.68, -0.15, 1.43],
			rot: [0, t, 0],
			geo: makeMesh(new BoxGeometry(1, 0.08, 0.45), e.accent, {
				pos: [0, 0, 0.225],
			}),
		},
		flapR: {
			at: [1.68, -0.15, 1.43],
			rot: [0, -0.45, 0],
			geo: makeMesh(new BoxGeometry(1, 0.08, 0.45), e.accent, {
				pos: [0, 0, 0.225],
			}),
		},
		elev: {
			at: [0, 0.1, 4.3],
			geo: makeMesh(new BoxGeometry(3.4, 0.07, 0.4), e.accent, {
				pos: [0, 0, 0.2],
			}),
		},
		rudder: {
			at: [0, 1.25, 4.55],
			rot: [0.52, 0, 0],
			geo: makeMesh(new BoxGeometry(0.1, 1.3, 0.4), e.body, {
				pos: [0, 0, 0.2],
			}),
		},
	};
}
var PLANE_PART_BUILDERS = {
	biplane: createBiplaneParts,
	turboprop: createTurbopropParts,
	jet: createJetParts,
};
var LandingGear = class {
	loadout;
	root = new Group();
	prop = new Group();
	livery;
	disc = null;
	flames = [];
	flameMat = null;
	gearAssemblies = [];
	ailL = new Group();
	ailR = new Group();
	flapL = new Group();
	flapR = new Group();
	elev = new Group();
	rudder = new Group();
	hasProp;
	cockpit;
	dash = new Group();
	dashMat = null;
	constructor(e, t, n) {
		this.loadout = e;
		let r = getPlaneLivery(e.paint);
		this.livery = r;
		let i = PLANE_MODELS[e.style];
		let a = PLANE_WHEEL_SPECS[e.wheels];
		let o = PLANE_PART_BUILDERS[e.style](r);
		let s = o.body;
		const wheelCenters = [...i.mains];
		if (i.gear === `tricycle`) wheelCenters.push(i.third);
		for (const [index, center] of wheelCenters.entries()) {
			const nose = index === 2;
			const parts = createPlaneWheelParts(
				center,
				a.radius * (nose ? 0.85 : 1),
				a.width * (nose ? 0.9 : 1),
				r.accent,
			);
			if (i.retractableGear) {
				const support = o.gear[index];
				parts.push(support.strut);
				const assembly = new Group();
				assembly.name = [`gear-left`, `gear-right`, `gear-nose`][index];
				assembly.position.set(...support.at);
				const geometry = mergeParts(parts);
				geometry.translate(-support.at[0], -support.at[1], -support.at[2]);
				assembly.add(createOutlinedMesh(geometry, t, n));
				this.gearAssemblies.push(assembly);
			} else {
				s.push(...parts);
			}
		}
		this.root.add(createOutlinedMesh(mergeParts(s), t, n));
		for (const assembly of this.gearAssemblies) this.root.add(assembly);
		this.cockpit = createOutlinedMesh(mergeParts(o.cockpit), t, n);
		this.root.add(this.cockpit);
		this.buildDash(i.eye, r, t);
		let c = i.engine;
		let l = i.engineMount;
		let u = PLANE_ENGINE_SPECS[c].propRadius;
		this.hasProp = u > 0;
		if (c === `jet`) {
			this.flameMat = new MeshBasicMaterial({
				color: 16752704,
				transparent: true,
				opacity: 0.85,
				depthWrite: false,
			});
			let e = new MeshBasicMaterial({
				color: 16773808,
				transparent: true,
				opacity: 0.95,
				depthWrite: false,
			});
			let t = new ConeGeometry(0.45, 2.2, 10)
				.rotateX(Math.PI / 2)
				.translate(0, 0, 1.1);
			let n = new ConeGeometry(0.25, 1.4, 8)
				.rotateX(Math.PI / 2)
				.translate(0, 0, 0.7);
			let r = new Group();
			r.position.set(...l);
			r.add(new Mesh(t, this.flameMat), new Mesh(n, e));
			this.flames.push(r);
			this.root.add(r);
		} else {
			this.prop.position.set(...l);
			let e =
				c === `turbo`
					? [
							makeMesh(
								new BoxGeometry(0.18, u * 2, 0.06),
								PLANE_PROPELLER_METAL_COLOR,
								{
									rot: [0, 0.3, 0],
								},
							),
							makeMesh(
								new BoxGeometry(u * 2, 0.18, 0.06),
								PLANE_PROPELLER_METAL_COLOR,
								{
									rot: [0.3, 0, 0],
								},
							),
							makeMesh(new ConeGeometry(0.3, 0.7, 12), r.accent, {
								pos: [0, 0, -0.25],
								rot: [-Math.PI / 2, 0, 0],
							}),
						]
					: [
							makeMesh(new BoxGeometry(0.2, u * 2, 0.07), PLANE_WOOD_COLOR, {
								rot: [0, 0.25, 0],
							}),
							makeMesh(new ConeGeometry(0.24, 0.45, 10), r.accent, {
								pos: [0, 0, -0.15],
								rot: [-Math.PI / 2, 0, 0],
							}),
						];
			this.prop.add(createOutlinedMesh(mergeParts(e), t, n));
			this.root.add(this.prop);
			this.disc = new Mesh(
				new CircleGeometry(u + 0.02, 24),
				new MeshBasicMaterial({
					color: 15921126,
					transparent: true,
					opacity: 0,
					depthWrite: false,
					side: 2,
				}),
			);
			this.disc.position.set(l[0], l[1], l[2] - 0.03);
			this.root.add(this.disc);
		}
		let d = (e, r) => {
			let i = new Group();
			i.position.set(...e.at);
			if (e.rot) {
				i.rotation.set(...e.rot);
			}
			r.add(createOutlinedMesh(mergeParts([e.geo]), t, n));
			i.add(r);
			this.root.add(i);
		};
		d(o.ailL, this.ailL);
		d(o.ailR, this.ailR);
		d(o.flapL, this.flapL);
		d(o.flapR, this.flapR);
		d(o.elev, this.elev);
		d(o.rudder, this.rudder);
	}
	cockpitView = false;
	setCockpitView(e) {
		if (e !== this.cockpitView) {
			this.cockpitView = e;
			this.cockpit.visible = !e;
			this.dash.visible = e;
			this.root.traverse((t) => {
				if (t.name === `outline`) {
					t.visible = !e;
				}
			});
		}
	}
	buildDash(e, t, n) {
		let r = 0.6;
		let i = [
			makeMesh(new BoxGeometry(3.6, r, 0.08), 3878440, {}),
			makeMesh(new BoxGeometry(3.64, 0.07, 0.14), t.body, {
				pos: [0, r / 2, 0.01],
			}),
		];
		let a = new Group();
		a.position.set(e[0], e[1] - 0.6, e[2] - 0.8);
		a.rotation.x = -0.2;
		this.dashMat = n.clone();
		this.dashMat.depthFunc = 1;
		let o = new Mesh(mergeParts(i), this.dashMat);
		o.renderOrder = 10;
		a.add(o);
		this.dash.add(a);
		this.dash.visible = false;
		this.root.add(this.dash);
	}
	animate(e, t, n, r, i, a = 0, gearPosition = 1) {
		const extension = MathUtils.clamp(gearPosition, 0, 1);
		const fold = ((1 - extension) * Math.PI) / 2;
		this.gearAssemblies.forEach((assembly, index) => {
			assembly.visible = extension > 0;
			if (index === 2) assembly.rotation.x = -fold;
			else assembly.rotation.z = index === 0 ? fold : -fold;
		});
		if (this.hasProp) {
			this.prop.rotation.z += i * 95 * e + (i > 0.02 ? e * 6 : 0);
			this.disc.material.opacity = MathUtils.clamp((i - 0.25) * 0.5, 0, 0.3);
			this.prop.visible =
				i < 0.75 || Math.floor(performance.now() / 30) % 3 != 0;
		}
		if (this.flames.length) {
			let e =
				0.85 +
				Math.sin(performance.now() * 0.05) *
					0.15 *
					Math.sin(performance.now() * 0.031);
			let t = Math.max(0.05, (i - 0.08) * 1.25) * e;
			for (let e of this.flames) {
				e.visible = i > 0.1;
				e.scale.set(0.6 + i * 0.4, 0.6 + i * 0.4, t);
			}
			this.flameMat.opacity = 0.5 + i * 0.4;
		}
		this.ailL.rotation.x = n * 0.4;
		this.ailR.rotation.x = -n * 0.4;
		this.flapL.rotation.x = this.flapR.rotation.x = a * FLAP_DEFLECTION_RADIANS;
		this.elev.rotation.x = -t * 0.4;
		this.rudder.rotation.y = r * 0.45;
	}
	dispose() {
		let e = new Set();
		this.root.traverse((t) => {
			if (t instanceof Mesh) {
				if (t.name !== `outline`) {
					t.geometry.dispose();
				}
				if (t.material instanceof MeshBasicMaterial) {
					e.add(t.material);
				}
			}
		});
		for (let t of e) {
			t.dispose();
		}
		this.dashMat?.dispose();
	}
};
var Aircraft = class {
	loadout;
	s = new FlightState();
	prevPos = new Vector3();
	prevQuat = new Quaternion();
	input = createFlightInput();
	visual;
	gear;
	spec;
	downed = false;
	wrecked = false;
	downedSide = 1;
	smokeT = 0;
	dustT = 0;
	constructor(e, t, n, r = buildFlightSpec(e)) {
		this.loadout = e;
		this.spec = r;
		this.gear = buildFlightContacts(e);
		this.visual = new LandingGear(e, t, n);
	}
	get livery() {
		return this.visual.livery;
	}
	get alive() {
		return !this.downed && !this.wrecked;
	}
	forward(e) {
		return e.set(0, 0, -1).applyQuaternion(this.s.quat);
	}
	up(e) {
		return e.set(0, 1, 0).applyQuaternion(this.s.quat);
	}
	savePrev() {
		this.prevPos.copy(this.s.pos);
		this.prevQuat.copy(this.s.quat);
	}
	teleport() {
		this.savePrev();
	}
	syncVisual(e, t) {
		let n = this.visual.root;
		n.position.lerpVectors(this.prevPos, this.s.pos, e);
		n.quaternion.slerpQuaternions(this.prevQuat, this.s.quat, e);
		this.visual.animate(
			t,
			this.input.pitch,
			this.input.roll,
			this.input.yaw,
			this.s.rpm,
			this.s.flaps,
			this.s.gearPosition ?? 1,
		);
	}
	get integrity() {
		let e = this.s.health;
		return Math.min(e.engine, e.wings, e.tail, e.pilot);
	}
};

export {
	Aircraft,
	buildFlightContacts,
	buildFlightSpec,
	createBiplaneParts,
	createJetParts,
	createPlaneRoundelParts,
	createPlaneWheelParts,
	createSweptTailFinGeometry,
	createTurbopropParts,
	DEFAULT_PLANE_LOADOUT,
	estimatePlanePerformance,
	estimateStallSpeed,
	estimateThrustAtSpeed,
	formatPlaneLoadout,
	getPlaneEngineKind,
	getPlaneLivery,
	LandingGear,
	lightenPlaneColor,
	loadPlaneLoadout,
	PLANE_DARK_COLOR,
	PLANE_ENGINE_SPECS,
	PLANE_GLASS_COLOR,
	PLANE_LOADOUT_ALLOWED_VALUES,
	PLANE_LOADOUT_STORAGE_KEY,
	PLANE_METAL_COLOR,
	PLANE_MODELS,
	PLANE_PAINT_OPTIONS,
	PLANE_PART_BUILDERS,
	PLANE_PROPELLER_METAL_COLOR,
	PLANE_STYLES,
	PLANE_TIRE_COLOR,
	PLANE_WHEEL_OPTIONS,
	PLANE_WHEEL_SPECS,
	PLANE_WOOD_COLOR,
	parsePlaneLoadoutCode,
	planePaintColor,
	planePaintWhite,
	planePointToVector,
	sanitizePlaneLoadout,
	savePlaneLoadout,
};
