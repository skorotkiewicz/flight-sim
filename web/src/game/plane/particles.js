import { Md, Rd, Vd } from "./meshkit.js";
import {
	CanvasTexture,
	Color,
	Group,
	IcosahedronGeometry,
	InstancedMesh,
	MathUtils,
	Matrix4,
	MeshBasicMaterial,
	Object3D,
	OctahedronGeometry,
	Quaternion,
	SRGBColorSpace,
	Sprite,
	SpriteMaterial,
	Vector3,
} from "../core/three.js";

var Hd = 1800;
var Ud = 500;
var Wd = new Matrix4();
var Gd = new Quaternion();
var Kd = new Vector3();
var qd = new Vector3();
var Jd = new Color();
var ParticleSystem = class {
	cap;
	px;
	py;
	pz;
	vx;
	vy;
	vz;
	life;
	max;
	s0;
	s1;
	drag;
	rise;
	rot;
	col;
	n = 0;
	constructor(e) {
		this.cap = e;
		this.px = new Float32Array(e);
		this.py = new Float32Array(e);
		this.pz = new Float32Array(e);
		this.vx = new Float32Array(e);
		this.vy = new Float32Array(e);
		this.vz = new Float32Array(e);
		this.life = new Float32Array(e);
		this.max = new Float32Array(e);
		this.s0 = new Float32Array(e);
		this.s1 = new Float32Array(e);
		this.drag = new Float32Array(e);
		this.rise = new Float32Array(e);
		this.rot = new Float32Array(e);
		this.col = new Float32Array(e * 3);
	}
	add(e, t, n, r, i, a, o = 1.2, s = 0) {
		let c;
		c = this.n < this.cap ? this.n++ : Math.floor(Math.random() * this.cap);
		this.px[c] = e.x;
		this.py[c] = e.y;
		this.pz[c] = e.z;
		this.vx[c] = t.x;
		this.vy[c] = t.y;
		this.vz[c] = t.z;
		this.life[c] = n;
		this.max[c] = n;
		this.s0[c] = r;
		this.s1[c] = i;
		this.drag[c] = o;
		this.rise[c] = s;
		this.rot[c] = Math.random() * 6.28;
		Jd.setHex(a);
		this.col[c * 3] = Jd.r;
		this.col[c * 3 + 1] = Jd.g;
		this.col[c * 3 + 2] = Jd.b;
	}
	remove(e) {
		let t = --this.n;
		this.px[e] = this.px[t];
		this.py[e] = this.py[t];
		this.pz[e] = this.pz[t];
		this.vx[e] = this.vx[t];
		this.vy[e] = this.vy[t];
		this.vz[e] = this.vz[t];
		this.life[e] = this.life[t];
		this.max[e] = this.max[t];
		this.s0[e] = this.s0[t];
		this.s1[e] = this.s1[t];
		this.drag[e] = this.drag[t];
		this.rise[e] = this.rise[t];
		this.rot[e] = this.rot[t];
		this.col[e * 3] = this.col[t * 3];
		this.col[e * 3 + 1] = this.col[t * 3 + 1];
		this.col[e * 3 + 2] = this.col[t * 3 + 2];
	}
	step(e) {
		for (let t = this.n - 1; t >= 0; t--) {
			this.life[t] -= e;
			if (this.life[t] <= 0) {
				this.remove(t);
				continue;
			}
			let n = Math.exp(-this.drag[t] * e);
			this.vx[t] *= n;
			this.vy[t] = this.vy[t] * n + this.rise[t] * e;
			this.vz[t] *= n;
			this.px[t] += this.vx[t] * e;
			this.py[t] += this.vy[t] * e;
			this.pz[t] += this.vz[t] * e;
		}
	}
};
function Xd() {
	let e = document.createElement(`canvas`);
	e.width = e.height = 256;
	let t = e.getContext(`2d`);
	t.translate(128, 128);
	t.beginPath();
	for (let e = 0; e < 24; e++) {
		let n = e % 2 ? 70 : 122;
		let r = (e / 24) * Math.PI * 2;
		t.lineTo(Math.cos(r) * n, Math.sin(r) * n);
	}
	t.closePath();
	t.fillStyle = `#ffd23f`;
	t.fill();
	t.lineWidth = 10;
	t.strokeStyle = `#2b1d1a`;
	t.stroke();
	t.rotate(-0.15);
	t.font = `900 72px "Luckiest Guy", Impact, sans-serif`;
	t.textAlign = `center`;
	t.textBaseline = `middle`;
	t.lineWidth = 12;
	t.strokeStyle = `#2b1d1a`;
	t.strokeText(`POW!`, 0, 6);
	t.fillStyle = `#e04f3a`;
	t.fillText(`POW!`, 0, 6);
	let n = new CanvasTexture(e);
	n.colorSpace = SRGBColorSpace;
	return n;
}
var Zd = class {
	group = new Group();
	puffs = new ParticleSystem(Hd);
	sparks = new ParticleSystem(Ud);
	puffMesh;
	puffOutline;
	sparkMesh;
	pows = [];
	tmpV = new Vector3();
	constructor() {
		let e = new IcosahedronGeometry(1, 0);
		Md(e);
		this.puffMesh = new InstancedMesh(
			e,
			Vd({
				color: 16777215,
				rim: 0.1,
			}),
			Hd,
		);
		this.puffMesh.count = 0;
		this.puffMesh.frustumCulled = false;
		this.puffMesh.setColorAt(0, new Color(1, 1, 1));
		this.puffOutline = new InstancedMesh(e, Rd(2825498, 0.8, 250), Hd);
		this.puffOutline.instanceMatrix = this.puffMesh.instanceMatrix;
		this.puffOutline.count = 0;
		this.puffOutline.frustumCulled = false;
		this.sparkMesh = new InstancedMesh(
			new OctahedronGeometry(1, 0),
			new MeshBasicMaterial({
				color: 16777215,
			}),
			Ud,
		);
		this.sparkMesh.count = 0;
		this.sparkMesh.frustumCulled = false;
		this.sparkMesh.setColorAt(0, new Color(1, 1, 1));
		this.group.add(this.puffMesh, this.puffOutline, this.sparkMesh);
		let t = Xd();
		for (let e = 0; e < 6; e++) {
			let e = new Sprite(
				new SpriteMaterial({
					map: t,
					transparent: true,
					depthWrite: false,
					fog: false,
				}),
			);
			e.visible = false;
			this.group.add(e);
			this.pows.push({
				sprite: e,
				t: 99,
			});
		}
		this.group.name = `fx`;
	}
	clear() {
		this.puffs.n = 0;
		this.sparks.n = 0;
		for (let e of this.pows) {
			e.t = 99;
			e.sprite.visible = false;
		}
	}
	rv(e) {
		return this.tmpV.set(
			(Math.random() - 0.5) * e,
			(Math.random() - 0.5) * e,
			(Math.random() - 0.5) * e,
		);
	}
	smoke(e, t, n) {
		let r = this.rv(3).addScaledVector(t, 0.15);
		let i = n > 0.6 ? 3880499 : n > 0.3 ? 7827562 : 13223100;
		this.puffs.add(e, r, 2.4 + Math.random(), 0.9, 4.5 + n * 3, i, 0.8, 2.5);
	}
	fire(e, t) {
		let n = this.rv(4).addScaledVector(t, 0.3);
		this.puffs.add(
			e,
			n,
			0.45,
			1.6,
			0.4,
			Math.random() < 0.5 ? 16756782 : 16738858,
			2,
			2,
		);
	}
	dust(e, t = 14206106) {
		let n = this.rv(4);
		n.y = Math.abs(n.y) + 1;
		this.puffs.add(e, n, 1, 0.6, 1.7, t, 1.5, 0.5);
	}
	splash(e) {
		for (let t = 0; t < 26; t++) {
			let n = this.rv(14);
			n.y = 6 + Math.random() * 14;
			this.puffs.add(e, n, 1.6, 2, 0.6, t % 3 ? 16055295 : 10476783, 0.6, -14);
		}
	}
	sparksAt(e, t = 6) {
		for (let n = 0; n < t; n++) {
			this.sparks.add(
				e,
				this.rv(30),
				0.25 + Math.random() * 0.2,
				0.35,
				0.05,
				Math.random() < 0.5 ? 16769126 : 16777215,
				3,
				-10,
			);
		}
	}
	debris(e, t, n) {
		let r = this.rv(16).addScaledVector(t, 0.6);
		r.y += 5;
		this.puffs.add(e, r, 1.8, 0.45, 0.35, n, 0.2, -9.8);
	}
	explosion(e, t = true) {
		let n = t ? 30 : 14;
		for (let r = 0; r < n; r++) {
			let n = this.rv(t ? 26 : 14);
			this.puffs.add(
				e,
				n,
				0.6 + Math.random() * 0.4,
				2.5 + Math.random() * 2,
				0.5,
				r % 3 == 0 ? 16769126 : 16747050,
				2.5,
				3,
			);
		}
		for (let r = 0; r < n; r++) {
			let n = this.rv(t ? 14 : 8);
			n.y = Math.abs(n.y);
			this.puffs.add(e, n, 2.5 + Math.random() * 1.5, 2, 8, 3880499, 1, 4);
		}
		this.sparksAt(e, 24);
		if (t) {
			let t = this.pows.reduce((e, t) => (e.t > t.t ? e : t));
			t.t = 0;
			t.sprite.position.copy(e).y += 6;
			t.sprite.visible = true;
		}
	}
	update(e, t) {
		this.puffs.step(e);
		this.sparks.step(e);
		this.write(this.puffs, this.puffMesh, t);
		this.puffOutline.count = this.puffMesh.count;
		this.write(this.sparks, this.sparkMesh, t);
		for (let t of this.pows) {
			if (!t.sprite.visible) {
				continue;
			}
			t.t += e;
			let n = Math.min(t.t / 0.12, 1);
			t.sprite.scale.setScalar(n * 26 + t.t * 6);
			t.sprite.material.opacity = 1 - MathUtils.smoothstep(t.t, 0.5, 0.9);
			if (t.t > 0.9) {
				t.sprite.visible = false;
			}
		}
	}
	write(e, t, n) {
		for (let r = 0; r < e.n; r++) {
			let i = 1 - e.life[r] / e.max[r];
			let a =
				(e.s0[r] + (e.s1[r] - e.s0[r]) * Math.sqrt(i)) *
				(i > 0.7 ? 1 - (i - 0.7) / 0.3 : 1);
			Kd.set(e.px[r], e.py[r], e.pz[r]);
			let o = Kd.distanceTo(n);
			if (o < a * 2.5 + 1) {
				a *= MathUtils.clamp((o - 1) / (a * 2.5), 0, 1);
			}
			Gd.setFromAxisAngle(Object3D.DEFAULT_UP, e.rot[r]);
			qd.setScalar(Math.max(a, 0.001));
			Wd.compose(Kd, Gd, qd);
			t.setMatrixAt(r, Wd);
			Jd.setRGB(e.col[r * 3], e.col[r * 3 + 1], e.col[r * 3 + 2]);
			t.setColorAt(r, Jd);
		}
		t.count = e.n;
		t.instanceMatrix.needsUpdate = true;
		if (t.instanceColor) {
			t.instanceColor.needsUpdate = true;
		}
	}
};

export { Gd, Hd, Jd, Kd, ParticleSystem, Ud, Wd, Xd, Zd, qd };
