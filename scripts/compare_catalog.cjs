const fs = require('fs');
const path = require('path');

// 1. cards_data.json
const cardsDataJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../cards_data.json'), 'utf8'));

// 2. HTML unique card links
const htmlPath = path.resolve(__dirname, '../../www.paisabazaar.com/www.paisabazaar.com/credit-cards/index.html');
const html = fs.readFileSync(htmlPath, 'utf8');
const matches = [...html.matchAll(/<a\s+target="_blank"\s+href="([^"]+)">\s*<h3[^>]*>([^<]+)<\/h3>/gi)];
const htmlCardsMap = new Map();
for (const m of matches) {
  const url = m[1].replace('http:', 'https:').replace(/\/$/, '') + '/';
  const title = m[2].trim();
  if (!htmlCardsMap.has(url)) {
    htmlCardsMap.set(url, title);
  }
}

console.log('Cards in cards_data.json:', cardsDataJson.length);
console.log('Unique card links in HTML:', htmlCardsMap.size);

// Check how many cards in cards_data.json have knowMore matching htmlCards
let foundCount = 0;
const missingInHtml = [];
const missingInJson = [];

const jsonUrlMap = new Map();
for (const c of cardsDataJson) {
  const normUrl = (c.knowMore || '').replace('http:', 'https:').replace(/\/$/, '') + '/';
  jsonUrlMap.set(normUrl, c);
}

for (const [url, title] of htmlCardsMap.entries()) {
  if (jsonUrlMap.has(url)) {
    foundCount++;
  } else {
    missingInJson.push({ title, url });
  }
}

for (const c of cardsDataJson) {
  const normUrl = (c.knowMore || '').replace('http:', 'https:').replace(/\/$/, '') + '/';
  if (!htmlCardsMap.has(normUrl)) {
    missingInHtml.push({ name: c.name, url: c.knowMore });
  }
}

console.log('HTML cards matched in cards_data.json:', foundCount);
console.log('HTML cards missing in cards_data.json (' + missingInJson.length + '):', missingInJson);
console.log('cards_data.json cards not in HTML (' + missingInHtml.length + '):', missingInHtml.slice(0, 10));
