import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import FAQSection from '../components/FAQSection';
import Loader from '../components/ui/Loader';
import ErrorMessage from '../components/ui/ErrorMessage';
import { useAsyncData } from '../hooks/useAsyncData';
import { fetchEligibilityCriteria } from '../services/contentService';
import { useAuth } from '../context/AuthContext';
import { logActivity } from '../services/activityService';
import { checkEligibility } from '../utils/checkEligibility';

export default function Eligibility() {
  const { data: criteria, loading, error } = useAsyncData(fetchEligibilityCriteria);
  const { user } = useAuth();
  const [age, setAge] = useState('');
  const [income, setIncome] = useState('');
  const [employment, setEmployment] = useState('salaried');
  const [checkResult, setCheckResult] = useState(null);

  const handleCheck = () => {
    const result = checkEligibility(age, income);
    if (!result.error) logActivity(user, 'eligibility_checked', { age: Number(age), income: Number(income), employment, eligible: result.eligible });
    setCheckResult(result);
  };

  return (
    <div className="decision-page decision-eligibility">
      <PageHeader
        title="Check your basic eligibility"
        description="Get a quick age and income indication, then review the issuer's requirements for each card."
        breadcrumb="Credit Card Eligibility"
      />
      <section className="pb-page-section decision-section">
        <div className="container">
          <div className="decision-eligibility-layout">
            <div className="decision-eligibility-main">
              <h2>Start with a quick check</h2>
              <p className="decision-section-intro">No sign-in is needed. Your result is an estimate, not a card approval.</p>
              <form className="pb-elig-checker" onSubmit={event => { event.preventDefault(); handleCheck(); }}>
                <div className="pb-elig-field">
                  <label htmlFor="elig-age">Age in years</label>
                  <input id="elig-age" type="number" className="pb-form-input" placeholder="e.g. 27" value={age} min="0" step="1" inputMode="numeric" onChange={event => { setAge(event.target.value); setCheckResult(null); }} />
                </div>
                <div className="pb-elig-field">
                  <label htmlFor="elig-income">Monthly income (₹)</label>
                  <input id="elig-income" type="number" className="pb-form-input" placeholder="e.g. 45000" value={income} min="0" inputMode="numeric" onChange={event => { setIncome(event.target.value); setCheckResult(null); }} />
                </div>
                <div className="pb-elig-field">
                  <label htmlFor="elig-emp">Employment type</label>
                  <select id="elig-emp" className="pb-form-input" value={employment} onChange={event => { setEmployment(event.target.value); setCheckResult(null); }}>
                    <option value="salaried">Salaried</option>
                    <option value="self-employed">Self-employed</option>
                  </select>
                  <small>Recorded for context; it does not change this estimate.</small>
                </div>
                <button type="submit" className="pb-check-eligibility">Check eligibility</button>
              </form>
              {checkResult && (checkResult.error ? (
                <p className="pb-form-error" role="alert">{checkResult.error}</p>
              ) : (
                <div className={`pb-elig-result ${checkResult.eligible ? 'ok' : 'warn'}`} role="status">
                  <strong>{checkResult.eligible ? 'Basic criteria may fit' : 'Review the requirements'}</strong>
                  <p>{checkResult.message}</p>
                  <Link to="/explore">Browse cards</Link>
                </div>
              ))}
            </div>
            <aside className="decision-eligibility-aside">
              <h2>What this checks</h2>
              <p>The estimate uses only your age and monthly income. It does not assess credit history or an issuer's card-specific rules.</p>
              <p>Check the current card terms before making any application decision.</p>
            </aside>
          </div>

          <div className="decision-reference">
            <h2>Common eligibility criteria</h2>
            <p className="decision-section-intro">These are general examples. Requirements vary by card and issuer, and may differ from the quick check above.</p>
            {loading ? (
              <Loader label="Loading eligibility criteria..." />
            ) : error ? (
              <ErrorMessage message={error} />
            ) : (
              <>
              <p className="decision-scroll-hint">Scroll sideways to view both employment types.</p>
              <div className="pb-table-wrap" tabIndex="0" aria-label="Eligibility criteria table, scroll horizontally">
                <table className="pb-table">
                  <thead>
                    <tr><th>Criteria</th><th>Salaried</th><th>Self-employed</th></tr>
                  </thead>
                  <tbody>
                    {(criteria || []).map((item, index) => (
                      <tr key={index}><th scope="row">{item.criterion}</th><td>{item.salaried}</td><td>{item.selfEmployed}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              </>
            )}
          </div>
        </div>
      </section>
      <FAQSection page="eligibility" title="Credit card eligibility questions" />
    </div>
  );
}
