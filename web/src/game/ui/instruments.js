import { gf, mf } from "../plane/planemodels.js";

var pp = `#2b1d1a`;
var mp = `"Baloo 2", "Trebuchet MS", sans-serif`;
var hp = `#232427`;
var gp = `#141416`;
var _p = `#f4f4f0`;
var vp = `#6fb6e6`;
var yp = `#4f9fd8`;
var bp = `#a87a55`;
var xp = `#8c6040`;
var Sp = `#f5c51b`;
var Cp = Math.PI * 2;
var wp = Math.PI / 180;
function Tp(e) {
	let t = 3.6;
	let n = mf(e, 1) * t;
	let r = mf(e) * t;
	let i = e.flapSpeed * t;
	let a = gf(e).topSpeed * t;
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
function Ep(e, t) {
	let n = Math.min(Math.max(e, 0), t * 1.02) / t;
	return -Math.PI / 2 + n * 330 * wp;
}
function Dp(e) {
	let t = (e) => -Math.PI / 2 + e * Cp;
	return {
		hundreds: t(e / 1000),
		thousands: t(e / 10000),
	};
}
function Op(e) {
	let t = document.createElement(`canvas`);
	t.width = t.height = e;
	return [t, t.getContext(`2d`)];
}
function kp(e, t) {
	e.fillStyle = pp;
	e.beginPath();
	e.arc(3, 4, t, 0, Cp);
	e.fill();
	let n = e.createLinearGradient(0, -t, 0, t);
	n.addColorStop(0, `#4a4b50`);
	n.addColorStop(0.5, `#1b1c1f`);
	n.addColorStop(1, `#3a3b40`);
	e.fillStyle = n;
	e.beginPath();
	e.arc(0, 0, t, 0, Cp);
	e.fill();
	e.lineWidth = 3;
	e.strokeStyle = pp;
	e.stroke();
}
function Ap(e, t) {
	let n = e.createRadialGradient(-t * 0.2, -t * 0.3, t * 0.1, 0, 0, t);
	n.addColorStop(0, `#3b3c41`);
	n.addColorStop(0.7, hp);
	n.addColorStop(1, gp);
	e.fillStyle = n;
	e.beginPath();
	e.arc(0, 0, t, 0, Cp);
	e.fill();
}
function jp(e, t) {
	e.save();
	e.beginPath();
	e.arc(0, 0, t, 0, Cp);
	e.clip();
	let n = e.createLinearGradient(-t, -t, t * 0.4, t * 0.4);
	n.addColorStop(0, `rgba(255,255,255,0.16)`);
	n.addColorStop(0.45, `rgba(255,255,255,0.03)`);
	n.addColorStop(0.46, `rgba(255,255,255,0)`);
	e.fillStyle = n;
	e.fillRect(-t, -t, t * 2, t * 2);
	e.restore();
}
function Mp(e, t, n, r, i, a = _p) {
	e.strokeStyle = a;
	e.lineWidth = i;
	e.beginPath();
	e.moveTo(Math.cos(t) * n, Math.sin(t) * n);
	e.lineTo(Math.cos(t) * r, Math.sin(t) * r);
	e.stroke();
}
function Np(e, t, n, r, i) {
	e.save();
	e.rotate(t);
	e.fillStyle = _p;
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
function Pp(e, t) {
	e.fillStyle = `#111`;
	e.beginPath();
	e.arc(0, 0, t, 0, Cp);
	e.fill();
	e.fillStyle = `#555`;
	e.beginPath();
	e.arc(-t * 0.25, -t * 0.25, t * 0.35, 0, Cp);
	e.fill();
}
var Fp = class {
	asiFace = null;
	altFace = null;
	faceKey = ``;
	scale = null;
	scaleSpec = null;
	draw(e, t, n, r, i) {
		if (i.spec !== this.scaleSpec) {
			this.scale = Tp(i.spec);
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
		e.fillStyle = pp;
		Ip(e, 4, 4, 484, 168, 18);
		e.fill();
		let s = e.createLinearGradient(0, 0, 0, 168);
		s.addColorStop(0, `#8d9096`);
		s.addColorStop(1, `#6c6f75`);
		e.fillStyle = s;
		Ip(e, 0, 0, 484, 168, 18);
		e.fill();
		e.lineWidth = 3;
		e.strokeStyle = pp;
		e.stroke();
		e.fillStyle = `#5a5d63`;
		for (let [t, n] of [
			[10, 10],
			[474, 10],
			[10, 158],
			[474, 158],
		]) {
			e.beginPath();
			e.arc(t, n, 3, 0, Cp);
			e.fill();
		}
		let c = [84, 242, 400];
		let l = a / r / 2;
		e.save();
		e.translate(c[0], 84);
		e.drawImage(this.asiFace, -l, -l, a / r, a / r);
		Np(e, Ep(i.airspeed * 3.6, this.scale.max), 54.72, 3.2, 14.4);
		Pp(e, 7.2);
		jp(e, 63.36);
		e.restore();
		e.save();
		e.translate(c[1], 84);
		this.drawAttitude(e, 72, i.pitch, i.bank);
		e.restore();
		e.save();
		e.translate(c[2], 84);
		e.drawImage(this.altFace, -l, -l, a / r, a / r);
		let u = Dp(Math.max(i.altitude, 0));
		if (i.altitude < 3000) {
			this.drawLowAltFlag(e, 72);
		}
		e.save();
		e.rotate(u.thousands);
		e.fillStyle = _p;
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
		Np(e, u.hundreds, 56.160000000000004, 2.6, 8.64);
		Pp(e, 6.4799999999999995);
		jp(e, 63.36);
		e.restore();
		e.restore();
	}
	drawLowAltFlag(e, t) {
		e.save();
		e.beginPath();
		e.moveTo(0, t * 0.12);
		e.arc(0, 0, t * 0.44, wp * 62, wp * 118);
		e.closePath();
		e.clip();
		e.fillStyle = `#111`;
		e.fillRect(-t, 0, t * 2, t);
		e.strokeStyle = _p;
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
		kp(e, t);
		let i = t * 0.88;
		let a = t * 0.66;
		let o = a / 32;
		let s = Math.max(-90, Math.min(90, n / wp));
		e.save();
		e.beginPath();
		e.arc(0, 0, i, 0, Cp);
		e.clip();
		e.rotate(-r);
		e.fillStyle = yp;
		e.fillRect(-t, -t, t * 2, t);
		e.fillStyle = xp;
		e.fillRect(-t, 0, t * 2, t);
		e.strokeStyle = _p;
		e.lineWidth = 2;
		e.beginPath();
		e.moveTo(-t, 0);
		e.lineTo(t, 0);
		e.stroke();
		for (let t of [-60, -45, -30, -20, -10, 10, 20, 30, 45, 60]) {
			let n = -Math.PI / 2 + t * wp;
			let r = t % 30 == 0;
			if (Math.abs(t) === 45) {
				e.save();
				e.rotate(n + Math.PI / 2);
				e.fillStyle = _p;
				e.beginPath();
				e.moveTo(0, -i * 0.8);
				e.lineTo(-4, -i * 0.97);
				e.lineTo(4, -i * 0.97);
				e.closePath();
				e.fill();
				e.restore();
			} else {
				Mp(e, n, i * (r ? 0.76 : 0.82), i * 0.98, r ? 3 : 2);
			}
		}
		e.fillStyle = _p;
		e.beginPath();
		e.moveTo(0, -i * 0.78);
		e.lineTo(-7, -i * 0.98);
		e.lineTo(7, -i * 0.98);
		e.closePath();
		e.fill();
		e.restore();
		e.save();
		e.beginPath();
		e.arc(0, 0, a, 0, Cp);
		e.clip();
		e.rotate(-r);
		e.translate(0, s * o);
		let c = o * 200;
		let l = e.createLinearGradient(0, -a * 1.2, 0, 0);
		l.addColorStop(0, yp);
		l.addColorStop(1, vp);
		e.fillStyle = l;
		e.fillRect(-t, -c, t * 2, c);
		let u = e.createLinearGradient(0, 0, 0, a * 1.2);
		u.addColorStop(0, bp);
		u.addColorStop(1, xp);
		e.fillStyle = u;
		e.fillRect(-t, 0, t * 2, c);
		e.strokeStyle = _p;
		e.lineWidth = 2;
		e.beginPath();
		e.moveTo(-t, 0);
		e.lineTo(t, 0);
		e.stroke();
		e.font = `700 ${Math.round(t * 0.1)}px ${mp}`;
		e.textBaseline = `middle`;
		e.fillStyle = _p;
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
		e.arc(0, 0, a, 0, Cp);
		e.stroke();
		e.strokeStyle = Sp;
		e.lineWidth = 2.5;
		e.beginPath();
		e.moveTo(0, -i * 0.78);
		e.lineTo(-6, -i * 0.62);
		e.lineTo(6, -i * 0.62);
		e.closePath();
		e.stroke();
		e.save();
		e.beginPath();
		e.arc(0, 0, i, 0, Cp);
		e.clip();
		e.fillStyle = `#1b1c1f`;
		e.fillRect(-t, i * 0.72, t * 2, t);
		e.restore();
		e.fillStyle = `#0e0e10`;
		e.beginPath();
		e.arc(0, t * 0.8, t * 0.17, 0, Cp);
		e.fill();
		e.fillStyle = Sp;
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
		e.arc(0, 0, 3.5, 0, Cp);
		e.fill();
		e.stroke();
		jp(e, i);
	}
	buildAsiFace(e, t, n) {
		let [r, i] = Op(e);
		i.setTransform(t, 0, 0, t, e / 2, e / 2);
		kp(i, 72);
		let a = 63.36;
		Ap(i, a);
		let o = (e, t, r, a, o) => {
			i.strokeStyle = o;
			i.lineWidth = a;
			i.beginPath();
			i.arc(0, 0, r, Ep(e, n.max), Ep(t, n.max));
			i.stroke();
		};
		o(n.green[0], n.green[1], a * 0.92, 6, `#3fb24a`);
		o(n.yellow[0], n.yellow[1], a * 0.92, 6, `#f2c230`);
		o(n.white[0], n.white[1], a * 0.8, 4, _p);
		Mp(i, Ep(n.vne, n.max), a * 0.72, a * 0.99, 4, `#e2342b`);
		let s = n.step / 4;
		for (let e = 0; e <= n.max + 0.000001; e += s) {
			let t = Ep(e, n.max);
			let r = Math.round(e / s);
			if (r % 4 == 0) {
				Mp(i, t, a * 0.74, a * 0.97, 2.4);
			} else if (r % 2 == 0) {
				Mp(i, t, a * 0.8, a * 0.97, 1.8);
			} else {
				Mp(i, t, a * 0.87, a * 0.97, 1.2);
			}
		}
		i.fillStyle = _p;
		i.textAlign = `center`;
		i.textBaseline = `middle`;
		i.font = `800 12px ${mp}`;
		for (let e = n.step; e <= n.max + 0.000001; e += n.step) {
			let t = Ep(e, n.max);
			i.fillText(String(e), Math.cos(t) * a * 0.56, Math.sin(t) * a * 0.56);
		}
		i.font = `800 9px ${mp}`;
		i.fillText(`AIRSPEED`, 0, -13.9392);
		i.font = `700 8px ${mp}`;
		i.fillText(`KM/H`, 0, a * 0.3);
		return r;
	}
	buildAltFace(e, t) {
		let [n, r] = Op(e);
		r.setTransform(t, 0, 0, t, e / 2, e / 2);
		kp(r, 72);
		let i = 63.36;
		Ap(r, i);
		for (let e = 0; e < 50; e++) {
			let t = -Math.PI / 2 + (e / 50) * Cp;
			if (e % 5 == 0) {
				Mp(r, t, i * 0.8, i * 0.97, 2.4);
			} else {
				Mp(r, t, i * 0.88, i * 0.97, 1.2);
			}
		}
		r.fillStyle = _p;
		r.beginPath();
		r.moveTo(0, -50.688);
		r.lineTo(-5, -62.0928);
		r.lineTo(5, -62.0928);
		r.closePath();
		r.fill();
		r.textAlign = `center`;
		r.textBaseline = `middle`;
		r.font = `800 16px ${mp}`;
		for (let e = 0; e < 10; e++) {
			let t = -Math.PI / 2 + (e / 10) * Cp;
			r.fillText(String(e), Math.cos(t) * i * 0.64, Math.sin(t) * i * 0.64);
		}
		r.font = `800 10px ${mp}`;
		r.fillText(`ALT`, 0, -15.206399999999999);
		r.font = `700 6px ${mp}`;
		r.fillText(`×100 METRES`, 0, -25.344);
		return n;
	}
};
function Ip(e, t, n, r, i, a) {
	e.beginPath();
	e.moveTo(t + a, n);
	e.arcTo(t + r, n, t + r, n + i, a);
	e.arcTo(t + r, n + i, t, n + i, a);
	e.arcTo(t, n + i, t, n, a);
	e.arcTo(t, n, t + r, n, a);
	e.closePath();
}

export {
	Ap,
	Cp,
	Dp,
	Ep,
	Fp,
	Ip,
	Mp,
	Np,
	Op,
	Pp,
	Sp,
	Tp,
	_p,
	bp,
	gp,
	hp,
	jp,
	kp,
	mp,
	pp,
	vp,
	wp,
	xp,
	yp,
};
