const fs = require('fs');
const path = require('path');

const cardsJsPath = path.resolve(__dirname, '../src/data/cards.js');
let cardsJs = fs.readFileSync(cardsJsPath, 'utf8');

const map = {
  74: [
    'Instant virtual card issuance with zero physical documentation',
    'UPI scan & pay enabled via RuPay network',
    'Lifetime Free card with no annual charges'
  ],
  76: [
    '3% CashPoints on grocery, supermarket, dining & PayZapp spends',
    '2% CashPoints on utility spends and 1% on other UPI transactions',
    'Convenient virtual card linked directly to UPI apps'
  ],
  77: [
    'Up to 5% Choice Cashback on 2 chosen merchant categories',
    '3% cashback on Swiggy and Zomato food delivery',
    'Digital-first mobile onboarding on PayZapp'
  ],
  78: [
    'Pay in 3 flexible zero-interest installments on purchases',
    '1% unlimited cashback on all retail & online spends',
    'Zero joining fee digital credit card'
  ]
};

Object.entries(map).forEach(([id, b]) => {
  const targetStr = '"id": ' + id + ',';
  const idx = cardsJs.indexOf(targetStr);
  if (idx !== -1) {
    const emptyBenefitsStr = '"benefits": []';
    const benIdx = cardsJs.indexOf(emptyBenefitsStr, idx);
    if (benIdx !== -1 && benIdx < idx + 1200) {
      const replacement = '"benefits": [\n      {\n        "icon": G,\n        "text": ' + JSON.stringify(b[0]) + '\n      },\n      {\n        "icon": R,\n        "text": ' + JSON.stringify(b[1]) + '\n      },\n      {\n        "icon": R,\n        "text": ' + JSON.stringify(b[2]) + '\n      }\n    ]';
      cardsJs = cardsJs.slice(0, benIdx) + replacement + cardsJs.slice(benIdx + emptyBenefitsStr.length);
      console.log('Populated benefits for card ' + id);
    }
  }
});

fs.writeFileSync(cardsJsPath, cardsJs, 'utf8');
console.log('Done populating remaining benefits!');
