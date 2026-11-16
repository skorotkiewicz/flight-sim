import assert from "node:assert/strict";
import { test } from "node:test";

test("taxi guidance reuses unchanged geometry and clears session markers", async () => {
	const { TaxiGuide } = await import("../src/game/world/taxi-guide.js");
	const guide = new TaxiGuide();
	const airport = { x: 0, z: 0, height: 10, dirX: 1, dirZ: 0 };
	const layout = {
		parking: { x: -50, y: 10, z: 54 },
		holding: { x: -50, y: 10, z: 31 },
	};
	const state = {
		kind: "taxi",
		airport,
		layout,
		points: [layout.parking, layout.holding],
		target: layout.holding,
	};
	guide.update(state, () => 10);
	assert.ok(guide.group.children.length > 2);
	const children = [...guide.group.children];
	for (const child of children) assert.ok(child.position.y > 10.29);
	guide.update(state, () => 10);
	assert.deepEqual(guide.group.children, children);
	guide.update(null, () => 10);
	assert.equal(guide.group.children.length, 0);
	guide.update(state, () => 10);
	assert.ok(guide.group.children.length > 0);
	guide.dispose();
	assert.equal(guide.group.children.length, 0);
});
