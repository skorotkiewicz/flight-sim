import assert from "node:assert/strict";
import test from "node:test";
import { Color, Mesh, MeshToonMaterial, ShaderMaterial, Vector3 } from "three";
import {
	Aircraft,
	buildFlightContacts,
	buildFlightSpec,
	LandingGear,
	PLANE_METAL_COLOR,
	PLANE_MODELS,
	PLANE_TIRE_COLOR,
} from "../src/game/plane/planemodels.js";

const loadout = (style, wheels = "medium") => ({
	style,
	wheels,
	paint: "sunflower",
});
const animate = (visual, position, dt = 0) =>
	visual.animate(dt, 0, 0, 0, 0, 0, position);

function createVisual(t, style, wheels) {
	const material = new MeshToonMaterial({ vertexColors: true });
	const outline = new ShaderMaterial();
	const visual = new LandingGear(loadout(style, wheels), material, outline);
	t.after(() => {
		visual.dispose();
		material.dispose();
		outline.dispose();
	});
	return visual;
}

function vertices(object, colorHex) {
	object.updateWorldMatrix(true, true);
	const points = [];
	const color = colorHex === undefined ? null : new Color(colorHex);
	object.traverse((mesh) => {
		if (!(mesh instanceof Mesh) || mesh.name === "outline") return;
		const positions = mesh.geometry.getAttribute("position");
		const colors = mesh.geometry.getAttribute("color");
		for (let i = 0; i < positions.count; i++) {
			if (
				color &&
				(!colors ||
					Math.abs(colors.getX(i) - color.r) > 1e-6 ||
					Math.abs(colors.getY(i) - color.g) > 1e-6 ||
					Math.abs(colors.getZ(i) - color.b) > 1e-6)
			)
				continue;
			points.push(
				new Vector3()
					.fromBufferAttribute(positions, i)
					.applyMatrix4(mesh.matrixWorld),
			);
		}
	});
	return points;
}

function bounds(points) {
	return {
		min: new Vector3(
			...["x", "y", "z"].map((axis) => Math.min(...points.map((p) => p[axis]))),
		),
		max: new Vector3(
			...["x", "y", "z"].map((axis) => Math.max(...points.map((p) => p[axis]))),
		),
	};
}

function close(actual, expected) {
	assert.ok(Math.abs(actual - expected) < 1e-6, `${actual} != ${expected}`);
}

test("loadouts preserve down drag and add belly contact only for retractable gear", () => {
	for (const [style, retractable, drag, cd0] of [
		["biplane", false, 0, 0.035],
		["turboprop", true, 0.006, 0.024],
		["jet", true, 0.005, 0.02],
	]) {
		for (const wheels of ["hard", "medium", "soft"]) {
			const options = loadout(style, wheels);
			const spec = buildFlightSpec(options);
			assert.equal(PLANE_MODELS[style].retractableGear, retractable);
			assert.equal(spec.retractableGear, retractable);
			assert.equal(spec.gearDrag, drag);
			close(spec.cd0, cd0 + (wheels === "soft" ? 0.002 : 0));
			const belly = buildFlightContacts(options).crash.filter(
				(p) => p.kind === "belly",
			);
			assert.deepEqual(
				belly.map((p) => p.p.toArray()),
				retractable ? [[0, -0.65, 0]] : [],
			);
		}
	}
});

for (const [style, centers, struts] of [
	[
		"turboprop",
		[
			[-1.35, -1.05, 0.35],
			[1.35, -1.05, 0.35],
			[0, -1.05, -2.5],
		],
		[
			[-0.78, 0.55],
			[-0.78, 0.55],
			[-0.85, 0.45],
		],
	],
	[
		"jet",
		[
			[-1.3, -0.9, 0.7],
			[1.3, -0.9, 0.7],
			[0, -0.9, -2.9],
		],
		[
			[-0.55, 0.7],
			[-0.55, 0.7],
			[-0.7, 0.45],
		],
	],
]) {
	test(`${style} separates all wheels and support struts while preserving every wheel option's down pose`, (t) => {
		for (const [wheels, radius, width] of [
			["hard", 0.3, 0.14],
			["medium", 0.36, 0.17],
			["soft", 0.48, 0.3],
		]) {
			const visual = createVisual(t, style, wheels);
			assert.equal(visual.gearAssemblies?.length, 3);
			assert.equal(
				vertices(visual.root.children[0], PLANE_TIRE_COLOR).length,
				0,
			);
			visual.gearAssemblies.forEach((group, index) => {
				assert.equal(group.parent, visual.root);
				assert.equal(group.visible, true);
				const tire = bounds(vertices(group, PLANE_TIRE_COLOR));
				const [x, y, z] = centers[index];
				const halfWidth = (width * (index === 2 ? 0.9 : 1)) / 2;
				const wheelRadius = radius * (index === 2 ? 0.85 : 1);
				close(tire.min.x, x - halfWidth);
				close(tire.max.x, x + halfWidth);
				// The existing 14-sided cylinder has no vertex at its vertical pole.
				close(tire.min.y, y - wheelRadius * Math.cos(Math.PI / 14));
				close(tire.max.y, y + wheelRadius * Math.cos(Math.PI / 14));
				close((tire.min.z + tire.max.z) / 2, z);
				const metal = vertices(group, PLANE_METAL_COLOR);
				assert.equal(
					metal.length,
					36,
					"the support strut moves with its wheel",
				);
				assert.equal(
					vertices(visual.root.children[0], PLANE_METAL_COLOR).filter(
						(point) =>
							Math.abs(point.x - x) < 0.06 && Math.abs(point.z - z) < 0.06,
					).length,
					0,
					"no duplicate support strut remains in the fixed body",
				);
				const strutBounds = bounds(metal);
				close(strutBounds.min.y, struts[index][0] - struts[index][1] / 2);
				close(strutBounds.max.y, struts[index][0] + struts[index][1] / 2);
			});
		}
	});

	test(`${style} folds smoothly from actual extension and restores the down pose`, (t) => {
		const visual = createVisual(t, style);
		assert.equal(visual.gearAssemblies?.length, 3);
		const down = visual.gearAssemblies.map((g) =>
			vertices(g).map((v) => v.toArray()),
		);
		animate(visual, 0.5);
		const middle = visual.gearAssemblies.map((g) =>
			vertices(g).map((v) => v.toArray()),
		);
		assert.notDeepEqual(middle, down);
		assert.ok(visual.gearAssemblies.every((g) => g.visible));
		animate(visual, 0.5, 100);
		assert.deepEqual(
			visual.gearAssemblies.map((g) => vertices(g).map((v) => v.toArray())),
			middle,
			"dt cannot advance the gear independently",
		);
		animate(visual, 0.5001);
		const reversed = visual.gearAssemblies.map((g) => vertices(g));
		for (const [i, points] of reversed.entries()) {
			for (const [j, point] of points.entries()) {
				assert.ok(point.distanceTo(new Vector3(...middle[i][j])) < 0.001);
			}
		}
		animate(visual, 0.001);
		assert.ok(visual.gearAssemblies.every((g) => g.visible));
		animate(visual, 0);
		assert.ok(visual.gearAssemblies.every((g) => !g.visible));
		visual.animate(0, 0, 0, 0, 0);
		assert.ok(visual.gearAssemblies.every((g) => g.visible));
		assert.deepEqual(
			visual.gearAssemblies.map((g) => vertices(g).map((v) => v.toArray())),
			down,
			"default animation and extending fully restore down geometry",
		);
	});
}

test("fixed biplane wheels and wooden supports ignore gear position", (t) => {
	const visual = createVisual(t, "biplane");
	assert.deepEqual(visual.gearAssemblies, []);
	const down = vertices(visual.root).map((v) => v.toArray());
	assert.ok(vertices(visual.root.children[0], PLANE_TIRE_COLOR).length > 0);
	animate(visual, 0);
	assert.deepEqual(
		vertices(visual.root).map((v) => v.toArray()),
		down,
	);
});

test("aircraft renders actual gear state even when the lever target differs", (t) => {
	const material = new MeshToonMaterial();
	const outline = new ShaderMaterial();
	const aircraft = new Aircraft(loadout("jet"), material, outline);
	t.after(() => {
		aircraft.visual.dispose();
		material.dispose();
		outline.dispose();
	});
	aircraft.s.gearPosition = 0;
	aircraft.s.gearTarget = 1;
	aircraft.syncVisual(1, 0);
	assert.equal(aircraft.visual.gearAssemblies?.length, 3);
	assert.ok(aircraft.visual.gearAssemblies.every((g) => !g.visible));
	aircraft.s.gearPosition = 1;
	aircraft.s.gearTarget = 0;
	aircraft.syncVisual(1, 0);
	assert.ok(aircraft.visual.gearAssemblies.every((g) => g.visible));
	delete aircraft.s.gearPosition;
	aircraft.syncVisual(1, 0);
	assert.ok(aircraft.visual.gearAssemblies.every((g) => g.visible));
});

test("retracted gear geometry is disposed once without disposing shared materials", () => {
	for (const style of ["turboprop", "jet"]) {
		const material = new MeshToonMaterial();
		const outline = new ShaderMaterial();
		const visual = new LandingGear(loadout(style), material, outline);
		assert.equal(visual.gearAssemblies?.length, 3);
		animate(visual, 0);
		const disposals = new Map();
		visual.root.traverse((mesh) => {
			if (!(mesh instanceof Mesh) || disposals.has(mesh.geometry)) return;
			disposals.set(mesh.geometry, 0);
			mesh.geometry.addEventListener("dispose", () =>
				disposals.set(mesh.geometry, disposals.get(mesh.geometry) + 1),
			);
		});
		let sharedDisposals = 0;
		for (const shared of [material, outline])
			shared.addEventListener("dispose", () => sharedDisposals++);
		visual.dispose();
		assert.ok([...disposals.values()].every((count) => count === 1));
		assert.equal(sharedDisposals, 0);
		material.dispose();
		outline.dispose();
	}
});
