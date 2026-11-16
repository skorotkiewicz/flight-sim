import { FLAP_LABELS, FLAP_POSITIONS } from "../flight/flight.js";
import { Fp } from "./instruments.js";
import { df } from "../plane/planemodels.js";
import { MathUtils, Vector2, Vector3 } from "../core/three.js";

var Q = `#2b1d1a`;
var Lp = `#fff6dd`;
var Rp = `#2a9d8f`;
var zp = `#f2b134`;
var Bp = `#e04f3a`;
var Vp = `"Baloo 2", "Trebuchet MS", sans-serif`;
var Hp = new Vector3();
var Up = new Vector3();
var Wp = new Vector3();
var Gp = new Vector3();
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
var Hud = class {
  canvas;
  g;
  w = 0;
  h = 0;
  dpr = 1;
  mini;
  miniAt = new Vector2(1000000000, 1000000000);
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
    let r = MathUtils.clamp((this.w - n * 2) / 484, 0.45, 1);
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
    let i = Math.asin(MathUtils.clamp(Up.y, -1, 1));
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
    for (let n = 0; n < FLAP_POSITIONS.length; n++) {
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
      e.fillText(FLAP_LABELS[n], i + 30, 195);
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
      let c = this.w / 2 + MathUtils.clamp(i, -58, 58) * s;
      r.fillStyle = n;
      r.beginPath();
      r.moveTo(c, a + 36);
      r.lineTo(c - 6, a + 28);
      r.lineTo(c + 6, a + 28);
      r.closePath();
      r.fill();
    };
    let l = e.world.gen.nearestAirfield(e.player.s.pos.x, e.player.s.pos.z).af;
    c(new Vector3(l.x, 0, l.z), Rp);
    if (e.guide) {
      c(new Vector3(e.guide.dest.x, 0, e.guide.dest.z), zp);
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
    let o = [-1, 1].map(e => new Vector3(r.x + r.dirX * (r.length / 2) * e, r.height + 1, r.z + r.dirZ * (r.length / 2) * e));
    let s = new Vector3(r.x, r.height + 1, r.z);
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
      n.fillText(`FLAPS ${FLAP_LABELS[e.flapNotch]}`, o + 10, s + 70);
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
    let C = x ? `TOO FAST` : FLAP_LABELS[e.flapNotch];
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

export { Bp, Gp, Hp, Hud, Kp, Lp, Q, Rp, Up, Vp, Wp, qp, zp };
