import assert from 'node:assert/strict';

const origin = new URL(process.argv[2] || 'https://bookmycreditcard.in');
const get = async path => {
  const url = new URL(path, origin);
  url.searchParams.set('deployment-check', process.env.GITHUB_SHA || Date.now());
  const response = await fetch(url, { signal: AbortSignal.timeout(30_000) });
  assert.equal(response.status, 200, `HTTP ${response.status} for ${url.pathname}`);
  return response;
};

const html = await (await get('/')).text();
assert(!html.includes('/src/main.jsx'), 'Live site serves source HTML instead of the production build; check the FTP destination');
const assets = [...html.matchAll(/(?:src|href)="(\/assets\/[^"?]+\.(?:js|css))"/g)].map(match => match[1]);
assert(assets.some(path => path.endsWith('.js')), 'No production JavaScript entry found');
assert(assets.some(path => path.endsWith('.css')), 'No production stylesheet found');
for (const path of new Set(assets)) {
  const response = await get(path);
  const type = response.headers.get('content-type') || '';
  assert(path.endsWith('.js') ? /(?:javascript|ecmascript)/i.test(type) : /text\/css/i.test(type), `Wrong MIME type ${type} for ${path}`);
  assert(!/^\s*</.test(await response.text()), `HTML returned instead of ${path}`);
}
console.log(`Production HTML, JavaScript and CSS verified at ${origin.origin}`);
