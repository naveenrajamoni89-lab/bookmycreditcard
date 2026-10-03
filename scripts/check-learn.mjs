import assert from 'node:assert/strict';
import { createServer } from 'vite';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';

// No browser: check rendered article structure and shareable guide selection.
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { default: Basics } = await server.ssrLoadModule('/src/pages/CreditCardBasics.jsx');
  const { default: Guides } = await server.ssrLoadModule('/src/pages/CreditCardGuides.jsx');
  const { default: Footer } = await server.ssrLoadModule('/src/components/Footer.jsx');
  const { guidesHubContent } = await server.ssrLoadModule('/src/data/learnContent.js');
  const render = (Page, route) => renderToStaticMarkup(createElement(MemoryRouter, { initialEntries: [route] }, createElement(Page)));
  const basics = render(Basics, '/credit-card-basics');
  assert.ok(render(Footer, '/credit-card-basics').includes('Site Footer'));
  assert.equal((basics.match(/<h1>/g) || []).length, 1);
  assert.equal((basics.match(/<details>/g) || []).length, 3);
  for (const id of ['overview', 'terms', 'billing', 'habits', 'questions']) {
    assert.ok(basics.includes(`href="#${id}"`) && basics.includes(`id="${id}"`));
  }
  for (const guide of guidesHubContent.guides) {
    const html = render(Guides, `/credit-card-guides?guide=${guide.id}`);
    assert.ok(html.includes(`id="guide-title">${guide.title.replaceAll('&', '&amp;')}`), guide.id);
    const selectedLink = html.match(/<a\b[^>]*aria-current="page"[^>]*>/g)?.find(link => link.includes(`?guide=${guide.id}"`));
    assert.ok(selectedLink, guide.id);
    assert.equal((html.match(/<ol class="learn-instructions">/g) || []).length, 1);
  }
  assert.ok(render(Guides, '/credit-card-guides?guide=missing').includes(guidesHubContent.guides[0].title));
  console.log('Learn checks passed: article anchors, native FAQs, all 8 guide links and unknown-guide fallback.');
} finally {
  await server.close();
}
