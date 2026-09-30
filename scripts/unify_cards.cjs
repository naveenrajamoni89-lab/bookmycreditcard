const fs = require('fs');
const path = require('path');

const cardsJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../cards_data.json'), 'utf8'));
console.log('cards_data.json count:', cardsJson.length);

const html = fs.readFileSync(path.resolve(__dirname, '../../www.paisabazaar.com/www.paisabazaar.com/credit-cards/index.html'), 'utf8');
const matches = [...html.matchAll(/<a\s+target="_blank"\s+href="(https:\/\/www\.paisabazaar\.com\/[^"]+)">\s*<h3[^>]*>([^<]+)<\/h3>/gi)];
const htmlCards = [];
const seen = new Set();
for (const m of matches) {
  const url = m[1].replace('http:', 'https:').replace(/\/$/, '') + '/';
  if (!seen.has(url)) {
    seen.add(url);
    htmlCards.push({ url, title: m[2].trim() });
  }
}
console.log('HTML unique cards:', htmlCards.length);

// Let's see union of all cards
const allByUrl = new Map();
for (const c of cardsJson) {
  const url = (c.knowMore || '').replace('http:', 'https:').replace(/\/$/, '') + '/';
  allByUrl.set(url, { source: 'json', ...c, url });
}
for (const h of htmlCards) {
  if (allByUrl.has(h.url)) {
    const existing = allByUrl.get(h.url);
    allByUrl.set(h.url, { ...existing, htmlTitle: h.title, inHtml: true });
  } else {
    allByUrl.set(h.url, { source: 'html_only', name: h.title, url: h.url, inHtml: true });
  }
}
console.log('Total unified cards:', allByUrl.size);

// Let's see if the HTML blocks have full info for the 24 cards
console.log('Testing HTML extraction for html_only cards:');
const htmlCardBlocks = [...html.matchAll(/<a\s+target="_blank"\s+href="(https:\/\/www\.paisabazaar\.com\/[^"]+)">\s*<h3[^>]*>([^<]+)<\/h3>/gi)];
for (const [url, card] of allByUrl.entries()) {
  if (card.source === 'html_only') {
    const idx = html.indexOf(url);
    if (idx !== -1) {
      const slice = html.substring(Math.max(0, idx - 1500), Math.min(html.length, idx + 2500));
      const imgMatch = slice.match(/srcSet="[^"]*url=([^"&]+)/i) || slice.match(/src="(\/_next\/image\/\?url=([^"&]+)[^"]*)"/i);
      const feeMatch = slice.match(/(?:Joining Fee|Joining fee)[\s\S]*?(₹[\d,]+|Free|Nil)/i);
      const annMatch = slice.match(/(?:Annual\/Renewal Fee|Annual Fee|Renewal Fee)[\s\S]*?(₹[\d,]+|Free|Nil)/i);
      console.log(`Card: ${card.name} | Image: ${Boolean(imgMatch)} | Fee: ${feeMatch?.[1]} | Ann: ${annMatch?.[1]}`);
    }
  }
}

