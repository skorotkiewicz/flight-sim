var cd = 1 / 120;
var ld = 0.1;
var ud = 12;
var Assist = class {
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

export { Assist, cd, fd, ld, ud };
