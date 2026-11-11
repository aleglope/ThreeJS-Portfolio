import { spawnSync } from "node:child_process";
import { readdirSync } from "node:fs";
import { join } from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const tests = readdirSync(join(root, "tests"))
  .filter((name) => name.endsWith(".test.mjs"))
  .sort()
  .map((name) => "tests/" + name);

if (Number(process.versions.node.split(".")[0]) !== 24) {
  console.error("Release checks require Node.js 24, matching Vercel.");
  process.exit(1);
}

const checks = [
  ["ESLint", "npm", ["run", "lint"]],
  ["Release contracts and runtime regressions", process.execPath, ["--test", ...tests]],
  ["Dependency audit (high and critical)", "npm", ["audit", "--audit-level=high"]],
];

for (const [label, command, args] of checks) {
  console.log("\nRelease check: " + label);
  const result = spawnSync(command, args, {
    cwd: root,
    stdio: "inherit",
    timeout: 5 * 60 * 1000,
  });
  if (result.error || result.status !== 0) {
    console.error("Release check failed: " + label);
    if (result.error) console.error(result.error.message);
    process.exit(result.status || 1);
  }
}

console.log("\nRelease checks passed. The production build is the next gate.");
