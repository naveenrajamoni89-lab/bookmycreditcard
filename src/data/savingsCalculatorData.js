import { creditCards, banks } from './cards.js';

export const SAVINGS_CATEGORIES = [
  { key: 'Shopping', label: 'Shopping', icon: '🛍️' },
  { key: 'Travel', label: 'Travel', icon: '✈️' },
  { key: 'Dining', label: 'Dining', icon: '🍽️' },
  { key: 'Grocery', label: 'Grocery', icon: '🛒' },
  { key: 'Movies', label: 'Movies', icon: '🎬' },
  { key: 'Fuel', label: 'Fuel', icon: '⛽' },
];

export const DEFAULT_MONTHLY_SPENDS = {
  Shopping: 10000,
  Travel: 45100,
  Dining: 10000,
  Grocery: 47500,
  Movies: 56000,
  Fuel: 52700,
};

export const DEFAULT_ANNUAL_SPENDS = {
  Shopping: 120000,
  Travel: 540000,
  Dining: 120000,
  Grocery: 570000,
  Movies: 672000,
  Fuel: 632000,
};

export const SPEND_LIMITS = {
  monthly: { min: 0, max: 100000, step: 500, maxLabel: '₹1,00,000' },
  annual: { min: 0, max: 1000000, step: 5000, maxLabel: '₹10,00,000' },
};

/**
 * Resolves reliable local card image path for any card id
 */
export function getCardImagePath(id) {
  return `/images/cards/${id}.webp`;
}

/**
 * Computes realistic category reward rates based on card tags, categories and naming
 */
function computeCategoryRates(card) {
  const cats = card.categories || [];
  const name = (card.name || '').toLowerCase();

  const rates = {
    Shopping: 0.02,
    Travel: 0.02,
    Dining: 0.02,
    Grocery: 0.02,
    Movies: 0.02,
    Fuel: 0.01,
  };

  // Cashback-centric cards (e.g. BOBCARD Cashback, Cashback SBI Card, Axis ACE)
  if (cats.includes('cashback') || cats.includes('online-shopping') || name.includes('cashback')) {
    rates.Shopping = 0.05;
    rates.Dining = 0.04;
    rates.Grocery = 0.02;
    rates.Movies = 0.025;
  }

  // Travel and airport lounge cards (e.g. Axis Atlas, HDFC Infinia, Scapia)
  if (cats.includes('travel') || cats.includes('lounge-access') || name.includes('travel') || name.includes('atlas')) {
    rates.Travel = name.includes('atlas') ? 0.10 : 0.06;
    rates.Dining = Math.max(rates.Dining, 0.035);
  }

  // Dining and lifestyle cards
  if (cats.includes('dining') || name.includes('my zone') || name.includes('rewards')) {
    rates.Dining = 0.05;
    rates.Shopping = Math.max(rates.Shopping, 0.03);
  }

  // Fuel cards (e.g. IndianOil, BPCL, HPCL)
  if (cats.includes('fuel') || name.includes('fuel') || name.includes('indianoil') || name.includes('bpcl') || name.includes('hpcl')) {
    rates.Fuel = 0.045;
  }

  // Movie entertainment cards
  if (cats.includes('movies') || name.includes('my zone')) {
    rates.Movies = 0.05;
  }

  // Premium & high-reward cards (Infinia, Regalia Gold, Magnus)
  if (cats.includes('rewards') || cats.includes('premium') || name.includes('infinia') || name.includes('regalia') || name.includes('magnus') || name.includes('tiara')) {
    rates.Shopping = Math.max(rates.Shopping, 0.033);
    rates.Dining = Math.max(rates.Dining, 0.04);
  }

  return rates;
}

/**
 * Builds CALCULATOR_BANKS strictly from project's creditCards in src/data/cards.js
 */
function buildCalculatorBanks() {
  const bankPriority = [
    'BOBCARD',
    'Axis Bank',
    'HDFC Bank',
    'SBI Cards',
    'ICICI Bank',
    'IDFC FIRST Bank',
    'YES BANK',
    'HSBC Bank',
    'IndusInd Bank',
    'Kotak Mahindra Bank',
    'Federal Bank',
    'RBL Bank',
    'AU Small Finance Bank',
    'Standard Chartered Bank',
    'American Express',
    'SBM Bank',
  ];

  const bankCardsMap = new Map();
  bankPriority.forEach((b) => bankCardsMap.set(b, []));

  // Axis Bank card ordering prioritized to match user reference
  const axisPriorityOrder = [62, 12, 25, 64, 22, 17, 2, 21, 8, 33, 14, 20, 34, 41, 53, 59, 63, 80];

  creditCards.forEach((c) => {
    let bName = c.bankName ? c.bankName.replace(' (Bank of Baroda)', '').trim() : '';
    if (bName === 'Top Bank' || bName === 'Utkarsh Small Finance Bank' || !bName) return;

    if (!bankCardsMap.has(bName)) {
      bankCardsMap.set(bName, []);
    }

    const joiningFeeDisplay = c.joiningFee === 0 ? '₹0 (Free)' : `₹${c.joiningFee.toLocaleString('en-IN')}`;
    const annualFeeDisplay = c.annualFee === 0 ? '₹0 (Free)' : `₹${c.annualFee.toLocaleString('en-IN')}`;

    const annualIncentives = Math.max(1200, (c.annualFee || 500) * 2);
    const perkText = c.benefits && c.benefits[0] ? c.benefits[0].text : 'Welcome benefits & fuel waiver';
    const waiverText = c.feeWaiver ? ` • ${c.feeWaiver}` : '';

    bankCardsMap.get(bName).push({
      id: c.id,
      name: c.name,
      image: getCardImagePath(c.id),
      rates: computeCategoryRates(c),
      annualIncentives,
      incentiveDetails: `${perkText}${waiverText}`,
      joiningFee: joiningFeeDisplay,
      annualFee: annualFeeDisplay,
      detailRoute: c.detailRoute || '/credit-card-eligibility',
    });
  });

  const result = [];

  bankCardsMap.forEach((cards, bName) => {
    if (!cards || cards.length === 0) return;

    // Special sort for BOBCARD so BOBCARD Cashback (id: 96) is first
    if (bName === 'BOBCARD') {
      cards.sort((a, b) => (a.id === 96 ? -1 : b.id === 96 ? 1 : 0));
    }

    // Special sort for Axis Bank to match reference screenshot
    if (bName === 'Axis Bank') {
      cards.sort((a, b) => {
        const idxA = axisPriorityOrder.indexOf(a.id);
        const idxB = axisPriorityOrder.indexOf(b.id);
        return (idxA !== -1 ? idxA : 999) - (idxB !== -1 ? idxB : 999);
      });
    }

    const bankMeta = banks.find((b) => b.name === bName) || {};

    result.push({
      id: bankMeta.id || bName.toLowerCase().replace(/[^a-z0-9]/g, '_'),
      name: bName,
      logo: bankMeta.logo || '',
      cards,
    });
  });

  return result;
}

export const CALCULATOR_BANKS = buildCalculatorBanks();

/**
 * Live client-side calculation engine
 */
export function calculateCardSavings(card, spends, spendType = 'monthly') {
  if (!card) {
    return { totalSpend: 0, spendRewards: 0, additionalIncentives: 0, totalSavings: 0 };
  }

  const isAnnual = spendType === 'annual';
  let totalSpend = 0;
  let spendRewards = 0;

  SAVINGS_CATEGORIES.forEach(({ key }) => {
    const amount = Number(spends[key]) || 0;
    totalSpend += amount;
    const rate = card.rates?.[key] ?? 0.02;
    spendRewards += amount * rate;
  });

  // Calculate incentives with fuel waiver scaling
  const baseAnnualIncentives = card.annualIncentives || 2000;
  const fuelSpend = Number(spends.Fuel) || 0;
  const fuelWaiverAnnual = Math.min((isAnnual ? fuelSpend : fuelSpend * 12) * 0.01, 3000);

  const annualIncentives = baseAnnualIncentives + fuelWaiverAnnual;
  const additionalIncentives = Math.round(isAnnual ? annualIncentives : annualIncentives / 12);
  const roundedSpendRewards = Math.round(spendRewards);
  const totalSavings = roundedSpendRewards + additionalIncentives;

  return {
    totalSpend: Math.round(totalSpend),
    spendRewards: roundedSpendRewards,
    additionalIncentives,
    totalSavings,
  };
}
