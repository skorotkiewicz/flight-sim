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

| module | role |
|---|---|
| three.js | re-export shim of the npm `three` package (r187); the embedded three r170 body was dropped |
| audio.js | SoundEngine (WebAudio bus, fanfare/sfx) |
| input.js | touch/handheld detection, TouchInput |
| flight.js | aircraft spec, flap data, flight-model math |
| controls.js | DesktopInput (keyboard/mouse/gamepad), PwaManager |
| clock.js | Assist (arcade assist), fixed-step clock |
| storage.js | localStorage save/load (`baron.best.v1`, `baron.settings.v1`) |
| meshkit.js | makeMesh + material/gradient/texture helpers |
| particles.js | ParticleSystem (dust/smoke) |
| planemodels.js | plane styles (biplane/hard/sunflower), part builders |
| contrails.js | wingtip contrail meshes + shader |
| postfx.js | FXAA + render-target composer |
| sky.js | sun/lighting presets (Morning, Water, …) |
| hangarui.js | Hangar customization UI |
| instruments.js | canvas gauges (ASI, alt…) |
| hud.js | HUD overlays (arrows, badges) |
| menus.js | SettingsPanel (pause menu) |
| worldmap.js | route-map drawing |
| noise.js | simplex noise (copy of the worker's) |
| terrain.js | Terrain (biomes, height field) |
| props.js | scatter props |
| destinations.js | settlements/POIs |
| clouds.js | clouds + CameraRig |
| mission.js | cross-country route/mission logic |
| sw.js | service-worker URL helpers |
| loader.js | loadModule (dynamic import + progress) |
| main.js | Game class + bootstrap (`window.baron` hook is in Game.setupDebug) |
| lil-gui.esm-BzjtZe8o.js | debug GUI, restored from npm (the hashed chunk was not in the build output) |

## Variable-name map

`rename-map.json` (also copied into `src/`): `{ "<minified>": "<recovered>" }`.
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
