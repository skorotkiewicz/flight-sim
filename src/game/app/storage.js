import { BufferAttribute, BufferGeometry } from "../core/three.js";
import { SETTINGS_STORAGE_KEY } from "../flight/clock.js";

var BEST_STORAGE_KEY = `baron.best.v1`;
function randomSeed() {
	return Math.floor(Math.random() * 999999999) + 1;
}
function createDefaultSettings() {
	return {
		quality: `auto`,
		assist: `arcade`,
		seed: randomSeed(),
		volume: 0.7,
		invertPitch: false,
		cameraShake: true,
		atcEnabled: false,
		mode: `free`,
		dest: 1,
		tilt: false,
	};
}
function readStorageItem(e) {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}
function writeStorageItem(e, t) {
	try {
		localStorage.setItem(e, t);
	} catch {}
}
function loadSettings() {
	let e = createDefaultSettings();
	let t = readStorageItem(SETTINGS_STORAGE_KEY);
	if (!t) {
		return e;
	}
	try {
		let n = JSON.parse(t);
		delete n.mission;
		delete n.difficulty;
		let r = {
			...e,
			...n,
		};
		r.atcEnabled = r.atcEnabled === true;
		if (r.mode !== `free` && r.mode !== `route`) {
			r.mode = `free`;
		}
		if (!Number.isInteger(r.dest) || r.dest < 1 || r.dest > 4) {
			r.dest = 1;
		}
		return r;
	} catch {
		return e;
	}
}
function saveSettings(e) {
	writeStorageItem(SETTINGS_STORAGE_KEY, JSON.stringify(e));
}
function loadBestScores() {
	let e = readStorageItem(BEST_STORAGE_KEY);
	if (!e) {
		return {};
	}
	try {
		return JSON.parse(e);
	} catch {
		return {};
	}
}
function getScoreStorageKey(e, t = `free`, n = 0) {
	if (t === `route`) {
		return `route:${e}:${n}`;
	} else {
		return `free:${e}`;
	}
}
function getBestScore(e) {
	return loadBestScores()[e] ?? null;
}
function saveBestScore(e, t) {
	let n = loadBestScores();
	let r = n[e];
	if (r && r.medal >= t.medal) {
		return false;
	} else {
		n[e] = t;
		writeStorageItem(BEST_STORAGE_KEY, JSON.stringify(n));
		return true;
	}
}
function mergeGeometries(e, t = false) {
	let n = e[0].index !== null;
	let r = new Set(Object.keys(e[0].attributes));
	let i = new Set(Object.keys(e[0].morphAttributes));
	let a = {};
	let o = {};
	let s = e[0].morphTargetsRelative;
	let c = new BufferGeometry();
	let l = 0;
	for (let u = 0; u < e.length; ++u) {
		let d = e[u];
		let f = 0;
		if (n !== (d.index !== null)) {
			console.error(
				`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ${u}. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`,
			);
			return null;
		}
		for (let e in d.attributes) {
			if (!r.has(e)) {
				console.error(
					`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ${u}. All geometries must have compatible attributes; make sure "${e}" attribute exists among all geometries, or in none of them.`,
				);
				return null;
			}
			if (a[e] === undefined) {
				a[e] = [];
			}
			a[e].push(d.attributes[e]);
			f++;
		}
		if (f !== r.size) {
			console.error(
				`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ${u}. Make sure all geometries have the same number of attributes.`,
			);
			return null;
		}
		if (s !== d.morphTargetsRelative) {
			console.error(
				`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ${u}. .morphTargetsRelative must be consistent throughout all geometries.`,
			);
			return null;
		}
		for (let e in d.morphAttributes) {
			if (!i.has(e)) {
				console.error(
					`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ${u}.  .morphAttributes must be consistent throughout all geometries.`,
				);
				return null;
			}
			if (o[e] === undefined) {
				o[e] = [];
			}
			o[e].push(d.morphAttributes[e]);
		}
		if (t) {
			let e;
			if (n) {
				e = d.index.count;
			} else if (d.attributes.position !== undefined) {
				e = d.attributes.position.count;
			} else {
				console.error(
					`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ${u}. The geometry must have either an index or a position attribute`,
				);
				return null;
			}
			c.addGroup(l, e, u);
			l += e;
		}
	}
	if (n) {
		let t = 0;
		let n = [];
		for (let r = 0; r < e.length; ++r) {
			let i = e[r].index;
			for (let e = 0; e < i.count; ++e) {
				n.push(i.getX(e) + t);
			}
			t += e[r].attributes.position.count;
		}
		c.setIndex(n);
	}
	for (let e in a) {
		let t = mergeAttributes(a[e]);
		if (!t) {
			console.error(
				`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ${e} attribute.`,
			);
			return null;
		}
		c.setAttribute(e, t);
	}
	for (let e in o) {
		let t = o[e][0].length;
		if (t === 0) {
			break;
		}
		c.morphAttributes = c.morphAttributes || {};
		c.morphAttributes[e] = [];
		for (let n = 0; n < t; ++n) {
			let t = [];
			for (let r = 0; r < o[e].length; ++r) {
				t.push(o[e][r][n]);
			}
			let r = mergeAttributes(t);
			if (!r) {
				console.error(
					`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ${e} morphAttribute.`,
				);
				return null;
			}
			c.morphAttributes[e].push(r);
		}
	}
	return c;
}
function mergeAttributes(e) {
	let t;
	let n;
	let r;
	let i = -1;
	let a = 0;
	for (let o = 0; o < e.length; ++o) {
		let s = e[o];
		if (t === undefined) {
			t = s.array.constructor;
		}
		if (t !== s.array.constructor) {
			console.error(
				`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`,
			);
			return null;
		}
		if (n === undefined) {
			n = s.itemSize;
		}
		if (n !== s.itemSize) {
			console.error(
				`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`,
			);
			return null;
		}
		if (r === undefined) {
			r = s.normalized;
		}
		if (r !== s.normalized) {
			console.error(
				`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`,
			);
			return null;
		}
		if (i === -1) {
			i = s.gpuType;
		}
		if (i !== s.gpuType) {
			console.error(
				`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`,
			);
			return null;
		}
		a += s.count * n;
	}
	let o = new t(a);
	let s = new BufferAttribute(o, n, r);
	let c = 0;
	for (let t = 0; t < e.length; ++t) {
		let r = e[t];
		if (r.isInterleavedBufferAttribute) {
			let e = c / n;
			for (let t = 0, i = r.count; t < i; t++) {
				for (let i = 0; i < n; i++) {
					let n = r.getComponent(t, i);
					s.setComponent(t + e, i, n);
				}
			}
		} else {
			o.set(r.array, c);
		}
		c += r.count * n;
	}
	if (i !== undefined) {
		s.gpuType = i;
	}
	return s;
}

export {
	BEST_STORAGE_KEY,
	createDefaultSettings,
	getBestScore,
	getScoreStorageKey,
	loadBestScores,
	loadSettings,
	mergeAttributes,
	mergeGeometries,
	randomSeed,
	readStorageItem,
	saveBestScore,
	saveSettings,
	writeStorageItem,
};
