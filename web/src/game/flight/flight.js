import { MathUtils, Matrix4, Quaternion, Vector3 } from "../core/three.js";
import {
	getGearParasiteDrag,
	isGearDownLocked,
	updateLandingGear,
} from "./landing-gear.js";

var FLAP_POSITIONS = [0, 0.5, 1];
var FLAP_LABELS = [`UP`, `T/O`, `LAND`];
var FLAP_DEFLECTION_RADIANS = 0.61;
var CRASH_SPEED_TOLERANCE = 1.15;
var DEFAULT_FLIGHT_SPEC = {
	mass: 650,
	wingArea: 21.5,
	rho: 1.2,
	cl0: 0.12,
	clSlope: 4.6,
	stallAlpha: 0.27,
	alphaTrim: 0.03,
	cd0: 0.035,
	inducedK: 0.075,
	sideArea: 6,
	cyBeta: 1.2,
	maxThrust: 3250,
	propVmax: 95,
	pitchAcc: 5.5,
	rollAcc: 9,
	yawAcc: 2.4,
	pitchDamp: 3.2,
	rollDamp: 4,
	yawDamp: 2.6,
	pitchStab: 9,
	yawStab: 5,
	qRef: 735,
	inertiaPitch: 1100,
	inertiaYaw: 1500,
	inertiaRoll: 800,
	gearK: 70000,
	gearC: 6900,
	rollFriction: 0.03,
	brakeFriction: 0.495,
	skidFriction: 0.3,
	groundSteer: 1.6,
	crashSpeed: 6,
	spoolRate: 1.6,
	gripPaved: 1,
	gripGrass: 1,
	flapCl: 0.6,
	flapCd: 0.07,
	flapStall: 0.02,
	flapTrim: 0.03,
	flapRate: 0.6,
	flapSpeed: 30,
};
var createFlightInput = () => ({
	pitch: 0,
	roll: 0,
	yaw: 0,
	throttle: 0,
	brake: false,
	flaps: 0,
});
var FlightState = class {
	pos = new Vector3();
	vel = new Vector3();
	quat = new Quaternion();
	angVel = new Vector3();
	throttle = 0;
	rpm = 0;
	wheels = 0;
	onGround = false;
	airTime = 0;
	groundTime = 0;
	alpha = 0;
	beta = 0;
	airspeed = 0;
	stalled = false;
	health = {
		engine: 1,
		wings: 1,
		tail: 1,
		pilot: 1,
	};
	t = 0;
	lastSink = 0;
	flaps = 0;
	flapsBlown = false;
	gearPosition = 1;
	gearTarget = 1;
};
var DEFAULT_FLIGHT_CONTACTS = {
	wheels: [new Vector3(-0.92, -1.36, -0.6), new Vector3(0.92, -1.36, -0.6)],
	third: new Vector3(0, -0.22, 3.85),
	tricycle: false,
	crash: [
		{
			p: new Vector3(-4, -0.45, -0.55),
			kind: `wing`,
		},
		{
			p: new Vector3(4, -0.45, -0.55),
			kind: `wing`,
		},
		{
			p: new Vector3(-4.3, 1.5, -1),
			kind: `wing`,
		},
		{
			p: new Vector3(4.3, 1.5, -1),
			kind: `wing`,
		},
		{
			p: new Vector3(0, 0.05, -3),
			kind: `nose`,
		},
		{
			p: new Vector3(0, -1.2, -2.95),
			kind: `prop`,
		},
		{
			p: new Vector3(0, 1.65, -1),
			kind: `top`,
		},
		{
			p: new Vector3(0, 1.2, 4.1),
			kind: `top`,
		},
	],
};
var flightForwardVector = new Vector3();
var flightUpVector = new Vector3();
var flightRightVector = new Vector3();
var flightAirVelocity = new Vector3();
var flightLocalAirVelocity = new Vector3();
var flightAirDirection = new Vector3();
var flightLiftDirection = new Vector3();
var flightTotalForce = new Vector3();
var flightGroundTorque = new Vector3();
var flightAngularAcceleration = new Vector3();
var flightInverseQuaternion = new Quaternion();
var flightContactOffset = new Vector3();
var flightContactPosition = new Vector3();
var flightWorldAngularVelocity = new Vector3();
var flightContactVelocity = new Vector3();
var flightGroundForward = new Vector3();
var flightGroundRight = new Vector3();
var flightContactForce = new Vector3();
var flightScratchVector = new Vector3();
var flightRotationDelta = new Quaternion();
var flightGroundContactOffset = new Vector3();
function getFlapStallAngle(e, t) {
	return e.stallAlpha - e.flapStall * t;
}
function getLiftCoefficient(e, t, n = 0) {
	let r = getFlapStallAngle(e, n);
	let i = e.cl0 + e.flapCl * n;
	let a = Math.sin(t * 2) * 1.05;
	if (t > r) {
		let n = i + e.clSlope * r;
		let o = Math.min((t - r) / 0.15, 1);
		return n * (1 - o) + a * o;
	}
	let o = -e.stallAlpha * 0.85;
	if (t < o) {
		let n = i + e.clSlope * o;
		let r = Math.min((o - t) / 0.15, 1);
		return n * (1 - r) + a * r;
	}
	return i + e.clSlope * t;
}
function stepFlight(e, t, n, r, i, a = DEFAULT_FLIGHT_CONTACTS) {
	let o = {
		crashed: null,
		touchdown: null,
		propStrike: false,
		scrape: false,
		splash: false,
	};
	let s = e.health;
	e.t += i;
	updateLandingGear(e, t, i);
	flightForwardVector.set(0, 0, -1).applyQuaternion(e.quat);
	flightUpVector.set(0, 1, 0).applyQuaternion(e.quat);
	flightRightVector.set(1, 0, 0).applyQuaternion(e.quat);
	flightInverseQuaternion.copy(e.quat).invert();
	e.throttle = MathUtils.clamp(n.throttle, 0, 1);
	let c = s.engine > 0 ? e.throttle : 0;
	if (s.engine > 0 && s.engine < 0.3) {
		c *= 0.55 + Math.abs(Math.sin(e.t * 7.3) * Math.sin(e.t * 2.1)) * 0.45;
	}
	e.rpm += (c - e.rpm) * Math.min(1, i * t.spoolRate);
	flightAirVelocity.copy(e.vel).sub(r.wind);
	let l = flightAirVelocity.length();
	flightLocalAirVelocity
		.copy(flightAirVelocity)
		.applyQuaternion(flightInverseQuaternion);
	let u = -flightLocalAirVelocity.z;
	e.airspeed = l;
	e.alpha = Math.atan2(
		-flightLocalAirVelocity.y,
		Math.max(Math.abs(u), 0.5) * Math.sign(u || 1),
	);
	e.beta = Math.atan2(flightLocalAirVelocity.x, Math.max(Math.abs(u), 1));
	let d = MathUtils.clamp(1 - (l - t.flapSpeed) / (t.flapSpeed * 0.3), 0, 1);
	let f = Math.min(MathUtils.clamp(n.flaps, 0, 1), d);
	e.flapsBlown = n.flaps > d + 0.01;
	let p = t.flapRate * i;
	e.flaps += MathUtils.clamp(f - e.flaps, -p, p);
	if (e.flaps > d) {
		e.flaps = Math.max(d, e.flaps - p * 2);
	}
	let m = e.flaps;
	e.stalled = e.alpha > getFlapStallAngle(t, m) && l > 3;
	let h = t.rho * 0.5 * l * l;
	flightTotalForce.set(0, 0, 0);
	if (l > 0.5) {
		flightAirDirection.copy(flightAirVelocity).divideScalar(l);
		let n = getLiftCoefficient(t, e.alpha, m) * (0.45 + s.wings * 0.55);
		let r = Math.sin(e.alpha);
		let i =
			getGearParasiteDrag(e, t) * (1 + (1 - s.wings) * 1.5) +
			t.flapCd * m * m +
			t.inducedK * n * n +
			r * 1.1 * r;
		flightLiftDirection.crossVectors(flightRightVector, flightAirDirection);
		let a = flightLiftDirection.length();
		if (a > 0.0001) {
			flightTotalForce.addScaledVector(
				flightLiftDirection.divideScalar(a),
				h * t.wingArea * n,
			);
		}
		flightTotalForce.addScaledVector(flightAirDirection, -h * t.wingArea * i);
		flightTotalForce.addScaledVector(
			flightRightVector,
			-h * t.sideArea * t.cyBeta * e.beta,
		);
	}
	let g =
		e.rpm *
		t.maxThrust *
		Math.max(0, 1 - Math.max(u, 0) / t.propVmax) *
		(s.engine > 0 ? 0.3 + s.engine * 0.7 : 0);
	flightTotalForce.addScaledVector(flightForwardVector, g);
	flightTotalForce.y -= t.mass * 9.81;
	let _ = Math.min(h / t.qRef, 1.6);
	let v = 0.35 + s.tail * 0.65;
	let y = e.angVel;
	let b = MathUtils.clamp(e.alpha - (t.alphaTrim - t.flapTrim * m), -0.6, 0.6);
	let x = MathUtils.clamp(e.beta, -0.6, 0.6);
	flightAngularAcceleration.set(
		n.pitch * t.pitchAcc * _ * v -
			y.x * t.pitchDamp * (0.3 + _) -
			b * t.pitchStab * _,
		-n.yaw * t.yawAcc * _ * v - y.y * t.yawDamp * (0.3 + _) - x * t.yawStab * _,
		-n.roll * t.rollAcc * _ * (0.4 + s.wings * 0.6) -
			y.z * t.rollDamp * (0.3 + _) +
			(1 - s.wings) * 1.2 * _,
	);
	if (e.stalled) {
		flightAngularAcceleration.z += Math.sin(e.t * 1.7) * 2.2 * Math.min(_, 1);
	}
	let S = e.pos.y - r.groundHeight(e.pos.x, e.pos.z) < 8;
	let wasOnGround = e.onGround;
	let bodyContact = false;
	let gearDown = isGearDownLocked(e, t);
	e.wheels = 0;
	flightGroundTorque.set(0, 0, 0);
	let w = false;
	if (S) {
		flightWorldAngularVelocity.copy(y).applyQuaternion(e.quat);
		flightGroundForward.set(flightForwardVector.x, 0, flightForwardVector.z);
		if (flightGroundForward.lengthSq() < 0.000001) {
			flightGroundForward.set(0, 0, -1);
		}
		flightGroundForward.normalize();
		flightGroundRight.set(-flightGroundForward.z, 0, flightGroundForward.x);
		let i = (e) => {
			let n = r.surfaceAt
				? r.surfaceAt(flightContactPosition.x, flightContactPosition.z)
				: `grass`;
			let i =
				n === `paved` ? t.gripPaved : t.gripGrass * (n === `rough` ? 0.85 : 1);
			if (e) {
				return t.brakeFriction * i;
			}
			let a = n === `paved` ? 0.7 : n === `rough` ? 1.6 : 1;
			return (t.rollFriction * a) / i;
		};
		let s = (n, a) => {
			flightContactOffset.copy(n).applyQuaternion(e.quat);
			flightContactPosition.copy(e.pos).add(flightContactOffset);
			let o = r.groundHeight(flightContactPosition.x, flightContactPosition.z);
			let s = Math.max(o, 0) - flightContactPosition.y;
			if (s <= 0) {
				return false;
			}
			if (o < -0.3) {
				w = true;
			}
			if (typeof a != `number`) {
				a = i(a === `brake`);
			}
			flightContactVelocity
				.crossVectors(flightWorldAngularVelocity, flightContactOffset)
				.add(e.vel);
			let c = flightContactVelocity.y > 0 ? t.gearC * 2 : t.gearC;
			let l = Math.max(0, t.gearK * s - c * flightContactVelocity.y);
			let u = flightContactVelocity.dot(flightGroundForward);
			let d = flightContactVelocity.dot(flightGroundRight);
			let f = -MathUtils.clamp(u * 3000, -a * l, a * l);
			let p = -MathUtils.clamp(d * 4000, l * -0.9, l * 0.9);
			flightContactForce.set(0, l, 0).addScaledVector(flightGroundForward, f);
			flightTotalForce.add(flightContactForce);
			flightGroundTorque.add(
				flightScratchVector.crossVectors(
					flightContactOffset,
					flightContactForce,
				),
			);
			flightContactForce.copy(flightGroundRight).multiplyScalar(p);
			flightTotalForce.add(flightContactForce);
			flightGroundContactOffset.set(
				flightContactOffset.x,
				0,
				flightContactOffset.z,
			);
			flightGroundTorque.add(
				flightScratchVector.crossVectors(
					flightGroundContactOffset,
					flightContactForce,
				),
			);
			return true;
		};
		if (gearDown) {
			let c = n.brake ? `brake` : `wheel`;
			for (let t of a.wheels) {
				if (s(t, c)) {
					e.wheels++;
				}
			}
			if (s(a.third, a.tricycle ? `wheel` : t.skidFriction)) {
				e.wheels++;
			}
		}
		let l = t.crashSpeed * CRASH_SPEED_TOLERANCE;
		for (let contact of a.crash) {
			if (contact.kind === `belly` && (!t.retractableGear || gearDown)) {
				continue;
			}
			flightContactOffset.copy(contact.p).applyQuaternion(e.quat);
			flightContactPosition.copy(e.pos).add(flightContactOffset);
			let n = r.groundHeight(flightContactPosition.x, flightContactPosition.z);
			let i = Math.max(n, 0);
			if (flightContactPosition.y >= i) {
				continue;
			}
			if (!gearDown) bodyContact = true;
			if (n < -0.3) {
				w = true;
			}
			flightContactVelocity
				.crossVectors(flightWorldAngularVelocity, flightContactOffset)
				.add(e.vel);
			let a = flightContactVelocity.length();
			if (contact.kind === `belly`) {
				o.scrape = true;
				if (-flightContactVelocity.y > l || a > l * 5) {
					o.crashed = `Gear-up landing`;
				}
				s(contact.p, t.skidFriction);
			} else if (contact.kind === `prop`) {
				if (e.rpm > 0.15) {
					o.propStrike = true;
				}
				if (a > l * 2) {
					o.crashed = `Nosed over`;
				}
				s(contact.p, 0.6);
			} else if (contact.kind === `top`) {
				o.crashed = `Flipped over`;
			} else if (contact.kind === `tail`) {
				if (-flightContactVelocity.y > l * 1.5) {
					o.crashed = `Tail strike`;
				}
				o.scrape = true;
				s(contact.p, 0.5);
			} else if (contact.kind === `nose` && a > l) {
				o.crashed = `Nosed in`;
			} else if (
				contact.kind === `wing` &&
				(-flightContactVelocity.y > l * 0.6 || a > l * 3)
			) {
				o.crashed = `Cartwheeled`;
			} else {
				o.scrape = true;
				s(contact.p, 0.7);
			}
		}
		if (w && (e.wheels > 0 || o.scrape || o.crashed)) {
			o.splash = true;
			o.crashed = `Ditched in the water`;
		}
		if (e.wheels > 0 || bodyContact) {
			flightScratchVector
				.copy(flightGroundTorque)
				.applyQuaternion(flightInverseQuaternion);
			flightAngularAcceleration.x += flightScratchVector.x / t.inertiaPitch;
			flightAngularAcceleration.y += flightScratchVector.y / t.inertiaYaw;
			flightAngularAcceleration.z += flightScratchVector.z / t.inertiaRoll;
			let r = Math.atan2(flightRightVector.y, flightUpVector.y);
			flightAngularAcceleration.y += x * t.yawStab * _ * 0.75 - y.y * 3.5;
			flightAngularAcceleration.z += -y.z * 4 - r * 12;
			if (e.wheels > 0) {
				let i = Math.hypot(e.vel.x, e.vel.z);
				flightAngularAcceleration.y +=
					-(n.yaw + n.roll * 0.6) *
					t.groundSteer *
					Math.min(i / 4, 1) *
					Math.max(0, 1 - i / 40);
			}
		}
	}
	let groundContact = e.wheels > 0 || bodyContact;
	if (groundContact && !wasOnGround && e.airTime > 0.6) {
		let t = Math.abs(Math.atan2(flightRightVector.y, flightUpVector.y));
		o.touchdown = {
			sink: Math.max(0, -e.lastSink),
			bank: t,
			speed: l,
		};
		if (bodyContact) o.touchdown.gearUp = true;
	}
	if (!groundContact) {
		e.lastSink = e.vel.y;
	}
	e.vel.addScaledVector(flightTotalForce, i / t.mass);
	e.pos.addScaledVector(e.vel, i);
	y.addScaledVector(flightAngularAcceleration, i);
	y.clampScalar(-5, 5);
	flightScratchVector.copy(y).multiplyScalar(i);
	let T = flightScratchVector.length();
	if (T > 1e-9) {
		flightRotationDelta.setFromAxisAngle(
			flightScratchVector.divideScalar(T),
			T,
		);
		e.quat.multiply(flightRotationDelta).normalize();
	}
	let E = r.groundHeight(e.pos.x, e.pos.z);
	if (e.pos.y < Math.max(E, 0) - 1.5) {
		o.crashed =
			o.crashed ?? (E < 0 ? `Ditched in the water` : `Hit the ground`);
	}
	e.onGround = groundContact;
	if (e.onGround) {
		e.groundTime += i;
		e.airTime = 0;
	} else {
		e.airTime += i;
		e.groundTime = 0;
	}
	return o;
}
function getGroundRestQuaternion(e, t, n = DEFAULT_FLIGHT_CONTACTS) {
	let r = new Vector3(e, 0, t).normalize();
	let i = new Vector3(0, 1, 0);
	let a = new Vector3().crossVectors(r, i).normalize();
	let o = new Matrix4().makeBasis(a, i, r.clone().negate());
	let s = new Quaternion().setFromRotationMatrix(o);
	let c = n.third.z - n.wheels[0].z;
	let l = n.third.y - n.wheels[0].y;
	let u = Math.atan(l / c);
	s.multiply(new Quaternion().setFromAxisAngle(new Vector3(1, 0, 0), u));
	return s;
}
function getGroundRestHeight(e, t = DEFAULT_FLIGHT_CONTACTS) {
	return -t.wheels[0].clone().applyQuaternion(e).y - 0.02;
}
var TOUCH_STICK_DEADZONE = 0.06;
var TOUCH_HIT_PADDING = 10;
function createTouchControlLayout(e, t, n) {
	let r = Math.max(0.85, Math.min(1.4, Math.min(e, t) / 390));
	let i = t - n.b - r * 18;
	let a = r * 46;
	let o = e - n.r - r * 14 - a;
	// Reserve room below the minimap for gear, clear of the ATC radio panel.
	let s = Math.max(n.t + 120 + r * 78, t * 0.3);
	let c = {
		x: o,
		y: s,
		w: a,
		h: Math.max(r * 90, i - s),
	};
	let gearButton = {
		x: c.x + c.w / 2,
		y: n.t + 120 + r * 35,
		r: r * 23,
	};
	let l = r * 34;
	let u = {
		x: o - r * 16 - l,
		y: i - l,
		r: l,
	};
	let d = r * 26;
	let f = u.x - l - r * 16 - d;
	let p = {
		x: f,
		y: i - d,
		r: d,
	};
	let m = {
		x: f,
		y: p.y - d * 2 - r * 26,
		r: d,
	};
	let h = r * 23;
	let g = {
		x: u.x,
		y: u.y - l - r * 14 - h,
		r: h,
	};
	let _ = {
		x: u.x,
		y: g.y - h * 2 - r * 12,
		r: h,
	};
	let v = {
		x: n.l + r * 14 + r * 21,
		y: n.t + r * 12 + r * 21,
		r: r * 21,
	};
	let y = r * 58;
	let b = {
		x: n.l + r * 26 + y,
		y: i - y,
	};
	return {
		w: e,
		h: t,
		u: r,
		safe: n,
		stickR: y,
		stickRest: b,
		stickZone: {
			x: 0,
			y: v.y + v.r + r * 6,
			w: Math.min(e * 0.5, f - d - r * 20),
			h: t,
		},
		lever: c,
		buttons: {
			gear: gearButton,
			pause: v,
			camera: g,
			bail: _,
			flapsMore: p,
			flapsLess: m,
			brake: u,
		},
		leftEdge: b.x + y,
		rightEdge: f - d,
	};
}
var touchCircleContainsPoint = (e, t, n, r) =>
	(t - e.x) ** 2 + (n - e.y) ** 2 <= (e.r + r) ** 2;
var touchRectangleContainsPoint = (e, t, n, r) =>
	t >= e.x - r && t <= e.x + e.w + r && n >= e.y - r && n <= e.y + e.h + r;
function hitTestTouchControls(e, t, n, r, gearShown = false) {
	let i = TOUCH_HIT_PADDING * e.u;
	let a = null;
	let o = Infinity;
	for (let s of Object.keys(e.buttons)) {
		if (s === `gear` && !gearShown) continue;
		if (s === `bail` && !r) {
			continue;
		}
		let c = e.buttons[s];
		if (!touchCircleContainsPoint(c, t, n, i)) {
			continue;
		}
		let l = Math.hypot(t - c.x, n - c.y) - c.r;
		if (l < o) {
			o = l;
			a = s;
		}
	}
	return (
		a ||
		(touchRectangleContainsPoint(e.lever, t, n, i)
			? `lever`
			: touchRectangleContainsPoint(e.stickZone, t, n, 0)
				? `stick`
				: null)
	);
}
function shapeTouchStickAxis(e) {
	let t = Math.abs(e);
	if (t <= TOUCH_STICK_DEADZONE) {
		return 0;
	}
	let n = Math.min(1, (t - TOUCH_STICK_DEADZONE) / 0.94);
	return Math.sign(e) * n ** 1.4;
}
function getTouchLeverThrottle(e, t) {
	return Math.max(0, Math.min(1, (e.y + e.h - t) / e.h));
}
function deviceOrientationToFlightAttitude(e, t, n) {
	let r = (e * Math.PI) / 180;
	let i = (t * Math.PI) / 180;
	let a = -Math.cos(r) * Math.sin(i);
	let o = Math.sin(r);
	let s = Math.cos(r) * Math.cos(i);
	let c = (n * Math.PI) / 180;
	let l = a * Math.cos(c) - o * Math.sin(c);
	let u = a * Math.sin(c) + o * Math.cos(c);
	return {
		roll: Math.asin(Math.max(-1, Math.min(1, -l))),
		pitch: Math.atan2(s, u),
	};
}
function tiltAttitudeToStick(e, t) {
	let n = (Math.PI * 25) / 180;
	let r = (Math.PI * 3) / 180;
	let i = (e) => {
		let t = Math.abs(e);
		if (t <= r) {
			return 0;
		} else {
			return Math.sign(e) * Math.min(1, (t - r) / (n - r));
		}
	};
	let a = e.pitch - t.pitch;
	if (a > Math.PI) {
		a -= Math.PI * 2;
	}
	if (a < -Math.PI) {
		a += Math.PI * 2;
	}
	return {
		x: i(e.roll - t.roll),
		y: 0 - i(a),
	};
}
var TouchHud = class {
	layout;
	bailShown = false;
	gearShown = false;
	throttle = 0;
	ptrs = new Map();
	actions = new Set();
	lastLeverTap = -1;
	bailFired = false;
	constructor(
		e = 844,
		t = 390,
		n = {
			l: 0,
			r: 0,
			t: 0,
			b: 0,
		},
	) {
		this.layout = createTouchControlLayout(e, t, n);
	}
	resize(e, t, n) {
		this.layout = createTouchControlLayout(e, t, n);
	}
	down(e, t, n, r) {
		let i = hitTestTouchControls(
			this.layout,
			t,
			n,
			this.bailShown,
			this.gearShown,
		);
		if (!i || (i === `stick` && this.find(`stick`))) {
			return null;
		} else {
			this.ptrs.set(e, {
				ctl: i,
				x0: t,
				y0: n,
				x: t,
				y: n,
				t0: r,
			});
			if (i === `lever`) {
				if (r - this.lastLeverTap < 0.3) {
					this.throttle = 0;
					this.lastLeverTap = -1;
					this.ptrs.get(e).y0 = NaN;
				} else {
					this.lastLeverTap = r;
					this.throttle = getTouchLeverThrottle(this.layout.lever, n);
				}
			} else if (
				i === `pause` ||
				i === `camera` ||
				i === `gear` ||
				i === `flapsMore` ||
				i === `flapsLess`
			) {
				this.actions.add(i);
			} else if (i === `bail`) {
				this.bailFired = false;
			}
			return i;
		}
	}
	move(e, t, n) {
		let r = this.ptrs.get(e);
		if (r) {
			r.x = t;
			r.y = n;
			if (r.ctl === `lever` && !Number.isNaN(r.y0)) {
				this.throttle = getTouchLeverThrottle(this.layout.lever, n);
			}
		}
	}
	up(e) {
		this.ptrs.delete(e);
	}
	cancelAll() {
		this.ptrs.clear();
		this.bailFired = false;
	}
	update(e) {
		let t = this.find(`bail`);
		if (t && this.bailShown && !this.bailFired && e - t.t0 >= 1) {
			this.bailFired = true;
			this.actions.add(`bail`);
		}
	}
	take() {
		let e = new Set(this.actions);
		this.actions.clear();
		return e;
	}
	get active() {
		return this.ptrs.size > 0;
	}
	get leverHeld() {
		return !!this.find(`lever`);
	}
	get brake() {
		return !!this.find(`brake`);
	}
	held(e) {
		return !!this.find(e);
	}
	bailProgress(e) {
		let t = this.find(`bail`);
		if (t && this.bailShown) {
			return Math.min(1, (e - t.t0) / 1);
		} else {
			return 0;
		}
	}
	stick() {
		let e = this.find(`stick`);
		if (!e) {
			return null;
		}
		let t = this.layout.stickR;
		let n = (e.x - e.x0) / t;
		let r = (e.y - e.y0) / t;
		let i = Math.hypot(n, r);
		if (i > 1) {
			n /= i;
			r /= i;
		}
		return {
			ox: e.x0,
			oy: e.y0,
			x: n,
			y: r,
		};
	}
	find(e) {
		for (let t of this.ptrs.values()) {
			if (t.ctl === e) {
				return t;
			}
		}
	}
};
var TouchFlightControls = class e {
	model = new TouchHud();
	enabled = false;
	onTouch = null;
	tiltOn = false;
	tiltNow = null;
	tiltSmooth = null;
	neutral = null;
	constructor(e) {
		let t = () => performance.now() / 1000;
		e.addEventListener(`pointerdown`, (n) => {
			if (
				n.pointerType === `touch` &&
				(this.onTouch?.(),
				this.enabled && this.model.down(n.pointerId, n.clientX, n.clientY, t()))
			) {
				try {
					e.setPointerCapture(n.pointerId);
				} catch {}
				n.preventDefault();
			}
		});
		e.addEventListener(`pointermove`, (e) => {
			if (e.pointerType === `touch`) {
				this.model.move(e.pointerId, e.clientX, e.clientY);
			}
		});
		let n = (e) => {
			if (e.pointerType === `touch`) {
				this.model.up(e.pointerId);
			}
		};
		e.addEventListener(`pointerup`, n);
		e.addEventListener(`pointercancel`, n);
		e.addEventListener(`lostpointercapture`, n);
		e.addEventListener(`contextmenu`, (e) => e.preventDefault());
	}
	setEnabled(e) {
		if (this.enabled && !e) {
			this.model.cancelAll();
		}
		this.enabled = e;
	}
	get tiltEnabled() {
		return this.tiltOn;
	}
	static tiltSupported() {
		return typeof window < `u` && `DeviceOrientationEvent` in window;
	}
	async setTilt(t) {
		if (!t) {
			this.tiltOn = false;
			window.removeEventListener(`deviceorientation`, this.onOrient);
			this.tiltNow = this.tiltSmooth = null;
			return true;
		}
		if (!e.tiltSupported()) {
			return false;
		}
		let n = DeviceOrientationEvent;
		if (typeof n.requestPermission == `function`) {
			try {
				if ((await n.requestPermission()) !== `granted`) {
					return false;
				}
			} catch {
				return false;
			}
		}
		this.tiltOn = true;
		this.neutral = null;
		window.addEventListener(`deviceorientation`, this.onOrient);
		return true;
	}
	recentre() {
		this.neutral = this.tiltSmooth
			? {
					...this.tiltSmooth,
				}
			: null;
	}
	tilt() {
		if (!this.tiltOn || !this.tiltSmooth) {
			return null;
		} else {
			this.neutral ||= {
				...this.tiltSmooth,
			};
			return tiltAttitudeToStick(this.tiltSmooth, this.neutral);
		}
	}
	update(e) {
		this.model.update(performance.now() / 1000);
		if (!this.tiltNow) {
			return;
		}
		this.tiltSmooth ||= {
			...this.tiltNow,
		};
		let t = 1 - Math.exp(-e * 12);
		this.tiltSmooth.roll += (this.tiltNow.roll - this.tiltSmooth.roll) * t;
		let n = this.tiltNow.pitch - this.tiltSmooth.pitch;
		if (n > Math.PI) {
			n -= Math.PI * 2;
		}
		if (n < -Math.PI) {
			n += Math.PI * 2;
		}
		this.tiltSmooth.pitch += n * t;
	}
	onOrient = (e) => {
		if (e.beta === null || e.gamma === null) {
			return;
		}
		let t = screen.orientation?.angle ?? window.orientation ?? 0;
		this.tiltNow = deviceOrientationToFlightAttitude(
			e.beta,
			e.gamma,
			((t % 360) + 360) % 360,
		);
	};
};
var KEYBOARD_AXIS_SLEW_RATE = 4.5;

export {
	CRASH_SPEED_TOLERANCE,
	createFlightInput,
	createTouchControlLayout,
	DEFAULT_FLIGHT_CONTACTS,
	DEFAULT_FLIGHT_SPEC,
	deviceOrientationToFlightAttitude,
	FLAP_DEFLECTION_RADIANS,
	FLAP_LABELS,
	FLAP_POSITIONS,
	FlightState,
	flightAirDirection,
	flightAirVelocity,
	flightAngularAcceleration,
	flightContactForce,
	flightContactOffset,
	flightContactPosition,
	flightContactVelocity,
	flightForwardVector,
	flightGroundContactOffset,
	flightGroundForward,
	flightGroundRight,
	flightGroundTorque,
	flightInverseQuaternion,
	flightLiftDirection,
	flightLocalAirVelocity,
	flightRightVector,
	flightRotationDelta,
	flightScratchVector,
	flightTotalForce,
	flightUpVector,
	flightWorldAngularVelocity,
	getFlapStallAngle,
	getGroundRestHeight,
	getGroundRestQuaternion,
	getLiftCoefficient,
	getTouchLeverThrottle,
	hitTestTouchControls,
	KEYBOARD_AXIS_SLEW_RATE,
	shapeTouchStickAxis,
	stepFlight,
	TOUCH_HIT_PADDING,
	TOUCH_STICK_DEADZONE,
	TouchFlightControls,
	TouchHud,
	tiltAttitudeToStick,
	touchCircleContainsPoint,
	touchRectangleContainsPoint,
};
