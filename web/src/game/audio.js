import { MathUtils } from "./three.js";

var SoundEngine = class {
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
    let t = MathUtils.clamp(1 - e / 2500, 0.08, 1);
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

export { SoundEngine };
