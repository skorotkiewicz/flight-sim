// Splits the unminified bundle into ESM modules.
// Usage: node tools/split.mjs <deobfuscated.js> <rename-map.json> <outDir>
import fs from "node:fs";
import path from "node:path";
import { parse } from "@babel/parser";
import * as _traverse from "@babel/traverse";
const traverse = _traverse.default ?? _traverse;
import { generate } from "@babel/generator";

const [input, mapPath, outDir] = process.argv.slice(2);
const map = JSON.parse(fs.readFileSync(mapPath, "utf8")).map;
const vendorExports = new Set(JSON.parse(fs.readFileSync("/tmp/three_exports.json", "utf8")));
const lines = fs.readFileSync(input, "utf8").split("\n");

const bounds = [
  ["preload", 1],
  ["three", 43],
  ["audio", 26163],
  ["input", 26382],
  ["flight", 26459],
  ["controls", 27229],
  ["clock", 27542],
  ["storage", null],
  ["meshkit", 27846],
  ["particles", 28036],
  ["planemodels", 28314],
  ["contrails", 29305],
  ["postfx", 29462],
  ["sky", 29917],
  ["hangarui", 30163],
  ["instruments", 30289],
  ["hud", 30741],
  ["menus", 31500],
  ["worldmap", 31702],
  ["noise", 31915],
  ["terrain", 31999],
  ["props", 32361],
  ["destinations", 32839],
  ["clouds", 33142],
  ["mission", 33362],
  ["sw", 33807],
  ["loader", 33833],
  ["main", 33925],
];
const pdLine = lines.findIndex((l) => /^var pd = /.test(l)) + 1;
bounds.find((b) => b[0] === "storage")[1] = pdLine;

const modules = [];
for (let i = 0; i < bounds.length; i++) {
  const [name, ln] = bounds[i];
  const end = (bounds[i + 1]?.[1] ?? lines.length + 1) - 1;
  modules.push({ name, code: lines.slice(ln - 1, end).join("\n") });
}

// pass 1: parse, rename own top-level bindings, record orig->final per owner
const ownerMin = new Map(); // original minified name -> {owner, final}
for (const mod of modules) {
  const ast = parse(mod.code, { sourceType: "module", errorRecovery: true });
  let program;
  traverse(ast, { Program(path) { program = path; path.skip(); } });
  mod.origDefines = new Set(Object.keys(program.scope.bindings));
  for (const orig of mod.origDefines) ownerMin.set(orig, { owner: mod.name, final: map[orig] ?? orig });
  for (const [o, n] of Object.entries(map)) {
    if (program.scope.bindings[o]) program.scope.rename(o, n);
  }
  mod.defines = new Set(Object.keys(program.scope.bindings)); // post-rename finals
  mod.ast = ast;
}
const ownerOf = (name) => ownerMin.get(name)?.owner;
const finalOf = (name) => ownerMin.get(name)?.final;

// browser-global names that would be misread as bundle globals
const globalCollisions = [...ownerMin.keys()].filter((n) => n in globalThis && !["Object", "Math"].includes(n));
if (globalCollisions.length) console.log(`WARN top-level names shadowing browser globals: ${globalCollisions.join(" ")}`);

// pass 2: rewrite unbound references to other modules' names; collect imports
const fromThree = new Set(); // final names needed from the three shim
for (const mod of modules) {
  mod.imports = new Map(); // fromName -> Set(final)
  traverse(mod.ast, {
    Identifier(path) {
      if (!path.isReferenced()) return;
      const name = path.node.name;
      if (path.scope.getBinding(name)) return; // locally bound
      const owner = ownerOf(name);
      if (!owner || owner === mod.name) return;
      const final = finalOf(name);
      path.node.name = final; // read body shows real names
      if (!mod.imports.has(owner)) mod.imports.set(owner, new Set());
      mod.imports.get(owner).add(final);
    },
  });
}

// forward-reference report (possible eval-order issues)
const idx = Object.fromEntries(modules.map((m, i) => [m.name, i]));
const fwd = [];
for (const mod of modules)
  for (const [owner, names] of mod.imports)
    for (const n of names)
      if (idx[owner] > idx[mod.name]) fwd.push(`${mod.name} -> ${owner} (${n})`);
console.log(`forward references: ${fwd.length ? "\n" + fwd.join("\n") : "none"}`);

// emit
fs.mkdirSync(outDir, { recursive: true });
for (const mod of modules) {
  let out = "";
  for (const [from, names] of [...mod.imports].sort()) {
    if (from === "three") names.forEach((n) => fromThree.add(n));
    out += `import { ${[...names].sort().join(", ")} } from "./${from}.js";\n`;
  }
  if (out) out += "\n";
  if (mod.name === "three") continue; // shim emitted below
  out += generate(mod.ast, { jsescOption: { minimal: true } }).code;
  const defs = [...mod.defines].sort();
  out += defs.length ? `\n\nexport { ${defs.join(", ")} };\n` : "\n";
  fs.writeFileSync(path.join(outDir, `${mod.name}.js`), out);
  console.log(`${mod.name}.js (${(out.length / 1024).toFixed(0)}K) <- ${[...mod.imports.keys()].join(" ") || "-"} | exports ${defs.length}`);
}

// three.js shim: re-export the vendored library under the names game code uses
const missing = [...fromThree].filter((n) => !vendorExports.has(n));
if (missing.length) console.log(`NOT exported by vendor three.js: ${missing.join(", ")}`);
const shim = `// re-export of the real three.js; names referenced by the game modules\nexport {\n${[...fromThree].sort().map((n) => `  ${n},`).join("\n")}\n} from "three";\n`;
fs.writeFileSync(path.join(outDir, "three.js"), shim);
console.log(`three.js shim (${fromThree.size} names, ${missing.length} missing)`);
fs.writeFileSync(path.join(outDir, "rename-map.json"), JSON.stringify(map, null, 2));
console.log(`done: ${modules.length - 1} modules + shim -> ${outDir}`);
