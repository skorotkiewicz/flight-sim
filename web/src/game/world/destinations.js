import { Md, Nd, Rd, Vd, makeMesh } from "../plane/meshkit.js";
import { SimplexNoise, am, im } from "./noise.js";
import { BoxGeometry, ConeGeometry, CylinderGeometry, Group, IcosahedronGeometry, InstancedMesh, Matrix4, Object3D, Quaternion, Vector3 } from "../core/three.js";

var Mm = 200;
var Nm = 260;
var Pm = 1600;
var Fm = 5000;
var Weather = class {
  seed;
  ground;
  group = new Group();
  mesh;
  outline;
  noise;
  spheres = new Float32Array(Fm * 4);
  count = 0;
  lastCell = {
    x: 1000000000,
    z: 1000000000
  };
  drift = new Vector3();
  cover;
  radiusCells = 5;
  constructor(e, t, n = () => 0) {
    this.seed = e;
    this.ground = n;
    this.noise = new SimplexNoise(im(e, 555));
    this.cover = t === `clear` ? -0.45 : t === `overcast` ? 0.45 : 0;
    let r = new IcosahedronGeometry(1, 1);
    Md(r);
    let i = Vd({
      color: 16777215,
      ramp: [196, 236, 255],
      rim: 0.12
    });
    this.mesh = new InstancedMesh(r, i, Fm);
    this.mesh.count = 0;
    this.mesh.frustumCulled = false;
    this.outline = new InstancedMesh(r, Rd(9413575, 1.2, 2500), Fm);
    this.outline.instanceMatrix = this.mesh.instanceMatrix;
    this.outline.count = 0;
    this.outline.frustumCulled = false;
    this.group.add(this.mesh, this.outline);
    this.group.name = `clouds`;
  }
  build(e, t) {
    let n = new Matrix4();
    let r = new Quaternion();
    let i = new Vector3();
    let a = new Vector3();
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
            r.setFromAxisAngle(Object3D.DEFAULT_UP, f() * 6.28);
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
  return Nd([makeMesh(new CylinderGeometry(0.35, 0.45, 3, 6), 8014634, {
    pos: [0, 1.5, 0]
  }), makeMesh(new ConeGeometry(3, 5, 7), 3112250, {
    pos: [0, 5, 0],
    flat: true
  }), makeMesh(new ConeGeometry(2.3, 4.2, 7), 3837762, {
    pos: [0, 7.6, 0],
    flat: true
  }), makeMesh(new ConeGeometry(1.5, 3.4, 7), 4694090, {
    pos: [0, 9.9, 0],
    flat: true
  })]);
}
function Rm() {
  return Nd([makeMesh(new CylinderGeometry(0.4, 0.55, 4, 6), 8014634, {
    pos: [0, 2, 0]
  }), makeMesh(new IcosahedronGeometry(3.4, 0), 6271043, {
    pos: [0, 6.2, 0],
    flat: true
  }), makeMesh(new IcosahedronGeometry(2.2, 0), 7323724, {
    pos: [1.4, 8, 0.6],
    flat: true
  })]);
}
function zm() {
  return Nd([makeMesh(new BoxGeometry(9, 5, 7), 16773327, {
    pos: [0, 2.5, 0]
  }), makeMesh(new CylinderGeometry(4.6, 4.6, 9.6, 3, 1), 13784381, {
    pos: [0, 6.2, 0],
    rot: [0, 0, Math.PI / 2],
    scale: [1, 1, 0.9],
    flat: true
  }), makeMesh(new BoxGeometry(1.4, 2.6, 0.2), 7028514, {
    pos: [0, 1.3, 3.55]
  }), makeMesh(new BoxGeometry(1.4, 1.2, 0.2), 8308963, {
    pos: [-2.7, 2.8, 3.55]
  }), makeMesh(new BoxGeometry(1.4, 1.2, 0.2), 8308963, {
    pos: [2.7, 2.8, 3.55]
  }), makeMesh(new BoxGeometry(1, 2.4, 1), 10115652, {
    pos: [2.6, 7.4, -1.2]
  })]);
}
function Bm() {
  return Nd([makeMesh(new BoxGeometry(13, 7, 9), 12992046, {
    pos: [0, 3.5, 0]
  }), makeMesh(new CylinderGeometry(6, 6, 13.6, 3, 1), 5980726, {
    pos: [0, 8.2, 0],
    rot: [0, 0, Math.PI / 2],
    scale: [1, 1, 0.82],
    flat: true
  }), makeMesh(new BoxGeometry(4, 5, 0.2), 16773327, {
    pos: [0, 2.5, 4.55]
  })]);
}
function Vm() {
  return Nd([makeMesh(new CylinderGeometry(2.2, 3.6, 14, 8), 16773327, {
    pos: [0, 7, 0],
    flat: true
  }), makeMesh(new ConeGeometry(3, 4, 8), 8014634, {
    pos: [0, 16, 0],
    flat: true
  }), makeMesh(new BoxGeometry(0.8, 16, 0.3), 9067066, {
    pos: [0, 13, 3.3],
    rot: [0, 0, 0.4]
  }), makeMesh(new BoxGeometry(16, 0.8, 0.3), 9067066, {
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
  group = new Group();
  meshes = new Map();
  version = -1;
  constructor(e, t) {
    this.group.name = `props`;
    let n = [[0, Lm()], [1, Rm()], [2, zm()], [3, Bm()], [4, Vm()]];
    for (let [r, i] of n) {
      let n = new InstancedMesh(i, e, Hm[r]);
      n.count = 0;
      n.castShadow = true;
      n.receiveShadow = true;
      n.frustumCulled = false;
      let a = new InstancedMesh(i, t, Hm[r]);
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
    let n = new Matrix4();
    let r = new Quaternion();
    let i = new Vector3();
    let a = new Vector3();
    let o = new Vector3(0, 1, 0);
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

export { Bm, Fm, Hm, Lm, Mm, Nm, Pm, Rm, Um, Vm, Weather, zm };
