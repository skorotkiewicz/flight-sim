var mediaMatches = (e) =>
	typeof matchMedia == `function` && matchMedia(e).matches;
function isTouchScreen() {
	return mediaMatches(`(pointer: coarse)`);
}
function isHandheld() {
	return isTouchScreen() && Math.min(screen.width, screen.height) <= 900;
}
var orientationLock = null;
function readSafeAreaInsets() {
	if (typeof document > `u`) {
		return {
			l: 0,
			r: 0,
			t: 0,
			b: 0,
		};
	}
	if (!orientationLock) {
		orientationLock = document.createElement(`div`);
		orientationLock.style.cssText = `position:fixed;visibility:hidden;pointer-events:none;left:0;top:0;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)`;
		document.body.append(orientationLock);
	}
	let e = getComputedStyle(orientationLock);
	let t = (e) => parseFloat(e) || 0;
	return {
		l: t(e.paddingLeft),
		r: t(e.paddingRight),
		t: t(e.paddingTop),
		b: t(e.paddingBottom),
	};
}
function requestLandscapeFullscreen() {
	let e = document.documentElement;
	if (!document.fullscreenElement && e.requestFullscreen) {
		e.requestFullscreen({
			navigationUI: `hide`,
		})
			.then(() => screen.orientation?.lock?.(`landscape`))
			.catch(() => {});
	}
}
var TouchInput = class {
	lock = null;
	want = false;
	constructor() {
		document.addEventListener(`visibilitychange`, () => {
			if (!document.hidden && this.want && !this.lock) {
				this.acquire();
			}
		});
	}
	set(e) {
		this.want = e;
		if (e && !this.lock) {
			this.acquire();
		}
		if (!e && this.lock) {
			this.lock.release().catch(() => {});
			this.lock = null;
		}
	}
	acquire() {
		let e = navigator.wakeLock;
		if (e && !document.hidden) {
			e.request(`screen`)
				.then((e) => {
					if (this.want) {
						this.lock = e;
						e.addEventListener(`release`, () => {
							if (this.lock === e) {
								this.lock = null;
							}
						});
					} else {
						e.release();
					}
				})
				.catch(() => {});
		}
	}
};
export {
	TouchInput,
	readSafeAreaInsets,
	isHandheld,
	isTouchScreen,
	requestLandscapeFullscreen,
	mediaMatches,
	orientationLock,
};
