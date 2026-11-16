import {
	preloadPromiseCache,
	resolvePreloadAssetPath,
	isStylesheetUrl,
	MODULE_PRELOAD_REL,
	deduplicatePreload,
} from "./sw.js";
function loadModule(e, t, n) {
	let r = Promise.resolve();
	if (t && t.length > 0) {
		let e;
		let i = document.querySelector(`meta[property=csp-nonce]`);
		let a = i?.nonce || i?.getAttribute(`nonce`);
		function o(e) {
			return Promise.all(
				e.map((e) =>
					Promise.resolve(e).then(
						(e) => ({
							status: `fulfilled`,
							value: e,
						}),
						(e) => ({
							status: `rejected`,
							reason: e,
						}),
					),
				),
			);
		}
		function s(e) {
			if (import.meta.resolve) {
				return new URL(import.meta.resolve(e));
			} else {
				return new URL(e, import.meta.url);
			}
		}
		r = o(
			t
				.map((t) => {
					t = resolvePreloadAssetPath(t, n);
					let r = s(t);
					let i = isStylesheetUrl(r);
					return deduplicatePreload(preloadPromiseCache, r.href, () => {
						if (e === undefined) {
							e = {
								all: new Set(),
								styles: new Set(),
							};
							let t = document.getElementsByTagName(`link`);
							for (let n = t.length - 1; n >= 0; n--) {
								let r = t[n];
								e.all.add(r.href);
								if (r.rel === `stylesheet`) {
									e.styles.add(r.href);
								}
							}
						}
						if ((i ? e.styles : e.all).has(r.href)) {
							return;
						}
						let t = document.createElement(`link`);
						t.rel = i ? `stylesheet` : MODULE_PRELOAD_REL;
						if (!i) {
							t.as = `script`;
						}
						t.crossOrigin = ``;
						t.href = r.href;
						if (a) {
							t.setAttribute(`nonce`, a);
						}
						document.head.appendChild(t);
						if (i) {
							return new Promise((e, n) => {
								let i = (a) => {
									t.removeEventListener(`load`, i);
									t.removeEventListener(`error`, i);
									if (a.type === `error`) {
										n(Error(`Unable to preload CSS for ${r}`));
									} else {
										e(a);
									}
								};
								t.addEventListener(`load`, i);
								t.addEventListener(`error`, i);
							});
						}
					});
				})
				.filter((e) => e !== undefined),
		);
	}
	function i(e) {
		let t = new Event(`vite:preloadError`, {
			cancelable: true,
		});
		t.payload = e;
		window.dispatchEvent(t);
		if (!t.defaultPrevented) {
			throw e;
		}
	}
	return r.then((t) => {
		for (let e of t || []) {
			if (e.status === `rejected`) {
				i(e.reason);
			}
		}
		return e().catch(i);
	});
}
export { loadModule };
