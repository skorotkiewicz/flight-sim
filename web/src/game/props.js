import { Fd, Nd, makeMesh } from "./meshkit.js";
import { ym } from "./terrain.js";
import { BoxGeometry, BufferAttribute, BufferGeometry, Color, ConeGeometry, CylinderGeometry, Group, Mesh, MeshBasicMaterial, SphereGeometry, Vector3 } from "./three.js";

var bm = 8225161;
var xm = 16052712;
var Sm = 16773552;
var Cm = 7070586;
var wm = new Color(16730682);
var Tm = new Color(16776692);
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
  group = new Group();
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
      l.push(makeMesh(new BoxGeometry(t, 0.1, o), e % 2 ? 11854714 : 9687130, {
        pos: [-a / 2 + t * (e + 0.5), 0.08, 0]
      }));
    }
    l.push(makeMesh(new BoxGeometry(s, 0.1, c), ym, {
      pos: [0, 0.16, 0]
    }));
    let u = [];
    let d = (e, t, n, r) => u.push(makeMesh(new BoxGeometry(n, 0.04, r), xm, {
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
    l.push(makeMesh(new BoxGeometry(110, 0.1, 32), bm, {
      pos: [-50, 0.14, f - 16]
    }));
    l.push(makeMesh(new BoxGeometry(14, 0.1, f - 32 - c / 2), bm, {
      pos: [-50, 0.14, c / 2 + (f - 32 - c / 2) / 2]
    }));
    let p = new Mesh(Nd(l), r);
    p.receiveShadow = true;
    let m = new Mesh(Nd(u), i);
    m.receiveShadow = true;
    this.group.add(p, m);
    let h = (e, t) => [makeMesh(new BoxGeometry(34, 9, 26), t, {
      pos: [e, 4.5, f + 13]
    }), makeMesh(new CylinderGeometry(17, 17, 26, 12, 1, false, 0, Math.PI), 9277337, {
      pos: [e, 9, f + 13],
      rot: [Math.PI / 2, Math.PI / 2, 0],
      scale: [0.42, 1, 1],
      flat: true
    }), makeMesh(new BoxGeometry(30, 8, 0.3), 3811872, {
      pos: [e, 4, f - 0.1]
    }), makeMesh(new BoxGeometry(31, 0.6, 0.5), 16645104, {
      pos: [e, 8.3, f - 0.1]
    })];
    let g = [...h(-68, 14272417), ...h(-30, 13218698), makeMesh(new ConeGeometry(5, 5, 4), 16182480, {
      pos: [20, 2.5, f + 4],
      rot: [0, Math.PI / 4, 0],
      flat: true
    }), makeMesh(new ConeGeometry(4, 4.4, 4), 15259304, {
      pos: [34, 2.2, f + 6],
      rot: [0, Math.PI / 4, 0],
      flat: true
    }), ...[0, 1, 2].map(e => makeMesh(new CylinderGeometry(0.6, 0.6, 1.4, 8), 13191986, {
      pos: [6 + e * 1.5, 0.7, f + 2]
    })), makeMesh(new CylinderGeometry(0.15, 0.2, 8, 6), 16645104, {
      pos: [s / 2 - 120, 4, -o / 2 - 14]
    })];
    let _ = [];
    for (let e = -s / 2; e <= s / 2 + 0.1; e += 60) {
      for (let t of [-1, 1]) {
        let n = t * (c / 2 + 1.2);
        g.push(makeMesh(new CylinderGeometry(0.1, 0.14, 0.7, 6), 4013893, {
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
        g.push(makeMesh(new BoxGeometry(1.4, 0.9, 1.4), 15905076, {
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
      g.push(makeMesh(new CylinderGeometry(0.12, 0.15, 10, 6), 16645104, {
        pos: [-110, 5, f]
      }));
      g.push(makeMesh(new BoxGeometry(0.1, 2, 3.2), 2792847, {
        pos: [-110, 9, f + 1.6]
      }));
    }
    let y = Fd(Nd(g), t, n);
    y.receiveShadow = true;
    this.group.add(y);
    let b = _.map(([e, t, n]) => makeMesh(new SphereGeometry(0.32, 8, 6), n, {
      pos: [e, 0.8, t]
    }));
    let x = b.reduce((e, t) => e + t.getAttribute(`position`).count, 0);
    for (let e of v) {
      let t = makeMesh(new SphereGeometry(0.42, 8, 6), 16777215, {
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
    this.bulbMat = new MeshBasicMaterial({
      vertexColors: true
    });
    this.papi = new Mesh(Nd(b), this.bulbMat);
    this.group.add(this.papi);
    this.sock = new Group();
    this.sock.position.set(s / 2 - 120, 7.6, -o / 2 - 14);
    let S = Nd([makeMesh(new CylinderGeometry(0.7, 0.35, 1.4, 8, 1, true), 16742954, {
      pos: [0, 0, -0.7],
      rot: [Math.PI / 2, 0, 0]
    }), makeMesh(new CylinderGeometry(0.35, 0.2, 1.2, 8, 1, true), 16645104, {
      pos: [0, 0, -2],
      rot: [Math.PI / 2, 0, 0]
    }), makeMesh(new CylinderGeometry(0.2, 0.12, 1, 8, 1, true), 16742954, {
      pos: [0, 0, -3.1],
      rot: [Math.PI / 2, 0, 0]
    })]);
    this.sock.add(Fd(S, t, n));
    this.group.add(this.sock);
    this.previewSpot = new Vector3(-49, 0.2, f - 13);
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
      if (e instanceof Mesh && e.name !== `outline`) {
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
var TerrainManager = class {
  seed;
  material;
  radius;
  group = new Group();
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
    let n = new BufferGeometry();
    n.setAttribute(`position`, new BufferAttribute(t.positions, 3));
    n.setAttribute(`normal`, new BufferAttribute(t.normals, 3));
    n.setAttribute(`color`, new BufferAttribute(t.colors, 3));
    n.setIndex(new BufferAttribute(t.indices, 1));
    n.computeBoundingSphere();
    let r = new Mesh(n, this.material);
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

export { Am, Cm, Dm, Em, Om, Sm, TerrainManager, Tm, bm, km, wm, xm };
