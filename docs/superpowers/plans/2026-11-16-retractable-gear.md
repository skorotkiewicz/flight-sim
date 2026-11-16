# Retractable gear implementation plan

> Execute the user-approved addition continuously with disjoint implementation tasks and final integration review.

**Spec:** `docs/superpowers/specs/2026-11-16-retractable-gear-design.md`.
**Goal:** Real animated gear on turboprop/jet with physical drag/contact and user controls.
**Stack:** Existing JavaScript, Three.js, Node tests, Vite and Biome; no new dependency.

## Shared contracts

- `FlightState.gearPosition` and `gearTarget`: 0 up, 1 down, initially 1.
- `spec.retractableGear`: boolean; `spec.gearDrag`: 0.006 turboprop, 0.005 jet,
  0 fixed biplane. Existing `cd0` describes current lowered-gear drag.
- `flight/landing-gear.js` exports `GEAR_TRAVEL_SECONDS = 3`,
  `getGearStatus(state,spec) -> "FIXED"|"DOWN"|"UP"|"TRANSIT"`,
  `isGearDownLocked(state,spec) -> boolean`,
  `toggleLandingGear(state,spec,groundHeight) -> "extending"|"retracting"|"fixed"|"ground-locked"`,
  `updateLandingGear(state,spec,dt)`,
  `getGearParasiteDrag(state,spec) -> effective cd0`.
- Fully locked threshold is position >=0.999. Ground retraction lock also uses
  gear contact and height above supplied ground <=2.5m, covering first-frame
  parking starts whose onGround flag has not settled yet.
- `LandingGear.animate` gains final argument gearPosition=1. Aircraft.syncVisual
  passes actual state. Visual property `gearAssemblies` exposes its moving groups
  for verification. Existing wheel choices, wheel radius and materials remain.
- Touch layout gains `buttons.gear`, model gains `gearShown`; hit testing ignores
  gear when hidden. A down event emits the `gear` action once, like flaps.
- ATC observation gains optional `gearRetractable`, `gearDownLocked` booleans.

## Tasks

- [x] Physics: add pure gear helpers and meaningful tests first; wire simulation
  travel, effective drag, locked-wheel support and belly contact into flight.js.
  Add gear-up touchdown data and preserve on-ground/air-time behavior.
- [x] Visual/model: add retractable metadata and drag constants in buildFlightSpec;
  separate wheel/strut groups for turboprop/jet, animate/reverse/hide by actual
  extension, keep fixed biplane, pass gear state and test geometry/cleanup.
- [x] HUD/docs: show actual status and low-approach warning; draw a guarded touch
  gear button; update controls in index.html and the short player README.
- [x] Root integration: G/touch toggle, per-flight reset, touch-layout hit testing,
  ATC warning/cooldown, belly landing result grading, and independent UI input.
- [x] Verify full tests, lint/build, and browser checks for fixed biplane,
  ground lock, airborne travel/reversal, drag, restart/pause, and a touch toggle.
- [x] Review and fix important integration defects; record final evidence here.

## Execution record

Work stays in the user's current feature checkout. Agents own disjoint files;
the root integrates after shared physics changes are complete. No merge, push,
or publish is requested. Checks cover real force integration and contact events,
not just visibility changes or helper return values.


## Final verification

- All 58 Node tests pass, including force-integrated drag, wheel and belly
  support, slow surviving skids for both aircraft, visual geometry and disposal,
  ATC warning cooldowns, and guarded touch input.
- Biome lint and the Vite production build pass. Existing notices remain for
  the installed Biome schema version and the Three.js chunk size.
- Scripted Chromium checks pass for native G input, ground lock, three-second
  movement, mid-travel reversal, hidden fully retracted assemblies, pause,
  restart, and fixed biplane behavior. Tests stage aircraft positions through
  the debug hook and run the real game simulation.
- Native touch checks pass at 844x390, 568x320, and 390x844 without activating
  the flight stick. Screenshot inspection caught a minimap overlap; the gear
  button now clears the minimap including hit padding, and status text fits
  within its circle. The regression test failed before this correction and
  passes afterward.
- A staged surviving gear-up landing reaches the normal ending/debrief flow
  with a D grade and an explicit gear-up landing result.
- Browser checks reported no runtime exceptions. Independent final review
  found no important correctness defects.
