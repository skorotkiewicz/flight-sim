# Guided ATC for pilots

## Intent and agreed scope

Add optional, pilot-facing ATC while the player flies. The agreed first version
has a radio panel with requests and readbacks, runway selection based on wind,
taxi/takeoff/approach/landing clearances, and instructions that react to flight
phase and position. Radio communication is text first. Spoken calls are a later
feature. The player has selected guided ATC and parking starts when ATC is on.

ATC remains separate from Arcade, Normal, and Expert physics assistance. Add an
"Enable guided ATC" checkbox to the main menu. The proposed default is off, so
existing saved settings and ordinary flights retain their current behavior.
Persist the setting and read malformed stored values as off. A change applies
to the next sortie, not halfway through a flight.

## Approaches

Two approaches were discussed:

- Guided ATC chooses the appropriate controller automatically and presents
  requests and readbacks that make sense for the current flight phase.
- Procedural ATC requires manual radio tuning and controller handoffs.

The user chose guided ATC. Use deterministic rules tied to actual aircraft
state. This fits the existing local browser game and makes clearances testable.
No server, language model, account, or new runtime dependency is needed.

## Pilot experience

1. With ATC enabled, spawn stopped on the existing home-airfield apron, facing
   the existing connector. Use the aircraft's normal ground-rest attitude and
   sampled ground height. The parking brake is applied until taxi clearance is
   read back. A parking marker and taxi guidance identify where to go.
2. The radio panel identifies the player as "Baron One", shows the current
   controller, assigned runway, latest instruction, and a short message history.
   Initial actions include requesting taxi. Pilot requests and controller replies
   appear as separate messages.
3. Ground assigns the wind-preferred, terrain-feasible runway and clears the aircraft to the connector's
   holding point. The player must read back the clearance before it becomes
   acknowledged. The player taxis using normal flight controls.
4. Near the holding point and moving slowly, the player can report ready.
   Tower issues a separate "enter, backtrack, line up and wait" clearance. After
   readback, guidance leads through the connector to the assigned runway end.
   Reaching the holding point alone never authorizes runway entry.
5. Once near the assigned runway end and aligned, offer a takeoff request.
   Tower issues takeoff clearance, followed by readback. Detect departure from
   actual sustained flight, then transition to departure and en-route guidance.
6. Cross-country flights use their selected destination. In free flight, the
   player can request landing at the nearest airfield; the airport is named in
   the action and becomes the arrival target when the request is sent. Returning
   to the departure field is supported. Automatically select Approach/Tower for
   that target as the aircraft closes in.
7. Approach assigns the wind-preferred, terrain-feasible arrival runway and gives distance, runway heading,
   and terrain-aware route guidance. A landing request is available on approach;
   landing clearance is issued only when within the approach area and reasonably
   lined up, never solely because the player clicked a button. Readback acknowledges
   the clearance. No AI traffic creates artificial holds in this first version.
8. A go-around request cancels landing clearance and returns the aircraft to
   approach guidance. Low passes do not count as touchdown. Sustained runway
   touchdown transitions to rollout; small bounces stay in the landing sequence.
9. After landing, Tower instructs the player to vacate toward the apron connector.
   When safely clear and stopped, offer "Finish flight". This invokes the existing
   landing grading and debrief. A safe stop on the runway also offers "Finish
   flight" as a recovery action so the player cannot become stuck. Field landings,
   crashes, and bailouts continue to use the existing ending behavior.

## Airport layout and guidance

Reuse each airport's existing local coordinate system, apron, connector, runway
width, and runway length. Share a small pure layout helper between ATC and visual
guidance; do not duplicate transform formulas in the controller and scene code.

The connector meets the runway near its middle. Ground taxi clearance therefore
ends outside the paved runway. Runway entry and backtracking require their own
acknowledged clearance. Mark a parking stand, taxi path, and holding position.
Provide short ground guidance toward the next waypoint, without teleporting or
steering the aircraft. All three plane styles must fit on the stand and be able
to use the connector. Reuse existing terrain and geometry; no airport redesign
or terrain-worker changes are proposed.

Use the wind vector's travel direction correctly when selecting the opposing
runway heading. Use stable base wind for assignments; the current gust system
changes wind magnitude without reversing direction. Freeze an assignment through
its acknowledged taxi/approach sequence. Runway numbers must match existing
painted numbers, including reciprocal ends and 36 instead of 00.

The existing cross-country planner can choose a downwind runway to avoid steep
terrain. ATC must select a route and its runway assignments together so the radio
and arrows agree. Prefer upwind ends among terrain-feasible candidates. As a
proposed implementation policy, reuse the planner's current 0.1 climb/descent
slope thresholds as the maximum for a candidate that ATC clears. If an upwind
candidate exceeds these thresholds, try the reciprocal runway and explicitly
announce that terrain requires the alternate runway, including the tailwind.
If no candidate meets the thresholds, do not issue an unsafe clearance. Before
departure, explain that ATC cannot offer this route and let the player choose
another destination or turn ATC off. For an airborne free-flight arrival, offer
another airfield instead. Do not leave a pending readback for an unavailable
route. Ordinary route planning stays unchanged.

The design review found a concrete regression case: seed 3, destination index 2
can require a descent slope around 0.60 with the current upwind route candidates.
Include this case in validation; never present that approach as safely cleared.

For free-flight arrivals, construct approach guidance with the same terrain
height checks rather than issuing a fixed altitude independent of terrain.
Keep displayed units consistent with the game's meters and km/h.

## Radio behavior and recovery

Keep one pending clearance at a time. Requests, pending readback, and acknowledged
authorization are distinct states. Repeated clicks must not produce duplicate
clearances. "Say again" repeats the latest controller message without changing
authorization. Actions carry stable identifiers, and outdated actions are rejected
if the phase has changed before the click is handled.

Clearances react to actual position, heading, ground speed, and sustained airborne
or ground contact. Use tolerances and brief hysteresis for waypoint arrival,
alignment, touchdown, and runway vacation. Warn once, with a cooldown, when the
player enters a runway or takes off without clearance. ATC is guidance: it does
not force steering, stop an airborne aircraft, or impose new score penalties.
After an unauthorized departure, recover to the airborne sequence rather than
remaining in a taxi phase. Landing at another field produces a relevant warning
and permits the ordinary landing/debrief flow.

Pause freezes ATC timers and phase updates. Loading, menus, hangar, and debrief
hide the in-flight panel and do not progress ATC. Restart, world replacement,
crash, bailout, and return to menu clear pending instructions and taxi visuals.
Do not save a live ATC session to local storage.

The panel is collapsible, works with mouse, keyboard, and touch, and does not
cover the primary touch stick or throttle lever. A small radio button remains
available during flight; T can toggle the panel on desktop. Normal button
focus/Enter behavior handles requests and readbacks. Do not reuse number keys,
which already control throttle. Interacting with the panel must not steer the
aircraft or activate unrelated flight shortcuts. Announce new controller text
through a polite live region without re-announcing the entire transcript each
frame. Retain the latest instruction when the panel is collapsed.

## Implementation boundaries

- `flight/atc.js`: deterministic controller, phase changes, clearances, messages,
  valid actions, and recovery. No DOM, Three.js, wall-clock timers, or audio.
- `flight/airport-layout.js`: pure runway/apron/holding-point coordinates,
  transforms, runway headings, and selection helpers.
- `ui/radio.js`: accessible DOM panel, transcript, actions, visibility, and
  callbacks into the controller.
- `world/taxi-guide.js`: parking/holding marks and current taxi waypoint guidance,
  with explicit cleanup.
- Existing `main.js`: supply aircraft/world observations, apply parking spawn,
  update ATC in simulation time, manage lifecycle, and route landing completion.
- Existing settings/menu/HTML/CSS: the checkbox and responsive radio appearance.
- Existing mission planner: optional runway-direction constraints.

The terrain-before-wind fallback and slope thresholds above are proposed
implementation decisions, not additional requirements supplied by the user.

The builder chooses exact visual styling to match the existing game, waypoint
and approach tolerances after testing, message wording, transcript bounds, and
internal API names. These are implementation decisions, not extra user choices.

## Validation

Use the built-in test runner for meaningful ATC scenarios: both wind directions,
rotated airfields, parked starts and ground clearance, readback gating, runway
entry and takeoff sequencing, invalid/repeated/stale actions, departure recovery,
route and free-flight arrivals, go-arounds, touchdown/bounces, wrong-field
landings, pause/reset, and ATC-off behavior. Check selected runway ends agree
with route generation. Include representative generated seeds and all three
aircraft styles when checking parking and taxi geometry.

Run the project's lint and production build. In a browser, exercise one guided
flight from parking to debrief, a restart/pause cycle, ATC-off startup, and touch
panel interaction. Report any browser checks that could not be performed.

## Later work

Spoken controller calls, microphone recognition, manual frequency tuning, AI
traffic/separation, IFR flight-plan filing, and multiplayer are outside this
version. Structured messages and controller changes should leave a clear place
to attach spoken output later without changing clearance logic.
