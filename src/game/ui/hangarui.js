import {
	formatPlaneLoadout,
	savePlaneLoadout,
	estimatePlanePerformance,
	buildFlightSpec,
} from "../plane/planemodels.js";
import {
	HANGAR_OPTIONS,
	HANGAR_CATEGORIES,
	HANGAR_STATS,
} from "../world/sky.js";
var getHangarElement = (e) => document.getElementById(e);
var Hangar = class {
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
		this.stats = estimatePlanePerformance(buildFlightSpec(e));
		let i = getHangarElement(`hangar-tabs`);
		HANGAR_CATEGORIES.forEach((e, t) => {
			let n = document.createElement(`button`);
			n.textContent = e.label;
			n.addEventListener(`click`, () => {
				this.onClick();
				this.setCat(t);
			});
			i.append(n);
		});
		let a = getHangarElement(`hangar-stats`);
		for (let e of HANGAR_STATS) {
			let t = document.createElement(`div`);
			t.className = `stat`;
			t.innerHTML = `<span class="stat-label">${e.label}</span><span class="stat-bar"><i></i></span><span class="stat-val"></span><span class="stat-delta"></span>`;
			a.append(t);
			this.bars.push({
				fill: t.querySelector(`i`),
				val: t.querySelector(`.stat-val`),
				delta: t.querySelector(`.stat-delta`),
				timer: 0,
			});
		}
		window.addEventListener(`keydown`, (e) => {
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
			this.setCat(
				(this.cat + e + HANGAR_CATEGORIES.length) % HANGAR_CATEGORIES.length,
			);
		}
		if (t) {
			let e = HANGAR_CATEGORIES[this.cat].id;
			let n = HANGAR_OPTIONS[e];
			let r = n.findIndex((t) => t.id === this.loadout[e]);
			this.choose(e, n[(r + t + n.length) % n.length].id);
		}
	}
	setCat(e) {
		this.cat = e;
		getHangarElement(`hangar-tabs`)
			.querySelectorAll(`button`)
			.forEach((t, n) => t.classList.toggle(`on`, n === e));
		this.renderCards();
	}
	renderCards() {
		let e = HANGAR_CATEGORIES[this.cat].id;
		let t = getHangarElement(`hangar-cards`);
		t.className = e === `paint` ? `cards swatches` : `cards`;
		t.innerHTML = ``;
		for (let n of HANGAR_OPTIONS[e]) {
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
		getHangarElement(`hangar-name`).textContent = formatPlaneLoadout(
			this.loadout,
		);
	}
	choose(e, t) {
		if (this.loadout[e] !== t) {
			this.onClick();
			this.loadout[e] = t;
			savePlaneLoadout(this.loadout);
			this.renderCards();
			this.refreshStats(true);
			this.onChange(this.loadout);
		}
	}
	refreshStats(e) {
		let t = this.stats;
		let n = estimatePlanePerformance(buildFlightSpec(this.loadout));
		this.stats = n;
		HANGAR_STATS.forEach((r, i) => {
			let a = this.bars[i];
			a.fill.style.width = `${Math.round(r.bar(n) * 100)}%`;
			a.val.textContent = r.text(n);
			let o = r.delta(n) - r.delta(t);
			if (e && Math.abs(o) > 0.000001) {
				let e = o * r.better > 0;
				a.delta.textContent = `${o > 0 ? `+` : `−`}${Math.abs(Math.round(o * 10) / 10)}`;
				a.delta.className = `stat-delta show ${e ? `up` : `down`}`;
				clearTimeout(a.timer);
				a.timer = window.setTimeout(
					() => (a.delta.className = `stat-delta`),
					1600,
				);
			}
		});
	}
};
export { Hangar, getHangarElement };
