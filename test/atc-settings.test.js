import assert from "node:assert/strict";
import test from "node:test";
import {
	createDefaultSettings,
	loadSettings,
} from "../src/game/app/storage.js";

test("guided ATC defaults off", () => {
	assert.equal(createDefaultSettings().atcEnabled, false);
});

test("only a saved true enables guided ATC", () => {
	const previousStorage = globalThis.localStorage;
	try {
		for (const value of [true, false, undefined, null, "true", 1, {}, []]) {
			globalThis.localStorage = {
				getItem: () => JSON.stringify({ atcEnabled: value }),
			};
			assert.equal(loadSettings().atcEnabled, value === true);
		}
	} finally {
		if (previousStorage === undefined) delete globalThis.localStorage;
		else globalThis.localStorage = previousStorage;
	}
});

test("older settings preserve flight choices and leave guided ATC off", () => {
	const previousStorage = globalThis.localStorage;
	try {
		globalThis.localStorage = {
			getItem: () =>
				JSON.stringify({ mode: "route", dest: 3, assist: "expert" }),
		};
		const settings = loadSettings();
		assert.equal(settings.mode, "route");
		assert.equal(settings.dest, 3);
		assert.equal(settings.assist, "expert");
		assert.equal(settings.atcEnabled, false);
	} finally {
		if (previousStorage === undefined) delete globalThis.localStorage;
		else globalThis.localStorage = previousStorage;
	}
});
