import PageHeader from '../components/ui/PageHeader';
import FAQSection from '../components/FAQSection';
import Loader from '../components/ui/Loader';
import ErrorMessage from '../components/ui/ErrorMessage';
import { useAsyncData } from '../hooks/useAsyncData';
import { fetchInterestRates } from '../services/contentService';

const tips = [
  'Pay the total amount due, not just the minimum due, before the due date every month.',
  'Use the interest-free period (20-50 days) to your advantage by timing large purchases right after the statement date.',
  'Avoid cash withdrawals on credit cards — interest applies from day one along with a cash advance fee.',
  'Convert large purchases into EMIs at a lower interest rate instead of revolving the balance.',
  'Set up auto-debit for the total due amount so you never miss a payment.',
];

export default function InterestRates() {
  const { data: rates, loading, error } = useAsyncData(fetchInterestRates);

  return (
    <>
      <PageHeader
        title="Credit Card Interest Rates"
        description="Credit card interest may apply when you carry a balance or withdraw cash. Compare indicative issuer rates below and check current card terms before applying."
        breadcrumb="Credit Card Interest Rates"
      />

      <section className="pb-page-section">
        <div className="container">
          <h2 className="pb-page-subheading">Credit Card Interest Rates of Top Banks</h2>
          {loading ? (
            <Loader label="Loading interest rates..." />
          ) : error ? (
            <ErrorMessage message={error} />
          ) : (
            <div className="pb-table-wrap">
              <table className="pb-table">
                <thead>
                  <tr>
                    <th>Bank / Issuer</th>
                    <th>Monthly Interest Rate</th>
                    <th>Annual Percentage Rate (APR)</th>
                  </tr>
                </thead>
                <tbody>
                  {(rates || []).map((r, i) => (
                    <tr key={i}>
                      <td>{r.bank}</td>
                      <td>{r.monthly}</td>
                      <td>{r.annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <p className="pb-table-note">
            *Rates are indicative, vary by card variant and cardholder profile, and are subject to change by the issuer.
          </p>

          <h2 className="pb-page-subheading">How to Avoid Credit Card Interest</h2>
          <ul className="pb-page-list">
            {tips.map((tip, i) => <li key={i}>{tip}</li>)}
          </ul>
        </div>
      </section>

      <FAQSection page="interest-rates" title="Credit Card Interest Rate FAQs" />
    </>
  );
}
