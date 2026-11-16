import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { fileURLToPath, pathToFileURL } from "node:url";

const script = fileURLToPath(new URL("./rename.mjs", import.meta.url));

function fixture(t, map) {
	const dir = fs.mkdtempSync(path.join(os.tmpdir(), "game-rename-"));
	t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
	const mapPath = path.join(dir, "map.json");
	fs.writeFileSync(mapPath, JSON.stringify(map));
	return { dir, mapPath };
}

test("renames module links while preserving shadows, aliases, and property keys", (t) => {
	const { dir, mapPath } = fixture(t, {
		map: { Md: "addOutlineNormals", Rd: "createOutlineMaterial" },
	});
	const input = path.join(dir, "input");
	const output = path.join(dir, "output");
	fs.mkdirSync(input);
	fs.writeFileSync(
		path.join(input, "meshkit.mjs"),
		`
    const Md = 7;
    const Rd = () => ({ Md });
    export { Md, Rd, Md as publicValue };
  `,
	);
	fs.writeFileSync(
		path.join(input, "star.mjs"),
		"export * from './meshkit.mjs';",
	);
	fs.writeFileSync(
		path.join(input, "barrel.mjs"),
		"export { Md, Rd, publicValue } from './star.mjs';",
	);
	fs.writeFileSync(
		path.join(input, "main.mjs"),
		`
    import { Md, Rd as material, publicValue } from './barrel.mjs';
    const shadow = (Md) => Md + 1;
    export const result = [Md, material().Md, publicValue, shadow(10)];
  `,
	);
	execFileSync(process.execPath, [script, input, mapPath, output]);
	const result = execFileSync(
		process.execPath,
		[
			"--input-type=module",
			"-e",
			`
    const { result } = await import(${JSON.stringify(pathToFileURL(path.join(output, "main.mjs")).href)});
    console.log(JSON.stringify(result));
  `,
		],
		{ encoding: "utf8" },
	);
	assert.deepEqual(JSON.parse(result), [7, 7, 7, 11]);
	const provider = fs.readFileSync(path.join(output, "meshkit.mjs"), "utf8");
	assert.match(provider, /addOutlineNormals/);
	assert.doesNotMatch(provider, /export\s*\{\s*Md\b/);
	const before = fs.readFileSync(path.join(output, "main.mjs"), "utf8");
	execFileSync(process.execPath, [script, output, mapPath, output]);
	assert.equal(fs.readFileSync(path.join(output, "main.mjs"), "utf8"), before);
});

test("accepts a flat map for the original single-file command", (t) => {
	const { dir, mapPath } = fixture(t, { Md: "addOutlineNormals" });
	const input = path.join(dir, "input.js");
	const output = path.join(dir, "output.js");
	fs.writeFileSync(input, "var Md = 7; console.log(Md);");
	execFileSync(process.execPath, [script, input, mapPath, output]);
	assert.match(fs.readFileSync(output, "utf8"), /var addOutlineNormals = 7/);
});

test("renames directly exported declarations and their importers", (t) => {
	const { dir, mapPath } = fixture(t, {
		map: { Md: "outlineWidth", Rd: "getOutlineWidth" },
	});
	const input = path.join(dir, "input");
	const output = path.join(dir, "output");
	fs.mkdirSync(input);
	fs.writeFileSync(
		path.join(input, "meshkit.mjs"),
		"export const Md = 7; export function Rd() { return Md; }",
	);
	fs.writeFileSync(
		path.join(input, "main.mjs"),
		"import { Md, Rd } from './meshkit.mjs'; export const result = Md + Rd();",
	);
	execFileSync(process.execPath, [script, input, mapPath, output]);
	const result = execFileSync(
		process.execPath,
		[
			"--input-type=module",
			"-e",
			`const { result } = await import(${JSON.stringify(pathToFileURL(path.join(output, "main.mjs")).href)}); console.log(result);`,
		],
		{ encoding: "utf8" },
	);
	assert.equal(Number(result), 14);
});

test("rejects a rename that would capture a reference before writing output", (t) => {
	const { dir, mapPath } = fixture(t, { map: { Md: "addOutlineNormals" } });
	const input = path.join(dir, "input.js");
	const output = path.join(dir, "output.js");
	fs.writeFileSync(
		input,
		"const Md = 7; function read(addOutlineNormals) { return Md; }",
	);
	const result = spawnSync(process.execPath, [script, input, mapPath, output]);
	assert.notEqual(result.status, 0);
	assert.match(result.stderr.toString(), /collision/i);
	assert.equal(fs.existsSync(output), false);
});

test("rejects namespace links before changing any files", (t) => {
	const { dir, mapPath } = fixture(t, { map: { Md: "outlineWidth" } });
	const input = path.join(dir, "input");
	const output = path.join(dir, "output");
	fs.mkdirSync(input);
	fs.writeFileSync(path.join(input, "meshkit.mjs"), "export const Md = 7;");
	fs.writeFileSync(
		path.join(input, "main.mjs"),
		"import * as meshkit from './meshkit.mjs'; console.log(meshkit.Md);",
	);
	const result = spawnSync(process.execPath, [script, input, mapPath, output]);
	assert.notEqual(result.status, 0);
	assert.match(result.stderr.toString(), /Namespace links.*unsupported/);
	assert.equal(fs.existsSync(output), false);
});
