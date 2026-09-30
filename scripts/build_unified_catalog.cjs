const fs = require('fs');
const path = require('path');

// 1. Load cards_data.json
const cardsJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../cards_data.json'), 'utf8'));

// 2. Load downloaded HTML to extract additional cards and exact links
const html = fs.readFileSync(path.resolve(__dirname, '../../www.paisabazaar.com/www.paisabazaar.com/credit-cards/index.html'), 'utf8');
const matches = [...html.matchAll(/<a\s+target="_blank"\s+href="(https:\/\/www\.paisabazaar\.com\/[^"]+)">\s*<h3[^>]*>([^<]+)<\/h3>/gi)];

const htmlCards = new Map();
for (const m of matches) {
  const fullUrl = m[1].replace('http:', 'https:').replace(/\/$/, '') + '/';
  const name = m[2].trim();
  if (!htmlCards.has(fullUrl)) {
    // extract slice around this card to get image and fees
    const idx = html.indexOf(m[1]);
    let image = '';
    let joiningFee = '';
    let annualFee = '';
    let benefits = [];
    let categories = [];

    if (idx !== -1) {
      const slice = html.substring(Math.max(0, idx - 1800), Math.min(html.length, idx + 2500));
      const imgMatch = slice.match(/srcSet="[^"]*url=([^"&]+)/i) || slice.match(/src="(\/_next\/image\/\?url=([^"&]+)[^"]*)"/i);
      if (imgMatch) image = decodeURIComponent(imgMatch[1]);
      
      const jfMatch = slice.match(/Joining Fee:?[\s\S]*?(₹[\d,]+|Free|Nil)/i);
      if (jfMatch) joiningFee = jfMatch[1];

      const afMatch = slice.match(/(?:Annual\/Renewal Fee|Annual Fee|Renewal Fee):?[\s\S]*?(₹[\d,]+|Free|Nil)/i);
      if (afMatch) annualFee = afMatch[1];

      const catMatches = [...slice.matchAll(/<p class="text-xxs font-medium text-text-primary">([^<]+)<\/p>/gi)].map(x => x[1]);
      if (catMatches.length > 0) categories = catMatches;

      const benMatches = [...slice.matchAll(/<p class="text-xs text-text-secondary line-clamp-2">([^<]+)<\/p>/gi)].map(x => x[1]);
      if (benMatches.length > 0) benefits = benMatches;
    }

    htmlCards.set(fullUrl, {
      name,
      url: fullUrl,
      image,
      joiningFee,
      annualFee,
      categories,
      benefits
    });
  }
}

console.log('Cards in cards_data.json:', cardsJson.length);
console.log('Unique cards from HTML:', htmlCards.size);

// Map bank names to bank IDs
const bankMap = {
  'HDFC Bank': 'bank_2',
  'Axis Bank': 'bank_27',
  'SBI Cards': 'bank_3',
  'SBI Bank': 'bank_3',
  'ICICI Bank': 'bank_6',
  'Kotak Mahindra Bank': 'bank_17',
  'IndusInd Bank': 'bank_67',
  'RBL Bank': 'bank_66',
  'YES BANK': 'bank_65',
  'IDFC FIRST Bank': 'bank_281',
  'American Express': 'bank_4',
  'AU Small Finance Bank': 'bank_357',
  'Federal Bank': 'bank_32',
  'HSBC Bank': 'bank_1',
  'Standard Chartered Bank': 'bank_28',
  'BOBCARD': 'bank_5',
  'Bank of Baroda': 'bank_5',
  'Punjab National Bank': 'bank_43',
  'SBM Bank': 'bank_419'
};

function inferBank(name, url) {
  for (const [bName, bId] of Object.entries(bankMap)) {
    if (name.toLowerCase().includes(bName.toLowerCase())) return { name: bName, id: bId };
  }
  if (url.includes('/hdfc-bank/')) return { name: 'HDFC Bank', id: 'bank_2' };
  if (url.includes('/axis-bank/')) return { name: 'Axis Bank', id: 'bank_27' };
  if (url.includes('/sbi-bank/')) return { name: 'SBI Cards', id: 'bank_3' };
  if (url.includes('/icici-bank/')) return { name: 'ICICI Bank', id: 'bank_6' };
  if (url.includes('/idfc-first-bank/')) return { name: 'IDFC FIRST Bank', id: 'bank_281' };
  if (url.includes('/rbl-bank/')) return { name: 'RBL Bank', id: 'bank_66' };
  if (url.includes('/indusind-bank/')) return { name: 'IndusInd Bank', id: 'bank_67' };
  if (url.includes('/yes-bank/')) return { name: 'YES BANK', id: 'bank_65' };
  if (url.includes('/hsbc-bank/')) return { name: 'HSBC Bank', id: 'bank_1' };
  if (url.includes('/kotak-mahindra-bank/')) return { name: 'Kotak Mahindra Bank', id: 'bank_17' };
  if (url.includes('/au-small-finance-bank/')) return { name: 'AU Small Finance Bank', id: 'bank_357' };
  if (url.includes('/federal-bank/')) return { name: 'Federal Bank', id: 'bank_32' };
  if (url.includes('/standard-chartered-bank/')) return { name: 'Standard Chartered Bank', id: 'bank_28' };
  if (url.includes('/amex-bank/')) return { name: 'American Express', id: 'bank_4' };
  if (url.includes('duet')) return { name: 'RBL Bank', id: 'bank_66' };
  return { name: 'Other Bank', id: 'bank_other' };
}

function parseFee(feeStr, defaultNum) {
  if (typeof feeStr === 'number') return feeStr;
  if (!feeStr) return defaultNum;
  if (/free|nil|zero/i.test(feeStr)) return 0;
  const match = feeStr.replace(/,/g, '').match(/\d+/);
  return match ? parseInt(match[0], 10) : defaultNum;
}

// Build unified list of cards
const unifiedCards = [];
const seenUrls = new Set();
let nextId = 1;

// First process cards_data.json
for (const card of cardsJson) {
  const normUrl = (card.knowMore || '').replace('http:', 'https:').replace(/\/$/, '') + '/';
  seenUrls.add(normUrl);
  const bankInfo = inferBank(card.bank || card.name, normUrl);
  const route = normUrl ? new URL(normUrl).pathname : '';

  unifiedCards.push({
    id: nextId++,
    name: card.name,
    bank: bankInfo.id,
    bankName: card.bank || bankInfo.name,
    image: card.image,
    categories: Array.isArray(card.categories) ? card.categories.map(c => typeof c === 'string' ? c.toLowerCase() : (c.name || '').toLowerCase().replace(/\s+/g, '-')) : [],
    joiningFee: parseFee(card.joiningFee, 500),
    annualFee: parseFee(card.annualFee, 500),
    benefits: Array.isArray(card.benefits) ? card.benefits.map(b => typeof b === 'string' ? b : b.text || '') : [],
    knowMore: normUrl,
    route: route,
    checkEligibility: card.checkEligibility || '/credit-card-eligibility'
  });
}

// Then add cards from HTML that were not in cards_data.json
for (const [url, hCard] of htmlCards.entries()) {
  if (!seenUrls.has(url)) {
    seenUrls.add(url);
    const bankInfo = inferBank(hCard.name, url);
    const route = new URL(url).pathname;

    unifiedCards.push({
      id: nextId++,
      name: hCard.name,
      bank: bankInfo.id,
      bankName: bankInfo.name,
      image: hCard.image || 'https://www.paisabazaar.com/wp-content/uploads/2019/10/HDFC-Infinia-Credit-Card.png',
      categories: hCard.categories.length > 0 ? hCard.categories.map(c => c.toLowerCase().replace(/\s+/g, '-')) : ['rewards'],
      joiningFee: parseFee(hCard.joiningFee, 500),
      annualFee: parseFee(hCard.annualFee, 500),
      benefits: hCard.benefits.length > 0 ? hCard.benefits : ['Exciting rewards and cashback across daily spends', 'Accepted worldwide with contactless tap and pay'],
      knowMore: url,
      route: route,
      checkEligibility: '/credit-card-eligibility'
    });
  }
}

console.log('Total unified cards created:', unifiedCards.length);
fs.writeFileSync(path.resolve(__dirname, 'unified_cards_test.json'), JSON.stringify(unifiedCards, null, 2));
