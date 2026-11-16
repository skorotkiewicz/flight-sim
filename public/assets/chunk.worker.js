function hashSeedIntegers(...e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n++) {
		let r = Math.imul((e[n] | 0) ^ 2654435769, 2246822507);
		(r ^= r >>> 13),
			(r = Math.imul(r, 3266489909)),
			(r ^= r >>> 16),
			(t ^= r),
			(t = Math.imul(t, 16777619)),
			(t ^= t >>> 15);
	}
	return t >>> 0;
}
function createSeededRandom(e) {
	let t = e >>> 0;
	return () => {
		t = (t + 1831565813) | 0;
		let e = Math.imul(t ^ (t >>> 15), 1 | t);
		return (
			(e = (e + Math.imul(e ^ (e >>> 7), 61 | e)) ^ e),
			((e ^ (e >>> 14)) >>> 0) / 4294967296
		);
	};
}
const SIMPLEX_GRADIENTS_2D = new Float32Array([
		1, 1, -1, 1, 1, -1, -1, -1, 1, 0, -1, 0, 1, 0, -1, 0, 0, 1, 0, -1, 0, 1, 0,
		-1,
	]),
	SIMPLEX_SKEW_2D = 0.5 * (Math.sqrt(3) - 1),
	SIMPLEX_UNSKEW_2D = (3 - Math.sqrt(3)) / 6;
var SimplexNoise = class {
	perm = new Uint8Array(512);
	permMod12 = new Uint8Array(512);
	constructor(e) {
		let n = createSeededRandom(e),
			r = new Uint8Array(256);
		for (let e = 0; e < 256; e++) r[e] = e;
		for (let e = 255; e > 0; e--) {
			let t = Math.floor(n() * (e + 1)),
				i = r[e];
			(r[e] = r[t]), (r[t] = i);
		}
		for (let e = 0; e < 512; e++)
			(this.perm[e] = r[e & 255]), (this.permMod12[e] = this.perm[e] % 12);
	}
	noise(e, t) {
		let a = this.perm,
			o = this.permMod12,
			s = (e + t) * SIMPLEX_SKEW_2D,
			c = Math.floor(e + s),
			l = Math.floor(t + s),
			u = (c + l) * SIMPLEX_UNSKEW_2D,
			d = e - (c - u),
			f = t - (l - u),
			p = +(d > f),
			m = d > f ? 0 : 1,
			h = d - p + SIMPLEX_UNSKEW_2D,
			g = f - m + SIMPLEX_UNSKEW_2D,
			_ = d - 1 + 2 * SIMPLEX_UNSKEW_2D,
			v = f - 1 + 2 * SIMPLEX_UNSKEW_2D,
			y = c & 255,
			b = l & 255,
			x = 0,
			S = 0.5 - d * d - f * f;
		if (S > 0) {
			let e = o[y + a[b]] * 2;
			(S *= S),
				(x +=
					S *
					S *
					(SIMPLEX_GRADIENTS_2D[e] * d + SIMPLEX_GRADIENTS_2D[e + 1] * f));
		}
		let C = 0.5 - h * h - g * g;
		if (C > 0) {
			let e = o[y + p + a[b + m]] * 2;
			(C *= C),
				(x +=
					C *
					C *
					(SIMPLEX_GRADIENTS_2D[e] * h + SIMPLEX_GRADIENTS_2D[e + 1] * g));
		}
		let w = 0.5 - _ * _ - v * v;
		if (w > 0) {
			let e = o[y + 1 + a[b + 1]] * 2;
			(w *= w),
				(x +=
					w *
					w *
					(SIMPLEX_GRADIENTS_2D[e] * _ + SIMPLEX_GRADIENTS_2D[e + 1] * v));
		}
		return 70 * x;
	}
};
const RUNWAY_DIMENSIONS = {
		paved: 900,
		pavedWidth: 30,
		overrun: 60,
		shoulder: 15,
	},
	clampTerrainValue = (e, t, n) => (e < t ? t : e > n ? n : e);
function terrainSmoothstep(e, t, n) {
	let r = clampTerrainValue((n - e) / (t - e), 0, 1);
	return r * r * (3 - 2 * r);
}
function hexToLinearRgb(e) {
	let t = (e) => (
		(e /= 255), e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4
	);
	return [t((e >> 16) & 255), t((e >> 8) & 255), t(e & 255)];
}
const TERRAIN_PALETTE = {
	deep: hexToLinearRgb(1925011),
	shallow: hexToLinearRgb(3981519),
	foam: hexToLinearRgb(16055295),
	sand: hexToLinearRgb(15915158),
	meadow: hexToLinearRgb(8831567),
	meadow2: hexToLinearRgb(7977034),
	airfield: hexToLinearRgb(9226070),
	forest: hexToLinearRgb(4099900),
	forest2: hexToLinearRgb(5086778),
	rock: hexToLinearRgb(11049612),
	rockDark: hexToLinearRgb(9207154),
	snow: hexToLinearRgb(16514559),
	farm: [
		hexToLinearRgb(13029728),
		hexToLinearRgb(9682764),
		hexToLinearRgb(14466402),
		hexToLinearRgb(7844168),
		hexToLinearRgb(11389292),
		hexToLinearRgb(13608544),
	],
};
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
	constructor(t) {
		(this.seed = t),
			(this.nCont = new SimplexNoise(hashSeedIntegers(t, 1))),
			(this.nHill = new SimplexNoise(hashSeedIntegers(t, 2))),
			(this.nMask = new SimplexNoise(hashSeedIntegers(t, 3))),
			(this.nRidge = new SimplexNoise(hashSeedIntegers(t, 4))),
			(this.nWarp = new SimplexNoise(hashSeedIntegers(t, 5))),
			(this.nForest = new SimplexNoise(hashSeedIntegers(t, 7))),
			(this.nFarm = new SimplexNoise(hashSeedIntegers(t, 8))),
			(this.nVar = new SimplexNoise(hashSeedIntegers(t, 9))),
			(this.airfields = []),
			this.placeAirfields();
	}
	fbm(e, t, n, r) {
		let i = 1,
			a = 1,
			o = 0,
			s = 0;
		for (let c = 0; c < r; c++)
			(o += i * e.noise(t * a, n * a)), (s += i), (i *= 0.5), (a *= 2.03);
		return o / s;
	}
	ridged(e, t, n, r) {
		let i = 1,
			a = 1,
			o = 0,
			s = 0,
			c = 1;
		for (let l = 0; l < r; l++) {
			let r = 1 - Math.abs(e.noise(t * a, n * a));
			(r *= r), (o += r * i * c), (s += i), (c = r), (i *= 0.5), (a *= 2.1);
		}
		return o / s;
	}
	rawHeight(e, t) {
		let n = e + 350 * this.nWarp.noise(e / 2800, t / 2800),
			r = t + 350 * this.nWarp.noise(e / 2800 + 31.7, t / 2800 - 17.3),
			i = this.fbm(this.nCont, n / 11e3, r / 11e3, 4),
			a = 55 + i * 330;
		a += this.fbm(this.nHill, n / 1500, r / 1500, 4) * 48;
		let o =
			terrainSmoothstep(0.05, 0.55, this.nMask.noise(n / 8e3, r / 8e3)) *
			terrainSmoothstep(-0.05, 0.25, i);
		if (o > 0) {
			let e = this.ridged(this.nRidge, n / 2400, r / 2400, 4);
			a += o * e ** 1.5 * 640;
		}
		if (a > 4) {
			let e = (a - 4) / 16,
				t = Math.floor(e),
				n = e - t;
			a = 4 + (t + n * 0.45 + terrainSmoothstep(0.3, 0.7, n) * 0.55) * 16;
		}
		return a;
	}
	fieldT(e, t, n) {
		let r = t - e.x,
			i = n - e.z,
			a = e.length / 2 + 40 + 260 + 110;
		if (r * r + i * i > a * a) return 0;
		let o = r * e.dirX + i * e.dirZ,
			s = -r * e.dirZ + i * e.dirX,
			l = Math.max(Math.abs(o) - (e.length / 2 + 40), 0),
			u = Math.max(Math.abs(s) - 110, 0);
		return 1 - terrainSmoothstep(0, 260, Math.sqrt(l * l + u * u));
	}
	fieldMask(e, t) {
		let n = 0;
		for (let r of this.airfields) n = Math.max(n, this.fieldT(r, e, t));
		return n;
	}
	height(e, t) {
		let n = this.rawHeight(e, t);
		for (let r of this.airfields) {
			let i = this.fieldT(r, e, t);
			i > 0 && (n += (r.height - n) * i);
		}
		return n;
	}
	slopeAt(e, t) {
		let n = this.height(e + 4, t) - this.height(e - 4, t),
			r = this.height(e, t + 4) - this.height(e, t - 4);
		return 1 - 8 / Math.sqrt(n * n + r * r + 64);
	}
	forestDensity(e, t, n, r, i) {
		return n < 3
			? 0
			: terrainSmoothstep(
					0.04,
					0.28,
					this.fbm(this.nForest, e / 1800, t / 1800, 3),
				) *
					(1 - terrainSmoothstep(0.35, 0.5, r)) *
					(1 - terrainSmoothstep(320, 430, n)) *
					(1 - terrainSmoothstep(0, 0.3, i));
	}
	farmMask(e, t, n, r) {
		return n < 5 || n > 170 || r > 0.22
			? 0
			: terrainSmoothstep(-0.05, 0.12, this.nFarm.noise(e / 5e3, t / 5e3));
	}
	farmCell(t, n) {
		let r = Math.floor(t / 230),
			i = Math.floor(n / 230),
			a = 0xde0b6b3a7640000,
			o = 0;
		for (let s = -1; s <= 1; s++)
			for (let c = -1; c <= 1; c++) {
				let l = r + c,
					u = i + s,
					d = hashSeedIntegers(this.seed, l, u, 31),
					f = (l + (d & 65535) / 65536) * 230,
					p = (u + ((d >>> 16) & 65535) / 65536) * 230,
					m = (f - t) * (f - t) + (p - n) * (p - n);
				m < a && ((a = m), (o = d));
			}
		return o;
	}
	isPine(e, t, n) {
		return n > 190 || this.nVar.noise(e / 700, t / 700) > 0.25;
	}
	colorAt(e, t, n, r, i, a) {
		let o,
			s = 1 - r;
		if (n < -0.6) {
			let e = terrainSmoothstep(-0.6, -9, n);
			(i[a] =
				TERRAIN_PALETTE.shallow[0] +
				(TERRAIN_PALETTE.deep[0] - TERRAIN_PALETTE.shallow[0]) * e),
				(i[a + 1] =
					TERRAIN_PALETTE.shallow[1] +
					(TERRAIN_PALETTE.deep[1] - TERRAIN_PALETTE.shallow[1]) * e),
				(i[a + 2] =
					TERRAIN_PALETTE.shallow[2] +
					(TERRAIN_PALETTE.deep[2] - TERRAIN_PALETTE.shallow[2]) * e);
			return;
		}
		if (n < 0.6) o = TERRAIN_PALETTE.foam;
		else if (n < 5 && s < 0.2) o = TERRAIN_PALETTE.sand;
		else if (s > 0.42)
			o = s > 0.58 ? TERRAIN_PALETTE.rockDark : TERRAIN_PALETTE.rock;
		else if (n > 440 + 70 * this.nVar.noise(e / 400, t / 400))
			o = s < 0.3 ? TERRAIN_PALETTE.snow : TERRAIN_PALETTE.rock;
		else {
			let r = this.fieldMask(e, t);
			o =
				r > 0.45
					? TERRAIN_PALETTE.airfield
					: this.forestDensity(e, t, n, s, r) > 0.45
						? this.nVar.noise(e / 300, t / 300) > 0
							? TERRAIN_PALETTE.forest
							: TERRAIN_PALETTE.forest2
						: this.farmMask(e, t, n, s) > 0.5 && r < 0.05
							? TERRAIN_PALETTE.farm[
									this.farmCell(e, t) % TERRAIN_PALETTE.farm.length
								]
							: this.nVar.noise(e / 900, t / 900) > 0.1
								? TERRAIN_PALETTE.meadow2
								: TERRAIN_PALETTE.meadow;
		}
		let l = 1 + 0.06 * this.nVar.noise(e / 160 + 50, t / 160);
		(i[a] = o[0] * l), (i[a + 1] = o[1] * l), (i[a + 2] = o[2] * l);
	}
	scoreSite(e, t, n) {
		let r = Math.cos(n),
			i = Math.sin(n),
			a = 1 / 0,
			o = -1 / 0,
			s = 0,
			c = 0;
		for (let n of [-510, -340, -170, 0, 170, 340, 510])
			for (let l of [-90, 0, 90]) {
				let u = e + r * n - i * l,
					d = t + i * n + r * l,
					f = this.rawHeight(u, d);
				f < a && (a = f), f > o && (o = f), (s += f), c++;
			}
		let l = s / c,
			u = o - a;
		return (
			a < 10 && (u += 1e3 + (10 - a) * 5),
			l > 200 && (u += (l - 200) * 0.6),
			{
				score: u,
				mean: l,
			}
		);
	}
	searchField(e, t, n, r, i, a, s) {
		let c = {
			score: 1 / 0,
			x: e,
			z: t,
			heading: 0,
			mean: 20,
		};
		for (let a = -n; a <= n; a += r)
			for (let o = -n; o <= n; o += r) {
				if (o * o + a * a > n * n) continue;
				let r = i() * Math.PI;
				for (let n of [r, r + Math.PI / 2]) {
					let r = this.scoreSite(e + o, t + a, n),
						i = r.score + Math.hypot(o, a) * 0.004;
					i < c.score &&
						(c = {
							score: i,
							x: e + o,
							z: t + a,
							heading: n,
							mean: r.mean,
						});
				}
			}
		return {
			af: {
				id: a,
				x: c.x,
				z: c.z,
				heading: c.heading,
				dirX: Math.cos(c.heading),
				dirZ: Math.sin(c.heading),
				length: RUNWAY_DIMENSIONS.paved + 2 * RUNWAY_DIMENSIONS.overrun,
				width: RUNWAY_DIMENSIONS.pavedWidth + 2 * RUNWAY_DIMENSIONS.shoulder,
				paved: RUNWAY_DIMENSIONS.paved,
				pavedWidth: RUNWAY_DIMENSIONS.pavedWidth,
				height: Math.max(c.mean, 9),
				home: s,
			},
			score: c.score,
		};
	}
	placeAirfields() {
		let n = createSeededRandom(hashSeedIntegers(this.seed, 99)),
			r = this.searchField(0, 0, 1800, 150, n, 0, !0);
		r.score >= 1e3 && (r = this.searchField(0, 0, 7e3, 450, n, 0, !0)),
			this.airfields.push(r.af);
		let i = n() * Math.PI * 2;
		for (let e = 0; e < 4; e++) {
			let t = i + (e * Math.PI) / 2 + (n() - 0.5) * 0.8,
				a = 4500 + n() * 2500,
				o = this.searchField(
					r.af.x + Math.cos(t) * a,
					r.af.z + Math.sin(t) * a,
					1500,
					250,
					n,
					e + 1,
					!1,
				);
			this.airfields.push(o.af);
		}
	}
	runwayAt(e, t, n = 0) {
		for (let r of this.airfields) {
			let i = e - r.x,
				a = t - r.z,
				o = i * r.dirX + a * r.dirZ,
				s = -i * r.dirZ + a * r.dirX;
			if (Math.abs(o) <= r.length / 2 + n && Math.abs(s) <= r.width / 2 + n)
				return r;
		}
		return null;
	}
	surfaceAt(e, t) {
		for (let n of this.airfields) {
			let r = e - n.x,
				i = t - n.z,
				a = Math.abs(r * n.dirX + i * n.dirZ),
				o = Math.abs(-r * n.dirZ + i * n.dirX);
			if (!(a > n.length / 2 + 40 + 200)) {
				if (a <= n.paved / 2 && o <= n.pavedWidth / 2) return `paved`;
				if (a <= n.length / 2 && o <= n.width / 2) return `grass`;
			}
		}
		return this.fieldMask(e, t) > 0.45
			? `grass`
			: this.height(e, t) < 0
				? `water`
				: `rough`;
	}
	nearestAirfield(e, t) {
		let n = this.airfields[0],
			r = 1 / 0;
		for (let i of this.airfields) {
			let a = Math.hypot(i.x - e, i.z - t);
			a < r && ((r = a), (n = i));
		}
		return {
			af: n,
			dist: r,
		};
	}
};
function buildTerrainChunk(e, t) {
	let { cx: n, cz: r, res: i } = t,
		a = 512 / i,
		o = n * 512,
		s = r * 512,
		c = i + 1,
		l = i + 3,
		u = new Float32Array(l * l);
	for (let t = 0; t < l; t++)
		for (let n = 0; n < l; n++)
			u[t * l + n] = e.height(o + (n - 1) * a, s + (t - 1) * a);
	let d = 4 * i,
		f = c * c + d,
		m = new Float32Array(f * 3),
		h = new Float32Array(f * 3),
		g = new Float32Array(f * 3);
	for (let t = 0; t < c; t++)
		for (let n = 0; n < c; n++) {
			let r = t * c + n,
				i = (t + 1) * l + (n + 1),
				d = u[i],
				f = u[i - 1] - u[i + 1],
				p = 2 * a,
				_ = u[i - l] - u[i + l],
				v = 1 / Math.sqrt(f * f + p * p + _ * _);
			(m[r * 3] = n * a),
				(m[r * 3 + 1] = d),
				(m[r * 3 + 2] = t * a),
				(h[r * 3] = f * v),
				(h[r * 3 + 1] = p * v),
				(h[r * 3 + 2] = _ * v),
				e.colorAt(o + n * a, s + t * a, d, p * v, g, r * 3);
		}
	let _ = [];
	for (let e = 0; e < i; e++) _.push(e);
	for (let e = 0; e < i; e++) _.push(e * c + i);
	for (let e = i; e > 0; e--) _.push(i * c + e);
	for (let e = i; e > 0; e--) _.push(e * c);
	let v = a * 1.5 + 12;
	for (let e = 0; e < d; e++) {
		let t = _[e],
			n = c * c + e;
		(m[n * 3] = m[t * 3]),
			(m[n * 3 + 1] = m[t * 3 + 1] - v),
			(m[n * 3 + 2] = m[t * 3 + 2]);
		for (let e = 0; e < 3; e++)
			(h[n * 3 + e] = h[t * 3 + e]), (g[n * 3 + e] = g[t * 3 + e]);
	}
	let y = new Uint32Array(i * i * 6 + d * 12),
		b = 0;
	for (let e = 0; e < i; e++)
		for (let t = 0; t < i; t++) {
			let n = e * c + t,
				r = n + c,
				i = n + 1,
				a = r + 1;
			(y[b++] = n),
				(y[b++] = r),
				(y[b++] = i),
				(y[b++] = i),
				(y[b++] = r),
				(y[b++] = a);
		}
	for (let e = 0; e < d; e++) {
		let t = _[e],
			n = _[(e + 1) % d],
			r = c * c + e,
			i = c * c + ((e + 1) % d);
		(y[b++] = t),
			(y[b++] = n),
			(y[b++] = i),
			(y[b++] = t),
			(y[b++] = i),
			(y[b++] = r),
			(y[b++] = n),
			(y[b++] = t),
			(y[b++] = i),
			(y[b++] = i),
			(y[b++] = t),
			(y[b++] = r);
	}
	let x = t.props
		? scatterChunkProps(e, t.seed, n, r)
		: new Float32Array();
	return {
		id: t.id,
		cx: n,
		cz: r,
		res: i,
		positions: m,
		normals: h,
		colors: g,
		indices: y,
		props: x,
		hasProps: t.props,
	};
}
function scatterChunkProps(n, r, i, a) {
	let o = [],
		s = i * 512,
		c = a * 512,
		l = createSeededRandom(hashSeedIntegers(r, i, a, 4242));
	for (let e = 0; e < 512; e += 22)
		for (let t = 0; t < 512; t += 22) {
			let r = t + l() * 22,
				i = e + l() * 22,
				a = l(),
				u = l(),
				d = l(),
				f = s + r,
				p = c + i,
				m = n.height(f, p);
			if (m < 1.5) continue;
			let h = n.fieldMask(f, p);
			if (h > 0.02) continue;
			let g = n.slopeAt(f, p),
				_ = n.forestDensity(f, p, m, g, h),
				v = n.farmMask(f, p, m, g);
			if (a >= (_ > 0.45 ? 0.85 * _ : v > 0.5 ? 0.006 : 0.02)) continue;
			let y = +!n.isPine(f, p, m);
			o.push(r, m - 0.4, i, 0.75 + u * 0.7, d * Math.PI * 2, y);
		}
	for (let e = 0; e < 512; e += 128)
		for (let t = 0; t < 512; t += 128) {
			let r = t + 20 + l() * 88,
				i = e + 20 + l() * 88,
				a = l(),
				u = l(),
				d = l(),
				f = s + r,
				p = c + i,
				m = n.height(f, p);
			if (m < 4 || n.fieldMask(f, p) > 0) continue;
			let h = n.slopeAt(f, p);
			if (h > 0.1 || n.farmMask(f, p, m, h) < 0.5 || a > 0.32) continue;
			let g = u < 0.08 ? 4 : u < 0.4 ? 3 : 2;
			o.push(r, m - 0.3, i, 1, d * Math.PI * 2, g);
		}
	return new Float32Array(o);
}
let cachedTerrain = null;
const workerScope = self;
workerScope.onmessage = (e) => {
	let t = e.data;
	(cachedTerrain && cachedTerrain.seed === t.seed) ||
		(cachedTerrain = new Terrain(t.seed));
	let n = buildTerrainChunk(cachedTerrain, t);
	workerScope.postMessage(n, [
		n.positions.buffer,
		n.normals.buffer,
		n.colors.buffer,
		n.indices.buffer,
		n.props.buffer,
	]);
};
