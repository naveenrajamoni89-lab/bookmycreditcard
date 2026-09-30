import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGO_URL, SITE_NAME } from '../data/branding';
import { useAuth } from '../context/AuthContext';
import CardSearchDiscovery from './landing/CardSearchDiscovery';

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Explore', to: '/explore' },
  { label: 'Compare', to: '/compare-credit-cards' },
  { label: 'Eligibility', to: '/credit-card-eligibility' },
  { label: 'Learn', to: '/credit-card-interest-rates' },
];

export default function Header({ query, onQueryChange, searchFilter, onSearchFilterChange } = {}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  useEffect(() => {
    setMenuOpen(false);
    setUserMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!userMenuOpen) return;
    const close = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) setUserMenuOpen(false);
    };
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, [userMenuOpen]);

  const handleSignOut = async () => {
    setUserMenuOpen(false);
    await signOut();
    navigate('/');
  };

  return (
    <header className="pb-header">
      <div className="pb-header-main">
        <Link to="/" className="pb-logo" aria-label={`${SITE_NAME} home`}>
          <img src={LOGO_URL} alt={SITE_NAME} width="220" height="72" />
        </Link>

        <CardSearchDiscovery />

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

        <nav id="site-navigation" className={`pb-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navigation.map(item => <NavLink key={item.to} to={item.to} end className="pb-nav-item">{item.label}</NavLink>)}
        </nav>

        <div className="pb-header-right-actions">
          {!user ? <><Link to="/sign-in?mode=signup" className="pb-header-signup">Sign up</Link><Link to="/sign-in" className="pb-header-signin">Log in</Link></> : (
            <div className="pb-user-menu-wrap" ref={userMenuRef}>
              <button type="button" className="pb-user-menu-btn" onClick={() => setUserMenuOpen(open => !open)} aria-expanded={userMenuOpen} aria-label="Account menu">
                <span className="pb-user-avatar">{(user.fullName || user.email).charAt(0).toUpperCase()}</span>
                <span className="pb-user-name">{(user.fullName || user.email).split(' ')[0]}</span>
              </button>
              {userMenuOpen && (
                <div className="pb-user-menu">
                  <Link to="/my-account">My account</Link>
                  {user.isAdmin && <Link to="/admin">Admin dashboard</Link>}
                  <button type="button" onClick={handleSignOut}>Sign out</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
