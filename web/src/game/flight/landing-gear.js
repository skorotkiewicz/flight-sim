const GEAR_TRAVEL_SECONDS = 3;

function gearPosition(state) {
	return Math.max(0, Math.min(1, state.gearPosition ?? 1));
}

function isGearDownLocked(state, spec) {
	return !spec.retractableGear || gearPosition(state) >= 0.999;
}

function getGearStatus(state, spec) {
	if (!spec.retractableGear) return "FIXED";
	const position = gearPosition(state);
	if (position >= 0.999) return "DOWN";
	if (position <= 0.001) return "UP";
	return "TRANSIT";
}

function toggleLandingGear(state, spec, groundHeight = 0) {
	if (!spec.retractableGear) return "fixed";
	const target = state.gearTarget ?? 1;
	if (target >= 0.5) {
		if (
			state.onGround ||
			state.wheels > 0 ||
			state.pos.y - groundHeight <= 2.5
		) {
			return "ground-locked";
		}
		state.gearTarget = 0;
		return "retracting";
	}
	state.gearTarget = 1;
	return "extending";
}

function updateLandingGear(state, spec, dt) {
	if (!spec.retractableGear || dt <= 0) return;
	const position = gearPosition(state);
	const target = (state.gearTarget ?? 1) >= 0.5 ? 1 : 0;
	const travel = dt / GEAR_TRAVEL_SECONDS;
	state.gearPosition =
		position + Math.max(-travel, Math.min(travel, target - position));
}

function getGearParasiteDrag(state, spec) {
	if (!spec.retractableGear) return spec.cd0;
	return spec.cd0 - (spec.gearDrag ?? 0) * (1 - gearPosition(state));
}

export {
	GEAR_TRAVEL_SECONDS,
	getGearParasiteDrag,
	getGearStatus,
	isGearDownLocked,
	toggleLandingGear,
	updateLandingGear,
};
