import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('built homepage contains essential conversion and accessibility content', async () => {
  const html = await readFile('dist/index.html', 'utf8');
  assert.match(html, /<h1/);
  assert.match(html, /aria-label="Primary navigation"/);
  assert.match(html, /Book a talent briefing/);
  assert.match(html, /FDA/);
  assert.match(html, /application\/ld\+json/);
});

test('production metadata files are generated', async () => {
  const robots = await readFile('dist/robots.txt', 'utf8');
  const sitemap = await readFile('dist/sitemap-index.xml', 'utf8');
  assert.match(robots, /Sitemap:/);
  assert.match(sitemap, /sitemap/);
});
