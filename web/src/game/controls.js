import { FLAP_POSITIONS, Zu, nd, rd } from "./flight.js";
import { isTouchScreen } from "./input.js";

var id = 0.6;
var DesktopInput = class {
  target;
  keys = new Set();
  pressed = new Set();
  mouse = {
    x: 0,
    y: 0,
    down: false
  };
  mouseStick = false;
  throttle = 0;
  flapNotch = 0;
  invertPitch = false;
  axes = {
    pitch: 0,
    roll: 0,
    yaw: 0
  };
  padPressed = new Set();
  padPrev = [];
  manual = false;
  touch;
  lastInput = isTouchScreen() ? `touch` : `desktop`;
  onInputKind = null;
  constructor(e) {
    this.target = e;
    this.touch = new nd(e);
    window.addEventListener(`pointerdown`, e => this.setKind(e.pointerType === `touch` ? `touch` : `desktop`), true);
    window.addEventListener(`pointermove`, e => {
      if (e.pointerType === `mouse` && (e.movementX || e.movementY)) {
        this.setKind(`desktop`);
      }
    });
    window.addEventListener(`keydown`, e => {
      this.setKind(`desktop`);
      if (!e.repeat) {
        this.keys.add(e.code);
        this.pressed.add(e.code);
        if ([`Space`, `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`].includes(e.code)) {
          if (!(e.target instanceof HTMLInputElement)) {
            e.preventDefault();
          }
        }
      }
    });
    window.addEventListener(`keyup`, e => this.keys.delete(e.code));
    window.addEventListener(`blur`, () => {
      this.keys.clear();
      this.mouse.down = false;
    });
    window.addEventListener(`mousemove`, e => {
      this.mouse.x = e.clientX / window.innerWidth * 2 - 1;
      this.mouse.y = -(e.clientY / window.innerHeight * 2 - 1);
    });
    this.target.addEventListener(`mousedown`, e => {
      if (e.button === 0) {
        this.mouse.down = true;
      }
    });
    window.addEventListener(`mouseup`, e => {
      if (e.button === 0) {
        this.mouse.down = false;
      }
    });
  }
  setKind(e) {
    if (e !== this.lastInput) {
      this.lastInput = e;
      this.onInputKind?.(e);
    }
  }
  wasPressed(e) {
    return this.pressed.has(e);
  }
  padWasPressed(e) {
    return this.padPressed.has(e);
  }
  endFrame() {
    this.pressed.clear();
    this.padPressed.clear();
  }
  gamepad() {
    let e = navigator.getGamepads ? navigator.getGamepads() : [];
    for (let t of e) {
      if (t && t.connected) {
        return t;
      }
    }
    return null;
  }
  pollPad() {
    let e = this.gamepad();
    if (e) {
      e.buttons.forEach((e, t) => {
        if (e.pressed && !this.padPrev[t]) {
          this.padPressed.add(t);
          this.setKind(`desktop`);
        }
        this.padPrev[t] = e.pressed;
      });
    }
  }
  resetThrottle(e = 0) {
    this.throttle = e;
  }
  stepFlaps(e) {
    let t = Math.max(0, Math.min(FLAP_POSITIONS.length - 1, this.flapNotch + e));
    return t !== this.flapNotch && (this.flapNotch = t, true);
  }
  sample(e, t) {
    let n = this.keys;
    let r = (n.has(`KeyS`) || n.has(`ArrowDown`) ? 1 : 0) - (n.has(`KeyW`) || n.has(`ArrowUp`) ? 1 : 0);
    let i = (n.has(`KeyD`) || n.has(`ArrowRight`) ? 1 : 0) - (n.has(`KeyA`) || n.has(`ArrowLeft`) ? 1 : 0);
    let a = +!!n.has(`KeyE`) - !!n.has(`KeyQ`);
    let o = (t, n) => {
      let r = rd * e;
      if (n === 0) {
        if (Math.abs(t) <= r * 1.5) {
          return 0;
        } else {
          return t - Math.sign(t) * r * 1.5;
        }
      } else {
        return t + Math.max(-r, Math.min(r, n - t));
      }
    };
    this.axes.pitch = o(this.axes.pitch, r);
    this.axes.roll = o(this.axes.roll, i);
    this.axes.yaw = o(this.axes.yaw, a);
    let s = this.axes.pitch;
    let c = this.axes.roll;
    let l = this.axes.yaw;
    let u = n.has(`KeyB`);
    if (n.has(`ShiftLeft`) || n.has(`ShiftRight`)) {
      this.throttle += id * e;
    }
    if (n.has(`ControlLeft`) || n.has(`ControlRight`)) {
      this.throttle -= id * e;
    }
    for (let e = 1; e <= 9; e++) {
      if (n.has(`Digit${e}`)) {
        this.throttle = e / 10;
      }
    }
    if (n.has(`Digit0`)) {
      this.throttle = 1;
    }
    let d = this.gamepad();
    if (d) {
      let t = e => Math.abs(e) < 0.12 ? 0 : (e - Math.sign(e) * 0.12) / 0.88;
      let n = t(d.axes[0] ?? 0);
      let r = t(d.axes[1] ?? 0);
      let i = t(d.axes[2] ?? 0);
      let a = t(d.axes[3] ?? 0);
      if (n || r || i || a) {
        this.setKind(`desktop`);
      }
      if (n || r) {
        c = n;
        s = r;
      }
      if (i) {
        l = i;
      }
      if (a) {
        this.throttle -= a * id * 1.5 * e;
      }
      if (d.buttons[1]?.pressed) {
        u = true;
      }
    }
    let f = this.touch;
    let p = f.model;
    if (f.enabled) {
      let e = p.stick();
      let t = e ? null : f.tilt();
      if (e) {
        this.axes.roll = c = Zu(e.x);
        this.axes.pitch = s = Zu(e.y);
      } else if (t) {
        c = t.x;
        s = t.y;
      }
      if (p.leverHeld) {
        this.throttle = p.throttle;
      }
      if (p.brake) {
        u = true;
      }
    }
    if (!p.leverHeld) {
      p.throttle = Math.max(0, Math.min(1, this.throttle));
    }
    this.manual = s !== 0 || c !== 0 || l !== 0;
    if (this.mouseStick && !this.manual) {
      let e = e => Math.abs(e) < 0.05 ? 0 : Math.max(-1, Math.min(1, (e - Math.sign(e) * 0.05) * 2.2));
      c = e(this.mouse.x);
      s = e(this.mouse.y);
    }
    if (this.invertPitch) {
      s = -s;
    }
    this.throttle = Math.max(0, Math.min(1, this.throttle));
    t.pitch = Math.max(-1, Math.min(1, s));
    t.roll = Math.max(-1, Math.min(1, c));
    t.yaw = Math.max(-1, Math.min(1, l));
    t.throttle = this.throttle;
    t.brake = u;
    t.flaps = FLAP_POSITIONS[this.flapNotch];
  }
};
var od = `baron.iosTip.dismissed`;
var PwaManager = class {
  onChange = null;
  installEvent = null;
  waiting = null;
  tipDismissed = false;
  constructor() {
    try {
      this.tipDismissed = localStorage.getItem(od) === `1`;
    } catch {}
    window.addEventListener(`beforeinstallprompt`, e => {
      e.preventDefault();
      this.installEvent = e;
      this.changed();
    });
    window.addEventListener(`appinstalled`, () => {
      this.installEvent = null;
      this.changed();
    });
  }
  get installed() {
    let e = e => typeof matchMedia == `function` && matchMedia(e).matches;
    return e(`(display-mode: standalone)`) || e(`(display-mode: fullscreen)`) || e(`(display-mode: minimal-ui)`) || navigator.standalone === true;
  }
  get canInstall() {
    return !!this.installEvent && !this.installed;
  }
  get iosTip() {
    if (this.installed || this.tipDismissed) {
      return false;
    }
    let e = navigator.userAgent;
    let t = /iPhone|iPad|iPod/.test(e) || /Macintosh/.test(e) && navigator.maxTouchPoints > 1;
    let n = /Safari/.test(e) && !/CriOS|FxiOS|EdgiOS/.test(e);
    return t && n;
  }
  get updateReady() {
    return !!this.waiting;
  }
  register() {
    if (`serviceWorker` in navigator) {
      window.addEventListener(`load`, () => {
        navigator.serviceWorker.register(`/sw.js`).then(e => {
          let t = e => {
            if (!e) {
              return;
            }
            let t = () => {
              if (e.state === `installed` && navigator.serviceWorker.controller) {
                this.waiting = e;
                this.changed();
              }
            };
            e.addEventListener(`statechange`, t);
            t();
          };
          t(e.waiting);
          t(e.installing);
          e.addEventListener(`updatefound`, () => t(e.installing));
          document.addEventListener(`visibilitychange`, () => {
            if (!document.hidden) {
              e.update().catch(() => {});
            }
          });
        }).catch(() => {});
      });
    }
  }
  async install() {
    let e = this.installEvent;
    if (e) {
      this.installEvent = null;
      await e.prompt().catch(() => {});
      this.changed();
    }
  }
  dismissTip() {
    this.tipDismissed = true;
    try {
      localStorage.setItem(od, `1`);
    } catch {}
    this.changed();
  }
  restart() {
    let e = this.waiting;
    if (!e) {
      return;
    }
    let t = false;
    navigator.serviceWorker.addEventListener(`controllerchange`, () => {
      if (!t) {
        t = true;
        location.reload();
      }
    });
    e.postMessage(`skipWaiting`);
  }
  changed() {
    this.onChange?.();
  }
};

export { DesktopInput, PwaManager, id, od };
