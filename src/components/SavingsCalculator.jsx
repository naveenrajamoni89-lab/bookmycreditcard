import { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  SAVINGS_CATEGORIES,
  DEFAULT_MONTHLY_SPENDS,
  DEFAULT_ANNUAL_SPENDS,
  SPEND_LIMITS,
  CALCULATOR_BANKS,
  calculateCardSavings,
} from '../data/savingsCalculatorData';
import '../styles/savings-calculator.css';

export default function SavingsCalculator() {
  const [spendType, setSpendType] = useState('monthly'); // 'monthly' | 'annual'
  const [selectedBankId, setSelectedBankId] = useState('bank_5'); // Default to BOBCARD
  const [selectedCardId, setSelectedCardId] = useState(96); // Default to BOBCARD Cashback (id: 96)
  const [monthlySpends, setMonthlySpends] = useState(DEFAULT_MONTHLY_SPENDS);
  const [annualSpends, setAnnualSpends] = useState(DEFAULT_ANNUAL_SPENDS);
  const [showTooltip, setShowTooltip] = useState(false);

  // Custom Dropdown Open States
  const [isBankOpen, setIsBankOpen] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);

  const bankDropdownRef = useRef(null);
  const cardDropdownRef = useRef(null);
  const tooltipRef = useRef(null);

  // Active bank
  const currentBank = useMemo(() => {
    return (
      CALCULATOR_BANKS.find((b) => b.id === selectedBankId || b.name === selectedBankId) ||
      CALCULATOR_BANKS[0]
    );
  }, [selectedBankId]);

  // Active card
  const currentCard = useMemo(() => {
    const found = currentBank.cards.find((c) => c.id === selectedCardId);
    return found || currentBank.cards[0] || null;
  }, [currentBank, selectedCardId]);

  // Select Bank and auto-pick its first card
  const handleSelectBank = useCallback((bank) => {
    setSelectedBankId(bank.id);
    setIsBankOpen(false);
    if (bank.cards && bank.cards.length > 0) {
      setSelectedCardId(bank.cards[0].id);
    }
  }, []);

  // Select Card Variant
  const handleSelectCard = useCallback((card) => {
    setSelectedCardId(card.id);
    setIsCardOpen(false);
  }, []);

  // Close dropdowns on click outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (bankDropdownRef.current && !bankDropdownRef.current.contains(e.target)) {
        setIsBankOpen(false);
      }
      if (cardDropdownRef.current && !cardDropdownRef.current.contains(e.target)) {
        setIsCardOpen(false);
      }
      if (tooltipRef.current && !tooltipRef.current.contains(e.target)) {
        setShowTooltip(false);
      }
    }

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setIsBankOpen(false);
        setIsCardOpen(false);
        setShowTooltip(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Active spends and limits
  const isAnnual = spendType === 'annual';
  const activeSpends = isAnnual ? annualSpends : monthlySpends;
  const limits = SPEND_LIMITS[spendType];

  // Client-side calculations
  const savings = useMemo(() => {
    return calculateCardSavings(currentCard, activeSpends, spendType);
  }, [currentCard, activeSpends, spendType]);

  // Handle spend updates
  const handleSpendChange = (catKey, rawValue) => {
    const val = Math.max(0, Math.min(Number(rawValue) || 0, limits.max));
    if (isAnnual) {
      setAnnualSpends((prev) => ({ ...prev, [catKey]: val }));
    } else {
      setMonthlySpends((prev) => ({ ...prev, [catKey]: val }));
    }
  };

  // Toggle Monthly / Annual
  const handleToggleSpendType = (type) => {
    if (type === spendType) return;
    setSpendType(type);
  };

  // Reset Spends
  const handleResetSpends = () => {
    if (isAnnual) {
      setAnnualSpends(DEFAULT_ANNUAL_SPENDS);
    } else {
      setMonthlySpends(DEFAULT_MONTHLY_SPENDS);
    }
  };

  return (
    <section className="bmcc-calc-wrapper" aria-labelledby="calc-section-heading">
      <div className="bmcc-calc-container">
        {/* Section Header */}
        <div className="bmcc-calc-header-block">
          <span className="bmcc-calc-badge">REWARD OPTIMIZER</span>
          <h2 id="calc-section-heading" className="bmcc-calc-title">
            Calculate Your <span className="bmcc-calc-title-highlight">Card Savings</span>
          </h2>
          <p className="bmcc-calc-subtitle">
            Estimate your guaranteed reward points, fuel waivers, and annual milestone savings tailored to your real spending patterns.
          </p>
        </div>

        {/* 2-Panel Calculator Card */}
        <div className="bmcc-calc-card">
          {/* LEFT PANEL */}
          <div className="bmcc-calc-left-panel">
            {/* Header row with toggle */}
            <div className="bmcc-calc-panel-head">
              <div className="bmcc-calc-headline-group">
                <h3 className="bmcc-calc-headline">
                  Customize Your Spend Pattern
                </h3>
                <span className="bmcc-calc-helper-sub">Adjust category spends to see real-time reward accrual</span>
              </div>

              {/* Monthly / Annual Pill Toggle */}
              <div className="bmcc-spend-toggle-track" role="radiogroup" aria-label="Spend frequency">
                <button
                  type="button"
                  role="radio"
                  aria-checked={!isAnnual}
                  onClick={() => handleToggleSpendType('monthly')}
                  className={`bmcc-spend-toggle-btn ${!isAnnual ? 'is-active' : ''}`}
                  id="calc-toggle-monthly"
                >
                  Monthly
                </button>
                <button
                  type="button"
                  role="radio"
                  aria-checked={isAnnual}
                  onClick={() => handleToggleSpendType('annual')}
                  className={`bmcc-spend-toggle-btn ${isAnnual ? 'is-active' : ''}`}
                  id="calc-toggle-annual"
                >
                  Annual
                </button>
              </div>
            </div>

            {/* CUSTOM DROPDOWNS ROW WITH IMAGES & FLOATING NOTCH LABELS */}
            <div className="bmcc-calc-selects-grid">
              {/* 1. SELECT YOUR BANK */}
              <div className="bmcc-custom-dropdown-container" ref={bankDropdownRef}>
                <div
                  className={`bmcc-custom-dropdown-field ${isBankOpen ? 'is-open' : ''}`}
                  onClick={() => {
                    setIsBankOpen(!isBankOpen);
                    setIsCardOpen(false);
                  }}
                  role="button"
                  tabIndex={0}
                  aria-haspopup="listbox"
                  aria-expanded={isBankOpen}
                  aria-label="Select Your Bank"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setIsBankOpen(!isBankOpen);
                    }
                  }}
                >
                  <span className="bmcc-field-notch-label">Select Your Bank</span>

                  <div className="bmcc-field-content">
                    {currentBank.logo ? (
                      <img
                        src={currentBank.logo}
                        alt=""
                        className="bmcc-dropdown-bank-logo"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <span className="bmcc-dropdown-bank-icon">🏦</span>
                    )}
                    <span className="bmcc-field-selected-text">{currentBank.name}</span>
                  </div>

                  <span className={`bmcc-field-arrow ${isBankOpen ? 'is-flipped' : ''}`} aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </div>

                <span className="bmcc-field-sub-helper">Please select from the list</span>

                {/* Bank Popover Menu */}
                {isBankOpen && (
                  <div className="bmcc-custom-menu-list" role="listbox" aria-label="Banks">
                    {CALCULATOR_BANKS.map((b) => {
                      const isSelected = b.id === currentBank.id;
                      return (
                        <div
                          key={b.id}
                          role="option"
                          aria-selected={isSelected}
                          className={`bmcc-custom-menu-item ${isSelected ? 'is-selected' : ''}`}
                          onClick={() => handleSelectBank(b)}
                        >
                          {b.logo ? (
                            <img
                              src={b.logo}
                              alt=""
                              className="bmcc-menu-item-bank-logo"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          ) : (
                            <span className="bmcc-menu-bank-initials">
                              {b.name.slice(0, 2).toUpperCase()}
                            </span>
                          )}
                          <span className="bmcc-menu-item-title">{b.name}</span>
                          {isSelected && <span className="bmcc-menu-check-icon">✓</span>}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* 2. SELECT CARD VARIANT (CONTAINS CARD IMAGES) */}
              <div className="bmcc-custom-dropdown-container" ref={cardDropdownRef}>
                <div
                  className={`bmcc-custom-dropdown-field ${isCardOpen ? 'is-open' : ''}`}
                  onClick={() => {
                    setIsCardOpen(!isCardOpen);
                    setIsBankOpen(false);
                  }}
                  role="button"
                  tabIndex={0}
                  aria-haspopup="listbox"
                  aria-expanded={isCardOpen}
                  aria-label="Select Card Variant"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setIsCardOpen(!isCardOpen);
                    }
                  }}
                >
                  <span className="bmcc-field-notch-label">Select Card Variant</span>

                  <div className="bmcc-field-content">
                    {currentCard?.image && (
                      <img
                        src={currentCard.image}
                        alt=""
                        className="bmcc-dropdown-card-thumb"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = '/images/cards/bobcard-cashback.webp';
                        }}
                      />
                    )}
                    <span className="bmcc-field-selected-text" title={currentCard?.name}>
                      {currentCard?.name || 'Select Card'}
                    </span>
                  </div>

                  <span className={`bmcc-field-arrow ${isCardOpen ? 'is-flipped' : ''}`} aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </div>

                <span className="bmcc-field-sub-helper">Please select from the list</span>

                {/* Card Variants Popover Menu with Thumbnails */}
                {isCardOpen && (
                  <div className="bmcc-custom-menu-list" role="listbox" aria-label="Card Variants">
                    {currentBank.cards.map((c) => {
                      const isSelected = c.id === currentCard?.id;
                      return (
                        <div
                          key={c.id}
                          role="option"
                          aria-selected={isSelected}
                          className={`bmcc-custom-menu-item ${isSelected ? 'is-selected' : ''}`}
                          onClick={() => handleSelectCard(c)}
                        >
                          <img
                            src={c.image}
                            alt=""
                            className="bmcc-dropdown-item-thumb"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = '/images/cards/bobcard-cashback.webp';
                            }}
                          />
                          <span className="bmcc-menu-item-title" title={c.name}>
                            {c.name}
                          </span>
                          {isSelected && <span className="bmcc-menu-check-icon">✓</span>}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Spend Sliders Grid (6 Categories) */}
            <div className="bmcc-category-grid">
              {SAVINGS_CATEGORIES.map(({ key, label, icon }) => {
                const amount = activeSpends[key] ?? 0;
                const percent = Math.min(100, Math.max(0, (amount / limits.max) * 100));
                const rewardRatePct = ((currentCard?.rates?.[key] ?? 0.02) * 100).toFixed(1);

                return (
                  <div key={key} className="bmcc-category-item">
                    <div className="bmcc-category-header">
                      <div className="bmcc-category-meta">
                        <span className="bmcc-category-icon" aria-hidden="true">{icon}</span>
                        <span className="bmcc-category-label">{label}</span>
                        <span className="bmcc-category-rate-badge">{rewardRatePct}% back</span>
                      </div>

                      {/* Currency Input */}
                      <div className="bmcc-input-container">
                        <span className="bmcc-input-currency">₹</span>
                        <input
                          type="number"
                          id={`spend-input-${key.toLowerCase()}`}
                          value={amount === 0 ? '' : amount}
                          placeholder="0"
                          min={limits.min}
                          max={limits.max}
                          step={limits.step}
                          onChange={(e) => handleSpendChange(key, e.target.value)}
                          className="bmcc-category-input"
                          aria-label={`${label} spend amount in Rupees`}
                        />
                      </div>
                    </div>

                    {/* Range Slider */}
                    <div className="bmcc-category-slider-wrapper">
                      <input
                        type="range"
                        id={`spend-slider-${key.toLowerCase()}`}
                        min={limits.min}
                        max={limits.max}
                        step={limits.step}
                        value={amount}
                        onChange={(e) => handleSpendChange(key, e.target.value)}
                        style={{
                          background: `linear-gradient(to right, #0056D6 0%, #0056D6 ${percent}%, #E2E8F0 ${percent}%, #E2E8F0 100%)`,
                        }}
                        className="bmcc-category-slider"
                        aria-label={`${label} spend slider`}
                      />
                      <div className="bmcc-category-minmax-row">
                        <span className="bmcc-minmax-label">₹0</span>
                        <span className="bmcc-minmax-label">{limits.maxLabel}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Actions Footer */}
            <div className="bmcc-calc-left-footer">
              <button
                type="button"
                onClick={handleResetSpends}
                className="bmcc-calc-reset-btn"
                title="Reset spends to recommended defaults"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
                Reset Default Spends
              </button>

              <div className="bmcc-calc-fees-summary">
                <span>Joining Fee: <strong>{currentCard?.joiningFee || '₹0'}</strong></span>
                <span className="bmcc-calc-dot">•</span>
                <span>Annual Fee: <strong>{currentCard?.annualFee || '₹0'}</strong></span>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Results showcase */}
          <div className="bmcc-calc-right-panel">
            {/* Floating Card Image */}
            <div className="bmcc-calc-card-preview-wrap">
              <img
                src={currentCard?.image || '/images/cards/bobcard-cashback.webp'}
                alt={currentCard?.name || 'Credit Card'}
                className="bmcc-calc-card-img"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/cards/bobcard-cashback.webp';
                }}
              />
              <div className="bmcc-calc-card-badge">{currentBank.name}</div>
            </div>

            {/* Savings Big Amount Showcase */}
            <div className="bmcc-calc-savings-display">
              <p className="bmcc-calc-savings-title">
                Your {isAnnual ? 'Annual' : 'Monthly'} Savings*
              </p>
              <div className="bmcc-calc-savings-value">
                <span className="bmcc-calc-currency-symbol">₹</span>
                <span className="bmcc-calc-digits">{savings.totalSavings.toLocaleString('en-IN')}</span>
              </div>
              <p className="bmcc-calc-savings-subtext">
                on {isAnnual ? 'annual' : 'monthly'} spend of <span className="bmcc-bold-spend">₹{savings.totalSpend.toLocaleString('en-IN')}</span>
              </p>
            </div>

            {/* White Breakdown Box */}
            <div className="bmcc-calc-breakdown-card">
              {/* Spend Rewards Row */}
              <div className="bmcc-calc-breakdown-row">
                <span className="bmcc-breakdown-label">Spend Rewards</span>
                <span className="bmcc-breakdown-amount">
                  ₹{savings.spendRewards.toLocaleString('en-IN')}
                </span>
              </div>

              {/* Additional Incentives Row with Interactive Tooltip */}
              <div className="bmcc-calc-breakdown-row bmcc-incentives-row">
                <div className="bmcc-incentives-label-group">
                  <span className="bmcc-breakdown-label">Additional Incentives</span>
                  <div className="bmcc-tooltip-wrapper" ref={tooltipRef}>
                    <button
                      type="button"
                      onClick={() => setShowTooltip(!showTooltip)}
                      onMouseEnter={() => setShowTooltip(true)}
                      className="bmcc-info-trigger"
                      aria-label="Additional incentives breakdown information"
                      aria-expanded={showTooltip}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                      </svg>
                    </button>

                    {showTooltip && (
                      <div className="bmcc-tooltip-popup" role="tooltip">
                        <div className="bmcc-tooltip-header">
                          <strong>Incentive Breakdown</strong>
                          <button
                            type="button"
                            onClick={() => setShowTooltip(false)}
                            className="bmcc-tooltip-close"
                            aria-label="Close tooltip"
                          >
                            ×
                          </button>
                        </div>
                        <p className="bmcc-tooltip-content">
                          {currentCard?.incentiveDetails || 'Includes fuel surcharge waivers, welcome vouchers, and milestone benefits based on your annual spending velocity.'}
                        </p>
                        <div className="bmcc-tooltip-arrow" />
                      </div>
                    )}
                  </div>
                </div>

                <span className="bmcc-breakdown-amount">
                  ₹{savings.additionalIncentives.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Apply Button CTA */}
            <div className="bmcc-calc-cta-wrap">
              <Link
                to={currentCard?.detailRoute || '/credit-card-eligibility'}
                className="bmcc-calc-apply-btn"
                id="calc-apply-now-btn"
              >
                <span>Apply Now</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
              <p className="bmcc-calc-disclaimer">*TnC applied. Savings are estimated on standard reward redemption.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
