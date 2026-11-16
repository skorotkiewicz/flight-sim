# web/ — readable reconstruction of assets/index.js

The minified Vite/Rollup bundle (`assets/index.js`, 664K) unrolled into 26 game
modules in `web/src/game/` + a three.js shim, running as a Vite vanilla app
(entry: `web/src/main.js` → `game/main.js`). Three.js comes from the npm
dependency (`three@0.187.0` in `web/package.json`).

Run it:

```
cd web && bun run dev     # dev server
cd web && bun run build   # production build -> dist/
```

To regenerate the modules after editing `rename-map.json`:

```
node tools/split.mjs webcrack-out/deobfuscated.js rename-map.json web/src/game
```

Pipeline: webcrack (unminify) → split at top-level module boundaries →
scope-safe rename via `rename-map.json` → import/export wiring via babel
scope analysis (only genuinely cross-module references get imports, so
shadowed single-letter locals are safe).

## Modules (in bundle/dependency order)

All game code lives in `web/src/game/`, grouped:

**`core/`** — rendering infrastructure

| module | role |
|---|---|
| three.js | re-export shim of the npm `three` package (r187); the embedded three r170 body was dropped |
| postfx.js | FXAA + render-target composer |

**`flight/`** — flying the plane

| module | role |
|---|---|
| flight.js | aircraft spec, flap data, flight-model math |
| input.js | touch/handheld detection, TouchInput |
| controls.js | DesktopInput (keyboard/mouse/gamepad), PwaManager |
| clock.js | Assist (arcade assist), fixed-step clock |

**`plane/`** — the aircraft and its effects

| module | role |
|---|---|
| meshkit.js | makeMesh + material/gradient/texture helpers |
| planemodels.js | plane styles (biplane/hard/sunflower), part builders |
| contrails.js | wingtip contrail meshes + shader |
| particles.js | ParticleSystem (dust/smoke) |

**`world/`** — the world you fly over

| module | role |
|---|---|
| noise.js | simplex noise (copy of the worker's) |
| terrain.js | Terrain (biomes, height field) |
| props.js | scatter props |
| destinations.js | settlements/POIs |
| clouds.js | clouds + CameraRig |
| sky.js | sun/lighting presets (Morning, Water, …) |
| mission.js | cross-country route/mission logic |

**`ui/`** — screens and overlays

| module | role |
|---|---|
| hud.js | HUD overlays (arrows, badges) |
| instruments.js | canvas gauges (ASI, alt…) |
| menus.js | SettingsPanel (pause menu) |
| hangarui.js | Hangar customization UI |
| worldmap.js | route-map drawing |

**`app/`** — global services

| module | role |
|---|---|
| audio.js | SoundEngine (WebAudio bus, fanfare/sfx) |
| storage.js | localStorage save/load (`baron.best.v1`, `baron.settings.v1`) |
| loader.js | loadModule (dynamic import + progress) |
| sw.js | service-worker URL helpers |

**`game/main.js`** — Game class + bootstrap (`window.baron` hook is in `Game.setupDebug`); entry stub `src/main.js` imports it. lil-gui (npm dep, own chunk) is loaded by `Game.setupDebug`.

## Variable-name map

`rename-map.json` (repo root): `{ "map": { "<minified>": "<recovered>" } }`.
To extend it, add entries and re-run the command above — renaming is
babel-scope-aware, so shadowed locals are untouched, and cross-module imports
are re-wired automatically.

Notes / caveats:

- The game originally embedded three.js **r170** (tree-shaken). The shim points
  at npm **r187**; names were matched by runtime
  markers (`isVector3`, `this.type`, constant values verified against r187).
  If a runtime API drifted between r170 and r187, fix it in the shim/game code.
- The terrain worker loads `/assets/chunk.worker.js` at runtime (served from
  `web/public/assets/`). The original `/sw.js` service-worker file was not in
  the build output, so its registration 404s harmlessly.
- The original build in `../assets/` is untouched.
