import { wd } from "../app/storage.js";
import {
	BoxGeometry,
	BufferAttribute,
	Color,
	DataTexture,
	Euler,
	Matrix4,
	Mesh,
	MeshToonMaterial,
	NearestFilter,
	Quaternion,
	RGBAFormat,
	ShaderMaterial,
	UniformsLib,
	UniformsUtils,
	Vector3,
} from "../core/three.js";

var Ed = new Color();
var Dd = new Matrix4();
var Od = new Quaternion();
var kd = new Euler();
var Ad = new Vector3();
var jd = new Vector3();
function makeMesh(e, t, n = {}) {
	let r = e.index ? e.toNonIndexed() : e;
	if (r !== e) {
		e.dispose();
	}
	if (r.getAttribute(`uv`)) {
		r.deleteAttribute(`uv`);
	}
	if (n.flat) {
		r.computeVertexNormals();
	}
	Ad.set(...(n.pos ?? [0, 0, 0]));
	kd.set(...(n.rot ?? [0, 0, 0]));
	Od.setFromEuler(kd);
	jd.set(...(n.scale ?? [1, 1, 1]));
	Dd.compose(Ad, Od, jd);
	r.applyMatrix4(Dd);
	let i = r.getAttribute(`position`).count;
	let a = new Float32Array(i * 3);
	Ed.setHex(t);
	for (let e = 0; e < i; e++) {
		a[e * 3] = Ed.r;
		a[e * 3 + 1] = Ed.g;
		a[e * 3 + 2] = Ed.b;
	}
	r.setAttribute(`color`, new BufferAttribute(a, 3));
	return r;
}
function Md(e) {
	let t = e.getAttribute(`position`);
	let n = e.getAttribute(`normal`);
	let r = new Map();
	let i = (e) =>
		`${Math.round(t.getX(e) * 200)},${Math.round(t.getY(e) * 200)},${Math.round(t.getZ(e) * 200)}`;
	for (let e = 0; e < t.count; e++) {
		let t = i(e);
		let a = r.get(t) ?? [0, 0, 0];
		a[0] += n.getX(e);
		a[1] += n.getY(e);
		a[2] += n.getZ(e);
		r.set(t, a);
	}
	let a = new Float32Array(t.count * 3);
	for (let e = 0; e < t.count; e++) {
		let t = r.get(i(e));
		let n = Math.hypot(t[0], t[1], t[2]) || 1;
		a[e * 3] = t[0] / n;
		a[e * 3 + 1] = t[1] / n;
		a[e * 3 + 2] = t[2] / n;
	}
	e.setAttribute(`outlineNormal`, new BufferAttribute(a, 3));
}
function Nd(e) {
	let t = wd(e, false);
	if (!t) {
		throw Error(`mergeParts: incompatible geometry attributes`);
	}
	for (let t of e) {
		t.dispose();
	}
	Md(t);
	t.computeBoundingSphere();
	return t;
}
function Pd(e, t, n, r, i, a) {
	let o = new BoxGeometry(e, t, n);
	o.translate(0, 0, n / 2);
	let s = o.getAttribute(`position`);
	for (let o = 0; o < s.count; o++) {
		if (s.getZ(o) > n / 2) {
			s.setX(o, (s.getX(o) * r) / e);
			s.setY(o, (s.getY(o) * i) / t + a);
		}
	}
	o.computeVertexNormals();
	return o;
}
function Fd(e, t, n) {
	let r = new Mesh(e, t);
	r.castShadow = true;
	if (n) {
		let t = new Mesh(e, n);
		t.castShadow = false;
		t.receiveShadow = false;
		t.name = `outline`;
		r.add(t);
	}
	return r;
}
var Id = `
  #include <common>
  #include <fog_pars_vertex>
  attribute vec3 outlineNormal;
  uniform float outlineWidth;
  uniform float maxDist;
  void main() {
    vec4 p = vec4(position, 1.0);
    vec3 n = outlineNormal;
    #ifdef USE_INSTANCING
      p = instanceMatrix * p;
      n = mat3(instanceMatrix) * n;
    #endif
    vec4 mvPosition = modelViewMatrix * p;
    vec3 vn = normalize(mat3(modelViewMatrix) * n);
    float d = -mvPosition.z;
    float w = outlineWidth * 0.0028 * min(d, maxDist) * (1.0 - smoothstep(maxDist, maxDist * 3.0, d));
    mvPosition.xyz += vn * w;
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }
`;
var Ld = `
  #include <common>
  #include <fog_pars_fragment>
  uniform vec3 outlineColor;
  void main() {
    gl_FragColor = vec4(outlineColor, 1.0);
    #include <colorspace_fragment>
    #include <fog_fragment>
  }
`;
function Rd(e = 2825498, t = 1, n = 350) {
	return new ShaderMaterial({
		uniforms: UniformsUtils.merge([
			UniformsLib.fog,
			{
				outlineColor: {
					value: new Color(e),
				},
				outlineWidth: {
					value: t,
				},
				maxDist: {
					value: n,
				},
			},
		]),
		vertexShader: Id,
		fragmentShader: Ld,
		side: 1,
		fog: true,
	});
}
var zd = new Map();
function Bd(e = [100, 182, 255]) {
	let t = e.join(`,`);
	let n = zd.get(t);
	if (n) {
		return n;
	}
	let i = new Uint8Array(e.length * 4);
	e.forEach((e, t) => {
		i[t * 4] = e;
		i[t * 4 + 1] = e;
		i[t * 4 + 2] = e;
		i[t * 4 + 3] = 255;
	});
	n = new DataTexture(i, e.length, 1, RGBAFormat);
	n.minFilter = NearestFilter;
	n.magFilter = NearestFilter;
	n.generateMipmaps = false;
	n.needsUpdate = true;
	zd.set(t, n);
	return n;
}
function Vd(e = {}) {
	let t = new MeshToonMaterial({
		color: e.color ?? 16777215,
		vertexColors: !!e.vertexColors,
		gradientMap: Bd(e.ramp),
		side: e.side ?? 0,
		fog: e.fog ?? true,
	});
	let n = e.rim ?? 0.28;
	t.onBeforeCompile = (e) => {
		e.uniforms.rimStrength = {
			value: n,
		};
		e.fragmentShader = e.fragmentShader
			.replace(
				`#include <common>`,
				`#include <common>
uniform float rimStrength;`,
			)
			.replace(
				`#include <opaque_fragment>`,
				`{
          float rimDot = 1.0 - max(dot(normal, normalize(vViewPosition)), 0.0);
          outgoingLight += diffuseColor.rgb * rimStrength * smoothstep(0.6, 0.66, rimDot);
        }
        #include <opaque_fragment>`,
			);
	};
	t.customProgramCacheKey = () => `toon-rim-${n}`;
	return t;
}

export {
	Ad,
	Bd,
	Dd,
	Ed,
	Fd,
	Id,
	Ld,
	Md,
	Nd,
	Od,
	Pd,
	Rd,
	Vd,
	jd,
	kd,
	makeMesh,
	zd,
};
