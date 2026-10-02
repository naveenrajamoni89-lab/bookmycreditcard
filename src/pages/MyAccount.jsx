import { useEffect, useState, useMemo, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { fetchMyActivities, describeActivity } from '../services/activityService';
import Loader from '../components/ui/Loader';
import PageHeader from '../components/ui/PageHeader';

function timeAgo(iso) {
  if (!iso) return '—';
  const date = new Date(iso);
  const time = date.getTime();
  if (isNaN(time)) return 'Recently';

  const seconds = Math.floor((Date.now() - time) / 1000);
  if (seconds < 60) return 'Just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hr${hours > 1 ? 's' : ''} ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`;
  return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

const ACTIVITY_ICONS = {
  signed_up: 'join',
  signed_in: 'check',
  page_visited: 'view',
  card_viewed: 'card',
  card_detail_view: 'info',
  apply_now_click: 'apply',
  eligibility_click: 'check',
  eligibility_checked: 'done',
  compare_added: 'add',
  compare_removed: 'remove',
  cards_compared: 'compare',
  lead_submitted: 'submit',
  calculator_used: 'calc',
};

const FILTER_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'cards', label: 'Cards Viewed' },
  { id: 'compare', label: 'Comparisons' },
  { id: 'eligibility', label: 'Eligibility & Apply' },
  { id: 'visits', label: 'Page Visits' },
];

export default function MyAccount() {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [activities, setActivities] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const loadActivities = useCallback(async (showRefreshingState = false) => {
    if (!user) return;
    if (showRefreshingState) setIsRefreshing(true);
    try {
      const items = await fetchMyActivities(user);
      setActivities(items);
    } finally {
      if (showRefreshingState) setIsRefreshing(false);
    }
  }, [user]);

  useEffect(() => {
    if (!loading && !user) navigate('/sign-in', { replace: true });
  }, [loading, user, navigate]);

  useEffect(() => {
    loadActivities();
  }, [loadActivities]);

  // Silently re-check on window focus so navigating between tabs reflects instantly
  useEffect(() => {
    const handleFocus = () => {
      if (user) loadActivities(false);
    };
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, [user, loadActivities]);

  const filteredActivities = useMemo(() => {
    if (!activities) return [];
    const meaningfulActivities = activities.filter(
      a => a.activity_type !== 'signed_in' && a.activity_type !== 'signed_out'
    );
    if (activeFilter === 'all') return meaningfulActivities;

    return meaningfulActivities.filter(a => {
      const t = a.activity_type || '';
      if (activeFilter === 'cards') {
        return t === 'card_viewed' || t === 'card_detail_view';
      }
      if (activeFilter === 'compare') {
        return t === 'compare_added' || t === 'compare_removed' || t === 'cards_compared';
      }
      if (activeFilter === 'eligibility') {
        return t === 'eligibility_click' || t === 'eligibility_checked' || t === 'apply_now_click' || t === 'lead_submitted' || t === 'calculator_used';
      }
      if (activeFilter === 'visits') {
        return t === 'page_visited';
      }
      return true;
    });
  }, [activities, activeFilter]);

  const meaningfulTotalCount = useMemo(() => {
    if (!activities) return 0;
    return activities.filter(a => a.activity_type !== 'signed_in' && a.activity_type !== 'signed_out').length;
  }, [activities]);

  if (loading || !user) return <Loader label="Loading your account..." />;

  const initials = (user.fullName || user.email)
    .split(' ')
    .map(w => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <>
      <PageHeader
        title="My Account"
        description="Your profile, saved preferences and recent activity on Book My Credit Card."
      />

      <div className="container pb-account-layout">
        {/* Profile card */}
        <aside className="pb-account-profile">
          <div className="pb-account-avatar">{initials}</div>
          <h2 className="pb-account-name">{user.fullName || 'Member'}</h2>
          <p className="pb-account-email">{user.email}</p>
          {user.isAdmin && <span className="pb-account-badge">Admin</span>}

          <dl className="pb-account-meta">
            {user.mobile && (
              <>
                <dt>Mobile</dt>
                <dd>+91 {user.mobile}</dd>
              </>
            )}
            <dt>Member since</dt>
            <dd>
              {user.createdAt
                ? new Date(user.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
                : '—'}
            </dd>
          </dl>

          <div className="pb-account-actions">
            {user.isAdmin && (
              <Link to="/admin" className="pb-account-btn pb-account-btn-secondary">Admin Dashboard</Link>
            )}
            <Link to="/compare-credit-cards" className="pb-account-btn pb-account-btn-secondary">My Compare List</Link>
            <button className="pb-account-btn pb-account-btn-danger" onClick={handleSignOut}>Sign Out</button>
          </div>
        </aside>

        {/* Recent activity */}
        <section className="pb-account-activity">
          <div className="pb-account-activity-header">
            <div className="pb-account-title-group">
              <h2 className="pb-account-section-title">Recent Activity</h2>
              {meaningfulTotalCount > 0 && (
                <span className="pb-activity-badge">{meaningfulTotalCount} recorded</span>
              )}
            </div>

            <button
              type="button"
              className={`pb-activity-refresh-btn ${isRefreshing ? 'is-refreshing' : ''}`}
              onClick={() => loadActivities(true)}
              disabled={isRefreshing}
              title="Refresh recent activity"
            >
              <span className="pb-refresh-icon" aria-hidden="true">↻</span>
              <span>{isRefreshing ? 'Refreshing...' : 'Refresh'}</span>
            </button>
          </div>

          {/* Activity Category Filter Tabs */}
          {activities && activities.length > 0 && (
            <div className="pb-activity-filters" role="tablist" aria-label="Filter activity by category">
              {FILTER_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  className={`pb-activity-filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}

          {activities === null ? (
            <Loader label="Loading activity..." />
          ) : activities.length === 0 ? (
            <div className="pb-account-empty">
              <p>No activity yet. Start exploring credit cards, comparing benefits, or checking eligibility and your actions will automatically show up here.</p>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '16px' }}>
                <Link to="/" className="pb-account-btn pb-account-btn-primary">Browse Credit Cards</Link>
                <Link to="/compare-credit-cards" className="pb-account-btn pb-account-btn-secondary">Compare Cards</Link>
              </div>
            </div>
          ) : filteredActivities.length === 0 ? (
            <div className="pb-account-empty">
              <p>No activities found in this filter category.</p>
              <button
                type="button"
                className="pb-activity-filter-btn active"
                style={{ marginTop: '10px' }}
                onClick={() => setActiveFilter('all')}
              >
                Show All Activities
              </button>
            </div>
          ) : (
            <ul className="pb-activity-list">
              {filteredActivities.map(a => {
                const { label, detail } = describeActivity(a);
                return (
                  <li key={a.id} className="pb-activity-item">
                    <span className="pb-activity-icon" aria-hidden="true">
                      {ACTIVITY_ICONS[a.activity_type] || '•'}
                    </span>
                    <div className="pb-activity-body">
                      <span className="pb-activity-label">{label}</span>
                      {detail && <span className="pb-activity-detail">{detail}</span>}
                    </div>
                    <time className="pb-activity-time">{timeAgo(a.created_at)}</time>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </div>
    </>
  );
}
