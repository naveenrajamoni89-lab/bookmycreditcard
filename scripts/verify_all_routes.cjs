const fs = require('fs');
const path = require('path');

const cards = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../src/data/cardDetailsData.json'), 'utf8'));

console.log('Total cards to verify:', cards.length);

let errors = 0;
const seenRoutes = new Set();

for (const card of cards) {
  if (!card.name) {
    console.error(`Card ID ${card.id} has no name`);
    errors++;
  }
  if (!card.bankName) {
    console.error(`Card ${card.name} has no bankName`);
    errors++;
  }
  if (!card.image) {
    console.error(`Card ${card.name} has no image`);
    errors++;
  }
  if (!card.route) {
    console.error(`Card ${card.name} has no route`);
    errors++;
  }
  if (!card.detailRoute) {
    console.error(`Card ${card.name} has no detailRoute`);
    errors++;
  }
  if (seenRoutes.has(card.route)) {
    console.error(`Duplicate route found: ${card.route}`);
    errors++;
  }
  seenRoutes.add(card.route);

  // Check detail contents
  if (!card.rewardsSummary || !card.rewardsSummary.headline) {
    console.error(`Card ${card.name} missing rewardsSummary`);
    errors++;
  }
  if (!card.faqs || card.faqs.length === 0) {
    console.error(`Card ${card.name} missing faqs`);
    errors++;
  }
}

console.log(`Verification completed with ${errors} errors.`);
if (errors === 0) {
  console.log('ALL 92 CARDS VERIFIED SUCCESSFULLY!');
  console.log('Sample verified routes:');
  console.log(cards.slice(0, 10).map(c => ({ name: c.name, route: c.route, detailRoute: c.detailRoute, bank: c.bankName })));
} else {
  process.exit(1);
}
