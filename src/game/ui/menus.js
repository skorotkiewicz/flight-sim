import {
	getBestScore,
	getScoreStorageKey,
	randomSeed,
	saveSettings,
} from "../app/storage.js";

var getMenuElement = (e) => document.getElementById(e);
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
		getMenuElement(`dest-prev`).addEventListener(`click`, () => {
			t.click();
			t.destStep(-1);
		});
		getMenuElement(`dest-next`).addEventListener(`click`, () => {
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
		let n = getMenuElement(`seed-input`);
		n.value = String(e.seed);
		n.addEventListener(`change`, () => {
			let r = parseInt(n.value.replace(/\D/g, ``), 10);
			if (Number.isFinite(r) && r > 0) {
				e.seed = r;
				saveSettings(e);
				t.seedChanged(r);
			} else {
				n.value = String(e.seed);
			}
			this.refreshBest();
		});
		getMenuElement(`seed-roll`).addEventListener(`click`, () => {
			t.click();
			e.seed = randomSeed();
			n.value = String(e.seed);
			saveSettings(e);
			t.seedChanged(e.seed);
			this.refreshBest();
		});
		getMenuElement(`fly-btn`).addEventListener(`click`, () => t.fly());
		getMenuElement(`resume-btn`).addEventListener(`click`, () => t.resume());
		getMenuElement(`restart-btn`).addEventListener(`click`, () => t.restart());
		getMenuElement(`quit-btn`).addEventListener(`click`, () => t.quit());
		getMenuElement(`again-btn`).addEventListener(`click`, () => t.again());
		getMenuElement(`newworld-btn`).addEventListener(`click`, () =>
			t.newWorld(),
		);
		getMenuElement(`hangar-btn`).addEventListener(`click`, () => t.quit());
		getMenuElement(`open-hangar`).addEventListener(`click`, () =>
			t.openHangar(),
		);
		getMenuElement(`close-hangar`).addEventListener(`click`, () =>
			t.closeHangar(),
		);
		let r = getMenuElement(`volume`);
		r.value = String(e.volume);
		r.addEventListener(`input`, () => {
			e.volume = parseFloat(r.value);
			saveSettings(e);
			t.volumeChanged(e.volume);
		});
		let i = getMenuElement(`shake`);
		i.checked = e.cameraShake;
		i.addEventListener(`change`, () => {
			e.cameraShake = i.checked;
			saveSettings(e);
		});
		let atc = getMenuElement(`atc-enabled`);
		atc.checked = e.atcEnabled === true;
		atc.addEventListener(`change`, () => {
			e.atcEnabled = atc.checked;
			saveSettings(e);
			t.atcChanged?.();
		});
		let a = getMenuElement(`tilt`);
		let o = getMenuElement(`tilt-note`);
		let s = getMenuElement(`recentre-btn`);
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
				saveSettings(e);
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
		let l = getMenuElement(`invert`);
		l.checked = e.invertPitch;
		l.addEventListener(`change`, () => {
			e.invertPitch = l.checked;
			saveSettings(e);
		});
		this.refreshBest();
	}
	bindSeg(e, t, n) {
		let r = getMenuElement(e);
		let i = Array.from(r.querySelectorAll(`button`));
		let a = () =>
			i.forEach((e) => e.classList.toggle(`on`, e.dataset.v === t()));
		i.forEach((e) =>
			e.addEventListener(`click`, () => {
				n(e.dataset.v);
				saveSettings(this.settings);
				this.h.click();
				a();
				this.refreshBest();
			}),
		);
		a();
	}
	refreshBest() {
		let e = this.settings;
		let t = getBestScore(getScoreStorageKey(e.seed, e.mode, e.dest));
		let n = e.mode === `route` ? `Best on this route` : `Best on this world`;
		let r = t?.path === undefined ? `` : `, ${t.path}% on the path`;
		getMenuElement(`best-line`).textContent = t
			? `${n}: ${MEDALS[t.medal]} landing ${t.landing}${r}`
			: ``;
	}
	setRoutePanel(e) {
		getMenuElement(`route-panel`).classList.toggle(`hidden`, !e);
	}
	setRouteInfo(e, t) {
		getMenuElement(`dest-name`).textContent = e;
		getMenuElement(`route-info`).textContent = t;
	}
	get routeCanvas() {
		return getMenuElement(`route-map`);
	}
	setSeed(e) {
		getMenuElement(`seed-input`).value = String(e);
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
			getMenuElement(t).classList.toggle(`hidden`, t !== e);
		}
	}
	setAircraft(e) {
		getMenuElement(`aircraft-name`).textContent = e;
	}
	setLoading(e) {
		getMenuElement(`load-bar`).style.width = `${Math.round(e * 100)}%`;
	}
	showDebrief(e) {
		getMenuElement(`debrief-title`).textContent = e.title;
		getMenuElement(`medal`).textContent = MEDALS[e.medal];
		let t = getMenuElement(`debrief-stats`);
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
		let n = getMenuElement(`toast`);
		n.textContent = e;
		n.classList.add(`show`);
		clearTimeout(this.toastTimer);
		this.toastTimer = window.setTimeout(() => n.classList.remove(`show`), t);
	}
	hint(e, t = 4500) {
		let n = getMenuElement(`hint`);
		n.textContent = e;
		n.classList.add(`show`);
		clearTimeout(this.hintTimer);
		this.hintTimer = window.setTimeout(() => n.classList.remove(`show`), t);
	}
	clearHint() {
		getMenuElement(`hint`).classList.remove(`show`);
	}
	setWhiteout(e) {
		getMenuElement(`whiteout`).style.opacity = String(e);
	}
	setHurt(e) {
		getMenuElement(`hurt`).style.opacity = String(e);
	}
};

export { getMenuElement, MEDALS, SettingsPanel };
