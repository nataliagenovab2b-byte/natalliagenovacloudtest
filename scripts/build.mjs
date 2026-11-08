import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const source = resolve(root, 'figma-site');
const output = resolve(root, 'dist');
const pages = ['index.html', 'stories.html', 'impressum.html', 'privacy.html'];
const required = [...pages, 'site.css', 'app.js', 'legal-data.json'];

for (const file of required) {
  const content = await readFile(resolve(source, file));
  if (!content.length) throw new Error(`Empty source file: ${file}`);
  if (/https:\/\/www\.figma\.com\/api\/mcp\/asset/.test(content.toString())) {
    throw new Error(`Temporary Figma asset URL in ${file}`);
  }
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const file of required) await cp(resolve(source, file), resolve(output, file));
await cp(resolve(source, 'assets'), resolve(output, 'assets'), { recursive: true });
await writeFile(resolve(output, '_headers'), '/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n');
console.log('Built dist/ from figma-site/: 4 pages, styles, scripts, legal text and local assets.');
