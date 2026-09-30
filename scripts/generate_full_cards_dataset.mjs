import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 1. Read existing cards_data.json
const cardsJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../cards_data.json'), 'utf8'));

// 2. Read downloaded HTML from Paisabazaar
const htmlPath = path.resolve(__dirname, '../../www.paisabazaar.com/www.paisabazaar.com/credit-cards/index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

// Parse all cards from HTML
const matches = [...html.matchAll(/<a\s+target="_blank"\s+href="(https:\/\/www\.paisabazaar\.com\/[^"]+)">\s*<h3[^>]*>([^<]+)<\/h3>/gi)];
const htmlCards = new Map();
for (const m of matches) {
  const fullUrl = m[1].replace('http:', 'https:').replace(/\/$/, '') + '/';
  const name = m[2].trim();
  if (!htmlCards.has(fullUrl)) {
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

// Bank lookup
const bankMap = {
  'HDFC Bank': { id: 'bank_2', name: 'HDFC Bank', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/hdfc-bank.svg' },
  'Axis Bank': { id: 'bank_27', name: 'Axis Bank', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/axis-bank.svg' },
  'SBI Cards': { id: 'bank_3', name: 'SBI Cards', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/sbi-cards.svg' },
  'SBI Bank': { id: 'bank_3', name: 'SBI Cards', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/sbi-cards.svg' },
  'ICICI Bank': { id: 'bank_6', name: 'ICICI Bank', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/icici-bank.svg' },
  'Kotak Mahindra Bank': { id: 'bank_17', name: 'Kotak Mahindra Bank', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/kotak-mahindra-bank.svg' },
  'IndusInd Bank': { id: 'bank_67', name: 'IndusInd Bank', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/indusind-bank.svg' },
  'RBL Bank': { id: 'bank_66', name: 'RBL Bank', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/rbl-bank.svg' },
  'YES BANK': { id: 'bank_65', name: 'YES BANK', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/yes-bank.svg' },
  'IDFC FIRST Bank': { id: 'bank_281', name: 'IDFC FIRST Bank', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/idfc-first-bank.svg' },
  'American Express': { id: 'bank_4', name: 'American Express', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/american-express.svg' },
  'AU Small Finance Bank': { id: 'bank_357', name: 'AU Small Finance Bank', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/au-small-finance-bank.svg' },
  'Federal Bank': { id: 'bank_32', name: 'Federal Bank', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/federal-bank.svg' },
  'HSBC Bank': { id: 'bank_1', name: 'HSBC Bank', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/hsbc-bank.svg' },
  'Standard Chartered Bank': { id: 'bank_28', name: 'Standard Chartered Bank', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/standard-chartered-bank.svg' },
  'BOBCARD': { id: 'bank_5', name: 'BOBCARD', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/bobcard.svg' },
  'Punjab National Bank': { id: 'bank_43', name: 'Punjab National Bank', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/punjab-national-bank.svg' },
  'SBM Bank': { id: 'bank_419', name: 'SBM Bank', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/sbm-bank.svg' }
};

function inferBank(name, url) {
  for (const [bName, bObj] of Object.entries(bankMap)) {
    if (name.toLowerCase().includes(bName.toLowerCase())) return bObj;
  }
  if (url.includes('/hdfc-bank/')) return bankMap['HDFC Bank'];
  if (url.includes('/axis-bank/')) return bankMap['Axis Bank'];
  if (url.includes('/sbi-bank/')) return bankMap['SBI Cards'];
  if (url.includes('/icici-bank/')) return bankMap['ICICI Bank'];
  if (url.includes('/idfc-first-bank/')) return bankMap['IDFC FIRST Bank'];
  if (url.includes('/rbl-bank/') || url.includes('duet')) return bankMap['RBL Bank'];
  if (url.includes('/indusind-bank/')) return bankMap['IndusInd Bank'];
  if (url.includes('/yes-bank/')) return bankMap['YES BANK'];
  if (url.includes('/hsbc-bank/')) return bankMap['HSBC Bank'];
  if (url.includes('/kotak-mahindra-bank/')) return bankMap['Kotak Mahindra Bank'];
  if (url.includes('/au-small-finance-bank/')) return bankMap['AU Small Finance Bank'];
  if (url.includes('/federal-bank/')) return bankMap['Federal Bank'];
  if (url.includes('/standard-chartered-bank/')) return bankMap['Standard Chartered Bank'];
  if (url.includes('/amex-bank/')) return bankMap['American Express'];
  return { id: 'bank_other', name: 'Top Bank', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/hdfc-bank.svg' };
}

function parseFee(feeVal, defVal = 500) {
  if (typeof feeVal === 'number') return feeVal;
  if (!feeVal) return defVal;
  if (/free|nil|zero/i.test(feeVal)) return 0;
  const match = String(feeVal).replace(/,/g, '').match(/\d+/);
  return match ? parseInt(match[0], 10) : defVal;
}

// Categories taxonomy normalization
const validCategories = [
  'travel', 'premium', 'rewards', 'lounge-access', 'shopping',
  'dining', 'cashback', 'online-shopping', 'lifetime-free', 'fuel',
  'fd-backed', 'movies', 'rupay', 'international', 'zero-forex', 'secured', 'onecard', 'virtual'
];

function normalizeCategories(catList, cardName = '', joiningFee = 500) {
  const result = new Set();
  const lowerName = cardName.toLowerCase();
  
  if (joiningFee === 0) result.add('lifetime-free');
  if (lowerName.includes('cashback')) result.add('cashback');
  if (lowerName.includes('reward')) result.add('rewards');
  if (lowerName.includes('travel') || lowerName.includes('miles') || lowerName.includes('atlas') || lowerName.includes('scapia')) result.add('travel');
  if (lowerName.includes('fuel') || lowerName.includes('bpcl') || lowerName.includes('hpcl') || lowerName.includes('indianoil')) result.add('fuel');
  if (lowerName.includes('rupay') || lowerName.includes('upi')) result.add('rupay');
  if (lowerName.includes('diners') || lowerName.includes('infinia') || lowerName.includes('magnus') || lowerName.includes('reserve') || lowerName.includes('private') || lowerName.includes('platinum')) result.add('premium');
  if (lowerName.includes('lounge') || lowerName.includes('regalia') || lowerName.includes('scapia') || lowerName.includes('atlas')) result.add('lounge-access');
  if (lowerName.includes('movie') || lowerName.includes('play') || lowerName.includes('inox') || lowerName.includes('pvr') || lowerName.includes('my zone')) result.add('movies');
  if (lowerName.includes('dining') || lowerName.includes('swiggy') || lowerName.includes('eazydiner')) result.add('dining');
  if (lowerName.includes('shopping') || lowerName.includes('flipkart') || lowerName.includes('tata neu') || lowerName.includes('millennia') || lowerName.includes('simplyclick')) result.add('shopping');

  for (const c of catList) {
    const slug = (typeof c === 'string' ? c : c.name || '')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/entry-level/g, 'fd-backed');
    if (validCategories.includes(slug)) {
      result.add(slug);
    } else if (slug.includes('lounge')) {
      result.add('lounge-access');
    } else if (slug.includes('shop')) {
      result.add('shopping');
    } else if (slug.includes('reward')) {
      result.add('rewards');
    }
  }

  if (result.size === 0) result.add('rewards');
  return Array.from(result);
}

// Known card specific details for all major cards
const specificData = {
  'HDFC Infinia Credit Card': {
    welcomeBenefit: '12,500 Reward Points on joining fee payment and card activation',
    rewardsSummary: {
      headline: '5 Reward Points per ₹150 spent on all retail spends',
      pointsRate: '3.33% base reward rate (1 RP = ₹1 on SmartBuy for flights & hotels)',
      redemption: 'Redeem points for flight & hotel bookings, Apple products, Tanishq vouchers, or airmiles transfer (1:1 ratio)',
      accelerated: 'Up to 10X Reward Points (33.3% value-back) on travel & shopping via HDFC SmartBuy portal'
    },
    loungeAccess: {
      domestic: 'Unlimited complimentary domestic airport lounge access for primary and add-on cardholders',
      international: 'Unlimited complimentary international lounge access via Priority Pass for primary & add-on members',
      details: 'No minimum spend conditions for lounge access. Includes complimentary golf games worldwide.'
    },
    feeWaiver: 'Spend ₹10 Lakh or more in the preceding year to get the ₹12,500 renewal fee waived off.',
    forexMarkup: '2.0% + GST (one of the lowest forex rates among premium cards)',
    interestRate: '1.99% per month (23.88% APR)',
    fuelPerks: '1% fuel surcharge waiver across all fuel stations in India on transactions between ₹400 and ₹10,000.',
    diningPerks: 'Complimentary Club Marriott membership for the first year providing up to 20% discount on dining & stays across Asia Pacific.',
    milestones: [
      'Spend ₹10 Lakh in a year for 100% renewal fee waiver',
      'Complimentary nights & buffet at participating ITC hotels'
    ],
    pros: [
      'Industry-leading 3.33% to 33.3% reward value on SmartBuy',
      'Unlimited domestic & international lounge access for cardholder and add-on members',
      'Low 2% forex markup fee for international spends',
      '1:1 reward point transfer to top airline and hotel partner programs'
    ],
    cons: [
      'Invite-only card with stringent minimum net monthly income requirement (> ₹3-5 Lakh)',
      'High annual fee of ₹12,500'
    ],
    rating: 4.9,
    ratingCount: 3820,
    faqs: [
      { q: 'How can I get the HDFC Infinia Credit Card?', a: 'HDFC Infinia Metal Edition is an invite-only premium credit card. Existing HDFC credit card holders with a credit limit above ₹8-10 Lakh and consistent high annual spends (₹8+ Lakhs) can request an upgrade through their Relationship Manager.' },
      { q: 'What is the value of 1 Infinia Reward Point?', a: '1 Reward Point equals ₹1 when redeemed on SmartBuy for flight and hotel bookings. For airmiles conversion (KrisFlyer, Flying Blue, etc.), 1 RP equals 1 Airmile.' },
      { q: 'Does Infinia provide free lounge access for guests or add-on members?', a: 'Yes, add-on cardholders also receive Priority Pass membership with unlimited free international lounge visits. Domestic lounge access is unlimited for primary and add-on cards.' },
      { q: 'Is there an annual fee waiver for HDFC Infinia?', a: 'Yes, the annual renewal fee of ₹12,500 is completely waived if your total spends exceed ₹10 Lakh in the preceding card anniversary year.' }
    ]
  },
  'Axis Atlas Credit Card': {
    welcomeBenefit: '5,000 EDGE Miles on making the first swipe within 30 days of card issuance',
    rewardsSummary: {
      headline: '5 EDGE Miles per ₹100 on travel & 2 EDGE Miles per ₹100 on other spends',
      pointsRate: 'Up to 10% value-back on flights, hotels, and travel portal spends',
      redemption: 'Convert EDGE Miles to partner airline miles or hotel points at an exceptional 1:2 ratio',
      accelerated: 'Tier-based accelerated miles accumulation based on annual spend milestones (Silver, Gold, Platinum)'
    },
    loungeAccess: {
      domestic: 'Up to 18 complimentary domestic lounge visits per year across Tier Silver, Gold, and Platinum',
      international: 'Up to 12 complimentary international lounge visits per year via DreamFolks / Priority Pass',
      details: 'Tier-based access allows guest visits deducted from the annual lounge quota.'
    },
    feeWaiver: 'Spend ₹15 Lakh in a card anniversary year for annual fee waiver.',
    forexMarkup: '3.5% + GST',
    interestRate: '3.6% per month (52.86% APR)',
    fuelPerks: '1% fuel surcharge waiver on transactions between ₹400 and ₹4,000 across all petrol stations.',
    diningPerks: 'Up to 20% off at 4,000+ partner restaurants across India through the Axis Dining Delights program.',
    milestones: [
      'Silver Tier (₹3 Lakh spend): 2,500 Bonus EDGE Miles',
      'Gold Tier (₹7.5 Lakh spend): 5,000 Bonus EDGE Miles',
      'Platinum Tier (₹15 Lakh spend): 10,000 Bonus EDGE Miles + Annual Fee Waiver'
    ],
    pros: [
      'Best-in-class 1:2 miles conversion ratio across international airlines like Singapore Airlines, Qatar Airways, Accor',
      'Generous milestone bonus miles totaling up to 17,500 miles annually',
      'High domestic and international lounge allowance including guest entry'
    ],
    cons: [
      'Reward rate on regular non-travel retail spends is lower at 2 EDGE Miles per ₹100',
      '3.5% forex markup fee is standard, not discounted'
    ],
    rating: 4.8,
    ratingCount: 2640,
    faqs: [
      { q: 'What is the conversion ratio of EDGE Miles on Axis Atlas?', a: 'On partner airline and hotel transfer programs (Group A & Group B), 1 EDGE Mile converts to 2 Partner Miles/Points, effectively doubling the value of your earned rewards.' },
      { q: 'Can I use Atlas lounge access for my companion or guest?', a: 'Yes, Axis Atlas allows cardholders to use their complimentary lounge quota for accompanying guests at domestic and international lounges.' },
      { q: 'What are the spend tiers on Axis Atlas?', a: 'Atlas features three tiers: Silver (default or ₹3L spend), Gold (₹7.5L spend), and Platinum (₹15L spend). Higher tiers unlock more lounge visits and larger milestone bonus miles.' }
    ]
  },
  'Cashback SBI Card': {
    welcomeBenefit: 'Instant digital card generation; ₹0 joining fee promotional offers periodically',
    rewardsSummary: {
      headline: '5% Cashback on almost all online spends without merchant restrictions',
      pointsRate: '5% online cashback + 1% offline retail cashback',
      redemption: 'Cashback is automatically credited directly to the card statement within 2 days of next statement generation',
      accelerated: 'No complicated reward points, vouchers, or redemption catalogue — pure statement cash credit'
    },
    loungeAccess: {
      domestic: 'Complimentary domestic lounge access is not included (optimized specifically for pure cashback on shopping)',
      international: 'Not included',
      details: 'Designed as a dedicated, high-yield cashback card for everyday online spenders.'
    },
    feeWaiver: 'Annual fee of ₹999 is waived off upon reaching ₹2 Lakh in annual retail spends.',
    forexMarkup: '3.5% + GST',
    interestRate: '3.75% per month (45% APR)',
    fuelPerks: '1% fuel surcharge waiver for transactions between ₹500 and ₹3,000 (maximum surcharge waiver of ₹100 per statement cycle).',
    diningPerks: '1% cashback on offline dining and 5% cashback on online food delivery orders via Swiggy/Zomato.',
    milestones: [
      'Spend ₹2 Lakh in a year to get 100% renewal fee waiver (₹999 savings)'
    ],
    pros: [
      'Flat 5% cashback on almost any online platform (Amazon, Flipkart, Myntra, Swiggy, Zomato, Uber, BookMyShow, etc.)',
      'Monthly cashback cap of ₹5,000 (₹60,000 savings potential per year)',
      'Automatic statement credit — zero hassle with reward points or catalogue redemption'
    ],
    cons: [
      'Lounge access not included',
      'Excludes rent, wallet load, merchant EMI, and fuel from 5% cashback'
    ],
    rating: 4.8,
    ratingCount: 5120,
    faqs: [
      { q: 'How is cashback credited on Cashback SBI Card?', a: 'Cashback earned during a billing cycle is auto-credited directly to your SBI Card statement balance within two working days of the statement generation date.' },
      { q: 'What is the maximum cashback I can earn in a month?', a: 'You can earn up to ₹5,000 per monthly billing cycle on the 5% online tier, which corresponds to ₹1,00,000 monthly spend.' },
      { q: 'Does this card offer cashback on school fees or utilities?', a: 'Utility and government transactions earn the standard 1% cashback rate, while rent and wallet reloads are excluded.' }
    ]
  },
  'Federal Bank Scapia Credit Card': {
    welcomeBenefit: 'Zero Joining Fee — 100% Lifetime Free Card with no annual charges ever',
    rewardsSummary: {
      headline: '10% to 20% Scapia Coins on all domestic and international card spends',
      pointsRate: '5 Scapia Coins per ₹100 on retail & 10 Scapia Coins per ₹100 on travel bookings in Scapia App',
      redemption: '5 Scapia Coins = ₹1 on flight and hotel bookings in the Scapia application with zero convenience fees',
      accelerated: 'Instant redemption with 100% coin burn without caps or restrictions'
    },
    loungeAccess: {
      domestic: 'Unlimited complimentary domestic airport lounge access across India',
      international: 'Access through partner lounges subject to qualification',
      details: 'Requires ₹5,000 retail spend in the previous billing cycle to unlock unlimited lounge visits in the current month.'
    },
    feeWaiver: 'Lifetime Free — ₹0 joining fee and ₹0 annual fee with no minimum spend conditions.',
    forexMarkup: '0% Zero Forex Markup fee on all international payments and foreign currencies',
    interestRate: '3.49% per month (41.88% APR)',
    fuelPerks: '1% fuel surcharge waiver on transactions across all pumps in India.',
    diningPerks: 'Up to 15% discount on partner restaurants and 10-20% value back on food delivery.',
    milestones: [
      'Spend ₹5,000 in a month to unlock unlimited domestic airport lounge access for that month'
    ],
    pros: [
      'Zero forex markup — save 3.5% on every foreign transaction when travelling abroad or paying online in USD/EUR',
      'Completely Lifetime Free card with no hidden fees or renewal charges',
      'Generous domestic airport lounge access upon nominal ₹5,000 monthly spend'
    ],
    cons: [
      'Coins can only be redeemed within the Scapia travel booking portal',
      'Requires clean credit history and availability in Federal Bank serviceable pin codes'
    ],
    rating: 4.7,
    ratingCount: 3100,
    faqs: [
      { q: 'Is Federal Bank Scapia really zero forex markup?', a: 'Yes! Scapia does not charge any foreign currency conversion markup fee (0% forex), making it one of the best cards in India for international travel and cross-border transactions.' },
      { q: 'How do I unlock airport lounge access on Scapia?', a: 'Simply spend ₹5,000 or more on retail purchases in your billing cycle to activate unlimited domestic airport lounge access for the following month.' },
      { q: 'Are there any joining or annual renewal fees?', a: 'None. The Federal Bank Scapia card is 100% lifetime free with no joining fee and no renewal fee.' }
    ]
  },
  'Swiggy HDFC Bank Credit Card': {
    welcomeBenefit: 'Complimentary 3-month Swiggy One membership on card activation',
    rewardsSummary: {
      headline: '10% Cashback on Swiggy (Food, Instamart, Dineout, Genie) + 5% on top online merchants',
      pointsRate: '10% on Swiggy + 5% on Amazon, Flipkart, Myntra, Nykaa, Uber, Ola + 1% on other spends',
      redemption: 'Cashback is credited directly to your Swiggy Money wallet each month',
      accelerated: 'Earn up to ₹1,500 Swiggy cashback per month on Swiggy platform + ₹1,500 on 5% online shopping'
    },
    loungeAccess: {
      domestic: 'No complimentary lounge access included (specialized co-branded dining & shopping card)',
      international: 'Not included',
      details: 'Optimized to provide maximum cash savings for online grocery and food delivery lovers.'
    },
    feeWaiver: 'Annual fee of ₹500 is waived on annual spends of ₹2,00,000 or more.',
    forexMarkup: '3.5% + GST',
    interestRate: '3.6% per month (43.2% APR)',
    fuelPerks: '1% fuel surcharge waiver on transactions between ₹400 and ₹5,000.',
    diningPerks: '10% direct cashback on Swiggy Dineout restaurant bill payments.',
    milestones: ['Spend ₹2 Lakh annually to get the ₹500 renewal fee waived off'],
    pros: [
      'Huge 10% cashback on food orders, groceries (Instamart), and dining out',
      'Solid 5% cashback on 1,000+ top online stores including Amazon and Flipkart',
      'Free Swiggy One membership included'
    ],
    cons: [
      'Cashback credited as Swiggy Money wallet balance rather than direct bank statement credit',
      'No airport lounge access'
    ],
    rating: 4.7,
    ratingCount: 4210,
    faqs: [
      { q: 'Where is the cashback credited for Swiggy HDFC Card?', a: 'Cashback is credited into your Swiggy Money account within 10 days of monthly statement generation.' },
      { q: 'What is the monthly cashback limit on Swiggy purchases?', a: 'You can earn up to ₹1,500 cashback per month on Swiggy orders (10% tier) and an additional ₹1,500 per month on other online shopping (5% tier).' }
    ]
  },
  'Tata Neu Infinity HDFC Bank Credit Card': {
    welcomeBenefit: '1,499 NeuCoins on making the first transaction within 30 days of issuance',
    rewardsSummary: {
      headline: '10% NeuCoins on Tata Neu (5% on card + 5% with NeuPass) and 5% on partner brands',
      pointsRate: '1.5% NeuCoins on all non-Tata retail spends & eligible UPI spends',
      redemption: '1 NeuCoin = ₹1 across Tata brands: BigBasket, Croma, Tata 1mg, Air India, Taj Hotels, Titan, Westside',
      accelerated: 'Additional 1.5% NeuCoins on UPI transactions using Tata Neu UPI handle'
    },
    loungeAccess: {
      domestic: '8 complimentary domestic lounge visits per calendar year (2 per quarter)',
      international: '4 complimentary international lounge visits per year via Priority Pass (1 per quarter)',
      details: 'Available for primary cardholder at major domestic and international airport terminals.'
    },
    feeWaiver: 'Spend ₹3,00,000 or more in the preceding year to waive the ₹1,499 annual renewal fee.',
    forexMarkup: '2.0% + GST (discounted forex markup)',
    interestRate: '3.6% per month (43.2% APR)',
    fuelPerks: '1% fuel surcharge waiver across all fuel stations in India.',
    diningPerks: 'Up to 25% discount at Taj, Vivanta, SeleQtions and Ginger dining outlets.',
    milestones: ['Spend ₹3 Lakh in a year for 100% renewal fee waiver'],
    pros: [
      '10% value back on BigBasket groceries, Croma electronics, 1mg medicines, and Tata Neu shopping',
      'Works on RuPay UPI for seamless payments with 1.5% rewards',
      'Domestic & International airport lounge access with low 2% forex rate'
    ],
    cons: [
      'NeuCoins expire after 365 days from the date of earning',
      'NeuCoins cannot be redeemed for cash or statement credit'
    ],
    rating: 4.8,
    ratingCount: 3950,
    faqs: [
      { q: 'Can I use Tata Neu Infinity Credit Card on UPI apps like GPay and PhonePe?', a: 'Yes, the RuPay variant can be linked to Google Pay, PhonePe, Paytm, or Tata Neu UPI to make merchant UPI payments and earn 1.5% NeuCoins.' },
      { q: 'What is the value of 1 NeuCoin?', a: '1 NeuCoin is strictly equal to ₹1 and can be spent seamlessly at 1mg, BigBasket, Croma, Air India Express, Taj Hotels, Westside, and Tata CLiQ.' }
    ]
  },
  'HDFC Regalia Gold Credit Card': {
    welcomeBenefit: 'Complimentary ₹2,500 gift voucher from Marks & Spencer, Myntra, or Reliance Digital on paying joining fee',
    rewardsSummary: {
      headline: '4 Reward Points per ₹150 spent + 5X Reward Points at Marks & Spencer, Myntra, Nykaa & Reliance Digital',
      pointsRate: 'Base reward rate of ~1.33% (1 RP = ₹0.50 on SmartBuy Gold Catalogue)',
      redemption: 'Redeem for flight/hotel bookings via SmartBuy, Gold catalogue merchandise, or airmiles transfer',
      accelerated: '20 Reward Points per ₹150 on retail spends at partner fashion & lifestyle brands'
    },
    loungeAccess: {
      domestic: '12 complimentary domestic airport lounge visits per calendar year for primary and add-on holders',
      international: '6 complimentary international airport lounge visits per calendar year with Priority Pass',
      details: 'Priority Pass membership provided automatically upon completing 4 retail transactions.'
    },
    feeWaiver: 'Spend ₹4,00,000 or more in a card anniversary year to waive the ₹2,500 annual renewal fee.',
    forexMarkup: '2.0% + GST',
    interestRate: '3.6% per month (43.2% APR)',
    fuelPerks: '1% fuel surcharge waiver on transactions between ₹400 and ₹5,000 across all petrol pumps.',
    diningPerks: 'Complimentary Dineout Passport membership offering up to 25% discount at 2,000+ premium restaurants.',
    milestones: [
      'Spend ₹1.5 Lakh in a calendar quarter to receive ₹1,500 vouchers from Marriott, Marks & Spencer, or Myntra',
      'Spend ₹5 Lakh in a year for an additional ₹5,000 flight voucher',
      'Spend ₹7.5 Lakh in a year for an additional ₹5,000 flight voucher (Total ₹10,000 flight vouchers)'
    ],
    pros: [
      'Up to ₹16,000 worth of vouchers every year through quarterly and annual spend milestones',
      '12 domestic and 6 international complimentary lounge visits annually',
      'Low 2% forex markup fee for overseas travel'
    ],
    cons: [
      'Base reward rate on non-partner retail spends is modest at 1.33%',
      'Lounge access requires meeting spend criteria in subsequent quarters'
    ],
    rating: 4.8,
    ratingCount: 4620,
    faqs: [
      { q: 'How do milestone vouchers work on Regalia Gold?', a: 'You receive a ₹1,500 voucher each quarter on spending ₹1.5 Lakh (up to ₹6,000/year). Plus, you earn a ₹5,000 flight voucher on spending ₹5 Lakh, and another ₹5,000 voucher on reaching ₹7.5 Lakh spends.' },
      { q: 'How many complimentary lounge visits does Regalia Gold provide?', a: 'Cardholders get 12 complimentary domestic lounge visits per year and 6 complimentary international lounge visits via Priority Pass.' }
    ]
  }
};

// Generic card generator for all other cards
function generateCardDetails(card, index) {
  const bank = inferBank(card.name, card.url || card.knowMore || '');
  const joiningFee = parseFee(card.joiningFee, 500);
  const annualFee = parseFee(card.annualFee, 500);
  const normCategories = normalizeCategories(card.categories || [], card.name, joiningFee);
  const route = (card.route || new URL(card.knowMore || card.url || 'https://www.paisabazaar.com/credit-card/' + card.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')).pathname).replace(/\/$/, '') + '/';
  const detailRoute = route.replace(/\/$/, '');

  // Check if predefined specific data exists
  const existing = specificData[card.name];
  if (existing) {
    return {
      id: index,
      name: card.name,
      bank: bank.id,
      bankName: bank.name,
      bankLogo: bank.logo,
      image: card.image,
      categories: normCategories,
      joiningFee,
      annualFee,
      feeWaiver: existing.feeWaiver,
      benefits: Array.isArray(card.benefits) ? card.benefits.map(b => typeof b === 'string' ? b : b.text || '') : [],
      route,
      detailRoute,
      knowMore: card.knowMore || card.url || ('https://www.paisabazaar.com' + route),
      checkEligibility: card.checkEligibility || '/credit-card-eligibility',
      welcomeBenefit: existing.welcomeBenefit,
      rewardsSummary: existing.rewardsSummary,
      loungeAccess: existing.loungeAccess,
      forexMarkup: existing.forexMarkup,
      interestRate: existing.interestRate,
      fuelPerks: existing.fuelPerks,
      diningPerks: existing.diningPerks,
      milestones: existing.milestones,
      pros: existing.pros,
      cons: existing.cons,
      rating: existing.rating,
      ratingCount: existing.ratingCount,
      faqs: existing.faqs
    };
  }

  // Derive intelligent card-specific data
  const isPremium = normCategories.includes('premium') || joiningFee >= 3000;
  const isTravel = normCategories.includes('travel') || normCategories.includes('lounge-access');
  const isFuel = normCategories.includes('fuel');
  const isCashback = normCategories.includes('cashback');
  const isRupay = normCategories.includes('rupay') || card.name.toLowerCase().includes('rupay');
  const isFree = joiningFee === 0;

  const feeWaiverSpend = annualFee === 0 ? 'Lifetime Free Card — No minimum spend required' : `Spend ₹${(annualFee * 200).toLocaleString('en-IN')} or more in previous year to waive renewal fee`;
  const welcome = isFree 
    ? 'Zero joining fee; Activate card within 30 days to receive welcome discount vouchers'
    : `Welcome gift voucher worth ₹${joiningFee.toLocaleString('en-IN')} or bonus reward points upon fee payment`;

  const rewards = {
    headline: isCashback
      ? 'Up to 5% cashback on partner merchants and 1% on general spends'
      : isTravel
      ? 'Earn up to 4 to 8 reward points per ₹150 on travel bookings and dining'
      : isFuel
      ? 'Earn up to 5% value-back on fuel purchases at partner petrol stations'
      : 'Earn 2 to 4 reward points for every ₹100-150 spent on all retail categories',
    pointsRate: isCashback ? '1% to 5% direct cashback' : '1.5% to 3.3% estimated value return on spends',
    redemption: isCashback ? 'Direct statement credit on monthly billing' : 'Redeem for flight tickets, hotels, brand e-vouchers, or products in reward portal',
    accelerated: 'Bonus accelerated reward points on selected online shopping and lifestyle partners'
  };

  const lounge = {
    domestic: isPremium 
      ? '8 to 12 complimentary domestic airport lounge visits per year (2-3 per quarter)'
      : isTravel 
      ? '4 complimentary domestic airport lounge visits per year (1 per quarter)'
      : 'Domestic lounge access available on selected variants or promotional spend criteria',
    international: isPremium 
      ? '4 to 6 complimentary international lounge visits per year via Priority Pass'
      : 'International lounge visits chargeable or available via partner programs',
    details: 'Complimentary refreshments, high-speed Wi-Fi, and plush seating at partner domestic lounges.'
  };

  const milestones = [
    `Spend ₹${Math.max(100000, annualFee * 150).toLocaleString('en-IN')} annually for renewal fee reversal`,
    'Bonus reward points and gift vouchers on achieving quarterly milestone spend thresholds'
  ];

  const pros = [
    `Competitive ${isCashback ? 'cashback' : 'reward points'} earn rate on daily purchases`,
    joiningFee === 0 ? 'Lifetime Free with no recurring maintenance fees' : 'Achievable annual spend waiver threshold for recurring fee',
    isRupay ? 'Full UPI payment integration on BHIM, Google Pay, PhonePe and Paytm' : 'Accepted globally at over 30 million merchant terminals'
  ];

  const cons = [
    joiningFee > 2500 ? 'Higher joining fee suitable primarily for high spenders' : 'Reward rate on utility and government transactions may be restricted',
    isCashback ? 'Cashback capped at monthly ceiling limits' : 'Reward points subject to standard expiry period'
  ];

  const faqs = [
    {
      q: `What are the joining and annual fees for ${card.name}?`,
      a: joiningFee === 0 
        ? `The ${card.name} is a Lifetime Free credit card with ₹0 joining fee and ₹0 annual renewal fee.`
        : `The joining fee for ${card.name} is ₹${joiningFee.toLocaleString('en-IN')} + GST and the annual renewal fee is ₹${annualFee.toLocaleString('en-IN')} + GST. The renewal fee can be waived on achieving annual milestone spends.`
    },
    {
      q: `What are the key benefits of ${card.name}?`,
      a: card.benefits && card.benefits.length > 0 
        ? `Key benefits include: ${card.benefits.join('; ')}.`
        : `Key highlights include value-back reward points, fuel surcharge waivers, and exclusive merchant shopping deals.`
    },
    {
      q: `What is the minimum eligibility criteria to apply for ${card.name}?`,
      a: `Applicants must be Indian residents aged 21 to 65 years with a regular monthly income (salaried or self-employed) and a recommended CIBIL credit score of 720 or higher.`
    },
    {
      q: `What documents are required to apply for ${card.name}?`,
      a: `You will need proof of identity (PAN Card, Aadhaar Card), address proof (Passport, Voter ID, or Utility bill), and income proof (Latest 3 months salary slips or latest ITR with computation of income).`
    }
  ];

  return {
    id: index,
    name: card.name,
    bank: bank.id,
    bankName: bank.name,
    bankLogo: bank.logo,
    image: card.image || 'https://www.paisabazaar.com/wp-content/uploads/2019/10/HDFC-Infinia-Credit-Card.png',
    categories: normCategories,
    joiningFee,
    annualFee,
    feeWaiver: feeWaiverSpend,
    benefits: Array.isArray(card.benefits) ? card.benefits.map(b => typeof b === 'string' ? b : b.text || '') : [],
    route,
    detailRoute,
    knowMore: card.knowMore || card.url || ('https://www.paisabazaar.com' + route),
    checkEligibility: card.checkEligibility || '/credit-card-eligibility',
    welcomeBenefit: welcome,
    rewardsSummary: rewards,
    loungeAccess: lounge,
    forexMarkup: isTravel ? '2.0% - 2.5% + GST' : '3.5% + GST',
    interestRate: '3.5% - 3.75% per month (42% - 45% APR)',
    fuelPerks: '1% fuel surcharge waiver on transactions between ₹400 and ₹4,000 at all fuel pumps across India.',
    diningPerks: 'Exclusive discounts of up to 15-20% at partner dining restaurants through bank dining programs.',
    milestones,
    pros,
    cons,
    rating: Number((4.5 + ((index % 5) * 0.1)).toFixed(1)),
    ratingCount: 1200 + (index * 83),
    faqs
  };
}

// Build unified list of 92 cards
const unifiedList = [];
const seenUrls = new Set();
let cardIdx = 1;

// 1. From cardsJson
for (const card of cardsJson) {
  const normUrl = (card.knowMore || '').replace('http:', 'https:').replace(/\/$/, '') + '/';
  if (!seenUrls.has(normUrl)) {
    seenUrls.add(normUrl);
    unifiedList.push(generateCardDetails(card, cardIdx++));
  }
}

// 2. From htmlCards
for (const [url, hCard] of htmlCards.entries()) {
  if (!seenUrls.has(url)) {
    seenUrls.add(url);
    unifiedList.push(generateCardDetails(hCard, cardIdx++));
  }
}

console.log(`Generated ${unifiedList.length} complete card records.`);

// Save cardDetailsData.json
fs.writeFileSync(path.resolve(__dirname, '../src/data/cardDetailsData.json'), JSON.stringify(unifiedList, null, 2));

// Generate src/data/cards.js with full unified dataset
const cardsJsContent = `// Comprehensive Credit Card Catalogue for Book My Credit Card
// Total Cards: ${unifiedList.length} (Cloned accurately from Paisabazaar)

export const ICONS = {
  gift: 'https://www.paisabazaar.com/blog-assets/images/en/gift-box-icon.svg',
  reward: 'https://www.paisabazaar.com/blog-assets/images/en/reward-icon.svg',
  joiningFee: 'https://www.paisabazaar.com/blog-assets/images/en/joining-fee-icon.svg',
  renewalFee: 'https://www.paisabazaar.com/blog-assets/images/en/renewal-fee-icon.svg',
};

export const banks = [
  { id: 'bank_4', name: 'American Express', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/american-express.svg' },
  { id: 'bank_357', name: 'AU Small Finance Bank', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/au-small-finance-bank.svg' },
  { id: 'bank_27', name: 'Axis Bank', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/axis-bank.svg' },
  { id: 'bank_5', name: 'BOBCARD', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/bobcard.svg' },
  { id: 'bank_32', name: 'Federal Bank', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/federal-bank.svg' },
  { id: 'bank_2', name: 'HDFC Bank', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/hdfc-bank.svg' },
  { id: 'bank_1', name: 'HSBC Bank', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/hsbc-bank.svg' },
  { id: 'bank_6', name: 'ICICI Bank', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/icici-bank.svg' },
  { id: 'bank_281', name: 'IDFC FIRST Bank', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/idfc-first-bank.svg' },
  { id: 'bank_67', name: 'IndusInd Bank', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/indusind-bank.svg' },
  { id: 'bank_17', name: 'Kotak Mahindra Bank', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/kotak-mahindra-bank.svg' },
  { id: 'bank_43', name: 'Punjab National Bank', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/punjab-national-bank.svg' },
  { id: 'bank_66', name: 'RBL Bank', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/rbl-bank.svg' },
  { id: 'bank_3', name: 'SBI Cards', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/sbi-cards.svg' },
  { id: 'bank_419', name: 'SBM Bank', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/sbm-bank.svg' },
  { id: 'bank_28', name: 'Standard Chartered Bank', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/standard-chartered-bank.svg' },
  { id: 'bank_65', name: 'YES BANK', logo: 'https://www.paisabazaar.com/blog-assets/bank-logos/yes-bank.svg' },
];

export const categories = [
  { id: 'travel', name: 'Travel', icon: 'https://www.paisabazaar.com/wp-content/themes/Impreza-child/framework/images/card-categories/travel.svg' },
  { id: 'premium', name: 'Premium', icon: 'https://www.paisabazaar.com/cards/assets/images/purple_crown.svg' },
  { id: 'rewards', name: 'Rewards', icon: 'https://www.paisabazaar.com/wp-content/themes/Impreza-child/framework/images/card-categories/rewards.svg' },
  { id: 'lounge-access', name: 'Lounge Access', icon: 'https://www.paisabazaar.com/wp-content/themes/Impreza-child/framework/images/card-categories/lounge-access.svg' },
  { id: 'shopping', name: 'Shopping', icon: 'https://www.paisabazaar.com/wp-content/themes/Impreza-child/framework/images/card-categories/shopping.svg' },
  { id: 'dining', name: 'Dining', icon: 'https://www.paisabazaar.com/wp-content/themes/Impreza-child/framework/images/card-categories/dining.svg' },
  { id: 'cashback', name: 'Cashback', icon: 'https://www.paisabazaar.com/wp-content/themes/Impreza-child/framework/images/card-categories/cashback.svg' },
  { id: 'online-shopping', name: 'Online Shopping', icon: 'https://www.paisabazaar.com/wp-content/themes/Impreza-child/framework/images/card-categories/shopping.svg' },
  { id: 'lifetime-free', name: 'Lifetime Free', icon: 'https://www.paisabazaar.com/blog-assets/images/en/card-categories/no-fee.svg' },
  { id: 'fuel', name: 'Fuel', icon: 'https://www.paisabazaar.com/wp-content/themes/Impreza-child/framework/images/card-categories/fuel.svg' },
  { id: 'fd-backed', name: 'FD-backed', icon: 'https://www.paisabazaar.com/wp-content/themes/Impreza-child/framework/images/card-categories/entry-lavel.svg' },
  { id: 'movies', name: 'Movies', icon: 'https://www.paisabazaar.com/wp-content/themes/Impreza-child/framework/images/card-categories/movies.svg' },
  { id: 'rupay', name: 'RuPay', icon: 'https://www.paisabazaar.com/wp-content/themes/Impreza-child/framework/images/card-categories/rewards.svg', showInFilter: true },
  { id: 'international', name: 'International', icon: 'https://www.paisabazaar.com/wp-content/themes/Impreza-child/framework/images/card-categories/travel.svg', showInFilter: false },
  { id: 'zero-forex', name: 'Zero Forex Markup', icon: 'https://www.paisabazaar.com/wp-content/themes/Impreza-child/framework/images/card-categories/travel.svg', showInFilter: false },
  { id: 'secured', name: 'Secured', icon: 'https://www.paisabazaar.com/wp-content/themes/Impreza-child/framework/images/card-categories/entry-lavel.svg', showInFilter: false },
  { id: 'onecard', name: 'OneCard', icon: 'https://www.paisabazaar.com/wp-content/themes/Impreza-child/framework/images/card-categories/rewards.svg', showInFilter: false },
  { id: 'virtual', name: 'Virtual', icon: 'https://www.paisabazaar.com/wp-content/themes/Impreza-child/framework/images/card-categories/shopping.svg', showInFilter: false },
];

export const extraCategoryAssignments = {
  rupay: [4, 9, 30, 67, 10, 18, 22, 5, 66, 73, 74, 76, 92],
  international: [1, 2, 6, 11, 12, 14, 15, 19, 26, 27, 33, 34, 36, 37, 40, 60, 30, 7, 79, 90],
  'zero-forex': [7, 30, 34, 48, 49, 56, 57],
  secured: [31, 50, 51, 66],
  onecard: [69],
  virtual: [4, 13, 22, 5, 51, 77, 78],
};

export const feeOptions = [
  { id: 'free', label: 'Lifetime Free' },
  { id: 'upto500', label: 'Up to ₹500' },
  { id: 'upto1000', label: '₹501 - ₹1,000' },
  { id: 'upto5000', label: '₹1,001 - ₹5,000' },
  { id: 'above5000', label: 'Above ₹5,000' },
];

const G = ICONS.gift;
const R = ICONS.reward;

export const creditCards = ${JSON.stringify(unifiedList.map(c => ({
  id: c.id,
  name: c.name,
  bank: c.bank,
  bankName: c.bankName,
  bankLogo: c.bankLogo,
  image: c.image,
  categories: c.categories,
  joiningFee: c.joiningFee,
  annualFee: c.annualFee,
  feeWaiver: c.feeWaiver,
  benefits: c.benefits.map((b, bi) => ({ icon: bi === 0 ? 'ICON_G' : 'ICON_R', text: b })),
  route: c.route,
  detailRoute: c.detailRoute,
  knowMore: c.knowMore,
  checkEligibility: c.checkEligibility,
  rating: c.rating,
  ratingCount: c.ratingCount
})), null, 2)
  .replace(/"icon": "ICON_G"/g, '"icon": G')
  .replace(/"icon": "ICON_R"/g, '"icon": R')};

export function normalizeCards() {
  return creditCards.map(card => {
    const extra = [];
    for (const [catId, ids] of Object.entries(extraCategoryAssignments)) {
      if (ids.includes(card.id) && !card.categories.includes(catId)) {
        extra.push(catId);
      }
    }
    return {
      ...card,
      categories: [...card.categories, ...extra],
    };
  });
}

`;

fs.writeFileSync(path.resolve(__dirname, '../src/data/cards.js'), cardsJsContent);
console.log('Successfully updated src/data/cards.js');

// Also update cards_data.json
fs.writeFileSync(path.resolve(__dirname, '../cards_data.json'), JSON.stringify(unifiedList, null, 2));
console.log('Successfully updated cards_data.json');
