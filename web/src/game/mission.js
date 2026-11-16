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

export { $m, Ch, Qm, Sh, Zm, _h, ah, bh, ch, dh, eh, fh, gh, hh, ih, lh, mh, nh, oh, ph, rh, sh, th, uh, vh, wh, xh, yh };
