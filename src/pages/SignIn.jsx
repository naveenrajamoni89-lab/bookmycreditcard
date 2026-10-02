import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { SITE_NAME, LOGO_URL } from '../data/branding';

export default function SignIn() {
  const { signIn, signUp, isSupabaseConfigured } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [mode, setMode] = useState(new URLSearchParams(location.search).get('mode') === 'signup' ? 'signup' : 'login'); // 'login' | 'signup'
  useEffect(() => {
    setMode(new URLSearchParams(location.search).get('mode') === 'signup' ? 'signup' : 'login');
  }, [location.search]);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const switchMode = (next) => {
    setMode(next);
    setError('');
    setNotice('');
  };

  const validate = () => {
    if (mode === 'signup' && fullName.trim().length < 3) return 'Please enter your full name.';
    if (!/^\S+@\S+\.\S+$/.test(email)) return 'Please enter a valid email address.';
    if (mode === 'signup' && mobile && !/^[6-9]\d{9}$/.test(mobile)) return 'Please enter a valid 10-digit mobile number.';
    if (password.length < 6) return 'Password must be at least 6 characters.';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setNotice('');
    const v = validate();
    if (v) { setError(v); return; }

    setSubmitting(true);
    let result;
    if (mode === 'login') {
      result = await signIn({ email: email.trim(), password });
    } else {
      result = await signUp({ fullName: fullName.trim(), email: email.trim(), mobile, password });
    }
    setSubmitting(false);

    if (!result.ok) {
      setError(result.message || 'Something went wrong. Please try again.');
      return;
    }
    if (result.needsConfirmation) {
      setNotice(result.message);
      setMode('login');
      return;
    }
    navigate('/my-account');
  };

  return (
    <div className="pb-auth-wrap">
      <div className="pb-auth-card">
        <img
          src={LOGO_URL}
          alt={SITE_NAME}
          className="pb-auth-logo"
          onError={e => { e.target.style.display = 'none'; }}
        />

        <div className="pb-auth-tabs">
          <button
            className={`pb-auth-tab ${mode === 'login' ? 'active' : ''}`}
            onClick={() => switchMode('login')}
          >
            Sign In
          </button>
          <button
            className={`pb-auth-tab ${mode === 'signup' ? 'active' : ''}`}
            onClick={() => switchMode('signup')}
          >
            Create Account
          </button>
        </div>

        <form className="pb-auth-form" onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <div className="pb-form-field">
              <input
                type="text"
                className="pb-form-input"
                placeholder="Full Name"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                maxLength={60}
                autoComplete="name"
              />
            </div>
          )}

          <div className="pb-form-field">
            <input
              type="email"
              className="pb-form-input"
              placeholder="Email Address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>

          {mode === 'signup' && (
            <div className="pb-form-field">
              <input
                type="tel"
                className="pb-form-input"
                placeholder="Mobile Number (optional)"
                value={mobile}
                onChange={e => setMobile(e.target.value.replace(/[^0-9]/g, ''))}
                maxLength={10}
                autoComplete="tel"
              />
            </div>
          )}

          <div className="pb-form-field">
            <input
              type="password"
              className="pb-form-input"
              placeholder={mode === 'signup' ? 'Create Password (min 6 characters)' : 'Password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
            />
          </div>

          {error && <p className="pb-form-error" role="alert">{error}</p>}
          {notice && <p className="pb-auth-notice" role="status">{notice}</p>}

          <button className="pb-form-submit" type="submit" disabled={submitting}>
            {submitting
              ? (mode === 'login' ? 'Signing In...' : 'Creating Account...')
              : (mode === 'login' ? 'Sign In' : 'Create Account')}
          </button>
        </form>

        <p className="pb-auth-switch">
          {mode === 'login' ? (
            <>New to {SITE_NAME}? <button onClick={() => switchMode('signup')}>Create an account</button></>
          ) : (
            <>Already have an account? <button onClick={() => switchMode('login')}>Sign in</button></>
          )}
        </p>

        <div style={{ marginTop: '14px', marginBottom: '14px', padding: '12px', background: '#f8fafc', borderRadius: '8px', border: '1px dashed #cbd5e1', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', color: '#64748b', margin: '0 0 8px 0', fontWeight: 600 }}>
            Quick Demo Credentials:
          </p>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="pb-activity-filter-btn"
              onClick={() => {
                setMode('login');
                setEmail('user@bookmycreditcard.com');
                setPassword('Password123!');
              }}
            >
              Member Demo
            </button>
            <button
              type="button"
              className="pb-activity-filter-btn"
              onClick={() => {
                setMode('login');
                setEmail('admin@bookmycreditcard.com');
                setPassword('Password123!');
              }}
            >
              Admin Demo
            </button>
          </div>
        </div>

        <p className="pb-form-consent" style={{ textAlign: 'center' }}>
          By continuing, you agree to the{' '}
          <Link to="/terms-of-use">Terms of Use</Link> &amp;{' '}
          <Link to="/privacy-policy">Privacy Policy</Link>
        </p>

        {!isSupabaseConfigured && (
          <p className="pb-auth-demo-note">
            Demo mode: Supabase is not configured, so accounts are stored locally in this
            browser. Add your Supabase credentials in <code>.env</code> to enable real
            authentication.
          </p>
        )}
      </div>
    </div>
  );
}
