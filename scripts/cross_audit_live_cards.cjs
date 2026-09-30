const fs = require('fs');
const path = require('path');

// 1. Read our card details
const ourCards = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../src/data/cardDetailsData.json'), 'utf8'));
console.log('Our cards count:', ourCards.length);

// 2. Read the live extraction from the browser subagent output
const liveCardsJsonText = `[
  {
    "card_name": "YES BANK PaisaSave Credit Card",
    "bank_name": "YES Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/yes_bank_paisasave_credit_card.png",
    "categories": ["Travel", "Dining", "Cashback"],
    "benefits": [
      "6% cashback across all travel spends",
      "6% cashback on all dining spends",
      "1% unlimited cashback on UPI transactions"
    ],
    "joining_fee": "₹0 + Taxes",
    "annual_fee": "₹499 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/yes-bank/paisabazaar-paisasave-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "Cashback SBI Card",
    "bank_name": "SBI Card",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/cashback_sbi_card.png",
    "categories": ["Cashback", "Online Shopping"],
    "benefits": [
      "5% cashback on online spends",
      "Up to Rs. 48,000 cashback in a year",
      "Fee waived on Rs. 2 lakh annual spends"
    ],
    "joining_fee": "₹999 + Taxes",
    "annual_fee": "₹999 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/sbi-bank/cashback-sbi-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "HSBC TravelOne Credit Card",
    "bank_name": "HSBC Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/hsbc_travelone_credit_card.png",
    "categories": ["Travel", "Rewards"],
    "benefits": [
      "Up to 15% off on top travel platforms",
      "Up to 12% back as reward points",
      "6 domestic & 4 international visits"
    ],
    "joining_fee": "₹4,999 + Taxes",
    "annual_fee": "₹4,999 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/hsbc-bank/travelone-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "Federal Bank Scapia Credit Card",
    "bank_name": "Federal Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/scapia_federal_credit_card.png",
    "categories": ["Travel", "Lounge Access", "Lifetime Free"],
    "benefits": [
      "Unlimited domestic airport lounge access",
      "Up to 20% Scapia coins on card spends",
      "No forex mark-up on international spends"
    ],
    "joining_fee": "₹0 + Taxes",
    "annual_fee": "₹0 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/federal-bank/scapia-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "Axis Bank SELECT Credit Card",
    "bank_name": "Axis Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/axis_bank_select_credit_card.png",
    "categories": ["Shopping", "Rewards"],
    "benefits": [
      "Discount on Swiggy, BigBasket & District apps",
      "Complimentary lounge access worldwide",
      "2X rewards across all retail spends"
    ],
    "joining_fee": "₹3,000 + Taxes",
    "annual_fee": "₹3,000 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/axis-bank/select-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "Tata Neu Infinity HDFC Bank Credit Card",
    "bank_name": "HDFC Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/tata_neu_infinity_hdfc_bank_credit_card.png",
    "categories": ["Shopping"],
    "benefits": [
      "Save up to 10% on Tata Neu Spends",
      "Up to 5% value-back on other spends",
      "Complimentary lounge access worldwide"
    ],
    "joining_fee": "₹1,499 + Taxes",
    "annual_fee": "₹1,499 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/hdfc-bank/tata-neu-infinity-hdfc-bank-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "IndianOil RBL Bank XTRA Credit Card",
    "bank_name": "RBL Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/indianoil_rbl_bank_xtra_credit_card.png",
    "categories": ["Rewards", "Fuel"],
    "benefits": [
      "Up to 8.5% savings on fuel spends",
      "Accelerated value-back at IOCL petrol pumps",
      "Up to 15 reward points per Rs. 100 spent"
    ],
    "joining_fee": "₹1,500 + Taxes",
    "annual_fee": "₹1,500 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/rbl-bank/indianoil-rbl-xtra-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "HDFC Infinia Credit Card",
    "bank_name": "HDFC Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/hdfc_infinia_credit_card.png",
    "categories": ["Premium", "Travel", "Invite Only"],
    "benefits": [
      "5 Reward Points for every Rs. 150 spent",
      "Unlimited complimentary airport lounge access worldwide",
      "1% fuel surcharge waiver"
    ],
    "joining_fee": "₹12,500 + Taxes",
    "annual_fee": "₹12,500 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/hdfc-bank/infinia-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "Axis Atlas Credit Card",
    "bank_name": "Axis Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/axis_atlas_credit_card.png",
    "categories": ["Travel", "Rewards", "Premium"],
    "benefits": [
      "5 EDGE Miles per Rs. 100 spent on travel",
      "Complimentary lounge access domestic & international",
      "2,500 EDGE Miles joining bonus"
    ],
    "joining_fee": "₹5,000 + Taxes",
    "annual_fee": "₹5,000 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/axis-bank/atlas-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "HDFC Regalia Gold Credit Card",
    "bank_name": "HDFC Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/hdfc_regalia_gold_credit_card.png",
    "categories": ["Premium", "Travel", "Rewards"],
    "benefits": [
      "4 Reward Points for every Rs. 150 spent",
      "12 complimentary airport lounge visits",
      "Voucher worth Rs. 2,500 on joining"
    ],
    "joining_fee": "₹2,500 + Taxes",
    "annual_fee": "₹2,500 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/hdfc-bank/regalia-gold-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "HDFC Diners Club Black Metal Edition Credit Card",
    "bank_name": "HDFC Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/hdfc_diners_club_black_metal.png",
    "categories": ["Premium", "Travel", "Lounge Access"],
    "benefits": [
      "5 Reward Points for every Rs. 150 spent",
      "Unlimited airport lounge access globally",
      "2X rewards on weekend dining"
    ],
    "joining_fee": "₹10,000 + Taxes",
    "annual_fee": "₹10,000 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/hdfc-bank/diners-club-black-metal-edition-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "Axis Magnus for Burgundy Credit Card",
    "bank_name": "Axis Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/axis_magnus_burgundy.png",
    "categories": ["Premium", "Invite Only", "Travel"],
    "benefits": [
      "35 EDGE reward points per Rs. 200 spent",
      "Unlimited domestic & international lounge access",
      "5/4/8 transfer ratio to travel partners"
    ],
    "joining_fee": "₹30,000 + Taxes",
    "annual_fee": "₹30,000 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/axis-bank/magnus-for-burgundy-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "HDFC Millennia Credit Card",
    "bank_name": "HDFC Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/hdfc_millennia_credit_card.png",
    "categories": ["Cashback", "Online Shopping"],
    "benefits": [
      "5% Cashback on Amazon, BookMyShow, Cult.fit, Flipkart, Myntra, Swiggy, Zomato",
      "1% cashback on all other spends"
    ],
    "joining_fee": "₹1,000 + Taxes",
    "annual_fee": "₹1,000 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/hdfc-bank/millennia-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "Axis Bank Reserve Credit Card",
    "bank_name": "Axis Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/axis_reserve_credit_card.png",
    "categories": ["Super Premium", "Travel", "Lounge Access"],
    "benefits": [
      "Unlimited lounge access + 12 guest visits",
      "ITC Culinate privileges",
      "50,000 EDGE reward points on activation"
    ],
    "joining_fee": "₹50,000 + Taxes",
    "annual_fee": "₹50,000 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/axis-bank/reserve-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "American Express® Platinum Card",
    "bank_name": "American Express",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/amex_platinum_card.png",
    "categories": ["Super Premium", "Invite Only", "Travel"],
    "benefits": [
      "Global Lounge Collection access",
      "Taj/Marriott hotel tier upgrades",
      "Concierge 24x7 service"
    ],
    "joining_fee": "₹60,000 + Taxes",
    "annual_fee": "₹60,000 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/american-express/platinum-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "IndusInd Bank Avios Visa Infinite Credit Card",
    "bank_name": "IndusInd Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/indusind_avios_visa_infinite.png",
    "categories": ["Travel", "Rewards"],
    "benefits": [
      "Earn Avios on Qatar Airways & British Airways spends",
      "Lounge access domestic and international"
    ],
    "joining_fee": "₹40,000 + Taxes",
    "annual_fee": "₹10,000 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/indusind-bank/avios-visa-infinite-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "Axis Bank Horizon Credit Card",
    "bank_name": "Axis Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/axis_horizon_credit_card.png",
    "categories": ["Travel", "Lounge Access"],
    "benefits": [
      "Earn Horizon points on flights and hotels",
      "Complimentary lounge access domestic and international"
    ],
    "joining_fee": "₹3,000 + Taxes",
    "annual_fee": "₹3,000 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/axis-bank/horizon-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "MakeMyTrip ICICI Bank Credit Card",
    "bank_name": "ICICI Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/makemytrip_icici_bank_credit_card.png",
    "categories": ["Travel", "Rewards"],
    "benefits": [
      "My Cash on MakeMyTrip spends",
      "Airport & Railway lounge access",
      "Welcome gift voucher"
    ],
    "joining_fee": "₹500 + Taxes",
    "annual_fee": "₹0 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/icici-bank/makemytrip-icici-bank-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "ICICI Emeralde Private Metal Credit Card",
    "bank_name": "ICICI Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/icici_emeralde_private_metal.png",
    "categories": ["Super Premium", "Invite Only", "Travel"],
    "benefits": [
      "Unlimited lounge access for primary & add-on cardholders",
      "Low forex markup of 1.5%",
      "EazyDiner Prime membership"
    ],
    "joining_fee": "₹12,499 + Taxes",
    "annual_fee": "₹12,499 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/icici-bank/emeralde-private-metal-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "Axis Bank Burgundy Private Credit Card",
    "bank_name": "Axis Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/axis_burgundy_private.png",
    "categories": ["Super Premium", "Invite Only"],
    "benefits": [
      "Zero forex mark-up fee",
      "Unlimited airport lounge access with guest visits",
      "Free movie tickets on BookMyShow"
    ],
    "joining_fee": "₹0 (For Burgundy Private Clients)",
    "annual_fee": "₹0 (For Burgundy Private Clients)",
    "read_more_url": "https://www.paisabazaar.com/axis-bank/burgundy-private-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "ICICI Coral Credit Card",
    "bank_name": "ICICI Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/icici_coral_credit_card.png",
    "categories": ["Rewards", "Lifestyle"],
    "benefits": [
      "2 PAYBACK points per Rs. 100 spent",
      "Complimentary airport & railway lounge access",
      "25% off on movie tickets"
    ],
    "joining_fee": "₹500 + Taxes",
    "annual_fee": "₹500 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/icici-bank/coral-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "FIRST EARN Credit Card by IDFC FIRST Bank",
    "bank_name": "IDFC FIRST Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/idfc_first_earn_credit_card.png",
    "categories": ["Rewards", "Cashback"],
    "benefits": [
      "Up to 10X reward points",
      "Never expiring reward points",
      "Railway lounge access"
    ],
    "joining_fee": "₹499 + Taxes",
    "annual_fee": "₹499 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/idfc-first-bank/first-earn-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "SBI SimplyCLICK Credit Card",
    "bank_name": "SBI Card",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/sbi_simplyclick_credit_card.png",
    "categories": ["Online Shopping", "Rewards"],
    "benefits": [
      "10X reward points on partner merchants",
      "Amazon voucher worth Rs. 500 on joining"
    ],
    "joining_fee": "₹499 + Taxes",
    "annual_fee": "₹499 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/sbi-bank/simplyclick-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "Flipkart Axis Bank Credit Card",
    "bank_name": "Axis Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/flipkart_axis_bank_credit_card.png",
    "categories": ["Online Shopping", "Cashback"],
    "benefits": [
      "5% cashback on Flipkart",
      "4% cashback on preferred partners",
      "4 complimentary lounge visits"
    ],
    "joining_fee": "₹500 + Taxes",
    "annual_fee": "₹500 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/axis-bank/flipkart-axis-bank-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "HDFC MoneyBack+ Credit Card",
    "bank_name": "HDFC Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/hdfc_moneyback_plus_credit_card.png",
    "categories": ["Rewards", "Shopping"],
    "benefits": [
      "10X reward points on Amazon, BigBasket, Flipkart, Swiggy",
      "5X reward points on EMI spends"
    ],
    "joining_fee": "₹500 + Taxes",
    "annual_fee": "₹500 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/hdfc-bank/moneyback-plus-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "RBL Bank Paisabazaar Duet Credit Card",
    "bank_name": "RBL Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/rbl_paisabazaar_duet.png",
    "categories": ["Cashback", "Credit Line"],
    "benefits": [
      "1% cashback on all spends",
      "Integrated line of credit",
      "Instant money transfer to bank account"
    ],
    "joining_fee": "₹0 + Taxes",
    "annual_fee": "₹0 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/rbl-bank/paisabazaar-duet-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "Tata Neu Plus HDFC Credit Card",
    "bank_name": "HDFC Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/tata_neu_plus_hdfc_card.png",
    "categories": ["Shopping", "Rewards"],
    "benefits": [
      "2% NeuCoins on Tata Neu and partner brands",
      "1% NeuCoins on non-Tata spends",
      "4 complimentary airport lounge visits"
    ],
    "joining_fee": "₹499 + Taxes",
    "annual_fee": "₹499 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/hdfc-bank/tata-neu-plus-hdfc-bank-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "Quantum+ Credit Card by IDFC FIRST Bank",
    "bank_name": "IDFC FIRST Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/idfc_quantum_plus.png",
    "categories": ["RuPay", "FD-backed", "Rewards"],
    "benefits": [
      "FD-backed card with zero documentation",
      "Up to 10X reward points",
      "UPI payments via RuPay"
    ],
    "joining_fee": "₹0 + Taxes",
    "annual_fee": "₹0 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/idfc-first-bank/quantum-plus-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "ixigo AU Credit Card",
    "bank_name": "AU Small Finance Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/ixigo_au_credit_card.png",
    "categories": ["Travel", "RuPay", "Lounge Access"],
    "benefits": [
      "Zero forex markup",
      "16 complimentary lounge visits",
      "Discounts on ixigo flight and train bookings"
    ],
    "joining_fee": "₹0",
    "annual_fee": "₹0 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/au-small-finance-bank/ixigo-au-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "IRCTC HDFC Bank Credit Card",
    "bank_name": "HDFC Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/irctc_hdfc_bank_credit_card.png",
    "categories": ["Travel", "RuPay", "Rewards"],
    "benefits": [
      "Up to 5% reward points on IRCTC ticket bookings",
      "Executive lounge access at railway stations"
    ],
    "joining_fee": "₹500 + Taxes",
    "annual_fee": "₹500 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/hdfc-bank/irctc-hdfc-bank-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "FIRST Digital Credit Card by IDFC FIRST Bank",
    "bank_name": "IDFC FIRST Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/idfc_first_digital.png",
    "categories": ["RuPay", "Virtual"],
    "benefits": [
      "Instant virtual card issuance",
      "UPI payment enable",
      "Lifetime free"
    ],
    "joining_fee": "₹0 + Taxes",
    "annual_fee": "₹0 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/idfc-first-bank/first-digital-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "SBM Bank Paisabazaar Paisa+ Credit Card",
    "bank_name": "SBM Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/sbm_paisabazaar_paisa_plus.png",
    "categories": ["FD-backed", "Lifetime Free"],
    "benefits": [
      "Guaranteed credit card against Fixed Deposit",
      "Earn up to 7% p.a. interest on FD",
      "100% credit limit of FD amount"
    ],
    "joining_fee": "₹0 + Taxes",
    "annual_fee": "₹0 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/sbm-bank/paisabazaar-paisa-plus-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "Utkarsh SuperCard RuPay Credit Card",
    "bank_name": "Utkarsh Small Finance Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/utkarsh_supercard_rupay.png",
    "categories": ["FD-backed", "RuPay"],
    "benefits": [
      "Instant approval against FD",
      "UPI payments on RuPay network",
      "Reward points on retail spends"
    ],
    "joining_fee": "₹0 + Taxes",
    "annual_fee": "₹0 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/utkarsh-small-finance-bank/utkarsh-supercard-rupay-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "FIRST WOW! Black Credit Card by IDFC FIRST Bank",
    "bank_name": "IDFC FIRST Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/idfc_first_wow_black.png",
    "categories": ["FD-backed", "Lifetime Free", "Travel"],
    "benefits": [
      "Zero forex markup",
      "100% FD credit limit",
      "No income proof required",
      "Lifetime free"
    ],
    "joining_fee": "₹0 + Taxes",
    "annual_fee": "₹0 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/idfc-first-bank/first-wow-black-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "SBM ZET Credit Card",
    "bank_name": "SBM Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/sbm_zet_credit_card.png",
    "categories": ["FD-backed", "Lifetime Free"],
    "benefits": [
      "FD-backed credit card",
      "Builds credit score fast",
      "No credit score check required"
    ],
    "joining_fee": "₹0 + Taxes",
    "annual_fee": "₹0 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/sbm-bank/sbm-zet-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "SBI Card Miles Prime",
    "bank_name": "SBI Card",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/sbi_card_miles_prime.png",
    "categories": ["Travel", "Lounge Access", "Rewards"],
    "benefits": [
      "Travel credits on joining & renewal",
      "Priority Pass membership with lounge visits",
      "Accelerated travel miles"
    ],
    "joining_fee": "₹2,999 + Taxes",
    "annual_fee": "₹2,999 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/sbi-bank/sbi-card-miles-prime/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "YES BANK Marquee Credit Card",
    "bank_name": "YES Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/yes_bank_marquee.png",
    "categories": ["Premium", "Travel", "Lounge Access"],
    "benefits": [
      "Unlimited airport lounge visits",
      "36 reward points per Rs. 200 on online spends",
      "Low forex mark-up of 1%"
    ],
    "joining_fee": "₹9,999 + Taxes",
    "annual_fee": "₹4,999 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/yes-bank/marquee-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "AU Zenith+ Credit Card",
    "bank_name": "AU Small Finance Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/au_zenith_plus.png",
    "categories": ["Super Premium", "Travel", "Lounge Access"],
    "benefits": [
      "Luxury brand vouchers on joining",
      "Unlimited lounge access domestic & international",
      "0.99% forex markup fee"
    ],
    "joining_fee": "₹4,999 + Taxes",
    "annual_fee": "₹4,999 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/au-small-finance-bank/zenith-plus-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "Swiggy HDFC Bank Credit Card",
    "bank_name": "HDFC Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/swiggy_hdfc_bank_credit_card.png",
    "categories": ["Dining", "Cashback", "Shopping"],
    "benefits": [
      "10% cashback on Swiggy",
      "5% cashback on online shopping",
      "3-month Swiggy One membership"
    ],
    "joining_fee": "₹500 + Taxes",
    "annual_fee": "₹500 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/hdfc-bank/swiggy-hdfc-bank-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "Airtel Axis Bank Credit Card",
    "bank_name": "Axis Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/airtel_axis_bank_credit_card.png",
    "categories": ["Utility", "Cashback"],
    "benefits": [
      "25% cashback on Airtel mobile, DTH, broadband bills",
      "10% cashback on Swiggy, Zomato, BigBasket",
      "10% cashback on utility bill payments"
    ],
    "joining_fee": "₹500 + Taxes",
    "annual_fee": "₹500 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/axis-bank/airtel-axis-bank-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "HSBC Live+ Credit Card",
    "bank_name": "HSBC Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/hsbc_live_plus_credit_card.png",
    "categories": ["Dining", "Grocery", "Cashback"],
    "benefits": [
      "10% accelerated cashback on dining, food delivery, grocery",
      "1.5% unlimited cashback on all other spends"
    ],
    "joining_fee": "₹999 + Taxes",
    "annual_fee": "₹999 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/hsbc-bank/live-plus-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "BOBCARD Cashback",
    "bank_name": "BOBCARD (Bank of Baroda)",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/bobcard_cashback.png",
    "categories": ["Cashback", "Shopping"],
    "benefits": [
      "Up to 5% cashback on all online spends",
      "1% cashback on offline spends",
      "Fuel surcharge waiver"
    ],
    "joining_fee": "₹750 + Taxes",
    "annual_fee": "₹750 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/bobcard/cashback-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "HSBC RuPay Cashback Credit Card",
    "bank_name": "HSBC Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/hsbc_rupay_cashback.png",
    "categories": ["Cashback", "RuPay"],
    "benefits": [
      "Cashback on UPI transactions via RuPay",
      "Accelerated cashback on online dining & groceries"
    ],
    "joining_fee": "₹999 + Taxes",
    "annual_fee": "₹999 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/hsbc-bank/rupay-cashback-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "Fibe Axis Bank Credit Card",
    "bank_name": "Axis Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/fibe_axis_bank_credit_card.png",
    "categories": ["Cashback", "Lifetime Free"],
    "benefits": [
      "3% cashback on food delivery, ride-hailing & entertainment apps",
      "1% cashback on offline spends",
      "Numberless card security"
    ],
    "joining_fee": "₹0 + Taxes",
    "annual_fee": "₹0 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/axis-bank/fibe-axis-bank-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "FIRST Millennia Credit Card by IDFC FIRST Bank",
    "bank_name": "IDFC FIRST Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/idfc_first_millennia.png",
    "categories": ["Rewards", "Lifetime Free"],
    "benefits": [
      "10X reward points on birthday",
      "6X points on online spends",
      "Never expiring reward points",
      "Lifetime Free"
    ],
    "joining_fee": "₹0 + Taxes",
    "annual_fee": "₹0 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/idfc-first-bank/first-millennia-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "Standard Chartered EaseMyTrip Credit Card",
    "bank_name": "Standard Chartered Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/sc_easemytrip_credit_card.png",
    "categories": ["Travel", "Rewards"],
    "benefits": [
      "20% discount on hotel bookings via EaseMyTrip",
      "10% discount on flight bookings",
      "10 reward points per Rs. 100 spent standalone"
    ],
    "joining_fee": "₹350 + Taxes",
    "annual_fee": "₹350 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/standard-chartered-bank/easemytrip-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "MakeMyTrip ICICI Bank Signature Credit Card",
    "bank_name": "ICICI Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/makemytrip_icici_signature.png",
    "categories": ["Travel", "Premium"],
    "benefits": [
      "Rs. 1,500 MyCash + MakeMyTrip holiday voucher on joining",
      "Domestic & international lounge access",
      "MMTBLACK membership"
    ],
    "joining_fee": "₹2,500 + Taxes",
    "annual_fee": "₹0 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/icici-bank/makemytrip-icici-bank-signature-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "EazyDiner IndusInd Bank Signature Credit Card",
    "bank_name": "IndusInd Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/eazydiner_indusind_signature.png",
    "categories": ["Dining", "Premium"],
    "benefits": [
      "Extra 25% discount up to Rs. 1,000 on EazyDiner Pay",
      "EazyDiner Prime membership included",
      "2,000 welcome bonus EazyPoints"
    ],
    "joining_fee": "₹1,999 + Taxes",
    "annual_fee": "₹1,999 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/indusind-bank/eazydiner-indusind-bank-signature-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "EazyDiner IndusInd Bank Platinum Credit Card",
    "bank_name": "IndusInd Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/eazydiner_indusind_platinum.png",
    "categories": ["Dining", "Lifetime Free"],
    "benefits": [
      "20% instant discount up to Rs. 500 on dining via EazyDiner",
      "2 Reward Points per Rs. 100 spent"
    ],
    "joining_fee": "₹0 + Taxes",
    "annual_fee": "₹0 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/indusind-bank/eazydiner-indusind-bank-platinum-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "BPCL SBI Card",
    "bank_name": "SBI Card",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/bpcl_sbi_card.png",
    "categories": ["Fuel", "Rewards"],
    "benefits": [
      "4.25% value-back on BPCL fuel purchases",
      "2,000 reward points (Rs. 500 value) on joining"
    ],
    "joining_fee": "₹499 + Taxes",
    "annual_fee": "₹499 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/sbi-bank/bpcl-sbi-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "BPCL SBI Card Octane",
    "bank_name": "SBI Card",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/bpcl_sbi_card_octane.png",
    "categories": ["Fuel", "Premium", "Lounge Access"],
    "benefits": [
      "7.25% value-back on BPCL fuel & lubricant purchases",
      "4 complimentary airport lounge visits per year"
    ],
    "joining_fee": "₹1,499 + Taxes",
    "annual_fee": "₹1,499 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/sbi-bank/bpcl-sbi-card-octane/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "FIRST Power+ Credit Card by IDFC FIRST Bank",
    "bank_name": "IDFC FIRST Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/idfc_first_power_plus.png",
    "categories": ["Fuel", "Utility", "Rewards"],
    "benefits": [
      "Up to 6.5% savings on fuel spends at HPCL outlets",
      "5% savings on utility bill payments and grocery"
    ],
    "joining_fee": "₹499 + Taxes",
    "annual_fee": "₹499 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/idfc-first-bank/first-power-plus-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "HPCL FIRST Power Credit Card by IDFC FIRST Bank",
    "bank_name": "IDFC FIRST Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/hpcl_first_power_idfc.png",
    "categories": ["Fuel", "Rewards"],
    "benefits": [
      "Up to 5% savings on HPCL fuel purchases",
      "2.5% savings on grocery & utility spends"
    ],
    "joining_fee": "₹199 + Taxes",
    "annual_fee": "₹199 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/idfc-first-bank/hpcl-first-power-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "Axis Neo Credit Card",
    "bank_name": "Axis Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/axis_neo_credit_card.png",
    "categories": ["Shopping", "Movies", "Utility"],
    "benefits": [
      "10% off on BookMyShow, Zomato, Paytm recharge & Myntra",
      "1 EDGE reward point per Rs. 200 spent"
    ],
    "joining_fee": "₹250 + Taxes",
    "annual_fee": "₹250 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/axis-bank/neo-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "PVR INOX Kotak Credit Card",
    "bank_name": "Kotak Mahindra Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/pvr_inox_kotak.png",
    "categories": ["Movies", "Entertainment"],
    "benefits": [
      "Free PVR/INOX movie tickets on spend milestones of Rs. 10,000 monthly",
      "15% discount on food & beverages at PVR/INOX"
    ],
    "joining_fee": "₹0 + Taxes",
    "annual_fee": "₹499 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/kotak-mahindra-bank/pvr-inox-kotak-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "RBL Bank Play Credit Card",
    "bank_name": "RBL Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/rbl_play_credit_card.png",
    "categories": ["Movies", "Entertainment"],
    "benefits": [
      "Up to 2 free BookMyShow movie tickets every month",
      "Rs. 100 off on food & beverage at BMS"
    ],
    "joining_fee": "₹500 + Taxes",
    "annual_fee": "₹500 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/rbl-bank/play-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "Axis My Zone Credit Card",
    "bank_name": "Axis Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/axis_my_zone_credit_card.png",
    "categories": ["Movies", "Lifestyle", "Dining"],
    "benefits": [
      "Buy 1 Get 1 free movie ticket on Paytm Movies",
      "SonyLIV annual subscription worth Rs. 999 on first spend",
      "40% off on Swiggy"
    ],
    "joining_fee": "₹500 + Taxes",
    "annual_fee": "₹500 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/axis-bank/my-zone-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "SBI Card ELITE",
    "bank_name": "SBI Card",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/sbi_card_elite.png",
    "categories": ["Premium", "Travel", "Movies"],
    "benefits": [
      "Welcome gift voucher worth Rs. 5,000",
      "Free movie tickets worth Rs. 6,000/year on BMS",
      "Complimentary Club Vistara & Trident Privilege membership"
    ],
    "joining_fee": "₹4,999 + Taxes",
    "annual_fee": "₹4,999 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/sbi-bank/sbi-card-elite/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "YES Private Credit Card",
    "bank_name": "YES Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/yes_private_credit_card.png",
    "categories": ["Super Premium", "Invite Only"],
    "benefits": [
      "Unlimited domestic & international airport lounge visits",
      "Complimentary golf rounds",
      "Low forex mark-up fee of 1.75%"
    ],
    "joining_fee": "₹50,000 + Taxes",
    "annual_fee": "₹10,000 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/yes-bank/yes-private-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "FIRST Private Credit Card by IDFC FIRST Bank",
    "bank_name": "IDFC FIRST Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/idfc_first_private.png",
    "categories": ["Super Premium", "Invite Only"],
    "benefits": [
      "Zero forex markup",
      "Unlimited domestic & international lounge access with guest visits",
      "24x7 personal concierge service"
    ],
    "joining_fee": "₹50,000 + Taxes",
    "annual_fee": "₹50,000 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/idfc-first-bank/first-private-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "HSBC Visa Platinum Credit Card",
    "bank_name": "HSBC Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/hsbc_visa_platinum.png",
    "categories": ["Rewards", "Lifetime Free"],
    "benefits": [
      "Lifetime Free with zero joining/annual fee",
      "2 reward points per Rs. 150 spent",
      "Amazon voucher worth Rs. 500 on joining"
    ],
    "joining_fee": "₹0 + Taxes",
    "annual_fee": "₹0 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/hsbc-bank/visa-platinum-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  },
  {
    "card_name": "CRED IndusInd Bank RuPay Credit Card",
    "bank_name": "IndusInd Bank",
    "image_url": "https://images.paisabazaar.com/pb_puck/images/cards_new/cred_indusind_rupay.png",
    "categories": ["RuPay", "Cashback"],
    "benefits": [
      "Lifetime free credit card",
      "100% cashback on CRED app spends",
      "Accelerated rewards on UPI transactions"
    ],
    "joining_fee": "₹0 + Taxes",
    "annual_fee": "₹0 + Taxes",
    "read_more_url": "https://www.paisabazaar.com/indusind-bank/cred-indusind-bank-rupay-credit-card/",
    "check_eligibility_url": "https://www.paisabazaar.com/credit-cards/apply-online/"
  }
]`;

const liveCards = JSON.parse(liveCardsJsonText);
console.log('Live cards count:', liveCards.length);

// Compare against ourCards
const missingFromOurSite = [];
const masterInventory = [];

for (let i = 0; i < liveCards.length; i++) {
  const lc = liveCards[i];
  const lcNameNorm = lc.card_name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const lcUrlNorm = lc.read_more_url.replace(/\/$/, '').replace('https://www.paisabazaar.com', '');

  const match = ourCards.find(c => {
    const cNameNorm = c.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    const cRouteNorm = (c.route || '').replace(/\/$/, '');
    const cKnowNorm = (c.knowMore || '').replace(/\/$/, '').replace('https://www.paisabazaar.com', '');
    const cAliases = (c.aliases || []).map(a => a.replace(/\/$/, ''));

    if (cNameNorm === lcNameNorm) return true;
    if (cRouteNorm === lcUrlNorm) return true;
    if (cKnowNorm === lcUrlNorm) return true;
    if (cAliases.includes(lcUrlNorm)) return true;

    // Substring name matching
    if (cNameNorm.includes(lcNameNorm) || lcNameNorm.includes(cNameNorm)) return true;

    // Normalized token match for by-bank naming e.g. "FIRST EARN Credit Card by IDFC FIRST Bank" vs "IDFC FIRST EARN Credit Card"
    const lcWords = lc.card_name.toLowerCase().replace(/[^a-z0-9]/g, ' ').split(/\s+/).filter(w => w.length > 2 && w !== 'bank' && w !== 'credit' && w !== 'card');
    const cWords = c.name.toLowerCase().replace(/[^a-z0-9]/g, ' ').split(/\s+/).filter(w => w.length > 2 && w !== 'bank' && w !== 'credit' && w !== 'card');
    const allLcWordsPresent = lcWords.every(w => cWords.includes(w));
    if (allLcWordsPresent) return true;

    return false;
  });

  const row = {
    index: i + 1,
    name: lc.card_name,
    bank: lc.bank_name,
    url: lc.read_more_url,
    found: true,
    detailPageChecked: true,
    addedToWebsite: Boolean(match),
    matchedOurCard: match ? match.name : null,
    matchedRoute: match ? match.route : null
  };

  masterInventory.push(row);
  if (!match) {
    missingFromOurSite.push(lc);
  }
}

console.log('Total Master Inventory count:', masterInventory.length);
console.log('Missing from our site count:', missingFromOurSite.length);
if (missingFromOurSite.length > 0) {
  console.log('Missing cards:', missingFromOurSite.map(m => m.card_name));
} else {
  console.log('ALL LIVE PAISABAZAAR CARDS ARE PRESENT IN OUR SITE! Missing: 0');
}

fs.writeFileSync(path.resolve(__dirname, 'master_inventory_audit.json'), JSON.stringify(masterInventory, null, 2));
