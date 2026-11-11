import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';

const root = new URL('../dist/', import.meta.url);
const manifest = JSON.parse(await readFile(new URL('.vite/manifest.json', root), 'utf8'));
const visited = new Set();
const visit = (key) => {
  if (visited.has(key)) return;
  assert.ok(manifest[key], `Manifest entry missing: ${key}`);
  visited.add(key);
  for (const imported of manifest[key].imports || []) visit(imported);
};
visit('index.html');

const files = [...new Set([...visited].map(key => manifest[key].file))];
assert.ok(files.every(file => !/(three-core|three-react|globe-|DevPortfolio|hls-)/.test(file)), 'The app entry statically imports a route-specific engine');
const bytes = (await Promise.all(files.map(file => stat(new URL(file, root))))).reduce((sum, file) => sum + file.size, 0);
assert.ok(bytes <= 600_000, `Initial app JavaScript exceeds 600 kB: ${bytes}`);
const html = await readFile(new URL('index.html', root), 'utf8');
assert.ok(!html.includes('pyodide'), 'Python runtime must only load after Start game');
console.log(`App entry: ${files.length} JS files, ${bytes} bytes before compression; route-specific engines excluded.`);
