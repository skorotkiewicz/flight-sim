# Guided ATC implementation plan

> **For agentic workers:** Use superpowers:subagent-driven-development or superpowers:executing-plans. Execute the approved work continuously; do not request another design approval.

**Goal:** Add optional guided, text-based ATC from a parking start through departure and landing.

**Architecture:** Pure airport-layout/routing helpers and a pure ATC state machine feed a DOM radio panel and Three.js taxi guidance. The game owns simulation time, observations, spawning, route displays, and ending the flight.

**Tech Stack:** Existing JavaScript, Three.js, Vite, Bun, Biome; built-in Node test runner, no new runtime dependencies.

**Spec:** `docs/superpowers/specs/2026-11-16-guided-atc-design.md`, approved by the user.

## Global constraints

- ATC is an independent checkbox, off by default, persisted as a validated boolean.
- Text only; no server, voice, new traffic, or forced steering.
- Ground authorization requires readback. Taxi does not authorize runway entry.
- ATC routes prefer wind but never clear candidates with climb/glide over 0.1.
- Preserve existing physics and grading, including ATC-off runway starts.
- Keep documentation free of personal data and environment-specific details.

## Review focus

- Rotated airports, reciprocal runways, and seed 3/destination 2 terrain regression.
- Stale/repeated actions, skipped clearance, and unauthorized airborne recovery.
- Pause/restart/debrief and existing automatic landing completion.
- Radio keyboard/pointer input must not leak into flight controls.
- Touch layout and taxi route must remain usable for all aircraft styles.

## Task 1: Airport geometry and terrain-feasible routes

Files: create `web/src/game/flight/airport-layout.js`; modify `world/mission.js` and `world/props.js`; create `web/test/airport-layout.test.js` and `web/test/atc-routing.test.js`.

Exports: `airportToWorld(airport, along, across) -> {x,y,z}`; `worldToAirport(airport, position) -> {along,across}`; `formatRunwayNumber(dx,dz) -> string`; `getAirportLayout(airport,direction) -> {parking,parkingHeading,holding,entry,lineup,exit,runway,taxiPath,lineupPath,vacatePath}`. Heading direction uses `{dx,dz}`. Runway info has `{dx,dz,number,heading}`. World positions use the airport's existing heading and height.

Add `planAtcFlightRoute(terrain,from,to,wind,turnRadius) -> route|null`, `planAtcArrivalRoute(terrain,position,forward,target,wind,turnRadius) -> route|null`, and `planAtcDepartureRoute(terrain,airport,wind,turnRadius) -> route|null` to `world/mission.js`. Return routes compatible with current `FlightPathGuide`/`RouteTracker`, with `land` matching assignment. Prefer feasible upwind candidates, then explicit reciprocal alternatives. Free-flight arrival paths start at the aircraft and sample terrain; free-flight departures have a terrain-checked outbound guide without assigning an arrival airport. Reuse runway numbering from the helper in existing airport rendering.

- [x] Write scenario tests; observe missing-function failures.
- [x] Implement geometry and route selection, preserving ordinary route behavior.
- [x] Run tests covering wind signs, rotations, terrain feasibility, and the named seed regression.

## Task 2: ATC state and clearances

Files: create `web/src/game/flight/atc.js`, `web/test/atc.test.js`.

`new AtcController({airfields,names,wind,departure,departureRoute,departurePlan,arrivalProvider})` uses `departureRoute` for cross-country or `departurePlan` for the approved free-flight outbound route. `arrivalProvider(airport,observation) -> route|null` is injected by the game.

`update(dt, observation)` observes `{pos,forward,speed,onGround,airTime,groundTime,groundHeight,alive}`. It advances only when called with positive simulation time. `act(actionId) -> boolean` accepts only current snapshot actions. `snapshot()` returns `{revision,phase,controller,airfieldName,runway,latestInstruction,messages,actions,brakeHeld,guide,objective,arrivalRoute,deferLanding,finishRequested}`. Messages have `{id,speaker,text}`; actions have `{id,label}`. Guide is null or `{airport,layout,points,target,kind}`. `departureLayout` is exposed for spawn. `reset()` clears a session to its initial parked state.

Phases: parked, taxi, holding, lineup, takeoff, departure, enroute, approach, landing, rollout, completed. A pending clearance is separate from its acknowledged next phase. Bound transcript length; cooldown warnings and retries; ignore obsolete actions. Report ready only near hold at taxi speed, takeoff only near threshold and aligned, landing only aligned and near arrival. Allow go-around and alternative arrival when infeasible. Recover skips and wrong-field landings.

- [x] Write failing full-flight and authorization/recovery tests.
- [x] Implement pure simulation state, readbacks, typed messages, and valid actions.
- [x] Test pause by not advancing dt, bounce hysteresis, invalid actions, seed/route selection callbacks, and reset.

## Task 3: Radio and settings

Files: create `web/src/game/ui/radio.js`; modify `web/index.html`, `web/src/game.css`, `web/src/game/ui/menus.js`, `web/src/game/app/storage.js`.

`new RadioPanel({onAction,onToggle})`; `render(snapshot,{visible,paused})`; `toggle()`; `hide()`; `dispose()`. The panel builds its own DOM. It renders snapshot actions and messages, preserving focus and scroll on unchanged revisions. Only fresh controller text enters a polite live region. All interactive buttons have explicit type. A persistent collapsed instruction and toggle remain available in flight. Block panel input from reaching flight controls, including focused keyboard input and pointer activity.

Add `atcEnabled:false` to default settings; normalize stored values with `=== true`. Main-menu checkbox persists settings and optional `atcChanged` callback updates route preview. Do not change `main.js` in this task.

- [x] Verify settings compatibility and panel action contracts.
- [x] Implement responsive radio UI and checkbox in the established style.
- [x] Run Biome on owned files and check accessible labels and touch targets.

## Task 4: Game integration and taxi guidance

Files: create `web/src/game/world/taxi-guide.js`; modify `web/src/game/main.js`, `flight/controls.js`, `web/package.json`, and `web/README-game.md`.

`new TaxiGuide()` exposes `group`, `update(guide,groundHeight)`, `clear()`, and `dispose()`. Use guide points/target and shared layout for marks; lift geometry just above ground. Clean up when guidance/session ends.

In the game, validate ATC cross-country routes before loading, use parking pose for ATC sorties, create controller per sortie, and update it with actual player observations in `step`. Hold initial parking brake until taxi readback. Display the radio only during live, unpaused sorties. Sync free-flight arrival guidance without changing free-flight scoring. Defer normal auto-completion only for ATC arrival rollout; honor finish action and preserve wrong-field/crash/bailout completion. T toggles radio; clear held flight keys when focusing it and ignore interactive controls in global keyboard handlers.

- [x] Integrate state and guidance, including all cleanup transitions.
- [x] Add `test` script using the built-in runner and document ATC controls/limits.
- [x] Run all tests, lint, production build, and diff checks.
- [x] Browser smoke test ATC-off startup, ATC parking/readback sequence, pause/restart, arrival/rollout, and touch panel behavior; record any unavailable checks.

## Task 5: Review and final verification

- [x] Review integration against the approved spec and resolve important findings.
- [x] Re-run affected checks after corrections and leave a concise validation record.

## Execution record

Implementation uses the user's existing feature checkout so changes remain visible in the shared workspace. Independent agents own disjoint files. The root agent owns integration and updates this checklist. No publish or merge is included.

Ruling: free-flight departure needs its own feasibility check, even without an assigned destination. Review found seed 1 could otherwise authorize an upwind climb above the approved slope limit. Added a departure-only route and explicit reciprocal advisory; a blocked departure disables flight until the user changes the seed or ATC setting.

Verification record: 35 regression tests pass. Lint reports no errors or warnings; production build passes with the existing chunk-size advisory. Scripted Chromium checks exercise actual game stepping and DOM radio actions with staged aircraft positions, including ATC-off runway spawn, parking/readback/holding/backtrack/takeoff, arrival and rollout completion, persisted checkbox state, free-flight reciprocal assignment, pause/restart, focused keyboard isolation, and an actual touch radio tap with no flight-stick activation. These are scripted scenarios, not a manually flown flight.

All three aircraft styles also settle safely on the parking stand with the
initial brake held in the browser. The final review accepted the free-flight
terrain fix and reported no remaining important findings.
