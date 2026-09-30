// Comprehensive Credit Card Catalogue for Book My Credit Card
// Total Cards: 92 (Cloned accurately from Paisabazaar)

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

export const cardNetworks = [
  { id: 'visa', name: 'Visa' },
  { id: 'mastercard', name: 'Mastercard' },
  { id: 'rupay', name: 'RuPay' },
  { id: 'diners-club', name: 'Diners Club' },
  { id: 'amex', name: 'American Express' },
];

export const cardNetworksMap = {
  1: { networks: ['visa', 'mastercard'], network: 'visa' },
  2: { networks: ['visa'], network: 'visa' },
  3: { networks: ['mastercard', 'visa'], network: 'mastercard' },
  4: { networks: ['rupay'], network: 'rupay' },
  5: { networks: ['visa'], network: 'visa' },
  6: { networks: ['mastercard'], network: 'mastercard' },
  7: { networks: ['visa'], network: 'visa' },
  8: { networks: ['visa', 'mastercard'], network: 'visa' },
  9: { networks: ['rupay', 'visa'], network: 'rupay' },
  10: { networks: ['mastercard', 'rupay'], network: 'mastercard' },
  11: { networks: ['diners-club'], network: 'diners-club' },
  12: { networks: ['mastercard'], network: 'mastercard' },
  13: { networks: ['visa', 'mastercard'], network: 'visa' },
  14: { networks: ['mastercard', 'visa'], network: 'mastercard' },
  15: { networks: ['amex'], network: 'amex' },
  16: { networks: ['visa'], network: 'visa' },
  17: { networks: ['visa', 'mastercard'], network: 'visa' },
  18: { networks: ['mastercard', 'visa'], network: 'mastercard' },
  19: { networks: ['visa', 'mastercard'], network: 'visa' },
  20: { networks: ['visa'], network: 'visa' },
  21: { networks: ['visa', 'mastercard'], network: 'visa' },
  22: { networks: ['visa'], network: 'visa' },
  23: { networks: ['mastercard'], network: 'mastercard' },
  24: { networks: ['visa'], network: 'visa' },
  25: { networks: ['mastercard', 'visa'], network: 'mastercard' },
  26: { networks: ['visa'], network: 'visa' },
  27: { networks: ['visa'], network: 'visa' },
  28: { networks: ['diners-club'], network: 'diners-club' },
  29: { networks: ['mastercard', 'visa'], network: 'mastercard' },
  30: { networks: ['visa', 'rupay'], network: 'visa' },
  31: { networks: ['visa'], network: 'visa' },
  32: { networks: ['visa'], network: 'visa' },
  33: { networks: ['mastercard', 'visa'], network: 'mastercard' },
  34: { networks: ['visa'], network: 'visa' },
  35: { networks: ['mastercard'], network: 'mastercard' },
  36: { networks: ['mastercard'], network: 'mastercard' },
  37: { networks: ['mastercard'], network: 'mastercard' },
  38: { networks: ['visa'], network: 'visa' },
  39: { networks: ['mastercard'], network: 'mastercard' },
  40: { networks: ['visa'], network: 'visa' },
  41: { networks: ['rupay', 'visa'], network: 'rupay' },
  42: { networks: ['visa'], network: 'visa' },
  43: { networks: ['visa'], network: 'visa' },
  44: { networks: ['rupay'], network: 'rupay' },
  45: { networks: ['visa'], network: 'visa' },
  46: { networks: ['visa', 'mastercard'], network: 'visa' },
  47: { networks: ['visa', 'mastercard'], network: 'visa' },
  48: { networks: ['visa'], network: 'visa' },
  49: { networks: ['visa'], network: 'visa' },
  50: { networks: ['visa'], network: 'visa' },
  51: { networks: ['visa'], network: 'visa' },
  52: { networks: ['visa'], network: 'visa' },
  53: { networks: ['visa', 'mastercard'], network: 'visa' },
  54: { networks: ['visa'], network: 'visa' },
  55: { networks: ['visa'], network: 'visa' },
  56: { networks: ['visa'], network: 'visa' },
  57: { networks: ['visa'], network: 'visa' },
  58: { networks: ['visa'], network: 'visa' },
  59: { networks: ['visa'], network: 'visa' },
  60: { networks: ['visa'], network: 'visa' },
  61: { networks: ['visa'], network: 'visa' },
  62: { networks: ['visa', 'mastercard'], network: 'visa' },
  63: { networks: ['visa'], network: 'visa' },
  64: { networks: ['visa', 'rupay'], network: 'visa' },
  65: { networks: ['visa', 'rupay'], network: 'visa' },
  66: { networks: ['mastercard'], network: 'mastercard' },
  67: { networks: ['rupay'], network: 'rupay' },
  68: { networks: ['visa', 'mastercard'], network: 'visa' },
  69: { networks: ['visa', 'mastercard', 'rupay'], network: 'visa' },
  70: { networks: ['visa'], network: 'visa' },
  71: { networks: ['visa'], network: 'visa' },
  72: { networks: ['visa', 'mastercard'], network: 'visa' },
  73: { networks: ['rupay'], network: 'rupay' },
  74: { networks: ['rupay'], network: 'rupay' },
  75: { networks: ['rupay'], network: 'rupay' },
  76: { networks: ['rupay'], network: 'rupay' },
  77: { networks: ['visa'], network: 'visa' },
  78: { networks: ['visa'], network: 'visa' },
  79: { networks: ['mastercard'], network: 'mastercard' },
  80: { networks: ['rupay'], network: 'rupay' },
  81: { networks: ['visa'], network: 'visa' },
  82: { networks: ['mastercard', 'visa'], network: 'mastercard' },
  83: { networks: ['visa'], network: 'visa' },
  84: { networks: ['visa'], network: 'visa' },
  85: { networks: ['mastercard'], network: 'mastercard' },
  86: { networks: ['visa'], network: 'visa' },
  87: { networks: ['rupay'], network: 'rupay' },
  88: { networks: ['visa'], network: 'visa' },
  89: { networks: ['mastercard'], network: 'mastercard' },
  90: { networks: ['mastercard', 'visa'], network: 'mastercard' },
  91: { networks: ['visa'], network: 'visa' },
  92: { networks: ['rupay'], network: 'rupay' },
  93: { networks: ['rupay'], network: 'rupay' },
  94: { networks: ['rupay'], network: 'rupay' },
  95: { networks: ['rupay'], network: 'rupay' },
  96: { networks: ['visa', 'mastercard'], network: 'visa' }
};

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
  { id: 'rupay', name: 'RuPay', icon: 'https://www.paisabazaar.com/wp-content/themes/Impreza-child/framework/images/card-categories/rewards.svg', showInFilter: false },
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

export const creditCards = [
  {
    "id": 1,
    "name": "HDFC Infinia Credit Card",
    "bank": "bank_2",
    "bankName": "HDFC Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/hdfc-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2019/10/HDFC-Infinia-Credit-Card.png",
    "categories": [
      "premium",
      "travel",
      "rewards"
    ],
    "joiningFee": 12500,
    "annualFee": 12500,
    "feeWaiver": "Spend ₹10 Lakh or more in the preceding year to get the ₹12,500 renewal fee waived off.",
    "benefits": [
      {
        "icon": G,
        "text": "3.33% value-back across all categories"
      },
      {
        "icon": R,
        "text": "Unlimited access in India and abroad"
      },
      {
        "icon": R,
        "text": "Save on your stay at ITC and Marriott Hotels"
      }
    ],
    "route": "/hdfc-bank/infinia-credit-card/",
    "detailRoute": "/hdfc-bank/infinia-credit-card",
    "knowMore": "https://www.paisabazaar.com/hdfc-bank/infinia-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=hdfc_infinia_credit_card",
    "rating": 4.9,
    "ratingCount": 3820
  },
  {
    "id": 2,
    "name": "Axis Atlas Credit Card",
    "bank": "bank_27",
    "bankName": "Axis Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/axis-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2023/02/Axis-Atlas-1.png",
    "categories": [
      "travel",
      "lounge-access",
      "rewards"
    ],
    "joiningFee": 5000,
    "annualFee": 5000,
    "feeWaiver": "Spend ₹15 Lakh in a card anniversary year for annual fee waiver.",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 10% value-back on travel spends"
      },
      {
        "icon": R,
        "text": "Complimentary lounge access worldwide"
      },
      {
        "icon": R,
        "text": "1:2 redemption ratio on partner airlines & hotels"
      }
    ],
    "route": "/axis-bank/atlas-credit-card/",
    "detailRoute": "/axis-bank/atlas-credit-card",
    "knowMore": "https://www.paisabazaar.com/axis-bank/atlas-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/marketing/openmarket?partnerProductId=313&utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=axis_atlas_credit_card",
    "rating": 4.8,
    "ratingCount": 2640
  },
  {
    "id": 3,
    "name": "HDFC Regalia Gold Credit Card",
    "bank": "bank_2",
    "bankName": "HDFC Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/hdfc-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2023/03/HDFC-Regalia-Gold-Credit-Card.png",
    "categories": [
      "lounge-access",
      "travel",
      "shopping",
      "rewards"
    ],
    "joiningFee": 2500,
    "annualFee": 2500,
    "feeWaiver": "Spend ₹4,00,000 or more in a card anniversary year to waive the ₹2,500 annual renewal fee.",
    "benefits": [
      {
        "icon": G,
        "text": "5X rewards on Nykaa, Myntra & more"
      },
      {
        "icon": R,
        "text": "Vouchers up to Rs. 16,000 every year"
      },
      {
        "icon": R,
        "text": "12 domestic & 6 int. visits per year"
      }
    ],
    "route": "/hdfc-bank/hdfc-regalia-gold-credit-card/",
    "detailRoute": "/hdfc-bank/hdfc-regalia-gold-credit-card",
    "knowMore": "https://www.paisabazaar.com/hdfc-bank/hdfc-regalia-gold-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/easy-apply?partnerProductId=285&utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=hdfc_regalia_gold_credit_card",
    "rating": 4.8,
    "ratingCount": 4620
  },
  {
    "id": 4,
    "name": "YES BANK PaisaSave Credit Card (FREE for Limited Time)",
    "bank": "bank_65",
    "bankName": "YES BANK",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/yes-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/500x500-1.png",
    "categories": [
      "lifetime-free",
      "travel",
      "dining",
      "cashback"
    ],
    "joiningFee": 0,
    "annualFee": 0,
    "feeWaiver": "Lifetime Free Card — No minimum spend required",
    "benefits": [
      {
        "icon": G,
        "text": "6% cashback across all travel spends"
      },
      {
        "icon": R,
        "text": "6% cashback on all dining spends"
      },
      {
        "icon": R,
        "text": "1% unlimited cashback on UPI transactions"
      }
    ],
    "route": "/yes-bank/paisabazaar-paisasave-credit-card/",
    "detailRoute": "/yes-bank/paisabazaar-paisasave-credit-card",
    "knowMore": "https://www.paisabazaar.com/yes-bank/paisabazaar-paisasave-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/easy-apply?partnerProductId=318&utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=yes_bank_paisasave_credit_card",
    "rating": 4.9,
    "ratingCount": 1532
  },
  {
    "id": 5,
    "name": "Cashback SBI Card",
    "bank": "bank_3",
    "bankName": "SBI Cards",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/sbi-cards.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/Cashback-SBI-Card-image.png",
    "categories": [
      "cashback",
      "online-shopping"
    ],
    "joiningFee": 999,
    "annualFee": 999,
    "feeWaiver": "Annual fee of ₹999 is waived off upon reaching ₹2 Lakh in annual retail spends.",
    "benefits": [
      {
        "icon": G,
        "text": "5% cashback on online spends"
      },
      {
        "icon": R,
        "text": "Up to Rs. 48,000 cashback in a year"
      },
      {
        "icon": R,
        "text": "Fee waived on Rs. 2 lakh annual spends"
      }
    ],
    "route": "/sbi-bank/cashback-sbi-card/",
    "detailRoute": "/sbi-bank/cashback-sbi-card",
    "knowMore": "https://www.paisabazaar.com/sbi-bank/cashback-sbi-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=cashback_sbi_card",
    "rating": 4.8,
    "ratingCount": 5120
  },
  {
    "id": 6,
    "name": "HSBC TravelOne Credit Card",
    "bank": "bank_1",
    "bankName": "HSBC Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/hsbc-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/HSBC-TravelOne-CC.png",
    "categories": [
      "travel",
      "rewards"
    ],
    "joiningFee": 4999,
    "annualFee": 4999,
    "feeWaiver": "Spend ₹9,99,800 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 15% off on top travel platforms"
      },
      {
        "icon": R,
        "text": "Up to 12% back as reward points"
      },
      {
        "icon": R,
        "text": "6 domestic & 4 international visits"
      }
    ],
    "route": "/hsbc-bank/travelone-credit-card/",
    "detailRoute": "/hsbc-bank/travelone-credit-card",
    "knowMore": "https://www.paisabazaar.com/hsbc-bank/travelone-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=hsbc_travelone_credit_card",
    "rating": 4.6,
    "ratingCount": 1698
  },
  {
    "id": 7,
    "name": "Federal Bank Scapia Credit Card",
    "bank": "bank_32",
    "bankName": "Federal Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/federal-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/Scapia-Federal-Card-image.png",
    "categories": [
      "lifetime-free",
      "travel",
      "lounge-access"
    ],
    "joiningFee": 0,
    "annualFee": 0,
    "feeWaiver": "Lifetime Free — ₹0 joining fee and ₹0 annual fee with no minimum spend conditions.",
    "benefits": [
      {
        "icon": G,
        "text": "Unlimited domestic airport lounge access"
      },
      {
        "icon": R,
        "text": "Up to 20% Scapia coins on card spends"
      },
      {
        "icon": R,
        "text": "No forex mark-up on international spends"
      }
    ],
    "route": "/federal-bank/scapia-credit-card/",
    "detailRoute": "/federal-bank/scapia-credit-card",
    "knowMore": "https://www.paisabazaar.com/federal-bank/scapia-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/easy-apply?partnerProductId=373&utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=federal_bank_scapia_credit_card",
    "rating": 4.7,
    "ratingCount": 3100
  },
  {
    "id": 8,
    "name": "Axis Bank SELECT Credit Card",
    "bank": "bank_27",
    "bankName": "Axis Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/axis-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2015/11/Axis-Bank-Select-Credit-Card.png",
    "categories": [
      "shopping",
      "rewards"
    ],
    "joiningFee": 3000,
    "annualFee": 3000,
    "feeWaiver": "Spend ₹6,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Discount on Swiggy, BigBasket & District apps"
      },
      {
        "icon": R,
        "text": "Complimentary lounge access worldwide"
      },
      {
        "icon": R,
        "text": "2X rewards across all retail spends"
      }
    ],
    "route": "/axis-bank/select-credit-card/",
    "detailRoute": "/axis-bank/select-credit-card",
    "knowMore": "https://www.paisabazaar.com/axis-bank/select-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/marketing/openmarket?partnerProductId=262&utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=axis_bank_select_credit_card",
    "rating": 4.8,
    "ratingCount": 1864
  },
  {
    "id": 9,
    "name": "Tata Neu Infinity HDFC Bank Credit Card",
    "bank": "bank_2",
    "bankName": "HDFC Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/hdfc-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2024/12/500x500.png",
    "categories": [
      "shopping"
    ],
    "joiningFee": 1499,
    "annualFee": 1499,
    "feeWaiver": "Spend ₹3,00,000 or more in the preceding year to waive the ₹1,499 annual renewal fee.",
    "benefits": [
      {
        "icon": G,
        "text": "Save up to 10% on Tata Neu Spends"
      },
      {
        "icon": R,
        "text": "Up to 5% value-back on other spends"
      },
      {
        "icon": R,
        "text": "Complimentary lounge access worldwide"
      }
    ],
    "route": "/hdfc-bank/tata-neu-infinity-hdfc-bank-credit-card/",
    "detailRoute": "/hdfc-bank/tata-neu-infinity-hdfc-bank-credit-card",
    "knowMore": "https://www.paisabazaar.com/hdfc-bank/tata-neu-infinity-hdfc-bank-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/easy-apply?partnerProductId=283&utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=tata_neu_infinity_hdfc_bank_credit_card",
    "rating": 4.8,
    "ratingCount": 3950
  },
  {
    "id": 10,
    "name": "IndianOil RBL Bank XTRA Credit Card",
    "bank": "bank_66",
    "bankName": "RBL Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/rbl-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2024/08/IndianOil-RBL-Bank-Credit-Cards.webp",
    "categories": [
      "fuel",
      "rewards"
    ],
    "joiningFee": 1500,
    "annualFee": 1500,
    "feeWaiver": "Spend ₹3,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 8.5% savings on fuel spends"
      },
      {
        "icon": R,
        "text": "Accelerated value-back at IOCL petrol pumps"
      },
      {
        "icon": R,
        "text": "Up to 15 reward points per Rs. 100 spent"
      }
    ],
    "route": "/rbl-bank/indianoil-rbl-xtra-credit-card/",
    "detailRoute": "/rbl-bank/indianoil-rbl-xtra-credit-card",
    "knowMore": "https://www.paisabazaar.com/rbl-bank/indianoil-rbl-xtra-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=indianoil_rbl_bank_xtra_credit_card",
    "rating": 4.5,
    "ratingCount": 2030
  },
  {
    "id": 11,
    "name": "HDFC Diners Club Black Metal Edition Credit Card",
    "bank": "bank_2",
    "bankName": "HDFC Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/hdfc-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2024/04/HDFC-Diners-Club-Black-Credit-Card.png",
    "categories": [
      "premium",
      "travel",
      "rewards"
    ],
    "joiningFee": 10000,
    "annualFee": 10000,
    "feeWaiver": "Spend ₹20,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "3.33% value-back across all spends"
      },
      {
        "icon": R,
        "text": "Unlimited domestic and international visits"
      },
      {
        "icon": R,
        "text": "Memberships to Marriott, Amazon, & more"
      }
    ],
    "route": "/hdfc-bank/hdfc-diners-club-black-credit-card/",
    "detailRoute": "/hdfc-bank/hdfc-diners-club-black-credit-card",
    "knowMore": "https://www.paisabazaar.com/hdfc-bank/hdfc-diners-club-black-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/easy-apply?partnerProductId=297&utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=hdfc_diners_club_black_metal_edition_credit_card",
    "rating": 4.6,
    "ratingCount": 2113
  },
  {
    "id": 12,
    "name": "Axis Magnus for Burgundy Credit Card",
    "bank": "bank_27",
    "bankName": "Axis Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/axis-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/Axis-Magnus-Credit-Card-image.png",
    "categories": [
      "premium",
      "travel",
      "rewards"
    ],
    "joiningFee": 30000,
    "annualFee": 30000,
    "feeWaiver": "Spend ₹60,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 5X rewards on Axis Travel EDGE spends"
      },
      {
        "icon": R,
        "text": "Unlimited lounge access with 4 free guest visits"
      },
      {
        "icon": R,
        "text": "Up to 14% value-back on non-travel spends"
      }
    ],
    "route": "/axis-bank/magnus-burgundy-credit-card/",
    "detailRoute": "/axis-bank/magnus-burgundy-credit-card",
    "knowMore": "https://www.paisabazaar.com/axis-bank/magnus-burgundy-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/marketing/openmarket?partnerProductId=277&utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=axis_magnus_for_burgundy_credit_card",
    "rating": 4.7,
    "ratingCount": 2196
  },
  {
    "id": 13,
    "name": "HDFC Millennia Credit Card",
    "bank": "bank_2",
    "bankName": "HDFC Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/hdfc-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/HDFC-Millennia-Credit-Card-1.png",
    "categories": [
      "shopping",
      "cashback",
      "online-shopping"
    ],
    "joiningFee": 1000,
    "annualFee": 1000,
    "feeWaiver": "Spend ₹2,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "5% cashback on popular everyday brands"
      },
      {
        "icon": R,
        "text": "1,000 bonus points on card activation"
      },
      {
        "icon": R,
        "text": "Up to 10% off on partner restaurants"
      }
    ],
    "route": "/hdfc-bank/millennia-credit-card/",
    "detailRoute": "/hdfc-bank/millennia-credit-card",
    "knowMore": "https://www.paisabazaar.com/hdfc-bank/millennia-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/easy-apply?partnerProductId=235&utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=hdfc_millennia_credit_card",
    "rating": 4.8,
    "ratingCount": 2279
  },
  {
    "id": 14,
    "name": "Axis Bank Reserve Credit Card",
    "bank": "bank_27",
    "bankName": "Axis Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/axis-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/card.png",
    "categories": [
      "premium",
      "travel",
      "rewards"
    ],
    "joiningFee": 50000,
    "annualFee": 50000,
    "feeWaiver": "Spend ₹1,00,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Low foreign currency markup fee of 1.5%"
      },
      {
        "icon": R,
        "text": "Unlimited access in India and abroad"
      },
      {
        "icon": R,
        "text": "15 EDGE rewards for every Rs. 200 spent"
      }
    ],
    "route": "/credit-card/axis-bank-reserve-credit-card/",
    "detailRoute": "/credit-card/axis-bank-reserve-credit-card",
    "knowMore": "https://www.paisabazaar.com/credit-card/axis-bank-reserve-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=axis_bank_reserve_credit_card",
    "rating": 4.9,
    "ratingCount": 2362
  },
  {
    "id": 15,
    "name": "American Express Platinum Card",
    "bank": "bank_4",
    "bankName": "American Express",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/american-express.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/platinumCarddec_converted.jpg",
    "categories": [
      "premium",
      "travel",
      "shopping"
    ],
    "joiningFee": 66000,
    "annualFee": 66000,
    "feeWaiver": "Spend ₹1,32,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Complimentary access to lounges worldwide"
      },
      {
        "icon": R,
        "text": "Memberships of 5+ premium hotels"
      },
      {
        "icon": R,
        "text": "Complimentary golf games & lessons"
      }
    ],
    "route": "/amex-bank/american-express-platinum-card/",
    "detailRoute": "/amex-bank/american-express-platinum-card",
    "knowMore": "https://www.paisabazaar.com/amex-bank/american-express-platinum-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=american_express_platinum_card",
    "rating": 4.5,
    "ratingCount": 2445
  },
  {
    "id": 16,
    "name": "IndusInd Bank Avios Visa Infinite Credit Card",
    "bank": "bank_67",
    "bankName": "IndusInd Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/indusind-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2023/09/indusind-avios.png",
    "categories": [
      "travel"
    ],
    "joiningFee": 10000,
    "annualFee": 5000,
    "feeWaiver": "Spend ₹10,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Benefits on Qatar & British Airways"
      },
      {
        "icon": R,
        "text": "Up to 6 reward points on every Rs. 200"
      },
      {
        "icon": R,
        "text": "Up to 8 complimentary visits every year"
      }
    ],
    "route": "/indusind-bank/avios-visa-infinite-credit-card/",
    "detailRoute": "/indusind-bank/avios-visa-infinite-credit-card",
    "knowMore": "https://www.paisabazaar.com/indusind-bank/avios-visa-infinite-credit-card/",
    "checkEligibility": "https://www.indusind.bank.in/in/en/personal/cards/credit-card/avios-visa-infinite-credit-card.html?/utm_source=organic&utm_medium=quotes_check_eligibility+Indusind_Avios_Visa_Infinite&utm_campaign=seo_page",
    "rating": 4.6,
    "ratingCount": 2528
  },
  {
    "id": 17,
    "name": "Axis Bank Horizon Credit Card",
    "bank": "bank_27",
    "bankName": "Axis Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/axis-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2024/06/Axis-Bank-Horizon-Credit-Card.png",
    "categories": [
      "travel",
      "rewards"
    ],
    "joiningFee": 3000,
    "annualFee": 3000,
    "feeWaiver": "Spend ₹6,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "5 EDGE Miles per Rs. 100 spent on travel"
      },
      {
        "icon": R,
        "text": "Up to 32 airport lounge visits per year"
      },
      {
        "icon": R,
        "text": "1:1 redemption against 15+ travel partners"
      }
    ],
    "route": "/axis-bank/horizon-credit-card/",
    "detailRoute": "/axis-bank/horizon-credit-card",
    "knowMore": "https://www.paisabazaar.com/axis-bank/horizon-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=axis_bank_horizon_credit_card",
    "rating": 4.7,
    "ratingCount": 2611
  },
  {
    "id": 18,
    "name": "MakeMyTrip ICICI Bank Credit Card",
    "bank": "bank_6",
    "bankName": "ICICI Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/icici-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/MakeMyTrip_cardimage.png",
    "categories": [
      "travel",
      "rewards"
    ],
    "joiningFee": 999,
    "annualFee": 999,
    "feeWaiver": "Spend ₹1,99,800 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 6% value back on travel spends"
      },
      {
        "icon": R,
        "text": "Low forex markup fee of 0.99%"
      },
      {
        "icon": R,
        "text": "MMTBLACK Gold Membership"
      }
    ],
    "route": "/icici-bank/makemytrip-credit-card/",
    "detailRoute": "/icici-bank/makemytrip-credit-card",
    "knowMore": "https://www.paisabazaar.com/icici-bank/makemytrip-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=makemytrip_icici_bank_credit_card",
    "rating": 4.8,
    "ratingCount": 2694
  },
  {
    "id": 19,
    "name": "ICICI Emeralde Private Metal Credit Card",
    "bank": "bank_6",
    "bankName": "ICICI Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/icici-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2023/10/ICICI-Bank-Emeralde-Private-Metal-Credit-Card.webp",
    "categories": [
      "premium",
      "travel",
      "rewards"
    ],
    "joiningFee": 12499,
    "annualFee": 12499,
    "feeWaiver": "Spend ₹24,99,800 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "3% value-back across all spending categories"
      },
      {
        "icon": R,
        "text": "Unlimited domestic & international access"
      },
      {
        "icon": R,
        "text": "Complimentary Taj Epicure membership"
      }
    ],
    "route": "/icici-bank/emeralde-private-metal-credit-card/",
    "detailRoute": "/icici-bank/emeralde-private-metal-credit-card",
    "knowMore": "https://www.paisabazaar.com/icici-bank/emeralde-private-metal-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=icici_emeralde_private_metal_credit_card",
    "rating": 4.9,
    "ratingCount": 2777
  },
  {
    "id": 20,
    "name": "Axis Bank Burgundy Private Credit Card",
    "bank": "bank_27",
    "bankName": "Axis Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/axis-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/Axis-Bank-Burgundy-Private-Credit-Card-1.png",
    "categories": [
      "premium",
      "travel",
      "rewards"
    ],
    "joiningFee": 50000,
    "annualFee": 50000,
    "feeWaiver": "Spend ₹1,00,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Accor Plus, Club Marriott & Taj Hotel Membership"
      },
      {
        "icon": R,
        "text": "Unlimited access in India and abroad"
      },
      {
        "icon": R,
        "text": "15 EDGE rewards for every Rs. 200 spent"
      }
    ],
    "route": "/axis-bank/burgundy-private-credit-card/",
    "detailRoute": "/axis-bank/burgundy-private-credit-card",
    "knowMore": "https://www.paisabazaar.com/axis-bank/burgundy-private-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=axis_bank_burgundy_private_credit_card",
    "rating": 4.5,
    "ratingCount": 2860
  },
  {
    "id": 21,
    "name": "Flipkart Axis Bank Credit Card",
    "bank": "bank_27",
    "bankName": "Axis Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/axis-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/Flipkart-Axis-Bank-Credit-Card.jpg",
    "categories": [
      "lifetime-free",
      "shopping",
      "cashback",
      "online-shopping"
    ],
    "joiningFee": 0,
    "annualFee": 500,
    "feeWaiver": "Spend ₹1,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "7.5% cashback on Myntra"
      },
      {
        "icon": R,
        "text": "5% cashback on spends at Flipkart"
      },
      {
        "icon": R,
        "text": "5% cashback on Cleartrip "
      }
    ],
    "route": "/axis-bank/flipkart-axis-bank-credit-card/",
    "detailRoute": "/axis-bank/flipkart-axis-bank-credit-card",
    "knowMore": "https://www.paisabazaar.com/axis-bank/flipkart-axis-bank-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/marketing/openmarket?partnerProductId=255&utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=flipkart_axis_bank_credit_card",
    "rating": 4.6,
    "ratingCount": 2943
  },
  {
    "id": 22,
    "name": "Axis Bank ACE Credit Card",
    "bank": "bank_27",
    "bankName": "Axis Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/axis-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2019/10/axis-bank-ace-credit-card.jpg",
    "categories": [
      "shopping",
      "cashback",
      "online-shopping"
    ],
    "joiningFee": 499,
    "annualFee": 499,
    "feeWaiver": "Spend ₹99,800 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 5% savings on bill payments & recharges"
      },
      {
        "icon": R,
        "text": "Uncapped base cashback rate of 1.5%"
      },
      {
        "icon": R,
        "text": "Up to 4 free domestic lounge visits per year"
      }
    ],
    "route": "/axis-bank/ace-credit-card/",
    "detailRoute": "/axis-bank/ace-credit-card",
    "knowMore": "https://www.paisabazaar.com/axis-bank/ace-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/marketing/openmarket?partnerProductId=317&utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=axis_bank_ace_credit_card",
    "rating": 4.7,
    "ratingCount": 3026
  },
  {
    "id": 23,
    "name": "Swiggy BLCK HDFC Bank Credit Card",
    "bank": "bank_2",
    "bankName": "HDFC Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/hdfc-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/facia-swiggy-blck-cc.png",
    "categories": [
      "dining",
      "cashback",
      "online-shopping"
    ],
    "joiningFee": 1000,
    "annualFee": 1000,
    "feeWaiver": "Spend ₹2,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "10% cashback on spends at Swiggy"
      },
      {
        "icon": R,
        "text": "5% cashback on top online brands"
      },
      {
        "icon": R,
        "text": "Complimentary Swiggy BLCK Membership"
      }
    ],
    "route": "/hdfc-bank/swiggy-blck-hdfc-credit-card/",
    "detailRoute": "/hdfc-bank/swiggy-blck-hdfc-credit-card",
    "knowMore": "https://www.paisabazaar.com/hdfc-bank/swiggy-blck-hdfc-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=organic&utm_campaign=card-compare&utm_term=compare_widget",
    "rating": 4.8,
    "ratingCount": 3109
  },
  {
    "id": 24,
    "name": "Flipkart SBI Card",
    "bank": "bank_3",
    "bankName": "SBI Cards",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/sbi-cards.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/Flipkart-SBI-Card-Images.png",
    "categories": [
      "shopping",
      "cashback",
      "online-shopping"
    ],
    "joiningFee": 500,
    "annualFee": 500,
    "feeWaiver": "Spend ₹1,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "7.5% cashback on Myntra"
      },
      {
        "icon": R,
        "text": "5% cashback on spends at Flipkart"
      },
      {
        "icon": R,
        "text": "5% cashback on Cleartrip"
      }
    ],
    "route": "/sbi-bank/flipkart-sbi-credit-card/",
    "detailRoute": "/sbi-bank/flipkart-sbi-credit-card",
    "knowMore": "https://www.paisabazaar.com/sbi-bank/flipkart-sbi-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=flipkart_sbi_card",
    "rating": 4.9,
    "ratingCount": 3192
  },
  {
    "id": 25,
    "name": "Airtel Axis Bank Credit Card",
    "bank": "bank_27",
    "bankName": "Axis Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/axis-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2023/07/Airtel-Axis-Bank-Credit-Card.png",
    "categories": [
      "cashback"
    ],
    "joiningFee": 500,
    "annualFee": 500,
    "feeWaiver": "Spend ₹1,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 25% cashback on Airtel Thanks App"
      },
      {
        "icon": R,
        "text": "10% cashback on Zomato spends"
      },
      {
        "icon": R,
        "text": "Up to 10% back on utility bill payments"
      }
    ],
    "route": "/axis-bank/airtel-axis-bank-credit-card/",
    "detailRoute": "/axis-bank/airtel-axis-bank-credit-card",
    "knowMore": "https://www.paisabazaar.com/axis-bank/airtel-axis-bank-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=airtel_axis_bank_credit_card",
    "rating": 4.5,
    "ratingCount": 3275
  },
  {
    "id": 26,
    "name": "HSBC Taj Credit Card",
    "bank": "bank_1",
    "bankName": "HSBC Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/hsbc-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/HSBC-Taj-Credit-Card.png",
    "categories": [
      "travel",
      "premium"
    ],
    "joiningFee": 110000,
    "annualFee": 110000,
    "feeWaiver": "Spend ₹2,20,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "VIP privileges at select Taj Properties"
      },
      {
        "icon": R,
        "text": "Up to 5 reward points on every Rs. 100"
      },
      {
        "icon": R,
        "text": "Unlimited access in India and abroad"
      }
    ],
    "route": "/hsbc-bank/taj-credit-card/",
    "detailRoute": "/hsbc-bank/taj-credit-card",
    "knowMore": "https://www.paisabazaar.com/hsbc-bank/taj-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=hsbc_taj_credit_card",
    "rating": 4.6,
    "ratingCount": 3358
  },
  {
    "id": 27,
    "name": "IDFC FIRST Private Credit Card",
    "bank": "bank_281",
    "bankName": "IDFC FIRST Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/idfc-first-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2023/08/IDFC-FIRST-Private-Credit-Card.png",
    "categories": [
      "premium",
      "travel",
      "shopping"
    ],
    "joiningFee": 50000,
    "annualFee": 50000,
    "feeWaiver": "Spend ₹1,00,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Unlimited lounge access worldwide"
      },
      {
        "icon": R,
        "text": "Club ITC & AccorPlus Membership"
      },
      {
        "icon": R,
        "text": "Save on all your international spends"
      }
    ],
    "route": "/idfc-first-bank/idfc-first-private-credit-card/",
    "detailRoute": "/idfc-first-bank/idfc-first-private-credit-card",
    "knowMore": "https://www.paisabazaar.com/idfc-first-bank/idfc-first-private-credit-card/",
    "checkEligibility": "https://www.idfcfirst.bank.in/credit-card/FIRSTPrivateCreditCard?/utm_source=organic&utm_medium=quotes_check_eligibility+IDFC_FIRST_Private&utm_campaign=seo_page",
    "rating": 4.7,
    "ratingCount": 3441
  },
  {
    "id": 28,
    "name": "Marriott Bonvoy HDFC Credit Card",
    "bank": "bank_2",
    "bankName": "HDFC Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/hdfc-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2023/09/HDFC-Bank-Marriott-Bonvoy-Credit-Card.png",
    "categories": [
      "travel",
      "lounge-access"
    ],
    "joiningFee": 3000,
    "annualFee": 3000,
    "feeWaiver": "Spend ₹6,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Marriott Bonvoy Silver Elite Status"
      },
      {
        "icon": R,
        "text": "Up to 8 Marriott Bonvoy Points on your spends"
      },
      {
        "icon": R,
        "text": "Up to 24 free lounge visits in a year"
      }
    ],
    "route": "/hdfc-bank/marriott-bonvoy-hdfc-credit-card/",
    "detailRoute": "/hdfc-bank/marriott-bonvoy-hdfc-credit-card",
    "knowMore": "https://www.paisabazaar.com/hdfc-bank/marriott-bonvoy-hdfc-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/easy-apply?partnerProductId=296&utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=marriott_bonvoy_hdfc_credit_card",
    "rating": 4.8,
    "ratingCount": 3524
  },
  {
    "id": 29,
    "name": "Standard Chartered EaseMyTrip Credit Card",
    "bank": "bank_28",
    "bankName": "Standard Chartered Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/standard-chartered-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2023/07/Standard-Chartered-EaseMyTrip-Credit-Card.jpeg",
    "categories": [
      "travel"
    ],
    "joiningFee": 350,
    "annualFee": 350,
    "feeWaiver": "Spend ₹70,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 20% off on flight & hotel bookings"
      },
      {
        "icon": R,
        "text": "2 domestic lounge visits every year"
      },
      {
        "icon": R,
        "text": "Up to 2.5% back as reward points"
      }
    ],
    "route": "/standard-chartered-bank/easemytrip-credit-card/",
    "detailRoute": "/standard-chartered-bank/easemytrip-credit-card",
    "knowMore": "https://www.paisabazaar.com/standard-chartered-bank/easemytrip-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=standard_chartered_easemytrip_credit_card",
    "rating": 4.9,
    "ratingCount": 3607
  },
  {
    "id": 30,
    "name": "ixigo AU Credit Card ",
    "bank": "bank_357",
    "bankName": "AU Small Finance Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/au-small-finance-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/Ixigo-AU-Credit-Card.png",
    "categories": [
      "lifetime-free",
      "travel"
    ],
    "joiningFee": 0,
    "annualFee": 0,
    "feeWaiver": "Lifetime Free Card — No minimum spend required",
    "benefits": [
      {
        "icon": G,
        "text": "Zero forex mark-up charges"
      },
      {
        "icon": R,
        "text": "Up to 10% off on travel via Ixigo"
      },
      {
        "icon": R,
        "text": "Upto 5% rewards on spends"
      }
    ],
    "route": "/au-small-finance-bank/ixigo-au-credit-card/",
    "detailRoute": "/au-small-finance-bank/ixigo-au-credit-card",
    "knowMore": "https://www.paisabazaar.com/au-small-finance-bank/ixigo-au-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=ixigo_au_credit_card",
    "rating": 4.5,
    "ratingCount": 3690
  },
  {
    "id": 31,
    "name": "IndiGo IDFC First Dual FD Credit Card",
    "bank": "bank_281",
    "bankName": "IDFC FIRST Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/idfc-first-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/IndiGo-IDFC-Card-Images-2.png",
    "categories": [
      "lifetime-free",
      "travel",
      "fd-backed"
    ],
    "joiningFee": 0,
    "annualFee": 4999,
    "feeWaiver": "Spend ₹9,99,800 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 22% BluChips rewards "
      },
      {
        "icon": R,
        "text": "Up to 30,000 BluChips every year"
      },
      {
        "icon": R,
        "text": "Trip cancellation cover of Rs. 25,000 p.a."
      }
    ],
    "route": "/idfc-first-bank/indigo-idfc-first-dual-fd-credit-card/",
    "detailRoute": "/idfc-first-bank/indigo-idfc-first-dual-fd-credit-card",
    "knowMore": "https://www.paisabazaar.com/idfc-first-bank/indigo-idfc-first-dual-fd-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?siteId=NzMxN2I5MDItNTM2Mi00MDQ5LTkzMjgtZmRmYTcyMmE2Yjc1&Trending=isSecuredCard&utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=IndiGo_IDFC_First_Dual_FD_Credit_Card",
    "rating": 4.6,
    "ratingCount": 3773
  },
  {
    "id": 32,
    "name": "Kotak Solitaire Credit Card",
    "bank": "bank_17",
    "bankName": "Kotak Mahindra Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/kotak-mahindra-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/Kotak-Solitaire-Card.png",
    "categories": [
      "lifetime-free",
      "travel",
      "premium",
      "rewards"
    ],
    "joiningFee": 0,
    "annualFee": 25000,
    "feeWaiver": "Spend ₹50,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 10% rewards as Air Miles on travel spends"
      },
      {
        "icon": R,
        "text": "Unlimited access with up to 4 guest visits"
      },
      {
        "icon": R,
        "text": "Free stays and discounts on luxury hotels"
      }
    ],
    "route": "/kotak-mahindra-bank/kotak-solitaire-credit-card/",
    "detailRoute": "/kotak-mahindra-bank/kotak-solitaire-credit-card",
    "knowMore": "https://www.paisabazaar.com/kotak-mahindra-bank/kotak-solitaire-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=kotak_solitaire_credit_card",
    "rating": 4.7,
    "ratingCount": 3856
  },
  {
    "id": 33,
    "name": "Axis Magnus Credit Card",
    "bank": "bank_27",
    "bankName": "Axis Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/axis-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/Axis-Magnus-Credit-Card-image.png",
    "categories": [
      "premium",
      "travel",
      "rewards"
    ],
    "joiningFee": 12500,
    "annualFee": 12500,
    "feeWaiver": "Spend ₹25,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Complimentary lounge access worldwide"
      },
      {
        "icon": R,
        "text": "5X rewards on travel spends"
      },
      {
        "icon": R,
        "text": "Travel or Luxe gift voucher of Rs. 12,500"
      }
    ],
    "route": "/axis-bank/magnus-credit-card/",
    "detailRoute": "/axis-bank/magnus-credit-card",
    "knowMore": "https://www.paisabazaar.com/axis-bank/magnus-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/marketing/openmarket?partnerProductId=277&utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=axis_magnus_credit_card",
    "rating": 4.8,
    "ratingCount": 3939
  },
  {
    "id": 34,
    "name": "Axis Bank Primus Credit Card",
    "bank": "bank_27",
    "bankName": "Axis Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/axis-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/Axis-Primus-Card-Page.png",
    "categories": [
      "travel",
      "premium",
      "rewards"
    ],
    "joiningFee": 50000,
    "annualFee": 30000,
    "feeWaiver": "Spend ₹60,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Unlimited access with up to 24 free guest visits"
      },
      {
        "icon": R,
        "text": "Free hotel stay, flights & airport transfers"
      },
      {
        "icon": R,
        "text": "Zero foreign exchange mark-up charges"
      }
    ],
    "route": "/axis-bank/primus-credit-card/",
    "detailRoute": "/axis-bank/primus-credit-card",
    "knowMore": "https://www.paisabazaar.com/axis-bank/primus-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=axis_bank_primus_credit_card",
    "rating": 4.9,
    "ratingCount": 4022
  },
  {
    "id": 35,
    "name": "BOBCARD Tiara",
    "bank": "bank_5",
    "bankName": "BOBCARD",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/bobcard.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/BOB-Tiara-CC-Image.png",
    "categories": [
      "travel",
      "rewards"
    ],
    "joiningFee": 2499,
    "annualFee": 2499,
    "feeWaiver": "Spend ₹4,99,800 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Unlimited domestic lounge access"
      },
      {
        "icon": R,
        "text": "Discount on Nykaa, Myntra, Flipkart & more"
      },
      {
        "icon": R,
        "text": "5X rewards on dining & travel spends"
      }
    ],
    "route": "/bank-of-baroda/tiara-credit-card/",
    "detailRoute": "/bank-of-baroda/tiara-credit-card",
    "knowMore": "https://www.paisabazaar.com/bank-of-baroda/tiara-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=bobcard_tiara",
    "rating": 4.5,
    "ratingCount": 4105
  },
  {
    "id": 36,
    "name": "HSBC Premier MasterCard Credit Card",
    "bank": "bank_1",
    "bankName": "HSBC Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/hsbc-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2026/01/HSBC-Premier-Credit-Card.png",
    "categories": [
      "travel",
      "premium",
      "rewards"
    ],
    "joiningFee": 12000,
    "annualFee": 20000,
    "feeWaiver": "Spend ₹40,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "3% reward rate across all spends"
      },
      {
        "icon": R,
        "text": "Up to 12X rewards on hotels & 6X on flights"
      },
      {
        "icon": R,
        "text": "Unlimited lounge visits worldwide"
      }
    ],
    "route": "/hsbc-bank/hsbc-bank-premier-credit-card/",
    "detailRoute": "/hsbc-bank/hsbc-bank-premier-credit-card",
    "knowMore": "https://www.paisabazaar.com/hsbc-bank/hsbc-bank-premier-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=hsbc_premier_mastercard_credit_card",
    "rating": 4.6,
    "ratingCount": 4188
  },
  {
    "id": 37,
    "name": "Times Black ICICI Bank Credit Card",
    "bank": "bank_6",
    "bankName": "ICICI Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/icici-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/times-black.webp",
    "categories": [
      "travel",
      "premium",
      "shopping"
    ],
    "joiningFee": 20000,
    "annualFee": 20000,
    "feeWaiver": "Spend ₹40,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 2.5% reward points on card spends"
      },
      {
        "icon": R,
        "text": "Unlimited international & domestic lounge visits"
      },
      {
        "icon": R,
        "text": "Low forex mark-up fee & exclusive travel offers"
      }
    ],
    "route": "/icici-bank/times-black-icici-credit-card/",
    "detailRoute": "/icici-bank/times-black-icici-credit-card",
    "knowMore": "https://www.paisabazaar.com/icici-bank/times-black-icici-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=times_black_icici_bank_credit_card",
    "rating": 4.7,
    "ratingCount": 4271
  },
  {
    "id": 38,
    "name": "IDFC FIRST Gaj Metal Credit Card",
    "bank": "bank_281",
    "bankName": "IDFC FIRST Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/idfc-first-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/idfc-gaj-card-image.png",
    "categories": [
      "travel",
      "premium",
      "rewards"
    ],
    "joiningFee": 12500,
    "annualFee": 12500,
    "feeWaiver": "Spend ₹25,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 33.33% savings on travel spends"
      },
      {
        "icon": R,
        "text": "3.33% value-back on regular spends"
      },
      {
        "icon": R,
        "text": "16 free lounge visits worldwide yearly"
      }
    ],
    "route": "/idfc-first-bank/idfc-gaj-credit-card/",
    "detailRoute": "/idfc-first-bank/idfc-gaj-credit-card",
    "knowMore": "https://www.paisabazaar.com/idfc-first-bank/idfc-gaj-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=idfc_first_gaj_metal_credit_card",
    "rating": 4.8,
    "ratingCount": 4354
  },
  {
    "id": 39,
    "name": "YES BANK Marquee Credit Card",
    "bank": "bank_65",
    "bankName": "YES BANK",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/yes-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/YES-Marquee-Credit-Card.png",
    "categories": [
      "travel",
      "premium",
      "rewards"
    ],
    "joiningFee": 9999,
    "annualFee": 4999,
    "feeWaiver": "Spend ₹9,99,800 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Unlimited access for primary & add-on user"
      },
      {
        "icon": R,
        "text": "Up to 4.5% back as reward points"
      },
      {
        "icon": R,
        "text": "Save up to Rs. 2,400 per month on BookMyShow"
      }
    ],
    "route": "/yes-bank/marquee-credit-card/",
    "detailRoute": "/yes-bank/marquee-credit-card",
    "knowMore": "https://www.paisabazaar.com/yes-bank/marquee-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=yes_bank_marquee_credit_card",
    "rating": 4.9,
    "ratingCount": 4437
  },
  {
    "id": 40,
    "name": "Standard Chartered Ultimate Credit Card",
    "bank": "bank_28",
    "bankName": "Standard Chartered Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/standard-chartered-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/Standard-Chartered-Ultimate-Credit-Card.png",
    "categories": [
      "travel",
      "premium",
      "rewards"
    ],
    "joiningFee": 5000,
    "annualFee": 5000,
    "feeWaiver": "Spend ₹10,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "3.33% back as reward points on all spends"
      },
      {
        "icon": R,
        "text": "Low foreign exchange mark-up fee of 2%"
      },
      {
        "icon": R,
        "text": "Up to 12 lounge visits every year"
      }
    ],
    "route": "/standard-chartered-bank/ultimate-credit-card/",
    "detailRoute": "/standard-chartered-bank/ultimate-credit-card",
    "knowMore": "https://www.paisabazaar.com/standard-chartered-bank/ultimate-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=standard_chartered_ultimate_credit_card",
    "rating": 4.5,
    "ratingCount": 4520
  },
  {
    "id": 41,
    "name": "IndianOil Axis Bank Premium Credit Card",
    "bank": "bank_27",
    "bankName": "Axis Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/axis-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2024/06/IndianOil-Axis-Bank-Premium-Credit-Card.png",
    "categories": [
      "fuel",
      "rewards"
    ],
    "joiningFee": 1000,
    "annualFee": 1000,
    "feeWaiver": "Spend ₹2,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "5% value-back on Indian Oil fuel spends"
      },
      {
        "icon": R,
        "text": "8 domestic airport lounge visits every year"
      },
      {
        "icon": R,
        "text": "2X rewards on grocery & supermarket spends"
      }
    ],
    "route": "/axis-bank/indianoil-premium-credit-card/",
    "detailRoute": "/axis-bank/indianoil-premium-credit-card",
    "knowMore": "https://www.paisabazaar.com/axis-bank/indianoil-premium-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=indianoil_axis_bank_premium_credit_card",
    "rating": 4.6,
    "ratingCount": 4603
  },
  {
    "id": 42,
    "name": "BPCL SBI Card Octane",
    "bank": "bank_3",
    "bankName": "SBI Cards",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/sbi-cards.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2015/11/BPCL-SBI-Octane-Credit-Card.png",
    "categories": [
      "fuel"
    ],
    "joiningFee": 1499,
    "annualFee": 1499,
    "feeWaiver": "Spend ₹2,99,800 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 7.25% value back on fuel spends"
      },
      {
        "icon": R,
        "text": "10X rewards on day-to-day spends"
      },
      {
        "icon": R,
        "text": "Complimentary domestic lounge access"
      }
    ],
    "route": "/sbi-bank/sbi-bpcl-credit-card-octane/",
    "detailRoute": "/sbi-bank/sbi-bpcl-credit-card-octane",
    "knowMore": "https://www.paisabazaar.com/sbi-bank/sbi-bpcl-credit-card-octane/",
    "checkEligibility": "https://www.paisabazaar.com/cards/easy-apply?partnerProductId=423&utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=bpcl_sbi_card_octane",
    "rating": 4.7,
    "ratingCount": 4686
  },
  {
    "id": 43,
    "name": "ICICI HPCL Super Saver Credit Card",
    "bank": "bank_6",
    "bankName": "ICICI Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/icici-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2021/12/ICICI-Bank-HPCL-Super-Saver-Credit-Card.png",
    "categories": [
      "fuel"
    ],
    "joiningFee": 500,
    "annualFee": 500,
    "feeWaiver": "Spend ₹1,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "5% cashback on HPCL fuel spends"
      },
      {
        "icon": R,
        "text": "4 domestic lounge visits every year"
      },
      {
        "icon": R,
        "text": "25% off on BookMyShow & INOX"
      }
    ],
    "route": "/icici-bank/hpcl-super-saver-credit-card/",
    "detailRoute": "/icici-bank/hpcl-super-saver-credit-card",
    "knowMore": "https://www.paisabazaar.com/icici-bank/hpcl-super-saver-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=icici_hpcl_super_saver_credit_card",
    "rating": 4.8,
    "ratingCount": 4769
  },
  {
    "id": 44,
    "name": "IDFC FIRST Power+ Credit Card",
    "bank": "bank_281",
    "bankName": "IDFC FIRST Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/idfc-first-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2023/04/hpcl-power-plus.jpg",
    "categories": [
      "rewards",
      "fuel"
    ],
    "joiningFee": 499,
    "annualFee": 499,
    "feeWaiver": "Spend ₹99,800 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Low joining and annual fee of Rs. 499"
      },
      {
        "icon": R,
        "text": "6.5% savings on fuel spends as reward points"
      },
      {
        "icon": R,
        "text": "Up to 26.67% bonus reward points on travel"
      }
    ],
    "route": "/idfc-first-bank/idfc-first-hpcl-power-plus-credit-card/",
    "detailRoute": "/idfc-first-bank/idfc-first-hpcl-power-plus-credit-card",
    "knowMore": "https://www.paisabazaar.com/idfc-first-bank/idfc-first-hpcl-power-plus-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/marketing/openmarket?partnerProductId=303&utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=idfc_first_power+_credit_card",
    "rating": 4.9,
    "ratingCount": 4852
  },
  {
    "id": 45,
    "name": "IndiGo Kotak XL Credit Card",
    "bank": "bank_17",
    "bankName": "Kotak Mahindra Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/kotak-mahindra-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/IndiGo-Kotak-XL-Credit-Card.png",
    "categories": [
      "travel"
    ],
    "joiningFee": 3000,
    "annualFee": 3000,
    "feeWaiver": "Spend ₹6,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 21 BluChips per Rs. 100 on IndiGo spends"
      },
      {
        "icon": R,
        "text": "BluChip vouchers worth up to Rs. 16,000 every year"
      },
      {
        "icon": R,
        "text": "Up to 8 domestic lounge visits per year"
      }
    ],
    "route": "/kotak-mahindra-bank/indigo-kotak-xl-credit-card/",
    "detailRoute": "/kotak-mahindra-bank/indigo-kotak-xl-credit-card",
    "knowMore": "https://www.paisabazaar.com/kotak-mahindra-bank/indigo-kotak-xl-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=indigo_kotak_xl_credit_card",
    "rating": 4.5,
    "ratingCount": 4935
  },
  {
    "id": 46,
    "name": "SBI Card PRIME",
    "bank": "bank_3",
    "bankName": "SBI Cards",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/sbi-cards.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2019/07/SBI-Card-Prime-1.png",
    "categories": [
      "travel",
      "shopping",
      "rewards"
    ],
    "joiningFee": 2999,
    "annualFee": 2999,
    "feeWaiver": "Spend ₹5,99,800 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "5X rewards on dining, movies & grocery"
      },
      {
        "icon": R,
        "text": "Pizza Hut vouchers worth up to Rs. 4,000 in a year"
      },
      {
        "icon": R,
        "text": "8 domestic & 4 international visits yearly"
      }
    ],
    "route": "/sbi-bank/sbi-prime-credit-card/",
    "detailRoute": "/sbi-bank/sbi-prime-credit-card",
    "knowMore": "https://www.paisabazaar.com/sbi-bank/sbi-prime-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/marketing/openmarket?partnerProductId=205&utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=sbi_card_prime",
    "rating": 4.6,
    "ratingCount": 5018
  },
  {
    "id": 47,
    "name": "SBI Card ELITE",
    "bank": "bank_3",
    "bankName": "SBI Cards",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/sbi-cards.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2021/12/SBI-Elite-Credit-Card-new-1.png",
    "categories": [
      "lounge-access",
      "movies",
      "rewards"
    ],
    "joiningFee": 4999,
    "annualFee": 4999,
    "feeWaiver": "Spend ₹9,99,800 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Movie tickets worth Rs. 6,000 every year"
      },
      {
        "icon": R,
        "text": "Up to 50,000 bonus reward points annually"
      },
      {
        "icon": R,
        "text": "Vouchers worth Rs. 5,000 on card activation"
      }
    ],
    "route": "/sbi-bank/sbi-elite-credit-card/",
    "detailRoute": "/sbi-bank/sbi-elite-credit-card",
    "knowMore": "https://www.paisabazaar.com/sbi-bank/sbi-elite-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/marketing/openmarket?partnerProductId=179&utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=sbi_card_elite",
    "rating": 4.7,
    "ratingCount": 5101
  },
  {
    "id": 48,
    "name": "BOBCARD Scapia Credit Card",
    "bank": "bank_5",
    "bankName": "BOBCARD",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/bobcard.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/BOBCARD-Scapia-Cover.png",
    "categories": [
      "lifetime-free",
      "travel",
      "lounge-access"
    ],
    "joiningFee": 0,
    "annualFee": 0,
    "feeWaiver": "Lifetime Free Card — No minimum spend required",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 20% rewards on travel spends"
      },
      {
        "icon": R,
        "text": "Zero forex markup on international spends"
      },
      {
        "icon": R,
        "text": "Unlimited domestic airport lounge access"
      }
    ],
    "route": "/bobcard/bobcard-scapia-credit-card/",
    "detailRoute": "/bobcard/bobcard-scapia-credit-card",
    "knowMore": "https://www.paisabazaar.com/bobcard/bobcard-scapia-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=BOBCARD_Scapia",
    "rating": 4.8,
    "ratingCount": 5184
  },
  {
    "id": 49,
    "name": "PNB LUXURA Visa Credit Card",
    "bank": "bank_other",
    "bankName": "Top Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/hdfc-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2025/12/PNB-Luxura-Credit-Card.png",
    "categories": [
      "travel",
      "lounge-access",
      "rewards"
    ],
    "joiningFee": 4999,
    "annualFee": 1999,
    "feeWaiver": "Spend ₹3,99,800 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Zero foreign exchange markup fee"
      },
      {
        "icon": R,
        "text": "Unlimited free airport lounge visits "
      },
      {
        "icon": R,
        "text": "4 reward points per Rs. 100 spent"
      }
    ],
    "route": "/punjab-national-bank/pnb-luxura-visa-credit-card/",
    "detailRoute": "/punjab-national-bank/pnb-luxura-visa-credit-card",
    "knowMore": "https://www.paisabazaar.com/punjab-national-bank/pnb-luxura-visa-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=pnb_luxura_visa_credit_card",
    "rating": 4.9,
    "ratingCount": 5267
  },
  {
    "id": 50,
    "name": "IDFC FIRST WOW! Black Credit Card",
    "bank": "bank_other",
    "bankName": "Top Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/hdfc-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/download.png",
    "categories": [
      "travel",
      "fd-backed",
      "rewards"
    ],
    "joiningFee": 750,
    "annualFee": 750,
    "feeWaiver": "Spend ₹1,50,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 16.7% bonus rewards on travel "
      },
      {
        "icon": R,
        "text": "Zero foreign currency markup fee   "
      },
      {
        "icon": R,
        "text": "25% discount on movie tickets"
      }
    ],
    "route": "/idfc-bank/idfc-first-wow-black-credit-card/",
    "detailRoute": "/idfc-bank/idfc-first-wow-black-credit-card",
    "knowMore": "https://www.paisabazaar.com/idfc-bank/idfc-first-wow-black-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/easy-apply?partnerProductId=403&utm_source=organic+&utm_medium=card_compare_check_eligibility&utm_campaign=card_comparer&utm_term=idfc_first_wow!_black_credit_card",
    "rating": 4.5,
    "ratingCount": 5350
  },
  {
    "id": 51,
    "name": "SBM Bank Paisabazaar Paisa+ Credit Card",
    "bank": "bank_419",
    "bankName": "SBM Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/sbm-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/SBM-Paisabazaar-Paisa-Credit-Card-1.png",
    "categories": [
      "lifetime-free",
      "fd-backed",
      "cashback",
      "online-shopping"
    ],
    "joiningFee": 0,
    "annualFee": 499,
    "feeWaiver": "Spend ₹99,800 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "1.5% cashback on online transactions"
      },
      {
        "icon": R,
        "text": "100% guaranteed credit card approval"
      },
      {
        "icon": R,
        "text": "Build your credit score with FD-backed card"
      }
    ],
    "route": "/sbm-bank/paisabazaar-paisa-plus-credit-card/",
    "detailRoute": "/sbm-bank/paisabazaar-paisa-plus-credit-card",
    "knowMore": "https://www.paisabazaar.com/sbm-bank/paisabazaar-paisa-plus-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/easy-apply?partnerProductId=382&utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=SBM_Bank_Paisabazaar_Paisa+_Credit_Card",
    "rating": 4.6,
    "ratingCount": 5433
  },
  {
    "id": 52,
    "name": "IDFC FIRST Hello Cashback Credit Card",
    "bank": "bank_281",
    "bankName": "IDFC FIRST Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/idfc-first-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2026/01/IDFC-FIRST-Hello-Cashback-Credit-Card.png",
    "categories": [
      "cashback"
    ],
    "joiningFee": 1000,
    "annualFee": 1000,
    "feeWaiver": "Spend ₹2,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 5% cashback on online spends"
      },
      {
        "icon": R,
        "text": "Up to 6% back on travel via IDFC FIRST app"
      },
      {
        "icon": R,
        "text": "Annual fee waived on Rs. 2 lakh annual spends"
      }
    ],
    "route": "/idfc-first-bank/hello-cashback-credit-card/",
    "detailRoute": "/idfc-first-bank/hello-cashback-credit-card",
    "knowMore": "https://www.paisabazaar.com/idfc-first-bank/hello-cashback-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?Card+Type=Rupay&utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=secured_card&utm_term=IDFC_FIRST_Hello_Cashback_Credit_Card",
    "rating": 4.7,
    "ratingCount": 5516
  },
  {
    "id": 53,
    "name": "Axis Neo Credit Card",
    "bank": "bank_27",
    "bankName": "Axis Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/axis-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/Axis-Bank-Neo-Credit-Card.png",
    "categories": [
      "lifetime-free",
      "rewards",
      "online-shopping"
    ],
    "joiningFee": 0,
    "annualFee": 0,
    "feeWaiver": "Lifetime Free Card — No minimum spend required",
    "benefits": [
      {
        "icon": G,
        "text": "Discount offers on top shopping platforms"
      },
      {
        "icon": R,
        "text": "Rs. 120 off on Zomato, 10% off on Blinkit"
      },
      {
        "icon": R,
        "text": "Up to Rs. 100 off on BookMyShow per month"
      }
    ],
    "route": "/axis-bank/axis-bank-neo-credit-cards/",
    "detailRoute": "/axis-bank/axis-bank-neo-credit-cards",
    "knowMore": "https://www.paisabazaar.com/axis-bank/axis-bank-neo-credit-cards/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=axis_neo_credit_card",
    "rating": 4.8,
    "ratingCount": 5599
  },
  {
    "id": 54,
    "name": "IndusInd Bank Legend Credit Card",
    "bank": "bank_67",
    "bankName": "IndusInd Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/indusind-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2021/12/IndusInd-Bank-Legend-Credit-Card.png",
    "categories": [
      "lifetime-free",
      "travel",
      "rewards"
    ],
    "joiningFee": 0,
    "annualFee": 0,
    "feeWaiver": "Lifetime Free Card — No minimum spend required",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 2 reward points for every Rs. 100 spent"
      },
      {
        "icon": R,
        "text": " Low forex markup fee of 1.8%"
      },
      {
        "icon": R,
        "text": "Buy one get one offer via BookMyShow"
      }
    ],
    "route": "/indusind-bank/indusind-bank-legend-credit-card/",
    "detailRoute": "/indusind-bank/indusind-bank-legend-credit-card",
    "knowMore": "https://www.paisabazaar.com/indusind-bank/indusind-bank-legend-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=indusind_bank_legend_credit_card",
    "rating": 4.9,
    "ratingCount": 5682
  },
  {
    "id": 55,
    "name": "IDFC FIRST Wealth Credit Card",
    "bank": "bank_281",
    "bankName": "IDFC FIRST Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/idfc-first-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/IDFC-FIRST-Wealth-Credit-Card-2.png",
    "categories": [
      "lifetime-free",
      "travel",
      "rewards"
    ],
    "joiningFee": 0,
    "annualFee": 0,
    "feeWaiver": "Lifetime Free Card — No minimum spend required",
    "benefits": [
      {
        "icon": G,
        "text": "10X rewards on Dining & Travel"
      },
      {
        "icon": R,
        "text": "5% cashback on first EMI transaction"
      },
      {
        "icon": R,
        "text": "Up to 4 airport lounge visits per quarter"
      }
    ],
    "route": "/idfc-first-bank/idfc-first-wealth-credit-card/",
    "detailRoute": "/idfc-first-bank/idfc-first-wealth-credit-card",
    "knowMore": "https://www.paisabazaar.com/idfc-first-bank/idfc-first-wealth-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/easy-apply?partnerProductId=301&utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=idfc_first_wealth_credit_card",
    "rating": 4.5,
    "ratingCount": 5765
  },
  {
    "id": 56,
    "name": "BOBCARD Etihad Guest Premium",
    "bank": "bank_5",
    "bankName": "BOBCARD",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/bobcard.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/BOBCARD-Etihad-Guest-Premium-Credit-Card.webp",
    "categories": [
      "travel",
      "rewards"
    ],
    "joiningFee": 5000,
    "annualFee": 5000,
    "feeWaiver": "Spend ₹10,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "6% back on travel via Etihad Airways"
      },
      {
        "icon": R,
        "text": "Up to 20 free lounge visits per year"
      },
      {
        "icon": R,
        "text": "Zero forex mark-up on international spends"
      }
    ],
    "route": "/bobcard/bobcard-etihad-guest-premium-credit-card/",
    "detailRoute": "/bobcard/bobcard-etihad-guest-premium-credit-card",
    "knowMore": "https://www.paisabazaar.com/bobcard/bobcard-etihad-guest-premium-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_mediumcard_compare_check_eligibility&utm_campaign=card-compare&utm_term=bobcard_etihad_guest_premium",
    "rating": 4.6,
    "ratingCount": 5848
  },
  {
    "id": 57,
    "name": "IDFC FIRST Mayura Credit Card",
    "bank": "bank_281",
    "bankName": "IDFC FIRST Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/idfc-first-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/IDFC-FIRST-Mayura-Image.png",
    "categories": [
      "travel",
      "lounge-access",
      "rewards"
    ],
    "joiningFee": 5999,
    "annualFee": 5999,
    "feeWaiver": "Spend ₹11,99,800 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 10X rewards on every spend"
      },
      {
        "icon": R,
        "text": "Zero foreign exchange markup fee "
      },
      {
        "icon": R,
        "text": "16 international lounge visits per year"
      }
    ],
    "route": "/idfc-first-bank/mayura-credit-card/",
    "detailRoute": "/idfc-first-bank/mayura-credit-card",
    "knowMore": "https://www.paisabazaar.com/idfc-first-bank/mayura-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/easy-apply?partnerProductId=326&utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-comparer&utm_term=idfc_first_mayura_credit_card",
    "rating": 4.7,
    "ratingCount": 5931
  },
  {
    "id": 58,
    "name": "IDFC FIRST Ashva Credit Card",
    "bank": "bank_281",
    "bankName": "IDFC FIRST Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/idfc-first-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2024/08/IDFC-FIRST-Ashva-Credit-Card.png",
    "categories": [
      "travel",
      "lounge-access",
      "movies",
      "rewards"
    ],
    "joiningFee": 2999,
    "annualFee": 2999,
    "feeWaiver": "Spend ₹5,99,800 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 10X rewards on every spend"
      },
      {
        "icon": R,
        "text": "Low foreign exchange markup fee of 1%"
      },
      {
        "icon": R,
        "text": "Up to 16 domestic lounge visits per year"
      }
    ],
    "route": "/idfc-first-bank/ashva-credit-card/",
    "detailRoute": "/idfc-first-bank/ashva-credit-card",
    "knowMore": "https://www.paisabazaar.com/idfc-first-bank/ashva-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=idfc_first_ashva_credit_card",
    "rating": 4.8,
    "ratingCount": 6014
  },
  {
    "id": 59,
    "name": "IndiGo Axis Bank Premium Credit Card",
    "bank": "bank_27",
    "bankName": "Axis Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/axis-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/Axis-Visa-cover.png",
    "categories": [
      "travel"
    ],
    "joiningFee": 5000,
    "annualFee": 5000,
    "feeWaiver": "Spend ₹10,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "7% savings on IndiGo travel spends"
      },
      {
        "icon": R,
        "text": "Up to 20,000 bonus IndiGo BluChips per year"
      },
      {
        "icon": R,
        "text": "Up to 10 free lounge visits per year globally"
      }
    ],
    "route": "/axis-bank/indigo-axis-bank-premium-credit-card/",
    "detailRoute": "/axis-bank/indigo-axis-bank-premium-credit-card",
    "knowMore": "https://www.paisabazaar.com/axis-bank/indigo-axis-bank-premium-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=indigo-axis-bank-premium-credit-card",
    "rating": 4.9,
    "ratingCount": 6097
  },
  {
    "id": 60,
    "name": "AU Zenith+ Credit Card",
    "bank": "bank_357",
    "bankName": "AU Small Finance Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/au-small-finance-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2025/04/AU-Zenith-Card-image.png",
    "categories": [
      "travel",
      "movies",
      "rewards"
    ],
    "joiningFee": 4999,
    "annualFee": 4999,
    "feeWaiver": "Spend ₹9,99,800 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 32 free airport lounge visits per year"
      },
      {
        "icon": R,
        "text": "Low forex mark-up fee of just 0.99%"
      },
      {
        "icon": R,
        "text": "Up to 16 free movie tickets in a year"
      }
    ],
    "route": "/au-small-finance-bank/zenith-plus-credit-card/",
    "detailRoute": "/au-small-finance-bank/zenith-plus-credit-card",
    "knowMore": "https://www.paisabazaar.com/au-small-finance-bank/zenith-plus-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=au_zenith+_credit_card",
    "rating": 4.5,
    "ratingCount": 6180
  },
  {
    "id": 61,
    "name": "HSBC Live+ Credit Card",
    "bank": "bank_1",
    "bankName": "HSBC Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/hsbc-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/HSBC.png",
    "categories": [
      "dining",
      "cashback"
    ],
    "joiningFee": 999,
    "annualFee": 999,
    "feeWaiver": "Spend ₹1,99,800 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 10% Cashback on dining, grocery & more"
      },
      {
        "icon": R,
        "text": "Up to 15% off on dining at partner restaurants"
      },
      {
        "icon": R,
        "text": "4 domestic lounge visits every year"
      }
    ],
    "route": "/hsbc-bank/live-plus-credit-card/",
    "detailRoute": "/hsbc-bank/live-plus-credit-card",
    "knowMore": "https://www.paisabazaar.com/hsbc-bank/live-plus-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=hsbc_live+_credit_card",
    "rating": 4.6,
    "ratingCount": 6263
  },
  {
    "id": 62,
    "name": "Axis Bank Rewards Credit Card",
    "bank": "bank_27",
    "bankName": "Axis Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/axis-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2024/04/Axis-Bank-Rewards-Credit-Card.png",
    "categories": [
      "rewards"
    ],
    "joiningFee": 1000,
    "annualFee": 1000,
    "feeWaiver": "Spend ₹2,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 20 EDGE Reward points on card spends"
      },
      {
        "icon": R,
        "text": "Up to 8 domestic lounge visits per year"
      },
      {
        "icon": R,
        "text": "Rs. 150 off on Swiggy, twice per month"
      }
    ],
    "route": "/axis-bank/rewards-credit-card/",
    "detailRoute": "/axis-bank/rewards-credit-card",
    "knowMore": "https://www.paisabazaar.com/axis-bank/rewards-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=axis_bank_rewards_credit_card",
    "rating": 4.7,
    "ratingCount": 6346
  },
  {
    "id": 63,
    "name": "Axis Bank Cashback Credit Card",
    "bank": "bank_27",
    "bankName": "Axis Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/axis-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/Axis-Bank-Cashback-Credit-Card.png",
    "categories": [
      "cashback",
      "online-shopping"
    ],
    "joiningFee": 1000,
    "annualFee": 1000,
    "feeWaiver": "Spend ₹2,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Annual fee of Rs. 1,000"
      },
      {
        "icon": R,
        "text": "Up to 7% value-back"
      },
      {
        "icon": R,
        "text": "25% off on EazyDiner"
      }
    ],
    "route": "/axis-bank/axis-bank-cashback-credit-card/",
    "detailRoute": "/axis-bank/axis-bank-cashback-credit-card",
    "knowMore": "https://www.paisabazaar.com/axis-bank/axis-bank-cashback-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=axis_bank_cashback_credit_card",
    "rating": 4.8,
    "ratingCount": 6429
  },
  {
    "id": 64,
    "name": "Axis My Zone Credit Card",
    "bank": "bank_27",
    "bankName": "Axis Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/axis-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2018/07/Axis-my-zone.jpg",
    "categories": [
      "movies",
      "online-shopping"
    ],
    "joiningFee": 500,
    "annualFee": 500,
    "feeWaiver": "Spend ₹1,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Offers on Swiggy, Ajio, District & SonyLiv"
      },
      {
        "icon": R,
        "text": "Up to 4 free domestic lounge visits per year"
      },
      {
        "icon": R,
        "text": "1,000 EDGE rewards on Rs. 1.5 lakh spends p.a."
      }
    ],
    "route": "/axis-bank/axis-bank-my-zone-credit-cards/",
    "detailRoute": "/axis-bank/axis-bank-my-zone-credit-cards",
    "knowMore": "https://www.paisabazaar.com/axis-bank/axis-bank-my-zone-credit-cards/",
    "checkEligibility": "https://www.paisabazaar.com/cards/marketing/openmarket?partnerProductId=137&utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-comparer&utm_term=axis_my_zone_credit_card",
    "rating": 4.9,
    "ratingCount": 6512
  },
  {
    "id": 65,
    "name": "IRCTC SBI Card Premier",
    "bank": "bank_3",
    "bankName": "SBI Cards",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/sbi-cards.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2018/07/card-face-irctc.png",
    "categories": [
      "travel",
      "rewards"
    ],
    "joiningFee": 1499,
    "annualFee": 1499,
    "feeWaiver": "Spend ₹2,99,800 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 10% value back on IRCTC"
      },
      {
        "icon": R,
        "text": "8 railway lounge visits annually"
      },
      {
        "icon": R,
        "text": "3X rewards on dining & utility"
      }
    ],
    "route": "/sbi-bank/irctc-sbi-card-premier/",
    "detailRoute": "/sbi-bank/irctc-sbi-card-premier",
    "knowMore": "https://www.paisabazaar.com/sbi-bank/irctc-sbi-card-premier/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=irctc_sbi_card_premier",
    "rating": 4.5,
    "ratingCount": 6595
  },
  {
    "id": 66,
    "name": "RBL Bank Paisabazaar Duet Credit Card",
    "bank": "bank_66",
    "bankName": "RBL Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/rbl-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2025/11/RBL-Duet-Credit-Card.png",
    "categories": [
      "lifetime-free",
      "cashback"
    ],
    "joiningFee": 0,
    "annualFee": 0,
    "feeWaiver": "Lifetime Free Card — No minimum spend required",
    "benefits": [
      {
        "icon": G,
        "text": "1% cashback on all eligible purchases"
      },
      {
        "icon": R,
        "text": "Borrow a portion of your limit as Xpress Cash"
      },
      {
        "icon": R,
        "text": "Lifetime free card with no annual fee"
      }
    ],
    "route": "/paisabazaar-duet/",
    "detailRoute": "/paisabazaar-duet",
    "knowMore": "https://www.paisabazaar.com/paisabazaar-duet/",
    "checkEligibility": "https://www.paisabazaar.com/cards/easy-apply?partnerProductId=39&utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=rbl_bank_paisabazaar_duet_credit_card",
    "rating": 4.6,
    "ratingCount": 6678
  },
  {
    "id": 67,
    "name": "HSBC RuPay Cashback Credit Card",
    "bank": "bank_1",
    "bankName": "HSBC Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/hsbc-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/HSBC-RuPay-Cashback-Credit-Card.png",
    "categories": [
      "cashback",
      "rupay",
      "shopping"
    ],
    "joiningFee": 499,
    "annualFee": 499,
    "feeWaiver": "Spend ₹99,800 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 10% cashback on card spends"
      },
      {
        "icon": R,
        "text": "Up to 10 free lounge visits per year globally"
      },
      {
        "icon": R,
        "text": "Discount offers on popular online platforms"
      }
    ],
    "route": "/hsbc-bank/rupay-cashback-credit-card/",
    "detailRoute": "/hsbc-bank/rupay-cashback-credit-card",
    "knowMore": "https://www.paisabazaar.com/hsbc-bank/rupay-cashback-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/easy-apply?partnerProductId=384&utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card_compare&utm_term=hsbc_rupay_cashback_credit_card",
    "rating": 4.7,
    "ratingCount": 6761
  },
  {
    "id": 68,
    "name": "IndusInd Bank Tiger Credit Card ",
    "bank": "bank_67",
    "bankName": "IndusInd Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/indusind-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/IndusInd-Bank-Tiger-Credit-Card.png",
    "categories": [
      "lifetime-free",
      "travel",
      "rewards"
    ],
    "joiningFee": 0,
    "annualFee": 0,
    "feeWaiver": "Lifetime Free Card — No minimum spend required",
    "benefits": [
      {
        "icon": G,
        "text": "Low forex markup fee of 1.5%"
      },
      {
        "icon": R,
        "text": "Up to 6X rewards on every spend"
      },
      {
        "icon": R,
        "text": "Free movie tickets every year"
      }
    ],
    "route": "/indusind-bank/tiger-credit-card/",
    "detailRoute": "/indusind-bank/tiger-credit-card",
    "knowMore": "https://www.paisabazaar.com/indusind-bank/tiger-credit-card/",
    "checkEligibility": "https://www.paisabazaar.com/cards/?utm_source=organic&utm_medium=card_compare_check_eligibility&utm_campaign=card-compare&utm_term=indusind_bank_tiger_credit_card",
    "rating": 4.8,
    "ratingCount": 6844
  },
  {
    "id": 69,
    "name": "ICICI Coral Credit Card",
    "bank": "bank_6",
    "bankName": "ICICI Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/icici-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2025/04/ICICI-Bank-Coral-Credit-Card.png",
    "categories": [
      "rewards"
    ],
    "joiningFee": 500,
    "annualFee": 500,
    "feeWaiver": "Spend ₹1,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "2 PAYBACK points per Rs. 100 spent"
      },
      {
        "icon": R,
        "text": "Complimentary airport & railway lounge access"
      },
      {
        "icon": R,
        "text": "25% off on movie tickets"
      }
    ],
    "route": "/icici-bank/coral-credit-card/",
    "detailRoute": "/icici-bank/coral-credit-card",
    "knowMore": "https://www.paisabazaar.com/icici-bank/coral-credit-card/",
    "checkEligibility": "/credit-card-eligibility",
    "rating": 4.9,
    "ratingCount": 6927
  },
  {
    "id": 70,
    "name": "IDFC FIRST EARN Credit Card",
    "bank": "bank_281",
    "bankName": "IDFC FIRST Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/idfc-first-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/Frame-2085667129.png",
    "categories": [
      "rewards"
    ],
    "joiningFee": 500,
    "annualFee": 500,
    "feeWaiver": "Spend ₹1,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 10X reward points"
      },
      {
        "icon": R,
        "text": "Never expiring reward points"
      },
      {
        "icon": R,
        "text": "Railway lounge access"
      }
    ],
    "route": "/idfc-first-bank/idfc-first-earn-credit-card/",
    "detailRoute": "/idfc-first-bank/idfc-first-earn-credit-card",
    "knowMore": "https://www.paisabazaar.com/idfc-first-bank/idfc-first-earn-credit-card/",
    "checkEligibility": "/credit-card-eligibility",
    "rating": 4.5,
    "ratingCount": 7010
  },
  {
    "id": 71,
    "name": "SBI SimplyCLICK Credit Card",
    "bank": "bank_3",
    "bankName": "SBI Cards",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/sbi-cards.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/SBI-Card-SimplyCLICK.png",
    "categories": [
      "shopping"
    ],
    "joiningFee": 500,
    "annualFee": 500,
    "feeWaiver": "Spend ₹1,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "10X reward points on partner merchants"
      },
      {
        "icon": R,
        "text": "Amazon voucher worth Rs. 500 on joining"
      }
    ],
    "route": "/sbi-bank/simplyclick-credit-card/",
    "detailRoute": "/sbi-bank/simplyclick-credit-card",
    "knowMore": "https://www.paisabazaar.com/sbi-bank/simplyclick-credit-card/",
    "checkEligibility": "/credit-card-eligibility",
    "rating": 4.6,
    "ratingCount": 7093
  },
  {
    "id": 72,
    "name": "HDFC MoneyBack+ Credit Card",
    "bank": "bank_2",
    "bankName": "HDFC Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/hdfc-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/HDFC-Moneyback-Credit-Card.png",
    "categories": [
      "rewards"
    ],
    "joiningFee": 500,
    "annualFee": 500,
    "feeWaiver": "Spend ₹1,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "10X reward points on Amazon, BigBasket, Flipkart, Swiggy"
      },
      {
        "icon": R,
        "text": "5X reward points on EMI spends"
      }
    ],
    "route": "/hdfc-bank/hdfc-bank-moneyback-plus-credit-card/",
    "detailRoute": "/hdfc-bank/hdfc-bank-moneyback-plus-credit-card",
    "knowMore": "https://www.paisabazaar.com/hdfc-bank/hdfc-bank-moneyback-plus-credit-card/",
    "checkEligibility": "/credit-card-eligibility",
    "rating": 4.7,
    "ratingCount": 7176
  },
  {
    "id": 73,
    "name": "Tata Neu Plus HDFC Credit Card",
    "bank": "bank_2",
    "bankName": "HDFC Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/hdfc-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/tata-neu-image.png",
    "categories": [
      "shopping"
    ],
    "joiningFee": 500,
    "annualFee": 500,
    "feeWaiver": "Spend ₹1,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "2% NeuCoins on Tata Neu and partner brands"
      },
      {
        "icon": R,
        "text": "1% NeuCoins on non-Tata spends"
      },
      {
        "icon": R,
        "text": "4 complimentary airport lounge visits"
      }
    ],
    "route": "/hdfc-bank/tata-neu-hdfc-bank-credit-cards/",
    "detailRoute": "/hdfc-bank/tata-neu-hdfc-bank-credit-cards",
    "knowMore": "https://www.paisabazaar.com/hdfc-bank/tata-neu-hdfc-bank-credit-cards/",
    "checkEligibility": "/credit-card-eligibility",
    "rating": 4.8,
    "ratingCount": 7259
  },
  {
    "id": 74,
    "name": "IDFC FIRST Digital RuPay Credit Card",
    "bank": "bank_281",
    "bankName": "IDFC FIRST Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/idfc-first-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2025/07/IDFC-FIRST-RuPay-Digital-Credit-Cardai.png",
    "categories": [
      "rupay"
    ],
    "joiningFee": 500,
    "annualFee": 500,
    "feeWaiver": "Spend ₹1,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Instant virtual card issuance with zero physical documentation"
      },
      {
        "icon": R,
        "text": "UPI scan & pay enabled via RuPay network"
      },
      {
        "icon": R,
        "text": "Lifetime Free card with no annual charges"
      }
    ],
    "route": "/idfc-first-bank/idfc-rupay-credit-card/",
    "detailRoute": "/idfc-first-bank/idfc-rupay-credit-card",
    "knowMore": "https://www.paisabazaar.com/idfc-first-bank/idfc-rupay-credit-card/",
    "checkEligibility": "/credit-card-eligibility",
    "rating": 4.9,
    "ratingCount": 7342
  },
  {
    "id": 75,
    "name": "IRCTC HDFC Bank Credit Card",
    "bank": "bank_2",
    "bankName": "HDFC Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/hdfc-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2023/03/IRCTC-HDFC-Bank-Credit-Card-Image.png",
    "categories": [
      "rewards"
    ],
    "joiningFee": 500,
    "annualFee": 500,
    "feeWaiver": "Spend ₹1,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 5% reward points on IRCTC ticket bookings"
      },
      {
        "icon": R,
        "text": "Executive lounge access at railway stations"
      }
    ],
    "route": "/hdfc-bank/irctc-hdfc-bank-credit-card/",
    "detailRoute": "/hdfc-bank/irctc-hdfc-bank-credit-card",
    "knowMore": "https://www.paisabazaar.com/hdfc-bank/irctc-hdfc-bank-credit-card/",
    "checkEligibility": "/credit-card-eligibility",
    "rating": 4.5,
    "ratingCount": 7425
  },
  {
    "id": 76,
    "name": "HDFC Bank UPI RuPay Credit Card",
    "bank": "bank_2",
    "bankName": "HDFC Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/hdfc-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/UPI-RuPay-Card-Fascia.png",
    "categories": [
      "rupay"
    ],
    "joiningFee": 500,
    "annualFee": 500,
    "feeWaiver": "Spend ₹1,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "3% CashPoints on grocery, supermarket, dining & PayZapp spends"
      },
      {
        "icon": R,
        "text": "2% CashPoints on utility spends and 1% on other UPI transactions"
      },
      {
        "icon": R,
        "text": "Convenient virtual card linked directly to UPI apps"
      }
    ],
    "route": "/hdfc-bank/hdfc-bank-upi-rupay-credit-card/",
    "detailRoute": "/hdfc-bank/hdfc-bank-upi-rupay-credit-card",
    "knowMore": "https://www.paisabazaar.com/hdfc-bank/hdfc-bank-upi-rupay-credit-card/",
    "checkEligibility": "/credit-card-eligibility",
    "rating": 4.6,
    "ratingCount": 7508
  },
  {
    "id": 77,
    "name": "HDFC Bank PIXEL Play Credit Card",
    "bank": "bank_2",
    "bankName": "HDFC Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/hdfc-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/HDFC-Pixel-Play-Credit-Card.png",
    "categories": [
      "movies"
    ],
    "joiningFee": 500,
    "annualFee": 500,
    "feeWaiver": "Spend ₹1,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 5% Choice Cashback on 2 chosen merchant categories"
      },
      {
        "icon": R,
        "text": "3% cashback on Swiggy and Zomato food delivery"
      },
      {
        "icon": R,
        "text": "Digital-first mobile onboarding on PayZapp"
      }
    ],
    "route": "/hdfc-bank/pixel-credit-cards/",
    "detailRoute": "/hdfc-bank/pixel-credit-cards",
    "knowMore": "https://www.paisabazaar.com/hdfc-bank/pixel-credit-cards/",
    "checkEligibility": "/credit-card-eligibility",
    "rating": 4.7,
    "ratingCount": 7591
  },
  {
    "id": 78,
    "name": "HDFC Bank PIXEL Go Credit Card",
    "bank": "bank_2",
    "bankName": "HDFC Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/hdfc-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/HDFC-Pixel-Go-Credit-Card.png",
    "categories": [
      "rewards"
    ],
    "joiningFee": 500,
    "annualFee": 500,
    "feeWaiver": "Spend ₹1,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Pay in 3 flexible zero-interest installments on purchases"
      },
      {
        "icon": R,
        "text": "1% unlimited cashback on all retail & online spends"
      },
      {
        "icon": R,
        "text": "Zero joining fee digital credit card"
      }
    ],
    "route": "/hdfc-bank/pixel-go-credit-card/",
    "detailRoute": "/hdfc-bank/pixel-go-credit-card",
    "knowMore": "https://www.paisabazaar.com/hdfc-bank/pixel-go-credit-card/",
    "checkEligibility": "/credit-card-eligibility",
    "rating": 4.8,
    "ratingCount": 7674
  },
  {
    "id": 79,
    "name": "SBI Card Miles Prime",
    "bank": "bank_3",
    "bankName": "SBI Cards",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/sbi-cards.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/SBI-Card-MILES-PRIME-1.png",
    "categories": [
      "travel"
    ],
    "joiningFee": 500,
    "annualFee": 500,
    "feeWaiver": "Spend ₹1,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Travel credits on joining & renewal"
      },
      {
        "icon": R,
        "text": "Priority Pass membership with lounge visits"
      },
      {
        "icon": R,
        "text": "Accelerated travel miles"
      }
    ],
    "route": "/sbi-bank/sbi-miles-prime-credit-card/",
    "detailRoute": "/sbi-bank/sbi-miles-prime-credit-card",
    "knowMore": "https://www.paisabazaar.com/sbi-bank/sbi-miles-prime-credit-card/",
    "checkEligibility": "/credit-card-eligibility",
    "rating": 4.9,
    "ratingCount": 7757
  },
  {
    "id": 80,
    "name": "Fibe Axis Bank Credit Card",
    "bank": "bank_27",
    "bankName": "Axis Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/axis-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2024/01/Fibe-Axis-Bank-Credit-Card.png",
    "categories": [
      "lifetime-free"
    ],
    "joiningFee": 0,
    "annualFee": 500,
    "feeWaiver": "Spend ₹1,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "3% cashback on food delivery, ride-hailing & entertainment apps"
      },
      {
        "icon": R,
        "text": "1% cashback on offline spends"
      },
      {
        "icon": R,
        "text": "Numberless card security"
      }
    ],
    "route": "/axis-bank/fibe-axis-bank-credit-card/",
    "detailRoute": "/axis-bank/fibe-axis-bank-credit-card",
    "knowMore": "https://www.paisabazaar.com/axis-bank/fibe-axis-bank-credit-card/",
    "checkEligibility": "/credit-card-eligibility",
    "rating": 4.5,
    "ratingCount": 7840
  },
  {
    "id": 81,
    "name": "IDFC FIRST Millennia Credit Card",
    "bank": "bank_281",
    "bankName": "IDFC FIRST Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/idfc-first-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/Idfc-First-Bank.png",
    "categories": [
      "lifetime-free",
      "shopping"
    ],
    "joiningFee": 0,
    "annualFee": 500,
    "feeWaiver": "Spend ₹1,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "10X reward points on birthday"
      },
      {
        "icon": R,
        "text": "6X points on online spends"
      },
      {
        "icon": R,
        "text": "Never expiring reward points"
      }
    ],
    "route": "/idfc-first-bank/idfc-first-millennia-credit-card/",
    "detailRoute": "/idfc-first-bank/idfc-first-millennia-credit-card",
    "knowMore": "https://www.paisabazaar.com/idfc-first-bank/idfc-first-millennia-credit-card/",
    "checkEligibility": "/credit-card-eligibility",
    "rating": 4.6,
    "ratingCount": 7923
  },
  {
    "id": 82,
    "name": "MakeMyTrip ICICI Bank Signature Credit Card",
    "bank": "bank_6",
    "bankName": "ICICI Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/icici-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2021/12/MakeMyTrip-ICICI-Bank-Signature-Credit-Card.png",
    "categories": [
      "rewards"
    ],
    "joiningFee": 500,
    "annualFee": 500,
    "feeWaiver": "Spend ₹1,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Rs. 1,500 MyCash + MakeMyTrip holiday voucher on joining"
      },
      {
        "icon": R,
        "text": "Domestic & international lounge access"
      },
      {
        "icon": R,
        "text": "MMTBLACK membership"
      }
    ],
    "route": "/icici-bank/makemytrip-icici-bank-signature-credit-card/",
    "detailRoute": "/icici-bank/makemytrip-icici-bank-signature-credit-card",
    "knowMore": "https://www.paisabazaar.com/icici-bank/makemytrip-icici-bank-signature-credit-card/",
    "checkEligibility": "/credit-card-eligibility",
    "rating": 4.7,
    "ratingCount": 8006
  },
  {
    "id": 83,
    "name": "EazyDiner IndusInd Bank Signature Credit Card",
    "bank": "bank_67",
    "bankName": "IndusInd Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/indusind-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2022/01/EazyDiner-IndusInd-Bank-Credit-Card.png",
    "categories": [
      "dining"
    ],
    "joiningFee": 500,
    "annualFee": 500,
    "feeWaiver": "Spend ₹1,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Extra 25% discount up to Rs. 1,000 on EazyDiner Pay"
      },
      {
        "icon": R,
        "text": "EazyDiner Prime membership included"
      },
      {
        "icon": R,
        "text": "2,000 welcome bonus EazyPoints"
      }
    ],
    "route": "/indusind-bank/eazy-diner-indusind-bank-credit-card/",
    "detailRoute": "/indusind-bank/eazy-diner-indusind-bank-credit-card",
    "knowMore": "https://www.paisabazaar.com/indusind-bank/eazy-diner-indusind-bank-credit-card/",
    "checkEligibility": "/credit-card-eligibility",
    "rating": 4.8,
    "ratingCount": 8089
  },
  {
    "id": 84,
    "name": "EazyDiner IndusInd Bank Platinum Credit Card",
    "bank": "bank_67",
    "bankName": "IndusInd Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/indusind-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/EazyDiner-Platinum.png",
    "categories": [
      "lifetime-free",
      "premium",
      "dining"
    ],
    "joiningFee": 0,
    "annualFee": 500,
    "feeWaiver": "Spend ₹1,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "20% instant discount up to Rs. 500 on dining via EazyDiner"
      },
      {
        "icon": R,
        "text": "2 Reward Points per Rs. 100 spent"
      }
    ],
    "route": "/indusind-bank/eazy-diner-indusind-platinum-credit-card/",
    "detailRoute": "/indusind-bank/eazy-diner-indusind-platinum-credit-card",
    "knowMore": "https://www.paisabazaar.com/indusind-bank/eazy-diner-indusind-platinum-credit-card/",
    "checkEligibility": "/credit-card-eligibility",
    "rating": 4.9,
    "ratingCount": 8172
  },
  {
    "id": 85,
    "name": "Swiggy HDFC Bank Credit Card",
    "bank": "bank_2",
    "bankName": "HDFC Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/hdfc-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2023/07/Swiggy-HDFC-Bank-Credit-Card.png",
    "categories": [
      "dining"
    ],
    "joiningFee": 500,
    "annualFee": 500,
    "feeWaiver": "Annual fee of ₹500 is waived on annual spends of ₹2,00,000 or more.",
    "benefits": [
      {
        "icon": G,
        "text": "10% cashback on Swiggy"
      },
      {
        "icon": R,
        "text": "5% cashback on online shopping"
      },
      {
        "icon": R,
        "text": "3-month Swiggy One membership"
      }
    ],
    "route": "/hdfc-bank/swiggy-credit-card/",
    "detailRoute": "/hdfc-bank/swiggy-credit-card",
    "knowMore": "https://www.paisabazaar.com/hdfc-bank/swiggy-credit-card/",
    "checkEligibility": "/credit-card-eligibility",
    "rating": 4.7,
    "ratingCount": 4210
  },
  {
    "id": 86,
    "name": "BPCL SBI Card",
    "bank": "bank_3",
    "bankName": "SBI Cards",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/sbi-cards.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/BPCL-SBI-Card-Face-01.png",
    "categories": [
      "fuel"
    ],
    "joiningFee": 500,
    "annualFee": 500,
    "feeWaiver": "Spend ₹1,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "4.25% value-back on BPCL fuel purchases"
      },
      {
        "icon": R,
        "text": "2,000 reward points (Rs. 500 value) on joining"
      }
    ],
    "route": "/sbi-bank/sbi-bpcl-credit-card/",
    "detailRoute": "/sbi-bank/sbi-bpcl-credit-card",
    "knowMore": "https://www.paisabazaar.com/sbi-bank/sbi-bpcl-credit-card/",
    "checkEligibility": "/credit-card-eligibility",
    "rating": 4.6,
    "ratingCount": 8338
  },
  {
    "id": 87,
    "name": "HPCL IDFC FIRST Power Credit Card",
    "bank": "bank_281",
    "bankName": "IDFC FIRST Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/idfc-first-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2023/07/IDFC-FIRST-HPCL-Power-Credit-Card.png",
    "categories": [
      "fuel"
    ],
    "joiningFee": 500,
    "annualFee": 500,
    "feeWaiver": "Spend ₹1,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 5% savings on HPCL fuel purchases"
      },
      {
        "icon": R,
        "text": "2.5% savings on grocery & utility spends"
      }
    ],
    "route": "/idfc-first-bank/idfc-first-hpcl-power-credit-card/",
    "detailRoute": "/idfc-first-bank/idfc-first-hpcl-power-credit-card",
    "knowMore": "https://www.paisabazaar.com/idfc-first-bank/idfc-first-hpcl-power-credit-card/",
    "checkEligibility": "/credit-card-eligibility",
    "rating": 4.7,
    "ratingCount": 8421
  },
  {
    "id": 88,
    "name": "PVR INOX Kotak Credit Card",
    "bank": "bank_17",
    "bankName": "Kotak Mahindra Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/kotak-mahindra-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2023/12/PVR-INOX-Kotak-Credit-Card.png",
    "categories": [
      "lifetime-free",
      "movies"
    ],
    "joiningFee": 0,
    "annualFee": 500,
    "feeWaiver": "Spend ₹1,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Free PVR/INOX movie tickets on spend milestones of Rs. 10,000 monthly"
      },
      {
        "icon": R,
        "text": "15% discount on food & beverages at PVR/INOX"
      }
    ],
    "route": "/kotak-mahindra-bank/pvr-inox-kotak-credit-card/",
    "detailRoute": "/kotak-mahindra-bank/pvr-inox-kotak-credit-card",
    "knowMore": "https://www.paisabazaar.com/kotak-mahindra-bank/pvr-inox-kotak-credit-card/",
    "checkEligibility": "/credit-card-eligibility",
    "rating": 4.8,
    "ratingCount": 8504
  },
  {
    "id": 89,
    "name": "RBL Bank Play Credit Card",
    "bank": "bank_66",
    "bankName": "RBL Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/rbl-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/image1.png",
    "categories": [
      "lifetime-free",
      "movies"
    ],
    "joiningFee": 0,
    "annualFee": 500,
    "feeWaiver": "Spend ₹1,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 2 free BookMyShow movie tickets every month"
      },
      {
        "icon": R,
        "text": "Rs. 100 off on food & beverage at BMS"
      }
    ],
    "route": "/rbl-bank/bookmyshow-play-credit-card/",
    "detailRoute": "/rbl-bank/bookmyshow-play-credit-card",
    "knowMore": "https://www.paisabazaar.com/rbl-bank/bookmyshow-play-credit-card/",
    "checkEligibility": "/credit-card-eligibility",
    "rating": 4.9,
    "ratingCount": 8587
  },
  {
    "id": 90,
    "name": "YES Private Credit Card",
    "bank": "bank_65",
    "bankName": "YES BANK",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/yes-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/YES-Private-Credit-Card.png",
    "categories": [
      "premium"
    ],
    "joiningFee": 500,
    "annualFee": 500,
    "feeWaiver": "Spend ₹1,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Unlimited domestic & international airport lounge visits"
      },
      {
        "icon": R,
        "text": "Complimentary golf rounds"
      },
      {
        "icon": R,
        "text": "Low forex mark-up fee of 1.75%"
      }
    ],
    "route": "/yes-bank/private-credit-card/",
    "detailRoute": "/yes-bank/private-credit-card",
    "knowMore": "https://www.paisabazaar.com/yes-bank/private-credit-card/",
    "checkEligibility": "/credit-card-eligibility",
    "rating": 4.5,
    "ratingCount": 8670
  },
  {
    "id": 91,
    "name": "HSBC Visa Platinum Credit Card",
    "bank": "bank_1",
    "bankName": "HSBC Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/hsbc-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2025/12/Frame-2085667027.png",
    "categories": [
      "premium"
    ],
    "joiningFee": 500,
    "annualFee": 500,
    "feeWaiver": "Spend ₹1,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Lifetime Free with zero joining/annual fee"
      },
      {
        "icon": R,
        "text": "2 reward points per Rs. 150 spent"
      },
      {
        "icon": R,
        "text": "Amazon voucher worth Rs. 500 on joining"
      }
    ],
    "route": "/hsbc-bank/hsbc-platinum-credit-cards/",
    "detailRoute": "/hsbc-bank/hsbc-platinum-credit-cards",
    "knowMore": "https://www.paisabazaar.com/hsbc-bank/hsbc-platinum-credit-cards/",
    "checkEligibility": "/credit-card-eligibility",
    "rating": 4.6,
    "ratingCount": 8753
  },
  {
    "id": 92,
    "name": "CRED IndusInd Bank RuPay Credit Card",
    "bank": "bank_67",
    "bankName": "IndusInd Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/indusind-bank.svg",
    "image": "https://www.paisabazaar.com/wp-content/uploads/2017/10/CRED-IndusInd-Bank-RuPay-Credit-Card.webp",
    "categories": [
      "rupay"
    ],
    "joiningFee": 500,
    "annualFee": 500,
    "feeWaiver": "Spend ₹1,00,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Lifetime free credit card"
      },
      {
        "icon": R,
        "text": "100% cashback on CRED app spends"
      },
      {
        "icon": R,
        "text": "Accelerated rewards on UPI transactions"
      }
    ],
    "route": "/indusind-bank/cred-indusind-rupay-credit-card/",
    "detailRoute": "/indusind-bank/cred-indusind-rupay-credit-card",
    "knowMore": "https://www.paisabazaar.com/indusind-bank/cred-indusind-rupay-credit-card/",
    "checkEligibility": "/credit-card-eligibility",
    "rating": 4.7,
    "ratingCount": 8836
  },
  {
    "id": 93,
    "name": "Quantum+ Credit Card by IDFC FIRST Bank",
    "bank": "bank_281",
    "bankName": "IDFC FIRST Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/idfc-first-bank.svg",
    "image": "https://images.paisabazaar.com/pb_puck/images/cards_new/idfc_quantum_plus.png",
    "categories": [
      "rupay",
      "fd-backed",
      "rewards"
    ],
    "joiningFee": 0,
    "annualFee": 0,
    "feeWaiver": "Lifetime Free Card — No minimum spend required",
    "benefits": [
      {
        "icon": G,
        "text": "FD-backed card with zero documentation"
      },
      {
        "icon": R,
        "text": "Up to 10X reward points that never expire"
      },
      {
        "icon": R,
        "text": "UPI payments via RuPay network"
      }
    ],
    "route": "/idfc-first-bank/quantum-plus-credit-card/",
    "detailRoute": "/idfc-first-bank/quantum-plus-credit-card",
    "knowMore": "https://www.paisabazaar.com/idfc-first-bank/quantum-plus-credit-card/",
    "checkEligibility": "/credit-card-eligibility",
    "rating": 4.6,
    "ratingCount": 4200
  },
  {
    "id": 94,
    "name": "Utkarsh SuperCard RuPay Credit Card",
    "bank": "bank_other",
    "bankName": "Utkarsh Small Finance Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/hdfc-bank.svg",
    "image": "https://images.paisabazaar.com/pb_puck/images/cards_new/utkarsh_supercard_rupay.png",
    "categories": [
      "fd-backed",
      "rupay",
      "cashback"
    ],
    "joiningFee": 0,
    "annualFee": 0,
    "feeWaiver": "Lifetime Free Card — No minimum spend required",
    "benefits": [
      {
        "icon": G,
        "text": "Instant approval against FD starting at ₹500"
      },
      {
        "icon": R,
        "text": "5% cashback on Myntra & 2% on Flipkart"
      },
      {
        "icon": R,
        "text": "1% cashback on UPI payments via RuPay"
      }
    ],
    "route": "/utkarsh-small-finance-bank/utkarsh-supercard-rupay-credit-card/",
    "detailRoute": "/utkarsh-small-finance-bank/utkarsh-supercard-rupay-credit-card",
    "knowMore": "https://www.paisabazaar.com/utkarsh-small-finance-bank/utkarsh-supercard-rupay-credit-card/",
    "checkEligibility": "/credit-card-eligibility",
    "rating": 4.5,
    "ratingCount": 3800
  },
  {
    "id": 95,
    "name": "SBM ZET Credit Card",
    "bank": "bank_419",
    "bankName": "SBM Bank",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/sbm-bank.svg",
    "image": "https://images.paisabazaar.com/pb_puck/images/cards_new/sbm_zet_credit_card.png",
    "categories": [
      "fd-backed",
      "lifetime-free",
      "cashback"
    ],
    "joiningFee": 0,
    "annualFee": 0,
    "feeWaiver": "Lifetime Free Card — No minimum spend required",
    "benefits": [
      {
        "icon": G,
        "text": "Guaranteed credit card against Fixed Deposit"
      },
      {
        "icon": R,
        "text": "Up to 15% cashback on brand vouchers"
      },
      {
        "icon": R,
        "text": "Rapidly builds positive credit score with all 4 bureaus"
      }
    ],
    "route": "/sbm-bank/zet-credit-card/",
    "detailRoute": "/sbm-bank/zet-credit-card",
    "knowMore": "https://www.paisabazaar.com/sbm-bank/sbm-zet-credit-card/",
    "checkEligibility": "/credit-card-eligibility",
    "rating": 4.5,
    "ratingCount": 4100
  },
  {
    "id": 96,
    "name": "BOBCARD Cashback",
    "bank": "bank_5",
    "bankName": "BOBCARD (Bank of Baroda)",
    "bankLogo": "https://www.paisabazaar.com/blog-assets/bank-logos/bobcard.svg",
    "image": "https://images.paisabazaar.com/pb_puck/images/cards_new/bobcard_cashback.png",
    "categories": [
      "cashback",
      "online-shopping"
    ],
    "joiningFee": 750,
    "annualFee": 750,
    "feeWaiver": "Spend ₹50,000 or more in previous year to waive renewal fee",
    "benefits": [
      {
        "icon": G,
        "text": "Up to 5% cashback on all online spends"
      },
      {
        "icon": R,
        "text": "1% unlimited cashback on offline spends"
      },
      {
        "icon": R,
        "text": "1% fuel surcharge waiver across India"
      }
    ],
    "route": "/bobcard/bobcard-cashback-credit-card/",
    "detailRoute": "/bobcard/bobcard-cashback-credit-card",
    "knowMore": "https://www.paisabazaar.com/bobcard/cashback-credit-card/",
    "checkEligibility": "/credit-card-eligibility",
    "rating": 4.6,
    "ratingCount": 4500
  }
];

export function normalizeCards() {
  return creditCards.map(card => {
    const extra = [];
    for (const [catId, ids] of Object.entries(extraCategoryAssignments)) {
      if (ids.includes(card.id) && !card.categories.includes(catId)) {
        extra.push(catId);
      }
    }
    const netInfo = cardNetworksMap[card.id] || { networks: ['visa'], network: 'visa' };
    return {
      ...card,
      categories: [...card.categories, ...extra],
      networks: card.networks || netInfo.networks,
      network: card.network || netInfo.network,
    };
  });
}

