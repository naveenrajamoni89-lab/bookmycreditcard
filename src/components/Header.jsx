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
  { label: 'Credit Card Basics', to: '/credit-card-basics', tag: 'Beginner' },
  { label: 'CIBIL Score', to: '/cibil-score-for-credit-card', tag: 'Credit Health' },
  { label: 'Credit Card Interest Rates', to: '/credit-card-interest-rates', tag: 'Rates' },
  { label: 'Best Credit Cards', to: '/best-credit-cards', tag: 'Rankings' },
  { label: 'Credit Card Guides', to: '/credit-card-guides', tag: 'How-Tos' },
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
                <div className="pb-learn-items">
                  {LEARN_MENU.map(item => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="pb-learn-menu-row"
                      role="menuitem"
                      onClick={() => setLearnOpen(false)}
                    >
                      <span className="pb-learn-row-label">{item.label}</span>
                      <span className="pb-learn-row-tag">{item.tag}</span>
                    </Link>
                  ))}
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
