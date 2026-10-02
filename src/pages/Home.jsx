import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import LandingHero from '../components/landing/LandingHero';
import CardFinder from '../components/landing/CardFinder';
import PopularCardCarousel from '../components/PopularCardCarousel';
import CategoryIllustration from '../components/CategoryIllustration';
import { WhyIllustration, HowIllustration } from '../components/ServiceIllustrations';
import BankLogo from '../components/BankLogo';
import { useData } from '../context/DataContext';
import { banks as fallbackBanks } from '../data/cards';
import '../styles/home-editorial.css';

const CATEGORIES = [
  {
    title: 'Cashback Credit Cards',
    slug: 'cashback-credit-cards',
    desc: 'Up to 5% flat or accelerated cashback on groceries, dining, online shopping, and utility bills.',
    badge: 'Up to 5% Valueback',
    accent: 'emerald',
    count: '24+ Cards',
  },
  {
    title: 'Travel Credit Cards',
    slug: 'travel-credit-cards',
    desc: 'Air miles, complimentary flights, hotel loyalty memberships, and worldwide travel perks.',
    badge: 'Air Miles & Flights',
    accent: 'sky',
    count: '18+ Cards',
  },
  {
    title: 'Rewards Credit Cards',
    slug: 'rewards-credit-cards',
    desc: 'Accelerated reward points across retail and dining with flexible merchandise redemptions.',
    badge: 'Accelerated Points',
    accent: 'purple',
    count: '28+ Cards',
  },
  {
    title: 'Lifetime Free Credit Cards',
    slug: 'lifetime-free-credit-cards',
    desc: 'Zero annual renewal fee and zero joining charges with no minimum spend conditions.',
    badge: 'Zero Annual Fee',
    accent: 'amber',
    count: '16+ Cards',
  },
  {
    title: 'Fuel Credit Cards',
    slug: 'fuel-credit-cards',
    desc: 'Fuel surcharge waivers and high value-back on petrol and diesel at major Indian fuel outlets.',
    badge: '1% Fuel Surcharge Waiver',
    accent: 'orange',
    count: '12+ Cards',
  },
  {
    title: 'Lounge Access Credit Cards',
    slug: 'credit-cards-lounge-access',
    desc: 'Complimentary domestic airport lounge visits and international Priority Pass access.',
    badge: 'Domestic & Intl Lounges',
    accent: 'indigo',
    count: '22+ Cards',
  },
  {
    title: 'RuPay Credit Cards',
    slug: 'rupay-credit-cards',
    desc: 'Link directly to your preferred UPI apps for seamless QR scan-and-pay transactions.',
    badge: 'UPI Enabled Scan & Pay',
    accent: 'cyan',
    count: '14+ Cards',
  },
  {
    title: 'International Credit Cards',
    slug: 'international-credit-cards',
    desc: 'Global merchant acceptance, 24/7 concierge assistance, and multi-currency protection.',
    badge: 'Worldwide Acceptance',
    accent: 'blue',
    count: '15+ Cards',
  },
  {
    title: 'Zero Forex Markup Credit Cards',
    slug: 'zero-forex-markup-credit-cards',
    desc: 'Save 3.5% to 5% on foreign currency spends with zero or ultra-low foreign exchange markups.',
    badge: '0% Forex Surcharge',
    accent: 'rose',
    count: '8+ Cards',
  },
  {
    title: 'Secured Credit Cards',
    slug: 'secured-credit-cards',
    desc: 'Fixed-deposit (FD) backed cards designed to establish or rebuild your credit score safely.',
    badge: 'FD-Backed Approval',
    accent: 'teal',
    count: '10+ Cards',
  },
];

const WHY_BMCC = [
  {
    num: '01',
    type: 'compare',
    badge: 'Dual Comparator',
    accent: 'blue',
    title: 'Compare cards side by side',
    desc: 'Line up annual fees, joining perks, lounge access allowances, and reward structures across cards in one place.',
  },
  {
    num: '02',
    type: 'needs',
    badge: 'Precision Filter',
    accent: 'emerald',
    title: 'Find cards based on your needs',
    desc: 'Filter by spend category, preferred card network, or annual fee thresholds to match your everyday spending.',
  },
  {
    num: '03',
    type: 'fees',
    badge: '100% Fee Clarity',
    accent: 'amber',
    title: 'Understand fees and benefits',
    desc: 'Review transparent fee schedules, lounge quotas, forex markups, and fee waiver milestones before applying.',
  },
  {
    num: '04',
    type: 'eligibility',
    badge: 'Zero CIBIL Impact',
    accent: 'teal',
    title: 'Check basic eligibility',
    desc: 'Check basic eligibility factors in under 60 seconds without a hard credit inquiry.',
  },
  {
    num: '05',
    type: 'banks',
    badge: '17+ Top Issuers',
    accent: 'indigo',
    title: 'Explore cards from multiple banks',
    desc: 'Browse verified credit card offerings from 17 banks and issuers across India.',
  },
];

const HOW_BMCC_WORKS = [
  {
    step: '01',
    tag: 'STEP 01',
    accent: 'sky',
    name: 'Explore',
    desc: 'Browse credit cards from multiple banks and categories.',
    to: '/explore',
    linkText: 'Explore cards',
  },
  {
    step: '02',
    tag: 'STEP 02',
    accent: 'indigo',
    name: 'Compare',
    desc: 'Compare fees, rewards, benefits and other important features side by side.',
    to: '/compare-credit-cards',
    linkText: 'Compare cards',
  },
  {
    step: '03',
    tag: 'STEP 03',
    accent: 'emerald',
    name: 'Check Eligibility',
    desc: 'Check basic eligibility using factors such as age, income and employment type.',
    to: '/credit-card-eligibility',
    linkText: 'Check eligibility',
  },
  {
    step: '04',
    tag: 'STEP 04',
    accent: 'blue',
    name: 'Apply',
    desc: 'Review the card details and continue to the relevant application option.',
    to: '/explore',
    linkText: 'View applications',
  },
];

const FAQS = [
  {
    num: '01',
    q: 'What is a credit card?',
    a: "A credit card is a payment instrument issued by a bank or financial institution that enables cardholders to access a pre-approved credit limit for purchases, utility payments, and travel. Paying the full statement balance by the due date generally helps avoid finance charges on eligible retail transactions, subject to the card's terms.",
  },
  {
    num: '02',
    q: 'How do I choose the right credit card?',
    a: "Identify your primary spending areas (such as groceries, fuel, dining, online shopping, or travel) and look for cards whose reward structures align with those habits. Also review joining fees, annual renewal charges, and any spend thresholds required for annual fee waivers, subject to the issuer's terms.",
  },
  {
    num: '03',
    q: 'Can I compare multiple credit cards?',
    a: 'Yes. BookMyCreditCard provides a side-by-side comparison tool allowing you to select up to three cards at a time. You can compare joining fees, annual renewal charges, reward structures, lounge access quotas, and other key features in one structured view.',
  },
  {
    num: '04',
    q: 'What is a good credit score for a credit card?',
    a: "A CIBIL score is one of the factors issuers may consider when evaluating a credit card application. A higher score can generally support eligibility for a wider range of cards, but approval, credit limits and pricing depend on the issuer's criteria.",
  },
  {
    num: '05',
    q: 'Does checking eligibility affect my CIBIL score?',
    a: "BookMyCreditCard's basic eligibility check is a preliminary estimate based on information such as age, income and employment type. It does not guarantee approval and does not itself involve a hard credit inquiry.",
  },
  {
    num: '06',
    q: 'What should I check before applying for a credit card?',
    a: "Before applying, review the card's eligibility guidelines (such as minimum age and income), joining and annual renewal fees, milestone spend conditions for fee waivers, forex markup rates on international spends, reward validity, and applicable finance charges, as outlined in the issuer's Most Important Terms and Conditions (MITC).",
  },
  {
    num: '07',
    q: 'How do credit card annual fees work?',
    a: "An annual fee is charged by the issuing bank for maintaining your credit card account and its associated benefits. Many issuers offer fee waiver provisions if your annual spending reaches a specified milestone in the preceding card year, subject to the issuer's conditions. Lifetime-free cards generally do not charge annual renewal fees, subject to the card's product terms.",
  },
];

const ELIG_DATA = {
  salaried: {
    fieldLabel: 'Net Monthly In-Hand Salary',
    tiers: [
      {
        id: 'sal-1',
        range: '₹25k – ₹50k',
        label: '₹25,000 – ₹50,000 / mo',
        cardsCount: '18+ Cards',
        odds: '92% High Match',
        oddsPercent: 92,
        category: 'Cashback & Free',
        sampleCards: [
          { id: 4, name: 'YES PaisaSave', badge: 'Lifetime Free' },
          { id: 5, name: 'Cashback SBI', badge: '5% Online' },
          { id: 8, name: 'Airtel Axis', badge: 'Bill Cashback' },
        ],
      },
      {
        id: 'sal-2',
        range: '₹50k – ₹1L',
        label: '₹50,000 – ₹1,00,000 / mo',
        cardsCount: '34+ Cards',
        odds: '96% High Match',
        oddsPercent: 96,
        category: 'Travel & Rewards',
        sampleCards: [
          { id: 3, name: 'HDFC Regalia Gold', badge: 'Travel Lounge' },
          { id: 2, name: 'Axis Atlas', badge: 'Air Miles' },
          { id: 5, name: 'Cashback SBI', badge: '5% Cashback' },
        ],
      },
      {
        id: 'sal-3',
        range: '₹1L+',
        label: '₹1,00,000+ / mo',
        cardsCount: '52+ Cards',
        odds: '98% Top Match',
        oddsPercent: 98,
        category: 'Super Premium Metal',
        sampleCards: [
          { id: 1, name: 'HDFC Infinia Metal', badge: 'Super Premium' },
          { id: 2, name: 'Axis Atlas', badge: 'Air Miles' },
          { id: 6, name: 'HSBC TravelOne', badge: 'Global Miles' },
        ],
      },
    ],
  },
  'self-employed': {
    fieldLabel: 'Annual Business Income / Filed ITR',
    tiers: [
      {
        id: 'se-1',
        range: '₹6L – ₹12L ITR',
        label: '₹6,00,000 – ₹12,00,000 ITR',
        cardsCount: '16+ Cards',
        odds: '89% High Match',
        oddsPercent: 89,
        category: 'Business & Zero Forex',
        sampleCards: [
          { id: 4, name: 'YES PaisaSave', badge: 'Lifetime Free' },
          { id: 7, name: 'Scapia Federal', badge: '0% Forex Markup' },
          { id: 8, name: 'Airtel Axis', badge: 'Utility Spends' },
        ],
      },
      {
        id: 'se-2',
        range: '₹12L – ₹25L ITR',
        label: '₹12,00,000 – ₹25,00,000 ITR',
        cardsCount: '31+ Cards',
        odds: '95% High Match',
        oddsPercent: 95,
        category: 'Commercial & Miles',
        sampleCards: [
          { id: 3, name: 'HDFC Regalia Gold', badge: 'Airport Lounge' },
          { id: 2, name: 'Axis Atlas', badge: 'Tiered Miles' },
          { id: 7, name: 'Scapia Federal', badge: 'Zero Forex' },
        ],
      },
      {
        id: 'se-3',
        range: '₹25L+ ITR',
        label: '₹25,00,000+ ITR',
        cardsCount: '48+ Cards',
        odds: '99% Instant Match',
        oddsPercent: 99,
        category: 'Elite Metal & Executive',
        sampleCards: [
          { id: 1, name: 'HDFC Infinia Metal', badge: 'Highest Limit' },
          { id: 2, name: 'Axis Atlas', badge: 'Executive Miles' },
          { id: 3, name: 'HDFC Regalia Gold', badge: 'Concierge' },
        ],
      },
    ],
  },
};

const COMPARE_MATCHUPS = [
  {
    id: 'luxury-travel',
    tag: 'Luxury & Travel',
    icon: '',
    card1: {
      id: 1,
      name: 'HDFC Infinia Metal',
      bankName: 'HDFC Bank',
      badge: 'Super Premium',
      rating: 4.9,
      reviews: '3.8k',
      joiningFee: '₹12,500',
      waiver: 'Waived on ₹10L annual spend',
      welcome: '10,000 Reward Points',
      welcomeSub: 'Worth ₹10,000 on flights/hotels upon fee payment',
      reward: '3.33% – 33.3%',
      rewardSub: '1:1 ratio on SmartBuy flights & hotels',
      lounge: 'Unlimited Worldwide',
      loungeSub: 'Priority Pass + unlimited complimentary guests',
      forex: '2.0% + GST',
      bestFor: 'High Spenders (>₹12L/yr)',
      bestForSub: 'Executive luxury travel & SmartBuy multiplier',
      winnerKeys: ['welcome', 'lounge', 'forex', 'bestFor'],
      route: '/hdfc-bank/infinia-credit-card',
    },
    card2: {
      id: 2,
      name: 'Axis Atlas Card',
      bankName: 'Axis Bank',
      badge: 'Miles Specialist',
      rating: 4.8,
      reviews: '2.6k',
      joiningFee: '₹5,000',
      waiver: 'Waived on ₹15L annual spend',
      welcome: '5,000 EDGE Miles',
      welcomeSub: 'Convertible 1:2 to 10,000 airline miles on 1st swipe in 30 days',
      reward: 'Tiered EDGE Miles',
      rewardSub: '1:2 transfer ratio across 18 partner airlines',
      lounge: '18 Dom + 12 Intl',
      loungeSub: 'Tier-based milestone renewal visits',
      forex: '3.5% + GST',
      bestFor: 'Frequent Airline Flyers',
      bestForSub: 'Direct miles flexibility across 18 partner airlines',
      winnerKeys: ['reward', 'joiningFee'],
      route: '/axis-bank/atlas-credit-card',
    },
    verdict: 'Infinia leads in worldwide lounge access and low 2.0% forex markup, while Atlas offers 60% lower annual fee and direct 1:2 airline mile transfer flexibility.',
  },
  {
    id: 'cashback-lifestyle',
    tag: 'Cashback & Shopping',
    icon: '',
    card1: {
      id: 5,
      name: 'Cashback SBI Card',
      bankName: 'SBI Cards',
      badge: 'Flat Online Cashback',
      rating: 4.8,
      reviews: '5.1k',
      joiningFee: '₹999',
      waiver: 'Waived on ₹2L annual spend',
      welcome: '₹0 Promo Joining',
      welcomeSub: 'Instant online activation with zero complex milestones',
      reward: '5% Direct Cashback',
      rewardSub: 'Auto-credited to monthly statement balance',
      lounge: 'No Lounge Access',
      loungeSub: 'Not included in standard benefits',
      forex: '3.5% + GST',
      bestFor: 'Everyday Online Spends',
      bestForSub: 'Amazon, Flipkart, Swiggy, Zomato & monthly utilities',
      winnerKeys: ['reward', 'joiningFee', 'bestFor'],
      route: '/sbi-bank/cashback-sbi-card',
    },
    card2: {
      id: 3,
      name: 'HDFC Regalia Gold',
      bankName: 'HDFC Bank',
      badge: 'Lifestyle & Travel',
      rating: 4.8,
      reviews: '4.6k',
      joiningFee: '₹2,500',
      waiver: 'Waived on ₹4L annual spend',
      welcome: '₹2,500 Brand Vouchers',
      welcomeSub: 'Club Marriott / Marks & Spencer / Myntra voucher on fee payment',
      reward: '5X on Retail Brands',
      rewardSub: 'Nykaa, Myntra & M&S shopping vouchers',
      lounge: '12 Dom + 6 Intl',
      loungeSub: 'Priority Pass membership included',
      forex: '2.0% + GST',
      bestFor: 'Premium Lifestyle & Dining',
      bestForSub: 'Airport lounge access, dining & brand milestone perks',
      winnerKeys: ['welcome', 'lounge', 'forex'],
      route: '/hdfc-bank/hdfc-regalia-gold-credit-card',
    },
    verdict: 'Cashback SBI delivers unmatched flat 5% direct cashback on all online spends, while Regalia Gold excels in luxury brand vouchers, lounge access, and lower forex.',
  },
  {
    id: 'zero-fee-value',
    tag: 'Zero Fee vs Low Forex',
    icon: '',
    card1: {
      id: 4,
      name: 'YES PaisaSave',
      bankName: 'YES BANK',
      badge: 'Lifetime Free',
      rating: 4.9,
      reviews: '1.5k',
      joiningFee: '₹0 (Free)',
      waiver: 'Lifetime free · Zero minimum spends',
      welcome: '₹500 Welcome Voucher',
      welcomeSub: 'Instant activation voucher on 1st UPI spend within 30 days',
      reward: '6% Travel & Dining',
      rewardSub: '1% unlimited cashback on UPI scan & pay',
      lounge: 'Domestic on Spends',
      loungeSub: '₹10K quarterly retail spend criteria',
      forex: '2.75% + GST',
      bestFor: 'Everyday UPI & QR Spends',
      bestForSub: 'Zero maintenance fees with seamless UPI payments',
      winnerKeys: ['joiningFee', 'bestFor'],
      route: '/yes-bank/paisabazaar-paisasave-credit-card',
    },
    card2: {
      id: 6,
      name: 'HSBC TravelOne',
      bankName: 'HSBC Bank',
      badge: 'Global Rewards',
      rating: 4.7,
      reviews: '1.7k',
      joiningFee: '₹4,999',
      waiver: 'Waived on ₹10L annual spend',
      welcome: '3,000 Bonus Miles',
      welcomeSub: 'On ₹30,000 spend within 60 days of card issuance',
      reward: 'Instant Miles Transfer',
      rewardSub: 'Direct transfer to 20+ partner airlines',
      lounge: '6 Dom + 4 Intl',
      loungeSub: 'Complimentary airport lounge access',
      forex: '0.99% promo rate',
      bestFor: 'Global Travelers & Forex',
      bestForSub: 'Ultra-low foreign currency markup & international lounges',
      winnerKeys: ['welcome', 'forex', 'lounge', 'reward'],
      route: '/hsbc-bank/travelone-credit-card',
    },
    verdict: 'YES PaisaSave is 100% lifetime free with UPI rewards, whereas HSBC TravelOne provides elite international flyer perks with instant 20+ airline mile transfers.',
  },
];

export default function Home() {
  const pageRef = useRef(null);
  const { cards, banks: allBanks, loading } = useData();
  const [openFaq, setOpenFaq] = useState(0);
  const [compareIndex, setCompareIndex] = useState(0);
  const [eligEmp, setEligEmp] = useState('salaried');
  const [eligIncomeTier, setEligIncomeTier] = useState(1);

  // Set SEO metadata
  useEffect(() => {
    document.title = 'BookMyCreditCard - Compare & Find the Right Credit Card';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Compare credit cards across top Indian banks. Discover cashback, rewards, travel perks, annual fees, and check basic eligibility in one place.'
      );
    }
  }, []);

  // Reveal motion observer for below-the-fold sections
  useEffect(() => {
    const page = pageRef.current;
    if (!page || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    page.classList.add('bmcc-motion-ready');
    page.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element));
    return () => {
      observer.disconnect();
      page.classList.remove('bmcc-motion-ready');
    };
  }, []);

  // Popular curated cards (9 cards across 3 carousel slides)
  const popularCards = useMemo(() => {
    if (!cards?.length) return [];
    const popularCardIds = [1, 2, 3, 5, 9, 28, 12, 17, 21]; // Infinia, Atlas, Regalia Gold, Cashback SBI, Tata Neu Infinity, Airtel Axis, ICICI Sapphiro, Axis Horizon, Flipkart Axis
    const matched = popularCardIds.map(id => cards.find(c => c.id === id)).filter(Boolean);
    return matched.length >= 6 ? matched : cards.slice(0, 9);
  }, [cards]);

  // Banks list
  const bankList = useMemo(() => {
    const source = allBanks?.length ? allBanks : fallbackBanks;
    return (source || []).slice(0, 17);
  }, [allBanks]);

  // FAQ structured data schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  const toggleFaq = index => {
    setOpenFaq(prev => (prev === index ? null : index));
  };

  return (
    <div className="landing-page-root bmcc-editorial bmcc-home" ref={pageRef}>
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 2. HERO + EXISTING ANIMATION */}
      <LandingHero />

      {/* 3. INTRODUCTION & TRUST ARCHITECTURE */}
      <section className="bmcc-home-intro" aria-labelledby="intro-heading" data-reveal>
        <div className="bmcc-container">
          <div className="bmcc-intro-hero">
            <h2 id="intro-heading" className="bmcc-intro-title">
              Compare Credit Cards &amp; Find the Right Card for You
            </h2>
            <p className="bmcc-intro-lead">
              BookMyCreditCard brings clarity to choosing your next card. We help you explore and compare options across leading Indian banks without bias, hidden catches, or confusing fine print.
            </p>
          </div>

          <div className="bmcc-bento-grid">
            {/* Tile 1: 96+ Cards Catalogued */}
            <div className="bmcc-bento-card">
              <div className="bmcc-bento-top">
                <span className="bmcc-bento-num">96<small>+</small></span>
                <span className="bmcc-bento-pill">Verified Directory</span>
              </div>
              <h3 className="bmcc-bento-title">Curated Across 10 Categories</h3>
              <p className="bmcc-bento-text">
                Explore cards categorized by how you spend — from high-yield cashback and airport lounge access to fuel savings, air miles, and zero annual fee cards.
              </p>
              <div className="bmcc-bento-tags">
                <Link to="/cashback-credit-cards" className="bmcc-bento-tag">Cashback</Link>
                <Link to="/travel-credit-cards" className="bmcc-bento-tag">Travel &amp; Miles</Link>
                <Link to="/credit-cards-lounge-access" className="bmcc-bento-tag">Airport Lounge</Link>
                <Link to="/rupay-credit-cards" className="bmcc-bento-tag">RuPay UPI</Link>
                <Link to="/lifetime-free-credit-cards" className="bmcc-bento-tag">Lifetime Free</Link>
              </div>
            </div>

            {/* Tile 2: 17 Banks & Issuers */}
            <div className="bmcc-bento-card">
              <div className="bmcc-bento-top">
                <span className="bmcc-bento-num">17</span>
                <span className="bmcc-bento-pill">Top Indian Issuers</span>
              </div>
              <h3 className="bmcc-bento-title">All Major Banks Side-by-Side</h3>
              <p className="bmcc-bento-text">
                Directly compare official charges, welcome bonuses, and milestone waivers across HDFC, SBI Card, ICICI, Axis, Kotak, IDFC FIRST, IndusInd, HSBC, Amex, and more.
              </p>
              <div className="bmcc-bento-banks">
                <span className="bmcc-bank-chip">HDFC</span>
                <span className="bmcc-bank-chip">SBI Card</span>
                <span className="bmcc-bank-chip">ICICI</span>
                <span className="bmcc-bank-chip">Axis</span>
                <span className="bmcc-bank-chip">Kotak</span>
                <span className="bmcc-bank-chip">IDFC FIRST</span>
                <span className="bmcc-bank-chip">Amex</span>
                <span className="bmcc-bank-chip">+10 More</span>
              </div>
            </div>

            {/* Tile 3: No CIBIL Impact */}
            <div className="bmcc-bento-card bmcc-bento-highlight">
              <div className="bmcc-bento-top">
                <div className="bmcc-shield-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <span className="bmcc-bento-pill pill-soft">100% Soft Inquiry</span>
              </div>
              <h3 className="bmcc-bento-title">No CIBIL Impact Eligibility Check</h3>
              <p className="bmcc-bento-text">
                Check basic eligibility in 60 seconds based on your age, income, and profession. Evaluating your options leaves your credit score untouched.
              </p>
              <Link to="/credit-card-eligibility" className="bmcc-bento-cta">
                Check Basic Eligibility
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CARD FINDER */}
      <section className="bmcc-finder-section" aria-labelledby="finder-heading" data-reveal>
        <div className="bmcc-container">
          <div className="bmcc-finder-intro">
            <span className="bmcc-section-label">INTERACTIVE CARD MATCHER</span>
            <h2 id="finder-heading">Find a Card That Fits Your Needs</h2>
            <p>Tell us what matters to you and discover cards worth a closer look.</p>
          </div>
          <CardFinder />
        </div>
      </section>

      {/* 5. CREDIT CARD CATEGORIES */}
      <section className="bmcc-categories-section" aria-labelledby="categories-heading" data-reveal>
        <div className="bmcc-container">
          <div className="bmcc-section-head">
            <span className="bmcc-section-label">EXPLORE BY BENEFIT</span>
            <h2 id="categories-heading" className="bmcc-section-title">Explore Credit Cards by Category</h2>
            <p className="bmcc-section-sub">
              Find cards tailored to your lifestyle, from high-earning cashback to international luxury travel.
            </p>
          </div>
          <div className="bmcc-categories-grid">
            {CATEGORIES.map(category => (
              <Link
                key={category.slug}
                to={`/${category.slug}`}
                className={`bmcc-cat-card bmcc-cat-${category.accent}`}
              >
                <div className="bmcc-cat-visual">
                  <CategoryIllustration categoryKey={category.slug} className="bmcc-cat-graphic" />
                  <span className="bmcc-cat-badge">{category.badge}</span>
                </div>
                <div className="bmcc-cat-content">
                  <div className="bmcc-cat-header">
                    <h3 className="bmcc-cat-title">{category.title}</h3>
                  </div>
                  <p className="bmcc-cat-desc">{category.desc}</p>
                  <div className="bmcc-cat-footer">
                    <span className="bmcc-cat-count">{category.count}</span>
                    <span className="bmcc-cat-action">Explore cards</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. POPULAR CREDIT CARDS */}
      <section className="bmcc-popular-section" aria-labelledby="popular-heading" data-reveal>
        <div className="bmcc-container">
          <div className="bmcc-popular-head">
            <div>
              <span className="bmcc-section-label">CURATED SELECTION</span>
              <h2 id="popular-heading" className="bmcc-section-title">Popular Credit Cards</h2>
              <p className="bmcc-section-sub">
                Explore cards across rewards, travel, cashback, lounge access and everyday spending.
              </p>
            </div>
            <Link to="/explore" className="bmcc-text-cta">
              Explore All Credit Cards
            </Link>
          </div>

          {loading ? (
            <p className="bmcc-loading-text">Loading popular credit cards...</p>
          ) : (
            <PopularCardCarousel cards={popularCards} />
          )}

          <div className="bmcc-section-footer-cta">
            <Link to="/explore" className="bmcc-btn-primary">
              Explore All 96 Credit Cards
            </Link>
          </div>
        </div>
      </section>

      {/* 7. WHY BOOKMYCREDITCARD */}
      <section className="bmcc-why-section" aria-labelledby="why-heading" data-reveal>
        <div className="bmcc-container">
          <div className="bmcc-section-head center">
            <span className="bmcc-section-label">FACTUAL &amp; TRANSPARENT</span>
            <h2 id="why-heading" className="bmcc-section-title">Why Use BookMyCreditCard?</h2>
            <p className="bmcc-section-sub">
              Clear facts, independent analysis, and zero hidden traps to help you decide with confidence.
            </p>
          </div>
          <div className="bmcc-why-grid">
            {WHY_BMCC.map(item => (
              <div key={item.num} className={`bmcc-why-card bmcc-why-${item.accent}`}>
                <div className="bmcc-why-visual">
                  <WhyIllustration type={item.type} className="bmcc-why-graphic" />
                </div>
                <div className="bmcc-why-meta">
                  <span className="bmcc-why-pill">{item.badge}</span>
                  <span className="bmcc-why-num">{item.num}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW BOOKMYCREDITCARD WORKS */}
      <section className="bmcc-how-section" aria-labelledby="how-heading" data-reveal>
        <div className="bmcc-container">
          <div className="bmcc-section-head center">
            <span className="bmcc-section-label">SIMPLE 4-STEP PROCESS</span>
            <h2 id="how-heading" className="bmcc-section-title">How BookMyCreditCard Works</h2>
            <p className="bmcc-section-sub">
              Finding a credit card doesn't have to be complicated. Compare your options, understand the key details, and choose the cards that fit your needs.
            </p>
          </div>

          <div className="bmcc-how-flow-container">
            {/* Animated Flow Track running across steps */}
            <div className="bmcc-flow-track" aria-hidden="true">
              <div className="bmcc-flow-line-pulse"></div>
            </div>

            <div className="bmcc-how-grid">
              {HOW_BMCC_WORKS.map((item, idx) => (
                <div key={item.step} className={`bmcc-how-card bmcc-how-${item.accent}`}>
                  <div className="bmcc-how-card-head">
                    <span className="bmcc-how-step-tag">
                      {item.tag}
                    </span>
                    <span className="bmcc-how-step-connector" aria-hidden="true">{idx < 3 ? ">" : "v"}</span>
                  </div>
                  <div className="bmcc-how-visual">
                    <HowIllustration step={item.step} className="bmcc-how-graphic" />
                  </div>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <Link to={item.to} className="bmcc-how-link">
                    <span>{item.linkText}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

            {/* 8. COMPARE CREDIT CARDS (COMPACT MATRIX) */}
      <section className="bmcc-compare-section" aria-labelledby="compare-promo-heading" data-reveal>
        <div className="bmcc-container">
          {/* Centered Header */}
          <div className="bmcc-compare-header">
            <span className="bmcc-section-label">SIDE-BY-SIDE EVALUATION</span>

            <h2 id="compare-promo-heading" className="bmcc-compare-title">
              Compare Credit Cards Side by Side
            </h2>

            <p className="bmcc-compare-sub">
              Cut through marketing clutter. Line up fees, welcome perks, reward math, airport lounges, and forex markups head-to-head before applying.
            </p>

            {/* Matchup Selector Tabs */}
            <div className="bmcc-cmp-tabs" role="tablist" aria-label="Curated comparison matchups">
              {COMPARE_MATCHUPS.map((match, idx) => (
                <button
                  key={match.id}
                  type="button"
                  role="tab"
                  aria-selected={compareIndex === idx}
                  className={`bmcc-cmp-tab ${compareIndex === idx ? 'is-active' : ''}`}
                  onClick={() => setCompareIndex(idx)}
                >
                  <span className="bmcc-cmp-tab-label">{match.tag}</span>
                </button>
              ))}
            </div>

            {/* Sub-Header Audit Indicators */}
            <div className="bmcc-cmp-audit-strip" aria-label="Comparison trust highlights">
              <span className="bmcc-cmp-audit-item">100% Impartial Fee Audit</span>
              <span className="bmcc-cmp-audit-item">Verified 2026 Reward Math</span>
              <span className="bmcc-cmp-audit-item">Real Lounge Quotas</span>
            </div>
          </div>

          {/* Balanced Comparison Card */}
          {(() => {
            const activeMatchup = COMPARE_MATCHUPS[compareIndex];
            return (
              <div className="bmcc-cmp-compact-card">
                {/* 3-Column Comparison Grid Table */}
                <div className="bmcc-cmp-grid-table">
                  {/* Table Header: Card Profiles */}
                  <div className="bmcc-grid-row bmcc-grid-head">
                    <div className="bmcc-grid-col bmcc-col-label">
                      <span className="bmcc-grid-head-title">Parameters</span>
                      <span className="bmcc-grid-head-sub">6 Key Factors Compared</span>
                    </div>

                    {/* Card 1 Head */}
                    <div className="bmcc-grid-col bmcc-col-card">
                      <div className="bmcc-head-card-box">
                        <div className="bmcc-head-thumb">
                          <img
                            src={`/images/cards/${activeMatchup.card1.id}.webp`}
                            alt={activeMatchup.card1.name}
                            loading="lazy"
                            draggable="false"
                          />
                          <span className="bmcc-head-tag">{activeMatchup.card1.badge}</span>
                        </div>
                        <div className="bmcc-head-info">
                          <span className="bmcc-head-bank">{activeMatchup.card1.bankName}</span>
                          <Link to={activeMatchup.card1.route} className="bmcc-head-title-link">
                            <strong>{activeMatchup.card1.name}</strong>
                          </Link>
                          <div className="bmcc-head-rating">
                            <span className="bmcc-head-star" aria-hidden="true">&#9733;</span>
                            <span>{activeMatchup.card1.rating}</span>
                            <small>({activeMatchup.card1.reviews})</small>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 Head */}
                    <div className="bmcc-grid-col bmcc-col-card">
                      <div className="bmcc-head-card-box">
                        <div className="bmcc-head-thumb">
                          <img
                            src={`/images/cards/${activeMatchup.card2.id}.webp`}
                            alt={activeMatchup.card2.name}
                            loading="lazy"
                            draggable="false"
                          />
                          <span className="bmcc-head-tag">{activeMatchup.card2.badge}</span>
                        </div>
                        <div className="bmcc-head-info">
                          <span className="bmcc-head-bank">{activeMatchup.card2.bankName}</span>
                          <Link to={activeMatchup.card2.route} className="bmcc-head-title-link">
                            <strong>{activeMatchup.card2.name}</strong>
                          </Link>
                          <div className="bmcc-head-rating">
                            <span className="bmcc-head-star" aria-hidden="true">&#9733;</span>
                            <span>{activeMatchup.card2.rating}</span>
                            <small>({activeMatchup.card2.reviews})</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 1: Joining & Annual Fee */}
                  <div className="bmcc-grid-row">
                    <div className="bmcc-grid-col bmcc-col-label">
                      <span className="bmcc-row-title">Annual &amp; Joining Fee</span>
                      <span className="bmcc-row-sub">Milestone spend waiver</span>
                    </div>
                    <div className={`bmcc-grid-col bmcc-col-val ${activeMatchup.card1.winnerKeys.includes('joiningFee') ? 'is-winner' : ''}`}>
                      <div className="bmcc-val-main">
                        <strong>{activeMatchup.card1.joiningFee}</strong>
                        {activeMatchup.card1.winnerKeys.includes('joiningFee') && (
                          <span className="bmcc-lead-badge">Lower Fee</span>
                        )}
                      </div>
                      <span className="bmcc-val-sub">{activeMatchup.card1.waiver}</span>
                    </div>
                    <div className={`bmcc-grid-col bmcc-col-val ${activeMatchup.card2.winnerKeys.includes('joiningFee') ? 'is-winner' : ''}`}>
                      <div className="bmcc-val-main">
                        <strong>{activeMatchup.card2.joiningFee}</strong>
                        {activeMatchup.card2.winnerKeys.includes('joiningFee') && (
                          <span className="bmcc-lead-badge">Lower Fee</span>
                        )}
                      </div>
                      <span className="bmcc-val-sub">{activeMatchup.card2.waiver}</span>
                    </div>
                  </div>

                  {/* Row 2: Welcome / Sign-up Offer */}
                  <div className="bmcc-grid-row">
                    <div className="bmcc-grid-col bmcc-col-label">
                      <span className="bmcc-row-title">Welcome Bonus</span>
                      <span className="bmcc-row-sub">Activation rewards</span>
                    </div>
                    <div className={`bmcc-grid-col bmcc-col-val ${activeMatchup.card1.winnerKeys.includes('welcome') ? 'is-winner' : ''}`}>
                      <div className="bmcc-val-main">
                        <strong>{activeMatchup.card1.welcome}</strong>
                        {activeMatchup.card1.winnerKeys.includes('welcome') && (
                          <span className="bmcc-lead-badge">Higher Bonus</span>
                        )}
                      </div>
                      <span className="bmcc-val-sub">{activeMatchup.card1.welcomeSub}</span>
                    </div>
                    <div className={`bmcc-grid-col bmcc-col-val ${activeMatchup.card2.winnerKeys.includes('welcome') ? 'is-winner' : ''}`}>
                      <div className="bmcc-val-main">
                        <strong>{activeMatchup.card2.welcome}</strong>
                        {activeMatchup.card2.winnerKeys.includes('welcome') && (
                          <span className="bmcc-lead-badge">Higher Bonus</span>
                        )}
                      </div>
                      <span className="bmcc-val-sub">{activeMatchup.card2.welcomeSub}</span>
                    </div>
                  </div>

                  {/* Row 3: Reward Rate */}
                  <div className="bmcc-grid-row">
                    <div className="bmcc-grid-col bmcc-col-label">
                      <span className="bmcc-row-title">Reward Rate &amp; Returns</span>
                      <span className="bmcc-row-sub">Effective value-back</span>
                    </div>
                    <div className={`bmcc-grid-col bmcc-col-val ${activeMatchup.card1.winnerKeys.includes('reward') ? 'is-winner' : ''}`}>
                      <div className="bmcc-val-main">
                        <strong>{activeMatchup.card1.reward}</strong>
                        {activeMatchup.card1.winnerKeys.includes('reward') && (
                          <span className="bmcc-lead-badge">Higher Returns</span>
                        )}
                      </div>
                      <span className="bmcc-val-sub">{activeMatchup.card1.rewardSub}</span>
                    </div>
                    <div className={`bmcc-grid-col bmcc-col-val ${activeMatchup.card2.winnerKeys.includes('reward') ? 'is-winner' : ''}`}>
                      <div className="bmcc-val-main">
                        <strong>{activeMatchup.card2.reward}</strong>
                        {activeMatchup.card2.winnerKeys.includes('reward') && (
                          <span className="bmcc-lead-badge">Higher Returns</span>
                        )}
                      </div>
                      <span className="bmcc-val-sub">{activeMatchup.card2.rewardSub}</span>
                    </div>
                  </div>

                  {/* Row 4: Airport Lounge Access */}
                  <div className="bmcc-grid-row">
                    <div className="bmcc-grid-col bmcc-col-label">
                      <span className="bmcc-row-title">Airport Lounge Access</span>
                      <span className="bmcc-row-sub">Domestic &amp; international</span>
                    </div>
                    <div className={`bmcc-grid-col bmcc-col-val ${activeMatchup.card1.winnerKeys.includes('lounge') ? 'is-winner' : ''}`}>
                      <div className="bmcc-val-main">
                        <strong>{activeMatchup.card1.lounge}</strong>
                        {activeMatchup.card1.winnerKeys.includes('lounge') && (
                          <span className="bmcc-lead-badge">Superior Lounge</span>
                        )}
                      </div>
                      <span className="bmcc-val-sub">{activeMatchup.card1.loungeSub}</span>
                    </div>
                    <div className={`bmcc-grid-col bmcc-col-val ${activeMatchup.card2.winnerKeys.includes('lounge') ? 'is-winner' : ''}`}>
                      <div className="bmcc-val-main">
                        <strong>{activeMatchup.card2.lounge}</strong>
                        {activeMatchup.card2.winnerKeys.includes('lounge') && (
                          <span className="bmcc-lead-badge">Superior Lounge</span>
                        )}
                      </div>
                      <span className="bmcc-val-sub">{activeMatchup.card2.loungeSub}</span>
                    </div>
                  </div>

                  {/* Row 5: Forex Markup */}
                  <div className="bmcc-grid-row">
                    <div className="bmcc-grid-col bmcc-col-label">
                      <span className="bmcc-row-title">Forex Currency Markup</span>
                      <span className="bmcc-row-sub">Overseas transaction fee</span>
                    </div>
                    <div className={`bmcc-grid-col bmcc-col-val ${activeMatchup.card1.winnerKeys.includes('forex') ? 'is-winner' : ''}`}>
                      <div className="bmcc-val-main">
                        <strong>{activeMatchup.card1.forex}</strong>
                        {activeMatchup.card1.winnerKeys.includes('forex') && (
                          <span className="bmcc-lead-badge">Lowest Forex</span>
                        )}
                      </div>
                      <span className="bmcc-val-sub">Overseas spend markup</span>
                    </div>
                    <div className={`bmcc-grid-col bmcc-col-val ${activeMatchup.card2.winnerKeys.includes('forex') ? 'is-winner' : ''}`}>
                      <div className="bmcc-val-main">
                        <strong>{activeMatchup.card2.forex}</strong>
                        {activeMatchup.card2.winnerKeys.includes('forex') && (
                          <span className="bmcc-lead-badge">Lowest Forex</span>
                        )}
                      </div>
                      <span className="bmcc-val-sub">Overseas spend markup</span>
                    </div>
                  </div>

                  {/* Row 6: Best Suited Profile */}
                  <div className="bmcc-grid-row">
                    <div className="bmcc-grid-col bmcc-col-label">
                      <span className="bmcc-row-title">Best Suited For</span>
                      <span className="bmcc-row-sub">Ideal user profile</span>
                    </div>
                    <div className={`bmcc-grid-col bmcc-col-val ${activeMatchup.card1.winnerKeys.includes('bestFor') ? 'is-winner' : ''}`}>
                      <div className="bmcc-val-main">
                        <strong>{activeMatchup.card1.bestFor}</strong>
                      </div>
                      <span className="bmcc-val-sub">{activeMatchup.card1.bestForSub}</span>
                    </div>
                    <div className={`bmcc-grid-col bmcc-col-val ${activeMatchup.card2.winnerKeys.includes('bestFor') ? 'is-winner' : ''}`}>
                      <div className="bmcc-val-main">
                        <strong>{activeMatchup.card2.bestFor}</strong>
                      </div>
                      <span className="bmcc-val-sub">{activeMatchup.card2.bestForSub}</span>
                    </div>
                  </div>
                </div>

                {/* Compact Bottom Bar (Verdict + CTA) */}
                <div className="bmcc-cmp-compact-foot">
                  <div className="bmcc-compact-verdict">
                    
                    <p><strong>Verdict:</strong> {activeMatchup.verdict}</p>
                  </div>
                  <Link
                    to={`/compare-credit-cards?c1=${activeMatchup.card1.id}&c2=${activeMatchup.card2.id}`}
                    className="bmcc-btn-primary bmcc-cmp-compact-btn"
                  >
                    <span>Full 14-Parameter Breakdown</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* 9. CHECK ELIGIBILITY (INTERACTIVE PRE-QUALIFICATION) */}
      <section className="bmcc-eligibility-section" aria-labelledby="elig-promo-heading" data-reveal>
        <div className="bmcc-container">
          <div className="bmcc-eligibility-banner">
            {/* Left Column: Editorial & Value Props */}
            <div className="bmcc-elig-copy">
              <span className="bmcc-section-label">INSTANT PRE-QUALIFICATION</span>

              <h2 id="elig-promo-heading" className="bmcc-elig-title">
                Check Your Credit Card Eligibility in 60 Seconds
              </h2>

              <p className="bmcc-elig-sub">
                Find out which cards match your income, age, and employment profile before applying — with zero impact on your CIBIL score.
              </p>

              {/* 3 Structured Benefit Points */}
              <div className="bmcc-elig-perks">
                <div className="bmcc-elig-perk-item">
                  <div className="bmcc-elig-perk-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div className="bmcc-elig-perk-text">
                    <strong>Zero Hard CIBIL Inquiry</strong>
                    <span>Check your approval odds freely without dropping a single point on your credit score.</span>
                  </div>
                </div>

                <div className="bmcc-elig-perk-item">
                  <div className="bmcc-elig-perk-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  </div>
                  <div className="bmcc-elig-perk-text">
                    <strong>Multi-Bank Compatibility Check</strong>
                    <span>Instantly checks standard banking thresholds across 17+ leading Indian card issuers.</span>
                  </div>
                </div>

                <div className="bmcc-elig-perk-item">
                  <div className="bmcc-elig-perk-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="bmcc-elig-perk-text">
                    <strong>Pre-Filtered Approval Odds</strong>
                    <span>Only explore cards you actually qualify for, drastically minimizing application rejection risk.</span>
                  </div>
                </div>
              </div>

              {/* Action Cluster & Trust Notes */}
              <div className="bmcc-elig-actions">
                <Link to="/credit-card-eligibility" className="bmcc-btn-primary bmcc-elig-primary-btn">
                  <span>Check Detailed Eligibility Free</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>

                <div className="bmcc-elig-trust-strip">
                  <span className="bmcc-trust-pill">No Credit Impact</span>
                  <span className="bmcc-trust-pill">60-Sec Calculator</span>
                  <span className="bmcc-trust-pill">100% Free &amp; Secure</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Quick Pre-Qualification Preview Card */}
            {(() => {
              const activeEmpGroup = ELIG_DATA[eligEmp] || ELIG_DATA.salaried;
              const currentTier = activeEmpGroup.tiers[eligIncomeTier] || activeEmpGroup.tiers[0];

              return (
                <div className="bmcc-elig-simulator-card" aria-label="Interactive Credit Card Eligibility Simulator">
                  {/* Card Header */}
                  <div className="bmcc-sim-header">
                    <div className="bmcc-sim-header-title">
                      <strong>Eligibility Quick Estimator</strong>
                    </div>
                    <span className="bmcc-sim-badge">Interactive Preview</span>
                  </div>

                  {/* Interactive Employment Selector */}
                  <div className="bmcc-sim-field">
                    <label className="bmcc-sim-label">1. Select Employment Type</label>
                    <div className="bmcc-sim-toggle" role="radiogroup" aria-label="Employment Type">
                      <button
                        type="button"
                        role="radio"
                        aria-checked={eligEmp === 'salaried'}
                        className={`bmcc-sim-toggle-btn ${eligEmp === 'salaried' ? 'is-active' : ''}`}
                        onClick={() => {
                          setEligEmp('salaried');
                        }}
                      >
                        Salaried Professional
                      </button>
                      <button
                        type="button"
                        role="radio"
                        aria-checked={eligEmp === 'self-employed'}
                        className={`bmcc-sim-toggle-btn ${eligEmp === 'self-employed' ? 'is-active' : ''}`}
                        onClick={() => {
                          setEligEmp('self-employed');
                        }}
                      >
                        Self-Employed / Business
                      </button>
                    </div>
                  </div>

                  {/* Interactive Income Tiers */}
                  <div className="bmcc-sim-field">
                    <label className="bmcc-sim-label">2. {activeEmpGroup.fieldLabel}</label>
                    <div className="bmcc-sim-tiers" role="radiogroup" aria-label={activeEmpGroup.fieldLabel}>
                      {activeEmpGroup.tiers.map((tier, idx) => (
                        <button
                          key={tier.range}
                          type="button"
                          role="radio"
                          aria-checked={eligIncomeTier === idx}
                          className={`bmcc-sim-tier-btn ${eligIncomeTier === idx ? 'is-active' : ''}`}
                          onClick={() => setEligIncomeTier(idx)}
                        >
                          <span className="bmcc-sim-tier-range">{tier.range}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic Simulation Outcome Box */}
                  <div className="bmcc-sim-results-box">
                    <div className="bmcc-sim-results-top">
                      <div className="bmcc-sim-stat">
                        <span className="bmcc-sim-stat-label">Estimated Pre-Qualified</span>
                        <strong className="bmcc-sim-stat-val">{currentTier.cardsCount}</strong>
                      </div>
                      <div className="bmcc-sim-stat bmcc-stat-right">
                        <span className="bmcc-sim-stat-label">Approval Likelihood</span>
                        <strong className="bmcc-sim-odds-badge">{currentTier.odds}</strong>
                      </div>
                    </div>

                    {/* Likelihood Meter */}
                    <div className="bmcc-sim-meter-track" aria-hidden="true">
                      <div
                        className="bmcc-sim-meter-bar"
                        style={{ width: `${currentTier.oddsPercent}%` }}
                      />
                    </div>

                    {/* Matching Cards Thumbnails Preview */}
                    <div className="bmcc-sim-cards-preview">
                      <span className="bmcc-sim-cards-title">
                        Matching {currentTier.category} Picks:
                      </span>
                      <div className="bmcc-sim-cards-row">
                        {currentTier.sampleCards.map(c => (
                          <div key={c.id} className="bmcc-sim-card-chip">
                            <img
                              src={`/images/cards/${c.id}.webp`}
                              alt={c.name}
                              loading="lazy"
                              draggable="false"
                            />
                            <div className="bmcc-sim-card-chip-info">
                              <span className="bmcc-sim-card-name">{c.name}</span>
                              <span className="bmcc-sim-card-badge">{c.badge}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Simulator Footer */}
                  <div className="bmcc-sim-footer">
                    <div className="bmcc-sim-footer-note">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                      </svg>
                      <span>Zero hard inquiry. Checking does not change your CIBIL score.</span>
                    </div>
                    <Link to="/credit-card-eligibility" className="bmcc-sim-cta-link">
                      <span>Full Criteria Check</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* 11. EXPLORE BY BANK */}
      <section className="bmcc-banks-section" aria-labelledby="banks-heading" data-reveal>
        <div className="bmcc-container">
          <div className="bmcc-banks-wrapper">
            <div className="bmcc-section-head center">
              <span className="bmcc-section-label">TOP CARD ISSUERS</span>
              <h2 id="banks-heading" className="bmcc-section-title">
                Explore <span className="bmcc-title-highlight">Cards from Leading Issuers</span>
              </h2>
              <p className="bmcc-section-sub">
                Browse verified credit card offerings from 17 leading Indian banks and issuers.
              </p>
            </div>
            <div className="bmcc-banks-grid">
              {bankList.map(b => (
                <Link
                  key={b.id}
                  to={`/explore?bank=${b.id}`}
                  className="bmcc-bank-card"
                  title={`View ${b.name} credit cards`}
                >
                  <span className="bmcc-bank-name">{b.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="bmcc-faq-section" aria-labelledby="faq-heading" data-reveal>
        <div className="bmcc-container">
          <div className="bmcc-faq-container">
            <div className="bmcc-section-head center">
              <span className="bmcc-section-label">ANSWERS &amp; CLARITY</span>
              <h2 id="faq-heading" className="bmcc-section-title">Frequently Asked Questions</h2>
              <p className="bmcc-section-sub">
                Clear, unbiased answers to help you navigate cards, credit limits, interest-free periods, and CIBIL factors.
              </p>
            </div>

            <div className="bmcc-faq-list">
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={faq.num}
                    className={`bmcc-faq-item ${isOpen ? 'is-open' : ''}`}
                    data-open={isOpen}
                  >
                    <button
                      type="button"
                      className="bmcc-faq-summary"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.num}`}
                      id={`faq-question-${faq.num}`}
                    >
                      <div className="bmcc-faq-q-left">
                        <span className="bmcc-faq-num">{faq.num}</span>
                        <span className="bmcc-faq-question-text">{faq.q}</span>
                      </div>
                      <span className={`bmcc-faq-toggle-icon ${isOpen ? 'open' : ''}`} aria-hidden="true">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        id={`faq-answer-${faq.num}`}
                        role="region"
                        aria-labelledby={`faq-question-${faq.num}`}
                        className="bmcc-faq-answer"
                      >
                        <div className="bmcc-faq-answer-inner">
                          <p>{faq.a}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* IMPORTANT INFORMATION / REGULATORY DISCLOSURE */}
      <section className="bmcc-disclosure-section" aria-labelledby="disclosure-heading" data-reveal>
        <div className="bmcc-container">
          <div className="bmcc-disclosure-inner">

            {/* Left anchor column */}
            <div className="bmcc-disclosure-left">
              <span className="bmcc-section-label">CONSUMER NOTICE</span>
              <h2 id="disclosure-heading" className="bmcc-disclosure-title">Important Information</h2>
              <div className="bmcc-disclosure-actions">
                <Link to="/disclaimer" className="bmcc-disclosure-link">Read Disclaimer</Link>
                <Link to="/terms-of-use" className="bmcc-disclosure-link">Terms of Use</Link>
              </div>
            </div>

            {/* Right prose column */}
            <div className="bmcc-disclosure-right">
              <p>
                BookMyCreditCard is an independent discovery and comparison platform. We are not a lender, bank, NBFC, or credit card issuer. Our role is to surface publicly available product information to help consumers make informed choices.
              </p>
              <p>
                All credit card products, credit limits, interest rates, rewards, and joining or annual renewal fees are issued and determined solely by the respective banks and card issuers. Approval decisions are made exclusively by the issuing institution, subject to their internal underwriting policies.
              </p>
              <p>
                Product information and fee schedules are compiled from publicly available issuer disclosures. Terms, fees, and eligibility may vary. Always review the issuing bank's current Most Important Terms and Conditions (MITC) before submitting an application.
              </p>
              <span className="bmcc-disclosure-note">Transparency First — RBI Regulatory Framework Compliant</span>
            </div>

          </div>
        </div>
      </section>

      {/* 13. FINAL CTA */}
      <section className="bmcc-final-section" aria-labelledby="cta-heading" data-reveal>
        <div className="bmcc-final-inner">
          <div className="bmcc-final-content">
            <span className="bmcc-final-kicker">Ready to Begin</span>
            <h2 id="cta-heading" className="bmcc-final-title">Find a Credit Card<br/>That Fits Your Life</h2>
            <p className="bmcc-final-sub">
              Compare 200+ verified cards across 17 leading issuers. Explore transparent reward math, check basic eligibility in 60 seconds — completely free.
            </p>
            <div className="bmcc-final-actions">
              <Link to="/explore" className="bmcc-final-btn-primary">
                Explore All Cards
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3.333 8h9.334M8.667 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link to="/compare-credit-cards" className="bmcc-final-btn-secondary">
                Compare Side by Side
              </Link>
            </div>
            <div className="bmcc-final-trust">
              <span>Free service</span>
              <span className="bmcc-final-trust-sep">·</span>
              <span>Zero CIBIL impact</span>
              <span className="bmcc-final-trust-sep">·</span>
              <span>100% independent</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
