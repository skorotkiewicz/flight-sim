// Scope-safe rename of top-level bindings using rename-map.json.
// Usage: node tools/rename.mjs <input.js> <map.json> <output.js>
import fs from "node:fs";
import { parse } from "@babel/parser";
import * as _traverse from "@babel/traverse";
const traverse = _traverse.default ?? _traverse;

const [input, mapPath, output] = process.argv.slice(2);
const map = JSON.parse(fs.readFileSync(mapPath, "utf8"));

const code = fs.readFileSync(input, "utf8");
const ast = parse(code, { sourceType: "script", errorRecovery: true });

let renamed = 0;
const missed = new Set();
traverse(ast, {
  Program(path) {
    // only the outermost scope
    for (const [oldName, newName] of Object.entries(map)) {
      const binding = path.scope.bindings[oldName];
      if (!binding) {
        missed.add(oldName);
        continue;
      }
      try {
        path.scope.rename(oldName, newName);
        renamed++;
      } catch (e) {
        console.error(`failed: ${oldName} -> ${newName}: ${e.message}`);
        missed.add(oldName);
      }
    }
  },
});

import { generate } from "@babel/generator";
const out = generate(ast, { retainLines: false, jsescOption: { minimal: true } }).code;
fs.writeFileSync(output, out);

console.log(`renamed ${renamed} bindings; not found: ${[...missed].join(" ") || "none"}`);
