var FIXED_STEP_SECONDS = 1 / 120;
var MAX_FRAME_SECONDS = 0.1;
var MAX_STEPS_PER_FRAME = 12;
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
		let e = (t) => {
			if (
				!this.running ||
				((this.raf = requestAnimationFrame(e)),
				this.maxFps > 0 && t - this.last < 1000 / this.maxFps - 1)
			) {
				return;
			}
			let n = (t - this.last) / 1000;
			this.last = t;
			if (n > MAX_FRAME_SECONDS) {
				n = MAX_FRAME_SECONDS;
			}
			if (n < 0) {
				n = 0;
			}
			this.acc += n;
			let r = 0;
			while (this.acc >= 0.008333333333333333 && r < MAX_STEPS_PER_FRAME) {
				this.onStep(FIXED_STEP_SECONDS);
				this.acc -= FIXED_STEP_SECONDS;
				r++;
			}
			if (r === MAX_STEPS_PER_FRAME) {
				this.acc = 0;
			}
			this.onFrame(n, this.acc / FIXED_STEP_SECONDS);
		};
		this.raf = requestAnimationFrame(e);
	}
	stop() {
		this.running = false;
		cancelAnimationFrame(this.raf);
	}
};
var SETTINGS_STORAGE_KEY = `baron.settings.v1`;
export {
	Assist,
	FIXED_STEP_SECONDS,
	SETTINGS_STORAGE_KEY,
	MAX_FRAME_SECONDS,
	MAX_STEPS_PER_FRAME,
};
