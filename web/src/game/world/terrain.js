import { SimplexNoise, am, im } from "./noise.js";

var um = {
	paved: 900,
	pavedWidth: 30,
	overrun: 60,
	shoulder: 15,
};
var dm = (e, t, n) => (e < t ? t : e > n ? n : e);
function fm(e, t, n) {
	let r = dm((n - e) / (t - e), 0, 1);
	return r * r * (3 - r * 2);
}
function pm(e) {
	let t = (e) => {
		e /= 255;
		if (e <= 0.04045) {
			return e / 12.92;
		} else {
			return ((e + 0.055) / 1.055) ** 2.4;
		}
	};
	return [t((e >> 16) & 255), t((e >> 8) & 255), t(e & 255)];
}
var mm = {
	deep: pm(1925011),
	shallow: pm(3981519),
	foam: pm(16055295),
	sand: pm(15915158),
	meadow: pm(8831567),
	meadow2: pm(7977034),
	airfield: pm(9226070),
	forest: pm(4099900),
	forest2: pm(5086778),
	rock: pm(11049612),
	rockDark: pm(9207154),
	snow: pm(16514559),
	farm: [
		pm(13029728),
		pm(9682764),
		pm(14466402),
		pm(7844168),
		pm(11389292),
		pm(13608544),
	],
};
var hm = 40;
var gm = 110;
var _m = 260;
var Terrain = class {
	seed;
	airfields;
	nCont;
	nHill;
	nMask;
	nRidge;
	nWarp;
	nForest;
	nFarm;
	nVar;
	constructor(e) {
		this.seed = e;
		this.nCont = new SimplexNoise(im(e, 1));
		this.nHill = new SimplexNoise(im(e, 2));
		this.nMask = new SimplexNoise(im(e, 3));
		this.nRidge = new SimplexNoise(im(e, 4));
		this.nWarp = new SimplexNoise(im(e, 5));
		this.nForest = new SimplexNoise(im(e, 7));
		this.nFarm = new SimplexNoise(im(e, 8));
		this.nVar = new SimplexNoise(im(e, 9));
		this.airfields = [];
		this.placeAirfields();
	}
	fbm(e, t, n, r) {
		let i = 1;
		let a = 1;
		let o = 0;
		let s = 0;
		for (let c = 0; c < r; c++) {
			o += i * e.noise(t * a, n * a);
			s += i;
			i *= 0.5;
			a *= 2.03;
		}
		return o / s;
	}
	ridged(e, t, n, r) {
		let i = 1;
		let a = 1;
		let o = 0;
		let s = 0;
		let c = 1;
		for (let l = 0; l < r; l++) {
			let r = 1 - Math.abs(e.noise(t * a, n * a));
			r *= r;
			o += r * i * c;
			s += i;
			c = r;
			i *= 0.5;
			a *= 2.1;
		}
		return o / s;
	}
	rawHeight(e, t) {
		let n = e + this.nWarp.noise(e / 2800, t / 2800) * 350;
		let r = t + this.nWarp.noise(e / 2800 + 31.7, t / 2800 - 17.3) * 350;
		let i = this.fbm(this.nCont, n / 11000, r / 11000, 4);
		let a = 55 + i * 330;
		a += this.fbm(this.nHill, n / 1500, r / 1500, 4) * 48;
		let o =
			fm(0.05, 0.55, this.nMask.noise(n / 8000, r / 8000)) * fm(-0.05, 0.25, i);
		if (o > 0) {
			let e = this.ridged(this.nRidge, n / 2400, r / 2400, 4);
			a += o * e ** 1.5 * 640;
		}
		if (a > 4) {
			let e = (a - 4) / 16;
			let t = Math.floor(e);
			let n = e - t;
			a = 4 + (t + n * 0.45 + fm(0.3, 0.7, n) * 0.55) * 16;
		}
		return a;
	}
	fieldT(e, t, n) {
		let r = t - e.x;
		let i = n - e.z;
		let a = e.length / 2 + hm + _m + gm;
		if (r * r + i * i > a * a) {
			return 0;
		}
		let o = r * e.dirX + i * e.dirZ;
		let s = -r * e.dirZ + i * e.dirX;
		let c = Math.max(Math.abs(o) - (e.length / 2 + hm), 0);
		let l = Math.max(Math.abs(s) - gm, 0);
		return 1 - fm(0, _m, Math.sqrt(c * c + l * l));
	}
	fieldMask(e, t) {
		let n = 0;
		for (let r of this.airfields) {
			n = Math.max(n, this.fieldT(r, e, t));
		}
		return n;
	}
	height(e, t) {
		let n = this.rawHeight(e, t);
		for (let r of this.airfields) {
			let i = this.fieldT(r, e, t);
			if (i > 0) {
				n += (r.height - n) * i;
			}
		}
		return n;
	}
	slopeAt(e, t) {
		let n = this.height(e + 4, t) - this.height(e - 4, t);
		let r = this.height(e, t + 4) - this.height(e, t - 4);
		return 1 - 8 / Math.sqrt(n * n + r * r + 64);
	}
	forestDensity(e, t, n, r, i) {
		if (n < 3) {
			return 0;
		} else {
			return (
				fm(0.04, 0.28, this.fbm(this.nForest, e / 1800, t / 1800, 3)) *
				(1 - fm(0.35, 0.5, r)) *
				(1 - fm(320, 430, n)) *
				(1 - fm(0, 0.3, i))
			);
		}
	}
	farmMask(e, t, n, r) {
		if (n < 5 || n > 170 || r > 0.22) {
			return 0;
		} else {
			return fm(-0.05, 0.12, this.nFarm.noise(e / 5000, t / 5000));
		}
	}
	farmCell(e, t) {
		let n = Math.floor(e / 230);
		let r = Math.floor(t / 230);
		let i = 1000000000000000000;
		let a = 0;
		for (let o = -1; o <= 1; o++) {
			for (let s = -1; s <= 1; s++) {
				let c = n + s;
				let l = r + o;
				let u = im(this.seed, c, l, 31);
				let d = (c + (u & 65535) / 65536) * 230;
				let f = (l + ((u >>> 16) & 65535) / 65536) * 230;
				let p = (d - e) * (d - e) + (f - t) * (f - t);
				if (p < i) {
					i = p;
					a = u;
				}
			}
		}
		return a;
	}
	isPine(e, t, n) {
		return n > 190 || this.nVar.noise(e / 700, t / 700) > 0.25;
	}
	colorAt(e, t, n, r, i, a) {
		let o;
		let s = 1 - r;
		if (n < -0.6) {
			let e = fm(-0.6, -9, n);
			i[a] = mm.shallow[0] + (mm.deep[0] - mm.shallow[0]) * e;
			i[a + 1] = mm.shallow[1] + (mm.deep[1] - mm.shallow[1]) * e;
			i[a + 2] = mm.shallow[2] + (mm.deep[2] - mm.shallow[2]) * e;
			return;
		}
		if (n < 0.6) {
			o = mm.foam;
		} else if (n < 5 && s < 0.2) {
			o = mm.sand;
		} else if (s > 0.42) {
			o = s > 0.58 ? mm.rockDark : mm.rock;
		} else if (n > 440 + this.nVar.noise(e / 400, t / 400) * 70) {
			o = s < 0.3 ? mm.snow : mm.rock;
		} else {
			let r = this.fieldMask(e, t);
			o =
				r > 0.45
					? mm.airfield
					: this.forestDensity(e, t, n, s, r) > 0.45
						? this.nVar.noise(e / 300, t / 300) > 0
							? mm.forest
							: mm.forest2
						: this.farmMask(e, t, n, s) > 0.5 && r < 0.05
							? mm.farm[this.farmCell(e, t) % mm.farm.length]
							: this.nVar.noise(e / 900, t / 900) > 0.1
								? mm.meadow2
								: mm.meadow;
		}
		let c = 1 + this.nVar.noise(e / 160 + 50, t / 160) * 0.06;
		i[a] = o[0] * c;
		i[a + 1] = o[1] * c;
		i[a + 2] = o[2] * c;
	}
	scoreSite(e, t, n) {
		let r = Math.cos(n);
		let i = Math.sin(n);
		let a = Infinity;
		let o = -Infinity;
		let s = 0;
		let c = 0;
		for (let n of [-510, -340, -170, 0, 170, 340, 510]) {
			for (let l of [-90, 0, 90]) {
				let u = e + r * n - i * l;
				let d = t + i * n + r * l;
				let f = this.rawHeight(u, d);
				if (f < a) {
					a = f;
				}
				if (f > o) {
					o = f;
				}
				s += f;
				c++;
			}
		}
		let l = s / c;
		let u = o - a;
		if (a < 10) {
			u += 1000 + (10 - a) * 5;
		}
		if (l > 200) {
			u += (l - 200) * 0.6;
		}
		return {
			score: u,
			mean: l,
		};
	}
	searchField(e, t, n, r, i, a, o) {
		let s = {
			score: Infinity,
			x: e,
			z: t,
			heading: 0,
			mean: 20,
		};
		for (let a = -n; a <= n; a += r) {
			for (let o = -n; o <= n; o += r) {
				if (o * o + a * a > n * n) {
					continue;
				}
				let r = i() * Math.PI;
				for (let n of [r, r + Math.PI / 2]) {
					let r = this.scoreSite(e + o, t + a, n);
					let i = r.score + Math.hypot(o, a) * 0.004;
					if (i < s.score) {
						s = {
							score: i,
							x: e + o,
							z: t + a,
							heading: n,
							mean: r.mean,
						};
					}
				}
			}
		}
		return {
			af: {
				id: a,
				x: s.x,
				z: s.z,
				heading: s.heading,
				dirX: Math.cos(s.heading),
				dirZ: Math.sin(s.heading),
				length: um.paved + um.overrun * 2,
				width: um.pavedWidth + um.shoulder * 2,
				paved: um.paved,
				pavedWidth: um.pavedWidth,
				height: Math.max(s.mean, 9),
				home: o,
			},
			score: s.score,
		};
	}
	placeAirfields() {
		let e = am(im(this.seed, 99));
		let t = this.searchField(0, 0, 1800, 150, e, 0, true);
		if (t.score >= 1000) {
			t = this.searchField(0, 0, 7000, 450, e, 0, true);
		}
		this.airfields.push(t.af);
		let n = e() * Math.PI * 2;
		for (let r = 0; r < 4; r++) {
			let i = n + (r * Math.PI) / 2 + (e() - 0.5) * 0.8;
			let a = 4500 + e() * 2500;
			let o = this.searchField(
				t.af.x + Math.cos(i) * a,
				t.af.z + Math.sin(i) * a,
				1500,
				250,
				e,
				r + 1,
				false,
			);
			this.airfields.push(o.af);
		}
	}
	runwayAt(e, t, n = 0) {
		for (let r of this.airfields) {
			let i = e - r.x;
			let a = t - r.z;
			let o = i * r.dirX + a * r.dirZ;
			let s = -i * r.dirZ + a * r.dirX;
			if (Math.abs(o) <= r.length / 2 + n && Math.abs(s) <= r.width / 2 + n) {
				return r;
			}
		}
		return null;
	}
	surfaceAt(e, t) {
		for (let n of this.airfields) {
			let r = e - n.x;
			let i = t - n.z;
			let a = Math.abs(r * n.dirX + i * n.dirZ);
			let o = Math.abs(-r * n.dirZ + i * n.dirX);
			if (!(a > n.length / 2 + hm + 200)) {
				if (a <= n.paved / 2 && o <= n.pavedWidth / 2) {
					return `paved`;
				}
				if (a <= n.length / 2 && o <= n.width / 2) {
					return `grass`;
				}
			}
		}
		if (this.fieldMask(e, t) > 0.45) {
			return `grass`;
		} else if (this.height(e, t) < 0) {
			return `water`;
		} else {
			return `rough`;
		}
	}
	nearestAirfield(e, t) {
		let n = this.airfields[0];
		let r = Infinity;
		for (let i of this.airfields) {
			let a = Math.hypot(i.x - e, i.z - t);
			if (a < r) {
				r = a;
				n = i;
			}
		}
		return {
			af: n,
			dist: r,
		};
	}
};
var ym = 6711922;

export { Terrain, _m, dm, fm, gm, hm, mm, pm, um, ym };
