import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { logActivity } from '../../services/activityService';

const PAGE_TITLES = {
  '/': 'Credit Cards Home',
  '/best-credit-cards': 'Best Credit Cards',
  '/credit-card-interest-rates': 'Credit Card Interest Rates',
  '/cibil-score-for-credit-card': 'CIBIL Score for Credit Card',
  '/credit-card-eligibility': 'Credit Card Eligibility',
  '/compare-credit-cards': 'Compare Credit Cards',
};

/**
 * Records a page-visit activity for signed-in users on every route change.
 * Auth/account pages are excluded to avoid noise.
 */
export default function PageVisitTracker() {
  const { pathname } = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;
    if (['/sign-in', '/my-account', '/admin'].includes(pathname)) return;
    const title = PAGE_TITLES[pathname]
      || pathname
        .slice(1)
        .split('-')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
    logActivity(user, 'page_visited', { path: pathname, title });
  }, [pathname, user]);

  return null;
}
