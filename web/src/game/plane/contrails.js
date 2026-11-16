import {
	Color,
	Group,
	InstancedBufferAttribute,
	InstancedMesh,
	Matrix4,
	ShaderMaterial,
	Shape,
	ShapeGeometry,
	Vector3,
} from "../core/three.js";
var pathGuideBankRight = new Vector3();
var pathGuideBankUp = new Vector3();
function getFlightBankAngle(e) {
	pathGuideBankRight.set(1, 0, 0).applyQuaternion(e.quat);
	pathGuideBankUp.set(0, 1, 0).applyQuaternion(e.quat);
	return Math.atan2(pathGuideBankRight.y, pathGuideBankUp.y);
}
var PATH_GUIDE_ARROW_SPACING = 120;
var PATH_GUIDE_VISIBLE_DISTANCE = 3600;
var PATH_GUIDE_ARROW_TILT = (Math.PI * 55) / 180;
var CONTRAIL_SHADER = `
  attribute float aS;
  varying float vS;
  varying float vDist;
  void main() {
    vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
    vS = aS;
    vDist = distance(wp.xyz, cameraPosition);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;
var PATH_GUIDE_FRAGMENT_SHADER = `
  uniform float uProgress;
  uniform float uAhead;
  uniform float uTime;
  uniform float uOpacity;
  uniform vec3 uColor;
  varying float vS;
  varying float vDist;
  void main() {
    float a = uOpacity;
    a *= smoothstep(uProgress - 40.0, uProgress + 60.0, vS);   // passed arrows go
    a *= 1.0 - smoothstep(uProgress + uAhead * 0.7, uProgress + uAhead, vS); // the far ones fade in
    a *= smoothstep(12.0, 55.0, vDist);                         // don't white out the camera
    a *= 0.72 + 0.28 * sin(vS * 0.018 - uTime * 3.2);           // a wave running forward
    if (a < 0.01) discard;
    gl_FragColor = vec4(uColor, a);
  }
`;
function createPathGuideArrowGeometry(e = 1) {
	let t = new Shape();
	t.moveTo(0, 3.2);
	t.lineTo(7, -3.6);
	t.lineTo(7, -6.4);
	t.lineTo(0, 0.2);
	t.lineTo(-7, -6.4);
	t.lineTo(-7, -3.6);
	t.closePath();
	let n = new ShapeGeometry(t);
	n.translate(0, 1.6, 0);
	n.scale(e, e, 1);
	n.translate(0, -1.6, 0);
	n.rotateX(Math.PI / 2);
	n.rotateX(-PATH_GUIDE_ARROW_TILT);
	return n;
}
function createPathGuideMaterial(e, t) {
	return new ShaderMaterial({
		vertexShader: CONTRAIL_SHADER,
		fragmentShader: PATH_GUIDE_FRAGMENT_SHADER,
		uniforms: {
			uProgress: {
				value: 0,
			},
			uAhead: {
				value: PATH_GUIDE_VISIBLE_DISTANCE,
			},
			uTime: {
				value: 0,
			},
			uOpacity: {
				value: t,
			},
			uColor: {
				value: new Color(e),
			},
		},
		transparent: true,
		depthWrite: false,
		side: 2,
	});
}
var FlightPathGuide = class {
	mesh = new Group();
	mats = [];
	geos = [];
	meshes = [];
	constructor(e) {
		let t = e.pts;
		let n = [];
		for (let t = 60; t < e.sAim + 100; t += PATH_GUIDE_ARROW_SPACING) {
			n.push(t);
		}
		let r = n.length;
		let i = new Float32Array(r);
		for (let [e, t, n, i] of [
			[1.14, 2825498, 0.3, 4],
			[1, 16777215, 0.8, 5],
		]) {
			let a = createPathGuideArrowGeometry(e);
			let o = createPathGuideMaterial(t, n);
			let s = new InstancedMesh(a, o, r);
			s.frustumCulled = false;
			s.renderOrder = i;
			this.geos.push(a);
			this.mats.push(o);
			this.meshes.push(s);
			this.mesh.add(s);
		}
		let a = new Matrix4();
		let o = new Vector3();
		let s = new Vector3();
		let c = new Vector3();
		let l = new Vector3();
		let u = 0;
		for (let e = 0; e < r; e++) {
			let r = n[e];
			while (u < t.length - 2 && t[u + 1].s < r) {
				u++;
			}
			let d = t[u];
			let f = t[u + 1];
			let p = (r - d.s) / (f.s - d.s || 1);
			l.set(
				d.x + (f.x - d.x) * p,
				d.y + (f.y - d.y) * p,
				d.z + (f.z - d.z) * p,
			);
			let m = Math.max(0, u - 2);
			let h = Math.min(t.length - 1, u + 3);
			o.set(t[h].x - t[m].x, t[h].y - t[m].y, t[h].z - t[m].z).normalize();
			c.crossVectors(s.set(0, 1, 0), o).normalize();
			s.crossVectors(o, c);
			a.makeBasis(c, s, o).setPosition(l);
			for (let t of this.meshes) {
				t.setMatrixAt(e, a);
			}
			i[e] = r;
		}
		for (let e of this.geos) {
			e.setAttribute(`aS`, new InstancedBufferAttribute(i, 1));
		}
		for (let e of this.meshes) {
			e.instanceMatrix.needsUpdate = true;
		}
	}
	update(e, t) {
		for (let n of this.mats) {
			n.uniforms.uProgress.value = e;
			n.uniforms.uTime.value = t;
		}
	}
	dispose() {
		for (let e of this.geos) {
			e.dispose();
		}
		for (let e of this.mats) {
			e.dispose();
		}
		for (let e of this.meshes) {
			e.dispose();
		}
	}
};
export {
	pathGuideBankUp,
	CONTRAIL_SHADER,
	PATH_GUIDE_ARROW_SPACING,
	createPathGuideMaterial,
	PATH_GUIDE_FRAGMENT_SHADER,
	PATH_GUIDE_VISIBLE_DISTANCE,
	getFlightBankAngle,
	PATH_GUIDE_ARROW_TILT,
	FlightPathGuide,
	createPathGuideArrowGeometry,
	pathGuideBankRight,
};
