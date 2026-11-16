import {
	PLANE_STYLES,
	PLANE_WHEEL_OPTIONS,
	PLANE_PAINT_OPTIONS,
} from "../plane/planemodels.js";
import {
	Color,
	MathUtils,
	Mesh,
	PlaneGeometry,
	ShaderMaterial,
	SphereGeometry,
	UniformsLib,
	UniformsUtils,
	Vector3,
} from "../core/three.js";
var SKY_TIME_PRESETS = [
	{
		name: `Morning`,
		top: 5218278,
		horizon: 13889272,
		bottom: 11129827,
		sun: 16776168,
		halo: 16774870,
		elevation: 24,
		azimuth: 120,
		sunColor: 16773592,
		sunIntensity: 2.3,
		hemiSky: 13625599,
		hemiGround: 7309906,
		hemiIntensity: 1.25,
		ink: 3023396,
	},
	{
		name: `Noon`,
		top: 4034528,
		horizon: 12904183,
		bottom: 10275036,
		sun: 16777215,
		halo: 16776166,
		elevation: 58,
		azimuth: 200,
		sunColor: 16777215,
		sunIntensity: 2.4,
		hemiSky: 14085375,
		hemiGround: 7046480,
		hemiIntensity: 1.2,
		ink: 2825498,
	},
	{
		name: `Golden hour`,
		top: 4878276,
		horizon: 16766624,
		bottom: 14267535,
		sun: 16774097,
		halo: 16769704,
		elevation: 13,
		azimuth: 250,
		sunColor: 16766106,
		sunIntensity: 2.2,
		hemiSky: 16769213,
		hemiGround: 6975306,
		hemiIntensity: 1.15,
		ink: 3810080,
	},
];
function sunDirectionForTime(e) {
	let t = MathUtils.degToRad(e.elevation);
	let n = MathUtils.degToRad(e.azimuth);
	return new Vector3(
		Math.cos(t) * Math.sin(n),
		Math.sin(t),
		-Math.cos(t) * Math.cos(n),
	).normalize();
}
var Sky = class {
	mesh;
	mat;
	constructor() {
		this.mat = new ShaderMaterial({
			uniforms: {
				topColor: {
					value: new Color(),
				},
				horizonColor: {
					value: new Color(),
				},
				bottomColor: {
					value: new Color(),
				},
				sunColor: {
					value: new Color(),
				},
				haloColor: {
					value: new Color(),
				},
				sunDir: {
					value: new Vector3(0, 1, 0),
				},
			},
			vertexShader: `
        varying vec3 vDir;
        void main() {
          vDir = position;
          vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_Position = p.xyww;
        }
      `,
			fragmentShader: `
        uniform vec3 topColor; uniform vec3 horizonColor; uniform vec3 bottomColor;
        uniform vec3 sunColor; uniform vec3 haloColor; uniform vec3 sunDir;
        varying vec3 vDir;
        void main() {
          vec3 d = normalize(vDir);
          float y = d.y;
          vec3 col = y > 0.0
            ? mix(horizonColor, topColor, pow(smoothstep(0.0, 0.65, y), 0.75))
            : mix(horizonColor, bottomColor, smoothstep(0.0, -0.25, y));
          float s = dot(d, sunDir);
          col = mix(col, haloColor, step(0.993, s) * 0.35);
          col = mix(col, haloColor, step(0.9975, s) * 0.45);
          col = mix(col, sunColor, step(0.99935, s));
          gl_FragColor = vec4(col, 1.0);
          #include <colorspace_fragment>
        }
      `,
			side: 1,
			depthWrite: false,
			depthTest: false,
			fog: false,
		});
		this.mesh = new Mesh(new SphereGeometry(1, 32, 16), this.mat);
		this.mesh.renderOrder = -1000;
		this.mesh.frustumCulled = false;
		this.mesh.name = `sky`;
	}
	setTime(e) {
		let t = this.mat.uniforms;
		t.topColor.value.setHex(e.top);
		t.horizonColor.value.setHex(e.horizon);
		t.bottomColor.value.setHex(e.bottom);
		t.sunColor.value.setHex(e.sun);
		t.haloColor.value.setHex(e.halo);
		t.sunDir.value.copy(sunDirectionForTime(e));
	}
	follow(e, t) {
		this.mesh.position.copy(e.position);
		this.mesh.scale.setScalar(t);
	}
};
var Water = class {
	mesh;
	mat;
	constructor() {
		this.mat = new ShaderMaterial({
			uniforms: UniformsUtils.merge([
				UniformsLib.fog,
				{
					waterColor: {
						value: new Color(3121104),
					},
					lineColor: {
						value: new Color(16055295),
					},
					time: {
						value: 0,
					},
					opacity: {
						value: 0.55,
					},
				},
			]),
			vertexShader: `
        #include <common>
        #include <fog_pars_vertex>
        varying vec3 vWorld;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorld = wp.xyz;
          vec4 mvPosition = viewMatrix * wp;
          gl_Position = projectionMatrix * mvPosition;
          #include <fog_vertex>
        }
      `,
			fragmentShader: `
        #include <common>
        #include <fog_pars_fragment>
        uniform vec3 waterColor; uniform vec3 lineColor; uniform float time; uniform float opacity;
        varying vec3 vWorld;
        void main() {
          vec2 p = vWorld.xz;
          float w = sin(p.x * 0.035 + sin(p.y * 0.021 + time * 0.4) * 2.0 + time * 0.7)
                  * sin(p.y * 0.043 + sin(p.x * 0.017 - time * 0.3) * 2.0);
          float line = smoothstep(0.84, 0.88, w) * (1.0 - smoothstep(0.93, 0.97, w));
          vec3 col = mix(waterColor, lineColor, line * 0.85);
          gl_FragColor = vec4(col, opacity + line * 0.35);
          #include <colorspace_fragment>
          #include <fog_fragment>
        }
      `,
			transparent: true,
			fog: true,
		});
		let e = new PlaneGeometry(1, 1, 1, 1);
		e.rotateX(-Math.PI / 2);
		this.mesh = new Mesh(e, this.mat);
		this.mesh.frustumCulled = false;
		this.mesh.renderOrder = 1;
		this.mesh.name = `water`;
	}
	update(e, t, n) {
		this.mesh.position.set(
			Math.round(e.position.x),
			0,
			Math.round(e.position.z),
		);
		this.mesh.scale.set(n, 1, n);
		this.mat.uniforms.time.value = t;
	}
};
var HANGAR_CATEGORIES = [
	{
		id: `style`,
		label: `Plane`,
	},
	{
		id: `paint`,
		label: `Paint`,
	},
	{
		id: `wheels`,
		label: `Wheels`,
	},
];
var formatHexColor = (e) => `#${e.toString(16).padStart(6, `0`)}`;
var HANGAR_OPTIONS = {
	style: PLANE_STYLES,
	paint: PLANE_PAINT_OPTIONS.map((e) => ({
		id: e.id,
		name: e.name,
		swatch: `linear-gradient(135deg, ${formatHexColor(e.body)} 0 62%, ${formatHexColor(e.accent)} 62% 100%)`,
	})),
	wheels: PLANE_WHEEL_OPTIONS,
};
var clampHangarStat = (e) => Math.max(0, Math.min(1, e));
var HANGAR_STATS = [
	{
		key: `topSpeed`,
		label: `Top speed`,
		bar: (e) => clampHangarStat((e.topSpeed * 3.6) / 500),
		text: (e) => `${Math.round(e.topSpeed * 3.6)} km/h`,
		delta: (e) => Math.round(e.topSpeed * 3.6),
		better: 1,
	},
	{
		key: `climb`,
		label: `Climb`,
		bar: (e) => clampHangarStat(e.climb / 20),
		text: (e) => `${e.climb.toFixed(1)} m/s`,
		delta: (e) => Math.round(e.climb * 10) / 10,
		better: 1,
	},
	{
		key: `handling`,
		label: `Handling`,
		bar: (e) => e.handling,
		text: (e) => `${Math.round(e.handling * 10)}/10`,
		delta: (e) => Math.round(e.handling * 10),
		better: 1,
	},
	{
		key: `takeoffRun`,
		label: `Short takeoff`,
		bar: (e) => clampHangarStat(1 - e.takeoffRun / 650),
		text: (e) => `${Math.round(e.takeoffRun / 10) * 10} m run`,
		delta: (e) => Math.round(e.takeoffRun / 10) * 10,
		better: -1,
	},
	{
		key: `landing`,
		label: `Easy landing`,
		bar: (e) => e.landing,
		text: (e) => `stall ${Math.round(e.stall * 3.6)} km/h`,
		delta: (e) => Math.round(e.landing * 10),
		better: 1,
	},
];
export {
	Water,
	HANGAR_OPTIONS,
	Sky,
	clampHangarStat,
	SKY_TIME_PRESETS,
	HANGAR_CATEGORIES,
	sunDirectionForTime,
	formatHexColor,
	HANGAR_STATS,
};
