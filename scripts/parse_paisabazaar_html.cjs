const fs = require('fs');
const path = require('path');

const htmlPath = path.resolve(__dirname, '../../www.paisabazaar.com/www.paisabazaar.com/credit-cards/index.html');
const html = fs.readFileSync(htmlPath, 'utf8');
// Look for card containers

// In the HTML, each card has an image, compare checkbox, name, categories, benefits, fees, knowMore link, checkEligibility link.
// Let's find each card container.
const cardsData = [];
// Notice cards have class containing "border border-border-primary" or similar
const matches = [...html.matchAll(/<a\s+target="_blank"\s+href="([^"]+)">\s*<h3[^>]*>([^<]+)<\/h3>/gi)];
console.log('Matches count:', matches.length);
const seen = new Set();
const uniqueCards = [];
for (const m of matches) {
  if (!seen.has(m[1])) {
    seen.add(m[1]);
    uniqueCards.push({ url: m[1], title: m[2] });
  }
}
console.log('Unique cards count:', uniqueCards.length);
console.log('List of all unique cards:');
console.log(JSON.stringify(uniqueCards, null, 2));


// If the split worked:
if (cardBlocks.length > 1) {
  for (let i = 1; i < cardBlocks.length; i++) {
    const block = cardBlocks[i];
    // Card title and URL
    const titleMatch = block.match(/<a\s+target="_blank"\s+href="(https:\/\/www\.paisabazaar\.com\/[^"]+)">\s*<h3[^>]*>([^<]+)<\/h3>\s*<\/a>/i);
    if (!titleMatch) continue;
    const url = titleMatch[1];
    const name = titleMatch[2].trim();

    // Image
    const imgMatch = block.match(/src="(\/_next\/image\/\?url=([^"&]+)[^"]*)"/i) || block.match(/srcSet="[^"]*url=([^"&]+)/i);
    const image = imgMatch ? decodeURIComponent(imgMatch[2] || imgMatch[1]) : '';

    // Joining fee & Annual fee
    const feeMatches = [...block.matchAll(/(?:Joining Fee|Annual\/Renewal Fee)[\s\S]*?(₹[\d,]+|Free|Nil)/gi)];
    const joiningFeeMatch = block.match(/Joining Fee:?[\s\S]*?(₹[\d,]+|Free|Nil)/i);
    const annualFeeMatch = block.match(/(?:Annual\/Renewal Fee|Annual Fee|Renewal Fee):?[\s\S]*?(₹[\d,]+|Free|Nil)/i);

    // Categories
    const catMatches = [...block.matchAll(/<p class="text-xxs font-medium text-text-primary">([^<]+)<\/p>/gi)].map(m => m[1]);

    // Benefits
    // usually in bullet points or paragraphs with icons
    const benefitMatches = [...block.matchAll(/<p class="text-xs text-text-secondary line-clamp-2">([^<]+)<\/p>/gi)].map(m => m[1]);

    // Check Eligibility
    const elMatch = block.match(/href="(https:\/\/www\.paisabazaar\.com\/cards\/[^"]+)"/i);

    cardsData.push({
      name,
      url,
      image,
      categories: catMatches,
      joiningFee: joiningFeeMatch ? joiningFeeMatch[1] : '',
      annualFee: annualFeeMatch ? annualFeeMatch[1] : '',
      benefits: benefitMatches,
      checkEligibility: elMatch ? elMatch[1] : ''
    });
  }
}

console.log('Parsed card blocks count:', cardsData.length);
if (cardsData.length > 0) {
  console.log('Sample parsed card 1:', JSON.stringify(cardsData[0], null, 2));
  console.log('Sample parsed card 2:', JSON.stringify(cardsData[1], null, 2));
}

// Compare with credit-card-app/cards_data.json
const existingCards = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../cards_data.json'), 'utf8'));
console.log('Existing cards count in cards_data.json:', existingCards.length);

