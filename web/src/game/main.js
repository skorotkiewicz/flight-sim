import { SoundEngine } from "./audio.js";
import { Assist } from "./clock.js";
import { CameraRig, Wm } from "./clouds.js";
import { Vf, Yf } from "./contrails.js";
import { DesktopInput, PwaManager } from "./controls.js";
import { Bu, FLAP_LABELS, Hu, Uu, Wu, hu, mu } from "./flight.js";
import { Hangar } from "./hangarui.js";
import { Hud } from "./hud.js";
import { TouchInput, cu, isHandheld, lu } from "./input.js";
import { loadModule } from "./loader.js";
import { SettingsPanel } from "./menus.js";
import { Rd, Vd } from "./meshkit.js";
import { Ch, bh, dh, fh, lh, mh, ph, wh } from "./mission.js";
import { Zd } from "./particles.js";
import { Cf, PLANE_MODELS, Rf, df, mf, uf, xf } from "./planemodels.js";
import { tp } from "./postfx.js";
import { Water, ip, rp } from "./sky.js";
import { Cd, randomSeed, vd, xd, yd } from "./storage.js";
import { DirectionalLight, Fog, HemisphereLight, MathUtils, PerspectiveCamera, SRGBColorSpace, Scene, Vector3, WebGLRenderer } from "./three.js";
import { rm } from "./worldmap.js";

var jh = {
  mobile: {
    radius: 3,
    post: false,
    shadows: false,
    shadowSize: 1024,
    maxPR: 1.25
  },
  low: {
    radius: 4,
    post: false,
    shadows: false,
    shadowSize: 1024,
    maxPR: 1
  },
  medium: {
    radius: 6,
    post: true,
    shadows: true,
    shadowSize: 1024,
    maxPR: 1.5
  },
  high: {
    radius: 8,
    post: true,
    shadows: true,
    shadowSize: 2048,
    maxPR: 2
  }
};
var Mh = new Vector3();
var Nh = new Vector3();
var Ph = new Vector3();
var Game = class {
  renderer;
  scene = new Scene();
  camera = new PerspectiveCamera(70, 1, 0.5, 6000);
  settings;
  input;
  loop;
  rig;
  post = new tp();
  sky = new ip();
  water = new Water();
  sun = new DirectionalLight(16777215, 2.8);
  hemi = new HemisphereLight(16777215, 5596740, 1.2);
  fx = new Zd();
  audio = new SoundEngine();
  hud;
  ui;
  world = null;
  env = null;
  planes = [];
  player = null;
  planeToon = Vd({
    vertexColors: true,
    rim: 0.3
  });
  planeOutline = Rd(2825498, 1.1, 400);
  spec = {
    ...hu
  };
  loadout = xf();
  hangar;
  preview = null;
  previewYaw = 2.2;
  previewDrag = null;
  previewCam = new Vector3();
  previewCamReady = false;
  viewShift = 0;
  state = `title`;
  paused = false;
  simTime = 0;
  tick = 0;
  time = 0;
  loadT = 0;
  whiteout = 0;
  tierName = `medium`;
  tier = jh.medium;
  renderScale = 1;
  frameAvg = 16;
  resTimer = 0;
  mission;
  route = null;
  sortieRoute = null;
  guide = null;
  tracker = null;
  names = [];
  rejoin = new Vector3();
  contextLost = false;
  stats = null;
  wakeLock = new TouchInput();
  pwa = new PwaManager();
  constructor(e, t) {
    this.settings = vd();
    this.renderer = new WebGLRenderer({
      canvas: e,
      antialias: true,
      powerPreference: `high-performance`
    });
    this.renderer.outputColorSpace = SRGBColorSpace;
    this.renderer.shadowMap.type = 1;
    this.renderer.setClearColor(10474479);
    this.input = new DesktopInput(e);
    this.input.invertPitch = this.settings.invertPitch;
    let n = e => document.body.classList.toggle(`touch`, e === `touch`);
    n(this.input.lastInput);
    this.input.onInputKind = n;
    this.rig = new CameraRig(this.camera);
    this.hud = new Hud(t);
    this.ui = new SettingsPanel(this.settings, {
      fly: () => this.fly(),
      resume: () => this.setPaused(false),
      restart: () => this.startSortie(),
      quit: () => this.toTitle(),
      openHangar: () => this.openHangar(),
      closeHangar: () => this.closeHangar(),
      again: () => this.startSortie(),
      newWorld: () => {
        this.settings.seed = randomSeed();
        yd(this.settings);
        this.ui.setSeed(this.settings.seed);
        this.newWorld(this.settings.seed);
        this.startSortie();
      },
      seedChanged: e => this.newWorld(e),
      qualityChanged: () => this.applyTier(),
      volumeChanged: e => this.audio.setVolume(e),
      modeChanged: () => this.refreshRoute(),
      destStep: e => this.stepDest(e),
      click: () => this.uiClick(),
      tiltChanged: e => this.input.touch.setTilt(e),
      recentre: () => this.input.touch.recentre()
    });
    let r = 0;
    let i = ``;
    new ResizeObserver(() => {
      let e = this.ui.routeCanvas;
      let t = `${e.clientWidth}x${e.clientHeight}`;
      if (t !== i) {
        i = t;
        clearTimeout(r);
        r = window.setTimeout(() => this.drawMap(), 80);
      }
    }).observe(this.ui.routeCanvas);
    this.hangar = new Hangar(this.loadout, () => this.buildPreview(), () => this.uiClick(), () => this.state === `hangar`);
    e.addEventListener(`pointerdown`, e => {
      if (this.state === `hangar`) {
        this.previewDrag = e.clientX;
      }
    });
    window.addEventListener(`pointermove`, e => {
      if (this.previewDrag !== null) {
        this.previewYaw += (e.clientX - this.previewDrag) * 0.01;
        this.previewDrag = e.clientX;
      }
    });
    window.addEventListener(`pointerup`, () => this.previewDrag = null);
    this.audio.setVolume(this.settings.volume);
    this.scene.add(this.sky.mesh, this.water.mesh, this.hemi, this.sun, this.sun.target, this.fx.group);
    this.sun.castShadow = true;
    let a = this.sun.shadow.camera;
    a.left = -130;
    a.right = 130;
    a.top = 130;
    a.bottom = -130;
    a.near = 1;
    a.far = 1500;
    this.sun.shadow.bias = -0.0008;
    this.sun.shadow.normalBias = 0.6;
    this.scene.fog = new Fog(13625845, 800, 3000);
    e.addEventListener(`webglcontextlost`, e => {
      e.preventDefault();
      this.contextLost = true;
      this.setPaused(true);
      this.ui.show(`ctxlost`);
    });
    e.addEventListener(`webglcontextrestored`, () => {
      this.contextLost = false;
      this.ui.show(this.state === `title` ? `title` : this.state === `hangar` ? `hangar-screen` : `pause`);
    });
    window.addEventListener(`resize`, () => this.resize());
    window.visualViewport?.addEventListener(`resize`, () => this.resize());
    let o = () => {
      if (this.state === `sortie` || this.state === `ending`) {
        this.setPaused(true);
      }
      this.audio.suspend();
    };
    document.addEventListener(`visibilitychange`, () => {
      if (document.hidden) {
        o();
      } else if (!this.paused) {
        this.audio.resume();
      }
    });
    window.addEventListener(`pagehide`, o);
    let s = () => {
      this.audio.init();
      window.removeEventListener(`pointerup`, s, true);
      window.removeEventListener(`touchend`, s, true);
      window.removeEventListener(`keydown`, s, true);
    };
    window.addEventListener(`pointerup`, s, true);
    window.addEventListener(`touchend`, s, true);
    window.addEventListener(`keydown`, s, true);
    let c = e => document.getElementById(e);
    let l = () => {
      let e = this.pwa;
      c(`update-btn`).classList.toggle(`hidden`, !e.updateReady);
      c(`install-btn`).classList.toggle(`hidden`, !e.canInstall);
      c(`ios-tip`).classList.toggle(`hidden`, !e.iosTip || e.canInstall);
      c(`app-row`).classList.toggle(`hidden`, !e.updateReady && !e.canInstall && !e.iosTip);
    };
    this.pwa.onChange = l;
    c(`install-btn`).addEventListener(`click`, () => {
      this.uiClick();
      this.pwa.install();
    });
    c(`update-btn`).addEventListener(`click`, () => {
      this.uiClick();
      if (this.state === `title`) {
        this.pwa.restart();
      }
    });
    c(`ios-tip-x`).addEventListener(`click`, () => this.pwa.dismissTip());
    l();
    this.pwa.register();
    this.applyTier();
    this.newWorld(this.settings.seed);
    this.resize();
    this.ui.setAircraft(Cf(this.loadout));
    this.ui.show(`title`);
    this.loop = new Assist(e => this.step(e), (e, t) => this.frame(e, t));
    if (location.search.includes(`debug`)) {
      this.setupDebug();
    }
  }
  start() {
    this.loop.start();
  }
  pickTier() {
    if (this.settings.quality === `auto`) {
      if (isHandheld()) {
        return `mobile`;
      } else if ((navigator.hardwareConcurrency || 4) <= 4) {
        return `low`;
      } else {
        return `medium`;
      }
    } else {
      return this.settings.quality;
    }
  }
  applyTier() {
    let e = this.pickTier();
    let t = this.renderer.shadowMap.enabled;
    this.tierName = e;
    this.tier = jh[e];
    this.renderScale = 1;
    this.renderer.shadowMap.enabled = this.tier.shadows;
    this.sun.castShadow = this.tier.shadows;
    if (this.sun.shadow.mapSize.x !== this.tier.shadowSize) {
      this.sun.shadow.mapSize.set(this.tier.shadowSize, this.tier.shadowSize);
      this.sun.shadow.map?.dispose();
      this.sun.shadow.map = null;
    }
    if (t !== this.tier.shadows) {
      this.scene.traverse(e => {
        let t = e.material;
        if (Array.isArray(t)) {
          t.forEach(e => e.needsUpdate = true);
        } else if (t) {
          t.needsUpdate = true;
        }
      });
    }
    if (this.world) {
      this.world.setRadius(this.tier.radius);
    }
    this.updateDistances();
    this.resize();
  }
  updateDistances() {
    let e = this.tier.radius * 512;
    let t = this.scene.fog;
    t.near = e * 0.25;
    t.far = e * 0.95;
    this.camera.far = e + 2500;
    this.camera.updateProjectionMatrix();
    this.post.setFade(e * 0.3, e * 0.85);
  }
  resize() {
    let e = window.innerWidth;
    let t = window.innerHeight;
    let n = Math.min(window.devicePixelRatio || 1, this.tier.maxPR) * this.renderScale;
    this.renderer.setPixelRatio(n);
    this.renderer.setSize(e, t, false);
    this.camera.aspect = e / t;
    this.camera.updateProjectionMatrix();
    this.post.setSize(e * n, t * n);
    this.hud.resize();
    this.input.touch.model.resize(e, t, cu());
  }
  newWorld(e) {
    if (this.world) {
      this.scene.remove(this.world.group);
      this.world.dispose();
    }
    this.clearPlanes();
    let t = new Wm(e, this.tier.radius);
    this.world = t;
    this.env = {
      groundHeight: (e, n) => t.groundHeight(e, n),
      surfaceAt: (e, n) => t.surfaceAt(e, n),
      wind: t.wind
    };
    this.scene.add(t.group);
    t.setRadius(this.tier.radius);
    let n = t.time;
    this.sky.setTime(n);
    this.sun.color.setHex(n.sunColor);
    this.sun.intensity = n.sunIntensity;
    this.hemi.color.setHex(n.hemiSky);
    this.hemi.groundColor.setHex(n.hemiGround);
    this.hemi.intensity = n.hemiIntensity;
    this.scene.fog.color.setHex(n.horizon);
    this.renderer.setClearColor(n.horizon);
    this.post.setInk(n.ink);
    this.planeOutline.uniforms.outlineColor.value.setHex(n.ink);
    this.hud.invalidateMinimap();
    this.previewCamReady = false;
    if (this.state === `hangar`) {
      this.buildPreview();
    }
    this.clearGuide();
    this.refreshRoute();
  }
  refreshRoute() {
    let e = this.world;
    if (!e) {
      return;
    }
    let t = this.settings;
    let n = e.gen.airfields;
    this.names = fh(n);
    if (t.dest < 1 || t.dest >= n.length) {
      t.dest = 1;
    }
    this.ui.setRoutePanel(t.mode === `route`);
    this.ui.refreshBest();
    if (t.mode !== `route`) {
      this.route = null;
      return;
    }
    let r = n[t.dest];
    let i = bh(e.gen, e.home, r, e.baseWind, ph[this.loadout.style]);
    this.route = i;
    this.drawMap();
    let a = (i.sAim / 1000).toFixed(1);
    let o = Math.max(1, Math.round(i.sAim / mh[this.loadout.style] / 60));
    let s = [`N`, `NE`, `E`, `SE`, `S`, `SW`, `W`, `NW`][Math.round(dh(e.home.x, e.home.z, r.x, r.z) / 45) % 8];
    let c = i.land.dx * e.baseWind.x + i.land.dz * e.baseWind.z > 0 ? ` · downwind landing` : ``;
    this.ui.setRouteInfo(this.names[t.dest], `${a} km ${s} · about ${o} min · up to ${Math.round(i.maxAlt / 10) * 10} m${c}`);
  }
  drawMap() {
    let e = this.ui.routeCanvas;
    if (!this.route || !this.world || !e.clientWidth || !e.clientHeight) {
      return;
    }
    let t = Math.min(window.devicePixelRatio || 1, 2);
    e.width = Math.round(e.clientWidth * t);
    e.height = Math.round(e.clientHeight * t);
    rm(e, this.world.gen, this.route, this.names);
  }
  stepDest(e) {
    let t = this.world;
    if (!t || this.settings.mode !== `route`) {
      return;
    }
    let n = t.gen.airfields.length - 1;
    this.settings.dest = (this.settings.dest - 1 + e + n) % n + 1;
    yd(this.settings);
    this.refreshRoute();
  }
  clearGuide() {
    if (this.guide) {
      this.scene.remove(this.guide.mesh);
      this.guide.dispose();
    }
    this.guide = null;
    this.tracker = null;
    this.sortieRoute = null;
  }
  openHangar() {
    if (this.state === `title`) {
      this.uiClick();
      this.state = `hangar`;
      this.previewCamReady = false;
      this.ui.show(`hangar-screen`);
      this.buildPreview();
    }
  }
  closeHangar() {
    if (this.state === `hangar`) {
      this.uiClick();
      this.clearPreview();
      this.clearViewShift();
      this.state = `title`;
      this.camera.fov = 70;
      this.camera.updateProjectionMatrix();
      this.ui.setAircraft(Cf(this.loadout));
      this.refreshRoute();
      this.ui.show(`title`);
    }
  }
  uiClick() {
    this.audio.init();
    this.audio.click();
  }
  buildPreview() {
    this.clearPreview();
    if (this.world && this.state === `hangar`) {
      this.preview = new Rf(this.loadout, this.planeToon, this.planeOutline);
      this.scene.add(this.preview.visual.root);
      this.audio.setEngine(df(this.loadout.style));
    }
  }
  clearPreview() {
    this.preview &&= (this.scene.remove(this.preview.visual.root), this.preview.visual.dispose(), null);
  }
  updatePreview(e) {
    let t = this.world;
    let n = this.preview;
    let r = t.fields[0];
    r.group.updateMatrixWorld();
    let i = r.group.localToWorld(Mh.copy(r.previewSpot));
    let a = this.loadout.style === `jet` ? 1.3 : this.loadout.style === `turboprop` ? 1.12 : 1;
    if (n) {
      if (this.previewDrag === null) {
        this.previewYaw += e * 0.35;
      }
      let t = Uu(Math.cos(this.previewYaw), Math.sin(this.previewYaw), n.gear);
      n.s.quat.copy(t);
      n.s.pos.set(i.x, i.y + Wu(t, n.gear), i.z);
      n.teleport();
      n.input.pitch = n.input.roll = n.input.yaw = 0;
      n.s.rpm = 0.18;
      n.syncVisual(1, e);
    }
    let o = t.home;
    let s = -o.dirZ;
    let c = o.dirX;
    let l = Nh.set(i.x, i.y + a * 1.4, i.z);
    let u = Ph.set(i.x + o.dirX * 8 * a - s * 11 * a, i.y + a * 3.4, i.z + o.dirZ * 8 * a - c * 11 * a);
    this.previewCamReady ||= (this.previewCam.copy(u), true);
    this.previewCam.lerp(u, 1 - Math.exp(-e * 3));
    this.camera.position.copy(this.previewCam);
    this.camera.up.set(0, 1, 0);
    this.camera.lookAt(l);
    if (this.camera.fov !== 50) {
      this.camera.fov = 50;
      this.camera.updateProjectionMatrix();
    }
    let d = window.innerWidth;
    let f = window.innerHeight;
    let p = document.getElementById(`hangar`).getBoundingClientRect();
    let m = p.width > 0 && p.left > d * 0.4 ? d / 2 - p.left / 2 : 0;
    this.viewShift += (m - this.viewShift) * (1 - Math.exp(-e * 6));
    this.camera.setViewOffset(d, f, this.viewShift, 0, d, f);
  }
  clearViewShift() {
    this.viewShift = 0;
    this.camera.clearViewOffset();
  }
  clearPlanes() {
    for (let e of this.planes) {
      this.scene.remove(e.visual.root);
      e.visual.dispose();
    }
    this.planes = [];
    this.player = null;
    this.fx.clear();
  }
  fly() {
    this.uiClick();
    if (this.input.lastInput === `touch`) {
      lu();
      if (this.settings.tilt && !this.input.touch.tiltEnabled) {
        this.input.touch.setTilt(true).then(e => {
          if (!e) {
            this.ui.hint(`Tilt steering is not available here: using the on-screen stick.`, 4000);
          }
        });
      }
    }
    this.startSortie();
  }
  say(e, t) {
    if (this.input.lastInput === `touch`) {
      return t;
    } else {
      return e;
    }
  }
  toTitle() {
    this.setPaused(false);
    this.clearPlanes();
    this.clearGuide();
    this.state = `title`;
    this.wakeLock.set(false);
    this.hud.visible = false;
    this.hud.clear();
    this.ui.clearHint();
    this.ui.setWhiteout(0);
    this.ui.refreshBest();
    this.ui.setAircraft(Cf(this.loadout));
    this.ui.show(`title`);
    this.camera.fov = 70;
    this.camera.updateProjectionMatrix();
  }
  setPaused(e) {
    if (!e || this.state === `sortie` || this.state === `ending`) {
      this.paused = e;
      if (e) {
        this.audio.suspend();
        if (!this.contextLost) {
          this.ui.show(`pause`);
        }
      } else {
        this.audio.resume();
        this.input.invertPitch = this.settings.invertPitch;
        this.rig.shakeEnabled = this.settings.cameraShake;
        if (this.state === `sortie` || this.state === `ending`) {
          this.ui.show(`none`);
        }
      }
    }
  }
  startSortie() {
    let e = this.world;
    this.setPaused(false);
    this.clearPlanes();
    this.clearPreview();
    this.input.invertPitch = this.settings.invertPitch;
    this.rig.shakeEnabled = this.settings.cameraShake;
    Object.assign(this.spec, uf(this.loadout));
    let t = new Rf({
      ...this.loadout
    }, this.planeToon, this.planeOutline, this.spec);
    this.audio.setEngine(df(this.loadout.style));
    this.rig.chaseScale = this.loadout.style === `jet` ? 1.25 : this.loadout.style === `turboprop` ? 1.1 : 1;
    let n = PLANE_MODELS[this.loadout.style].eye;
    this.rig.cockpit.set(n[0], n[1], n[2]);
    this.camera.fov = 70;
    this.camera.updateProjectionMatrix();
    let r = e.home;
    this.clearGuide();
    if (this.settings.mode === `route`) {
      if (!this.route) {
        this.refreshRoute();
      }
      let e = this.route;
      this.sortieRoute = e;
      this.guide = new Yf(e);
      this.scene.add(this.guide.mesh);
      this.tracker = new wh(e);
    }
    let {
      dx: i,
      dz: a
    } = this.sortieRoute ? this.sortieRoute.depart : lh(r, e.wind);
    let o = r.paved / 2 - 20;
    let s = r.x - i * o;
    let c = r.z - a * o;
    t.s.quat.copy(Uu(i, a, t.gear));
    t.s.pos.set(s, e.groundHeight(s, c) + Wu(t.s.quat, t.gear), c);
    t.s.rpm = 0.15;
    t.teleport();
    this.input.resetThrottle(0);
    this.input.flapNotch = 0;
    this.planes.push(t);
    this.player = t;
    this.scene.add(t.visual.root);
    this.simTime = 0;
    this.tick = 0;
    this.mission = {
      tookOff: false,
      takeoffT: 0,
      touch: null,
      bounces: 0,
      stoppedT: 0,
      result: null,
      resultText: ``,
      grade: `—`,
      endT: 0,
      wreckAt: null,
      hintStage: 0,
      airT: 0,
      pathT: 0,
      atDest: false,
      offPathHintT: 0,
      flapHint: false
    };
    this.rig.reset();
    this.rig.mode = `chase`;
    this.state = `loading`;
    this.loadT = 0;
    this.hud.visible = false;
    this.ui.setLoading(0);
    this.ui.show(`loading`);
    this.ui.clearHint();
  }
  beginSortie() {
    this.state = `sortie`;
    this.hud.visible = true;
    this.hud.invalidateMinimap();
    this.ui.show(`none`);
    this.wakeLock.set(true);
    this.input.touch.recentre();
    let e = this.loadout.style === `jet` ? ` The jet takes a few seconds to spool up.` : this.say(` Take-off flaps: F.`, ` Take-off flaps: tap FLAP +.`);
    let t = this.sortieRoute ? ` Follow the arrows to ${this.destName()}.` : ``;
    this.ui.hint(this.say(`Open the throttle: hold Shift (or press 0). Steer with Q / E.${e}${t}`, `Push the throttle lever (right) all the way up. Steer with the stick (left thumb).${e}${t}`), 6000);
  }
  abandonPlane(e) {
    if (!e.downed && !e.wrecked) {
      e.downed = true;
      e.downedSide = Math.random() < 0.5 ? -1 : 1;
      e.s.health.engine = 0;
    }
  }
  crashPlane(e, t, n) {
    if (e.wrecked) {
      return;
    }
    e.wrecked = true;
    e.visual.root.visible = false;
    let r = e.s.pos.clone();
    if (n) {
      this.fx.splash(r);
      this.audio.splash();
    } else {
      this.fx.explosion(r, true);
      this.audio.explosion(this.camera.position.distanceTo(r));
      let t = [e.livery.body, e.livery.wing];
      for (let n = 0; n < 12; n++) {
        this.fx.debris(r, e.s.vel.clone().multiplyScalar(0.3), t[n % 2]);
      }
    }
    e.downed = true;
    if (e === this.player) {
      let e = this.mission;
      if (!e.result) {
        e.result = n ? `ditched` : `crashed`;
        e.resultText = t;
      }
      this.rig.addShake(1);
      this.ui.toast(n ? `SPLASH!` : `CRASH!`);
      this.endSortie(3.5, r);
    }
  }
  endSortie(e, t) {
    let n = this.mission;
    if (this.state !== `ending`) {
      this.state = `ending`;
      n.endT = e;
      n.wreckAt = t;
      this.hud.visible = t === null;
      this.ui.clearHint();
    }
  }
  finishLanding() {
    let e = this.mission;
    let t = this.player;
    let n = this.world;
    let r = n.gen.fieldMask(t.s.pos.x, t.s.pos.z) > 0.5;
    e.result = r ? `landed` : `field landing`;
    let i = e.touch;
    let a = 0;
    if (i) {
      let n = t.spec.crashSpeed / 6 * mu;
      a += i.sink < n * 1.5 ? 2 : +(i.sink < n * 3);
      a += +(i.bank < 0.1035);
      a += +!!i.onRunway;
      a += +(e.bounces === 0);
    }
    if (!r) {
      a = Math.min(a, 2);
    }
    e.grade = a >= 5 ? `A+` : a === 4 ? `A` : a === 3 ? `B` : a === 2 ? `C` : `D`;
    let o = {
      "A+": `GREASER!`,
      A: `SMOOTH!`,
      B: `NOT BAD!`,
      C: `FIRM...`,
      D: `OOF!`
    };
    let s = n.gen.nearestAirfield(t.s.pos.x, t.s.pos.z).af;
    e.resultText = r ? `Landed at ${s === n.home ? `home field` : `an airfield`}` : `Landed in a field`;
    if (this.sortieRoute) {
      e.atDest = r && s === this.sortieRoute.to;
      let t = this.names[n.gen.airfields.indexOf(s)];
      e.resultText = e.atDest ? `Landed at ${t}` : r ? `Landed at ${t}, not ${this.destName()}` : `Landed in a field`;
    }
    this.ui.toast(`${o[e.grade]}  ${e.grade}`);
    this.audio.fanfare(true);
    this.endSortie(2.5, null);
  }
  showDebrief() {
    let e = this.mission;
    let t = this.player;
    this.state = `debrief`;
    this.wakeLock.set(false);
    this.hud.visible = false;
    this.hud.clear();
    let n = e.result === `landed` || e.result === `field landing`;
    let r = 1 - t.integrity;
    let i = e.grade === `A` || e.grade === `A+`;
    let a = 0;
    if (n && i) {
      a = 3;
    } else if (n && e.grade === `B`) {
      a = 2;
    } else if (n) {
      a = 1;
    }
    let o = this.sortieRoute;
    let s = e.airT > 0 ? Math.round(e.pathT * 100 / e.airT) : 0;
    if (o) {
      let t = s >= 75 ? 3 : s >= 50 ? 2 : 1;
      a = e.atDest ? Math.min(a, t) : 0;
    }
    let c = e.tookOff ? this.simTime - e.takeoffT : 0;
    let l = `${Math.floor(c / 60)}:${String(Math.floor(c % 60)).padStart(2, `0`)}`;
    let u = [[`Result`, `${e.result ?? `—`}${e.resultText ? ` (${e.resultText})` : ``}`]];
    if (o) {
      u.push([`Route`, `Home Field → ${this.destName()}`]);
      u.push([`On the path`, e.tookOff ? `${s}%` : `—`]);
    }
    u.push([`Damage taken`, `${Math.round(r * 100)}%`]);
    if (e.touch) {
      u.push([`Touchdown`, `${e.touch.sink.toFixed(1)} m/s sink, ${Math.round(e.touch.bank * 180 / Math.PI)}° bank`]);
    }
    u.push([`Landing grade`, n ? e.grade : `—`]);
    u.push([`Flight time`, l]);
    u.push([`Aircraft`, Cf(t.loadout)]);
    u.push([`World seed`, String(this.settings.seed)]);
    let d = Cd(o ? xd(this.settings.seed, `route`, this.settings.dest) : xd(this.settings.seed), {
      medal: a,
      landing: n ? e.grade : `—`,
      ...(o ? {
        path: s
      } : {})
    });
    let f = n ? a >= 2 ? `Nicely done!` : `Back on the ground` : e.result === `bailed out` ? `Hit the silk!` : `Better luck next time`;
    if (o && n) {
      f = e.atDest ? a >= 2 ? `Welcome to ${this.destName()}!` : `Made it!` : `Wrong airfield!`;
    }
    this.ui.showDebrief({
      title: f,
      medal: a,
      rows: u,
      newBest: d,
      bestOf: o ? `route` : `world`
    });
    this.audio.fanfare(a >= 2);
  }
  assist(e) {
    let t = this.settings.assist;
    let n = e.input;
    let r = e.s;
    let i = this.input.lastInput === `touch`;
    if (i && r.onGround) {
      n.yaw = MathUtils.clamp(n.yaw + n.roll, -1, 1);
    }
    if (!r.onGround && (t !== `expert` || !!i) && (n.yaw = MathUtils.clamp(n.yaw + n.roll * 0.3, -1, 1), t !== `expert` && t === `arcade`)) {
      if (Math.abs(n.roll) < 0.05 && !this.input.mouseStick) {
        let e = Vf(r);
        if (Math.abs(e) < 1.4) {
          n.roll = MathUtils.clamp(e * 0.9 + r.angVel.z * 0.25, -0.6, 0.6);
        }
      }
      if (r.alpha > Bu(e.spec, r.flaps) * 0.85 && n.pitch > 0) {
        n.pitch *= 0.35;
      }
    }
  }
  downedControls(e) {
    let t = e.input;
    t.throttle = 0;
    t.roll = e.downedSide * 0.7;
    t.pitch = 0.2;
    t.yaw = e.downedSide * 0.3;
    t.brake = false;
  }
  emitFx(e, t) {
    let n = e.s;
    e.smokeT -= t;
    if (e.smokeT <= 0) {
      e.smokeT = 1 / 30;
      let t = n.health;
      if (e.downed || t.engine < 0.6 || t.wings < 0.5) {
        Mh.set(0, 0.4, -1.6).applyQuaternion(n.quat).add(n.pos);
        this.fx.smoke(Mh, n.vel, e.downed ? 1 : 1 - t.engine);
        if (e.downed || t.engine < 0.25) {
          this.fx.fire(Mh, n.vel);
        }
      }
    }
    e.dustT -= t;
    if (n.onGround && e.dustT <= 0 && n.vel.length() > 6) {
      e.dustT = 1 / 8;
      Mh.set(Math.random() < 0.5 ? -0.9 : 0.9, -1.3, -0.4).applyQuaternion(n.quat).add(n.pos);
      this.fx.dust(Mh);
    }
  }
  step(e) {
    if (this.paused || !this.world || !this.env || this.state !== `sortie` && this.state !== `ending`) {
      return;
    }
    let t = this.world;
    let n = this.player;
    let r = this.mission;
    this.tick++;
    this.simTime += e;
    for (let e of this.planes) {
      e.savePrev();
    }
    if (this.state === `sortie` && n.alive) {
      this.input.sample(e, n.input);
      this.assist(n);
    } else if (n.downed) {
      this.downedControls(n);
    } else {
      n.input.throttle = 0;
      n.input.pitch = n.input.roll = n.input.yaw = 0;
      n.input.brake = true;
    }
    for (let i of this.planes) {
      if (i.wrecked) {
        continue;
      }
      let a = Hu(i.s, i.spec, i.input, this.env, e, i.gear);
      if (a.crashed) {
        this.crashPlane(i, a.crashed, a.splash);
      } else {
        if (a.propStrike) {
          i.s.health.engine = Math.max(0, i.s.health.engine - e * 1.5);
          if (this.tick % 6 == 0) {
            this.fx.sparksAt(Mh.set(0, -1.1, -2.9).applyQuaternion(i.s.quat).add(i.s.pos), 2);
          }
        }
        if (a.scrape) {
          i.s.health.wings = Math.max(0, i.s.health.wings - e * 0.4);
          if (this.tick % 8 == 0) {
            this.fx.dust(i.s.pos);
          }
        }
        if (a.touchdown && i === n && r.tookOff) {
          let e = r.touch;
          if (e && this.simTime - e.t < 4) {
            r.bounces++;
          } else {
            r.bounces = 0;
            let e = !!t.gen.runwayAt(n.s.pos.x, n.s.pos.z, 4);
            r.touch = {
              ...a.touchdown,
              onRunway: e,
              t: this.simTime
            };
          }
          if (a.touchdown.sink > 2.5) {
            this.rig.addShake(Math.min(0.6, a.touchdown.sink * 0.1));
          }
        }
        this.emitFx(i, e);
      }
    }
    if (this.state === `sortie` && n.alive) {
      let i = n.s.pos.y - Math.max(t.groundHeight(n.s.pos.x, n.s.pos.z), 0);
      if (r.hintStage === 0 && n.s.onGround && n.s.airspeed > 14) {
        r.hintStage = 1;
        let e = Math.round(mf(n.spec) * 1.25 * 3.6 / 5) * 5;
        this.ui.hint(n.gear.tricycle ? this.say(`Keep it straight with Q / E, then pull back gently with S at about ${e} km/h.`, `Keep it straight with the stick, then drag it gently down at about ${e} km/h.`) : this.say(`Ease the tail up with W, then pull back gently with S at about ${e} km/h.`, `Ease the tail up (stick up a little), then drag it gently down at about ${e} km/h.`), 6000);
      }
      if (!r.tookOff && n.s.airTime > 2 && i > 15) {
        r.tookOff = true;
        r.takeoffT = this.simTime;
        r.touch = null;
        this.ui.toast(`AIRBORNE!`);
        if (this.sortieRoute) {
          this.ui.hint(`Follow the white arrows to ${this.destName()} and land there.`, 6000);
        } else {
          this.ui.hint(`Enjoy the view! Land on any airfield strip to finish.`, 6000);
        }
      }
      if (r.tookOff && !r.flapHint && !n.s.onGround && i < 350 && n.s.vel.y < -1 && this.input.flapNotch < 2) {
        let e = t.gen.nearestAirfield(n.s.pos.x, n.s.pos.z);
        if (e.dist < 2500 && (!this.sortieRoute || e.af === this.sortieRoute.to)) {
          r.flapHint = true;
          this.ui.hint(this.say(`Landing? Full flaps (press F twice) let you come in slower and steeper.`, `Landing? Full flaps (tap FLAP + twice) let you come in slower and steeper. Hold BRAKE after touchdown.`), 5000);
        }
      }
      let a = this.tracker;
      if (a) {
        a.update(n.s.pos.x, n.s.pos.y, n.s.pos.z);
        if (r.tookOff && !n.s.onGround) {
          r.airT += e;
          if (a.onPath()) {
            r.pathT += e;
          }
        }
        r.offPathHintT -= e;
        if (r.tookOff && a.lateral > 400 && r.offPathHintT <= 0) {
          r.offPathHintT = 20;
          this.ui.hint(`Off the path! Turn toward the PATH marker and pick up the arrows again.`, 5000);
        }
      }
      if (r.tookOff && n.s.onGround && n.s.vel.length() < 2.5) {
        r.stoppedT += e;
        if (r.stoppedT > 1.2) {
          this.finishLanding();
        }
      } else {
        r.stoppedT = 0;
      }
    }
  }
  handleKeys() {
    let e = this.input;
    let t = e.touch.model.take();
    if ((e.wasPressed(`Escape`) || e.wasPressed(`KeyP`) || e.padWasPressed(9) || t.has(`pause`)) && (this.state === `sortie` || this.state === `ending`)) {
      this.setPaused(!this.paused);
    }
    if (!this.paused) {
      if (this.state === `sortie` || this.state === `ending`) {
        if (e.wasPressed(`KeyC`) || e.padWasPressed(3) || t.has(`camera`)) {
          this.rig.cycle();
          this.ui.toast(this.rig.mode.toUpperCase(), 700);
        }
        if (e.wasPressed(`KeyR`)) {
          this.startSortie();
        }
      }
      if (this.state === `sortie`) {
        let n = (e.wasPressed(`KeyF`) || e.padWasPressed(13) || t.has(`flapsMore`) ? 1 : 0) - (e.wasPressed(`KeyV`) || e.padWasPressed(12) || t.has(`flapsLess`) ? 1 : 0);
        if (n && e.stepFlaps(n)) {
          this.ui.toast(`FLAPS ${FLAP_LABELS[e.flapNotch]}`, 700);
          this.audio.click();
        }
        if (e.wasPressed(`KeyM`)) {
          e.mouseStick = !e.mouseStick;
          this.ui.hint(e.mouseStick ? `Mouse stick ON: move the cursor to fly.` : `Mouse stick OFF`, 3000);
        }
        let r = this.player;
        if ((e.wasPressed(`KeyX`) || t.has(`bail`)) && r && !r.wrecked && !r.s.onGround && this.mission.tookOff) {
          this.abandonPlane(r);
          this.mission.result = `bailed out`;
          this.mission.resultText = `Parachuted to safety`;
          this.ui.toast(`BAILED OUT!`);
          this.endSortie(4, r.s.pos.clone());
        }
      }
      if (this.state === `title`) {
        if (e.wasPressed(`Enter`) || e.padWasPressed(0)) {
          this.fly();
        }
        if (e.wasPressed(`KeyH`) || e.padWasPressed(3)) {
          this.openHangar();
        }
        if (e.wasPressed(`ArrowLeft`) || e.padWasPressed(14)) {
          this.stepDest(-1);
        }
        if (e.wasPressed(`ArrowRight`) || e.padWasPressed(15)) {
          this.stepDest(1);
        }
      } else if (this.state === `hangar`) {
        if (e.wasPressed(`Escape`) || e.wasPressed(`Enter`) || e.wasPressed(`Backspace`) || e.padWasPressed(1)) {
          this.closeHangar();
        }
        if (e.padWasPressed(4) || e.padWasPressed(14)) {
          this.hangar.nav(-1, 0);
        }
        if (e.padWasPressed(5) || e.padWasPressed(15)) {
          this.hangar.nav(1, 0);
        }
        if (e.padWasPressed(12)) {
          this.hangar.nav(0, -1);
        }
        if (e.padWasPressed(13)) {
          this.hangar.nav(0, 1);
        }
      }
    }
  }
  objectiveText() {
    let e = this.mission;
    let t = this.tracker;
    if (this.sortieRoute && t) {
      let n = this.destName();
      if (!e.tookOff) {
        return `Take off — follow the arrows to ${n}`;
      }
      let r = Math.max(0, (this.sortieRoute.sAim - t.progress) / 1000).toFixed(1);
      if (t.onPath()) {
        return `Fly to ${n} — ${r} km`;
      } else {
        return `Back to the path! ${n} ${r} km`;
      }
    }
    if (e.tookOff) {
      return `Free flight — land on any strip to finish`;
    } else {
      return `Take off!`;
    }
  }
  destName() {
    let e = this.sortieRoute;
    if (e && this.world) {
      return this.names[this.world.gen.airfields.indexOf(e.to)];
    } else {
      return ``;
    }
  }
  frame(e, t) {
    this.input.pollPad();
    this.updateTouch(e);
    this.handleKeys();
    this.time += e;
    let n = this.world;
    if (!n) {
      return;
    }
    let r = performance.now();
    let i = this.player;
    this.dynamicResolution(e);
    switch (this.state) {
      case `hangar`:
        this.updatePreview(e);
        n.update(this.camera.position, null, e);
        break;
      case `title`:
      case `debrief`:
        {
          let t = n.home;
          this.rig.orbit(e, Mh.set(t.x, t.height + 20, t.z), 650, 110, 0.04);
          n.update(this.camera.position, null, e);
          break;
        }
      case `loading`:
        {
          this.loadT += e;
          n.update(i.s.pos, null, e);
          i.syncVisual(1, e);
          this.rig.follow(e, i.s.pos, i.s.quat, 0, (e, t) => n.groundHeight(e, t));
          let t = n.chunks.readiness(i.s.pos, 2);
          this.ui.setLoading(t);
          if (t >= 1 && this.loadT > 0.4) {
            this.beginSortie();
          }
          break;
        }
      case `sortie`:
      case `ending`:
        {
          for (let n of this.planes) {
            if (!n.wrecked) {
              n.syncVisual(this.paused ? 1 : t, this.paused ? 0 : e);
            }
          }
          let r = this.mission;
          if (i) {
            i.visual.setCockpitView(this.rig.mode === `cockpit` && (this.state !== `ending` || !r.wreckAt));
          }
          if (this.state === `ending` && r.wreckAt) {
            this.rig.orbit(e, r.wreckAt, 45, 18, 0.35);
          } else if (i) {
            this.rig.follow(e, i.visual.root.position, i.visual.root.quaternion, i.s.airspeed, (e, t) => n.groundHeight(e, t));
          }
          n.update(this.camera.position, i ? i.s.vel : null, this.paused ? 0 : e);
          if (i) {
            n.updatePapi(i.s.pos);
          }
          if (this.guide && this.tracker) {
            this.guide.update(this.tracker.progress, this.time);
          }
          if (this.state === `ending` && !this.paused) {
            r.endT -= e;
            if (r.endT <= 0) {
              this.showDebrief();
            }
          }
          break;
        }
    }
    this.sky.follow(this.camera, this.camera.far * 0.9);
    this.water.update(this.camera, this.time, this.camera.far * 2.2);
    let a = i && this.state !== `title` && this.state !== `hangar` && this.state !== `debrief` ? i.s.pos : this.camera.position;
    let o = rp(n.time);
    let s = 260 / this.tier.shadowSize * 2;
    this.sun.target.position.set(Math.round(a.x / s) * s, Math.round(a.y / s) * s, Math.round(a.z / s) * s);
    this.sun.position.copy(this.sun.target.position).addScaledVector(o, 600);
    if (!this.paused) {
      this.fx.update(e, this.camera.position);
    }
    let c = this.state === `sortie` || this.state === `ending`;
    let l = c ? n.clouds.densityAt(this.camera.position) : 0;
    let u = Math.min(1, l * 5);
    let d = u > this.whiteout ? 6 : 0.7;
    if (!this.paused) {
      this.whiteout += Math.sign(u - this.whiteout) * Math.min(Math.abs(u - this.whiteout), d * e);
    }
    if (!c) {
      this.whiteout = 0;
    }
    this.ui.setWhiteout(this.whiteout);
    let f = i && i.alive && this.state === `sortie` ? Math.max(0, 0.45 - i.integrity) : 0;
    this.ui.setHurt(Math.min(1, f));
    if (i && (this.state === `sortie` || this.state === `ending`)) {
      let t = i.s.pos.y - Math.max(n.groundHeight(i.s.pos.x, i.s.pos.z), 0);
      let r = this.mission;
      this.hud.draw({
        player: i,
        world: n,
        camera: this.camera,
        objective: this.objectiveText(),
        mouseStick: this.input.mouseStick,
        mouse: this.input.mouse,
        stallWarn: i.s.stalled && !i.s.onGround,
        showLanding: r.tookOff && t < 450 && (!this.sortieRoute || n.gen.nearestAirfield(i.s.pos.x, i.s.pos.z).af === this.sortieRoute.to),
        guide: this.hudGuide(),
        flapNotch: this.input.flapNotch,
        touch: this.touchView()
      }, e);
      this.audio.update(i.s.rpm, i.s.airspeed, !this.paused && !i.wrecked);
    } else if (this.state === `hangar` && this.preview) {
      this.audio.update(0.18, 0, true, 0.45);
    } else {
      this.audio.update(0, 0, false);
    }
    if (!this.contextLost) {
      if (this.tier.post) {
        this.post.render(this.renderer, this.scene, this.camera);
      } else {
        this.renderer.render(this.scene, this.camera);
      }
    }
    let p = performance.now() - r;
    if (this.stats) {
      let e = this.renderer.info.render;
      this.stats.textContent = `${(1000 / this.frameAvg).toFixed(0)} fps  cpu ${p.toFixed(1)}ms  calls ${e.calls}  tris ${(e.triangles / 1000).toFixed(0)}k  chunks ${n.chunks.chunkCount}  props ${n.props.instanceTotal}  tier ${this.tierName} x${this.renderScale.toFixed(1)}`;
    }
    this.input.endFrame();
  }
  dynamicResolution(e) {
    this.frameAvg += (e * 1000 - this.frameAvg) * 0.05;
    this.resTimer += e;
    if (this.resTimer <= 2 || this.state === `title` || this.state === `hangar`) {
      return;
    }
    this.resTimer = 0;
    let t = Math.round(this.renderScale * 10);
    let n = this.frameAvg > 22 ? Math.max(6, t - 1) : this.frameAvg < 14 ? Math.min(10, t + 1) : t;
    if (n !== t) {
      this.renderScale = n / 10;
      this.resize();
    }
  }
  updateTouch(e) {
    let t = this.input.touch;
    let n = this.state === `sortie` || this.state === `ending`;
    let r = this.player;
    t.setEnabled(n && !this.paused);
    if (document.body.classList.contains(`flying`) !== n) {
      document.body.classList.toggle(`flying`, n);
    }
    t.model.bailShown = this.state === `sortie` && !!r && !r.wrecked && !r.downed && !r.s.onGround && !!this.mission?.tookOff;
    t.update(e);
    this.loop.maxFps = this.tierName === `mobile` ? n && !this.paused ? 60 : 30 : 0;
  }
  touchView() {
    let e = this.input.touch;
    if (this.input.lastInput !== `touch` || !e.enabled) {
      return null;
    }
    let t = e.model;
    let n = performance.now() / 1000;
    return {
      layout: t.layout,
      stick: t.stick(),
      throttle: t.throttle,
      held: e => t.held(e),
      bailShown: t.bailShown,
      bailProgress: t.bailProgress(n),
      tilt: e.tiltEnabled
    };
  }
  hudGuide() {
    let e = this.sortieRoute;
    let t = this.tracker;
    if (!e || !t) {
      return;
    }
    let n = this.state === `sortie` && this.mission.tookOff && !t.onPath() ? (Ch(e, t.progress + 500, this.rejoin), this.rejoin) : null;
    return {
      route: e,
      dest: e.to,
      rejoin: n
    };
  }
  async setupDebug() {
    let {
      default: e
    } = await loadModule(async () => ({ default: (await import(`lil-gui`)).default }), []);
    let t = new e({
      title: `Flight model (live)`
    });
    let n = Object.keys(this.spec);
    for (let e of n) {
      t.add(this.spec, e);
    }
    t.close();
    let r = document.createElement(`div`);
    r.style.cssText = `position:fixed;left:8px;top:8px;font:12px monospace;color:#fff;background:rgba(0,0,0,.45);padding:3px 6px;border-radius:4px;pointer-events:none;z-index:10`;
    document.body.append(r);
    this.stats = r;
    window.baron = this;
  }
};
function Ih() {
  try {
    return !!document.createElement(`canvas`).getContext(`webgl2`);
  } catch {
    return false;
  }
}
var Lh = document.getElementById(`game`);
var Rh = document.getElementById(`hud`);
if (Ih()) {
  new Game(Lh, Rh).start();
} else {
  document.getElementById(`title`)?.classList.add(`hidden`);
  document.getElementById(`nogl`)?.classList.remove(`hidden`);
}

export { Game, Ih, Lh, Mh, Nh, Ph, Rh, jh };
