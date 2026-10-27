import { mkdir, readFile, writeFile, copyFile, rm } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const output = resolve(root, 'dist');
const html = await readFile(resolve(root, 'index.html'), 'utf8');
const css = await readFile(resolve(root, 'styles.css'), 'utf8');
const assets = new Set([
  ...[...html.matchAll(/(?:src|href)="(assets\/[^"?#]+)(?:[^\"]*)?"/g)].map(match => match[1]),
  ...[...css.matchAll(/url\(['"]?(assets\/[^)'"?#]+)/g)].map(match => match[1]),
]);
const missingAnchors = [...html.matchAll(/href="#([^"\s]+)"/g)]
  .map(match => match[1])
  .filter(id => !html.includes(`id="${id}"`));
if (missingAnchors.length) throw new Error(`Missing anchors: ${missingAnchors.join(', ')}`);
if (/https:\/\/www\.figma\.com\/api\/mcp\/asset/.test(html + css)) {
  throw new Error('Temporary Figma assets must not be used at runtime.');
}
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const file of ['index.html', 'styles.css', 'script.js', ...assets]) {
  const source = resolve(root, file);
  if (!source.startsWith(root + '/')) throw new Error(`Invalid source path: ${file}`);
  const target = resolve(output, file);
  await mkdir(dirname(target), { recursive: true });
  await copyFile(source, target);
}
await writeFile(resolve(output, '_headers'), '/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n');
console.log(`Built dist/: HTML, CSS, JS and ${assets.size} local assets. No runtime dependencies.`);
