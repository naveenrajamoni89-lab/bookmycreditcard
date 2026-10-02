import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGO_URL, SITE_NAME } from '../data/branding';
import { useAuth } from '../context/AuthContext';
import CardSearchDiscovery from './landing/CardSearchDiscovery';
import '../styles/header-navigation.css';

const CATEGORIES_MENU = [
  { label: 'Cashback Credit Cards', to: '/cashback-credit-cards' },
  { label: 'Rewards Credit Cards', to: '/rewards-credit-cards' },
  { label: 'Travel Credit Cards', to: '/travel-credit-cards' },
  { label: 'Fuel Credit Cards', to: '/fuel-credit-cards' },
  { label: 'RuPay Credit Cards', to: '/rupay-credit-cards' },
  { label: 'Lounge Access Credit Cards', to: '/lounge-access-credit-cards' },
  { label: 'Lifetime Free Credit Cards', to: '/lifetime-free-credit-cards' },
  { label: 'Shopping Credit Cards', to: '/shopping-credit-cards' },
  { label: 'Dining Credit Cards', to: '/dining-credit-cards' },
  { label: 'Zero Forex Markup Credit Cards', to: '/zero-forex-markup-credit-cards' },
  { label: 'International Credit Cards', to: '/international-credit-cards' },
  { label: 'Secured Credit Cards', to: '/secured-credit-cards' },
  { label: 'FD-Backed Credit Cards', to: '/fd-backed-credit-cards' },
];

const PRIMARY_BANKS = [
  { label: 'HDFC Bank', to: '/hdfc-bank' },
  { label: 'SBI Card', to: '/sbi-card' },
  { label: 'ICICI Bank', to: '/icici-bank' },
  { label: 'Axis Bank', to: '/axis-bank' },
];

const OTHER_BANKS = [
  { label: 'Kotak Mahindra Bank', to: '/kotak-mahindra-bank' },
  { label: 'IndusInd Bank', to: '/indusind-bank' },
  { label: 'YES BANK', to: '/yes-bank' },
  { label: 'RBL Bank', to: '/rbl-bank' },
  { label: 'Bank of Baroda', to: '/bank-of-baroda' },
  { label: 'HSBC Bank', to: '/hsbc-bank' },
  { label: 'Punjab National Bank', to: '/punjab-national-bank' },
  { label: 'IDFC FIRST Bank', to: '/idfc-first-bank' },
  { label: 'Federal Bank', to: '/federal-bank' },
  { label: 'AU Small Finance Bank', to: '/au-small-finance-bank' },
  { label: 'American Express', to: '/amex-bank' },
];

const LEARN_MENU = [
  {
    label: 'Credit Card Basics',
    desc: 'Billing cycles, 50-day grace period & key terms',
    to: '/credit-card-basics',
    badge: 'Beginner',
    badgeColor: 'blue',
    icon: 'book',
  },
  {
    label: 'CIBIL Score',
    desc: 'Score brackets, factors & card approval odds',
    to: '/cibil-score-for-credit-card',
    badge: 'Credit Health',
    badgeColor: 'green',
    icon: 'shield',
  },
  {
    label: 'Credit Card Interest Rates',
    desc: 'Bank APR schedule, cash fees & repayment math',
    to: '/credit-card-interest-rates',
    badge: 'Rates & APR',
    badgeColor: 'amber',
    icon: 'percent',
  },
  {
    label: 'Best Credit Cards',
    desc: 'Top 25 cards ranked across rewards & lounge perks',
    to: '/best-credit-cards',
    badge: '2026 Rankings',
    badgeColor: 'purple',
    icon: 'trophy',
  },
  {
    label: 'Credit Card Guides',
    desc: 'Actionable playbooks for limits, disputes & rewards',
    to: '/credit-card-guides',
    badge: 'How-Tos',
    badgeColor: 'indigo',
    icon: 'compass',
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [categorySubmenuOpen, setCategorySubmenuOpen] = useState(false);
  const [bankSubmenuOpen, setBankSubmenuOpen] = useState(false);
  const [otherBanksOpen, setOtherBanksOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const closeTimers = useRef({});
  const hoverMenu = (name, setOpen, close = () => setOpen(false)) => ({
    onMouseEnter: () => {
      clearTimeout(closeTimers.current[name]);
      if (window.innerWidth > 1024) setOpen(true);
    },
    onMouseLeave: () => {
      if (window.innerWidth > 1024) {
        clearTimeout(closeTimers.current[name]);
        closeTimers.current[name] = setTimeout(close, 350);
      }
    },
  });

  useEffect(() => {
    const timers = closeTimers.current;
    return () => Object.values(timers).forEach(clearTimeout);
  }, []);

  const exploreRef = useRef(null);
  const learnRef = useRef(null);
  const userMenuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  // Close menus upon route change
  useEffect(() => {
    setMenuOpen(false);
    setExploreOpen(false);
    setCategorySubmenuOpen(false);
    setBankSubmenuOpen(false);
    setOtherBanksOpen(false);
    setLearnOpen(false);
    setUserMenuOpen(false);
  }, [location.pathname]);

  // Click outside listener for desktop dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (exploreRef.current && !exploreRef.current.contains(event.target)) {
        setExploreOpen(false);
        setCategorySubmenuOpen(false);
        setBankSubmenuOpen(false);
        setOtherBanksOpen(false);
      }
      if (learnRef.current && !learnRef.current.contains(event.target)) {
        setLearnOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setExploreOpen(false);
        setCategorySubmenuOpen(false);
        setBankSubmenuOpen(false);
        setOtherBanksOpen(false);
        setLearnOpen(false);
        setUserMenuOpen(false);
      }
    };

    document.addEventListener('pointerdown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSignOut = async () => {
    setUserMenuOpen(false);
    await signOut();
    navigate('/');
  };

  return (
    <header className="pb-header">
      <div className="pb-header-main">
        {/* BOOKMYCREDITCARD LOGO */}
        <Link to="/" className="pb-logo" aria-label={`${SITE_NAME} home`}>
          <img src={LOGO_URL} alt={SITE_NAME} width="220" height="72" />
        </Link>

        {/* Global Interactive Search */}
        <CardSearchDiscovery />

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="pb-menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setMenuOpen(open => !open)}
        >
          <span /><span /><span />
        </button>

        {/* Navigation Bar */}
        <nav
          id="site-navigation"
          className={`pb-nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Main navigation"
        >
          {/* Home Link */}
          <NavLink to="/" end className="pb-nav-item">
            Home
          </NavLink>

          {/* Explore Dropdown */}
          <div
            className="pb-nav-dropdown-wrap"
            ref={exploreRef}
            {...hoverMenu('explore', setExploreOpen, () => { setExploreOpen(false); setCategorySubmenuOpen(false); setBankSubmenuOpen(false); setOtherBanksOpen(false); })}
          >
            <button
              type="button"
              className="pb-nav-item pb-dropdown-trigger"
              aria-expanded={exploreOpen}
              aria-haspopup="true"
              onClick={() => setExploreOpen(open => !open)}
            >
              <span>Explore</span>
              <svg className="pb-dropdown-chevron" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>

            {exploreOpen && (
              <div className="pb-dropdown-menu pb-explore-dropdown" role="menu">
                {/* All Credit Cards */}
                <Link to="/explore" className="pb-dropdown-highlight" role="menuitem">
                  <span className="pb-dropdown-title">All Credit Cards</span>
                  <span className="pb-dropdown-desc">Explore full catalogue of 96+ verified cards</span>
                </Link>

                <div className="pb-dropdown-divider" />

                {/* By Category Submenu */}
                <div
                  className="pb-submenu-item-wrap"
                  {...hoverMenu('category', setCategorySubmenuOpen)}
                >
                  <button
                    type="button"
                    className="pb-submenu-trigger"
                    aria-expanded={categorySubmenuOpen}
                    data-active={categorySubmenuOpen}
                    onClick={() => setCategorySubmenuOpen(open => !open)}
                  >
                    <span>By Category</span>
                    <span className="pb-submenu-arrow">→</span>
                  </button>

                  {categorySubmenuOpen && (
                    <div className="pb-flyout-panel pb-category-flyout" role="menu">
                      <div className="pb-category-grid">
                        {CATEGORIES_MENU.map(cat => (
                          <Link key={cat.to} to={cat.to} className="pb-category-link" role="menuitem">
                            <span className="pb-category-bullet" aria-hidden="true" />
                            <span>{cat.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pb-dropdown-divider" />

                {/* By Bank Submenu */}
                <div
                  className="pb-submenu-item-wrap"
                  {...hoverMenu('bank', setBankSubmenuOpen, () => { setBankSubmenuOpen(false); setOtherBanksOpen(false); })}
                >
                  <button
                    type="button"
                    className="pb-submenu-trigger"
                    aria-expanded={bankSubmenuOpen}
                    data-active={bankSubmenuOpen}
                    onClick={() => setBankSubmenuOpen(open => !open)}
                  >
                    <span>By Bank</span>
                    <span className="pb-submenu-arrow">→</span>
                  </button>

                  {bankSubmenuOpen && (
                    <div className="pb-flyout-panel pb-bank-flyout" role="menu">
                      <div className="pb-bank-list">
                        {PRIMARY_BANKS.map(bank => (
                          <Link key={bank.to} to={bank.to} className="pb-bank-link" role="menuitem">
                            <span>{bank.label}</span>
                            <span style={{ fontSize: '11px', color: '#94a3b8' }}>View →</span>
                          </Link>
                        ))}

                        <div className="pb-dropdown-divider" />

                        {/* Other Banks */}
                        <div
                          className="pb-other-banks-item-wrap"
                          {...hoverMenu('otherBanks', setOtherBanksOpen)}
                        >
                          <button
                            type="button"
                            className="pb-other-banks-trigger"
                            aria-expanded={otherBanksOpen}
                            data-active={otherBanksOpen}
                            onClick={() => setOtherBanksOpen(open => !open)}
                          >
                            <span>Other Banks</span>
                            <span>→</span>
                          </button>

                          {otherBanksOpen && (
                            <div className="pb-other-banks-flyout" role="menu">
                              {OTHER_BANKS.map(bank => (
                                <Link key={bank.to} to={bank.to} className="pb-bank-link" role="menuitem">
                                  <span>{bank.label}</span>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Compare */}
          <NavLink to="/compare-credit-cards" className="pb-nav-item">
            Compare
          </NavLink>

          {/* Eligibility */}
          <NavLink to="/credit-card-eligibility" className="pb-nav-item">
            Eligibility
          </NavLink>

          {/* Learn Dropdown */}
          <div
            className="pb-nav-dropdown-wrap"
            ref={learnRef}
            {...hoverMenu('learn', setLearnOpen)}
          >
            <button
              type="button"
              className="pb-nav-item pb-dropdown-trigger"
              aria-expanded={learnOpen}
              aria-haspopup="true"
              onClick={() => setLearnOpen(open => !open)}
            >
              <span>Learn</span>
              <svg className="pb-dropdown-chevron" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>

            {learnOpen && (
              <div className="pb-dropdown-menu pb-learn-dropdown" role="menu">
                <div className="pb-learn-menu-header">
                  <span className="pb-learn-menu-kicker">KNOWLEDGE & EDUCATION</span>
                  <span className="pb-learn-menu-count">5 Core Hubs</span>
                </div>
                <div className="pb-learn-items">
                  {LEARN_MENU.map(item => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="pb-learn-card-link"
                      role="menuitem"
                      onClick={() => setLearnOpen(false)}
                    >
                      <div className={`pb-learn-icon-box pb-icon-${item.badgeColor}`}>
                        {item.icon === 'book' && (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                        )}
                        {item.icon === 'shield' && (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                        )}
                        {item.icon === 'percent' && (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>
                        )}
                        {item.icon === 'trophy' && (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34"/><path d="M6 4h12v7a6 6 0 0 1-12 0V4z"/></svg>
                        )}
                        {item.icon === 'compass' && (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
                        )}
                      </div>
                      <div className="pb-learn-text-block">
                        <div className="pb-learn-title-row">
                          <span className="pb-learn-item-title">{item.label}</span>
                          <span className={`pb-learn-item-pill pill-${item.badgeColor}`}>{item.badge}</span>
                        </div>
                        <span className="pb-learn-item-desc">{item.desc}</span>
                      </div>
                      <span className="pb-learn-arrow">→</span>
                    </Link>
                  ))}
                </div>
                <div className="pb-learn-menu-footer">
                  <span>Need personalized recommendations?</span>
                  <Link to="/credit-card-eligibility" className="pb-learn-footer-cta" onClick={() => setLearnOpen(false)}>
                    Check Eligibility →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right Actions: Sign Up / Log In or User Avatar */}
        <div className="pb-header-right-actions">
          {!user ? (
            <>
              <Link to="/sign-in?mode=signup" className="pb-header-signup">
                Sign Up
              </Link>
              <Link to="/sign-in" className="pb-header-signin">
                Log In
              </Link>
            </>
          ) : (
            <div className="pb-user-menu-wrap" ref={userMenuRef}>
              <button
                type="button"
                className="pb-user-menu-btn"
                onClick={() => setUserMenuOpen(open => !open)}
                aria-expanded={userMenuOpen}
                aria-label="Account menu"
              >
                <span className="pb-user-avatar">
                  {(user.fullName || user.email).charAt(0).toUpperCase()}
                </span>
                <span className="pb-user-name">
                  {(user.fullName || user.email).split(' ')[0]}
                </span>
              </button>
              {userMenuOpen && (
                <div className="pb-user-menu" role="menu">
                  <Link to="/my-account" role="menuitem">My account</Link>
                  {user.isAdmin && <Link to="/admin" role="menuitem">Admin dashboard</Link>}
                  <button type="button" onClick={handleSignOut} role="menuitem">Sign out</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
