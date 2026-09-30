const fs = require('fs');
const path = require('path');

// 1. Require the extracted live cards
const crossScript = fs.readFileSync(path.resolve(__dirname, 'cross_audit_live_cards.cjs'), 'utf8');
const startMarker = 'const liveCardsJsonText = `';
const endMarker = '`;';
const startIdx = crossScript.indexOf(startMarker);
const endIdx = crossScript.indexOf(endMarker, startIdx + startMarker.length);
const jsonStr = crossScript.substring(startIdx + startMarker.length, endIdx);
const liveCardsData = JSON.parse(jsonStr);

console.log('Loaded live cards data count:', liveCardsData.length);

// 2. Read cardDetailsData.json
const cardDetailsPath = path.resolve(__dirname, '../src/data/cardDetailsData.json');
const cardDetails = JSON.parse(fs.readFileSync(cardDetailsPath, 'utf8'));

let updatedDetailCount = 0;
cardDetails.forEach(cd => {
  const cdRoute = (cd.route || '').replace(/\/$/, '');
  const lcWords = cd.name.toLowerCase().replace(/[^a-z0-9]/g, ' ').split(/\s+/).filter(w => w.length > 2 && w !== 'bank' && w !== 'credit' && w !== 'card');

  const liveMatch = liveCardsData.find(ld => {
    const ldRoute = ld.read_more_url.replace(/\/$/, '').replace('https://www.paisabazaar.com', '');
    const ldWords = ld.card_name.toLowerCase().replace(/[^a-z0-9]/g, ' ').split(/\s+/).filter(w => w.length > 2 && w !== 'bank' && w !== 'credit' && w !== 'card');
    if (cdRoute === ldRoute) return true;
    if (cd.aliases && cd.aliases.some(a => a.replace(/\/$/, '') === ldRoute)) return true;
    if (lcWords.length > 0 && lcWords.every(w => ldWords.includes(w))) return true;
    return false;
  });

  if (liveMatch && liveMatch.benefits && liveMatch.benefits.length > 0) {
    if (!cd.benefits || cd.benefits.length === 0) {
      cd.benefits = liveMatch.benefits;
      updatedDetailCount++;
    }
    if (!cd.highlight) {
      cd.highlight = liveMatch.benefits[0];
    }
  }
});

console.log('Updated benefits in cardDetailsData.json for cards:', updatedDetailCount);
fs.writeFileSync(cardDetailsPath, JSON.stringify(cardDetails, null, 2), 'utf8');

// 3. Update cards.js
const cardsJsPath = path.resolve(__dirname, '../src/data/cards.js');
let cardsJs = fs.readFileSync(cardsJsPath, 'utf8');
const cardsModule = require('../src/data/cards.js');
const list = cardsModule.creditCards;

list.forEach(card => {
  if (!card.benefits || card.benefits.length === 0) {
    const cdRoute = (card.route || '').replace(/\/$/, '');
    const lcWords = card.name.toLowerCase().replace(/[^a-z0-9]/g, ' ').split(/\s+/).filter(w => w.length > 2 && w !== 'bank' && w !== 'credit' && w !== 'card');

    const liveMatch = liveCardsData.find(ld => {
      const ldRoute = ld.read_more_url.replace(/\/$/, '').replace('https://www.paisabazaar.com', '');
      const ldWords = ld.card_name.toLowerCase().replace(/[^a-z0-9]/g, ' ').split(/\s+/).filter(w => w.length > 2 && w !== 'bank' && w !== 'credit' && w !== 'card');
      if (cdRoute === ldRoute) return true;
      if (card.aliases && card.aliases.some(a => a.replace(/\/$/, '') === ldRoute)) return true;
      if (lcWords.length > 0 && lcWords.every(w => ldWords.includes(w))) return true;
      return false;
    });

    if (liveMatch && liveMatch.benefits && liveMatch.benefits.length > 0) {
      const targetStr = '"id": ' + card.id + ',\n    "name": "' + card.name + '"';
      const idx = cardsJs.indexOf(targetStr);
      if (idx !== -1) {
        const nextIdIdx = cardsJs.indexOf('"id": ' + (card.id + 1) + ',', idx);
        const searchScopeEnd = nextIdIdx !== -1 ? nextIdIdx : idx + 1200;
        const emptyBenefitsStr = '"benefits": []';
        const benIdx = cardsJs.indexOf(emptyBenefitsStr, idx);
        if (benIdx !== -1 && benIdx < searchScopeEnd) {
          const replacement = '"benefits": [\n      {\n        "icon": G,\n        "text": ' + JSON.stringify(liveMatch.benefits[0]) + '\n      },\n      {\n        "icon": R,\n        "text": ' + JSON.stringify(liveMatch.benefits[1] || liveMatch.benefits[0]) + '\n      }' + (liveMatch.benefits[2] ? ',\n      {\n        "icon": R,\n        "text": ' + JSON.stringify(liveMatch.benefits[2]) + '\n      }' : '') + '\n    ]';
          cardsJs = cardsJs.slice(0, benIdx) + replacement + cardsJs.slice(benIdx + emptyBenefitsStr.length);
          console.log('Replaced benefits for card ' + card.id + ': ' + card.name);
        }
      }
    }
  }
});

fs.writeFileSync(cardsJsPath, cardsJs, 'utf8');
console.log('Updated cards.js successfully!');
