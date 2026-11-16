var MODULE_PRELOAD_REL = `modulepreload`;
function resolvePreloadAssetPath(e) {
	return `/${e}`;
}
var preloadPromiseCache = {};
function isStylesheetUrl(e) {
	return e.pathname.endsWith(`.css`);
}
function deduplicatePreload(e, t, n) {
	if (t in e) {
		return e[t];
	}
	let r = n();
	if (!r) {
		e[t] = undefined;
		return;
	}
	let i = r.then(
		() => {
			e[t] = undefined;
		},
		(n) => {
			e[t] = undefined;
			throw n;
		},
	);
	e[t] = i;
	return i;
}
export {
	preloadPromiseCache,
	resolvePreloadAssetPath,
	isStylesheetUrl,
	MODULE_PRELOAD_REL,
	deduplicatePreload,
};
