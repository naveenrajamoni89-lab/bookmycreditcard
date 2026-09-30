// Run from credit-card-app: node scripts/check-not-found.mjs
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { createServer } from 'vite';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';

const server = await createServer({ server: { middlewareMode: true } });
try {
  const { default: NotFound } = await server.ssrLoadModule('/src/pages/NotFound.jsx');
  const html = renderToStaticMarkup(createElement(MemoryRouter, null, createElement(NotFound)));
  assert.match(html, /404 \/ PAGE NOT FOUND/);
  assert.match(html, /href="\/#catalogue"/);
  assert.match(html, /href="\/"/);
  const images = [...html.matchAll(/<img[^>]+src="([^"]+)"/g)];
  assert.equal(images.length, 48, 'The mosaic must contain all three complete digits');
  for (const [, src] of images) assert.ok(existsSync(`public${src}`), `Missing card artwork: ${src}`);
  console.log('404 markup, recovery links, and all 48 card images verified.');
} finally {
  await server.close();
}
