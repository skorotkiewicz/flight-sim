import assert from "node:assert/strict";
import test from "node:test";
import {
	createTouchControlLayout,
	hitTestTouchControls,
	TouchHud,
} from "../src/game/flight/flight.js";

const safe = { l: 0, r: 0, t: 0, b: 0 };

test("touch gear stays outside the radio, minimap, and throttle hit areas", () => {
	for (const [width, height] of [
		[844, 390],
		[568, 320],
		[390, 844],
		[1024, 768],
	]) {
		const layout = createTouchControlLayout(width, height, safe);
		const gear = layout.buttons.gear;
		assert.ok(gear, "a gear control exists");
		const radioRight = width / 2 + Math.min(430, width - 150) / 2;
		assert.ok(gear.x - gear.r > radioRight, `${width}: gear clears radio`);
		assert.ok(
			gear.y - gear.r - 10 * layout.u > 154,
			`${width}: gear clears minimap`,
		);
		assert.ok(
			gear.y + gear.r + 20 * layout.u <= layout.lever.y,
			`${width}: padded gear/lever separation`,
		);
		assert.ok(gear.x + gear.r <= width);
		assert.equal(
			hitTestTouchControls(layout, gear.x, gear.y, false, true),
			"gear",
		);
		assert.notEqual(
			hitTestTouchControls(layout, gear.x, gear.y, false, false),
			"gear",
		);
		assert.equal(
			hitTestTouchControls(
				layout,
				layout.lever.x + layout.lever.w / 2,
				layout.lever.y,
				false,
				true,
			),
			"lever",
		);
	}
});

test("a shown gear button emits one toggle per touch and hidden fixed gear emits none", () => {
	const model = new TouchHud(844, 390, safe);
	assert.ok(model.layout.buttons.gear);
	const { x, y } = model.layout.buttons.gear;
	model.gearShown = false;
	assert.notEqual(model.down(1, x, y, 0), "gear");
	assert.equal(model.take().has("gear"), false);
	model.up(1);
	model.gearShown = true;
	assert.equal(model.down(2, x, y, 1), "gear");
	assert.equal(model.take().has("gear"), true);
	model.update(3);
	assert.equal(model.take().has("gear"), false);
	model.up(2);
	model.down(3, x, y, 4);
	assert.equal(model.take().has("gear"), true);
});
