import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import LandingHero from '../components/landing/LandingHero';
import CardFinder from '../components/landing/CardFinder';
import CreditCardItem from '../components/CreditCardItem';
import { useData } from '../context/DataContext';
import { banks as fallbackBanks } from '../data/cards';
import '../styles/home-editorial.css';

const CATEGORIES = [
  {
    title: 'Cashback Credit Cards',
    slug: 'cashback-credit-cards',
    desc: 'Up to 5% flat or accelerated cashback on groceries, dining, online shopping, and utility bills.',
    icon: '₹',
  },
  {
    title: 'Travel Credit Cards',
    slug: 'travel-credit-cards',
    desc: 'Air miles, complimentary flights, hotel loyalty memberships, and worldwide travel perks.',
    icon: '✈',
  },
  {
    title: 'Rewards Credit Cards',
    slug: 'rewards-credit-cards',
    desc: 'Accelerated reward points across retail and dining with flexible merchandise redemptions.',
    icon: '✦',
  },
  {
    title: 'Lifetime Free Credit Cards',
    slug: 'lifetime-free-credit-cards',
    desc: 'Zero annual renewal fee and zero joining charges with no minimum spend conditions.',
    icon: '★',
  },
  {
    title: 'Fuel Credit Cards',
    slug: 'fuel-credit-cards',
    desc: 'Fuel surcharge waivers and high value-back on petrol and diesel at major Indian fuel outlets.',
    icon: '⛽',
  },
  {
    title: 'Lounge Access Credit Cards',
    slug: 'credit-cards-lounge-access',
    desc: 'Complimentary domestic airport lounge visits and international Priority Pass access.',
    icon: '🛋',
  },
  {
    title: 'RuPay Credit Cards',
    slug: 'rupay-credit-cards',
    desc: 'Link directly to your preferred UPI apps for seamless QR scan-and-pay transactions.',
    icon: '⚡',
  },
  {
    title: 'International Credit Cards',
    slug: 'international-credit-cards',
    desc: 'Global merchant acceptance, 24/7 concierge assistance, and multi-currency protection.',
    icon: '🌐',
  },
  {
    title: 'Zero Forex Markup Credit Cards',
    slug: 'zero-forex-markup-credit-cards',
    desc: 'Save 3.5% to 5% on foreign currency spends with zero or ultra-low foreign exchange markups.',
    icon: '⇄',
  },
  {
    title: 'Secured Credit Cards',
    slug: 'secured-credit-cards',
    desc: 'Fixed-deposit (FD) backed cards designed to establish or rebuild your credit score safely.',
    icon: '🔒',
  },
];

const WHY_BMCC = [
  {
    num: '01',
    title: 'Compare cards side by side',
    desc: 'Line up annual fees, joining perks, lounge access allowances, and reward structures across cards in one place.',
  },
  {
    num: '02',
    title: 'Find cards based on your needs',
    desc: 'Filter by spend category, preferred card network, or annual fee thresholds to match your everyday spending.',
  },
  {
    num: '03',
    title: 'Understand fees and benefits',
    desc: 'Review transparent fee schedules, lounge quotas, forex markups, and fee waiver milestones before applying.',
  },
  {
    num: '04',
    title: 'Check basic eligibility',
    desc: 'Check basic eligibility factors in under 60 seconds without a hard credit inquiry.',
  },
  {
    num: '05',
    title: 'Explore cards from multiple banks',
    desc: 'Browse verified credit card offerings from 17 banks and issuers across India.',
  },
];

const HOW_BMCC_WORKS = [
  {
    step: '01',
    name: 'Explore',
    desc: 'Browse credit cards from multiple banks and categories.',
    to: '/explore',
    linkText: 'Explore cards',
  },
  {
    step: '02',
    name: 'Compare',
    desc: 'Compare fees, rewards, benefits and other important features side by side.',
    to: '/compare-credit-cards',
    linkText: 'Compare cards',
  },
  {
    step: '03',
    name: 'Check Eligibility',
    desc: 'Check basic eligibility using factors such as age, income and employment type.',
    to: '/credit-card-eligibility',
    linkText: 'Check eligibility',
  },
  {
    step: '04',
    name: 'Apply',
    desc: 'Review the card details and continue to the relevant application option.',
    to: '/explore',
    linkText: 'View applications',
  },
];

const CREDIT_BASICS = [
  {
    title: 'What Is a Credit Card?',
    desc: 'A credit card is a revolving credit line provided by a bank that lets you make purchases up to an approved limit with an interest-free grace period of 20 to 50 days.',
  },
  {
    title: 'Credit Card Rewards',
    desc: 'Cardholders earn reward points, cashback, or air miles on purchases. These points can be redeemed for flight bookings, hotel stays, vouchers, or direct statement credit.',
  },
  {
    title: 'Annual Fees & Waivers',
    desc: 'Cards charge joining and annual renewal fees. Most issuers waive annual renewal fees if your annual cumulative spending crosses a specified milestone threshold.',
  },
  {
    title: 'CIBIL Score',
    desc: "Your credit score reflects aspects of your credit history and repayment behaviour. A higher score can generally support eligibility for a wider range of credit products, but approval decisions depend on the issuer's criteria.",
    to: '/cibil-score-for-credit-card',
    linkText: 'Learn more about CIBIL →',
  },
  {
    title: 'Credit Card Interest',
    desc: "Finance charges may apply when eligible balances are carried beyond the applicable payment terms. Paying the total statement balance by the due date can help avoid finance charges on eligible retail transactions, subject to the card's terms.",
    to: '/credit-card-interest-rates',
    linkText: 'Learn more about interest rates →',
  },
];

const GUIDES = [
  {
    title: 'CIBIL Score and Credit Cards',
    tag: 'Credit Health',
    desc: 'Understand how payment history, credit utilization, and credit age affect your card approval chances and loan interest rates.',
    to: '/cibil-score-for-credit-card',
  },
  {
    title: 'Credit Card Interest Rates & Charges',
    tag: 'Finance & APR',
    desc: 'Compare indicative interest rates, APR, late payment fees, and learn how to use the 20–50 day grace period without paying finance charges.',
    to: '/credit-card-interest-rates',
  },
  {
    title: 'Popular Credit Cards in India (2026)',
    tag: 'Featured',
    desc: 'Explore popular credit cards across cashback, travel, rewards, dining, and lifetime-free categories.',
    to: '/best-credit-cards',
  },
];

const FAQS = [
  {
    q: 'What is a credit card?',
    a: "A credit card is a payment instrument issued by a bank or financial institution that enables cardholders to access a pre-approved credit limit for purchases, utility payments, and travel. Paying the full statement balance by the due date generally helps avoid finance charges on eligible retail transactions, subject to the card's terms.",
  },
  {
    q: 'How do I choose the right credit card?',
    a: "Identify your primary spending areas (such as groceries, fuel, dining, online shopping, or travel) and look for cards whose reward structures align with those habits. Also review joining fees, annual renewal charges, and any spend thresholds required for annual fee waivers, subject to the issuer's terms.",
  },
  {
    q: 'Can I compare multiple credit cards?',
    a: 'Yes. BookMyCreditCard provides a side-by-side comparison tool allowing you to select up to three cards at a time. You can compare joining fees, annual renewal charges, reward structures, lounge access quotas, and other key features in one structured view.',
  },
  {
    q: 'What is a good credit score for a credit card?',
    a: "A CIBIL score is one of the factors issuers may consider when evaluating a credit card application. A higher score can generally support eligibility for a wider range of cards, but approval, credit limits and pricing depend on the issuer's criteria.",
  },
  {
    q: 'Does checking eligibility affect my CIBIL score?',
    a: "BookMyCreditCard's basic eligibility check is a preliminary estimate based on information such as age, income and employment type. It does not guarantee approval and does not itself involve a hard credit inquiry.",
  },
  {
    q: 'What should I check before applying for a credit card?',
    a: "Before applying, review the card's eligibility guidelines (such as minimum age and income), joining and annual renewal fees, milestone spend conditions for fee waivers, forex markup rates on international spends, reward validity, and applicable finance charges, as outlined in the issuer's Most Important Terms and Conditions (MITC).",
  },
  {
    q: 'How do credit card annual fees work?',
    a: "An annual fee is charged by the issuing bank for maintaining your credit card account and its associated benefits. Many issuers offer fee waiver provisions if your annual spending reaches a specified milestone in the preceding card year, subject to the issuer's conditions. Lifetime-free cards generally do not charge annual renewal fees, subject to the card's product terms.",
  },
];

export default function Home() {
  const pageRef = useRef(null);
  const { cards, banks: allBanks, loading } = useData();
  const [openFaq, setOpenFaq] = useState(null);

  // Set SEO metadata
  useEffect(() => {
    document.title = 'BookMyCreditCard – Compare & Find the Right Credit Card';
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

  // Popular curated cards (6 cards)
  const popularCards = useMemo(() => {
    if (!cards?.length) return [];
    const popularCardIds = [1, 2, 3, 5, 9, 28]; // Infinia, Atlas, Regalia Gold, Cashback SBI, Tata Neu Infinity, Airtel Axis
    const matched = popularCardIds.map(id => cards.find(c => c.id === id)).filter(Boolean);
    return matched.length >= 4 ? matched : cards.slice(0, 6);
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
            <div className="bmcc-intro-badge">
              <span className="bmcc-badge-dot" aria-hidden="true" />
              <span>Transparent Card Discovery</span>
            </div>
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
                Explore cards categorized by how you spend—from high-yield cashback and airport lounge access to fuel savings, air miles, and zero annual fee cards.
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
                Check Basic Eligibility <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Editorial Trust Principles */}
          <div className="bmcc-intro-trust">
            <div className="bmcc-trust-col">
              <span className="bmcc-trust-icon" aria-hidden="true">✦</span>
              <div>
                <strong>Side-by-Side Fee Clarity</strong>
                <p>Joining fees, renewal charges, and spend-waiver milestones clearly laid out.</p>
              </div>
            </div>
            <div className="bmcc-trust-col">
              <span className="bmcc-trust-icon" aria-hidden="true">⚖</span>
              <div>
                <strong>Unbiased Comparison</strong>
                <p>Objective feature breakdowns compiled directly from official bank disclosures.</p>
              </div>
            </div>
            <div className="bmcc-trust-col">
              <span className="bmcc-trust-icon" aria-hidden="true">🔒</span>
              <div>
                <strong>Safe &amp; Spam-Free</strong>
                <p>Zero cold calls. Explore freely and apply directly through verified bank channels.</p>
              </div>
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
              <Link key={category.slug} to={`/${category.slug}`} className="bmcc-cat-card">
                <div>
                  <div className="bmcc-cat-card-top">
                    <span className="bmcc-cat-icon" aria-hidden="true">{category.icon}</span>
                    <span className="bmcc-cat-arrow" aria-hidden="true">↗</span>
                  </div>
                  <h3 className="bmcc-cat-title">{category.title}</h3>
                </div>
                <p className="bmcc-cat-desc">{category.desc}</p>
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
              Explore All Credit Cards <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="pb-card-list">
            {loading ? (
              <p>Loading popular credit cards...</p>
            ) : (
              popularCards.map(card => <CreditCardItem key={card.id} card={card} />)
            )}
          </div>

          <div className="bmcc-section-footer-cta">
            <Link to="/explore" className="bmcc-btn-primary">
              Explore All 96 Credit Cards <span aria-hidden="true">→</span>
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
              <div key={item.num} className="bmcc-why-card">
                <div className="bmcc-why-num">{item.num}</div>
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
          <div className="bmcc-how-grid">
            {HOW_BMCC_WORKS.map(item => (
              <div key={item.step} className="bmcc-how-card">
                <div className="bmcc-how-step-badge">
                  <span className="bmcc-how-num">{item.step}</span>
                </div>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <Link to={item.to} className="bmcc-how-link">
                  {item.linkText} <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. COMPARE CREDIT CARDS */}
      <section className="bmcc-compare-section" aria-labelledby="compare-promo-heading" data-reveal>
        <div className="bmcc-container">
          <div className="bmcc-feature-banner">
            <div className="bmcc-feature-copy">
              <span className="bmcc-section-label">SIDE-BY-SIDE EVALUATION</span>
              <h2 id="compare-promo-heading" className="bmcc-section-title">
                Compare Credit Cards Side by Side
              </h2>
              <p className="bmcc-section-sub">
                Compare annual fees, joining fees, rewards, benefits and other important features before choosing a card.
              </p>
              <p className="desc">
                Picking between two similar cards? Select up to 3 cards and line up their fee waiver milestones, airport lounge access limits, reward redemption rules, and welcome gifts side by side.
              </p>
              <div className="bmcc-feature-actions">
                <Link to="/compare-credit-cards" className="bmcc-btn-primary">
                  Compare Credit Cards <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="bmcc-compare-mockup" aria-hidden="true">
              <div className="bmcc-mock-head">
                <span>Side-by-side comparison preview</span>
                <small>3 cards max</small>
              </div>
              <div className="bmcc-mock-row">
                <div className="bmcc-mock-label">Card</div>
                <div className="bmcc-mock-card-head">
                  <span>HDFC Bank</span>
                  <strong>Infinia Metal</strong>
                </div>
                <div className="bmcc-mock-card-head">
                  <span>Axis Bank</span>
                  <strong>Atlas Card</strong>
                </div>
              </div>
              <div className="bmcc-mock-row">
                <div className="bmcc-mock-label">Joining fee</div>
                <div className="bmcc-mock-val">₹12,500</div>
                <div className="bmcc-mock-val">₹5,000</div>
              </div>
              <div className="bmcc-mock-row">
                <div className="bmcc-mock-label">Annual fee</div>
                <div className="bmcc-mock-val">₹12,500</div>
                <div className="bmcc-mock-val">₹5,000</div>
              </div>
              <div className="bmcc-mock-row">
                <div className="bmcc-mock-label">Lounge access</div>
                <div className="bmcc-mock-val">Unlimited worldwide</div>
                <div className="bmcc-mock-val">Domestic &amp; Intl</div>
              </div>
              <div className="bmcc-mock-row">
                <div className="bmcc-mock-label">Key feature</div>
                <div className="bmcc-mock-val">3.33% base value-back</div>
                <div className="bmcc-mock-val">Tiered EDGE Miles</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CHECK ELIGIBILITY */}
      <section className="bmcc-eligibility-section" aria-labelledby="elig-promo-heading" data-reveal>
        <div className="bmcc-container">
          <div className="bmcc-eligibility-banner">
            <div className="bmcc-feature-copy">
              <span className="bmcc-section-label">INSTANT PRE-QUALIFICATION</span>
              <h2 id="elig-promo-heading" className="bmcc-section-title">
                Check Your Credit Card Eligibility
              </h2>
              <p className="bmcc-section-sub">
                Check basic eligibility based on factors such as age, income and employment type.
              </p>
              <p className="desc">
                Know where you stand in under 60 seconds. Our calculator checks standard banking thresholds for salaried and self-employed professionals so you only explore cards you qualify for.
              </p>
              <div className="bmcc-eligibility-note">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4M12 8h.01" />
                </svg>
                <span>
                  Checking basic eligibility on BookMyCreditCard does not involve a hard credit inquiry. An eligibility estimate does not guarantee approval and is separate from the issuer's application process.
                </span>
              </div>
              <div className="bmcc-feature-actions">
                <Link to="/credit-card-eligibility" className="bmcc-btn-primary">
                  Check Eligibility <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="bmcc-elig-mockup" aria-hidden="true">
              <div className="bmcc-mock-head">
                <span>Eligibility estimator</span>
                <small>60 sec test</small>
              </div>
              <div className="bmcc-elig-mock-row">
                <span>Minimum age</span>
                <strong>21 Years</strong>
              </div>
              <div className="bmcc-elig-mock-row">
                <span>Employment</span>
                <strong>Salaried or Self-Employed</strong>
              </div>
              <div className="bmcc-elig-mock-row">
                <span>Minimum monthly income</span>
                <strong>₹25,000 / month</strong>
              </div>
              <div className="bmcc-elig-mock-row">
                <span>CIBIL inquiry</span>
                <strong>No hard credit check</strong>
              </div>
              <div className="bmcc-elig-mock-status">
                <span>✓ Basic criteria estimate available instantly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CREDIT CARD GUIDES */}
      <section className="bmcc-guides-section" aria-labelledby="guides-heading" data-reveal>
        <div className="bmcc-container">
          <div className="bmcc-section-head">
            <span className="bmcc-section-label">KNOWLEDGE &amp; INSIGHTS</span>
            <h2 id="guides-heading" className="bmcc-section-title">Learn About Credit Cards</h2>
            <p className="bmcc-section-sub">
              Practical guides to help you build credit health, avoid unnecessary charges, and choose the right product.
            </p>
          </div>
          <div className="bmcc-guides-grid">
            {GUIDES.map(guide => (
              <Link key={guide.to} to={guide.to} className="bmcc-guide-card">
                <div>
                  <span className="bmcc-guide-tag">{guide.tag}</span>
                  <h3>{guide.title}</h3>
                  <p>{guide.desc}</p>
                </div>
                <span className="bmcc-guide-link">
                  Read guide <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CREDIT CARD BASICS */}
      <section className="bmcc-basics-section" aria-labelledby="basics-heading" data-reveal>
        <div className="bmcc-container">
          <div className="bmcc-section-head">
            <span className="bmcc-section-label">CARD FUNDAMENTALS</span>
            <h2 id="basics-heading" className="bmcc-section-title">Credit Card Basics</h2>
            <p className="bmcc-section-sub">
              Understand the important parts of a credit card before you apply.
            </p>
          </div>
          <div className="bmcc-basics-grid">
            {CREDIT_BASICS.map((item, idx) => (
              <div key={idx} className="bmcc-basics-card">
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                {item.to && (
                  <Link to={item.to} className="bmcc-basics-link">
                    {item.linkText}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. EXPLORE BY BANK */}
      <section className="bmcc-banks-section" aria-labelledby="banks-heading" data-reveal>
        <div className="bmcc-container">
          <div className="bmcc-section-head">
            <span className="bmcc-section-label">ISSUER CATALOGUE</span>
            <h2 id="banks-heading" className="bmcc-section-title">Explore Credit Cards by Bank</h2>
            <p className="bmcc-section-sub">
              Browse credit card offerings from 17 leading Indian banks and issuers.
            </p>
          </div>
          <div className="bmcc-banks-grid">
            {bankList.map(b => (
              <Link key={b.id} to={`/explore?bank=${b.id}`} className="bmcc-bank-card" title={`View ${b.name} credit cards`}>
                <div className="bmcc-bank-dot">
                  {b.name.charAt(0)}
                </div>
                <span>{b.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="bmcc-faq-section" aria-labelledby="faq-heading" data-reveal>
        <div className="bmcc-container">
          <div className="bmcc-section-head center">
            <span className="bmcc-section-label">ANSWERS &amp; CLARITY</span>
            <h2 id="faq-heading" className="bmcc-section-title">Frequently Asked Questions</h2>
            <p className="bmcc-section-sub">
              Helpful answers to common questions about selecting, comparing, and managing credit cards in India.
            </p>
          </div>

          <div className="bmcc-faq-list">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="bmcc-faq-item" data-open={isOpen}>
                  <button
                    type="button"
                    className="bmcc-faq-summary"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span>{faq.q}</span>
                    <span className="bmcc-faq-toggle-icon" aria-hidden="true">
                      {isOpen ? '✕' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      className="bmcc-faq-answer"
                    >
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMPORTANT INFORMATION / REGULATORY DISCLOSURE */}
      <section className="bmcc-disclosure-section" aria-labelledby="disclosure-heading" data-reveal>
        <div className="bmcc-container">
          <div className="bmcc-disclosure-card">
            <div className="bmcc-disclosure-header">
              <span className="bmcc-section-label">CONSUMER NOTICE &amp; DISCLOSURE</span>
              <h2 id="disclosure-heading" className="bmcc-disclosure-title">Important Information</h2>
            </div>
            <div className="bmcc-disclosure-body">
              <p>
                BookMyCreditCard is an independent discovery and comparison platform designed to help consumers research and compare credit cards available in India. We are not a lender, bank, or credit card issuer.
              </p>
              <p>
                All credit card products, credit limits, interest rates, rewards, and joining or annual renewal fees are issued and determined solely by the respective banks and card issuers at their discretion, subject to their internal underwriting policies. Approval decisions are made exclusively by the issuing institution.
              </p>
              <p>
                Product information and fee schedules are compiled from publicly available disclosures and issuer schedules. Fees, rewards, eligibility, and terms may vary by issuer and card. Users should always review the issuing bank’s current Most Important Terms and Conditions (MITC) before submitting an application.
              </p>
              <div className="bmcc-disclosure-links">
                <Link to="/disclaimer" className="bmcc-disclosure-link">
                  Read Disclaimer <span aria-hidden="true">→</span>
                </Link>
                <Link to="/terms-of-use" className="bmcc-disclosure-link">
                  Terms of Use <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FINAL CTA */}
      <section className="bmcc-final-section" aria-labelledby="cta-heading" data-reveal>
        <div className="bmcc-container">
          <div className="bmcc-final-card">
            <span className="bmcc-section-label">READY TO BEGIN?</span>
            <h2 id="cta-heading" className="bmcc-final-title">Find a Credit Card That Fits Your Needs</h2>
            <p className="bmcc-final-sub">
              Compare cards, explore benefits and find options that match the way you spend.
            </p>
            <div className="bmcc-final-actions">
              <Link to="/explore" className="bmcc-btn-primary">
                Explore Credit Cards <span aria-hidden="true">→</span>
              </Link>
              <Link to="/compare-credit-cards" className="bmcc-btn-secondary">
                Compare Cards <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
