import { Um, Weather } from "./destinations.js";
import { Rd, Vd } from "../plane/meshkit.js";
import { am, im } from "./noise.js";
import { TerrainManager, km } from "./props.js";
import { np } from "./sky.js";
import { Terrain } from "./terrain.js";
import {
	Group,
	MathUtils,
	Matrix4,
	Quaternion,
	Vector3,
} from "../core/three.js";

var Wm = class {
	seed;
	gen;
	group = new Group();
	chunks;
	props;
	clouds;
	fields = [];
	time;
	cover;
	wind = new Vector3();
	baseWind = new Vector3();
	t = 0;
	hCache = new Map();
	terrainMat;
	propMat;
	propOutline;
	stripMat;
	markMat;
	constructor(e, t) {
		this.seed = e;
		this.gen = new Terrain(e);
		let n = am(im(e, 2024));
		this.time = np[Math.floor(n() * np.length)];
		let r = n();
		this.cover = r < 0.2 ? `clear` : r < 0.8 ? `fair` : `overcast`;
		let i = n() * Math.PI * 2;
		let a = 1.5 + n() * 3.5;
		this.baseWind.set(Math.cos(i) * a, 0, Math.sin(i) * a);
		this.wind.copy(this.baseWind);
		this.terrainMat = Vd({
			vertexColors: true,
			rim: 0,
			ramp: [128, 198, 255],
		});
		this.propMat = Vd({
			vertexColors: true,
			rim: 0.2,
		});
		this.propOutline = Rd(this.time.ink, 1, 300);
		this.stripMat = Vd({
			vertexColors: true,
			rim: 0,
		});
		this.stripMat.polygonOffset = true;
		this.stripMat.polygonOffsetFactor = -2;
		this.stripMat.polygonOffsetUnits = -4;
		this.markMat = Vd({
			vertexColors: true,
			rim: 0,
		});
		this.markMat.polygonOffset = true;
		this.markMat.polygonOffsetFactor = -4;
		this.markMat.polygonOffsetUnits = -16;
		this.chunks = new TerrainManager(e, this.terrainMat, t);
		this.props = new Um(this.propMat, this.propOutline);
		this.clouds = new Weather(e, this.cover, (e, t) => this.gen.height(e, t));
		this.group.add(this.chunks.group, this.props.group, this.clouds.group);
		for (let e of this.gen.airfields) {
			let t = new km(
				e,
				this.propMat,
				this.propOutline,
				this.stripMat,
				this.markMat,
			);
			t.setWind(this.wind);
			this.fields.push(t);
			this.group.add(t.group);
		}
	}
	get home() {
		return this.gen.airfields[0];
	}
	height(e, t) {
		return this.gen.height(e, t);
	}
	gridH(e, t) {
		let n = (e + 40000) * 80000 + (t + 40000);
		let r = this.hCache.get(n);
		if (r === undefined) {
			r = this.gen.height(e * 8, t * 8);
			if (this.hCache.size > 60000) {
				this.hCache.clear();
			}
			this.hCache.set(n, r);
		}
		return r;
	}
	groundHeight(e, t) {
		let n = e / 8;
		let r = t / 8;
		let i = Math.floor(n);
		let a = Math.floor(r);
		let o = n - i;
		let s = r - a;
		let c = this.gridH(i, a);
		let l = this.gridH(i + 1, a);
		let u = this.gridH(i, a + 1);
		let d = this.gridH(i + 1, a + 1);
		if (o + s <= 1) {
			return c + (l - c) * o + (u - c) * s;
		} else {
			return d + (u - d) * (1 - o) + (l - d) * (1 - s);
		}
	}
	surfaceAt(e, t) {
		return this.gen.surfaceAt(e, t);
	}
	updatePapi(e) {
		for (let t of this.fields) {
			t.updatePapi(e);
		}
	}
	surfaceHeight(e, t) {
		return Math.max(this.groundHeight(e, t), 0);
	}
	update(e, t, n) {
		this.t += n;
		let r =
			1 + Math.sin(this.t * 0.31) * 0.25 + Math.sin(this.t * 1.13 + 1.7) * 0.12;
		this.wind.copy(this.baseWind).multiplyScalar(r);
		this.chunks.update(e, t);
		this.props.update(this.chunks);
		this.clouds.update(e, n, this.wind);
		for (let e of this.fields) {
			e.setWind(this.wind);
		}
	}
	setRadius(e) {
		this.chunks.radius = e;
		this.clouds.setVisibleRadius(Math.max(3, Math.round((e * 512) / 1600) + 1));
	}
	materials() {
		return [this.terrainMat, this.propMat, this.stripMat, this.markMat];
	}
	dispose() {
		this.chunks.dispose();
		this.props.dispose();
		this.clouds.dispose();
		for (let e of this.fields) {
			e.dispose();
		}
		this.terrainMat.dispose();
		this.propMat.dispose();
		this.propOutline.dispose();
		this.stripMat.dispose();
		this.markMat.dispose();
	}
};
var Gm = new Vector3();
var Km = new Vector3();
var qm = new Vector3();
var Jm = new Vector3();
var Ym = new Matrix4();
var CameraRig = class {
	camera;
	mode = `chase`;
	q = new Quaternion();
	initialized = false;
	shake = 0;
	shakeEnabled = true;
	baseFov = 70;
	orbitAngle = 0;
	constructor(e) {
		this.camera = e;
	}
	cycle() {
		this.mode = this.mode === `chase` ? `cockpit` : `chase`;
	}
	cockpit = new Vector3(0, 0.98, 0.32);
	chaseScale = 1;
	reset() {
		this.initialized = false;
	}
	addShake(e) {
		if (this.shakeEnabled) {
			this.shake = Math.min(1.2, this.shake + e);
		}
	}
	follow(e, t, n, r, i) {
		let a = this.camera;
		this.initialized ||= (this.q.copy(n), true);
		this.q.slerp(n, 1 - Math.exp(-e * 5));
		if (this.mode === `cockpit`) {
			Gm.copy(this.cockpit).applyQuaternion(n);
			a.position.copy(t).add(Gm);
			a.quaternion.copy(n);
		} else {
			Gm.set(0, this.chaseScale * 3.4, this.chaseScale * 13.5).applyQuaternion(
				this.q,
			);
			a.position.copy(t).add(Gm);
			Jm.set(0, 0, -1).applyQuaternion(this.q);
			Km.copy(t).addScaledVector(Jm, 25);
			qm.set(0, 1, 0).applyQuaternion(this.q);
			Ym.lookAt(a.position, Km, qm);
			a.quaternion.setFromRotationMatrix(Ym);
		}
		let o = Math.max(i(a.position.x, a.position.z), 0) + 1.2;
		if (a.position.y < o) {
			a.position.y = o;
		}
		let s = this.baseFov + MathUtils.clamp((r - 30) / 45, 0, 1) * 10;
		if (Math.abs(a.fov - s) > 0.05) {
			a.fov += (s - a.fov) * Math.min(1, e * 3);
			a.updateProjectionMatrix();
		}
		this.applyShake(e);
	}
	orbit(e, t, n, r, i = 0.05) {
		this.orbitAngle += e * i;
		let a = this.camera;
		a.position.set(
			t.x + Math.cos(this.orbitAngle) * n,
			t.y + r,
			t.z + Math.sin(this.orbitAngle) * n,
		);
		a.up.set(0, 1, 0);
		a.lookAt(t);
		this.applyShake(e);
	}
	applyShake(e) {
		if (this.shake <= 0.001) {
			return;
		}
		let t = this.shake * this.shake * 0.6;
		this.camera.position.x += (Math.random() - 0.5) * t;
		this.camera.position.y += (Math.random() - 0.5) * t;
		this.camera.rotateZ((Math.random() - 0.5) * t * 0.02);
		this.shake = Math.max(0, this.shake - e * 2.2);
	}
};

export { CameraRig, Gm, Jm, Km, Wm, Ym, qm };
