/* Run with npm run test:browser. Set QA_MODULES to an existing node_modules
   directory with Playwright and sharp, and QA_BROWSER to a Chromium executable. */
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createServer } from 'node:http';

const root = resolve(import.meta.dirname, '..');
const require = createRequire(process.env.QA_MODULES ? resolve(process.env.QA_MODULES, '__qa__.cjs') : import.meta.url);
const { chromium } = require('playwright');
const sharp = require('sharp');
const output = resolve(root, 'design/qa');
await mkdir(output, { recursive: true });
const server = createServer(async (req, res) => {
  try {
    const path = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const file = resolve(root, 'dist', path === '/' ? 'index.html' : '.' + path);
    if (!file.startsWith(resolve(root, 'dist') + '/')) throw new Error('Invalid path');
    const mime = { html: 'text/html; charset=utf-8', css: 'text/css', js: 'text/javascript', svg: 'image/svg+xml', jpg: 'image/jpeg', png: 'image/png', ttf: 'font/ttf' }[file.split('.').pop()] || 'application/octet-stream';
    res.writeHead(200, { 'content-type': mime });
    res.end(await readFile(file));
  } catch { res.writeHead(404); res.end('Not found'); }
});
await new Promise(r => server.listen(0, '127.0.0.1', r));
const url = `http://127.0.0.1:${server.address().port}/`;
const browser = await chromium.launch({ headless: true, ...(process.env.QA_BROWSER ? { executablePath: process.env.QA_BROWSER } : {}) });
const report = { viewports: [], functional: [], visual: null };
const failures = [];
const figma = JSON.parse(await readFile(resolve(root, 'design/figma-inspection.json'), 'utf8'));
const expected = [
  ['1:4', 0, 92], ['1:389', 92, 721], ['1:390', 854, 588],
  ['1:82', 1483, 819], ['1:154', 2343, 599], ['1:209', 2983, 1072],
  ['1:391', 4096, 626], ['1:392', 4763, 722], ['1:370', 5526, 454], ['1:393', 5980, 491],
];
try {
  for (const [width, height] of [[3360, 6839], [1920, 1080], [1440, 1000], [1024, 900], [768, 1024], [390, 844], [320, 740]]) {
    const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1 });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(String(e)));
    page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
    page.on('response', r => { if (r.status() >= 400) errors.push(`${r.status()} ${r.url()}`); });
    page.on('requestfailed', r => errors.push(`${r.failure()?.errorText} ${r.url()}`));
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    const state = await page.evaluate(() => {
      const rect = e => { const r = e.getBoundingClientRect(); return { x: r.x, y: r.y, w: r.width, h: r.height }; };
      return {
        documentWidth: document.documentElement.scrollWidth,
        viewportWidth: innerWidth,
        h1Count: document.querySelectorAll('h1').length,
        accessibleControls: [...document.querySelectorAll('button,a')].every(e => !!(e.getAttribute('aria-label') || e.textContent.trim())),
        imageAlternatives: [...document.images].every(e => e.hasAttribute('alt')),
        text: document.body.textContent.replace(/\s/g, ''),
        assets: [...document.images].map(e => ({ src: e.getAttribute('src'), loaded: e.complete && e.naturalWidth > 0, visible: e.checkVisibility(), ...rect(e) })),
        sections: [...document.querySelectorAll('[data-figma-node]')].map(e => ({ node: e.dataset.figmaNode, ...rect(e) })),
        overflowingText: [...document.querySelectorAll('h1,h2,h3,.needs-grid p,.about-copy p,.format-card p')].filter(e => !e.closest('[aria-hidden="true"]') && (e.getBoundingClientRect().right > innerWidth + 1 || e.getBoundingClientRect().left < -1)).map(e => e.textContent),
      };
    });
    const checks = [
      [state.documentWidth <= width, 'horizontal overflow'],
      [state.h1Count === 1, 'single H1'],
      [state.accessibleControls && state.imageAlternatives, 'basic accessible names and image alternatives'],
      [figma.texts.every(t => state.text.includes(t.text.replace(/\s/g, ''))), 'all 129 Figma text layers retained'],
      [state.assets.every(a => a.loaded && (!a.visible || (a.w > 0 && a.h > 0))), 'asset loading and geometry'],
      [state.overflowingText.length === 0, 'text stays inside viewport'],
      [errors.length === 0, 'browser console and HTTP errors'],
    ];
    if (width === 3360) {
      const assetSlots = [
        ['assets/figma/logo.png', 168, 16.84375, 205, 56.3125],
        ['assets/figma/hero.jpg', 1584, 92, 833, 689],
        ['assets/figma/ellipse-1.svg', 1375.7, -277.3, 487.6, 923.6],
        ['assets/figma/ellipse-2.svg', 1290.7, 82.7, 528.6, 617.6],
        ['assets/figma/ellipse-2.svg', 1349.7, 200.7, 528.6, 617.6],
        ['assets/figma/ellipse-4.svg', 1350.7, 471.7, 538.6, 515.6],
        ['assets/figma/about.jpg', 1044, 3183.361, 577.806, 798.094],
      ];
      assetSlots.forEach(([src, x, y, w, h], index) => {
        const actual = state.assets[index];
        checks.push([actual.src === src && Math.abs(actual.x - x) < .1 && Math.abs(actual.y - y) < .1 && Math.abs(actual.w - w) < .1 && Math.abs(actual.h - h) < .1, `original asset slot ${index + 1}`]);
      });
      for (const [node, y, h] of expected) {
        const actual = state.sections.find(s => s.node === node);
        checks.push([actual && Math.abs(actual.y - y) <= 1 && Math.abs(actual.h - h) <= 1, `Figma geometry ${node}`]);
      }
    }
    delete state.text;
    const screenshot = `${width}x${height}.png`;
    await page.screenshot({ path: resolve(output, screenshot), fullPage: true });
    report.viewports.push({ width, height, screenshot, errors, checks: checks.map(([pass, name]) => ({ name, pass })), ...state });
    checks.filter(([pass]) => !pass).forEach(([, name]) => failures.push(`${width}px: ${name}`));
    if (width === 390) {
      const active = () => page.locator('.carousel-dot[aria-pressed="true"]').getAttribute('aria-label');
      await page.locator('[data-carousel-next]').click();
      assert.equal(await active(), 'Показать историю 2');
      await page.locator('[data-carousel-prev]').click();
      assert.equal(await active(), 'Показать историю 1');
      for (let index = 0; index < 5; index++) {
        await page.locator('.carousel-dot').nth(index).click();
        assert.equal(await active(), `Показать историю ${index + 1}`);
        const clips = await page.locator('.carousel').evaluate(e => e.clientHeight < e.querySelector('[aria-hidden="false"]').offsetHeight);
        assert.equal(clips, false, `Story ${index + 1} must not be clipped`);
      }
      await page.locator('[data-carousel]').focus();
      await page.keyboard.press('ArrowRight');
      assert.equal(await active(), 'Показать историю 1');
      await page.keyboard.press('ArrowLeft');
      assert.equal(await active(), 'Показать историю 5');
      report.functional.push('All 5 stories, next/previous, indicator buttons, keyboard controls and natural mobile heights pass.');
      await page.locator('[data-cookie-dismiss="essential"]').click();
      assert.equal(await page.locator('.cookie-banner').isVisible(), false);
      await page.reload({ waitUntil: 'networkidle' });
      assert.equal(await page.locator('.cookie-banner').isVisible(), false);
      assert.equal(await page.evaluate(() => localStorage.getItem('ng-cookie-choice')), 'essential');
      await page.evaluate(() => localStorage.removeItem('ng-cookie-choice'));
      await page.reload({ waitUntil: 'networkidle' });
      await page.locator('[data-cookie-dismiss="all"]').click();
      assert.equal(await page.evaluate(() => localStorage.getItem('ng-cookie-choice')), 'all');
      report.functional.push('Both cookie choices dismiss the notice and persist after reload.');
      const whatsapp = await page.locator('a[href^="https://wa.me/"]').evaluateAll(es => es.map(e => ({ href: e.href, target: e.target, rel: e.rel })));
      assert.equal(whatsapp.length, 3);
      assert(whatsapp.every(e => e.href === 'https://wa.me/491777868304' && e.target === '_blank' && e.rel.includes('noopener')));
      for (const target of ['services', 'approach', 'about', 'formats', 'contact']) {
        await page.locator(`.main-nav a[href="#${target}"]`).click();
        assert.equal(new URL(page.url()).hash, `#${target}`);
      }
      const socials = await page.locator('.footer-grid a[href*="instagram"], .footer-grid a[href*="linkedin"]').evaluateAll(es => es.map(e => e.href));
      assert.deepEqual(socials, ['https://www.instagram.com/euro_medical/', 'https://www.linkedin.com/company/142663989/']);
      report.functional.push('User-supplied Instagram and LinkedIn URLs pass.');
      report.functional.push('All primary navigation targets and the 3 existing WhatsApp URLs pass. External messages were not sent.');
      await page.addInitScript(() => Object.defineProperty(window, 'localStorage', { get() { throw new Error('Storage unavailable'); } }));
      await page.reload({ waitUntil: 'networkidle' });
      assert.equal(await page.locator('.cookie-banner').isVisible(), true);
      await page.locator('[data-cookie-dismiss="essential"]').click();
      assert.equal(await page.locator('.cookie-banner').isVisible(), false);
      report.functional.push('Cookie controls work when persistent storage is unavailable.');
      assert.equal(errors.length, 0, errors.join('\n'));
    }
    await context.close();
  }
  // The full-page visual comparison is measured at the original 3360 × 6839.
  const reference = resolve(root, 'design/reference/figma-desktop.png');
  const rendered = resolve(output, '3360x6839.png');
  const metadata = await sharp(rendered).metadata();
  assert.equal(metadata.width, 3360); assert.equal(metadata.height, 6839);
  const a = await sharp(reference).removeAlpha().raw().toBuffer();
  const b = await sharp(rendered).removeAlpha().raw().toBuffer();
  assert.equal(a.length, b.length);
  const regions = [{ name: 'full frame', left: 0, top: 0, width: 3360, height: 6839 }, ...expected.map(([node, top, height]) => ({ name: node, left: 930, top, width: 1550, height }))];
  const metrics = regions.map(region => {
    let sum = 0, changed = 0;
    for (let y = region.top; y < region.top + region.height; y++) {
      for (let x = region.left; x < region.left + region.width; x++) {
        const index = (y * 3360 + x) * 3;
        const differences = [0, 1, 2].map(c => Math.abs(a[index + c] - b[index + c]));
        sum += differences.reduce((s, d) => s + d, 0);
        if (Math.max(...differences) > 24) changed++;
      }
    }
    const pixels = region.width * region.height;
    return { ...region, meanAbsoluteError: +(sum / (pixels * 3)).toFixed(3), changedPixelPercentAtThreshold24: +(changed / pixels * 100).toFixed(3) };
  });
  await sharp(reference).composite([{ input: rendered, blend: 'difference' }]).png().toFile(resolve(output, 'difference.png'));
  const half = await sharp(rendered).ensureAlpha(.5).png().toBuffer();
  await sharp(reference).composite([{ input: half }]).png().toFile(resolve(output, 'overlay.png'));
  const left = await sharp(reference).resize({ width: 672 }).toBuffer();
  const right = await sharp(rendered).resize({ width: 672 }).toBuffer();
  await sharp({ create: { width: 1344, height: 1368, channels: 3, background: '#fff' } }).composite([{ input: left, left: 0, top: 0 }, { input: right, left: 672, top: 0 }]).png().toFile(resolve(output, 'comparison.png'));
  report.visual = { metrics, notes: 'Raw pixel differences include Figma/browser font rasterization and glyph fallback differences; metrics are not a claim of pixel-perfect identity.' };
  report.failures = failures;
  await writeFile(resolve(output, 'report.json'), JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify({ viewports: report.viewports.map(v => ({ width: v.width, checks: v.checks, errors: v.errors, overflow: v.documentWidth, overflowingText: v.overflowingText })), functional: report.functional, visual: report.visual, failures }, null, 2));
  assert.equal(failures.length, 0, failures.join('\n'));
} finally {
  await browser.close();
  await new Promise(r => server.close(r));
}
