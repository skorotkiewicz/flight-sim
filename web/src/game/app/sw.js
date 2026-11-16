var Th = `modulepreload`;
function Eh(e) {
	return `/${e}`;
}
var Dh = {};
function Oh(e) {
	return e.pathname.endsWith(`.css`);
}
function kh(e, t, n) {
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

export { Dh, Eh, Oh, Th, kh };
