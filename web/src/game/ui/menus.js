import { Sd, randomSeed, xd, yd } from "../app/storage.js";

var $ = (e) => document.getElementById(e);
var MEDALS = [`🎈`, `🥉`, `🥈`, `🥇`];
var SettingsPanel = class {
	settings;
	h;
	toastTimer = 0;
	hintTimer = 0;
	constructor(e, t) {
		this.settings = e;
		this.h = t;
		this.bindSeg(
			`mode-seg`,
			() => e.mode,
			(n) => {
				e.mode = n;
				t.modeChanged();
			},
		);
		$(`dest-prev`).addEventListener(`click`, () => {
			t.click();
			t.destStep(-1);
		});
		$(`dest-next`).addEventListener(`click`, () => {
			t.click();
			t.destStep(1);
		});
		this.bindSeg(
			`assist-seg`,
			() => e.assist,
			(t) => (e.assist = t),
		);
		this.bindSeg(
			`quality-seg`,
			() => e.quality,
			(n) => {
				e.quality = n;
				t.qualityChanged();
			},
		);
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
			e.seed = randomSeed();
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
			t.tiltChanged(n).then((t) => {
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
			this.hint(
				`Tilt re-centred: hold the device like this to fly straight.`,
				2500,
			);
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
		let a = () =>
			i.forEach((e) => e.classList.toggle(`on`, e.dataset.v === t()));
		i.forEach((e) =>
			e.addEventListener(`click`, () => {
				n(e.dataset.v);
				yd(this.settings);
				this.h.click();
				a();
				this.refreshBest();
			}),
		);
		a();
	}
	refreshBest() {
		let e = this.settings;
		let t = Sd(xd(e.seed, e.mode, e.dest));
		let n = e.mode === `route` ? `Best on this route` : `Best on this world`;
		let r = t?.path === undefined ? `` : `, ${t.path}% on the path`;
		$(`best-line`).textContent = t
			? `${n}: ${MEDALS[t.medal]} landing ${t.landing}${r}`
			: ``;
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
		for (let t of [
			`title`,
			`hangar-screen`,
			`loading`,
			`pause`,
			`debrief`,
			`nogl`,
			`ctxlost`,
		]) {
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
		$(`medal`).textContent = MEDALS[e.medal];
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

export { $, MEDALS, SettingsPanel };
