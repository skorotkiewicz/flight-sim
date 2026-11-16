var WORLD_MAP_OUTLINE_COLOR = `#2b1d1a`;
var WORLD_MAP_PANEL_COLOR = `#fff6dd`;
var WORLD_MAP_ROUTE_COLOR = `#2a9d8f`;
var WORLD_MAP_DESTINATION_COLOR = `#f2b134`;
var WORLD_MAP_FONT_FAMILY = `"Baloo 2", "Trebuchet MS", sans-serif`;
function worldMapTerrainColor(e) {
	if (e < 0) {
		if (e < -25) {
			return [70, 150, 205];
		} else if (e < -8) {
			return [92, 176, 216];
		} else {
			return [124, 206, 222];
		}
	}
	if (e < 5) {
		return [240, 220, 160];
	}
	if (e > 440) {
		return [250, 250, 255];
	}
	if (e > 300) {
		return [170, 155, 140];
	}
	let t = e / 300;
	return [150 - t * 40, 210 - t * 50, 90 - t * 20];
}
function drawRouteMap(e, t, n, r) {
	let i = e.width;
	let a = e.height;
	let o = e.getContext(`2d`);
	let s = Infinity;
	let c = -Infinity;
	let l = Infinity;
	let u = -Infinity;
	for (let e of n.pts) {
		s = Math.min(s, e.x);
		c = Math.max(c, e.x);
		l = Math.min(l, e.z);
		u = Math.max(u, e.z);
	}
	let d = 1400;
	s -= d;
	c += d;
	l -= d;
	u += d;
	let f = Math.max((c - s) / i, (u - l) / a);
	let p = (s + c) / 2;
	let m = (l + u) / 2;
	let h = (e, t) => ({
		x: i / 2 + (e - p) / f,
		y: a / 2 + (t - m) / f,
	});
	let g = Math.ceil(i / 4) + 1;
	let _ = Math.ceil(a / 4) + 1;
	let v = new Float32Array(g * _);
	for (let e = 0; e < _; e++) {
		for (let n = 0; n < g; n++) {
			v[e * g + n] = t.rawHeight(
				p + (n * 4 - i / 2) * f,
				m + (e * 4 - a / 2) * f,
			);
		}
	}
	let y = document.createElement(`canvas`);
	y.width = g;
	y.height = _;
	let b = y.getContext(`2d`);
	let x = b.createImageData(g, _);
	for (let e = 0; e < _; e++) {
		for (let t = 0; t < g; t++) {
			let n = v[e * g + t];
			let [r, i, a] = worldMapTerrainColor(n);
			let o = v[e * g + Math.max(0, t - 1)];
			let s = v[Math.max(0, e - 1) * g + t];
			let c =
				n < 0
					? 1
					: Math.max(0.75, Math.min(1.2, 1 + (o - n + (s - n)) * 0.004));
			let l = (e * g + t) * 4;
			x.data[l] = r * c;
			x.data[l + 1] = i * c;
			x.data[l + 2] = a * c;
			x.data[l + 3] = 255;
		}
	}
	b.putImageData(x, 0, 0);
	o.imageSmoothingEnabled = true;
	o.clearRect(0, 0, i, a);
	o.drawImage(y, 0, 0, g * 4, _ * 4);
	let S = e.clientWidth ? i / e.clientWidth : 2;
	let C = (e, n) => {
		let r = t.airfields[e];
		let i = h(r.x, r.z);
		let a = Math.max(r.length / f, S * 14);
		o.save();
		o.translate(i.x, i.y);
		o.rotate(r.heading);
		o.fillStyle = n;
		o.strokeStyle = WORLD_MAP_OUTLINE_COLOR;
		o.lineWidth = S * 2;
		o.fillRect(-a / 2, S * -3, a, S * 6);
		o.strokeRect(-a / 2, S * -3, a, S * 6);
		o.restore();
		return i;
	};
	for (let e = 0; e < t.airfields.length; e++) {
		if (t.airfields[e] !== n.from && t.airfields[e] !== n.to) {
			C(e, `#ffffff`);
		}
	}
	o.lineJoin = `round`;
	o.lineCap = `round`;
	o.beginPath();
	n.pts.forEach((e, t) => {
		let n = h(e.x, e.z);
		if (t === 0) {
			o.moveTo(n.x, n.y);
		} else {
			o.lineTo(n.x, n.y);
		}
	});
	o.strokeStyle = WORLD_MAP_OUTLINE_COLOR;
	o.lineWidth = S * 7;
	o.stroke();
	o.strokeStyle = `#ffffff`;
	o.lineWidth = S * 3.5;
	o.stroke();
	let w = Math.max(800, n.length / 12);
	for (let e = w / 2; e < n.sAim; e += w) {
		let t = 0;
		while (t < n.pts.length - 2 && n.pts[t + 1].s < e) {
			t++;
		}
		let r = h(n.pts[Math.max(0, t - 2)].x, n.pts[Math.max(0, t - 2)].z);
		let i = h(
			n.pts[Math.min(n.pts.length - 1, t + 2)].x,
			n.pts[Math.min(n.pts.length - 1, t + 2)].z,
		);
		let a = h(n.pts[t].x, n.pts[t].z);
		o.save();
		o.translate(a.x, a.y);
		o.rotate(Math.atan2(i.y - r.y, i.x - r.x));
		o.beginPath();
		o.moveTo(S * 5, 0);
		o.lineTo(S * -4, S * -5);
		o.lineTo(S * -1.5, 0);
		o.lineTo(S * -4, S * 5);
		o.closePath();
		o.fillStyle = WORLD_MAP_ROUTE_COLOR;
		o.strokeStyle = WORLD_MAP_OUTLINE_COLOR;
		o.lineWidth = S * 1.5;
		o.fill();
		o.stroke();
		o.restore();
	}
	let T = (e, t, n) => {
		o.font = `800 ${S * 13}px ${WORLD_MAP_FONT_FAMILY}`;
		let r = o.measureText(e).width + S * 12;
		let a = S * 20;
		let s = t.x - r / 2;
		let c = t.y - S * 14 - a;
		if (c < S * 4) {
			c = t.y + S * 14;
		}
		s = Math.max(S * 4, Math.min(i - r - S * 4, s));
		o.fillStyle = WORLD_MAP_OUTLINE_COLOR;
		o.beginPath();
		o.roundRect(s + S * 2, c + S * 2, r, a, S * 7);
		o.fill();
		o.fillStyle = n;
		o.beginPath();
		o.roundRect(s, c, r, a, S * 7);
		o.fill();
		o.strokeStyle = WORLD_MAP_OUTLINE_COLOR;
		o.lineWidth = S * 2;
		o.stroke();
		o.fillStyle = WORLD_MAP_OUTLINE_COLOR;
		o.textAlign = `center`;
		o.textBaseline = `middle`;
		o.fillText(e, s + r / 2, c + a / 2 + S);
		o.textAlign = `left`;
		o.textBaseline = `alphabetic`;
	};
	let E = C(t.airfields.indexOf(n.from), WORLD_MAP_ROUTE_COLOR);
	let D = C(t.airfields.indexOf(n.to), WORLD_MAP_DESTINATION_COLOR);
	T(`Home`, E, WORLD_MAP_PANEL_COLOR);
	T(r[t.airfields.indexOf(n.to)], D, WORLD_MAP_DESTINATION_COLOR);
	o.save();
	o.translate(i - S * 22, S * 26);
	o.fillStyle = WORLD_MAP_PANEL_COLOR;
	o.strokeStyle = WORLD_MAP_OUTLINE_COLOR;
	o.lineWidth = S * 2;
	o.beginPath();
	o.arc(0, 0, S * 14, 0, Math.PI * 2);
	o.fill();
	o.stroke();
	o.fillStyle = WORLD_MAP_OUTLINE_COLOR;
	o.beginPath();
	o.moveTo(0, S * -10);
	o.lineTo(S * -5, S * 3);
	o.lineTo(S * 5, S * 3);
	o.closePath();
	o.fill();
	o.font = `800 ${S * 9}px ${WORLD_MAP_FONT_FAMILY}`;
	o.textAlign = `center`;
	o.fillText(`N`, 0, S * 11);
	o.restore();
	let O = [1, 2, 5, 10].find((e) => (e * 1000) / f > S * 50) ?? 10;
	let k = (O * 1000) / f;
	let A = S * 12;
	let j = a - S * 14;
	o.fillStyle = WORLD_MAP_PANEL_COLOR;
	o.strokeStyle = WORLD_MAP_OUTLINE_COLOR;
	o.lineWidth = S * 2;
	o.fillRect(A, j - S * 5, k, S * 6);
	o.strokeRect(A, j - S * 5, k, S * 6);
	o.fillStyle = WORLD_MAP_OUTLINE_COLOR;
	o.font = `800 ${S * 11}px ${WORLD_MAP_FONT_FAMILY}`;
	o.textAlign = `left`;
	o.fillText(`${O} km`, A + k + S * 6, j + S * 1);
}
export {
	WORLD_MAP_ROUTE_COLOR,
	WORLD_MAP_PANEL_COLOR,
	WORLD_MAP_OUTLINE_COLOR,
	WORLD_MAP_DESTINATION_COLOR,
	worldMapTerrainColor,
	drawRouteMap,
	WORLD_MAP_FONT_FAMILY,
};
