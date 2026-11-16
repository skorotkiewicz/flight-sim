# Retractable landing gear

The user approved retractable gear on the turboprop and jet, fixed gear on the
biplane, a G shortcut and touch button, animation and DOWN/TRANSIT/UP indication,
actual contact/drag changes, a ground-retraction lock, and an ATC approach reminder.

Gear is down on every new flight and in the hangar. A three-second movement is
driven by simulation time, so pause freezes both physics and visible travel.
Toggling during movement reverses direction without snapping. Ground retraction
is blocked when weight is on wheels or the aircraft is at its parking height.
Extension remains possible. No speed limit or jam mechanic is added.

The wheels and their support struts become separate animated groups on the two
retractable aircraft. Fully retracted assemblies disappear inside the aircraft;
the biplane's existing gear remains unchanged. Animate from actual extension,
not the selected lever state. Reuse shared materials and dispose geometry using
the existing ownership rules.

Preserve existing gear-down drag. The retractable portion of parasite drag is
0.006 for the turboprop and 0.005 for the jet, removed proportionally as the gear
retracts. The biplane receives no change. This affects the existing force
integration, never velocity directly, and does not change engine thrust.

Wheel support and brakes require gear down and locked. Without locked gear,
belly contact uses skid friction and existing scrape/damage effects, records a
gear-up touchdown, and allows a slow surviving landing to reach normal debrief.
Hard or fast belly contact can crash. Gear-up landing cannot earn a clean landing
grade. Body contact must count as ground contact without counting as wheels.

Show actual gear state in desktop and touch HUDs, with a gear warning on a low
approach. ATC repeats a gear reminder on a simulation-time cooldown when airborne,
low, and in approach/landing with the gear not locked; it does not operate the
gear or block emergency landing. Fixed gear and observations from older callers
must never trigger a warning.

All input methods call one shared toggle helper. Hidden touch controls must not
steal touches from the biplane's flight controls. Restart resets gear down;
radio focus, pause, menus, and hangar must not toggle flight gear.

Validate animation/reversal/time stepping, fixed gear, ground lock, force-based
drag differences, wheel versus belly contact, aircraft visual geometry/cleanup,
touch hit testing, ATC cooldowns, and existing flight/ATC scenarios. Run lint,
production build, all tests, and a scripted desktop/touch browser smoke check.
