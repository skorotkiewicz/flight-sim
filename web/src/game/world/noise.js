function im(...e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n++) {
		let r = Math.imul((e[n] | 0) ^ -1640531527, 2246822507);
		r ^= r >>> 13;
		r = Math.imul(r, 3266489909);
		r ^= r >>> 16;
		t ^= r;
		t = Math.imul(t, 16777619);
		t ^= t >>> 15;
	}
	return t >>> 0;
}
function am(e) {
	let t = e >>> 0;
	return () => {
		t = (t + 1831565813) | 0;
		let e = Math.imul(t ^ (t >>> 15), t | 1);
		e = (e + Math.imul(e ^ (e >>> 7), e | 61)) ^ e;
		return ((e ^ (e >>> 14)) >>> 0) / 4294967296;
	};
}
var om = new Float32Array([
	1, 1, -1, 1, 1, -1, -1, -1, 1, 0, -1, 0, 1, 0, -1, 0, 0, 1, 0, -1, 0, 1, 0,
	-1,
]);
var sm = (Math.sqrt(3) - 1) * 0.5;
var cm = (3 - Math.sqrt(3)) / 6;
var SimplexNoise = class {
	perm = new Uint8Array(512);
	permMod12 = new Uint8Array(512);
	constructor(e) {
		let t = am(e);
		let n = new Uint8Array(256);
		for (let e = 0; e < 256; e++) {
			n[e] = e;
		}
		for (let e = 255; e > 0; e--) {
			let r = Math.floor(t() * (e + 1));
			let i = n[e];
			n[e] = n[r];
			n[r] = i;
		}
		for (let e = 0; e < 512; e++) {
			this.perm[e] = n[e & 255];
			this.permMod12[e] = this.perm[e] % 12;
		}
	}
	noise(e, t) {
		let n = this.perm;
		let r = this.permMod12;
		let i = (e + t) * sm;
		let a = Math.floor(e + i);
		let o = Math.floor(t + i);
		let s = (a + o) * cm;
		let c = e - (a - s);
		let l = t - (o - s);
		let u = +(c > l);
		let d = c > l ? 0 : 1;
		let f = c - u + cm;
		let p = l - d + cm;
		let m = c - 1 + cm * 2;
		let h = l - 1 + cm * 2;
		let g = a & 255;
		let _ = o & 255;
		let v = 0;
		let y = 0.5 - c * c - l * l;
		if (y > 0) {
			let e = r[g + n[_]] * 2;
			y *= y;
			v += y * y * (om[e] * c + om[e + 1] * l);
		}
		let b = 0.5 - f * f - p * p;
		if (b > 0) {
			let e = r[g + u + n[_ + d]] * 2;
			b *= b;
			v += b * b * (om[e] * f + om[e + 1] * p);
		}
		let x = 0.5 - m * m - h * h;
		if (x > 0) {
			let e = r[g + 1 + n[_ + 1]] * 2;
			x *= x;
			v += x * x * (om[e] * m + om[e + 1] * h);
		}
		return v * 70;
	}
};

export { SimplexNoise, am, cm, im, om, sm };
