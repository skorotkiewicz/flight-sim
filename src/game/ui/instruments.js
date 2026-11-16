import {
	estimatePlanePerformance,
	estimateStallSpeed,
} from "../plane/planemodels.js";
var INSTRUMENT_OUTLINE_COLOR = `#2b1d1a`;
var INSTRUMENT_FONT_FAMILY = `"Baloo 2", "Trebuchet MS", sans-serif`;
var INSTRUMENT_FACE_CENTER_COLOR = `#232427`;
var INSTRUMENT_FACE_EDGE_COLOR = `#141416`;
var INSTRUMENT_MARKING_COLOR = `#f4f4f0`;
var ATTITUDE_SKY_LIGHT_COLOR = `#6fb6e6`;
var ATTITUDE_SKY_DARK_COLOR = `#4f9fd8`;
var ATTITUDE_GROUND_LIGHT_COLOR = `#a87a55`;
var ATTITUDE_GROUND_DARK_COLOR = `#8c6040`;
var ATTITUDE_AIRCRAFT_COLOR = `#f5c51b`;
var INSTRUMENT_FULL_CIRCLE = Math.PI * 2;
var INSTRUMENT_DEGREES_TO_RADIANS = Math.PI / 180;
function buildAirspeedScale(e) {
	let t = 3.6;
	let n = estimateStallSpeed(e, 1) * t;
	let r = estimateStallSpeed(e) * t;
	let i = e.flapSpeed * t;
	let a = estimatePlanePerformance(e).topSpeed * t;
	let o = a * 0.92;
	let s = a * 1.12;
	let c = 20;
	for (let e of [20, 40, 50, 100]) {
		c = e;
		if ((s * 1.12) / e <= 7) {
			break;
		}
	}
	return {
		max: Math.ceil((s * 1.08) / c) * c,
		step: c,
		white: [n, i],
		green: [r, o],
		yellow: [o, s],
		vne: s,
	};
}
function airspeedNeedleAngle(e, t) {
	let n = Math.min(Math.max(e, 0), t * 1.02) / t;
	return -Math.PI / 2 + n * 330 * INSTRUMENT_DEGREES_TO_RADIANS;
}
function altimeterNeedleAngles(e) {
	let t = (e) => -Math.PI / 2 + e * INSTRUMENT_FULL_CIRCLE;
	return {
		hundreds: t(e / 1000),
		thousands: t(e / 10000),
	};
}
function createInstrumentCanvas(e) {
	let t = document.createElement(`canvas`);
	t.width = t.height = e;
	return [t, t.getContext(`2d`)];
}
function drawInstrumentBezel(e, t) {
	e.fillStyle = INSTRUMENT_OUTLINE_COLOR;
	e.beginPath();
	e.arc(3, 4, t, 0, INSTRUMENT_FULL_CIRCLE);
	e.fill();
	let n = e.createLinearGradient(0, -t, 0, t);
	n.addColorStop(0, `#4a4b50`);
	n.addColorStop(0.5, `#1b1c1f`);
	n.addColorStop(1, `#3a3b40`);
	e.fillStyle = n;
	e.beginPath();
	e.arc(0, 0, t, 0, INSTRUMENT_FULL_CIRCLE);
	e.fill();
	e.lineWidth = 3;
	e.strokeStyle = INSTRUMENT_OUTLINE_COLOR;
	e.stroke();
}
function drawInstrumentFace(e, t) {
	let n = e.createRadialGradient(-t * 0.2, -t * 0.3, t * 0.1, 0, 0, t);
	n.addColorStop(0, `#3b3c41`);
	n.addColorStop(0.7, INSTRUMENT_FACE_CENTER_COLOR);
	n.addColorStop(1, INSTRUMENT_FACE_EDGE_COLOR);
	e.fillStyle = n;
	e.beginPath();
	e.arc(0, 0, t, 0, INSTRUMENT_FULL_CIRCLE);
	e.fill();
}
function drawInstrumentGlare(e, t) {
	e.save();
	e.beginPath();
	e.arc(0, 0, t, 0, INSTRUMENT_FULL_CIRCLE);
	e.clip();
	let n = e.createLinearGradient(-t, -t, t * 0.4, t * 0.4);
	n.addColorStop(0, `rgba(255,255,255,0.16)`);
	n.addColorStop(0.45, `rgba(255,255,255,0.03)`);
	n.addColorStop(0.46, `rgba(255,255,255,0)`);
	e.fillStyle = n;
	e.fillRect(-t, -t, t * 2, t * 2);
	e.restore();
}
function drawInstrumentTick(e, t, n, r, i, a = INSTRUMENT_MARKING_COLOR) {
	e.strokeStyle = a;
	e.lineWidth = i;
	e.beginPath();
	e.moveTo(Math.cos(t) * n, Math.sin(t) * n);
	e.lineTo(Math.cos(t) * r, Math.sin(t) * r);
	e.stroke();
}
function drawInstrumentNeedle(e, t, n, r, i) {
	e.save();
	e.rotate(t);
	e.fillStyle = INSTRUMENT_MARKING_COLOR;
	e.strokeStyle = `rgba(0,0,0,0.5)`;
	e.lineWidth = 1;
	e.beginPath();
	e.moveTo(n, 0);
	e.lineTo(n * 0.15, -r);
	e.lineTo(-i, -r * 0.8);
	e.lineTo(-i, r * 0.8);
	e.lineTo(n * 0.15, r);
	e.closePath();
	e.fill();
	e.stroke();
	e.restore();
}
function drawInstrumentHub(e, t) {
	e.fillStyle = `#111`;
	e.beginPath();
	e.arc(0, 0, t, 0, INSTRUMENT_FULL_CIRCLE);
	e.fill();
	e.fillStyle = `#555`;
	e.beginPath();
	e.arc(-t * 0.25, -t * 0.25, t * 0.35, 0, INSTRUMENT_FULL_CIRCLE);
	e.fill();
}
var InstrumentCluster = class {
	asiFace = null;
	altFace = null;
	faceKey = ``;
	scale = null;
	scaleSpec = null;
	draw(e, t, n, r, i) {
		if (i.spec !== this.scaleSpec) {
			this.scale = buildAirspeedScale(i.spec);
			this.scaleSpec = i.spec;
			this.faceKey = ``;
		}
		let a = Math.ceil(r * 152);
		let o = `${a}:${this.scale.max}`;
		if (o !== this.faceKey) {
			this.asiFace = this.buildAsiFace(a, r, this.scale);
			this.altFace = this.buildAltFace(a, r);
			this.faceKey = o;
		}
		e.save();
		e.translate(t, n);
		e.fillStyle = INSTRUMENT_OUTLINE_COLOR;
		traceInstrumentRoundedRect(e, 4, 4, 484, 168, 18);
		e.fill();
		let s = e.createLinearGradient(0, 0, 0, 168);
		s.addColorStop(0, `#8d9096`);
		s.addColorStop(1, `#6c6f75`);
		e.fillStyle = s;
		traceInstrumentRoundedRect(e, 0, 0, 484, 168, 18);
		e.fill();
		e.lineWidth = 3;
		e.strokeStyle = INSTRUMENT_OUTLINE_COLOR;
		e.stroke();
		e.fillStyle = `#5a5d63`;
		for (let [t, n] of [
			[10, 10],
			[474, 10],
			[10, 158],
			[474, 158],
		]) {
			e.beginPath();
			e.arc(t, n, 3, 0, INSTRUMENT_FULL_CIRCLE);
			e.fill();
		}
		let c = [84, 242, 400];
		let l = a / r / 2;
		e.save();
		e.translate(c[0], 84);
		e.drawImage(this.asiFace, -l, -l, a / r, a / r);
		drawInstrumentNeedle(
			e,
			airspeedNeedleAngle(i.airspeed * 3.6, this.scale.max),
			54.72,
			3.2,
			14.4,
		);
		drawInstrumentHub(e, 7.2);
		drawInstrumentGlare(e, 63.36);
		e.restore();
		e.save();
		e.translate(c[1], 84);
		this.drawAttitude(e, 72, i.pitch, i.bank);
		e.restore();
		e.save();
		e.translate(c[2], 84);
		e.drawImage(this.altFace, -l, -l, a / r, a / r);
		let u = altimeterNeedleAngles(Math.max(i.altitude, 0));
		if (i.altitude < 3000) {
			this.drawLowAltFlag(e, 72);
		}
		e.save();
		e.rotate(u.thousands);
		e.fillStyle = INSTRUMENT_MARKING_COLOR;
		e.strokeStyle = `rgba(0,0,0,0.5)`;
		e.lineWidth = 1;
		e.beginPath();
		e.moveTo(36, 0);
		e.lineTo(21.599999999999998, -6);
		e.lineTo(0, -4);
		e.lineTo(0, 4);
		e.lineTo(21.599999999999998, 6);
		e.closePath();
		e.fill();
		e.stroke();
		e.restore();
		drawInstrumentNeedle(e, u.hundreds, 56.160000000000004, 2.6, 8.64);
		drawInstrumentHub(e, 6.4799999999999995);
		drawInstrumentGlare(e, 63.36);
		e.restore();
		e.restore();
	}
	drawLowAltFlag(e, t) {
		e.save();
		e.beginPath();
		e.moveTo(0, t * 0.12);
		e.arc(
			0,
			0,
			t * 0.44,
			INSTRUMENT_DEGREES_TO_RADIANS * 62,
			INSTRUMENT_DEGREES_TO_RADIANS * 118,
		);
		e.closePath();
		e.clip();
		e.fillStyle = `#111`;
		e.fillRect(-t, 0, t * 2, t);
		e.strokeStyle = INSTRUMENT_MARKING_COLOR;
		e.lineWidth = 4;
		for (let n = -8; n < 8; n++) {
			e.beginPath();
			e.moveTo(n * 9, t * 0.1);
			e.lineTo(n * 9 + t * 0.5, t * 0.6);
			e.stroke();
		}
		e.restore();
	}
	drawAttitude(e, t, n, r) {
		drawInstrumentBezel(e, t);
		let i = t * 0.88;
		let a = t * 0.66;
		let o = a / 32;
		let s = Math.max(-90, Math.min(90, n / INSTRUMENT_DEGREES_TO_RADIANS));
		e.save();
		e.beginPath();
		e.arc(0, 0, i, 0, INSTRUMENT_FULL_CIRCLE);
		e.clip();
		e.rotate(-r);
		e.fillStyle = ATTITUDE_SKY_DARK_COLOR;
		e.fillRect(-t, -t, t * 2, t);
		e.fillStyle = ATTITUDE_GROUND_DARK_COLOR;
		e.fillRect(-t, 0, t * 2, t);
		e.strokeStyle = INSTRUMENT_MARKING_COLOR;
		e.lineWidth = 2;
		e.beginPath();
		e.moveTo(-t, 0);
		e.lineTo(t, 0);
		e.stroke();
		for (let t of [-60, -45, -30, -20, -10, 10, 20, 30, 45, 60]) {
			let n = -Math.PI / 2 + t * INSTRUMENT_DEGREES_TO_RADIANS;
			let r = t % 30 == 0;
			if (Math.abs(t) === 45) {
				e.save();
				e.rotate(n + Math.PI / 2);
				e.fillStyle = INSTRUMENT_MARKING_COLOR;
				e.beginPath();
				e.moveTo(0, -i * 0.8);
				e.lineTo(-4, -i * 0.97);
				e.lineTo(4, -i * 0.97);
				e.closePath();
				e.fill();
				e.restore();
			} else {
				drawInstrumentTick(e, n, i * (r ? 0.76 : 0.82), i * 0.98, r ? 3 : 2);
			}
		}
		e.fillStyle = INSTRUMENT_MARKING_COLOR;
		e.beginPath();
		e.moveTo(0, -i * 0.78);
		e.lineTo(-7, -i * 0.98);
		e.lineTo(7, -i * 0.98);
		e.closePath();
		e.fill();
		e.restore();
		e.save();
		e.beginPath();
		e.arc(0, 0, a, 0, INSTRUMENT_FULL_CIRCLE);
		e.clip();
		e.rotate(-r);
		e.translate(0, s * o);
		let c = o * 200;
		let l = e.createLinearGradient(0, -a * 1.2, 0, 0);
		l.addColorStop(0, ATTITUDE_SKY_DARK_COLOR);
		l.addColorStop(1, ATTITUDE_SKY_LIGHT_COLOR);
		e.fillStyle = l;
		e.fillRect(-t, -c, t * 2, c);
		let u = e.createLinearGradient(0, 0, 0, a * 1.2);
		u.addColorStop(0, ATTITUDE_GROUND_LIGHT_COLOR);
		u.addColorStop(1, ATTITUDE_GROUND_DARK_COLOR);
		e.fillStyle = u;
		e.fillRect(-t, 0, t * 2, c);
		e.strokeStyle = INSTRUMENT_MARKING_COLOR;
		e.lineWidth = 2;
		e.beginPath();
		e.moveTo(-t, 0);
		e.lineTo(t, 0);
		e.stroke();
		e.font = `700 ${Math.round(t * 0.1)}px ${INSTRUMENT_FONT_FAMILY}`;
		e.textBaseline = `middle`;
		e.fillStyle = INSTRUMENT_MARKING_COLOR;
		for (let t = -30; t <= 30; t += 5) {
			if (t === 0) {
				continue;
			}
			let n = -t * o;
			let r = t % 10 == 0 ? a * 0.42 : a * 0.18;
			e.lineWidth = t % 10 == 0 ? 1.6 : 1.2;
			e.beginPath();
			e.moveTo(-r / 2, n);
			e.lineTo(r / 2, n);
			e.stroke();
			if (t % 10 == 0) {
				e.textAlign = `right`;
				e.fillText(String(Math.abs(t)), -r / 2 - 3, n);
				e.textAlign = `left`;
				e.fillText(String(Math.abs(t)), r / 2 + 3, n);
			}
		}
		e.restore();
		e.strokeStyle = `rgba(0,0,0,0.35)`;
		e.lineWidth = 2;
		e.beginPath();
		e.arc(0, 0, a, 0, INSTRUMENT_FULL_CIRCLE);
		e.stroke();
		e.strokeStyle = ATTITUDE_AIRCRAFT_COLOR;
		e.lineWidth = 2.5;
		e.beginPath();
		e.moveTo(0, -i * 0.78);
		e.lineTo(-6, -i * 0.62);
		e.lineTo(6, -i * 0.62);
		e.closePath();
		e.stroke();
		e.save();
		e.beginPath();
		e.arc(0, 0, i, 0, INSTRUMENT_FULL_CIRCLE);
		e.clip();
		e.fillStyle = `#1b1c1f`;
		e.fillRect(-t, i * 0.72, t * 2, t);
		e.restore();
		e.fillStyle = `#0e0e10`;
		e.beginPath();
		e.arc(0, t * 0.8, t * 0.17, 0, INSTRUMENT_FULL_CIRCLE);
		e.fill();
		e.fillStyle = ATTITUDE_AIRCRAFT_COLOR;
		e.strokeStyle = `rgba(0,0,0,0.6)`;
		e.lineWidth = 1;
		let d = (t) => {
			e.beginPath();
			e.moveTo(t * a * 0.92, -2.5);
			e.lineTo(t * a * 0.3, -2.5);
			e.lineTo(t * a * 0.18, 7);
			e.lineTo(t * a * 0.12, 7);
			e.lineTo(t * a * 0.22, 2.5);
			e.lineTo(t * a * 0.92, 2.5);
			e.closePath();
			e.fill();
			e.stroke();
		};
		d(-1);
		d(1);
		e.beginPath();
		e.arc(0, 0, 3.5, 0, INSTRUMENT_FULL_CIRCLE);
		e.fill();
		e.stroke();
		drawInstrumentGlare(e, i);
	}
	buildAsiFace(e, t, n) {
		let [r, i] = createInstrumentCanvas(e);
		i.setTransform(t, 0, 0, t, e / 2, e / 2);
		drawInstrumentBezel(i, 72);
		let a = 63.36;
		drawInstrumentFace(i, a);
		let o = (e, t, r, a, o) => {
			i.strokeStyle = o;
			i.lineWidth = a;
			i.beginPath();
			i.arc(
				0,
				0,
				r,
				airspeedNeedleAngle(e, n.max),
				airspeedNeedleAngle(t, n.max),
			);
			i.stroke();
		};
		o(n.green[0], n.green[1], a * 0.92, 6, `#3fb24a`);
		o(n.yellow[0], n.yellow[1], a * 0.92, 6, `#f2c230`);
		o(n.white[0], n.white[1], a * 0.8, 4, INSTRUMENT_MARKING_COLOR);
		drawInstrumentTick(
			i,
			airspeedNeedleAngle(n.vne, n.max),
			a * 0.72,
			a * 0.99,
			4,
			`#e2342b`,
		);
		let s = n.step / 4;
		for (let e = 0; e <= n.max + 0.000001; e += s) {
			let t = airspeedNeedleAngle(e, n.max);
			let r = Math.round(e / s);
			if (r % 4 == 0) {
				drawInstrumentTick(i, t, a * 0.74, a * 0.97, 2.4);
			} else if (r % 2 == 0) {
				drawInstrumentTick(i, t, a * 0.8, a * 0.97, 1.8);
			} else {
				drawInstrumentTick(i, t, a * 0.87, a * 0.97, 1.2);
			}
		}
		i.fillStyle = INSTRUMENT_MARKING_COLOR;
		i.textAlign = `center`;
		i.textBaseline = `middle`;
		i.font = `800 12px ${INSTRUMENT_FONT_FAMILY}`;
		for (let e = n.step; e <= n.max + 0.000001; e += n.step) {
			let t = airspeedNeedleAngle(e, n.max);
			i.fillText(String(e), Math.cos(t) * a * 0.56, Math.sin(t) * a * 0.56);
		}
		i.font = `800 9px ${INSTRUMENT_FONT_FAMILY}`;
		i.fillText(`AIRSPEED`, 0, -13.9392);
		i.font = `700 8px ${INSTRUMENT_FONT_FAMILY}`;
		i.fillText(`KM/H`, 0, a * 0.3);
		return r;
	}
	buildAltFace(e, t) {
		let [n, r] = createInstrumentCanvas(e);
		r.setTransform(t, 0, 0, t, e / 2, e / 2);
		drawInstrumentBezel(r, 72);
		let i = 63.36;
		drawInstrumentFace(r, i);
		for (let e = 0; e < 50; e++) {
			let t = -Math.PI / 2 + (e / 50) * INSTRUMENT_FULL_CIRCLE;
			if (e % 5 == 0) {
				drawInstrumentTick(r, t, i * 0.8, i * 0.97, 2.4);
			} else {
				drawInstrumentTick(r, t, i * 0.88, i * 0.97, 1.2);
			}
		}
		r.fillStyle = INSTRUMENT_MARKING_COLOR;
		r.beginPath();
		r.moveTo(0, -50.688);
		r.lineTo(-5, -62.0928);
		r.lineTo(5, -62.0928);
		r.closePath();
		r.fill();
		r.textAlign = `center`;
		r.textBaseline = `middle`;
		r.font = `800 16px ${INSTRUMENT_FONT_FAMILY}`;
		for (let e = 0; e < 10; e++) {
			let t = -Math.PI / 2 + (e / 10) * INSTRUMENT_FULL_CIRCLE;
			r.fillText(String(e), Math.cos(t) * i * 0.64, Math.sin(t) * i * 0.64);
		}
		r.font = `800 10px ${INSTRUMENT_FONT_FAMILY}`;
		r.fillText(`ALT`, 0, -15.206399999999999);
		r.font = `700 6px ${INSTRUMENT_FONT_FAMILY}`;
		r.fillText(`×100 METRES`, 0, -25.344);
		return n;
	}
};
function traceInstrumentRoundedRect(e, t, n, r, i, a) {
	e.beginPath();
	e.moveTo(t + a, n);
	e.arcTo(t + r, n, t + r, n + i, a);
	e.arcTo(t + r, n + i, t, n + i, a);
	e.arcTo(t, n + i, t, n, a);
	e.arcTo(t, n, t + r, n, a);
	e.closePath();
}
export {
	drawInstrumentFace,
	INSTRUMENT_FULL_CIRCLE,
	altimeterNeedleAngles,
	airspeedNeedleAngle,
	InstrumentCluster,
	traceInstrumentRoundedRect,
	drawInstrumentTick,
	drawInstrumentNeedle,
	createInstrumentCanvas,
	drawInstrumentHub,
	ATTITUDE_AIRCRAFT_COLOR,
	buildAirspeedScale,
	INSTRUMENT_MARKING_COLOR,
	ATTITUDE_GROUND_LIGHT_COLOR,
	INSTRUMENT_FACE_EDGE_COLOR,
	INSTRUMENT_FACE_CENTER_COLOR,
	drawInstrumentGlare,
	drawInstrumentBezel,
	INSTRUMENT_FONT_FAMILY,
	INSTRUMENT_OUTLINE_COLOR,
	ATTITUDE_SKY_LIGHT_COLOR,
	INSTRUMENT_DEGREES_TO_RADIANS,
	ATTITUDE_GROUND_DARK_COLOR,
	ATTITUDE_SKY_DARK_COLOR,
};
