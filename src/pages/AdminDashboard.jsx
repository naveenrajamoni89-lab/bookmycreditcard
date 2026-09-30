import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { fetchAllActivities, fetchAllProfiles, describeActivity } from '../services/activityService';
import Loader from '../components/ui/Loader';
import PageHeader from '../components/ui/PageHeader';

const TYPE_FILTERS = [
  { value: 'all', label: 'All Activities' },
  { value: 'card_viewed', label: 'Cards Viewed' },
  { value: 'card_detail_view', label: 'Card Detail Views' },
  { value: 'apply_now_click', label: 'Applications Started' },
  { value: 'cards_compared', label: 'Cards Compared' },
  { value: 'compare_added', label: 'Compare Added' },
  { value: 'eligibility_click', label: 'Eligibility Clicks' },
  { value: 'eligibility_checked', label: 'Eligibility Checker' },
  { value: 'lead_submitted', label: 'Leads' },
  { value: 'page_visited', label: 'Page Visits' },
  { value: 'signed_in', label: 'Sign Ins' },
  { value: 'signed_up', label: 'Sign Ups' },
];

function formatDateTime(iso) {
  return new Date(iso).toLocaleString('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
  });
}

export default function AdminDashboard() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const [profiles, setProfiles] = useState(null);
  const [activities, setActivities] = useState(null);
  const [userFilter, setUserFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  useEffect(() => {
    if (!loading && !user) navigate('/sign-in', { replace: true });
  }, [loading, user, navigate]);

  useEffect(() => {
    if (!user?.isAdmin) return;
    let cancelled = false;
    Promise.all([fetchAllProfiles(), fetchAllActivities()]).then(([p, a]) => {
      if (!cancelled) {
        setProfiles(p);
        setActivities(a);
      }
    });
    return () => { cancelled = true; };
  }, [user]);

  const activityCountByUser = useMemo(() => {
    const counts = {};
    (activities || []).forEach(a => { counts[a.user_id] = (counts[a.user_id] || 0) + 1; });
    return counts;
  }, [activities]);

  const lastActiveByUser = useMemo(() => {
    const last = {};
    (activities || []).forEach(a => {
      if (!last[a.user_id] || a.created_at > last[a.user_id]) last[a.user_id] = a.created_at;
    });
    return last;
  }, [activities]);

  const cardsCheckedByUser = useMemo(() => {
    const map = {};
    (activities || []).forEach(a => {
      if (a.activity_type === 'card_viewed' || a.activity_type === 'eligibility_click') {
        const card = a.details?.card;
        if (!card) return;
        if (!map[a.user_id]) map[a.user_id] = new Set();
        map[a.user_id].add(card);
      }
    });
    return map;
  }, [activities]);

  const filteredActivities = useMemo(() => (activities || []).filter(a =>
    (userFilter === 'all' || a.user_id === userFilter) &&
    (typeFilter === 'all' || a.activity_type === typeFilter)
  ), [activities, userFilter, typeFilter]);

  if (loading || !user) return <Loader label="Loading..." />;

  if (!user.isAdmin) {
    return (
      <div className="container pb-page-section" style={{ textAlign: 'center', padding: '80px 20px' }}>
        <h1 style={{ fontSize: 24, marginBottom: 12 }}>Access Denied</h1>
        <p style={{ color: '#666', marginBottom: 24 }}>
          The admin dashboard is only available to administrator accounts.
        </p>
        <Link to="/my-account" className="pb-account-btn pb-account-btn-primary">Go to My Account</Link>
      </div>
    );
  }

  const isLoading = profiles === null || activities === null;
  const today = new Date().toDateString();
  const activitiesToday = (activities || []).filter(a => new Date(a.created_at).toDateString() === today).length;

  return (
    <>
      <PageHeader
        title="Admin Dashboard"
        description="Monitor registered users, the cards they checked, and every activity across Book My Credit Card."
      />

      <div className="container pb-admin-wrap">
        {isLoading ? (
          <Loader label="Loading admin data..." />
        ) : (
          <>
            {/* Stats */}
            <div className="pb-admin-stats">
              <div className="pb-admin-stat">
                <span className="pb-admin-stat-value">{profiles.length}</span>
                <span className="pb-admin-stat-label">Registered Users</span>
              </div>
              <div className="pb-admin-stat">
                <span className="pb-admin-stat-value">{activities.length}</span>
                <span className="pb-admin-stat-label">Total Activities</span>
              </div>
              <div className="pb-admin-stat">
                <span className="pb-admin-stat-value">{activitiesToday}</span>
                <span className="pb-admin-stat-label">Activities Today</span>
              </div>
              <div className="pb-admin-stat">
                <span className="pb-admin-stat-value">
                  {activities.filter(a => a.activity_type === 'lead_submitted').length}
                </span>
                <span className="pb-admin-stat-label">Leads Submitted</span>
              </div>
            </div>

            {/* Users table */}
            <section className="pb-admin-section">
              <h2 className="pb-account-section-title">Users</h2>
              <div className="pb-table-scroll">
                <table className="pb-table pb-admin-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Joined</th>
                      <th>Activities</th>
                      <th>Cards Checked</th>
                      <th>Last Active</th>
                    </tr>
                  </thead>
                  <tbody>
                    {profiles.length === 0 && (
                      <tr><td colSpan={7} style={{ textAlign: 'center', color: '#888' }}>No registered users yet.</td></tr>
                    )}
                    {profiles.map(p => {
                      const cards = cardsCheckedByUser[p.id];
                      return (
                        <tr key={p.id}>
                          <td>
                            {p.full_name || '—'}
                            {p.is_admin && <span className="pb-account-badge" style={{ marginLeft: 6 }}>Admin</span>}
                          </td>
                          <td>{p.email}</td>
                          <td>{p.mobile ? `+91 ${p.mobile}` : '—'}</td>
                          <td>{p.created_at ? new Date(p.created_at).toLocaleDateString('en-IN') : '—'}</td>
                          <td>
                            <button
                              className="pb-admin-link"
                              onClick={() => setUserFilter(p.id)}
                              title="Show this user's activity"
                            >
                              {activityCountByUser[p.id] || 0}
                            </button>
                          </td>
                          <td className="pb-admin-cards-cell">
                            {cards ? [...cards].join(', ') : '—'}
                          </td>
                          <td>{lastActiveByUser[p.id] ? formatDateTime(lastActiveByUser[p.id]) : '—'}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Activity feed */}
            <section className="pb-admin-section">
              <div className="pb-admin-feed-head">
                <h2 className="pb-account-section-title">Activity Feed</h2>
                <div className="pb-admin-filters">
                  <select value={userFilter} onChange={e => setUserFilter(e.target.value)}>
                    <option value="all">All Users</option>
                    {profiles.map(p => (
                      <option key={p.id} value={p.id}>{p.full_name || p.email}</option>
                    ))}
                  </select>
                  <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
                    {TYPE_FILTERS.map(f => (
                      <option key={f.value} value={f.value}>{f.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {filteredActivities.length === 0 ? (
                <p className="pb-account-empty">No activities match the selected filters.</p>
              ) : (
                <div className="pb-table-scroll">
                  <table className="pb-table pb-admin-table">
                    <thead>
                      <tr>
                        <th>User</th>
                        <th>Activity</th>
                        <th>Details</th>
                        <th>When</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredActivities.map(a => {
                        const { label, detail } = describeActivity(a);
                        return (
                          <tr key={a.id}>
                            <td>{a.user_name || a.user_email || a.user_id}</td>
                            <td>{label}</td>
                            <td className="pb-admin-cards-cell">{detail || '—'}</td>
                            <td>{formatDateTime(a.created_at)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </>
  );
}
