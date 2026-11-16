(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) {
    return;
  }
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) {
    n(e);
  }
  new MutationObserver(e => {
    for (let t of e) {
      if (t.type === `childList`) {
        for (let e of t.addedNodes) {
          if (e.tagName === `LINK` && e.rel === `modulepreload`) {
            n(e);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function t(e) {
    let t = {};
    if (e.integrity) {
      t.integrity = e.integrity;
    }
    if (e.referrerPolicy) {
      t.referrerPolicy = e.referrerPolicy;
    }
    t.credentials = e.crossOrigin === `use-credentials` ? `include` : e.crossOrigin === `anonymous` ? `omit` : `same-origin`;
    return t;
  }
  function n(e) {
    if (e.ep) {
      return;
    }
    e.ep = true;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var e = 1000;
var t = 1001;
var n = 1002;
var r = 1003;
var i = 1004;
var a = 1005;
var o = 1006;
var s = 1007;
var c = 1008;
var l = 1009;
var u = 1010;
var d = 1011;
var f = 1012;
var p = 1013;
var m = 1014;
var h = 1015;
var g = 1016;
var _ = 1017;
var v = 1018;
var y = 1020;
var b = 35902;
var x = 1021;
var S = 1022;
var C = 1023;
var w = 1024;
var T = 1025;
var E = 1026;
var D = 1027;
var O = 1028;
var k = 1029;
var A = 1030;
var j = 1031;
var ee = 1033;
var te = 33776;
var M = 33777;
var N = 33778;
var P = 33779;
var ne = 35840;
var re = 35841;
var ie = 35842;
var ae = 35843;
var oe = 36196;
var se = 37492;
var F = 37496;
var ce = 37808;
var le = 37809;
var ue = 37810;
var de = 37811;
var fe = 37812;
var pe = 37813;
var me = 37814;
var he = 37815;
var I = 37816;
var ge = 37817;
var _e = 37818;
var ve = 37819;
var L = 37820;
var ye = 37821;
var R = 36492;
var z = 36494;
var be = 36495;
var xe = 36283;
var Se = 36284;
var Ce = 36285;
var we = 36286;
var Te = 2300;
var Ee = 2301;
var De = 2302;
var Oe = 2400;
var ke = 2401;
var Ae = 2402;
var je = 3200;
var Me = 3201;
var Ne = `srgb`;
var Pe = `srgb-linear`;
var Fe = `linear`;
var Ie = `srgb`;
var Le = 7680;
var Re = 35044;
var ze = 2000;
var Be = class {
  addEventListener(e, t) {
    if (this._listeners === undefined) {
      this._listeners = {};
    }
    let n = this._listeners;
    if (n[e] === undefined) {
      n[e] = [];
    }
    if (n[e].indexOf(t) === -1) {
      n[e].push(t);
    }
  }
  hasEventListener(e, t) {
    if (this._listeners === undefined) {
      return false;
    }
    let n = this._listeners;
    return n[e] !== undefined && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === undefined) {
      return;
    }
    let n = this._listeners[e];
    if (n !== undefined) {
      let e = n.indexOf(t);
      if (e !== -1) {
        n.splice(e, 1);
      }
    }
  }
  dispatchEvent(e) {
    if (this._listeners === undefined) {
      return;
    }
    let t = this._listeners[e.type];
    if (t !== undefined) {
      e.target = this;
      let n = t.slice(0);
      for (let t = 0, r = n.length; t < r; t++) {
        n[t].call(this, e);
      }
      e.target = null;
    }
  }
};
var B = `00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`);
var Ve = 1234567;
var He = Math.PI / 180;
var Ue = 180 / Math.PI;
function We() {
  let e = Math.random() * 4294967295 | 0;
  let t = Math.random() * 4294967295 | 0;
  let n = Math.random() * 4294967295 | 0;
  let r = Math.random() * 4294967295 | 0;
  return `${B[e & 255] + B[e >> 8 & 255] + B[e >> 16 & 255] + B[e >> 24 & 255]}-${B[t & 255]}${B[t >> 8 & 255]}-${B[t >> 16 & 15 | 64]}${B[t >> 24 & 255]}-${B[n & 63 | 128]}${B[n >> 8 & 255]}-${B[n >> 16 & 255]}${B[n >> 24 & 255]}${B[r & 255]}${B[r >> 8 & 255]}${B[r >> 16 & 255]}${B[r >> 24 & 255]}`.toLowerCase();
}
function Ge(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Ke(e, t) {
  return (e % t + t) % t;
}
function qe(e, t, n, r, i) {
  return r + (e - t) * (i - r) / (n - t);
}
function Je(e, t, n) {
  if (e === t) {
    return 0;
  } else {
    return (n - e) / (t - e);
  }
}
function Ye(e, t, n) {
  return (1 - n) * e + n * t;
}
function Xe(e, t, n, r) {
  return Ye(e, t, 1 - Math.exp(-n * r));
}
function Ze(e, t = 1) {
  return t - Math.abs(Ke(e, t * 2) - t);
}
function Qe(e, t, n) {
  if (e <= t) {
    return 0;
  } else if (e >= n) {
    return 1;
  } else {
    e = (e - t) / (n - t);
    return e * e * (3 - e * 2);
  }
}
function $e(e, t, n) {
  if (e <= t) {
    return 0;
  } else if (e >= n) {
    return 1;
  } else {
    e = (e - t) / (n - t);
    return e * e * e * (e * (e * 6 - 15) + 10);
  }
}
function et(e, t) {
  return e + Math.floor(Math.random() * (t - e + 1));
}
function tt(e, t) {
  return e + Math.random() * (t - e);
}
function nt(e) {
  return e * (0.5 - Math.random());
}
function rt(e) {
  if (e !== undefined) {
    Ve = e;
  }
  let t = Ve += 1831565813;
  t = Math.imul(t ^ t >>> 15, t | 1);
  t ^= t + Math.imul(t ^ t >>> 7, t | 61);
  return ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function it(e) {
  return e * He;
}
function at(e) {
  return e * Ue;
}
function ot(e) {
  return !(e & e - 1) && e !== 0;
}
function st(e) {
  return 2 ** Math.ceil(Math.log(e) / Math.LN2);
}
function ct(e) {
  return 2 ** Math.floor(Math.log(e) / Math.LN2);
}
function lt(e, t, n, r, i) {
  let a = Math.cos;
  let o = Math.sin;
  let s = a(n / 2);
  let c = o(n / 2);
  let l = a((t + r) / 2);
  let u = o((t + r) / 2);
  let d = a((t - r) / 2);
  let f = o((t - r) / 2);
  let p = a((r - t) / 2);
  let m = o((r - t) / 2);
  switch (i) {
    case `XYX`:
      e.set(s * u, c * d, c * f, s * l);
      break;
    case `YZY`:
      e.set(c * f, s * u, c * d, s * l);
      break;
    case `ZXZ`:
      e.set(c * d, c * f, s * u, s * l);
      break;
    case `XZX`:
      e.set(s * u, c * m, c * p, s * l);
      break;
    case `YXY`:
      e.set(c * p, s * u, c * m, s * l);
      break;
    case `ZYZ`:
      e.set(c * m, c * p, s * u, s * l);
      break;
    default:
      console.warn(`THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: ${i}`);
  }
}
function ut(e, t) {
  switch (t.constructor) {
    case Float32Array:
      return e;
    case Uint32Array:
      return e / 4294967295;
    case Uint16Array:
      return e / 65535;
    case Uint8Array:
      return e / 255;
    case Int32Array:
      return Math.max(e / 2147483647, -1);
    case Int16Array:
      return Math.max(e / 32767, -1);
    case Int8Array:
      return Math.max(e / 127, -1);
    default:
      throw Error(`Invalid component type.`);
  }
}
function V(e, t) {
  switch (t.constructor) {
    case Float32Array:
      return e;
    case Uint32Array:
      return Math.round(e * 4294967295);
    case Uint16Array:
      return Math.round(e * 65535);
    case Uint8Array:
      return Math.round(e * 255);
    case Int32Array:
      return Math.round(e * 2147483647);
    case Int16Array:
      return Math.round(e * 32767);
    case Int8Array:
      return Math.round(e * 127);
    default:
      throw Error(`Invalid component type.`);
  }
}
var dt = {
  DEG2RAD: He,
  RAD2DEG: Ue,
  generateUUID: We,
  clamp: Ge,
  euclideanModulo: Ke,
  mapLinear: qe,
  inverseLerp: Je,
  lerp: Ye,
  damp: Xe,
  pingpong: Ze,
  smoothstep: Qe,
  smootherstep: $e,
  randInt: et,
  randFloat: tt,
  randFloatSpread: nt,
  seededRandom: rt,
  degToRad: it,
  radToDeg: at,
  isPowerOfTwo: ot,
  ceilPowerOfTwo: st,
  floorPowerOfTwo: ct,
  setQuaternionFromProperEuler: lt,
  normalize: V,
  denormalize: ut
};
var H = class e {
  constructor(t = 0, n = 0) {
    e.prototype.isVector2 = true;
    this.x = t;
    this.y = n;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    this.x = e;
    this.y = t;
    return this;
  }
  setScalar(e) {
    this.x = e;
    this.y = e;
    return this;
  }
  setX(e) {
    this.x = e;
    return this;
  }
  setY(e) {
    this.y = e;
    return this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw Error(`index is out of range: ${e}`);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw Error(`index is out of range: ${e}`);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    this.x = e.x;
    this.y = e.y;
    return this;
  }
  add(e) {
    this.x += e.x;
    this.y += e.y;
    return this;
  }
  addScalar(e) {
    this.x += e;
    this.y += e;
    return this;
  }
  addVectors(e, t) {
    this.x = e.x + t.x;
    this.y = e.y + t.y;
    return this;
  }
  addScaledVector(e, t) {
    this.x += e.x * t;
    this.y += e.y * t;
    return this;
  }
  sub(e) {
    this.x -= e.x;
    this.y -= e.y;
    return this;
  }
  subScalar(e) {
    this.x -= e;
    this.y -= e;
    return this;
  }
  subVectors(e, t) {
    this.x = e.x - t.x;
    this.y = e.y - t.y;
    return this;
  }
  multiply(e) {
    this.x *= e.x;
    this.y *= e.y;
    return this;
  }
  multiplyScalar(e) {
    this.x *= e;
    this.y *= e;
    return this;
  }
  divide(e) {
    this.x /= e.x;
    this.y /= e.y;
    return this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    let t = this.x;
    let n = this.y;
    let r = e.elements;
    this.x = r[0] * t + r[3] * n + r[6];
    this.y = r[1] * t + r[4] * n + r[7];
    return this;
  }
  min(e) {
    this.x = Math.min(this.x, e.x);
    this.y = Math.min(this.y, e.y);
    return this;
  }
  max(e) {
    this.x = Math.max(this.x, e.x);
    this.y = Math.max(this.y, e.y);
    return this;
  }
  clamp(e, t) {
    this.x = Math.max(e.x, Math.min(t.x, this.x));
    this.y = Math.max(e.y, Math.min(t.y, this.y));
    return this;
  }
  clampScalar(e, t) {
    this.x = Math.max(e, Math.min(t, this.x));
    this.y = Math.max(e, Math.min(t, this.y));
    return this;
  }
  clampLength(e, t) {
    let n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  }
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  }
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  }
  roundToZero() {
    this.x = Math.trunc(this.x);
    this.y = Math.trunc(this.y);
    return this;
  }
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    let t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) {
      return Math.PI / 2;
    }
    let n = this.dot(e) / t;
    return Math.acos(Ge(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    let t = this.x - e.x;
    let n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    this.x += (e.x - this.x) * t;
    this.y += (e.y - this.y) * t;
    return this;
  }
  lerpVectors(e, t, n) {
    this.x = e.x + (t.x - e.x) * n;
    this.y = e.y + (t.y - e.y) * n;
    return this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    this.x = e[t];
    this.y = e[t + 1];
    return this;
  }
  toArray(e = [], t = 0) {
    e[t] = this.x;
    e[t + 1] = this.y;
    return e;
  }
  fromBufferAttribute(e, t) {
    this.x = e.getX(t);
    this.y = e.getY(t);
    return this;
  }
  rotateAround(e, t) {
    let n = Math.cos(t);
    let r = Math.sin(t);
    let i = this.x - e.x;
    let a = this.y - e.y;
    this.x = i * n - a * r + e.x;
    this.y = i * r + a * n + e.y;
    return this;
  }
  random() {
    this.x = Math.random();
    this.y = Math.random();
    return this;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
  }
};
var U = class e {
  constructor(t, n, r, i, a, o, s, c, l) {
    e.prototype.isMatrix3 = true;
    this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    if (t !== undefined) {
      this.set(t, n, r, i, a, o, s, c, l);
    }
  }
  set(e, t, n, r, i, a, o, s, c) {
    let l = this.elements;
    l[0] = e;
    l[1] = r;
    l[2] = o;
    l[3] = t;
    l[4] = i;
    l[5] = s;
    l[6] = n;
    l[7] = a;
    l[8] = c;
    return this;
  }
  identity() {
    this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
    return this;
  }
  copy(e) {
    let t = this.elements;
    let n = e.elements;
    t[0] = n[0];
    t[1] = n[1];
    t[2] = n[2];
    t[3] = n[3];
    t[4] = n[4];
    t[5] = n[5];
    t[6] = n[6];
    t[7] = n[7];
    t[8] = n[8];
    return this;
  }
  extractBasis(e, t, n) {
    e.setFromMatrix3Column(this, 0);
    t.setFromMatrix3Column(this, 1);
    n.setFromMatrix3Column(this, 2);
    return this;
  }
  setFromMatrix4(e) {
    let t = e.elements;
    this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]);
    return this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    let n = e.elements;
    let r = t.elements;
    let i = this.elements;
    let a = n[0];
    let o = n[3];
    let s = n[6];
    let c = n[1];
    let l = n[4];
    let u = n[7];
    let d = n[2];
    let f = n[5];
    let p = n[8];
    let m = r[0];
    let h = r[3];
    let g = r[6];
    let _ = r[1];
    let v = r[4];
    let y = r[7];
    let b = r[2];
    let x = r[5];
    let S = r[8];
    i[0] = a * m + o * _ + s * b;
    i[3] = a * h + o * v + s * x;
    i[6] = a * g + o * y + s * S;
    i[1] = c * m + l * _ + u * b;
    i[4] = c * h + l * v + u * x;
    i[7] = c * g + l * y + u * S;
    i[2] = d * m + f * _ + p * b;
    i[5] = d * h + f * v + p * x;
    i[8] = d * g + f * y + p * S;
    return this;
  }
  multiplyScalar(e) {
    let t = this.elements;
    t[0] *= e;
    t[3] *= e;
    t[6] *= e;
    t[1] *= e;
    t[4] *= e;
    t[7] *= e;
    t[2] *= e;
    t[5] *= e;
    t[8] *= e;
    return this;
  }
  determinant() {
    let e = this.elements;
    let t = e[0];
    let n = e[1];
    let r = e[2];
    let i = e[3];
    let a = e[4];
    let o = e[5];
    let s = e[6];
    let c = e[7];
    let l = e[8];
    return t * a * l - t * o * c - n * i * l + n * o * s + r * i * c - r * a * s;
  }
  invert() {
    let e = this.elements;
    let t = e[0];
    let n = e[1];
    let r = e[2];
    let i = e[3];
    let a = e[4];
    let o = e[5];
    let s = e[6];
    let c = e[7];
    let l = e[8];
    let u = l * a - o * c;
    let d = o * s - l * i;
    let f = c * i - a * s;
    let p = t * u + n * d + r * f;
    if (p === 0) {
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
    let m = 1 / p;
    e[0] = u * m;
    e[1] = (r * c - l * n) * m;
    e[2] = (o * n - r * a) * m;
    e[3] = d * m;
    e[4] = (l * t - r * s) * m;
    e[5] = (r * i - o * t) * m;
    e[6] = f * m;
    e[7] = (n * s - c * t) * m;
    e[8] = (a * t - n * i) * m;
    return this;
  }
  transpose() {
    let e;
    let t = this.elements;
    e = t[1];
    t[1] = t[3];
    t[3] = e;
    e = t[2];
    t[2] = t[6];
    t[6] = e;
    e = t[5];
    t[5] = t[7];
    t[7] = e;
    return this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    let t = this.elements;
    e[0] = t[0];
    e[1] = t[3];
    e[2] = t[6];
    e[3] = t[1];
    e[4] = t[4];
    e[5] = t[7];
    e[6] = t[2];
    e[7] = t[5];
    e[8] = t[8];
    return this;
  }
  setUvTransform(e, t, n, r, i, a, o) {
    let s = Math.cos(i);
    let c = Math.sin(i);
    this.set(n * s, n * c, -n * (s * a + c * o) + a + e, -r * c, r * s, -r * (-c * a + s * o) + o + t, 0, 0, 1);
    return this;
  }
  scale(e, t) {
    this.premultiply(ft.makeScale(e, t));
    return this;
  }
  rotate(e) {
    this.premultiply(ft.makeRotation(-e));
    return this;
  }
  translate(e, t) {
    this.premultiply(ft.makeTranslation(e, t));
    return this;
  }
  makeTranslation(e, t) {
    if (e.isVector2) {
      this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1);
    } else {
      this.set(1, 0, e, 0, 1, t, 0, 0, 1);
    }
    return this;
  }
  makeRotation(e) {
    let t = Math.cos(e);
    let n = Math.sin(e);
    this.set(t, -n, 0, n, t, 0, 0, 0, 1);
    return this;
  }
  makeScale(e, t) {
    this.set(e, 0, 0, 0, t, 0, 0, 0, 1);
    return this;
  }
  equals(e) {
    let t = this.elements;
    let n = e.elements;
    for (let e = 0; e < 9; e++) {
      if (t[e] !== n[e]) {
        return false;
      }
    }
    return true;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) {
      this.elements[n] = e[n + t];
    }
    return this;
  }
  toArray(e = [], t = 0) {
    let n = this.elements;
    e[t] = n[0];
    e[t + 1] = n[1];
    e[t + 2] = n[2];
    e[t + 3] = n[3];
    e[t + 4] = n[4];
    e[t + 5] = n[5];
    e[t + 6] = n[6];
    e[t + 7] = n[7];
    e[t + 8] = n[8];
    return e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
};
var ft = new U();
function pt(e) {
  for (let t = e.length - 1; t >= 0; --t) {
    if (e[t] >= 65535) {
      return true;
    }
  }
  return false;
}
function mt(e) {
  return document.createElementNS(`http://www.w3.org/1999/xhtml`, e);
}
function ht() {
  let e = mt(`canvas`);
  e.style.display = `block`;
  return e;
}
var gt = {};
function _t(e) {
  if (!(e in gt)) {
    gt[e] = true;
    console.warn(e);
  }
}
function vt(e, t, n) {
  return new Promise(function (r, i) {
    function a() {
      switch (e.clientWaitSync(t, e.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case e.WAIT_FAILED:
          i();
          break;
        case e.TIMEOUT_EXPIRED:
          setTimeout(a, n);
          break;
        default:
          r();
      }
    }
    setTimeout(a, n);
  });
}
function yt(e) {
  let t = e.elements;
  t[2] = t[2] * 0.5 + t[3] * 0.5;
  t[6] = t[6] * 0.5 + t[7] * 0.5;
  t[10] = t[10] * 0.5 + t[11] * 0.5;
  t[14] = t[14] * 0.5 + t[15] * 0.5;
}
function bt(e) {
  let t = e.elements;
  if (t[11] === -1) {
    t[10] = -t[10] - 1;
    t[14] = -t[14];
  } else {
    t[10] = -t[10];
    t[14] = -t[14] + 1;
  }
}
var W = {
  enabled: true,
  workingColorSpace: Pe,
  spaces: {},
  convert: function (e, t, n) {
    if (this.enabled !== false && t !== n && !!t && !!n) {
      if (this.spaces[t].transfer === `srgb`) {
        e.r = xt(e.r);
        e.g = xt(e.g);
        e.b = xt(e.b);
      }
      if (this.spaces[t].primaries !== this.spaces[n].primaries) {
        e.applyMatrix3(this.spaces[t].toXYZ);
        e.applyMatrix3(this.spaces[n].fromXYZ);
      }
      if (this.spaces[n].transfer === `srgb`) {
        e.r = St(e.r);
        e.g = St(e.g);
        e.b = St(e.b);
      }
    }
    return e;
  },
  fromWorkingColorSpace: function (e, t) {
    return this.convert(e, this.workingColorSpace, t);
  },
  toWorkingColorSpace: function (e, t) {
    return this.convert(e, t, this.workingColorSpace);
  },
  getPrimaries: function (e) {
    return this.spaces[e].primaries;
  },
  getTransfer: function (e) {
    if (e === ``) {
      return Fe;
    } else {
      return this.spaces[e].transfer;
    }
  },
  getLuminanceCoefficients: function (e, t = this.workingColorSpace) {
    return e.fromArray(this.spaces[t].luminanceCoefficients);
  },
  define: function (e) {
    Object.assign(this.spaces, e);
  },
  _getMatrix: function (e, t, n) {
    return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ);
  },
  _getDrawingBufferColorSpace: function (e) {
    return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace;
  },
  _getUnpackColorSpace: function (e = this.workingColorSpace) {
    return this.spaces[e].workingColorSpaceConfig.unpackColorSpace;
  }
};
function xt(e) {
  if (e < 0.04045) {
    return e * 0.0773993808;
  } else {
    return (e * 0.9478672986 + 0.0521327014) ** 2.4;
  }
}
function St(e) {
  if (e < 0.0031308) {
    return e * 12.92;
  } else {
    return e ** 0.41666 * 1.055 - 0.055;
  }
}
var Ct = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06];
var wt = [0.2126, 0.7152, 0.0722];
var Tt = [0.3127, 0.329];
var Et = new U().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322);
var Dt = new U().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
W.define({
  [Pe]: {
    primaries: Ct,
    whitePoint: Tt,
    transfer: Fe,
    toXYZ: Et,
    fromXYZ: Dt,
    luminanceCoefficients: wt,
    workingColorSpaceConfig: {
      unpackColorSpace: Ne
    },
    outputColorSpaceConfig: {
      drawingBufferColorSpace: Ne
    }
  },
  [Ne]: {
    primaries: Ct,
    whitePoint: Tt,
    transfer: Ie,
    toXYZ: Et,
    fromXYZ: Dt,
    luminanceCoefficients: wt,
    outputColorSpaceConfig: {
      drawingBufferColorSpace: Ne
    }
  }
});
var Ot;
var kt = class {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > `u`) {
      return e.src;
    }
    let t;
    if (e instanceof HTMLCanvasElement) {
      t = e;
    } else {
      if (Ot === undefined) {
        Ot = mt(`canvas`);
      }
      Ot.width = e.width;
      Ot.height = e.height;
      let n = Ot.getContext(`2d`);
      if (e instanceof ImageData) {
        n.putImageData(e, 0, 0);
      } else {
        n.drawImage(e, 0, 0, e.width, e.height);
      }
      t = Ot;
    }
    if (t.width > 2048 || t.height > 2048) {
      console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`, e);
      return t.toDataURL(`image/jpeg`, 0.6);
    } else {
      return t.toDataURL(`image/png`);
    }
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < `u` && e instanceof HTMLImageElement || typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement || typeof ImageBitmap < `u` && e instanceof ImageBitmap) {
      let t = mt(`canvas`);
      t.width = e.width;
      t.height = e.height;
      let n = t.getContext(`2d`);
      n.drawImage(e, 0, 0, e.width, e.height);
      let r = n.getImageData(0, 0, e.width, e.height);
      let i = r.data;
      for (let e = 0; e < i.length; e++) {
        i[e] = xt(i[e] / 255) * 255;
      }
      n.putImageData(r, 0, 0);
      return t;
    }
    if (e.data) {
      let t = e.data.slice(0);
      for (let e = 0; e < t.length; e++) {
        if (t instanceof Uint8Array || t instanceof Uint8ClampedArray) {
          t[e] = Math.floor(xt(t[e] / 255) * 255);
        } else {
          t[e] = xt(t[e]);
        }
      }
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    }
    console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`);
    return e;
  }
};
var At = 0;
var jt = class {
  constructor(e = null) {
    this.isSource = true;
    Object.defineProperty(this, "id", {
      value: At++
    });
    this.uuid = We();
    this.data = e;
    this.dataReady = true;
    this.version = 0;
  }
  set needsUpdate(e) {
    if (e === true) {
      this.version++;
    }
  }
  toJSON(e) {
    let t = e === undefined || typeof e == `string`;
    if (!t && e.images[this.uuid] !== undefined) {
      return e.images[this.uuid];
    }
    let n = {
      uuid: this.uuid,
      url: ``
    };
    let r = this.data;
    if (r !== null) {
      let e;
      if (Array.isArray(r)) {
        e = [];
        for (let t = 0, n = r.length; t < n; t++) {
          if (r[t].isDataTexture) {
            e.push(Mt(r[t].image));
          } else {
            e.push(Mt(r[t]));
          }
        }
      } else {
        e = Mt(r);
      }
      n.url = e;
    }
    if (!t) {
      e.images[this.uuid] = n;
    }
    return n;
  }
};
function Mt(e) {
  if (typeof HTMLImageElement < `u` && e instanceof HTMLImageElement || typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement || typeof ImageBitmap < `u` && e instanceof ImageBitmap) {
    return kt.getDataURL(e);
  } else if (e.data) {
    return {
      data: Array.from(e.data),
      width: e.width,
      height: e.height,
      type: e.data.constructor.name
    };
  } else {
    console.warn(`THREE.Texture: Unable to serialize Texture.`);
    return {};
  }
}
var Nt = 0;
var Pt = class r extends Be {
  constructor(e = r.DEFAULT_IMAGE, n = r.DEFAULT_MAPPING, i = t, a = t, s = o, u = c, d = C, f = l, p = r.DEFAULT_ANISOTROPY, m = ``) {
    super();
    this.isTexture = true;
    Object.defineProperty(this, "id", {
      value: Nt++
    });
    this.uuid = We();
    this.name = ``;
    this.source = new jt(e);
    this.mipmaps = [];
    this.mapping = n;
    this.channel = 0;
    this.wrapS = i;
    this.wrapT = a;
    this.magFilter = s;
    this.minFilter = u;
    this.anisotropy = p;
    this.format = d;
    this.internalFormat = null;
    this.type = f;
    this.offset = new H(0, 0);
    this.repeat = new H(1, 1);
    this.center = new H(0, 0);
    this.rotation = 0;
    this.matrixAutoUpdate = true;
    this.matrix = new U();
    this.generateMipmaps = true;
    this.premultiplyAlpha = false;
    this.flipY = true;
    this.unpackAlignment = 4;
    this.colorSpace = m;
    this.userData = {};
    this.version = 0;
    this.onUpdate = null;
    this.isRenderTargetTexture = false;
    this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name;
    this.source = e.source;
    this.mipmaps = e.mipmaps.slice(0);
    this.mapping = e.mapping;
    this.channel = e.channel;
    this.wrapS = e.wrapS;
    this.wrapT = e.wrapT;
    this.magFilter = e.magFilter;
    this.minFilter = e.minFilter;
    this.anisotropy = e.anisotropy;
    this.format = e.format;
    this.internalFormat = e.internalFormat;
    this.type = e.type;
    this.offset.copy(e.offset);
    this.repeat.copy(e.repeat);
    this.center.copy(e.center);
    this.rotation = e.rotation;
    this.matrixAutoUpdate = e.matrixAutoUpdate;
    this.matrix.copy(e.matrix);
    this.generateMipmaps = e.generateMipmaps;
    this.premultiplyAlpha = e.premultiplyAlpha;
    this.flipY = e.flipY;
    this.unpackAlignment = e.unpackAlignment;
    this.colorSpace = e.colorSpace;
    this.userData = JSON.parse(JSON.stringify(e.userData));
    this.needsUpdate = true;
    return this;
  }
  toJSON(e) {
    let t = e === undefined || typeof e == `string`;
    if (!t && e.textures[this.uuid] !== undefined) {
      return e.textures[this.uuid];
    }
    let n = {
      metadata: {
        version: 4.6,
        type: `Texture`,
        generator: `Texture.toJSON`
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    if (Object.keys(this.userData).length > 0) {
      n.userData = this.userData;
    }
    if (!t) {
      e.textures[this.uuid] = n;
    }
    return n;
  }
  dispose() {
    this.dispatchEvent({
      type: `dispose`
    });
  }
  transformUv(r) {
    if (this.mapping !== 300) {
      return r;
    }
    r.applyMatrix3(this.matrix);
    if (r.x < 0 || r.x > 1) {
      switch (this.wrapS) {
        case e:
          r.x -= Math.floor(r.x);
          break;
        case t:
          r.x = r.x < 0 ? 0 : 1;
          break;
        case n:
          if (Math.abs(Math.floor(r.x) % 2) === 1) {
            r.x = Math.ceil(r.x) - r.x;
          } else {
            r.x -= Math.floor(r.x);
          }
      }
    }
    if (r.y < 0 || r.y > 1) {
      switch (this.wrapT) {
        case e:
          r.y -= Math.floor(r.y);
          break;
        case t:
          r.y = r.y < 0 ? 0 : 1;
          break;
        case n:
          if (Math.abs(Math.floor(r.y) % 2) === 1) {
            r.y = Math.ceil(r.y) - r.y;
          } else {
            r.y -= Math.floor(r.y);
          }
      }
    }
    if (this.flipY) {
      r.y = 1 - r.y;
    }
    return r;
  }
  set needsUpdate(e) {
    if (e === true) {
      this.version++;
      this.source.needsUpdate = true;
    }
  }
  set needsPMREMUpdate(e) {
    if (e === true) {
      this.pmremVersion++;
    }
  }
};
Pt.DEFAULT_IMAGE = null;
Pt.DEFAULT_MAPPING = 300;
Pt.DEFAULT_ANISOTROPY = 1;
var Ft = class e {
  constructor(t = 0, n = 0, r = 0, i = 1) {
    e.prototype.isVector4 = true;
    this.x = t;
    this.y = n;
    this.z = r;
    this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, r) {
    this.x = e;
    this.y = t;
    this.z = n;
    this.w = r;
    return this;
  }
  setScalar(e) {
    this.x = e;
    this.y = e;
    this.z = e;
    this.w = e;
    return this;
  }
  setX(e) {
    this.x = e;
    return this;
  }
  setY(e) {
    this.y = e;
    return this;
  }
  setZ(e) {
    this.z = e;
    return this;
  }
  setW(e) {
    this.w = e;
    return this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw Error(`index is out of range: ${e}`);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw Error(`index is out of range: ${e}`);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    this.x = e.x;
    this.y = e.y;
    this.z = e.z;
    this.w = e.w === undefined ? 1 : e.w;
    return this;
  }
  add(e) {
    this.x += e.x;
    this.y += e.y;
    this.z += e.z;
    this.w += e.w;
    return this;
  }
  addScalar(e) {
    this.x += e;
    this.y += e;
    this.z += e;
    this.w += e;
    return this;
  }
  addVectors(e, t) {
    this.x = e.x + t.x;
    this.y = e.y + t.y;
    this.z = e.z + t.z;
    this.w = e.w + t.w;
    return this;
  }
  addScaledVector(e, t) {
    this.x += e.x * t;
    this.y += e.y * t;
    this.z += e.z * t;
    this.w += e.w * t;
    return this;
  }
  sub(e) {
    this.x -= e.x;
    this.y -= e.y;
    this.z -= e.z;
    this.w -= e.w;
    return this;
  }
  subScalar(e) {
    this.x -= e;
    this.y -= e;
    this.z -= e;
    this.w -= e;
    return this;
  }
  subVectors(e, t) {
    this.x = e.x - t.x;
    this.y = e.y - t.y;
    this.z = e.z - t.z;
    this.w = e.w - t.w;
    return this;
  }
  multiply(e) {
    this.x *= e.x;
    this.y *= e.y;
    this.z *= e.z;
    this.w *= e.w;
    return this;
  }
  multiplyScalar(e) {
    this.x *= e;
    this.y *= e;
    this.z *= e;
    this.w *= e;
    return this;
  }
  applyMatrix4(e) {
    let t = this.x;
    let n = this.y;
    let r = this.z;
    let i = this.w;
    let a = e.elements;
    this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i;
    this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i;
    this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i;
    this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i;
    return this;
  }
  divide(e) {
    this.x /= e.x;
    this.y /= e.y;
    this.z /= e.z;
    this.w /= e.w;
    return this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = Math.acos(e.w) * 2;
    let t = Math.sqrt(1 - e.w * e.w);
    if (t < 0.0001) {
      this.x = 1;
      this.y = 0;
      this.z = 0;
    } else {
      this.x = e.x / t;
      this.y = e.y / t;
      this.z = e.z / t;
    }
    return this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t;
    let n;
    let r;
    let i;
    let a = 0.01;
    let o = 0.1;
    let s = e.elements;
    let c = s[0];
    let l = s[4];
    let u = s[8];
    let d = s[1];
    let f = s[5];
    let p = s[9];
    let m = s[2];
    let h = s[6];
    let g = s[10];
    if (Math.abs(l - d) < a && Math.abs(u - m) < a && Math.abs(p - h) < a) {
      if (Math.abs(l + d) < o && Math.abs(u + m) < o && Math.abs(p + h) < o && Math.abs(c + f + g - 3) < o) {
        this.set(1, 0, 0, 0);
        return this;
      }
      t = Math.PI;
      let e = (c + 1) / 2;
      let s = (f + 1) / 2;
      let _ = (g + 1) / 2;
      let v = (l + d) / 4;
      let y = (u + m) / 4;
      let b = (p + h) / 4;
      if (e > s && e > _) {
        if (e < a) {
          n = 0;
          r = 0.707106781;
          i = 0.707106781;
        } else {
          n = Math.sqrt(e);
          r = v / n;
          i = y / n;
        }
      } else if (s > _) {
        if (s < a) {
          n = 0.707106781;
          r = 0;
          i = 0.707106781;
        } else {
          r = Math.sqrt(s);
          n = v / r;
          i = b / r;
        }
      } else if (_ < a) {
        n = 0.707106781;
        r = 0.707106781;
        i = 0;
      } else {
        i = Math.sqrt(_);
        n = y / i;
        r = b / i;
      }
      this.set(n, r, i, t);
      return this;
    }
    let _ = Math.sqrt((h - p) * (h - p) + (u - m) * (u - m) + (d - l) * (d - l));
    if (Math.abs(_) < 0.001) {
      _ = 1;
    }
    this.x = (h - p) / _;
    this.y = (u - m) / _;
    this.z = (d - l) / _;
    this.w = Math.acos((c + f + g - 1) / 2);
    return this;
  }
  setFromMatrixPosition(e) {
    let t = e.elements;
    this.x = t[12];
    this.y = t[13];
    this.z = t[14];
    this.w = t[15];
    return this;
  }
  min(e) {
    this.x = Math.min(this.x, e.x);
    this.y = Math.min(this.y, e.y);
    this.z = Math.min(this.z, e.z);
    this.w = Math.min(this.w, e.w);
    return this;
  }
  max(e) {
    this.x = Math.max(this.x, e.x);
    this.y = Math.max(this.y, e.y);
    this.z = Math.max(this.z, e.z);
    this.w = Math.max(this.w, e.w);
    return this;
  }
  clamp(e, t) {
    this.x = Math.max(e.x, Math.min(t.x, this.x));
    this.y = Math.max(e.y, Math.min(t.y, this.y));
    this.z = Math.max(e.z, Math.min(t.z, this.z));
    this.w = Math.max(e.w, Math.min(t.w, this.w));
    return this;
  }
  clampScalar(e, t) {
    this.x = Math.max(e, Math.min(t, this.x));
    this.y = Math.max(e, Math.min(t, this.y));
    this.z = Math.max(e, Math.min(t, this.z));
    this.w = Math.max(e, Math.min(t, this.w));
    return this;
  }
  clampLength(e, t) {
    let n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    this.w = Math.floor(this.w);
    return this;
  }
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    this.w = Math.ceil(this.w);
    return this;
  }
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    this.w = Math.round(this.w);
    return this;
  }
  roundToZero() {
    this.x = Math.trunc(this.x);
    this.y = Math.trunc(this.y);
    this.z = Math.trunc(this.z);
    this.w = Math.trunc(this.w);
    return this;
  }
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    this.w = -this.w;
    return this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    this.x += (e.x - this.x) * t;
    this.y += (e.y - this.y) * t;
    this.z += (e.z - this.z) * t;
    this.w += (e.w - this.w) * t;
    return this;
  }
  lerpVectors(e, t, n) {
    this.x = e.x + (t.x - e.x) * n;
    this.y = e.y + (t.y - e.y) * n;
    this.z = e.z + (t.z - e.z) * n;
    this.w = e.w + (t.w - e.w) * n;
    return this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    this.x = e[t];
    this.y = e[t + 1];
    this.z = e[t + 2];
    this.w = e[t + 3];
    return this;
  }
  toArray(e = [], t = 0) {
    e[t] = this.x;
    e[t + 1] = this.y;
    e[t + 2] = this.z;
    e[t + 3] = this.w;
    return e;
  }
  fromBufferAttribute(e, t) {
    this.x = e.getX(t);
    this.y = e.getY(t);
    this.z = e.getZ(t);
    this.w = e.getW(t);
    return this;
  }
  random() {
    this.x = Math.random();
    this.y = Math.random();
    this.z = Math.random();
    this.w = Math.random();
    return this;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
    yield this.z;
    yield this.w;
  }
};
var It = class extends Be {
  constructor(e = 1, t = 1, n = {}) {
    super();
    this.isRenderTarget = true;
    this.width = e;
    this.height = t;
    this.depth = 1;
    this.scissor = new Ft(0, 0, e, t);
    this.scissorTest = false;
    this.viewport = new Ft(0, 0, e, t);
    let r = {
      width: e,
      height: t,
      depth: 1
    };
    n = Object.assign({
      generateMipmaps: false,
      internalFormat: null,
      minFilter: o,
      depthBuffer: true,
      stencilBuffer: false,
      resolveDepthBuffer: true,
      resolveStencilBuffer: true,
      depthTexture: null,
      samples: 0,
      count: 1
    }, n);
    let i = new Pt(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    i.flipY = false;
    i.generateMipmaps = n.generateMipmaps;
    i.internalFormat = n.internalFormat;
    this.textures = [];
    let a = n.count;
    for (let e = 0; e < a; e++) {
      this.textures[e] = i.clone();
      this.textures[e].isRenderTargetTexture = true;
    }
    this.depthBuffer = n.depthBuffer;
    this.stencilBuffer = n.stencilBuffer;
    this.resolveDepthBuffer = n.resolveDepthBuffer;
    this.resolveStencilBuffer = n.resolveStencilBuffer;
    this.depthTexture = n.depthTexture;
    this.samples = n.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e;
      this.height = t;
      this.depth = n;
      for (let r = 0, i = this.textures.length; r < i; r++) {
        this.textures[r].image.width = e;
        this.textures[r].image.height = t;
        this.textures[r].image.depth = n;
      }
      this.dispose();
    }
    this.viewport.set(0, 0, e, t);
    this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width;
    this.height = e.height;
    this.depth = e.depth;
    this.scissor.copy(e.scissor);
    this.scissorTest = e.scissorTest;
    this.viewport.copy(e.viewport);
    this.textures.length = 0;
    for (let t = 0, n = e.textures.length; t < n; t++) {
      this.textures[t] = e.textures[t].clone();
      this.textures[t].isRenderTargetTexture = true;
    }
    let t = Object.assign({}, e.texture.image);
    this.texture.source = new jt(t);
    this.depthBuffer = e.depthBuffer;
    this.stencilBuffer = e.stencilBuffer;
    this.resolveDepthBuffer = e.resolveDepthBuffer;
    this.resolveStencilBuffer = e.resolveStencilBuffer;
    if (e.depthTexture !== null) {
      this.depthTexture = e.depthTexture.clone();
    }
    this.samples = e.samples;
    return this;
  }
  dispose() {
    this.dispatchEvent({
      type: `dispose`
    });
  }
};
var Lt = class extends It {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n);
    this.isWebGLRenderTarget = true;
  }
};
var Rt = class extends Pt {
  constructor(e = null, n = 1, i = 1, a = 1) {
    super(null);
    this.isDataArrayTexture = true;
    this.image = {
      data: e,
      width: n,
      height: i,
      depth: a
    };
    this.magFilter = r;
    this.minFilter = r;
    this.wrapR = t;
    this.generateMipmaps = false;
    this.flipY = false;
    this.unpackAlignment = 1;
    this.layerUpdates = new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
};
var zt = class extends Pt {
  constructor(e = null, n = 1, i = 1, a = 1) {
    super(null);
    this.isData3DTexture = true;
    this.image = {
      data: e,
      width: n,
      height: i,
      depth: a
    };
    this.magFilter = r;
    this.minFilter = r;
    this.wrapR = t;
    this.generateMipmaps = false;
    this.flipY = false;
    this.unpackAlignment = 1;
  }
};
var Bt = class {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.isQuaternion = true;
    this._x = e;
    this._y = t;
    this._z = n;
    this._w = r;
  }
  static slerpFlat(e, t, n, r, i, a, o) {
    let s = n[r + 0];
    let c = n[r + 1];
    let l = n[r + 2];
    let u = n[r + 3];
    let d = i[a + 0];
    let f = i[a + 1];
    let p = i[a + 2];
    let m = i[a + 3];
    if (o === 0) {
      e[t + 0] = s;
      e[t + 1] = c;
      e[t + 2] = l;
      e[t + 3] = u;
    } else if (o === 1) {
      e[t + 0] = d;
      e[t + 1] = f;
      e[t + 2] = p;
      e[t + 3] = m;
    } else {
      if (u !== m || s !== d || c !== f || l !== p) {
        let e = 1 - o;
        let t = s * d + c * f + l * p + u * m;
        let n = t >= 0 ? 1 : -1;
        let r = 1 - t * t;
        if (r > 2.220446049250313e-16) {
          let i = Math.sqrt(r);
          let a = Math.atan2(i, t * n);
          e = Math.sin(e * a) / i;
          o = Math.sin(o * a) / i;
        }
        let i = o * n;
        s = s * e + d * i;
        c = c * e + f * i;
        l = l * e + p * i;
        u = u * e + m * i;
        if (e === 1 - o) {
          let e = 1 / Math.sqrt(s * s + c * c + l * l + u * u);
          s *= e;
          c *= e;
          l *= e;
          u *= e;
        }
      }
      e[t] = s;
      e[t + 1] = c;
      e[t + 2] = l;
      e[t + 3] = u;
    }
  }
  static multiplyQuaternionsFlat(e, t, n, r, i, a) {
    let o = n[r];
    let s = n[r + 1];
    let c = n[r + 2];
    let l = n[r + 3];
    let u = i[a];
    let d = i[a + 1];
    let f = i[a + 2];
    let p = i[a + 3];
    e[t] = o * p + l * u + s * f - c * d;
    e[t + 1] = s * p + l * d + c * u - o * f;
    e[t + 2] = c * p + l * f + o * d - s * u;
    e[t + 3] = l * p - o * u - s * d - c * f;
    return e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e;
    this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e;
    this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e;
    this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e;
    this._onChangeCallback();
  }
  set(e, t, n, r) {
    this._x = e;
    this._y = t;
    this._z = n;
    this._w = r;
    this._onChangeCallback();
    return this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    this._x = e.x;
    this._y = e.y;
    this._z = e.z;
    this._w = e.w;
    this._onChangeCallback();
    return this;
  }
  setFromEuler(e, t = true) {
    let n = e._x;
    let r = e._y;
    let i = e._z;
    let a = e._order;
    let o = Math.cos;
    let s = Math.sin;
    let c = o(n / 2);
    let l = o(r / 2);
    let u = o(i / 2);
    let d = s(n / 2);
    let f = s(r / 2);
    let p = s(i / 2);
    switch (a) {
      case `XYZ`:
        this._x = d * l * u + c * f * p;
        this._y = c * f * u - d * l * p;
        this._z = c * l * p + d * f * u;
        this._w = c * l * u - d * f * p;
        break;
      case `YXZ`:
        this._x = d * l * u + c * f * p;
        this._y = c * f * u - d * l * p;
        this._z = c * l * p - d * f * u;
        this._w = c * l * u + d * f * p;
        break;
      case `ZXY`:
        this._x = d * l * u - c * f * p;
        this._y = c * f * u + d * l * p;
        this._z = c * l * p + d * f * u;
        this._w = c * l * u - d * f * p;
        break;
      case `ZYX`:
        this._x = d * l * u - c * f * p;
        this._y = c * f * u + d * l * p;
        this._z = c * l * p - d * f * u;
        this._w = c * l * u + d * f * p;
        break;
      case `YZX`:
        this._x = d * l * u + c * f * p;
        this._y = c * f * u + d * l * p;
        this._z = c * l * p - d * f * u;
        this._w = c * l * u - d * f * p;
        break;
      case `XZY`:
        this._x = d * l * u - c * f * p;
        this._y = c * f * u - d * l * p;
        this._z = c * l * p + d * f * u;
        this._w = c * l * u + d * f * p;
        break;
      default:
        console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: ${a}`);
    }
    if (t === true) {
      this._onChangeCallback();
    }
    return this;
  }
  setFromAxisAngle(e, t) {
    let n = t / 2;
    let r = Math.sin(n);
    this._x = e.x * r;
    this._y = e.y * r;
    this._z = e.z * r;
    this._w = Math.cos(n);
    this._onChangeCallback();
    return this;
  }
  setFromRotationMatrix(e) {
    let t = e.elements;
    let n = t[0];
    let r = t[4];
    let i = t[8];
    let a = t[1];
    let o = t[5];
    let s = t[9];
    let c = t[2];
    let l = t[6];
    let u = t[10];
    let d = n + o + u;
    if (d > 0) {
      let e = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / e;
      this._x = (l - s) * e;
      this._y = (i - c) * e;
      this._z = (a - r) * e;
    } else if (n > o && n > u) {
      let e = Math.sqrt(1 + n - o - u) * 2;
      this._w = (l - s) / e;
      this._x = e * 0.25;
      this._y = (r + a) / e;
      this._z = (i + c) / e;
    } else if (o > u) {
      let e = Math.sqrt(1 + o - n - u) * 2;
      this._w = (i - c) / e;
      this._x = (r + a) / e;
      this._y = e * 0.25;
      this._z = (s + l) / e;
    } else {
      let e = Math.sqrt(1 + u - n - o) * 2;
      this._w = (a - r) / e;
      this._x = (i + c) / e;
      this._y = (s + l) / e;
      this._z = e * 0.25;
    }
    this._onChangeCallback();
    return this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    if (n < 2.220446049250313e-16) {
      n = 0;
      if (Math.abs(e.x) > Math.abs(e.z)) {
        this._x = -e.y;
        this._y = e.x;
        this._z = 0;
        this._w = n;
      } else {
        this._x = 0;
        this._y = -e.z;
        this._z = e.y;
        this._w = n;
      }
    } else {
      this._x = e.y * t.z - e.z * t.y;
      this._y = e.z * t.x - e.x * t.z;
      this._z = e.x * t.y - e.y * t.x;
      this._w = n;
    }
    return this.normalize();
  }
  angleTo(e) {
    return Math.acos(Math.abs(Ge(this.dot(e), -1, 1))) * 2;
  }
  rotateTowards(e, t) {
    let n = this.angleTo(e);
    if (n === 0) {
      return this;
    }
    let r = Math.min(1, t / n);
    this.slerp(e, r);
    return this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    this._x *= -1;
    this._y *= -1;
    this._z *= -1;
    this._onChangeCallback();
    return this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    if (e === 0) {
      this._x = 0;
      this._y = 0;
      this._z = 0;
      this._w = 1;
    } else {
      e = 1 / e;
      this._x *= e;
      this._y *= e;
      this._z *= e;
      this._w *= e;
    }
    this._onChangeCallback();
    return this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    let n = e._x;
    let r = e._y;
    let i = e._z;
    let a = e._w;
    let o = t._x;
    let s = t._y;
    let c = t._z;
    let l = t._w;
    this._x = n * l + a * o + r * c - i * s;
    this._y = r * l + a * s + i * o - n * c;
    this._z = i * l + a * c + n * s - r * o;
    this._w = a * l - n * o - r * s - i * c;
    this._onChangeCallback();
    return this;
  }
  slerp(e, t) {
    if (t === 0) {
      return this;
    }
    if (t === 1) {
      return this.copy(e);
    }
    let n = this._x;
    let r = this._y;
    let i = this._z;
    let a = this._w;
    let o = a * e._w + n * e._x + r * e._y + i * e._z;
    if (o < 0) {
      this._w = -e._w;
      this._x = -e._x;
      this._y = -e._y;
      this._z = -e._z;
      o = -o;
    } else {
      this.copy(e);
    }
    if (o >= 1) {
      this._w = a;
      this._x = n;
      this._y = r;
      this._z = i;
      return this;
    }
    let s = 1 - o * o;
    if (s <= 2.220446049250313e-16) {
      let e = 1 - t;
      this._w = e * a + t * this._w;
      this._x = e * n + t * this._x;
      this._y = e * r + t * this._y;
      this._z = e * i + t * this._z;
      this.normalize();
      return this;
    }
    let c = Math.sqrt(s);
    let l = Math.atan2(c, o);
    let u = Math.sin((1 - t) * l) / c;
    let d = Math.sin(t * l) / c;
    this._w = a * u + this._w * d;
    this._x = n * u + this._x * d;
    this._y = r * u + this._y * d;
    this._z = i * u + this._z * d;
    this._onChangeCallback();
    return this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    let e = Math.PI * 2 * Math.random();
    let t = Math.PI * 2 * Math.random();
    let n = Math.random();
    let r = Math.sqrt(1 - n);
    let i = Math.sqrt(n);
    return this.set(r * Math.sin(e), r * Math.cos(e), i * Math.sin(t), i * Math.cos(t));
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    this._x = e[t];
    this._y = e[t + 1];
    this._z = e[t + 2];
    this._w = e[t + 3];
    this._onChangeCallback();
    return this;
  }
  toArray(e = [], t = 0) {
    e[t] = this._x;
    e[t + 1] = this._y;
    e[t + 2] = this._z;
    e[t + 3] = this._w;
    return e;
  }
  fromBufferAttribute(e, t) {
    this._x = e.getX(t);
    this._y = e.getY(t);
    this._z = e.getZ(t);
    this._w = e.getW(t);
    this._onChangeCallback();
    return this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    this._onChangeCallback = e;
    return this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x;
    yield this._y;
    yield this._z;
    yield this._w;
  }
};
var G = class e {
  constructor(t = 0, n = 0, r = 0) {
    e.prototype.isVector3 = true;
    this.x = t;
    this.y = n;
    this.z = r;
  }
  set(e, t, n = this.z) {
    this.x = e;
    this.y = t;
    this.z = n;
    return this;
  }
  setScalar(e) {
    this.x = e;
    this.y = e;
    this.z = e;
    return this;
  }
  setX(e) {
    this.x = e;
    return this;
  }
  setY(e) {
    this.y = e;
    return this;
  }
  setZ(e) {
    this.z = e;
    return this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw Error(`index is out of range: ${e}`);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw Error(`index is out of range: ${e}`);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    this.x = e.x;
    this.y = e.y;
    this.z = e.z;
    return this;
  }
  add(e) {
    this.x += e.x;
    this.y += e.y;
    this.z += e.z;
    return this;
  }
  addScalar(e) {
    this.x += e;
    this.y += e;
    this.z += e;
    return this;
  }
  addVectors(e, t) {
    this.x = e.x + t.x;
    this.y = e.y + t.y;
    this.z = e.z + t.z;
    return this;
  }
  addScaledVector(e, t) {
    this.x += e.x * t;
    this.y += e.y * t;
    this.z += e.z * t;
    return this;
  }
  sub(e) {
    this.x -= e.x;
    this.y -= e.y;
    this.z -= e.z;
    return this;
  }
  subScalar(e) {
    this.x -= e;
    this.y -= e;
    this.z -= e;
    return this;
  }
  subVectors(e, t) {
    this.x = e.x - t.x;
    this.y = e.y - t.y;
    this.z = e.z - t.z;
    return this;
  }
  multiply(e) {
    this.x *= e.x;
    this.y *= e.y;
    this.z *= e.z;
    return this;
  }
  multiplyScalar(e) {
    this.x *= e;
    this.y *= e;
    this.z *= e;
    return this;
  }
  multiplyVectors(e, t) {
    this.x = e.x * t.x;
    this.y = e.y * t.y;
    this.z = e.z * t.z;
    return this;
  }
  applyEuler(e) {
    return this.applyQuaternion(Ht.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Ht.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    let t = this.x;
    let n = this.y;
    let r = this.z;
    let i = e.elements;
    this.x = i[0] * t + i[3] * n + i[6] * r;
    this.y = i[1] * t + i[4] * n + i[7] * r;
    this.z = i[2] * t + i[5] * n + i[8] * r;
    return this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    let t = this.x;
    let n = this.y;
    let r = this.z;
    let i = e.elements;
    let a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
    this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a;
    this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a;
    this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a;
    return this;
  }
  applyQuaternion(e) {
    let t = this.x;
    let n = this.y;
    let r = this.z;
    let i = e.x;
    let a = e.y;
    let o = e.z;
    let s = e.w;
    let c = (a * r - o * n) * 2;
    let l = (o * t - i * r) * 2;
    let u = (i * n - a * t) * 2;
    this.x = t + s * c + a * u - o * l;
    this.y = n + s * l + o * c - i * u;
    this.z = r + s * u + i * l - a * c;
    return this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    let t = this.x;
    let n = this.y;
    let r = this.z;
    let i = e.elements;
    this.x = i[0] * t + i[4] * n + i[8] * r;
    this.y = i[1] * t + i[5] * n + i[9] * r;
    this.z = i[2] * t + i[6] * n + i[10] * r;
    return this.normalize();
  }
  divide(e) {
    this.x /= e.x;
    this.y /= e.y;
    this.z /= e.z;
    return this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    this.x = Math.min(this.x, e.x);
    this.y = Math.min(this.y, e.y);
    this.z = Math.min(this.z, e.z);
    return this;
  }
  max(e) {
    this.x = Math.max(this.x, e.x);
    this.y = Math.max(this.y, e.y);
    this.z = Math.max(this.z, e.z);
    return this;
  }
  clamp(e, t) {
    this.x = Math.max(e.x, Math.min(t.x, this.x));
    this.y = Math.max(e.y, Math.min(t.y, this.y));
    this.z = Math.max(e.z, Math.min(t.z, this.z));
    return this;
  }
  clampScalar(e, t) {
    this.x = Math.max(e, Math.min(t, this.x));
    this.y = Math.max(e, Math.min(t, this.y));
    this.z = Math.max(e, Math.min(t, this.z));
    return this;
  }
  clampLength(e, t) {
    let n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    return this;
  }
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    return this;
  }
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    return this;
  }
  roundToZero() {
    this.x = Math.trunc(this.x);
    this.y = Math.trunc(this.y);
    this.z = Math.trunc(this.z);
    return this;
  }
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    this.x += (e.x - this.x) * t;
    this.y += (e.y - this.y) * t;
    this.z += (e.z - this.z) * t;
    return this;
  }
  lerpVectors(e, t, n) {
    this.x = e.x + (t.x - e.x) * n;
    this.y = e.y + (t.y - e.y) * n;
    this.z = e.z + (t.z - e.z) * n;
    return this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    let n = e.x;
    let r = e.y;
    let i = e.z;
    let a = t.x;
    let o = t.y;
    let s = t.z;
    this.x = r * s - i * o;
    this.y = i * a - n * s;
    this.z = n * o - r * a;
    return this;
  }
  projectOnVector(e) {
    let t = e.lengthSq();
    if (t === 0) {
      return this.set(0, 0, 0);
    }
    let n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    Vt.copy(this).projectOnVector(e);
    return this.sub(Vt);
  }
  reflect(e) {
    return this.sub(Vt.copy(e).multiplyScalar(this.dot(e) * 2));
  }
  angleTo(e) {
    let t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) {
      return Math.PI / 2;
    }
    let n = this.dot(e) / t;
    return Math.acos(Ge(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    let t = this.x - e.x;
    let n = this.y - e.y;
    let r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    let r = Math.sin(t) * e;
    this.x = r * Math.sin(n);
    this.y = Math.cos(t) * e;
    this.z = r * Math.cos(n);
    return this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    this.x = e * Math.sin(t);
    this.y = n;
    this.z = e * Math.cos(t);
    return this;
  }
  setFromMatrixPosition(e) {
    let t = e.elements;
    this.x = t[12];
    this.y = t[13];
    this.z = t[14];
    return this;
  }
  setFromMatrixScale(e) {
    let t = this.setFromMatrixColumn(e, 0).length();
    let n = this.setFromMatrixColumn(e, 1).length();
    let r = this.setFromMatrixColumn(e, 2).length();
    this.x = t;
    this.y = n;
    this.z = r;
    return this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    this.x = e._x;
    this.y = e._y;
    this.z = e._z;
    return this;
  }
  setFromColor(e) {
    this.x = e.r;
    this.y = e.g;
    this.z = e.b;
    return this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    this.x = e[t];
    this.y = e[t + 1];
    this.z = e[t + 2];
    return this;
  }
  toArray(e = [], t = 0) {
    e[t] = this.x;
    e[t + 1] = this.y;
    e[t + 2] = this.z;
    return e;
  }
  fromBufferAttribute(e, t) {
    this.x = e.getX(t);
    this.y = e.getY(t);
    this.z = e.getZ(t);
    return this;
  }
  random() {
    this.x = Math.random();
    this.y = Math.random();
    this.z = Math.random();
    return this;
  }
  randomDirection() {
    let e = Math.random() * Math.PI * 2;
    let t = Math.random() * 2 - 1;
    let n = Math.sqrt(1 - t * t);
    this.x = n * Math.cos(e);
    this.y = t;
    this.z = n * Math.sin(e);
    return this;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
    yield this.z;
  }
};
var Vt = new G();
var Ht = new Bt();
var Ut = class {
  constructor(e = new G(Infinity, Infinity, Infinity), t = new G(-Infinity, -Infinity, -Infinity)) {
    this.isBox3 = true;
    this.min = e;
    this.max = t;
  }
  set(e, t) {
    this.min.copy(e);
    this.max.copy(t);
    return this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3) {
      this.expandByPoint(Gt.fromArray(e, t));
    }
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++) {
      this.expandByPoint(Gt.fromBufferAttribute(e, t));
    }
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) {
      this.expandByPoint(e[t]);
    }
    return this;
  }
  setFromCenterAndSize(e, t) {
    let n = Gt.copy(t).multiplyScalar(0.5);
    this.min.copy(e).sub(n);
    this.max.copy(e).add(n);
    return this;
  }
  setFromObject(e, t = false) {
    this.makeEmpty();
    return this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.min.copy(e.min);
    this.max.copy(e.max);
    return this;
  }
  makeEmpty() {
    this.min.x = this.min.y = this.min.z = Infinity;
    this.max.x = this.max.y = this.max.z = -Infinity;
    return this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    if (this.isEmpty()) {
      return e.set(0, 0, 0);
    } else {
      return e.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
  }
  getSize(e) {
    if (this.isEmpty()) {
      return e.set(0, 0, 0);
    } else {
      return e.subVectors(this.max, this.min);
    }
  }
  expandByPoint(e) {
    this.min.min(e);
    this.max.max(e);
    return this;
  }
  expandByVector(e) {
    this.min.sub(e);
    this.max.add(e);
    return this;
  }
  expandByScalar(e) {
    this.min.addScalar(-e);
    this.max.addScalar(e);
    return this;
  }
  expandByObject(e, t = false) {
    e.updateWorldMatrix(false, false);
    let n = e.geometry;
    if (n !== undefined) {
      let r = n.getAttribute(`position`);
      if (t === true && r !== undefined && e.isInstancedMesh !== true) {
        for (let t = 0, n = r.count; t < n; t++) {
          if (e.isMesh === true) {
            e.getVertexPosition(t, Gt);
          } else {
            Gt.fromBufferAttribute(r, t);
          }
          Gt.applyMatrix4(e.matrixWorld);
          this.expandByPoint(Gt);
        }
      } else {
        if (e.boundingBox === undefined) {
          if (n.boundingBox === null) {
            n.computeBoundingBox();
          }
          Kt.copy(n.boundingBox);
        } else {
          if (e.boundingBox === null) {
            e.computeBoundingBox();
          }
          Kt.copy(e.boundingBox);
        }
        Kt.applyMatrix4(e.matrixWorld);
        this.union(Kt);
      }
    }
    let r = e.children;
    for (let e = 0, n = r.length; e < n; e++) {
      this.expandByObject(r[e], t);
    }
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    this.clampPoint(e.center, Gt);
    return Gt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t;
    let n;
    if (e.normal.x > 0) {
      t = e.normal.x * this.min.x;
      n = e.normal.x * this.max.x;
    } else {
      t = e.normal.x * this.max.x;
      n = e.normal.x * this.min.x;
    }
    if (e.normal.y > 0) {
      t += e.normal.y * this.min.y;
      n += e.normal.y * this.max.y;
    } else {
      t += e.normal.y * this.max.y;
      n += e.normal.y * this.min.y;
    }
    if (e.normal.z > 0) {
      t += e.normal.z * this.min.z;
      n += e.normal.z * this.max.z;
    } else {
      t += e.normal.z * this.max.z;
      n += e.normal.z * this.min.z;
    }
    return t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) {
      return false;
    }
    this.getCenter($t);
    en.subVectors(this.max, $t);
    qt.subVectors(e.a, $t);
    Jt.subVectors(e.b, $t);
    Yt.subVectors(e.c, $t);
    Xt.subVectors(Jt, qt);
    Zt.subVectors(Yt, Jt);
    Qt.subVectors(qt, Yt);
    let t = [0, -Xt.z, Xt.y, 0, -Zt.z, Zt.y, 0, -Qt.z, Qt.y, Xt.z, 0, -Xt.x, Zt.z, 0, -Zt.x, Qt.z, 0, -Qt.x, -Xt.y, Xt.x, 0, -Zt.y, Zt.x, 0, -Qt.y, Qt.x, 0];
    if (!rn(t, qt, Jt, Yt, en) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !rn(t, qt, Jt, Yt, en))) {
      return false;
    } else {
      tn.crossVectors(Xt, Zt);
      t = [tn.x, tn.y, tn.z];
      return rn(t, qt, Jt, Yt, en);
    }
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Gt).distanceTo(e);
  }
  getBoundingSphere(e) {
    if (this.isEmpty()) {
      e.makeEmpty();
    } else {
      this.getCenter(e.center);
      e.radius = this.getSize(Gt).length() * 0.5;
    }
    return e;
  }
  intersect(e) {
    this.min.max(e.min);
    this.max.min(e.max);
    if (this.isEmpty()) {
      this.makeEmpty();
    }
    return this;
  }
  union(e) {
    this.min.min(e.min);
    this.max.max(e.max);
    return this;
  }
  applyMatrix4(e) {
    if (!this.isEmpty()) {
      Wt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e);
      Wt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e);
      Wt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e);
      Wt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e);
      Wt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e);
      Wt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e);
      Wt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e);
      Wt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e);
      this.setFromPoints(Wt);
    }
    return this;
  }
  translate(e) {
    this.min.add(e);
    this.max.add(e);
    return this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
};
var Wt = [new G(), new G(), new G(), new G(), new G(), new G(), new G(), new G()];
var Gt = new G();
var Kt = new Ut();
var qt = new G();
var Jt = new G();
var Yt = new G();
var Xt = new G();
var Zt = new G();
var Qt = new G();
var $t = new G();
var en = new G();
var tn = new G();
var nn = new G();
function rn(e, t, n, r, i) {
  for (let a = 0, o = e.length - 3; a <= o; a += 3) {
    nn.fromArray(e, a);
    let o = i.x * Math.abs(nn.x) + i.y * Math.abs(nn.y) + i.z * Math.abs(nn.z);
    let s = t.dot(nn);
    let c = n.dot(nn);
    let l = r.dot(nn);
    if (Math.max(-Math.max(s, c, l), Math.min(s, c, l)) > o) {
      return false;
    }
  }
  return true;
}
var an = new Ut();
var on = new G();
var sn = new G();
var cn = class {
  constructor(e = new G(), t = -1) {
    this.isSphere = true;
    this.center = e;
    this.radius = t;
  }
  set(e, t) {
    this.center.copy(e);
    this.radius = t;
    return this;
  }
  setFromPoints(e, t) {
    let n = this.center;
    if (t === undefined) {
      an.setFromPoints(e).getCenter(n);
    } else {
      n.copy(t);
    }
    let r = 0;
    for (let t = 0, i = e.length; t < i; t++) {
      r = Math.max(r, n.distanceToSquared(e[t]));
    }
    this.radius = Math.sqrt(r);
    return this;
  }
  copy(e) {
    this.center.copy(e.center);
    this.radius = e.radius;
    return this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    this.center.set(0, 0, 0);
    this.radius = -1;
    return this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    let t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    let n = this.center.distanceToSquared(e);
    t.copy(e);
    if (n > this.radius * this.radius) {
      t.sub(this.center).normalize();
      t.multiplyScalar(this.radius).add(this.center);
    }
    return t;
  }
  getBoundingBox(e) {
    if (this.isEmpty()) {
      e.makeEmpty();
      return e;
    } else {
      e.set(this.center, this.center);
      e.expandByScalar(this.radius);
      return e;
    }
  }
  applyMatrix4(e) {
    this.center.applyMatrix4(e);
    this.radius *= e.getMaxScaleOnAxis();
    return this;
  }
  translate(e) {
    this.center.add(e);
    return this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) {
      this.center.copy(e);
      this.radius = 0;
      return this;
    }
    on.subVectors(e, this.center);
    let t = on.lengthSq();
    if (t > this.radius * this.radius) {
      let e = Math.sqrt(t);
      let n = (e - this.radius) * 0.5;
      this.center.addScaledVector(on, n / e);
      this.radius += n;
    }
    return this;
  }
  union(e) {
    if (e.isEmpty()) {
      return this;
    } else if (this.isEmpty()) {
      this.copy(e);
      return this;
    } else {
      if (this.center.equals(e.center) === true) {
        this.radius = Math.max(this.radius, e.radius);
      } else {
        sn.subVectors(e.center, this.center).setLength(e.radius);
        this.expandByPoint(on.copy(e.center).add(sn));
        this.expandByPoint(on.copy(e.center).sub(sn));
      }
      return this;
    }
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
var ln = new G();
var un = new G();
var dn = new G();
var fn = new G();
var pn = new G();
var mn = new G();
var hn = new G();
var gn = class {
  constructor(e = new G(), t = new G(0, 0, -1)) {
    this.origin = e;
    this.direction = t;
  }
  set(e, t) {
    this.origin.copy(e);
    this.direction.copy(t);
    return this;
  }
  copy(e) {
    this.origin.copy(e.origin);
    this.direction.copy(e.direction);
    return this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    this.direction.copy(e).sub(this.origin).normalize();
    return this;
  }
  recast(e) {
    this.origin.copy(this.at(e, ln));
    return this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    let n = t.dot(this.direction);
    if (n < 0) {
      return t.copy(this.origin);
    } else {
      return t.copy(this.origin).addScaledVector(this.direction, n);
    }
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    let t = ln.subVectors(e, this.origin).dot(this.direction);
    if (t < 0) {
      return this.origin.distanceToSquared(e);
    } else {
      ln.copy(this.origin).addScaledVector(this.direction, t);
      return ln.distanceToSquared(e);
    }
  }
  distanceSqToSegment(e, t, n, r) {
    un.copy(e).add(t).multiplyScalar(0.5);
    dn.copy(t).sub(e).normalize();
    fn.copy(this.origin).sub(un);
    let i = e.distanceTo(t) * 0.5;
    let a = -this.direction.dot(dn);
    let o = fn.dot(this.direction);
    let s = -fn.dot(dn);
    let c = fn.lengthSq();
    let l = Math.abs(1 - a * a);
    let u;
    let d;
    let f;
    let p;
    if (l > 0) {
      u = a * s - o;
      d = a * o - s;
      p = i * l;
      if (u >= 0) {
        if (d >= -p) {
          if (d <= p) {
            let e = 1 / l;
            u *= e;
            d *= e;
            f = u * (u + a * d + o * 2) + d * (a * u + d + s * 2) + c;
          } else {
            d = i;
            u = Math.max(0, -(a * d + o));
            f = -u * u + d * (d + s * 2) + c;
          }
        } else {
          d = -i;
          u = Math.max(0, -(a * d + o));
          f = -u * u + d * (d + s * 2) + c;
        }
      } else if (d <= -p) {
        u = Math.max(0, -(-a * i + o));
        d = u > 0 ? -i : Math.min(Math.max(-i, -s), i);
        f = -u * u + d * (d + s * 2) + c;
      } else if (d <= p) {
        u = 0;
        d = Math.min(Math.max(-i, -s), i);
        f = d * (d + s * 2) + c;
      } else {
        u = Math.max(0, -(a * i + o));
        d = u > 0 ? i : Math.min(Math.max(-i, -s), i);
        f = -u * u + d * (d + s * 2) + c;
      }
    } else {
      d = a > 0 ? -i : i;
      u = Math.max(0, -(a * d + o));
      f = -u * u + d * (d + s * 2) + c;
    }
    if (n) {
      n.copy(this.origin).addScaledVector(this.direction, u);
    }
    if (r) {
      r.copy(un).addScaledVector(dn, d);
    }
    return f;
  }
  intersectSphere(e, t) {
    ln.subVectors(e.center, this.origin);
    let n = ln.dot(this.direction);
    let r = ln.dot(ln) - n * n;
    let i = e.radius * e.radius;
    if (r > i) {
      return null;
    }
    let a = Math.sqrt(i - r);
    let o = n - a;
    let s = n + a;
    if (s < 0) {
      return null;
    } else if (o < 0) {
      return this.at(s, t);
    } else {
      return this.at(o, t);
    }
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    let t = e.normal.dot(this.direction);
    if (t === 0) {
      if (e.distanceToPoint(this.origin) === 0) {
        return 0;
      } else {
        return null;
      }
    }
    let n = -(this.origin.dot(e.normal) + e.constant) / t;
    if (n >= 0) {
      return n;
    } else {
      return null;
    }
  }
  intersectPlane(e, t) {
    let n = this.distanceToPlane(e);
    if (n === null) {
      return null;
    } else {
      return this.at(n, t);
    }
  }
  intersectsPlane(e) {
    let t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n;
    let r;
    let i;
    let a;
    let o;
    let s;
    let c = 1 / this.direction.x;
    let l = 1 / this.direction.y;
    let u = 1 / this.direction.z;
    let d = this.origin;
    if (c >= 0) {
      n = (e.min.x - d.x) * c;
      r = (e.max.x - d.x) * c;
    } else {
      n = (e.max.x - d.x) * c;
      r = (e.min.x - d.x) * c;
    }
    if (l >= 0) {
      i = (e.min.y - d.y) * l;
      a = (e.max.y - d.y) * l;
    } else {
      i = (e.max.y - d.y) * l;
      a = (e.min.y - d.y) * l;
    }
    if (n > a || i > r || ((i > n || isNaN(n)) && (n = i), (a < r || isNaN(r)) && (r = a), u >= 0 ? (o = (e.min.z - d.z) * u, s = (e.max.z - d.z) * u) : (o = (e.max.z - d.z) * u, s = (e.min.z - d.z) * u), n > s || o > r) || ((o > n || n !== n) && (n = o), (s < r || r !== r) && (r = s), r < 0)) {
      return null;
    } else {
      return this.at(n >= 0 ? n : r, t);
    }
  }
  intersectsBox(e) {
    return this.intersectBox(e, ln) !== null;
  }
  intersectTriangle(e, t, n, r, i) {
    pn.subVectors(t, e);
    mn.subVectors(n, e);
    hn.crossVectors(pn, mn);
    let a = this.direction.dot(hn);
    let o;
    if (a > 0) {
      if (r) {
        return null;
      }
      o = 1;
    } else if (a < 0) {
      o = -1;
      a = -a;
    } else {
      return null;
    }
    fn.subVectors(this.origin, e);
    let s = o * this.direction.dot(mn.crossVectors(fn, mn));
    if (s < 0) {
      return null;
    }
    let c = o * this.direction.dot(pn.cross(fn));
    if (c < 0 || s + c > a) {
      return null;
    }
    let l = -o * fn.dot(hn);
    if (l < 0) {
      return null;
    } else {
      return this.at(l / a, i);
    }
  }
  applyMatrix4(e) {
    this.origin.applyMatrix4(e);
    this.direction.transformDirection(e);
    return this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
var K = class e {
  constructor(t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g) {
    e.prototype.isMatrix4 = true;
    this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    if (t !== undefined) {
      this.set(t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g);
    }
  }
  set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
    let g = this.elements;
    g[0] = e;
    g[4] = t;
    g[8] = n;
    g[12] = r;
    g[1] = i;
    g[5] = a;
    g[9] = o;
    g[13] = s;
    g[2] = c;
    g[6] = l;
    g[10] = u;
    g[14] = d;
    g[3] = f;
    g[7] = p;
    g[11] = m;
    g[15] = h;
    return this;
  }
  identity() {
    this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this;
  }
  clone() {
    return new e().fromArray(this.elements);
  }
  copy(e) {
    let t = this.elements;
    let n = e.elements;
    t[0] = n[0];
    t[1] = n[1];
    t[2] = n[2];
    t[3] = n[3];
    t[4] = n[4];
    t[5] = n[5];
    t[6] = n[6];
    t[7] = n[7];
    t[8] = n[8];
    t[9] = n[9];
    t[10] = n[10];
    t[11] = n[11];
    t[12] = n[12];
    t[13] = n[13];
    t[14] = n[14];
    t[15] = n[15];
    return this;
  }
  copyPosition(e) {
    let t = this.elements;
    let n = e.elements;
    t[12] = n[12];
    t[13] = n[13];
    t[14] = n[14];
    return this;
  }
  setFromMatrix3(e) {
    let t = e.elements;
    this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1);
    return this;
  }
  extractBasis(e, t, n) {
    e.setFromMatrixColumn(this, 0);
    t.setFromMatrixColumn(this, 1);
    n.setFromMatrixColumn(this, 2);
    return this;
  }
  makeBasis(e, t, n) {
    this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1);
    return this;
  }
  extractRotation(e) {
    let t = this.elements;
    let n = e.elements;
    let r = 1 / _n.setFromMatrixColumn(e, 0).length();
    let i = 1 / _n.setFromMatrixColumn(e, 1).length();
    let a = 1 / _n.setFromMatrixColumn(e, 2).length();
    t[0] = n[0] * r;
    t[1] = n[1] * r;
    t[2] = n[2] * r;
    t[3] = 0;
    t[4] = n[4] * i;
    t[5] = n[5] * i;
    t[6] = n[6] * i;
    t[7] = 0;
    t[8] = n[8] * a;
    t[9] = n[9] * a;
    t[10] = n[10] * a;
    t[11] = 0;
    t[12] = 0;
    t[13] = 0;
    t[14] = 0;
    t[15] = 1;
    return this;
  }
  makeRotationFromEuler(e) {
    let t = this.elements;
    let n = e.x;
    let r = e.y;
    let i = e.z;
    let a = Math.cos(n);
    let o = Math.sin(n);
    let s = Math.cos(r);
    let c = Math.sin(r);
    let l = Math.cos(i);
    let u = Math.sin(i);
    if (e.order === `XYZ`) {
      let e = a * l;
      let n = a * u;
      let r = o * l;
      let i = o * u;
      t[0] = s * l;
      t[4] = -s * u;
      t[8] = c;
      t[1] = n + r * c;
      t[5] = e - i * c;
      t[9] = -o * s;
      t[2] = i - e * c;
      t[6] = r + n * c;
      t[10] = a * s;
    } else if (e.order === `YXZ`) {
      let e = s * l;
      let n = s * u;
      let r = c * l;
      let i = c * u;
      t[0] = e + i * o;
      t[4] = r * o - n;
      t[8] = a * c;
      t[1] = a * u;
      t[5] = a * l;
      t[9] = -o;
      t[2] = n * o - r;
      t[6] = i + e * o;
      t[10] = a * s;
    } else if (e.order === `ZXY`) {
      let e = s * l;
      let n = s * u;
      let r = c * l;
      let i = c * u;
      t[0] = e - i * o;
      t[4] = -a * u;
      t[8] = r + n * o;
      t[1] = n + r * o;
      t[5] = a * l;
      t[9] = i - e * o;
      t[2] = -a * c;
      t[6] = o;
      t[10] = a * s;
    } else if (e.order === `ZYX`) {
      let e = a * l;
      let n = a * u;
      let r = o * l;
      let i = o * u;
      t[0] = s * l;
      t[4] = r * c - n;
      t[8] = e * c + i;
      t[1] = s * u;
      t[5] = i * c + e;
      t[9] = n * c - r;
      t[2] = -c;
      t[6] = o * s;
      t[10] = a * s;
    } else if (e.order === `YZX`) {
      let e = a * s;
      let n = a * c;
      let r = o * s;
      let i = o * c;
      t[0] = s * l;
      t[4] = i - e * u;
      t[8] = r * u + n;
      t[1] = u;
      t[5] = a * l;
      t[9] = -o * l;
      t[2] = -c * l;
      t[6] = n * u + r;
      t[10] = e - i * u;
    } else if (e.order === `XZY`) {
      let e = a * s;
      let n = a * c;
      let r = o * s;
      let i = o * c;
      t[0] = s * l;
      t[4] = -u;
      t[8] = c * l;
      t[1] = e * u + i;
      t[5] = a * l;
      t[9] = n * u - r;
      t[2] = r * u - n;
      t[6] = o * l;
      t[10] = i * u + e;
    }
    t[3] = 0;
    t[7] = 0;
    t[11] = 0;
    t[12] = 0;
    t[13] = 0;
    t[14] = 0;
    t[15] = 1;
    return this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(yn, e, bn);
  }
  lookAt(e, t, n) {
    let r = this.elements;
    Cn.subVectors(e, t);
    if (Cn.lengthSq() === 0) {
      Cn.z = 1;
    }
    Cn.normalize();
    xn.crossVectors(n, Cn);
    if (xn.lengthSq() === 0) {
      if (Math.abs(n.z) === 1) {
        Cn.x += 0.0001;
      } else {
        Cn.z += 0.0001;
      }
      Cn.normalize();
      xn.crossVectors(n, Cn);
    }
    xn.normalize();
    Sn.crossVectors(Cn, xn);
    r[0] = xn.x;
    r[4] = Sn.x;
    r[8] = Cn.x;
    r[1] = xn.y;
    r[5] = Sn.y;
    r[9] = Cn.y;
    r[2] = xn.z;
    r[6] = Sn.z;
    r[10] = Cn.z;
    return this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    let n = e.elements;
    let r = t.elements;
    let i = this.elements;
    let a = n[0];
    let o = n[4];
    let s = n[8];
    let c = n[12];
    let l = n[1];
    let u = n[5];
    let d = n[9];
    let f = n[13];
    let p = n[2];
    let m = n[6];
    let h = n[10];
    let g = n[14];
    let _ = n[3];
    let v = n[7];
    let y = n[11];
    let b = n[15];
    let x = r[0];
    let S = r[4];
    let C = r[8];
    let w = r[12];
    let T = r[1];
    let E = r[5];
    let D = r[9];
    let O = r[13];
    let k = r[2];
    let A = r[6];
    let j = r[10];
    let ee = r[14];
    let te = r[3];
    let M = r[7];
    let N = r[11];
    let P = r[15];
    i[0] = a * x + o * T + s * k + c * te;
    i[4] = a * S + o * E + s * A + c * M;
    i[8] = a * C + o * D + s * j + c * N;
    i[12] = a * w + o * O + s * ee + c * P;
    i[1] = l * x + u * T + d * k + f * te;
    i[5] = l * S + u * E + d * A + f * M;
    i[9] = l * C + u * D + d * j + f * N;
    i[13] = l * w + u * O + d * ee + f * P;
    i[2] = p * x + m * T + h * k + g * te;
    i[6] = p * S + m * E + h * A + g * M;
    i[10] = p * C + m * D + h * j + g * N;
    i[14] = p * w + m * O + h * ee + g * P;
    i[3] = _ * x + v * T + y * k + b * te;
    i[7] = _ * S + v * E + y * A + b * M;
    i[11] = _ * C + v * D + y * j + b * N;
    i[15] = _ * w + v * O + y * ee + b * P;
    return this;
  }
  multiplyScalar(e) {
    let t = this.elements;
    t[0] *= e;
    t[4] *= e;
    t[8] *= e;
    t[12] *= e;
    t[1] *= e;
    t[5] *= e;
    t[9] *= e;
    t[13] *= e;
    t[2] *= e;
    t[6] *= e;
    t[10] *= e;
    t[14] *= e;
    t[3] *= e;
    t[7] *= e;
    t[11] *= e;
    t[15] *= e;
    return this;
  }
  determinant() {
    let e = this.elements;
    let t = e[0];
    let n = e[4];
    let r = e[8];
    let i = e[12];
    let a = e[1];
    let o = e[5];
    let s = e[9];
    let c = e[13];
    let l = e[2];
    let u = e[6];
    let d = e[10];
    let f = e[14];
    let p = e[3];
    let m = e[7];
    let h = e[11];
    let g = e[15];
    return p * (+i * s * u - r * c * u - i * o * d + n * c * d + r * o * f - n * s * f) + m * (+t * s * f - t * c * d + i * a * d - r * a * f + r * c * l - i * s * l) + h * (+t * c * u - t * o * f - i * a * u + n * a * f + i * o * l - n * c * l) + g * (-r * o * l - t * s * u + t * o * d + r * a * u - n * a * d + n * s * l);
  }
  transpose() {
    let e = this.elements;
    let t;
    t = e[1];
    e[1] = e[4];
    e[4] = t;
    t = e[2];
    e[2] = e[8];
    e[8] = t;
    t = e[6];
    e[6] = e[9];
    e[9] = t;
    t = e[3];
    e[3] = e[12];
    e[12] = t;
    t = e[7];
    e[7] = e[13];
    e[13] = t;
    t = e[11];
    e[11] = e[14];
    e[14] = t;
    return this;
  }
  setPosition(e, t, n) {
    let r = this.elements;
    if (e.isVector3) {
      r[12] = e.x;
      r[13] = e.y;
      r[14] = e.z;
    } else {
      r[12] = e;
      r[13] = t;
      r[14] = n;
    }
    return this;
  }
  invert() {
    let e = this.elements;
    let t = e[0];
    let n = e[1];
    let r = e[2];
    let i = e[3];
    let a = e[4];
    let o = e[5];
    let s = e[6];
    let c = e[7];
    let l = e[8];
    let u = e[9];
    let d = e[10];
    let f = e[11];
    let p = e[12];
    let m = e[13];
    let h = e[14];
    let g = e[15];
    let _ = u * h * c - m * d * c + m * s * f - o * h * f - u * s * g + o * d * g;
    let v = p * d * c - l * h * c - p * s * f + a * h * f + l * s * g - a * d * g;
    let y = l * m * c - p * u * c + p * o * f - a * m * f - l * o * g + a * u * g;
    let b = p * u * s - l * m * s - p * o * d + a * m * d + l * o * h - a * u * h;
    let x = t * _ + n * v + r * y + i * b;
    if (x === 0) {
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
    let S = 1 / x;
    e[0] = _ * S;
    e[1] = (m * d * i - u * h * i - m * r * f + n * h * f + u * r * g - n * d * g) * S;
    e[2] = (o * h * i - m * s * i + m * r * c - n * h * c - o * r * g + n * s * g) * S;
    e[3] = (u * s * i - o * d * i - u * r * c + n * d * c + o * r * f - n * s * f) * S;
    e[4] = v * S;
    e[5] = (l * h * i - p * d * i + p * r * f - t * h * f - l * r * g + t * d * g) * S;
    e[6] = (p * s * i - a * h * i - p * r * c + t * h * c + a * r * g - t * s * g) * S;
    e[7] = (a * d * i - l * s * i + l * r * c - t * d * c - a * r * f + t * s * f) * S;
    e[8] = y * S;
    e[9] = (p * u * i - l * m * i - p * n * f + t * m * f + l * n * g - t * u * g) * S;
    e[10] = (a * m * i - p * o * i + p * n * c - t * m * c - a * n * g + t * o * g) * S;
    e[11] = (l * o * i - a * u * i - l * n * c + t * u * c + a * n * f - t * o * f) * S;
    e[12] = b * S;
    e[13] = (l * m * r - p * u * r + p * n * d - t * m * d - l * n * h + t * u * h) * S;
    e[14] = (p * o * r - a * m * r - p * n * s + t * m * s + a * n * h - t * o * h) * S;
    e[15] = (a * u * r - l * o * r + l * n * s - t * u * s - a * n * d + t * o * d) * S;
    return this;
  }
  scale(e) {
    let t = this.elements;
    let n = e.x;
    let r = e.y;
    let i = e.z;
    t[0] *= n;
    t[4] *= r;
    t[8] *= i;
    t[1] *= n;
    t[5] *= r;
    t[9] *= i;
    t[2] *= n;
    t[6] *= r;
    t[10] *= i;
    t[3] *= n;
    t[7] *= r;
    t[11] *= i;
    return this;
  }
  getMaxScaleOnAxis() {
    let e = this.elements;
    let t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2];
    let n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6];
    let r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  makeTranslation(e, t, n) {
    if (e.isVector3) {
      this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1);
    } else {
      this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1);
    }
    return this;
  }
  makeRotationX(e) {
    let t = Math.cos(e);
    let n = Math.sin(e);
    this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1);
    return this;
  }
  makeRotationY(e) {
    let t = Math.cos(e);
    let n = Math.sin(e);
    this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1);
    return this;
  }
  makeRotationZ(e) {
    let t = Math.cos(e);
    let n = Math.sin(e);
    this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this;
  }
  makeRotationAxis(e, t) {
    let n = Math.cos(t);
    let r = Math.sin(t);
    let i = 1 - n;
    let a = e.x;
    let o = e.y;
    let s = e.z;
    let c = i * a;
    let l = i * o;
    this.set(c * a + n, c * o - r * s, c * s + r * o, 0, c * o + r * s, l * o + n, l * s - r * a, 0, c * s - r * o, l * s + r * a, i * s * s + n, 0, 0, 0, 0, 1);
    return this;
  }
  makeScale(e, t, n) {
    this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1);
    return this;
  }
  makeShear(e, t, n, r, i, a) {
    this.set(1, n, i, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1);
    return this;
  }
  compose(e, t, n) {
    let r = this.elements;
    let i = t._x;
    let a = t._y;
    let o = t._z;
    let s = t._w;
    let c = i + i;
    let l = a + a;
    let u = o + o;
    let d = i * c;
    let f = i * l;
    let p = i * u;
    let m = a * l;
    let h = a * u;
    let g = o * u;
    let _ = s * c;
    let v = s * l;
    let y = s * u;
    let b = n.x;
    let x = n.y;
    let S = n.z;
    r[0] = (1 - (m + g)) * b;
    r[1] = (f + y) * b;
    r[2] = (p - v) * b;
    r[3] = 0;
    r[4] = (f - y) * x;
    r[5] = (1 - (d + g)) * x;
    r[6] = (h + _) * x;
    r[7] = 0;
    r[8] = (p + v) * S;
    r[9] = (h - _) * S;
    r[10] = (1 - (d + m)) * S;
    r[11] = 0;
    r[12] = e.x;
    r[13] = e.y;
    r[14] = e.z;
    r[15] = 1;
    return this;
  }
  decompose(e, t, n) {
    let r = this.elements;
    let i = _n.set(r[0], r[1], r[2]).length();
    let a = _n.set(r[4], r[5], r[6]).length();
    let o = _n.set(r[8], r[9], r[10]).length();
    if (this.determinant() < 0) {
      i = -i;
    }
    e.x = r[12];
    e.y = r[13];
    e.z = r[14];
    vn.copy(this);
    let s = 1 / i;
    let c = 1 / a;
    let l = 1 / o;
    vn.elements[0] *= s;
    vn.elements[1] *= s;
    vn.elements[2] *= s;
    vn.elements[4] *= c;
    vn.elements[5] *= c;
    vn.elements[6] *= c;
    vn.elements[8] *= l;
    vn.elements[9] *= l;
    vn.elements[10] *= l;
    t.setFromRotationMatrix(vn);
    n.x = i;
    n.y = a;
    n.z = o;
    return this;
  }
  makePerspective(e, t, n, r, i, a, o = ze) {
    let s = this.elements;
    let c = i * 2 / (t - e);
    let l = i * 2 / (n - r);
    let u = (t + e) / (t - e);
    let d = (n + r) / (n - r);
    let f;
    let p;
    if (o === 2000) {
      f = -(a + i) / (a - i);
      p = a * -2 * i / (a - i);
    } else if (o === 2001) {
      f = -a / (a - i);
      p = -a * i / (a - i);
    } else {
      throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: ${o}`);
    }
    s[0] = c;
    s[4] = 0;
    s[8] = u;
    s[12] = 0;
    s[1] = 0;
    s[5] = l;
    s[9] = d;
    s[13] = 0;
    s[2] = 0;
    s[6] = 0;
    s[10] = f;
    s[14] = p;
    s[3] = 0;
    s[7] = 0;
    s[11] = -1;
    s[15] = 0;
    return this;
  }
  makeOrthographic(e, t, n, r, i, a, o = ze) {
    let s = this.elements;
    let c = 1 / (t - e);
    let l = 1 / (n - r);
    let u = 1 / (a - i);
    let d = (t + e) * c;
    let f = (n + r) * l;
    let p;
    let m;
    if (o === 2000) {
      p = (a + i) * u;
      m = u * -2;
    } else if (o === 2001) {
      p = i * u;
      m = u * -1;
    } else {
      throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: ${o}`);
    }
    s[0] = c * 2;
    s[4] = 0;
    s[8] = 0;
    s[12] = -d;
    s[1] = 0;
    s[5] = l * 2;
    s[9] = 0;
    s[13] = -f;
    s[2] = 0;
    s[6] = 0;
    s[10] = m;
    s[14] = -p;
    s[3] = 0;
    s[7] = 0;
    s[11] = 0;
    s[15] = 1;
    return this;
  }
  equals(e) {
    let t = this.elements;
    let n = e.elements;
    for (let e = 0; e < 16; e++) {
      if (t[e] !== n[e]) {
        return false;
      }
    }
    return true;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) {
      this.elements[n] = e[n + t];
    }
    return this;
  }
  toArray(e = [], t = 0) {
    let n = this.elements;
    e[t] = n[0];
    e[t + 1] = n[1];
    e[t + 2] = n[2];
    e[t + 3] = n[3];
    e[t + 4] = n[4];
    e[t + 5] = n[5];
    e[t + 6] = n[6];
    e[t + 7] = n[7];
    e[t + 8] = n[8];
    e[t + 9] = n[9];
    e[t + 10] = n[10];
    e[t + 11] = n[11];
    e[t + 12] = n[12];
    e[t + 13] = n[13];
    e[t + 14] = n[14];
    e[t + 15] = n[15];
    return e;
  }
};
var _n = new G();
var vn = new K();
var yn = new G(0, 0, 0);
var bn = new G(1, 1, 1);
var xn = new G();
var Sn = new G();
var Cn = new G();
var wn = new K();
var Tn = new Bt();
var En = class e {
  constructor(t = 0, n = 0, r = 0, i = e.DEFAULT_ORDER) {
    this.isEuler = true;
    this._x = t;
    this._y = n;
    this._z = r;
    this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e;
    this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e;
    this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e;
    this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e;
    this._onChangeCallback();
  }
  set(e, t, n, r = this._order) {
    this._x = e;
    this._y = t;
    this._z = n;
    this._order = r;
    this._onChangeCallback();
    return this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    this._x = e._x;
    this._y = e._y;
    this._z = e._z;
    this._order = e._order;
    this._onChangeCallback();
    return this;
  }
  setFromRotationMatrix(e, t = this._order, n = true) {
    let r = e.elements;
    let i = r[0];
    let a = r[4];
    let o = r[8];
    let s = r[1];
    let c = r[5];
    let l = r[9];
    let u = r[2];
    let d = r[6];
    let f = r[10];
    switch (t) {
      case `XYZ`:
        this._y = Math.asin(Ge(o, -1, 1));
        if (Math.abs(o) < 0.9999999) {
          this._x = Math.atan2(-l, f);
          this._z = Math.atan2(-a, i);
        } else {
          this._x = Math.atan2(d, c);
          this._z = 0;
        }
        break;
      case `YXZ`:
        this._x = Math.asin(-Ge(l, -1, 1));
        if (Math.abs(l) < 0.9999999) {
          this._y = Math.atan2(o, f);
          this._z = Math.atan2(s, c);
        } else {
          this._y = Math.atan2(-u, i);
          this._z = 0;
        }
        break;
      case `ZXY`:
        this._x = Math.asin(Ge(d, -1, 1));
        if (Math.abs(d) < 0.9999999) {
          this._y = Math.atan2(-u, f);
          this._z = Math.atan2(-a, c);
        } else {
          this._y = 0;
          this._z = Math.atan2(s, i);
        }
        break;
      case `ZYX`:
        this._y = Math.asin(-Ge(u, -1, 1));
        if (Math.abs(u) < 0.9999999) {
          this._x = Math.atan2(d, f);
          this._z = Math.atan2(s, i);
        } else {
          this._x = 0;
          this._z = Math.atan2(-a, c);
        }
        break;
      case `YZX`:
        this._z = Math.asin(Ge(s, -1, 1));
        if (Math.abs(s) < 0.9999999) {
          this._x = Math.atan2(-l, c);
          this._y = Math.atan2(-u, i);
        } else {
          this._x = 0;
          this._y = Math.atan2(o, f);
        }
        break;
      case `XZY`:
        this._z = Math.asin(-Ge(a, -1, 1));
        if (Math.abs(a) < 0.9999999) {
          this._x = Math.atan2(d, c);
          this._y = Math.atan2(o, i);
        } else {
          this._x = Math.atan2(-l, f);
          this._y = 0;
        }
        break;
      default:
        console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ${t}`);
    }
    this._order = t;
    if (n === true) {
      this._onChangeCallback();
    }
    return this;
  }
  setFromQuaternion(e, t, n) {
    wn.makeRotationFromQuaternion(e);
    return this.setFromRotationMatrix(wn, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    Tn.setFromEuler(this);
    return this.setFromQuaternion(Tn, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    this._x = e[0];
    this._y = e[1];
    this._z = e[2];
    if (e[3] !== undefined) {
      this._order = e[3];
    }
    this._onChangeCallback();
    return this;
  }
  toArray(e = [], t = 0) {
    e[t] = this._x;
    e[t + 1] = this._y;
    e[t + 2] = this._z;
    e[t + 3] = this._order;
    return e;
  }
  _onChange(e) {
    this._onChangeCallback = e;
    return this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x;
    yield this._y;
    yield this._z;
    yield this._order;
  }
};
En.DEFAULT_ORDER = `XYZ`;
var Dn = class {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = 1 << e >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e;
  }
  disable(e) {
    this.mask &= ~(1 << e);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return !!(this.mask & 1 << e);
  }
};
var On = 0;
var kn = new G();
var An = new Bt();
var jn = new K();
var Mn = new G();
var Nn = new G();
var Pn = new G();
var Fn = new Bt();
var In = new G(1, 0, 0);
var Ln = new G(0, 1, 0);
var Rn = new G(0, 0, 1);
var zn = {
  type: `added`
};
var Bn = {
  type: `removed`
};
var Vn = {
  type: `childadded`,
  child: null
};
var Hn = {
  type: `childremoved`,
  child: null
};
var Un = class e extends Be {
  constructor() {
    super();
    this.isObject3D = true;
    Object.defineProperty(this, "id", {
      value: On++
    });
    this.uuid = We();
    this.name = ``;
    this.type = `Object3D`;
    this.parent = null;
    this.children = [];
    this.up = e.DEFAULT_UP.clone();
    let t = new G();
    let n = new En();
    let r = new Bt();
    let i = new G(1, 1, 1);
    function a() {
      r.setFromEuler(n, false);
    }
    function o() {
      n.setFromQuaternion(r, undefined, false);
    }
    n._onChange(a);
    r._onChange(o);
    Object.defineProperties(this, {
      position: {
        configurable: true,
        enumerable: true,
        value: t
      },
      rotation: {
        configurable: true,
        enumerable: true,
        value: n
      },
      quaternion: {
        configurable: true,
        enumerable: true,
        value: r
      },
      scale: {
        configurable: true,
        enumerable: true,
        value: i
      },
      modelViewMatrix: {
        value: new K()
      },
      normalMatrix: {
        value: new U()
      }
    });
    this.matrix = new K();
    this.matrixWorld = new K();
    this.matrixAutoUpdate = e.DEFAULT_MATRIX_AUTO_UPDATE;
    this.matrixWorldAutoUpdate = e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE;
    this.matrixWorldNeedsUpdate = false;
    this.layers = new Dn();
    this.visible = true;
    this.castShadow = false;
    this.receiveShadow = false;
    this.frustumCulled = true;
    this.renderOrder = 0;
    this.animations = [];
    this.userData = {};
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    if (this.matrixAutoUpdate) {
      this.updateMatrix();
    }
    this.matrix.premultiply(e);
    this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    this.quaternion.premultiply(e);
    return this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, true);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    An.setFromAxisAngle(e, t);
    this.quaternion.multiply(An);
    return this;
  }
  rotateOnWorldAxis(e, t) {
    An.setFromAxisAngle(e, t);
    this.quaternion.premultiply(An);
    return this;
  }
  rotateX(e) {
    return this.rotateOnAxis(In, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Ln, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Rn, e);
  }
  translateOnAxis(e, t) {
    kn.copy(e).applyQuaternion(this.quaternion);
    this.position.add(kn.multiplyScalar(t));
    return this;
  }
  translateX(e) {
    return this.translateOnAxis(In, e);
  }
  translateY(e) {
    return this.translateOnAxis(Ln, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Rn, e);
  }
  localToWorld(e) {
    this.updateWorldMatrix(true, false);
    return e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    this.updateWorldMatrix(true, false);
    return e.applyMatrix4(jn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    if (e.isVector3) {
      Mn.copy(e);
    } else {
      Mn.set(e, t, n);
    }
    let r = this.parent;
    this.updateWorldMatrix(true, false);
    Nn.setFromMatrixPosition(this.matrixWorld);
    if (this.isCamera || this.isLight) {
      jn.lookAt(Nn, Mn, this.up);
    } else {
      jn.lookAt(Mn, Nn, this.up);
    }
    this.quaternion.setFromRotationMatrix(jn);
    if (r) {
      jn.extractRotation(r.matrixWorld);
      An.setFromRotationMatrix(jn);
      this.quaternion.premultiply(An.invert());
    }
  }
  add(e) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) {
        this.add(arguments[e]);
      }
      return this;
    }
    if (e === this) {
      console.error(`THREE.Object3D.add: object can't be added as a child of itself.`, e);
      return this;
    } else {
      if (e && e.isObject3D) {
        e.removeFromParent();
        e.parent = this;
        this.children.push(e);
        e.dispatchEvent(zn);
        Vn.child = e;
        this.dispatchEvent(Vn);
        Vn.child = null;
      } else {
        console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`, e);
      }
      return this;
    }
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) {
        this.remove(arguments[e]);
      }
      return this;
    }
    let t = this.children.indexOf(e);
    if (t !== -1) {
      e.parent = null;
      this.children.splice(t, 1);
      e.dispatchEvent(Bn);
      Hn.child = e;
      this.dispatchEvent(Hn);
      Hn.child = null;
    }
    return this;
  }
  removeFromParent() {
    let e = this.parent;
    if (e !== null) {
      e.remove(this);
    }
    return this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    this.updateWorldMatrix(true, false);
    jn.copy(this.matrixWorld).invert();
    if (e.parent !== null) {
      e.parent.updateWorldMatrix(true, false);
      jn.multiply(e.parent.matrixWorld);
    }
    e.applyMatrix4(jn);
    e.removeFromParent();
    e.parent = this;
    this.children.push(e);
    e.updateWorldMatrix(false, true);
    e.dispatchEvent(zn);
    Vn.child = e;
    this.dispatchEvent(Vn);
    Vn.child = null;
    return this;
  }
  getObjectById(e) {
    return this.getObjectByProperty(`id`, e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty(`name`, e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) {
      return this;
    }
    for (let n = 0, r = this.children.length; n < r; n++) {
      let r = this.children[n].getObjectByProperty(e, t);
      if (r !== undefined) {
        return r;
      }
    }
  }
  getObjectsByProperty(e, t, n = []) {
    if (this[e] === t) {
      n.push(this);
    }
    let r = this.children;
    for (let i = 0, a = r.length; i < a; i++) {
      r[i].getObjectsByProperty(e, t, n);
    }
    return n;
  }
  getWorldPosition(e) {
    this.updateWorldMatrix(true, false);
    return e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    this.updateWorldMatrix(true, false);
    this.matrixWorld.decompose(Nn, e, Pn);
    return e;
  }
  getWorldScale(e) {
    this.updateWorldMatrix(true, false);
    this.matrixWorld.decompose(Nn, Fn, e);
    return e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(true, false);
    let t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    let t = this.children;
    for (let n = 0, r = t.length; n < r; n++) {
      t[n].traverse(e);
    }
  }
  traverseVisible(e) {
    if (this.visible === false) {
      return;
    }
    e(this);
    let t = this.children;
    for (let n = 0, r = t.length; n < r; n++) {
      t[n].traverseVisible(e);
    }
  }
  traverseAncestors(e) {
    let t = this.parent;
    if (t !== null) {
      e(t);
      t.traverseAncestors(e);
    }
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(e) {
    if (this.matrixAutoUpdate) {
      this.updateMatrix();
    }
    if (this.matrixWorldNeedsUpdate || e) {
      if (this.matrixWorldAutoUpdate === true) {
        if (this.parent === null) {
          this.matrixWorld.copy(this.matrix);
        } else {
          this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
        }
      }
      this.matrixWorldNeedsUpdate = false;
      e = true;
    }
    let t = this.children;
    for (let n = 0, r = t.length; n < r; n++) {
      t[n].updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    let n = this.parent;
    if (e === true && n !== null) {
      n.updateWorldMatrix(true, false);
    }
    if (this.matrixAutoUpdate) {
      this.updateMatrix();
    }
    if (this.matrixWorldAutoUpdate === true) {
      if (this.parent === null) {
        this.matrixWorld.copy(this.matrix);
      } else {
        this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
      }
    }
    if (t === true) {
      let e = this.children;
      for (let t = 0, n = e.length; t < n; t++) {
        e[t].updateWorldMatrix(false, true);
      }
    }
  }
  toJSON(e) {
    let t = e === undefined || typeof e == `string`;
    let n = {};
    if (t) {
      e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {}
      };
      n.metadata = {
        version: 4.6,
        type: `Object`,
        generator: `Object3D.toJSON`
      };
    }
    let r = {
      uuid: this.uuid,
      type: this.type
    };
    if (this.name !== ``) {
      r.name = this.name;
    }
    if (this.castShadow === true) {
      r.castShadow = true;
    }
    if (this.receiveShadow === true) {
      r.receiveShadow = true;
    }
    if (this.visible === false) {
      r.visible = false;
    }
    if (this.frustumCulled === false) {
      r.frustumCulled = false;
    }
    if (this.renderOrder !== 0) {
      r.renderOrder = this.renderOrder;
    }
    if (Object.keys(this.userData).length > 0) {
      r.userData = this.userData;
    }
    r.layers = this.layers.mask;
    r.matrix = this.matrix.toArray();
    r.up = this.up.toArray();
    if (this.matrixAutoUpdate === false) {
      r.matrixAutoUpdate = false;
    }
    if (this.isInstancedMesh) {
      r.type = `InstancedMesh`;
      r.count = this.count;
      r.instanceMatrix = this.instanceMatrix.toJSON();
      if (this.instanceColor !== null) {
        r.instanceColor = this.instanceColor.toJSON();
      }
    }
    if (this.isBatchedMesh) {
      r.type = `BatchedMesh`;
      r.perObjectFrustumCulled = this.perObjectFrustumCulled;
      r.sortObjects = this.sortObjects;
      r.drawRanges = this._drawRanges;
      r.reservedRanges = this._reservedRanges;
      r.visibility = this._visibility;
      r.active = this._active;
      r.bounds = this._bounds.map(e => ({
        boxInitialized: e.boxInitialized,
        boxMin: e.box.min.toArray(),
        boxMax: e.box.max.toArray(),
        sphereInitialized: e.sphereInitialized,
        sphereRadius: e.sphere.radius,
        sphereCenter: e.sphere.center.toArray()
      }));
      r.maxInstanceCount = this._maxInstanceCount;
      r.maxVertexCount = this._maxVertexCount;
      r.maxIndexCount = this._maxIndexCount;
      r.geometryInitialized = this._geometryInitialized;
      r.geometryCount = this._geometryCount;
      r.matricesTexture = this._matricesTexture.toJSON(e);
      if (this._colorsTexture !== null) {
        r.colorsTexture = this._colorsTexture.toJSON(e);
      }
      if (this.boundingSphere !== null) {
        r.boundingSphere = {
          center: r.boundingSphere.center.toArray(),
          radius: r.boundingSphere.radius
        };
      }
      if (this.boundingBox !== null) {
        r.boundingBox = {
          min: r.boundingBox.min.toArray(),
          max: r.boundingBox.max.toArray()
        };
      }
    }
    function i(t, n) {
      if (t[n.uuid] === undefined) {
        t[n.uuid] = n.toJSON(e);
      }
      return n.uuid;
    }
    if (this.isScene) {
      if (this.background) {
        if (this.background.isColor) {
          r.background = this.background.toJSON();
        } else if (this.background.isTexture) {
          r.background = this.background.toJSON(e).uuid;
        }
      }
      if (this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true) {
        r.environment = this.environment.toJSON(e).uuid;
      }
    } else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = i(e.geometries, this.geometry);
      let t = this.geometry.parameters;
      if (t !== undefined && t.shapes !== undefined) {
        let n = t.shapes;
        if (Array.isArray(n)) {
          for (let t = 0, r = n.length; t < r; t++) {
            let r = n[t];
            i(e.shapes, r);
          }
        } else {
          i(e.shapes, n);
        }
      }
    }
    if (this.isSkinnedMesh) {
      r.bindMode = this.bindMode;
      r.bindMatrix = this.bindMatrix.toArray();
      if (this.skeleton !== undefined) {
        i(e.skeletons, this.skeleton);
        r.skeleton = this.skeleton.uuid;
      }
    }
    if (this.material !== undefined) {
      if (Array.isArray(this.material)) {
        let t = [];
        for (let n = 0, r = this.material.length; n < r; n++) {
          t.push(i(e.materials, this.material[n]));
        }
        r.material = t;
      } else {
        r.material = i(e.materials, this.material);
      }
    }
    if (this.children.length > 0) {
      r.children = [];
      for (let t = 0; t < this.children.length; t++) {
        r.children.push(this.children[t].toJSON(e).object);
      }
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let t = 0; t < this.animations.length; t++) {
        let n = this.animations[t];
        r.animations.push(i(e.animations, n));
      }
    }
    if (t) {
      let t = a(e.geometries);
      let r = a(e.materials);
      let i = a(e.textures);
      let o = a(e.images);
      let s = a(e.shapes);
      let c = a(e.skeletons);
      let l = a(e.animations);
      let u = a(e.nodes);
      if (t.length > 0) {
        n.geometries = t;
      }
      if (r.length > 0) {
        n.materials = r;
      }
      if (i.length > 0) {
        n.textures = i;
      }
      if (o.length > 0) {
        n.images = o;
      }
      if (s.length > 0) {
        n.shapes = s;
      }
      if (c.length > 0) {
        n.skeletons = c;
      }
      if (l.length > 0) {
        n.animations = l;
      }
      if (u.length > 0) {
        n.nodes = u;
      }
    }
    n.object = r;
    return n;
    function a(e) {
      let t = [];
      for (let n in e) {
        let r = e[n];
        delete r.metadata;
        t.push(r);
      }
      return t;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = true) {
    this.name = e.name;
    this.up.copy(e.up);
    this.position.copy(e.position);
    this.rotation.order = e.rotation.order;
    this.quaternion.copy(e.quaternion);
    this.scale.copy(e.scale);
    this.matrix.copy(e.matrix);
    this.matrixWorld.copy(e.matrixWorld);
    this.matrixAutoUpdate = e.matrixAutoUpdate;
    this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate;
    this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate;
    this.layers.mask = e.layers.mask;
    this.visible = e.visible;
    this.castShadow = e.castShadow;
    this.receiveShadow = e.receiveShadow;
    this.frustumCulled = e.frustumCulled;
    this.renderOrder = e.renderOrder;
    this.animations = e.animations.slice();
    this.userData = JSON.parse(JSON.stringify(e.userData));
    if (t === true) {
      for (let t = 0; t < e.children.length; t++) {
        let n = e.children[t];
        this.add(n.clone());
      }
    }
    return this;
  }
};
Un.DEFAULT_UP = new G(0, 1, 0);
Un.DEFAULT_MATRIX_AUTO_UPDATE = true;
Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
var Wn = new G();
var Gn = new G();
var Kn = new G();
var qn = new G();
var Jn = new G();
var Yn = new G();
var Xn = new G();
var Zn = new G();
var Qn = new G();
var $n = new G();
var er = new Ft();
var tr = new Ft();
var nr = new Ft();
var rr = class e {
  constructor(e = new G(), t = new G(), n = new G()) {
    this.a = e;
    this.b = t;
    this.c = n;
  }
  static getNormal(e, t, n, r) {
    r.subVectors(n, t);
    Wn.subVectors(e, t);
    r.cross(Wn);
    let i = r.lengthSq();
    if (i > 0) {
      return r.multiplyScalar(1 / Math.sqrt(i));
    } else {
      return r.set(0, 0, 0);
    }
  }
  static getBarycoord(e, t, n, r, i) {
    Wn.subVectors(r, t);
    Gn.subVectors(n, t);
    Kn.subVectors(e, t);
    let a = Wn.dot(Wn);
    let o = Wn.dot(Gn);
    let s = Wn.dot(Kn);
    let c = Gn.dot(Gn);
    let l = Gn.dot(Kn);
    let u = a * c - o * o;
    if (u === 0) {
      i.set(0, 0, 0);
      return null;
    }
    let d = 1 / u;
    let f = (c * s - o * l) * d;
    let p = (a * l - o * s) * d;
    return i.set(1 - f - p, p, f);
  }
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, qn) !== null && qn.x >= 0 && qn.y >= 0 && qn.x + qn.y <= 1;
  }
  static getInterpolation(e, t, n, r, i, a, o, s) {
    if (this.getBarycoord(e, t, n, r, qn) === null) {
      s.x = 0;
      s.y = 0;
      if (`z` in s) {
        s.z = 0;
      }
      if (`w` in s) {
        s.w = 0;
      }
      return null;
    } else {
      s.setScalar(0);
      s.addScaledVector(i, qn.x);
      s.addScaledVector(a, qn.y);
      s.addScaledVector(o, qn.z);
      return s;
    }
  }
  static getInterpolatedAttribute(e, t, n, r, i, a) {
    er.setScalar(0);
    tr.setScalar(0);
    nr.setScalar(0);
    er.fromBufferAttribute(e, t);
    tr.fromBufferAttribute(e, n);
    nr.fromBufferAttribute(e, r);
    a.setScalar(0);
    a.addScaledVector(er, i.x);
    a.addScaledVector(tr, i.y);
    a.addScaledVector(nr, i.z);
    return a;
  }
  static isFrontFacing(e, t, n, r) {
    Wn.subVectors(n, t);
    Gn.subVectors(e, t);
    return Wn.cross(Gn).dot(r) < 0;
  }
  set(e, t, n) {
    this.a.copy(e);
    this.b.copy(t);
    this.c.copy(n);
    return this;
  }
  setFromPointsAndIndices(e, t, n, r) {
    this.a.copy(e[t]);
    this.b.copy(e[n]);
    this.c.copy(e[r]);
    return this;
  }
  setFromAttributeAndIndices(e, t, n, r) {
    this.a.fromBufferAttribute(e, t);
    this.b.fromBufferAttribute(e, n);
    this.c.fromBufferAttribute(e, r);
    return this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.a.copy(e.a);
    this.b.copy(e.b);
    this.c.copy(e.c);
    return this;
  }
  getArea() {
    Wn.subVectors(this.c, this.b);
    Gn.subVectors(this.a, this.b);
    return Wn.cross(Gn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return e.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, n) {
    return e.getBarycoord(t, this.a, this.b, this.c, n);
  }
  getInterpolation(t, n, r, i, a) {
    return e.getInterpolation(t, this.a, this.b, this.c, n, r, i, a);
  }
  containsPoint(t) {
    return e.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return e.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    let n = this.a;
    let r = this.b;
    let i = this.c;
    let a;
    let o;
    Jn.subVectors(r, n);
    Yn.subVectors(i, n);
    Zn.subVectors(e, n);
    let s = Jn.dot(Zn);
    let c = Yn.dot(Zn);
    if (s <= 0 && c <= 0) {
      return t.copy(n);
    }
    Qn.subVectors(e, r);
    let l = Jn.dot(Qn);
    let u = Yn.dot(Qn);
    if (l >= 0 && u <= l) {
      return t.copy(r);
    }
    let d = s * u - l * c;
    if (d <= 0 && s >= 0 && l <= 0) {
      a = s / (s - l);
      return t.copy(n).addScaledVector(Jn, a);
    }
    $n.subVectors(e, i);
    let f = Jn.dot($n);
    let p = Yn.dot($n);
    if (p >= 0 && f <= p) {
      return t.copy(i);
    }
    let m = f * c - s * p;
    if (m <= 0 && c >= 0 && p <= 0) {
      o = c / (c - p);
      return t.copy(n).addScaledVector(Yn, o);
    }
    let h = l * p - f * u;
    if (h <= 0 && u - l >= 0 && f - p >= 0) {
      Xn.subVectors(i, r);
      o = (u - l) / (u - l + (f - p));
      return t.copy(r).addScaledVector(Xn, o);
    }
    let g = 1 / (h + m + d);
    a = m * g;
    o = d * g;
    return t.copy(n).addScaledVector(Jn, a).addScaledVector(Yn, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
};
var ir = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
var ar = {
  h: 0,
  s: 0,
  l: 0
};
var or = {
  h: 0,
  s: 0,
  l: 0
};
function sr(e, t, n) {
  if (n < 0) {
    n += 1;
  }
  if (n > 1) {
    --n;
  }
  if (n < 1 / 6) {
    return e + (t - e) * 6 * n;
  } else if (n < 1 / 2) {
    return t;
  } else if (n < 2 / 3) {
    return e + (t - e) * 6 * (2 / 3 - n);
  } else {
    return e;
  }
}
var q = class {
  constructor(e, t, n) {
    this.isColor = true;
    this.r = 1;
    this.g = 1;
    this.b = 1;
    return this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === undefined && n === undefined) {
      let t = e;
      if (t && t.isColor) {
        this.copy(t);
      } else if (typeof t == `number`) {
        this.setHex(t);
      } else if (typeof t == `string`) {
        this.setStyle(t);
      }
    } else {
      this.setRGB(e, t, n);
    }
    return this;
  }
  setScalar(e) {
    this.r = e;
    this.g = e;
    this.b = e;
    return this;
  }
  setHex(e, t = Ne) {
    e = Math.floor(e);
    this.r = (e >> 16 & 255) / 255;
    this.g = (e >> 8 & 255) / 255;
    this.b = (e & 255) / 255;
    W.toWorkingColorSpace(this, t);
    return this;
  }
  setRGB(e, t, n, r = W.workingColorSpace) {
    this.r = e;
    this.g = t;
    this.b = n;
    W.toWorkingColorSpace(this, r);
    return this;
  }
  setHSL(e, t, n, r = W.workingColorSpace) {
    e = Ke(e, 1);
    t = Ge(t, 0, 1);
    n = Ge(n, 0, 1);
    if (t === 0) {
      this.r = this.g = this.b = n;
    } else {
      let r = n <= 0.5 ? n * (1 + t) : n + t - n * t;
      let i = n * 2 - r;
      this.r = sr(i, r, e + 1 / 3);
      this.g = sr(i, r, e);
      this.b = sr(i, r, e - 1 / 3);
    }
    W.toWorkingColorSpace(this, r);
    return this;
  }
  setStyle(e, t = Ne) {
    function n(t) {
      if (t !== undefined && parseFloat(t) < 1) {
        console.warn(`THREE.Color: Alpha component of ${e} will be ignored.`);
      }
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let i;
      let a = r[1];
      let o = r[2];
      switch (a) {
        case `rgb`:
        case `rgba`:
          if (i = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) {
            n(i[4]);
            return this.setRGB(Math.min(255, parseInt(i[1], 10)) / 255, Math.min(255, parseInt(i[2], 10)) / 255, Math.min(255, parseInt(i[3], 10)) / 255, t);
          }
          if (i = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) {
            n(i[4]);
            return this.setRGB(Math.min(100, parseInt(i[1], 10)) / 100, Math.min(100, parseInt(i[2], 10)) / 100, Math.min(100, parseInt(i[3], 10)) / 100, t);
          }
          break;
        case `hsl`:
        case `hsla`:
          if (i = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) {
            n(i[4]);
            return this.setHSL(parseFloat(i[1]) / 360, parseFloat(i[2]) / 100, parseFloat(i[3]) / 100, t);
          }
          break;
        default:
          console.warn(`THREE.Color: Unknown color model ${e}`);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      let n = r[1];
      let i = n.length;
      if (i === 3) {
        return this.setRGB(parseInt(n.charAt(0), 16) / 15, parseInt(n.charAt(1), 16) / 15, parseInt(n.charAt(2), 16) / 15, t);
      }
      if (i === 6) {
        return this.setHex(parseInt(n, 16), t);
      }
      console.warn(`THREE.Color: Invalid hex color ${e}`);
    } else if (e && e.length > 0) {
      return this.setColorName(e, t);
    }
    return this;
  }
  setColorName(e, t = Ne) {
    let n = ir[e.toLowerCase()];
    if (n === undefined) {
      console.warn(`THREE.Color: Unknown color ${e}`);
    } else {
      this.setHex(n, t);
    }
    return this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    this.r = e.r;
    this.g = e.g;
    this.b = e.b;
    return this;
  }
  copySRGBToLinear(e) {
    this.r = xt(e.r);
    this.g = xt(e.g);
    this.b = xt(e.b);
    return this;
  }
  copyLinearToSRGB(e) {
    this.r = St(e.r);
    this.g = St(e.g);
    this.b = St(e.b);
    return this;
  }
  convertSRGBToLinear() {
    this.copySRGBToLinear(this);
    return this;
  }
  convertLinearToSRGB() {
    this.copyLinearToSRGB(this);
    return this;
  }
  getHex(e = Ne) {
    W.fromWorkingColorSpace(cr.copy(this), e);
    return Math.round(Ge(cr.r * 255, 0, 255)) * 65536 + Math.round(Ge(cr.g * 255, 0, 255)) * 256 + Math.round(Ge(cr.b * 255, 0, 255));
  }
  getHexString(e = Ne) {
    return `000000${this.getHex(e).toString(16)}`.slice(-6);
  }
  getHSL(e, t = W.workingColorSpace) {
    W.fromWorkingColorSpace(cr.copy(this), t);
    let n = cr.r;
    let r = cr.g;
    let i = cr.b;
    let a = Math.max(n, r, i);
    let o = Math.min(n, r, i);
    let s;
    let c;
    let l = (o + a) / 2;
    if (o === a) {
      s = 0;
      c = 0;
    } else {
      let e = a - o;
      c = l <= 0.5 ? e / (a + o) : e / (2 - a - o);
      switch (a) {
        case n:
          s = (r - i) / e + (r < i ? 6 : 0);
          break;
        case r:
          s = (i - n) / e + 2;
          break;
        case i:
          s = (n - r) / e + 4;
      }
      s /= 6;
    }
    e.h = s;
    e.s = c;
    e.l = l;
    return e;
  }
  getRGB(e, t = W.workingColorSpace) {
    W.fromWorkingColorSpace(cr.copy(this), t);
    e.r = cr.r;
    e.g = cr.g;
    e.b = cr.b;
    return e;
  }
  getStyle(e = Ne) {
    W.fromWorkingColorSpace(cr.copy(this), e);
    let t = cr.r;
    let n = cr.g;
    let r = cr.b;
    if (e === `srgb`) {
      return `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
    } else {
      return `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`;
    }
  }
  offsetHSL(e, t, n) {
    this.getHSL(ar);
    return this.setHSL(ar.h + e, ar.s + t, ar.l + n);
  }
  add(e) {
    this.r += e.r;
    this.g += e.g;
    this.b += e.b;
    return this;
  }
  addColors(e, t) {
    this.r = e.r + t.r;
    this.g = e.g + t.g;
    this.b = e.b + t.b;
    return this;
  }
  addScalar(e) {
    this.r += e;
    this.g += e;
    this.b += e;
    return this;
  }
  sub(e) {
    this.r = Math.max(0, this.r - e.r);
    this.g = Math.max(0, this.g - e.g);
    this.b = Math.max(0, this.b - e.b);
    return this;
  }
  multiply(e) {
    this.r *= e.r;
    this.g *= e.g;
    this.b *= e.b;
    return this;
  }
  multiplyScalar(e) {
    this.r *= e;
    this.g *= e;
    this.b *= e;
    return this;
  }
  lerp(e, t) {
    this.r += (e.r - this.r) * t;
    this.g += (e.g - this.g) * t;
    this.b += (e.b - this.b) * t;
    return this;
  }
  lerpColors(e, t, n) {
    this.r = e.r + (t.r - e.r) * n;
    this.g = e.g + (t.g - e.g) * n;
    this.b = e.b + (t.b - e.b) * n;
    return this;
  }
  lerpHSL(e, t) {
    this.getHSL(ar);
    e.getHSL(or);
    let n = Ye(ar.h, or.h, t);
    let r = Ye(ar.s, or.s, t);
    let i = Ye(ar.l, or.l, t);
    this.setHSL(n, r, i);
    return this;
  }
  setFromVector3(e) {
    this.r = e.x;
    this.g = e.y;
    this.b = e.z;
    return this;
  }
  applyMatrix3(e) {
    let t = this.r;
    let n = this.g;
    let r = this.b;
    let i = e.elements;
    this.r = i[0] * t + i[3] * n + i[6] * r;
    this.g = i[1] * t + i[4] * n + i[7] * r;
    this.b = i[2] * t + i[5] * n + i[8] * r;
    return this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    this.r = e[t];
    this.g = e[t + 1];
    this.b = e[t + 2];
    return this;
  }
  toArray(e = [], t = 0) {
    e[t] = this.r;
    e[t + 1] = this.g;
    e[t + 2] = this.b;
    return e;
  }
  fromBufferAttribute(e, t) {
    this.r = e.getX(t);
    this.g = e.getY(t);
    this.b = e.getZ(t);
    return this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r;
    yield this.g;
    yield this.b;
  }
};
var cr = new q();
q.NAMES = ir;
var lr = 0;
var ur = class extends Be {
  static get type() {
    return `Material`;
  }
  get type() {
    return this.constructor.type;
  }
  set type(e) {}
  constructor() {
    super();
    this.isMaterial = true;
    Object.defineProperty(this, "id", {
      value: lr++
    });
    this.uuid = We();
    this.name = ``;
    this.blending = 1;
    this.side = 0;
    this.vertexColors = false;
    this.opacity = 1;
    this.transparent = false;
    this.alphaHash = false;
    this.blendSrc = 204;
    this.blendDst = 205;
    this.blendEquation = 100;
    this.blendSrcAlpha = null;
    this.blendDstAlpha = null;
    this.blendEquationAlpha = null;
    this.blendColor = new q(0, 0, 0);
    this.blendAlpha = 0;
    this.depthFunc = 3;
    this.depthTest = true;
    this.depthWrite = true;
    this.stencilWriteMask = 255;
    this.stencilFunc = 519;
    this.stencilRef = 0;
    this.stencilFuncMask = 255;
    this.stencilFail = Le;
    this.stencilZFail = Le;
    this.stencilZPass = Le;
    this.stencilWrite = false;
    this.clippingPlanes = null;
    this.clipIntersection = false;
    this.clipShadows = false;
    this.shadowSide = null;
    this.colorWrite = true;
    this.precision = null;
    this.polygonOffset = false;
    this.polygonOffsetFactor = 0;
    this.polygonOffsetUnits = 0;
    this.dithering = false;
    this.alphaToCoverage = false;
    this.premultipliedAlpha = false;
    this.forceSinglePass = false;
    this.visible = true;
    this.toneMapped = true;
    this.userData = {};
    this.version = 0;
    this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    if (this._alphaTest > 0 != e > 0) {
      this.version++;
    }
    this._alphaTest = e;
  }
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== undefined) {
      for (let t in e) {
        let n = e[t];
        if (n === undefined) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        let r = this[t];
        if (r === undefined) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
        } else if (r && r.isColor) {
          r.set(n);
        } else if (r && r.isVector3 && n && n.isVector3) {
          r.copy(n);
        } else {
          this[t] = n;
        }
      }
    }
  }
  toJSON(e) {
    let t = e === undefined || typeof e == `string`;
    if (t) {
      e = {
        textures: {},
        images: {}
      };
    }
    let n = {
      metadata: {
        version: 4.6,
        type: `Material`,
        generator: `Material.toJSON`
      }
    };
    n.uuid = this.uuid;
    n.type = this.type;
    if (this.name !== ``) {
      n.name = this.name;
    }
    if (this.color && this.color.isColor) {
      n.color = this.color.getHex();
    }
    if (this.roughness !== undefined) {
      n.roughness = this.roughness;
    }
    if (this.metalness !== undefined) {
      n.metalness = this.metalness;
    }
    if (this.sheen !== undefined) {
      n.sheen = this.sheen;
    }
    if (this.sheenColor && this.sheenColor.isColor) {
      n.sheenColor = this.sheenColor.getHex();
    }
    if (this.sheenRoughness !== undefined) {
      n.sheenRoughness = this.sheenRoughness;
    }
    if (this.emissive && this.emissive.isColor) {
      n.emissive = this.emissive.getHex();
    }
    if (this.emissiveIntensity !== undefined && this.emissiveIntensity !== 1) {
      n.emissiveIntensity = this.emissiveIntensity;
    }
    if (this.specular && this.specular.isColor) {
      n.specular = this.specular.getHex();
    }
    if (this.specularIntensity !== undefined) {
      n.specularIntensity = this.specularIntensity;
    }
    if (this.specularColor && this.specularColor.isColor) {
      n.specularColor = this.specularColor.getHex();
    }
    if (this.shininess !== undefined) {
      n.shininess = this.shininess;
    }
    if (this.clearcoat !== undefined) {
      n.clearcoat = this.clearcoat;
    }
    if (this.clearcoatRoughness !== undefined) {
      n.clearcoatRoughness = this.clearcoatRoughness;
    }
    if (this.clearcoatMap && this.clearcoatMap.isTexture) {
      n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid;
    }
    if (this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture) {
      n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid;
    }
    if (this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture) {
      n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid;
      n.clearcoatNormalScale = this.clearcoatNormalScale.toArray();
    }
    if (this.dispersion !== undefined) {
      n.dispersion = this.dispersion;
    }
    if (this.iridescence !== undefined) {
      n.iridescence = this.iridescence;
    }
    if (this.iridescenceIOR !== undefined) {
      n.iridescenceIOR = this.iridescenceIOR;
    }
    if (this.iridescenceThicknessRange !== undefined) {
      n.iridescenceThicknessRange = this.iridescenceThicknessRange;
    }
    if (this.iridescenceMap && this.iridescenceMap.isTexture) {
      n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid;
    }
    if (this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture) {
      n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid;
    }
    if (this.anisotropy !== undefined) {
      n.anisotropy = this.anisotropy;
    }
    if (this.anisotropyRotation !== undefined) {
      n.anisotropyRotation = this.anisotropyRotation;
    }
    if (this.anisotropyMap && this.anisotropyMap.isTexture) {
      n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid;
    }
    if (this.map && this.map.isTexture) {
      n.map = this.map.toJSON(e).uuid;
    }
    if (this.matcap && this.matcap.isTexture) {
      n.matcap = this.matcap.toJSON(e).uuid;
    }
    if (this.alphaMap && this.alphaMap.isTexture) {
      n.alphaMap = this.alphaMap.toJSON(e).uuid;
    }
    if (this.lightMap && this.lightMap.isTexture) {
      n.lightMap = this.lightMap.toJSON(e).uuid;
      n.lightMapIntensity = this.lightMapIntensity;
    }
    if (this.aoMap && this.aoMap.isTexture) {
      n.aoMap = this.aoMap.toJSON(e).uuid;
      n.aoMapIntensity = this.aoMapIntensity;
    }
    if (this.bumpMap && this.bumpMap.isTexture) {
      n.bumpMap = this.bumpMap.toJSON(e).uuid;
      n.bumpScale = this.bumpScale;
    }
    if (this.normalMap && this.normalMap.isTexture) {
      n.normalMap = this.normalMap.toJSON(e).uuid;
      n.normalMapType = this.normalMapType;
      n.normalScale = this.normalScale.toArray();
    }
    if (this.displacementMap && this.displacementMap.isTexture) {
      n.displacementMap = this.displacementMap.toJSON(e).uuid;
      n.displacementScale = this.displacementScale;
      n.displacementBias = this.displacementBias;
    }
    if (this.roughnessMap && this.roughnessMap.isTexture) {
      n.roughnessMap = this.roughnessMap.toJSON(e).uuid;
    }
    if (this.metalnessMap && this.metalnessMap.isTexture) {
      n.metalnessMap = this.metalnessMap.toJSON(e).uuid;
    }
    if (this.emissiveMap && this.emissiveMap.isTexture) {
      n.emissiveMap = this.emissiveMap.toJSON(e).uuid;
    }
    if (this.specularMap && this.specularMap.isTexture) {
      n.specularMap = this.specularMap.toJSON(e).uuid;
    }
    if (this.specularIntensityMap && this.specularIntensityMap.isTexture) {
      n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid;
    }
    if (this.specularColorMap && this.specularColorMap.isTexture) {
      n.specularColorMap = this.specularColorMap.toJSON(e).uuid;
    }
    if (this.envMap && this.envMap.isTexture) {
      n.envMap = this.envMap.toJSON(e).uuid;
      if (this.combine !== undefined) {
        n.combine = this.combine;
      }
    }
    if (this.envMapRotation !== undefined) {
      n.envMapRotation = this.envMapRotation.toArray();
    }
    if (this.envMapIntensity !== undefined) {
      n.envMapIntensity = this.envMapIntensity;
    }
    if (this.reflectivity !== undefined) {
      n.reflectivity = this.reflectivity;
    }
    if (this.refractionRatio !== undefined) {
      n.refractionRatio = this.refractionRatio;
    }
    if (this.gradientMap && this.gradientMap.isTexture) {
      n.gradientMap = this.gradientMap.toJSON(e).uuid;
    }
    if (this.transmission !== undefined) {
      n.transmission = this.transmission;
    }
    if (this.transmissionMap && this.transmissionMap.isTexture) {
      n.transmissionMap = this.transmissionMap.toJSON(e).uuid;
    }
    if (this.thickness !== undefined) {
      n.thickness = this.thickness;
    }
    if (this.thicknessMap && this.thicknessMap.isTexture) {
      n.thicknessMap = this.thicknessMap.toJSON(e).uuid;
    }
    if (this.attenuationDistance !== undefined && this.attenuationDistance !== Infinity) {
      n.attenuationDistance = this.attenuationDistance;
    }
    if (this.attenuationColor !== undefined) {
      n.attenuationColor = this.attenuationColor.getHex();
    }
    if (this.size !== undefined) {
      n.size = this.size;
    }
    if (this.shadowSide !== null) {
      n.shadowSide = this.shadowSide;
    }
    if (this.sizeAttenuation !== undefined) {
      n.sizeAttenuation = this.sizeAttenuation;
    }
    if (this.blending !== 1) {
      n.blending = this.blending;
    }
    if (this.side !== 0) {
      n.side = this.side;
    }
    if (this.vertexColors === true) {
      n.vertexColors = true;
    }
    if (this.opacity < 1) {
      n.opacity = this.opacity;
    }
    if (this.transparent === true) {
      n.transparent = true;
    }
    if (this.blendSrc !== 204) {
      n.blendSrc = this.blendSrc;
    }
    if (this.blendDst !== 205) {
      n.blendDst = this.blendDst;
    }
    if (this.blendEquation !== 100) {
      n.blendEquation = this.blendEquation;
    }
    if (this.blendSrcAlpha !== null) {
      n.blendSrcAlpha = this.blendSrcAlpha;
    }
    if (this.blendDstAlpha !== null) {
      n.blendDstAlpha = this.blendDstAlpha;
    }
    if (this.blendEquationAlpha !== null) {
      n.blendEquationAlpha = this.blendEquationAlpha;
    }
    if (this.blendColor && this.blendColor.isColor) {
      n.blendColor = this.blendColor.getHex();
    }
    if (this.blendAlpha !== 0) {
      n.blendAlpha = this.blendAlpha;
    }
    if (this.depthFunc !== 3) {
      n.depthFunc = this.depthFunc;
    }
    if (this.depthTest === false) {
      n.depthTest = this.depthTest;
    }
    if (this.depthWrite === false) {
      n.depthWrite = this.depthWrite;
    }
    if (this.colorWrite === false) {
      n.colorWrite = this.colorWrite;
    }
    if (this.stencilWriteMask !== 255) {
      n.stencilWriteMask = this.stencilWriteMask;
    }
    if (this.stencilFunc !== 519) {
      n.stencilFunc = this.stencilFunc;
    }
    if (this.stencilRef !== 0) {
      n.stencilRef = this.stencilRef;
    }
    if (this.stencilFuncMask !== 255) {
      n.stencilFuncMask = this.stencilFuncMask;
    }
    if (this.stencilFail !== 7680) {
      n.stencilFail = this.stencilFail;
    }
    if (this.stencilZFail !== 7680) {
      n.stencilZFail = this.stencilZFail;
    }
    if (this.stencilZPass !== 7680) {
      n.stencilZPass = this.stencilZPass;
    }
    if (this.stencilWrite === true) {
      n.stencilWrite = this.stencilWrite;
    }
    if (this.rotation !== undefined && this.rotation !== 0) {
      n.rotation = this.rotation;
    }
    if (this.polygonOffset === true) {
      n.polygonOffset = true;
    }
    if (this.polygonOffsetFactor !== 0) {
      n.polygonOffsetFactor = this.polygonOffsetFactor;
    }
    if (this.polygonOffsetUnits !== 0) {
      n.polygonOffsetUnits = this.polygonOffsetUnits;
    }
    if (this.linewidth !== undefined && this.linewidth !== 1) {
      n.linewidth = this.linewidth;
    }
    if (this.dashSize !== undefined) {
      n.dashSize = this.dashSize;
    }
    if (this.gapSize !== undefined) {
      n.gapSize = this.gapSize;
    }
    if (this.scale !== undefined) {
      n.scale = this.scale;
    }
    if (this.dithering === true) {
      n.dithering = true;
    }
    if (this.alphaTest > 0) {
      n.alphaTest = this.alphaTest;
    }
    if (this.alphaHash === true) {
      n.alphaHash = true;
    }
    if (this.alphaToCoverage === true) {
      n.alphaToCoverage = true;
    }
    if (this.premultipliedAlpha === true) {
      n.premultipliedAlpha = true;
    }
    if (this.forceSinglePass === true) {
      n.forceSinglePass = true;
    }
    if (this.wireframe === true) {
      n.wireframe = true;
    }
    if (this.wireframeLinewidth > 1) {
      n.wireframeLinewidth = this.wireframeLinewidth;
    }
    if (this.wireframeLinecap !== `round`) {
      n.wireframeLinecap = this.wireframeLinecap;
    }
    if (this.wireframeLinejoin !== `round`) {
      n.wireframeLinejoin = this.wireframeLinejoin;
    }
    if (this.flatShading === true) {
      n.flatShading = true;
    }
    if (this.visible === false) {
      n.visible = false;
    }
    if (this.toneMapped === false) {
      n.toneMapped = false;
    }
    if (this.fog === false) {
      n.fog = false;
    }
    if (Object.keys(this.userData).length > 0) {
      n.userData = this.userData;
    }
    function r(e) {
      let t = [];
      for (let n in e) {
        let r = e[n];
        delete r.metadata;
        t.push(r);
      }
      return t;
    }
    if (t) {
      let t = r(e.textures);
      let i = r(e.images);
      if (t.length > 0) {
        n.textures = t;
      }
      if (i.length > 0) {
        n.images = i;
      }
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name;
    this.blending = e.blending;
    this.side = e.side;
    this.vertexColors = e.vertexColors;
    this.opacity = e.opacity;
    this.transparent = e.transparent;
    this.blendSrc = e.blendSrc;
    this.blendDst = e.blendDst;
    this.blendEquation = e.blendEquation;
    this.blendSrcAlpha = e.blendSrcAlpha;
    this.blendDstAlpha = e.blendDstAlpha;
    this.blendEquationAlpha = e.blendEquationAlpha;
    this.blendColor.copy(e.blendColor);
    this.blendAlpha = e.blendAlpha;
    this.depthFunc = e.depthFunc;
    this.depthTest = e.depthTest;
    this.depthWrite = e.depthWrite;
    this.stencilWriteMask = e.stencilWriteMask;
    this.stencilFunc = e.stencilFunc;
    this.stencilRef = e.stencilRef;
    this.stencilFuncMask = e.stencilFuncMask;
    this.stencilFail = e.stencilFail;
    this.stencilZFail = e.stencilZFail;
    this.stencilZPass = e.stencilZPass;
    this.stencilWrite = e.stencilWrite;
    let t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      let e = t.length;
      n = Array(e);
      for (let r = 0; r !== e; ++r) {
        n[r] = t[r].clone();
      }
    }
    this.clippingPlanes = n;
    this.clipIntersection = e.clipIntersection;
    this.clipShadows = e.clipShadows;
    this.shadowSide = e.shadowSide;
    this.colorWrite = e.colorWrite;
    this.precision = e.precision;
    this.polygonOffset = e.polygonOffset;
    this.polygonOffsetFactor = e.polygonOffsetFactor;
    this.polygonOffsetUnits = e.polygonOffsetUnits;
    this.dithering = e.dithering;
    this.alphaTest = e.alphaTest;
    this.alphaHash = e.alphaHash;
    this.alphaToCoverage = e.alphaToCoverage;
    this.premultipliedAlpha = e.premultipliedAlpha;
    this.forceSinglePass = e.forceSinglePass;
    this.visible = e.visible;
    this.toneMapped = e.toneMapped;
    this.userData = JSON.parse(JSON.stringify(e.userData));
    return this;
  }
  dispose() {
    this.dispatchEvent({
      type: `dispose`
    });
  }
  set needsUpdate(e) {
    if (e === true) {
      this.version++;
    }
  }
  onBuild() {
    console.warn(`Material: onBuild() has been removed.`);
  }
};
var dr = class extends ur {
  static get type() {
    return `MeshBasicMaterial`;
  }
  constructor(e) {
    super();
    this.isMeshBasicMaterial = true;
    this.color = new q(16777215);
    this.map = null;
    this.lightMap = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.specularMap = null;
    this.alphaMap = null;
    this.envMap = null;
    this.envMapRotation = new En();
    this.combine = 0;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.wireframeLinecap = `round`;
    this.wireframeLinejoin = `round`;
    this.fog = true;
    this.setValues(e);
  }
  copy(e) {
    super.copy(e);
    this.color.copy(e.color);
    this.map = e.map;
    this.lightMap = e.lightMap;
    this.lightMapIntensity = e.lightMapIntensity;
    this.aoMap = e.aoMap;
    this.aoMapIntensity = e.aoMapIntensity;
    this.specularMap = e.specularMap;
    this.alphaMap = e.alphaMap;
    this.envMap = e.envMap;
    this.envMapRotation.copy(e.envMapRotation);
    this.combine = e.combine;
    this.reflectivity = e.reflectivity;
    this.refractionRatio = e.refractionRatio;
    this.wireframe = e.wireframe;
    this.wireframeLinewidth = e.wireframeLinewidth;
    this.wireframeLinecap = e.wireframeLinecap;
    this.wireframeLinejoin = e.wireframeLinejoin;
    this.fog = e.fog;
    return this;
  }
};
var fr = new G();
var pr = new H();
var mr = class {
  constructor(e, t, n = false) {
    if (Array.isArray(e)) {
      throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);
    }
    this.isBufferAttribute = true;
    this.name = ``;
    this.array = e;
    this.itemSize = t;
    this.count = e === undefined ? 0 : e.length / t;
    this.normalized = n;
    this.usage = Re;
    this.updateRanges = [];
    this.gpuType = h;
    this.version = 0;
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    if (e === true) {
      this.version++;
    }
  }
  setUsage(e) {
    this.usage = e;
    return this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({
      start: e,
      count: t
    });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    this.name = e.name;
    this.array = new e.array.constructor(e.array);
    this.itemSize = e.itemSize;
    this.count = e.count;
    this.normalized = e.normalized;
    this.usage = e.usage;
    this.gpuType = e.gpuType;
    return this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize;
    n *= t.itemSize;
    for (let r = 0, i = this.itemSize; r < i; r++) {
      this.array[e + r] = t.array[n + r];
    }
    return this;
  }
  copyArray(e) {
    this.array.set(e);
    return this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2) {
      for (let t = 0, n = this.count; t < n; t++) {
        pr.fromBufferAttribute(this, t);
        pr.applyMatrix3(e);
        this.setXY(t, pr.x, pr.y);
      }
    } else if (this.itemSize === 3) {
      for (let t = 0, n = this.count; t < n; t++) {
        fr.fromBufferAttribute(this, t);
        fr.applyMatrix3(e);
        this.setXYZ(t, fr.x, fr.y, fr.z);
      }
    }
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++) {
      fr.fromBufferAttribute(this, t);
      fr.applyMatrix4(e);
      this.setXYZ(t, fr.x, fr.y, fr.z);
    }
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++) {
      fr.fromBufferAttribute(this, t);
      fr.applyNormalMatrix(e);
      this.setXYZ(t, fr.x, fr.y, fr.z);
    }
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++) {
      fr.fromBufferAttribute(this, t);
      fr.transformDirection(e);
      this.setXYZ(t, fr.x, fr.y, fr.z);
    }
    return this;
  }
  set(e, t = 0) {
    this.array.set(e, t);
    return this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    if (this.normalized) {
      n = ut(n, this.array);
    }
    return n;
  }
  setComponent(e, t, n) {
    if (this.normalized) {
      n = V(n, this.array);
    }
    this.array[e * this.itemSize + t] = n;
    return this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    if (this.normalized) {
      t = ut(t, this.array);
    }
    return t;
  }
  setX(e, t) {
    if (this.normalized) {
      t = V(t, this.array);
    }
    this.array[e * this.itemSize] = t;
    return this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    if (this.normalized) {
      t = ut(t, this.array);
    }
    return t;
  }
  setY(e, t) {
    if (this.normalized) {
      t = V(t, this.array);
    }
    this.array[e * this.itemSize + 1] = t;
    return this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    if (this.normalized) {
      t = ut(t, this.array);
    }
    return t;
  }
  setZ(e, t) {
    if (this.normalized) {
      t = V(t, this.array);
    }
    this.array[e * this.itemSize + 2] = t;
    return this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    if (this.normalized) {
      t = ut(t, this.array);
    }
    return t;
  }
  setW(e, t) {
    if (this.normalized) {
      t = V(t, this.array);
    }
    this.array[e * this.itemSize + 3] = t;
    return this;
  }
  setXY(e, t, n) {
    e *= this.itemSize;
    if (this.normalized) {
      t = V(t, this.array);
      n = V(n, this.array);
    }
    this.array[e + 0] = t;
    this.array[e + 1] = n;
    return this;
  }
  setXYZ(e, t, n, r) {
    e *= this.itemSize;
    if (this.normalized) {
      t = V(t, this.array);
      n = V(n, this.array);
      r = V(r, this.array);
    }
    this.array[e + 0] = t;
    this.array[e + 1] = n;
    this.array[e + 2] = r;
    return this;
  }
  setXYZW(e, t, n, r, i) {
    e *= this.itemSize;
    if (this.normalized) {
      t = V(t, this.array);
      n = V(n, this.array);
      r = V(r, this.array);
      i = V(i, this.array);
    }
    this.array[e + 0] = t;
    this.array[e + 1] = n;
    this.array[e + 2] = r;
    this.array[e + 3] = i;
    return this;
  }
  onUpload(e) {
    this.onUploadCallback = e;
    return this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    let e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    if (this.name !== ``) {
      e.name = this.name;
    }
    if (this.usage !== 35044) {
      e.usage = this.usage;
    }
    return e;
  }
};
var hr = class extends mr {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
};
var gr = class extends mr {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
};
var _r = class extends mr {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
};
var vr = 0;
var yr = new K();
var br = new Un();
var xr = new G();
var Sr = new Ut();
var Cr = new Ut();
var wr = new G();
var Tr = class e extends Be {
  constructor() {
    super();
    this.isBufferGeometry = true;
    Object.defineProperty(this, "id", {
      value: vr++
    });
    this.uuid = We();
    this.name = ``;
    this.type = `BufferGeometry`;
    this.index = null;
    this.indirect = null;
    this.attributes = {};
    this.morphAttributes = {};
    this.morphTargetsRelative = false;
    this.groups = [];
    this.boundingBox = null;
    this.boundingSphere = null;
    this.drawRange = {
      start: 0,
      count: Infinity
    };
    this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    this.index = Array.isArray(e) ? new (pt(e) ? gr : hr)(e, 1) : e;
    return this;
  }
  setIndirect(e) {
    this.indirect = e;
    return this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
    return this;
  }
  deleteAttribute(e) {
    delete this.attributes[e];
    return this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== undefined;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e;
    this.drawRange.count = t;
  }
  applyMatrix4(e) {
    let t = this.attributes.position;
    if (t !== undefined) {
      t.applyMatrix4(e);
      t.needsUpdate = true;
    }
    let n = this.attributes.normal;
    if (n !== undefined) {
      let t = new U().getNormalMatrix(e);
      n.applyNormalMatrix(t);
      n.needsUpdate = true;
    }
    let r = this.attributes.tangent;
    if (r !== undefined) {
      r.transformDirection(e);
      r.needsUpdate = true;
    }
    if (this.boundingBox !== null) {
      this.computeBoundingBox();
    }
    if (this.boundingSphere !== null) {
      this.computeBoundingSphere();
    }
    return this;
  }
  applyQuaternion(e) {
    yr.makeRotationFromQuaternion(e);
    this.applyMatrix4(yr);
    return this;
  }
  rotateX(e) {
    yr.makeRotationX(e);
    this.applyMatrix4(yr);
    return this;
  }
  rotateY(e) {
    yr.makeRotationY(e);
    this.applyMatrix4(yr);
    return this;
  }
  rotateZ(e) {
    yr.makeRotationZ(e);
    this.applyMatrix4(yr);
    return this;
  }
  translate(e, t, n) {
    yr.makeTranslation(e, t, n);
    this.applyMatrix4(yr);
    return this;
  }
  scale(e, t, n) {
    yr.makeScale(e, t, n);
    this.applyMatrix4(yr);
    return this;
  }
  lookAt(e) {
    br.lookAt(e);
    br.updateMatrix();
    this.applyMatrix4(br.matrix);
    return this;
  }
  center() {
    this.computeBoundingBox();
    this.boundingBox.getCenter(xr).negate();
    this.translate(xr.x, xr.y, xr.z);
    return this;
  }
  setFromPoints(e) {
    let t = this.getAttribute(`position`);
    if (t === undefined) {
      let t = [];
      for (let n = 0, r = e.length; n < r; n++) {
        let r = e[n];
        t.push(r.x, r.y, r.z || 0);
      }
      this.setAttribute(`position`, new _r(t, 3));
    } else {
      for (let n = 0, r = t.count; n < r; n++) {
        let r = e[n];
        t.setXYZ(n, r.x, r.y, r.z || 0);
      }
      if (e.length > t.count) {
        console.warn(`THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`);
      }
      t.needsUpdate = true;
    }
    return this;
  }
  computeBoundingBox() {
    if (this.boundingBox === null) {
      this.boundingBox = new Ut();
    }
    let e = this.attributes.position;
    let t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`, this);
      this.boundingBox.set(new G(-Infinity, -Infinity, -Infinity), new G(Infinity, Infinity, Infinity));
    } else {
      if (e !== undefined) {
        this.boundingBox.setFromBufferAttribute(e);
        if (t) {
          for (let e = 0, n = t.length; e < n; e++) {
            let n = t[e];
            Sr.setFromBufferAttribute(n);
            if (this.morphTargetsRelative) {
              wr.addVectors(this.boundingBox.min, Sr.min);
              this.boundingBox.expandByPoint(wr);
              wr.addVectors(this.boundingBox.max, Sr.max);
              this.boundingBox.expandByPoint(wr);
            } else {
              this.boundingBox.expandByPoint(Sr.min);
              this.boundingBox.expandByPoint(Sr.max);
            }
          }
        }
      } else {
        this.boundingBox.makeEmpty();
      }
      if (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) {
        console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`, this);
      }
    }
  }
  computeBoundingSphere() {
    if (this.boundingSphere === null) {
      this.boundingSphere = new cn();
    }
    let e = this.attributes.position;
    let t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`, this);
      this.boundingSphere.set(new G(), Infinity);
    } else if (e) {
      let n = this.boundingSphere.center;
      Sr.setFromBufferAttribute(e);
      if (t) {
        for (let e = 0, n = t.length; e < n; e++) {
          let n = t[e];
          Cr.setFromBufferAttribute(n);
          if (this.morphTargetsRelative) {
            wr.addVectors(Sr.min, Cr.min);
            Sr.expandByPoint(wr);
            wr.addVectors(Sr.max, Cr.max);
            Sr.expandByPoint(wr);
          } else {
            Sr.expandByPoint(Cr.min);
            Sr.expandByPoint(Cr.max);
          }
        }
      }
      Sr.getCenter(n);
      let r = 0;
      for (let t = 0, i = e.count; t < i; t++) {
        wr.fromBufferAttribute(e, t);
        r = Math.max(r, n.distanceToSquared(wr));
      }
      if (t) {
        for (let i = 0, a = t.length; i < a; i++) {
          let a = t[i];
          let o = this.morphTargetsRelative;
          for (let t = 0, i = a.count; t < i; t++) {
            wr.fromBufferAttribute(a, t);
            if (o) {
              xr.fromBufferAttribute(e, t);
              wr.add(xr);
            }
            r = Math.max(r, n.distanceToSquared(wr));
          }
        }
      }
      this.boundingSphere.radius = Math.sqrt(r);
      if (isNaN(this.boundingSphere.radius)) {
        console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`, this);
      }
    }
  }
  computeTangents() {
    let e = this.index;
    let t = this.attributes;
    if (e === null || t.position === undefined || t.normal === undefined || t.uv === undefined) {
      console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);
      return;
    }
    let n = t.position;
    let r = t.normal;
    let i = t.uv;
    if (this.hasAttribute(`tangent`) === false) {
      this.setAttribute(`tangent`, new mr(new Float32Array(n.count * 4), 4));
    }
    let a = this.getAttribute(`tangent`);
    let o = [];
    let s = [];
    for (let e = 0; e < n.count; e++) {
      o[e] = new G();
      s[e] = new G();
    }
    let c = new G();
    let l = new G();
    let u = new G();
    let d = new H();
    let f = new H();
    let p = new H();
    let m = new G();
    let h = new G();
    function g(e, t, r) {
      c.fromBufferAttribute(n, e);
      l.fromBufferAttribute(n, t);
      u.fromBufferAttribute(n, r);
      d.fromBufferAttribute(i, e);
      f.fromBufferAttribute(i, t);
      p.fromBufferAttribute(i, r);
      l.sub(c);
      u.sub(c);
      f.sub(d);
      p.sub(d);
      let a = 1 / (f.x * p.y - p.x * f.y);
      if (isFinite(a)) {
        m.copy(l).multiplyScalar(p.y).addScaledVector(u, -f.y).multiplyScalar(a);
        h.copy(u).multiplyScalar(f.x).addScaledVector(l, -p.x).multiplyScalar(a);
        o[e].add(m);
        o[t].add(m);
        o[r].add(m);
        s[e].add(h);
        s[t].add(h);
        s[r].add(h);
      }
    }
    let _ = this.groups;
    if (_.length === 0) {
      _ = [{
        start: 0,
        count: e.count
      }];
    }
    for (let t = 0, n = _.length; t < n; ++t) {
      let n = _[t];
      let r = n.start;
      let i = n.count;
      for (let t = r, n = r + i; t < n; t += 3) {
        g(e.getX(t + 0), e.getX(t + 1), e.getX(t + 2));
      }
    }
    let v = new G();
    let y = new G();
    let b = new G();
    let x = new G();
    function S(e) {
      b.fromBufferAttribute(r, e);
      x.copy(b);
      let t = o[e];
      v.copy(t);
      v.sub(b.multiplyScalar(b.dot(t))).normalize();
      y.crossVectors(x, t);
      let n = y.dot(s[e]) < 0 ? -1 : 1;
      a.setXYZW(e, v.x, v.y, v.z, n);
    }
    for (let t = 0, n = _.length; t < n; ++t) {
      let n = _[t];
      let r = n.start;
      let i = n.count;
      for (let t = r, n = r + i; t < n; t += 3) {
        S(e.getX(t + 0));
        S(e.getX(t + 1));
        S(e.getX(t + 2));
      }
    }
  }
  computeVertexNormals() {
    let e = this.index;
    let t = this.getAttribute(`position`);
    if (t !== undefined) {
      let n = this.getAttribute(`normal`);
      if (n === undefined) {
        n = new mr(new Float32Array(t.count * 3), 3);
        this.setAttribute(`normal`, n);
      } else {
        for (let e = 0, t = n.count; e < t; e++) {
          n.setXYZ(e, 0, 0, 0);
        }
      }
      let r = new G();
      let i = new G();
      let a = new G();
      let o = new G();
      let s = new G();
      let c = new G();
      let l = new G();
      let u = new G();
      if (e) {
        for (let d = 0, f = e.count; d < f; d += 3) {
          let f = e.getX(d + 0);
          let p = e.getX(d + 1);
          let m = e.getX(d + 2);
          r.fromBufferAttribute(t, f);
          i.fromBufferAttribute(t, p);
          a.fromBufferAttribute(t, m);
          l.subVectors(a, i);
          u.subVectors(r, i);
          l.cross(u);
          o.fromBufferAttribute(n, f);
          s.fromBufferAttribute(n, p);
          c.fromBufferAttribute(n, m);
          o.add(l);
          s.add(l);
          c.add(l);
          n.setXYZ(f, o.x, o.y, o.z);
          n.setXYZ(p, s.x, s.y, s.z);
          n.setXYZ(m, c.x, c.y, c.z);
        }
      } else {
        for (let e = 0, o = t.count; e < o; e += 3) {
          r.fromBufferAttribute(t, e + 0);
          i.fromBufferAttribute(t, e + 1);
          a.fromBufferAttribute(t, e + 2);
          l.subVectors(a, i);
          u.subVectors(r, i);
          l.cross(u);
          n.setXYZ(e + 0, l.x, l.y, l.z);
          n.setXYZ(e + 1, l.x, l.y, l.z);
          n.setXYZ(e + 2, l.x, l.y, l.z);
        }
      }
      this.normalizeNormals();
      n.needsUpdate = true;
    }
  }
  normalizeNormals() {
    let e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++) {
      wr.fromBufferAttribute(e, t);
      wr.normalize();
      e.setXYZ(t, wr.x, wr.y, wr.z);
    }
  }
  toNonIndexed() {
    function t(e, t) {
      let n = e.array;
      let r = e.itemSize;
      let i = e.normalized;
      let a = new n.constructor(t.length * r);
      let o = 0;
      let s = 0;
      for (let i = 0, c = t.length; i < c; i++) {
        o = e.isInterleavedBufferAttribute ? t[i] * e.data.stride + e.offset : t[i] * r;
        for (let e = 0; e < r; e++) {
          a[s++] = n[o++];
        }
      }
      return new mr(a, r, i);
    }
    if (this.index === null) {
      console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`);
      return this;
    }
    let n = new e();
    let r = this.index.array;
    let i = this.attributes;
    for (let e in i) {
      let a = i[e];
      let o = t(a, r);
      n.setAttribute(e, o);
    }
    let a = this.morphAttributes;
    for (let e in a) {
      let i = [];
      let o = a[e];
      for (let e = 0, n = o.length; e < n; e++) {
        let n = o[e];
        let a = t(n, r);
        i.push(a);
      }
      n.morphAttributes[e] = i;
    }
    n.morphTargetsRelative = this.morphTargetsRelative;
    let o = this.groups;
    for (let e = 0, t = o.length; e < t; e++) {
      let t = o[e];
      n.addGroup(t.start, t.count, t.materialIndex);
    }
    return n;
  }
  toJSON() {
    let e = {
      metadata: {
        version: 4.6,
        type: `BufferGeometry`,
        generator: `BufferGeometry.toJSON`
      }
    };
    e.uuid = this.uuid;
    e.type = this.type;
    if (this.name !== ``) {
      e.name = this.name;
    }
    if (Object.keys(this.userData).length > 0) {
      e.userData = this.userData;
    }
    if (this.parameters !== undefined) {
      let t = this.parameters;
      for (let n in t) {
        if (t[n] !== undefined) {
          e[n] = t[n];
        }
      }
      return e;
    }
    e.data = {
      attributes: {}
    };
    let t = this.index;
    if (t !== null) {
      e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array)
      };
    }
    let n = this.attributes;
    for (let t in n) {
      let r = n[t];
      e.data.attributes[t] = r.toJSON(e.data);
    }
    let r = {};
    let i = false;
    for (let t in this.morphAttributes) {
      let n = this.morphAttributes[t];
      let a = [];
      for (let t = 0, r = n.length; t < r; t++) {
        let r = n[t];
        a.push(r.toJSON(e.data));
      }
      if (a.length > 0) {
        r[t] = a;
        i = true;
      }
    }
    if (i) {
      e.data.morphAttributes = r;
      e.data.morphTargetsRelative = this.morphTargetsRelative;
    }
    let a = this.groups;
    if (a.length > 0) {
      e.data.groups = JSON.parse(JSON.stringify(a));
    }
    let o = this.boundingSphere;
    if (o !== null) {
      e.data.boundingSphere = {
        center: o.center.toArray(),
        radius: o.radius
      };
    }
    return e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null;
    this.attributes = {};
    this.morphAttributes = {};
    this.groups = [];
    this.boundingBox = null;
    this.boundingSphere = null;
    let t = {};
    this.name = e.name;
    let n = e.index;
    if (n !== null) {
      this.setIndex(n.clone(t));
    }
    let r = e.attributes;
    for (let e in r) {
      let n = r[e];
      this.setAttribute(e, n.clone(t));
    }
    let i = e.morphAttributes;
    for (let e in i) {
      let n = [];
      let r = i[e];
      for (let e = 0, i = r.length; e < i; e++) {
        n.push(r[e].clone(t));
      }
      this.morphAttributes[e] = n;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    let a = e.groups;
    for (let e = 0, t = a.length; e < t; e++) {
      let t = a[e];
      this.addGroup(t.start, t.count, t.materialIndex);
    }
    let o = e.boundingBox;
    if (o !== null) {
      this.boundingBox = o.clone();
    }
    let s = e.boundingSphere;
    if (s !== null) {
      this.boundingSphere = s.clone();
    }
    this.drawRange.start = e.drawRange.start;
    this.drawRange.count = e.drawRange.count;
    this.userData = e.userData;
    return this;
  }
  dispose() {
    this.dispatchEvent({
      type: `dispose`
    });
  }
};
var Er = new K();
var Dr = new gn();
var Or = new cn();
var kr = new G();
var Ar = new G();
var jr = new G();
var Mr = new G();
var Nr = new G();
var Pr = new G();
var Fr = new G();
var Ir = new G();
var Lr = class extends Un {
  constructor(e = new Tr(), t = new dr()) {
    super();
    this.isMesh = true;
    this.type = `Mesh`;
    this.geometry = e;
    this.material = t;
    this.updateMorphTargets();
  }
  copy(e, t) {
    super.copy(e, t);
    if (e.morphTargetInfluences !== undefined) {
      this.morphTargetInfluences = e.morphTargetInfluences.slice();
    }
    if (e.morphTargetDictionary !== undefined) {
      this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary);
    }
    this.material = Array.isArray(e.material) ? e.material.slice() : e.material;
    this.geometry = e.geometry;
    return this;
  }
  updateMorphTargets() {
    let e = this.geometry.morphAttributes;
    let t = Object.keys(e);
    if (t.length > 0) {
      let n = e[t[0]];
      if (n !== undefined) {
        this.morphTargetInfluences = [];
        this.morphTargetDictionary = {};
        for (let e = 0, t = n.length; e < t; e++) {
          let t = n[e].name || String(e);
          this.morphTargetInfluences.push(0);
          this.morphTargetDictionary[t] = e;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    let n = this.geometry;
    let r = n.attributes.position;
    let i = n.morphAttributes.position;
    let a = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    let o = this.morphTargetInfluences;
    if (i && o) {
      Pr.set(0, 0, 0);
      for (let n = 0, r = i.length; n < r; n++) {
        let r = o[n];
        let s = i[n];
        if (r !== 0) {
          Nr.fromBufferAttribute(s, e);
          if (a) {
            Pr.addScaledVector(Nr, r);
          } else {
            Pr.addScaledVector(Nr.sub(t), r);
          }
        }
      }
      t.add(Pr);
    }
    return t;
  }
  raycast(e, t) {
    let n = this.geometry;
    let r = this.material;
    let i = this.matrixWorld;
    if (r !== undefined) {
      if (n.boundingSphere === null) {
        n.computeBoundingSphere();
      }
      Or.copy(n.boundingSphere);
      Or.applyMatrix4(i);
      Dr.copy(e.ray).recast(e.near);
      if (Or.containsPoint(Dr.origin) !== false || Dr.intersectSphere(Or, kr) !== null && !(Dr.origin.distanceToSquared(kr) > (e.far - e.near) ** 2)) {
        Er.copy(i).invert();
        Dr.copy(e.ray).applyMatrix4(Er);
        if (n.boundingBox === null || Dr.intersectsBox(n.boundingBox) !== false) {
          this._computeIntersections(e, t, Dr);
        }
      }
    }
  }
  _computeIntersections(e, t, n) {
    let r;
    let i = this.geometry;
    let a = this.material;
    let o = i.index;
    let s = i.attributes.position;
    let c = i.attributes.uv;
    let l = i.attributes.uv1;
    let u = i.attributes.normal;
    let d = i.groups;
    let f = i.drawRange;
    if (o !== null) {
      if (Array.isArray(a)) {
        for (let i = 0, s = d.length; i < s; i++) {
          let s = d[i];
          let p = a[s.materialIndex];
          let m = Math.max(s.start, f.start);
          let h = Math.min(o.count, Math.min(s.start + s.count, f.start + f.count));
          for (let i = m, a = h; i < a; i += 3) {
            let a = o.getX(i);
            let d = o.getX(i + 1);
            let f = o.getX(i + 2);
            r = zr(this, p, e, n, c, l, u, a, d, f);
            if (r) {
              r.faceIndex = Math.floor(i / 3);
              r.face.materialIndex = s.materialIndex;
              t.push(r);
            }
          }
        }
      } else {
        let i = Math.max(0, f.start);
        let s = Math.min(o.count, f.start + f.count);
        for (let d = i, f = s; d < f; d += 3) {
          let i = o.getX(d);
          let s = o.getX(d + 1);
          let f = o.getX(d + 2);
          r = zr(this, a, e, n, c, l, u, i, s, f);
          if (r) {
            r.faceIndex = Math.floor(d / 3);
            t.push(r);
          }
        }
      }
    } else if (s !== undefined) {
      if (Array.isArray(a)) {
        for (let i = 0, o = d.length; i < o; i++) {
          let o = d[i];
          let p = a[o.materialIndex];
          let m = Math.max(o.start, f.start);
          let h = Math.min(s.count, Math.min(o.start + o.count, f.start + f.count));
          for (let i = m, a = h; i < a; i += 3) {
            let a = i;
            let s = i + 1;
            let d = i + 2;
            r = zr(this, p, e, n, c, l, u, a, s, d);
            if (r) {
              r.faceIndex = Math.floor(i / 3);
              r.face.materialIndex = o.materialIndex;
              t.push(r);
            }
          }
        }
      } else {
        let i = Math.max(0, f.start);
        let o = Math.min(s.count, f.start + f.count);
        for (let s = i, d = o; s < d; s += 3) {
          let i = s;
          let o = s + 1;
          let d = s + 2;
          r = zr(this, a, e, n, c, l, u, i, o, d);
          if (r) {
            r.faceIndex = Math.floor(s / 3);
            t.push(r);
          }
        }
      }
    }
  }
};
function Rr(e, t, n, r, i, a, o, s) {
  let c;
  c = t.side === 1 ? r.intersectTriangle(o, a, i, true, s) : r.intersectTriangle(i, a, o, t.side === 0, s);
  if (c === null) {
    return null;
  }
  Ir.copy(s);
  Ir.applyMatrix4(e.matrixWorld);
  let l = n.ray.origin.distanceTo(Ir);
  if (l < n.near || l > n.far) {
    return null;
  } else {
    return {
      distance: l,
      point: Ir.clone(),
      object: e
    };
  }
}
function zr(e, t, n, r, i, a, o, s, c, l) {
  e.getVertexPosition(s, Ar);
  e.getVertexPosition(c, jr);
  e.getVertexPosition(l, Mr);
  let u = Rr(e, t, n, r, Ar, jr, Mr, Fr);
  if (u) {
    let e = new G();
    rr.getBarycoord(Fr, Ar, jr, Mr, e);
    if (i) {
      u.uv = rr.getInterpolatedAttribute(i, s, c, l, e, new H());
    }
    if (a) {
      u.uv1 = rr.getInterpolatedAttribute(a, s, c, l, e, new H());
    }
    if (o) {
      u.normal = rr.getInterpolatedAttribute(o, s, c, l, e, new G());
      if (u.normal.dot(r.direction) > 0) {
        u.normal.multiplyScalar(-1);
      }
    }
    let t = {
      a: s,
      b: c,
      c: l,
      normal: new G(),
      materialIndex: 0
    };
    rr.getNormal(Ar, jr, Mr, t.normal);
    u.face = t;
    u.barycoord = e;
  }
  return u;
}
var J = class e extends Tr {
  constructor(e = 1, t = 1, n = 1, r = 1, i = 1, a = 1) {
    super();
    this.type = `BoxGeometry`;
    this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: r,
      heightSegments: i,
      depthSegments: a
    };
    let o = this;
    r = Math.floor(r);
    i = Math.floor(i);
    a = Math.floor(a);
    let s = [];
    let c = [];
    let l = [];
    let u = [];
    let d = 0;
    let f = 0;
    p(`z`, `y`, `x`, -1, -1, n, t, e, a, i, 0);
    p(`z`, `y`, `x`, 1, -1, n, t, -e, a, i, 1);
    p(`x`, `z`, `y`, 1, 1, e, n, t, r, a, 2);
    p(`x`, `z`, `y`, 1, -1, e, n, -t, r, a, 3);
    p(`x`, `y`, `z`, 1, -1, e, t, n, r, i, 4);
    p(`x`, `y`, `z`, -1, -1, e, t, -n, r, i, 5);
    this.setIndex(s);
    this.setAttribute(`position`, new _r(c, 3));
    this.setAttribute(`normal`, new _r(l, 3));
    this.setAttribute(`uv`, new _r(u, 2));
    function p(e, t, n, r, i, a, p, m, h, g, _) {
      let v = a / h;
      let y = p / g;
      let b = a / 2;
      let x = p / 2;
      let S = m / 2;
      let C = h + 1;
      let w = g + 1;
      let T = 0;
      let E = 0;
      let D = new G();
      for (let a = 0; a < w; a++) {
        let o = a * y - x;
        for (let s = 0; s < C; s++) {
          D[e] = (s * v - b) * r;
          D[t] = o * i;
          D[n] = S;
          c.push(D.x, D.y, D.z);
          D[e] = 0;
          D[t] = 0;
          D[n] = m > 0 ? 1 : -1;
          l.push(D.x, D.y, D.z);
          u.push(s / h);
          u.push(1 - a / g);
          T += 1;
        }
      }
      for (let e = 0; e < g; e++) {
        for (let t = 0; t < h; t++) {
          let n = d + t + C * e;
          let r = d + t + C * (e + 1);
          let i = d + (t + 1) + C * (e + 1);
          let a = d + (t + 1) + C * e;
          s.push(n, r, a);
          s.push(r, i, a);
          E += 6;
        }
      }
      o.addGroup(f, E, _);
      f += E;
      d += T;
    }
  }
  copy(e) {
    super.copy(e);
    this.parameters = Object.assign({}, e.parameters);
    return this;
  }
  static fromJSON(t) {
    return new e(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
};
function Br(e) {
  let t = {};
  for (let n in e) {
    t[n] = {};
    for (let r in e[n]) {
      let i = e[n][r];
      if (i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion)) {
        if (i.isRenderTargetTexture) {
          console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`);
          t[n][r] = null;
        } else {
          t[n][r] = i.clone();
        }
      } else if (Array.isArray(i)) {
        t[n][r] = i.slice();
      } else {
        t[n][r] = i;
      }
    }
  }
  return t;
}
function Vr(e) {
  let t = {};
  for (let n = 0; n < e.length; n++) {
    let r = Br(e[n]);
    for (let e in r) {
      t[e] = r[e];
    }
  }
  return t;
}
function Hr(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    t.push(e[n].clone());
  }
  return t;
}
function Ur(e) {
  let t = e.getRenderTarget();
  if (t === null) {
    return e.outputColorSpace;
  } else if (t.isXRRenderTarget === true) {
    return t.texture.colorSpace;
  } else {
    return W.workingColorSpace;
  }
}
var Wr = {
  clone: Br,
  merge: Vr
};
var Gr = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`;
var Kr = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
var qr = class extends ur {
  static get type() {
    return `ShaderMaterial`;
  }
  constructor(e) {
    super();
    this.isShaderMaterial = true;
    this.defines = {};
    this.uniforms = {};
    this.uniformsGroups = [];
    this.vertexShader = Gr;
    this.fragmentShader = Kr;
    this.linewidth = 1;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.fog = false;
    this.lights = false;
    this.clipping = false;
    this.forceSinglePass = true;
    this.extensions = {
      clipCullDistance: false,
      multiDraw: false
    };
    this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    };
    this.index0AttributeName = undefined;
    this.uniformsNeedUpdate = false;
    this.glslVersion = null;
    if (e !== undefined) {
      this.setValues(e);
    }
  }
  copy(e) {
    super.copy(e);
    this.fragmentShader = e.fragmentShader;
    this.vertexShader = e.vertexShader;
    this.uniforms = Br(e.uniforms);
    this.uniformsGroups = Hr(e.uniformsGroups);
    this.defines = Object.assign({}, e.defines);
    this.wireframe = e.wireframe;
    this.wireframeLinewidth = e.wireframeLinewidth;
    this.fog = e.fog;
    this.lights = e.lights;
    this.clipping = e.clipping;
    this.extensions = Object.assign({}, e.extensions);
    this.glslVersion = e.glslVersion;
    return this;
  }
  toJSON(e) {
    let t = super.toJSON(e);
    t.glslVersion = this.glslVersion;
    t.uniforms = {};
    for (let n in this.uniforms) {
      let r = this.uniforms[n].value;
      if (r && r.isTexture) {
        t.uniforms[n] = {
          type: `t`,
          value: r.toJSON(e).uuid
        };
      } else if (r && r.isColor) {
        t.uniforms[n] = {
          type: `c`,
          value: r.getHex()
        };
      } else if (r && r.isVector2) {
        t.uniforms[n] = {
          type: `v2`,
          value: r.toArray()
        };
      } else if (r && r.isVector3) {
        t.uniforms[n] = {
          type: `v3`,
          value: r.toArray()
        };
      } else if (r && r.isVector4) {
        t.uniforms[n] = {
          type: `v4`,
          value: r.toArray()
        };
      } else if (r && r.isMatrix3) {
        t.uniforms[n] = {
          type: `m3`,
          value: r.toArray()
        };
      } else if (r && r.isMatrix4) {
        t.uniforms[n] = {
          type: `m4`,
          value: r.toArray()
        };
      } else {
        t.uniforms[n] = {
          value: r
        };
      }
    }
    if (Object.keys(this.defines).length > 0) {
      t.defines = this.defines;
    }
    t.vertexShader = this.vertexShader;
    t.fragmentShader = this.fragmentShader;
    t.lights = this.lights;
    t.clipping = this.clipping;
    let n = {};
    for (let e in this.extensions) {
      if (this.extensions[e] === true) {
        n[e] = true;
      }
    }
    if (Object.keys(n).length > 0) {
      t.extensions = n;
    }
    return t;
  }
};
var Jr = class extends Un {
  constructor() {
    super();
    this.isCamera = true;
    this.type = `Camera`;
    this.matrixWorldInverse = new K();
    this.projectionMatrix = new K();
    this.projectionMatrixInverse = new K();
    this.coordinateSystem = ze;
  }
  copy(e, t) {
    super.copy(e, t);
    this.matrixWorldInverse.copy(e.matrixWorldInverse);
    this.projectionMatrix.copy(e.projectionMatrix);
    this.projectionMatrixInverse.copy(e.projectionMatrixInverse);
    this.coordinateSystem = e.coordinateSystem;
    return this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e);
    this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t);
    this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
var Yr = new G();
var Xr = new H();
var Zr = new H();
var Qr = class extends Jr {
  constructor(e = 50, t = 1, n = 0.1, r = 2000) {
    super();
    this.isPerspectiveCamera = true;
    this.type = `PerspectiveCamera`;
    this.fov = e;
    this.zoom = 1;
    this.near = n;
    this.far = r;
    this.focus = 10;
    this.aspect = t;
    this.view = null;
    this.filmGauge = 35;
    this.filmOffset = 0;
    this.updateProjectionMatrix();
  }
  copy(e, t) {
    super.copy(e, t);
    this.fov = e.fov;
    this.zoom = e.zoom;
    this.near = e.near;
    this.far = e.far;
    this.focus = e.focus;
    this.aspect = e.aspect;
    this.view = e.view === null ? null : Object.assign({}, e.view);
    this.filmGauge = e.filmGauge;
    this.filmOffset = e.filmOffset;
    return this;
  }
  setFocalLength(e) {
    let t = this.getFilmHeight() * 0.5 / e;
    this.fov = Ue * 2 * Math.atan(t);
    this.updateProjectionMatrix();
  }
  getFocalLength() {
    let e = Math.tan(He * 0.5 * this.fov);
    return this.getFilmHeight() * 0.5 / e;
  }
  getEffectiveFOV() {
    return Ue * 2 * Math.atan(Math.tan(He * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    Yr.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse);
    t.set(Yr.x, Yr.y).multiplyScalar(-e / Yr.z);
    Yr.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse);
    n.set(Yr.x, Yr.y).multiplyScalar(-e / Yr.z);
  }
  getViewSize(e, t) {
    this.getViewBounds(e, Xr, Zr);
    return t.subVectors(Zr, Xr);
  }
  setViewOffset(e, t, n, r, i, a) {
    this.aspect = e / t;
    if (this.view === null) {
      this.view = {
        enabled: true,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      };
    }
    this.view.enabled = true;
    this.view.fullWidth = e;
    this.view.fullHeight = t;
    this.view.offsetX = n;
    this.view.offsetY = r;
    this.view.width = i;
    this.view.height = a;
    this.updateProjectionMatrix();
  }
  clearViewOffset() {
    if (this.view !== null) {
      this.view.enabled = false;
    }
    this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    let e = this.near;
    let t = e * Math.tan(He * 0.5 * this.fov) / this.zoom;
    let n = t * 2;
    let r = this.aspect * n;
    let i = r * -0.5;
    let a = this.view;
    if (this.view !== null && this.view.enabled) {
      let e = a.fullWidth;
      let o = a.fullHeight;
      i += a.offsetX * r / e;
      t -= a.offsetY * n / o;
      r *= a.width / e;
      n *= a.height / o;
    }
    let o = this.filmOffset;
    if (o !== 0) {
      i += e * o / this.getFilmWidth();
    }
    this.projectionMatrix.makePerspective(i, i + r, t, t - n, e, this.far, this.coordinateSystem);
    this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    let t = super.toJSON(e);
    t.object.fov = this.fov;
    t.object.zoom = this.zoom;
    t.object.near = this.near;
    t.object.far = this.far;
    t.object.focus = this.focus;
    t.object.aspect = this.aspect;
    if (this.view !== null) {
      t.object.view = Object.assign({}, this.view);
    }
    t.object.filmGauge = this.filmGauge;
    t.object.filmOffset = this.filmOffset;
    return t;
  }
};
var $r = -90;
var ei = 1;
var ti = class extends Un {
  constructor(e, t, n) {
    super();
    this.type = `CubeCamera`;
    this.renderTarget = n;
    this.coordinateSystem = null;
    this.activeMipmapLevel = 0;
    let r = new Qr($r, ei, e, t);
    r.layers = this.layers;
    this.add(r);
    let i = new Qr($r, ei, e, t);
    i.layers = this.layers;
    this.add(i);
    let a = new Qr($r, ei, e, t);
    a.layers = this.layers;
    this.add(a);
    let o = new Qr($r, ei, e, t);
    o.layers = this.layers;
    this.add(o);
    let s = new Qr($r, ei, e, t);
    s.layers = this.layers;
    this.add(s);
    let c = new Qr($r, ei, e, t);
    c.layers = this.layers;
    this.add(c);
  }
  updateCoordinateSystem() {
    let e = this.coordinateSystem;
    let t = this.children.concat();
    let [n, r, i, a, o, s] = t;
    for (let e of t) {
      this.remove(e);
    }
    if (e === 2000) {
      n.up.set(0, 1, 0);
      n.lookAt(1, 0, 0);
      r.up.set(0, 1, 0);
      r.lookAt(-1, 0, 0);
      i.up.set(0, 0, -1);
      i.lookAt(0, 1, 0);
      a.up.set(0, 0, 1);
      a.lookAt(0, -1, 0);
      o.up.set(0, 1, 0);
      o.lookAt(0, 0, 1);
      s.up.set(0, 1, 0);
      s.lookAt(0, 0, -1);
    } else if (e === 2001) {
      n.up.set(0, -1, 0);
      n.lookAt(-1, 0, 0);
      r.up.set(0, -1, 0);
      r.lookAt(1, 0, 0);
      i.up.set(0, 0, 1);
      i.lookAt(0, 1, 0);
      a.up.set(0, 0, -1);
      a.lookAt(0, -1, 0);
      o.up.set(0, -1, 0);
      o.lookAt(0, 0, 1);
      s.up.set(0, -1, 0);
      s.lookAt(0, 0, -1);
    } else {
      throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: ${e}`);
    }
    for (let e of t) {
      this.add(e);
      e.updateMatrixWorld();
    }
  }
  update(e, t) {
    if (this.parent === null) {
      this.updateMatrixWorld();
    }
    let {
      renderTarget: n,
      activeMipmapLevel: r
    } = this;
    if (this.coordinateSystem !== e.coordinateSystem) {
      this.coordinateSystem = e.coordinateSystem;
      this.updateCoordinateSystem();
    }
    let [i, a, o, s, c, l] = this.children;
    let u = e.getRenderTarget();
    let d = e.getActiveCubeFace();
    let f = e.getActiveMipmapLevel();
    let p = e.xr.enabled;
    e.xr.enabled = false;
    let m = n.texture.generateMipmaps;
    n.texture.generateMipmaps = false;
    e.setRenderTarget(n, 0, r);
    e.render(t, i);
    e.setRenderTarget(n, 1, r);
    e.render(t, a);
    e.setRenderTarget(n, 2, r);
    e.render(t, o);
    e.setRenderTarget(n, 3, r);
    e.render(t, s);
    e.setRenderTarget(n, 4, r);
    e.render(t, c);
    n.texture.generateMipmaps = m;
    e.setRenderTarget(n, 5, r);
    e.render(t, l);
    e.setRenderTarget(u, d, f);
    e.xr.enabled = p;
    n.texture.needsPMREMUpdate = true;
  }
};
var ni = class extends Pt {
  constructor(e, t, n, r, i, a, o, s, c, l) {
    e = e === undefined ? [] : e;
    t = t === undefined ? 301 : t;
    super(e, t, n, r, i, a, o, s, c, l);
    this.isCubeTexture = true;
    this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
};
var ri = class extends Lt {
  constructor(e = 1, t = {}) {
    super(e, e, t);
    this.isWebGLCubeRenderTarget = true;
    let n = {
      width: e,
      height: e,
      depth: 1
    };
    let r = [n, n, n, n, n, n];
    this.texture = new ni(r, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace);
    this.texture.isRenderTargetTexture = true;
    this.texture.generateMipmaps = t.generateMipmaps !== undefined && t.generateMipmaps;
    this.texture.minFilter = t.minFilter === undefined ? o : t.minFilter;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type;
    this.texture.colorSpace = t.colorSpace;
    this.texture.generateMipmaps = t.generateMipmaps;
    this.texture.minFilter = t.minFilter;
    this.texture.magFilter = t.magFilter;
    let n = {
      uniforms: {
        tEquirect: {
          value: null
        }
      },
      vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
      fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
    };
    let r = new J(5, 5, 5);
    let i = new qr({
      name: `CubemapFromEquirect`,
      uniforms: Br(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    i.uniforms.tEquirect.value = t;
    let a = new Lr(r, i);
    let s = t.minFilter;
    if (t.minFilter === 1008) {
      t.minFilter = o;
    }
    new ti(1, 10, this).update(e, a);
    t.minFilter = s;
    a.geometry.dispose();
    a.material.dispose();
    return this;
  }
  clear(e, t, n, r) {
    let i = e.getRenderTarget();
    for (let i = 0; i < 6; i++) {
      e.setRenderTarget(this, i);
      e.clear(t, n, r);
    }
    e.setRenderTarget(i);
  }
};
var ii = new G();
var ai = new G();
var oi = new U();
var si = class {
  constructor(e = new G(1, 0, 0), t = 0) {
    this.isPlane = true;
    this.normal = e;
    this.constant = t;
  }
  set(e, t) {
    this.normal.copy(e);
    this.constant = t;
    return this;
  }
  setComponents(e, t, n, r) {
    this.normal.set(e, t, n);
    this.constant = r;
    return this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    this.normal.copy(e);
    this.constant = -t.dot(this.normal);
    return this;
  }
  setFromCoplanarPoints(e, t, n) {
    let r = ii.subVectors(n, t).cross(ai.subVectors(e, t)).normalize();
    this.setFromNormalAndCoplanarPoint(r, e);
    return this;
  }
  copy(e) {
    this.normal.copy(e.normal);
    this.constant = e.constant;
    return this;
  }
  normalize() {
    let e = 1 / this.normal.length();
    this.normal.multiplyScalar(e);
    this.constant *= e;
    return this;
  }
  negate() {
    this.constant *= -1;
    this.normal.negate();
    return this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    let n = e.delta(ii);
    let r = this.normal.dot(n);
    if (r === 0) {
      if (this.distanceToPoint(e.start) === 0) {
        return t.copy(e.start);
      } else {
        return null;
      }
    }
    let i = -(e.start.dot(this.normal) + this.constant) / r;
    if (i < 0 || i > 1) {
      return null;
    } else {
      return t.copy(e.start).addScaledVector(n, i);
    }
  }
  intersectsLine(e) {
    let t = this.distanceToPoint(e.start);
    let n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    let n = t || oi.getNormalMatrix(e);
    let r = this.coplanarPoint(ii).applyMatrix4(e);
    let i = this.normal.applyMatrix3(n).normalize();
    this.constant = -r.dot(i);
    return this;
  }
  translate(e) {
    this.constant -= e.dot(this.normal);
    return this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
var ci = new cn();
var li = new G();
var ui = class {
  constructor(e = new si(), t = new si(), n = new si(), r = new si(), i = new si(), a = new si()) {
    this.planes = [e, t, n, r, i, a];
  }
  set(e, t, n, r, i, a) {
    let o = this.planes;
    o[0].copy(e);
    o[1].copy(t);
    o[2].copy(n);
    o[3].copy(r);
    o[4].copy(i);
    o[5].copy(a);
    return this;
  }
  copy(e) {
    let t = this.planes;
    for (let n = 0; n < 6; n++) {
      t[n].copy(e.planes[n]);
    }
    return this;
  }
  setFromProjectionMatrix(e, t = ze) {
    let n = this.planes;
    let r = e.elements;
    let i = r[0];
    let a = r[1];
    let o = r[2];
    let s = r[3];
    let c = r[4];
    let l = r[5];
    let u = r[6];
    let d = r[7];
    let f = r[8];
    let p = r[9];
    let m = r[10];
    let h = r[11];
    let g = r[12];
    let _ = r[13];
    let v = r[14];
    let y = r[15];
    n[0].setComponents(s - i, d - c, h - f, y - g).normalize();
    n[1].setComponents(s + i, d + c, h + f, y + g).normalize();
    n[2].setComponents(s + a, d + l, h + p, y + _).normalize();
    n[3].setComponents(s - a, d - l, h - p, y - _).normalize();
    n[4].setComponents(s - o, d - u, h - m, y - v).normalize();
    if (t === 2000) {
      n[5].setComponents(s + o, d + u, h + m, y + v).normalize();
    } else if (t === 2001) {
      n[5].setComponents(o, u, m, v).normalize();
    } else {
      throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: ${t}`);
    }
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== undefined) {
      if (e.boundingSphere === null) {
        e.computeBoundingSphere();
      }
      ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    } else {
      let t = e.geometry;
      if (t.boundingSphere === null) {
        t.computeBoundingSphere();
      }
      ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(ci);
  }
  intersectsSprite(e) {
    ci.center.set(0, 0, 0);
    ci.radius = 0.7071067811865476;
    ci.applyMatrix4(e.matrixWorld);
    return this.intersectsSphere(ci);
  }
  intersectsSphere(e) {
    let t = this.planes;
    let n = e.center;
    let r = -e.radius;
    for (let e = 0; e < 6; e++) {
      if (t[e].distanceToPoint(n) < r) {
        return false;
      }
    }
    return true;
  }
  intersectsBox(e) {
    let t = this.planes;
    for (let n = 0; n < 6; n++) {
      let r = t[n];
      li.x = r.normal.x > 0 ? e.max.x : e.min.x;
      li.y = r.normal.y > 0 ? e.max.y : e.min.y;
      li.z = r.normal.z > 0 ? e.max.z : e.min.z;
      if (r.distanceToPoint(li) < 0) {
        return false;
      }
    }
    return true;
  }
  containsPoint(e) {
    let t = this.planes;
    for (let n = 0; n < 6; n++) {
      if (t[n].distanceToPoint(e) < 0) {
        return false;
      }
    }
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
function di() {
  let e = null;
  let t = false;
  let n = null;
  let r = null;
  function i(t, a) {
    n(t, a);
    r = e.requestAnimationFrame(i);
  }
  return {
    start: function () {
      if (t !== true && n !== null) {
        r = e.requestAnimationFrame(i);
        t = true;
      }
    },
    stop: function () {
      e.cancelAnimationFrame(r);
      t = false;
    },
    setAnimationLoop: function (e) {
      n = e;
    },
    setContext: function (t) {
      e = t;
    }
  };
}
function fi(e) {
  let t = new WeakMap();
  function n(t, n) {
    let r = t.array;
    let i = t.usage;
    let a = r.byteLength;
    let o = e.createBuffer();
    e.bindBuffer(n, o);
    e.bufferData(n, r, i);
    t.onUploadCallback();
    let s;
    if (r instanceof Float32Array) {
      s = e.FLOAT;
    } else if (r instanceof Uint16Array) {
      s = t.isFloat16BufferAttribute ? e.HALF_FLOAT : e.UNSIGNED_SHORT;
    } else if (r instanceof Int16Array) {
      s = e.SHORT;
    } else if (r instanceof Uint32Array) {
      s = e.UNSIGNED_INT;
    } else if (r instanceof Int32Array) {
      s = e.INT;
    } else if (r instanceof Int8Array) {
      s = e.BYTE;
    } else if (r instanceof Uint8Array) {
      s = e.UNSIGNED_BYTE;
    } else if (r instanceof Uint8ClampedArray) {
      s = e.UNSIGNED_BYTE;
    } else {
      throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: ${r}`);
    }
    return {
      buffer: o,
      type: s,
      bytesPerElement: r.BYTES_PER_ELEMENT,
      version: t.version,
      size: a
    };
  }
  function r(t, n, r) {
    let i = n.array;
    let a = n.updateRanges;
    e.bindBuffer(r, t);
    if (a.length === 0) {
      e.bufferSubData(r, 0, i);
    } else {
      a.sort((e, t) => e.start - t.start);
      let t = 0;
      for (let e = 1; e < a.length; e++) {
        let n = a[t];
        let r = a[e];
        if (r.start <= n.start + n.count + 1) {
          n.count = Math.max(n.count, r.start + r.count - n.start);
        } else {
          ++t;
          a[t] = r;
        }
      }
      a.length = t + 1;
      for (let t = 0, n = a.length; t < n; t++) {
        let n = a[t];
        e.bufferSubData(r, n.start * i.BYTES_PER_ELEMENT, i, n.start, n.count);
      }
      n.clearUpdateRanges();
    }
    n.onUploadCallback();
  }
  function i(e) {
    if (e.isInterleavedBufferAttribute) {
      e = e.data;
    }
    return t.get(e);
  }
  function a(n) {
    if (n.isInterleavedBufferAttribute) {
      n = n.data;
    }
    let r = t.get(n);
    if (r) {
      e.deleteBuffer(r.buffer);
      t.delete(n);
    }
  }
  function o(e, i) {
    if (e.isInterleavedBufferAttribute) {
      e = e.data;
    }
    if (e.isGLBufferAttribute) {
      let n = t.get(e);
      if (!n || n.version < e.version) {
        t.set(e, {
          buffer: e.buffer,
          type: e.type,
          bytesPerElement: e.elementSize,
          version: e.version
        });
      }
      return;
    }
    let a = t.get(e);
    if (a === undefined) {
      t.set(e, n(e, i));
    } else if (a.version < e.version) {
      if (a.size !== e.array.byteLength) {
        throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);
      }
      r(a.buffer, e, i);
      a.version = e.version;
    }
  }
  return {
    get: i,
    remove: a,
    update: o
  };
}
var pi = class e extends Tr {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super();
    this.type = `PlaneGeometry`;
    this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: r
    };
    let i = e / 2;
    let a = t / 2;
    let o = Math.floor(n);
    let s = Math.floor(r);
    let c = o + 1;
    let l = s + 1;
    let u = e / o;
    let d = t / s;
    let f = [];
    let p = [];
    let m = [];
    let h = [];
    for (let e = 0; e < l; e++) {
      let t = e * d - a;
      for (let n = 0; n < c; n++) {
        let r = n * u - i;
        p.push(r, -t, 0);
        m.push(0, 0, 1);
        h.push(n / o);
        h.push(1 - e / s);
      }
    }
    for (let e = 0; e < s; e++) {
      for (let t = 0; t < o; t++) {
        let n = t + c * e;
        let r = t + c * (e + 1);
        let i = t + 1 + c * (e + 1);
        let a = t + 1 + c * e;
        f.push(n, r, a);
        f.push(r, i, a);
      }
    }
    this.setIndex(f);
    this.setAttribute(`position`, new _r(p, 3));
    this.setAttribute(`normal`, new _r(m, 3));
    this.setAttribute(`uv`, new _r(h, 2));
  }
  copy(e) {
    super.copy(e);
    this.parameters = Object.assign({}, e.parameters);
    return this;
  }
  static fromJSON(t) {
    return new e(t.width, t.height, t.widthSegments, t.heightSegments);
  }
};
var Y = {
  alphahash_fragment: `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  alphahash_pars_fragment: `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  alphamap_fragment: `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  alphamap_pars_fragment: `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  alphatest_fragment: `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
  alphatest_pars_fragment: `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  aomap_fragment: `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT )
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN )
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  aomap_pars_fragment: `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  batching_pars_vertex: `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,
  batching_vertex: `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
  begin_vertex: `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  beginnormal_vertex: `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  bsdfs: `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  iridescence_fragment: `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  bumpmap_pars_fragment: `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  clipping_planes_fragment: `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,
  clipping_planes_pars_fragment: `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  clipping_planes_pars_vertex: `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  clipping_planes_vertex: `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  color_fragment: `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  color_pars_fragment: `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  color_pars_vertex: `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,
  color_vertex: `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,
  common: `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  cube_uv_reflection_fragment: `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  defaultnormal_vertex: `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  displacementmap_pars_vertex: `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  displacementmap_vertex: `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  emissivemap_fragment: `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  emissivemap_pars_fragment: `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  colorspace_fragment: `gl_FragColor = linearToOutputTexel( gl_FragColor );`,
  colorspace_pars_fragment: `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  envmap_fragment: `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  envmap_common_pars_fragment: `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif

#endif`,
  envmap_pars_fragment: `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  envmap_pars_vertex: `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  envmap_physical_pars_fragment: `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,
  envmap_vertex: `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  fog_vertex: `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  fog_pars_vertex: `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  fog_fragment: `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  fog_pars_fragment: `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  gradientmap_pars_fragment: `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  lightmap_pars_fragment: `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  lights_lambert_fragment: `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  lights_lambert_pars_fragment: `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  lights_pars_begin: `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  lights_toon_fragment: `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  lights_toon_pars_fragment: `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  lights_phong_fragment: `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  lights_phong_pars_fragment: `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  lights_physical_fragment: `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
  lights_physical_pars_fragment: `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  lights_fragment_begin: `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  lights_fragment_maps: `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  lights_fragment_end: `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  logdepthbuf_fragment: `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  logdepthbuf_pars_fragment: `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  logdepthbuf_pars_vertex: `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  logdepthbuf_vertex: `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
  map_fragment: `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  map_pars_fragment: `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  map_particle_fragment: `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  map_particle_pars_fragment: `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  metalnessmap_fragment: `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  metalnessmap_pars_fragment: `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  morphinstance_vertex: `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
  morphcolor_vertex: `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  morphnormal_vertex: `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  morphtarget_pars_vertex: `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,
  morphtarget_vertex: `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  normal_fragment_begin: `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  normal_fragment_maps: `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  normal_pars_fragment: `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  normal_pars_vertex: `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  normal_vertex: `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  normalmap_pars_fragment: `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  clearcoat_normal_fragment_begin: `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  clearcoat_normal_fragment_maps: `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  clearcoat_pars_fragment: `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  iridescence_pars_fragment: `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  opaque_fragment: `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  packing: `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
  premultiplied_alpha_fragment: `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  project_vertex: `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  dithering_fragment: `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  dithering_pars_fragment: `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  roughnessmap_fragment: `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  roughnessmap_pars_fragment: `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  shadowmap_pars_fragment: `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;

		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,
  shadowmap_pars_vertex: `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  shadowmap_vertex: `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  shadowmask_pars_fragment: `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  skinbase_vertex: `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  skinning_pars_vertex: `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  skinning_vertex: `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  skinnormal_vertex: `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  specularmap_fragment: `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  specularmap_pars_fragment: `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  tonemapping_fragment: `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  tonemapping_pars_fragment: `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  transmission_fragment: `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  transmission_pars_fragment: `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;

				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;

				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;

		#else

			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );

		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  uv_pars_fragment: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  uv_pars_vertex: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  uv_vertex: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  worldpos_vertex: `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,
  background_vert: `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  background_frag: `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  backgroundCube_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  backgroundCube_frag: `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  cube_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  cube_frag: `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  depth_vert: `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  depth_frag: `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,
  distanceRGBA_vert: `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  distanceRGBA_frag: `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  equirect_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  equirect_frag: `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  linedashed_vert: `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  linedashed_frag: `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  meshbasic_vert: `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  meshbasic_frag: `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  meshlambert_vert: `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  meshlambert_frag: `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  meshmatcap_vert: `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  meshmatcap_frag: `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  meshnormal_vert: `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  meshnormal_frag: `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  meshphong_vert: `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  meshphong_frag: `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  meshphysical_vert: `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  meshphysical_frag: `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  meshtoon_vert: `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  meshtoon_frag: `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  points_vert: `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  points_frag: `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  shadow_vert: `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  shadow_frag: `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  sprite_vert: `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  sprite_frag: `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`
};
var X = {
  common: {
    diffuse: {
      value: new q(16777215)
    },
    opacity: {
      value: 1
    },
    map: {
      value: null
    },
    mapTransform: {
      value: new U()
    },
    alphaMap: {
      value: null
    },
    alphaMapTransform: {
      value: new U()
    },
    alphaTest: {
      value: 0
    }
  },
  specularmap: {
    specularMap: {
      value: null
    },
    specularMapTransform: {
      value: new U()
    }
  },
  envmap: {
    envMap: {
      value: null
    },
    envMapRotation: {
      value: new U()
    },
    flipEnvMap: {
      value: -1
    },
    reflectivity: {
      value: 1
    },
    ior: {
      value: 1.5
    },
    refractionRatio: {
      value: 0.98
    }
  },
  aomap: {
    aoMap: {
      value: null
    },
    aoMapIntensity: {
      value: 1
    },
    aoMapTransform: {
      value: new U()
    }
  },
  lightmap: {
    lightMap: {
      value: null
    },
    lightMapIntensity: {
      value: 1
    },
    lightMapTransform: {
      value: new U()
    }
  },
  bumpmap: {
    bumpMap: {
      value: null
    },
    bumpMapTransform: {
      value: new U()
    },
    bumpScale: {
      value: 1
    }
  },
  normalmap: {
    normalMap: {
      value: null
    },
    normalMapTransform: {
      value: new U()
    },
    normalScale: {
      value: new H(1, 1)
    }
  },
  displacementmap: {
    displacementMap: {
      value: null
    },
    displacementMapTransform: {
      value: new U()
    },
    displacementScale: {
      value: 1
    },
    displacementBias: {
      value: 0
    }
  },
  emissivemap: {
    emissiveMap: {
      value: null
    },
    emissiveMapTransform: {
      value: new U()
    }
  },
  metalnessmap: {
    metalnessMap: {
      value: null
    },
    metalnessMapTransform: {
      value: new U()
    }
  },
  roughnessmap: {
    roughnessMap: {
      value: null
    },
    roughnessMapTransform: {
      value: new U()
    }
  },
  gradientmap: {
    gradientMap: {
      value: null
    }
  },
  fog: {
    fogDensity: {
      value: 0.00025
    },
    fogNear: {
      value: 1
    },
    fogFar: {
      value: 2000
    },
    fogColor: {
      value: new q(16777215)
    }
  },
  lights: {
    ambientLightColor: {
      value: []
    },
    lightProbe: {
      value: []
    },
    directionalLights: {
      value: [],
      properties: {
        direction: {},
        color: {}
      }
    },
    directionalLightShadows: {
      value: [],
      properties: {
        shadowIntensity: 1,
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {}
      }
    },
    directionalShadowMap: {
      value: []
    },
    directionalShadowMatrix: {
      value: []
    },
    spotLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        direction: {},
        distance: {},
        coneCos: {},
        penumbraCos: {},
        decay: {}
      }
    },
    spotLightShadows: {
      value: [],
      properties: {
        shadowIntensity: 1,
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {}
      }
    },
    spotLightMap: {
      value: []
    },
    spotShadowMap: {
      value: []
    },
    spotLightMatrix: {
      value: []
    },
    pointLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        decay: {},
        distance: {}
      }
    },
    pointLightShadows: {
      value: [],
      properties: {
        shadowIntensity: 1,
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {},
        shadowCameraNear: {},
        shadowCameraFar: {}
      }
    },
    pointShadowMap: {
      value: []
    },
    pointShadowMatrix: {
      value: []
    },
    hemisphereLights: {
      value: [],
      properties: {
        direction: {},
        skyColor: {},
        groundColor: {}
      }
    },
    rectAreaLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        width: {},
        height: {}
      }
    },
    ltc_1: {
      value: null
    },
    ltc_2: {
      value: null
    }
  },
  points: {
    diffuse: {
      value: new q(16777215)
    },
    opacity: {
      value: 1
    },
    size: {
      value: 1
    },
    scale: {
      value: 1
    },
    map: {
      value: null
    },
    alphaMap: {
      value: null
    },
    alphaMapTransform: {
      value: new U()
    },
    alphaTest: {
      value: 0
    },
    uvTransform: {
      value: new U()
    }
  },
  sprite: {
    diffuse: {
      value: new q(16777215)
    },
    opacity: {
      value: 1
    },
    center: {
      value: new H(0.5, 0.5)
    },
    rotation: {
      value: 0
    },
    map: {
      value: null
    },
    mapTransform: {
      value: new U()
    },
    alphaMap: {
      value: null
    },
    alphaMapTransform: {
      value: new U()
    },
    alphaTest: {
      value: 0
    }
  }
};
var mi = {
  basic: {
    uniforms: Vr([X.common, X.specularmap, X.envmap, X.aomap, X.lightmap, X.fog]),
    vertexShader: Y.meshbasic_vert,
    fragmentShader: Y.meshbasic_frag
  },
  lambert: {
    uniforms: Vr([X.common, X.specularmap, X.envmap, X.aomap, X.lightmap, X.emissivemap, X.bumpmap, X.normalmap, X.displacementmap, X.fog, X.lights, {
      emissive: {
        value: new q(0)
      }
    }]),
    vertexShader: Y.meshlambert_vert,
    fragmentShader: Y.meshlambert_frag
  },
  phong: {
    uniforms: Vr([X.common, X.specularmap, X.envmap, X.aomap, X.lightmap, X.emissivemap, X.bumpmap, X.normalmap, X.displacementmap, X.fog, X.lights, {
      emissive: {
        value: new q(0)
      },
      specular: {
        value: new q(1118481)
      },
      shininess: {
        value: 30
      }
    }]),
    vertexShader: Y.meshphong_vert,
    fragmentShader: Y.meshphong_frag
  },
  standard: {
    uniforms: Vr([X.common, X.envmap, X.aomap, X.lightmap, X.emissivemap, X.bumpmap, X.normalmap, X.displacementmap, X.roughnessmap, X.metalnessmap, X.fog, X.lights, {
      emissive: {
        value: new q(0)
      },
      roughness: {
        value: 1
      },
      metalness: {
        value: 0
      },
      envMapIntensity: {
        value: 1
      }
    }]),
    vertexShader: Y.meshphysical_vert,
    fragmentShader: Y.meshphysical_frag
  },
  toon: {
    uniforms: Vr([X.common, X.aomap, X.lightmap, X.emissivemap, X.bumpmap, X.normalmap, X.displacementmap, X.gradientmap, X.fog, X.lights, {
      emissive: {
        value: new q(0)
      }
    }]),
    vertexShader: Y.meshtoon_vert,
    fragmentShader: Y.meshtoon_frag
  },
  matcap: {
    uniforms: Vr([X.common, X.bumpmap, X.normalmap, X.displacementmap, X.fog, {
      matcap: {
        value: null
      }
    }]),
    vertexShader: Y.meshmatcap_vert,
    fragmentShader: Y.meshmatcap_frag
  },
  points: {
    uniforms: Vr([X.points, X.fog]),
    vertexShader: Y.points_vert,
    fragmentShader: Y.points_frag
  },
  dashed: {
    uniforms: Vr([X.common, X.fog, {
      scale: {
        value: 1
      },
      dashSize: {
        value: 1
      },
      totalSize: {
        value: 2
      }
    }]),
    vertexShader: Y.linedashed_vert,
    fragmentShader: Y.linedashed_frag
  },
  depth: {
    uniforms: Vr([X.common, X.displacementmap]),
    vertexShader: Y.depth_vert,
    fragmentShader: Y.depth_frag
  },
  normal: {
    uniforms: Vr([X.common, X.bumpmap, X.normalmap, X.displacementmap, {
      opacity: {
        value: 1
      }
    }]),
    vertexShader: Y.meshnormal_vert,
    fragmentShader: Y.meshnormal_frag
  },
  sprite: {
    uniforms: Vr([X.sprite, X.fog]),
    vertexShader: Y.sprite_vert,
    fragmentShader: Y.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: {
        value: new U()
      },
      t2D: {
        value: null
      },
      backgroundIntensity: {
        value: 1
      }
    },
    vertexShader: Y.background_vert,
    fragmentShader: Y.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: {
        value: null
      },
      flipEnvMap: {
        value: -1
      },
      backgroundBlurriness: {
        value: 0
      },
      backgroundIntensity: {
        value: 1
      },
      backgroundRotation: {
        value: new U()
      }
    },
    vertexShader: Y.backgroundCube_vert,
    fragmentShader: Y.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: {
        value: null
      },
      tFlip: {
        value: -1
      },
      opacity: {
        value: 1
      }
    },
    vertexShader: Y.cube_vert,
    fragmentShader: Y.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: {
        value: null
      }
    },
    vertexShader: Y.equirect_vert,
    fragmentShader: Y.equirect_frag
  },
  distanceRGBA: {
    uniforms: Vr([X.common, X.displacementmap, {
      referencePosition: {
        value: new G()
      },
      nearDistance: {
        value: 1
      },
      farDistance: {
        value: 1000
      }
    }]),
    vertexShader: Y.distanceRGBA_vert,
    fragmentShader: Y.distanceRGBA_frag
  },
  shadow: {
    uniforms: Vr([X.lights, X.fog, {
      color: {
        value: new q(0)
      },
      opacity: {
        value: 1
      }
    }]),
    vertexShader: Y.shadow_vert,
    fragmentShader: Y.shadow_frag
  }
};
mi.physical = {
  uniforms: Vr([mi.standard.uniforms, {
    clearcoat: {
      value: 0
    },
    clearcoatMap: {
      value: null
    },
    clearcoatMapTransform: {
      value: new U()
    },
    clearcoatNormalMap: {
      value: null
    },
    clearcoatNormalMapTransform: {
      value: new U()
    },
    clearcoatNormalScale: {
      value: new H(1, 1)
    },
    clearcoatRoughness: {
      value: 0
    },
    clearcoatRoughnessMap: {
      value: null
    },
    clearcoatRoughnessMapTransform: {
      value: new U()
    },
    dispersion: {
      value: 0
    },
    iridescence: {
      value: 0
    },
    iridescenceMap: {
      value: null
    },
    iridescenceMapTransform: {
      value: new U()
    },
    iridescenceIOR: {
      value: 1.3
    },
    iridescenceThicknessMinimum: {
      value: 100
    },
    iridescenceThicknessMaximum: {
      value: 400
    },
    iridescenceThicknessMap: {
      value: null
    },
    iridescenceThicknessMapTransform: {
      value: new U()
    },
    sheen: {
      value: 0
    },
    sheenColor: {
      value: new q(0)
    },
    sheenColorMap: {
      value: null
    },
    sheenColorMapTransform: {
      value: new U()
    },
    sheenRoughness: {
      value: 1
    },
    sheenRoughnessMap: {
      value: null
    },
    sheenRoughnessMapTransform: {
      value: new U()
    },
    transmission: {
      value: 0
    },
    transmissionMap: {
      value: null
    },
    transmissionMapTransform: {
      value: new U()
    },
    transmissionSamplerSize: {
      value: new H()
    },
    transmissionSamplerMap: {
      value: null
    },
    thickness: {
      value: 0
    },
    thicknessMap: {
      value: null
    },
    thicknessMapTransform: {
      value: new U()
    },
    attenuationDistance: {
      value: 0
    },
    attenuationColor: {
      value: new q(0)
    },
    specularColor: {
      value: new q(1, 1, 1)
    },
    specularColorMap: {
      value: null
    },
    specularColorMapTransform: {
      value: new U()
    },
    specularIntensity: {
      value: 1
    },
    specularIntensityMap: {
      value: null
    },
    specularIntensityMapTransform: {
      value: new U()
    },
    anisotropyVector: {
      value: new H()
    },
    anisotropyMap: {
      value: null
    },
    anisotropyMapTransform: {
      value: new U()
    }
  }]),
  vertexShader: Y.meshphysical_vert,
  fragmentShader: Y.meshphysical_frag
};
var hi = {
  r: 0,
  b: 0,
  g: 0
};
var gi = new En();
var _i = new K();
function vi(e, t, n, r, i, a, o) {
  let s = new q(0);
  let c = a === true ? 0 : 1;
  let l;
  let u;
  let d = null;
  let f = 0;
  let p = null;
  function m(e) {
    let r = e.isScene === true ? e.background : null;
    if (r && r.isTexture) {
      r = (e.backgroundBlurriness > 0 ? n : t).get(r);
    }
    return r;
  }
  function h(t) {
    let n = false;
    let i = m(t);
    if (i === null) {
      _(s, c);
    } else if (i && i.isColor) {
      _(i, 1);
      n = true;
    }
    let a = e.xr.getEnvironmentBlendMode();
    if (a === `additive`) {
      r.buffers.color.setClear(0, 0, 0, 1, o);
    } else if (a === `alpha-blend`) {
      r.buffers.color.setClear(0, 0, 0, 0, o);
    }
    if (e.autoClear || n) {
      r.buffers.depth.setTest(true);
      r.buffers.depth.setMask(true);
      r.buffers.color.setMask(true);
      e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil);
    }
  }
  function g(t, n) {
    let r = m(n);
    if (r && (r.isCubeTexture || r.mapping === 306)) {
      if (u === undefined) {
        u = new Lr(new J(1, 1, 1), new qr({
          name: `BackgroundCubeMaterial`,
          uniforms: Br(mi.backgroundCube.uniforms),
          vertexShader: mi.backgroundCube.vertexShader,
          fragmentShader: mi.backgroundCube.fragmentShader,
          side: 1,
          depthTest: false,
          depthWrite: false,
          fog: false
        }));
        u.geometry.deleteAttribute(`normal`);
        u.geometry.deleteAttribute(`uv`);
        u.onBeforeRender = function (e, t, n) {
          this.matrixWorld.copyPosition(n.matrixWorld);
        };
        Object.defineProperty(u.material, "envMap", {
          get: function () {
            return this.uniforms.envMap.value;
          }
        });
        i.update(u);
      }
      gi.copy(n.backgroundRotation);
      gi.x *= -1;
      gi.y *= -1;
      gi.z *= -1;
      if (r.isCubeTexture && r.isRenderTargetTexture === false) {
        gi.y *= -1;
        gi.z *= -1;
      }
      u.material.uniforms.envMap.value = r;
      u.material.uniforms.flipEnvMap.value = r.isCubeTexture && r.isRenderTargetTexture === false ? -1 : 1;
      u.material.uniforms.backgroundBlurriness.value = n.backgroundBlurriness;
      u.material.uniforms.backgroundIntensity.value = n.backgroundIntensity;
      u.material.uniforms.backgroundRotation.value.setFromMatrix4(_i.makeRotationFromEuler(gi));
      u.material.toneMapped = W.getTransfer(r.colorSpace) !== Ie;
      if (d !== r || f !== r.version || p !== e.toneMapping) {
        u.material.needsUpdate = true;
        d = r;
        f = r.version;
        p = e.toneMapping;
      }
      u.layers.enableAll();
      t.unshift(u, u.geometry, u.material, 0, 0, null);
    } else if (r && r.isTexture) {
      if (l === undefined) {
        l = new Lr(new pi(2, 2), new qr({
          name: `BackgroundMaterial`,
          uniforms: Br(mi.background.uniforms),
          vertexShader: mi.background.vertexShader,
          fragmentShader: mi.background.fragmentShader,
          side: 0,
          depthTest: false,
          depthWrite: false,
          fog: false
        }));
        l.geometry.deleteAttribute(`normal`);
        Object.defineProperty(l.material, "map", {
          get: function () {
            return this.uniforms.t2D.value;
          }
        });
        i.update(l);
      }
      l.material.uniforms.t2D.value = r;
      l.material.uniforms.backgroundIntensity.value = n.backgroundIntensity;
      l.material.toneMapped = W.getTransfer(r.colorSpace) !== Ie;
      if (r.matrixAutoUpdate === true) {
        r.updateMatrix();
      }
      l.material.uniforms.uvTransform.value.copy(r.matrix);
      if (d !== r || f !== r.version || p !== e.toneMapping) {
        l.material.needsUpdate = true;
        d = r;
        f = r.version;
        p = e.toneMapping;
      }
      l.layers.enableAll();
      t.unshift(l, l.geometry, l.material, 0, 0, null);
    }
  }
  function _(t, n) {
    t.getRGB(hi, Ur(e));
    r.buffers.color.setClear(hi.r, hi.g, hi.b, n, o);
  }
  return {
    getClearColor: function () {
      return s;
    },
    setClearColor: function (e, t = 1) {
      s.set(e);
      c = t;
      _(s, c);
    },
    getClearAlpha: function () {
      return c;
    },
    setClearAlpha: function (e) {
      c = e;
      _(s, c);
    },
    render: h,
    addToRenderList: g
  };
}
function yi(e, t) {
  let n = e.getParameter(e.MAX_VERTEX_ATTRIBS);
  let r = {};
  let i = f(null);
  let a = i;
  let o = false;
  function s(n, r, i, s, c) {
    let u = false;
    let f = d(s, i, r);
    if (a !== f) {
      a = f;
      l(a.object);
    }
    u = p(n, s, i, c);
    if (u) {
      m(n, s, i, c);
    }
    if (c !== null) {
      t.update(c, e.ELEMENT_ARRAY_BUFFER);
    }
    if (u || o) {
      o = false;
      b(n, r, i, s);
      if (c !== null) {
        e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.get(c).buffer);
      }
    }
  }
  function c() {
    return e.createVertexArray();
  }
  function l(t) {
    return e.bindVertexArray(t);
  }
  function u(t) {
    return e.deleteVertexArray(t);
  }
  function d(e, t, n) {
    let i = n.wireframe === true;
    let a = r[e.id];
    if (a === undefined) {
      a = {};
      r[e.id] = a;
    }
    let o = a[t.id];
    if (o === undefined) {
      o = {};
      a[t.id] = o;
    }
    let s = o[i];
    if (s === undefined) {
      s = f(c());
      o[i] = s;
    }
    return s;
  }
  function f(e) {
    let t = [];
    let r = [];
    let i = [];
    for (let e = 0; e < n; e++) {
      t[e] = 0;
      r[e] = 0;
      i[e] = 0;
    }
    return {
      geometry: null,
      program: null,
      wireframe: false,
      newAttributes: t,
      enabledAttributes: r,
      attributeDivisors: i,
      object: e,
      attributes: {},
      index: null
    };
  }
  function p(e, t, n, r) {
    let i = a.attributes;
    let o = t.attributes;
    let s = 0;
    let c = n.getAttributes();
    for (let t in c) {
      if (c[t].location >= 0) {
        let n = i[t];
        let r = o[t];
        if (r === undefined) {
          if (t === `instanceMatrix` && e.instanceMatrix) {
            r = e.instanceMatrix;
          }
          if (t === `instanceColor` && e.instanceColor) {
            r = e.instanceColor;
          }
        }
        if (n === undefined || n.attribute !== r || r && n.data !== r.data) {
          return true;
        }
        s++;
      }
    }
    return a.attributesNum !== s || a.index !== r;
  }
  function m(e, t, n, r) {
    let i = {};
    let o = t.attributes;
    let s = 0;
    let c = n.getAttributes();
    for (let t in c) {
      if (c[t].location >= 0) {
        let n = o[t];
        if (n === undefined) {
          if (t === `instanceMatrix` && e.instanceMatrix) {
            n = e.instanceMatrix;
          }
          if (t === `instanceColor` && e.instanceColor) {
            n = e.instanceColor;
          }
        }
        let r = {
          attribute: n
        };
        if (n && n.data) {
          r.data = n.data;
        }
        i[t] = r;
        s++;
      }
    }
    a.attributes = i;
    a.attributesNum = s;
    a.index = r;
  }
  function h() {
    let e = a.newAttributes;
    for (let t = 0, n = e.length; t < n; t++) {
      e[t] = 0;
    }
  }
  function g(e) {
    _(e, 0);
  }
  function _(t, n) {
    let r = a.newAttributes;
    let i = a.enabledAttributes;
    let o = a.attributeDivisors;
    r[t] = 1;
    if (i[t] === 0) {
      e.enableVertexAttribArray(t);
      i[t] = 1;
    }
    if (o[t] !== n) {
      e.vertexAttribDivisor(t, n);
      o[t] = n;
    }
  }
  function v() {
    let t = a.newAttributes;
    let n = a.enabledAttributes;
    for (let r = 0, i = n.length; r < i; r++) {
      if (n[r] !== t[r]) {
        e.disableVertexAttribArray(r);
        n[r] = 0;
      }
    }
  }
  function y(t, n, r, i, a, o, s) {
    if (s === true) {
      e.vertexAttribIPointer(t, n, r, a, o);
    } else {
      e.vertexAttribPointer(t, n, r, i, a, o);
    }
  }
  function b(n, r, i, a) {
    h();
    let o = a.attributes;
    let s = i.getAttributes();
    let c = r.defaultAttributeValues;
    for (let r in s) {
      let i = s[r];
      if (i.location >= 0) {
        let s = o[r];
        if (s === undefined) {
          if (r === `instanceMatrix` && n.instanceMatrix) {
            s = n.instanceMatrix;
          }
          if (r === `instanceColor` && n.instanceColor) {
            s = n.instanceColor;
          }
        }
        if (s !== undefined) {
          let r = s.normalized;
          let o = s.itemSize;
          let c = t.get(s);
          if (c === undefined) {
            continue;
          }
          let l = c.buffer;
          let u = c.type;
          let d = c.bytesPerElement;
          let f = u === e.INT || u === e.UNSIGNED_INT || s.gpuType === 1013;
          if (s.isInterleavedBufferAttribute) {
            let t = s.data;
            let c = t.stride;
            let p = s.offset;
            if (t.isInstancedInterleavedBuffer) {
              for (let e = 0; e < i.locationSize; e++) {
                _(i.location + e, t.meshPerAttribute);
              }
              if (n.isInstancedMesh !== true && a._maxInstanceCount === undefined) {
                a._maxInstanceCount = t.meshPerAttribute * t.count;
              }
            } else {
              for (let e = 0; e < i.locationSize; e++) {
                g(i.location + e);
              }
            }
            e.bindBuffer(e.ARRAY_BUFFER, l);
            for (let e = 0; e < i.locationSize; e++) {
              y(i.location + e, o / i.locationSize, u, r, c * d, (p + o / i.locationSize * e) * d, f);
            }
          } else {
            if (s.isInstancedBufferAttribute) {
              for (let e = 0; e < i.locationSize; e++) {
                _(i.location + e, s.meshPerAttribute);
              }
              if (n.isInstancedMesh !== true && a._maxInstanceCount === undefined) {
                a._maxInstanceCount = s.meshPerAttribute * s.count;
              }
            } else {
              for (let e = 0; e < i.locationSize; e++) {
                g(i.location + e);
              }
            }
            e.bindBuffer(e.ARRAY_BUFFER, l);
            for (let e = 0; e < i.locationSize; e++) {
              y(i.location + e, o / i.locationSize, u, r, o * d, o / i.locationSize * e * d, f);
            }
          }
        } else if (c !== undefined) {
          let t = c[r];
          if (t !== undefined) {
            switch (t.length) {
              case 2:
                e.vertexAttrib2fv(i.location, t);
                break;
              case 3:
                e.vertexAttrib3fv(i.location, t);
                break;
              case 4:
                e.vertexAttrib4fv(i.location, t);
                break;
              default:
                e.vertexAttrib1fv(i.location, t);
            }
          }
        }
      }
    }
    v();
  }
  function x() {
    w();
    for (let e in r) {
      let t = r[e];
      for (let e in t) {
        let n = t[e];
        for (let e in n) {
          u(n[e].object);
          delete n[e];
        }
        delete t[e];
      }
      delete r[e];
    }
  }
  function S(e) {
    if (r[e.id] === undefined) {
      return;
    }
    let t = r[e.id];
    for (let e in t) {
      let n = t[e];
      for (let e in n) {
        u(n[e].object);
        delete n[e];
      }
      delete t[e];
    }
    delete r[e.id];
  }
  function C(e) {
    for (let t in r) {
      let n = r[t];
      if (n[e.id] === undefined) {
        continue;
      }
      let i = n[e.id];
      for (let e in i) {
        u(i[e].object);
        delete i[e];
      }
      delete n[e.id];
    }
  }
  function w() {
    T();
    o = true;
    if (a !== i) {
      a = i;
      l(a.object);
    }
  }
  function T() {
    i.geometry = null;
    i.program = null;
    i.wireframe = false;
  }
  return {
    setup: s,
    reset: w,
    resetDefaultState: T,
    dispose: x,
    releaseStatesOfGeometry: S,
    releaseStatesOfProgram: C,
    initAttributes: h,
    enableAttribute: g,
    disableUnusedAttributes: v
  };
}
function bi(e, t, n) {
  let r;
  function i(e) {
    r = e;
  }
  function a(t, i) {
    e.drawArrays(r, t, i);
    n.update(i, r, 1);
  }
  function o(t, i, a) {
    if (a !== 0) {
      e.drawArraysInstanced(r, t, i, a);
      n.update(i, r, a);
    }
  }
  function s(e, i, a) {
    if (a === 0) {
      return;
    }
    t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r, e, 0, i, 0, a);
    let o = 0;
    for (let e = 0; e < a; e++) {
      o += i[e];
    }
    n.update(o, r, 1);
  }
  function c(e, i, a, s) {
    if (a === 0) {
      return;
    }
    let c = t.get(`WEBGL_multi_draw`);
    if (c === null) {
      for (let t = 0; t < e.length; t++) {
        o(e[t], i[t], s[t]);
      }
    } else {
      c.multiDrawArraysInstancedWEBGL(r, e, 0, i, 0, s, 0, a);
      let t = 0;
      for (let e = 0; e < a; e++) {
        t += i[e] * s[e];
      }
      n.update(t, r, 1);
    }
  }
  this.setMode = i;
  this.render = a;
  this.renderInstances = o;
  this.renderMultiDraw = s;
  this.renderMultiDrawInstances = c;
}
function xi(e, t, n, r) {
  let i;
  function a() {
    if (i !== undefined) {
      return i;
    }
    if (t.has(`EXT_texture_filter_anisotropic`) === true) {
      let n = t.get(`EXT_texture_filter_anisotropic`);
      i = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else {
      i = 0;
    }
    return i;
  }
  function o(t) {
    return t === 1023 || r.convert(t) === e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT);
  }
  function s(n) {
    let i = n === 1016 && (t.has(`EXT_color_buffer_half_float`) || t.has(`EXT_color_buffer_float`));
    return n === 1009 || r.convert(n) === e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE) || n === 1015 || !!i;
  }
  function c(t) {
    if (t === `highp`) {
      if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0) {
        return `highp`;
      }
      t = `mediump`;
    }
    if (t === `mediump` && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0) {
      return `mediump`;
    } else {
      return `lowp`;
    }
  }
  let l = n.precision === undefined ? `highp` : n.precision;
  let u = c(l);
  if (u !== l) {
    console.warn(`THREE.WebGLRenderer:`, l, `not supported, using`, u, `instead.`);
    l = u;
  }
  let d = n.logarithmicDepthBuffer === true;
  let f = n.reverseDepthBuffer === true && t.has(`EXT_clip_control`);
  let p = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);
  let m = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
  let h = e.getParameter(e.MAX_TEXTURE_SIZE);
  let g = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE);
  let _ = e.getParameter(e.MAX_VERTEX_ATTRIBS);
  let v = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS);
  let y = e.getParameter(e.MAX_VARYING_VECTORS);
  let b = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS);
  let x = m > 0;
  let S = e.getParameter(e.MAX_SAMPLES);
  return {
    isWebGL2: true,
    getMaxAnisotropy: a,
    getMaxPrecision: c,
    textureFormatReadable: o,
    textureTypeReadable: s,
    precision: l,
    logarithmicDepthBuffer: d,
    reverseDepthBuffer: f,
    maxTextures: p,
    maxVertexTextures: m,
    maxTextureSize: h,
    maxCubemapSize: g,
    maxAttributes: _,
    maxVertexUniforms: v,
    maxVaryings: y,
    maxFragmentUniforms: b,
    vertexTextures: x,
    maxSamples: S
  };
}
function Si(e) {
  let t = this;
  let n = null;
  let r = 0;
  let i = false;
  let a = false;
  let o = new si();
  let s = new U();
  let c = {
    value: null,
    needsUpdate: false
  };
  this.uniform = c;
  this.numPlanes = 0;
  this.numIntersection = 0;
  this.init = function (e, t) {
    let n = e.length !== 0 || t || r !== 0 || i;
    i = t;
    r = e.length;
    return n;
  };
  this.beginShadows = function () {
    a = true;
    u(null);
  };
  this.endShadows = function () {
    a = false;
  };
  this.setGlobalState = function (e, t) {
    n = u(e, t, 0);
  };
  this.setState = function (t, o, s) {
    let d = t.clippingPlanes;
    let f = t.clipIntersection;
    let p = t.clipShadows;
    let m = e.get(t);
    if (!i || d === null || d.length === 0 || a && !p) {
      if (a) {
        u(null);
      } else {
        l();
      }
    } else {
      let e = a ? 0 : r;
      let t = e * 4;
      let i = m.clippingState || null;
      c.value = i;
      i = u(d, o, t, s);
      for (let e = 0; e !== t; ++e) {
        i[e] = n[e];
      }
      m.clippingState = i;
      this.numIntersection = f ? this.numPlanes : 0;
      this.numPlanes += e;
    }
  };
  function l() {
    if (c.value !== n) {
      c.value = n;
      c.needsUpdate = r > 0;
    }
    t.numPlanes = r;
    t.numIntersection = 0;
  }
  function u(e, n, r, i) {
    let a = e === null ? 0 : e.length;
    let l = null;
    if (a !== 0) {
      l = c.value;
      if (i !== true || l === null) {
        let t = r + a * 4;
        let i = n.matrixWorldInverse;
        s.getNormalMatrix(i);
        if (l === null || l.length < t) {
          l = new Float32Array(t);
        }
        for (let t = 0, n = r; t !== a; ++t, n += 4) {
          o.copy(e[t]).applyMatrix4(i, s);
          o.normal.toArray(l, n);
          l[n + 3] = o.constant;
        }
      }
      c.value = l;
      c.needsUpdate = true;
    }
    t.numPlanes = a;
    t.numIntersection = 0;
    return l;
  }
}
function Ci(e) {
  let t = new WeakMap();
  function n(e, t) {
    if (t === 303) {
      e.mapping = 301;
    } else if (t === 304) {
      e.mapping = 302;
    }
    return e;
  }
  function r(r) {
    if (r && r.isTexture) {
      let a = r.mapping;
      if (a === 303 || a === 304) {
        if (t.has(r)) {
          let e = t.get(r).texture;
          return n(e, r.mapping);
        }
        {
          let a = r.image;
          if (a && a.height > 0) {
            let o = new ri(a.height);
            o.fromEquirectangularTexture(e, r);
            t.set(r, o);
            r.addEventListener(`dispose`, i);
            return n(o.texture, r.mapping);
          }
          return null;
        }
      }
    }
    return r;
  }
  function i(e) {
    let n = e.target;
    n.removeEventListener(`dispose`, i);
    let r = t.get(n);
    if (r !== undefined) {
      t.delete(n);
      r.dispose();
    }
  }
  function a() {
    t = new WeakMap();
  }
  return {
    get: r,
    dispose: a
  };
}
var wi = class extends Jr {
  constructor(e = -1, t = 1, n = 1, r = -1, i = 0.1, a = 2000) {
    super();
    this.isOrthographicCamera = true;
    this.type = `OrthographicCamera`;
    this.zoom = 1;
    this.view = null;
    this.left = e;
    this.right = t;
    this.top = n;
    this.bottom = r;
    this.near = i;
    this.far = a;
    this.updateProjectionMatrix();
  }
  copy(e, t) {
    super.copy(e, t);
    this.left = e.left;
    this.right = e.right;
    this.top = e.top;
    this.bottom = e.bottom;
    this.near = e.near;
    this.far = e.far;
    this.zoom = e.zoom;
    this.view = e.view === null ? null : Object.assign({}, e.view);
    return this;
  }
  setViewOffset(e, t, n, r, i, a) {
    if (this.view === null) {
      this.view = {
        enabled: true,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      };
    }
    this.view.enabled = true;
    this.view.fullWidth = e;
    this.view.fullHeight = t;
    this.view.offsetX = n;
    this.view.offsetY = r;
    this.view.width = i;
    this.view.height = a;
    this.updateProjectionMatrix();
  }
  clearViewOffset() {
    if (this.view !== null) {
      this.view.enabled = false;
    }
    this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    let e = (this.right - this.left) / (this.zoom * 2);
    let t = (this.top - this.bottom) / (this.zoom * 2);
    let n = (this.right + this.left) / 2;
    let r = (this.top + this.bottom) / 2;
    let i = n - e;
    let a = n + e;
    let o = r + t;
    let s = r - t;
    if (this.view !== null && this.view.enabled) {
      let e = (this.right - this.left) / this.view.fullWidth / this.zoom;
      let t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      i += e * this.view.offsetX;
      a = i + e * this.view.width;
      o -= t * this.view.offsetY;
      s = o - t * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(i, a, o, s, this.near, this.far, this.coordinateSystem);
    this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    let t = super.toJSON(e);
    t.object.zoom = this.zoom;
    t.object.left = this.left;
    t.object.right = this.right;
    t.object.top = this.top;
    t.object.bottom = this.bottom;
    t.object.near = this.near;
    t.object.far = this.far;
    if (this.view !== null) {
      t.object.view = Object.assign({}, this.view);
    }
    return t;
  }
};
var Ti = 4;
var Ei = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582];
var Di = 20;
var Oi = new wi();
var ki = new q();
var Ai = null;
var ji = 0;
var Mi = 0;
var Ni = false;
var Pi = (1 + Math.sqrt(5)) / 2;
var Fi = 1 / Pi;
var Ii = [new G(-Pi, Fi, 0), new G(Pi, Fi, 0), new G(-Fi, 0, Pi), new G(Fi, 0, Pi), new G(0, Pi, -Fi), new G(0, Pi, Fi), new G(-1, 1, -1), new G(1, 1, -1), new G(-1, 1, 1), new G(1, 1, 1)];
var Li = class {
  constructor(e) {
    this._renderer = e;
    this._pingPongRenderTarget = null;
    this._lodMax = 0;
    this._cubeSize = 0;
    this._lodPlanes = [];
    this._sizeLods = [];
    this._sigmas = [];
    this._blurMaterial = null;
    this._cubemapMaterial = null;
    this._equirectMaterial = null;
    this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, r = 100) {
    Ai = this._renderer.getRenderTarget();
    ji = this._renderer.getActiveCubeFace();
    Mi = this._renderer.getActiveMipmapLevel();
    Ni = this._renderer.xr.enabled;
    this._renderer.xr.enabled = false;
    this._setSize(256);
    let i = this._allocateTargets();
    i.depthBuffer = true;
    this._sceneToCubeUV(e, n, r, i);
    if (t > 0) {
      this._blur(i, 0, 0, t);
    }
    this._applyPMREM(i);
    this._cleanup(i);
    return i;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    if (this._cubemapMaterial === null) {
      this._cubemapMaterial = Ui();
      this._compileMaterial(this._cubemapMaterial);
    }
  }
  compileEquirectangularShader() {
    if (this._equirectMaterial === null) {
      this._equirectMaterial = Hi();
      this._compileMaterial(this._equirectMaterial);
    }
  }
  dispose() {
    this._dispose();
    if (this._cubemapMaterial !== null) {
      this._cubemapMaterial.dispose();
    }
    if (this._equirectMaterial !== null) {
      this._equirectMaterial.dispose();
    }
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e));
    this._cubeSize = 2 ** this._lodMax;
  }
  _dispose() {
    if (this._blurMaterial !== null) {
      this._blurMaterial.dispose();
    }
    if (this._pingPongRenderTarget !== null) {
      this._pingPongRenderTarget.dispose();
    }
    for (let e = 0; e < this._lodPlanes.length; e++) {
      this._lodPlanes[e].dispose();
    }
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Ai, ji, Mi);
    this._renderer.xr.enabled = Ni;
    e.scissorTest = false;
    Bi(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    if (e.mapping === 301 || e.mapping === 302) {
      this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width);
    } else {
      this._setSize(e.image.width / 4);
    }
    Ai = this._renderer.getRenderTarget();
    ji = this._renderer.getActiveCubeFace();
    Mi = this._renderer.getActiveMipmapLevel();
    Ni = this._renderer.xr.enabled;
    this._renderer.xr.enabled = false;
    let n = t || this._allocateTargets();
    this._textureToCubeUV(e, n);
    this._applyPMREM(n);
    this._cleanup(n);
    return n;
  }
  _allocateTargets() {
    let e = Math.max(this._cubeSize, 112) * 3;
    let t = this._cubeSize * 4;
    let n = {
      magFilter: o,
      minFilter: o,
      generateMipmaps: false,
      type: g,
      format: C,
      colorSpace: Pe,
      depthBuffer: false
    };
    let r = zi(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      if (this._pingPongRenderTarget !== null) {
        this._dispose();
      }
      this._pingPongRenderTarget = zi(e, t, n);
      let {
        _lodMax: r
      } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas
      } = Ri(r));
      this._blurMaterial = Vi(r, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    let t = new Lr(this._lodPlanes[0], e);
    this._renderer.compile(t, Oi);
  }
  _sceneToCubeUV(e, t, n, r) {
    let i = new Qr(90, 1, t, n);
    let a = [1, -1, 1, 1, 1, 1];
    let o = [1, 1, 1, -1, -1, -1];
    let s = this._renderer;
    let c = s.autoClear;
    let l = s.toneMapping;
    s.getClearColor(ki);
    s.toneMapping = 0;
    s.autoClear = false;
    let u = new dr({
      name: `PMREM.Background`,
      side: 1,
      depthWrite: false,
      depthTest: false
    });
    let d = new Lr(new J(), u);
    let f = false;
    let p = e.background;
    if (p) {
      if (p.isColor) {
        u.color.copy(p);
        e.background = null;
        f = true;
      }
    } else {
      u.color.copy(ki);
      f = true;
    }
    for (let t = 0; t < 6; t++) {
      let n = t % 3;
      if (n === 0) {
        i.up.set(0, a[t], 0);
        i.lookAt(o[t], 0, 0);
      } else if (n === 1) {
        i.up.set(0, 0, a[t]);
        i.lookAt(0, o[t], 0);
      } else {
        i.up.set(0, a[t], 0);
        i.lookAt(0, 0, o[t]);
      }
      let c = this._cubeSize;
      Bi(r, n * c, t > 2 ? c : 0, c, c);
      s.setRenderTarget(r);
      if (f) {
        s.render(d, i);
      }
      s.render(e, i);
    }
    d.geometry.dispose();
    d.material.dispose();
    s.toneMapping = l;
    s.autoClear = c;
    e.background = p;
  }
  _textureToCubeUV(e, t) {
    let n = this._renderer;
    let r = e.mapping === 301 || e.mapping === 302;
    if (r) {
      if (this._cubemapMaterial === null) {
        this._cubemapMaterial = Ui();
      }
      this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === false ? -1 : 1;
    } else if (this._equirectMaterial === null) {
      this._equirectMaterial = Hi();
    }
    let i = r ? this._cubemapMaterial : this._equirectMaterial;
    let a = new Lr(this._lodPlanes[0], i);
    let o = i.uniforms;
    o.envMap.value = e;
    let s = this._cubeSize;
    Bi(t, 0, 0, s * 3, s * 2);
    n.setRenderTarget(t);
    n.render(a, Oi);
  }
  _applyPMREM(e) {
    let t = this._renderer;
    let n = t.autoClear;
    t.autoClear = false;
    let r = this._lodPlanes.length;
    for (let t = 1; t < r; t++) {
      let n = Math.sqrt(this._sigmas[t] * this._sigmas[t] - this._sigmas[t - 1] * this._sigmas[t - 1]);
      let i = Ii[(r - t - 1) % Ii.length];
      this._blur(e, t - 1, t, n, i);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, r, i) {
    let a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, n, r, `latitudinal`, i);
    this._halfBlur(a, e, n, n, r, `longitudinal`, i);
  }
  _halfBlur(e, t, n, r, i, a, o) {
    let s = this._renderer;
    let c = this._blurMaterial;
    if (a !== `latitudinal` && a !== `longitudinal`) {
      console.error(`blur direction must be either latitudinal or longitudinal!`);
    }
    let l = new Lr(this._lodPlanes[r], c);
    let u = c.uniforms;
    let d = this._sizeLods[n] - 1;
    let f = isFinite(i) ? Math.PI / (d * 2) : Math.PI * 2 / 39;
    let p = i / f;
    let m = isFinite(i) ? 1 + Math.floor(p * 3) : Di;
    if (m > Di) {
      console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Di}`);
    }
    let h = [];
    let g = 0;
    for (let e = 0; e < Di; ++e) {
      let t = e / p;
      let n = Math.exp(-t * t / 2);
      h.push(n);
      if (e === 0) {
        g += n;
      } else if (e < m) {
        g += n * 2;
      }
    }
    for (let e = 0; e < h.length; e++) {
      h[e] = h[e] / g;
    }
    u.envMap.value = e.texture;
    u.samples.value = m;
    u.weights.value = h;
    u.latitudinal.value = a === `latitudinal`;
    if (o) {
      u.poleAxis.value = o;
    }
    let {
      _lodMax: _
    } = this;
    u.dTheta.value = f;
    u.mipInt.value = _ - n;
    let v = this._sizeLods[r];
    Bi(t, v * 3 * (r > _ - Ti ? r - _ + Ti : 0), (this._cubeSize - v) * 4, v * 3, v * 2);
    s.setRenderTarget(t);
    s.render(l, Oi);
  }
};
function Ri(e) {
  let t = [];
  let n = [];
  let r = [];
  let i = e;
  let a = e - Ti + 1 + Ei.length;
  for (let o = 0; o < a; o++) {
    let a = 2 ** i;
    n.push(a);
    let s = 1 / a;
    if (o > e - Ti) {
      s = Ei[o - e + Ti - 1];
    } else if (o === 0) {
      s = 0;
    }
    r.push(s);
    let c = 1 / (a - 2);
    let l = -c;
    let u = 1 + c;
    let d = [l, l, u, l, u, u, l, l, u, u, l, u];
    let f = new Float32Array(108);
    let p = new Float32Array(72);
    let m = new Float32Array(36);
    for (let e = 0; e < 6; e++) {
      let t = e % 3 * 2 / 3 - 1;
      let n = e > 2 ? 0 : -1;
      let r = [t, n, 0, t + 2 / 3, n, 0, t + 2 / 3, n + 1, 0, t, n, 0, t + 2 / 3, n + 1, 0, t, n + 1, 0];
      f.set(r, e * 18);
      p.set(d, e * 12);
      let i = [e, e, e, e, e, e];
      m.set(i, e * 6);
    }
    let h = new Tr();
    h.setAttribute(`position`, new mr(f, 3));
    h.setAttribute(`uv`, new mr(p, 2));
    h.setAttribute(`faceIndex`, new mr(m, 1));
    t.push(h);
    if (i > Ti) {
      i--;
    }
  }
  return {
    lodPlanes: t,
    sizeLods: n,
    sigmas: r
  };
}
function zi(e, t, n) {
  let r = new Lt(e, t, n);
  r.texture.mapping = 306;
  r.texture.name = `PMREM.cubeUv`;
  r.scissorTest = true;
  return r;
}
function Bi(e, t, n, r, i) {
  e.viewport.set(t, n, r, i);
  e.scissor.set(t, n, r, i);
}
function Vi(e, t, n) {
  let r = new Float32Array(Di);
  let i = new G(0, 1, 0);
  return new qr({
    name: `SphericalGaussianBlur`,
    defines: {
      n: Di,
      CUBEUV_TEXEL_WIDTH: 1 / t,
      CUBEUV_TEXEL_HEIGHT: 1 / n,
      CUBEUV_MAX_MIP: `${e}.0`
    },
    uniforms: {
      envMap: {
        value: null
      },
      samples: {
        value: 1
      },
      weights: {
        value: r
      },
      latitudinal: {
        value: false
      },
      dTheta: {
        value: 0
      },
      mipInt: {
        value: 0
      },
      poleAxis: {
        value: i
      }
    },
    vertexShader: Wi(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: 0,
    depthTest: false,
    depthWrite: false
  });
}
function Hi() {
  return new qr({
    name: `EquirectangularToCubeUV`,
    uniforms: {
      envMap: {
        value: null
      }
    },
    vertexShader: Wi(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: 0,
    depthTest: false,
    depthWrite: false
  });
}
function Ui() {
  return new qr({
    name: `CubemapToCubeUV`,
    uniforms: {
      envMap: {
        value: null
      },
      flipEnvMap: {
        value: -1
      }
    },
    vertexShader: Wi(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: 0,
    depthTest: false,
    depthWrite: false
  });
}
function Wi() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function Gi(e) {
  let t = new WeakMap();
  let n = null;
  function r(r) {
    if (r && r.isTexture) {
      let o = r.mapping;
      let s = o === 303 || o === 304;
      let c = o === 301 || o === 302;
      if (s || c) {
        let o = t.get(r);
        let l = o === undefined ? 0 : o.texture.pmremVersion;
        if (r.isRenderTargetTexture && r.pmremVersion !== l) {
          if (n === null) {
            n = new Li(e);
          }
          o = s ? n.fromEquirectangular(r, o) : n.fromCubemap(r, o);
          o.texture.pmremVersion = r.pmremVersion;
          t.set(r, o);
          return o.texture;
        }
        if (o !== undefined) {
          return o.texture;
        }
        {
          let l = r.image;
          if (s && l && l.height > 0 || c && l && i(l)) {
            if (n === null) {
              n = new Li(e);
            }
            o = s ? n.fromEquirectangular(r) : n.fromCubemap(r);
            o.texture.pmremVersion = r.pmremVersion;
            t.set(r, o);
            r.addEventListener(`dispose`, a);
            return o.texture;
          } else {
            return null;
          }
        }
      }
    }
    return r;
  }
  function i(e) {
    let t = 0;
    for (let n = 0; n < 6; n++) {
      if (e[n] !== undefined) {
        t++;
      }
    }
    return t === 6;
  }
  function a(e) {
    let n = e.target;
    n.removeEventListener(`dispose`, a);
    let r = t.get(n);
    if (r !== undefined) {
      t.delete(n);
      r.dispose();
    }
  }
  function o() {
    t = new WeakMap();
    if (n !== null) {
      n.dispose();
      n = null;
    }
  }
  return {
    get: r,
    dispose: o
  };
}
function Ki(e) {
  let t = {};
  function n(n) {
    if (t[n] !== undefined) {
      return t[n];
    }
    let r;
    switch (n) {
      case `WEBGL_depth_texture`:
        r = e.getExtension(`WEBGL_depth_texture`) || e.getExtension(`MOZ_WEBGL_depth_texture`) || e.getExtension(`WEBKIT_WEBGL_depth_texture`);
        break;
      case `EXT_texture_filter_anisotropic`:
        r = e.getExtension(`EXT_texture_filter_anisotropic`) || e.getExtension(`MOZ_EXT_texture_filter_anisotropic`) || e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);
        break;
      case `WEBGL_compressed_texture_s3tc`:
        r = e.getExtension(`WEBGL_compressed_texture_s3tc`) || e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`) || e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);
        break;
      case `WEBGL_compressed_texture_pvrtc`:
        r = e.getExtension(`WEBGL_compressed_texture_pvrtc`) || e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);
        break;
      default:
        r = e.getExtension(n);
    }
    t[n] = r;
    return r;
  }
  return {
    has: function (e) {
      return n(e) !== null;
    },
    init: function () {
      n(`EXT_color_buffer_float`);
      n(`WEBGL_clip_cull_distance`);
      n(`OES_texture_float_linear`);
      n(`EXT_color_buffer_half_float`);
      n(`WEBGL_multisampled_render_to_texture`);
      n(`WEBGL_render_shared_exponent`);
    },
    get: function (e) {
      let t = n(e);
      if (t === null) {
        _t(`THREE.WebGLRenderer: ${e} extension not supported.`);
      }
      return t;
    }
  };
}
function qi(e, t, n, r) {
  let i = {};
  let a = new WeakMap();
  function o(e) {
    let s = e.target;
    if (s.index !== null) {
      t.remove(s.index);
    }
    for (let e in s.attributes) {
      t.remove(s.attributes[e]);
    }
    for (let e in s.morphAttributes) {
      let n = s.morphAttributes[e];
      for (let e = 0, r = n.length; e < r; e++) {
        t.remove(n[e]);
      }
    }
    s.removeEventListener(`dispose`, o);
    delete i[s.id];
    let c = a.get(s);
    if (c) {
      t.remove(c);
      a.delete(s);
    }
    r.releaseStatesOfGeometry(s);
    if (s.isInstancedBufferGeometry === true) {
      delete s._maxInstanceCount;
    }
    n.memory.geometries--;
  }
  function s(e, t) {
    if (i[t.id] !== true) {
      t.addEventListener(`dispose`, o);
      i[t.id] = true;
      n.memory.geometries++;
    }
    return t;
  }
  function c(n) {
    let r = n.attributes;
    for (let n in r) {
      t.update(r[n], e.ARRAY_BUFFER);
    }
    let i = n.morphAttributes;
    for (let n in i) {
      let r = i[n];
      for (let n = 0, i = r.length; n < i; n++) {
        t.update(r[n], e.ARRAY_BUFFER);
      }
    }
  }
  function l(e) {
    let n = [];
    let r = e.index;
    let i = e.attributes.position;
    let o = 0;
    if (r !== null) {
      let e = r.array;
      o = r.version;
      for (let t = 0, r = e.length; t < r; t += 3) {
        let r = e[t + 0];
        let i = e[t + 1];
        let a = e[t + 2];
        n.push(r, i, i, a, a, r);
      }
    } else if (i !== undefined) {
      let e = i.array;
      o = i.version;
      for (let t = 0, r = e.length / 3 - 1; t < r; t += 3) {
        let e = t + 0;
        let r = t + 1;
        let i = t + 2;
        n.push(e, r, r, i, i, e);
      }
    } else {
      return;
    }
    let s = new (pt(n) ? gr : hr)(n, 1);
    s.version = o;
    let c = a.get(e);
    if (c) {
      t.remove(c);
    }
    a.set(e, s);
  }
  function u(e) {
    let t = a.get(e);
    if (t) {
      let n = e.index;
      if (n !== null && t.version < n.version) {
        l(e);
      }
    } else {
      l(e);
    }
    return a.get(e);
  }
  return {
    get: s,
    update: c,
    getWireframeAttribute: u
  };
}
function Ji(e, t, n) {
  let r;
  function i(e) {
    r = e;
  }
  let a;
  let o;
  function s(e) {
    a = e.type;
    o = e.bytesPerElement;
  }
  function c(t, i) {
    e.drawElements(r, i, a, t * o);
    n.update(i, r, 1);
  }
  function l(t, i, s) {
    if (s !== 0) {
      e.drawElementsInstanced(r, i, a, t * o, s);
      n.update(i, r, s);
    }
  }
  function u(e, i, o) {
    if (o === 0) {
      return;
    }
    t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r, i, 0, a, e, 0, o);
    let s = 0;
    for (let e = 0; e < o; e++) {
      s += i[e];
    }
    n.update(s, r, 1);
  }
  function d(e, i, s, c) {
    if (s === 0) {
      return;
    }
    let u = t.get(`WEBGL_multi_draw`);
    if (u === null) {
      for (let t = 0; t < e.length; t++) {
        l(e[t] / o, i[t], c[t]);
      }
    } else {
      u.multiDrawElementsInstancedWEBGL(r, i, 0, a, e, 0, c, 0, s);
      let t = 0;
      for (let e = 0; e < s; e++) {
        t += i[e] * c[e];
      }
      n.update(t, r, 1);
    }
  }
  this.setMode = i;
  this.setIndex = s;
  this.render = c;
  this.renderInstances = l;
  this.renderMultiDraw = u;
  this.renderMultiDrawInstances = d;
}
function Yi(e) {
  let t = {
    geometries: 0,
    textures: 0
  };
  let n = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function r(t, r, i) {
    n.calls++;
    switch (r) {
      case e.TRIANGLES:
        n.triangles += t / 3 * i;
        break;
      case e.LINES:
        n.lines += t / 2 * i;
        break;
      case e.LINE_STRIP:
        n.lines += i * (t - 1);
        break;
      case e.LINE_LOOP:
        n.lines += i * t;
        break;
      case e.POINTS:
        n.points += i * t;
        break;
      default:
        console.error(`THREE.WebGLInfo: Unknown draw mode:`, r);
    }
  }
  function i() {
    n.calls = 0;
    n.triangles = 0;
    n.points = 0;
    n.lines = 0;
  }
  return {
    memory: t,
    render: n,
    programs: null,
    autoReset: true,
    reset: i,
    update: r
  };
}
function Xi(e, t, n) {
  let r = new WeakMap();
  let i = new Ft();
  function a(a, o, s) {
    let c = a.morphTargetInfluences;
    let l = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color;
    let u = l === undefined ? 0 : l.length;
    let d = r.get(o);
    if (d === undefined || d.count !== u) {
      if (d !== undefined) {
        d.texture.dispose();
      }
      let e = o.morphAttributes.position !== undefined;
      let n = o.morphAttributes.normal !== undefined;
      let a = o.morphAttributes.color !== undefined;
      let s = o.morphAttributes.position || [];
      let c = o.morphAttributes.normal || [];
      let l = o.morphAttributes.color || [];
      let f = 0;
      if (e === true) {
        f = 1;
      }
      if (n === true) {
        f = 2;
      }
      if (a === true) {
        f = 3;
      }
      let p = o.attributes.position.count * f;
      let m = 1;
      if (p > t.maxTextureSize) {
        m = Math.ceil(p / t.maxTextureSize);
        p = t.maxTextureSize;
      }
      let g = new Float32Array(p * m * 4 * u);
      let _ = new Rt(g, p, m, u);
      _.type = h;
      _.needsUpdate = true;
      let v = f * 4;
      for (let t = 0; t < u; t++) {
        let r = s[t];
        let o = c[t];
        let u = l[t];
        let d = p * m * 4 * t;
        for (let t = 0; t < r.count; t++) {
          let s = t * v;
          if (e === true) {
            i.fromBufferAttribute(r, t);
            g[d + s + 0] = i.x;
            g[d + s + 1] = i.y;
            g[d + s + 2] = i.z;
            g[d + s + 3] = 0;
          }
          if (n === true) {
            i.fromBufferAttribute(o, t);
            g[d + s + 4] = i.x;
            g[d + s + 5] = i.y;
            g[d + s + 6] = i.z;
            g[d + s + 7] = 0;
          }
          if (a === true) {
            i.fromBufferAttribute(u, t);
            g[d + s + 8] = i.x;
            g[d + s + 9] = i.y;
            g[d + s + 10] = i.z;
            g[d + s + 11] = u.itemSize === 4 ? i.w : 1;
          }
        }
      }
      d = {
        count: u,
        texture: _,
        size: new H(p, m)
      };
      r.set(o, d);
      function y() {
        _.dispose();
        r.delete(o);
        o.removeEventListener(`dispose`, y);
      }
      o.addEventListener(`dispose`, y);
    }
    if (a.isInstancedMesh === true && a.morphTexture !== null) {
      s.getUniforms().setValue(e, `morphTexture`, a.morphTexture, n);
    } else {
      let t = 0;
      for (let e = 0; e < c.length; e++) {
        t += c[e];
      }
      let n = o.morphTargetsRelative ? 1 : 1 - t;
      s.getUniforms().setValue(e, `morphTargetBaseInfluence`, n);
      s.getUniforms().setValue(e, `morphTargetInfluences`, c);
    }
    s.getUniforms().setValue(e, `morphTargetsTexture`, d.texture, n);
    s.getUniforms().setValue(e, `morphTargetsTextureSize`, d.size);
  }
  return {
    update: a
  };
}
function Zi(e, t, n, r) {
  let i = new WeakMap();
  function a(a) {
    let o = r.render.frame;
    let c = a.geometry;
    let l = t.get(a, c);
    if (i.get(l) !== o) {
      t.update(l);
      i.set(l, o);
    }
    if (a.isInstancedMesh) {
      if (a.hasEventListener(`dispose`, s) === false) {
        a.addEventListener(`dispose`, s);
      }
      if (i.get(a) !== o) {
        n.update(a.instanceMatrix, e.ARRAY_BUFFER);
        if (a.instanceColor !== null) {
          n.update(a.instanceColor, e.ARRAY_BUFFER);
        }
        i.set(a, o);
      }
    }
    if (a.isSkinnedMesh) {
      let e = a.skeleton;
      if (i.get(e) !== o) {
        e.update();
        i.set(e, o);
      }
    }
    return l;
  }
  function o() {
    i = new WeakMap();
  }
  function s(e) {
    let t = e.target;
    t.removeEventListener(`dispose`, s);
    n.remove(t.instanceMatrix);
    if (t.instanceColor !== null) {
      n.remove(t.instanceColor);
    }
  }
  return {
    update: a,
    dispose: o
  };
}
var Qi = class extends Pt {
  constructor(e, t, n, i, a, o, s, c, l, u = E) {
    if (u !== 1026 && u !== 1027) {
      throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);
    }
    if (n === undefined && u === 1026) {
      n = m;
    }
    if (n === undefined && u === 1027) {
      n = y;
    }
    super(null, i, a, o, s, c, u, n, l);
    this.isDepthTexture = true;
    this.image = {
      width: e,
      height: t
    };
    this.magFilter = s === undefined ? r : s;
    this.minFilter = c === undefined ? r : c;
    this.flipY = false;
    this.generateMipmaps = false;
    this.compareFunction = null;
  }
  copy(e) {
    super.copy(e);
    this.compareFunction = e.compareFunction;
    return this;
  }
  toJSON(e) {
    let t = super.toJSON(e);
    if (this.compareFunction !== null) {
      t.compareFunction = this.compareFunction;
    }
    return t;
  }
};
var $i = new Pt();
var ea = new Qi(1, 1);
var ta = new Rt();
var na = new zt();
var ra = new ni();
var ia = [];
var aa = [];
var oa = new Float32Array(16);
var sa = new Float32Array(9);
var ca = new Float32Array(4);
function la(e, t, n) {
  let r = e[0];
  if (r <= 0 || r > 0) {
    return e;
  }
  let i = t * n;
  let a = ia[i];
  if (a === undefined) {
    a = new Float32Array(i);
    ia[i] = a;
  }
  if (t !== 0) {
    r.toArray(a, 0);
    for (let r = 1, i = 0; r !== t; ++r) {
      i += n;
      e[r].toArray(a, i);
    }
  }
  return a;
}
function ua(e, t) {
  if (e.length !== t.length) {
    return false;
  }
  for (let n = 0, r = e.length; n < r; n++) {
    if (e[n] !== t[n]) {
      return false;
    }
  }
  return true;
}
function da(e, t) {
  for (let n = 0, r = t.length; n < r; n++) {
    e[n] = t[n];
  }
}
function fa(e, t) {
  let n = aa[t];
  if (n === undefined) {
    n = new Int32Array(t);
    aa[t] = n;
  }
  for (let r = 0; r !== t; ++r) {
    n[r] = e.allocateTextureUnit();
  }
  return n;
}
function pa(e, t) {
  let n = this.cache;
  if (n[0] !== t) {
    e.uniform1f(this.addr, t);
    n[0] = t;
  }
}
function ma(e, t) {
  let n = this.cache;
  if (t.x !== undefined) {
    if (n[0] !== t.x || n[1] !== t.y) {
      e.uniform2f(this.addr, t.x, t.y);
      n[0] = t.x;
      n[1] = t.y;
    }
  } else {
    if (ua(n, t)) {
      return;
    }
    e.uniform2fv(this.addr, t);
    da(n, t);
  }
}
function ha(e, t) {
  let n = this.cache;
  if (t.x !== undefined) {
    if (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) {
      e.uniform3f(this.addr, t.x, t.y, t.z);
      n[0] = t.x;
      n[1] = t.y;
      n[2] = t.z;
    }
  } else if (t.r !== undefined) {
    if (n[0] !== t.r || n[1] !== t.g || n[2] !== t.b) {
      e.uniform3f(this.addr, t.r, t.g, t.b);
      n[0] = t.r;
      n[1] = t.g;
      n[2] = t.b;
    }
  } else {
    if (ua(n, t)) {
      return;
    }
    e.uniform3fv(this.addr, t);
    da(n, t);
  }
}
function ga(e, t) {
  let n = this.cache;
  if (t.x !== undefined) {
    if (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) {
      e.uniform4f(this.addr, t.x, t.y, t.z, t.w);
      n[0] = t.x;
      n[1] = t.y;
      n[2] = t.z;
      n[3] = t.w;
    }
  } else {
    if (ua(n, t)) {
      return;
    }
    e.uniform4fv(this.addr, t);
    da(n, t);
  }
}
function _a(e, t) {
  let n = this.cache;
  let r = t.elements;
  if (r === undefined) {
    if (ua(n, t)) {
      return;
    }
    e.uniformMatrix2fv(this.addr, false, t);
    da(n, t);
  } else {
    if (ua(n, r)) {
      return;
    }
    ca.set(r);
    e.uniformMatrix2fv(this.addr, false, ca);
    da(n, r);
  }
}
function va(e, t) {
  let n = this.cache;
  let r = t.elements;
  if (r === undefined) {
    if (ua(n, t)) {
      return;
    }
    e.uniformMatrix3fv(this.addr, false, t);
    da(n, t);
  } else {
    if (ua(n, r)) {
      return;
    }
    sa.set(r);
    e.uniformMatrix3fv(this.addr, false, sa);
    da(n, r);
  }
}
function ya(e, t) {
  let n = this.cache;
  let r = t.elements;
  if (r === undefined) {
    if (ua(n, t)) {
      return;
    }
    e.uniformMatrix4fv(this.addr, false, t);
    da(n, t);
  } else {
    if (ua(n, r)) {
      return;
    }
    oa.set(r);
    e.uniformMatrix4fv(this.addr, false, oa);
    da(n, r);
  }
}
function ba(e, t) {
  let n = this.cache;
  if (n[0] !== t) {
    e.uniform1i(this.addr, t);
    n[0] = t;
  }
}
function xa(e, t) {
  let n = this.cache;
  if (t.x !== undefined) {
    if (n[0] !== t.x || n[1] !== t.y) {
      e.uniform2i(this.addr, t.x, t.y);
      n[0] = t.x;
      n[1] = t.y;
    }
  } else {
    if (ua(n, t)) {
      return;
    }
    e.uniform2iv(this.addr, t);
    da(n, t);
  }
}
function Sa(e, t) {
  let n = this.cache;
  if (t.x !== undefined) {
    if (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) {
      e.uniform3i(this.addr, t.x, t.y, t.z);
      n[0] = t.x;
      n[1] = t.y;
      n[2] = t.z;
    }
  } else {
    if (ua(n, t)) {
      return;
    }
    e.uniform3iv(this.addr, t);
    da(n, t);
  }
}
function Ca(e, t) {
  let n = this.cache;
  if (t.x !== undefined) {
    if (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) {
      e.uniform4i(this.addr, t.x, t.y, t.z, t.w);
      n[0] = t.x;
      n[1] = t.y;
      n[2] = t.z;
      n[3] = t.w;
    }
  } else {
    if (ua(n, t)) {
      return;
    }
    e.uniform4iv(this.addr, t);
    da(n, t);
  }
}
function wa(e, t) {
  let n = this.cache;
  if (n[0] !== t) {
    e.uniform1ui(this.addr, t);
    n[0] = t;
  }
}
function Ta(e, t) {
  let n = this.cache;
  if (t.x !== undefined) {
    if (n[0] !== t.x || n[1] !== t.y) {
      e.uniform2ui(this.addr, t.x, t.y);
      n[0] = t.x;
      n[1] = t.y;
    }
  } else {
    if (ua(n, t)) {
      return;
    }
    e.uniform2uiv(this.addr, t);
    da(n, t);
  }
}
function Ea(e, t) {
  let n = this.cache;
  if (t.x !== undefined) {
    if (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) {
      e.uniform3ui(this.addr, t.x, t.y, t.z);
      n[0] = t.x;
      n[1] = t.y;
      n[2] = t.z;
    }
  } else {
    if (ua(n, t)) {
      return;
    }
    e.uniform3uiv(this.addr, t);
    da(n, t);
  }
}
function Da(e, t) {
  let n = this.cache;
  if (t.x !== undefined) {
    if (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) {
      e.uniform4ui(this.addr, t.x, t.y, t.z, t.w);
      n[0] = t.x;
      n[1] = t.y;
      n[2] = t.z;
      n[3] = t.w;
    }
  } else {
    if (ua(n, t)) {
      return;
    }
    e.uniform4uiv(this.addr, t);
    da(n, t);
  }
}
function Oa(e, t, n) {
  let r = this.cache;
  let i = n.allocateTextureUnit();
  if (r[0] !== i) {
    e.uniform1i(this.addr, i);
    r[0] = i;
  }
  let a;
  if (this.type === e.SAMPLER_2D_SHADOW) {
    ea.compareFunction = 515;
    a = ea;
  } else {
    a = $i;
  }
  n.setTexture2D(t || a, i);
}
function ka(e, t, n) {
  let r = this.cache;
  let i = n.allocateTextureUnit();
  if (r[0] !== i) {
    e.uniform1i(this.addr, i);
    r[0] = i;
  }
  n.setTexture3D(t || na, i);
}
function Aa(e, t, n) {
  let r = this.cache;
  let i = n.allocateTextureUnit();
  if (r[0] !== i) {
    e.uniform1i(this.addr, i);
    r[0] = i;
  }
  n.setTextureCube(t || ra, i);
}
function ja(e, t, n) {
  let r = this.cache;
  let i = n.allocateTextureUnit();
  if (r[0] !== i) {
    e.uniform1i(this.addr, i);
    r[0] = i;
  }
  n.setTexture2DArray(t || ta, i);
}
function Ma(e) {
  switch (e) {
    case 5126:
      return pa;
    case 35664:
      return ma;
    case 35665:
      return ha;
    case 35666:
      return ga;
    case 35674:
      return _a;
    case 35675:
      return va;
    case 35676:
      return ya;
    case 5124:
    case 35670:
      return ba;
    case 35667:
    case 35671:
      return xa;
    case 35668:
    case 35672:
      return Sa;
    case 35669:
    case 35673:
      return Ca;
    case 5125:
      return wa;
    case 36294:
      return Ta;
    case 36295:
      return Ea;
    case 36296:
      return Da;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Oa;
    case 35679:
    case 36299:
    case 36307:
      return ka;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Aa;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return ja;
  }
}
function Na(e, t) {
  e.uniform1fv(this.addr, t);
}
function Pa(e, t) {
  let n = la(t, this.size, 2);
  e.uniform2fv(this.addr, n);
}
function Fa(e, t) {
  let n = la(t, this.size, 3);
  e.uniform3fv(this.addr, n);
}
function Ia(e, t) {
  let n = la(t, this.size, 4);
  e.uniform4fv(this.addr, n);
}
function La(e, t) {
  let n = la(t, this.size, 4);
  e.uniformMatrix2fv(this.addr, false, n);
}
function Ra(e, t) {
  let n = la(t, this.size, 9);
  e.uniformMatrix3fv(this.addr, false, n);
}
function za(e, t) {
  let n = la(t, this.size, 16);
  e.uniformMatrix4fv(this.addr, false, n);
}
function Ba(e, t) {
  e.uniform1iv(this.addr, t);
}
function Va(e, t) {
  e.uniform2iv(this.addr, t);
}
function Ha(e, t) {
  e.uniform3iv(this.addr, t);
}
function Ua(e, t) {
  e.uniform4iv(this.addr, t);
}
function Wa(e, t) {
  e.uniform1uiv(this.addr, t);
}
function Ga(e, t) {
  e.uniform2uiv(this.addr, t);
}
function Ka(e, t) {
  e.uniform3uiv(this.addr, t);
}
function qa(e, t) {
  e.uniform4uiv(this.addr, t);
}
function Ja(e, t, n) {
  let r = this.cache;
  let i = t.length;
  let a = fa(n, i);
  if (!ua(r, a)) {
    e.uniform1iv(this.addr, a);
    da(r, a);
  }
  for (let e = 0; e !== i; ++e) {
    n.setTexture2D(t[e] || $i, a[e]);
  }
}
function Ya(e, t, n) {
  let r = this.cache;
  let i = t.length;
  let a = fa(n, i);
  if (!ua(r, a)) {
    e.uniform1iv(this.addr, a);
    da(r, a);
  }
  for (let e = 0; e !== i; ++e) {
    n.setTexture3D(t[e] || na, a[e]);
  }
}
function Xa(e, t, n) {
  let r = this.cache;
  let i = t.length;
  let a = fa(n, i);
  if (!ua(r, a)) {
    e.uniform1iv(this.addr, a);
    da(r, a);
  }
  for (let e = 0; e !== i; ++e) {
    n.setTextureCube(t[e] || ra, a[e]);
  }
}
function Za(e, t, n) {
  let r = this.cache;
  let i = t.length;
  let a = fa(n, i);
  if (!ua(r, a)) {
    e.uniform1iv(this.addr, a);
    da(r, a);
  }
  for (let e = 0; e !== i; ++e) {
    n.setTexture2DArray(t[e] || ta, a[e]);
  }
}
function Qa(e) {
  switch (e) {
    case 5126:
      return Na;
    case 35664:
      return Pa;
    case 35665:
      return Fa;
    case 35666:
      return Ia;
    case 35674:
      return La;
    case 35675:
      return Ra;
    case 35676:
      return za;
    case 5124:
    case 35670:
      return Ba;
    case 35667:
    case 35671:
      return Va;
    case 35668:
    case 35672:
      return Ha;
    case 35669:
    case 35673:
      return Ua;
    case 5125:
      return Wa;
    case 36294:
      return Ga;
    case 36295:
      return Ka;
    case 36296:
      return qa;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Ja;
    case 35679:
    case 36299:
    case 36307:
      return Ya;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Xa;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Za;
  }
}
var $a = class {
  constructor(e, t, n) {
    this.id = e;
    this.addr = n;
    this.cache = [];
    this.type = t.type;
    this.setValue = Ma(t.type);
  }
};
var eo = class {
  constructor(e, t, n) {
    this.id = e;
    this.addr = n;
    this.cache = [];
    this.type = t.type;
    this.size = t.size;
    this.setValue = Qa(t.type);
  }
};
var to = class {
  constructor(e) {
    this.id = e;
    this.seq = [];
    this.map = {};
  }
  setValue(e, t, n) {
    let r = this.seq;
    for (let i = 0, a = r.length; i !== a; ++i) {
      let a = r[i];
      a.setValue(e, t[a.id], n);
    }
  }
};
var no = /(\w+)(\])?(\[|\.)?/g;
function ro(e, t) {
  e.seq.push(t);
  e.map[t.id] = t;
}
function io(e, t, n) {
  let r = e.name;
  let i = r.length;
  for (no.lastIndex = 0;;) {
    let a = no.exec(r);
    let o = no.lastIndex;
    let s = a[1];
    let c = a[2] === `]`;
    let l = a[3];
    if (c) {
      s |= 0;
    }
    if (l === undefined || l === `[` && o + 2 === i) {
      ro(n, l === undefined ? new $a(s, e, t) : new eo(s, e, t));
      break;
    }
    {
      let e = n.map[s];
      if (e === undefined) {
        e = new to(s);
        ro(n, e);
      }
      n = e;
    }
  }
}
var ao = class {
  constructor(e, t) {
    this.seq = [];
    this.map = {};
    let n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      let n = e.getActiveUniform(t, r);
      io(n, e.getUniformLocation(t, n.name), this);
    }
  }
  setValue(e, t, n, r) {
    let i = this.map[t];
    if (i !== undefined) {
      i.setValue(e, n, r);
    }
  }
  setOptional(e, t, n) {
    let r = t[n];
    if (r !== undefined) {
      this.setValue(e, n, r);
    }
  }
  static upload(e, t, n, r) {
    for (let i = 0, a = t.length; i !== a; ++i) {
      let a = t[i];
      let o = n[a.id];
      if (o.needsUpdate !== false) {
        a.setValue(e, o.value, r);
      }
    }
  }
  static seqWithValue(e, t) {
    let n = [];
    for (let r = 0, i = e.length; r !== i; ++r) {
      let i = e[r];
      if (i.id in t) {
        n.push(i);
      }
    }
    return n;
  }
};
function oo(e, t, n) {
  let r = e.createShader(t);
  e.shaderSource(r, n);
  e.compileShader(r);
  return r;
}
var so = 37297;
var co = 0;
function lo(e, t) {
  let n = e.split(`
`);
  let r = [];
  let i = Math.max(t - 6, 0);
  let a = Math.min(t + 6, n.length);
  for (let e = i; e < a; e++) {
    let i = e + 1;
    r.push(`${i === t ? `>` : ` `} ${i}: ${n[e]}`);
  }
  return r.join(`
`);
}
var uo = new U();
function fo(e) {
  W._getMatrix(uo, W.workingColorSpace, e);
  let t = `mat3( ${uo.elements.map(e => e.toFixed(4))} )`;
  switch (W.getTransfer(e)) {
    case Fe:
      return [t, `LinearTransferOETF`];
    case Ie:
      return [t, `sRGBTransferOETF`];
    default:
      console.warn(`THREE.WebGLProgram: Unsupported color space: `, e);
      return [t, `LinearTransferOETF`];
  }
}
function po(e, t, n) {
  let r = e.getShaderParameter(t, e.COMPILE_STATUS);
  let i = e.getShaderInfoLog(t).trim();
  if (r && i === ``) {
    return ``;
  }
  let a = /ERROR: 0:(\d+)/.exec(i);
  if (a) {
    let r = parseInt(a[1]);
    return `${n.toUpperCase()}

${i}

${lo(e.getShaderSource(t), r)}`;
  }
  return i;
}
function mo(e, t) {
  let n = fo(t);
  return [`vec4 ${e}( vec4 value ) {`, `	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`, `}`].join(`
`);
}
function ho(e, t) {
  let n;
  switch (t) {
    case 1:
      n = `Linear`;
      break;
    case 2:
      n = `Reinhard`;
      break;
    case 3:
      n = `Cineon`;
      break;
    case 4:
      n = `ACESFilmic`;
      break;
    case 6:
      n = `AgX`;
      break;
    case 7:
      n = `Neutral`;
      break;
    case 5:
      n = `Custom`;
      break;
    default:
      console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`, t);
      n = `Linear`;
  }
  return `vec3 ${e}( vec3 color ) { return ${n}ToneMapping( color ); }`;
}
var go = new G();
function _o() {
  W.getLuminanceCoefficients(go);
  return [`float luminance( const in vec3 rgb ) {`, `	const vec3 weights = vec3( ${go.x.toFixed(4)}, ${go.y.toFixed(4)}, ${go.z.toFixed(4)} );`, `	return dot( weights, rgb );`, `}`].join(`
`);
}
function vo(e) {
  return [e.extensionClipCullDistance ? `#extension GL_ANGLE_clip_cull_distance : require` : ``, e.extensionMultiDraw ? `#extension GL_ANGLE_multi_draw : require` : ``].filter(xo).join(`
`);
}
function yo(e) {
  let t = [];
  for (let n in e) {
    let r = e[n];
    if (r !== false) {
      t.push(`#define ${n} ${r}`);
    }
  }
  return t.join(`
`);
}
function bo(e, t) {
  let n = {};
  let r = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < r; i++) {
    let r = e.getActiveAttrib(t, i);
    let a = r.name;
    let o = 1;
    if (r.type === e.FLOAT_MAT2) {
      o = 2;
    }
    if (r.type === e.FLOAT_MAT3) {
      o = 3;
    }
    if (r.type === e.FLOAT_MAT4) {
      o = 4;
    }
    n[a] = {
      type: r.type,
      location: e.getAttribLocation(t, a),
      locationSize: o
    };
  }
  return n;
}
function xo(e) {
  return e !== ``;
}
function So(e, t) {
  let n = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function Co(e, t) {
  return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
var wo = /^[ \t]*#include +<([\w\d./]+)>/gm;
function To(e) {
  return e.replace(wo, Do);
}
var Eo = new Map();
function Do(e, t) {
  let n = Y[t];
  if (n === undefined) {
    let e = Eo.get(t);
    if (e !== undefined) {
      n = Y[e];
      console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`, t, e);
    } else {
      throw Error(`Can not resolve #include <${t}>`);
    }
  }
  return To(n);
}
var Oo = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function ko(e) {
  return e.replace(Oo, Ao);
}
function Ao(e, t, n, r) {
  let i = ``;
  for (let e = parseInt(t); e < parseInt(n); e++) {
    i += r.replace(/\[\s*i\s*\]/g, `[ ${e} ]`).replace(/UNROLLED_LOOP_INDEX/g, e);
  }
  return i;
}
function jo(e) {
  let t = `precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;
  if (e.precision === `highp`) {
    t += `
#define HIGH_PRECISION`;
  } else if (e.precision === `mediump`) {
    t += `
#define MEDIUM_PRECISION`;
  } else if (e.precision === `lowp`) {
    t += `
#define LOW_PRECISION`;
  }
  return t;
}
function Mo(e) {
  let t = `SHADOWMAP_TYPE_BASIC`;
  if (e.shadowMapType === 1) {
    t = `SHADOWMAP_TYPE_PCF`;
  } else if (e.shadowMapType === 2) {
    t = `SHADOWMAP_TYPE_PCF_SOFT`;
  } else if (e.shadowMapType === 3) {
    t = `SHADOWMAP_TYPE_VSM`;
  }
  return t;
}
function No(e) {
  let t = `ENVMAP_TYPE_CUBE`;
  if (e.envMap) {
    switch (e.envMapMode) {
      case 301:
      case 302:
        t = `ENVMAP_TYPE_CUBE`;
        break;
      case 306:
        t = `ENVMAP_TYPE_CUBE_UV`;
    }
  }
  return t;
}
function Po(e) {
  let t = `ENVMAP_MODE_REFLECTION`;
  if (e.envMap) {
    switch (e.envMapMode) {
      case 302:
        t = `ENVMAP_MODE_REFRACTION`;
    }
  }
  return t;
}
function Fo(e) {
  let t = `ENVMAP_BLENDING_NONE`;
  if (e.envMap) {
    switch (e.combine) {
      case 0:
        t = `ENVMAP_BLENDING_MULTIPLY`;
        break;
      case 1:
        t = `ENVMAP_BLENDING_MIX`;
        break;
      case 2:
        t = `ENVMAP_BLENDING_ADD`;
    }
  }
  return t;
}
function Io(e) {
  let t = e.envMapCubeUVHeight;
  if (t === null) {
    return null;
  }
  let n = Math.log2(t) - 2;
  let r = 1 / t;
  return {
    texelWidth: 1 / (Math.max(2 ** n, 112) * 3),
    texelHeight: r,
    maxMip: n
  };
}
function Lo(e, t, n, r) {
  let i = e.getContext();
  let a = n.defines;
  let o = n.vertexShader;
  let s = n.fragmentShader;
  let c = Mo(n);
  let l = No(n);
  let u = Po(n);
  let d = Fo(n);
  let f = Io(n);
  let p = vo(n);
  let m = yo(a);
  let h = i.createProgram();
  let g;
  let _;
  let v = n.glslVersion ? `#version ${n.glslVersion}
` : ``;
  if (n.isRawShaderMaterial) {
    g = [`#define SHADER_TYPE ${n.shaderType}`, `#define SHADER_NAME ${n.shaderName}`, m].filter(xo).join(`
`);
    if (g.length > 0) {
      g += `
`;
    }
    _ = [`#define SHADER_TYPE ${n.shaderType}`, `#define SHADER_NAME ${n.shaderName}`, m].filter(xo).join(`
`);
    if (_.length > 0) {
      _ += `
`;
    }
  } else {
    g = [jo(n), `#define SHADER_TYPE ${n.shaderType}`, `#define SHADER_NAME ${n.shaderName}`, m, n.extensionClipCullDistance ? `#define USE_CLIP_DISTANCE` : ``, n.batching ? `#define USE_BATCHING` : ``, n.batchingColor ? `#define USE_BATCHING_COLOR` : ``, n.instancing ? `#define USE_INSTANCING` : ``, n.instancingColor ? `#define USE_INSTANCING_COLOR` : ``, n.instancingMorph ? `#define USE_INSTANCING_MORPH` : ``, n.useFog && n.fog ? `#define USE_FOG` : ``, n.useFog && n.fogExp2 ? `#define FOG_EXP2` : ``, n.map ? `#define USE_MAP` : ``, n.envMap ? `#define USE_ENVMAP` : ``, n.envMap ? `#define ${u}` : ``, n.lightMap ? `#define USE_LIGHTMAP` : ``, n.aoMap ? `#define USE_AOMAP` : ``, n.bumpMap ? `#define USE_BUMPMAP` : ``, n.normalMap ? `#define USE_NORMALMAP` : ``, n.normalMapObjectSpace ? `#define USE_NORMALMAP_OBJECTSPACE` : ``, n.normalMapTangentSpace ? `#define USE_NORMALMAP_TANGENTSPACE` : ``, n.displacementMap ? `#define USE_DISPLACEMENTMAP` : ``, n.emissiveMap ? `#define USE_EMISSIVEMAP` : ``, n.anisotropy ? `#define USE_ANISOTROPY` : ``, n.anisotropyMap ? `#define USE_ANISOTROPYMAP` : ``, n.clearcoatMap ? `#define USE_CLEARCOATMAP` : ``, n.clearcoatRoughnessMap ? `#define USE_CLEARCOAT_ROUGHNESSMAP` : ``, n.clearcoatNormalMap ? `#define USE_CLEARCOAT_NORMALMAP` : ``, n.iridescenceMap ? `#define USE_IRIDESCENCEMAP` : ``, n.iridescenceThicknessMap ? `#define USE_IRIDESCENCE_THICKNESSMAP` : ``, n.specularMap ? `#define USE_SPECULARMAP` : ``, n.specularColorMap ? `#define USE_SPECULAR_COLORMAP` : ``, n.specularIntensityMap ? `#define USE_SPECULAR_INTENSITYMAP` : ``, n.roughnessMap ? `#define USE_ROUGHNESSMAP` : ``, n.metalnessMap ? `#define USE_METALNESSMAP` : ``, n.alphaMap ? `#define USE_ALPHAMAP` : ``, n.alphaHash ? `#define USE_ALPHAHASH` : ``, n.transmission ? `#define USE_TRANSMISSION` : ``, n.transmissionMap ? `#define USE_TRANSMISSIONMAP` : ``, n.thicknessMap ? `#define USE_THICKNESSMAP` : ``, n.sheenColorMap ? `#define USE_SHEEN_COLORMAP` : ``, n.sheenRoughnessMap ? `#define USE_SHEEN_ROUGHNESSMAP` : ``, n.mapUv ? `#define MAP_UV ${n.mapUv}` : ``, n.alphaMapUv ? `#define ALPHAMAP_UV ${n.alphaMapUv}` : ``, n.lightMapUv ? `#define LIGHTMAP_UV ${n.lightMapUv}` : ``, n.aoMapUv ? `#define AOMAP_UV ${n.aoMapUv}` : ``, n.emissiveMapUv ? `#define EMISSIVEMAP_UV ${n.emissiveMapUv}` : ``, n.bumpMapUv ? `#define BUMPMAP_UV ${n.bumpMapUv}` : ``, n.normalMapUv ? `#define NORMALMAP_UV ${n.normalMapUv}` : ``, n.displacementMapUv ? `#define DISPLACEMENTMAP_UV ${n.displacementMapUv}` : ``, n.metalnessMapUv ? `#define METALNESSMAP_UV ${n.metalnessMapUv}` : ``, n.roughnessMapUv ? `#define ROUGHNESSMAP_UV ${n.roughnessMapUv}` : ``, n.anisotropyMapUv ? `#define ANISOTROPYMAP_UV ${n.anisotropyMapUv}` : ``, n.clearcoatMapUv ? `#define CLEARCOATMAP_UV ${n.clearcoatMapUv}` : ``, n.clearcoatNormalMapUv ? `#define CLEARCOAT_NORMALMAP_UV ${n.clearcoatNormalMapUv}` : ``, n.clearcoatRoughnessMapUv ? `#define CLEARCOAT_ROUGHNESSMAP_UV ${n.clearcoatRoughnessMapUv}` : ``, n.iridescenceMapUv ? `#define IRIDESCENCEMAP_UV ${n.iridescenceMapUv}` : ``, n.iridescenceThicknessMapUv ? `#define IRIDESCENCE_THICKNESSMAP_UV ${n.iridescenceThicknessMapUv}` : ``, n.sheenColorMapUv ? `#define SHEEN_COLORMAP_UV ${n.sheenColorMapUv}` : ``, n.sheenRoughnessMapUv ? `#define SHEEN_ROUGHNESSMAP_UV ${n.sheenRoughnessMapUv}` : ``, n.specularMapUv ? `#define SPECULARMAP_UV ${n.specularMapUv}` : ``, n.specularColorMapUv ? `#define SPECULAR_COLORMAP_UV ${n.specularColorMapUv}` : ``, n.specularIntensityMapUv ? `#define SPECULAR_INTENSITYMAP_UV ${n.specularIntensityMapUv}` : ``, n.transmissionMapUv ? `#define TRANSMISSIONMAP_UV ${n.transmissionMapUv}` : ``, n.thicknessMapUv ? `#define THICKNESSMAP_UV ${n.thicknessMapUv}` : ``, n.vertexTangents && n.flatShading === false ? `#define USE_TANGENT` : ``, n.vertexColors ? `#define USE_COLOR` : ``, n.vertexAlphas ? `#define USE_COLOR_ALPHA` : ``, n.vertexUv1s ? `#define USE_UV1` : ``, n.vertexUv2s ? `#define USE_UV2` : ``, n.vertexUv3s ? `#define USE_UV3` : ``, n.pointsUvs ? `#define USE_POINTS_UV` : ``, n.flatShading ? `#define FLAT_SHADED` : ``, n.skinning ? `#define USE_SKINNING` : ``, n.morphTargets ? `#define USE_MORPHTARGETS` : ``, n.morphNormals && n.flatShading === false ? `#define USE_MORPHNORMALS` : ``, n.morphColors ? `#define USE_MORPHCOLORS` : ``, n.morphTargetsCount > 0 ? `#define MORPHTARGETS_TEXTURE_STRIDE ${n.morphTextureStride}` : ``, n.morphTargetsCount > 0 ? `#define MORPHTARGETS_COUNT ${n.morphTargetsCount}` : ``, n.doubleSided ? `#define DOUBLE_SIDED` : ``, n.flipSided ? `#define FLIP_SIDED` : ``, n.shadowMapEnabled ? `#define USE_SHADOWMAP` : ``, n.shadowMapEnabled ? `#define ${c}` : ``, n.sizeAttenuation ? `#define USE_SIZEATTENUATION` : ``, n.numLightProbes > 0 ? `#define USE_LIGHT_PROBES` : ``, n.logarithmicDepthBuffer ? `#define USE_LOGDEPTHBUF` : ``, n.reverseDepthBuffer ? `#define USE_REVERSEDEPTHBUF` : ``, `uniform mat4 modelMatrix;`, `uniform mat4 modelViewMatrix;`, `uniform mat4 projectionMatrix;`, `uniform mat4 viewMatrix;`, `uniform mat3 normalMatrix;`, `uniform vec3 cameraPosition;`, `uniform bool isOrthographic;`, `#ifdef USE_INSTANCING`, `	attribute mat4 instanceMatrix;`, `#endif`, `#ifdef USE_INSTANCING_COLOR`, `	attribute vec3 instanceColor;`, `#endif`, `#ifdef USE_INSTANCING_MORPH`, `	uniform sampler2D morphTexture;`, `#endif`, `attribute vec3 position;`, `attribute vec3 normal;`, `attribute vec2 uv;`, `#ifdef USE_UV1`, `	attribute vec2 uv1;`, `#endif`, `#ifdef USE_UV2`, `	attribute vec2 uv2;`, `#endif`, `#ifdef USE_UV3`, `	attribute vec2 uv3;`, `#endif`, `#ifdef USE_TANGENT`, `	attribute vec4 tangent;`, `#endif`, `#if defined( USE_COLOR_ALPHA )`, `	attribute vec4 color;`, `#elif defined( USE_COLOR )`, `	attribute vec3 color;`, `#endif`, `#ifdef USE_SKINNING`, `	attribute vec4 skinIndex;`, `	attribute vec4 skinWeight;`, `#endif`, `
`].filter(xo).join(`
`);
    _ = [jo(n), `#define SHADER_TYPE ${n.shaderType}`, `#define SHADER_NAME ${n.shaderName}`, m, n.useFog && n.fog ? `#define USE_FOG` : ``, n.useFog && n.fogExp2 ? `#define FOG_EXP2` : ``, n.alphaToCoverage ? `#define ALPHA_TO_COVERAGE` : ``, n.map ? `#define USE_MAP` : ``, n.matcap ? `#define USE_MATCAP` : ``, n.envMap ? `#define USE_ENVMAP` : ``, n.envMap ? `#define ${l}` : ``, n.envMap ? `#define ${u}` : ``, n.envMap ? `#define ${d}` : ``, f ? `#define CUBEUV_TEXEL_WIDTH ${f.texelWidth}` : ``, f ? `#define CUBEUV_TEXEL_HEIGHT ${f.texelHeight}` : ``, f ? `#define CUBEUV_MAX_MIP ${f.maxMip}.0` : ``, n.lightMap ? `#define USE_LIGHTMAP` : ``, n.aoMap ? `#define USE_AOMAP` : ``, n.bumpMap ? `#define USE_BUMPMAP` : ``, n.normalMap ? `#define USE_NORMALMAP` : ``, n.normalMapObjectSpace ? `#define USE_NORMALMAP_OBJECTSPACE` : ``, n.normalMapTangentSpace ? `#define USE_NORMALMAP_TANGENTSPACE` : ``, n.emissiveMap ? `#define USE_EMISSIVEMAP` : ``, n.anisotropy ? `#define USE_ANISOTROPY` : ``, n.anisotropyMap ? `#define USE_ANISOTROPYMAP` : ``, n.clearcoat ? `#define USE_CLEARCOAT` : ``, n.clearcoatMap ? `#define USE_CLEARCOATMAP` : ``, n.clearcoatRoughnessMap ? `#define USE_CLEARCOAT_ROUGHNESSMAP` : ``, n.clearcoatNormalMap ? `#define USE_CLEARCOAT_NORMALMAP` : ``, n.dispersion ? `#define USE_DISPERSION` : ``, n.iridescence ? `#define USE_IRIDESCENCE` : ``, n.iridescenceMap ? `#define USE_IRIDESCENCEMAP` : ``, n.iridescenceThicknessMap ? `#define USE_IRIDESCENCE_THICKNESSMAP` : ``, n.specularMap ? `#define USE_SPECULARMAP` : ``, n.specularColorMap ? `#define USE_SPECULAR_COLORMAP` : ``, n.specularIntensityMap ? `#define USE_SPECULAR_INTENSITYMAP` : ``, n.roughnessMap ? `#define USE_ROUGHNESSMAP` : ``, n.metalnessMap ? `#define USE_METALNESSMAP` : ``, n.alphaMap ? `#define USE_ALPHAMAP` : ``, n.alphaTest ? `#define USE_ALPHATEST` : ``, n.alphaHash ? `#define USE_ALPHAHASH` : ``, n.sheen ? `#define USE_SHEEN` : ``, n.sheenColorMap ? `#define USE_SHEEN_COLORMAP` : ``, n.sheenRoughnessMap ? `#define USE_SHEEN_ROUGHNESSMAP` : ``, n.transmission ? `#define USE_TRANSMISSION` : ``, n.transmissionMap ? `#define USE_TRANSMISSIONMAP` : ``, n.thicknessMap ? `#define USE_THICKNESSMAP` : ``, n.vertexTangents && n.flatShading === false ? `#define USE_TANGENT` : ``, n.vertexColors || n.instancingColor || n.batchingColor ? `#define USE_COLOR` : ``, n.vertexAlphas ? `#define USE_COLOR_ALPHA` : ``, n.vertexUv1s ? `#define USE_UV1` : ``, n.vertexUv2s ? `#define USE_UV2` : ``, n.vertexUv3s ? `#define USE_UV3` : ``, n.pointsUvs ? `#define USE_POINTS_UV` : ``, n.gradientMap ? `#define USE_GRADIENTMAP` : ``, n.flatShading ? `#define FLAT_SHADED` : ``, n.doubleSided ? `#define DOUBLE_SIDED` : ``, n.flipSided ? `#define FLIP_SIDED` : ``, n.shadowMapEnabled ? `#define USE_SHADOWMAP` : ``, n.shadowMapEnabled ? `#define ${c}` : ``, n.premultipliedAlpha ? `#define PREMULTIPLIED_ALPHA` : ``, n.numLightProbes > 0 ? `#define USE_LIGHT_PROBES` : ``, n.decodeVideoTexture ? `#define DECODE_VIDEO_TEXTURE` : ``, n.decodeVideoTextureEmissive ? `#define DECODE_VIDEO_TEXTURE_EMISSIVE` : ``, n.logarithmicDepthBuffer ? `#define USE_LOGDEPTHBUF` : ``, n.reverseDepthBuffer ? `#define USE_REVERSEDEPTHBUF` : ``, `uniform mat4 viewMatrix;`, `uniform vec3 cameraPosition;`, `uniform bool isOrthographic;`, n.toneMapping === 0 ? `` : `#define TONE_MAPPING`, n.toneMapping === 0 ? `` : Y.tonemapping_pars_fragment, n.toneMapping === 0 ? `` : ho(`toneMapping`, n.toneMapping), n.dithering ? `#define DITHERING` : ``, n.opaque ? `#define OPAQUE` : ``, Y.colorspace_pars_fragment, mo(`linearToOutputTexel`, n.outputColorSpace), _o(), n.useDepthPacking ? `#define DEPTH_PACKING ${n.depthPacking}` : ``, `
`].filter(xo).join(`
`);
  }
  o = To(o);
  o = So(o, n);
  o = Co(o, n);
  s = To(s);
  s = So(s, n);
  s = Co(s, n);
  o = ko(o);
  s = ko(s);
  if (n.isRawShaderMaterial !== true) {
    v = `#version 300 es
`;
    g = `${[p, `#define attribute in`, `#define varying out`, `#define texture2D texture`].join(`
`)}
${g}`;
    _ = `${[`#define varying in`, n.glslVersion === `300 es` ? `` : `layout(location = 0) out highp vec4 pc_fragColor;`, n.glslVersion === `300 es` ? `` : `#define gl_FragColor pc_fragColor`, `#define gl_FragDepthEXT gl_FragDepth`, `#define texture2D texture`, `#define textureCube texture`, `#define texture2DProj textureProj`, `#define texture2DLodEXT textureLod`, `#define texture2DProjLodEXT textureProjLod`, `#define textureCubeLodEXT textureLod`, `#define texture2DGradEXT textureGrad`, `#define texture2DProjGradEXT textureProjGrad`, `#define textureCubeGradEXT textureGrad`].join(`
`)}
${_}`;
  }
  let y = v + g + o;
  let b = v + _ + s;
  let x = oo(i, i.VERTEX_SHADER, y);
  let S = oo(i, i.FRAGMENT_SHADER, b);
  i.attachShader(h, x);
  i.attachShader(h, S);
  if (n.index0AttributeName === undefined) {
    if (n.morphTargets === true) {
      i.bindAttribLocation(h, 0, `position`);
    }
  } else {
    i.bindAttribLocation(h, 0, n.index0AttributeName);
  }
  i.linkProgram(h);
  function C(t) {
    if (e.debug.checkShaderErrors) {
      let n = i.getProgramInfoLog(h).trim();
      let r = i.getShaderInfoLog(x).trim();
      let a = i.getShaderInfoLog(S).trim();
      let o = true;
      let s = true;
      if (i.getProgramParameter(h, i.LINK_STATUS) === false) {
        o = false;
        if (typeof e.debug.onShaderError == `function`) {
          e.debug.onShaderError(i, h, x, S);
        } else {
          let e = po(i, x, `vertex`);
          let r = po(i, S, `fragment`);
          console.error(`THREE.WebGLProgram: Shader Error ${i.getError()} - VALIDATE_STATUS ${i.getProgramParameter(h, i.VALIDATE_STATUS)}

Material Name: ${t.name}
Material Type: ${t.type}

Program Info Log: ${n}
${e}
${r}`);
        }
      } else if (n === ``) {
        if (r === `` || a === ``) {
          s = false;
        }
      } else {
        console.warn(`THREE.WebGLProgram: Program Info Log:`, n);
      }
      if (s) {
        t.diagnostics = {
          runnable: o,
          programLog: n,
          vertexShader: {
            log: r,
            prefix: g
          },
          fragmentShader: {
            log: a,
            prefix: _
          }
        };
      }
    }
    i.deleteShader(x);
    i.deleteShader(S);
    w = new ao(i, h);
    T = bo(i, h);
  }
  let w;
  this.getUniforms = function () {
    if (w === undefined) {
      C(this);
    }
    return w;
  };
  let T;
  this.getAttributes = function () {
    if (T === undefined) {
      C(this);
    }
    return T;
  };
  let E = n.rendererExtensionParallelShaderCompile === false;
  this.isReady = function () {
    if (E === false) {
      E = i.getProgramParameter(h, so);
    }
    return E;
  };
  this.destroy = function () {
    r.releaseStatesOfProgram(this);
    i.deleteProgram(h);
    this.program = undefined;
  };
  this.type = n.shaderType;
  this.name = n.shaderName;
  this.id = co++;
  this.cacheKey = t;
  this.usedTimes = 1;
  this.program = h;
  this.vertexShader = x;
  this.fragmentShader = S;
  return this;
}
var Ro = 0;
var zo = class {
  constructor() {
    this.shaderCache = new Map();
    this.materialCache = new Map();
  }
  update(e) {
    let t = e.vertexShader;
    let n = e.fragmentShader;
    let r = this._getShaderStage(t);
    let i = this._getShaderStage(n);
    let a = this._getShaderCacheForMaterial(e);
    if (a.has(r) === false) {
      a.add(r);
      r.usedTimes++;
    }
    if (a.has(i) === false) {
      a.add(i);
      i.usedTimes++;
    }
    return this;
  }
  remove(e) {
    let t = this.materialCache.get(e);
    for (let e of t) {
      e.usedTimes--;
      if (e.usedTimes === 0) {
        this.shaderCache.delete(e.code);
      }
    }
    this.materialCache.delete(e);
    return this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear();
    this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    let t = this.materialCache;
    let n = t.get(e);
    if (n === undefined) {
      n = new Set();
      t.set(e, n);
    }
    return n;
  }
  _getShaderStage(e) {
    let t = this.shaderCache;
    let n = t.get(e);
    if (n === undefined) {
      n = new Bo(e);
      t.set(e, n);
    }
    return n;
  }
};
var Bo = class {
  constructor(e) {
    this.id = Ro++;
    this.code = e;
    this.usedTimes = 0;
  }
};
function Vo(e, t, n, r, i, a, o) {
  let s = new Dn();
  let c = new zo();
  let l = new Set();
  let u = [];
  let d = i.logarithmicDepthBuffer;
  let f = i.vertexTextures;
  let p = i.precision;
  let m = {
    MeshDepthMaterial: `depth`,
    MeshDistanceMaterial: `distanceRGBA`,
    MeshNormalMaterial: `normal`,
    MeshBasicMaterial: `basic`,
    MeshLambertMaterial: `lambert`,
    MeshPhongMaterial: `phong`,
    MeshToonMaterial: `toon`,
    MeshStandardMaterial: `physical`,
    MeshPhysicalMaterial: `physical`,
    MeshMatcapMaterial: `matcap`,
    LineBasicMaterial: `basic`,
    LineDashedMaterial: `dashed`,
    PointsMaterial: `points`,
    ShadowMaterial: `shadow`,
    SpriteMaterial: `sprite`
  };
  function h(e) {
    l.add(e);
    if (e === 0) {
      return `uv`;
    } else {
      return `uv${e}`;
    }
  }
  function g(a, s, u, g, _) {
    let v = g.fog;
    let y = _.geometry;
    let b = a.isMeshStandardMaterial ? g.environment : null;
    let x = (a.isMeshStandardMaterial ? n : t).get(a.envMap || b);
    let S = x && x.mapping === 306 ? x.image.height : null;
    let C = m[a.type];
    if (a.precision !== null) {
      p = i.getMaxPrecision(a.precision);
      if (p !== a.precision) {
        console.warn(`THREE.WebGLProgram.getParameters:`, a.precision, `not supported, using`, p, `instead.`);
      }
    }
    let w = y.morphAttributes.position || y.morphAttributes.normal || y.morphAttributes.color;
    let T = w === undefined ? 0 : w.length;
    let E = 0;
    if (y.morphAttributes.position !== undefined) {
      E = 1;
    }
    if (y.morphAttributes.normal !== undefined) {
      E = 2;
    }
    if (y.morphAttributes.color !== undefined) {
      E = 3;
    }
    let D;
    let O;
    let k;
    let A;
    if (C) {
      let e = mi[C];
      D = e.vertexShader;
      O = e.fragmentShader;
    } else {
      D = a.vertexShader;
      O = a.fragmentShader;
      c.update(a);
      k = c.getVertexShaderID(a);
      A = c.getFragmentShaderID(a);
    }
    let j = e.getRenderTarget();
    let ee = e.state.buffers.depth.getReversed();
    let te = _.isInstancedMesh === true;
    let M = _.isBatchedMesh === true;
    let N = !!a.map;
    let P = !!a.matcap;
    let ne = !!x;
    let re = !!a.aoMap;
    let ie = !!a.lightMap;
    let ae = !!a.bumpMap;
    let oe = !!a.normalMap;
    let se = !!a.displacementMap;
    let F = !!a.emissiveMap;
    let ce = !!a.metalnessMap;
    let le = !!a.roughnessMap;
    let ue = a.anisotropy > 0;
    let de = a.clearcoat > 0;
    let fe = a.dispersion > 0;
    let pe = a.iridescence > 0;
    let me = a.sheen > 0;
    let he = a.transmission > 0;
    let I = ue && !!a.anisotropyMap;
    let ge = de && !!a.clearcoatMap;
    let _e = de && !!a.clearcoatNormalMap;
    let ve = de && !!a.clearcoatRoughnessMap;
    let L = pe && !!a.iridescenceMap;
    let ye = pe && !!a.iridescenceThicknessMap;
    let R = me && !!a.sheenColorMap;
    let z = me && !!a.sheenRoughnessMap;
    let be = !!a.specularMap;
    let xe = !!a.specularColorMap;
    let Se = !!a.specularIntensityMap;
    let Ce = he && !!a.transmissionMap;
    let we = he && !!a.thicknessMap;
    let Te = !!a.gradientMap;
    let Ee = !!a.alphaMap;
    let De = a.alphaTest > 0;
    let Oe = !!a.alphaHash;
    let ke = !!a.extensions;
    let Ae = 0;
    if (a.toneMapped && (j === null || j.isXRRenderTarget === true)) {
      Ae = e.toneMapping;
    }
    let je = {
      shaderID: C,
      shaderType: a.type,
      shaderName: a.name,
      vertexShader: D,
      fragmentShader: O,
      defines: a.defines,
      customVertexShaderID: k,
      customFragmentShaderID: A,
      isRawShaderMaterial: a.isRawShaderMaterial === true,
      glslVersion: a.glslVersion,
      precision: p,
      batching: M,
      batchingColor: M && _._colorsTexture !== null,
      instancing: te,
      instancingColor: te && _.instanceColor !== null,
      instancingMorph: te && _.morphTexture !== null,
      supportsVertexTextures: f,
      outputColorSpace: j === null ? e.outputColorSpace : j.isXRRenderTarget === true ? j.texture.colorSpace : Pe,
      alphaToCoverage: !!a.alphaToCoverage,
      map: N,
      matcap: P,
      envMap: ne,
      envMapMode: ne && x.mapping,
      envMapCubeUVHeight: S,
      aoMap: re,
      lightMap: ie,
      bumpMap: ae,
      normalMap: oe,
      displacementMap: f && se,
      emissiveMap: F,
      normalMapObjectSpace: oe && a.normalMapType === 1,
      normalMapTangentSpace: oe && a.normalMapType === 0,
      metalnessMap: ce,
      roughnessMap: le,
      anisotropy: ue,
      anisotropyMap: I,
      clearcoat: de,
      clearcoatMap: ge,
      clearcoatNormalMap: _e,
      clearcoatRoughnessMap: ve,
      dispersion: fe,
      iridescence: pe,
      iridescenceMap: L,
      iridescenceThicknessMap: ye,
      sheen: me,
      sheenColorMap: R,
      sheenRoughnessMap: z,
      specularMap: be,
      specularColorMap: xe,
      specularIntensityMap: Se,
      transmission: he,
      transmissionMap: Ce,
      thicknessMap: we,
      gradientMap: Te,
      opaque: a.transparent === false && a.blending === 1 && a.alphaToCoverage === false,
      alphaMap: Ee,
      alphaTest: De,
      alphaHash: Oe,
      combine: a.combine,
      mapUv: N && h(a.map.channel),
      aoMapUv: re && h(a.aoMap.channel),
      lightMapUv: ie && h(a.lightMap.channel),
      bumpMapUv: ae && h(a.bumpMap.channel),
      normalMapUv: oe && h(a.normalMap.channel),
      displacementMapUv: se && h(a.displacementMap.channel),
      emissiveMapUv: F && h(a.emissiveMap.channel),
      metalnessMapUv: ce && h(a.metalnessMap.channel),
      roughnessMapUv: le && h(a.roughnessMap.channel),
      anisotropyMapUv: I && h(a.anisotropyMap.channel),
      clearcoatMapUv: ge && h(a.clearcoatMap.channel),
      clearcoatNormalMapUv: _e && h(a.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ve && h(a.clearcoatRoughnessMap.channel),
      iridescenceMapUv: L && h(a.iridescenceMap.channel),
      iridescenceThicknessMapUv: ye && h(a.iridescenceThicknessMap.channel),
      sheenColorMapUv: R && h(a.sheenColorMap.channel),
      sheenRoughnessMapUv: z && h(a.sheenRoughnessMap.channel),
      specularMapUv: be && h(a.specularMap.channel),
      specularColorMapUv: xe && h(a.specularColorMap.channel),
      specularIntensityMapUv: Se && h(a.specularIntensityMap.channel),
      transmissionMapUv: Ce && h(a.transmissionMap.channel),
      thicknessMapUv: we && h(a.thicknessMap.channel),
      alphaMapUv: Ee && h(a.alphaMap.channel),
      vertexTangents: !!y.attributes.tangent && (oe || ue),
      vertexColors: a.vertexColors,
      vertexAlphas: a.vertexColors === true && !!y.attributes.color && y.attributes.color.itemSize === 4,
      pointsUvs: _.isPoints === true && !!y.attributes.uv && (N || Ee),
      fog: !!v,
      useFog: a.fog === true,
      fogExp2: !!v && v.isFogExp2,
      flatShading: a.flatShading === true,
      sizeAttenuation: a.sizeAttenuation === true,
      logarithmicDepthBuffer: d,
      reverseDepthBuffer: ee,
      skinning: _.isSkinnedMesh === true,
      morphTargets: y.morphAttributes.position !== undefined,
      morphNormals: y.morphAttributes.normal !== undefined,
      morphColors: y.morphAttributes.color !== undefined,
      morphTargetsCount: T,
      morphTextureStride: E,
      numDirLights: s.directional.length,
      numPointLights: s.point.length,
      numSpotLights: s.spot.length,
      numSpotLightMaps: s.spotLightMap.length,
      numRectAreaLights: s.rectArea.length,
      numHemiLights: s.hemi.length,
      numDirLightShadows: s.directionalShadowMap.length,
      numPointLightShadows: s.pointShadowMap.length,
      numSpotLightShadows: s.spotShadowMap.length,
      numSpotLightShadowsWithMaps: s.numSpotLightShadowsWithMaps,
      numLightProbes: s.numLightProbes,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: a.dithering,
      shadowMapEnabled: e.shadowMap.enabled && u.length > 0,
      shadowMapType: e.shadowMap.type,
      toneMapping: Ae,
      decodeVideoTexture: N && a.map.isVideoTexture === true && W.getTransfer(a.map.colorSpace) === `srgb`,
      decodeVideoTextureEmissive: F && a.emissiveMap.isVideoTexture === true && W.getTransfer(a.emissiveMap.colorSpace) === `srgb`,
      premultipliedAlpha: a.premultipliedAlpha,
      doubleSided: a.side === 2,
      flipSided: a.side === 1,
      useDepthPacking: a.depthPacking >= 0,
      depthPacking: a.depthPacking || 0,
      index0AttributeName: a.index0AttributeName,
      extensionClipCullDistance: ke && a.extensions.clipCullDistance === true && r.has(`WEBGL_clip_cull_distance`),
      extensionMultiDraw: (ke && a.extensions.multiDraw === true || M) && r.has(`WEBGL_multi_draw`),
      rendererExtensionParallelShaderCompile: r.has(`KHR_parallel_shader_compile`),
      customProgramCacheKey: a.customProgramCacheKey()
    };
    je.vertexUv1s = l.has(1);
    je.vertexUv2s = l.has(2);
    je.vertexUv3s = l.has(3);
    l.clear();
    return je;
  }
  function _(t) {
    let n = [];
    if (t.shaderID) {
      n.push(t.shaderID);
    } else {
      n.push(t.customVertexShaderID);
      n.push(t.customFragmentShaderID);
    }
    if (t.defines !== undefined) {
      for (let e in t.defines) {
        n.push(e);
        n.push(t.defines[e]);
      }
    }
    if (t.isRawShaderMaterial === false) {
      v(n, t);
      y(n, t);
      n.push(e.outputColorSpace);
    }
    n.push(t.customProgramCacheKey);
    return n.join();
  }
  function v(e, t) {
    e.push(t.precision);
    e.push(t.outputColorSpace);
    e.push(t.envMapMode);
    e.push(t.envMapCubeUVHeight);
    e.push(t.mapUv);
    e.push(t.alphaMapUv);
    e.push(t.lightMapUv);
    e.push(t.aoMapUv);
    e.push(t.bumpMapUv);
    e.push(t.normalMapUv);
    e.push(t.displacementMapUv);
    e.push(t.emissiveMapUv);
    e.push(t.metalnessMapUv);
    e.push(t.roughnessMapUv);
    e.push(t.anisotropyMapUv);
    e.push(t.clearcoatMapUv);
    e.push(t.clearcoatNormalMapUv);
    e.push(t.clearcoatRoughnessMapUv);
    e.push(t.iridescenceMapUv);
    e.push(t.iridescenceThicknessMapUv);
    e.push(t.sheenColorMapUv);
    e.push(t.sheenRoughnessMapUv);
    e.push(t.specularMapUv);
    e.push(t.specularColorMapUv);
    e.push(t.specularIntensityMapUv);
    e.push(t.transmissionMapUv);
    e.push(t.thicknessMapUv);
    e.push(t.combine);
    e.push(t.fogExp2);
    e.push(t.sizeAttenuation);
    e.push(t.morphTargetsCount);
    e.push(t.morphAttributeCount);
    e.push(t.numDirLights);
    e.push(t.numPointLights);
    e.push(t.numSpotLights);
    e.push(t.numSpotLightMaps);
    e.push(t.numHemiLights);
    e.push(t.numRectAreaLights);
    e.push(t.numDirLightShadows);
    e.push(t.numPointLightShadows);
    e.push(t.numSpotLightShadows);
    e.push(t.numSpotLightShadowsWithMaps);
    e.push(t.numLightProbes);
    e.push(t.shadowMapType);
    e.push(t.toneMapping);
    e.push(t.numClippingPlanes);
    e.push(t.numClipIntersection);
    e.push(t.depthPacking);
  }
  function y(e, t) {
    s.disableAll();
    if (t.supportsVertexTextures) {
      s.enable(0);
    }
    if (t.instancing) {
      s.enable(1);
    }
    if (t.instancingColor) {
      s.enable(2);
    }
    if (t.instancingMorph) {
      s.enable(3);
    }
    if (t.matcap) {
      s.enable(4);
    }
    if (t.envMap) {
      s.enable(5);
    }
    if (t.normalMapObjectSpace) {
      s.enable(6);
    }
    if (t.normalMapTangentSpace) {
      s.enable(7);
    }
    if (t.clearcoat) {
      s.enable(8);
    }
    if (t.iridescence) {
      s.enable(9);
    }
    if (t.alphaTest) {
      s.enable(10);
    }
    if (t.vertexColors) {
      s.enable(11);
    }
    if (t.vertexAlphas) {
      s.enable(12);
    }
    if (t.vertexUv1s) {
      s.enable(13);
    }
    if (t.vertexUv2s) {
      s.enable(14);
    }
    if (t.vertexUv3s) {
      s.enable(15);
    }
    if (t.vertexTangents) {
      s.enable(16);
    }
    if (t.anisotropy) {
      s.enable(17);
    }
    if (t.alphaHash) {
      s.enable(18);
    }
    if (t.batching) {
      s.enable(19);
    }
    if (t.dispersion) {
      s.enable(20);
    }
    if (t.batchingColor) {
      s.enable(21);
    }
    e.push(s.mask);
    s.disableAll();
    if (t.fog) {
      s.enable(0);
    }
    if (t.useFog) {
      s.enable(1);
    }
    if (t.flatShading) {
      s.enable(2);
    }
    if (t.logarithmicDepthBuffer) {
      s.enable(3);
    }
    if (t.reverseDepthBuffer) {
      s.enable(4);
    }
    if (t.skinning) {
      s.enable(5);
    }
    if (t.morphTargets) {
      s.enable(6);
    }
    if (t.morphNormals) {
      s.enable(7);
    }
    if (t.morphColors) {
      s.enable(8);
    }
    if (t.premultipliedAlpha) {
      s.enable(9);
    }
    if (t.shadowMapEnabled) {
      s.enable(10);
    }
    if (t.doubleSided) {
      s.enable(11);
    }
    if (t.flipSided) {
      s.enable(12);
    }
    if (t.useDepthPacking) {
      s.enable(13);
    }
    if (t.dithering) {
      s.enable(14);
    }
    if (t.transmission) {
      s.enable(15);
    }
    if (t.sheen) {
      s.enable(16);
    }
    if (t.opaque) {
      s.enable(17);
    }
    if (t.pointsUvs) {
      s.enable(18);
    }
    if (t.decodeVideoTexture) {
      s.enable(19);
    }
    if (t.decodeVideoTextureEmissive) {
      s.enable(20);
    }
    if (t.alphaToCoverage) {
      s.enable(21);
    }
    e.push(s.mask);
  }
  function b(e) {
    let t = m[e.type];
    let n;
    if (t) {
      let e = mi[t];
      n = Wr.clone(e.uniforms);
    } else {
      n = e.uniforms;
    }
    return n;
  }
  function x(t, n) {
    let r;
    for (let e = 0, t = u.length; e < t; e++) {
      let t = u[e];
      if (t.cacheKey === n) {
        r = t;
        ++r.usedTimes;
        break;
      }
    }
    if (r === undefined) {
      r = new Lo(e, n, t, a);
      u.push(r);
    }
    return r;
  }
  function S(e) {
    if (--e.usedTimes === 0) {
      let t = u.indexOf(e);
      u[t] = u[u.length - 1];
      u.pop();
      e.destroy();
    }
  }
  function C(e) {
    c.remove(e);
  }
  function w() {
    c.dispose();
  }
  return {
    getParameters: g,
    getProgramCacheKey: _,
    getUniforms: b,
    acquireProgram: x,
    releaseProgram: S,
    releaseShaderCache: C,
    programs: u,
    dispose: w
  };
}
function Ho() {
  let e = new WeakMap();
  function t(t) {
    return e.has(t);
  }
  function n(t) {
    let n = e.get(t);
    if (n === undefined) {
      n = {};
      e.set(t, n);
    }
    return n;
  }
  function r(t) {
    e.delete(t);
  }
  function i(t, n, r) {
    e.get(t)[n] = r;
  }
  function a() {
    e = new WeakMap();
  }
  return {
    has: t,
    get: n,
    remove: r,
    update: i,
    dispose: a
  };
}
function Uo(e, t) {
  if (e.groupOrder === t.groupOrder) {
    if (e.renderOrder === t.renderOrder) {
      if (e.material.id === t.material.id) {
        if (e.z === t.z) {
          return e.id - t.id;
        } else {
          return e.z - t.z;
        }
      } else {
        return e.material.id - t.material.id;
      }
    } else {
      return e.renderOrder - t.renderOrder;
    }
  } else {
    return e.groupOrder - t.groupOrder;
  }
}
function Wo(e, t) {
  if (e.groupOrder === t.groupOrder) {
    if (e.renderOrder === t.renderOrder) {
      if (e.z === t.z) {
        return e.id - t.id;
      } else {
        return t.z - e.z;
      }
    } else {
      return e.renderOrder - t.renderOrder;
    }
  } else {
    return e.groupOrder - t.groupOrder;
  }
}
function Go() {
  let e = [];
  let t = 0;
  let n = [];
  let r = [];
  let i = [];
  function a() {
    t = 0;
    n.length = 0;
    r.length = 0;
    i.length = 0;
  }
  function o(n, r, i, a, o, s) {
    let c = e[t];
    if (c === undefined) {
      c = {
        id: n.id,
        object: n,
        geometry: r,
        material: i,
        groupOrder: a,
        renderOrder: n.renderOrder,
        z: o,
        group: s
      };
      e[t] = c;
    } else {
      c.id = n.id;
      c.object = n;
      c.geometry = r;
      c.material = i;
      c.groupOrder = a;
      c.renderOrder = n.renderOrder;
      c.z = o;
      c.group = s;
    }
    t++;
    return c;
  }
  function s(e, t, a, s, c, l) {
    let u = o(e, t, a, s, c, l);
    if (a.transmission > 0) {
      r.push(u);
    } else if (a.transparent === true) {
      i.push(u);
    } else {
      n.push(u);
    }
  }
  function c(e, t, a, s, c, l) {
    let u = o(e, t, a, s, c, l);
    if (a.transmission > 0) {
      r.unshift(u);
    } else if (a.transparent === true) {
      i.unshift(u);
    } else {
      n.unshift(u);
    }
  }
  function l(e, t) {
    if (n.length > 1) {
      n.sort(e || Uo);
    }
    if (r.length > 1) {
      r.sort(t || Wo);
    }
    if (i.length > 1) {
      i.sort(t || Wo);
    }
  }
  function u() {
    for (let n = t, r = e.length; n < r; n++) {
      let t = e[n];
      if (t.id === null) {
        break;
      }
      t.id = null;
      t.object = null;
      t.geometry = null;
      t.material = null;
      t.group = null;
    }
  }
  return {
    opaque: n,
    transmissive: r,
    transparent: i,
    init: a,
    push: s,
    unshift: c,
    finish: u,
    sort: l
  };
}
function Ko() {
  let e = new WeakMap();
  function t(t, n) {
    let r = e.get(t);
    let i;
    if (r === undefined) {
      i = new Go();
      e.set(t, [i]);
    } else if (n >= r.length) {
      i = new Go();
      r.push(i);
    } else {
      i = r[n];
    }
    return i;
  }
  function n() {
    e = new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
function qo() {
  let e = {};
  return {
    get: function (t) {
      if (e[t.id] !== undefined) {
        return e[t.id];
      }
      let n;
      switch (t.type) {
        case `DirectionalLight`:
          n = {
            direction: new G(),
            color: new q()
          };
          break;
        case `SpotLight`:
          n = {
            position: new G(),
            direction: new G(),
            color: new q(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case `PointLight`:
          n = {
            position: new G(),
            color: new q(),
            distance: 0,
            decay: 0
          };
          break;
        case `HemisphereLight`:
          n = {
            direction: new G(),
            skyColor: new q(),
            groundColor: new q()
          };
          break;
        case `RectAreaLight`:
          n = {
            color: new q(),
            position: new G(),
            halfWidth: new G(),
            halfHeight: new G()
          };
      }
      e[t.id] = n;
      return n;
    }
  };
}
function Jo() {
  let e = {};
  return {
    get: function (t) {
      if (e[t.id] !== undefined) {
        return e[t.id];
      }
      let n;
      switch (t.type) {
        case `DirectionalLight`:
          n = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new H()
          };
          break;
        case `SpotLight`:
          n = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new H()
          };
          break;
        case `PointLight`:
          n = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new H(),
            shadowCameraNear: 1,
            shadowCameraFar: 1000
          };
      }
      e[t.id] = n;
      return n;
    }
  };
}
var Yo = 0;
function Xo(e, t) {
  return (t.castShadow ? 2 : 0) - (e.castShadow ? 2 : 0) + +!!t.map - !!e.map;
}
function Zo(e) {
  let t = new qo();
  let n = Jo();
  let r = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let e = 0; e < 9; e++) {
    r.probe.push(new G());
  }
  let i = new G();
  let a = new K();
  let o = new K();
  function s(i) {
    let a = 0;
    let o = 0;
    let s = 0;
    for (let e = 0; e < 9; e++) {
      r.probe[e].set(0, 0, 0);
    }
    let c = 0;
    let l = 0;
    let u = 0;
    let d = 0;
    let f = 0;
    let p = 0;
    let m = 0;
    let h = 0;
    let g = 0;
    let _ = 0;
    let v = 0;
    i.sort(Xo);
    for (let e = 0, y = i.length; e < y; e++) {
      let y = i[e];
      let b = y.color;
      let x = y.intensity;
      let S = y.distance;
      let C = y.shadow && y.shadow.map ? y.shadow.map.texture : null;
      if (y.isAmbientLight) {
        a += b.r * x;
        o += b.g * x;
        s += b.b * x;
      } else if (y.isLightProbe) {
        for (let e = 0; e < 9; e++) {
          r.probe[e].addScaledVector(y.sh.coefficients[e], x);
        }
        v++;
      } else if (y.isDirectionalLight) {
        let e = t.get(y);
        e.color.copy(y.color).multiplyScalar(y.intensity);
        if (y.castShadow) {
          let e = y.shadow;
          let t = n.get(y);
          t.shadowIntensity = e.intensity;
          t.shadowBias = e.bias;
          t.shadowNormalBias = e.normalBias;
          t.shadowRadius = e.radius;
          t.shadowMapSize = e.mapSize;
          r.directionalShadow[c] = t;
          r.directionalShadowMap[c] = C;
          r.directionalShadowMatrix[c] = y.shadow.matrix;
          p++;
        }
        r.directional[c] = e;
        c++;
      } else if (y.isSpotLight) {
        let e = t.get(y);
        e.position.setFromMatrixPosition(y.matrixWorld);
        e.color.copy(b).multiplyScalar(x);
        e.distance = S;
        e.coneCos = Math.cos(y.angle);
        e.penumbraCos = Math.cos(y.angle * (1 - y.penumbra));
        e.decay = y.decay;
        r.spot[u] = e;
        let i = y.shadow;
        if (y.map) {
          r.spotLightMap[g] = y.map;
          g++;
          i.updateMatrices(y);
          if (y.castShadow) {
            _++;
          }
        }
        r.spotLightMatrix[u] = i.matrix;
        if (y.castShadow) {
          let e = n.get(y);
          e.shadowIntensity = i.intensity;
          e.shadowBias = i.bias;
          e.shadowNormalBias = i.normalBias;
          e.shadowRadius = i.radius;
          e.shadowMapSize = i.mapSize;
          r.spotShadow[u] = e;
          r.spotShadowMap[u] = C;
          h++;
        }
        u++;
      } else if (y.isRectAreaLight) {
        let e = t.get(y);
        e.color.copy(b).multiplyScalar(x);
        e.halfWidth.set(y.width * 0.5, 0, 0);
        e.halfHeight.set(0, y.height * 0.5, 0);
        r.rectArea[d] = e;
        d++;
      } else if (y.isPointLight) {
        let e = t.get(y);
        e.color.copy(y.color).multiplyScalar(y.intensity);
        e.distance = y.distance;
        e.decay = y.decay;
        if (y.castShadow) {
          let e = y.shadow;
          let t = n.get(y);
          t.shadowIntensity = e.intensity;
          t.shadowBias = e.bias;
          t.shadowNormalBias = e.normalBias;
          t.shadowRadius = e.radius;
          t.shadowMapSize = e.mapSize;
          t.shadowCameraNear = e.camera.near;
          t.shadowCameraFar = e.camera.far;
          r.pointShadow[l] = t;
          r.pointShadowMap[l] = C;
          r.pointShadowMatrix[l] = y.shadow.matrix;
          m++;
        }
        r.point[l] = e;
        l++;
      } else if (y.isHemisphereLight) {
        let e = t.get(y);
        e.skyColor.copy(y.color).multiplyScalar(x);
        e.groundColor.copy(y.groundColor).multiplyScalar(x);
        r.hemi[f] = e;
        f++;
      }
    }
    if (d > 0) {
      if (e.has(`OES_texture_float_linear`) === true) {
        r.rectAreaLTC1 = X.LTC_FLOAT_1;
        r.rectAreaLTC2 = X.LTC_FLOAT_2;
      } else {
        r.rectAreaLTC1 = X.LTC_HALF_1;
        r.rectAreaLTC2 = X.LTC_HALF_2;
      }
    }
    r.ambient[0] = a;
    r.ambient[1] = o;
    r.ambient[2] = s;
    let y = r.hash;
    if (y.directionalLength !== c || y.pointLength !== l || y.spotLength !== u || y.rectAreaLength !== d || y.hemiLength !== f || y.numDirectionalShadows !== p || y.numPointShadows !== m || y.numSpotShadows !== h || y.numSpotMaps !== g || y.numLightProbes !== v) {
      r.directional.length = c;
      r.spot.length = u;
      r.rectArea.length = d;
      r.point.length = l;
      r.hemi.length = f;
      r.directionalShadow.length = p;
      r.directionalShadowMap.length = p;
      r.pointShadow.length = m;
      r.pointShadowMap.length = m;
      r.spotShadow.length = h;
      r.spotShadowMap.length = h;
      r.directionalShadowMatrix.length = p;
      r.pointShadowMatrix.length = m;
      r.spotLightMatrix.length = h + g - _;
      r.spotLightMap.length = g;
      r.numSpotLightShadowsWithMaps = _;
      r.numLightProbes = v;
      y.directionalLength = c;
      y.pointLength = l;
      y.spotLength = u;
      y.rectAreaLength = d;
      y.hemiLength = f;
      y.numDirectionalShadows = p;
      y.numPointShadows = m;
      y.numSpotShadows = h;
      y.numSpotMaps = g;
      y.numLightProbes = v;
      r.version = Yo++;
    }
  }
  function c(e, t) {
    let n = 0;
    let s = 0;
    let c = 0;
    let l = 0;
    let u = 0;
    let d = t.matrixWorldInverse;
    for (let t = 0, f = e.length; t < f; t++) {
      let f = e[t];
      if (f.isDirectionalLight) {
        let e = r.directional[n];
        e.direction.setFromMatrixPosition(f.matrixWorld);
        i.setFromMatrixPosition(f.target.matrixWorld);
        e.direction.sub(i);
        e.direction.transformDirection(d);
        n++;
      } else if (f.isSpotLight) {
        let e = r.spot[c];
        e.position.setFromMatrixPosition(f.matrixWorld);
        e.position.applyMatrix4(d);
        e.direction.setFromMatrixPosition(f.matrixWorld);
        i.setFromMatrixPosition(f.target.matrixWorld);
        e.direction.sub(i);
        e.direction.transformDirection(d);
        c++;
      } else if (f.isRectAreaLight) {
        let e = r.rectArea[l];
        e.position.setFromMatrixPosition(f.matrixWorld);
        e.position.applyMatrix4(d);
        o.identity();
        a.copy(f.matrixWorld);
        a.premultiply(d);
        o.extractRotation(a);
        e.halfWidth.set(f.width * 0.5, 0, 0);
        e.halfHeight.set(0, f.height * 0.5, 0);
        e.halfWidth.applyMatrix4(o);
        e.halfHeight.applyMatrix4(o);
        l++;
      } else if (f.isPointLight) {
        let e = r.point[s];
        e.position.setFromMatrixPosition(f.matrixWorld);
        e.position.applyMatrix4(d);
        s++;
      } else if (f.isHemisphereLight) {
        let e = r.hemi[u];
        e.direction.setFromMatrixPosition(f.matrixWorld);
        e.direction.transformDirection(d);
        u++;
      }
    }
  }
  return {
    setup: s,
    setupView: c,
    state: r
  };
}
function Qo(e) {
  let t = new Zo(e);
  let n = [];
  let r = [];
  function i(e) {
    l.camera = e;
    n.length = 0;
    r.length = 0;
  }
  function a(e) {
    n.push(e);
  }
  function o(e) {
    r.push(e);
  }
  function s() {
    t.setup(n);
  }
  function c(e) {
    t.setupView(n, e);
  }
  let l = {
    lightsArray: n,
    shadowsArray: r,
    camera: null,
    lights: t,
    transmissionRenderTarget: {}
  };
  return {
    init: i,
    state: l,
    setupLights: s,
    setupLightsView: c,
    pushLight: a,
    pushShadow: o
  };
}
function $o(e) {
  let t = new WeakMap();
  function n(n, r = 0) {
    let i = t.get(n);
    let a;
    if (i === undefined) {
      a = new Qo(e);
      t.set(n, [a]);
    } else if (r >= i.length) {
      a = new Qo(e);
      i.push(a);
    } else {
      a = i[r];
    }
    return a;
  }
  function r() {
    t = new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
var es = class extends ur {
  static get type() {
    return `MeshDepthMaterial`;
  }
  constructor(e) {
    super();
    this.isMeshDepthMaterial = true;
    this.depthPacking = je;
    this.map = null;
    this.alphaMap = null;
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.setValues(e);
  }
  copy(e) {
    super.copy(e);
    this.depthPacking = e.depthPacking;
    this.map = e.map;
    this.alphaMap = e.alphaMap;
    this.displacementMap = e.displacementMap;
    this.displacementScale = e.displacementScale;
    this.displacementBias = e.displacementBias;
    this.wireframe = e.wireframe;
    this.wireframeLinewidth = e.wireframeLinewidth;
    return this;
  }
};
var ts = class extends ur {
  static get type() {
    return `MeshDistanceMaterial`;
  }
  constructor(e) {
    super();
    this.isMeshDistanceMaterial = true;
    this.map = null;
    this.alphaMap = null;
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.setValues(e);
  }
  copy(e) {
    super.copy(e);
    this.map = e.map;
    this.alphaMap = e.alphaMap;
    this.displacementMap = e.displacementMap;
    this.displacementScale = e.displacementScale;
    this.displacementBias = e.displacementBias;
    return this;
  }
};
var ns = `void main() {
	gl_Position = vec4( position, 1.0 );
}`;
var rs = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function is(e, t, n) {
  let i = new ui();
  let a = new H();
  let o = new H();
  let s = new Ft();
  let c = new es({
    depthPacking: Me
  });
  let l = new ts();
  let u = {};
  let d = n.maxTextureSize;
  let f = {
    0: 1,
    1: 0,
    2: 2
  };
  let p = new qr({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: {
        value: null
      },
      resolution: {
        value: new H()
      },
      radius: {
        value: 4
      }
    },
    vertexShader: ns,
    fragmentShader: rs
  });
  let m = p.clone();
  m.defines.HORIZONTAL_PASS = 1;
  let h = new Tr();
  h.setAttribute(`position`, new mr(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  let g = new Lr(h, p);
  let _ = this;
  this.enabled = false;
  this.autoUpdate = true;
  this.needsUpdate = false;
  this.type = 1;
  let v = this.type;
  this.render = function (t, n, c) {
    if (_.enabled === false || _.autoUpdate === false && _.needsUpdate === false || t.length === 0) {
      return;
    }
    let l = e.getRenderTarget();
    let u = e.getActiveCubeFace();
    let f = e.getActiveMipmapLevel();
    let p = e.state;
    p.setBlending(0);
    p.buffers.color.setClear(1, 1, 1, 1);
    p.buffers.depth.setTest(true);
    p.setScissorTest(false);
    let m = v !== 3 && this.type === 3;
    let h = v === 3 && this.type !== 3;
    for (let l = 0, u = t.length; l < u; l++) {
      let u = t[l];
      let f = u.shadow;
      if (f === undefined) {
        console.warn(`THREE.WebGLShadowMap:`, u, `has no shadow.`);
        continue;
      }
      if (f.autoUpdate === false && f.needsUpdate === false) {
        continue;
      }
      a.copy(f.mapSize);
      let g = f.getFrameExtents();
      a.multiply(g);
      o.copy(f.mapSize);
      if (a.x > d || a.y > d) {
        if (a.x > d) {
          o.x = Math.floor(d / g.x);
          a.x = o.x * g.x;
          f.mapSize.x = o.x;
        }
        if (a.y > d) {
          o.y = Math.floor(d / g.y);
          a.y = o.y * g.y;
          f.mapSize.y = o.y;
        }
      }
      if (f.map === null || m === true || h === true) {
        let e = this.type === 3 ? {} : {
          minFilter: r,
          magFilter: r
        };
        if (f.map !== null) {
          f.map.dispose();
        }
        f.map = new Lt(a.x, a.y, e);
        f.map.texture.name = `${u.name}.shadowMap`;
        f.camera.updateProjectionMatrix();
      }
      e.setRenderTarget(f.map);
      e.clear();
      let _ = f.getViewportCount();
      for (let e = 0; e < _; e++) {
        let t = f.getViewport(e);
        s.set(o.x * t.x, o.y * t.y, o.x * t.z, o.y * t.w);
        p.viewport(s);
        f.updateMatrices(u, e);
        i = f.getFrustum();
        x(n, c, f.camera, u, this.type);
      }
      if (f.isPointLightShadow !== true && this.type === 3) {
        y(f, c);
      }
      f.needsUpdate = false;
    }
    v = this.type;
    _.needsUpdate = false;
    e.setRenderTarget(l, u, f);
  };
  function y(n, r) {
    let i = t.update(g);
    if (p.defines.VSM_SAMPLES !== n.blurSamples) {
      p.defines.VSM_SAMPLES = n.blurSamples;
      m.defines.VSM_SAMPLES = n.blurSamples;
      p.needsUpdate = true;
      m.needsUpdate = true;
    }
    if (n.mapPass === null) {
      n.mapPass = new Lt(a.x, a.y);
    }
    p.uniforms.shadow_pass.value = n.map.texture;
    p.uniforms.resolution.value = n.mapSize;
    p.uniforms.radius.value = n.radius;
    e.setRenderTarget(n.mapPass);
    e.clear();
    e.renderBufferDirect(r, null, i, p, g, null);
    m.uniforms.shadow_pass.value = n.mapPass.texture;
    m.uniforms.resolution.value = n.mapSize;
    m.uniforms.radius.value = n.radius;
    e.setRenderTarget(n.map);
    e.clear();
    e.renderBufferDirect(r, null, i, m, g, null);
  }
  function b(t, n, r, i) {
    let a = null;
    let o = r.isPointLight === true ? t.customDistanceMaterial : t.customDepthMaterial;
    if (o !== undefined) {
      a = o;
    } else {
      a = r.isPointLight === true ? l : c;
      if (e.localClippingEnabled && n.clipShadows === true && Array.isArray(n.clippingPlanes) && n.clippingPlanes.length !== 0 || n.displacementMap && n.displacementScale !== 0 || n.alphaMap && n.alphaTest > 0 || n.map && n.alphaTest > 0) {
        let e = a.uuid;
        let t = n.uuid;
        let r = u[e];
        if (r === undefined) {
          r = {};
          u[e] = r;
        }
        let i = r[t];
        if (i === undefined) {
          i = a.clone();
          r[t] = i;
          n.addEventListener(`dispose`, S);
        }
        a = i;
      }
    }
    a.visible = n.visible;
    a.wireframe = n.wireframe;
    if (i === 3) {
      a.side = n.shadowSide === null ? n.side : n.shadowSide;
    } else {
      a.side = n.shadowSide === null ? f[n.side] : n.shadowSide;
    }
    a.alphaMap = n.alphaMap;
    a.alphaTest = n.alphaTest;
    a.map = n.map;
    a.clipShadows = n.clipShadows;
    a.clippingPlanes = n.clippingPlanes;
    a.clipIntersection = n.clipIntersection;
    a.displacementMap = n.displacementMap;
    a.displacementScale = n.displacementScale;
    a.displacementBias = n.displacementBias;
    a.wireframeLinewidth = n.wireframeLinewidth;
    a.linewidth = n.linewidth;
    if (r.isPointLight === true && a.isMeshDistanceMaterial === true) {
      let t = e.properties.get(a);
      t.light = r;
    }
    return a;
  }
  function x(n, r, a, o, s) {
    if (n.visible === false) {
      return;
    }
    if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && s === 3) && (!n.frustumCulled || i.intersectsObject(n))) {
      n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
      let i = t.update(n);
      let c = n.material;
      if (Array.isArray(c)) {
        let t = i.groups;
        for (let l = 0, u = t.length; l < u; l++) {
          let u = t[l];
          let d = c[u.materialIndex];
          if (d && d.visible) {
            let t = b(n, d, o, s);
            n.onBeforeShadow(e, n, r, a, i, t, u);
            e.renderBufferDirect(a, null, i, t, n, u);
            n.onAfterShadow(e, n, r, a, i, t, u);
          }
        }
      } else if (c.visible) {
        let t = b(n, c, o, s);
        n.onBeforeShadow(e, n, r, a, i, t, null);
        e.renderBufferDirect(a, null, i, t, n, null);
        n.onAfterShadow(e, n, r, a, i, t, null);
      }
    }
    let c = n.children;
    for (let e = 0, t = c.length; e < t; e++) {
      x(c[e], r, a, o, s);
    }
  }
  function S(e) {
    e.target.removeEventListener(`dispose`, S);
    for (let t in u) {
      let n = u[t];
      let r = e.target.uuid;
      if (r in n) {
        n[r].dispose();
        delete n[r];
      }
    }
  }
}
var as = {
  0: 1,
  2: 6,
  4: 7,
  3: 5,
  1: 0,
  6: 2,
  7: 4,
  5: 3
};
function os(e, t) {
  function n() {
    let t = false;
    let n = new Ft();
    let r = null;
    let i = new Ft(0, 0, 0, 0);
    return {
      setMask: function (n) {
        if (r !== n && !t) {
          e.colorMask(n, n, n, n);
          r = n;
        }
      },
      setLocked: function (e) {
        t = e;
      },
      setClear: function (t, r, a, o, s) {
        if (s === true) {
          t *= o;
          r *= o;
          a *= o;
        }
        n.set(t, r, a, o);
        if (i.equals(n) === false) {
          e.clearColor(t, r, a, o);
          i.copy(n);
        }
      },
      reset: function () {
        t = false;
        r = null;
        i.set(-1, 0, 0, 0);
      }
    };
  }
  function r() {
    let n = false;
    let r = false;
    let i = null;
    let a = null;
    let o = null;
    return {
      setReversed: function (e) {
        if (r !== e) {
          let e = t.get(`EXT_clip_control`);
          if (r) {
            e.clipControlEXT(e.LOWER_LEFT_EXT, e.ZERO_TO_ONE_EXT);
          } else {
            e.clipControlEXT(e.LOWER_LEFT_EXT, e.NEGATIVE_ONE_TO_ONE_EXT);
          }
          let n = o;
          o = null;
          this.setClear(n);
        }
        r = e;
      },
      getReversed: function () {
        return r;
      },
      setTest: function (t) {
        if (t) {
          F(e.DEPTH_TEST);
        } else {
          ce(e.DEPTH_TEST);
        }
      },
      setMask: function (t) {
        if (i !== t && !n) {
          e.depthMask(t);
          i = t;
        }
      },
      setFunc: function (t) {
        if (r) {
          t = as[t];
        }
        if (a !== t) {
          switch (t) {
            case 0:
              e.depthFunc(e.NEVER);
              break;
            case 1:
              e.depthFunc(e.ALWAYS);
              break;
            case 2:
              e.depthFunc(e.LESS);
              break;
            case 3:
              e.depthFunc(e.LEQUAL);
              break;
            case 4:
              e.depthFunc(e.EQUAL);
              break;
            case 5:
              e.depthFunc(e.GEQUAL);
              break;
            case 6:
              e.depthFunc(e.GREATER);
              break;
            case 7:
              e.depthFunc(e.NOTEQUAL);
              break;
            default:
              e.depthFunc(e.LEQUAL);
          }
          a = t;
        }
      },
      setLocked: function (e) {
        n = e;
      },
      setClear: function (t) {
        if (o !== t) {
          if (r) {
            t = 1 - t;
          }
          e.clearDepth(t);
          o = t;
        }
      },
      reset: function () {
        n = false;
        i = null;
        a = null;
        o = null;
        r = false;
      }
    };
  }
  function i() {
    let t = false;
    let n = null;
    let r = null;
    let i = null;
    let a = null;
    let o = null;
    let s = null;
    let c = null;
    let l = null;
    return {
      setTest: function (n) {
        if (!t) {
          if (n) {
            F(e.STENCIL_TEST);
          } else {
            ce(e.STENCIL_TEST);
          }
        }
      },
      setMask: function (r) {
        if (n !== r && !t) {
          e.stencilMask(r);
          n = r;
        }
      },
      setFunc: function (t, n, o) {
        if (r !== t || i !== n || a !== o) {
          e.stencilFunc(t, n, o);
          r = t;
          i = n;
          a = o;
        }
      },
      setOp: function (t, n, r) {
        if (o !== t || s !== n || c !== r) {
          e.stencilOp(t, n, r);
          o = t;
          s = n;
          c = r;
        }
      },
      setLocked: function (e) {
        t = e;
      },
      setClear: function (t) {
        if (l !== t) {
          e.clearStencil(t);
          l = t;
        }
      },
      reset: function () {
        t = false;
        n = null;
        r = null;
        i = null;
        a = null;
        o = null;
        s = null;
        c = null;
        l = null;
      }
    };
  }
  let a = new n();
  let o = new r();
  let s = new i();
  let c = new WeakMap();
  let l = new WeakMap();
  let u = {};
  let d = {};
  let f = new WeakMap();
  let p = [];
  let m = null;
  let h = false;
  let g = null;
  let _ = null;
  let v = null;
  let y = null;
  let b = null;
  let x = null;
  let S = null;
  let C = new q(0, 0, 0);
  let w = 0;
  let T = false;
  let E = null;
  let D = null;
  let O = null;
  let k = null;
  let A = null;
  let j = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let ee = false;
  let te = 0;
  let M = e.getParameter(e.VERSION);
  if (M.indexOf(`WebGL`) === -1) {
    if (M.indexOf(`OpenGL ES`) !== -1) {
      te = parseFloat(/^OpenGL ES (\d)/.exec(M)[1]);
      ee = te >= 2;
    }
  } else {
    te = parseFloat(/^WebGL (\d)/.exec(M)[1]);
    ee = te >= 1;
  }
  let N = null;
  let P = {};
  let ne = e.getParameter(e.SCISSOR_BOX);
  let re = e.getParameter(e.VIEWPORT);
  let ie = new Ft().fromArray(ne);
  let ae = new Ft().fromArray(re);
  function oe(t, n, r, i) {
    let a = new Uint8Array(4);
    let o = e.createTexture();
    e.bindTexture(t, o);
    e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST);
    e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST);
    for (let o = 0; o < r; o++) {
      if (t === e.TEXTURE_3D || t === e.TEXTURE_2D_ARRAY) {
        e.texImage3D(n, 0, e.RGBA, 1, 1, i, 0, e.RGBA, e.UNSIGNED_BYTE, a);
      } else {
        e.texImage2D(n + o, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, a);
      }
    }
    return o;
  }
  let se = {};
  se[e.TEXTURE_2D] = oe(e.TEXTURE_2D, e.TEXTURE_2D, 1);
  se[e.TEXTURE_CUBE_MAP] = oe(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6);
  se[e.TEXTURE_2D_ARRAY] = oe(e.TEXTURE_2D_ARRAY, e.TEXTURE_2D_ARRAY, 1, 1);
  se[e.TEXTURE_3D] = oe(e.TEXTURE_3D, e.TEXTURE_3D, 1, 1);
  a.setClear(0, 0, 0, 1);
  o.setClear(1);
  s.setClear(0);
  F(e.DEPTH_TEST);
  o.setFunc(3);
  I(false);
  ge(1);
  F(e.CULL_FACE);
  me(0);
  function F(t) {
    if (u[t] !== true) {
      e.enable(t);
      u[t] = true;
    }
  }
  function ce(t) {
    if (u[t] !== false) {
      e.disable(t);
      u[t] = false;
    }
  }
  function le(t, n) {
    return d[t] !== n && (e.bindFramebuffer(t, n), d[t] = n, t === e.DRAW_FRAMEBUFFER && (d[e.FRAMEBUFFER] = n), t === e.FRAMEBUFFER && (d[e.DRAW_FRAMEBUFFER] = n), true);
  }
  function ue(t, n) {
    let r = p;
    let i = false;
    if (t) {
      r = f.get(n);
      if (r === undefined) {
        r = [];
        f.set(n, r);
      }
      let a = t.textures;
      if (r.length !== a.length || r[0] !== e.COLOR_ATTACHMENT0) {
        for (let t = 0, n = a.length; t < n; t++) {
          r[t] = e.COLOR_ATTACHMENT0 + t;
        }
        r.length = a.length;
        i = true;
      }
    } else if (r[0] !== e.BACK) {
      r[0] = e.BACK;
      i = true;
    }
    if (i) {
      e.drawBuffers(r);
    }
  }
  function de(t) {
    return m !== t && (e.useProgram(t), m = t, true);
  }
  let fe = {
    100: e.FUNC_ADD,
    101: e.FUNC_SUBTRACT,
    102: e.FUNC_REVERSE_SUBTRACT
  };
  fe[103] = e.MIN;
  fe[104] = e.MAX;
  let pe = {
    200: e.ZERO,
    201: e.ONE,
    202: e.SRC_COLOR,
    204: e.SRC_ALPHA,
    210: e.SRC_ALPHA_SATURATE,
    208: e.DST_COLOR,
    206: e.DST_ALPHA,
    203: e.ONE_MINUS_SRC_COLOR,
    205: e.ONE_MINUS_SRC_ALPHA,
    209: e.ONE_MINUS_DST_COLOR,
    207: e.ONE_MINUS_DST_ALPHA,
    211: e.CONSTANT_COLOR,
    212: e.ONE_MINUS_CONSTANT_COLOR,
    213: e.CONSTANT_ALPHA,
    214: e.ONE_MINUS_CONSTANT_ALPHA
  };
  function me(t, n, r, i, a, o, s, c, l, u) {
    if (t === 0) {
      if (h === true) {
        ce(e.BLEND);
        h = false;
      }
    } else {
      if (h === false) {
        F(e.BLEND);
        h = true;
      }
      if (t !== 5) {
        if (t !== g || u !== T) {
          if (_ !== 100 || b !== 100) {
            e.blendEquation(e.FUNC_ADD);
            _ = 100;
            b = 100;
          }
          if (u) {
            switch (t) {
              case 1:
                e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
                break;
              case 2:
                e.blendFunc(e.ONE, e.ONE);
                break;
              case 3:
                e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
                break;
              case 4:
                e.blendFuncSeparate(e.ZERO, e.SRC_COLOR, e.ZERO, e.SRC_ALPHA);
                break;
              default:
                console.error(`THREE.WebGLState: Invalid blending: `, t);
            }
          } else {
            switch (t) {
              case 1:
                e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
                break;
              case 2:
                e.blendFunc(e.SRC_ALPHA, e.ONE);
                break;
              case 3:
                e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
                break;
              case 4:
                e.blendFunc(e.ZERO, e.SRC_COLOR);
                break;
              default:
                console.error(`THREE.WebGLState: Invalid blending: `, t);
            }
          }
          v = null;
          y = null;
          x = null;
          S = null;
          C.set(0, 0, 0);
          w = 0;
          g = t;
          T = u;
        }
      } else {
        a ||= n;
        o ||= r;
        s ||= i;
        if (n !== _ || a !== b) {
          e.blendEquationSeparate(fe[n], fe[a]);
          _ = n;
          b = a;
        }
        if (r !== v || i !== y || o !== x || s !== S) {
          e.blendFuncSeparate(pe[r], pe[i], pe[o], pe[s]);
          v = r;
          y = i;
          x = o;
          S = s;
        }
        if (c.equals(C) === false || l !== w) {
          e.blendColor(c.r, c.g, c.b, l);
          C.copy(c);
          w = l;
        }
        g = t;
        T = false;
      }
    }
  }
  function he(t, n) {
    if (t.side === 2) {
      ce(e.CULL_FACE);
    } else {
      F(e.CULL_FACE);
    }
    let r = t.side === 1;
    if (n) {
      r = !r;
    }
    I(r);
    if (t.blending === 1 && t.transparent === false) {
      me(0);
    } else {
      me(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.blendColor, t.blendAlpha, t.premultipliedAlpha);
    }
    o.setFunc(t.depthFunc);
    o.setTest(t.depthTest);
    o.setMask(t.depthWrite);
    a.setMask(t.colorWrite);
    let i = t.stencilWrite;
    s.setTest(i);
    if (i) {
      s.setMask(t.stencilWriteMask);
      s.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask);
      s.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass);
    }
    ve(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits);
    if (t.alphaToCoverage === true) {
      F(e.SAMPLE_ALPHA_TO_COVERAGE);
    } else {
      ce(e.SAMPLE_ALPHA_TO_COVERAGE);
    }
  }
  function I(t) {
    if (E !== t) {
      if (t) {
        e.frontFace(e.CW);
      } else {
        e.frontFace(e.CCW);
      }
      E = t;
    }
  }
  function ge(t) {
    if (t === 0) {
      ce(e.CULL_FACE);
    } else {
      F(e.CULL_FACE);
      if (t !== D) {
        if (t === 1) {
          e.cullFace(e.BACK);
        } else if (t === 2) {
          e.cullFace(e.FRONT);
        } else {
          e.cullFace(e.FRONT_AND_BACK);
        }
      }
    }
    D = t;
  }
  function _e(t) {
    if (t !== O) {
      if (ee) {
        e.lineWidth(t);
      }
      O = t;
    }
  }
  function ve(t, n, r) {
    if (t) {
      F(e.POLYGON_OFFSET_FILL);
      if (k !== n || A !== r) {
        e.polygonOffset(n, r);
        k = n;
        A = r;
      }
    } else {
      ce(e.POLYGON_OFFSET_FILL);
    }
  }
  function L(t) {
    if (t) {
      F(e.SCISSOR_TEST);
    } else {
      ce(e.SCISSOR_TEST);
    }
  }
  function ye(t = e.TEXTURE0 + j - 1) {
    if (N !== t) {
      e.activeTexture(t);
      N = t;
    }
  }
  function R(t, n, r = N === null ? e.TEXTURE0 + j - 1 : N) {
    let i = P[r];
    if (i === undefined) {
      i = {
        type: undefined,
        texture: undefined
      };
      P[r] = i;
    }
    if (i.type !== t || i.texture !== n) {
      if (N !== r) {
        e.activeTexture(r);
        N = r;
      }
      e.bindTexture(t, n || se[t]);
      i.type = t;
      i.texture = n;
    }
  }
  function z() {
    let t = P[N];
    if (t !== undefined && t.type !== undefined) {
      e.bindTexture(t.type, null);
      t.type = undefined;
      t.texture = undefined;
    }
  }
  function be() {
    try {
      e.compressedTexImage2D.apply(e, arguments);
    } catch (e) {
      console.error(`THREE.WebGLState:`, e);
    }
  }
  function xe() {
    try {
      e.compressedTexImage3D.apply(e, arguments);
    } catch (e) {
      console.error(`THREE.WebGLState:`, e);
    }
  }
  function Se() {
    try {
      e.texSubImage2D.apply(e, arguments);
    } catch (e) {
      console.error(`THREE.WebGLState:`, e);
    }
  }
  function Ce() {
    try {
      e.texSubImage3D.apply(e, arguments);
    } catch (e) {
      console.error(`THREE.WebGLState:`, e);
    }
  }
  function we() {
    try {
      e.compressedTexSubImage2D.apply(e, arguments);
    } catch (e) {
      console.error(`THREE.WebGLState:`, e);
    }
  }
  function Te() {
    try {
      e.compressedTexSubImage3D.apply(e, arguments);
    } catch (e) {
      console.error(`THREE.WebGLState:`, e);
    }
  }
  function Ee() {
    try {
      e.texStorage2D.apply(e, arguments);
    } catch (e) {
      console.error(`THREE.WebGLState:`, e);
    }
  }
  function De() {
    try {
      e.texStorage3D.apply(e, arguments);
    } catch (e) {
      console.error(`THREE.WebGLState:`, e);
    }
  }
  function Oe() {
    try {
      e.texImage2D.apply(e, arguments);
    } catch (e) {
      console.error(`THREE.WebGLState:`, e);
    }
  }
  function ke() {
    try {
      e.texImage3D.apply(e, arguments);
    } catch (e) {
      console.error(`THREE.WebGLState:`, e);
    }
  }
  function Ae(t) {
    if (ie.equals(t) === false) {
      e.scissor(t.x, t.y, t.z, t.w);
      ie.copy(t);
    }
  }
  function je(t) {
    if (ae.equals(t) === false) {
      e.viewport(t.x, t.y, t.z, t.w);
      ae.copy(t);
    }
  }
  function Me(t, n) {
    let r = l.get(n);
    if (r === undefined) {
      r = new WeakMap();
      l.set(n, r);
    }
    let i = r.get(t);
    if (i === undefined) {
      i = e.getUniformBlockIndex(n, t.name);
      r.set(t, i);
    }
  }
  function Ne(t, n) {
    let r = l.get(n).get(t);
    if (c.get(n) !== r) {
      e.uniformBlockBinding(n, r, t.__bindingPointIndex);
      c.set(n, r);
    }
  }
  function Pe() {
    e.disable(e.BLEND);
    e.disable(e.CULL_FACE);
    e.disable(e.DEPTH_TEST);
    e.disable(e.POLYGON_OFFSET_FILL);
    e.disable(e.SCISSOR_TEST);
    e.disable(e.STENCIL_TEST);
    e.disable(e.SAMPLE_ALPHA_TO_COVERAGE);
    e.blendEquation(e.FUNC_ADD);
    e.blendFunc(e.ONE, e.ZERO);
    e.blendFuncSeparate(e.ONE, e.ZERO, e.ONE, e.ZERO);
    e.blendColor(0, 0, 0, 0);
    e.colorMask(true, true, true, true);
    e.clearColor(0, 0, 0, 0);
    e.depthMask(true);
    e.depthFunc(e.LESS);
    o.setReversed(false);
    e.clearDepth(1);
    e.stencilMask(4294967295);
    e.stencilFunc(e.ALWAYS, 0, 4294967295);
    e.stencilOp(e.KEEP, e.KEEP, e.KEEP);
    e.clearStencil(0);
    e.cullFace(e.BACK);
    e.frontFace(e.CCW);
    e.polygonOffset(0, 0);
    e.activeTexture(e.TEXTURE0);
    e.bindFramebuffer(e.FRAMEBUFFER, null);
    e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null);
    e.bindFramebuffer(e.READ_FRAMEBUFFER, null);
    e.useProgram(null);
    e.lineWidth(1);
    e.scissor(0, 0, e.canvas.width, e.canvas.height);
    e.viewport(0, 0, e.canvas.width, e.canvas.height);
    u = {};
    N = null;
    P = {};
    d = {};
    f = new WeakMap();
    p = [];
    m = null;
    h = false;
    g = null;
    _ = null;
    v = null;
    y = null;
    b = null;
    x = null;
    S = null;
    C = new q(0, 0, 0);
    w = 0;
    T = false;
    E = null;
    D = null;
    O = null;
    k = null;
    A = null;
    ie.set(0, 0, e.canvas.width, e.canvas.height);
    ae.set(0, 0, e.canvas.width, e.canvas.height);
    a.reset();
    o.reset();
    s.reset();
  }
  return {
    buffers: {
      color: a,
      depth: o,
      stencil: s
    },
    enable: F,
    disable: ce,
    bindFramebuffer: le,
    drawBuffers: ue,
    useProgram: de,
    setBlending: me,
    setMaterial: he,
    setFlipSided: I,
    setCullFace: ge,
    setLineWidth: _e,
    setPolygonOffset: ve,
    setScissorTest: L,
    activeTexture: ye,
    bindTexture: R,
    unbindTexture: z,
    compressedTexImage2D: be,
    compressedTexImage3D: xe,
    texImage2D: Oe,
    texImage3D: ke,
    updateUBOMapping: Me,
    uniformBlockBinding: Ne,
    texStorage2D: Ee,
    texStorage3D: De,
    texSubImage2D: Se,
    texSubImage3D: Ce,
    compressedTexSubImage2D: we,
    compressedTexSubImage3D: Te,
    scissor: Ae,
    viewport: je,
    reset: Pe
  };
}
function ss(e, t, n, r) {
  let i = cs(r);
  switch (n) {
    case x:
      return e * t;
    case w:
      return e * t;
    case T:
      return e * t * 2;
    case O:
      return e * t / i.components * i.byteLength;
    case k:
      return e * t / i.components * i.byteLength;
    case A:
      return e * t * 2 / i.components * i.byteLength;
    case j:
      return e * t * 2 / i.components * i.byteLength;
    case S:
      return e * t * 3 / i.components * i.byteLength;
    case C:
      return e * t * 4 / i.components * i.byteLength;
    case ee:
      return e * t * 4 / i.components * i.byteLength;
    case te:
    case M:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case N:
    case P:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case re:
    case ae:
      return Math.max(e, 16) * Math.max(t, 8) / 4;
    case ne:
    case ie:
      return Math.max(e, 8) * Math.max(t, 8) / 2;
    case oe:
    case se:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case F:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case ce:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case le:
      return Math.floor((e + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case ue:
      return Math.floor((e + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case de:
      return Math.floor((e + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case fe:
      return Math.floor((e + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case pe:
      return Math.floor((e + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case me:
      return Math.floor((e + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case he:
      return Math.floor((e + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case I:
      return Math.floor((e + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case ge:
      return Math.floor((e + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case _e:
      return Math.floor((e + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case ve:
      return Math.floor((e + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case L:
      return Math.floor((e + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case ye:
      return Math.floor((e + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case R:
    case z:
    case be:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
    case xe:
    case Se:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 8;
    case Ce:
    case we:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
  }
  throw Error(`Unable to determine texture byte length for ${n} format.`);
}
function cs(e) {
  switch (e) {
    case l:
    case u:
      return {
        byteLength: 1,
        components: 1
      };
    case f:
    case d:
    case g:
      return {
        byteLength: 2,
        components: 1
      };
    case _:
    case v:
      return {
        byteLength: 2,
        components: 4
      };
    case m:
    case p:
    case h:
      return {
        byteLength: 4,
        components: 1
      };
    case b:
      return {
        byteLength: 4,
        components: 3
      };
  }
  throw Error(`Unknown texture type ${e}.`);
}
function ls(l, u, d, f, p, m, h) {
  let g = u.has(`WEBGL_multisampled_render_to_texture`) ? u.get(`WEBGL_multisampled_render_to_texture`) : null;
  let _ = typeof navigator > `u` ? false : /OculusBrowser/g.test(navigator.userAgent);
  let v = new H();
  let y = new WeakMap();
  let b;
  let x = new WeakMap();
  let S = false;
  try {
    S = typeof OffscreenCanvas < `u` && new OffscreenCanvas(1, 1).getContext(`2d`) !== null;
  } catch {}
  function C(e, t) {
    if (S) {
      return new OffscreenCanvas(e, t);
    } else {
      return mt(`canvas`);
    }
  }
  function w(e, t, n) {
    let r = 1;
    let i = Ee(e);
    if (i.width > n || i.height > n) {
      r = n / Math.max(i.width, i.height);
    }
    if (r < 1) {
      if (typeof HTMLImageElement < `u` && e instanceof HTMLImageElement || typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement || typeof ImageBitmap < `u` && e instanceof ImageBitmap || typeof VideoFrame < `u` && e instanceof VideoFrame) {
        let n = Math.floor(r * i.width);
        let a = Math.floor(r * i.height);
        if (b === undefined) {
          b = C(n, a);
        }
        let o = t ? C(n, a) : b;
        o.width = n;
        o.height = a;
        o.getContext(`2d`).drawImage(e, 0, 0, n, a);
        console.warn(`THREE.WebGLRenderer: Texture has been resized from (${i.width}x${i.height}) to (${n}x${a}).`);
        return o;
      }
      if (`data` in e) {
        console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (${i.width}x${i.height}).`);
      }
      return e;
    }
    return e;
  }
  function T(e) {
    return e.generateMipmaps;
  }
  function E(e) {
    l.generateMipmap(e);
  }
  function O(e) {
    if (e.isWebGLCubeRenderTarget) {
      return l.TEXTURE_CUBE_MAP;
    } else if (e.isWebGL3DRenderTarget) {
      return l.TEXTURE_3D;
    } else if (e.isWebGLArrayRenderTarget || e.isCompressedArrayTexture) {
      return l.TEXTURE_2D_ARRAY;
    } else {
      return l.TEXTURE_2D;
    }
  }
  function k(e, t, n, r, i = false) {
    if (e !== null) {
      if (l[e] !== undefined) {
        return l[e];
      }
      console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '${e}'`);
    }
    let a = t;
    if (t === l.RED) {
      if (n === l.FLOAT) {
        a = l.R32F;
      }
      if (n === l.HALF_FLOAT) {
        a = l.R16F;
      }
      if (n === l.UNSIGNED_BYTE) {
        a = l.R8;
      }
    }
    if (t === l.RED_INTEGER) {
      if (n === l.UNSIGNED_BYTE) {
        a = l.R8UI;
      }
      if (n === l.UNSIGNED_SHORT) {
        a = l.R16UI;
      }
      if (n === l.UNSIGNED_INT) {
        a = l.R32UI;
      }
      if (n === l.BYTE) {
        a = l.R8I;
      }
      if (n === l.SHORT) {
        a = l.R16I;
      }
      if (n === l.INT) {
        a = l.R32I;
      }
    }
    if (t === l.RG) {
      if (n === l.FLOAT) {
        a = l.RG32F;
      }
      if (n === l.HALF_FLOAT) {
        a = l.RG16F;
      }
      if (n === l.UNSIGNED_BYTE) {
        a = l.RG8;
      }
    }
    if (t === l.RG_INTEGER) {
      if (n === l.UNSIGNED_BYTE) {
        a = l.RG8UI;
      }
      if (n === l.UNSIGNED_SHORT) {
        a = l.RG16UI;
      }
      if (n === l.UNSIGNED_INT) {
        a = l.RG32UI;
      }
      if (n === l.BYTE) {
        a = l.RG8I;
      }
      if (n === l.SHORT) {
        a = l.RG16I;
      }
      if (n === l.INT) {
        a = l.RG32I;
      }
    }
    if (t === l.RGB_INTEGER) {
      if (n === l.UNSIGNED_BYTE) {
        a = l.RGB8UI;
      }
      if (n === l.UNSIGNED_SHORT) {
        a = l.RGB16UI;
      }
      if (n === l.UNSIGNED_INT) {
        a = l.RGB32UI;
      }
      if (n === l.BYTE) {
        a = l.RGB8I;
      }
      if (n === l.SHORT) {
        a = l.RGB16I;
      }
      if (n === l.INT) {
        a = l.RGB32I;
      }
    }
    if (t === l.RGBA_INTEGER) {
      if (n === l.UNSIGNED_BYTE) {
        a = l.RGBA8UI;
      }
      if (n === l.UNSIGNED_SHORT) {
        a = l.RGBA16UI;
      }
      if (n === l.UNSIGNED_INT) {
        a = l.RGBA32UI;
      }
      if (n === l.BYTE) {
        a = l.RGBA8I;
      }
      if (n === l.SHORT) {
        a = l.RGBA16I;
      }
      if (n === l.INT) {
        a = l.RGBA32I;
      }
    }
    if (t === l.RGB && n === l.UNSIGNED_INT_5_9_9_9_REV) {
      a = l.RGB9_E5;
    }
    if (t === l.RGBA) {
      let e = i ? Fe : W.getTransfer(r);
      if (n === l.FLOAT) {
        a = l.RGBA32F;
      }
      if (n === l.HALF_FLOAT) {
        a = l.RGBA16F;
      }
      if (n === l.UNSIGNED_BYTE) {
        a = e === `srgb` ? l.SRGB8_ALPHA8 : l.RGBA8;
      }
      if (n === l.UNSIGNED_SHORT_4_4_4_4) {
        a = l.RGBA4;
      }
      if (n === l.UNSIGNED_SHORT_5_5_5_1) {
        a = l.RGB5_A1;
      }
    }
    if (a === l.R16F || a === l.R32F || a === l.RG16F || a === l.RG32F || a === l.RGBA16F || a === l.RGBA32F) {
      u.get(`EXT_color_buffer_float`);
    }
    return a;
  }
  function A(e, t) {
    let n;
    if (e) {
      if (t === null || t === 1014 || t === 1020) {
        n = l.DEPTH24_STENCIL8;
      } else if (t === 1015) {
        n = l.DEPTH32F_STENCIL8;
      } else if (t === 1012) {
        n = l.DEPTH24_STENCIL8;
        console.warn(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`);
      }
    } else if (t === null || t === 1014 || t === 1020) {
      n = l.DEPTH_COMPONENT24;
    } else if (t === 1015) {
      n = l.DEPTH_COMPONENT32F;
    } else if (t === 1012) {
      n = l.DEPTH_COMPONENT16;
    }
    return n;
  }
  function j(e, t) {
    if (T(e) === true || e.isFramebufferTexture && e.minFilter !== 1003 && e.minFilter !== 1006) {
      return Math.log2(Math.max(t.width, t.height)) + 1;
    } else if (e.mipmaps !== undefined && e.mipmaps.length > 0) {
      return e.mipmaps.length;
    } else if (e.isCompressedTexture && Array.isArray(e.image)) {
      return t.mipmaps.length;
    } else {
      return 1;
    }
  }
  function ee(e) {
    let t = e.target;
    t.removeEventListener(`dispose`, ee);
    M(t);
    if (t.isVideoTexture) {
      y.delete(t);
    }
  }
  function te(e) {
    let t = e.target;
    t.removeEventListener(`dispose`, te);
    P(t);
  }
  function M(e) {
    let t = f.get(e);
    if (t.__webglInit === undefined) {
      return;
    }
    let n = e.source;
    let r = x.get(n);
    if (r) {
      let i = r[t.__cacheKey];
      i.usedTimes--;
      if (i.usedTimes === 0) {
        N(e);
      }
      if (Object.keys(r).length === 0) {
        x.delete(n);
      }
    }
    f.remove(e);
  }
  function N(e) {
    let t = f.get(e);
    l.deleteTexture(t.__webglTexture);
    let n = e.source;
    let r = x.get(n);
    delete r[t.__cacheKey];
    h.memory.textures--;
  }
  function P(e) {
    let t = f.get(e);
    if (e.depthTexture) {
      e.depthTexture.dispose();
      f.remove(e.depthTexture);
    }
    if (e.isWebGLCubeRenderTarget) {
      for (let e = 0; e < 6; e++) {
        if (Array.isArray(t.__webglFramebuffer[e])) {
          for (let n = 0; n < t.__webglFramebuffer[e].length; n++) {
            l.deleteFramebuffer(t.__webglFramebuffer[e][n]);
          }
        } else {
          l.deleteFramebuffer(t.__webglFramebuffer[e]);
        }
        if (t.__webglDepthbuffer) {
          l.deleteRenderbuffer(t.__webglDepthbuffer[e]);
        }
      }
    } else {
      if (Array.isArray(t.__webglFramebuffer)) {
        for (let e = 0; e < t.__webglFramebuffer.length; e++) {
          l.deleteFramebuffer(t.__webglFramebuffer[e]);
        }
      } else {
        l.deleteFramebuffer(t.__webglFramebuffer);
      }
      if (t.__webglDepthbuffer) {
        l.deleteRenderbuffer(t.__webglDepthbuffer);
      }
      if (t.__webglMultisampledFramebuffer) {
        l.deleteFramebuffer(t.__webglMultisampledFramebuffer);
      }
      if (t.__webglColorRenderbuffer) {
        for (let e = 0; e < t.__webglColorRenderbuffer.length; e++) {
          if (t.__webglColorRenderbuffer[e]) {
            l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);
          }
        }
      }
      if (t.__webglDepthRenderbuffer) {
        l.deleteRenderbuffer(t.__webglDepthRenderbuffer);
      }
    }
    let n = e.textures;
    for (let e = 0, t = n.length; e < t; e++) {
      let t = f.get(n[e]);
      if (t.__webglTexture) {
        l.deleteTexture(t.__webglTexture);
        h.memory.textures--;
      }
      f.remove(n[e]);
    }
    f.remove(e);
  }
  let ne = 0;
  function re() {
    ne = 0;
  }
  function ie() {
    let e = ne;
    if (e >= p.maxTextures) {
      console.warn(`THREE.WebGLTextures: Trying to use ${e} texture units while this GPU supports only ${p.maxTextures}`);
    }
    ne += 1;
    return e;
  }
  function ae(e) {
    let t = [];
    t.push(e.wrapS);
    t.push(e.wrapT);
    t.push(e.wrapR || 0);
    t.push(e.magFilter);
    t.push(e.minFilter);
    t.push(e.anisotropy);
    t.push(e.internalFormat);
    t.push(e.format);
    t.push(e.type);
    t.push(e.generateMipmaps);
    t.push(e.premultiplyAlpha);
    t.push(e.flipY);
    t.push(e.unpackAlignment);
    t.push(e.colorSpace);
    return t.join();
  }
  function oe(e, t) {
    let n = f.get(e);
    if (e.isVideoTexture) {
      we(e);
    }
    if (e.isRenderTargetTexture === false && e.version > 0 && n.__version !== e.version) {
      let r = e.image;
      if (r === null) {
        console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);
      } else if (r.complete === false) {
        console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);
      } else {
        me(n, e, t);
        return;
      }
    }
    d.bindTexture(l.TEXTURE_2D, n.__webglTexture, l.TEXTURE0 + t);
  }
  function se(e, t) {
    let n = f.get(e);
    if (e.version > 0 && n.__version !== e.version) {
      me(n, e, t);
    } else {
      d.bindTexture(l.TEXTURE_2D_ARRAY, n.__webglTexture, l.TEXTURE0 + t);
    }
  }
  function F(e, t) {
    let n = f.get(e);
    if (e.version > 0 && n.__version !== e.version) {
      me(n, e, t);
    } else {
      d.bindTexture(l.TEXTURE_3D, n.__webglTexture, l.TEXTURE0 + t);
    }
  }
  function ce(e, t) {
    let n = f.get(e);
    if (e.version > 0 && n.__version !== e.version) {
      he(n, e, t);
    } else {
      d.bindTexture(l.TEXTURE_CUBE_MAP, n.__webglTexture, l.TEXTURE0 + t);
    }
  }
  let le = {
    [e]: l.REPEAT,
    [t]: l.CLAMP_TO_EDGE,
    [n]: l.MIRRORED_REPEAT
  };
  let ue = {
    [r]: l.NEAREST,
    [i]: l.NEAREST_MIPMAP_NEAREST,
    [a]: l.NEAREST_MIPMAP_LINEAR,
    [o]: l.LINEAR,
    [s]: l.LINEAR_MIPMAP_NEAREST,
    [c]: l.LINEAR_MIPMAP_LINEAR
  };
  let de = {
    512: l.NEVER,
    519: l.ALWAYS,
    513: l.LESS,
    515: l.LEQUAL,
    514: l.EQUAL,
    518: l.GEQUAL,
    516: l.GREATER,
    517: l.NOTEQUAL
  };
  function fe(e, t) {
    if (t.type === 1015 && u.has(`OES_texture_float_linear`) === false && (t.magFilter === 1006 || t.magFilter === 1007 || t.magFilter === 1005 || t.magFilter === 1008 || t.minFilter === 1006 || t.minFilter === 1007 || t.minFilter === 1005 || t.minFilter === 1008)) {
      console.warn(`THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`);
    }
    l.texParameteri(e, l.TEXTURE_WRAP_S, le[t.wrapS]);
    l.texParameteri(e, l.TEXTURE_WRAP_T, le[t.wrapT]);
    if (e === l.TEXTURE_3D || e === l.TEXTURE_2D_ARRAY) {
      l.texParameteri(e, l.TEXTURE_WRAP_R, le[t.wrapR]);
    }
    l.texParameteri(e, l.TEXTURE_MAG_FILTER, ue[t.magFilter]);
    l.texParameteri(e, l.TEXTURE_MIN_FILTER, ue[t.minFilter]);
    if (t.compareFunction) {
      l.texParameteri(e, l.TEXTURE_COMPARE_MODE, l.COMPARE_REF_TO_TEXTURE);
      l.texParameteri(e, l.TEXTURE_COMPARE_FUNC, de[t.compareFunction]);
    }
    if (u.has(`EXT_texture_filter_anisotropic`) === true) {
      if (t.magFilter === 1003 || t.minFilter !== 1005 && t.minFilter !== 1008 || t.type === 1015 && u.has(`OES_texture_float_linear`) === false) {
        return;
      }
      if (t.anisotropy > 1 || f.get(t).__currentAnisotropy) {
        let n = u.get(`EXT_texture_filter_anisotropic`);
        l.texParameterf(e, n.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(t.anisotropy, p.getMaxAnisotropy()));
        f.get(t).__currentAnisotropy = t.anisotropy;
      }
    }
  }
  function pe(e, t) {
    let n = false;
    if (e.__webglInit === undefined) {
      e.__webglInit = true;
      t.addEventListener(`dispose`, ee);
    }
    let r = t.source;
    let i = x.get(r);
    if (i === undefined) {
      i = {};
      x.set(r, i);
    }
    let a = ae(t);
    if (a !== e.__cacheKey) {
      if (i[a] === undefined) {
        i[a] = {
          texture: l.createTexture(),
          usedTimes: 0
        };
        h.memory.textures++;
        n = true;
      }
      i[a].usedTimes++;
      let r = i[e.__cacheKey];
      if (r !== undefined) {
        i[e.__cacheKey].usedTimes--;
        if (r.usedTimes === 0) {
          N(t);
        }
      }
      e.__cacheKey = a;
      e.__webglTexture = i[a].texture;
    }
    return n;
  }
  function me(e, t, n) {
    let r = l.TEXTURE_2D;
    if (t.isDataArrayTexture || t.isCompressedArrayTexture) {
      r = l.TEXTURE_2D_ARRAY;
    }
    if (t.isData3DTexture) {
      r = l.TEXTURE_3D;
    }
    let i = pe(e, t);
    let a = t.source;
    d.bindTexture(r, e.__webglTexture, l.TEXTURE0 + n);
    let o = f.get(a);
    if (a.version !== o.__version || i === true) {
      d.activeTexture(l.TEXTURE0 + n);
      let e = W.getPrimaries(W.workingColorSpace);
      let s = t.colorSpace === `` ? null : W.getPrimaries(t.colorSpace);
      let c = t.colorSpace === `` || e === s ? l.NONE : l.BROWSER_DEFAULT_WEBGL;
      l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL, t.flipY);
      l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha);
      l.pixelStorei(l.UNPACK_ALIGNMENT, t.unpackAlignment);
      l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL, c);
      let u = w(t.image, false, p.maxTextureSize);
      u = Te(t, u);
      let f = m.convert(t.format, t.colorSpace);
      let h = m.convert(t.type);
      let g = k(t.internalFormat, f, h, t.colorSpace, t.isVideoTexture);
      fe(r, t);
      let _;
      let v = t.mipmaps;
      let y = t.isVideoTexture !== true;
      let b = o.__version === undefined || i === true;
      let x = a.dataReady;
      let S = j(t, u);
      if (t.isDepthTexture) {
        g = A(t.format === D, t.type);
        if (b) {
          if (y) {
            d.texStorage2D(l.TEXTURE_2D, 1, g, u.width, u.height);
          } else {
            d.texImage2D(l.TEXTURE_2D, 0, g, u.width, u.height, 0, f, h, null);
          }
        }
      } else if (t.isDataTexture) {
        if (v.length > 0) {
          if (y && b) {
            d.texStorage2D(l.TEXTURE_2D, S, g, v[0].width, v[0].height);
          }
          for (let e = 0, t = v.length; e < t; e++) {
            _ = v[e];
            if (y) {
              if (x) {
                d.texSubImage2D(l.TEXTURE_2D, e, 0, 0, _.width, _.height, f, h, _.data);
              }
            } else {
              d.texImage2D(l.TEXTURE_2D, e, g, _.width, _.height, 0, f, h, _.data);
            }
          }
          t.generateMipmaps = false;
        } else if (y) {
          if (b) {
            d.texStorage2D(l.TEXTURE_2D, S, g, u.width, u.height);
          }
          if (x) {
            d.texSubImage2D(l.TEXTURE_2D, 0, 0, 0, u.width, u.height, f, h, u.data);
          }
        } else {
          d.texImage2D(l.TEXTURE_2D, 0, g, u.width, u.height, 0, f, h, u.data);
        }
      } else if (t.isCompressedTexture) {
        if (t.isCompressedArrayTexture) {
          if (y && b) {
            d.texStorage3D(l.TEXTURE_2D_ARRAY, S, g, v[0].width, v[0].height, u.depth);
          }
          for (let e = 0, n = v.length; e < n; e++) {
            _ = v[e];
            if (t.format !== 1023) {
              if (f !== null) {
                if (y) {
                  if (x) {
                    if (t.layerUpdates.size > 0) {
                      let n = ss(_.width, _.height, t.format, t.type);
                      for (let r of t.layerUpdates) {
                        let t = _.data.subarray(r * n / _.data.BYTES_PER_ELEMENT, (r + 1) * n / _.data.BYTES_PER_ELEMENT);
                        d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY, e, 0, 0, r, _.width, _.height, 1, f, t);
                      }
                      t.clearLayerUpdates();
                    } else {
                      d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY, e, 0, 0, 0, _.width, _.height, u.depth, f, _.data);
                    }
                  }
                } else {
                  d.compressedTexImage3D(l.TEXTURE_2D_ARRAY, e, g, _.width, _.height, u.depth, 0, _.data, 0, 0);
                }
              } else {
                console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);
              }
            } else if (y) {
              if (x) {
                d.texSubImage3D(l.TEXTURE_2D_ARRAY, e, 0, 0, 0, _.width, _.height, u.depth, f, h, _.data);
              }
            } else {
              d.texImage3D(l.TEXTURE_2D_ARRAY, e, g, _.width, _.height, u.depth, 0, f, h, _.data);
            }
          }
        } else {
          if (y && b) {
            d.texStorage2D(l.TEXTURE_2D, S, g, v[0].width, v[0].height);
          }
          for (let e = 0, n = v.length; e < n; e++) {
            _ = v[e];
            if (t.format === 1023) {
              if (y) {
                if (x) {
                  d.texSubImage2D(l.TEXTURE_2D, e, 0, 0, _.width, _.height, f, h, _.data);
                }
              } else {
                d.texImage2D(l.TEXTURE_2D, e, g, _.width, _.height, 0, f, h, _.data);
              }
            } else if (f === null) {
              console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);
            } else if (y) {
              if (x) {
                d.compressedTexSubImage2D(l.TEXTURE_2D, e, 0, 0, _.width, _.height, f, _.data);
              }
            } else {
              d.compressedTexImage2D(l.TEXTURE_2D, e, g, _.width, _.height, 0, _.data);
            }
          }
        }
      } else if (t.isDataArrayTexture) {
        if (y) {
          if (b) {
            d.texStorage3D(l.TEXTURE_2D_ARRAY, S, g, u.width, u.height, u.depth);
          }
          if (x) {
            if (t.layerUpdates.size > 0) {
              let e = ss(u.width, u.height, t.format, t.type);
              for (let n of t.layerUpdates) {
                let t = u.data.subarray(n * e / u.data.BYTES_PER_ELEMENT, (n + 1) * e / u.data.BYTES_PER_ELEMENT);
                d.texSubImage3D(l.TEXTURE_2D_ARRAY, 0, 0, 0, n, u.width, u.height, 1, f, h, t);
              }
              t.clearLayerUpdates();
            } else {
              d.texSubImage3D(l.TEXTURE_2D_ARRAY, 0, 0, 0, 0, u.width, u.height, u.depth, f, h, u.data);
            }
          }
        } else {
          d.texImage3D(l.TEXTURE_2D_ARRAY, 0, g, u.width, u.height, u.depth, 0, f, h, u.data);
        }
      } else if (t.isData3DTexture) {
        if (y) {
          if (b) {
            d.texStorage3D(l.TEXTURE_3D, S, g, u.width, u.height, u.depth);
          }
          if (x) {
            d.texSubImage3D(l.TEXTURE_3D, 0, 0, 0, 0, u.width, u.height, u.depth, f, h, u.data);
          }
        } else {
          d.texImage3D(l.TEXTURE_3D, 0, g, u.width, u.height, u.depth, 0, f, h, u.data);
        }
      } else if (t.isFramebufferTexture) {
        if (b) {
          if (y) {
            d.texStorage2D(l.TEXTURE_2D, S, g, u.width, u.height);
          } else {
            let e = u.width;
            let t = u.height;
            for (let n = 0; n < S; n++) {
              d.texImage2D(l.TEXTURE_2D, n, g, e, t, 0, f, h, null);
              e >>= 1;
              t >>= 1;
            }
          }
        }
      } else if (v.length > 0) {
        if (y && b) {
          let e = Ee(v[0]);
          d.texStorage2D(l.TEXTURE_2D, S, g, e.width, e.height);
        }
        for (let e = 0, t = v.length; e < t; e++) {
          _ = v[e];
          if (y) {
            if (x) {
              d.texSubImage2D(l.TEXTURE_2D, e, 0, 0, f, h, _);
            }
          } else {
            d.texImage2D(l.TEXTURE_2D, e, g, f, h, _);
          }
        }
        t.generateMipmaps = false;
      } else if (y) {
        if (b) {
          let e = Ee(u);
          d.texStorage2D(l.TEXTURE_2D, S, g, e.width, e.height);
        }
        if (x) {
          d.texSubImage2D(l.TEXTURE_2D, 0, 0, 0, f, h, u);
        }
      } else {
        d.texImage2D(l.TEXTURE_2D, 0, g, f, h, u);
      }
      if (T(t)) {
        E(r);
      }
      o.__version = a.version;
      if (t.onUpdate) {
        t.onUpdate(t);
      }
    }
    e.__version = t.version;
  }
  function he(e, t, n) {
    if (t.image.length !== 6) {
      return;
    }
    let r = pe(e, t);
    let i = t.source;
    d.bindTexture(l.TEXTURE_CUBE_MAP, e.__webglTexture, l.TEXTURE0 + n);
    let a = f.get(i);
    if (i.version !== a.__version || r === true) {
      d.activeTexture(l.TEXTURE0 + n);
      let e = W.getPrimaries(W.workingColorSpace);
      let o = t.colorSpace === `` ? null : W.getPrimaries(t.colorSpace);
      let s = t.colorSpace === `` || e === o ? l.NONE : l.BROWSER_DEFAULT_WEBGL;
      l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL, t.flipY);
      l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha);
      l.pixelStorei(l.UNPACK_ALIGNMENT, t.unpackAlignment);
      l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL, s);
      let c = t.isCompressedTexture || t.image[0].isCompressedTexture;
      let u = t.image[0] && t.image[0].isDataTexture;
      let f = [];
      for (let e = 0; e < 6; e++) {
        if (!c && !u) {
          f[e] = w(t.image[e], true, p.maxCubemapSize);
        } else {
          f[e] = u ? t.image[e].image : t.image[e];
        }
        f[e] = Te(t, f[e]);
      }
      let h = f[0];
      let g = m.convert(t.format, t.colorSpace);
      let _ = m.convert(t.type);
      let v = k(t.internalFormat, g, _, t.colorSpace);
      let y = t.isVideoTexture !== true;
      let b = a.__version === undefined || r === true;
      let x = i.dataReady;
      let S = j(t, h);
      fe(l.TEXTURE_CUBE_MAP, t);
      let C;
      if (c) {
        if (y && b) {
          d.texStorage2D(l.TEXTURE_CUBE_MAP, S, v, h.width, h.height);
        }
        for (let e = 0; e < 6; e++) {
          C = f[e].mipmaps;
          for (let n = 0; n < C.length; n++) {
            let r = C[n];
            if (t.format === 1023) {
              if (y) {
                if (x) {
                  d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X + e, n, 0, 0, r.width, r.height, g, _, r.data);
                }
              } else {
                d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X + e, n, v, r.width, r.height, 0, g, _, r.data);
              }
            } else if (g === null) {
              console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`);
            } else if (y) {
              if (x) {
                d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X + e, n, 0, 0, r.width, r.height, g, r.data);
              }
            } else {
              d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X + e, n, v, r.width, r.height, 0, r.data);
            }
          }
        }
      } else {
        C = t.mipmaps;
        if (y && b) {
          if (C.length > 0) {
            S++;
          }
          let e = Ee(f[0]);
          d.texStorage2D(l.TEXTURE_CUBE_MAP, S, v, e.width, e.height);
        }
        for (let e = 0; e < 6; e++) {
          if (u) {
            if (y) {
              if (x) {
                d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, 0, 0, f[e].width, f[e].height, g, _, f[e].data);
              }
            } else {
              d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, v, f[e].width, f[e].height, 0, g, _, f[e].data);
            }
            for (let t = 0; t < C.length; t++) {
              let n = C[t].image[e].image;
              if (y) {
                if (x) {
                  d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X + e, t + 1, 0, 0, n.width, n.height, g, _, n.data);
                }
              } else {
                d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X + e, t + 1, v, n.width, n.height, 0, g, _, n.data);
              }
            }
          } else {
            if (y) {
              if (x) {
                d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, 0, 0, g, _, f[e]);
              }
            } else {
              d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, v, g, _, f[e]);
            }
            for (let t = 0; t < C.length; t++) {
              let n = C[t];
              if (y) {
                if (x) {
                  d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X + e, t + 1, 0, 0, g, _, n.image[e]);
                }
              } else {
                d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X + e, t + 1, v, g, _, n.image[e]);
              }
            }
          }
        }
      }
      if (T(t)) {
        E(l.TEXTURE_CUBE_MAP);
      }
      a.__version = i.version;
      if (t.onUpdate) {
        t.onUpdate(t);
      }
    }
    e.__version = t.version;
  }
  function I(e, t, n, r, i, a) {
    let o = m.convert(n.format, n.colorSpace);
    let s = m.convert(n.type);
    let c = k(n.internalFormat, o, s, n.colorSpace);
    let u = f.get(t);
    let p = f.get(n);
    p.__renderTarget = t;
    if (!u.__hasExternalTextures) {
      let e = Math.max(1, t.width >> a);
      let n = Math.max(1, t.height >> a);
      if (i === l.TEXTURE_3D || i === l.TEXTURE_2D_ARRAY) {
        d.texImage3D(i, a, c, e, n, t.depth, 0, o, s, null);
      } else {
        d.texImage2D(i, a, c, e, n, 0, o, s, null);
      }
    }
    d.bindFramebuffer(l.FRAMEBUFFER, e);
    if (Ce(t)) {
      g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER, r, i, p.__webglTexture, 0, Se(t));
    } else if (i === l.TEXTURE_2D || i >= l.TEXTURE_CUBE_MAP_POSITIVE_X && i <= l.TEXTURE_CUBE_MAP_NEGATIVE_Z) {
      l.framebufferTexture2D(l.FRAMEBUFFER, r, i, p.__webglTexture, a);
    }
    d.bindFramebuffer(l.FRAMEBUFFER, null);
  }
  function ge(e, t, n) {
    l.bindRenderbuffer(l.RENDERBUFFER, e);
    if (t.depthBuffer) {
      let r = t.depthTexture;
      let i = r && r.isDepthTexture ? r.type : null;
      let a = A(t.stencilBuffer, i);
      let o = t.stencilBuffer ? l.DEPTH_STENCIL_ATTACHMENT : l.DEPTH_ATTACHMENT;
      let s = Se(t);
      if (Ce(t)) {
        g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER, s, a, t.width, t.height);
      } else if (n) {
        l.renderbufferStorageMultisample(l.RENDERBUFFER, s, a, t.width, t.height);
      } else {
        l.renderbufferStorage(l.RENDERBUFFER, a, t.width, t.height);
      }
      l.framebufferRenderbuffer(l.FRAMEBUFFER, o, l.RENDERBUFFER, e);
    } else {
      let e = t.textures;
      for (let r = 0; r < e.length; r++) {
        let i = e[r];
        let a = m.convert(i.format, i.colorSpace);
        let o = m.convert(i.type);
        let s = k(i.internalFormat, a, o, i.colorSpace);
        let c = Se(t);
        if (n && Ce(t) === false) {
          l.renderbufferStorageMultisample(l.RENDERBUFFER, c, s, t.width, t.height);
        } else if (Ce(t)) {
          g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER, c, s, t.width, t.height);
        } else {
          l.renderbufferStorage(l.RENDERBUFFER, s, t.width, t.height);
        }
      }
    }
    l.bindRenderbuffer(l.RENDERBUFFER, null);
  }
  function _e(e, t) {
    if (t && t.isWebGLCubeRenderTarget) {
      throw Error(`Depth Texture with cube render targets is not supported`);
    }
    d.bindFramebuffer(l.FRAMEBUFFER, e);
    if (!t.depthTexture || !t.depthTexture.isDepthTexture) {
      throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);
    }
    let n = f.get(t.depthTexture);
    n.__renderTarget = t;
    if (!n.__webglTexture || t.depthTexture.image.width !== t.width || t.depthTexture.image.height !== t.height) {
      t.depthTexture.image.width = t.width;
      t.depthTexture.image.height = t.height;
      t.depthTexture.needsUpdate = true;
    }
    oe(t.depthTexture, 0);
    let r = n.__webglTexture;
    let i = Se(t);
    if (t.depthTexture.format === 1026) {
      if (Ce(t)) {
        g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER, l.DEPTH_ATTACHMENT, l.TEXTURE_2D, r, 0, i);
      } else {
        l.framebufferTexture2D(l.FRAMEBUFFER, l.DEPTH_ATTACHMENT, l.TEXTURE_2D, r, 0);
      }
    } else if (t.depthTexture.format === 1027) {
      if (Ce(t)) {
        g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER, l.DEPTH_STENCIL_ATTACHMENT, l.TEXTURE_2D, r, 0, i);
      } else {
        l.framebufferTexture2D(l.FRAMEBUFFER, l.DEPTH_STENCIL_ATTACHMENT, l.TEXTURE_2D, r, 0);
      }
    } else {
      throw Error(`Unknown depthTexture format`);
    }
  }
  function ve(e) {
    let t = f.get(e);
    let n = e.isWebGLCubeRenderTarget === true;
    if (t.__boundDepthTexture !== e.depthTexture) {
      let n = e.depthTexture;
      if (t.__depthDisposeCallback) {
        t.__depthDisposeCallback();
      }
      if (n) {
        let e = () => {
          delete t.__boundDepthTexture;
          delete t.__depthDisposeCallback;
          n.removeEventListener(`dispose`, e);
        };
        n.addEventListener(`dispose`, e);
        t.__depthDisposeCallback = e;
      }
      t.__boundDepthTexture = n;
    }
    if (e.depthTexture && !t.__autoAllocateDepthBuffer) {
      if (n) {
        throw Error(`target.depthTexture not supported in Cube render targets`);
      }
      _e(t.__webglFramebuffer, e);
    } else if (n) {
      t.__webglDepthbuffer = [];
      for (let n = 0; n < 6; n++) {
        d.bindFramebuffer(l.FRAMEBUFFER, t.__webglFramebuffer[n]);
        if (t.__webglDepthbuffer[n] === undefined) {
          t.__webglDepthbuffer[n] = l.createRenderbuffer();
          ge(t.__webglDepthbuffer[n], e, false);
        } else {
          let r = e.stencilBuffer ? l.DEPTH_STENCIL_ATTACHMENT : l.DEPTH_ATTACHMENT;
          let i = t.__webglDepthbuffer[n];
          l.bindRenderbuffer(l.RENDERBUFFER, i);
          l.framebufferRenderbuffer(l.FRAMEBUFFER, r, l.RENDERBUFFER, i);
        }
      }
    } else {
      d.bindFramebuffer(l.FRAMEBUFFER, t.__webglFramebuffer);
      if (t.__webglDepthbuffer === undefined) {
        t.__webglDepthbuffer = l.createRenderbuffer();
        ge(t.__webglDepthbuffer, e, false);
      } else {
        let n = e.stencilBuffer ? l.DEPTH_STENCIL_ATTACHMENT : l.DEPTH_ATTACHMENT;
        let r = t.__webglDepthbuffer;
        l.bindRenderbuffer(l.RENDERBUFFER, r);
        l.framebufferRenderbuffer(l.FRAMEBUFFER, n, l.RENDERBUFFER, r);
      }
    }
    d.bindFramebuffer(l.FRAMEBUFFER, null);
  }
  function L(e, t, n) {
    let r = f.get(e);
    if (t !== undefined) {
      I(r.__webglFramebuffer, e, e.texture, l.COLOR_ATTACHMENT0, l.TEXTURE_2D, 0);
    }
    if (n !== undefined) {
      ve(e);
    }
  }
  function ye(e) {
    let t = e.texture;
    let n = f.get(e);
    let r = f.get(t);
    e.addEventListener(`dispose`, te);
    let i = e.textures;
    let a = e.isWebGLCubeRenderTarget === true;
    let o = i.length > 1;
    if (!o) {
      if (r.__webglTexture === undefined) {
        r.__webglTexture = l.createTexture();
      }
      r.__version = t.version;
      h.memory.textures++;
    }
    if (a) {
      n.__webglFramebuffer = [];
      for (let e = 0; e < 6; e++) {
        if (t.mipmaps && t.mipmaps.length > 0) {
          n.__webglFramebuffer[e] = [];
          for (let r = 0; r < t.mipmaps.length; r++) {
            n.__webglFramebuffer[e][r] = l.createFramebuffer();
          }
        } else {
          n.__webglFramebuffer[e] = l.createFramebuffer();
        }
      }
    } else {
      if (t.mipmaps && t.mipmaps.length > 0) {
        n.__webglFramebuffer = [];
        for (let e = 0; e < t.mipmaps.length; e++) {
          n.__webglFramebuffer[e] = l.createFramebuffer();
        }
      } else {
        n.__webglFramebuffer = l.createFramebuffer();
      }
      if (o) {
        for (let e = 0, t = i.length; e < t; e++) {
          let t = f.get(i[e]);
          if (t.__webglTexture === undefined) {
            t.__webglTexture = l.createTexture();
            h.memory.textures++;
          }
        }
      }
      if (e.samples > 0 && Ce(e) === false) {
        n.__webglMultisampledFramebuffer = l.createFramebuffer();
        n.__webglColorRenderbuffer = [];
        d.bindFramebuffer(l.FRAMEBUFFER, n.__webglMultisampledFramebuffer);
        for (let t = 0; t < i.length; t++) {
          let r = i[t];
          n.__webglColorRenderbuffer[t] = l.createRenderbuffer();
          l.bindRenderbuffer(l.RENDERBUFFER, n.__webglColorRenderbuffer[t]);
          let a = m.convert(r.format, r.colorSpace);
          let o = m.convert(r.type);
          let s = k(r.internalFormat, a, o, r.colorSpace, e.isXRRenderTarget === true);
          let c = Se(e);
          l.renderbufferStorageMultisample(l.RENDERBUFFER, c, s, e.width, e.height);
          l.framebufferRenderbuffer(l.FRAMEBUFFER, l.COLOR_ATTACHMENT0 + t, l.RENDERBUFFER, n.__webglColorRenderbuffer[t]);
        }
        l.bindRenderbuffer(l.RENDERBUFFER, null);
        if (e.depthBuffer) {
          n.__webglDepthRenderbuffer = l.createRenderbuffer();
          ge(n.__webglDepthRenderbuffer, e, true);
        }
        d.bindFramebuffer(l.FRAMEBUFFER, null);
      }
    }
    if (a) {
      d.bindTexture(l.TEXTURE_CUBE_MAP, r.__webglTexture);
      fe(l.TEXTURE_CUBE_MAP, t);
      for (let r = 0; r < 6; r++) {
        if (t.mipmaps && t.mipmaps.length > 0) {
          for (let i = 0; i < t.mipmaps.length; i++) {
            I(n.__webglFramebuffer[r][i], e, t, l.COLOR_ATTACHMENT0, l.TEXTURE_CUBE_MAP_POSITIVE_X + r, i);
          }
        } else {
          I(n.__webglFramebuffer[r], e, t, l.COLOR_ATTACHMENT0, l.TEXTURE_CUBE_MAP_POSITIVE_X + r, 0);
        }
      }
      if (T(t)) {
        E(l.TEXTURE_CUBE_MAP);
      }
      d.unbindTexture();
    } else if (o) {
      for (let t = 0, r = i.length; t < r; t++) {
        let r = i[t];
        let a = f.get(r);
        d.bindTexture(l.TEXTURE_2D, a.__webglTexture);
        fe(l.TEXTURE_2D, r);
        I(n.__webglFramebuffer, e, r, l.COLOR_ATTACHMENT0 + t, l.TEXTURE_2D, 0);
        if (T(r)) {
          E(l.TEXTURE_2D);
        }
      }
      d.unbindTexture();
    } else {
      let i = l.TEXTURE_2D;
      if (e.isWebGL3DRenderTarget || e.isWebGLArrayRenderTarget) {
        i = e.isWebGL3DRenderTarget ? l.TEXTURE_3D : l.TEXTURE_2D_ARRAY;
      }
      d.bindTexture(i, r.__webglTexture);
      fe(i, t);
      if (t.mipmaps && t.mipmaps.length > 0) {
        for (let r = 0; r < t.mipmaps.length; r++) {
          I(n.__webglFramebuffer[r], e, t, l.COLOR_ATTACHMENT0, i, r);
        }
      } else {
        I(n.__webglFramebuffer, e, t, l.COLOR_ATTACHMENT0, i, 0);
      }
      if (T(t)) {
        E(i);
      }
      d.unbindTexture();
    }
    if (e.depthBuffer) {
      ve(e);
    }
  }
  function R(e) {
    let t = e.textures;
    for (let n = 0, r = t.length; n < r; n++) {
      let r = t[n];
      if (T(r)) {
        let t = O(e);
        let n = f.get(r).__webglTexture;
        d.bindTexture(t, n);
        E(t);
        d.unbindTexture();
      }
    }
  }
  let z = [];
  let be = [];
  function xe(e) {
    if (e.samples > 0) {
      if (Ce(e) === false) {
        let t = e.textures;
        let n = e.width;
        let r = e.height;
        let i = l.COLOR_BUFFER_BIT;
        let a = e.stencilBuffer ? l.DEPTH_STENCIL_ATTACHMENT : l.DEPTH_ATTACHMENT;
        let o = f.get(e);
        let s = t.length > 1;
        if (s) {
          for (let e = 0; e < t.length; e++) {
            d.bindFramebuffer(l.FRAMEBUFFER, o.__webglMultisampledFramebuffer);
            l.framebufferRenderbuffer(l.FRAMEBUFFER, l.COLOR_ATTACHMENT0 + e, l.RENDERBUFFER, null);
            d.bindFramebuffer(l.FRAMEBUFFER, o.__webglFramebuffer);
            l.framebufferTexture2D(l.DRAW_FRAMEBUFFER, l.COLOR_ATTACHMENT0 + e, l.TEXTURE_2D, null, 0);
          }
        }
        d.bindFramebuffer(l.READ_FRAMEBUFFER, o.__webglMultisampledFramebuffer);
        d.bindFramebuffer(l.DRAW_FRAMEBUFFER, o.__webglFramebuffer);
        for (let c = 0; c < t.length; c++) {
          if (e.resolveDepthBuffer) {
            if (e.depthBuffer) {
              i |= l.DEPTH_BUFFER_BIT;
            }
            if (e.stencilBuffer && e.resolveStencilBuffer) {
              i |= l.STENCIL_BUFFER_BIT;
            }
          }
          if (s) {
            l.framebufferRenderbuffer(l.READ_FRAMEBUFFER, l.COLOR_ATTACHMENT0, l.RENDERBUFFER, o.__webglColorRenderbuffer[c]);
            let e = f.get(t[c]).__webglTexture;
            l.framebufferTexture2D(l.DRAW_FRAMEBUFFER, l.COLOR_ATTACHMENT0, l.TEXTURE_2D, e, 0);
          }
          l.blitFramebuffer(0, 0, n, r, 0, 0, n, r, i, l.NEAREST);
          if (_ === true) {
            z.length = 0;
            be.length = 0;
            z.push(l.COLOR_ATTACHMENT0 + c);
            if (e.depthBuffer && e.resolveDepthBuffer === false) {
              z.push(a);
              be.push(a);
              l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER, be);
            }
            l.invalidateFramebuffer(l.READ_FRAMEBUFFER, z);
          }
        }
        d.bindFramebuffer(l.READ_FRAMEBUFFER, null);
        d.bindFramebuffer(l.DRAW_FRAMEBUFFER, null);
        if (s) {
          for (let e = 0; e < t.length; e++) {
            d.bindFramebuffer(l.FRAMEBUFFER, o.__webglMultisampledFramebuffer);
            l.framebufferRenderbuffer(l.FRAMEBUFFER, l.COLOR_ATTACHMENT0 + e, l.RENDERBUFFER, o.__webglColorRenderbuffer[e]);
            let n = f.get(t[e]).__webglTexture;
            d.bindFramebuffer(l.FRAMEBUFFER, o.__webglFramebuffer);
            l.framebufferTexture2D(l.DRAW_FRAMEBUFFER, l.COLOR_ATTACHMENT0 + e, l.TEXTURE_2D, n, 0);
          }
        }
        d.bindFramebuffer(l.DRAW_FRAMEBUFFER, o.__webglMultisampledFramebuffer);
      } else if (e.depthBuffer && e.resolveDepthBuffer === false && _) {
        let t = e.stencilBuffer ? l.DEPTH_STENCIL_ATTACHMENT : l.DEPTH_ATTACHMENT;
        l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER, [t]);
      }
    }
  }
  function Se(e) {
    return Math.min(p.maxSamples, e.samples);
  }
  function Ce(e) {
    let t = f.get(e);
    return e.samples > 0 && u.has(`WEBGL_multisampled_render_to_texture`) === true && t.__useRenderToTexture !== false;
  }
  function we(e) {
    let t = h.render.frame;
    if (y.get(e) !== t) {
      y.set(e, t);
      e.update();
    }
  }
  function Te(e, t) {
    let n = e.colorSpace;
    let r = e.format;
    let i = e.type;
    if (e.isCompressedTexture !== true && e.isVideoTexture !== true) {
      if (n !== `srgb-linear` && n !== ``) {
        if (W.getTransfer(n) === `srgb`) {
          if (r !== 1023 || i !== 1009) {
            console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`);
          }
        } else {
          console.error(`THREE.WebGLTextures: Unsupported texture color space:`, n);
        }
      }
    }
    return t;
  }
  function Ee(e) {
    if (typeof HTMLImageElement < `u` && e instanceof HTMLImageElement) {
      v.width = e.naturalWidth || e.width;
      v.height = e.naturalHeight || e.height;
    } else if (typeof VideoFrame < `u` && e instanceof VideoFrame) {
      v.width = e.displayWidth;
      v.height = e.displayHeight;
    } else {
      v.width = e.width;
      v.height = e.height;
    }
    return v;
  }
  this.allocateTextureUnit = ie;
  this.resetTextureUnits = re;
  this.setTexture2D = oe;
  this.setTexture2DArray = se;
  this.setTexture3D = F;
  this.setTextureCube = ce;
  this.rebindTextures = L;
  this.setupRenderTarget = ye;
  this.updateRenderTargetMipmap = R;
  this.updateMultisampleRenderTarget = xe;
  this.setupDepthRenderbuffer = ve;
  this.setupFrameBufferTexture = I;
  this.useMultisampledRTT = Ce;
}
function us(e, t) {
  function n(n, r = ``) {
    let i;
    let a = W.getTransfer(r);
    if (n === 1009) {
      return e.UNSIGNED_BYTE;
    }
    if (n === 1017) {
      return e.UNSIGNED_SHORT_4_4_4_4;
    }
    if (n === 1018) {
      return e.UNSIGNED_SHORT_5_5_5_1;
    }
    if (n === 35902) {
      return e.UNSIGNED_INT_5_9_9_9_REV;
    }
    if (n === 1010) {
      return e.BYTE;
    }
    if (n === 1011) {
      return e.SHORT;
    }
    if (n === 1012) {
      return e.UNSIGNED_SHORT;
    }
    if (n === 1013) {
      return e.INT;
    }
    if (n === 1014) {
      return e.UNSIGNED_INT;
    }
    if (n === 1015) {
      return e.FLOAT;
    }
    if (n === 1016) {
      return e.HALF_FLOAT;
    }
    if (n === 1021) {
      return e.ALPHA;
    }
    if (n === 1022) {
      return e.RGB;
    }
    if (n === 1023) {
      return e.RGBA;
    }
    if (n === 1024) {
      return e.LUMINANCE;
    }
    if (n === 1025) {
      return e.LUMINANCE_ALPHA;
    }
    if (n === 1026) {
      return e.DEPTH_COMPONENT;
    }
    if (n === 1027) {
      return e.DEPTH_STENCIL;
    }
    if (n === 1028) {
      return e.RED;
    }
    if (n === 1029) {
      return e.RED_INTEGER;
    }
    if (n === 1030) {
      return e.RG;
    }
    if (n === 1031) {
      return e.RG_INTEGER;
    }
    if (n === 1033) {
      return e.RGBA_INTEGER;
    }
    if (n === 33776 || n === 33777 || n === 33778 || n === 33779) {
      if (a === `srgb`) {
        i = t.get(`WEBGL_compressed_texture_s3tc_srgb`);
        if (i !== null) {
          if (n === 33776) {
            return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          }
          if (n === 33777) {
            return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          }
          if (n === 33778) {
            return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          }
          if (n === 33779) {
            return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
          }
        } else {
          return null;
        }
      } else {
        i = t.get(`WEBGL_compressed_texture_s3tc`);
        if (i !== null) {
          if (n === 33776) {
            return i.COMPRESSED_RGB_S3TC_DXT1_EXT;
          }
          if (n === 33777) {
            return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          }
          if (n === 33778) {
            return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          }
          if (n === 33779) {
            return i.COMPRESSED_RGBA_S3TC_DXT5_EXT;
          }
        } else {
          return null;
        }
      }
    }
    if (n === 35840 || n === 35841 || n === 35842 || n === 35843) {
      i = t.get(`WEBGL_compressed_texture_pvrtc`);
      if (i !== null) {
        if (n === 35840) {
          return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        }
        if (n === 35841) {
          return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        }
        if (n === 35842) {
          return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        }
        if (n === 35843) {
          return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        }
      } else {
        return null;
      }
    }
    if (n === 36196 || n === 37492 || n === 37496) {
      i = t.get(`WEBGL_compressed_texture_etc`);
      if (i !== null) {
        if (n === 36196 || n === 37492) {
          if (a === `srgb`) {
            return i.COMPRESSED_SRGB8_ETC2;
          } else {
            return i.COMPRESSED_RGB8_ETC2;
          }
        }
        if (n === 37496) {
          if (a === `srgb`) {
            return i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC;
          } else {
            return i.COMPRESSED_RGBA8_ETC2_EAC;
          }
        }
      } else {
        return null;
      }
    }
    if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821) {
      i = t.get(`WEBGL_compressed_texture_astc`);
      if (i !== null) {
        if (n === 37808) {
          if (a === `srgb`) {
            return i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
          } else {
            return i.COMPRESSED_RGBA_ASTC_4x4_KHR;
          }
        }
        if (n === 37809) {
          if (a === `srgb`) {
            return i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
          } else {
            return i.COMPRESSED_RGBA_ASTC_5x4_KHR;
          }
        }
        if (n === 37810) {
          if (a === `srgb`) {
            return i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
          } else {
            return i.COMPRESSED_RGBA_ASTC_5x5_KHR;
          }
        }
        if (n === 37811) {
          if (a === `srgb`) {
            return i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
          } else {
            return i.COMPRESSED_RGBA_ASTC_6x5_KHR;
          }
        }
        if (n === 37812) {
          if (a === `srgb`) {
            return i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
          } else {
            return i.COMPRESSED_RGBA_ASTC_6x6_KHR;
          }
        }
        if (n === 37813) {
          if (a === `srgb`) {
            return i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
          } else {
            return i.COMPRESSED_RGBA_ASTC_8x5_KHR;
          }
        }
        if (n === 37814) {
          if (a === `srgb`) {
            return i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
          } else {
            return i.COMPRESSED_RGBA_ASTC_8x6_KHR;
          }
        }
        if (n === 37815) {
          if (a === `srgb`) {
            return i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
          } else {
            return i.COMPRESSED_RGBA_ASTC_8x8_KHR;
          }
        }
        if (n === 37816) {
          if (a === `srgb`) {
            return i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
          } else {
            return i.COMPRESSED_RGBA_ASTC_10x5_KHR;
          }
        }
        if (n === 37817) {
          if (a === `srgb`) {
            return i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
          } else {
            return i.COMPRESSED_RGBA_ASTC_10x6_KHR;
          }
        }
        if (n === 37818) {
          if (a === `srgb`) {
            return i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
          } else {
            return i.COMPRESSED_RGBA_ASTC_10x8_KHR;
          }
        }
        if (n === 37819) {
          if (a === `srgb`) {
            return i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
          } else {
            return i.COMPRESSED_RGBA_ASTC_10x10_KHR;
          }
        }
        if (n === 37820) {
          if (a === `srgb`) {
            return i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
          } else {
            return i.COMPRESSED_RGBA_ASTC_12x10_KHR;
          }
        }
        if (n === 37821) {
          if (a === `srgb`) {
            return i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
          } else {
            return i.COMPRESSED_RGBA_ASTC_12x12_KHR;
          }
        }
      } else {
        return null;
      }
    }
    if (n === 36492 || n === 36494 || n === 36495) {
      i = t.get(`EXT_texture_compression_bptc`);
      if (i !== null) {
        if (n === 36492) {
          if (a === `srgb`) {
            return i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
          } else {
            return i.COMPRESSED_RGBA_BPTC_UNORM_EXT;
          }
        }
        if (n === 36494) {
          return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        }
        if (n === 36495) {
          return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
        }
      } else {
        return null;
      }
    }
    if (n === 36283 || n === 36284 || n === 36285 || n === 36286) {
      i = t.get(`EXT_texture_compression_rgtc`);
      if (i !== null) {
        if (n === 36492) {
          return i.COMPRESSED_RED_RGTC1_EXT;
        }
        if (n === 36284) {
          return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        }
        if (n === 36285) {
          return i.COMPRESSED_RED_GREEN_RGTC2_EXT;
        }
        if (n === 36286) {
          return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
        }
      } else {
        return null;
      }
    }
    if (n === 1020) {
      return e.UNSIGNED_INT_24_8;
    } else if (e[n] === undefined) {
      return null;
    } else {
      return e[n];
    }
  }
  return {
    convert: n
  };
}
var ds = class extends Qr {
  constructor(e = []) {
    super();
    this.isArrayCamera = true;
    this.cameras = e;
  }
};
var fs = class extends Un {
  constructor() {
    super();
    this.isGroup = true;
    this.type = `Group`;
  }
};
var ps = {
  type: `move`
};
var ms = class {
  constructor() {
    this._targetRay = null;
    this._grip = null;
    this._hand = null;
  }
  getHandSpace() {
    if (this._hand === null) {
      this._hand = new fs();
      this._hand.matrixAutoUpdate = false;
      this._hand.visible = false;
      this._hand.joints = {};
      this._hand.inputState = {
        pinching: false
      };
    }
    return this._hand;
  }
  getTargetRaySpace() {
    if (this._targetRay === null) {
      this._targetRay = new fs();
      this._targetRay.matrixAutoUpdate = false;
      this._targetRay.visible = false;
      this._targetRay.hasLinearVelocity = false;
      this._targetRay.linearVelocity = new G();
      this._targetRay.hasAngularVelocity = false;
      this._targetRay.angularVelocity = new G();
    }
    return this._targetRay;
  }
  getGripSpace() {
    if (this._grip === null) {
      this._grip = new fs();
      this._grip.matrixAutoUpdate = false;
      this._grip.visible = false;
      this._grip.hasLinearVelocity = false;
      this._grip.linearVelocity = new G();
      this._grip.hasAngularVelocity = false;
      this._grip.angularVelocity = new G();
    }
    return this._grip;
  }
  dispatchEvent(e) {
    if (this._targetRay !== null) {
      this._targetRay.dispatchEvent(e);
    }
    if (this._grip !== null) {
      this._grip.dispatchEvent(e);
    }
    if (this._hand !== null) {
      this._hand.dispatchEvent(e);
    }
    return this;
  }
  connect(e) {
    if (e && e.hand) {
      let t = this._hand;
      if (t) {
        for (let n of e.hand.values()) {
          this._getHandJoint(t, n);
        }
      }
    }
    this.dispatchEvent({
      type: `connected`,
      data: e
    });
    return this;
  }
  disconnect(e) {
    this.dispatchEvent({
      type: `disconnected`,
      data: e
    });
    if (this._targetRay !== null) {
      this._targetRay.visible = false;
    }
    if (this._grip !== null) {
      this._grip.visible = false;
    }
    if (this._hand !== null) {
      this._hand.visible = false;
    }
    return this;
  }
  update(e, t, n) {
    let r = null;
    let i = null;
    let a = null;
    let o = this._targetRay;
    let s = this._grip;
    let c = this._hand;
    if (e && t.session.visibilityState !== `visible-blurred`) {
      if (c && e.hand) {
        a = true;
        for (let r of e.hand.values()) {
          let e = t.getJointPose(r, n);
          let i = this._getHandJoint(c, r);
          if (e !== null) {
            i.matrix.fromArray(e.transform.matrix);
            i.matrix.decompose(i.position, i.rotation, i.scale);
            i.matrixWorldNeedsUpdate = true;
            i.jointRadius = e.radius;
          }
          i.visible = e !== null;
        }
        let r = c.joints[`index-finger-tip`];
        let i = c.joints[`thumb-tip`];
        let o = r.position.distanceTo(i.position);
        if (c.inputState.pinching && o > 0.025) {
          c.inputState.pinching = false;
          this.dispatchEvent({
            type: `pinchend`,
            handedness: e.handedness,
            target: this
          });
        } else if (!c.inputState.pinching && o <= 0.015) {
          c.inputState.pinching = true;
          this.dispatchEvent({
            type: `pinchstart`,
            handedness: e.handedness,
            target: this
          });
        }
      } else if (s !== null && e.gripSpace) {
        i = t.getPose(e.gripSpace, n);
        if (i !== null) {
          s.matrix.fromArray(i.transform.matrix);
          s.matrix.decompose(s.position, s.rotation, s.scale);
          s.matrixWorldNeedsUpdate = true;
          if (i.linearVelocity) {
            s.hasLinearVelocity = true;
            s.linearVelocity.copy(i.linearVelocity);
          } else {
            s.hasLinearVelocity = false;
          }
          if (i.angularVelocity) {
            s.hasAngularVelocity = true;
            s.angularVelocity.copy(i.angularVelocity);
          } else {
            s.hasAngularVelocity = false;
          }
        }
      }
      if (o !== null) {
        r = t.getPose(e.targetRaySpace, n);
        if (r === null && i !== null) {
          r = i;
        }
        if (r !== null) {
          o.matrix.fromArray(r.transform.matrix);
          o.matrix.decompose(o.position, o.rotation, o.scale);
          o.matrixWorldNeedsUpdate = true;
          if (r.linearVelocity) {
            o.hasLinearVelocity = true;
            o.linearVelocity.copy(r.linearVelocity);
          } else {
            o.hasLinearVelocity = false;
          }
          if (r.angularVelocity) {
            o.hasAngularVelocity = true;
            o.angularVelocity.copy(r.angularVelocity);
          } else {
            o.hasAngularVelocity = false;
          }
          this.dispatchEvent(ps);
        }
      }
    }
    if (o !== null) {
      o.visible = r !== null;
    }
    if (s !== null) {
      s.visible = i !== null;
    }
    if (c !== null) {
      c.visible = a !== null;
    }
    return this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === undefined) {
      let n = new fs();
      n.matrixAutoUpdate = false;
      n.visible = false;
      e.joints[t.jointName] = n;
      e.add(n);
    }
    return e.joints[t.jointName];
  }
};
var hs = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`;
var gs = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
var _s = class {
  constructor() {
    this.texture = null;
    this.mesh = null;
    this.depthNear = 0;
    this.depthFar = 0;
  }
  init(e, t, n) {
    if (this.texture === null) {
      let r = new Pt();
      let i = e.properties.get(r);
      i.__webglTexture = t.texture;
      if (t.depthNear != n.depthNear || t.depthFar != n.depthFar) {
        this.depthNear = t.depthNear;
        this.depthFar = t.depthFar;
      }
      this.texture = r;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      let t = e.cameras[0].viewport;
      let n = new qr({
        vertexShader: hs,
        fragmentShader: gs,
        uniforms: {
          depthColor: {
            value: this.texture
          },
          depthWidth: {
            value: t.z
          },
          depthHeight: {
            value: t.w
          }
        }
      });
      this.mesh = new Lr(new pi(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null;
    this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
};
var vs = class extends Be {
  constructor(e, t) {
    super();
    let n = this;
    let r = null;
    let i = 1;
    let a = null;
    let o = `local-floor`;
    let s = 1;
    let c = null;
    let u = null;
    let d = null;
    let f = null;
    let p = null;
    let h = null;
    let g = new _s();
    let _ = t.getContextAttributes();
    let v = null;
    let b = null;
    let x = [];
    let S = [];
    let w = new H();
    let T = null;
    let O = new Qr();
    O.viewport = new Ft();
    let k = new Qr();
    k.viewport = new Ft();
    let A = [O, k];
    let j = new ds();
    let ee = null;
    let te = null;
    this.cameraAutoUpdate = true;
    this.enabled = false;
    this.isPresenting = false;
    this.getController = function (e) {
      let t = x[e];
      if (t === undefined) {
        t = new ms();
        x[e] = t;
      }
      return t.getTargetRaySpace();
    };
    this.getControllerGrip = function (e) {
      let t = x[e];
      if (t === undefined) {
        t = new ms();
        x[e] = t;
      }
      return t.getGripSpace();
    };
    this.getHand = function (e) {
      let t = x[e];
      if (t === undefined) {
        t = new ms();
        x[e] = t;
      }
      return t.getHandSpace();
    };
    function M(e) {
      let t = S.indexOf(e.inputSource);
      if (t === -1) {
        return;
      }
      let n = x[t];
      if (n !== undefined) {
        n.update(e.inputSource, e.frame, c || a);
        n.dispatchEvent({
          type: e.type,
          data: e.inputSource
        });
      }
    }
    function N() {
      r.removeEventListener(`select`, M);
      r.removeEventListener(`selectstart`, M);
      r.removeEventListener(`selectend`, M);
      r.removeEventListener(`squeeze`, M);
      r.removeEventListener(`squeezestart`, M);
      r.removeEventListener(`squeezeend`, M);
      r.removeEventListener(`end`, N);
      r.removeEventListener(`inputsourceschange`, P);
      for (let e = 0; e < x.length; e++) {
        let t = S[e];
        if (t !== null) {
          S[e] = null;
          x[e].disconnect(t);
        }
      }
      ee = null;
      te = null;
      g.reset();
      e.setRenderTarget(v);
      p = null;
      f = null;
      d = null;
      r = null;
      b = null;
      ce.stop();
      n.isPresenting = false;
      e.setPixelRatio(T);
      e.setSize(w.width, w.height, false);
      n.dispatchEvent({
        type: `sessionend`
      });
    }
    this.setFramebufferScaleFactor = function (e) {
      i = e;
      if (n.isPresenting === true) {
        console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`);
      }
    };
    this.setReferenceSpaceType = function (e) {
      o = e;
      if (n.isPresenting === true) {
        console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`);
      }
    };
    this.getReferenceSpace = function () {
      return c || a;
    };
    this.setReferenceSpace = function (e) {
      c = e;
    };
    this.getBaseLayer = function () {
      if (f === null) {
        return p;
      } else {
        return f;
      }
    };
    this.getBinding = function () {
      return d;
    };
    this.getFrame = function () {
      return h;
    };
    this.getSession = function () {
      return r;
    };
    this.setSession = async function (u) {
      r = u;
      if (r !== null) {
        v = e.getRenderTarget();
        r.addEventListener(`select`, M);
        r.addEventListener(`selectstart`, M);
        r.addEventListener(`selectend`, M);
        r.addEventListener(`squeeze`, M);
        r.addEventListener(`squeezestart`, M);
        r.addEventListener(`squeezeend`, M);
        r.addEventListener(`end`, N);
        r.addEventListener(`inputsourceschange`, P);
        if (_.xrCompatible !== true) {
          await t.makeXRCompatible();
        }
        T = e.getPixelRatio();
        e.getSize(w);
        if (r.renderState.layers === undefined) {
          let n = {
            antialias: _.antialias,
            alpha: true,
            depth: _.depth,
            stencil: _.stencil,
            framebufferScaleFactor: i
          };
          p = new XRWebGLLayer(r, t, n);
          r.updateRenderState({
            baseLayer: p
          });
          e.setPixelRatio(1);
          e.setSize(p.framebufferWidth, p.framebufferHeight, false);
          b = new Lt(p.framebufferWidth, p.framebufferHeight, {
            format: C,
            type: l,
            colorSpace: e.outputColorSpace,
            stencilBuffer: _.stencil
          });
        } else {
          let n = null;
          let a = null;
          let o = null;
          if (_.depth) {
            o = _.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24;
            n = _.stencil ? D : E;
            a = _.stencil ? y : m;
          }
          let s = {
            colorFormat: t.RGBA8,
            depthFormat: o,
            scaleFactor: i
          };
          d = new XRWebGLBinding(r, t);
          f = d.createProjectionLayer(s);
          r.updateRenderState({
            layers: [f]
          });
          e.setPixelRatio(1);
          e.setSize(f.textureWidth, f.textureHeight, false);
          b = new Lt(f.textureWidth, f.textureHeight, {
            format: C,
            type: l,
            depthTexture: new Qi(f.textureWidth, f.textureHeight, a, undefined, undefined, undefined, undefined, undefined, undefined, n),
            stencilBuffer: _.stencil,
            colorSpace: e.outputColorSpace,
            samples: _.antialias ? 4 : 0,
            resolveDepthBuffer: f.ignoreDepthValues === false
          });
        }
        b.isXRRenderTarget = true;
        this.setFoveation(s);
        c = null;
        a = await r.requestReferenceSpace(o);
        ce.setContext(r);
        ce.start();
        n.isPresenting = true;
        n.dispatchEvent({
          type: `sessionstart`
        });
      }
    };
    this.getEnvironmentBlendMode = function () {
      if (r !== null) {
        return r.environmentBlendMode;
      }
    };
    this.getDepthTexture = function () {
      return g.getDepthTexture();
    };
    function P(e) {
      for (let t = 0; t < e.removed.length; t++) {
        let n = e.removed[t];
        let r = S.indexOf(n);
        if (r >= 0) {
          S[r] = null;
          x[r].disconnect(n);
        }
      }
      for (let t = 0; t < e.added.length; t++) {
        let n = e.added[t];
        let r = S.indexOf(n);
        if (r === -1) {
          for (let e = 0; e < x.length; e++) {
            if (e >= S.length) {
              S.push(n);
              r = e;
              break;
            } else if (S[e] === null) {
              S[e] = n;
              r = e;
              break;
            }
          }
          if (r === -1) {
            break;
          }
        }
        let i = x[r];
        if (i) {
          i.connect(n);
        }
      }
    }
    let ne = new G();
    let re = new G();
    function ie(e, t, n) {
      ne.setFromMatrixPosition(t.matrixWorld);
      re.setFromMatrixPosition(n.matrixWorld);
      let r = ne.distanceTo(re);
      let i = t.projectionMatrix.elements;
      let a = n.projectionMatrix.elements;
      let o = i[14] / (i[10] - 1);
      let s = i[14] / (i[10] + 1);
      let c = (i[9] + 1) / i[5];
      let l = (i[9] - 1) / i[5];
      let u = (i[8] - 1) / i[0];
      let d = (a[8] + 1) / a[0];
      let f = o * u;
      let p = o * d;
      let m = r / (-u + d);
      let h = m * -u;
      t.matrixWorld.decompose(e.position, e.quaternion, e.scale);
      e.translateX(h);
      e.translateZ(m);
      e.matrixWorld.compose(e.position, e.quaternion, e.scale);
      e.matrixWorldInverse.copy(e.matrixWorld).invert();
      if (i[10] === -1) {
        e.projectionMatrix.copy(t.projectionMatrix);
        e.projectionMatrixInverse.copy(t.projectionMatrixInverse);
      } else {
        let t = o + m;
        let n = s + m;
        let i = f - h;
        let a = p + (r - h);
        let u = c * s / n * t;
        let d = l * s / n * t;
        e.projectionMatrix.makePerspective(i, a, u, d, t, n);
        e.projectionMatrixInverse.copy(e.projectionMatrix).invert();
      }
    }
    function ae(e, t) {
      if (t === null) {
        e.matrixWorld.copy(e.matrix);
      } else {
        e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix);
      }
      e.matrixWorldInverse.copy(e.matrixWorld).invert();
    }
    this.updateCamera = function (e) {
      if (r === null) {
        return;
      }
      let t = e.near;
      let n = e.far;
      if (g.texture !== null) {
        if (g.depthNear > 0) {
          t = g.depthNear;
        }
        if (g.depthFar > 0) {
          n = g.depthFar;
        }
      }
      j.near = k.near = O.near = t;
      j.far = k.far = O.far = n;
      if (ee !== j.near || te !== j.far) {
        r.updateRenderState({
          depthNear: j.near,
          depthFar: j.far
        });
        ee = j.near;
        te = j.far;
      }
      O.layers.mask = e.layers.mask | 2;
      k.layers.mask = e.layers.mask | 4;
      j.layers.mask = O.layers.mask | k.layers.mask;
      let i = e.parent;
      let a = j.cameras;
      ae(j, i);
      for (let e = 0; e < a.length; e++) {
        ae(a[e], i);
      }
      if (a.length === 2) {
        ie(j, O, k);
      } else {
        j.projectionMatrix.copy(O.projectionMatrix);
      }
      oe(e, j, i);
    };
    function oe(e, t, n) {
      if (n === null) {
        e.matrix.copy(t.matrixWorld);
      } else {
        e.matrix.copy(n.matrixWorld);
        e.matrix.invert();
        e.matrix.multiply(t.matrixWorld);
      }
      e.matrix.decompose(e.position, e.quaternion, e.scale);
      e.updateMatrixWorld(true);
      e.projectionMatrix.copy(t.projectionMatrix);
      e.projectionMatrixInverse.copy(t.projectionMatrixInverse);
      if (e.isPerspectiveCamera) {
        e.fov = Ue * 2 * Math.atan(1 / e.projectionMatrix.elements[5]);
        e.zoom = 1;
      }
    }
    this.getCamera = function () {
      return j;
    };
    this.getFoveation = function () {
      if (f !== null || p !== null) {
        return s;
      }
    };
    this.setFoveation = function (e) {
      s = e;
      if (f !== null) {
        f.fixedFoveation = e;
      }
      if (p !== null && p.fixedFoveation !== undefined) {
        p.fixedFoveation = e;
      }
    };
    this.hasDepthSensing = function () {
      return g.texture !== null;
    };
    this.getDepthSensingMesh = function () {
      return g.getMesh(j);
    };
    let se = null;
    function F(t, i) {
      u = i.getViewerPose(c || a);
      h = i;
      if (u !== null) {
        let t = u.views;
        if (p !== null) {
          e.setRenderTargetFramebuffer(b, p.framebuffer);
          e.setRenderTarget(b);
        }
        let n = false;
        if (t.length !== j.cameras.length) {
          j.cameras.length = 0;
          n = true;
        }
        for (let r = 0; r < t.length; r++) {
          let i = t[r];
          let a = null;
          if (p !== null) {
            a = p.getViewport(i);
          } else {
            let t = d.getViewSubImage(f, i);
            a = t.viewport;
            if (r === 0) {
              e.setRenderTargetTextures(b, t.colorTexture, f.ignoreDepthValues ? undefined : t.depthStencilTexture);
              e.setRenderTarget(b);
            }
          }
          let o = A[r];
          if (o === undefined) {
            o = new Qr();
            o.layers.enable(r);
            o.viewport = new Ft();
            A[r] = o;
          }
          o.matrix.fromArray(i.transform.matrix);
          o.matrix.decompose(o.position, o.quaternion, o.scale);
          o.projectionMatrix.fromArray(i.projectionMatrix);
          o.projectionMatrixInverse.copy(o.projectionMatrix).invert();
          o.viewport.set(a.x, a.y, a.width, a.height);
          if (r === 0) {
            j.matrix.copy(o.matrix);
            j.matrix.decompose(j.position, j.quaternion, j.scale);
          }
          if (n === true) {
            j.cameras.push(o);
          }
        }
        let i = r.enabledFeatures;
        if (i && i.includes(`depth-sensing`)) {
          let n = d.getDepthInformation(t[0]);
          if (n && n.isValid && n.texture) {
            g.init(e, n, r.renderState);
          }
        }
      }
      for (let e = 0; e < x.length; e++) {
        let t = S[e];
        let n = x[e];
        if (t !== null && n !== undefined) {
          n.update(t, i, c || a);
        }
      }
      if (se) {
        se(t, i);
      }
      if (i.detectedPlanes) {
        n.dispatchEvent({
          type: `planesdetected`,
          data: i
        });
      }
      h = null;
    }
    let ce = new di();
    ce.setAnimationLoop(F);
    this.setAnimationLoop = function (e) {
      se = e;
    };
    this.dispose = function () {};
  }
};
var ys = new En();
var bs = new K();
function xs(e, t) {
  function n(e, t) {
    if (e.matrixAutoUpdate === true) {
      e.updateMatrix();
    }
    t.value.copy(e.matrix);
  }
  function r(t, n) {
    n.color.getRGB(t.fogColor.value, Ur(e));
    if (n.isFog) {
      t.fogNear.value = n.near;
      t.fogFar.value = n.far;
    } else if (n.isFogExp2) {
      t.fogDensity.value = n.density;
    }
  }
  function i(e, t, n, r, i) {
    if (t.isMeshBasicMaterial || t.isMeshLambertMaterial) {
      a(e, t);
    } else if (t.isMeshToonMaterial) {
      a(e, t);
      d(e, t);
    } else if (t.isMeshPhongMaterial) {
      a(e, t);
      u(e, t);
    } else if (t.isMeshStandardMaterial) {
      a(e, t);
      f(e, t);
      if (t.isMeshPhysicalMaterial) {
        p(e, t, i);
      }
    } else if (t.isMeshMatcapMaterial) {
      a(e, t);
      m(e, t);
    } else if (t.isMeshDepthMaterial) {
      a(e, t);
    } else if (t.isMeshDistanceMaterial) {
      a(e, t);
      h(e, t);
    } else if (t.isMeshNormalMaterial) {
      a(e, t);
    } else if (t.isLineBasicMaterial) {
      o(e, t);
      if (t.isLineDashedMaterial) {
        s(e, t);
      }
    } else if (t.isPointsMaterial) {
      c(e, t, n, r);
    } else if (t.isSpriteMaterial) {
      l(e, t);
    } else if (t.isShadowMaterial) {
      e.color.value.copy(t.color);
      e.opacity.value = t.opacity;
    } else if (t.isShaderMaterial) {
      t.uniformsNeedUpdate = false;
    }
  }
  function a(e, r) {
    e.opacity.value = r.opacity;
    if (r.color) {
      e.diffuse.value.copy(r.color);
    }
    if (r.emissive) {
      e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity);
    }
    if (r.map) {
      e.map.value = r.map;
      n(r.map, e.mapTransform);
    }
    if (r.alphaMap) {
      e.alphaMap.value = r.alphaMap;
      n(r.alphaMap, e.alphaMapTransform);
    }
    if (r.bumpMap) {
      e.bumpMap.value = r.bumpMap;
      n(r.bumpMap, e.bumpMapTransform);
      e.bumpScale.value = r.bumpScale;
      if (r.side === 1) {
        e.bumpScale.value *= -1;
      }
    }
    if (r.normalMap) {
      e.normalMap.value = r.normalMap;
      n(r.normalMap, e.normalMapTransform);
      e.normalScale.value.copy(r.normalScale);
      if (r.side === 1) {
        e.normalScale.value.negate();
      }
    }
    if (r.displacementMap) {
      e.displacementMap.value = r.displacementMap;
      n(r.displacementMap, e.displacementMapTransform);
      e.displacementScale.value = r.displacementScale;
      e.displacementBias.value = r.displacementBias;
    }
    if (r.emissiveMap) {
      e.emissiveMap.value = r.emissiveMap;
      n(r.emissiveMap, e.emissiveMapTransform);
    }
    if (r.specularMap) {
      e.specularMap.value = r.specularMap;
      n(r.specularMap, e.specularMapTransform);
    }
    if (r.alphaTest > 0) {
      e.alphaTest.value = r.alphaTest;
    }
    let i = t.get(r);
    let a = i.envMap;
    let o = i.envMapRotation;
    if (a) {
      e.envMap.value = a;
      ys.copy(o);
      ys.x *= -1;
      ys.y *= -1;
      ys.z *= -1;
      if (a.isCubeTexture && a.isRenderTargetTexture === false) {
        ys.y *= -1;
        ys.z *= -1;
      }
      e.envMapRotation.value.setFromMatrix4(bs.makeRotationFromEuler(ys));
      e.flipEnvMap.value = a.isCubeTexture && a.isRenderTargetTexture === false ? -1 : 1;
      e.reflectivity.value = r.reflectivity;
      e.ior.value = r.ior;
      e.refractionRatio.value = r.refractionRatio;
    }
    if (r.lightMap) {
      e.lightMap.value = r.lightMap;
      e.lightMapIntensity.value = r.lightMapIntensity;
      n(r.lightMap, e.lightMapTransform);
    }
    if (r.aoMap) {
      e.aoMap.value = r.aoMap;
      e.aoMapIntensity.value = r.aoMapIntensity;
      n(r.aoMap, e.aoMapTransform);
    }
  }
  function o(e, t) {
    e.diffuse.value.copy(t.color);
    e.opacity.value = t.opacity;
    if (t.map) {
      e.map.value = t.map;
      n(t.map, e.mapTransform);
    }
  }
  function s(e, t) {
    e.dashSize.value = t.dashSize;
    e.totalSize.value = t.dashSize + t.gapSize;
    e.scale.value = t.scale;
  }
  function c(e, t, r, i) {
    e.diffuse.value.copy(t.color);
    e.opacity.value = t.opacity;
    e.size.value = t.size * r;
    e.scale.value = i * 0.5;
    if (t.map) {
      e.map.value = t.map;
      n(t.map, e.uvTransform);
    }
    if (t.alphaMap) {
      e.alphaMap.value = t.alphaMap;
      n(t.alphaMap, e.alphaMapTransform);
    }
    if (t.alphaTest > 0) {
      e.alphaTest.value = t.alphaTest;
    }
  }
  function l(e, t) {
    e.diffuse.value.copy(t.color);
    e.opacity.value = t.opacity;
    e.rotation.value = t.rotation;
    if (t.map) {
      e.map.value = t.map;
      n(t.map, e.mapTransform);
    }
    if (t.alphaMap) {
      e.alphaMap.value = t.alphaMap;
      n(t.alphaMap, e.alphaMapTransform);
    }
    if (t.alphaTest > 0) {
      e.alphaTest.value = t.alphaTest;
    }
  }
  function u(e, t) {
    e.specular.value.copy(t.specular);
    e.shininess.value = Math.max(t.shininess, 0.0001);
  }
  function d(e, t) {
    if (t.gradientMap) {
      e.gradientMap.value = t.gradientMap;
    }
  }
  function f(e, t) {
    e.metalness.value = t.metalness;
    if (t.metalnessMap) {
      e.metalnessMap.value = t.metalnessMap;
      n(t.metalnessMap, e.metalnessMapTransform);
    }
    e.roughness.value = t.roughness;
    if (t.roughnessMap) {
      e.roughnessMap.value = t.roughnessMap;
      n(t.roughnessMap, e.roughnessMapTransform);
    }
    if (t.envMap) {
      e.envMapIntensity.value = t.envMapIntensity;
    }
  }
  function p(e, t, r) {
    e.ior.value = t.ior;
    if (t.sheen > 0) {
      e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen);
      e.sheenRoughness.value = t.sheenRoughness;
      if (t.sheenColorMap) {
        e.sheenColorMap.value = t.sheenColorMap;
        n(t.sheenColorMap, e.sheenColorMapTransform);
      }
      if (t.sheenRoughnessMap) {
        e.sheenRoughnessMap.value = t.sheenRoughnessMap;
        n(t.sheenRoughnessMap, e.sheenRoughnessMapTransform);
      }
    }
    if (t.clearcoat > 0) {
      e.clearcoat.value = t.clearcoat;
      e.clearcoatRoughness.value = t.clearcoatRoughness;
      if (t.clearcoatMap) {
        e.clearcoatMap.value = t.clearcoatMap;
        n(t.clearcoatMap, e.clearcoatMapTransform);
      }
      if (t.clearcoatRoughnessMap) {
        e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap;
        n(t.clearcoatRoughnessMap, e.clearcoatRoughnessMapTransform);
      }
      if (t.clearcoatNormalMap) {
        e.clearcoatNormalMap.value = t.clearcoatNormalMap;
        n(t.clearcoatNormalMap, e.clearcoatNormalMapTransform);
        e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale);
        if (t.side === 1) {
          e.clearcoatNormalScale.value.negate();
        }
      }
    }
    if (t.dispersion > 0) {
      e.dispersion.value = t.dispersion;
    }
    if (t.iridescence > 0) {
      e.iridescence.value = t.iridescence;
      e.iridescenceIOR.value = t.iridescenceIOR;
      e.iridescenceThicknessMinimum.value = t.iridescenceThicknessRange[0];
      e.iridescenceThicknessMaximum.value = t.iridescenceThicknessRange[1];
      if (t.iridescenceMap) {
        e.iridescenceMap.value = t.iridescenceMap;
        n(t.iridescenceMap, e.iridescenceMapTransform);
      }
      if (t.iridescenceThicknessMap) {
        e.iridescenceThicknessMap.value = t.iridescenceThicknessMap;
        n(t.iridescenceThicknessMap, e.iridescenceThicknessMapTransform);
      }
    }
    if (t.transmission > 0) {
      e.transmission.value = t.transmission;
      e.transmissionSamplerMap.value = r.texture;
      e.transmissionSamplerSize.value.set(r.width, r.height);
      if (t.transmissionMap) {
        e.transmissionMap.value = t.transmissionMap;
        n(t.transmissionMap, e.transmissionMapTransform);
      }
      e.thickness.value = t.thickness;
      if (t.thicknessMap) {
        e.thicknessMap.value = t.thicknessMap;
        n(t.thicknessMap, e.thicknessMapTransform);
      }
      e.attenuationDistance.value = t.attenuationDistance;
      e.attenuationColor.value.copy(t.attenuationColor);
    }
    if (t.anisotropy > 0) {
      e.anisotropyVector.value.set(t.anisotropy * Math.cos(t.anisotropyRotation), t.anisotropy * Math.sin(t.anisotropyRotation));
      if (t.anisotropyMap) {
        e.anisotropyMap.value = t.anisotropyMap;
        n(t.anisotropyMap, e.anisotropyMapTransform);
      }
    }
    e.specularIntensity.value = t.specularIntensity;
    e.specularColor.value.copy(t.specularColor);
    if (t.specularColorMap) {
      e.specularColorMap.value = t.specularColorMap;
      n(t.specularColorMap, e.specularColorMapTransform);
    }
    if (t.specularIntensityMap) {
      e.specularIntensityMap.value = t.specularIntensityMap;
      n(t.specularIntensityMap, e.specularIntensityMapTransform);
    }
  }
  function m(e, t) {
    if (t.matcap) {
      e.matcap.value = t.matcap;
    }
  }
  function h(e, n) {
    let r = t.get(n).light;
    e.referencePosition.value.setFromMatrixPosition(r.matrixWorld);
    e.nearDistance.value = r.shadow.camera.near;
    e.farDistance.value = r.shadow.camera.far;
  }
  return {
    refreshFogUniforms: r,
    refreshMaterialUniforms: i
  };
}
function Ss(e, t, n, r) {
  let i = {};
  let a = {};
  let o = [];
  let s = e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(e, t) {
    let n = t.program;
    r.uniformBlockBinding(e, n);
  }
  function l(e, n) {
    let o = i[e.id];
    if (o === undefined) {
      m(e);
      o = u(e);
      i[e.id] = o;
      e.addEventListener(`dispose`, g);
    }
    let s = n.program;
    r.updateUBOMapping(e, s);
    let c = t.render.frame;
    if (a[e.id] !== c) {
      f(e);
      a[e.id] = c;
    }
  }
  function u(t) {
    let n = d();
    t.__bindingPointIndex = n;
    let r = e.createBuffer();
    let i = t.__size;
    let a = t.usage;
    e.bindBuffer(e.UNIFORM_BUFFER, r);
    e.bufferData(e.UNIFORM_BUFFER, i, a);
    e.bindBuffer(e.UNIFORM_BUFFER, null);
    e.bindBufferBase(e.UNIFORM_BUFFER, n, r);
    return r;
  }
  function d() {
    for (let e = 0; e < s; e++) {
      if (o.indexOf(e) === -1) {
        o.push(e);
        return e;
      }
    }
    console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`);
    return 0;
  }
  function f(t) {
    let n = i[t.id];
    let r = t.uniforms;
    let a = t.__cache;
    e.bindBuffer(e.UNIFORM_BUFFER, n);
    for (let t = 0, n = r.length; t < n; t++) {
      let n = Array.isArray(r[t]) ? r[t] : [r[t]];
      for (let r = 0, i = n.length; r < i; r++) {
        let i = n[r];
        if (p(i, t, r, a) === true) {
          let t = i.__offset;
          let n = Array.isArray(i.value) ? i.value : [i.value];
          let r = 0;
          for (let a = 0; a < n.length; a++) {
            let o = n[a];
            let s = h(o);
            if (typeof o == `number` || typeof o == `boolean`) {
              i.__data[0] = o;
              e.bufferSubData(e.UNIFORM_BUFFER, t + r, i.__data);
            } else if (o.isMatrix3) {
              i.__data[0] = o.elements[0];
              i.__data[1] = o.elements[1];
              i.__data[2] = o.elements[2];
              i.__data[3] = 0;
              i.__data[4] = o.elements[3];
              i.__data[5] = o.elements[4];
              i.__data[6] = o.elements[5];
              i.__data[7] = 0;
              i.__data[8] = o.elements[6];
              i.__data[9] = o.elements[7];
              i.__data[10] = o.elements[8];
              i.__data[11] = 0;
            } else {
              o.toArray(i.__data, r);
              r += s.storage / Float32Array.BYTES_PER_ELEMENT;
            }
          }
          e.bufferSubData(e.UNIFORM_BUFFER, t, i.__data);
        }
      }
    }
    e.bindBuffer(e.UNIFORM_BUFFER, null);
  }
  function p(e, t, n, r) {
    let i = e.value;
    let a = `${t}_${n}`;
    if (r[a] === undefined) {
      r[a] = typeof i == `number` || typeof i == `boolean` ? i : i.clone();
      return true;
    }
    {
      let e = r[a];
      if (typeof i == `number` || typeof i == `boolean`) {
        if (e !== i) {
          r[a] = i;
          return true;
        }
      } else if (e.equals(i) === false) {
        e.copy(i);
        return true;
      }
    }
    return false;
  }
  function m(e) {
    let t = e.uniforms;
    let n = 0;
    for (let e = 0, r = t.length; e < r; e++) {
      let r = Array.isArray(t[e]) ? t[e] : [t[e]];
      for (let e = 0, t = r.length; e < t; e++) {
        let t = r[e];
        let i = Array.isArray(t.value) ? t.value : [t.value];
        for (let e = 0, r = i.length; e < r; e++) {
          let r = i[e];
          let a = h(r);
          let o = n % 16;
          let s = o % a.boundary;
          let c = o + s;
          n += s;
          if (c !== 0 && 16 - c < a.storage) {
            n += 16 - c;
          }
          t.__data = new Float32Array(a.storage / Float32Array.BYTES_PER_ELEMENT);
          t.__offset = n;
          n += a.storage;
        }
      }
    }
    let r = n % 16;
    if (r > 0) {
      n += 16 - r;
    }
    e.__size = n;
    e.__cache = {};
    return this;
  }
  function h(e) {
    let t = {
      boundary: 0,
      storage: 0
    };
    if (typeof e == `number` || typeof e == `boolean`) {
      t.boundary = 4;
      t.storage = 4;
    } else if (e.isVector2) {
      t.boundary = 8;
      t.storage = 8;
    } else if (e.isVector3 || e.isColor) {
      t.boundary = 16;
      t.storage = 12;
    } else if (e.isVector4) {
      t.boundary = 16;
      t.storage = 16;
    } else if (e.isMatrix3) {
      t.boundary = 48;
      t.storage = 48;
    } else if (e.isMatrix4) {
      t.boundary = 64;
      t.storage = 64;
    } else if (e.isTexture) {
      console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`);
    } else {
      console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`, e);
    }
    return t;
  }
  function g(t) {
    let n = t.target;
    n.removeEventListener(`dispose`, g);
    let r = o.indexOf(n.__bindingPointIndex);
    o.splice(r, 1);
    e.deleteBuffer(i[n.id]);
    delete i[n.id];
    delete a[n.id];
  }
  function _() {
    for (let t in i) {
      e.deleteBuffer(i[t]);
    }
    o = [];
    i = {};
    a = {};
  }
  return {
    bind: c,
    update: l,
    dispose: _
  };
}
var Cs = class {
  constructor(e = {}) {
    let {
      canvas: t = ht(),
      context: n = null,
      depth: r = true,
      stencil: i = false,
      alpha: a = false,
      antialias: o = false,
      premultipliedAlpha: s = true,
      preserveDrawingBuffer: u = false,
      powerPreference: d = `default`,
      failIfMajorPerformanceCaveat: f = false,
      reverseDepthBuffer: p = false
    } = e;
    this.isWebGLRenderer = true;
    let m;
    if (n !== null) {
      if (typeof WebGLRenderingContext < `u` && n instanceof WebGLRenderingContext) {
        throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);
      }
      m = n.getContextAttributes().alpha;
    } else {
      m = a;
    }
    let h = new Uint32Array(4);
    let _ = new Int32Array(4);
    let v = null;
    let y = null;
    let b = [];
    let x = [];
    this.domElement = t;
    this.debug = {
      checkShaderErrors: true,
      onShaderError: null
    };
    this.autoClear = true;
    this.autoClearColor = true;
    this.autoClearDepth = true;
    this.autoClearStencil = true;
    this.sortObjects = true;
    this.clippingPlanes = [];
    this.localClippingEnabled = false;
    this._outputColorSpace = Ne;
    this.toneMapping = 0;
    this.toneMappingExposure = 1;
    let S = this;
    let C = false;
    let w = 0;
    let T = 0;
    let E = null;
    let D = -1;
    let O = null;
    let k = new Ft();
    let A = new Ft();
    let j = null;
    let ee = new q(0);
    let te = 0;
    let M = t.width;
    let N = t.height;
    let P = 1;
    let ne = null;
    let re = null;
    let ie = new Ft(0, 0, M, N);
    let ae = new Ft(0, 0, M, N);
    let oe = false;
    let se = new ui();
    let F = false;
    let ce = false;
    let le = new K();
    let ue = new K();
    let de = new G();
    let fe = new Ft();
    let pe = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: true
    };
    let me = false;
    function he() {
      if (E === null) {
        return P;
      } else {
        return 1;
      }
    }
    let I = n;
    function ge(e, n) {
      return t.getContext(e, n);
    }
    try {
      let e = {
        alpha: true,
        depth: r,
        stencil: i,
        antialias: o,
        premultipliedAlpha: s,
        preserveDrawingBuffer: u,
        powerPreference: d,
        failIfMajorPerformanceCaveat: f
      };
      if (`setAttribute` in t) {
        t.setAttribute(`data-engine`, `three.js r170`);
      }
      t.addEventListener(`webglcontextlost`, Ve, false);
      t.addEventListener(`webglcontextrestored`, He, false);
      t.addEventListener(`webglcontextcreationerror`, Ue, false);
      if (I === null) {
        let t = `webgl2`;
        I = ge(t, e);
        if (I === null) {
          throw ge(t) ? Error(`Error creating WebGL context with your selected attributes.`) : Error(`Error creating WebGL context.`);
        }
      }
    } catch (e) {
      console.error(`THREE.WebGLRenderer: ${e.message}`);
      throw e;
    }
    let _e;
    let ve;
    let L;
    let ye;
    let R;
    let z;
    let be;
    let xe;
    let Se;
    let Ce;
    let we;
    let Te;
    let Ee;
    let De;
    let Oe;
    let ke;
    let Ae;
    let je;
    let Me;
    let Fe;
    let Ie;
    let Le;
    let Re;
    let ze;
    function Be() {
      _e = new Ki(I);
      _e.init();
      Le = new us(I, _e);
      ve = new xi(I, _e, e, Le);
      L = new os(I, _e);
      if (ve.reverseDepthBuffer && p) {
        L.buffers.depth.setReversed(true);
      }
      ye = new Yi(I);
      R = new Ho();
      z = new ls(I, _e, L, R, ve, Le, ye);
      be = new Ci(S);
      xe = new Gi(S);
      Se = new fi(I);
      Re = new yi(I, Se);
      Ce = new qi(I, Se, ye, Re);
      we = new Zi(I, Ce, Se, ye);
      Me = new Xi(I, ve, z);
      ke = new Si(R);
      Te = new Vo(S, be, xe, _e, ve, Re, ke);
      Ee = new xs(S, R);
      De = new Ko();
      Oe = new $o(_e);
      je = new vi(S, be, xe, L, we, m, s);
      Ae = new is(S, we, ve);
      ze = new Ss(I, ye, ve, L);
      Fe = new bi(I, _e, ye);
      Ie = new Ji(I, _e, ye);
      ye.programs = Te.programs;
      S.capabilities = ve;
      S.extensions = _e;
      S.properties = R;
      S.renderLists = De;
      S.shadowMap = Ae;
      S.state = L;
      S.info = ye;
    }
    Be();
    let B = new vs(S, I);
    this.xr = B;
    this.getContext = function () {
      return I;
    };
    this.getContextAttributes = function () {
      return I.getContextAttributes();
    };
    this.forceContextLoss = function () {
      let e = _e.get(`WEBGL_lose_context`);
      if (e) {
        e.loseContext();
      }
    };
    this.forceContextRestore = function () {
      let e = _e.get(`WEBGL_lose_context`);
      if (e) {
        e.restoreContext();
      }
    };
    this.getPixelRatio = function () {
      return P;
    };
    this.setPixelRatio = function (e) {
      if (e !== undefined) {
        P = e;
        this.setSize(M, N, false);
      }
    };
    this.getSize = function (e) {
      return e.set(M, N);
    };
    this.setSize = function (e, n, r = true) {
      if (B.isPresenting) {
        console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`);
      } else {
        M = e;
        N = n;
        t.width = Math.floor(e * P);
        t.height = Math.floor(n * P);
        if (r === true) {
          t.style.width = `${e}px`;
          t.style.height = `${n}px`;
        }
        this.setViewport(0, 0, e, n);
      }
    };
    this.getDrawingBufferSize = function (e) {
      return e.set(M * P, N * P).floor();
    };
    this.setDrawingBufferSize = function (e, n, r) {
      M = e;
      N = n;
      P = r;
      t.width = Math.floor(e * r);
      t.height = Math.floor(n * r);
      this.setViewport(0, 0, e, n);
    };
    this.getCurrentViewport = function (e) {
      return e.copy(k);
    };
    this.getViewport = function (e) {
      return e.copy(ie);
    };
    this.setViewport = function (e, t, n, r) {
      if (e.isVector4) {
        ie.set(e.x, e.y, e.z, e.w);
      } else {
        ie.set(e, t, n, r);
      }
      L.viewport(k.copy(ie).multiplyScalar(P).round());
    };
    this.getScissor = function (e) {
      return e.copy(ae);
    };
    this.setScissor = function (e, t, n, r) {
      if (e.isVector4) {
        ae.set(e.x, e.y, e.z, e.w);
      } else {
        ae.set(e, t, n, r);
      }
      L.scissor(A.copy(ae).multiplyScalar(P).round());
    };
    this.getScissorTest = function () {
      return oe;
    };
    this.setScissorTest = function (e) {
      L.setScissorTest(oe = e);
    };
    this.setOpaqueSort = function (e) {
      ne = e;
    };
    this.setTransparentSort = function (e) {
      re = e;
    };
    this.getClearColor = function (e) {
      return e.copy(je.getClearColor());
    };
    this.setClearColor = function () {
      je.setClearColor.apply(je, arguments);
    };
    this.getClearAlpha = function () {
      return je.getClearAlpha();
    };
    this.setClearAlpha = function () {
      je.setClearAlpha.apply(je, arguments);
    };
    this.clear = function (e = true, t = true, n = true) {
      let r = 0;
      if (e) {
        let e = false;
        if (E !== null) {
          let t = E.texture.format;
          e = t === 1033 || t === 1031 || t === 1029;
        }
        if (e) {
          let e = E.texture.type;
          let t = e === 1009 || e === 1014 || e === 1012 || e === 1020 || e === 1017 || e === 1018;
          let n = je.getClearColor();
          let r = je.getClearAlpha();
          let i = n.r;
          let a = n.g;
          let o = n.b;
          if (t) {
            h[0] = i;
            h[1] = a;
            h[2] = o;
            h[3] = r;
            I.clearBufferuiv(I.COLOR, 0, h);
          } else {
            _[0] = i;
            _[1] = a;
            _[2] = o;
            _[3] = r;
            I.clearBufferiv(I.COLOR, 0, _);
          }
        } else {
          r |= I.COLOR_BUFFER_BIT;
        }
      }
      if (t) {
        r |= I.DEPTH_BUFFER_BIT;
      }
      if (n) {
        r |= I.STENCIL_BUFFER_BIT;
        this.state.buffers.stencil.setMask(4294967295);
      }
      I.clear(r);
    };
    this.clearColor = function () {
      this.clear(true, false, false);
    };
    this.clearDepth = function () {
      this.clear(false, true, false);
    };
    this.clearStencil = function () {
      this.clear(false, false, true);
    };
    this.dispose = function () {
      t.removeEventListener(`webglcontextlost`, Ve, false);
      t.removeEventListener(`webglcontextrestored`, He, false);
      t.removeEventListener(`webglcontextcreationerror`, Ue, false);
      De.dispose();
      Oe.dispose();
      R.dispose();
      be.dispose();
      xe.dispose();
      we.dispose();
      Re.dispose();
      ze.dispose();
      Te.dispose();
      B.dispose();
      B.removeEventListener(`sessionstart`, Xe);
      B.removeEventListener(`sessionend`, Ze);
      Qe.stop();
    };
    function Ve(e) {
      e.preventDefault();
      console.log(`THREE.WebGLRenderer: Context Lost.`);
      C = true;
    }
    function He() {
      console.log(`THREE.WebGLRenderer: Context Restored.`);
      C = false;
      let e = ye.autoReset;
      let t = Ae.enabled;
      let n = Ae.autoUpdate;
      let r = Ae.needsUpdate;
      let i = Ae.type;
      Be();
      ye.autoReset = e;
      Ae.enabled = t;
      Ae.autoUpdate = n;
      Ae.needsUpdate = r;
      Ae.type = i;
    }
    function Ue(e) {
      console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `, e.statusMessage);
    }
    function We(e) {
      let t = e.target;
      t.removeEventListener(`dispose`, We);
      Ge(t);
    }
    function Ge(e) {
      Ke(e);
      R.remove(e);
    }
    function Ke(e) {
      let t = R.get(e).programs;
      if (t !== undefined) {
        t.forEach(function (e) {
          Te.releaseProgram(e);
        });
        if (e.isShaderMaterial) {
          Te.releaseShaderCache(e);
        }
      }
    }
    this.renderBufferDirect = function (e, t, n, r, i, a) {
      if (t === null) {
        t = pe;
      }
      let o = i.isMesh && i.matrixWorld.determinant() < 0;
      let s = st(e, t, n, r, i);
      L.setMaterial(r, o);
      let c = n.index;
      let l = 1;
      if (r.wireframe === true) {
        c = Ce.getWireframeAttribute(n);
        if (c === undefined) {
          return;
        }
        l = 2;
      }
      let u = n.drawRange;
      let d = n.attributes.position;
      let f = u.start * l;
      let p = (u.start + u.count) * l;
      if (a !== null) {
        f = Math.max(f, a.start * l);
        p = Math.min(p, (a.start + a.count) * l);
      }
      if (c === null) {
        if (d != null) {
          f = Math.max(f, 0);
          p = Math.min(p, d.count);
        }
      } else {
        f = Math.max(f, 0);
        p = Math.min(p, c.count);
      }
      let m = p - f;
      if (m < 0 || m === Infinity) {
        return;
      }
      Re.setup(i, r, s, n, c);
      let h;
      let g = Fe;
      if (c !== null) {
        h = Se.get(c);
        g = Ie;
        g.setIndex(h);
      }
      if (i.isMesh) {
        if (r.wireframe === true) {
          L.setLineWidth(r.wireframeLinewidth * he());
          g.setMode(I.LINES);
        } else {
          g.setMode(I.TRIANGLES);
        }
      } else if (i.isLine) {
        let e = r.linewidth;
        if (e === undefined) {
          e = 1;
        }
        L.setLineWidth(e * he());
        if (i.isLineSegments) {
          g.setMode(I.LINES);
        } else if (i.isLineLoop) {
          g.setMode(I.LINE_LOOP);
        } else {
          g.setMode(I.LINE_STRIP);
        }
      } else if (i.isPoints) {
        g.setMode(I.POINTS);
      } else if (i.isSprite) {
        g.setMode(I.TRIANGLES);
      }
      if (i.isBatchedMesh) {
        if (i._multiDrawInstances !== null) {
          g.renderMultiDrawInstances(i._multiDrawStarts, i._multiDrawCounts, i._multiDrawCount, i._multiDrawInstances);
        } else if (_e.get(`WEBGL_multi_draw`)) {
          g.renderMultiDraw(i._multiDrawStarts, i._multiDrawCounts, i._multiDrawCount);
        } else {
          let e = i._multiDrawStarts;
          let t = i._multiDrawCounts;
          let n = i._multiDrawCount;
          let a = c ? Se.get(c).bytesPerElement : 1;
          let o = R.get(r).currentProgram.getUniforms();
          for (let r = 0; r < n; r++) {
            o.setValue(I, `_gl_DrawID`, r);
            g.render(e[r] / a, t[r]);
          }
        }
      } else if (i.isInstancedMesh) {
        g.renderInstances(f, m, i.count);
      } else if (n.isInstancedBufferGeometry) {
        let e = n._maxInstanceCount === undefined ? Infinity : n._maxInstanceCount;
        let t = Math.min(n.instanceCount, e);
        g.renderInstances(f, m, t);
      } else {
        g.render(f, m);
      }
    };
    function qe(e, t, n) {
      if (e.transparent === true && e.side === 2 && e.forceSinglePass === false) {
        e.side = 1;
        e.needsUpdate = true;
        it(e, t, n);
        e.side = 0;
        e.needsUpdate = true;
        it(e, t, n);
        e.side = 2;
      } else {
        it(e, t, n);
      }
    }
    this.compile = function (e, t, n = null) {
      if (n === null) {
        n = e;
      }
      y = Oe.get(n);
      y.init(t);
      x.push(y);
      n.traverseVisible(function (e) {
        if (e.isLight && e.layers.test(t.layers)) {
          y.pushLight(e);
          if (e.castShadow) {
            y.pushShadow(e);
          }
        }
      });
      if (e !== n) {
        e.traverseVisible(function (e) {
          if (e.isLight && e.layers.test(t.layers)) {
            y.pushLight(e);
            if (e.castShadow) {
              y.pushShadow(e);
            }
          }
        });
      }
      y.setupLights();
      let r = new Set();
      e.traverse(function (e) {
        if (!e.isMesh && !e.isPoints && !e.isLine && !e.isSprite) {
          return;
        }
        let t = e.material;
        if (t) {
          if (Array.isArray(t)) {
            for (let i = 0; i < t.length; i++) {
              let a = t[i];
              qe(a, n, e);
              r.add(a);
            }
          } else {
            qe(t, n, e);
            r.add(t);
          }
        }
      });
      x.pop();
      y = null;
      return r;
    };
    this.compileAsync = function (e, t, n = null) {
      let r = this.compile(e, t, n);
      return new Promise(t => {
        function n() {
          r.forEach(function (e) {
            if (R.get(e).currentProgram.isReady()) {
              r.delete(e);
            }
          });
          if (r.size === 0) {
            t(e);
          } else {
            setTimeout(n, 10);
          }
        }
        if (_e.get(`KHR_parallel_shader_compile`) === null) {
          setTimeout(n, 10);
        } else {
          n();
        }
      });
    };
    let Je = null;
    function Ye(e) {
      if (Je) {
        Je(e);
      }
    }
    function Xe() {
      Qe.stop();
    }
    function Ze() {
      Qe.start();
    }
    let Qe = new di();
    Qe.setAnimationLoop(Ye);
    if (typeof self < `u`) {
      Qe.setContext(self);
    }
    this.setAnimationLoop = function (e) {
      Je = e;
      B.setAnimationLoop(e);
      if (e === null) {
        Qe.stop();
      } else {
        Qe.start();
      }
    };
    B.addEventListener(`sessionstart`, Xe);
    B.addEventListener(`sessionend`, Ze);
    this.render = function (e, t) {
      if (t !== undefined && t.isCamera !== true) {
        console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);
        return;
      }
      if (C === true) {
        return;
      }
      if (e.matrixWorldAutoUpdate === true) {
        e.updateMatrixWorld();
      }
      if (t.parent === null && t.matrixWorldAutoUpdate === true) {
        t.updateMatrixWorld();
      }
      if (B.enabled === true && B.isPresenting === true) {
        if (B.cameraAutoUpdate === true) {
          B.updateCamera(t);
        }
        t = B.getCamera();
      }
      if (e.isScene === true) {
        e.onBeforeRender(S, e, t, E);
      }
      y = Oe.get(e, x.length);
      y.init(t);
      x.push(y);
      ue.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse);
      se.setFromProjectionMatrix(ue);
      ce = this.localClippingEnabled;
      F = ke.init(this.clippingPlanes, ce);
      v = De.get(e, b.length);
      v.init();
      b.push(v);
      if (B.enabled === true && B.isPresenting === true) {
        let e = S.xr.getDepthSensingMesh();
        if (e !== null) {
          $e(e, t, -Infinity, S.sortObjects);
        }
      }
      $e(e, t, 0, S.sortObjects);
      v.finish();
      if (S.sortObjects === true) {
        v.sort(ne, re);
      }
      me = B.enabled === false || B.isPresenting === false || B.hasDepthSensing() === false;
      if (me) {
        je.addToRenderList(v, e);
      }
      this.info.render.frame++;
      if (F === true) {
        ke.beginShadows();
      }
      let n = y.state.shadowsArray;
      Ae.render(n, e, t);
      if (F === true) {
        ke.endShadows();
      }
      if (this.info.autoReset === true) {
        this.info.reset();
      }
      let r = v.opaque;
      let i = v.transmissive;
      y.setupLights();
      if (t.isArrayCamera) {
        let n = t.cameras;
        if (i.length > 0) {
          for (let t = 0, a = n.length; t < a; t++) {
            let a = n[t];
            tt(r, i, e, a);
          }
        }
        if (me) {
          je.render(e);
        }
        for (let t = 0, r = n.length; t < r; t++) {
          let r = n[t];
          et(v, e, r, r.viewport);
        }
      } else {
        if (i.length > 0) {
          tt(r, i, e, t);
        }
        if (me) {
          je.render(e);
        }
        et(v, e, t);
      }
      if (E !== null) {
        z.updateMultisampleRenderTarget(E);
        z.updateRenderTargetMipmap(E);
      }
      if (e.isScene === true) {
        e.onAfterRender(S, e, t);
      }
      Re.resetDefaultState();
      D = -1;
      O = null;
      x.pop();
      if (x.length > 0) {
        y = x[x.length - 1];
        if (F === true) {
          ke.setGlobalState(S.clippingPlanes, y.state.camera);
        }
      } else {
        y = null;
      }
      b.pop();
      v = b.length > 0 ? b[b.length - 1] : null;
    };
    function $e(e, t, n, r) {
      if (e.visible === false) {
        return;
      }
      if (e.layers.test(t.layers)) {
        if (e.isGroup) {
          n = e.renderOrder;
        } else if (e.isLOD) {
          if (e.autoUpdate === true) {
            e.update(t);
          }
        } else if (e.isLight) {
          y.pushLight(e);
          if (e.castShadow) {
            y.pushShadow(e);
          }
        } else if (e.isSprite) {
          if (!e.frustumCulled || se.intersectsSprite(e)) {
            if (r) {
              fe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ue);
            }
            let t = we.update(e);
            let i = e.material;
            if (i.visible) {
              v.push(e, t, i, n, fe.z, null);
            }
          }
        } else if ((e.isMesh || e.isLine || e.isPoints) && (!e.frustumCulled || se.intersectsObject(e))) {
          let t = we.update(e);
          let i = e.material;
          if (r) {
            if (e.boundingSphere === undefined) {
              if (t.boundingSphere === null) {
                t.computeBoundingSphere();
              }
              fe.copy(t.boundingSphere.center);
            } else {
              if (e.boundingSphere === null) {
                e.computeBoundingSphere();
              }
              fe.copy(e.boundingSphere.center);
            }
            fe.applyMatrix4(e.matrixWorld).applyMatrix4(ue);
          }
          if (Array.isArray(i)) {
            let r = t.groups;
            for (let a = 0, o = r.length; a < o; a++) {
              let o = r[a];
              let s = i[o.materialIndex];
              if (s && s.visible) {
                v.push(e, t, s, n, fe.z, o);
              }
            }
          } else if (i.visible) {
            v.push(e, t, i, n, fe.z, null);
          }
        }
      }
      let i = e.children;
      for (let e = 0, a = i.length; e < a; e++) {
        $e(i[e], t, n, r);
      }
    }
    function et(e, t, n, r) {
      let i = e.opaque;
      let a = e.transmissive;
      let o = e.transparent;
      y.setupLightsView(n);
      if (F === true) {
        ke.setGlobalState(S.clippingPlanes, n);
      }
      if (r) {
        L.viewport(k.copy(r));
      }
      if (i.length > 0) {
        nt(i, t, n);
      }
      if (a.length > 0) {
        nt(a, t, n);
      }
      if (o.length > 0) {
        nt(o, t, n);
      }
      L.buffers.depth.setTest(true);
      L.buffers.depth.setMask(true);
      L.buffers.color.setMask(true);
      L.setPolygonOffset(false);
    }
    function tt(e, t, n, r) {
      if ((n.isScene === true ? n.overrideMaterial : null) !== null) {
        return;
      }
      if (y.state.transmissionRenderTarget[r.id] === undefined) {
        y.state.transmissionRenderTarget[r.id] = new Lt(1, 1, {
          generateMipmaps: true,
          type: _e.has(`EXT_color_buffer_half_float`) || _e.has(`EXT_color_buffer_float`) ? g : l,
          minFilter: c,
          samples: 4,
          stencilBuffer: i,
          resolveDepthBuffer: false,
          resolveStencilBuffer: false,
          colorSpace: W.workingColorSpace
        });
      }
      let a = y.state.transmissionRenderTarget[r.id];
      let o = r.viewport || k;
      a.setSize(o.z, o.w);
      let s = S.getRenderTarget();
      S.setRenderTarget(a);
      S.getClearColor(ee);
      te = S.getClearAlpha();
      if (te < 1) {
        S.setClearColor(16777215, 0.5);
      }
      S.clear();
      if (me) {
        je.render(n);
      }
      let u = S.toneMapping;
      S.toneMapping = 0;
      let d = r.viewport;
      if (r.viewport !== undefined) {
        r.viewport = undefined;
      }
      y.setupLightsView(r);
      if (F === true) {
        ke.setGlobalState(S.clippingPlanes, r);
      }
      nt(e, n, r);
      z.updateMultisampleRenderTarget(a);
      z.updateRenderTargetMipmap(a);
      if (_e.has(`WEBGL_multisampled_render_to_texture`) === false) {
        let e = false;
        for (let i = 0, a = t.length; i < a; i++) {
          let a = t[i];
          let o = a.object;
          let s = a.geometry;
          let c = a.material;
          let l = a.group;
          if (c.side === 2 && o.layers.test(r.layers)) {
            let t = c.side;
            c.side = 1;
            c.needsUpdate = true;
            rt(o, n, r, s, c, l);
            c.side = t;
            c.needsUpdate = true;
            e = true;
          }
        }
        if (e === true) {
          z.updateMultisampleRenderTarget(a);
          z.updateRenderTargetMipmap(a);
        }
      }
      S.setRenderTarget(s);
      S.setClearColor(ee, te);
      if (d !== undefined) {
        r.viewport = d;
      }
      S.toneMapping = u;
    }
    function nt(e, t, n) {
      let r = t.isScene === true ? t.overrideMaterial : null;
      for (let i = 0, a = e.length; i < a; i++) {
        let a = e[i];
        let o = a.object;
        let s = a.geometry;
        let c = r === null ? a.material : r;
        let l = a.group;
        if (o.layers.test(n.layers)) {
          rt(o, t, n, s, c, l);
        }
      }
    }
    function rt(e, t, n, r, i, a) {
      e.onBeforeRender(S, t, n, r, i, a);
      e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld);
      e.normalMatrix.getNormalMatrix(e.modelViewMatrix);
      i.onBeforeRender(S, t, n, r, e, a);
      if (i.transparent === true && i.side === 2 && i.forceSinglePass === false) {
        i.side = 1;
        i.needsUpdate = true;
        S.renderBufferDirect(n, t, r, i, e, a);
        i.side = 0;
        i.needsUpdate = true;
        S.renderBufferDirect(n, t, r, i, e, a);
        i.side = 2;
      } else {
        S.renderBufferDirect(n, t, r, i, e, a);
      }
      e.onAfterRender(S, t, n, r, i, a);
    }
    function it(e, t, n) {
      if (t.isScene !== true) {
        t = pe;
      }
      let r = R.get(e);
      let i = y.state.lights;
      let a = y.state.shadowsArray;
      let o = i.state.version;
      let s = Te.getParameters(e, i.state, a, t, n);
      let c = Te.getProgramCacheKey(s);
      let l = r.programs;
      r.environment = e.isMeshStandardMaterial ? t.environment : null;
      r.fog = t.fog;
      r.envMap = (e.isMeshStandardMaterial ? xe : be).get(e.envMap || r.environment);
      r.envMapRotation = r.environment !== null && e.envMap === null ? t.environmentRotation : e.envMapRotation;
      if (l === undefined) {
        e.addEventListener(`dispose`, We);
        l = new Map();
        r.programs = l;
      }
      let u = l.get(c);
      if (u !== undefined) {
        if (r.currentProgram === u && r.lightsStateVersion === o) {
          ot(e, s);
          return u;
        }
      } else {
        s.uniforms = Te.getUniforms(e);
        e.onBeforeCompile(s, S);
        u = Te.acquireProgram(s, c);
        l.set(c, u);
        r.uniforms = s.uniforms;
      }
      let d = r.uniforms;
      if (!e.isShaderMaterial && !e.isRawShaderMaterial || e.clipping === true) {
        d.clippingPlanes = ke.uniform;
      }
      ot(e, s);
      r.needsLights = lt(e);
      r.lightsStateVersion = o;
      if (r.needsLights) {
        d.ambientLightColor.value = i.state.ambient;
        d.lightProbe.value = i.state.probe;
        d.directionalLights.value = i.state.directional;
        d.directionalLightShadows.value = i.state.directionalShadow;
        d.spotLights.value = i.state.spot;
        d.spotLightShadows.value = i.state.spotShadow;
        d.rectAreaLights.value = i.state.rectArea;
        d.ltc_1.value = i.state.rectAreaLTC1;
        d.ltc_2.value = i.state.rectAreaLTC2;
        d.pointLights.value = i.state.point;
        d.pointLightShadows.value = i.state.pointShadow;
        d.hemisphereLights.value = i.state.hemi;
        d.directionalShadowMap.value = i.state.directionalShadowMap;
        d.directionalShadowMatrix.value = i.state.directionalShadowMatrix;
        d.spotShadowMap.value = i.state.spotShadowMap;
        d.spotLightMatrix.value = i.state.spotLightMatrix;
        d.spotLightMap.value = i.state.spotLightMap;
        d.pointShadowMap.value = i.state.pointShadowMap;
        d.pointShadowMatrix.value = i.state.pointShadowMatrix;
      }
      r.currentProgram = u;
      r.uniformsList = null;
      return u;
    }
    function at(e) {
      if (e.uniformsList === null) {
        let t = e.currentProgram.getUniforms();
        e.uniformsList = ao.seqWithValue(t.seq, e.uniforms);
      }
      return e.uniformsList;
    }
    function ot(e, t) {
      let n = R.get(e);
      n.outputColorSpace = t.outputColorSpace;
      n.batching = t.batching;
      n.batchingColor = t.batchingColor;
      n.instancing = t.instancing;
      n.instancingColor = t.instancingColor;
      n.instancingMorph = t.instancingMorph;
      n.skinning = t.skinning;
      n.morphTargets = t.morphTargets;
      n.morphNormals = t.morphNormals;
      n.morphColors = t.morphColors;
      n.morphTargetsCount = t.morphTargetsCount;
      n.numClippingPlanes = t.numClippingPlanes;
      n.numIntersection = t.numClipIntersection;
      n.vertexAlphas = t.vertexAlphas;
      n.vertexTangents = t.vertexTangents;
      n.toneMapping = t.toneMapping;
    }
    function st(e, t, n, r, i) {
      if (t.isScene !== true) {
        t = pe;
      }
      z.resetTextureUnits();
      let a = t.fog;
      let o = r.isMeshStandardMaterial ? t.environment : null;
      let s = E === null ? S.outputColorSpace : E.isXRRenderTarget === true ? E.texture.colorSpace : Pe;
      let c = (r.isMeshStandardMaterial ? xe : be).get(r.envMap || o);
      let l = r.vertexColors === true && !!n.attributes.color && n.attributes.color.itemSize === 4;
      let u = !!n.attributes.tangent && (!!r.normalMap || r.anisotropy > 0);
      let d = !!n.morphAttributes.position;
      let f = !!n.morphAttributes.normal;
      let p = !!n.morphAttributes.color;
      let m = 0;
      if (r.toneMapped && (E === null || E.isXRRenderTarget === true)) {
        m = S.toneMapping;
      }
      let h = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color;
      let g = h === undefined ? 0 : h.length;
      let _ = R.get(r);
      let v = y.state.lights;
      if (F === true && (ce === true || e !== O)) {
        let t = e === O && r.id === D;
        ke.setState(r, e, t);
      }
      let b = false;
      if (r.version === _.__version) {
        if (_.needsLights && _.lightsStateVersion !== v.state.version) {
          b = true;
        } else if (_.outputColorSpace === s) {
          if (i.isBatchedMesh && _.batching === false || !i.isBatchedMesh && _.batching === true || i.isBatchedMesh && _.batchingColor === true && i.colorTexture === null || i.isBatchedMesh && _.batchingColor === false && i.colorTexture !== null || i.isInstancedMesh && _.instancing === false || !i.isInstancedMesh && _.instancing === true || i.isSkinnedMesh && _.skinning === false || !i.isSkinnedMesh && _.skinning === true || i.isInstancedMesh && _.instancingColor === true && i.instanceColor === null || i.isInstancedMesh && _.instancingColor === false && i.instanceColor !== null || i.isInstancedMesh && _.instancingMorph === true && i.morphTexture === null || i.isInstancedMesh && _.instancingMorph === false && i.morphTexture !== null) {
            b = true;
          } else if (_.envMap === c) {
            if (r.fog === true && _.fog !== a || _.numClippingPlanes !== undefined && (_.numClippingPlanes !== ke.numPlanes || _.numIntersection !== ke.numIntersection)) {
              b = true;
            } else if (_.vertexAlphas === l && _.vertexTangents === u && _.morphTargets === d && _.morphNormals === f && _.morphColors === p && _.toneMapping === m) {
              if (_.morphTargetsCount !== g) {
                b = true;
              }
            } else {
              b = true;
            }
          } else {
            b = true;
          }
        } else {
          b = true;
        }
      } else {
        b = true;
        _.__version = r.version;
      }
      let x = _.currentProgram;
      if (b === true) {
        x = it(r, t, i);
      }
      let C = false;
      let w = false;
      let T = false;
      let k = x.getUniforms();
      let A = _.uniforms;
      if (L.useProgram(x.program)) {
        C = true;
        w = true;
        T = true;
      }
      if (r.id !== D) {
        D = r.id;
        w = true;
      }
      if (C || O !== e) {
        if (L.buffers.depth.getReversed()) {
          le.copy(e.projectionMatrix);
          yt(le);
          bt(le);
          k.setValue(I, `projectionMatrix`, le);
        } else {
          k.setValue(I, `projectionMatrix`, e.projectionMatrix);
        }
        k.setValue(I, `viewMatrix`, e.matrixWorldInverse);
        let t = k.map.cameraPosition;
        if (t !== undefined) {
          t.setValue(I, de.setFromMatrixPosition(e.matrixWorld));
        }
        if (ve.logarithmicDepthBuffer) {
          k.setValue(I, `logDepthBufFC`, 2 / (Math.log(e.far + 1) / Math.LN2));
        }
        if (r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshLambertMaterial || r.isMeshBasicMaterial || r.isMeshStandardMaterial || r.isShaderMaterial) {
          k.setValue(I, `isOrthographic`, e.isOrthographicCamera === true);
        }
        if (O !== e) {
          O = e;
          w = true;
          T = true;
        }
      }
      if (i.isSkinnedMesh) {
        k.setOptional(I, i, `bindMatrix`);
        k.setOptional(I, i, `bindMatrixInverse`);
        let e = i.skeleton;
        if (e) {
          if (e.boneTexture === null) {
            e.computeBoneTexture();
          }
          k.setValue(I, `boneTexture`, e.boneTexture, z);
        }
      }
      if (i.isBatchedMesh) {
        k.setOptional(I, i, `batchingTexture`);
        k.setValue(I, `batchingTexture`, i._matricesTexture, z);
        k.setOptional(I, i, `batchingIdTexture`);
        k.setValue(I, `batchingIdTexture`, i._indirectTexture, z);
        k.setOptional(I, i, `batchingColorTexture`);
        if (i._colorsTexture !== null) {
          k.setValue(I, `batchingColorTexture`, i._colorsTexture, z);
        }
      }
      let j = n.morphAttributes;
      if (j.position !== undefined || j.normal !== undefined || j.color !== undefined) {
        Me.update(i, n, x);
      }
      if (w || _.receiveShadow !== i.receiveShadow) {
        _.receiveShadow = i.receiveShadow;
        k.setValue(I, `receiveShadow`, i.receiveShadow);
      }
      if (r.isMeshGouraudMaterial && r.envMap !== null) {
        A.envMap.value = c;
        A.flipEnvMap.value = c.isCubeTexture && c.isRenderTargetTexture === false ? -1 : 1;
      }
      if (r.isMeshStandardMaterial && r.envMap === null && t.environment !== null) {
        A.envMapIntensity.value = t.environmentIntensity;
      }
      if (w) {
        k.setValue(I, `toneMappingExposure`, S.toneMappingExposure);
        if (_.needsLights) {
          ct(A, T);
        }
        if (a && r.fog === true) {
          Ee.refreshFogUniforms(A, a);
        }
        Ee.refreshMaterialUniforms(A, r, P, N, y.state.transmissionRenderTarget[e.id]);
        ao.upload(I, at(_), A, z);
      }
      if (r.isShaderMaterial && r.uniformsNeedUpdate === true) {
        ao.upload(I, at(_), A, z);
        r.uniformsNeedUpdate = false;
      }
      if (r.isSpriteMaterial) {
        k.setValue(I, `center`, i.center);
      }
      k.setValue(I, `modelViewMatrix`, i.modelViewMatrix);
      k.setValue(I, `normalMatrix`, i.normalMatrix);
      k.setValue(I, `modelMatrix`, i.matrixWorld);
      if (r.isShaderMaterial || r.isRawShaderMaterial) {
        let e = r.uniformsGroups;
        for (let t = 0, n = e.length; t < n; t++) {
          let n = e[t];
          ze.update(n, x);
          ze.bind(n, x);
        }
      }
      return x;
    }
    function ct(e, t) {
      e.ambientLightColor.needsUpdate = t;
      e.lightProbe.needsUpdate = t;
      e.directionalLights.needsUpdate = t;
      e.directionalLightShadows.needsUpdate = t;
      e.pointLights.needsUpdate = t;
      e.pointLightShadows.needsUpdate = t;
      e.spotLights.needsUpdate = t;
      e.spotLightShadows.needsUpdate = t;
      e.rectAreaLights.needsUpdate = t;
      e.hemisphereLights.needsUpdate = t;
    }
    function lt(e) {
      return e.isMeshLambertMaterial || e.isMeshToonMaterial || e.isMeshPhongMaterial || e.isMeshStandardMaterial || e.isShadowMaterial || e.isShaderMaterial && e.lights === true;
    }
    this.getActiveCubeFace = function () {
      return w;
    };
    this.getActiveMipmapLevel = function () {
      return T;
    };
    this.getRenderTarget = function () {
      return E;
    };
    this.setRenderTargetTextures = function (e, t, n) {
      R.get(e.texture).__webglTexture = t;
      R.get(e.depthTexture).__webglTexture = n;
      let r = R.get(e);
      r.__hasExternalTextures = true;
      r.__autoAllocateDepthBuffer = n === undefined;
      if (!r.__autoAllocateDepthBuffer) {
        if (_e.has(`WEBGL_multisampled_render_to_texture`) === true) {
          console.warn(`THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided`);
          r.__useRenderToTexture = false;
        }
      }
    };
    this.setRenderTargetFramebuffer = function (e, t) {
      let n = R.get(e);
      n.__webglFramebuffer = t;
      n.__useDefaultFramebuffer = t === undefined;
    };
    this.setRenderTarget = function (e, t = 0, n = 0) {
      E = e;
      w = t;
      T = n;
      let r = true;
      let i = null;
      let a = false;
      let o = false;
      if (e) {
        let s = R.get(e);
        if (s.__useDefaultFramebuffer !== undefined) {
          L.bindFramebuffer(I.FRAMEBUFFER, null);
          r = false;
        } else if (s.__webglFramebuffer === undefined) {
          z.setupRenderTarget(e);
        } else if (s.__hasExternalTextures) {
          z.rebindTextures(e, R.get(e.texture).__webglTexture, R.get(e.depthTexture).__webglTexture);
        } else if (e.depthBuffer) {
          let t = e.depthTexture;
          if (s.__boundDepthTexture !== t) {
            if (t !== null && R.has(t) && (e.width !== t.image.width || e.height !== t.image.height)) {
              throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);
            }
            z.setupDepthRenderbuffer(e);
          }
        }
        let c = e.texture;
        if (c.isData3DTexture || c.isDataArrayTexture || c.isCompressedArrayTexture) {
          o = true;
        }
        let l = R.get(e).__webglFramebuffer;
        if (e.isWebGLCubeRenderTarget) {
          i = Array.isArray(l[t]) ? l[t][n] : l[t];
          a = true;
        } else {
          i = e.samples > 0 && z.useMultisampledRTT(e) === false ? R.get(e).__webglMultisampledFramebuffer : Array.isArray(l) ? l[n] : l;
        }
        k.copy(e.viewport);
        A.copy(e.scissor);
        j = e.scissorTest;
      } else {
        k.copy(ie).multiplyScalar(P).floor();
        A.copy(ae).multiplyScalar(P).floor();
        j = oe;
      }
      if (L.bindFramebuffer(I.FRAMEBUFFER, i) && r) {
        L.drawBuffers(e, i);
      }
      L.viewport(k);
      L.scissor(A);
      L.setScissorTest(j);
      if (a) {
        let r = R.get(e.texture);
        I.framebufferTexture2D(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_CUBE_MAP_POSITIVE_X + t, r.__webglTexture, n);
      } else if (o) {
        let r = R.get(e.texture);
        let i = t || 0;
        I.framebufferTextureLayer(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, r.__webglTexture, n || 0, i);
      }
      D = -1;
    };
    this.readRenderTargetPixels = function (e, t, n, r, i, a, o) {
      if (!e || !e.isWebGLRenderTarget) {
        console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);
        return;
      }
      let s = R.get(e).__webglFramebuffer;
      if (e.isWebGLCubeRenderTarget && o !== undefined) {
        s = s[o];
      }
      if (s) {
        L.bindFramebuffer(I.FRAMEBUFFER, s);
        try {
          let o = e.texture;
          let s = o.format;
          let c = o.type;
          if (!ve.textureFormatReadable(s)) {
            console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);
            return;
          }
          if (!ve.textureTypeReadable(c)) {
            console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);
            return;
          }
          if (t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i) {
            I.readPixels(t, n, r, i, Le.convert(s), Le.convert(c), a);
          }
        } finally {
          let e = E === null ? null : R.get(E).__webglFramebuffer;
          L.bindFramebuffer(I.FRAMEBUFFER, e);
        }
      }
    };
    this.readRenderTargetPixelsAsync = async function (e, t, n, r, i, a, o) {
      if (!e || !e.isWebGLRenderTarget) {
        throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);
      }
      let s = R.get(e).__webglFramebuffer;
      if (e.isWebGLCubeRenderTarget && o !== undefined) {
        s = s[o];
      }
      if (s) {
        let o = e.texture;
        let c = o.format;
        let l = o.type;
        if (!ve.textureFormatReadable(c)) {
          throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);
        }
        if (!ve.textureTypeReadable(l)) {
          throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);
        }
        if (t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i) {
          L.bindFramebuffer(I.FRAMEBUFFER, s);
          let e = I.createBuffer();
          I.bindBuffer(I.PIXEL_PACK_BUFFER, e);
          I.bufferData(I.PIXEL_PACK_BUFFER, a.byteLength, I.STREAM_READ);
          I.readPixels(t, n, r, i, Le.convert(c), Le.convert(l), 0);
          let o = E === null ? null : R.get(E).__webglFramebuffer;
          L.bindFramebuffer(I.FRAMEBUFFER, o);
          let u = I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE, 0);
          I.flush();
          await vt(I, u, 4);
          I.bindBuffer(I.PIXEL_PACK_BUFFER, e);
          I.getBufferSubData(I.PIXEL_PACK_BUFFER, 0, a);
          I.deleteBuffer(e);
          I.deleteSync(u);
          return a;
        }
        throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`);
      }
    };
    this.copyFramebufferToTexture = function (e, t = null, n = 0) {
      if (e.isTexture !== true) {
        _t(`WebGLRenderer: copyFramebufferToTexture function signature has changed.`);
        t = arguments[0] || null;
        e = arguments[1];
      }
      let r = 2 ** -n;
      let i = Math.floor(e.image.width * r);
      let a = Math.floor(e.image.height * r);
      let o = t === null ? 0 : t.x;
      let s = t === null ? 0 : t.y;
      z.setTexture2D(e, 0);
      I.copyTexSubImage2D(I.TEXTURE_2D, n, 0, 0, o, s, i, a);
      L.unbindTexture();
    };
    this.copyTextureToTexture = function (e, t, n = null, r = null, i = 0) {
      if (e.isTexture !== true) {
        _t(`WebGLRenderer: copyTextureToTexture function signature has changed.`);
        r = arguments[0] || null;
        e = arguments[1];
        t = arguments[2];
        i = arguments[3] || 0;
        n = null;
      }
      let a;
      let o;
      let s;
      let c;
      let l;
      let u;
      let d;
      let f;
      let p;
      let m = e.isCompressedTexture ? e.mipmaps[i] : e.image;
      if (n === null) {
        a = m.width;
        o = m.height;
        s = m.depth || 1;
        c = 0;
        l = 0;
        u = 0;
      } else {
        a = n.max.x - n.min.x;
        o = n.max.y - n.min.y;
        s = n.isBox3 ? n.max.z - n.min.z : 1;
        c = n.min.x;
        l = n.min.y;
        u = n.isBox3 ? n.min.z : 0;
      }
      if (r === null) {
        d = 0;
        f = 0;
        p = 0;
      } else {
        d = r.x;
        f = r.y;
        p = r.z;
      }
      let h = Le.convert(t.format);
      let g = Le.convert(t.type);
      let _;
      if (t.isData3DTexture) {
        z.setTexture3D(t, 0);
        _ = I.TEXTURE_3D;
      } else if (t.isDataArrayTexture || t.isCompressedArrayTexture) {
        z.setTexture2DArray(t, 0);
        _ = I.TEXTURE_2D_ARRAY;
      } else {
        z.setTexture2D(t, 0);
        _ = I.TEXTURE_2D;
      }
      I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, t.flipY);
      I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha);
      I.pixelStorei(I.UNPACK_ALIGNMENT, t.unpackAlignment);
      let v = I.getParameter(I.UNPACK_ROW_LENGTH);
      let y = I.getParameter(I.UNPACK_IMAGE_HEIGHT);
      let b = I.getParameter(I.UNPACK_SKIP_PIXELS);
      let x = I.getParameter(I.UNPACK_SKIP_ROWS);
      let S = I.getParameter(I.UNPACK_SKIP_IMAGES);
      I.pixelStorei(I.UNPACK_ROW_LENGTH, m.width);
      I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, m.height);
      I.pixelStorei(I.UNPACK_SKIP_PIXELS, c);
      I.pixelStorei(I.UNPACK_SKIP_ROWS, l);
      I.pixelStorei(I.UNPACK_SKIP_IMAGES, u);
      let C = e.isDataArrayTexture || e.isData3DTexture;
      let w = t.isDataArrayTexture || t.isData3DTexture;
      if (e.isRenderTargetTexture || e.isDepthTexture) {
        let n = R.get(e);
        let r = R.get(t);
        let m = R.get(n.__renderTarget);
        let h = R.get(r.__renderTarget);
        L.bindFramebuffer(I.READ_FRAMEBUFFER, m.__webglFramebuffer);
        L.bindFramebuffer(I.DRAW_FRAMEBUFFER, h.__webglFramebuffer);
        for (let n = 0; n < s; n++) {
          if (C) {
            I.framebufferTextureLayer(I.READ_FRAMEBUFFER, I.COLOR_ATTACHMENT0, R.get(e).__webglTexture, i, u + n);
          }
          if (e.isDepthTexture) {
            if (w) {
              I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER, I.COLOR_ATTACHMENT0, R.get(t).__webglTexture, i, p + n);
            }
            I.blitFramebuffer(c, l, a, o, d, f, a, o, I.DEPTH_BUFFER_BIT, I.NEAREST);
          } else if (w) {
            I.copyTexSubImage3D(_, i, d, f, p + n, c, l, a, o);
          } else {
            I.copyTexSubImage2D(_, i, d, f, p + n, c, l, a, o);
          }
        }
        L.bindFramebuffer(I.READ_FRAMEBUFFER, null);
        L.bindFramebuffer(I.DRAW_FRAMEBUFFER, null);
      } else if (w) {
        if (e.isDataTexture || e.isData3DTexture) {
          I.texSubImage3D(_, i, d, f, p, a, o, s, h, g, m.data);
        } else if (t.isCompressedArrayTexture) {
          I.compressedTexSubImage3D(_, i, d, f, p, a, o, s, h, m.data);
        } else {
          I.texSubImage3D(_, i, d, f, p, a, o, s, h, g, m);
        }
      } else if (e.isDataTexture) {
        I.texSubImage2D(I.TEXTURE_2D, i, d, f, a, o, h, g, m.data);
      } else if (e.isCompressedTexture) {
        I.compressedTexSubImage2D(I.TEXTURE_2D, i, d, f, m.width, m.height, h, m.data);
      } else {
        I.texSubImage2D(I.TEXTURE_2D, i, d, f, a, o, h, g, m);
      }
      I.pixelStorei(I.UNPACK_ROW_LENGTH, v);
      I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, y);
      I.pixelStorei(I.UNPACK_SKIP_PIXELS, b);
      I.pixelStorei(I.UNPACK_SKIP_ROWS, x);
      I.pixelStorei(I.UNPACK_SKIP_IMAGES, S);
      if (i === 0 && t.generateMipmaps) {
        I.generateMipmap(_);
      }
      L.unbindTexture();
    };
    this.copyTextureToTexture3D = function (e, t, n = null, r = null, i = 0) {
      if (e.isTexture !== true) {
        _t(`WebGLRenderer: copyTextureToTexture3D function signature has changed.`);
        n = arguments[0] || null;
        r = arguments[1] || null;
        e = arguments[2];
        t = arguments[3];
        i = arguments[4] || 0;
      }
      _t(`WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.`);
      return this.copyTextureToTexture(e, t, n, r, i);
    };
    this.initRenderTarget = function (e) {
      if (R.get(e).__webglFramebuffer === undefined) {
        z.setupRenderTarget(e);
      }
    };
    this.initTexture = function (e) {
      if (e.isCubeTexture) {
        z.setTextureCube(e, 0);
      } else if (e.isData3DTexture) {
        z.setTexture3D(e, 0);
      } else if (e.isDataArrayTexture || e.isCompressedArrayTexture) {
        z.setTexture2DArray(e, 0);
      } else {
        z.setTexture2D(e, 0);
      }
      L.unbindTexture();
    };
    this.resetState = function () {
      w = 0;
      T = 0;
      E = null;
      L.reset();
      Re.reset();
    };
    if (typeof __THREE_DEVTOOLS__ < `u`) {
      __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`, {
        detail: this
      }));
    }
  }
  get coordinateSystem() {
    return ze;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    let t = this.getContext();
    t.drawingBufferColorspace = W._getDrawingBufferColorSpace(e);
    t.unpackColorSpace = W._getUnpackColorSpace();
  }
};
var ws = class e {
  constructor(e, t = 1, n = 1000) {
    this.isFog = true;
    this.name = ``;
    this.color = new q(e);
    this.near = t;
    this.far = n;
  }
  clone() {
    return new e(this.color, this.near, this.far);
  }
  toJSON() {
    return {
      type: `Fog`,
      name: this.name,
      color: this.color.getHex(),
      near: this.near,
      far: this.far
    };
  }
};
var Ts = class extends Un {
  constructor() {
    super();
    this.isScene = true;
    this.type = `Scene`;
    this.background = null;
    this.environment = null;
    this.fog = null;
    this.backgroundBlurriness = 0;
    this.backgroundIntensity = 1;
    this.backgroundRotation = new En();
    this.environmentIntensity = 1;
    this.environmentRotation = new En();
    this.overrideMaterial = null;
    if (typeof __THREE_DEVTOOLS__ < `u`) {
      __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`, {
        detail: this
      }));
    }
  }
  copy(e, t) {
    super.copy(e, t);
    if (e.background !== null) {
      this.background = e.background.clone();
    }
    if (e.environment !== null) {
      this.environment = e.environment.clone();
    }
    if (e.fog !== null) {
      this.fog = e.fog.clone();
    }
    this.backgroundBlurriness = e.backgroundBlurriness;
    this.backgroundIntensity = e.backgroundIntensity;
    this.backgroundRotation.copy(e.backgroundRotation);
    this.environmentIntensity = e.environmentIntensity;
    this.environmentRotation.copy(e.environmentRotation);
    if (e.overrideMaterial !== null) {
      this.overrideMaterial = e.overrideMaterial.clone();
    }
    this.matrixAutoUpdate = e.matrixAutoUpdate;
    return this;
  }
  toJSON(e) {
    let t = super.toJSON(e);
    if (this.fog !== null) {
      t.object.fog = this.fog.toJSON();
    }
    if (this.backgroundBlurriness > 0) {
      t.object.backgroundBlurriness = this.backgroundBlurriness;
    }
    if (this.backgroundIntensity !== 1) {
      t.object.backgroundIntensity = this.backgroundIntensity;
    }
    t.object.backgroundRotation = this.backgroundRotation.toArray();
    if (this.environmentIntensity !== 1) {
      t.object.environmentIntensity = this.environmentIntensity;
    }
    t.object.environmentRotation = this.environmentRotation.toArray();
    return t;
  }
};
var Es = class {
  constructor(e, t) {
    this.isInterleavedBuffer = true;
    this.array = e;
    this.stride = t;
    this.count = e === undefined ? 0 : e.length / t;
    this.usage = Re;
    this.updateRanges = [];
    this.version = 0;
    this.uuid = We();
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    if (e === true) {
      this.version++;
    }
  }
  setUsage(e) {
    this.usage = e;
    return this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({
      start: e,
      count: t
    });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    this.array = new e.array.constructor(e.array);
    this.count = e.count;
    this.stride = e.stride;
    this.usage = e.usage;
    return this;
  }
  copyAt(e, t, n) {
    e *= this.stride;
    n *= t.stride;
    for (let r = 0, i = this.stride; r < i; r++) {
      this.array[e + r] = t.array[n + r];
    }
    return this;
  }
  set(e, t = 0) {
    this.array.set(e, t);
    return this;
  }
  clone(e) {
    if (e.arrayBuffers === undefined) {
      e.arrayBuffers = {};
    }
    if (this.array.buffer._uuid === undefined) {
      this.array.buffer._uuid = We();
    }
    if (e.arrayBuffers[this.array.buffer._uuid] === undefined) {
      e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer;
    }
    let t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]);
    let n = new this.constructor(t, this.stride);
    n.setUsage(this.usage);
    return n;
  }
  onUpload(e) {
    this.onUploadCallback = e;
    return this;
  }
  toJSON(e) {
    if (e.arrayBuffers === undefined) {
      e.arrayBuffers = {};
    }
    if (this.array.buffer._uuid === undefined) {
      this.array.buffer._uuid = We();
    }
    if (e.arrayBuffers[this.array.buffer._uuid] === undefined) {
      e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer));
    }
    return {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
};
var Ds = new G();
var Os = class e {
  constructor(e, t, n, r = false) {
    this.isInterleavedBufferAttribute = true;
    this.name = ``;
    this.data = e;
    this.itemSize = t;
    this.offset = n;
    this.normalized = r;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++) {
      Ds.fromBufferAttribute(this, t);
      Ds.applyMatrix4(e);
      this.setXYZ(t, Ds.x, Ds.y, Ds.z);
    }
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++) {
      Ds.fromBufferAttribute(this, t);
      Ds.applyNormalMatrix(e);
      this.setXYZ(t, Ds.x, Ds.y, Ds.z);
    }
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++) {
      Ds.fromBufferAttribute(this, t);
      Ds.transformDirection(e);
      this.setXYZ(t, Ds.x, Ds.y, Ds.z);
    }
    return this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.data.stride + this.offset + t];
    if (this.normalized) {
      n = ut(n, this.array);
    }
    return n;
  }
  setComponent(e, t, n) {
    if (this.normalized) {
      n = V(n, this.array);
    }
    this.data.array[e * this.data.stride + this.offset + t] = n;
    return this;
  }
  setX(e, t) {
    if (this.normalized) {
      t = V(t, this.array);
    }
    this.data.array[e * this.data.stride + this.offset] = t;
    return this;
  }
  setY(e, t) {
    if (this.normalized) {
      t = V(t, this.array);
    }
    this.data.array[e * this.data.stride + this.offset + 1] = t;
    return this;
  }
  setZ(e, t) {
    if (this.normalized) {
      t = V(t, this.array);
    }
    this.data.array[e * this.data.stride + this.offset + 2] = t;
    return this;
  }
  setW(e, t) {
    if (this.normalized) {
      t = V(t, this.array);
    }
    this.data.array[e * this.data.stride + this.offset + 3] = t;
    return this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    if (this.normalized) {
      t = ut(t, this.array);
    }
    return t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    if (this.normalized) {
      t = ut(t, this.array);
    }
    return t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    if (this.normalized) {
      t = ut(t, this.array);
    }
    return t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    if (this.normalized) {
      t = ut(t, this.array);
    }
    return t;
  }
  setXY(e, t, n) {
    e = e * this.data.stride + this.offset;
    if (this.normalized) {
      t = V(t, this.array);
      n = V(n, this.array);
    }
    this.data.array[e + 0] = t;
    this.data.array[e + 1] = n;
    return this;
  }
  setXYZ(e, t, n, r) {
    e = e * this.data.stride + this.offset;
    if (this.normalized) {
      t = V(t, this.array);
      n = V(n, this.array);
      r = V(r, this.array);
    }
    this.data.array[e + 0] = t;
    this.data.array[e + 1] = n;
    this.data.array[e + 2] = r;
    return this;
  }
  setXYZW(e, t, n, r, i) {
    e = e * this.data.stride + this.offset;
    if (this.normalized) {
      t = V(t, this.array);
      n = V(n, this.array);
      r = V(r, this.array);
      i = V(i, this.array);
    }
    this.data.array[e + 0] = t;
    this.data.array[e + 1] = n;
    this.data.array[e + 2] = r;
    this.data.array[e + 3] = i;
    return this;
  }
  clone(t) {
    if (t === undefined) {
      console.log(`THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);
      let e = [];
      for (let t = 0; t < this.count; t++) {
        let n = t * this.data.stride + this.offset;
        for (let t = 0; t < this.itemSize; t++) {
          e.push(this.data.array[n + t]);
        }
      }
      return new mr(new this.array.constructor(e), this.itemSize, this.normalized);
    }
    if (t.interleavedBuffers === undefined) {
      t.interleavedBuffers = {};
    }
    if (t.interleavedBuffers[this.data.uuid] === undefined) {
      t.interleavedBuffers[this.data.uuid] = this.data.clone(t);
    }
    return new e(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === undefined) {
      console.log(`THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);
      let e = [];
      for (let t = 0; t < this.count; t++) {
        let n = t * this.data.stride + this.offset;
        for (let t = 0; t < this.itemSize; t++) {
          e.push(this.data.array[n + t]);
        }
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: e,
        normalized: this.normalized
      };
    }
    if (e.interleavedBuffers === undefined) {
      e.interleavedBuffers = {};
    }
    if (e.interleavedBuffers[this.data.uuid] === undefined) {
      e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e);
    }
    return {
      isInterleavedBufferAttribute: true,
      itemSize: this.itemSize,
      data: this.data.uuid,
      offset: this.offset,
      normalized: this.normalized
    };
  }
};
var ks = class extends ur {
  static get type() {
    return `SpriteMaterial`;
  }
  constructor(e) {
    super();
    this.isSpriteMaterial = true;
    this.color = new q(16777215);
    this.map = null;
    this.alphaMap = null;
    this.rotation = 0;
    this.sizeAttenuation = true;
    this.transparent = true;
    this.fog = true;
    this.setValues(e);
  }
  copy(e) {
    super.copy(e);
    this.color.copy(e.color);
    this.map = e.map;
    this.alphaMap = e.alphaMap;
    this.rotation = e.rotation;
    this.sizeAttenuation = e.sizeAttenuation;
    this.fog = e.fog;
    return this;
  }
};
var As;
var js = new G();
var Ms = new G();
var Ns = new G();
var Ps = new H();
var Fs = new H();
var Is = new K();
var Ls = new G();
var Rs = new G();
var zs = new G();
var Bs = new H();
var Vs = new H();
var Hs = new H();
var Us = class extends Un {
  constructor(e = new ks()) {
    super();
    this.isSprite = true;
    this.type = `Sprite`;
    if (As === undefined) {
      As = new Tr();
      let e = new Es(new Float32Array([-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5, 0, 0, 1]), 5);
      As.setIndex([0, 1, 2, 0, 2, 3]);
      As.setAttribute(`position`, new Os(e, 3, 0, false));
      As.setAttribute(`uv`, new Os(e, 2, 3, false));
    }
    this.geometry = As;
    this.material = e;
    this.center = new H(0.5, 0.5);
  }
  raycast(e, t) {
    if (e.camera === null) {
      console.error(`THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`);
    }
    Ms.setFromMatrixScale(this.matrixWorld);
    Is.copy(e.camera.matrixWorld);
    this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld);
    Ns.setFromMatrixPosition(this.modelViewMatrix);
    if (e.camera.isPerspectiveCamera && this.material.sizeAttenuation === false) {
      Ms.multiplyScalar(-Ns.z);
    }
    let n = this.material.rotation;
    let r;
    let i;
    if (n !== 0) {
      i = Math.cos(n);
      r = Math.sin(n);
    }
    let a = this.center;
    Ws(Ls.set(-0.5, -0.5, 0), Ns, a, Ms, r, i);
    Ws(Rs.set(0.5, -0.5, 0), Ns, a, Ms, r, i);
    Ws(zs.set(0.5, 0.5, 0), Ns, a, Ms, r, i);
    Bs.set(0, 0);
    Vs.set(1, 0);
    Hs.set(1, 1);
    let o = e.ray.intersectTriangle(Ls, Rs, zs, false, js);
    if (o === null && (Ws(Rs.set(-0.5, 0.5, 0), Ns, a, Ms, r, i), Vs.set(0, 1), o = e.ray.intersectTriangle(Ls, zs, Rs, false, js), o === null)) {
      return;
    }
    let s = e.ray.origin.distanceTo(js);
    if (!(s < e.near) && !(s > e.far)) {
      t.push({
        distance: s,
        point: js.clone(),
        uv: rr.getInterpolation(js, Ls, Rs, zs, Bs, Vs, Hs, new H()),
        face: null,
        object: this
      });
    }
  }
  copy(e, t) {
    super.copy(e, t);
    if (e.center !== undefined) {
      this.center.copy(e.center);
    }
    this.material = e.material;
    return this;
  }
};
function Ws(e, t, n, r, i, a) {
  Ps.subVectors(e, n).addScalar(0.5).multiply(r);
  if (i === undefined) {
    Fs.copy(Ps);
  } else {
    Fs.x = a * Ps.x - i * Ps.y;
    Fs.y = i * Ps.x + a * Ps.y;
  }
  e.copy(t);
  e.x += Fs.x;
  e.y += Fs.y;
  e.applyMatrix4(Is);
}
var Gs = class extends Pt {
  constructor(e = null, t = 1, n = 1, i, a, o, s, c, l = r, u = r, d, f) {
    super(null, o, s, c, l, u, i, a, d, f);
    this.isDataTexture = true;
    this.image = {
      data: e,
      width: t,
      height: n
    };
    this.generateMipmaps = false;
    this.flipY = false;
    this.unpackAlignment = 1;
  }
};
var Ks = class extends mr {
  constructor(e, t, n, r = 1) {
    super(e, t, n);
    this.isInstancedBufferAttribute = true;
    this.meshPerAttribute = r;
  }
  copy(e) {
    super.copy(e);
    this.meshPerAttribute = e.meshPerAttribute;
    return this;
  }
  toJSON() {
    let e = super.toJSON();
    e.meshPerAttribute = this.meshPerAttribute;
    e.isInstancedBufferAttribute = true;
    return e;
  }
};
var qs = new K();
var Js = new K();
var Ys = [];
var Xs = new Ut();
var Zs = new K();
var Qs = new Lr();
var $s = new cn();
var ec = class extends Lr {
  constructor(e, t, n) {
    super(e, t);
    this.isInstancedMesh = true;
    this.instanceMatrix = new Ks(new Float32Array(n * 16), 16);
    this.instanceColor = null;
    this.morphTexture = null;
    this.count = n;
    this.boundingBox = null;
    this.boundingSphere = null;
    for (let e = 0; e < n; e++) {
      this.setMatrixAt(e, Zs);
    }
  }
  computeBoundingBox() {
    let e = this.geometry;
    let t = this.count;
    if (this.boundingBox === null) {
      this.boundingBox = new Ut();
    }
    if (e.boundingBox === null) {
      e.computeBoundingBox();
    }
    this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++) {
      this.getMatrixAt(n, qs);
      Xs.copy(e.boundingBox).applyMatrix4(qs);
      this.boundingBox.union(Xs);
    }
  }
  computeBoundingSphere() {
    let e = this.geometry;
    let t = this.count;
    if (this.boundingSphere === null) {
      this.boundingSphere = new cn();
    }
    if (e.boundingSphere === null) {
      e.computeBoundingSphere();
    }
    this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++) {
      this.getMatrixAt(n, qs);
      $s.copy(e.boundingSphere).applyMatrix4(qs);
      this.boundingSphere.union($s);
    }
  }
  copy(e, t) {
    super.copy(e, t);
    this.instanceMatrix.copy(e.instanceMatrix);
    if (e.morphTexture !== null) {
      this.morphTexture = e.morphTexture.clone();
    }
    if (e.instanceColor !== null) {
      this.instanceColor = e.instanceColor.clone();
    }
    this.count = e.count;
    if (e.boundingBox !== null) {
      this.boundingBox = e.boundingBox.clone();
    }
    if (e.boundingSphere !== null) {
      this.boundingSphere = e.boundingSphere.clone();
    }
    return this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  getMorphAt(e, t) {
    let n = t.morphTargetInfluences;
    let r = this.morphTexture.source.data.data;
    let i = e * (n.length + 1) + 1;
    for (let e = 0; e < n.length; e++) {
      n[e] = r[i + e];
    }
  }
  raycast(e, t) {
    let n = this.matrixWorld;
    let r = this.count;
    Qs.geometry = this.geometry;
    Qs.material = this.material;
    if (Qs.material !== undefined && (this.boundingSphere === null && this.computeBoundingSphere(), $s.copy(this.boundingSphere), $s.applyMatrix4(n), e.ray.intersectsSphere($s) !== false)) {
      for (let i = 0; i < r; i++) {
        this.getMatrixAt(i, qs);
        Js.multiplyMatrices(n, qs);
        Qs.matrixWorld = Js;
        Qs.raycast(e, Ys);
        for (let e = 0, n = Ys.length; e < n; e++) {
          let n = Ys[e];
          n.instanceId = i;
          n.object = this;
          t.push(n);
        }
        Ys.length = 0;
      }
    }
  }
  setColorAt(e, t) {
    if (this.instanceColor === null) {
      this.instanceColor = new Ks(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3);
    }
    t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    let n = t.morphTargetInfluences;
    let r = n.length + 1;
    if (this.morphTexture === null) {
      this.morphTexture = new Gs(new Float32Array(r * this.count), r, this.count, O, h);
    }
    let i = this.morphTexture.source.data.data;
    let a = 0;
    for (let e = 0; e < n.length; e++) {
      a += n[e];
    }
    let o = this.geometry.morphTargetsRelative ? 1 : 1 - a;
    let s = r * e;
    i[s] = o;
    i.set(n, s + 1);
  }
  updateMorphTargets() {}
  dispose() {
    this.dispatchEvent({
      type: `dispose`
    });
    if (this.morphTexture !== null) {
      this.morphTexture.dispose();
      this.morphTexture = null;
    }
    return this;
  }
};
var tc = class extends Pt {
  constructor(e, t, n, r, i, a, o, s, c) {
    super(e, t, n, r, i, a, o, s, c);
    this.isCanvasTexture = true;
    this.needsUpdate = true;
  }
};
var nc = class {
  constructor() {
    this.type = `Curve`;
    this.arcLengthDivisions = 200;
  }
  getPoint() {
    console.warn(`THREE.Curve: .getPoint() not implemented.`);
    return null;
  }
  getPointAt(e, t) {
    let n = this.getUtoTmapping(e);
    return this.getPoint(n, t);
  }
  getPoints(e = 5) {
    let t = [];
    for (let n = 0; n <= e; n++) {
      t.push(this.getPoint(n / e));
    }
    return t;
  }
  getSpacedPoints(e = 5) {
    let t = [];
    for (let n = 0; n <= e; n++) {
      t.push(this.getPointAt(n / e));
    }
    return t;
  }
  getLength() {
    let e = this.getLengths();
    return e[e.length - 1];
  }
  getLengths(e = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) {
      return this.cacheArcLengths;
    }
    this.needsUpdate = false;
    let t = [];
    let n;
    let r = this.getPoint(0);
    let i = 0;
    t.push(0);
    for (let a = 1; a <= e; a++) {
      n = this.getPoint(a / e);
      i += n.distanceTo(r);
      t.push(i);
      r = n;
    }
    this.cacheArcLengths = t;
    return t;
  }
  updateArcLengths() {
    this.needsUpdate = true;
    this.getLengths();
  }
  getUtoTmapping(e, t) {
    let n = this.getLengths();
    let r = 0;
    let i = n.length;
    let a;
    a = t || e * n[i - 1];
    let o = 0;
    let s = i - 1;
    let c;
    while (o <= s) {
      r = Math.floor(o + (s - o) / 2);
      c = n[r] - a;
      if (c < 0) {
        o = r + 1;
      } else if (c > 0) {
        s = r - 1;
      } else {
        s = r;
        break;
      }
    }
    r = s;
    if (n[r] === a) {
      return r / (i - 1);
    }
    let l = n[r];
    let u = n[r + 1] - l;
    let d = (a - l) / u;
    return (r + d) / (i - 1);
  }
  getTangent(e, t) {
    let n = 0.0001;
    let r = e - n;
    let i = e + n;
    if (r < 0) {
      r = 0;
    }
    if (i > 1) {
      i = 1;
    }
    let a = this.getPoint(r);
    let o = this.getPoint(i);
    let s = t || (a.isVector2 ? new H() : new G());
    s.copy(o).sub(a).normalize();
    return s;
  }
  getTangentAt(e, t) {
    let n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  computeFrenetFrames(e, t) {
    let n = new G();
    let r = [];
    let i = [];
    let a = [];
    let o = new G();
    let s = new K();
    for (let t = 0; t <= e; t++) {
      let n = t / e;
      r[t] = this.getTangentAt(n, new G());
    }
    i[0] = new G();
    a[0] = new G();
    let c = Number.MAX_VALUE;
    let l = Math.abs(r[0].x);
    let u = Math.abs(r[0].y);
    let d = Math.abs(r[0].z);
    if (l <= c) {
      c = l;
      n.set(1, 0, 0);
    }
    if (u <= c) {
      c = u;
      n.set(0, 1, 0);
    }
    if (d <= c) {
      n.set(0, 0, 1);
    }
    o.crossVectors(r[0], n).normalize();
    i[0].crossVectors(r[0], o);
    a[0].crossVectors(r[0], i[0]);
    for (let t = 1; t <= e; t++) {
      i[t] = i[t - 1].clone();
      a[t] = a[t - 1].clone();
      o.crossVectors(r[t - 1], r[t]);
      if (o.length() > 2.220446049250313e-16) {
        o.normalize();
        let e = Math.acos(Ge(r[t - 1].dot(r[t]), -1, 1));
        i[t].applyMatrix4(s.makeRotationAxis(o, e));
      }
      a[t].crossVectors(r[t], i[t]);
    }
    if (t === true) {
      let t = Math.acos(Ge(i[0].dot(i[e]), -1, 1));
      t /= e;
      if (r[0].dot(o.crossVectors(i[0], i[e])) > 0) {
        t = -t;
      }
      for (let n = 1; n <= e; n++) {
        i[n].applyMatrix4(s.makeRotationAxis(r[n], t * n));
        a[n].crossVectors(r[n], i[n]);
      }
    }
    return {
      tangents: r,
      normals: i,
      binormals: a
    };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.arcLengthDivisions = e.arcLengthDivisions;
    return this;
  }
  toJSON() {
    let e = {
      metadata: {
        version: 4.6,
        type: `Curve`,
        generator: `Curve.toJSON`
      }
    };
    e.arcLengthDivisions = this.arcLengthDivisions;
    e.type = this.type;
    return e;
  }
  fromJSON(e) {
    this.arcLengthDivisions = e.arcLengthDivisions;
    return this;
  }
};
var rc = class extends nc {
  constructor(e = 0, t = 0, n = 1, r = 1, i = 0, a = Math.PI * 2, o = false, s = 0) {
    super();
    this.isEllipseCurve = true;
    this.type = `EllipseCurve`;
    this.aX = e;
    this.aY = t;
    this.xRadius = n;
    this.yRadius = r;
    this.aStartAngle = i;
    this.aEndAngle = a;
    this.aClockwise = o;
    this.aRotation = s;
  }
  getPoint(e, t = new H()) {
    let n = t;
    let r = Math.PI * 2;
    let i = this.aEndAngle - this.aStartAngle;
    let a = Math.abs(i) < 2.220446049250313e-16;
    while (i < 0) {
      i += r;
    }
    while (i > r) {
      i -= r;
    }
    if (i < 2.220446049250313e-16) {
      i = a ? 0 : r;
    }
    if (this.aClockwise === true && !a) {
      if (i === r) {
        i = -r;
      } else {
        i -= r;
      }
    }
    let o = this.aStartAngle + e * i;
    let s = this.aX + this.xRadius * Math.cos(o);
    let c = this.aY + this.yRadius * Math.sin(o);
    if (this.aRotation !== 0) {
      let e = Math.cos(this.aRotation);
      let t = Math.sin(this.aRotation);
      let n = s - this.aX;
      let r = c - this.aY;
      s = n * e - r * t + this.aX;
      c = n * t + r * e + this.aY;
    }
    return n.set(s, c);
  }
  copy(e) {
    super.copy(e);
    this.aX = e.aX;
    this.aY = e.aY;
    this.xRadius = e.xRadius;
    this.yRadius = e.yRadius;
    this.aStartAngle = e.aStartAngle;
    this.aEndAngle = e.aEndAngle;
    this.aClockwise = e.aClockwise;
    this.aRotation = e.aRotation;
    return this;
  }
  toJSON() {
    let e = super.toJSON();
    e.aX = this.aX;
    e.aY = this.aY;
    e.xRadius = this.xRadius;
    e.yRadius = this.yRadius;
    e.aStartAngle = this.aStartAngle;
    e.aEndAngle = this.aEndAngle;
    e.aClockwise = this.aClockwise;
    e.aRotation = this.aRotation;
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e);
    this.aX = e.aX;
    this.aY = e.aY;
    this.xRadius = e.xRadius;
    this.yRadius = e.yRadius;
    this.aStartAngle = e.aStartAngle;
    this.aEndAngle = e.aEndAngle;
    this.aClockwise = e.aClockwise;
    this.aRotation = e.aRotation;
    return this;
  }
};
var ic = class extends rc {
  constructor(e, t, n, r, i, a) {
    super(e, t, n, n, r, i, a);
    this.isArcCurve = true;
    this.type = `ArcCurve`;
  }
};
function ac() {
  let e = 0;
  let t = 0;
  let n = 0;
  let r = 0;
  function i(i, a, o, s) {
    e = i;
    t = o;
    n = i * -3 + a * 3 - o * 2 - s;
    r = i * 2 - a * 2 + o + s;
  }
  return {
    initCatmullRom: function (e, t, n, r, a) {
      i(t, n, a * (n - e), a * (r - t));
    },
    initNonuniformCatmullRom: function (e, t, n, r, a, o, s) {
      let c = (t - e) / a - (n - e) / (a + o) + (n - t) / o;
      let l = (n - t) / o - (r - t) / (o + s) + (r - n) / s;
      c *= o;
      l *= o;
      i(t, n, c, l);
    },
    calc: function (i) {
      let a = i * i;
      let o = a * i;
      return e + t * i + n * a + r * o;
    }
  };
}
var oc = new G();
var sc = new ac();
var cc = new ac();
var lc = new ac();
var uc = class extends nc {
  constructor(e = [], t = false, n = `centripetal`, r = 0.5) {
    super();
    this.isCatmullRomCurve3 = true;
    this.type = `CatmullRomCurve3`;
    this.points = e;
    this.closed = t;
    this.curveType = n;
    this.tension = r;
  }
  getPoint(e, t = new G()) {
    let n = t;
    let r = this.points;
    let i = r.length;
    let a = (i - +!this.closed) * e;
    let o = Math.floor(a);
    let s = a - o;
    if (this.closed) {
      o += o > 0 ? 0 : (Math.floor(Math.abs(o) / i) + 1) * i;
    } else if (s === 0 && o === i - 1) {
      o = i - 2;
      s = 1;
    }
    let c;
    let l;
    if (this.closed || o > 0) {
      c = r[(o - 1) % i];
    } else {
      oc.subVectors(r[0], r[1]).add(r[0]);
      c = oc;
    }
    let u = r[o % i];
    let d = r[(o + 1) % i];
    if (this.closed || o + 2 < i) {
      l = r[(o + 2) % i];
    } else {
      oc.subVectors(r[i - 1], r[i - 2]).add(r[i - 1]);
      l = oc;
    }
    if (this.curveType === `centripetal` || this.curveType === `chordal`) {
      let e = this.curveType === `chordal` ? 0.5 : 0.25;
      let t = c.distanceToSquared(u) ** +e;
      let n = u.distanceToSquared(d) ** +e;
      let r = d.distanceToSquared(l) ** +e;
      if (n < 0.0001) {
        n = 1;
      }
      if (t < 0.0001) {
        t = n;
      }
      if (r < 0.0001) {
        r = n;
      }
      sc.initNonuniformCatmullRom(c.x, u.x, d.x, l.x, t, n, r);
      cc.initNonuniformCatmullRom(c.y, u.y, d.y, l.y, t, n, r);
      lc.initNonuniformCatmullRom(c.z, u.z, d.z, l.z, t, n, r);
    } else if (this.curveType === `catmullrom`) {
      sc.initCatmullRom(c.x, u.x, d.x, l.x, this.tension);
      cc.initCatmullRom(c.y, u.y, d.y, l.y, this.tension);
      lc.initCatmullRom(c.z, u.z, d.z, l.z, this.tension);
    }
    n.set(sc.calc(s), cc.calc(s), lc.calc(s));
    return n;
  }
  copy(e) {
    super.copy(e);
    this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      let n = e.points[t];
      this.points.push(n.clone());
    }
    this.closed = e.closed;
    this.curveType = e.curveType;
    this.tension = e.tension;
    return this;
  }
  toJSON() {
    let e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      let n = this.points[t];
      e.points.push(n.toArray());
    }
    e.closed = this.closed;
    e.curveType = this.curveType;
    e.tension = this.tension;
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e);
    this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      let n = e.points[t];
      this.points.push(new G().fromArray(n));
    }
    this.closed = e.closed;
    this.curveType = e.curveType;
    this.tension = e.tension;
    return this;
  }
};
function dc(e, t, n, r, i) {
  let a = (r - t) * 0.5;
  let o = (i - n) * 0.5;
  let s = e * e;
  let c = e * s;
  return (n * 2 - r * 2 + a + o) * c + (n * -3 + r * 3 - a * 2 - o) * s + a * e + n;
}
function fc(e, t) {
  let n = 1 - e;
  return n * n * t;
}
function pc(e, t) {
  return (1 - e) * 2 * e * t;
}
function mc(e, t) {
  return e * e * t;
}
function hc(e, t, n, r) {
  return fc(e, t) + pc(e, n) + mc(e, r);
}
function gc(e, t) {
  let n = 1 - e;
  return n * n * n * t;
}
function _c(e, t) {
  let n = 1 - e;
  return n * 3 * n * e * t;
}
function vc(e, t) {
  return (1 - e) * 3 * e * e * t;
}
function yc(e, t) {
  return e * e * e * t;
}
function bc(e, t, n, r, i) {
  return gc(e, t) + _c(e, n) + vc(e, r) + yc(e, i);
}
var xc = class extends nc {
  constructor(e = new H(), t = new H(), n = new H(), r = new H()) {
    super();
    this.isCubicBezierCurve = true;
    this.type = `CubicBezierCurve`;
    this.v0 = e;
    this.v1 = t;
    this.v2 = n;
    this.v3 = r;
  }
  getPoint(e, t = new H()) {
    let n = t;
    let r = this.v0;
    let i = this.v1;
    let a = this.v2;
    let o = this.v3;
    n.set(bc(e, r.x, i.x, a.x, o.x), bc(e, r.y, i.y, a.y, o.y));
    return n;
  }
  copy(e) {
    super.copy(e);
    this.v0.copy(e.v0);
    this.v1.copy(e.v1);
    this.v2.copy(e.v2);
    this.v3.copy(e.v3);
    return this;
  }
  toJSON() {
    let e = super.toJSON();
    e.v0 = this.v0.toArray();
    e.v1 = this.v1.toArray();
    e.v2 = this.v2.toArray();
    e.v3 = this.v3.toArray();
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e);
    this.v0.fromArray(e.v0);
    this.v1.fromArray(e.v1);
    this.v2.fromArray(e.v2);
    this.v3.fromArray(e.v3);
    return this;
  }
};
var Sc = class extends nc {
  constructor(e = new G(), t = new G(), n = new G(), r = new G()) {
    super();
    this.isCubicBezierCurve3 = true;
    this.type = `CubicBezierCurve3`;
    this.v0 = e;
    this.v1 = t;
    this.v2 = n;
    this.v3 = r;
  }
  getPoint(e, t = new G()) {
    let n = t;
    let r = this.v0;
    let i = this.v1;
    let a = this.v2;
    let o = this.v3;
    n.set(bc(e, r.x, i.x, a.x, o.x), bc(e, r.y, i.y, a.y, o.y), bc(e, r.z, i.z, a.z, o.z));
    return n;
  }
  copy(e) {
    super.copy(e);
    this.v0.copy(e.v0);
    this.v1.copy(e.v1);
    this.v2.copy(e.v2);
    this.v3.copy(e.v3);
    return this;
  }
  toJSON() {
    let e = super.toJSON();
    e.v0 = this.v0.toArray();
    e.v1 = this.v1.toArray();
    e.v2 = this.v2.toArray();
    e.v3 = this.v3.toArray();
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e);
    this.v0.fromArray(e.v0);
    this.v1.fromArray(e.v1);
    this.v2.fromArray(e.v2);
    this.v3.fromArray(e.v3);
    return this;
  }
};
var Cc = class extends nc {
  constructor(e = new H(), t = new H()) {
    super();
    this.isLineCurve = true;
    this.type = `LineCurve`;
    this.v1 = e;
    this.v2 = t;
  }
  getPoint(e, t = new H()) {
    let n = t;
    if (e === 1) {
      n.copy(this.v2);
    } else {
      n.copy(this.v2).sub(this.v1);
      n.multiplyScalar(e).add(this.v1);
    }
    return n;
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new H()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    super.copy(e);
    this.v1.copy(e.v1);
    this.v2.copy(e.v2);
    return this;
  }
  toJSON() {
    let e = super.toJSON();
    e.v1 = this.v1.toArray();
    e.v2 = this.v2.toArray();
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e);
    this.v1.fromArray(e.v1);
    this.v2.fromArray(e.v2);
    return this;
  }
};
var wc = class extends nc {
  constructor(e = new G(), t = new G()) {
    super();
    this.isLineCurve3 = true;
    this.type = `LineCurve3`;
    this.v1 = e;
    this.v2 = t;
  }
  getPoint(e, t = new G()) {
    let n = t;
    if (e === 1) {
      n.copy(this.v2);
    } else {
      n.copy(this.v2).sub(this.v1);
      n.multiplyScalar(e).add(this.v1);
    }
    return n;
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new G()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    super.copy(e);
    this.v1.copy(e.v1);
    this.v2.copy(e.v2);
    return this;
  }
  toJSON() {
    let e = super.toJSON();
    e.v1 = this.v1.toArray();
    e.v2 = this.v2.toArray();
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e);
    this.v1.fromArray(e.v1);
    this.v2.fromArray(e.v2);
    return this;
  }
};
var Tc = class extends nc {
  constructor(e = new H(), t = new H(), n = new H()) {
    super();
    this.isQuadraticBezierCurve = true;
    this.type = `QuadraticBezierCurve`;
    this.v0 = e;
    this.v1 = t;
    this.v2 = n;
  }
  getPoint(e, t = new H()) {
    let n = t;
    let r = this.v0;
    let i = this.v1;
    let a = this.v2;
    n.set(hc(e, r.x, i.x, a.x), hc(e, r.y, i.y, a.y));
    return n;
  }
  copy(e) {
    super.copy(e);
    this.v0.copy(e.v0);
    this.v1.copy(e.v1);
    this.v2.copy(e.v2);
    return this;
  }
  toJSON() {
    let e = super.toJSON();
    e.v0 = this.v0.toArray();
    e.v1 = this.v1.toArray();
    e.v2 = this.v2.toArray();
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e);
    this.v0.fromArray(e.v0);
    this.v1.fromArray(e.v1);
    this.v2.fromArray(e.v2);
    return this;
  }
};
var Ec = class extends nc {
  constructor(e = new G(), t = new G(), n = new G()) {
    super();
    this.isQuadraticBezierCurve3 = true;
    this.type = `QuadraticBezierCurve3`;
    this.v0 = e;
    this.v1 = t;
    this.v2 = n;
  }
  getPoint(e, t = new G()) {
    let n = t;
    let r = this.v0;
    let i = this.v1;
    let a = this.v2;
    n.set(hc(e, r.x, i.x, a.x), hc(e, r.y, i.y, a.y), hc(e, r.z, i.z, a.z));
    return n;
  }
  copy(e) {
    super.copy(e);
    this.v0.copy(e.v0);
    this.v1.copy(e.v1);
    this.v2.copy(e.v2);
    return this;
  }
  toJSON() {
    let e = super.toJSON();
    e.v0 = this.v0.toArray();
    e.v1 = this.v1.toArray();
    e.v2 = this.v2.toArray();
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e);
    this.v0.fromArray(e.v0);
    this.v1.fromArray(e.v1);
    this.v2.fromArray(e.v2);
    return this;
  }
};
var Dc = class extends nc {
  constructor(e = []) {
    super();
    this.isSplineCurve = true;
    this.type = `SplineCurve`;
    this.points = e;
  }
  getPoint(e, t = new H()) {
    let n = t;
    let r = this.points;
    let i = (r.length - 1) * e;
    let a = Math.floor(i);
    let o = i - a;
    let s = r[a === 0 ? a : a - 1];
    let c = r[a];
    let l = r[a > r.length - 2 ? r.length - 1 : a + 1];
    let u = r[a > r.length - 3 ? r.length - 1 : a + 2];
    n.set(dc(o, s.x, c.x, l.x, u.x), dc(o, s.y, c.y, l.y, u.y));
    return n;
  }
  copy(e) {
    super.copy(e);
    this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      let n = e.points[t];
      this.points.push(n.clone());
    }
    return this;
  }
  toJSON() {
    let e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      let n = this.points[t];
      e.points.push(n.toArray());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e);
    this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      let n = e.points[t];
      this.points.push(new H().fromArray(n));
    }
    return this;
  }
};
var Oc = Object.freeze({
  __proto__: null,
  ArcCurve: ic,
  CatmullRomCurve3: uc,
  CubicBezierCurve: xc,
  CubicBezierCurve3: Sc,
  EllipseCurve: rc,
  LineCurve: Cc,
  LineCurve3: wc,
  QuadraticBezierCurve: Tc,
  QuadraticBezierCurve3: Ec,
  SplineCurve: Dc
});
var kc = class extends nc {
  constructor() {
    super();
    this.type = `CurvePath`;
    this.curves = [];
    this.autoClose = false;
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    let e = this.curves[0].getPoint(0);
    let t = this.curves[this.curves.length - 1].getPoint(1);
    if (!e.equals(t)) {
      let n = e.isVector2 === true ? `LineCurve` : `LineCurve3`;
      this.curves.push(new Oc[n](t, e));
    }
    return this;
  }
  getPoint(e, t) {
    let n = e * this.getLength();
    let r = this.getCurveLengths();
    let i = 0;
    while (i < r.length) {
      if (r[i] >= n) {
        let e = r[i] - n;
        let a = this.curves[i];
        let o = a.getLength();
        let s = o === 0 ? 0 : 1 - e / o;
        return a.getPointAt(s, t);
      }
      i++;
    }
    return null;
  }
  getLength() {
    let e = this.getCurveLengths();
    return e[e.length - 1];
  }
  updateArcLengths() {
    this.needsUpdate = true;
    this.cacheLengths = null;
    this.getCurveLengths();
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length) {
      return this.cacheLengths;
    }
    let e = [];
    let t = 0;
    for (let n = 0, r = this.curves.length; n < r; n++) {
      t += this.curves[n].getLength();
      e.push(t);
    }
    this.cacheLengths = e;
    return e;
  }
  getSpacedPoints(e = 40) {
    let t = [];
    for (let n = 0; n <= e; n++) {
      t.push(this.getPoint(n / e));
    }
    if (this.autoClose) {
      t.push(t[0]);
    }
    return t;
  }
  getPoints(e = 12) {
    let t = [];
    let n;
    for (let r = 0, i = this.curves; r < i.length; r++) {
      let a = i[r];
      let o = a.isEllipseCurve ? e * 2 : a.isLineCurve || a.isLineCurve3 ? 1 : a.isSplineCurve ? e * a.points.length : e;
      let s = a.getPoints(o);
      for (let e = 0; e < s.length; e++) {
        let r = s[e];
        if (!n || !n.equals(r)) {
          t.push(r);
          n = r;
        }
      }
    }
    if (this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0])) {
      t.push(t[0]);
    }
    return t;
  }
  copy(e) {
    super.copy(e);
    this.curves = [];
    for (let t = 0, n = e.curves.length; t < n; t++) {
      let n = e.curves[t];
      this.curves.push(n.clone());
    }
    this.autoClose = e.autoClose;
    return this;
  }
  toJSON() {
    let e = super.toJSON();
    e.autoClose = this.autoClose;
    e.curves = [];
    for (let t = 0, n = this.curves.length; t < n; t++) {
      let n = this.curves[t];
      e.curves.push(n.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e);
    this.autoClose = e.autoClose;
    this.curves = [];
    for (let t = 0, n = e.curves.length; t < n; t++) {
      let n = e.curves[t];
      this.curves.push(new Oc[n.type]().fromJSON(n));
    }
    return this;
  }
};
var Ac = class extends kc {
  constructor(e) {
    super();
    this.type = `Path`;
    this.currentPoint = new H();
    if (e) {
      this.setFromPoints(e);
    }
  }
  setFromPoints(e) {
    this.moveTo(e[0].x, e[0].y);
    for (let t = 1, n = e.length; t < n; t++) {
      this.lineTo(e[t].x, e[t].y);
    }
    return this;
  }
  moveTo(e, t) {
    this.currentPoint.set(e, t);
    return this;
  }
  lineTo(e, t) {
    let n = new Cc(this.currentPoint.clone(), new H(e, t));
    this.curves.push(n);
    this.currentPoint.set(e, t);
    return this;
  }
  quadraticCurveTo(e, t, n, r) {
    let i = new Tc(this.currentPoint.clone(), new H(e, t), new H(n, r));
    this.curves.push(i);
    this.currentPoint.set(n, r);
    return this;
  }
  bezierCurveTo(e, t, n, r, i, a) {
    let o = new xc(this.currentPoint.clone(), new H(e, t), new H(n, r), new H(i, a));
    this.curves.push(o);
    this.currentPoint.set(i, a);
    return this;
  }
  splineThru(e) {
    let t = new Dc([this.currentPoint.clone()].concat(e));
    this.curves.push(t);
    this.currentPoint.copy(e[e.length - 1]);
    return this;
  }
  arc(e, t, n, r, i, a) {
    let o = this.currentPoint.x;
    let s = this.currentPoint.y;
    this.absarc(e + o, t + s, n, r, i, a);
    return this;
  }
  absarc(e, t, n, r, i, a) {
    this.absellipse(e, t, n, n, r, i, a);
    return this;
  }
  ellipse(e, t, n, r, i, a, o, s) {
    let c = this.currentPoint.x;
    let l = this.currentPoint.y;
    this.absellipse(e + c, t + l, n, r, i, a, o, s);
    return this;
  }
  absellipse(e, t, n, r, i, a, o, s) {
    let c = new rc(e, t, n, r, i, a, o, s);
    if (this.curves.length > 0) {
      let e = c.getPoint(0);
      if (!e.equals(this.currentPoint)) {
        this.lineTo(e.x, e.y);
      }
    }
    this.curves.push(c);
    let l = c.getPoint(1);
    this.currentPoint.copy(l);
    return this;
  }
  copy(e) {
    super.copy(e);
    this.currentPoint.copy(e.currentPoint);
    return this;
  }
  toJSON() {
    let e = super.toJSON();
    e.currentPoint = this.currentPoint.toArray();
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e);
    this.currentPoint.fromArray(e.currentPoint);
    return this;
  }
};
var jc = class e extends Tr {
  constructor(e = 1, t = 32, n = 0, r = Math.PI * 2) {
    super();
    this.type = `CircleGeometry`;
    this.parameters = {
      radius: e,
      segments: t,
      thetaStart: n,
      thetaLength: r
    };
    t = Math.max(3, t);
    let i = [];
    let a = [];
    let o = [];
    let s = [];
    let c = new G();
    let l = new H();
    a.push(0, 0, 0);
    o.push(0, 0, 1);
    s.push(0.5, 0.5);
    for (let i = 0, u = 3; i <= t; i++, u += 3) {
      let d = n + i / t * r;
      c.x = e * Math.cos(d);
      c.y = e * Math.sin(d);
      a.push(c.x, c.y, c.z);
      o.push(0, 0, 1);
      l.x = (a[u] / e + 1) / 2;
      l.y = (a[u + 1] / e + 1) / 2;
      s.push(l.x, l.y);
    }
    for (let e = 1; e <= t; e++) {
      i.push(e, e + 1, 0);
    }
    this.setIndex(i);
    this.setAttribute(`position`, new _r(a, 3));
    this.setAttribute(`normal`, new _r(o, 3));
    this.setAttribute(`uv`, new _r(s, 2));
  }
  copy(e) {
    super.copy(e);
    this.parameters = Object.assign({}, e.parameters);
    return this;
  }
  static fromJSON(t) {
    return new e(t.radius, t.segments, t.thetaStart, t.thetaLength);
  }
};
var Mc = class e extends Tr {
  constructor(e = 1, t = 1, n = 1, r = 32, i = 1, a = false, o = 0, s = Math.PI * 2) {
    super();
    this.type = `CylinderGeometry`;
    this.parameters = {
      radiusTop: e,
      radiusBottom: t,
      height: n,
      radialSegments: r,
      heightSegments: i,
      openEnded: a,
      thetaStart: o,
      thetaLength: s
    };
    let c = this;
    r = Math.floor(r);
    i = Math.floor(i);
    let l = [];
    let u = [];
    let d = [];
    let f = [];
    let p = 0;
    let m = [];
    let h = n / 2;
    let g = 0;
    _();
    if (a === false) {
      if (e > 0) {
        v(true);
      }
      if (t > 0) {
        v(false);
      }
    }
    this.setIndex(l);
    this.setAttribute(`position`, new _r(u, 3));
    this.setAttribute(`normal`, new _r(d, 3));
    this.setAttribute(`uv`, new _r(f, 2));
    function _() {
      let a = new G();
      let _ = new G();
      let v = 0;
      let y = (t - e) / n;
      for (let c = 0; c <= i; c++) {
        let l = [];
        let g = c / i;
        let v = g * (t - e) + e;
        for (let e = 0; e <= r; e++) {
          let t = e / r;
          let i = t * s + o;
          let c = Math.sin(i);
          let m = Math.cos(i);
          _.x = v * c;
          _.y = -g * n + h;
          _.z = v * m;
          u.push(_.x, _.y, _.z);
          a.set(c, y, m).normalize();
          d.push(a.x, a.y, a.z);
          f.push(t, 1 - g);
          l.push(p++);
        }
        m.push(l);
      }
      for (let n = 0; n < r; n++) {
        for (let r = 0; r < i; r++) {
          let a = m[r][n];
          let o = m[r + 1][n];
          let s = m[r + 1][n + 1];
          let c = m[r][n + 1];
          if (e > 0 || r !== 0) {
            l.push(a, o, c);
            v += 3;
          }
          if (t > 0 || r !== i - 1) {
            l.push(o, s, c);
            v += 3;
          }
        }
      }
      c.addGroup(g, v, 0);
      g += v;
    }
    function v(n) {
      let i = p;
      let a = new H();
      let m = new G();
      let _ = 0;
      let v = n === true ? e : t;
      let y = n === true ? 1 : -1;
      for (let e = 1; e <= r; e++) {
        u.push(0, h * y, 0);
        d.push(0, y, 0);
        f.push(0.5, 0.5);
        p++;
      }
      let b = p;
      for (let e = 0; e <= r; e++) {
        let t = e / r * s + o;
        let n = Math.cos(t);
        let i = Math.sin(t);
        m.x = v * i;
        m.y = h * y;
        m.z = v * n;
        u.push(m.x, m.y, m.z);
        d.push(0, y, 0);
        a.x = n * 0.5 + 0.5;
        a.y = i * 0.5 * y + 0.5;
        f.push(a.x, a.y);
        p++;
      }
      for (let e = 0; e < r; e++) {
        let t = i + e;
        let r = b + e;
        if (n === true) {
          l.push(r, r + 1, t);
        } else {
          l.push(r + 1, r, t);
        }
        _ += 3;
      }
      c.addGroup(g, _, n === true ? 1 : 2);
      g += _;
    }
  }
  copy(e) {
    super.copy(e);
    this.parameters = Object.assign({}, e.parameters);
    return this;
  }
  static fromJSON(t) {
    return new e(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
};
var Nc = class e extends Mc {
  constructor(e = 1, t = 1, n = 32, r = 1, i = false, a = 0, o = Math.PI * 2) {
    super(0, e, t, n, r, i, a, o);
    this.type = `ConeGeometry`;
    this.parameters = {
      radius: e,
      height: t,
      radialSegments: n,
      heightSegments: r,
      openEnded: i,
      thetaStart: a,
      thetaLength: o
    };
  }
  static fromJSON(t) {
    return new e(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
};
var Pc = class e extends Tr {
  constructor(e = [], t = [], n = 1, r = 0) {
    super();
    this.type = `PolyhedronGeometry`;
    this.parameters = {
      vertices: e,
      indices: t,
      radius: n,
      detail: r
    };
    let i = [];
    let a = [];
    o(r);
    c(n);
    l();
    this.setAttribute(`position`, new _r(i, 3));
    this.setAttribute(`normal`, new _r(i.slice(), 3));
    this.setAttribute(`uv`, new _r(a, 2));
    if (r === 0) {
      this.computeVertexNormals();
    } else {
      this.normalizeNormals();
    }
    function o(e) {
      let n = new G();
      let r = new G();
      let i = new G();
      for (let a = 0; a < t.length; a += 3) {
        f(t[a + 0], n);
        f(t[a + 1], r);
        f(t[a + 2], i);
        s(n, r, i, e);
      }
    }
    function s(e, t, n, r) {
      let i = r + 1;
      let a = [];
      for (let r = 0; r <= i; r++) {
        a[r] = [];
        let o = e.clone().lerp(n, r / i);
        let s = t.clone().lerp(n, r / i);
        let c = i - r;
        for (let e = 0; e <= c; e++) {
          if (e === 0 && r === i) {
            a[r][e] = o;
          } else {
            a[r][e] = o.clone().lerp(s, e / c);
          }
        }
      }
      for (let e = 0; e < i; e++) {
        for (let t = 0; t < (i - e) * 2 - 1; t++) {
          let n = Math.floor(t / 2);
          if (t % 2 == 0) {
            d(a[e][n + 1]);
            d(a[e + 1][n]);
            d(a[e][n]);
          } else {
            d(a[e][n + 1]);
            d(a[e + 1][n + 1]);
            d(a[e + 1][n]);
          }
        }
      }
    }
    function c(e) {
      let t = new G();
      for (let n = 0; n < i.length; n += 3) {
        t.x = i[n + 0];
        t.y = i[n + 1];
        t.z = i[n + 2];
        t.normalize().multiplyScalar(e);
        i[n + 0] = t.x;
        i[n + 1] = t.y;
        i[n + 2] = t.z;
      }
    }
    function l() {
      let e = new G();
      for (let t = 0; t < i.length; t += 3) {
        e.x = i[t + 0];
        e.y = i[t + 1];
        e.z = i[t + 2];
        let n = h(e) / 2 / Math.PI + 0.5;
        let r = g(e) / Math.PI + 0.5;
        a.push(n, 1 - r);
      }
      p();
      u();
    }
    function u() {
      for (let e = 0; e < a.length; e += 6) {
        let t = a[e + 0];
        let n = a[e + 2];
        let r = a[e + 4];
        if (Math.max(t, n, r) > 0.9 && Math.min(t, n, r) < 0.1) {
          if (t < 0.2) {
            a[e + 0] += 1;
          }
          if (n < 0.2) {
            a[e + 2] += 1;
          }
          if (r < 0.2) {
            a[e + 4] += 1;
          }
        }
      }
    }
    function d(e) {
      i.push(e.x, e.y, e.z);
    }
    function f(t, n) {
      let r = t * 3;
      n.x = e[r + 0];
      n.y = e[r + 1];
      n.z = e[r + 2];
    }
    function p() {
      let e = new G();
      let t = new G();
      let n = new G();
      let r = new G();
      let o = new H();
      let s = new H();
      let c = new H();
      for (let l = 0, u = 0; l < i.length; l += 9, u += 6) {
        e.set(i[l + 0], i[l + 1], i[l + 2]);
        t.set(i[l + 3], i[l + 4], i[l + 5]);
        n.set(i[l + 6], i[l + 7], i[l + 8]);
        o.set(a[u + 0], a[u + 1]);
        s.set(a[u + 2], a[u + 3]);
        c.set(a[u + 4], a[u + 5]);
        r.copy(e).add(t).add(n).divideScalar(3);
        let d = h(r);
        m(o, u + 0, e, d);
        m(s, u + 2, t, d);
        m(c, u + 4, n, d);
      }
    }
    function m(e, t, n, r) {
      if (r < 0 && e.x === 1) {
        a[t] = e.x - 1;
      }
      if (n.x === 0 && n.z === 0) {
        a[t] = r / 2 / Math.PI + 0.5;
      }
    }
    function h(e) {
      return Math.atan2(e.z, -e.x);
    }
    function g(e) {
      return Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z));
    }
  }
  copy(e) {
    super.copy(e);
    this.parameters = Object.assign({}, e.parameters);
    return this;
  }
  static fromJSON(t) {
    return new e(t.vertices, t.indices, t.radius, t.details);
  }
};
var Fc = class extends Ac {
  constructor(e) {
    super(e);
    this.uuid = We();
    this.type = `Shape`;
    this.holes = [];
  }
  getPointsHoles(e) {
    let t = [];
    for (let n = 0, r = this.holes.length; n < r; n++) {
      t[n] = this.holes[n].getPoints(e);
    }
    return t;
  }
  extractPoints(e) {
    return {
      shape: this.getPoints(e),
      holes: this.getPointsHoles(e)
    };
  }
  copy(e) {
    super.copy(e);
    this.holes = [];
    for (let t = 0, n = e.holes.length; t < n; t++) {
      let n = e.holes[t];
      this.holes.push(n.clone());
    }
    return this;
  }
  toJSON() {
    let e = super.toJSON();
    e.uuid = this.uuid;
    e.holes = [];
    for (let t = 0, n = this.holes.length; t < n; t++) {
      let n = this.holes[t];
      e.holes.push(n.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e);
    this.uuid = e.uuid;
    this.holes = [];
    for (let t = 0, n = e.holes.length; t < n; t++) {
      let n = e.holes[t];
      this.holes.push(new Ac().fromJSON(n));
    }
    return this;
  }
};
var Ic = {
  triangulate: function (e, t, n = 2) {
    let r = t && t.length;
    let i = r ? t[0] * n : e.length;
    let a = Lc(e, 0, i, n, true);
    let o = [];
    if (!a || a.next === a.prev) {
      return o;
    }
    let s;
    let c;
    let l;
    let u;
    let d;
    let f;
    let p;
    if (r) {
      a = Wc(e, t, a, n);
    }
    if (e.length > n * 80) {
      s = l = e[0];
      c = u = e[1];
      for (let t = n; t < i; t += n) {
        d = e[t];
        f = e[t + 1];
        if (d < s) {
          s = d;
        }
        if (f < c) {
          c = f;
        }
        if (d > l) {
          l = d;
        }
        if (f > u) {
          u = f;
        }
      }
      p = Math.max(l - s, u - c);
      p = p === 0 ? 0 : 32767 / p;
    }
    zc(a, o, n, s, c, p, 0);
    return o;
  }
};
function Lc(e, t, n, r, i) {
  let a;
  let o;
  if (i === pl(e, t, n, r) > 0) {
    for (a = t; a < n; a += r) {
      o = ul(a, e[a], e[a + 1], o);
    }
  } else {
    for (a = n - r; a >= t; a -= r) {
      o = ul(a, e[a], e[a + 1], o);
    }
  }
  if (o && nl(o, o.next)) {
    dl(o);
    o = o.next;
  }
  return o;
}
function Rc(e, t) {
  if (!e) {
    return e;
  }
  t ||= e;
  let n = e;
  let r;
  do {
    r = false;
    if (!n.steiner && (nl(n, n.next) || tl(n.prev, n, n.next) === 0)) {
      dl(n);
      n = t = n.prev;
      if (n === n.next) {
        break;
      }
      r = true;
    } else {
      n = n.next;
    }
  } while (r || n !== t);
  return t;
}
function zc(e, t, n, r, i, a, o) {
  if (!e) {
    return;
  }
  if (!o && a) {
    Yc(e, r, i, a);
  }
  let s = e;
  let c;
  let l;
  while (e.prev !== e.next) {
    c = e.prev;
    l = e.next;
    if (a ? Vc(e, r, i, a) : Bc(e)) {
      t.push(c.i / n | 0);
      t.push(e.i / n | 0);
      t.push(l.i / n | 0);
      dl(e);
      e = l.next;
      s = l.next;
    } else {
      e = l;
      if (e === s) {
        if (o) {
          if (o === 1) {
            e = Hc(Rc(e), t, n);
            zc(e, t, n, r, i, a, 2);
          } else if (o === 2) {
            Uc(e, t, n, r, i, a);
          }
        } else {
          zc(Rc(e), t, n, r, i, a, 1);
        }
        break;
      }
    }
  }
}
function Bc(e) {
  let t = e.prev;
  let n = e;
  let r = e.next;
  if (tl(t, n, r) >= 0) {
    return false;
  }
  let i = t.x;
  let a = n.x;
  let o = r.x;
  let s = t.y;
  let c = n.y;
  let l = r.y;
  let u = i < a ? i < o ? i : o : a < o ? a : o;
  let d = s < c ? s < l ? s : l : c < l ? c : l;
  let f = i > a ? i > o ? i : o : a > o ? a : o;
  let p = s > c ? s > l ? s : l : c > l ? c : l;
  let m = r.next;
  while (m !== t) {
    if (m.x >= u && m.x <= f && m.y >= d && m.y <= p && $c(i, s, a, c, o, l, m.x, m.y) && tl(m.prev, m, m.next) >= 0) {
      return false;
    }
    m = m.next;
  }
  return true;
}
function Vc(e, t, n, r) {
  let i = e.prev;
  let a = e;
  let o = e.next;
  if (tl(i, a, o) >= 0) {
    return false;
  }
  let s = i.x;
  let c = a.x;
  let l = o.x;
  let u = i.y;
  let d = a.y;
  let f = o.y;
  let p = s < c ? s < l ? s : l : c < l ? c : l;
  let m = u < d ? u < f ? u : f : d < f ? d : f;
  let h = s > c ? s > l ? s : l : c > l ? c : l;
  let g = u > d ? u > f ? u : f : d > f ? d : f;
  let _ = Zc(p, m, t, n, r);
  let v = Zc(h, g, t, n, r);
  let y = e.prevZ;
  let b = e.nextZ;
  while (y && y.z >= _ && b && b.z <= v) {
    if (y.x >= p && y.x <= h && y.y >= m && y.y <= g && y !== i && y !== o && $c(s, u, c, d, l, f, y.x, y.y) && tl(y.prev, y, y.next) >= 0 || (y = y.prevZ, b.x >= p && b.x <= h && b.y >= m && b.y <= g && b !== i && b !== o && $c(s, u, c, d, l, f, b.x, b.y) && tl(b.prev, b, b.next) >= 0)) {
      return false;
    }
    b = b.nextZ;
  }
  while (y && y.z >= _) {
    if (y.x >= p && y.x <= h && y.y >= m && y.y <= g && y !== i && y !== o && $c(s, u, c, d, l, f, y.x, y.y) && tl(y.prev, y, y.next) >= 0) {
      return false;
    }
    y = y.prevZ;
  }
  while (b && b.z <= v) {
    if (b.x >= p && b.x <= h && b.y >= m && b.y <= g && b !== i && b !== o && $c(s, u, c, d, l, f, b.x, b.y) && tl(b.prev, b, b.next) >= 0) {
      return false;
    }
    b = b.nextZ;
  }
  return true;
}
function Hc(e, t, n) {
  let r = e;
  do {
    let i = r.prev;
    let a = r.next.next;
    if (!nl(i, a) && rl(i, r, r.next, a) && sl(i, a) && sl(a, i)) {
      t.push(i.i / n | 0);
      t.push(r.i / n | 0);
      t.push(a.i / n | 0);
      dl(r);
      dl(r.next);
      r = e = a;
    }
    r = r.next;
  } while (r !== e);
  return Rc(r);
}
function Uc(e, t, n, r, i, a) {
  let o = e;
  do {
    let e = o.next.next;
    while (e !== o.prev) {
      if (o.i !== e.i && el(o, e)) {
        let s = ll(o, e);
        o = Rc(o, o.next);
        s = Rc(s, s.next);
        zc(o, t, n, r, i, a, 0);
        zc(s, t, n, r, i, a, 0);
        return;
      }
      e = e.next;
    }
    o = o.next;
  } while (o !== e);
}
function Wc(e, t, n, r) {
  let i = [];
  let a;
  let o;
  let s;
  let c;
  let l;
  a = 0;
  o = t.length;
  for (; a < o; a++) {
    s = t[a] * r;
    c = a < o - 1 ? t[a + 1] * r : e.length;
    l = Lc(e, s, c, r, false);
    if (l === l.next) {
      l.steiner = true;
    }
    i.push(Qc(l));
  }
  i.sort(Gc);
  a = 0;
  for (; a < i.length; a++) {
    n = Kc(i[a], n);
  }
  return n;
}
function Gc(e, t) {
  return e.x - t.x;
}
function Kc(e, t) {
  let n = qc(e, t);
  if (!n) {
    return t;
  }
  let r = ll(n, e);
  Rc(r, r.next);
  return Rc(n, n.next);
}
function qc(e, t) {
  let n = t;
  let r = -Infinity;
  let i;
  let a = e.x;
  let o = e.y;
  do {
    if (o <= n.y && o >= n.next.y && n.next.y !== n.y) {
      let e = n.x + (o - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
      if (e <= a && e > r && (r = e, i = n.x < n.next.x ? n : n.next, e === a)) {
        return i;
      }
    }
    n = n.next;
  } while (n !== t);
  if (!i) {
    return null;
  }
  let s = i;
  let c = i.x;
  let l = i.y;
  let u = Infinity;
  let d;
  n = i;
  do {
    if (a >= n.x && n.x >= c && a !== n.x && $c(o < l ? a : r, o, c, l, o < l ? r : a, o, n.x, n.y)) {
      d = Math.abs(o - n.y) / (a - n.x);
      if (sl(n, e) && (d < u || d === u && (n.x > i.x || n.x === i.x && Jc(i, n)))) {
        i = n;
        u = d;
      }
    }
    n = n.next;
  } while (n !== s);
  return i;
}
function Jc(e, t) {
  return tl(e.prev, e, t.prev) < 0 && tl(t.next, e, e.next) < 0;
}
function Yc(e, t, n, r) {
  let i = e;
  do {
    if (i.z === 0) {
      i.z = Zc(i.x, i.y, t, n, r);
    }
    i.prevZ = i.prev;
    i.nextZ = i.next;
    i = i.next;
  } while (i !== e);
  i.prevZ.nextZ = null;
  i.prevZ = null;
  Xc(i);
}
function Xc(e) {
  let t;
  let n;
  let r;
  let i;
  let a;
  let o;
  let s;
  let c;
  let l = 1;
  do {
    n = e;
    e = null;
    a = null;
    o = 0;
    while (n) {
      o++;
      r = n;
      s = 0;
      t = 0;
      for (; t < l && (s++, r = r.nextZ, r); t++);
      for (c = l; s > 0 || c > 0 && r;) {
        if (s !== 0 && (c === 0 || !r || n.z <= r.z)) {
          i = n;
          n = n.nextZ;
          s--;
        } else {
          i = r;
          r = r.nextZ;
          c--;
        }
        if (a) {
          a.nextZ = i;
        } else {
          e = i;
        }
        i.prevZ = a;
        a = i;
      }
      n = r;
    }
    a.nextZ = null;
    l *= 2;
  } while (o > 1);
  return e;
}
function Zc(e, t, n, r, i) {
  e = (e - n) * i | 0;
  t = (t - r) * i | 0;
  e = (e | e << 8) & 16711935;
  e = (e | e << 4) & 252645135;
  e = (e | e << 2) & 858993459;
  e = (e | e << 1) & 1431655765;
  t = (t | t << 8) & 16711935;
  t = (t | t << 4) & 252645135;
  t = (t | t << 2) & 858993459;
  t = (t | t << 1) & 1431655765;
  return e | t << 1;
}
function Qc(e) {
  let t = e;
  let n = e;
  do {
    if (t.x < n.x || t.x === n.x && t.y < n.y) {
      n = t;
    }
    t = t.next;
  } while (t !== e);
  return n;
}
function $c(e, t, n, r, i, a, o, s) {
  return (i - o) * (t - s) >= (e - o) * (a - s) && (e - o) * (r - s) >= (n - o) * (t - s) && (n - o) * (a - s) >= (i - o) * (r - s);
}
function el(e, t) {
  return e.next.i !== t.i && e.prev.i !== t.i && !ol(e, t) && (sl(e, t) && sl(t, e) && cl(e, t) && (tl(e.prev, e, t.prev) || tl(e, t.prev, t)) || nl(e, t) && tl(e.prev, e, e.next) > 0 && tl(t.prev, t, t.next) > 0);
}
function tl(e, t, n) {
  return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
}
function nl(e, t) {
  return e.x === t.x && e.y === t.y;
}
function rl(e, t, n, r) {
  let i = al(tl(e, t, n));
  let a = al(tl(e, t, r));
  let o = al(tl(n, r, e));
  let s = al(tl(n, r, t));
  return i !== a && o !== s || i === 0 && !!il(e, n, t) || a === 0 && !!il(e, r, t) || o === 0 && !!il(n, e, r) || s === 0 && !!il(n, t, r);
}
function il(e, t, n) {
  return t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y);
}
function al(e) {
  if (e > 0) {
    return 1;
  } else if (e < 0) {
    return -1;
  } else {
    return 0;
  }
}
function ol(e, t) {
  let n = e;
  do {
    if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && rl(n, n.next, e, t)) {
      return true;
    }
    n = n.next;
  } while (n !== e);
  return false;
}
function sl(e, t) {
  if (tl(e.prev, e, e.next) < 0) {
    return tl(e, t, e.next) >= 0 && tl(e, e.prev, t) >= 0;
  } else {
    return tl(e, t, e.prev) < 0 || tl(e, e.next, t) < 0;
  }
}
function cl(e, t) {
  let n = e;
  let r = false;
  let i = (e.x + t.x) / 2;
  let a = (e.y + t.y) / 2;
  do {
    if (n.y > a != n.next.y > a && n.next.y !== n.y && i < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x) {
      r = !r;
    }
    n = n.next;
  } while (n !== e);
  return r;
}
function ll(e, t) {
  let n = new fl(e.i, e.x, e.y);
  let r = new fl(t.i, t.x, t.y);
  let i = e.next;
  let a = t.prev;
  e.next = t;
  t.prev = e;
  n.next = i;
  i.prev = n;
  r.next = n;
  n.prev = r;
  a.next = r;
  r.prev = a;
  return r;
}
function ul(e, t, n, r) {
  let i = new fl(e, t, n);
  if (r) {
    i.next = r.next;
    i.prev = r;
    r.next.prev = i;
    r.next = i;
  } else {
    i.prev = i;
    i.next = i;
  }
  return i;
}
function dl(e) {
  e.next.prev = e.prev;
  e.prev.next = e.next;
  if (e.prevZ) {
    e.prevZ.nextZ = e.nextZ;
  }
  if (e.nextZ) {
    e.nextZ.prevZ = e.prevZ;
  }
}
function fl(e, t, n) {
  this.i = e;
  this.x = t;
  this.y = n;
  this.prev = null;
  this.next = null;
  this.z = 0;
  this.prevZ = null;
  this.nextZ = null;
  this.steiner = false;
}
function pl(e, t, n, r) {
  let i = 0;
  for (let a = t, o = n - r; a < n; a += r) {
    i += (e[o] - e[a]) * (e[a + 1] + e[o + 1]);
    o = a;
  }
  return i;
}
var ml = class e {
  static area(e) {
    let t = e.length;
    let n = 0;
    for (let r = t - 1, i = 0; i < t; r = i++) {
      n += e[r].x * e[i].y - e[i].x * e[r].y;
    }
    return n * 0.5;
  }
  static isClockWise(t) {
    return e.area(t) < 0;
  }
  static triangulateShape(e, t) {
    let n = [];
    let r = [];
    let i = [];
    hl(e);
    gl(n, e);
    let a = e.length;
    t.forEach(hl);
    for (let e = 0; e < t.length; e++) {
      r.push(a);
      a += t[e].length;
      gl(n, t[e]);
    }
    let o = Ic.triangulate(n, r);
    for (let e = 0; e < o.length; e += 3) {
      i.push(o.slice(e, e + 3));
    }
    return i;
  }
};
function hl(e) {
  let t = e.length;
  if (t > 2 && e[t - 1].equals(e[0])) {
    e.pop();
  }
}
function gl(e, t) {
  for (let n = 0; n < t.length; n++) {
    e.push(t[n].x);
    e.push(t[n].y);
  }
}
var _l = class e extends Pc {
  constructor(e = 1, t = 0) {
    let n = (1 + Math.sqrt(5)) / 2;
    let r = [-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1];
    super(r, [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], e, t);
    this.type = `IcosahedronGeometry`;
    this.parameters = {
      radius: e,
      detail: t
    };
  }
  static fromJSON(t) {
    return new e(t.radius, t.detail);
  }
};
var vl = class e extends Pc {
  constructor(e = 1, t = 0) {
    super([1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], e, t);
    this.type = `OctahedronGeometry`;
    this.parameters = {
      radius: e,
      detail: t
    };
  }
  static fromJSON(t) {
    return new e(t.radius, t.detail);
  }
};
var yl = class e extends Tr {
  constructor(e = new Fc([new H(0, 0.5), new H(-0.5, -0.5), new H(0.5, -0.5)]), t = 12) {
    super();
    this.type = `ShapeGeometry`;
    this.parameters = {
      shapes: e,
      curveSegments: t
    };
    let n = [];
    let r = [];
    let i = [];
    let a = [];
    let o = 0;
    let s = 0;
    if (Array.isArray(e) === false) {
      c(e);
    } else {
      for (let t = 0; t < e.length; t++) {
        c(e[t]);
        this.addGroup(o, s, t);
        o += s;
        s = 0;
      }
    }
    this.setIndex(n);
    this.setAttribute(`position`, new _r(r, 3));
    this.setAttribute(`normal`, new _r(i, 3));
    this.setAttribute(`uv`, new _r(a, 2));
    function c(e) {
      let o = r.length / 3;
      let c = e.extractPoints(t);
      let l = c.shape;
      let u = c.holes;
      if (ml.isClockWise(l) === false) {
        l = l.reverse();
      }
      for (let e = 0, t = u.length; e < t; e++) {
        let t = u[e];
        if (ml.isClockWise(t) === true) {
          u[e] = t.reverse();
        }
      }
      let d = ml.triangulateShape(l, u);
      for (let e = 0, t = u.length; e < t; e++) {
        let t = u[e];
        l = l.concat(t);
      }
      for (let e = 0, t = l.length; e < t; e++) {
        let t = l[e];
        r.push(t.x, t.y, 0);
        i.push(0, 0, 1);
        a.push(t.x, t.y);
      }
      for (let e = 0, t = d.length; e < t; e++) {
        let t = d[e];
        let r = t[0] + o;
        let i = t[1] + o;
        let a = t[2] + o;
        n.push(r, i, a);
        s += 3;
      }
    }
  }
  copy(e) {
    super.copy(e);
    this.parameters = Object.assign({}, e.parameters);
    return this;
  }
  toJSON() {
    let e = super.toJSON();
    let t = this.parameters.shapes;
    return bl(t, e);
  }
  static fromJSON(t, n) {
    let r = [];
    for (let e = 0, i = t.shapes.length; e < i; e++) {
      let i = n[t.shapes[e]];
      r.push(i);
    }
    return new e(r, t.curveSegments);
  }
};
function bl(e, t) {
  t.shapes = [];
  if (Array.isArray(e)) {
    for (let n = 0, r = e.length; n < r; n++) {
      let r = e[n];
      t.shapes.push(r.uuid);
    }
  } else {
    t.shapes.push(e.uuid);
  }
  return t;
}
var xl = class e extends Tr {
  constructor(e = 1, t = 32, n = 16, r = 0, i = Math.PI * 2, a = 0, o = Math.PI) {
    super();
    this.type = `SphereGeometry`;
    this.parameters = {
      radius: e,
      widthSegments: t,
      heightSegments: n,
      phiStart: r,
      phiLength: i,
      thetaStart: a,
      thetaLength: o
    };
    t = Math.max(3, Math.floor(t));
    n = Math.max(2, Math.floor(n));
    let s = Math.min(a + o, Math.PI);
    let c = 0;
    let l = [];
    let u = new G();
    let d = new G();
    let f = [];
    let p = [];
    let m = [];
    let h = [];
    for (let f = 0; f <= n; f++) {
      let g = [];
      let _ = f / n;
      let v = 0;
      if (f === 0 && a === 0) {
        v = 0.5 / t;
      } else if (f === n && s === Math.PI) {
        v = -0.5 / t;
      }
      for (let n = 0; n <= t; n++) {
        let s = n / t;
        u.x = -e * Math.cos(r + s * i) * Math.sin(a + _ * o);
        u.y = e * Math.cos(a + _ * o);
        u.z = e * Math.sin(r + s * i) * Math.sin(a + _ * o);
        p.push(u.x, u.y, u.z);
        d.copy(u).normalize();
        m.push(d.x, d.y, d.z);
        h.push(s + v, 1 - _);
        g.push(c++);
      }
      l.push(g);
    }
    for (let e = 0; e < n; e++) {
      for (let r = 0; r < t; r++) {
        let t = l[e][r + 1];
        let i = l[e][r];
        let o = l[e + 1][r];
        let c = l[e + 1][r + 1];
        if (e !== 0 || a > 0) {
          f.push(t, i, c);
        }
        if (e !== n - 1 || s < Math.PI) {
          f.push(i, o, c);
        }
      }
    }
    this.setIndex(f);
    this.setAttribute(`position`, new _r(p, 3));
    this.setAttribute(`normal`, new _r(m, 3));
    this.setAttribute(`uv`, new _r(h, 2));
  }
  copy(e) {
    super.copy(e);
    this.parameters = Object.assign({}, e.parameters);
    return this;
  }
  static fromJSON(t) {
    return new e(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
  }
};
var Sl = class extends ur {
  static get type() {
    return `MeshToonMaterial`;
  }
  constructor(e) {
    super();
    this.isMeshToonMaterial = true;
    this.defines = {
      TOON: ``
    };
    this.color = new q(16777215);
    this.map = null;
    this.gradientMap = null;
    this.lightMap = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new q(0);
    this.emissiveIntensity = 1;
    this.emissiveMap = null;
    this.bumpMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = 0;
    this.normalScale = new H(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.alphaMap = null;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.wireframeLinecap = `round`;
    this.wireframeLinejoin = `round`;
    this.fog = true;
    this.setValues(e);
  }
  copy(e) {
    super.copy(e);
    this.color.copy(e.color);
    this.map = e.map;
    this.gradientMap = e.gradientMap;
    this.lightMap = e.lightMap;
    this.lightMapIntensity = e.lightMapIntensity;
    this.aoMap = e.aoMap;
    this.aoMapIntensity = e.aoMapIntensity;
    this.emissive.copy(e.emissive);
    this.emissiveMap = e.emissiveMap;
    this.emissiveIntensity = e.emissiveIntensity;
    this.bumpMap = e.bumpMap;
    this.bumpScale = e.bumpScale;
    this.normalMap = e.normalMap;
    this.normalMapType = e.normalMapType;
    this.normalScale.copy(e.normalScale);
    this.displacementMap = e.displacementMap;
    this.displacementScale = e.displacementScale;
    this.displacementBias = e.displacementBias;
    this.alphaMap = e.alphaMap;
    this.wireframe = e.wireframe;
    this.wireframeLinewidth = e.wireframeLinewidth;
    this.wireframeLinecap = e.wireframeLinecap;
    this.wireframeLinejoin = e.wireframeLinejoin;
    this.fog = e.fog;
    return this;
  }
};
function Cl(e, t, n) {
  if (!e || !n && e.constructor === t) {
    return e;
  } else if (typeof t.BYTES_PER_ELEMENT == `number`) {
    return new t(e);
  } else {
    return Array.prototype.slice.call(e);
  }
}
function wl(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
var Tl = class {
  constructor(e, t, n, r) {
    this.parameterPositions = e;
    this._cachedIndex = 0;
    this.resultBuffer = r === undefined ? new t.constructor(n) : r;
    this.sampleValues = t;
    this.valueSize = n;
    this.settings = null;
    this.DefaultSettings_ = {};
  }
  evaluate(e) {
    let t = this.parameterPositions;
    let n = this._cachedIndex;
    let r = t[n];
    let i = t[n - 1];
    validate_interval: {
      seek: {
        let a;
        linear_scan: {
          forward_scan: if (!(e < r)) {
            for (let a = n + 2;;) {
              if (r === undefined) {
                if (e < i) {
                  break forward_scan;
                }
                n = t.length;
                this._cachedIndex = n;
                return this.copySampleValue_(n - 1);
              }
              if (n === a) {
                break;
              }
              i = r;
              r = t[++n];
              if (e < r) {
                break seek;
              }
            }
            a = t.length;
            break linear_scan;
          }
          if (!(e >= i)) {
            let o = t[1];
            if (e < o) {
              n = 2;
              i = o;
            }
            for (let a = n - 2;;) {
              if (i === undefined) {
                this._cachedIndex = 0;
                return this.copySampleValue_(0);
              }
              if (n === a) {
                break;
              }
              r = i;
              i = t[--n - 1];
              if (e >= i) {
                break seek;
              }
            }
            a = n;
            n = 0;
            break linear_scan;
          }
          break validate_interval;
        }
        while (n < a) {
          let r = n + a >>> 1;
          if (e < t[r]) {
            a = r;
          } else {
            n = r + 1;
          }
        }
        r = t[n];
        i = t[n - 1];
        if (i === undefined) {
          this._cachedIndex = 0;
          return this.copySampleValue_(0);
        }
        if (r === undefined) {
          n = t.length;
          this._cachedIndex = n;
          return this.copySampleValue_(n - 1);
        }
      }
      this._cachedIndex = n;
      this.intervalChanged_(n, i, r);
    }
    return this.interpolate_(n, i, e, r);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    let t = this.resultBuffer;
    let n = this.sampleValues;
    let r = this.valueSize;
    let i = e * r;
    for (let e = 0; e !== r; ++e) {
      t[e] = n[i + e];
    }
    return t;
  }
  interpolate_() {
    throw Error(`call to abstract method`);
  }
  intervalChanged_() {}
};
var El = class extends Tl {
  constructor(e, t, n, r) {
    super(e, t, n, r);
    this._weightPrev = -0;
    this._offsetPrev = -0;
    this._weightNext = -0;
    this._offsetNext = -0;
    this.DefaultSettings_ = {
      endingStart: Oe,
      endingEnd: Oe
    };
  }
  intervalChanged_(e, t, n) {
    let r = this.parameterPositions;
    let i = e - 2;
    let a = e + 1;
    let o = r[i];
    let s = r[a];
    if (o === undefined) {
      switch (this.getSettings_().endingStart) {
        case ke:
          i = e;
          o = t * 2 - n;
          break;
        case Ae:
          i = r.length - 2;
          o = t + r[i] - r[i + 1];
          break;
        default:
          i = e;
          o = n;
      }
    }
    if (s === undefined) {
      switch (this.getSettings_().endingEnd) {
        case ke:
          a = e;
          s = n * 2 - t;
          break;
        case Ae:
          a = 1;
          s = n + r[1] - r[0];
          break;
        default:
          a = e - 1;
          s = t;
      }
    }
    let c = (n - t) * 0.5;
    let l = this.valueSize;
    this._weightPrev = c / (t - o);
    this._weightNext = c / (s - n);
    this._offsetPrev = i * l;
    this._offsetNext = a * l;
  }
  interpolate_(e, t, n, r) {
    let i = this.resultBuffer;
    let a = this.sampleValues;
    let o = this.valueSize;
    let s = e * o;
    let c = s - o;
    let l = this._offsetPrev;
    let u = this._offsetNext;
    let d = this._weightPrev;
    let f = this._weightNext;
    let p = (n - t) / (r - t);
    let m = p * p;
    let h = m * p;
    let g = -d * h + d * 2 * m - d * p;
    let _ = (1 + d) * h + (-1.5 - d * 2) * m + (-0.5 + d) * p + 1;
    let v = (-1 - f) * h + (1.5 + f) * m + p * 0.5;
    let y = f * h - f * m;
    for (let e = 0; e !== o; ++e) {
      i[e] = g * a[l + e] + _ * a[c + e] + v * a[s + e] + y * a[u + e];
    }
    return i;
  }
};
var Dl = class extends Tl {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
  interpolate_(e, t, n, r) {
    let i = this.resultBuffer;
    let a = this.sampleValues;
    let o = this.valueSize;
    let s = e * o;
    let c = s - o;
    let l = (n - t) / (r - t);
    let u = 1 - l;
    for (let e = 0; e !== o; ++e) {
      i[e] = a[c + e] * u + a[s + e] * l;
    }
    return i;
  }
};
var Ol = class extends Tl {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
};
var kl = class {
  constructor(e, t, n, r) {
    if (e === undefined) {
      throw Error(`THREE.KeyframeTrack: track name is undefined`);
    }
    if (t === undefined || t.length === 0) {
      throw Error(`THREE.KeyframeTrack: no keyframes in track named ${e}`);
    }
    this.name = e;
    this.times = Cl(t, this.TimeBufferType);
    this.values = Cl(n, this.ValueBufferType);
    this.setInterpolation(r || this.DefaultInterpolation);
  }
  static toJSON(e) {
    let t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON) {
      n = t.toJSON(e);
    } else {
      n = {
        name: e.name,
        times: Cl(e.times, Array),
        values: Cl(e.values, Array)
      };
      let t = e.getInterpolation();
      if (t !== e.DefaultInterpolation) {
        n.interpolation = t;
      }
    }
    n.type = e.ValueTypeName;
    return n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Ol(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Dl(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new El(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case Te:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case Ee:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case De:
        t = this.InterpolantFactoryMethodSmooth;
    }
    if (t === undefined) {
      let t = `unsupported interpolation for ${this.ValueTypeName} keyframe track named ${this.name}`;
      if (this.createInterpolant === undefined) {
        if (e !== this.DefaultInterpolation) {
          this.setInterpolation(this.DefaultInterpolation);
        } else {
          throw Error(t);
        }
      }
      console.warn(`THREE.KeyframeTrack:`, t);
      return this;
    }
    this.createInterpolant = t;
    return this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return Te;
      case this.InterpolantFactoryMethodLinear:
        return Ee;
      case this.InterpolantFactoryMethodSmooth:
        return De;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      let t = this.times;
      for (let n = 0, r = t.length; n !== r; ++n) {
        t[n] += e;
      }
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      let t = this.times;
      for (let n = 0, r = t.length; n !== r; ++n) {
        t[n] *= e;
      }
    }
    return this;
  }
  trim(e, t) {
    let n = this.times;
    let r = n.length;
    let i = 0;
    let a = r - 1;
    while (i !== r && n[i] < e) {
      ++i;
    }
    while (a !== -1 && n[a] > t) {
      --a;
    }
    ++a;
    if (i !== 0 || a !== r) {
      if (i >= a) {
        a = Math.max(a, 1);
        i = a - 1;
      }
      let e = this.getValueSize();
      this.times = n.slice(i, a);
      this.values = this.values.slice(i * e, a * e);
    }
    return this;
  }
  validate() {
    let e = true;
    let t = this.getValueSize();
    if (t - Math.floor(t) !== 0) {
      console.error(`THREE.KeyframeTrack: Invalid value size in track.`, this);
      e = false;
    }
    let n = this.times;
    let r = this.values;
    let i = n.length;
    if (i === 0) {
      console.error(`THREE.KeyframeTrack: Track is empty.`, this);
      e = false;
    }
    let a = null;
    for (let t = 0; t !== i; t++) {
      let r = n[t];
      if (typeof r == `number` && isNaN(r)) {
        console.error(`THREE.KeyframeTrack: Time is not a valid number.`, this, t, r);
        e = false;
        break;
      }
      if (a !== null && a > r) {
        console.error(`THREE.KeyframeTrack: Out of order keys.`, this, t, r, a);
        e = false;
        break;
      }
      a = r;
    }
    if (r !== undefined && wl(r)) {
      for (let t = 0, n = r.length; t !== n; ++t) {
        let n = r[t];
        if (isNaN(n)) {
          console.error(`THREE.KeyframeTrack: Value is not a valid number.`, this, t, n);
          e = false;
          break;
        }
      }
    }
    return e;
  }
  optimize() {
    let e = this.times.slice();
    let t = this.values.slice();
    let n = this.getValueSize();
    let r = this.getInterpolation() === De;
    let i = e.length - 1;
    let a = 1;
    for (let o = 1; o < i; ++o) {
      let i = false;
      let s = e[o];
      if (s !== e[o + 1] && (o !== 1 || s !== e[0])) {
        if (r) {
          i = true;
        } else {
          let e = o * n;
          let r = e - n;
          let a = e + n;
          for (let o = 0; o !== n; ++o) {
            let n = t[e + o];
            if (n !== t[r + o] || n !== t[a + o]) {
              i = true;
              break;
            }
          }
        }
      }
      if (i) {
        if (o !== a) {
          e[a] = e[o];
          let r = o * n;
          let i = a * n;
          for (let e = 0; e !== n; ++e) {
            t[i + e] = t[r + e];
          }
        }
        ++a;
      }
    }
    if (i > 0) {
      e[a] = e[i];
      for (let e = i * n, r = a * n, o = 0; o !== n; ++o) {
        t[r + o] = t[e + o];
      }
      ++a;
    }
    if (a === e.length) {
      this.times = e;
      this.values = t;
    } else {
      this.times = e.slice(0, a);
      this.values = t.slice(0, a * n);
    }
    return this;
  }
  clone() {
    let e = this.times.slice();
    let t = this.values.slice();
    let n = this.constructor;
    let r = new n(this.name, e, t);
    r.createInterpolant = this.createInterpolant;
    return r;
  }
};
kl.prototype.TimeBufferType = Float32Array;
kl.prototype.ValueBufferType = Float32Array;
kl.prototype.DefaultInterpolation = Ee;
var Al = class extends kl {
  constructor(e, t, n) {
    super(e, t, n);
  }
};
Al.prototype.ValueTypeName = `bool`;
Al.prototype.ValueBufferType = Array;
Al.prototype.DefaultInterpolation = Te;
Al.prototype.InterpolantFactoryMethodLinear = undefined;
Al.prototype.InterpolantFactoryMethodSmooth = undefined;
var jl = class extends kl {};
jl.prototype.ValueTypeName = `color`;
var Ml = class extends kl {};
Ml.prototype.ValueTypeName = `number`;
var Nl = class extends Tl {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
  interpolate_(e, t, n, r) {
    let i = this.resultBuffer;
    let a = this.sampleValues;
    let o = this.valueSize;
    let s = (n - t) / (r - t);
    let c = e * o;
    for (let e = c + o; c !== e; c += 4) {
      Bt.slerpFlat(i, 0, a, c - o, a, c, s);
    }
    return i;
  }
};
var Pl = class extends kl {
  InterpolantFactoryMethodLinear(e) {
    return new Nl(this.times, this.values, this.getValueSize(), e);
  }
};
Pl.prototype.ValueTypeName = `quaternion`;
Pl.prototype.InterpolantFactoryMethodSmooth = undefined;
var Fl = class extends kl {
  constructor(e, t, n) {
    super(e, t, n);
  }
};
Fl.prototype.ValueTypeName = `string`;
Fl.prototype.ValueBufferType = Array;
Fl.prototype.DefaultInterpolation = Te;
Fl.prototype.InterpolantFactoryMethodLinear = undefined;
Fl.prototype.InterpolantFactoryMethodSmooth = undefined;
var Il = class extends kl {};
Il.prototype.ValueTypeName = `vector`;
var Ll = class extends Un {
  constructor(e, t = 1) {
    super();
    this.isLight = true;
    this.type = `Light`;
    this.color = new q(e);
    this.intensity = t;
  }
  dispose() {}
  copy(e, t) {
    super.copy(e, t);
    this.color.copy(e.color);
    this.intensity = e.intensity;
    return this;
  }
  toJSON(e) {
    let t = super.toJSON(e);
    t.object.color = this.color.getHex();
    t.object.intensity = this.intensity;
    if (this.groundColor !== undefined) {
      t.object.groundColor = this.groundColor.getHex();
    }
    if (this.distance !== undefined) {
      t.object.distance = this.distance;
    }
    if (this.angle !== undefined) {
      t.object.angle = this.angle;
    }
    if (this.decay !== undefined) {
      t.object.decay = this.decay;
    }
    if (this.penumbra !== undefined) {
      t.object.penumbra = this.penumbra;
    }
    if (this.shadow !== undefined) {
      t.object.shadow = this.shadow.toJSON();
    }
    if (this.target !== undefined) {
      t.object.target = this.target.uuid;
    }
    return t;
  }
};
var Rl = class extends Ll {
  constructor(e, t, n) {
    super(e, n);
    this.isHemisphereLight = true;
    this.type = `HemisphereLight`;
    this.position.copy(Un.DEFAULT_UP);
    this.updateMatrix();
    this.groundColor = new q(t);
  }
  copy(e, t) {
    super.copy(e, t);
    this.groundColor.copy(e.groundColor);
    return this;
  }
};
var zl = new K();
var Bl = new G();
var Vl = new G();
var Hl = class {
  constructor(e) {
    this.camera = e;
    this.intensity = 1;
    this.bias = 0;
    this.normalBias = 0;
    this.radius = 1;
    this.blurSamples = 8;
    this.mapSize = new H(512, 512);
    this.map = null;
    this.mapPass = null;
    this.matrix = new K();
    this.autoUpdate = true;
    this.needsUpdate = false;
    this._frustum = new ui();
    this._frameExtents = new H(1, 1);
    this._viewportCount = 1;
    this._viewports = [new Ft(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    let t = this.camera;
    let n = this.matrix;
    Bl.setFromMatrixPosition(e.matrixWorld);
    t.position.copy(Bl);
    Vl.setFromMatrixPosition(e.target.matrixWorld);
    t.lookAt(Vl);
    t.updateMatrixWorld();
    zl.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse);
    this._frustum.setFromProjectionMatrix(zl);
    n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
    n.multiply(zl);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    if (this.map) {
      this.map.dispose();
    }
    if (this.mapPass) {
      this.mapPass.dispose();
    }
  }
  copy(e) {
    this.camera = e.camera.clone();
    this.intensity = e.intensity;
    this.bias = e.bias;
    this.radius = e.radius;
    this.mapSize.copy(e.mapSize);
    return this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    let e = {};
    if (this.intensity !== 1) {
      e.intensity = this.intensity;
    }
    if (this.bias !== 0) {
      e.bias = this.bias;
    }
    if (this.normalBias !== 0) {
      e.normalBias = this.normalBias;
    }
    if (this.radius !== 1) {
      e.radius = this.radius;
    }
    if (this.mapSize.x !== 512 || this.mapSize.y !== 512) {
      e.mapSize = this.mapSize.toArray();
    }
    e.camera = this.camera.toJSON(false).object;
    delete e.camera.matrix;
    return e;
  }
};
var Ul = class extends Hl {
  constructor() {
    super(new wi(-5, 5, 5, -5, 0.5, 500));
    this.isDirectionalLightShadow = true;
  }
};
var Wl = class extends Ll {
  constructor(e, t) {
    super(e, t);
    this.isDirectionalLight = true;
    this.type = `DirectionalLight`;
    this.position.copy(Un.DEFAULT_UP);
    this.updateMatrix();
    this.target = new Un();
    this.shadow = new Ul();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    super.copy(e);
    this.target = e.target.clone();
    this.shadow = e.shadow.clone();
    return this;
  }
};
var Gl = `\\[\\]\\.:\\/`;
var Kl = RegExp(`[\\[\\]\\.:\\/]`, `g`);
var ql = `[^\\[\\]\\.:\\/]`;
var Jl = `[^${Gl.replace(`\\.`, ``)}]`;
var Yl = `((?:WC+[\\/:])*)`.replace(`WC`, ql);
var Xl = `(WCOD+)?`.replace(`WCOD`, Jl);
var Zl = `(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`, ql);
var Ql = `\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`, ql);
var $l = RegExp(`^${Yl}${Xl}${Zl}${Ql}$`);
var eu = [`material`, `materials`, `bones`, `map`];
var tu = class {
  constructor(e, t, n) {
    let r = n || nu.parseTrackName(t);
    this._targetGroup = e;
    this._bindings = e.subscribe_(t, r);
  }
  getValue(e, t) {
    this.bind();
    let n = this._targetGroup.nCachedObjects_;
    let r = this._bindings[n];
    if (r !== undefined) {
      r.getValue(e, t);
    }
  }
  setValue(e, t) {
    let n = this._bindings;
    for (let r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r) {
      n[r].setValue(e, t);
    }
  }
  bind() {
    let e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) {
      e[t].bind();
    }
  }
  unbind() {
    let e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) {
      e[t].unbind();
    }
  }
};
var nu = class e {
  constructor(t, n, r) {
    this.path = n;
    this.parsedPath = r || e.parseTrackName(n);
    this.node = e.findNode(t, this.parsedPath.nodeName);
    this.rootNode = t;
    this.getValue = this._getValue_unbound;
    this.setValue = this._setValue_unbound;
  }
  static create(t, n, r) {
    if (t && t.isAnimationObjectGroup) {
      return new e.Composite(t, n, r);
    } else {
      return new e(t, n, r);
    }
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, `_`).replace(Kl, ``);
  }
  static parseTrackName(e) {
    let t = $l.exec(e);
    if (t === null) {
      throw Error(`PropertyBinding: Cannot parse trackName: ${e}`);
    }
    let n = {
      nodeName: t[2],
      objectName: t[3],
      objectIndex: t[4],
      propertyName: t[5],
      propertyIndex: t[6]
    };
    let r = n.nodeName && n.nodeName.lastIndexOf(`.`);
    if (r !== undefined && r !== -1) {
      let e = n.nodeName.substring(r + 1);
      if (eu.indexOf(e) !== -1) {
        n.nodeName = n.nodeName.substring(0, r);
        n.objectName = e;
      }
    }
    if (n.propertyName === null || n.propertyName.length === 0) {
      throw Error(`PropertyBinding: can not parse propertyName from trackName: ${e}`);
    }
    return n;
  }
  static findNode(e, t) {
    if (t === undefined || t === `` || t === `.` || t === -1 || t === e.name || t === e.uuid) {
      return e;
    }
    if (e.skeleton) {
      let n = e.skeleton.getBoneByName(t);
      if (n !== undefined) {
        return n;
      }
    }
    if (e.children) {
      let n = function (e) {
        for (let r = 0; r < e.length; r++) {
          let i = e[r];
          if (i.name === t || i.uuid === t) {
            return i;
          }
          let a = n(i.children);
          if (a) {
            return a;
          }
        }
        return null;
      };
      let r = n(e.children);
      if (r) {
        return r;
      }
    }
    return null;
  }
  _getValue_unavailable() {}
  _setValue_unavailable() {}
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    let n = this.resolvedProperty;
    for (let r = 0, i = n.length; r !== i; ++r) {
      e[t++] = n[r];
    }
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t];
    this.targetObject.needsUpdate = true;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t];
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_array(e, t) {
    let n = this.resolvedProperty;
    for (let r = 0, i = n.length; r !== i; ++r) {
      n[r] = e[t++];
    }
  }
  _setValue_array_setNeedsUpdate(e, t) {
    let n = this.resolvedProperty;
    for (let r = 0, i = n.length; r !== i; ++r) {
      n[r] = e[t++];
    }
    this.targetObject.needsUpdate = true;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    let n = this.resolvedProperty;
    for (let r = 0, i = n.length; r !== i; ++r) {
      n[r] = e[t++];
    }
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
    this.targetObject.needsUpdate = true;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t);
    this.targetObject.needsUpdate = true;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t);
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _getValue_unbound(e, t) {
    this.bind();
    this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind();
    this.setValue(e, t);
  }
  bind() {
    let t = this.node;
    let n = this.parsedPath;
    let r = n.objectName;
    let i = n.propertyName;
    let a = n.propertyIndex;
    if (!t) {
      t = e.findNode(this.rootNode, n.nodeName);
      this.node = t;
    }
    this.getValue = this._getValue_unavailable;
    this.setValue = this._setValue_unavailable;
    if (!t) {
      console.warn(`THREE.PropertyBinding: No target node found for track: ${this.path}.`);
      return;
    }
    if (r) {
      let e = n.objectIndex;
      switch (r) {
        case `materials`:
          if (!t.material) {
            console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`, this);
            return;
          }
          if (!t.material.materials) {
            console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`, this);
            return;
          }
          t = t.material.materials;
          break;
        case `bones`:
          if (!t.skeleton) {
            console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`, this);
            return;
          }
          t = t.skeleton.bones;
          for (let n = 0; n < t.length; n++) {
            if (t[n].name === e) {
              e = n;
              break;
            }
          }
          break;
        case `map`:
          if (`map` in t) {
            t = t.map;
            break;
          }
          if (!t.material) {
            console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`, this);
            return;
          }
          if (!t.material.map) {
            console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`, this);
            return;
          }
          t = t.material.map;
          break;
        default:
          if (t[r] === undefined) {
            console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`, this);
            return;
          }
          t = t[r];
      }
      if (e !== undefined) {
        if (t[e] === undefined) {
          console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`, this, t);
          return;
        }
        t = t[e];
      }
    }
    let o = t[i];
    if (o === undefined) {
      let e = n.nodeName;
      console.error(`THREE.PropertyBinding: Trying to update property for track: ${e}.${i} but it wasn't found.`, t);
      return;
    }
    let s = this.Versioning.None;
    this.targetObject = t;
    if (t.needsUpdate === undefined) {
      if (t.matrixWorldNeedsUpdate !== undefined) {
        s = this.Versioning.MatrixWorldNeedsUpdate;
      }
    } else {
      s = this.Versioning.NeedsUpdate;
    }
    let c = this.BindingType.Direct;
    if (a !== undefined) {
      if (i === `morphTargetInfluences`) {
        if (!t.geometry) {
          console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`, this);
          return;
        }
        if (!t.geometry.morphAttributes) {
          console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`, this);
          return;
        }
        if (t.morphTargetDictionary[a] !== undefined) {
          a = t.morphTargetDictionary[a];
        }
      }
      c = this.BindingType.ArrayElement;
      this.resolvedProperty = o;
      this.propertyIndex = a;
    } else if (o.fromArray !== undefined && o.toArray !== undefined) {
      c = this.BindingType.HasFromToArray;
      this.resolvedProperty = o;
    } else if (Array.isArray(o)) {
      c = this.BindingType.EntireArray;
      this.resolvedProperty = o;
    } else {
      this.propertyName = i;
    }
    this.getValue = this.GetterByBindingType[c];
    this.setValue = this.SetterByBindingTypeAndVersioning[c][s];
  }
  unbind() {
    this.node = null;
    this.getValue = this._getValue_unbound;
    this.setValue = this._setValue_unbound;
  }
};
nu.Composite = tu;
nu.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
nu.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
nu.prototype.GetterByBindingType = [nu.prototype._getValue_direct, nu.prototype._getValue_array, nu.prototype._getValue_arrayElement, nu.prototype._getValue_toArray];
nu.prototype.SetterByBindingTypeAndVersioning = [[nu.prototype._setValue_direct, nu.prototype._setValue_direct_setNeedsUpdate, nu.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [nu.prototype._setValue_array, nu.prototype._setValue_array_setNeedsUpdate, nu.prototype._setValue_array_setMatrixWorldNeedsUpdate], [nu.prototype._setValue_arrayElement, nu.prototype._setValue_arrayElement_setNeedsUpdate, nu.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [nu.prototype._setValue_fromArray, nu.prototype._setValue_fromArray_setNeedsUpdate, nu.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
if (typeof __THREE_DEVTOOLS__ < `u`) {
  __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`, {
    detail: {
      revision: `170`
    }
  }));
}
if (typeof window < `u`) {
  if (window.__THREE__) {
    console.warn(`WARNING: Multiple instances of Three.js being imported.`);
  } else {
    window.__THREE__ = `170`;
  }
}
var ru = class {
  ctx = null;
  master;
  noise;
  eng1;
  eng2;
  engFilter;
  engGain;
  lfo;
  amp;
  windFilter;
  windGain;
  lfoDepth;
  whine;
  whineGain;
  roarFilter;
  roarGain;
  engine = `prop`;
  volume = 0.7;
  init() {
    if (this.ctx) {
      if (this.ctx.state === `suspended`) {
        this.ctx.resume();
      }
      return;
    }
    let e = window.AudioContext || window.webkitAudioContext;
    if (!e) {
      return;
    }
    let t = new e();
    this.ctx = t;
    this.master = t.createGain();
    this.master.gain.value = this.volume;
    let n = t.createDynamicsCompressor();
    this.master.connect(n).connect(t.destination);
    this.noise = t.createBuffer(1, t.sampleRate * 2, t.sampleRate);
    let r = this.noise.getChannelData(0);
    for (let e = 0; e < r.length; e++) {
      r[e] = Math.random() * 2 - 1;
    }
    this.eng1 = t.createOscillator();
    this.eng1.type = `sawtooth`;
    this.eng2 = t.createOscillator();
    this.eng2.type = `square`;
    this.engFilter = t.createBiquadFilter();
    this.engFilter.type = `lowpass`;
    this.engFilter.Q.value = 2;
    this.amp = t.createGain();
    this.amp.gain.value = 0.6;
    this.lfo = t.createOscillator();
    this.lfo.type = `square`;
    let i = t.createGain();
    i.gain.value = 0.4;
    this.lfoDepth = i;
    this.lfo.connect(i).connect(this.amp.gain);
    this.engGain = t.createGain();
    this.engGain.gain.value = 0;
    let a = t.createGain();
    a.gain.value = 0.5;
    this.eng1.connect(this.engFilter);
    this.eng2.connect(a).connect(this.engFilter);
    this.engFilter.connect(this.amp).connect(this.engGain).connect(this.master);
    this.eng1.start();
    this.eng2.start();
    this.lfo.start();
    let o = t.createBufferSource();
    o.buffer = this.noise;
    o.loop = true;
    this.windFilter = t.createBiquadFilter();
    this.windFilter.type = `bandpass`;
    this.windFilter.Q.value = 0.8;
    this.windGain = t.createGain();
    this.windGain.gain.value = 0;
    o.connect(this.windFilter).connect(this.windGain).connect(this.master);
    o.start();
    this.whine = t.createOscillator();
    this.whine.type = `sine`;
    this.whineGain = t.createGain();
    this.whineGain.gain.value = 0;
    this.whine.connect(this.whineGain).connect(this.master);
    this.whine.start();
    let s = t.createBufferSource();
    s.buffer = this.noise;
    s.loop = true;
    this.roarFilter = t.createBiquadFilter();
    this.roarFilter.type = `lowpass`;
    this.roarFilter.Q.value = 0.7;
    this.roarGain = t.createGain();
    this.roarGain.gain.value = 0;
    s.connect(this.roarFilter).connect(this.roarGain).connect(this.master);
    s.start();
  }
  setEngine(e) {
    this.engine = e;
  }
  setVolume(e) {
    this.volume = e;
    if (this.ctx) {
      this.master.gain.setTargetAtTime(e, this.ctx.currentTime, 0.05);
    }
  }
  suspend() {
    if (this.ctx && this.ctx.state === `running`) {
      this.ctx.suspend();
    }
  }
  resume() {
    if (this.ctx && this.ctx.state === `suspended`) {
      this.ctx.resume();
    }
  }
  update(e, t, n, r = 1) {
    let i = this.ctx;
    if (!i) {
      return;
    }
    let a = i.currentTime;
    let o = n ? r : 0;
    let s;
    let c;
    let l = 1000;
    let u = 0;
    let d = 0;
    if (this.engine === `turbo`) {
      s = 45 + e * 120;
      c = 0.04 + e * 0.09;
      l = 900 + e * 1700;
      u = 0.012 + e * 0.028;
      this.lfoDepth.gain.setTargetAtTime(0.15, a, 0.1);
      this.lfo.frequency.setTargetAtTime(s * 0.5, a, 0.08);
    } else if (this.engine === `jet`) {
      s = 24 + e * 30;
      c = 0.02 + e * 0.02;
      l = 1400 + e * 2600;
      u = 0.008 + e * 0.03;
      d = 0.04 + e * 0.22;
      this.lfoDepth.gain.setTargetAtTime(0.05, a, 0.1);
      this.lfo.frequency.setTargetAtTime(7, a, 0.08);
    } else {
      s = 30 + e * 85;
      c = 0.05 + e * 0.11;
      this.lfoDepth.gain.setTargetAtTime(0.4, a, 0.1);
      this.lfo.frequency.setTargetAtTime(s * 0.25, a, 0.08);
    }
    this.eng1.frequency.setTargetAtTime(s, a, 0.08);
    this.eng2.frequency.setTargetAtTime(s * 0.5, a, 0.08);
    this.engFilter.frequency.setTargetAtTime(350 + e * 1600, a, 0.08);
    this.engGain.gain.setTargetAtTime(c * o, a, 0.15);
    this.whine.frequency.setTargetAtTime(l, a, 0.3);
    this.whineGain.gain.setTargetAtTime(u * o, a, 0.2);
    this.roarFilter.frequency.setTargetAtTime(250 + e * 1800, a, 0.2);
    this.roarGain.gain.setTargetAtTime(d * o, a, 0.2);
    let f = Math.min(t / 70, 1.4);
    this.windFilter.frequency.setTargetAtTime(400 + t * 14, a, 0.2);
    this.windGain.gain.setTargetAtTime(n ? f * f * 0.22 : 0, a, 0.2);
  }
  burst(e, t, n, r, i) {
    let a = this.ctx;
    if (!a) {
      return;
    }
    let o = a.currentTime;
    let s = a.createBufferSource();
    s.buffer = this.noise;
    let c = a.createBiquadFilter();
    c.type = t;
    c.frequency.setValueAtTime(n, o);
    if (i) {
      c.frequency.exponentialRampToValueAtTime(i, o + e);
    }
    let l = a.createGain();
    l.gain.setValueAtTime(r, o);
    l.gain.exponentialRampToValueAtTime(0.001, o + e);
    s.connect(c).connect(l).connect(this.master);
    s.start(o, Math.random() * 1.5, e + 0.05);
  }
  explosion(e = 0) {
    let t = dt.clamp(1 - e / 2500, 0.08, 1);
    this.burst(1.6, `lowpass`, 1400, t * 0.9, 80);
    this.burst(0.3, `lowpass`, 4000, t * 0.4, 300);
  }
  splash() {
    this.burst(1, `bandpass`, 900, 0.6, 200);
  }
  click() {
    let e = this.ctx;
    if (!e) {
      return;
    }
    let t = e.createOscillator();
    let n = e.createGain();
    t.type = `triangle`;
    t.frequency.value = 660;
    n.gain.setValueAtTime(0.15, e.currentTime);
    n.gain.exponentialRampToValueAtTime(0.001, e.currentTime + 0.08);
    t.connect(n).connect(this.master);
    t.start();
    t.stop(e.currentTime + 0.1);
  }
  fanfare(e) {
    let t = this.ctx;
    if (t) {
      (e ? [523, 659, 784, 1047] : [392, 349, 311, 262]).forEach((e, n) => {
        let r = t.createOscillator();
        let i = t.createGain();
        r.type = `square`;
        r.frequency.value = e;
        let a = t.currentTime + n * 0.14;
        i.gain.setValueAtTime(0.0001, a);
        i.gain.exponentialRampToValueAtTime(0.08, a + 0.02);
        i.gain.exponentialRampToValueAtTime(0.0001, a + 0.3);
        r.connect(i).connect(this.master);
        r.start(a);
        r.stop(a + 0.32);
      });
    }
  }
};
var iu = e => typeof matchMedia == `function` && matchMedia(e).matches;
function au() {
  return iu(`(pointer: coarse)`);
}
function ou() {
  return au() && Math.min(screen.width, screen.height) <= 900;
}
var su = null;
function cu() {
  if (typeof document > `u`) {
    return {
      l: 0,
      r: 0,
      t: 0,
      b: 0
    };
  }
  if (!su) {
    su = document.createElement(`div`);
    su.style.cssText = `position:fixed;visibility:hidden;pointer-events:none;left:0;top:0;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)`;
    document.body.append(su);
  }
  let e = getComputedStyle(su);
  let t = e => parseFloat(e) || 0;
  return {
    l: t(e.paddingLeft),
    r: t(e.paddingRight),
    t: t(e.paddingTop),
    b: t(e.paddingBottom)
  };
}
function lu() {
  let e = document.documentElement;
  if (!document.fullscreenElement && e.requestFullscreen) {
    e.requestFullscreen({
      navigationUI: `hide`
    }).then(() => screen.orientation?.lock?.(`landscape`)).catch(() => {});
  }
}
var uu = class {
  lock = null;
  want = false;
  constructor() {
    document.addEventListener(`visibilitychange`, () => {
      if (!document.hidden && this.want && !this.lock) {
        this.acquire();
      }
    });
  }
  set(e) {
    this.want = e;
    if (e && !this.lock) {
      this.acquire();
    }
    if (!e && this.lock) {
      this.lock.release().catch(() => {});
      this.lock = null;
    }
  }
  acquire() {
    let e = navigator.wakeLock;
    if (e && !document.hidden) {
      e.request(`screen`).then(e => {
        if (this.want) {
          this.lock = e;
          e.addEventListener(`release`, () => {
            if (this.lock === e) {
              this.lock = null;
            }
          });
        } else {
          e.release();
        }
      }).catch(() => {});
    }
  }
};
var du = [0, 0.5, 1];
var fu = [`UP`, `T/O`, `LAND`];
var pu = 0.61;
var mu = 1.15;
var hu = {
  mass: 650,
  wingArea: 21.5,
  rho: 1.2,
  cl0: 0.12,
  clSlope: 4.6,
  stallAlpha: 0.27,
  alphaTrim: 0.03,
  cd0: 0.035,
  inducedK: 0.075,
  sideArea: 6,
  cyBeta: 1.2,
  maxThrust: 3250,
  propVmax: 95,
  pitchAcc: 5.5,
  rollAcc: 9,
  yawAcc: 2.4,
  pitchDamp: 3.2,
  rollDamp: 4,
  yawDamp: 2.6,
  pitchStab: 9,
  yawStab: 5,
  qRef: 735,
  inertiaPitch: 1100,
  inertiaYaw: 1500,
  inertiaRoll: 800,
  gearK: 70000,
  gearC: 6900,
  rollFriction: 0.03,
  brakeFriction: 0.495,
  skidFriction: 0.3,
  groundSteer: 1.6,
  crashSpeed: 6,
  spoolRate: 1.6,
  gripPaved: 1,
  gripGrass: 1,
  flapCl: 0.6,
  flapCd: 0.07,
  flapStall: 0.02,
  flapTrim: 0.03,
  flapRate: 0.6,
  flapSpeed: 30
};
var gu = () => ({
  pitch: 0,
  roll: 0,
  yaw: 0,
  throttle: 0,
  brake: false,
  flaps: 0
});
var _u = class {
  pos = new G();
  vel = new G();
  quat = new Bt();
  angVel = new G();
  throttle = 0;
  rpm = 0;
  wheels = 0;
  onGround = false;
  airTime = 0;
  groundTime = 0;
  alpha = 0;
  beta = 0;
  airspeed = 0;
  stalled = false;
  health = {
    engine: 1,
    wings: 1,
    tail: 1,
    pilot: 1
  };
  t = 0;
  lastSink = 0;
  flaps = 0;
  flapsBlown = false;
};
var vu = {
  wheels: [new G(-0.92, -1.36, -0.6), new G(0.92, -1.36, -0.6)],
  third: new G(0, -0.22, 3.85),
  tricycle: false,
  crash: [{
    p: new G(-4, -0.45, -0.55),
    kind: `wing`
  }, {
    p: new G(4, -0.45, -0.55),
    kind: `wing`
  }, {
    p: new G(-4.3, 1.5, -1),
    kind: `wing`
  }, {
    p: new G(4.3, 1.5, -1),
    kind: `wing`
  }, {
    p: new G(0, 0.05, -3),
    kind: `nose`
  }, {
    p: new G(0, -1.2, -2.95),
    kind: `prop`
  }, {
    p: new G(0, 1.65, -1),
    kind: `top`
  }, {
    p: new G(0, 1.2, 4.1),
    kind: `top`
  }]
};
var yu = new G();
var bu = new G();
var xu = new G();
var Su = new G();
var Cu = new G();
var wu = new G();
var Tu = new G();
var Eu = new G();
var Du = new G();
var Ou = new G();
var ku = new Bt();
var Au = new G();
var ju = new G();
var Mu = new G();
var Nu = new G();
var Pu = new G();
var Fu = new G();
var Iu = new G();
var Lu = new G();
var Ru = new Bt();
var zu = new G();
function Bu(e, t) {
  return e.stallAlpha - e.flapStall * t;
}
function Vu(e, t, n = 0) {
  let r = Bu(e, n);
  let i = e.cl0 + e.flapCl * n;
  let a = Math.sin(t * 2) * 1.05;
  if (t > r) {
    let n = i + e.clSlope * r;
    let o = Math.min((t - r) / 0.15, 1);
    return n * (1 - o) + a * o;
  }
  let o = -e.stallAlpha * 0.85;
  if (t < o) {
    let n = i + e.clSlope * o;
    let r = Math.min((o - t) / 0.15, 1);
    return n * (1 - r) + a * r;
  }
  return i + e.clSlope * t;
}
function Hu(e, t, n, r, i, a = vu) {
  let o = {
    crashed: null,
    touchdown: null,
    propStrike: false,
    scrape: false,
    splash: false
  };
  let s = e.health;
  e.t += i;
  yu.set(0, 0, -1).applyQuaternion(e.quat);
  bu.set(0, 1, 0).applyQuaternion(e.quat);
  xu.set(1, 0, 0).applyQuaternion(e.quat);
  ku.copy(e.quat).invert();
  e.throttle = dt.clamp(n.throttle, 0, 1);
  let c = s.engine > 0 ? e.throttle : 0;
  if (s.engine > 0 && s.engine < 0.3) {
    c *= 0.55 + Math.abs(Math.sin(e.t * 7.3) * Math.sin(e.t * 2.1)) * 0.45;
  }
  e.rpm += (c - e.rpm) * Math.min(1, i * t.spoolRate);
  Su.copy(e.vel).sub(r.wind);
  let l = Su.length();
  Cu.copy(Su).applyQuaternion(ku);
  let u = -Cu.z;
  e.airspeed = l;
  e.alpha = Math.atan2(-Cu.y, Math.max(Math.abs(u), 0.5) * Math.sign(u || 1));
  e.beta = Math.atan2(Cu.x, Math.max(Math.abs(u), 1));
  let d = dt.clamp(1 - (l - t.flapSpeed) / (t.flapSpeed * 0.3), 0, 1);
  let f = Math.min(dt.clamp(n.flaps, 0, 1), d);
  e.flapsBlown = n.flaps > d + 0.01;
  let p = t.flapRate * i;
  e.flaps += dt.clamp(f - e.flaps, -p, p);
  if (e.flaps > d) {
    e.flaps = Math.max(d, e.flaps - p * 2);
  }
  let m = e.flaps;
  e.stalled = e.alpha > Bu(t, m) && l > 3;
  let h = t.rho * 0.5 * l * l;
  Eu.set(0, 0, 0);
  if (l > 0.5) {
    wu.copy(Su).divideScalar(l);
    let n = Vu(t, e.alpha, m) * (0.45 + s.wings * 0.55);
    let r = Math.sin(e.alpha);
    let i = t.cd0 * (1 + (1 - s.wings) * 1.5) + t.flapCd * m * m + t.inducedK * n * n + r * 1.1 * r;
    Tu.crossVectors(xu, wu);
    let a = Tu.length();
    if (a > 0.0001) {
      Eu.addScaledVector(Tu.divideScalar(a), h * t.wingArea * n);
    }
    Eu.addScaledVector(wu, -h * t.wingArea * i);
    Eu.addScaledVector(xu, -h * t.sideArea * t.cyBeta * e.beta);
  }
  let g = e.rpm * t.maxThrust * Math.max(0, 1 - Math.max(u, 0) / t.propVmax) * (s.engine > 0 ? 0.3 + s.engine * 0.7 : 0);
  Eu.addScaledVector(yu, g);
  Eu.y -= t.mass * 9.81;
  let _ = Math.min(h / t.qRef, 1.6);
  let v = 0.35 + s.tail * 0.65;
  let y = e.angVel;
  let b = dt.clamp(e.alpha - (t.alphaTrim - t.flapTrim * m), -0.6, 0.6);
  let x = dt.clamp(e.beta, -0.6, 0.6);
  Ou.set(n.pitch * t.pitchAcc * _ * v - y.x * t.pitchDamp * (0.3 + _) - b * t.pitchStab * _, -n.yaw * t.yawAcc * _ * v - y.y * t.yawDamp * (0.3 + _) - x * t.yawStab * _, -n.roll * t.rollAcc * _ * (0.4 + s.wings * 0.6) - y.z * t.rollDamp * (0.3 + _) + (1 - s.wings) * 1.2 * _);
  if (e.stalled) {
    Ou.z += Math.sin(e.t * 1.7) * 2.2 * Math.min(_, 1);
  }
  let S = e.pos.y - r.groundHeight(e.pos.x, e.pos.z) < 8;
  let C = e.wheels;
  e.wheels = 0;
  Du.set(0, 0, 0);
  let w = false;
  if (S) {
    Mu.copy(y).applyQuaternion(e.quat);
    Pu.set(yu.x, 0, yu.z);
    if (Pu.lengthSq() < 0.000001) {
      Pu.set(0, 0, -1);
    }
    Pu.normalize();
    Fu.set(-Pu.z, 0, Pu.x);
    let i = e => {
      let n = r.surfaceAt ? r.surfaceAt(ju.x, ju.z) : `grass`;
      let i = n === `paved` ? t.gripPaved : t.gripGrass * (n === `rough` ? 0.85 : 1);
      if (e) {
        return t.brakeFriction * i;
      }
      let a = n === `paved` ? 0.7 : n === `rough` ? 1.6 : 1;
      return t.rollFriction * a / i;
    };
    let s = (n, a) => {
      Au.copy(n).applyQuaternion(e.quat);
      ju.copy(e.pos).add(Au);
      let o = r.groundHeight(ju.x, ju.z);
      let s = Math.max(o, 0) - ju.y;
      if (s <= 0) {
        return false;
      }
      if (o < -0.3) {
        w = true;
      }
      if (typeof a != `number`) {
        a = i(a === `brake`);
      }
      Nu.crossVectors(Mu, Au).add(e.vel);
      let c = Nu.y > 0 ? t.gearC * 2 : t.gearC;
      let l = Math.max(0, t.gearK * s - c * Nu.y);
      let u = Nu.dot(Pu);
      let d = Nu.dot(Fu);
      let f = -dt.clamp(u * 3000, -a * l, a * l);
      let p = -dt.clamp(d * 4000, l * -0.9, l * 0.9);
      Iu.set(0, l, 0).addScaledVector(Pu, f);
      Eu.add(Iu);
      Du.add(Lu.crossVectors(Au, Iu));
      Iu.copy(Fu).multiplyScalar(p);
      Eu.add(Iu);
      zu.set(Au.x, 0, Au.z);
      Du.add(Lu.crossVectors(zu, Iu));
      return true;
    };
    let c = n.brake ? `brake` : `wheel`;
    for (let t of a.wheels) {
      if (s(t, c)) {
        e.wheels++;
      }
    }
    if (s(a.third, a.tricycle ? `wheel` : t.skidFriction)) {
      e.wheels++;
    }
    let l = t.crashSpeed * mu;
    for (let t of a.crash) {
      Au.copy(t.p).applyQuaternion(e.quat);
      ju.copy(e.pos).add(Au);
      let n = r.groundHeight(ju.x, ju.z);
      let i = Math.max(n, 0);
      if (ju.y >= i) {
        continue;
      }
      if (n < -0.3) {
        w = true;
      }
      Nu.crossVectors(Mu, Au).add(e.vel);
      let a = Nu.length();
      if (t.kind === `prop`) {
        if (e.rpm > 0.15) {
          o.propStrike = true;
        }
        if (a > l * 2) {
          o.crashed = `Nosed over`;
        }
        s(t.p, 0.6);
      } else if (t.kind === `top`) {
        o.crashed = `Flipped over`;
      } else if (t.kind === `tail`) {
        if (-Nu.y > l * 1.5) {
          o.crashed = `Tail strike`;
        }
        o.scrape = true;
        s(t.p, 0.5);
      } else if (t.kind === `nose` && a > l) {
        o.crashed = `Nosed in`;
      } else if (t.kind === `wing` && (-Nu.y > l * 0.6 || a > l * 3)) {
        o.crashed = `Cartwheeled`;
      } else {
        o.scrape = true;
        s(t.p, 0.7);
      }
    }
    if (w && (e.wheels > 0 || o.scrape || o.crashed)) {
      o.splash = true;
      o.crashed = `Ditched in the water`;
    }
    if (e.wheels > 0) {
      Lu.copy(Du).applyQuaternion(ku);
      Ou.x += Lu.x / t.inertiaPitch;
      Ou.y += Lu.y / t.inertiaYaw;
      Ou.z += Lu.z / t.inertiaRoll;
      let r = Math.atan2(xu.y, bu.y);
      Ou.y += x * t.yawStab * _ * 0.75 - y.y * 3.5;
      Ou.z += -y.z * 4 - r * 12;
      let i = Math.hypot(e.vel.x, e.vel.z);
      Ou.y += -(n.yaw + n.roll * 0.6) * t.groundSteer * Math.min(i / 4, 1) * Math.max(0, 1 - i / 40);
    }
  }
  if (e.wheels > 0 && C === 0 && e.airTime > 0.6) {
    let t = Math.abs(Math.atan2(xu.y, bu.y));
    o.touchdown = {
      sink: Math.max(0, -e.lastSink),
      bank: t,
      speed: l
    };
  }
  if (e.wheels === 0) {
    e.lastSink = e.vel.y;
  }
  e.vel.addScaledVector(Eu, i / t.mass);
  e.pos.addScaledVector(e.vel, i);
  y.addScaledVector(Ou, i);
  y.clampScalar(-5, 5);
  Lu.copy(y).multiplyScalar(i);
  let T = Lu.length();
  if (T > 1e-9) {
    Ru.setFromAxisAngle(Lu.divideScalar(T), T);
    e.quat.multiply(Ru).normalize();
  }
  let E = r.groundHeight(e.pos.x, e.pos.z);
  if (e.pos.y < Math.max(E, 0) - 1.5) {
    o.crashed = o.crashed ?? (E < 0 ? `Ditched in the water` : `Hit the ground`);
  }
  e.onGround = e.wheels > 0;
  if (e.onGround) {
    e.groundTime += i;
    e.airTime = 0;
  } else {
    e.airTime += i;
    e.groundTime = 0;
  }
  return o;
}
function Uu(e, t, n = vu) {
  let r = new G(e, 0, t).normalize();
  let i = new G(0, 1, 0);
  let a = new G().crossVectors(r, i).normalize();
  let o = new K().makeBasis(a, i, r.clone().negate());
  let s = new Bt().setFromRotationMatrix(o);
  let c = n.third.z - n.wheels[0].z;
  let l = n.third.y - n.wheels[0].y;
  let u = Math.atan(l / c);
  s.multiply(new Bt().setFromAxisAngle(new G(1, 0, 0), u));
  return s;
}
function Wu(e, t = vu) {
  return -t.wheels[0].clone().applyQuaternion(e).y - 0.02;
}
var Gu = 0.06;
var Ku = 10;
function qu(e, t, n) {
  let r = Math.max(0.85, Math.min(1.4, Math.min(e, t) / 390));
  let i = t - n.b - r * 18;
  let a = r * 46;
  let o = e - n.r - r * 14 - a;
  let s = Math.max(n.t + 46 + 104 + 14, t * 0.3);
  let c = {
    x: o,
    y: s,
    w: a,
    h: Math.max(r * 90, i - s)
  };
  let l = r * 34;
  let u = {
    x: o - r * 16 - l,
    y: i - l,
    r: l
  };
  let d = r * 26;
  let f = u.x - l - r * 16 - d;
  let p = {
    x: f,
    y: i - d,
    r: d
  };
  let m = {
    x: f,
    y: p.y - d * 2 - r * 26,
    r: d
  };
  let h = r * 23;
  let g = {
    x: u.x,
    y: u.y - l - r * 14 - h,
    r: h
  };
  let _ = {
    x: u.x,
    y: g.y - h * 2 - r * 12,
    r: h
  };
  let v = {
    x: n.l + r * 14 + r * 21,
    y: n.t + r * 12 + r * 21,
    r: r * 21
  };
  let y = r * 58;
  let b = {
    x: n.l + r * 26 + y,
    y: i - y
  };
  return {
    w: e,
    h: t,
    u: r,
    safe: n,
    stickR: y,
    stickRest: b,
    stickZone: {
      x: 0,
      y: v.y + v.r + r * 6,
      w: Math.min(e * 0.5, f - d - r * 20),
      h: t
    },
    lever: c,
    buttons: {
      pause: v,
      camera: g,
      bail: _,
      flapsMore: p,
      flapsLess: m,
      brake: u
    },
    leftEdge: b.x + y,
    rightEdge: f - d
  };
}
var Ju = (e, t, n, r) => (t - e.x) ** 2 + (n - e.y) ** 2 <= (e.r + r) ** 2;
var Yu = (e, t, n, r) => t >= e.x - r && t <= e.x + e.w + r && n >= e.y - r && n <= e.y + e.h + r;
function Xu(e, t, n, r) {
  let i = Ku * e.u;
  let a = null;
  let o = Infinity;
  for (let s of Object.keys(e.buttons)) {
    if (s === `bail` && !r) {
      continue;
    }
    let c = e.buttons[s];
    if (!Ju(c, t, n, i)) {
      continue;
    }
    let l = Math.hypot(t - c.x, n - c.y) - c.r;
    if (l < o) {
      o = l;
      a = s;
    }
  }
  return a || (Yu(e.lever, t, n, i) ? `lever` : Yu(e.stickZone, t, n, 0) ? `stick` : null);
}
function Zu(e) {
  let t = Math.abs(e);
  if (t <= Gu) {
    return 0;
  }
  let n = Math.min(1, (t - Gu) / 0.94);
  return Math.sign(e) * n ** 1.4;
}
function Qu(e, t) {
  return Math.max(0, Math.min(1, (e.y + e.h - t) / e.h));
}
function $u(e, t, n) {
  let r = e * Math.PI / 180;
  let i = t * Math.PI / 180;
  let a = -Math.cos(r) * Math.sin(i);
  let o = Math.sin(r);
  let s = Math.cos(r) * Math.cos(i);
  let c = n * Math.PI / 180;
  let l = a * Math.cos(c) - o * Math.sin(c);
  let u = a * Math.sin(c) + o * Math.cos(c);
  return {
    roll: Math.asin(Math.max(-1, Math.min(1, -l))),
    pitch: Math.atan2(s, u)
  };
}
function ed(e, t) {
  let n = Math.PI * 25 / 180;
  let r = Math.PI * 3 / 180;
  let i = e => {
    let t = Math.abs(e);
    if (t <= r) {
      return 0;
    } else {
      return Math.sign(e) * Math.min(1, (t - r) / (n - r));
    }
  };
  let a = e.pitch - t.pitch;
  if (a > Math.PI) {
    a -= Math.PI * 2;
  }
  if (a < -Math.PI) {
    a += Math.PI * 2;
  }
  return {
    x: i(e.roll - t.roll),
    y: 0 - i(a)
  };
}
var td = class {
  layout;
  bailShown = false;
  throttle = 0;
  ptrs = new Map();
  actions = new Set();
  lastLeverTap = -1;
  bailFired = false;
  constructor(e = 844, t = 390, n = {
    l: 0,
    r: 0,
    t: 0,
    b: 0
  }) {
    this.layout = qu(e, t, n);
  }
  resize(e, t, n) {
    this.layout = qu(e, t, n);
  }
  down(e, t, n, r) {
    let i = Xu(this.layout, t, n, this.bailShown);
    if (!i || i === `stick` && this.find(`stick`)) {
      return null;
    } else {
      this.ptrs.set(e, {
        ctl: i,
        x0: t,
        y0: n,
        x: t,
        y: n,
        t0: r
      });
      if (i === `lever`) {
        if (r - this.lastLeverTap < 0.3) {
          this.throttle = 0;
          this.lastLeverTap = -1;
          this.ptrs.get(e).y0 = NaN;
        } else {
          this.lastLeverTap = r;
          this.throttle = Qu(this.layout.lever, n);
        }
      } else if (i === `pause` || i === `camera` || i === `flapsMore` || i === `flapsLess`) {
        this.actions.add(i);
      } else if (i === `bail`) {
        this.bailFired = false;
      }
      return i;
    }
  }
  move(e, t, n) {
    let r = this.ptrs.get(e);
    if (r) {
      r.x = t;
      r.y = n;
      if (r.ctl === `lever` && !Number.isNaN(r.y0)) {
        this.throttle = Qu(this.layout.lever, n);
      }
    }
  }
  up(e) {
    this.ptrs.delete(e);
  }
  cancelAll() {
    this.ptrs.clear();
    this.bailFired = false;
  }
  update(e) {
    let t = this.find(`bail`);
    if (t && this.bailShown && !this.bailFired && e - t.t0 >= 1) {
      this.bailFired = true;
      this.actions.add(`bail`);
    }
  }
  take() {
    let e = new Set(this.actions);
    this.actions.clear();
    return e;
  }
  get active() {
    return this.ptrs.size > 0;
  }
  get leverHeld() {
    return !!this.find(`lever`);
  }
  get brake() {
    return !!this.find(`brake`);
  }
  held(e) {
    return !!this.find(e);
  }
  bailProgress(e) {
    let t = this.find(`bail`);
    if (t && this.bailShown) {
      return Math.min(1, (e - t.t0) / 1);
    } else {
      return 0;
    }
  }
  stick() {
    let e = this.find(`stick`);
    if (!e) {
      return null;
    }
    let t = this.layout.stickR;
    let n = (e.x - e.x0) / t;
    let r = (e.y - e.y0) / t;
    let i = Math.hypot(n, r);
    if (i > 1) {
      n /= i;
      r /= i;
    }
    return {
      ox: e.x0,
      oy: e.y0,
      x: n,
      y: r
    };
  }
  find(e) {
    for (let t of this.ptrs.values()) {
      if (t.ctl === e) {
        return t;
      }
    }
  }
};
var nd = class e {
  model = new td();
  enabled = false;
  onTouch = null;
  tiltOn = false;
  tiltNow = null;
  tiltSmooth = null;
  neutral = null;
  constructor(e) {
    let t = () => performance.now() / 1000;
    e.addEventListener(`pointerdown`, n => {
      if (n.pointerType === `touch` && (this.onTouch?.(), this.enabled && this.model.down(n.pointerId, n.clientX, n.clientY, t()))) {
        try {
          e.setPointerCapture(n.pointerId);
        } catch {}
        n.preventDefault();
      }
    });
    e.addEventListener(`pointermove`, e => {
      if (e.pointerType === `touch`) {
        this.model.move(e.pointerId, e.clientX, e.clientY);
      }
    });
    let n = e => {
      if (e.pointerType === `touch`) {
        this.model.up(e.pointerId);
      }
    };
    e.addEventListener(`pointerup`, n);
    e.addEventListener(`pointercancel`, n);
    e.addEventListener(`lostpointercapture`, n);
    e.addEventListener(`contextmenu`, e => e.preventDefault());
  }
  setEnabled(e) {
    if (this.enabled && !e) {
      this.model.cancelAll();
    }
    this.enabled = e;
  }
  get tiltEnabled() {
    return this.tiltOn;
  }
  static tiltSupported() {
    return typeof window < `u` && `DeviceOrientationEvent` in window;
  }
  async setTilt(t) {
    if (!t) {
      this.tiltOn = false;
      window.removeEventListener(`deviceorientation`, this.onOrient);
      this.tiltNow = this.tiltSmooth = null;
      return true;
    }
    if (!e.tiltSupported()) {
      return false;
    }
    let n = DeviceOrientationEvent;
    if (typeof n.requestPermission == `function`) {
      try {
        if ((await n.requestPermission()) !== `granted`) {
          return false;
        }
      } catch {
        return false;
      }
    }
    this.tiltOn = true;
    this.neutral = null;
    window.addEventListener(`deviceorientation`, this.onOrient);
    return true;
  }
  recentre() {
    this.neutral = this.tiltSmooth ? {
      ...this.tiltSmooth
    } : null;
  }
  tilt() {
    if (!this.tiltOn || !this.tiltSmooth) {
      return null;
    } else {
      this.neutral ||= {
        ...this.tiltSmooth
      };
      return ed(this.tiltSmooth, this.neutral);
    }
  }
  update(e) {
    this.model.update(performance.now() / 1000);
    if (!this.tiltNow) {
      return;
    }
    this.tiltSmooth ||= {
      ...this.tiltNow
    };
    let t = 1 - Math.exp(-e * 12);
    this.tiltSmooth.roll += (this.tiltNow.roll - this.tiltSmooth.roll) * t;
    let n = this.tiltNow.pitch - this.tiltSmooth.pitch;
    if (n > Math.PI) {
      n -= Math.PI * 2;
    }
    if (n < -Math.PI) {
      n += Math.PI * 2;
    }
    this.tiltSmooth.pitch += n * t;
  }
  onOrient = e => {
    if (e.beta === null || e.gamma === null) {
      return;
    }
    let t = screen.orientation?.angle ?? window.orientation ?? 0;
    this.tiltNow = $u(e.beta, e.gamma, (t % 360 + 360) % 360);
  };
};
var rd = 4.5;
var id = 0.6;
var ad = class {
  target;
  keys = new Set();
  pressed = new Set();
  mouse = {
    x: 0,
    y: 0,
    down: false
  };
  mouseStick = false;
  throttle = 0;
  flapNotch = 0;
  invertPitch = false;
  axes = {
    pitch: 0,
    roll: 0,
    yaw: 0
  };
  padPressed = new Set();
  padPrev = [];
  manual = false;
  touch;
  lastInput = au() ? `touch` : `desktop`;
  onInputKind = null;
  constructor(e) {
    this.target = e;
    this.touch = new nd(e);
    window.addEventListener(`pointerdown`, e => this.setKind(e.pointerType === `touch` ? `touch` : `desktop`), true);
    window.addEventListener(`pointermove`, e => {
      if (e.pointerType === `mouse` && (e.movementX || e.movementY)) {
        this.setKind(`desktop`);
      }
    });
    window.addEventListener(`keydown`, e => {
      this.setKind(`desktop`);
      if (!e.repeat) {
        this.keys.add(e.code);
        this.pressed.add(e.code);
        if ([`Space`, `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`].includes(e.code)) {
          if (!(e.target instanceof HTMLInputElement)) {
            e.preventDefault();
          }
        }
      }
    });
    window.addEventListener(`keyup`, e => this.keys.delete(e.code));
    window.addEventListener(`blur`, () => {
      this.keys.clear();
      this.mouse.down = false;
    });
    window.addEventListener(`mousemove`, e => {
      this.mouse.x = e.clientX / window.innerWidth * 2 - 1;
      this.mouse.y = -(e.clientY / window.innerHeight * 2 - 1);
    });
    this.target.addEventListener(`mousedown`, e => {
      if (e.button === 0) {
        this.mouse.down = true;
      }
    });
    window.addEventListener(`mouseup`, e => {
      if (e.button === 0) {
        this.mouse.down = false;
      }
    });
  }
  setKind(e) {
    if (e !== this.lastInput) {
      this.lastInput = e;
      this.onInputKind?.(e);
    }
  }
  wasPressed(e) {
    return this.pressed.has(e);
  }
  padWasPressed(e) {
    return this.padPressed.has(e);
  }
  endFrame() {
    this.pressed.clear();
    this.padPressed.clear();
  }
  gamepad() {
    let e = navigator.getGamepads ? navigator.getGamepads() : [];
    for (let t of e) {
      if (t && t.connected) {
        return t;
      }
    }
    return null;
  }
  pollPad() {
    let e = this.gamepad();
    if (e) {
      e.buttons.forEach((e, t) => {
        if (e.pressed && !this.padPrev[t]) {
          this.padPressed.add(t);
          this.setKind(`desktop`);
        }
        this.padPrev[t] = e.pressed;
      });
    }
  }
  resetThrottle(e = 0) {
    this.throttle = e;
  }
  stepFlaps(e) {
    let t = Math.max(0, Math.min(du.length - 1, this.flapNotch + e));
    return t !== this.flapNotch && (this.flapNotch = t, true);
  }
  sample(e, t) {
    let n = this.keys;
    let r = (n.has(`KeyS`) || n.has(`ArrowDown`) ? 1 : 0) - (n.has(`KeyW`) || n.has(`ArrowUp`) ? 1 : 0);
    let i = (n.has(`KeyD`) || n.has(`ArrowRight`) ? 1 : 0) - (n.has(`KeyA`) || n.has(`ArrowLeft`) ? 1 : 0);
    let a = +!!n.has(`KeyE`) - !!n.has(`KeyQ`);
    let o = (t, n) => {
      let r = rd * e;
      if (n === 0) {
        if (Math.abs(t) <= r * 1.5) {
          return 0;
        } else {
          return t - Math.sign(t) * r * 1.5;
        }
      } else {
        return t + Math.max(-r, Math.min(r, n - t));
      }
    };
    this.axes.pitch = o(this.axes.pitch, r);
    this.axes.roll = o(this.axes.roll, i);
    this.axes.yaw = o(this.axes.yaw, a);
    let s = this.axes.pitch;
    let c = this.axes.roll;
    let l = this.axes.yaw;
    let u = n.has(`KeyB`);
    if (n.has(`ShiftLeft`) || n.has(`ShiftRight`)) {
      this.throttle += id * e;
    }
    if (n.has(`ControlLeft`) || n.has(`ControlRight`)) {
      this.throttle -= id * e;
    }
    for (let e = 1; e <= 9; e++) {
      if (n.has(`Digit${e}`)) {
        this.throttle = e / 10;
      }
    }
    if (n.has(`Digit0`)) {
      this.throttle = 1;
    }
    let d = this.gamepad();
    if (d) {
      let t = e => Math.abs(e) < 0.12 ? 0 : (e - Math.sign(e) * 0.12) / 0.88;
      let n = t(d.axes[0] ?? 0);
      let r = t(d.axes[1] ?? 0);
      let i = t(d.axes[2] ?? 0);
      let a = t(d.axes[3] ?? 0);
      if (n || r || i || a) {
        this.setKind(`desktop`);
      }
      if (n || r) {
        c = n;
        s = r;
      }
      if (i) {
        l = i;
      }
      if (a) {
        this.throttle -= a * id * 1.5 * e;
      }
      if (d.buttons[1]?.pressed) {
        u = true;
      }
    }
    let f = this.touch;
    let p = f.model;
    if (f.enabled) {
      let e = p.stick();
      let t = e ? null : f.tilt();
      if (e) {
        this.axes.roll = c = Zu(e.x);
        this.axes.pitch = s = Zu(e.y);
      } else if (t) {
        c = t.x;
        s = t.y;
      }
      if (p.leverHeld) {
        this.throttle = p.throttle;
      }
      if (p.brake) {
        u = true;
      }
    }
    if (!p.leverHeld) {
      p.throttle = Math.max(0, Math.min(1, this.throttle));
    }
    this.manual = s !== 0 || c !== 0 || l !== 0;
    if (this.mouseStick && !this.manual) {
      let e = e => Math.abs(e) < 0.05 ? 0 : Math.max(-1, Math.min(1, (e - Math.sign(e) * 0.05) * 2.2));
      c = e(this.mouse.x);
      s = e(this.mouse.y);
    }
    if (this.invertPitch) {
      s = -s;
    }
    this.throttle = Math.max(0, Math.min(1, this.throttle));
    t.pitch = Math.max(-1, Math.min(1, s));
    t.roll = Math.max(-1, Math.min(1, c));
    t.yaw = Math.max(-1, Math.min(1, l));
    t.throttle = this.throttle;
    t.brake = u;
    t.flaps = du[this.flapNotch];
  }
};
var od = `baron.iosTip.dismissed`;
var sd = class {
  onChange = null;
  installEvent = null;
  waiting = null;
  tipDismissed = false;
  constructor() {
    try {
      this.tipDismissed = localStorage.getItem(od) === `1`;
    } catch {}
    window.addEventListener(`beforeinstallprompt`, e => {
      e.preventDefault();
      this.installEvent = e;
      this.changed();
    });
    window.addEventListener(`appinstalled`, () => {
      this.installEvent = null;
      this.changed();
    });
  }
  get installed() {
    let e = e => typeof matchMedia == `function` && matchMedia(e).matches;
    return e(`(display-mode: standalone)`) || e(`(display-mode: fullscreen)`) || e(`(display-mode: minimal-ui)`) || navigator.standalone === true;
  }
  get canInstall() {
    return !!this.installEvent && !this.installed;
  }
  get iosTip() {
    if (this.installed || this.tipDismissed) {
      return false;
    }
    let e = navigator.userAgent;
    let t = /iPhone|iPad|iPod/.test(e) || /Macintosh/.test(e) && navigator.maxTouchPoints > 1;
    let n = /Safari/.test(e) && !/CriOS|FxiOS|EdgiOS/.test(e);
    return t && n;
  }
  get updateReady() {
    return !!this.waiting;
  }
  register() {
    if (`serviceWorker` in navigator) {
      window.addEventListener(`load`, () => {
        navigator.serviceWorker.register(`/sw.js`).then(e => {
          let t = e => {
            if (!e) {
              return;
            }
            let t = () => {
              if (e.state === `installed` && navigator.serviceWorker.controller) {
                this.waiting = e;
                this.changed();
              }
            };
            e.addEventListener(`statechange`, t);
            t();
          };
          t(e.waiting);
          t(e.installing);
          e.addEventListener(`updatefound`, () => t(e.installing));
          document.addEventListener(`visibilitychange`, () => {
            if (!document.hidden) {
              e.update().catch(() => {});
            }
          });
        }).catch(() => {});
      });
    }
  }
  async install() {
    let e = this.installEvent;
    if (e) {
      this.installEvent = null;
      await e.prompt().catch(() => {});
      this.changed();
    }
  }
  dismissTip() {
    this.tipDismissed = true;
    try {
      localStorage.setItem(od, `1`);
    } catch {}
    this.changed();
  }
  restart() {
    let e = this.waiting;
    if (!e) {
      return;
    }
    let t = false;
    navigator.serviceWorker.addEventListener(`controllerchange`, () => {
      if (!t) {
        t = true;
        location.reload();
      }
    });
    e.postMessage(`skipWaiting`);
  }
  changed() {
    this.onChange?.();
  }
};
var cd = 1 / 120;
var ld = 0.1;
var ud = 12;
var dd = class {
  onStep;
  onFrame;
  acc = 0;
  last = 0;
  raf = 0;
  running = false;
  maxFps = 0;
  constructor(e, t) {
    this.onStep = e;
    this.onFrame = t;
  }
  start() {
    if (this.running) {
      return;
    }
    this.running = true;
    this.last = performance.now();
    let e = t => {
      if (!this.running || (this.raf = requestAnimationFrame(e), this.maxFps > 0 && t - this.last < 1000 / this.maxFps - 1)) {
        return;
      }
      let n = (t - this.last) / 1000;
      this.last = t;
      if (n > ld) {
        n = ld;
      }
      if (n < 0) {
        n = 0;
      }
      this.acc += n;
      let r = 0;
      while (this.acc >= 0.008333333333333333 && r < ud) {
        this.onStep(cd);
        this.acc -= cd;
        r++;
      }
      if (r === ud) {
        this.acc = 0;
      }
      this.onFrame(n, this.acc / cd);
    };
    this.raf = requestAnimationFrame(e);
  }
  stop() {
    this.running = false;
    cancelAnimationFrame(this.raf);
  }
};
var fd = `baron.settings.v1`;
var pd = `baron.best.v1`;
function md() {
  return Math.floor(Math.random() * 999999999) + 1;
}
function hd() {
  return {
    quality: `auto`,
    assist: `arcade`,
    seed: md(),
    volume: 0.7,
    invertPitch: false,
    cameraShake: true,
    mode: `free`,
    dest: 1,
    tilt: false
  };
}
function gd(e) {
  try {
    return localStorage.getItem(e);
  } catch {
    return null;
  }
}
function _d(e, t) {
  try {
    localStorage.setItem(e, t);
  } catch {}
}
function vd() {
  let e = hd();
  let t = gd(fd);
  if (!t) {
    return e;
  }
  try {
    let n = JSON.parse(t);
    delete n.mission;
    delete n.difficulty;
    let r = {
      ...e,
      ...n
    };
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
function yd(e) {
  _d(fd, JSON.stringify(e));
}
function bd() {
  let e = gd(pd);
  if (!e) {
    return {};
  }
  try {
    return JSON.parse(e);
  } catch {
    return {};
  }
}
function xd(e, t = `free`, n = 0) {
  if (t === `route`) {
    return `route:${e}:${n}`;
  } else {
    return `free:${e}`;
  }
}
function Sd(e) {
  return bd()[e] ?? null;
}
function Cd(e, t) {
  let n = bd();
  let r = n[e];
  if (r && r.medal >= t.medal) {
    return false;
  } else {
    n[e] = t;
    _d(pd, JSON.stringify(n));
    return true;
  }
}
function wd(e, t = false) {
  let n = e[0].index !== null;
  let r = new Set(Object.keys(e[0].attributes));
  let i = new Set(Object.keys(e[0].morphAttributes));
  let a = {};
  let o = {};
  let s = e[0].morphTargetsRelative;
  let c = new Tr();
  let l = 0;
  for (let u = 0; u < e.length; ++u) {
    let d = e[u];
    let f = 0;
    if (n !== (d.index !== null)) {
      console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ${u}. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`);
      return null;
    }
    for (let e in d.attributes) {
      if (!r.has(e)) {
        console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ${u}. All geometries must have compatible attributes; make sure "${e}" attribute exists among all geometries, or in none of them.`);
        return null;
      }
      if (a[e] === undefined) {
        a[e] = [];
      }
      a[e].push(d.attributes[e]);
      f++;
    }
    if (f !== r.size) {
      console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ${u}. Make sure all geometries have the same number of attributes.`);
      return null;
    }
    if (s !== d.morphTargetsRelative) {
      console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ${u}. .morphTargetsRelative must be consistent throughout all geometries.`);
      return null;
    }
    for (let e in d.morphAttributes) {
      if (!i.has(e)) {
        console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ${u}.  .morphAttributes must be consistent throughout all geometries.`);
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
        console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ${u}. The geometry must have either an index or a position attribute`);
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
    let t = Td(a[e]);
    if (!t) {
      console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ${e} attribute.`);
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
      let r = Td(t);
      if (!r) {
        console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ${e} morphAttribute.`);
        return null;
      }
      c.morphAttributes[e].push(r);
    }
  }
  return c;
}
function Td(e) {
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
      console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`);
      return null;
    }
    if (n === undefined) {
      n = s.itemSize;
    }
    if (n !== s.itemSize) {
      console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`);
      return null;
    }
    if (r === undefined) {
      r = s.normalized;
    }
    if (r !== s.normalized) {
      console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`);
      return null;
    }
    if (i === -1) {
      i = s.gpuType;
    }
    if (i !== s.gpuType) {
      console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`);
      return null;
    }
    a += s.count * n;
  }
  let o = new t(a);
  let s = new mr(o, n, r);
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
var Ed = new q();
var Dd = new K();
var Od = new Bt();
var kd = new En();
var Ad = new G();
var jd = new G();
function Z(e, t, n = {}) {
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
  r.setAttribute(`color`, new mr(a, 3));
  return r;
}
function Md(e) {
  let t = e.getAttribute(`position`);
  let n = e.getAttribute(`normal`);
  let r = new Map();
  let i = e => `${Math.round(t.getX(e) * 200)},${Math.round(t.getY(e) * 200)},${Math.round(t.getZ(e) * 200)}`;
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
  e.setAttribute(`outlineNormal`, new mr(a, 3));
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
  let o = new J(e, t, n);
  o.translate(0, 0, n / 2);
  let s = o.getAttribute(`position`);
  for (let o = 0; o < s.count; o++) {
    if (s.getZ(o) > n / 2) {
      s.setX(o, s.getX(o) * r / e);
      s.setY(o, s.getY(o) * i / t + a);
    }
  }
  o.computeVertexNormals();
  return o;
}
function Fd(e, t, n) {
  let r = new Lr(e, t);
  r.castShadow = true;
  if (n) {
    let t = new Lr(e, n);
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
  return new qr({
    uniforms: Wr.merge([X.fog, {
      outlineColor: {
        value: new q(e)
      },
      outlineWidth: {
        value: t
      },
      maxDist: {
        value: n
      }
    }]),
    vertexShader: Id,
    fragmentShader: Ld,
    side: 1,
    fog: true
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
  n = new Gs(i, e.length, 1, C);
  n.minFilter = r;
  n.magFilter = r;
  n.generateMipmaps = false;
  n.needsUpdate = true;
  zd.set(t, n);
  return n;
}
function Vd(e = {}) {
  let t = new Sl({
    color: e.color ?? 16777215,
    vertexColors: !!e.vertexColors,
    gradientMap: Bd(e.ramp),
    side: e.side ?? 0,
    fog: e.fog ?? true
  });
  let n = e.rim ?? 0.28;
  t.onBeforeCompile = e => {
    e.uniforms.rimStrength = {
      value: n
    };
    e.fragmentShader = e.fragmentShader.replace(`#include <common>`, `#include <common>
uniform float rimStrength;`).replace(`#include <opaque_fragment>`, `{
          float rimDot = 1.0 - max(dot(normal, normalize(vViewPosition)), 0.0);
          outgoingLight += diffuseColor.rgb * rimStrength * smoothstep(0.6, 0.66, rimDot);
        }
        #include <opaque_fragment>`);
  };
  t.customProgramCacheKey = () => `toon-rim-${n}`;
  return t;
}
var Hd = 1800;
var Ud = 500;
var Wd = new K();
var Gd = new Bt();
var Kd = new G();
var qd = new G();
var Jd = new q();
var Yd = class {
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
    let r = e / 24 * Math.PI * 2;
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
  let n = new tc(e);
  n.colorSpace = Ne;
  return n;
}
var Zd = class {
  group = new fs();
  puffs = new Yd(Hd);
  sparks = new Yd(Ud);
  puffMesh;
  puffOutline;
  sparkMesh;
  pows = [];
  tmpV = new G();
  constructor() {
    let e = new _l(1, 0);
    Md(e);
    this.puffMesh = new ec(e, Vd({
      color: 16777215,
      rim: 0.1
    }), Hd);
    this.puffMesh.count = 0;
    this.puffMesh.frustumCulled = false;
    this.puffMesh.setColorAt(0, new q(1, 1, 1));
    this.puffOutline = new ec(e, Rd(2825498, 0.8, 250), Hd);
    this.puffOutline.instanceMatrix = this.puffMesh.instanceMatrix;
    this.puffOutline.count = 0;
    this.puffOutline.frustumCulled = false;
    this.sparkMesh = new ec(new vl(1, 0), new dr({
      color: 16777215
    }), Ud);
    this.sparkMesh.count = 0;
    this.sparkMesh.frustumCulled = false;
    this.sparkMesh.setColorAt(0, new q(1, 1, 1));
    this.group.add(this.puffMesh, this.puffOutline, this.sparkMesh);
    let t = Xd();
    for (let e = 0; e < 6; e++) {
      let e = new Us(new ks({
        map: t,
        transparent: true,
        depthWrite: false,
        fog: false
      }));
      e.visible = false;
      this.group.add(e);
      this.pows.push({
        sprite: e,
        t: 99
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
    return this.tmpV.set((Math.random() - 0.5) * e, (Math.random() - 0.5) * e, (Math.random() - 0.5) * e);
  }
  smoke(e, t, n) {
    let r = this.rv(3).addScaledVector(t, 0.15);
    let i = n > 0.6 ? 3880499 : n > 0.3 ? 7827562 : 13223100;
    this.puffs.add(e, r, 2.4 + Math.random(), 0.9, 4.5 + n * 3, i, 0.8, 2.5);
  }
  fire(e, t) {
    let n = this.rv(4).addScaledVector(t, 0.3);
    this.puffs.add(e, n, 0.45, 1.6, 0.4, Math.random() < 0.5 ? 16756782 : 16738858, 2, 2);
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
      this.sparks.add(e, this.rv(30), 0.25 + Math.random() * 0.2, 0.35, 0.05, Math.random() < 0.5 ? 16769126 : 16777215, 3, -10);
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
      this.puffs.add(e, n, 0.6 + Math.random() * 0.4, 2.5 + Math.random() * 2, 0.5, r % 3 == 0 ? 16769126 : 16747050, 2.5, 3);
    }
    for (let r = 0; r < n; r++) {
      let n = this.rv(t ? 14 : 8);
      n.y = Math.abs(n.y);
      this.puffs.add(e, n, 2.5 + Math.random() * 1.5, 2, 8, 3880499, 1, 4);
    }
    this.sparksAt(e, 24);
    if (t) {
      let t = this.pows.reduce((e, t) => e.t > t.t ? e : t);
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
      t.sprite.material.opacity = 1 - dt.smoothstep(t.t, 0.5, 0.9);
      if (t.t > 0.9) {
        t.sprite.visible = false;
      }
    }
  }
  write(e, t, n) {
    for (let r = 0; r < e.n; r++) {
      let i = 1 - e.life[r] / e.max[r];
      let a = (e.s0[r] + (e.s1[r] - e.s0[r]) * Math.sqrt(i)) * (i > 0.7 ? 1 - (i - 0.7) / 0.3 : 1);
      Kd.set(e.px[r], e.py[r], e.pz[r]);
      let o = Kd.distanceTo(n);
      if (o < a * 2.5 + 1) {
        a *= dt.clamp((o - 1) / (a * 2.5), 0, 1);
      }
      Gd.setFromAxisAngle(Un.DEFAULT_UP, e.rot[r]);
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
var Qd = {
  style: `biplane`,
  paint: `sunflower`,
  wheels: `medium`
};
var $d = [{
  id: `biplane`,
  name: `Biplane`,
  trait: `Wooden prop. Floaty, nimble, shortest takeoff`,
  icon: `🛩️`
}, {
  id: `turboprop`,
  name: `Turboprop`,
  trait: `Turbo prop. Balanced speed and handling`,
  icon: `✈️`
}, {
  id: `jet`,
  name: `Jet`,
  trait: `Jet engine. Very fast, slow to spool, lands hot`,
  icon: `🚀`
}];
var ef = [{
  id: `hard`,
  name: `Hard`,
  trait: `Quick on asphalt, bouncy landings`,
  icon: `⚫`
}, {
  id: `medium`,
  name: `Medium`,
  trait: `All-rounder`,
  icon: `🛞`
}, {
  id: `soft`,
  name: `Soft`,
  trait: `Forgiving landings, longer takeoff`,
  icon: `🎈`
}];
var tf = [{
  id: `sunflower`,
  name: `Sunflower`,
  body: 15905076,
  accent: 2792847
}, {
  id: `scarlet`,
  name: `Scarlet`,
  body: 14240317,
  accent: 2508371
}, {
  id: `sky`,
  name: `Sky`,
  body: 4891615,
  accent: 15905076,
  stripe: 2051705
}, {
  id: `teal`,
  name: `Teal`,
  body: 2792847,
  accent: 15167313
}, {
  id: `meadow`,
  name: `Meadow`,
  body: 7061337,
  accent: 2508371
}, {
  id: `plum`,
  name: `Plum`,
  body: 9329589,
  accent: 16241518
}, {
  id: `snow`,
  name: `Snow`,
  body: 16052712,
  accent: 14240317,
  stripe: 4013893
}, {
  id: `charcoal`,
  name: `Charcoal`,
  body: 4013893,
  accent: 15905076
}];
var nf = new q();
var rf = new q(16777215);
function af(e, t) {
  return nf.setHex(e).lerp(rf, t).getHex();
}
function of(e) {
  let t = tf.find(t => t.id === e) ?? tf[0];
  if (t.id === `sunflower`) {
    return {
      body: 15905076,
      accent: 2792847,
      wing: 16241518,
      wingUnder: 15318869,
      emblemOuter: 2792847,
      emblemInner: 16774084,
      stripe: null
    };
  } else {
    return {
      body: t.body,
      accent: t.accent,
      wing: af(t.body, 0.2),
      wingUnder: af(t.body, 0.08),
      emblemOuter: t.accent,
      emblemInner: 16774084,
      stripe: t.stripe ?? null
    };
  }
}
var sf = {
  biplane: {
    spec: {},
    engine: `prop`,
    gear: `taildragger`,
    mains: [[-0.92, -1, -0.6], [0.92, -1, -0.6]],
    third: [0, -0.22, 3.85],
    engineMount: [0, 0.05, -2.9],
    eye: [0, 1.05, 0.05],
    crash: [{
      p: [-4, -0.45, -0.55],
      kind: `wing`
    }, {
      p: [4, -0.45, -0.55],
      kind: `wing`
    }, {
      p: [-4.3, 1.5, -1],
      kind: `wing`
    }, {
      p: [4.3, 1.5, -1],
      kind: `wing`
    }, {
      p: [0, 0.05, -3],
      kind: `nose`
    }, {
      p: [0, 1.65, -1],
      kind: `top`
    }, {
      p: [0, 1.2, 4.1],
      kind: `top`
    }]
  },
  turboprop: {
    spec: {
      mass: 1300,
      wingArea: 16,
      flapSpeed: 52,
      cl0: 0.15,
      clSlope: 5,
      stallAlpha: 0.24,
      cd0: 0.024,
      inducedK: 0.06,
      sideArea: 7,
      pitchAcc: 5.2,
      rollAcc: 8,
      yawAcc: 2.2,
      qRef: 1100,
      groundSteer: 1.4
    },
    engine: `turbo`,
    gear: `tricycle`,
    mains: [[-1.35, -1.05, 0.35], [1.35, -1.05, 0.35]],
    third: [0, -1.05, -2.5],
    engineMount: [0, 0.05, -3.6],
    eye: [0, 1.02, -0.6],
    crash: [{
      p: [-4.9, -0.4, 0.1],
      kind: `wing`
    }, {
      p: [4.9, -0.4, 0.1],
      kind: `wing`
    }, {
      p: [0, 0, -3.6],
      kind: `nose`
    }, {
      p: [0, -0.35, 4],
      kind: `tail`
    }, {
      p: [0, 1.25, -0.3],
      kind: `top`
    }, {
      p: [0, 1.7, 4.3],
      kind: `top`
    }]
  },
  jet: {
    spec: {
      mass: 2500,
      wingArea: 22,
      flapSpeed: 65,
      cl0: 0.1,
      clSlope: 3.8,
      stallAlpha: 0.32,
      cd0: 0.02,
      inducedK: 0.08,
      sideArea: 9,
      pitchAcc: 6.2,
      rollAcc: 12,
      yawAcc: 2,
      rollDamp: 4.5,
      qRef: 1700,
      groundSteer: 1.2
    },
    engine: `jet`,
    gear: `tricycle`,
    mains: [[-1.3, -0.9, 0.7], [1.3, -0.9, 0.7]],
    third: [0, -0.9, -2.9],
    engineMount: [0, 0.05, 4.75],
    eye: [0, 0.95, -2.36],
    crash: [{
      p: [-4.4, -0.2, 2],
      kind: `wing`
    }, {
      p: [4.4, -0.2, 2],
      kind: `wing`
    }, {
      p: [0, 0, -5.6],
      kind: `nose`
    }, {
      p: [0, -0.35, 4.6],
      kind: `tail`
    }, {
      p: [0, 1.2, -1.8],
      kind: `top`
    }, {
      p: [0, 2.2, 4.4],
      kind: `top`
    }]
  }
};
var cf = {
  prop: {
    thrustToWeight: hu.maxThrust / (hu.mass * 9.81),
    propVmax: 95,
    spoolRate: 1.6,
    massAdd: 0,
    propRadius: 1.3
  },
  turbo: {
    thrustToWeight: 0.5,
    propVmax: 140,
    spoolRate: 0.9,
    massAdd: 120,
    propRadius: 1.15
  },
  jet: {
    thrustToWeight: 0.55,
    propVmax: 200,
    spoolRate: 0.45,
    massAdd: 250,
    propRadius: 0
  }
};
var lf = {
  hard: {
    radius: 0.3,
    width: 0.14,
    gearKMul: 1.4,
    gearCMul: 0.9,
    rollFriction: 0.02,
    brakeFriction: 0.605,
    crashSpeed: 5,
    cd0Add: 0,
    gripPaved: 1,
    gripGrass: 0.75
  },
  medium: {
    radius: 0.36,
    width: 0.17,
    gearKMul: 1,
    gearCMul: 1,
    rollFriction: 0.03,
    brakeFriction: 0.495,
    crashSpeed: 6,
    cd0Add: 0,
    gripPaved: 1,
    gripGrass: 1
  },
  soft: {
    radius: 0.48,
    width: 0.3,
    gearKMul: 0.65,
    gearCMul: 1.35,
    rollFriction: 0.045,
    brakeFriction: 0.418,
    crashSpeed: 8,
    cd0Add: 0.002,
    gripPaved: 0.85,
    gripGrass: 1
  }
};
function uf(e) {
  let t = sf[e.style];
  let n = cf[t.engine];
  let r = lf[e.wheels];
  let i = {
    ...hu,
    ...t.spec
  };
  i.mass += n.massAdd;
  let a = i.mass / hu.mass;
  i.inertiaPitch = hu.inertiaPitch * a;
  i.inertiaYaw = hu.inertiaYaw * a;
  i.inertiaRoll = hu.inertiaRoll * a;
  i.maxThrust = n.thrustToWeight * i.mass * 9.81;
  i.propVmax = n.propVmax;
  i.spoolRate = n.spoolRate;
  i.gearK = hu.gearK * a * r.gearKMul;
  i.gearC = hu.gearC * a * r.gearCMul;
  i.rollFriction = r.rollFriction;
  i.brakeFriction = r.brakeFriction;
  i.crashSpeed = r.crashSpeed;
  i.cd0 += r.cd0Add;
  i.gripPaved = r.gripPaved;
  i.gripGrass = r.gripGrass;
  return i;
}
function df(e) {
  return sf[e].engine;
}
var ff = e => new G(e[0], e[1], e[2]);
function pf(e) {
  let t = sf[e.style];
  let n = lf[e.wheels].radius;
  let r = t.mains.map(e => ff(e).setY(e[1] - n));
  let i = t.gear === `tricycle` ? ff(t.third).setY(t.third[1] - n) : ff(t.third);
  let a = t.crash.map(e => ({
    p: ff(e.p),
    kind: e.kind
  }));
  let o = cf[t.engine].propRadius;
  if (o > 0) {
    let e = t.engineMount;
    a.push({
      p: new G(e[0], e[1] - o + 0.05, e[2] - 0.05),
      kind: `prop`
    });
  }
  return {
    wheels: r,
    third: i,
    tricycle: t.gear === `tricycle`,
    crash: a
  };
}
function mf(e, t = 0) {
  let n = e.cl0 + e.flapCl * t + e.clSlope * (e.stallAlpha - e.flapStall * t);
  return Math.sqrt(e.mass * 2 * 9.81 / (e.rho * e.wingArea * n));
}
var hf = (e, t) => e.maxThrust * Math.max(0, 1 - t / e.propVmax);
function gf(e) {
  let t = mf(e);
  let n = e.mass * 9.81;
  let r = 0;
  let i = 0;
  for (let a = t; a < 260; a += 0.5) {
    let t = e.rho * 0.5 * a * a;
    let o = n / (t * e.wingArea);
    let s = t * e.wingArea * (e.cd0 + e.inducedK * o * o);
    let c = hf(e, a) - s;
    if (c > 0) {
      r = a;
    }
    i = Math.max(i, c * a / n);
  }
  let a = 0;
  let o = 0;
  let s = t * 1.25;
  let c = e.rollFriction / e.gripGrass;
  for (let t = 0; t < 6000 && a < s; t++) {
    let t = e.rho * 0.5 * a * a;
    let r = t * e.wingArea * e.cl0;
    let i = t * e.wingArea * e.cd0;
    let s = (hf(e, a) - i - c * Math.max(0, n - r)) / e.mass;
    a += s * 0.02;
    o += a * 0.02;
  }
  let l = dt.clamp(e.rollAcc / 12 * 0.6 + (1 - e.mass / 3200) * 0.4, 0, 1);
  let u = dt.clamp(e.crashSpeed / 8 * 0.6 + (1 - (t - 15) / 32) * 0.4, 0, 1);
  return {
    topSpeed: r,
    climb: i,
    takeoffRun: o,
    stall: t,
    handling: l,
    landing: u
  };
}
var _f = `baron.loadout.v1`;
var vf = {
  style: $d.map(e => e.id),
  paint: tf.map(e => e.id),
  wheels: ef.map(e => e.id)
};
function yf(e) {
  let t = {
    ...Qd
  };
  if (!e) {
    return t;
  }
  for (let n of Object.keys(vf)) {
    let r = e[n];
    if (typeof r == `string` && vf[n].includes(r)) {
      t[n] = r;
    }
  }
  return t;
}
function bf(e) {
  let t = e.split(`.`);
  if (t.length < 3) {
    return null;
  }
  let [n, r] = t;
  return yf({
    style: n,
    paint: r,
    wheels: t[t.length - 1]
  });
}
function xf() {
  try {
    let e = new URLSearchParams(location.search).get(`plane`);
    let t = e ? bf(e) : null;
    if (t) {
      return t;
    }
  } catch {}
  try {
    let e = localStorage.getItem(_f);
    if (e) {
      return yf(JSON.parse(e));
    }
  } catch {}
  return {
    ...Qd
  };
}
function Sf(e) {
  try {
    localStorage.setItem(_f, JSON.stringify(e));
  } catch {}
}
function Cf(e) {
  let t = (e, t) => e.find(e => e.id === t)?.name ?? t;
  return `${t($d, e.style)} · ${t(tf, e.paint)} · ${t(ef, e.wheels)} wheels`;
}
var wf = 6120299;
var Tf = 9278363;
var Ef = 8014374;
var Df = 3090982;
var Of = 2829099;
var kf = 10475759;
function Af(e, t, n, r, i) {
  let a = new J(i, e, t);
  a.translate(0, e / 2, 0);
  let o = a.getAttribute(`position`);
  for (let i = 0; i < o.count; i++) {
    if (o.getY(i) > e / 2) {
      o.setZ(i, o.getZ(i) * n / t + r);
    }
  }
  a.computeVertexNormals();
  return a;
}
var jf = (e, t, n, r) => [Z(new Mc(t, t, n, 14), Of, {
  pos: e,
  rot: [0, 0, Math.PI / 2]
}), Z(new Mc(t * 0.45, t * 0.45, n + 0.02, 10), r, {
  pos: e,
  rot: [0, 0, Math.PI / 2]
})];
var Mf = (e, t, n, r, i, a = false) => [Z(new Mc(r, r, 0.03, 20), i.emblemOuter, {
  pos: [e, t, n]
}), Z(new Mc(r * 0.52, r * 0.52, 0.03, 20), i.emblemInner, {
  pos: [e, t + (a ? -0.015 : 0.015), n]
})];
function Nf(e) {
  let t = [Z(new J(1.05, 1.15, 2.4), e.body, {
    pos: [0, 0.05, -1]
  }), Z(Pd(1.05, 1.15, 3.7, 0.3, 0.45, 0.2), e.body, {
    pos: [0, 0.05, 0.2]
  }), Z(new J(1.08, 1.18, 0.3), e.accent, {
    pos: [0, 0.05, 0.6]
  }), Z(new Mc(0.64, 0.6, 0.6, 14), wf, {
    pos: [0, 0.05, -2.45],
    rot: [Math.PI / 2, 0, 0]
  }), Z(new Mc(0.66, 0.66, 0.12, 14), e.accent, {
    pos: [0, 0.05, -2.72],
    rot: [Math.PI / 2, 0, 0]
  }), Z(new J(0.72, 0.08, 0.95), Df, {
    pos: [0, 0.62, 0]
  }), Z(new J(8.6, 0.14, 1.5), e.wing, {
    pos: [0, 1.5, -1]
  }), Z(new J(8, 0.14, 1.4), e.wingUnder, {
    pos: [0, -0.45, -0.55]
  }), Z(new J(0.56, 0.18, 1.56), e.stripe ?? e.accent, {
    pos: [-4.05, 1.5, -1]
  }), Z(new J(0.56, 0.18, 1.56), e.stripe ?? e.accent, {
    pos: [4.05, 1.5, -1]
  }), ...[-2.9, 2.9].flatMap(e => [Z(new J(0.09, 1.85, 0.09), Ef, {
    pos: [e, 0.52, -1.25]
  }), Z(new J(0.09, 1.85, 0.09), Ef, {
    pos: [e, 0.52, -0.45]
  })]), ...[-0.42, 0.42].flatMap(e => [Z(new J(0.07, 0.95, 0.07), Ef, {
    pos: [e, 1, -1.4]
  }), Z(new J(0.07, 0.95, 0.07), Ef, {
    pos: [e, 1, -0.6]
  })]), ...[-3, 3].flatMap(t => [...Mf(t, 1.585, -1, 0.62, e), ...Mf(t, -0.535, -0.55, 0.58, e, true)]), ...[-0.55, 0.55].map(e => Z(new J(0.08, 0.95, 0.08), Ef, {
    pos: [e, -0.78, -0.6],
    rot: [0, 0, e > 0 ? -0.35 : 0.35]
  })), Z(new J(1.84, 0.08, 0.08), Ef, {
    pos: [0, -1, -0.6]
  }), Z(new J(0.06, 0.42, 0.06), Ef, {
    pos: [0, -0.02, 3.78],
    rot: [0.45, 0, 0]
  }), Z(new J(3, 0.08, 0.8), e.wing, {
    pos: [0, 0.32, 3.45]
  }), Z(new J(0.08, 0.85, 0.75), e.accent, {
    pos: [0, 0.75, 3.55]
  })];
  if (e.stripe) {
    t.push(Z(new J(1.09, 0.2, 2.3), e.stripe, {
      pos: [0, -0.15, -1]
    }));
  }
  return {
    body: t,
    cockpit: [Z(new _l(0.25, 1), 7029286, {
      pos: [0, 0.86, 0.08],
      flat: true
    }), Z(new J(0.42, 0.1, 0.12), kf, {
      pos: [0, 0.9, -0.15]
    }), Z(new J(0.16, 0.08, 0.6), 16645104, {
      pos: [0.18, 0.7, 0.42],
      rot: [0.2, 0.3, 0]
    }), Z(new J(0.55, 0.28, 0.04), 12576511, {
      pos: [0, 0.78, -0.55],
      rot: [-0.3, 0, 0]
    })],
    ailL: {
      at: [-3, 1.5, -0.25],
      geo: Z(new J(2.2, 0.08, 0.42), e.accent, {
        pos: [0, 0, 0.21]
      })
    },
    ailR: {
      at: [3, 1.5, -0.25],
      geo: Z(new J(2.2, 0.08, 0.42), e.accent, {
        pos: [0, 0, 0.21]
      })
    },
    flapL: {
      at: [-1.75, -0.45, 0.15],
      geo: Z(new J(2, 0.08, 0.38), e.accent, {
        pos: [0, 0, 0.19]
      })
    },
    flapR: {
      at: [1.75, -0.45, 0.15],
      geo: Z(new J(2, 0.08, 0.38), e.accent, {
        pos: [0, 0, 0.19]
      })
    },
    elev: {
      at: [0, 0.32, 3.85],
      geo: Z(new J(2.9, 0.07, 0.5), e.accent, {
        pos: [0, 0, 0.25]
      })
    },
    rudder: {
      at: [0, 0.72, 3.92],
      geo: Z(new J(0.07, 1.1, 0.5), e.body, {
        pos: [0, 0.05, 0.25]
      })
    }
  };
}
function Pf(e) {
  let t = [Z(new Mc(0.6, 0.68, 1, 14), e.body, {
    pos: [0, 0.05, -3.05],
    rot: [Math.PI / 2, 0, 0]
  }), Z(new Mc(0.62, 0.62, 0.12, 14), e.accent, {
    pos: [0, 0.05, -3.5],
    rot: [Math.PI / 2, 0, 0]
  }), ...[-1, 1].map(e => Z(new J(0.16, 0.16, 0.5), wf, {
    pos: [e * 0.66, -0.1, -2.65],
    rot: [0.3, 0, 0]
  })), Z(new J(1.3, 1.3, 2.6), e.body, {
    pos: [0, 0, -1.3]
  }), Z(Pd(1.3, 1.3, 4.3, 0.35, 0.5, 0.25), e.body, {
    pos: [0, 0, 0]
  }), Z(new J(1.33, 1.33, 0.3), e.accent, {
    pos: [0, 0, 0.9]
  }), Z(new J(9.8, 0.18, 1.8), e.wing, {
    pos: [0, -0.42, -0.2]
  }), Z(new J(9.6, 0.04, 1.7), e.wingUnder, {
    pos: [0, -0.53, -0.2]
  }), Z(new J(0.56, 0.24, 1.86), e.stripe ?? e.accent, {
    pos: [-4.65, -0.42, -0.2]
  }), Z(new J(0.56, 0.24, 1.86), e.stripe ?? e.accent, {
    pos: [4.65, -0.42, -0.2]
  }), ...[-3.1, 3.1].flatMap(t => Mf(t, -0.315, -0.3, 0.55, e)), Z(new J(3.6, 0.08, 0.9), e.wing, {
    pos: [0, 0.3, 3.7]
  }), Z(Af(1.4, 1.5, 0.8, 0.55, 0.1), e.accent, {
    pos: [0, 0.35, 3.6],
    flat: true
  }), ...[-1.35, 1.35].map(e => Z(new J(0.1, 0.55, 0.1), wf, {
    pos: [e, -0.78, 0.35]
  })), Z(new J(0.1, 0.45, 0.1), wf, {
    pos: [0, -0.85, -2.5]
  })];
  if (e.stripe) {
    t.push(Z(new J(1.33, 0.22, 2.5), e.stripe, {
      pos: [0, -0.1, -1.3]
    }));
  }
  return {
    body: t,
    cockpit: [Z(new _l(0.62, 1), kf, {
      pos: [0, 0.55, -0.7],
      scale: [0.85, 0.72, 1.55],
      flat: true
    }), Z(new _l(0.22, 1), 7029286, {
      pos: [0, 0.75, -0.55],
      flat: true
    })],
    ailL: {
      at: [-3.6, -0.42, 0.7],
      geo: Z(new J(2.4, 0.09, 0.42), e.accent, {
        pos: [0, 0, 0.21]
      })
    },
    ailR: {
      at: [3.6, -0.42, 0.7],
      geo: Z(new J(2.4, 0.09, 0.42), e.accent, {
        pos: [0, 0, 0.21]
      })
    },
    flapL: {
      at: [-1.6, -0.42, 0.7],
      geo: Z(new J(1.6, 0.09, 0.42), e.accent, {
        pos: [0, 0, 0.21]
      })
    },
    flapR: {
      at: [1.6, -0.42, 0.7],
      geo: Z(new J(1.6, 0.09, 0.42), e.accent, {
        pos: [0, 0, 0.21]
      })
    },
    elev: {
      at: [0, 0.3, 4.15],
      geo: Z(new J(3.5, 0.07, 0.45), e.accent, {
        pos: [0, 0, 0.22]
      })
    },
    rudder: {
      at: [0, 1.05, 4.6],
      rot: [0.37, 0, 0],
      geo: Z(new J(0.09, 1.2, 0.4), e.body, {
        pos: [0, 0, 0.2]
      })
    }
  };
}
function Ff(e) {
  let t = 0.45;
  let n = n => [Z(new J(4.2, 0.14, 2.2), e.wing, {
    pos: [n * 2.39, -0.15, 1.11],
    rot: [0, -n * t, 0]
  }), Z(new J(0.45, 0.2, 1.4), e.stripe ?? e.accent, {
    pos: [n * 4.15, -0.15, 2],
    rot: [0, -n * t, 0]
  }), ...Mf(n * 2.5, -0.07, 1.2, 0.5, e), Z(new J(1.7, 0.08, 1), e.wing, {
    pos: [n * 1.1, 0.1, 3.85],
    rot: [0, -n * 0.4, 0]
  })];
  let r = [Z(new Nc(0.55, 1.6, 12), e.body, {
    pos: [0, 0, -4.8],
    rot: [-Math.PI / 2, 0, 0]
  }), Z(new J(1.1, 1.1, 4), e.body, {
    pos: [0, 0, -2]
  }), Z(Pd(1.1, 1.1, 4.2, 0.95, 0.95, 0.05), e.body, {
    pos: [0, 0, 0]
  }), Z(new J(1.13, 1.13, 0.25), e.accent, {
    pos: [0, 0, -3.6]
  }), ...[-1, 1].flatMap(t => [Z(new J(0.45, 0.7, 1.6), e.body, {
    pos: [t * 0.75, -0.05, -1.4]
  }), Z(new J(0.36, 0.56, 0.05), Df, {
    pos: [t * 0.78, -0.05, -2.21]
  })]), ...n(-1), ...n(1), Z(Af(1.9, 2.2, 0.9, 1.2, 0.12), e.accent, {
    pos: [0, 0.4, 3.2],
    flat: true
  }), Z(new Mc(0.5, 0.42, 0.7, 12), wf, {
    pos: [0, 0.05, 4.4],
    rot: [Math.PI / 2, 0, 0]
  }), Z(new Mc(0.33, 0.33, 0.05, 12), Df, {
    pos: [0, 0.05, 4.76],
    rot: [Math.PI / 2, 0, 0]
  }), ...[-1.3, 1.3].map(e => Z(new J(0.1, 0.7, 0.1), wf, {
    pos: [e, -0.55, 0.7]
  })), Z(new J(0.1, 0.45, 0.1), wf, {
    pos: [0, -0.7, -2.9]
  })];
  if (e.stripe) {
    r.push(Z(new J(1.16, 0.2, 3.9), e.stripe, {
      pos: [0, -0.1, -2]
    }));
  }
  return {
    body: r,
    cockpit: [Z(new _l(0.55, 1), kf, {
      pos: [0, 0.55, -2.4],
      scale: [0.85, 0.7, 2],
      flat: true
    }), Z(new _l(0.2, 1), 7029286, {
      pos: [0, 0.72, -2.3],
      flat: true
    })],
    ailL: {
      at: [-3.1, -0.15, 1.95],
      rot: [0, t, 0],
      geo: Z(new J(1.8, 0.08, 0.4), e.accent, {
        pos: [0, 0, 0.2]
      })
    },
    ailR: {
      at: [3.1, -0.15, 1.95],
      rot: [0, -0.45, 0],
      geo: Z(new J(1.8, 0.08, 0.4), e.accent, {
        pos: [0, 0, 0.2]
      })
    },
    flapL: {
      at: [-1.68, -0.15, 1.43],
      rot: [0, t, 0],
      geo: Z(new J(1, 0.08, 0.45), e.accent, {
        pos: [0, 0, 0.225]
      })
    },
    flapR: {
      at: [1.68, -0.15, 1.43],
      rot: [0, -0.45, 0],
      geo: Z(new J(1, 0.08, 0.45), e.accent, {
        pos: [0, 0, 0.225]
      })
    },
    elev: {
      at: [0, 0.1, 4.3],
      geo: Z(new J(3.4, 0.07, 0.4), e.accent, {
        pos: [0, 0, 0.2]
      })
    },
    rudder: {
      at: [0, 1.25, 4.55],
      rot: [0.52, 0, 0],
      geo: Z(new J(0.1, 1.3, 0.4), e.body, {
        pos: [0, 0, 0.2]
      })
    }
  };
}
var If = {
  biplane: Nf,
  turboprop: Pf,
  jet: Ff
};
var Lf = class {
  loadout;
  root = new fs();
  prop = new fs();
  livery;
  disc = null;
  flames = [];
  flameMat = null;
  ailL = new fs();
  ailR = new fs();
  flapL = new fs();
  flapR = new fs();
  elev = new fs();
  rudder = new fs();
  hasProp;
  cockpit;
  dash = new fs();
  dashMat = null;
  constructor(e, t, n) {
    this.loadout = e;
    let r = of(e.paint);
    this.livery = r;
    let i = sf[e.style];
    let a = lf[e.wheels];
    let o = If[e.style](r);
    let s = o.body;
    for (let e of i.mains) {
      s.push(...jf(e, a.radius, a.width, r.accent));
    }
    if (i.gear === `tricycle`) {
      s.push(...jf(i.third, a.radius * 0.85, a.width * 0.9, r.accent));
    }
    this.root.add(Fd(Nd(s), t, n));
    this.cockpit = Fd(Nd(o.cockpit), t, n);
    this.root.add(this.cockpit);
    this.buildDash(i.eye, r, t);
    let c = i.engine;
    let l = i.engineMount;
    let u = cf[c].propRadius;
    this.hasProp = u > 0;
    if (c === `jet`) {
      this.flameMat = new dr({
        color: 16752704,
        transparent: true,
        opacity: 0.85,
        depthWrite: false
      });
      let e = new dr({
        color: 16773808,
        transparent: true,
        opacity: 0.95,
        depthWrite: false
      });
      let t = new Nc(0.45, 2.2, 10).rotateX(Math.PI / 2).translate(0, 0, 1.1);
      let n = new Nc(0.25, 1.4, 8).rotateX(Math.PI / 2).translate(0, 0, 0.7);
      let r = new fs();
      r.position.set(...l);
      r.add(new Lr(t, this.flameMat), new Lr(n, e));
      this.flames.push(r);
      this.root.add(r);
    } else {
      this.prop.position.set(...l);
      let e = c === `turbo` ? [Z(new J(0.18, u * 2, 0.06), Tf, {
        rot: [0, 0.3, 0]
      }), Z(new J(u * 2, 0.18, 0.06), Tf, {
        rot: [0.3, 0, 0]
      }), Z(new Nc(0.3, 0.7, 12), r.accent, {
        pos: [0, 0, -0.25],
        rot: [-Math.PI / 2, 0, 0]
      })] : [Z(new J(0.2, u * 2, 0.07), Ef, {
        rot: [0, 0.25, 0]
      }), Z(new Nc(0.24, 0.45, 10), r.accent, {
        pos: [0, 0, -0.15],
        rot: [-Math.PI / 2, 0, 0]
      })];
      this.prop.add(Fd(Nd(e), t, n));
      this.root.add(this.prop);
      this.disc = new Lr(new jc(u + 0.02, 24), new dr({
        color: 15921126,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        side: 2
      }));
      this.disc.position.set(l[0], l[1], l[2] - 0.03);
      this.root.add(this.disc);
    }
    let d = (e, r) => {
      let i = new fs();
      i.position.set(...e.at);
      if (e.rot) {
        i.rotation.set(...e.rot);
      }
      r.add(Fd(Nd([e.geo]), t, n));
      i.add(r);
      this.root.add(i);
    };
    d(o.ailL, this.ailL);
    d(o.ailR, this.ailR);
    d(o.flapL, this.flapL);
    d(o.flapR, this.flapR);
    d(o.elev, this.elev);
    d(o.rudder, this.rudder);
  }
  cockpitView = false;
  setCockpitView(e) {
    if (e !== this.cockpitView) {
      this.cockpitView = e;
      this.cockpit.visible = !e;
      this.dash.visible = e;
      this.root.traverse(t => {
        if (t.name === `outline`) {
          t.visible = !e;
        }
      });
    }
  }
  buildDash(e, t, n) {
    let r = 0.6;
    let i = [Z(new J(3.6, r, 0.08), 3878440, {}), Z(new J(3.64, 0.07, 0.14), t.body, {
      pos: [0, r / 2, 0.01]
    })];
    let a = new fs();
    a.position.set(e[0], e[1] - 0.6, e[2] - 0.8);
    a.rotation.x = -0.2;
    this.dashMat = n.clone();
    this.dashMat.depthFunc = 1;
    let o = new Lr(Nd(i), this.dashMat);
    o.renderOrder = 10;
    a.add(o);
    this.dash.add(a);
    this.dash.visible = false;
    this.root.add(this.dash);
  }
  animate(e, t, n, r, i, a = 0) {
    if (this.hasProp) {
      this.prop.rotation.z += i * 95 * e + (i > 0.02 ? e * 6 : 0);
      this.disc.material.opacity = dt.clamp((i - 0.25) * 0.5, 0, 0.3);
      this.prop.visible = i < 0.75 || Math.floor(performance.now() / 30) % 3 != 0;
    }
    if (this.flames.length) {
      let e = 0.85 + Math.sin(performance.now() * 0.05) * 0.15 * Math.sin(performance.now() * 0.031);
      let t = Math.max(0.05, (i - 0.08) * 1.25) * e;
      for (let e of this.flames) {
        e.visible = i > 0.1;
        e.scale.set(0.6 + i * 0.4, 0.6 + i * 0.4, t);
      }
      this.flameMat.opacity = 0.5 + i * 0.4;
    }
    this.ailL.rotation.x = n * 0.4;
    this.ailR.rotation.x = -n * 0.4;
    this.flapL.rotation.x = this.flapR.rotation.x = a * pu;
    this.elev.rotation.x = -t * 0.4;
    this.rudder.rotation.y = r * 0.45;
  }
  dispose() {
    let e = new Set();
    this.root.traverse(t => {
      if (t instanceof Lr) {
        if (t.name !== `outline`) {
          t.geometry.dispose();
        }
        if (t.material instanceof dr) {
          e.add(t.material);
        }
      }
    });
    for (let t of e) {
      t.dispose();
    }
    this.dashMat?.dispose();
  }
};
var Rf = class {
  loadout;
  s = new _u();
  prevPos = new G();
  prevQuat = new Bt();
  input = gu();
  visual;
  gear;
  spec;
  downed = false;
  wrecked = false;
  downedSide = 1;
  smokeT = 0;
  dustT = 0;
  constructor(e, t, n, r = uf(e)) {
    this.loadout = e;
    this.spec = r;
    this.gear = pf(e);
    this.visual = new Lf(e, t, n);
  }
  get livery() {
    return this.visual.livery;
  }
  get alive() {
    return !this.downed && !this.wrecked;
  }
  forward(e) {
    return e.set(0, 0, -1).applyQuaternion(this.s.quat);
  }
  up(e) {
    return e.set(0, 1, 0).applyQuaternion(this.s.quat);
  }
  savePrev() {
    this.prevPos.copy(this.s.pos);
    this.prevQuat.copy(this.s.quat);
  }
  teleport() {
    this.savePrev();
  }
  syncVisual(e, t) {
    let n = this.visual.root;
    n.position.lerpVectors(this.prevPos, this.s.pos, e);
    n.quaternion.slerpQuaternions(this.prevQuat, this.s.quat, e);
    this.visual.animate(t, this.input.pitch, this.input.roll, this.input.yaw, this.s.rpm, this.s.flaps);
  }
  get integrity() {
    let e = this.s.health;
    return Math.min(e.engine, e.wings, e.tail, e.pilot);
  }
};
var zf = new G();
var Bf = new G();
function Vf(e) {
  zf.set(1, 0, 0).applyQuaternion(e.quat);
  Bf.set(0, 1, 0).applyQuaternion(e.quat);
  return Math.atan2(zf.y, Bf.y);
}
var Hf = 120;
var Uf = 3600;
var Wf = Math.PI * 55 / 180;
var Gf = `
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
var Kf = `
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
function qf(e = 1) {
  let t = new Fc();
  t.moveTo(0, 3.2);
  t.lineTo(7, -3.6);
  t.lineTo(7, -6.4);
  t.lineTo(0, 0.2);
  t.lineTo(-7, -6.4);
  t.lineTo(-7, -3.6);
  t.closePath();
  let n = new yl(t);
  n.translate(0, 1.6, 0);
  n.scale(e, e, 1);
  n.translate(0, -1.6, 0);
  n.rotateX(Math.PI / 2);
  n.rotateX(-Wf);
  return n;
}
function Jf(e, t) {
  return new qr({
    vertexShader: Gf,
    fragmentShader: Kf,
    uniforms: {
      uProgress: {
        value: 0
      },
      uAhead: {
        value: Uf
      },
      uTime: {
        value: 0
      },
      uOpacity: {
        value: t
      },
      uColor: {
        value: new q(e)
      }
    },
    transparent: true,
    depthWrite: false,
    side: 2
  });
}
var Yf = class {
  mesh = new fs();
  mats = [];
  geos = [];
  meshes = [];
  constructor(e) {
    let t = e.pts;
    let n = [];
    for (let t = 60; t < e.sAim + 100; t += Hf) {
      n.push(t);
    }
    let r = n.length;
    let i = new Float32Array(r);
    for (let [e, t, n, i] of [[1.14, 2825498, 0.3, 4], [1, 16777215, 0.8, 5]]) {
      let a = qf(e);
      let o = Jf(t, n);
      let s = new ec(a, o, r);
      s.frustumCulled = false;
      s.renderOrder = i;
      this.geos.push(a);
      this.mats.push(o);
      this.meshes.push(s);
      this.mesh.add(s);
    }
    let a = new K();
    let o = new G();
    let s = new G();
    let c = new G();
    let l = new G();
    let u = 0;
    for (let e = 0; e < r; e++) {
      let r = n[e];
      while (u < t.length - 2 && t[u + 1].s < r) {
        u++;
      }
      let d = t[u];
      let f = t[u + 1];
      let p = (r - d.s) / (f.s - d.s || 1);
      l.set(d.x + (f.x - d.x) * p, d.y + (f.y - d.y) * p, d.z + (f.z - d.z) * p);
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
      e.setAttribute(`aS`, new Ks(i, 1));
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
var Xf = new wi(-1, 1, 1, -1, 0, 1);
var Zf = new class extends Tr {
  constructor() {
    super();
    this.setAttribute(`position`, new _r([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3));
    this.setAttribute(`uv`, new _r([0, 2, 0, 0, 2, 0], 2));
  }
}();
var Qf = class {
  constructor(e) {
    this._mesh = new Lr(Zf, e);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(e) {
    e.render(this._mesh, Xf);
  }
  get material() {
    return this._mesh.material;
  }
  set material(e) {
    this._mesh.material = e;
  }
};
var $f = {
  name: `FXAAShader`,
  uniforms: {
    tDiffuse: {
      value: null
    },
    resolution: {
      value: new H(1 / 1024, 1 / 512)
    }
  },
  vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
  fragmentShader: `

		// FXAA algorithm from NVIDIA, C# implementation by Jasper Flick, GLSL port by Dave Hoskins
		// http://developer.download.nvidia.com/assets/gamedev/files/sdk/11/FXAA_WhitePaper.pdf
		// https://catlikecoding.com/unity/tutorials/advanced-rendering/fxaa/

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`
};
var ep = `
  #include <packing>
  uniform sampler2D tColor;
  uniform sampler2D tDepth;
  uniform vec2 texel;
  uniform float cameraNear;
  uniform float cameraFar;
  uniform vec3 inkColor;
  uniform float strength;
  uniform float threshLo;
  uniform float threshHi;
  uniform float fadeStart;
  uniform float fadeEnd;
  uniform float saturation;
  varying vec2 vUv;

  float invZ(vec2 uv) {
    float d = texture2D(tDepth, uv).x;
    return 1.0 / max(-perspectiveDepthToViewZ(d, cameraNear, cameraFar), 0.001);
  }

  vec3 toSRGB(vec3 c) {
    return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
  }

  void main() {
    vec3 c = texture2D(tColor, vUv).rgb;
    float ic = invZ(vUv);
    float s = 0.0;
    s += invZ(vUv + texel * vec2(-1.0, -1.0));
    s += invZ(vUv + texel * vec2( 0.0, -1.0));
    s += invZ(vUv + texel * vec2( 1.0, -1.0));
    s += invZ(vUv + texel * vec2(-1.0,  0.0));
    s += invZ(vUv + texel * vec2( 1.0,  0.0));
    s += invZ(vUv + texel * vec2(-1.0,  1.0));
    s += invZ(vUv + texel * vec2( 0.0,  1.0));
    s += invZ(vUv + texel * vec2( 1.0,  1.0));
    float lap = abs(s - 8.0 * ic) / ic;
    float e = smoothstep(threshLo, threshHi, lap);
    float z = 1.0 / ic;
    e *= 1.0 - smoothstep(fadeStart, fadeEnd, z);
    vec3 col = mix(c, inkColor, e * strength);
    // light colour grade: saturation boost
    float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
    col = max(mix(vec3(l), col, saturation), 0.0);
    gl_FragColor = vec4(toSRGB(col), 1.0);
  }
`;
var tp = class {
  rt;
  rt2;
  edge;
  fxaa;
  edgeMat;
  fxaaMat;
  constructor() {
    this.rt = new Lt(1, 1, {
      type: g
    });
    this.rt.depthTexture = new Qi(1, 1);
    this.rt.depthTexture.type = m;
    this.rt2 = new Lt(1, 1, {
      type: l
    });
    this.edgeMat = new qr({
      uniforms: {
        tColor: {
          value: this.rt.texture
        },
        tDepth: {
          value: this.rt.depthTexture
        },
        texel: {
          value: new H()
        },
        cameraNear: {
          value: 0.5
        },
        cameraFar: {
          value: 5000
        },
        inkColor: {
          value: new q(2825498)
        },
        strength: {
          value: 0.85
        },
        threshLo: {
          value: 0.035
        },
        threshHi: {
          value: 0.12
        },
        fadeStart: {
          value: 900
        },
        fadeEnd: {
          value: 3200
        },
        saturation: {
          value: 1
        }
      },
      vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
      fragmentShader: ep,
      depthTest: false,
      depthWrite: false
    });
    this.edge = new Qf(this.edgeMat);
    this.fxaaMat = new qr({
      uniforms: Wr.clone($f.uniforms),
      vertexShader: $f.vertexShader,
      fragmentShader: $f.fragmentShader,
      depthTest: false,
      depthWrite: false
    });
    this.fxaaMat.uniforms.tDiffuse.value = this.rt2.texture;
    this.fxaa = new Qf(this.fxaaMat);
  }
  setInk(e) {
    this.edgeMat.uniforms.inkColor.value.setHex(e);
  }
  setFade(e, t) {
    this.edgeMat.uniforms.fadeStart.value = e;
    this.edgeMat.uniforms.fadeEnd.value = t;
  }
  setSize(e, t) {
    e = Math.max(1, Math.floor(e));
    t = Math.max(1, Math.floor(t));
    this.rt.setSize(e, t);
    this.rt2.setSize(e, t);
    this.edgeMat.uniforms.texel.value.set(1 / e, 1 / t);
    this.fxaaMat.uniforms.resolution.value.set(1 / e, 1 / t);
  }
  render(e, t, n) {
    this.edgeMat.uniforms.cameraNear.value = n.near;
    this.edgeMat.uniforms.cameraFar.value = n.far;
    e.setRenderTarget(this.rt);
    e.clear();
    e.render(t, n);
    e.setRenderTarget(this.rt2);
    this.edge.render(e);
    e.setRenderTarget(null);
    this.fxaa.render(e);
  }
  dispose() {
    this.rt.dispose();
    this.rt2.dispose();
    this.edge.dispose();
    this.fxaa.dispose();
  }
};
var np = [{
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
  ink: 3023396
}, {
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
  ink: 2825498
}, {
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
  ink: 3810080
}];
function rp(e) {
  let t = dt.degToRad(e.elevation);
  let n = dt.degToRad(e.azimuth);
  return new G(Math.cos(t) * Math.sin(n), Math.sin(t), -Math.cos(t) * Math.cos(n)).normalize();
}
var ip = class {
  mesh;
  mat;
  constructor() {
    this.mat = new qr({
      uniforms: {
        topColor: {
          value: new q()
        },
        horizonColor: {
          value: new q()
        },
        bottomColor: {
          value: new q()
        },
        sunColor: {
          value: new q()
        },
        haloColor: {
          value: new q()
        },
        sunDir: {
          value: new G(0, 1, 0)
        }
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
      fog: false
    });
    this.mesh = new Lr(new xl(1, 32, 16), this.mat);
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
    t.sunDir.value.copy(rp(e));
  }
  follow(e, t) {
    this.mesh.position.copy(e.position);
    this.mesh.scale.setScalar(t);
  }
};
var ap = class {
  mesh;
  mat;
  constructor() {
    this.mat = new qr({
      uniforms: Wr.merge([X.fog, {
        waterColor: {
          value: new q(3121104)
        },
        lineColor: {
          value: new q(16055295)
        },
        time: {
          value: 0
        },
        opacity: {
          value: 0.55
        }
      }]),
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
      fog: true
    });
    let e = new pi(1, 1, 1, 1);
    e.rotateX(-Math.PI / 2);
    this.mesh = new Lr(e, this.mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 1;
    this.mesh.name = `water`;
  }
  update(e, t, n) {
    this.mesh.position.set(Math.round(e.position.x), 0, Math.round(e.position.z));
    this.mesh.scale.set(n, 1, n);
    this.mat.uniforms.time.value = t;
  }
};
var op = [{
  id: `style`,
  label: `Plane`
}, {
  id: `paint`,
  label: `Paint`
}, {
  id: `wheels`,
  label: `Wheels`
}];
var sp = e => `#${e.toString(16).padStart(6, `0`)}`;
var cp = {
  style: $d,
  paint: tf.map(e => ({
    id: e.id,
    name: e.name,
    swatch: `linear-gradient(135deg, ${sp(e.body)} 0 62%, ${sp(e.accent)} 62% 100%)`
  })),
  wheels: ef
};
var lp = e => Math.max(0, Math.min(1, e));
var up = [{
  key: `topSpeed`,
  label: `Top speed`,
  bar: e => lp(e.topSpeed * 3.6 / 500),
  text: e => `${Math.round(e.topSpeed * 3.6)} km/h`,
  delta: e => Math.round(e.topSpeed * 3.6),
  better: 1
}, {
  key: `climb`,
  label: `Climb`,
  bar: e => lp(e.climb / 20),
  text: e => `${e.climb.toFixed(1)} m/s`,
  delta: e => Math.round(e.climb * 10) / 10,
  better: 1
}, {
  key: `handling`,
  label: `Handling`,
  bar: e => e.handling,
  text: e => `${Math.round(e.handling * 10)}/10`,
  delta: e => Math.round(e.handling * 10),
  better: 1
}, {
  key: `takeoffRun`,
  label: `Short takeoff`,
  bar: e => lp(1 - e.takeoffRun / 650),
  text: e => `${Math.round(e.takeoffRun / 10) * 10} m run`,
  delta: e => Math.round(e.takeoffRun / 10) * 10,
  better: -1
}, {
  key: `landing`,
  label: `Easy landing`,
  bar: e => e.landing,
  text: e => `stall ${Math.round(e.stall * 3.6)} km/h`,
  delta: e => Math.round(e.landing * 10),
  better: 1
}];
var dp = e => document.getElementById(e);
var fp = class {
  loadout;
  onChange;
  onClick;
  active;
  cat = 0;
  stats;
  bars = [];
  constructor(e, t, n, r) {
    this.loadout = e;
    this.onChange = t;
    this.onClick = n;
    this.active = r;
    this.stats = gf(uf(e));
    let i = dp(`hangar-tabs`);
    op.forEach((e, t) => {
      let n = document.createElement(`button`);
      n.textContent = e.label;
      n.addEventListener(`click`, () => {
        this.onClick();
        this.setCat(t);
      });
      i.append(n);
    });
    let a = dp(`hangar-stats`);
    for (let e of up) {
      let t = document.createElement(`div`);
      t.className = `stat`;
      t.innerHTML = `<span class="stat-label">${e.label}</span><span class="stat-bar"><i></i></span><span class="stat-val"></span><span class="stat-delta"></span>`;
      a.append(t);
      this.bars.push({
        fill: t.querySelector(`i`),
        val: t.querySelector(`.stat-val`),
        delta: t.querySelector(`.stat-delta`),
        timer: 0
      });
    }
    window.addEventListener(`keydown`, e => {
      if (!this.active() || e.target instanceof HTMLInputElement || e.repeat) {
        return;
      }
      let t = e.code;
      if (t === `ArrowLeft` || t === `KeyA`) {
        this.nav(-1, 0);
      } else if (t === `ArrowRight` || t === `KeyD`) {
        this.nav(1, 0);
      } else if (t === `ArrowUp` || t === `KeyW`) {
        this.nav(0, -1);
      } else if (t === `ArrowDown` || t === `KeyS`) {
        this.nav(0, 1);
      }
    });
    this.setCat(0);
    this.refreshStats(false);
  }
  nav(e, t) {
    if (e) {
      this.onClick();
      this.setCat((this.cat + e + op.length) % op.length);
    }
    if (t) {
      let e = op[this.cat].id;
      let n = cp[e];
      let r = n.findIndex(t => t.id === this.loadout[e]);
      this.choose(e, n[(r + t + n.length) % n.length].id);
    }
  }
  setCat(e) {
    this.cat = e;
    dp(`hangar-tabs`).querySelectorAll(`button`).forEach((t, n) => t.classList.toggle(`on`, n === e));
    this.renderCards();
  }
  renderCards() {
    let e = op[this.cat].id;
    let t = dp(`hangar-cards`);
    t.className = e === `paint` ? `cards swatches` : `cards`;
    t.innerHTML = ``;
    for (let n of cp[e]) {
      let r = document.createElement(`button`);
      r.className = `card`;
      r.classList.toggle(`on`, this.loadout[e] === n.id);
      if (n.swatch) {
        r.innerHTML = `<span class="swatch"></span><span class="card-name"></span>`;
        r.querySelector(`.swatch`).style.background = n.swatch;
      } else {
        r.innerHTML = `<span class="card-icon"></span><span class="card-text"><span class="card-name"></span><span class="card-trait"></span></span>`;
        r.querySelector(`.card-icon`).textContent = n.icon ?? ``;
        r.querySelector(`.card-trait`).textContent = n.trait ?? ``;
      }
      r.querySelector(`.card-name`).textContent = n.name;
      r.title = n.trait ?? n.name;
      r.addEventListener(`click`, () => this.choose(e, n.id));
      t.append(r);
    }
    dp(`hangar-name`).textContent = Cf(this.loadout);
  }
  choose(e, t) {
    if (this.loadout[e] !== t) {
      this.onClick();
      this.loadout[e] = t;
      Sf(this.loadout);
      this.renderCards();
      this.refreshStats(true);
      this.onChange(this.loadout);
    }
  }
  refreshStats(e) {
    let t = this.stats;
    let n = gf(uf(this.loadout));
    this.stats = n;
    up.forEach((r, i) => {
      let a = this.bars[i];
      a.fill.style.width = `${Math.round(r.bar(n) * 100)}%`;
      a.val.textContent = r.text(n);
      let o = r.delta(n) - r.delta(t);
      if (e && Math.abs(o) > 0.000001) {
        let e = o * r.better > 0;
        a.delta.textContent = `${o > 0 ? `+` : `−`}${Math.abs(Math.round(o * 10) / 10)}`;
        a.delta.className = `stat-delta show ${e ? `up` : `down`}`;
        clearTimeout(a.timer);
        a.timer = window.setTimeout(() => a.delta.className = `stat-delta`, 1600);
      }
    });
  }
};
var pp = `#2b1d1a`;
var mp = `"Baloo 2", "Trebuchet MS", sans-serif`;
var hp = `#232427`;
var gp = `#141416`;
var _p = `#f4f4f0`;
var vp = `#6fb6e6`;
var yp = `#4f9fd8`;
var bp = `#a87a55`;
var xp = `#8c6040`;
var Sp = `#f5c51b`;
var Cp = Math.PI * 2;
var wp = Math.PI / 180;
function Tp(e) {
  let t = 3.6;
  let n = mf(e, 1) * t;
  let r = mf(e) * t;
  let i = e.flapSpeed * t;
  let a = gf(e).topSpeed * t;
  let o = a * 0.92;
  let s = a * 1.12;
  let c = 20;
  for (let e of [20, 40, 50, 100]) {
    c = e;
    if (s * 1.12 / e <= 7) {
      break;
    }
  }
  return {
    max: Math.ceil(s * 1.08 / c) * c,
    step: c,
    white: [n, i],
    green: [r, o],
    yellow: [o, s],
    vne: s
  };
}
function Ep(e, t) {
  let n = Math.min(Math.max(e, 0), t * 1.02) / t;
  return -Math.PI / 2 + n * 330 * wp;
}
function Dp(e) {
  let t = e => -Math.PI / 2 + e * Cp;
  return {
    hundreds: t(e / 1000),
    thousands: t(e / 10000)
  };
}
function Op(e) {
  let t = document.createElement(`canvas`);
  t.width = t.height = e;
  return [t, t.getContext(`2d`)];
}
function kp(e, t) {
  e.fillStyle = pp;
  e.beginPath();
  e.arc(3, 4, t, 0, Cp);
  e.fill();
  let n = e.createLinearGradient(0, -t, 0, t);
  n.addColorStop(0, `#4a4b50`);
  n.addColorStop(0.5, `#1b1c1f`);
  n.addColorStop(1, `#3a3b40`);
  e.fillStyle = n;
  e.beginPath();
  e.arc(0, 0, t, 0, Cp);
  e.fill();
  e.lineWidth = 3;
  e.strokeStyle = pp;
  e.stroke();
}
function Ap(e, t) {
  let n = e.createRadialGradient(-t * 0.2, -t * 0.3, t * 0.1, 0, 0, t);
  n.addColorStop(0, `#3b3c41`);
  n.addColorStop(0.7, hp);
  n.addColorStop(1, gp);
  e.fillStyle = n;
  e.beginPath();
  e.arc(0, 0, t, 0, Cp);
  e.fill();
}
function jp(e, t) {
  e.save();
  e.beginPath();
  e.arc(0, 0, t, 0, Cp);
  e.clip();
  let n = e.createLinearGradient(-t, -t, t * 0.4, t * 0.4);
  n.addColorStop(0, `rgba(255,255,255,0.16)`);
  n.addColorStop(0.45, `rgba(255,255,255,0.03)`);
  n.addColorStop(0.46, `rgba(255,255,255,0)`);
  e.fillStyle = n;
  e.fillRect(-t, -t, t * 2, t * 2);
  e.restore();
}
function Mp(e, t, n, r, i, a = _p) {
  e.strokeStyle = a;
  e.lineWidth = i;
  e.beginPath();
  e.moveTo(Math.cos(t) * n, Math.sin(t) * n);
  e.lineTo(Math.cos(t) * r, Math.sin(t) * r);
  e.stroke();
}
function Np(e, t, n, r, i) {
  e.save();
  e.rotate(t);
  e.fillStyle = _p;
  e.strokeStyle = `rgba(0,0,0,0.5)`;
  e.lineWidth = 1;
  e.beginPath();
  e.moveTo(n, 0);
  e.lineTo(n * 0.15, -r);
  e.lineTo(-i, -r * 0.8);
  e.lineTo(-i, r * 0.8);
  e.lineTo(n * 0.15, r);
  e.closePath();
  e.fill();
  e.stroke();
  e.restore();
}
function Pp(e, t) {
  e.fillStyle = `#111`;
  e.beginPath();
  e.arc(0, 0, t, 0, Cp);
  e.fill();
  e.fillStyle = `#555`;
  e.beginPath();
  e.arc(-t * 0.25, -t * 0.25, t * 0.35, 0, Cp);
  e.fill();
}
var Fp = class {
  asiFace = null;
  altFace = null;
  faceKey = ``;
  scale = null;
  scaleSpec = null;
  draw(e, t, n, r, i) {
    if (i.spec !== this.scaleSpec) {
      this.scale = Tp(i.spec);
      this.scaleSpec = i.spec;
      this.faceKey = ``;
    }
    let a = Math.ceil(r * 152);
    let o = `${a}:${this.scale.max}`;
    if (o !== this.faceKey) {
      this.asiFace = this.buildAsiFace(a, r, this.scale);
      this.altFace = this.buildAltFace(a, r);
      this.faceKey = o;
    }
    e.save();
    e.translate(t, n);
    e.fillStyle = pp;
    Ip(e, 4, 4, 484, 168, 18);
    e.fill();
    let s = e.createLinearGradient(0, 0, 0, 168);
    s.addColorStop(0, `#8d9096`);
    s.addColorStop(1, `#6c6f75`);
    e.fillStyle = s;
    Ip(e, 0, 0, 484, 168, 18);
    e.fill();
    e.lineWidth = 3;
    e.strokeStyle = pp;
    e.stroke();
    e.fillStyle = `#5a5d63`;
    for (let [t, n] of [[10, 10], [474, 10], [10, 158], [474, 158]]) {
      e.beginPath();
      e.arc(t, n, 3, 0, Cp);
      e.fill();
    }
    let c = [84, 242, 400];
    let l = a / r / 2;
    e.save();
    e.translate(c[0], 84);
    e.drawImage(this.asiFace, -l, -l, a / r, a / r);
    Np(e, Ep(i.airspeed * 3.6, this.scale.max), 54.72, 3.2, 14.4);
    Pp(e, 7.2);
    jp(e, 63.36);
    e.restore();
    e.save();
    e.translate(c[1], 84);
    this.drawAttitude(e, 72, i.pitch, i.bank);
    e.restore();
    e.save();
    e.translate(c[2], 84);
    e.drawImage(this.altFace, -l, -l, a / r, a / r);
    let u = Dp(Math.max(i.altitude, 0));
    if (i.altitude < 3000) {
      this.drawLowAltFlag(e, 72);
    }
    e.save();
    e.rotate(u.thousands);
    e.fillStyle = _p;
    e.strokeStyle = `rgba(0,0,0,0.5)`;
    e.lineWidth = 1;
    e.beginPath();
    e.moveTo(36, 0);
    e.lineTo(21.599999999999998, -6);
    e.lineTo(0, -4);
    e.lineTo(0, 4);
    e.lineTo(21.599999999999998, 6);
    e.closePath();
    e.fill();
    e.stroke();
    e.restore();
    Np(e, u.hundreds, 56.160000000000004, 2.6, 8.64);
    Pp(e, 6.4799999999999995);
    jp(e, 63.36);
    e.restore();
    e.restore();
  }
  drawLowAltFlag(e, t) {
    e.save();
    e.beginPath();
    e.moveTo(0, t * 0.12);
    e.arc(0, 0, t * 0.44, wp * 62, wp * 118);
    e.closePath();
    e.clip();
    e.fillStyle = `#111`;
    e.fillRect(-t, 0, t * 2, t);
    e.strokeStyle = _p;
    e.lineWidth = 4;
    for (let n = -8; n < 8; n++) {
      e.beginPath();
      e.moveTo(n * 9, t * 0.1);
      e.lineTo(n * 9 + t * 0.5, t * 0.6);
      e.stroke();
    }
    e.restore();
  }
  drawAttitude(e, t, n, r) {
    kp(e, t);
    let i = t * 0.88;
    let a = t * 0.66;
    let o = a / 32;
    let s = Math.max(-90, Math.min(90, n / wp));
    e.save();
    e.beginPath();
    e.arc(0, 0, i, 0, Cp);
    e.clip();
    e.rotate(-r);
    e.fillStyle = yp;
    e.fillRect(-t, -t, t * 2, t);
    e.fillStyle = xp;
    e.fillRect(-t, 0, t * 2, t);
    e.strokeStyle = _p;
    e.lineWidth = 2;
    e.beginPath();
    e.moveTo(-t, 0);
    e.lineTo(t, 0);
    e.stroke();
    for (let t of [-60, -45, -30, -20, -10, 10, 20, 30, 45, 60]) {
      let n = -Math.PI / 2 + t * wp;
      let r = t % 30 == 0;
      if (Math.abs(t) === 45) {
        e.save();
        e.rotate(n + Math.PI / 2);
        e.fillStyle = _p;
        e.beginPath();
        e.moveTo(0, -i * 0.8);
        e.lineTo(-4, -i * 0.97);
        e.lineTo(4, -i * 0.97);
        e.closePath();
        e.fill();
        e.restore();
      } else {
        Mp(e, n, i * (r ? 0.76 : 0.82), i * 0.98, r ? 3 : 2);
      }
    }
    e.fillStyle = _p;
    e.beginPath();
    e.moveTo(0, -i * 0.78);
    e.lineTo(-7, -i * 0.98);
    e.lineTo(7, -i * 0.98);
    e.closePath();
    e.fill();
    e.restore();
    e.save();
    e.beginPath();
    e.arc(0, 0, a, 0, Cp);
    e.clip();
    e.rotate(-r);
    e.translate(0, s * o);
    let c = o * 200;
    let l = e.createLinearGradient(0, -a * 1.2, 0, 0);
    l.addColorStop(0, yp);
    l.addColorStop(1, vp);
    e.fillStyle = l;
    e.fillRect(-t, -c, t * 2, c);
    let u = e.createLinearGradient(0, 0, 0, a * 1.2);
    u.addColorStop(0, bp);
    u.addColorStop(1, xp);
    e.fillStyle = u;
    e.fillRect(-t, 0, t * 2, c);
    e.strokeStyle = _p;
    e.lineWidth = 2;
    e.beginPath();
    e.moveTo(-t, 0);
    e.lineTo(t, 0);
    e.stroke();
    e.font = `700 ${Math.round(t * 0.1)}px ${mp}`;
    e.textBaseline = `middle`;
    e.fillStyle = _p;
    for (let t = -30; t <= 30; t += 5) {
      if (t === 0) {
        continue;
      }
      let n = -t * o;
      let r = t % 10 == 0 ? a * 0.42 : a * 0.18;
      e.lineWidth = t % 10 == 0 ? 1.6 : 1.2;
      e.beginPath();
      e.moveTo(-r / 2, n);
      e.lineTo(r / 2, n);
      e.stroke();
      if (t % 10 == 0) {
        e.textAlign = `right`;
        e.fillText(String(Math.abs(t)), -r / 2 - 3, n);
        e.textAlign = `left`;
        e.fillText(String(Math.abs(t)), r / 2 + 3, n);
      }
    }
    e.restore();
    e.strokeStyle = `rgba(0,0,0,0.35)`;
    e.lineWidth = 2;
    e.beginPath();
    e.arc(0, 0, a, 0, Cp);
    e.stroke();
    e.strokeStyle = Sp;
    e.lineWidth = 2.5;
    e.beginPath();
    e.moveTo(0, -i * 0.78);
    e.lineTo(-6, -i * 0.62);
    e.lineTo(6, -i * 0.62);
    e.closePath();
    e.stroke();
    e.save();
    e.beginPath();
    e.arc(0, 0, i, 0, Cp);
    e.clip();
    e.fillStyle = `#1b1c1f`;
    e.fillRect(-t, i * 0.72, t * 2, t);
    e.restore();
    e.fillStyle = `#0e0e10`;
    e.beginPath();
    e.arc(0, t * 0.8, t * 0.17, 0, Cp);
    e.fill();
    e.fillStyle = Sp;
    e.strokeStyle = `rgba(0,0,0,0.6)`;
    e.lineWidth = 1;
    let d = t => {
      e.beginPath();
      e.moveTo(t * a * 0.92, -2.5);
      e.lineTo(t * a * 0.3, -2.5);
      e.lineTo(t * a * 0.18, 7);
      e.lineTo(t * a * 0.12, 7);
      e.lineTo(t * a * 0.22, 2.5);
      e.lineTo(t * a * 0.92, 2.5);
      e.closePath();
      e.fill();
      e.stroke();
    };
    d(-1);
    d(1);
    e.beginPath();
    e.arc(0, 0, 3.5, 0, Cp);
    e.fill();
    e.stroke();
    jp(e, i);
  }
  buildAsiFace(e, t, n) {
    let [r, i] = Op(e);
    i.setTransform(t, 0, 0, t, e / 2, e / 2);
    kp(i, 72);
    let a = 63.36;
    Ap(i, a);
    let o = (e, t, r, a, o) => {
      i.strokeStyle = o;
      i.lineWidth = a;
      i.beginPath();
      i.arc(0, 0, r, Ep(e, n.max), Ep(t, n.max));
      i.stroke();
    };
    o(n.green[0], n.green[1], a * 0.92, 6, `#3fb24a`);
    o(n.yellow[0], n.yellow[1], a * 0.92, 6, `#f2c230`);
    o(n.white[0], n.white[1], a * 0.8, 4, _p);
    Mp(i, Ep(n.vne, n.max), a * 0.72, a * 0.99, 4, `#e2342b`);
    let s = n.step / 4;
    for (let e = 0; e <= n.max + 0.000001; e += s) {
      let t = Ep(e, n.max);
      let r = Math.round(e / s);
      if (r % 4 == 0) {
        Mp(i, t, a * 0.74, a * 0.97, 2.4);
      } else if (r % 2 == 0) {
        Mp(i, t, a * 0.8, a * 0.97, 1.8);
      } else {
        Mp(i, t, a * 0.87, a * 0.97, 1.2);
      }
    }
    i.fillStyle = _p;
    i.textAlign = `center`;
    i.textBaseline = `middle`;
    i.font = `800 12px ${mp}`;
    for (let e = n.step; e <= n.max + 0.000001; e += n.step) {
      let t = Ep(e, n.max);
      i.fillText(String(e), Math.cos(t) * a * 0.56, Math.sin(t) * a * 0.56);
    }
    i.font = `800 9px ${mp}`;
    i.fillText(`AIRSPEED`, 0, -13.9392);
    i.font = `700 8px ${mp}`;
    i.fillText(`KM/H`, 0, a * 0.3);
    return r;
  }
  buildAltFace(e, t) {
    let [n, r] = Op(e);
    r.setTransform(t, 0, 0, t, e / 2, e / 2);
    kp(r, 72);
    let i = 63.36;
    Ap(r, i);
    for (let e = 0; e < 50; e++) {
      let t = -Math.PI / 2 + e / 50 * Cp;
      if (e % 5 == 0) {
        Mp(r, t, i * 0.8, i * 0.97, 2.4);
      } else {
        Mp(r, t, i * 0.88, i * 0.97, 1.2);
      }
    }
    r.fillStyle = _p;
    r.beginPath();
    r.moveTo(0, -50.688);
    r.lineTo(-5, -62.0928);
    r.lineTo(5, -62.0928);
    r.closePath();
    r.fill();
    r.textAlign = `center`;
    r.textBaseline = `middle`;
    r.font = `800 16px ${mp}`;
    for (let e = 0; e < 10; e++) {
      let t = -Math.PI / 2 + e / 10 * Cp;
      r.fillText(String(e), Math.cos(t) * i * 0.64, Math.sin(t) * i * 0.64);
    }
    r.font = `800 10px ${mp}`;
    r.fillText(`ALT`, 0, -15.206399999999999);
    r.font = `700 6px ${mp}`;
    r.fillText(`×100 METRES`, 0, -25.344);
    return n;
  }
};
function Ip(e, t, n, r, i, a) {
  e.beginPath();
  e.moveTo(t + a, n);
  e.arcTo(t + r, n, t + r, n + i, a);
  e.arcTo(t + r, n + i, t, n + i, a);
  e.arcTo(t, n + i, t, n, a);
  e.arcTo(t, n, t + r, n, a);
  e.closePath();
}
var Q = `#2b1d1a`;
var Lp = `#fff6dd`;
var Rp = `#2a9d8f`;
var zp = `#f2b134`;
var Bp = `#e04f3a`;
var Vp = `"Baloo 2", "Trebuchet MS", sans-serif`;
var Hp = new G();
var Up = new G();
var Wp = new G();
var Gp = new G();
function Kp(e, t, n, r, i, a) {
  e.beginPath();
  e.moveTo(t + a, n);
  e.arcTo(t + r, n, t + r, n + i, a);
  e.arcTo(t + r, n + i, t, n + i, a);
  e.arcTo(t, n + i, t, n, a);
  e.arcTo(t, n, t + r, n, a);
  e.closePath();
}
function qp(e, t, n, r, i) {
  e.fillStyle = Q;
  Kp(e, t + 4, n + 4, r, i, 12);
  e.fill();
  e.fillStyle = Lp;
  Kp(e, t, n, r, i, 12);
  e.fill();
  e.lineWidth = 3;
  e.strokeStyle = Q;
  e.stroke();
}
var Jp = class {
  canvas;
  g;
  w = 0;
  h = 0;
  dpr = 1;
  mini;
  miniAt = new H(1000000000, 1000000000);
  miniT = 0;
  miniSpan = 7000;
  instruments = new Fp();
  clusterTop = 0;
  clusterCx = 0;
  visible = false;
  constructor(e) {
    this.canvas = e;
    this.g = e.getContext(`2d`);
    this.mini = document.createElement(`canvas`);
    this.mini.width = this.mini.height = 96;
  }
  resize() {
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.canvas.width = Math.floor(this.w * this.dpr);
    this.canvas.height = Math.floor(this.h * this.dpr);
  }
  clear() {
    this.g.setTransform(1, 0, 0, 1, 0, 0);
    this.g.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  invalidateMinimap() {
    this.miniAt.set(1000000000, 1000000000);
  }
  project(e, t) {
    Hp.copy(e).project(t);
    let n = Hp.z > 1;
    return {
      x: (Hp.x + 1) / 2 * this.w,
      y: (1 - Hp.y) / 2 * this.h,
      behind: n
    };
  }
  draw(e, t) {
    this.clear();
    if (!this.visible) {
      return;
    }
    let n = this.g;
    n.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    let r = e.player.s;
    let i = this.w < 700;
    let a = i ? 0.8 : 1;
    let o = e.touch ?? null;
    let s = this.cluster(a, o);
    this.clusterTop = s.y;
    this.clusterCx = s.cx;
    if (!o) {
      this.drawMouseStick(e);
    }
    if (e.showLanding) {
      this.drawLandingGuide(e);
    }
    if (e.guide?.rejoin) {
      this.drawRejoin(e.guide.rejoin, e.camera);
    }
    if (o) {
      this.drawTouchStatus(e, o);
      this.drawCompass(e, Math.min(300, this.w * 0.36), o.layout.safe.t);
      this.drawObjective(e.objective, 14, o.layout.safe.t);
      this.miniT -= t;
      this.drawMinimap(e, 104, o.layout.safe.t, o.layout.safe.r);
      this.drawTouchControls(e, o);
      return;
    }
    n.save();
    n.translate(16, this.h - 16 - a * 218);
    n.scale(a, a);
    qp(n, 0, 0, 220, 218);
    let c = r.airspeed * 3.6;
    let l = r.pos.y - Math.max(e.world.groundHeight(r.pos.x, r.pos.z), 0);
    n.fillStyle = Q;
    n.font = `800 14px ${Vp}`;
    n.fillText(`SPEED`, 14, 24);
    n.fillText(`ALT`, 120, 24);
    n.font = `800 30px ${Vp}`;
    n.fillStyle = e.stallWarn ? Bp : Q;
    let u = `${Math.round(c)}`;
    n.fillText(u, 14, 56);
    let d = n.measureText(u).width;
    n.fillStyle = Q;
    n.fillText(`${Math.round(r.pos.y)}`, 120, 56);
    n.font = `700 13px ${Vp}`;
    n.fillText(`km/h`, 14 + d + 4, 56);
    n.fillText(`m  (${Math.round(l)} AGL)`, 120, 74);
    if (e.stallWarn) {
      n.fillStyle = Bp;
      n.font = `800 15px ${Vp}`;
      n.fillText(`STALL!`, 14, 76);
    }
    n.font = `800 13px ${Vp}`;
    n.fillStyle = Q;
    n.fillText(`THROTTLE`, 14, 102);
    Kp(n, 14, 108, 192, 16, 8);
    n.fillStyle = `#fff`;
    n.fill();
    n.strokeStyle = Q;
    n.lineWidth = 2.5;
    n.stroke();
    Kp(n, 16, 110, Math.max(6, r.throttle * 188), 12, 6);
    n.fillStyle = zp;
    n.fill();
    n.fillStyle = Q;
    n.font = `700 12px ${Vp}`;
    let f = df(e.player.loadout.style);
    let p = f === `jet` ? `spool ${Math.round(r.rpm * 100)}%` : `rpm ${Math.round(r.rpm * (f === `turbo` ? 2000 : 1400))}`;
    n.fillText(`${Math.round(r.throttle * 100)}%   ${p}`, 16, 142);
    this.drawFlaps(n, e.flapNotch, r.flaps, r.flapsBlown);
    n.restore();
    n.save();
    n.translate(this.w - 16 - a * 120, this.h - 16 - a * 150);
    n.scale(a, a);
    qp(n, 0, 0, 120, 150);
    n.fillStyle = Q;
    n.font = `800 14px ${Vp}`;
    n.fillText(`DAMAGE`, 14, 24);
    this.drawDamage(n, 60, 92, r.health);
    n.restore();
    this.drawInstruments(e, s);
    this.drawCompass(e, Math.min(420, this.w - 40), 0);
    this.drawObjective(e.objective, i ? 14 : 16, 0);
    this.miniT -= t;
    this.drawMinimap(e, i ? 120 : 160, 0, 0);
  }
  drawObjective(e, t, n) {
    let r = this.g;
    r.font = `800 ${t}px ${Vp}`;
    r.textAlign = `center`;
    let i = r.measureText(e).width + 28;
    qp(r, this.w / 2 - i / 2, n + 62, i, 30);
    r.fillStyle = Q;
    r.fillText(e, this.w / 2, n + 62 + 21);
    r.textAlign = `left`;
  }
  cluster(e, t) {
    if (t) {
      let e = t.layout;
      return {
        k: 0,
        cx: (e.leftEdge + e.rightEdge) / 2,
        y: this.h - e.safe.b - 12
      };
    }
    let n = Math.max(16 + e * 220, 16 + e * 120) + 12;
    let r = dt.clamp((this.w - n * 2) / 484, 0.45, 1);
    return {
      k: r,
      cx: this.w / 2,
      y: this.h - 16 - r * 168
    };
  }
  drawInstruments(e, t) {
    let n = this.g;
    let r = e.player;
    r.forward(Up);
    r.up(Wp);
    Gp.set(1, 0, 0).applyQuaternion(r.s.quat);
    let i = Math.asin(dt.clamp(Up.y, -1, 1));
    let a = Math.atan2(-Gp.y, Wp.y);
    let o = t.k;
    n.save();
    n.translate(t.cx - o * 484 / 2, t.y);
    n.scale(o, o);
    this.instruments.draw(n, 0, 0, o * this.dpr, {
      airspeed: r.s.airspeed,
      altitude: r.s.pos.y,
      pitch: i,
      bank: a,
      spec: r.spec
    });
    n.restore();
  }
  drawFlaps(e, t, n, r) {
    e.save();
    e.strokeStyle = `rgba(43, 29, 26, 0.35)`;
    e.lineWidth = 1.5;
    e.setLineDash([4, 4]);
    e.beginPath();
    e.moveTo(14, 156);
    e.lineTo(206, 156);
    e.stroke();
    e.restore();
    e.font = `800 13px ${Vp}`;
    e.fillStyle = r ? Bp : Q;
    e.fillText(`FLAPS`, 14, 176);
    let i = e.measureText(`FLAPS`).width;
    e.font = `700 12px ${Vp}`;
    e.fillStyle = r ? Bp : `#6b4b2a`;
    e.fillText(r ? `TOO FAST — slow down!` : `(V ↔ F)`, 14 + i + 6, 176);
    for (let n = 0; n < du.length; n++) {
      let i = 14 + n * 66;
      Kp(e, i, 182, 60, 18, 7);
      e.fillStyle = n === t ? r ? Bp : Rp : `#fff`;
      e.fill();
      e.strokeStyle = Q;
      e.lineWidth = 2;
      e.stroke();
      e.fillStyle = n === t ? `#fff` : Q;
      e.font = `800 11px ${Vp}`;
      e.textAlign = `center`;
      e.fillText(fu[n], i + 30, 195);
      e.textAlign = `left`;
    }
    e.fillStyle = Q;
    e.beginPath();
    let a = 44 + n * 132;
    e.moveTo(a, 202);
    e.lineTo(a - 5, 207);
    e.lineTo(a + 5, 207);
    e.closePath();
    e.fill();
  }
  drawDamage(e, t, n, r) {
    let i = e => e > 0.7 ? `#7cc95a` : e > 0.4 ? `#f2b134` : e > 0 ? `#e0703a` : `#6b2a22`;
    e.save();
    e.translate(t, n);
    e.lineWidth = 2.5;
    e.strokeStyle = Q;
    e.fillStyle = i(r.wings);
    Kp(e, -44, -22, 88, 16, 6);
    e.fill();
    e.stroke();
    e.fillStyle = i(Math.min(r.pilot, 1));
    Kp(e, -8, -34, 16, 62, 6);
    e.fill();
    e.stroke();
    e.fillStyle = i(r.engine);
    e.beginPath();
    e.arc(0, -36, 10, 0, Math.PI * 2);
    e.fill();
    e.stroke();
    e.fillStyle = i(r.tail);
    Kp(e, -20, 24, 40, 10, 4);
    e.fill();
    e.stroke();
    e.restore();
  }
  drawCompass(e, t, n) {
    let r = this.g;
    let i = this.w / 2 - t / 2;
    let a = n + 12;
    qp(r, i, a, t, 40);
    e.player.forward(Up);
    let o = Math.atan2(Up.x, -Up.z) * 180 / Math.PI;
    r.save();
    Kp(r, i + 3, a + 3, t - 6, 34, 10);
    r.clip();
    let s = t / 120;
    r.fillStyle = Q;
    r.strokeStyle = Q;
    r.textAlign = `center`;
    for (let e = Math.floor((o - 70) / 15) * 15; e <= o + 70; e += 15) {
      let t = this.w / 2 + (e - o) * s;
      let n = (e % 360 + 360) % 360;
      let i = n === 0 ? `N` : n === 90 ? `E` : n === 180 ? `S` : n === 270 ? `W` : n % 45 == 0 ? String(n) : ``;
      r.lineWidth = 2;
      r.beginPath();
      r.moveTo(t, a + 30);
      r.lineTo(t, a + (i ? 24 : 27));
      r.stroke();
      if (i) {
        r.font = `800 ${i.length === 1 ? 16 : 12}px ${Vp}`;
        r.fillText(i, t, a + 20);
      }
    }
    let c = (t, n) => {
      let i = Math.atan2(t.x - e.player.s.pos.x, -(t.z - e.player.s.pos.z)) * 180 / Math.PI - o;
      i = (i + 540) % 360 - 180;
      let c = this.w / 2 + dt.clamp(i, -58, 58) * s;
      r.fillStyle = n;
      r.beginPath();
      r.moveTo(c, a + 36);
      r.lineTo(c - 6, a + 28);
      r.lineTo(c + 6, a + 28);
      r.closePath();
      r.fill();
    };
    let l = e.world.gen.nearestAirfield(e.player.s.pos.x, e.player.s.pos.z).af;
    c(new G(l.x, 0, l.z), Rp);
    if (e.guide) {
      c(new G(e.guide.dest.x, 0, e.guide.dest.z), zp);
    }
    r.restore();
    r.fillStyle = Q;
    r.beginPath();
    r.moveTo(this.w / 2, a + 38);
    r.lineTo(this.w / 2 - 7, a + 46);
    r.lineTo(this.w / 2 + 7, a + 46);
    r.closePath();
    r.fill();
    r.textAlign = `left`;
  }
  drawRejoin(e, t) {
    let n = this.g;
    Hp.copy(e).applyMatrix4(t.matrixWorldInverse);
    let r = Hp.z > 0;
    let i = this.project(e, t);
    let a = !r && i.x > 60 && i.x < this.w - 60 && i.y > 60 && i.y < this.h - 60;
    n.save();
    n.lineWidth = 3;
    n.strokeStyle = Q;
    n.fillStyle = `#ffffff`;
    if (a) {
      n.beginPath();
      n.arc(i.x, i.y, 13, 0, Math.PI * 2);
      n.fill();
      n.stroke();
      n.beginPath();
      n.arc(i.x, i.y, 4, 0, Math.PI * 2);
      n.fillStyle = Q;
      n.fill();
      n.font = `800 13px ${Vp}`;
      n.textAlign = `center`;
      n.lineWidth = 4;
      n.strokeStyle = `#ffffff`;
      n.strokeText(`PATH`, i.x, i.y - 20);
      n.fillText(`PATH`, i.x, i.y - 20);
    } else {
      let e = Hp.x;
      let t = -Hp.y;
      if (r && Math.abs(e) < 0.001 && Math.abs(t) < 0.001) {
        t = 1;
      }
      let i = Math.atan2(t, e);
      let a = this.w / 2;
      let o = this.h / 2;
      let s = Math.min((this.w / 2 - 60) / Math.abs(Math.cos(i) || 0.000001), (this.h / 2 - 60) / Math.abs(Math.sin(i) || 0.000001));
      n.translate(a + Math.cos(i) * s, o + Math.sin(i) * s);
      n.rotate(i);
      n.beginPath();
      n.moveTo(18, 0);
      n.lineTo(-10, -13);
      n.lineTo(-4, 0);
      n.lineTo(-10, 13);
      n.closePath();
      n.fill();
      n.stroke();
    }
    n.restore();
  }
  drawMouseStick(e) {
    if (!e.mouseStick) {
      return;
    }
    let t = this.g;
    let n = (e.mouse.x + 1) / 2 * this.w;
    let r = (1 - e.mouse.y) / 2 * this.h;
    t.strokeStyle = Rp;
    t.lineWidth = 2.5;
    t.beginPath();
    t.arc(n, r, 8, 0, Math.PI * 2);
    t.stroke();
    t.setLineDash([4, 6]);
    t.beginPath();
    t.moveTo(this.w / 2, this.h / 2);
    t.lineTo(n, r);
    t.stroke();
    t.setLineDash([]);
  }
  drawLandingGuide(e) {
    let t = this.g;
    let n = e.player.s;
    let {
      af: r,
      dist: i
    } = e.world.gen.nearestAirfield(n.pos.x, n.pos.z);
    if (i > 2500) {
      return;
    }
    let a = e.camera;
    let o = [-1, 1].map(e => new G(r.x + r.dirX * (r.length / 2) * e, r.height + 1, r.z + r.dirZ * (r.length / 2) * e));
    let s = new G(r.x, r.height + 1, r.z);
    let c = this.project(s, a);
    if (!c.behind) {
      t.fillStyle = Rp;
      t.strokeStyle = Q;
      t.lineWidth = 2.5;
      t.beginPath();
      t.moveTo(c.x, c.y - 8);
      t.lineTo(c.x - 10, c.y - 26);
      t.lineTo(c.x + 10, c.y - 26);
      t.closePath();
      t.fill();
      t.stroke();
      t.font = `800 12px ${Vp}`;
      t.textAlign = `center`;
      t.fillStyle = Q;
      t.fillText(`STRIP`, c.x, c.y - 30);
      t.textAlign = `left`;
    }
    for (let e of o) {
      let n = this.project(e, a);
      if (!n.behind) {
        t.fillStyle = Lp;
        t.strokeStyle = Q;
        t.lineWidth = 2;
        t.beginPath();
        t.arc(n.x, n.y, 4, 0, Math.PI * 2);
        t.fill();
        t.stroke();
      }
    }
    let l = o[0].distanceTo(n.pos) < o[1].distanceTo(n.pos) ? o[0] : o[1];
    let u = Math.hypot(l.x - n.pos.x, l.z - n.pos.z);
    let d = r.height + u * Math.tan(Math.PI * 4 / 180);
    let f = n.pos.y - d;
    if (u < 2200 && !n.onGround) {
      let e = f > 25 ? `HIGH ▼` : f < -18 ? `LOW ▲` : `ON SLOPE ●`;
      let r = -n.vel.y;
      t.font = `800 15px ${Vp}`;
      let i = `${e}   sink ${r.toFixed(1)} m/s`;
      let a = t.measureText(i).width + 24;
      let o = this.clusterTop - 44;
      let s = this.clusterCx;
      qp(t, s - a / 2, o, a, 30);
      t.fillStyle = r > 3.4499999999999997 ? Bp : Q;
      t.textAlign = `center`;
      t.fillText(i, s, o + 21);
      t.textAlign = `left`;
    }
  }
  renderMinimap(e) {
    let t = this.mini.getContext(`2d`);
    let n = this.mini.width;
    let r = t.createImageData(n, n);
    let i = e.player.s.pos.x;
    let a = e.player.s.pos.z;
    let o = this.miniSpan;
    for (let t = 0; t < n; t++) {
      for (let s = 0; s < n; s++) {
        let c = i + (s / n - 0.5) * o;
        let l = a + (t / n - 0.5) * o;
        let u = e.world.gen.rawHeight(c, l);
        let d;
        let f;
        let p;
        if (u < 0) {
          [d, f, p] = u < -8 ? [70, 150, 205] : [110, 200, 220];
        } else if (u < 5) {
          [d, f, p] = [240, 220, 160];
        } else if (u > 440) {
          [d, f, p] = [250, 250, 255];
        } else if (u > 300) {
          [d, f, p] = [170, 155, 140];
        } else {
          let e = u / 300;
          d = 150 - e * 40;
          f = 210 - e * 50;
          p = 90 - e * 20;
        }
        let m = (t * n + s) * 4;
        r.data[m] = d;
        r.data[m + 1] = f;
        r.data[m + 2] = p;
        r.data[m + 3] = 255;
      }
    }
    t.putImageData(r, 0, 0);
    this.miniAt.set(i, a);
  }
  drawMinimap(e, t, n, r) {
    let i = e.player.s;
    if (this.miniT <= 0 && (Math.abs(i.pos.x - this.miniAt.x) > 400 || Math.abs(i.pos.z - this.miniAt.y) > 400)) {
      this.renderMinimap(e);
      this.miniT = 0.5;
    }
    let a = this.g;
    let o = this.w - r - t - 16;
    let s = n + 46;
    qp(a, o, s, t, t);
    a.save();
    Kp(a, o + 3, s + 3, t - 6, t - 6, 10);
    a.clip();
    let c = t / this.miniSpan;
    let l = (this.miniAt.x - i.pos.x) * c;
    let u = (this.miniAt.y - i.pos.z) * c;
    a.imageSmoothingEnabled = true;
    a.drawImage(this.mini, o + l, s + u, t, t);
    let d = (e, n) => ({
      x: o + t / 2 + (e - i.pos.x) * c,
      y: s + t / 2 + (n - i.pos.z) * c
    });
    if (e.guide) {
      let t = e.guide.route.pts;
      a.beginPath();
      for (let e = 0; e < t.length; e += 4) {
        let n = d(t[e].x, t[e].z);
        if (e === 0) {
          a.moveTo(n.x, n.y);
        } else {
          a.lineTo(n.x, n.y);
        }
      }
      a.lineJoin = `round`;
      a.strokeStyle = Q;
      a.lineWidth = 4;
      a.stroke();
      a.strokeStyle = `#ffffff`;
      a.lineWidth = 2;
      a.stroke();
    }
    for (let t of e.world.gen.airfields) {
      let n = d(t.x, t.z);
      a.save();
      a.translate(n.x, n.y);
      a.rotate(t.heading);
      a.fillStyle = e.guide?.dest === t ? zp : t.home ? Rp : `#ffffff`;
      a.strokeStyle = Q;
      a.lineWidth = 1.5;
      a.fillRect(-7, -2.5, 14, 5);
      a.strokeRect(-7, -2.5, 14, 5);
      a.restore();
    }
    a.restore();
    e.player.forward(Up);
    let f = Math.atan2(Up.z, Up.x);
    a.save();
    a.translate(o + t / 2, s + t / 2);
    a.rotate(f);
    a.fillStyle = zp;
    a.strokeStyle = Q;
    a.lineWidth = 2;
    a.beginPath();
    a.moveTo(9, 0);
    a.lineTo(-6, -6);
    a.lineTo(-3, 0);
    a.lineTo(-6, 6);
    a.closePath();
    a.fill();
    a.stroke();
    a.restore();
    a.font = `800 11px ${Vp}`;
    a.fillStyle = Q;
    a.fillText(`N`, o + t / 2 - 4, s + 15);
  }
  drawTouchStatus(e, t) {
    let n = this.g;
    let r = t.layout;
    let i = e.player.s;
    let a = r.buttons.pause;
    let o = r.safe.l + r.u * 12;
    let s = a.y + a.r + r.u * 10;
    qp(n, o, s, 158, 84);
    let c = i.pos.y - Math.max(e.world.groundHeight(i.pos.x, i.pos.z), 0);
    let l = (e, t, r, i, a = Q) => {
      n.fillStyle = Q;
      n.font = `800 12px ${Vp}`;
      n.fillText(e, o + 10, i);
      n.fillStyle = a;
      n.font = `800 18px ${Vp}`;
      n.fillText(t, o + 42, i + 1);
      let s = n.measureText(t).width;
      n.fillStyle = Q;
      n.font = `700 11px ${Vp}`;
      n.fillText(r, o + 42 + s + 4, i + 1);
    };
    l(`SPD`, `${Math.round(i.airspeed * 3.6)}`, `km/h`, s + 22, e.stallWarn ? Bp : Q);
    l(`ALT`, `${Math.round(i.pos.y)}`, `m · ${Math.round(c)} AGL`, s + 45);
    n.font = `800 12px ${Vp}`;
    if (e.stallWarn) {
      n.fillStyle = Bp;
      n.fillText(`STALL!`, o + 10, s + 70);
    } else if (i.flapsBlown) {
      n.fillStyle = Bp;
      n.fillText(`TOO FAST for flaps!`, o + 10, s + 70);
    } else {
      n.fillStyle = `#6b4b2a`;
      n.fillText(`FLAPS ${fu[e.flapNotch]}`, o + 10, s + 70);
    }
    n.save();
    n.translate(o + 158 - 20, s + 84 - 22);
    n.scale(0.3, 0.3);
    this.drawDamage(n, 0, 0, i.health);
    n.restore();
  }
  drawTouchControls(e, t) {
    let n = this.g;
    let r = t.layout;
    let i = r.u;
    let a = e => `800 ${Math.max(11, Math.round(e * i))}px ${Vp}`;
    n.save();
    n.lineJoin = `round`;
    let o = t.stick;
    let s = r.stickR;
    let c = o ? o.ox : r.stickRest.x;
    let l = o ? o.oy : r.stickRest.y;
    n.globalAlpha = o ? 0.9 : t.tilt ? 0.35 : 0.5;
    n.beginPath();
    n.arc(c, l, s, 0, Math.PI * 2);
    n.fillStyle = `rgba(255, 246, 221, 0.28)`;
    n.fill();
    n.lineWidth = 3;
    n.strokeStyle = Q;
    n.stroke();
    n.lineWidth = 2.5;
    for (let e = 0; e < 4; e++) {
      let t = e * Math.PI / 2;
      n.beginPath();
      n.moveTo(c + Math.cos(t) * s * 0.78, l + Math.sin(t) * s * 0.78);
      n.lineTo(c + Math.cos(t) * s * 0.92, l + Math.sin(t) * s * 0.92);
      n.stroke();
    }
    let u = c + (o ? o.x * s : 0);
    let d = l + (o ? o.y * s : 0);
    n.beginPath();
    n.arc(u, d, s * 0.42, 0, Math.PI * 2);
    n.fillStyle = o ? zp : `rgba(255, 246, 221, 0.85)`;
    n.fill();
    n.lineWidth = 3;
    n.stroke();
    if (!o) {
      n.fillStyle = Q;
      n.font = a(11);
      n.textAlign = `center`;
      n.fillText(t.tilt ? `TILT` : `FLY`, u, d + i * 4);
      n.textAlign = `left`;
    }
    n.globalAlpha = 1;
    let f = r.lever;
    let p = t.held(`lever`);
    n.globalAlpha = p ? 0.95 : 0.8;
    Kp(n, f.x, f.y, f.w, f.h, i * 12);
    n.fillStyle = `rgba(255, 246, 221, 0.55)`;
    n.fill();
    n.save();
    n.clip();
    let m = f.h * t.throttle;
    n.fillStyle = `rgba(242, 177, 52, 0.85)`;
    n.fillRect(f.x, f.y + f.h - m, f.w, m);
    let h = e.player.s.rpm;
    n.fillStyle = `rgba(224, 79, 58, 0.85)`;
    n.fillRect(f.x + f.w - i * 7, f.y + f.h - f.h * h, i * 4, f.h * h);
    n.restore();
    Kp(n, f.x, f.y, f.w, f.h, i * 12);
    n.lineWidth = 3;
    n.strokeStyle = Q;
    n.stroke();
    n.lineWidth = 1.5;
    for (let e of [0.25, 0.5, 0.75]) {
      let t = f.y + f.h * (1 - e);
      n.beginPath();
      n.moveTo(f.x + 4, t);
      n.lineTo(f.x + i * 12, t);
      n.stroke();
    }
    let g = f.y + f.h * (1 - t.throttle);
    let _ = i * 24;
    Kp(n, f.x - i * 6, g - _ / 2, f.w + i * 12, _, i * 8);
    n.fillStyle = p ? zp : Lp;
    n.fill();
    n.lineWidth = 3;
    n.stroke();
    n.fillStyle = Q;
    n.font = a(12);
    n.textAlign = `center`;
    n.fillText(`${Math.round(t.throttle * 100)}%`, f.x + f.w / 2, g + i * 4.5);
    n.font = a(10);
    let v = df(e.player.loadout.style);
    let y = t.throttle < 0.6;
    n.fillText(v === `jet` ? `${Math.round(h * 100)}` : `THR`, f.x + f.w / 2, y ? f.y + i * 16 : f.y + f.h - i * 8);
    n.textAlign = `left`;
    n.globalAlpha = 1;
    let b = r.buttons;
    let x = e.player.s.flapsBlown;
    this.touchButton(b.flapsLess, `FLAP −`, t.held(`flapsLess`), a(11));
    this.touchButton(b.flapsMore, `FLAP +`, t.held(`flapsMore`), a(11));
    n.font = a(12);
    n.textAlign = `center`;
    let S = (b.flapsLess.y + b.flapsMore.y) / 2 + i * 4;
    n.lineWidth = 4;
    n.strokeStyle = Lp;
    let C = x ? `TOO FAST` : fu[e.flapNotch];
    n.strokeText(C, b.flapsMore.x, S);
    n.fillStyle = x ? Bp : Q;
    n.fillText(C, b.flapsMore.x, S);
    n.textAlign = `left`;
    this.touchButton(b.brake, `BRAKE`, t.held(`brake`), a(13));
    this.touchButton(b.camera, `CAM`, t.held(`camera`), a(11));
    if (t.bailShown) {
      this.touchButton(b.bail, `BAIL`, t.held(`bail`), a(11), `#f6c2b8`);
      if (t.bailProgress > 0) {
        n.beginPath();
        n.arc(b.bail.x, b.bail.y, b.bail.r + i * 5, -Math.PI / 2, -Math.PI / 2 + t.bailProgress * Math.PI * 2);
        n.lineWidth = i * 5;
        n.strokeStyle = Bp;
        n.stroke();
      }
    }
    let w = b.pause;
    this.touchButton(w, ``, t.held(`pause`), a(11));
    n.fillStyle = Q;
    n.fillRect(w.x - w.r * 0.32, w.y - w.r * 0.38, w.r * 0.22, w.r * 0.76);
    n.fillRect(w.x + w.r * 0.1, w.y - w.r * 0.38, w.r * 0.22, w.r * 0.76);
    n.restore();
  }
  touchButton(e, t, n, r, i = `rgba(255, 246, 221, 0.78)`) {
    let a = this.g;
    a.beginPath();
    a.arc(e.x + (n ? 0 : 3), e.y + (n ? 0 : 3), e.r, 0, Math.PI * 2);
    a.fillStyle = `rgba(43, 29, 26, 0.55)`;
    a.fill();
    a.beginPath();
    a.arc(e.x + (n ? 2 : 0), e.y + (n ? 2 : 0), e.r, 0, Math.PI * 2);
    a.fillStyle = n ? Rp : i;
    a.fill();
    a.lineWidth = 3;
    a.strokeStyle = Q;
    a.stroke();
    if (t) {
      a.fillStyle = n ? `#fff` : Q;
      a.font = r;
      a.textAlign = `center`;
      a.textBaseline = `middle`;
      a.fillText(t, e.x + (n ? 2 : 0), e.y + (n ? 2 : 0) + 1);
      a.textBaseline = `alphabetic`;
      a.textAlign = `left`;
    }
  }
};
var $ = e => document.getElementById(e);
var Yp = [`🎈`, `🥉`, `🥈`, `🥇`];
var Xp = class {
  settings;
  h;
  toastTimer = 0;
  hintTimer = 0;
  constructor(e, t) {
    this.settings = e;
    this.h = t;
    this.bindSeg(`mode-seg`, () => e.mode, n => {
      e.mode = n;
      t.modeChanged();
    });
    $(`dest-prev`).addEventListener(`click`, () => {
      t.click();
      t.destStep(-1);
    });
    $(`dest-next`).addEventListener(`click`, () => {
      t.click();
      t.destStep(1);
    });
    this.bindSeg(`assist-seg`, () => e.assist, t => e.assist = t);
    this.bindSeg(`quality-seg`, () => e.quality, n => {
      e.quality = n;
      t.qualityChanged();
    });
    let n = $(`seed-input`);
    n.value = String(e.seed);
    n.addEventListener(`change`, () => {
      let r = parseInt(n.value.replace(/\D/g, ``), 10);
      if (Number.isFinite(r) && r > 0) {
        e.seed = r;
        yd(e);
        t.seedChanged(r);
      } else {
        n.value = String(e.seed);
      }
      this.refreshBest();
    });
    $(`seed-roll`).addEventListener(`click`, () => {
      t.click();
      e.seed = md();
      n.value = String(e.seed);
      yd(e);
      t.seedChanged(e.seed);
      this.refreshBest();
    });
    $(`fly-btn`).addEventListener(`click`, () => t.fly());
    $(`resume-btn`).addEventListener(`click`, () => t.resume());
    $(`restart-btn`).addEventListener(`click`, () => t.restart());
    $(`quit-btn`).addEventListener(`click`, () => t.quit());
    $(`again-btn`).addEventListener(`click`, () => t.again());
    $(`newworld-btn`).addEventListener(`click`, () => t.newWorld());
    $(`hangar-btn`).addEventListener(`click`, () => t.quit());
    $(`open-hangar`).addEventListener(`click`, () => t.openHangar());
    $(`close-hangar`).addEventListener(`click`, () => t.closeHangar());
    let r = $(`volume`);
    r.value = String(e.volume);
    r.addEventListener(`input`, () => {
      e.volume = parseFloat(r.value);
      yd(e);
      t.volumeChanged(e.volume);
    });
    let i = $(`shake`);
    i.checked = e.cameraShake;
    i.addEventListener(`change`, () => {
      e.cameraShake = i.checked;
      yd(e);
    });
    let a = $(`tilt`);
    let o = $(`tilt-note`);
    let s = $(`recentre-btn`);
    let c = () => s.classList.toggle(`hidden`, !a.checked);
    a.checked = e.tilt;
    c();
    if (!(`DeviceOrientationEvent` in window)) {
      a.disabled = true;
      a.checked = false;
      o.textContent = `Not available on this device`;
    }
    a.addEventListener(`change`, () => {
      let n = a.checked;
      t.tiltChanged(n).then(t => {
        if (n && !t) {
          a.checked = false;
          o.textContent = `Motion access was not allowed`;
        } else {
          o.textContent = ``;
        }
        e.tilt = a.checked;
        yd(e);
        c();
      });
    });
    s.addEventListener(`click`, () => {
      t.click();
      t.recentre();
      this.hint(`Tilt re-centred: hold the device like this to fly straight.`, 2500);
    });
    let l = $(`invert`);
    l.checked = e.invertPitch;
    l.addEventListener(`change`, () => {
      e.invertPitch = l.checked;
      yd(e);
    });
    this.refreshBest();
  }
  bindSeg(e, t, n) {
    let r = $(e);
    let i = Array.from(r.querySelectorAll(`button`));
    let a = () => i.forEach(e => e.classList.toggle(`on`, e.dataset.v === t()));
    i.forEach(e => e.addEventListener(`click`, () => {
      n(e.dataset.v);
      yd(this.settings);
      this.h.click();
      a();
      this.refreshBest();
    }));
    a();
  }
  refreshBest() {
    let e = this.settings;
    let t = Sd(xd(e.seed, e.mode, e.dest));
    let n = e.mode === `route` ? `Best on this route` : `Best on this world`;
    let r = t?.path === undefined ? `` : `, ${t.path}% on the path`;
    $(`best-line`).textContent = t ? `${n}: ${Yp[t.medal]} landing ${t.landing}${r}` : ``;
  }
  setRoutePanel(e) {
    $(`route-panel`).classList.toggle(`hidden`, !e);
  }
  setRouteInfo(e, t) {
    $(`dest-name`).textContent = e;
    $(`route-info`).textContent = t;
  }
  get routeCanvas() {
    return $(`route-map`);
  }
  setSeed(e) {
    $(`seed-input`).value = String(e);
    this.refreshBest();
  }
  show(e) {
    for (let t of [`title`, `hangar-screen`, `loading`, `pause`, `debrief`, `nogl`, `ctxlost`]) {
      $(t).classList.toggle(`hidden`, t !== e);
    }
  }
  setAircraft(e) {
    $(`aircraft-name`).textContent = e;
  }
  setLoading(e) {
    $(`load-bar`).style.width = `${Math.round(e * 100)}%`;
  }
  showDebrief(e) {
    $(`debrief-title`).textContent = e.title;
    $(`medal`).textContent = Yp[e.medal];
    let t = $(`debrief-stats`);
    t.innerHTML = ``;
    for (let [n, r] of e.rows) {
      let e = document.createElement(`tr`);
      let i = document.createElement(`td`);
      i.textContent = n;
      let a = document.createElement(`td`);
      a.textContent = r;
      e.append(i, a);
      t.append(e);
    }
    if (e.newBest) {
      let n = document.createElement(`tr`);
      let r = document.createElement(`td`);
      r.colSpan = 2;
      r.style.textAlign = `center`;
      r.textContent = `★ New best for this ${e.bestOf ?? `world`}! ★`;
      n.append(r);
      t.append(n);
    }
    this.show(`debrief`);
  }
  toast(e, t = 1600) {
    let n = $(`toast`);
    n.textContent = e;
    n.classList.add(`show`);
    clearTimeout(this.toastTimer);
    this.toastTimer = window.setTimeout(() => n.classList.remove(`show`), t);
  }
  hint(e, t = 4500) {
    let n = $(`hint`);
    n.textContent = e;
    n.classList.add(`show`);
    clearTimeout(this.hintTimer);
    this.hintTimer = window.setTimeout(() => n.classList.remove(`show`), t);
  }
  clearHint() {
    $(`hint`).classList.remove(`show`);
  }
  setWhiteout(e) {
    $(`whiteout`).style.opacity = String(e);
  }
  setHurt(e) {
    $(`hurt`).style.opacity = String(e);
  }
};
var Zp = `#2b1d1a`;
var Qp = `#fff6dd`;
var $p = `#2a9d8f`;
var em = `#f2b134`;
var tm = `"Baloo 2", "Trebuchet MS", sans-serif`;
function nm(e) {
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
function rm(e, t, n, r) {
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
    y: a / 2 + (t - m) / f
  });
  let g = Math.ceil(i / 4) + 1;
  let _ = Math.ceil(a / 4) + 1;
  let v = new Float32Array(g * _);
  for (let e = 0; e < _; e++) {
    for (let n = 0; n < g; n++) {
      v[e * g + n] = t.rawHeight(p + (n * 4 - i / 2) * f, m + (e * 4 - a / 2) * f);
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
      let [r, i, a] = nm(n);
      let o = v[e * g + Math.max(0, t - 1)];
      let s = v[Math.max(0, e - 1) * g + t];
      let c = n < 0 ? 1 : Math.max(0.75, Math.min(1.2, 1 + (o - n + (s - n)) * 0.004));
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
    o.strokeStyle = Zp;
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
  o.strokeStyle = Zp;
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
    let i = h(n.pts[Math.min(n.pts.length - 1, t + 2)].x, n.pts[Math.min(n.pts.length - 1, t + 2)].z);
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
    o.fillStyle = $p;
    o.strokeStyle = Zp;
    o.lineWidth = S * 1.5;
    o.fill();
    o.stroke();
    o.restore();
  }
  let T = (e, t, n) => {
    o.font = `800 ${S * 13}px ${tm}`;
    let r = o.measureText(e).width + S * 12;
    let a = S * 20;
    let s = t.x - r / 2;
    let c = t.y - S * 14 - a;
    if (c < S * 4) {
      c = t.y + S * 14;
    }
    s = Math.max(S * 4, Math.min(i - r - S * 4, s));
    o.fillStyle = Zp;
    o.beginPath();
    o.roundRect(s + S * 2, c + S * 2, r, a, S * 7);
    o.fill();
    o.fillStyle = n;
    o.beginPath();
    o.roundRect(s, c, r, a, S * 7);
    o.fill();
    o.strokeStyle = Zp;
    o.lineWidth = S * 2;
    o.stroke();
    o.fillStyle = Zp;
    o.textAlign = `center`;
    o.textBaseline = `middle`;
    o.fillText(e, s + r / 2, c + a / 2 + S);
    o.textAlign = `left`;
    o.textBaseline = `alphabetic`;
  };
  let E = C(t.airfields.indexOf(n.from), $p);
  let D = C(t.airfields.indexOf(n.to), em);
  T(`Home`, E, Qp);
  T(r[t.airfields.indexOf(n.to)], D, em);
  o.save();
  o.translate(i - S * 22, S * 26);
  o.fillStyle = Qp;
  o.strokeStyle = Zp;
  o.lineWidth = S * 2;
  o.beginPath();
  o.arc(0, 0, S * 14, 0, Math.PI * 2);
  o.fill();
  o.stroke();
  o.fillStyle = Zp;
  o.beginPath();
  o.moveTo(0, S * -10);
  o.lineTo(S * -5, S * 3);
  o.lineTo(S * 5, S * 3);
  o.closePath();
  o.fill();
  o.font = `800 ${S * 9}px ${tm}`;
  o.textAlign = `center`;
  o.fillText(`N`, 0, S * 11);
  o.restore();
  let O = [1, 2, 5, 10].find(e => e * 1000 / f > S * 50) ?? 10;
  let k = O * 1000 / f;
  let A = S * 12;
  let j = a - S * 14;
  o.fillStyle = Qp;
  o.strokeStyle = Zp;
  o.lineWidth = S * 2;
  o.fillRect(A, j - S * 5, k, S * 6);
  o.strokeRect(A, j - S * 5, k, S * 6);
  o.fillStyle = Zp;
  o.font = `800 ${S * 11}px ${tm}`;
  o.textAlign = `left`;
  o.fillText(`${O} km`, A + k + S * 6, j + S * 1);
}
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
    t = t + 1831565813 | 0;
    let e = Math.imul(t ^ t >>> 15, t | 1);
    e = e + Math.imul(e ^ e >>> 7, e | 61) ^ e;
    return ((e ^ e >>> 14) >>> 0) / 4294967296;
  };
}
var om = new Float32Array([1, 1, -1, 1, 1, -1, -1, -1, 1, 0, -1, 0, 1, 0, -1, 0, 0, 1, 0, -1, 0, 1, 0, -1]);
var sm = (Math.sqrt(3) - 1) * 0.5;
var cm = (3 - Math.sqrt(3)) / 6;
var lm = class {
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
var um = {
  paved: 900,
  pavedWidth: 30,
  overrun: 60,
  shoulder: 15
};
var dm = (e, t, n) => e < t ? t : e > n ? n : e;
function fm(e, t, n) {
  let r = dm((n - e) / (t - e), 0, 1);
  return r * r * (3 - r * 2);
}
function pm(e) {
  let t = e => {
    e /= 255;
    if (e <= 0.04045) {
      return e / 12.92;
    } else {
      return ((e + 0.055) / 1.055) ** 2.4;
    }
  };
  return [t(e >> 16 & 255), t(e >> 8 & 255), t(e & 255)];
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
  farm: [pm(13029728), pm(9682764), pm(14466402), pm(7844168), pm(11389292), pm(13608544)]
};
var hm = 40;
var gm = 110;
var _m = 260;
var vm = class {
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
    this.nCont = new lm(im(e, 1));
    this.nHill = new lm(im(e, 2));
    this.nMask = new lm(im(e, 3));
    this.nRidge = new lm(im(e, 4));
    this.nWarp = new lm(im(e, 5));
    this.nForest = new lm(im(e, 7));
    this.nFarm = new lm(im(e, 8));
    this.nVar = new lm(im(e, 9));
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
    let o = fm(0.05, 0.55, this.nMask.noise(n / 8000, r / 8000)) * fm(-0.05, 0.25, i);
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
      return fm(0.04, 0.28, this.fbm(this.nForest, e / 1800, t / 1800, 3)) * (1 - fm(0.35, 0.5, r)) * (1 - fm(320, 430, n)) * (1 - fm(0, 0.3, i));
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
        let f = (l + (u >>> 16 & 65535) / 65536) * 230;
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
      o = r > 0.45 ? mm.airfield : this.forestDensity(e, t, n, s, r) > 0.45 ? this.nVar.noise(e / 300, t / 300) > 0 ? mm.forest : mm.forest2 : this.farmMask(e, t, n, s) > 0.5 && r < 0.05 ? mm.farm[this.farmCell(e, t) % mm.farm.length] : this.nVar.noise(e / 900, t / 900) > 0.1 ? mm.meadow2 : mm.meadow;
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
      mean: l
    };
  }
  searchField(e, t, n, r, i, a, o) {
    let s = {
      score: Infinity,
      x: e,
      z: t,
      heading: 0,
      mean: 20
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
              mean: r.mean
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
        home: o
      },
      score: s.score
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
      let i = n + r * Math.PI / 2 + (e() - 0.5) * 0.8;
      let a = 4500 + e() * 2500;
      let o = this.searchField(t.af.x + Math.cos(i) * a, t.af.z + Math.sin(i) * a, 1500, 250, e, r + 1, false);
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
      dist: r
    };
  }
};
var ym = 6711922;
var bm = 8225161;
var xm = 16052712;
var Sm = 16773552;
var Cm = 7070586;
var wm = new q(16730682);
var Tm = new q(16776692);
var Em = {
  a: [0.5, 2, 1, 0],
  b: [1, 1.5, 0, 1],
  c: [1, 0.5, 0, 1],
  d: [0.5, 0, 1, 0],
  e: [0, 0.5, 0, 1],
  f: [0, 1.5, 0, 1],
  g: [0.5, 1, 1, 0]
};
var Dm = [`abcdef`, `bc`, `abged`, `abgcd`, `fgbc`, `afgcd`, `afgedc`, `abc`, `abcdefg`, `abcdfg`];
function Om(e, t) {
  let n = Math.atan2(e, -t) * 180 / Math.PI;
  if (n < 0) {
    n += 360;
  }
  let r = Math.round(n / 10) % 36;
  if (r === 0) {
    r = 36;
  }
  return String(r).padStart(2, `0`);
}
var km = class {
  af;
  group = new fs();
  sock;
  previewSpot;
  papi;
  papiLights = [];
  bulbMat;
  constructor(e, t, n, r, i) {
    this.af = e;
    this.group.position.set(e.x, e.height, e.z);
    this.group.rotation.y = -e.heading;
    let a = e.length;
    let o = e.width;
    let s = e.paved;
    let c = e.pavedWidth;
    let l = [];
    for (let e = 0; e < 24; e++) {
      let t = a / 24;
      l.push(Z(new J(t, 0.1, o), e % 2 ? 11854714 : 9687130, {
        pos: [-a / 2 + t * (e + 0.5), 0.08, 0]
      }));
    }
    l.push(Z(new J(s, 0.1, c), ym, {
      pos: [0, 0.16, 0]
    }));
    let u = [];
    let d = (e, t, n, r) => u.push(Z(new J(n, 0.04, r), xm, {
      pos: [e, 0.29, t]
    }));
    for (let e of [-1, 1]) {
      let t = s / 2 * e;
      d(t - e * 2, 0, 1.5, c - 2);
      for (let n = 0; n < 4; n++) {
        for (let r of [-1, 1]) {
          d(t - e * 21, r * (2.5 + n * 3.2), 30, 1.8);
        }
      }
      for (let n of [-1, 1]) {
        d(t - e * 150, n * 7, 40, 4);
      }
      for (let n of [-1, 1]) {
        d(t - e * 250, n * 7, 25, 2);
      }
    }
    for (let e = -s / 2 + 80; e <= s / 2 - 80; e += 40) {
      d(e + 10, 0, 20, 0.9);
    }
    this.addNumber(d, -1, Om(e.dirX, e.dirZ), s);
    this.addNumber(d, 1, Om(-e.dirX, -e.dirZ), s);
    let f = o / 2 + 40;
    l.push(Z(new J(110, 0.1, 32), bm, {
      pos: [-50, 0.14, f - 16]
    }));
    l.push(Z(new J(14, 0.1, f - 32 - c / 2), bm, {
      pos: [-50, 0.14, c / 2 + (f - 32 - c / 2) / 2]
    }));
    let p = new Lr(Nd(l), r);
    p.receiveShadow = true;
    let m = new Lr(Nd(u), i);
    m.receiveShadow = true;
    this.group.add(p, m);
    let h = (e, t) => [Z(new J(34, 9, 26), t, {
      pos: [e, 4.5, f + 13]
    }), Z(new Mc(17, 17, 26, 12, 1, false, 0, Math.PI), 9277337, {
      pos: [e, 9, f + 13],
      rot: [Math.PI / 2, Math.PI / 2, 0],
      scale: [0.42, 1, 1],
      flat: true
    }), Z(new J(30, 8, 0.3), 3811872, {
      pos: [e, 4, f - 0.1]
    }), Z(new J(31, 0.6, 0.5), 16645104, {
      pos: [e, 8.3, f - 0.1]
    })];
    let g = [...h(-68, 14272417), ...h(-30, 13218698), Z(new Nc(5, 5, 4), 16182480, {
      pos: [20, 2.5, f + 4],
      rot: [0, Math.PI / 4, 0],
      flat: true
    }), Z(new Nc(4, 4.4, 4), 15259304, {
      pos: [34, 2.2, f + 6],
      rot: [0, Math.PI / 4, 0],
      flat: true
    }), ...[0, 1, 2].map(e => Z(new Mc(0.6, 0.6, 1.4, 8), 13191986, {
      pos: [6 + e * 1.5, 0.7, f + 2]
    })), Z(new Mc(0.15, 0.2, 8, 6), 16645104, {
      pos: [s / 2 - 120, 4, -o / 2 - 14]
    })];
    let _ = [];
    for (let e = -s / 2; e <= s / 2 + 0.1; e += 60) {
      for (let t of [-1, 1]) {
        let n = t * (c / 2 + 1.2);
        g.push(Z(new Mc(0.1, 0.14, 0.7, 6), 4013893, {
          pos: [e, 0.35, n]
        }));
        _.push([e, n, Math.abs(Math.abs(e) - s / 2) < 1 ? Cm : Sm]);
      }
    }
    let v = [];
    for (let e of [1, -1]) {
      for (let t = 0; t < 4; t++) {
        let n = -e * (s / 2 - 150);
        let r = -e * (c / 2 + 8 + t * 3);
        g.push(Z(new J(1.4, 0.9, 1.4), 15905076, {
          pos: [n, 0.45, r]
        }));
        v.push({
          x: n,
          z: r,
          dir: e,
          i: t
        });
      }
    }
    if (e.home) {
      g.push(Z(new Mc(0.12, 0.15, 10, 6), 16645104, {
        pos: [-110, 5, f]
      }));
      g.push(Z(new J(0.1, 2, 3.2), 2792847, {
        pos: [-110, 9, f + 1.6]
      }));
    }
    let y = Fd(Nd(g), t, n);
    y.receiveShadow = true;
    this.group.add(y);
    let b = _.map(([e, t, n]) => Z(new xl(0.32, 8, 6), n, {
      pos: [e, 0.8, t]
    }));
    let x = b.reduce((e, t) => e + t.getAttribute(`position`).count, 0);
    for (let e of v) {
      let t = Z(new xl(0.42, 8, 6), 16777215, {
        pos: [e.x - e.dir * 0.7, 0.55, e.z]
      });
      let n = t.getAttribute(`position`).count;
      let r = (3.5 - e.i * 0.33) * Math.PI / 180;
      this.papiLights.push({
        x: e.x,
        z: e.z,
        dir: e.dir,
        angle: r,
        start: x,
        count: n
      });
      x += n;
      b.push(t);
    }
    this.bulbMat = new dr({
      vertexColors: true
    });
    this.papi = new Lr(Nd(b), this.bulbMat);
    this.group.add(this.papi);
    this.sock = new fs();
    this.sock.position.set(s / 2 - 120, 7.6, -o / 2 - 14);
    let S = Nd([Z(new Mc(0.7, 0.35, 1.4, 8, 1, true), 16742954, {
      pos: [0, 0, -0.7],
      rot: [Math.PI / 2, 0, 0]
    }), Z(new Mc(0.35, 0.2, 1.2, 8, 1, true), 16645104, {
      pos: [0, 0, -2],
      rot: [Math.PI / 2, 0, 0]
    }), Z(new Mc(0.2, 0.12, 1, 8, 1, true), 16742954, {
      pos: [0, 0, -3.1],
      rot: [Math.PI / 2, 0, 0]
    })]);
    this.sock.add(Fd(S, t, n));
    this.group.add(this.sock);
    this.previewSpot = new G(-49, 0.2, f - 13);
  }
  addNumber(e, t, n, r) {
    let i = -t;
    let a = t * (r / 2 - 48);
    let o = 1.2;
    [...n].forEach((t, n) => {
      let r = (n === 0 ? -6.5 : 1.5) * i;
      for (let n of Dm[+t]) {
        let [t, s, c, l] = Em[n];
        e(a + i * ((s - 1) * 5), r + i * t * 5, l ? 6.2 : o, c ? 6.2 : o);
      }
    });
  }
  setWind(e) {
    let t = Math.hypot(e.x, e.z);
    if (t < 0.01) {
      return;
    }
    let n = Math.atan2(-e.x, -e.z);
    this.sock.rotation.set(-Math.min(0.9, (1 - Math.min(t / 8, 1)) * 0.9), n - this.group.rotation.y, 0, `YXZ`);
  }
  updatePapi(e) {
    let t = this.af;
    let n = e.x - t.x;
    let r = e.z - t.z;
    let i = n * t.dirX + r * t.dirZ;
    let a = -n * t.dirZ + r * t.dirX;
    if (Math.abs(i) > 8000 || Math.abs(a) > 8000) {
      return;
    }
    let o = this.papi.geometry.getAttribute(`color`);
    for (let n of this.papiLights) {
      let r = (n.x - i) * n.dir;
      let a = Math.atan2(e.y - t.height, Math.max(r, 1));
      let s = r > 0 && a < n.angle ? wm : Tm;
      for (let e = n.start; e < n.start + n.count; e++) {
        o.setXYZ(e, s.r, s.g, s.b);
      }
    }
    o.needsUpdate = true;
  }
  dispose() {
    this.group.traverse(e => {
      if (e instanceof Lr && e.name !== `outline`) {
        e.geometry.dispose();
      }
    });
    this.bulbMat.dispose();
  }
};
function Am(e) {
  if (e <= 1) {
    return {
      res: 64,
      props: true
    };
  } else if (e <= 2) {
    return {
      res: 32,
      props: true
    };
  } else if (e <= 4) {
    return {
      res: 16,
      props: false
    };
  } else {
    return {
      res: 8,
      props: false
    };
  }
}
var jm = class {
  seed;
  material;
  radius;
  group = new fs();
  entries = new Map();
  workers = [];
  idle = [];
  pending = new Map();
  ready = [];
  nextId = 1;
  propsVersion = 0;
  disposed = false;
  constructor(e, t, n) {
    this.seed = e;
    this.material = t;
    this.radius = n;
    this.group.name = `terrain`;
    let r = typeof matchMedia == `function` && matchMedia(`(pointer: coarse)`).matches;
    let i = Math.max(1, Math.min(r ? 2 : 4, (navigator.hardwareConcurrency || 4) - 1));
    for (let e = 0; e < i; e++) {
      let t = new Worker(new URL(`/assets/chunk.worker.js`, `${import.meta.url}`), {
        type: `module`
      });
      t.onmessage = t => {
        this.idle[e] = true;
        if (this.disposed) {
          return;
        }
        let n = this.pending.get(t.data.id);
        this.pending.delete(t.data.id);
        if (n && n.pendingId === t.data.id) {
          this.ready.push(t.data);
        }
      };
      this.workers.push(t);
      this.idle.push(true);
    }
  }
  key(e, t) {
    return `${e},${t}`;
  }
  update(e, t, n = 2.5) {
    let r = this.radius;
    let i = Math.floor(e.x / 512);
    let a = Math.floor(e.z / 512);
    let o = t ? 3 : 0;
    let s = (e.x + (t ? t.x * o : 0)) / 512;
    let c = (e.z + (t ? t.z * o : 0)) / 512;
    for (let e = -r; e <= r; e++) {
      for (let t = -r; t <= r; t++) {
        if (t * t + e * e > (r + 0.5) * (r + 0.5)) {
          continue;
        }
        let n = i + t;
        let o = a + e;
        let s = Am(Math.max(Math.abs(t), Math.abs(e)));
        let c = this.key(n, o);
        let l = this.entries.get(c);
        if (!l) {
          l = {
            cx: n,
            cz: o,
            res: 0,
            props: false,
            wantRes: 0,
            wantProps: false,
            pendingId: 0,
            pendingRes: 0,
            pendingProps: false,
            mesh: null,
            propData: null
          };
          this.entries.set(c, l);
        }
        l.wantRes = s.res;
        l.wantProps = s.props;
      }
    }
    for (let [e, t] of this.entries) {
      let n = t.cx - i;
      let o = t.cz - a;
      if (n * n + o * o > (r + 1.5) * (r + 1.5)) {
        this.removeEntry(t);
        this.entries.delete(e);
      }
    }
    if (this.idle.filter(e => e).length > 0) {
      let e = [];
      for (let t of this.entries.values()) {
        let n = t.res === t.wantRes && t.props === t.wantProps;
        let r = t.pendingId !== 0 && t.pendingRes === t.wantRes && t.pendingProps === t.wantProps;
        if (n || r) {
          continue;
        }
        let i = t.cx + 0.5 - s;
        let a = t.cz + 0.5 - c;
        e.push({
          e: t,
          pri: i * i + a * a + (t.res === 0 ? 0 : 6)
        });
      }
      e.sort((e, t) => e.pri - t.pri);
      let t = 0;
      for (let n = 0; n < this.workers.length && t < e.length; n++) {
        if (!this.idle[n]) {
          continue;
        }
        let r = e[t++].e;
        let i = this.nextId++;
        r.pendingId = i;
        r.pendingRes = r.wantRes;
        r.pendingProps = r.wantProps;
        this.pending.set(i, r);
        this.idle[n] = false;
        let a = {
          id: i,
          seed: this.seed,
          cx: r.cx,
          cz: r.cz,
          res: r.wantRes,
          props: r.wantProps
        };
        this.workers[n].postMessage(a);
      }
    }
    let l = performance.now();
    while (this.ready.length && performance.now() - l < n) {
      let e = this.ready.shift();
      let t = this.entries.get(this.key(e.cx, e.cz));
      if (t && t.pendingId === e.id) {
        this.applyChunk(t, e);
      }
    }
  }
  applyChunk(e, t) {
    let n = new Tr();
    n.setAttribute(`position`, new mr(t.positions, 3));
    n.setAttribute(`normal`, new mr(t.normals, 3));
    n.setAttribute(`color`, new mr(t.colors, 3));
    n.setIndex(new mr(t.indices, 1));
    n.computeBoundingSphere();
    let r = new Lr(n, this.material);
    r.position.set(t.cx * 512, 0, t.cz * 512);
    r.receiveShadow = true;
    r.matrixAutoUpdate = false;
    r.updateMatrix();
    if (e.mesh) {
      this.group.remove(e.mesh);
      e.mesh.geometry.dispose();
    }
    this.group.add(r);
    e.mesh = r;
    e.res = t.res;
    e.pendingId = 0;
    let i = e.props;
    e.props = t.hasProps;
    if (t.hasProps) {
      e.propData = t.props;
      this.propsVersion++;
    } else if (i) {
      e.propData = null;
      this.propsVersion++;
    }
  }
  removeEntry(e) {
    if (e.pendingId) {
      this.pending.delete(e.pendingId);
    }
    e.pendingId = 0;
    e.mesh &&= (this.group.remove(e.mesh), e.mesh.geometry.dispose(), null);
    if (e.propData) {
      this.propsVersion++;
    }
    e.propData = null;
  }
  forEachProps(e) {
    for (let t of this.entries.values()) {
      if (t.propData && t.propData.length) {
        e(t.cx, t.cz, t.propData);
      }
    }
  }
  readiness(e, t) {
    let n = Math.floor(e.x / 512);
    let r = Math.floor(e.z / 512);
    let i = 0;
    let a = 0;
    for (let e = -t; e <= t; e++) {
      for (let o = -t; o <= t; o++) {
        i++;
        let t = this.entries.get(this.key(n + o, r + e));
        if (t && t.res !== 0 && t.res === t.wantRes && t.props === t.wantProps) {
          a++;
        }
      }
    }
    return a / i;
  }
  get chunkCount() {
    return this.group.children.length;
  }
  dispose() {
    this.disposed = true;
    for (let e of this.workers) {
      e.terminate();
    }
    for (let e of this.entries.values()) {
      this.removeEntry(e);
    }
    this.entries.clear();
  }
};
var Mm = 200;
var Nm = 260;
var Pm = 1600;
var Fm = 5000;
var Im = class {
  seed;
  ground;
  group = new fs();
  mesh;
  outline;
  noise;
  spheres = new Float32Array(Fm * 4);
  count = 0;
  lastCell = {
    x: 1000000000,
    z: 1000000000
  };
  drift = new G();
  cover;
  radiusCells = 5;
  constructor(e, t, n = () => 0) {
    this.seed = e;
    this.ground = n;
    this.noise = new lm(im(e, 555));
    this.cover = t === `clear` ? -0.45 : t === `overcast` ? 0.45 : 0;
    let r = new _l(1, 1);
    Md(r);
    let i = Vd({
      color: 16777215,
      ramp: [196, 236, 255],
      rim: 0.12
    });
    this.mesh = new ec(r, i, Fm);
    this.mesh.count = 0;
    this.mesh.frustumCulled = false;
    this.outline = new ec(r, Rd(9413575, 1.2, 2500), Fm);
    this.outline.instanceMatrix = this.mesh.instanceMatrix;
    this.outline.count = 0;
    this.outline.frustumCulled = false;
    this.group.add(this.mesh, this.outline);
    this.group.name = `clouds`;
  }
  build(e, t) {
    let n = new K();
    let r = new Bt();
    let i = new G();
    let a = new G();
    let o = 0;
    let s = this.radiusCells;
    for (let c = -s; c <= s; c++) {
      for (let l = -s; l <= s; l++) {
        if (l * l + c * c > (s + 0.5) * (s + 0.5)) {
          continue;
        }
        let u = e + l;
        let d = t + c;
        let f = am(im(this.seed, u, d, 777));
        let p = this.noise.noise(u * 0.31, d * 0.31) + this.cover;
        let m = Math.max(0, Math.floor((p + 0.55) * 2.6 + f() * 0.9));
        for (let e = 0; e < m; e++) {
          let e = (u + f()) * Pm;
          let t = (d + f()) * Pm;
          let s = Math.max(this.ground(e, t), 0) + Mm + f() * Nm;
          let c = 110 + f() * 230;
          let l = 6 + Math.floor(f() * 9);
          let p = 1 + f() * 0.8;
          let m = f() * Math.PI;
          for (let u = 0; u < l && o < Fm; u++) {
            let l = f() * Math.PI * 2;
            let u = Math.sqrt(f()) * c;
            let d = Math.cos(l) * u * p;
            let h = Math.sin(l) * u;
            let g = d * Math.cos(m) - h * Math.sin(m);
            let _ = d * Math.sin(m) + h * Math.cos(m);
            d = g;
            let v = 1 - u / c * 0.55;
            let y = c * (0.32 + f() * 0.22) * v;
            let b = s + y * 0.45 + f() * c * 0.25 * v;
            b = Math.max(b, Math.max(this.ground(e + d, t + _), 0) + 120 + y * 0.85);
            this.spheres[o * 4] = e + d;
            this.spheres[o * 4 + 1] = b;
            this.spheres[o * 4 + 2] = t + _;
            this.spheres[o * 4 + 3] = y;
            i.set(e + d, b, t + _);
            r.setFromAxisAngle(Un.DEFAULT_UP, f() * 6.28);
            a.set(y, y * (0.78 + f() * 0.15), y);
            n.compose(i, r, a);
            this.mesh.setMatrixAt(o, n);
            o++;
          }
        }
      }
    }
    this.count = o;
    this.mesh.count = o;
    this.outline.count = o;
    this.mesh.instanceMatrix.needsUpdate = true;
  }
  update(e, t, n) {
    this.drift.addScaledVector(n, t * 1.5);
    this.group.position.set(this.drift.x, 0, this.drift.z);
    let r = e.x - this.drift.x;
    let i = e.z - this.drift.z;
    let a = Math.floor(r / Pm);
    let o = Math.floor(i / Pm);
    if (a !== this.lastCell.x || o !== this.lastCell.z) {
      this.lastCell = {
        x: a,
        z: o
      };
      this.build(a, o);
    }
  }
  densityAt(e) {
    let t = e.x - this.drift.x;
    let n = e.y;
    let r = e.z - this.drift.z;
    let i = 0;
    let a = this.spheres;
    for (let e = 0; e < this.count; e++) {
      let o = (n - a[e * 4 + 1]) / 0.85;
      let s = a[e * 4 + 3];
      if (Math.abs(o) > s) {
        continue;
      }
      let c = t - a[e * 4];
      let l = r - a[e * 4 + 2];
      let u = (c * c + o * o + l * l) / (s * s);
      if (u < 1) {
        i = Math.max(i, 1 - Math.sqrt(u));
      }
    }
    return i;
  }
  setVisibleRadius(e) {
    this.radiusCells = e;
    this.lastCell = {
      x: 1000000000,
      z: 1000000000
    };
  }
  dispose() {
    this.mesh.geometry.dispose();
    this.mesh.material.dispose();
    this.outline.material.dispose();
    this.mesh.dispose();
  }
};
function Lm() {
  return Nd([Z(new Mc(0.35, 0.45, 3, 6), 8014634, {
    pos: [0, 1.5, 0]
  }), Z(new Nc(3, 5, 7), 3112250, {
    pos: [0, 5, 0],
    flat: true
  }), Z(new Nc(2.3, 4.2, 7), 3837762, {
    pos: [0, 7.6, 0],
    flat: true
  }), Z(new Nc(1.5, 3.4, 7), 4694090, {
    pos: [0, 9.9, 0],
    flat: true
  })]);
}
function Rm() {
  return Nd([Z(new Mc(0.4, 0.55, 4, 6), 8014634, {
    pos: [0, 2, 0]
  }), Z(new _l(3.4, 0), 6271043, {
    pos: [0, 6.2, 0],
    flat: true
  }), Z(new _l(2.2, 0), 7323724, {
    pos: [1.4, 8, 0.6],
    flat: true
  })]);
}
function zm() {
  return Nd([Z(new J(9, 5, 7), 16773327, {
    pos: [0, 2.5, 0]
  }), Z(new Mc(4.6, 4.6, 9.6, 3, 1), 13784381, {
    pos: [0, 6.2, 0],
    rot: [0, 0, Math.PI / 2],
    scale: [1, 1, 0.9],
    flat: true
  }), Z(new J(1.4, 2.6, 0.2), 7028514, {
    pos: [0, 1.3, 3.55]
  }), Z(new J(1.4, 1.2, 0.2), 8308963, {
    pos: [-2.7, 2.8, 3.55]
  }), Z(new J(1.4, 1.2, 0.2), 8308963, {
    pos: [2.7, 2.8, 3.55]
  }), Z(new J(1, 2.4, 1), 10115652, {
    pos: [2.6, 7.4, -1.2]
  })]);
}
function Bm() {
  return Nd([Z(new J(13, 7, 9), 12992046, {
    pos: [0, 3.5, 0]
  }), Z(new Mc(6, 6, 13.6, 3, 1), 5980726, {
    pos: [0, 8.2, 0],
    rot: [0, 0, Math.PI / 2],
    scale: [1, 1, 0.82],
    flat: true
  }), Z(new J(4, 5, 0.2), 16773327, {
    pos: [0, 2.5, 4.55]
  })]);
}
function Vm() {
  return Nd([Z(new Mc(2.2, 3.6, 14, 8), 16773327, {
    pos: [0, 7, 0],
    flat: true
  }), Z(new Nc(3, 4, 8), 8014634, {
    pos: [0, 16, 0],
    flat: true
  }), Z(new J(0.8, 16, 0.3), 9067066, {
    pos: [0, 13, 3.3],
    rot: [0, 0, 0.4]
  }), Z(new J(16, 0.8, 0.3), 9067066, {
    pos: [0, 13, 3.3],
    rot: [0, 0, 0.4]
  })]);
}
var Hm = {
  0: 30000,
  1: 30000,
  2: 3000,
  3: 2000,
  4: 600
};
var Um = class {
  group = new fs();
  meshes = new Map();
  version = -1;
  constructor(e, t) {
    this.group.name = `props`;
    let n = [[0, Lm()], [1, Rm()], [2, zm()], [3, Bm()], [4, Vm()]];
    for (let [r, i] of n) {
      let n = new ec(i, e, Hm[r]);
      n.count = 0;
      n.castShadow = true;
      n.receiveShadow = true;
      n.frustumCulled = false;
      let a = new ec(i, t, Hm[r]);
      a.instanceMatrix = n.instanceMatrix;
      a.count = 0;
      a.frustumCulled = false;
      this.group.add(n, a);
      this.meshes.set(r, {
        mesh: n,
        outline: a
      });
    }
  }
  update(e) {
    if (e.propsVersion === this.version) {
      return;
    }
    this.version = e.propsVersion;
    let t = new Map();
    for (let e of this.meshes.keys()) {
      t.set(e, 0);
    }
    let n = new K();
    let r = new Bt();
    let i = new G();
    let a = new G();
    let o = new G(0, 1, 0);
    e.forEachProps((e, s, c) => {
      for (let l = 0; l < c.length; l += 6) {
        let u = c[l + 5];
        let d = this.meshes.get(u);
        if (!d) {
          continue;
        }
        let f = t.get(u);
        if (!(f >= Hm[u])) {
          i.set(e * 512 + c[l], c[l + 1], s * 512 + c[l + 2]);
          r.setFromAxisAngle(o, c[l + 4]);
          a.setScalar(c[l + 3]);
          n.compose(i, r, a);
          d.mesh.setMatrixAt(f, n);
          t.set(u, f + 1);
        }
      }
    });
    for (let [e, n] of this.meshes) {
      let r = t.get(e);
      n.mesh.count = r;
      n.outline.count = r;
      n.mesh.instanceMatrix.needsUpdate = true;
    }
  }
  get instanceTotal() {
    let e = 0;
    for (let t of this.meshes.values()) {
      e += t.mesh.count;
    }
    return e;
  }
  dispose() {
    for (let e of this.meshes.values()) {
      e.mesh.geometry.dispose();
      e.mesh.dispose();
      e.outline.dispose();
    }
  }
};
var Wm = class {
  seed;
  gen;
  group = new fs();
  chunks;
  props;
  clouds;
  fields = [];
  time;
  cover;
  wind = new G();
  baseWind = new G();
  t = 0;
  hCache = new Map();
  terrainMat;
  propMat;
  propOutline;
  stripMat;
  markMat;
  constructor(e, t) {
    this.seed = e;
    this.gen = new vm(e);
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
      ramp: [128, 198, 255]
    });
    this.propMat = Vd({
      vertexColors: true,
      rim: 0.2
    });
    this.propOutline = Rd(this.time.ink, 1, 300);
    this.stripMat = Vd({
      vertexColors: true,
      rim: 0
    });
    this.stripMat.polygonOffset = true;
    this.stripMat.polygonOffsetFactor = -2;
    this.stripMat.polygonOffsetUnits = -4;
    this.markMat = Vd({
      vertexColors: true,
      rim: 0
    });
    this.markMat.polygonOffset = true;
    this.markMat.polygonOffsetFactor = -4;
    this.markMat.polygonOffsetUnits = -16;
    this.chunks = new jm(e, this.terrainMat, t);
    this.props = new Um(this.propMat, this.propOutline);
    this.clouds = new Im(e, this.cover, (e, t) => this.gen.height(e, t));
    this.group.add(this.chunks.group, this.props.group, this.clouds.group);
    for (let e of this.gen.airfields) {
      let t = new km(e, this.propMat, this.propOutline, this.stripMat, this.markMat);
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
    let r = 1 + Math.sin(this.t * 0.31) * 0.25 + Math.sin(this.t * 1.13 + 1.7) * 0.12;
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
    this.clouds.setVisibleRadius(Math.max(3, Math.round(e * 512 / 1600) + 1));
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
var Gm = new G();
var Km = new G();
var qm = new G();
var Jm = new G();
var Ym = new K();
var Xm = class {
  camera;
  mode = `chase`;
  q = new Bt();
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
  cockpit = new G(0, 0.98, 0.32);
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
      Gm.set(0, this.chaseScale * 3.4, this.chaseScale * 13.5).applyQuaternion(this.q);
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
    let s = this.baseFov + dt.clamp((r - 30) / 45, 0, 1) * 10;
    if (Math.abs(a.fov - s) > 0.05) {
      a.fov += (s - a.fov) * Math.min(1, e * 3);
      a.updateProjectionMatrix();
    }
    this.applyShake(e);
  }
  orbit(e, t, n, r, i = 0.05) {
    this.orbitAngle += e * i;
    let a = this.camera;
    a.position.set(t.x + Math.cos(this.orbitAngle) * n, t.y + r, t.z + Math.sin(this.orbitAngle) * n);
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
var Zm = Math.tan(Math.PI * 4 / 180);
var Qm = 0.08;
var $m = 20;
var eh = 350;
var th = 800;
var nh = 3000;
var rh = 150;
var ih = 350;
var ah = 2.5;
var oh = 120;
var sh = 60;
var ch = 200;
function lh(e, t) {
  if (t.x * e.dirX + t.z * e.dirZ > 0) {
    return {
      dx: -e.dirX,
      dz: -e.dirZ
    };
  } else {
    return {
      dx: e.dirX,
      dz: e.dirZ
    };
  }
}
var uh = [`North`, `Northeast`, `East`, `Southeast`, `South`, `Southwest`, `West`, `Northwest`];
function dh(e, t, n, r) {
  return (Math.atan2(n - e, -(r - t)) * 180 / Math.PI + 360) % 360;
}
function fh(e) {
  let t = e[0];
  let n = e.map((e, n) => {
    if (n === 0) {
      return `Home Field`;
    }
    let r = dh(t.x, t.z, e.x, e.z);
    return `${uh[Math.round(r / 45) % 8]} Field`;
  });
  for (let r = 1; r < n.length; r++) {
    for (let i = r + 1; i < n.length; i++) {
      if (n[r] === n[i]) {
        if (Math.hypot(e[r].x - t.x, e[r].z - t.z) > Math.hypot(e[i].x - t.x, e[i].z - t.z)) {
          n[r] = `Far ${n[r]}`;
        } else {
          n[i] = `Far ${n[i]}`;
        }
      }
    }
  }
  return n;
}
var ph = {
  biplane: 700,
  turboprop: 1000,
  jet: 1500
};
var mh = {
  biplane: 44,
  turboprop: 72,
  jet: 115
};
var hh = Math.PI * 2;
var gh = e => (e % hh + hh) % hh;
function _h(e, t, n) {
  let r = Math.sin(e);
  let i = Math.sin(t);
  let a = Math.cos(e);
  let o = Math.cos(t);
  let s = Math.cos(e - t);
  let c = [];
  {
    let l = 2 + n * n - s * 2 + n * 2 * (r - i);
    if (l >= 0) {
      let s = Math.atan2(o - a, n + r - i);
      c.push([[`L`, `S`, `L`], gh(-e + s), Math.sqrt(l), gh(t - s)]);
    }
  }
  {
    let l = 2 + n * n - s * 2 + n * 2 * (i - r);
    if (l >= 0) {
      let s = Math.atan2(a - o, n - r + i);
      c.push([[`R`, `S`, `R`], gh(e - s), Math.sqrt(l), gh(-t + s)]);
    }
  }
  {
    let l = -2 + n * n + s * 2 + n * 2 * (r + i);
    if (l >= 0) {
      let s = Math.sqrt(l);
      let u = Math.atan2(-a - o, n + r + i) - Math.atan2(-2, s);
      c.push([[`L`, `S`, `R`], gh(-e + u), s, gh(-t + u)]);
    }
  }
  {
    let l = n * n - 2 + s * 2 - n * 2 * (r + i);
    if (l >= 0) {
      let s = Math.sqrt(l);
      let u = Math.atan2(a + o, n - r - i) - Math.atan2(2, s);
      c.push([[`R`, `S`, `L`], gh(e - u), s, gh(t - u)]);
    }
  }
  return c;
}
function vh(e, t, n, r, i, a) {
  let {
    x: o,
    z: s,
    h: c
  } = e;
  for (let e = 0; e < 3; e++) {
    let l = n[e] * r;
    let u = Math.max(1, Math.ceil(l / i));
    let d = l / u;
    for (let n = 0; n < u; n++) {
      if (t[e] === `S`) {
        o += Math.cos(c) * d;
        s += Math.sin(c) * d;
      } else {
        let n = d / r * (t[e] === `L` ? 1 : -1);
        let i = r * 2 * Math.sin(Math.abs(n) / 2);
        let a = c + n / 2;
        o += Math.cos(a) * i;
        s += Math.sin(a) * i;
        c += n;
      }
      a?.(o, s);
    }
  }
  return {
    x: o,
    z: s,
    h: c
  };
}
function yh(e, t, n, r = $m) {
  let i = t.x - e.x;
  let a = t.z - e.z;
  let o = Math.hypot(i, a) / n;
  let s = Math.atan2(a, i);
  let c = gh(e.h - s);
  let l = gh(t.h - s);
  let u = null;
  for (let [r, i, a, s] of _h(c, l, o)) {
    let o = i + a + s;
    if (u && o >= u.len) {
      continue;
    }
    let c = vh(e, r, [i, a, s], n, 50);
    if (!(Math.hypot(c.x - t.x, c.z - t.z) > 2) && !(Math.abs(Math.sin((c.h - t.h) / 2)) > 0.01)) {
      u = {
        word: r,
        lens: [i, a, s],
        len: o
      };
    }
  }
  let d = [];
  if (!u) {
    let t = Math.max(1, Math.ceil(Math.hypot(i, a) / r));
    for (let n = 1; n <= t; n++) {
      d.push({
        x: e.x + i * n / t,
        z: e.z + a * n / t
      });
    }
    return d;
  }
  vh(e, u.word, u.lens, n, r, (e, t) => d.push({
    x: e,
    z: t
  }));
  d[d.length - 1] = {
    x: t.x,
    z: t.z
  };
  return d;
}
function bh(e, t, n, r, i = 700) {
  let a = lh(t, r);
  let o = lh(n, r);
  let s = e => ({
    dx: -e.dx,
    dz: -e.dz
  });
  let c = Math.hypot(r.x, r.z) * xh;
  let l = null;
  for (let [r, u] of [[a, 0], [s(a), c]]) {
    for (let [a, d] of [[o, 0], [s(o), c]]) {
      for (let o of [th, 300]) {
        let s = Sh(e, t, n, r, a, o, i);
        let c = s.violation * 40000 + (Math.max(0, s.r.climb - 0.1) + Math.max(0, s.r.glide - 0.1)) * 400000;
        let f = s.r.length + u + d + (o === th ? 0 : 300) + c;
        if (!l || f < l.score) {
          l = {
            r: s.r,
            score: f
          };
        }
      }
    }
  }
  return l.r;
}
var xh = 1800;
function Sh(e, t, n, r, i, a, o) {
  let s = (t, n) => Math.max(e.height(t, n), 0);
  let c = [];
  let l = (e, t, n, r, i) => {
    let a = Math.max(1, Math.ceil(Math.hypot(n - e, r - t) / $m));
    for (let o = +!i; o <= a; o++) {
      c.push({
        x: e + (n - e) * o / a,
        z: t + (r - t) * o / a
      });
    }
  };
  let u = t.paved / 2 - 20;
  let d = t.x - r.dx * u;
  let f = t.z - r.dz * u;
  let p = t.x + r.dx * (t.paved / 2 + a);
  let m = t.z + r.dz * (t.paved / 2 + a);
  let h = n.x - i.dx * (n.paved / 2);
  let g = n.z - i.dz * (n.paved / 2);
  let _ = h + i.dx * rh;
  let v = g + i.dz * rh;
  let y = _ - i.dx * nh;
  let b = v - i.dz * nh;
  l(d, f, p, m, true);
  for (let e of yh({
    x: p,
    z: m,
    h: Math.atan2(r.dz, r.dx)
  }, {
    x: y,
    z: b,
    h: Math.atan2(i.dz, i.dx)
  }, o)) {
    c.push(e);
  }
  let x = c.length - 1;
  l(y, b, _, v, false);
  let S = c.length - 1;
  l(_, v, _ + i.dx * ih, v + i.dz * ih, false);
  let C = c.length;
  let w = new Float64Array(C);
  for (let e = 1; e < C; e++) {
    w[e] = w[e - 1] + Math.hypot(c[e].x - c[e - 1].x, c[e].z - c[e - 1].z);
  }
  let T = eh;
  let E = w[S];
  let D = w[x];
  let O = new Float64Array(C);
  let k = new Float64Array(C);
  for (let e = 0; e < C; e++) {
    let t = Math.min(C - 1, e + 1);
    let n = Math.max(0, e - 1);
    let r = c[t].x - c[n].x;
    let i = c[t].z - c[n].z;
    let a = Math.hypot(r, i) || 1;
    r /= a;
    i /= a;
    O[e] = s(c[e].x, c[e].z);
    let o = O[e];
    for (let t of [-200, -100, 100, 200]) {
      o = Math.max(o, s(c[e].x - i * t, c[e].z + r * t));
    }
    k[e] = o;
  }
  let A = Math.round(200 / $m);
  let j = new Float64Array(C);
  for (let e = 0; e < C; e++) {
    let t = 0;
    for (let n = Math.max(0, e - A); n <= Math.min(C - 1, e + A); n++) {
      t = Math.max(t, k[n]);
    }
    j[e] = t;
  }
  let ee = t.height + ah;
  let te = n.height + ah;
  let M = u + t.paved / 2;
  let N = E - rh;
  let P = Math.max(t.height, n.height) + ch;
  let ne = new Float64Array(C);
  let re = new Float64Array(C);
  for (let e = 0; e < C; e++) {
    if (w[e] <= T) {
      ne[e] = re[e] = ee;
    } else if (w[e] >= E) {
      ne[e] = re[e] = te;
    } else {
      let t = w[e] > M && w[e] < N ? Math.min(sh, 10 + (w[e] - M) * Qm * 0.6, 10 + (N - w[e]) * Zm * 0.6) : 0;
      ne[e] = O[e] + t;
      re[e] = Math.max(ne[e], j[e] + oh, P);
    }
  }
  let ie = Qm;
  let ae = Zm;
  for (let e = 0; e < C; e++) {
    if (w[e] > 351) {
      ie = Math.max(ie, (ne[e] - ee) / (w[e] - T));
    }
    if (w[e] < E - 1) {
      ae = Math.max(ae, (ne[e] - te) / (E - w[e]));
    }
  }
  let oe = (e, t, n) => {
    let r = new Float64Array(C);
    let i = new Float64Array(C);
    r[C - 1] = e[C - 1];
    for (let n = C - 2; n >= 0; n--) {
      r[n] = Math.max(e[n], r[n + 1] - t * (w[n + 1] - w[n]));
    }
    i[0] = e[0];
    for (let t = 1; t < C; t++) {
      i[t] = Math.max(e[t], i[t - 1] - n * (w[t] - w[t - 1]));
    }
    for (let e = 0; e < C; e++) {
      r[e] = Math.max(r[e], i[e]);
    }
    return r;
  };
  let se = oe(ne, ie, ae);
  let F = oe(re, Qm, Zm);
  let ce = Math.round(300 / $m);
  let le = [];
  let ue = 0;
  for (let e = 0; e < C; e++) {
    let t = 0;
    let n = 0;
    for (let r = Math.max(0, e - ce); r <= Math.min(C - 1, e + ce); r++) {
      t += F[r];
      n++;
    }
    let r = Math.max(F[e], t / n);
    let i = ee + Math.max(0, w[e] - T) * ie;
    let a = te + Math.max(0, E - w[e]) * ae;
    let o = Math.max(Math.min(r, i, a), se[e]);
    ue = Math.max(ue, o);
    le.push({
      x: c[e].x,
      y: o,
      z: c[e].z,
      s: w[e]
    });
  }
  let de = Math.max(0, ie - Qm) + Math.max(0, ae - Zm);
  return {
    r: {
      from: t,
      to: n,
      pts: le,
      length: w[C - 1],
      depart: r,
      land: i,
      sLift: T,
      sAim: E,
      sFinal: D,
      turnRadius: o,
      maxAlt: ue,
      climb: ie,
      glide: ae
    },
    violation: de
  };
}
function Ch(e, t, n) {
  let r = e.pts;
  if (t <= 0) {
    return Object.assign(n, {
      x: r[0].x,
      y: r[0].y,
      z: r[0].z
    });
  }
  if (t >= e.length) {
    let e = r[r.length - 1];
    return Object.assign(n, {
      x: e.x,
      y: e.y,
      z: e.z
    });
  }
  let i = 0;
  let a = r.length - 1;
  while (a - i > 1) {
    let e = i + a >> 1;
    if (r[e].s <= t) {
      i = e;
    } else {
      a = e;
    }
  }
  let o = r[i];
  let s = r[a];
  let c = (t - o.s) / (s.s - o.s || 1);
  n.x = o.x + (s.x - o.x) * c;
  n.y = o.y + (s.y - o.y) * c;
  n.z = o.z + (s.z - o.z) * c;
  return n;
}
var wh = class {
  route;
  idx = 0;
  progress = 0;
  lateral = 0;
  vertical = 0;
  constructor(e) {
    this.route = e;
  }
  update(e, t, n) {
    let r = this.route.pts;
    let i = (i, a) => {
      let o = -1;
      let s = Infinity;
      for (let c = Math.max(0, i); c <= Math.min(r.length - 1, a); c++) {
        let i = r[c];
        let a = (i.x - e) ** 2 + (i.z - n) ** 2 + ((i.y - t) * 2) ** 2;
        if (a < s) {
          s = a;
          o = c;
        }
      }
      return {
        best: o,
        bd: s
      };
    };
    let a = i(this.idx - 5, this.idx + 150);
    if (a.bd > 2250000) {
      let e = i(this.idx - 5, r.length - 1);
      if (e.bd < a.bd) {
        a = e;
      }
    }
    if (a.best >= 0) {
      this.idx = a.best;
    }
    let o = r[this.idx];
    this.progress = o.s;
    this.lateral = Math.hypot(o.x - e, o.z - n);
    this.vertical = t - o.y;
  }
  onPath() {
    return this.lateral < 150 && Math.abs(this.vertical) < 70;
  }
};
var Th = `modulepreload`;
function Eh(e) {
  return `/${e}`;
}
var Dh = {};
function Oh(e) {
  return e.pathname.endsWith(`.css`);
}
function kh(e, t, n) {
  if (t in e) {
    return e[t];
  }
  let r = n();
  if (!r) {
    e[t] = undefined;
    return;
  }
  let i = r.then(() => {
    e[t] = undefined;
  }, n => {
    e[t] = undefined;
    throw n;
  });
  e[t] = i;
  return i;
}
function Ah(e, t, n) {
  let r = Promise.resolve();
  if (t && t.length > 0) {
    let e;
    let i = document.querySelector(`meta[property=csp-nonce]`);
    let a = i?.nonce || i?.getAttribute(`nonce`);
    function o(e) {
      return Promise.all(e.map(e => Promise.resolve(e).then(e => ({
        status: `fulfilled`,
        value: e
      }), e => ({
        status: `rejected`,
        reason: e
      }))));
    }
    function s(e) {
      if (import.meta.resolve) {
        return new URL(import.meta.resolve(e));
      } else {
        return new URL(e, import.meta.url);
      }
    }
    r = o(t.map(t => {
      t = Eh(t, n);
      let r = s(t);
      let i = Oh(r);
      return kh(Dh, r.href, () => {
        if (e === undefined) {
          e = {
            all: new Set(),
            styles: new Set()
          };
          let t = document.getElementsByTagName(`link`);
          for (let n = t.length - 1; n >= 0; n--) {
            let r = t[n];
            e.all.add(r.href);
            if (r.rel === `stylesheet`) {
              e.styles.add(r.href);
            }
          }
        }
        if ((i ? e.styles : e.all).has(r.href)) {
          return;
        }
        let t = document.createElement(`link`);
        t.rel = i ? `stylesheet` : Th;
        if (!i) {
          t.as = `script`;
        }
        t.crossOrigin = ``;
        t.href = r.href;
        if (a) {
          t.setAttribute(`nonce`, a);
        }
        document.head.appendChild(t);
        if (i) {
          return new Promise((e, n) => {
            let i = a => {
              t.removeEventListener(`load`, i);
              t.removeEventListener(`error`, i);
              if (a.type === `error`) {
                n(Error(`Unable to preload CSS for ${r}`));
              } else {
                e(a);
              }
            };
            t.addEventListener(`load`, i);
            t.addEventListener(`error`, i);
          });
        }
      });
    }).filter(e => e !== undefined));
  }
  function i(e) {
    let t = new Event(`vite:preloadError`, {
      cancelable: true
    });
    t.payload = e;
    window.dispatchEvent(t);
    if (!t.defaultPrevented) {
      throw e;
    }
  }
  return r.then(t => {
    for (let e of t || []) {
      if (e.status === `rejected`) {
        i(e.reason);
      }
    }
    return e().catch(i);
  });
}
var jh = {
  mobile: {
    radius: 3,
    post: false,
    shadows: false,
    shadowSize: 1024,
    maxPR: 1.25
  },
  low: {
    radius: 4,
    post: false,
    shadows: false,
    shadowSize: 1024,
    maxPR: 1
  },
  medium: {
    radius: 6,
    post: true,
    shadows: true,
    shadowSize: 1024,
    maxPR: 1.5
  },
  high: {
    radius: 8,
    post: true,
    shadows: true,
    shadowSize: 2048,
    maxPR: 2
  }
};
var Mh = new G();
var Nh = new G();
var Ph = new G();
var Fh = class {
  renderer;
  scene = new Ts();
  camera = new Qr(70, 1, 0.5, 6000);
  settings;
  input;
  loop;
  rig;
  post = new tp();
  sky = new ip();
  water = new ap();
  sun = new Wl(16777215, 2.8);
  hemi = new Rl(16777215, 5596740, 1.2);
  fx = new Zd();
  audio = new ru();
  hud;
  ui;
  world = null;
  env = null;
  planes = [];
  player = null;
  planeToon = Vd({
    vertexColors: true,
    rim: 0.3
  });
  planeOutline = Rd(2825498, 1.1, 400);
  spec = {
    ...hu
  };
  loadout = xf();
  hangar;
  preview = null;
  previewYaw = 2.2;
  previewDrag = null;
  previewCam = new G();
  previewCamReady = false;
  viewShift = 0;
  state = `title`;
  paused = false;
  simTime = 0;
  tick = 0;
  time = 0;
  loadT = 0;
  whiteout = 0;
  tierName = `medium`;
  tier = jh.medium;
  renderScale = 1;
  frameAvg = 16;
  resTimer = 0;
  mission;
  route = null;
  sortieRoute = null;
  guide = null;
  tracker = null;
  names = [];
  rejoin = new G();
  contextLost = false;
  stats = null;
  wakeLock = new uu();
  pwa = new sd();
  constructor(e, t) {
    this.settings = vd();
    this.renderer = new Cs({
      canvas: e,
      antialias: true,
      powerPreference: `high-performance`
    });
    this.renderer.outputColorSpace = Ne;
    this.renderer.shadowMap.type = 1;
    this.renderer.setClearColor(10474479);
    this.input = new ad(e);
    this.input.invertPitch = this.settings.invertPitch;
    let n = e => document.body.classList.toggle(`touch`, e === `touch`);
    n(this.input.lastInput);
    this.input.onInputKind = n;
    this.rig = new Xm(this.camera);
    this.hud = new Jp(t);
    this.ui = new Xp(this.settings, {
      fly: () => this.fly(),
      resume: () => this.setPaused(false),
      restart: () => this.startSortie(),
      quit: () => this.toTitle(),
      openHangar: () => this.openHangar(),
      closeHangar: () => this.closeHangar(),
      again: () => this.startSortie(),
      newWorld: () => {
        this.settings.seed = md();
        yd(this.settings);
        this.ui.setSeed(this.settings.seed);
        this.newWorld(this.settings.seed);
        this.startSortie();
      },
      seedChanged: e => this.newWorld(e),
      qualityChanged: () => this.applyTier(),
      volumeChanged: e => this.audio.setVolume(e),
      modeChanged: () => this.refreshRoute(),
      destStep: e => this.stepDest(e),
      click: () => this.uiClick(),
      tiltChanged: e => this.input.touch.setTilt(e),
      recentre: () => this.input.touch.recentre()
    });
    let r = 0;
    let i = ``;
    new ResizeObserver(() => {
      let e = this.ui.routeCanvas;
      let t = `${e.clientWidth}x${e.clientHeight}`;
      if (t !== i) {
        i = t;
        clearTimeout(r);
        r = window.setTimeout(() => this.drawMap(), 80);
      }
    }).observe(this.ui.routeCanvas);
    this.hangar = new fp(this.loadout, () => this.buildPreview(), () => this.uiClick(), () => this.state === `hangar`);
    e.addEventListener(`pointerdown`, e => {
      if (this.state === `hangar`) {
        this.previewDrag = e.clientX;
      }
    });
    window.addEventListener(`pointermove`, e => {
      if (this.previewDrag !== null) {
        this.previewYaw += (e.clientX - this.previewDrag) * 0.01;
        this.previewDrag = e.clientX;
      }
    });
    window.addEventListener(`pointerup`, () => this.previewDrag = null);
    this.audio.setVolume(this.settings.volume);
    this.scene.add(this.sky.mesh, this.water.mesh, this.hemi, this.sun, this.sun.target, this.fx.group);
    this.sun.castShadow = true;
    let a = this.sun.shadow.camera;
    a.left = -130;
    a.right = 130;
    a.top = 130;
    a.bottom = -130;
    a.near = 1;
    a.far = 1500;
    this.sun.shadow.bias = -0.0008;
    this.sun.shadow.normalBias = 0.6;
    this.scene.fog = new ws(13625845, 800, 3000);
    e.addEventListener(`webglcontextlost`, e => {
      e.preventDefault();
      this.contextLost = true;
      this.setPaused(true);
      this.ui.show(`ctxlost`);
    });
    e.addEventListener(`webglcontextrestored`, () => {
      this.contextLost = false;
      this.ui.show(this.state === `title` ? `title` : this.state === `hangar` ? `hangar-screen` : `pause`);
    });
    window.addEventListener(`resize`, () => this.resize());
    window.visualViewport?.addEventListener(`resize`, () => this.resize());
    let o = () => {
      if (this.state === `sortie` || this.state === `ending`) {
        this.setPaused(true);
      }
      this.audio.suspend();
    };
    document.addEventListener(`visibilitychange`, () => {
      if (document.hidden) {
        o();
      } else if (!this.paused) {
        this.audio.resume();
      }
    });
    window.addEventListener(`pagehide`, o);
    let s = () => {
      this.audio.init();
      window.removeEventListener(`pointerup`, s, true);
      window.removeEventListener(`touchend`, s, true);
      window.removeEventListener(`keydown`, s, true);
    };
    window.addEventListener(`pointerup`, s, true);
    window.addEventListener(`touchend`, s, true);
    window.addEventListener(`keydown`, s, true);
    let c = e => document.getElementById(e);
    let l = () => {
      let e = this.pwa;
      c(`update-btn`).classList.toggle(`hidden`, !e.updateReady);
      c(`install-btn`).classList.toggle(`hidden`, !e.canInstall);
      c(`ios-tip`).classList.toggle(`hidden`, !e.iosTip || e.canInstall);
      c(`app-row`).classList.toggle(`hidden`, !e.updateReady && !e.canInstall && !e.iosTip);
    };
    this.pwa.onChange = l;
    c(`install-btn`).addEventListener(`click`, () => {
      this.uiClick();
      this.pwa.install();
    });
    c(`update-btn`).addEventListener(`click`, () => {
      this.uiClick();
      if (this.state === `title`) {
        this.pwa.restart();
      }
    });
    c(`ios-tip-x`).addEventListener(`click`, () => this.pwa.dismissTip());
    l();
    this.pwa.register();
    this.applyTier();
    this.newWorld(this.settings.seed);
    this.resize();
    this.ui.setAircraft(Cf(this.loadout));
    this.ui.show(`title`);
    this.loop = new dd(e => this.step(e), (e, t) => this.frame(e, t));
    if (location.search.includes(`debug`)) {
      this.setupDebug();
    }
  }
  start() {
    this.loop.start();
  }
  pickTier() {
    if (this.settings.quality === `auto`) {
      if (ou()) {
        return `mobile`;
      } else if ((navigator.hardwareConcurrency || 4) <= 4) {
        return `low`;
      } else {
        return `medium`;
      }
    } else {
      return this.settings.quality;
    }
  }
  applyTier() {
    let e = this.pickTier();
    let t = this.renderer.shadowMap.enabled;
    this.tierName = e;
    this.tier = jh[e];
    this.renderScale = 1;
    this.renderer.shadowMap.enabled = this.tier.shadows;
    this.sun.castShadow = this.tier.shadows;
    if (this.sun.shadow.mapSize.x !== this.tier.shadowSize) {
      this.sun.shadow.mapSize.set(this.tier.shadowSize, this.tier.shadowSize);
      this.sun.shadow.map?.dispose();
      this.sun.shadow.map = null;
    }
    if (t !== this.tier.shadows) {
      this.scene.traverse(e => {
        let t = e.material;
        if (Array.isArray(t)) {
          t.forEach(e => e.needsUpdate = true);
        } else if (t) {
          t.needsUpdate = true;
        }
      });
    }
    if (this.world) {
      this.world.setRadius(this.tier.radius);
    }
    this.updateDistances();
    this.resize();
  }
  updateDistances() {
    let e = this.tier.radius * 512;
    let t = this.scene.fog;
    t.near = e * 0.25;
    t.far = e * 0.95;
    this.camera.far = e + 2500;
    this.camera.updateProjectionMatrix();
    this.post.setFade(e * 0.3, e * 0.85);
  }
  resize() {
    let e = window.innerWidth;
    let t = window.innerHeight;
    let n = Math.min(window.devicePixelRatio || 1, this.tier.maxPR) * this.renderScale;
    this.renderer.setPixelRatio(n);
    this.renderer.setSize(e, t, false);
    this.camera.aspect = e / t;
    this.camera.updateProjectionMatrix();
    this.post.setSize(e * n, t * n);
    this.hud.resize();
    this.input.touch.model.resize(e, t, cu());
  }
  newWorld(e) {
    if (this.world) {
      this.scene.remove(this.world.group);
      this.world.dispose();
    }
    this.clearPlanes();
    let t = new Wm(e, this.tier.radius);
    this.world = t;
    this.env = {
      groundHeight: (e, n) => t.groundHeight(e, n),
      surfaceAt: (e, n) => t.surfaceAt(e, n),
      wind: t.wind
    };
    this.scene.add(t.group);
    t.setRadius(this.tier.radius);
    let n = t.time;
    this.sky.setTime(n);
    this.sun.color.setHex(n.sunColor);
    this.sun.intensity = n.sunIntensity;
    this.hemi.color.setHex(n.hemiSky);
    this.hemi.groundColor.setHex(n.hemiGround);
    this.hemi.intensity = n.hemiIntensity;
    this.scene.fog.color.setHex(n.horizon);
    this.renderer.setClearColor(n.horizon);
    this.post.setInk(n.ink);
    this.planeOutline.uniforms.outlineColor.value.setHex(n.ink);
    this.hud.invalidateMinimap();
    this.previewCamReady = false;
    if (this.state === `hangar`) {
      this.buildPreview();
    }
    this.clearGuide();
    this.refreshRoute();
  }
  refreshRoute() {
    let e = this.world;
    if (!e) {
      return;
    }
    let t = this.settings;
    let n = e.gen.airfields;
    this.names = fh(n);
    if (t.dest < 1 || t.dest >= n.length) {
      t.dest = 1;
    }
    this.ui.setRoutePanel(t.mode === `route`);
    this.ui.refreshBest();
    if (t.mode !== `route`) {
      this.route = null;
      return;
    }
    let r = n[t.dest];
    let i = bh(e.gen, e.home, r, e.baseWind, ph[this.loadout.style]);
    this.route = i;
    this.drawMap();
    let a = (i.sAim / 1000).toFixed(1);
    let o = Math.max(1, Math.round(i.sAim / mh[this.loadout.style] / 60));
    let s = [`N`, `NE`, `E`, `SE`, `S`, `SW`, `W`, `NW`][Math.round(dh(e.home.x, e.home.z, r.x, r.z) / 45) % 8];
    let c = i.land.dx * e.baseWind.x + i.land.dz * e.baseWind.z > 0 ? ` · downwind landing` : ``;
    this.ui.setRouteInfo(this.names[t.dest], `${a} km ${s} · about ${o} min · up to ${Math.round(i.maxAlt / 10) * 10} m${c}`);
  }
  drawMap() {
    let e = this.ui.routeCanvas;
    if (!this.route || !this.world || !e.clientWidth || !e.clientHeight) {
      return;
    }
    let t = Math.min(window.devicePixelRatio || 1, 2);
    e.width = Math.round(e.clientWidth * t);
    e.height = Math.round(e.clientHeight * t);
    rm(e, this.world.gen, this.route, this.names);
  }
  stepDest(e) {
    let t = this.world;
    if (!t || this.settings.mode !== `route`) {
      return;
    }
    let n = t.gen.airfields.length - 1;
    this.settings.dest = (this.settings.dest - 1 + e + n) % n + 1;
    yd(this.settings);
    this.refreshRoute();
  }
  clearGuide() {
    if (this.guide) {
      this.scene.remove(this.guide.mesh);
      this.guide.dispose();
    }
    this.guide = null;
    this.tracker = null;
    this.sortieRoute = null;
  }
  openHangar() {
    if (this.state === `title`) {
      this.uiClick();
      this.state = `hangar`;
      this.previewCamReady = false;
      this.ui.show(`hangar-screen`);
      this.buildPreview();
    }
  }
  closeHangar() {
    if (this.state === `hangar`) {
      this.uiClick();
      this.clearPreview();
      this.clearViewShift();
      this.state = `title`;
      this.camera.fov = 70;
      this.camera.updateProjectionMatrix();
      this.ui.setAircraft(Cf(this.loadout));
      this.refreshRoute();
      this.ui.show(`title`);
    }
  }
  uiClick() {
    this.audio.init();
    this.audio.click();
  }
  buildPreview() {
    this.clearPreview();
    if (this.world && this.state === `hangar`) {
      this.preview = new Rf(this.loadout, this.planeToon, this.planeOutline);
      this.scene.add(this.preview.visual.root);
      this.audio.setEngine(df(this.loadout.style));
    }
  }
  clearPreview() {
    this.preview &&= (this.scene.remove(this.preview.visual.root), this.preview.visual.dispose(), null);
  }
  updatePreview(e) {
    let t = this.world;
    let n = this.preview;
    let r = t.fields[0];
    r.group.updateMatrixWorld();
    let i = r.group.localToWorld(Mh.copy(r.previewSpot));
    let a = this.loadout.style === `jet` ? 1.3 : this.loadout.style === `turboprop` ? 1.12 : 1;
    if (n) {
      if (this.previewDrag === null) {
        this.previewYaw += e * 0.35;
      }
      let t = Uu(Math.cos(this.previewYaw), Math.sin(this.previewYaw), n.gear);
      n.s.quat.copy(t);
      n.s.pos.set(i.x, i.y + Wu(t, n.gear), i.z);
      n.teleport();
      n.input.pitch = n.input.roll = n.input.yaw = 0;
      n.s.rpm = 0.18;
      n.syncVisual(1, e);
    }
    let o = t.home;
    let s = -o.dirZ;
    let c = o.dirX;
    let l = Nh.set(i.x, i.y + a * 1.4, i.z);
    let u = Ph.set(i.x + o.dirX * 8 * a - s * 11 * a, i.y + a * 3.4, i.z + o.dirZ * 8 * a - c * 11 * a);
    this.previewCamReady ||= (this.previewCam.copy(u), true);
    this.previewCam.lerp(u, 1 - Math.exp(-e * 3));
    this.camera.position.copy(this.previewCam);
    this.camera.up.set(0, 1, 0);
    this.camera.lookAt(l);
    if (this.camera.fov !== 50) {
      this.camera.fov = 50;
      this.camera.updateProjectionMatrix();
    }
    let d = window.innerWidth;
    let f = window.innerHeight;
    let p = document.getElementById(`hangar`).getBoundingClientRect();
    let m = p.width > 0 && p.left > d * 0.4 ? d / 2 - p.left / 2 : 0;
    this.viewShift += (m - this.viewShift) * (1 - Math.exp(-e * 6));
    this.camera.setViewOffset(d, f, this.viewShift, 0, d, f);
  }
  clearViewShift() {
    this.viewShift = 0;
    this.camera.clearViewOffset();
  }
  clearPlanes() {
    for (let e of this.planes) {
      this.scene.remove(e.visual.root);
      e.visual.dispose();
    }
    this.planes = [];
    this.player = null;
    this.fx.clear();
  }
  fly() {
    this.uiClick();
    if (this.input.lastInput === `touch`) {
      lu();
      if (this.settings.tilt && !this.input.touch.tiltEnabled) {
        this.input.touch.setTilt(true).then(e => {
          if (!e) {
            this.ui.hint(`Tilt steering is not available here: using the on-screen stick.`, 4000);
          }
        });
      }
    }
    this.startSortie();
  }
  say(e, t) {
    if (this.input.lastInput === `touch`) {
      return t;
    } else {
      return e;
    }
  }
  toTitle() {
    this.setPaused(false);
    this.clearPlanes();
    this.clearGuide();
    this.state = `title`;
    this.wakeLock.set(false);
    this.hud.visible = false;
    this.hud.clear();
    this.ui.clearHint();
    this.ui.setWhiteout(0);
    this.ui.refreshBest();
    this.ui.setAircraft(Cf(this.loadout));
    this.ui.show(`title`);
    this.camera.fov = 70;
    this.camera.updateProjectionMatrix();
  }
  setPaused(e) {
    if (!e || this.state === `sortie` || this.state === `ending`) {
      this.paused = e;
      if (e) {
        this.audio.suspend();
        if (!this.contextLost) {
          this.ui.show(`pause`);
        }
      } else {
        this.audio.resume();
        this.input.invertPitch = this.settings.invertPitch;
        this.rig.shakeEnabled = this.settings.cameraShake;
        if (this.state === `sortie` || this.state === `ending`) {
          this.ui.show(`none`);
        }
      }
    }
  }
  startSortie() {
    let e = this.world;
    this.setPaused(false);
    this.clearPlanes();
    this.clearPreview();
    this.input.invertPitch = this.settings.invertPitch;
    this.rig.shakeEnabled = this.settings.cameraShake;
    Object.assign(this.spec, uf(this.loadout));
    let t = new Rf({
      ...this.loadout
    }, this.planeToon, this.planeOutline, this.spec);
    this.audio.setEngine(df(this.loadout.style));
    this.rig.chaseScale = this.loadout.style === `jet` ? 1.25 : this.loadout.style === `turboprop` ? 1.1 : 1;
    let n = sf[this.loadout.style].eye;
    this.rig.cockpit.set(n[0], n[1], n[2]);
    this.camera.fov = 70;
    this.camera.updateProjectionMatrix();
    let r = e.home;
    this.clearGuide();
    if (this.settings.mode === `route`) {
      if (!this.route) {
        this.refreshRoute();
      }
      let e = this.route;
      this.sortieRoute = e;
      this.guide = new Yf(e);
      this.scene.add(this.guide.mesh);
      this.tracker = new wh(e);
    }
    let {
      dx: i,
      dz: a
    } = this.sortieRoute ? this.sortieRoute.depart : lh(r, e.wind);
    let o = r.paved / 2 - 20;
    let s = r.x - i * o;
    let c = r.z - a * o;
    t.s.quat.copy(Uu(i, a, t.gear));
    t.s.pos.set(s, e.groundHeight(s, c) + Wu(t.s.quat, t.gear), c);
    t.s.rpm = 0.15;
    t.teleport();
    this.input.resetThrottle(0);
    this.input.flapNotch = 0;
    this.planes.push(t);
    this.player = t;
    this.scene.add(t.visual.root);
    this.simTime = 0;
    this.tick = 0;
    this.mission = {
      tookOff: false,
      takeoffT: 0,
      touch: null,
      bounces: 0,
      stoppedT: 0,
      result: null,
      resultText: ``,
      grade: `—`,
      endT: 0,
      wreckAt: null,
      hintStage: 0,
      airT: 0,
      pathT: 0,
      atDest: false,
      offPathHintT: 0,
      flapHint: false
    };
    this.rig.reset();
    this.rig.mode = `chase`;
    this.state = `loading`;
    this.loadT = 0;
    this.hud.visible = false;
    this.ui.setLoading(0);
    this.ui.show(`loading`);
    this.ui.clearHint();
  }
  beginSortie() {
    this.state = `sortie`;
    this.hud.visible = true;
    this.hud.invalidateMinimap();
    this.ui.show(`none`);
    this.wakeLock.set(true);
    this.input.touch.recentre();
    let e = this.loadout.style === `jet` ? ` The jet takes a few seconds to spool up.` : this.say(` Take-off flaps: F.`, ` Take-off flaps: tap FLAP +.`);
    let t = this.sortieRoute ? ` Follow the arrows to ${this.destName()}.` : ``;
    this.ui.hint(this.say(`Open the throttle: hold Shift (or press 0). Steer with Q / E.${e}${t}`, `Push the throttle lever (right) all the way up. Steer with the stick (left thumb).${e}${t}`), 6000);
  }
  abandonPlane(e) {
    if (!e.downed && !e.wrecked) {
      e.downed = true;
      e.downedSide = Math.random() < 0.5 ? -1 : 1;
      e.s.health.engine = 0;
    }
  }
  crashPlane(e, t, n) {
    if (e.wrecked) {
      return;
    }
    e.wrecked = true;
    e.visual.root.visible = false;
    let r = e.s.pos.clone();
    if (n) {
      this.fx.splash(r);
      this.audio.splash();
    } else {
      this.fx.explosion(r, true);
      this.audio.explosion(this.camera.position.distanceTo(r));
      let t = [e.livery.body, e.livery.wing];
      for (let n = 0; n < 12; n++) {
        this.fx.debris(r, e.s.vel.clone().multiplyScalar(0.3), t[n % 2]);
      }
    }
    e.downed = true;
    if (e === this.player) {
      let e = this.mission;
      if (!e.result) {
        e.result = n ? `ditched` : `crashed`;
        e.resultText = t;
      }
      this.rig.addShake(1);
      this.ui.toast(n ? `SPLASH!` : `CRASH!`);
      this.endSortie(3.5, r);
    }
  }
  endSortie(e, t) {
    let n = this.mission;
    if (this.state !== `ending`) {
      this.state = `ending`;
      n.endT = e;
      n.wreckAt = t;
      this.hud.visible = t === null;
      this.ui.clearHint();
    }
  }
  finishLanding() {
    let e = this.mission;
    let t = this.player;
    let n = this.world;
    let r = n.gen.fieldMask(t.s.pos.x, t.s.pos.z) > 0.5;
    e.result = r ? `landed` : `field landing`;
    let i = e.touch;
    let a = 0;
    if (i) {
      let n = t.spec.crashSpeed / 6 * mu;
      a += i.sink < n * 1.5 ? 2 : +(i.sink < n * 3);
      a += +(i.bank < 0.1035);
      a += +!!i.onRunway;
      a += +(e.bounces === 0);
    }
    if (!r) {
      a = Math.min(a, 2);
    }
    e.grade = a >= 5 ? `A+` : a === 4 ? `A` : a === 3 ? `B` : a === 2 ? `C` : `D`;
    let o = {
      "A+": `GREASER!`,
      A: `SMOOTH!`,
      B: `NOT BAD!`,
      C: `FIRM...`,
      D: `OOF!`
    };
    let s = n.gen.nearestAirfield(t.s.pos.x, t.s.pos.z).af;
    e.resultText = r ? `Landed at ${s === n.home ? `home field` : `an airfield`}` : `Landed in a field`;
    if (this.sortieRoute) {
      e.atDest = r && s === this.sortieRoute.to;
      let t = this.names[n.gen.airfields.indexOf(s)];
      e.resultText = e.atDest ? `Landed at ${t}` : r ? `Landed at ${t}, not ${this.destName()}` : `Landed in a field`;
    }
    this.ui.toast(`${o[e.grade]}  ${e.grade}`);
    this.audio.fanfare(true);
    this.endSortie(2.5, null);
  }
  showDebrief() {
    let e = this.mission;
    let t = this.player;
    this.state = `debrief`;
    this.wakeLock.set(false);
    this.hud.visible = false;
    this.hud.clear();
    let n = e.result === `landed` || e.result === `field landing`;
    let r = 1 - t.integrity;
    let i = e.grade === `A` || e.grade === `A+`;
    let a = 0;
    if (n && i) {
      a = 3;
    } else if (n && e.grade === `B`) {
      a = 2;
    } else if (n) {
      a = 1;
    }
    let o = this.sortieRoute;
    let s = e.airT > 0 ? Math.round(e.pathT * 100 / e.airT) : 0;
    if (o) {
      let t = s >= 75 ? 3 : s >= 50 ? 2 : 1;
      a = e.atDest ? Math.min(a, t) : 0;
    }
    let c = e.tookOff ? this.simTime - e.takeoffT : 0;
    let l = `${Math.floor(c / 60)}:${String(Math.floor(c % 60)).padStart(2, `0`)}`;
    let u = [[`Result`, `${e.result ?? `—`}${e.resultText ? ` (${e.resultText})` : ``}`]];
    if (o) {
      u.push([`Route`, `Home Field → ${this.destName()}`]);
      u.push([`On the path`, e.tookOff ? `${s}%` : `—`]);
    }
    u.push([`Damage taken`, `${Math.round(r * 100)}%`]);
    if (e.touch) {
      u.push([`Touchdown`, `${e.touch.sink.toFixed(1)} m/s sink, ${Math.round(e.touch.bank * 180 / Math.PI)}° bank`]);
    }
    u.push([`Landing grade`, n ? e.grade : `—`]);
    u.push([`Flight time`, l]);
    u.push([`Aircraft`, Cf(t.loadout)]);
    u.push([`World seed`, String(this.settings.seed)]);
    let d = Cd(o ? xd(this.settings.seed, `route`, this.settings.dest) : xd(this.settings.seed), {
      medal: a,
      landing: n ? e.grade : `—`,
      ...(o ? {
        path: s
      } : {})
    });
    let f = n ? a >= 2 ? `Nicely done!` : `Back on the ground` : e.result === `bailed out` ? `Hit the silk!` : `Better luck next time`;
    if (o && n) {
      f = e.atDest ? a >= 2 ? `Welcome to ${this.destName()}!` : `Made it!` : `Wrong airfield!`;
    }
    this.ui.showDebrief({
      title: f,
      medal: a,
      rows: u,
      newBest: d,
      bestOf: o ? `route` : `world`
    });
    this.audio.fanfare(a >= 2);
  }
  assist(e) {
    let t = this.settings.assist;
    let n = e.input;
    let r = e.s;
    let i = this.input.lastInput === `touch`;
    if (i && r.onGround) {
      n.yaw = dt.clamp(n.yaw + n.roll, -1, 1);
    }
    if (!r.onGround && (t !== `expert` || !!i) && (n.yaw = dt.clamp(n.yaw + n.roll * 0.3, -1, 1), t !== `expert` && t === `arcade`)) {
      if (Math.abs(n.roll) < 0.05 && !this.input.mouseStick) {
        let e = Vf(r);
        if (Math.abs(e) < 1.4) {
          n.roll = dt.clamp(e * 0.9 + r.angVel.z * 0.25, -0.6, 0.6);
        }
      }
      if (r.alpha > Bu(e.spec, r.flaps) * 0.85 && n.pitch > 0) {
        n.pitch *= 0.35;
      }
    }
  }
  downedControls(e) {
    let t = e.input;
    t.throttle = 0;
    t.roll = e.downedSide * 0.7;
    t.pitch = 0.2;
    t.yaw = e.downedSide * 0.3;
    t.brake = false;
  }
  emitFx(e, t) {
    let n = e.s;
    e.smokeT -= t;
    if (e.smokeT <= 0) {
      e.smokeT = 1 / 30;
      let t = n.health;
      if (e.downed || t.engine < 0.6 || t.wings < 0.5) {
        Mh.set(0, 0.4, -1.6).applyQuaternion(n.quat).add(n.pos);
        this.fx.smoke(Mh, n.vel, e.downed ? 1 : 1 - t.engine);
        if (e.downed || t.engine < 0.25) {
          this.fx.fire(Mh, n.vel);
        }
      }
    }
    e.dustT -= t;
    if (n.onGround && e.dustT <= 0 && n.vel.length() > 6) {
      e.dustT = 1 / 8;
      Mh.set(Math.random() < 0.5 ? -0.9 : 0.9, -1.3, -0.4).applyQuaternion(n.quat).add(n.pos);
      this.fx.dust(Mh);
    }
  }
  step(e) {
    if (this.paused || !this.world || !this.env || this.state !== `sortie` && this.state !== `ending`) {
      return;
    }
    let t = this.world;
    let n = this.player;
    let r = this.mission;
    this.tick++;
    this.simTime += e;
    for (let e of this.planes) {
      e.savePrev();
    }
    if (this.state === `sortie` && n.alive) {
      this.input.sample(e, n.input);
      this.assist(n);
    } else if (n.downed) {
      this.downedControls(n);
    } else {
      n.input.throttle = 0;
      n.input.pitch = n.input.roll = n.input.yaw = 0;
      n.input.brake = true;
    }
    for (let i of this.planes) {
      if (i.wrecked) {
        continue;
      }
      let a = Hu(i.s, i.spec, i.input, this.env, e, i.gear);
      if (a.crashed) {
        this.crashPlane(i, a.crashed, a.splash);
      } else {
        if (a.propStrike) {
          i.s.health.engine = Math.max(0, i.s.health.engine - e * 1.5);
          if (this.tick % 6 == 0) {
            this.fx.sparksAt(Mh.set(0, -1.1, -2.9).applyQuaternion(i.s.quat).add(i.s.pos), 2);
          }
        }
        if (a.scrape) {
          i.s.health.wings = Math.max(0, i.s.health.wings - e * 0.4);
          if (this.tick % 8 == 0) {
            this.fx.dust(i.s.pos);
          }
        }
        if (a.touchdown && i === n && r.tookOff) {
          let e = r.touch;
          if (e && this.simTime - e.t < 4) {
            r.bounces++;
          } else {
            r.bounces = 0;
            let e = !!t.gen.runwayAt(n.s.pos.x, n.s.pos.z, 4);
            r.touch = {
              ...a.touchdown,
              onRunway: e,
              t: this.simTime
            };
          }
          if (a.touchdown.sink > 2.5) {
            this.rig.addShake(Math.min(0.6, a.touchdown.sink * 0.1));
          }
        }
        this.emitFx(i, e);
      }
    }
    if (this.state === `sortie` && n.alive) {
      let i = n.s.pos.y - Math.max(t.groundHeight(n.s.pos.x, n.s.pos.z), 0);
      if (r.hintStage === 0 && n.s.onGround && n.s.airspeed > 14) {
        r.hintStage = 1;
        let e = Math.round(mf(n.spec) * 1.25 * 3.6 / 5) * 5;
        this.ui.hint(n.gear.tricycle ? this.say(`Keep it straight with Q / E, then pull back gently with S at about ${e} km/h.`, `Keep it straight with the stick, then drag it gently down at about ${e} km/h.`) : this.say(`Ease the tail up with W, then pull back gently with S at about ${e} km/h.`, `Ease the tail up (stick up a little), then drag it gently down at about ${e} km/h.`), 6000);
      }
      if (!r.tookOff && n.s.airTime > 2 && i > 15) {
        r.tookOff = true;
        r.takeoffT = this.simTime;
        r.touch = null;
        this.ui.toast(`AIRBORNE!`);
        if (this.sortieRoute) {
          this.ui.hint(`Follow the white arrows to ${this.destName()} and land there.`, 6000);
        } else {
          this.ui.hint(`Enjoy the view! Land on any airfield strip to finish.`, 6000);
        }
      }
      if (r.tookOff && !r.flapHint && !n.s.onGround && i < 350 && n.s.vel.y < -1 && this.input.flapNotch < 2) {
        let e = t.gen.nearestAirfield(n.s.pos.x, n.s.pos.z);
        if (e.dist < 2500 && (!this.sortieRoute || e.af === this.sortieRoute.to)) {
          r.flapHint = true;
          this.ui.hint(this.say(`Landing? Full flaps (press F twice) let you come in slower and steeper.`, `Landing? Full flaps (tap FLAP + twice) let you come in slower and steeper. Hold BRAKE after touchdown.`), 5000);
        }
      }
      let a = this.tracker;
      if (a) {
        a.update(n.s.pos.x, n.s.pos.y, n.s.pos.z);
        if (r.tookOff && !n.s.onGround) {
          r.airT += e;
          if (a.onPath()) {
            r.pathT += e;
          }
        }
        r.offPathHintT -= e;
        if (r.tookOff && a.lateral > 400 && r.offPathHintT <= 0) {
          r.offPathHintT = 20;
          this.ui.hint(`Off the path! Turn toward the PATH marker and pick up the arrows again.`, 5000);
        }
      }
      if (r.tookOff && n.s.onGround && n.s.vel.length() < 2.5) {
        r.stoppedT += e;
        if (r.stoppedT > 1.2) {
          this.finishLanding();
        }
      } else {
        r.stoppedT = 0;
      }
    }
  }
  handleKeys() {
    let e = this.input;
    let t = e.touch.model.take();
    if ((e.wasPressed(`Escape`) || e.wasPressed(`KeyP`) || e.padWasPressed(9) || t.has(`pause`)) && (this.state === `sortie` || this.state === `ending`)) {
      this.setPaused(!this.paused);
    }
    if (!this.paused) {
      if (this.state === `sortie` || this.state === `ending`) {
        if (e.wasPressed(`KeyC`) || e.padWasPressed(3) || t.has(`camera`)) {
          this.rig.cycle();
          this.ui.toast(this.rig.mode.toUpperCase(), 700);
        }
        if (e.wasPressed(`KeyR`)) {
          this.startSortie();
        }
      }
      if (this.state === `sortie`) {
        let n = (e.wasPressed(`KeyF`) || e.padWasPressed(13) || t.has(`flapsMore`) ? 1 : 0) - (e.wasPressed(`KeyV`) || e.padWasPressed(12) || t.has(`flapsLess`) ? 1 : 0);
        if (n && e.stepFlaps(n)) {
          this.ui.toast(`FLAPS ${fu[e.flapNotch]}`, 700);
          this.audio.click();
        }
        if (e.wasPressed(`KeyM`)) {
          e.mouseStick = !e.mouseStick;
          this.ui.hint(e.mouseStick ? `Mouse stick ON: move the cursor to fly.` : `Mouse stick OFF`, 3000);
        }
        let r = this.player;
        if ((e.wasPressed(`KeyX`) || t.has(`bail`)) && r && !r.wrecked && !r.s.onGround && this.mission.tookOff) {
          this.abandonPlane(r);
          this.mission.result = `bailed out`;
          this.mission.resultText = `Parachuted to safety`;
          this.ui.toast(`BAILED OUT!`);
          this.endSortie(4, r.s.pos.clone());
        }
      }
      if (this.state === `title`) {
        if (e.wasPressed(`Enter`) || e.padWasPressed(0)) {
          this.fly();
        }
        if (e.wasPressed(`KeyH`) || e.padWasPressed(3)) {
          this.openHangar();
        }
        if (e.wasPressed(`ArrowLeft`) || e.padWasPressed(14)) {
          this.stepDest(-1);
        }
        if (e.wasPressed(`ArrowRight`) || e.padWasPressed(15)) {
          this.stepDest(1);
        }
      } else if (this.state === `hangar`) {
        if (e.wasPressed(`Escape`) || e.wasPressed(`Enter`) || e.wasPressed(`Backspace`) || e.padWasPressed(1)) {
          this.closeHangar();
        }
        if (e.padWasPressed(4) || e.padWasPressed(14)) {
          this.hangar.nav(-1, 0);
        }
        if (e.padWasPressed(5) || e.padWasPressed(15)) {
          this.hangar.nav(1, 0);
        }
        if (e.padWasPressed(12)) {
          this.hangar.nav(0, -1);
        }
        if (e.padWasPressed(13)) {
          this.hangar.nav(0, 1);
        }
      }
    }
  }
  objectiveText() {
    let e = this.mission;
    let t = this.tracker;
    if (this.sortieRoute && t) {
      let n = this.destName();
      if (!e.tookOff) {
        return `Take off — follow the arrows to ${n}`;
      }
      let r = Math.max(0, (this.sortieRoute.sAim - t.progress) / 1000).toFixed(1);
      if (t.onPath()) {
        return `Fly to ${n} — ${r} km`;
      } else {
        return `Back to the path! ${n} ${r} km`;
      }
    }
    if (e.tookOff) {
      return `Free flight — land on any strip to finish`;
    } else {
      return `Take off!`;
    }
  }
  destName() {
    let e = this.sortieRoute;
    if (e && this.world) {
      return this.names[this.world.gen.airfields.indexOf(e.to)];
    } else {
      return ``;
    }
  }
  frame(e, t) {
    this.input.pollPad();
    this.updateTouch(e);
    this.handleKeys();
    this.time += e;
    let n = this.world;
    if (!n) {
      return;
    }
    let r = performance.now();
    let i = this.player;
    this.dynamicResolution(e);
    switch (this.state) {
      case `hangar`:
        this.updatePreview(e);
        n.update(this.camera.position, null, e);
        break;
      case `title`:
      case `debrief`:
        {
          let t = n.home;
          this.rig.orbit(e, Mh.set(t.x, t.height + 20, t.z), 650, 110, 0.04);
          n.update(this.camera.position, null, e);
          break;
        }
      case `loading`:
        {
          this.loadT += e;
          n.update(i.s.pos, null, e);
          i.syncVisual(1, e);
          this.rig.follow(e, i.s.pos, i.s.quat, 0, (e, t) => n.groundHeight(e, t));
          let t = n.chunks.readiness(i.s.pos, 2);
          this.ui.setLoading(t);
          if (t >= 1 && this.loadT > 0.4) {
            this.beginSortie();
          }
          break;
        }
      case `sortie`:
      case `ending`:
        {
          for (let n of this.planes) {
            if (!n.wrecked) {
              n.syncVisual(this.paused ? 1 : t, this.paused ? 0 : e);
            }
          }
          let r = this.mission;
          if (i) {
            i.visual.setCockpitView(this.rig.mode === `cockpit` && (this.state !== `ending` || !r.wreckAt));
          }
          if (this.state === `ending` && r.wreckAt) {
            this.rig.orbit(e, r.wreckAt, 45, 18, 0.35);
          } else if (i) {
            this.rig.follow(e, i.visual.root.position, i.visual.root.quaternion, i.s.airspeed, (e, t) => n.groundHeight(e, t));
          }
          n.update(this.camera.position, i ? i.s.vel : null, this.paused ? 0 : e);
          if (i) {
            n.updatePapi(i.s.pos);
          }
          if (this.guide && this.tracker) {
            this.guide.update(this.tracker.progress, this.time);
          }
          if (this.state === `ending` && !this.paused) {
            r.endT -= e;
            if (r.endT <= 0) {
              this.showDebrief();
            }
          }
          break;
        }
    }
    this.sky.follow(this.camera, this.camera.far * 0.9);
    this.water.update(this.camera, this.time, this.camera.far * 2.2);
    let a = i && this.state !== `title` && this.state !== `hangar` && this.state !== `debrief` ? i.s.pos : this.camera.position;
    let o = rp(n.time);
    let s = 260 / this.tier.shadowSize * 2;
    this.sun.target.position.set(Math.round(a.x / s) * s, Math.round(a.y / s) * s, Math.round(a.z / s) * s);
    this.sun.position.copy(this.sun.target.position).addScaledVector(o, 600);
    if (!this.paused) {
      this.fx.update(e, this.camera.position);
    }
    let c = this.state === `sortie` || this.state === `ending`;
    let l = c ? n.clouds.densityAt(this.camera.position) : 0;
    let u = Math.min(1, l * 5);
    let d = u > this.whiteout ? 6 : 0.7;
    if (!this.paused) {
      this.whiteout += Math.sign(u - this.whiteout) * Math.min(Math.abs(u - this.whiteout), d * e);
    }
    if (!c) {
      this.whiteout = 0;
    }
    this.ui.setWhiteout(this.whiteout);
    let f = i && i.alive && this.state === `sortie` ? Math.max(0, 0.45 - i.integrity) : 0;
    this.ui.setHurt(Math.min(1, f));
    if (i && (this.state === `sortie` || this.state === `ending`)) {
      let t = i.s.pos.y - Math.max(n.groundHeight(i.s.pos.x, i.s.pos.z), 0);
      let r = this.mission;
      this.hud.draw({
        player: i,
        world: n,
        camera: this.camera,
        objective: this.objectiveText(),
        mouseStick: this.input.mouseStick,
        mouse: this.input.mouse,
        stallWarn: i.s.stalled && !i.s.onGround,
        showLanding: r.tookOff && t < 450 && (!this.sortieRoute || n.gen.nearestAirfield(i.s.pos.x, i.s.pos.z).af === this.sortieRoute.to),
        guide: this.hudGuide(),
        flapNotch: this.input.flapNotch,
        touch: this.touchView()
      }, e);
      this.audio.update(i.s.rpm, i.s.airspeed, !this.paused && !i.wrecked);
    } else if (this.state === `hangar` && this.preview) {
      this.audio.update(0.18, 0, true, 0.45);
    } else {
      this.audio.update(0, 0, false);
    }
    if (!this.contextLost) {
      if (this.tier.post) {
        this.post.render(this.renderer, this.scene, this.camera);
      } else {
        this.renderer.render(this.scene, this.camera);
      }
    }
    let p = performance.now() - r;
    if (this.stats) {
      let e = this.renderer.info.render;
      this.stats.textContent = `${(1000 / this.frameAvg).toFixed(0)} fps  cpu ${p.toFixed(1)}ms  calls ${e.calls}  tris ${(e.triangles / 1000).toFixed(0)}k  chunks ${n.chunks.chunkCount}  props ${n.props.instanceTotal}  tier ${this.tierName} x${this.renderScale.toFixed(1)}`;
    }
    this.input.endFrame();
  }
  dynamicResolution(e) {
    this.frameAvg += (e * 1000 - this.frameAvg) * 0.05;
    this.resTimer += e;
    if (this.resTimer <= 2 || this.state === `title` || this.state === `hangar`) {
      return;
    }
    this.resTimer = 0;
    let t = Math.round(this.renderScale * 10);
    let n = this.frameAvg > 22 ? Math.max(6, t - 1) : this.frameAvg < 14 ? Math.min(10, t + 1) : t;
    if (n !== t) {
      this.renderScale = n / 10;
      this.resize();
    }
  }
  updateTouch(e) {
    let t = this.input.touch;
    let n = this.state === `sortie` || this.state === `ending`;
    let r = this.player;
    t.setEnabled(n && !this.paused);
    if (document.body.classList.contains(`flying`) !== n) {
      document.body.classList.toggle(`flying`, n);
    }
    t.model.bailShown = this.state === `sortie` && !!r && !r.wrecked && !r.downed && !r.s.onGround && !!this.mission?.tookOff;
    t.update(e);
    this.loop.maxFps = this.tierName === `mobile` ? n && !this.paused ? 60 : 30 : 0;
  }
  touchView() {
    let e = this.input.touch;
    if (this.input.lastInput !== `touch` || !e.enabled) {
      return null;
    }
    let t = e.model;
    let n = performance.now() / 1000;
    return {
      layout: t.layout,
      stick: t.stick(),
      throttle: t.throttle,
      held: e => t.held(e),
      bailShown: t.bailShown,
      bailProgress: t.bailProgress(n),
      tilt: e.tiltEnabled
    };
  }
  hudGuide() {
    let e = this.sortieRoute;
    let t = this.tracker;
    if (!e || !t) {
      return;
    }
    let n = this.state === `sortie` && this.mission.tookOff && !t.onPath() ? (Ch(e, t.progress + 500, this.rejoin), this.rejoin) : null;
    return {
      route: e,
      dest: e.to,
      rejoin: n
    };
  }
  async setupDebug() {
    let {
      default: e
    } = await Ah(async () => {
      let {
        default: e
      } = await import(`./lil-gui.esm-BzjtZe8o.js`);
      return {
        default: e
      };
    }, []);
    let t = new e({
      title: `Flight model (live)`
    });
    let n = Object.keys(this.spec);
    for (let e of n) {
      t.add(this.spec, e);
    }
    t.close();
    let r = document.createElement(`div`);
    r.style.cssText = `position:fixed;left:8px;top:8px;font:12px monospace;color:#fff;background:rgba(0,0,0,.45);padding:3px 6px;border-radius:4px;pointer-events:none;z-index:10`;
    document.body.append(r);
    this.stats = r;
    window.baron = this;
  }
};
function Ih() {
  try {
    return !!document.createElement(`canvas`).getContext(`webgl2`);
  } catch {
    return false;
  }
}
var Lh = document.getElementById(`game`);
var Rh = document.getElementById(`hud`);
if (Ih()) {
  new Fh(Lh, Rh).start();
} else {
  document.getElementById(`title`)?.classList.add(`hidden`);
  document.getElementById(`nogl`)?.classList.remove(`hidden`);
}