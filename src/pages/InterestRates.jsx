import { useState } from 'react';
import { Link } from 'react-router-dom';
import FAQSection from '../components/FAQSection';
import Loader from '../components/ui/Loader';
import ErrorMessage from '../components/ui/ErrorMessage';
import { useAsyncData } from '../hooks/useAsyncData';
import { fetchInterestRates } from '../services/contentService';
import '../styles/learn-editorial.css';

const BANK_SLUGS = {
  'HDFC Bank': '/hdfc-bank',
  'SBI Card': '/sbi-card',
  'ICICI Bank': '/icici-bank',
  'Axis Bank': '/axis-bank',
  'Kotak Mahindra Bank': '/kotak-mahindra-bank',
  'YES BANK': '/yes-bank',
  'IDFC FIRST Bank': '/idfc-first-bank',
  'IndusInd Bank': '/indusind-bank',
  'American Express': '/amex-bank',
  'RBL Bank': '/rbl-bank',
  'HSBC Bank': '/hsbc-bank',
  'Standard Chartered Bank': '/standard-chartered-bank',
  'AU Small Finance Bank': '/au-small-finance-bank',
  'Federal Bank': '/federal-bank',
  'BOBCARD': '/bank-of-baroda',
  'Punjab National Bank': '/punjab-national-bank',
};

const TIPS = [
  {
    title: 'Pay the Total Amount Due, Never Just Minimum Due',
    desc: 'Paying only 5% Minimum Due keeps your account current but triggers interest on the remaining 95% from the date of each purchase.',
  },
  {
    title: 'Leverage the 20 to 50-Day Interest-Free Window',
    desc: 'Time high-value purchases directly following your statement generation date to enjoy the maximum possible zero-interest credit period.',
  },
  {
    title: 'Never Withdraw Cash from an ATM Using a Credit Card',
    desc: 'Cash advances carry zero interest-free period. Interest accrues immediately from minute one, along with an upfront 2.5% to 3% transaction fee.',
  },
  {
    title: 'Opt for Low-Interest Balance EMI Conversion',
    desc: 'If an unexpected expense arises, convert the balance into a 6–12 month merchant EMI (12% to 16% APR) rather than revolving at 42% APR.',
  },
  {
    title: 'Activate Auto-Debit for 100% Total Due',
    desc: 'Link your primary savings account to auto-pay the full statement balance 3 days before the due date so you never miss a payment.',
  },
];

export default function InterestRates() {
  const { data: rates, loading, error } = useAsyncData(fetchInterestRates);
  const [balance, setBalance] = useState(50000);
  const [rate, setRate] = useState(3.5);

  const monthlyInterest = Math.round((balance * rate) / 100);
  const dailyInterest = Math.round(monthlyInterest / 30);
  const annualInterest = Math.round(monthlyInterest * 12);

  return (
    <div className="learn-page bmcc-rates-page">
      {/* Hero Quick Trust Strip */}
      <section className="learn-hero">
        <div className="bmcc-container">
          <div className="learn-hero-inner">
            <div className="learn-breadcrumb">
              <Link to="/">Home</Link>
              <span className="learn-breadcrumb-sep">/</span>
              <Link to="/explore">Learn</Link>
              <span className="learn-breadcrumb-sep">/</span>
              <span className="learn-breadcrumb-current">Interest Rates</span>
            </div>

            <span className="learn-badge">
              <span className="learn-badge-dot" />
              TRANSPARENT SCHEDULE OF CHARGES
            </span>
            <h1 className="learn-title">Credit Card Interest Rates Across Major Banks</h1>
            <p className="learn-lead">
              Credit card finance charges in India typically range from 9% to 52.8% per annum (0.75% to 3.99% per month). Understand how banks calculate charges and how to use cards with 0% interest cost.
            </p>
            <div className="learn-trust-strip">
              <span className="learn-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                0% Cost When Paid in Full
              </span>
              <span className="learn-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Updated October 2026 Schedule
              </span>
              <span className="learn-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Up to 50 Days Free Window
              </span>
              <span className="learn-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                RBI Most Important Terms Aligned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Interactive Finance Charge Simulator */}
      <section className="learn-section">
        <div className="bmcc-container">
          <div className="learn-section-head">
            <span className="learn-section-kicker">FINANCE CHARGE SIMULATOR</span>
            <h2 className="learn-section-title">See How Revolving Credit Compounds</h2>
            <p className="learn-section-desc">
              Adjust the sliders below to calculate the real financial cost of carrying over an unpaid statement balance.
            </p>
          </div>

          <div className="learn-sim-card">
            <div className="learn-sim-grid">
              <div>
                <div className="learn-slider-group">
                  <div className="learn-slider-header">
                    <span className="learn-slider-label">Carried Over Statement Balance:</span>
                    <span className="learn-slider-val">₹{balance.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="200000"
                    step="5000"
                    value={balance}
                    onChange={(e) => setBalance(Number(e.target.value))}
                    className="learn-range-input"
                    aria-label="Outstanding Balance"
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>
                    <span>₹5,000</span>
                    <span>₹1,00,000</span>
                    <span>₹2,00,000</span>
                  </div>
                </div>

                <div className="learn-slider-group" style={{ marginBottom: 0 }}>
                  <div className="learn-slider-header">
                    <span className="learn-slider-label">Monthly Bank Interest Rate:</span>
                    <span className="learn-slider-val">{rate}% / mo ({(rate * 12).toFixed(1)}% APR)</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="4.0"
                    step="0.1"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="learn-range-input"
                    aria-label="Monthly Interest Rate"
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>
                    <span>1.0% (IDFC Low Tier)</span>
                    <span>3.5% (Market Average)</span>
                    <span>4.0% (Premium APR)</span>
                  </div>
                </div>
              </div>

              <div className="learn-sim-result-box">
                <div className="learn-result-stat">
                  <div className="learn-result-label">Daily Accruing Finance Charge</div>
                  <div className="learn-result-num danger">≈ ₹{dailyInterest.toLocaleString('en-IN')} / day</div>
                </div>
                <div className="learn-result-stat">
                  <div className="learn-result-label">30-Day Monthly Finance Charge</div>
                  <div className="learn-result-num danger">₹{monthlyInterest.toLocaleString('en-IN')} / mo</div>
                </div>
                <div className="learn-result-stat">
                  <div className="learn-result-label">Cost If Paid in Full on Due Date</div>
                  <div className="learn-result-num success">₹0 (Zero Charges)</div>
                </div>
                <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '12px', color: '#94a3b8', lineHeight: '1.5' }}>
                  *Excludes 18% GST applicable on credit card interest charges.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Bank APR Schedule Comparison Table */}
      <section className="learn-section">
        <div className="bmcc-container">
          <div className="learn-section-head">
            <span className="learn-section-kicker">ISSUER COMPARISON</span>
            <h2 className="learn-section-title">Credit Card Interest Rates of Top 16 Banks</h2>
            <p className="learn-section-desc">
              Indicative finance charges as published in issuer Most Important Terms and Conditions (MITC).
            </p>
          </div>

          <div className="learn-table-card">
            {loading ? (
              <div style={{ padding: '60px 20px', textAlign: 'center' }}>
                <Loader label="Loading bank rates..." />
              </div>
            ) : error ? (
              <div style={{ padding: '40px 20px' }}>
                <ErrorMessage message={error} />
              </div>
            ) : (
              <div className="learn-table-wrap">
                <table className="learn-table">
                  <thead>
                    <tr>
                      <th>Bank / Card Issuer</th>
                      <th>Monthly Finance Charge</th>
                      <th>Annual Percentage Rate (APR)</th>
                      <th>Grace Period</th>
                      <th style={{ textAlign: 'right' }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(rates || []).map((r, i) => {
                      const bankSlug = BANK_SLUGS[r.bank] || '/explore';
                      return (
                        <tr key={i}>
                          <td>
                            <div className="learn-bank-cell">
                              <span className="learn-bank-badge">
                                {r.bank.slice(0, 2).toUpperCase()}
                              </span>
                              <span>{r.bank}</span>
                            </div>
                          </td>
                          <td>
                            <span className="learn-rate-badge">{r.monthly}</span>
                          </td>
                          <td>
                            <strong style={{ color: '#0f172a' }}>{r.annual}</strong>
                          </td>
                          <td style={{ color: '#64748b' }}>
                            Up to 50 Days
                          </td>
                          <td style={{ textAlign: 'right' }}>
                            <Link
                              to={bankSlug}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px',
                                fontSize: '13px',
                                fontWeight: '700',
                                color: '#2447bb',
                                textDecoration: 'none',
                              }}
                            >
                              View Cards →
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <p style={{ fontSize: '12px', color: '#64748b', marginTop: '12px', textAlign: 'center' }}>
            *Rates are indicative, vary based on card variant and individual creditworthiness, and are subject to periodic issuer revisions.
          </p>
        </div>
      </section>

      {/* Section 3: 5 Golden Rules */}
      <section className="learn-section">
        <div className="bmcc-container">
          <div className="learn-section-head">
            <span className="learn-section-kicker">PRUDENT CARDMANSHIP</span>
            <h2 className="learn-section-title">5 Rules to Never Pay a Single Rupee in Interest</h2>
            <p className="learn-section-desc">
              Adopt these proven strategies to get full reward benefits while maintaining a 100% zero-interest cost profile.
            </p>
          </div>

          <div className="learn-bento-grid">
            {TIPS.map((tip, idx) => (
              <div key={idx} className="learn-card">
                <div className="learn-card-icon-box learn-icon-green">
                  <span style={{ fontSize: '13px', fontWeight: '800' }}>0{idx + 1}</span>
                </div>
                <h3 className="learn-card-title">{tip.title}</h3>
                <p className="learn-card-body">{tip.desc}</p>
                <div className="learn-card-footer">
                  <span style={{ color: '#059669', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    Best Practice
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: FAQs */}
      <section className="learn-section">
        <div className="bmcc-container">
          <FAQSection page="home" title="Credit Card Interest Rates & Charges FAQs" />
        </div>
      </section>
    </div>
  );
}
