import { creditCards } from '../src/data/cards.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('Cards in cards.js:', creditCards.length);

const htmlPath = path.resolve(__dirname, '../../www.paisabazaar.com/www.paisabazaar.com/credit-cards/index.html');
const html = fs.readFileSync(htmlPath, 'utf8');
const matches = [...html.matchAll(/<a\s+target="_blank"\s+href="([^"]+)">\s*<h3[^>]*>([^<]+)<\/h3>/gi)];
const htmlCards = [];
const seen = new Set();
for (const m of matches) {
  const url = m[1].replace('http:', 'https:').replace(/\/$/, '') + '/';
  const title = m[2].trim();
  if (!seen.has(url)) {
    seen.add(url);
    htmlCards.push({ url, title });
  }
}

console.log('Unique HTML cards:', htmlCards.length);

// Compare by name similarity
const cardsJsNames = creditCards.map(c => ({ id: c.id, name: c.name.toLowerCase(), orig: c.name }));
for (const hc of htmlCards) {
  const match = cardsJsNames.find(c => c.name.includes(hc.title.toLowerCase()) || hc.title.toLowerCase().includes(c.name));
  if (match) {
    // matched
  } else {
    console.log('No direct name match in cards.js for HTML card:', hc.title, '->', hc.url);
  }
}
