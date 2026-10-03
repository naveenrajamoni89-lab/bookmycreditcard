import LearnLayout from '../components/LearnLayout';
import BankLogo from '../components/BankLogo';
import FAQSection from '../components/FAQSection';
import Loader from '../components/ui/Loader';
import ErrorMessage from '../components/ui/ErrorMessage';
import { useAsyncData } from '../hooks/useAsyncData';
import { fetchInterestRates } from '../services/contentService';

const tips = [
  'Pay the total amount due, not just the minimum due, before the due date every month.',
  'Use the interest-free period (20-50 days) to your advantage by timing large purchases right after the statement date.',
  'Avoid cash withdrawals on credit cards: interest applies from day one along with a cash advance fee.',
  'Convert large purchases into EMIs at a lower interest rate instead of revolving the balance.',
  'Set up auto-debit for the total due amount so you never miss a payment.',
];

export default function InterestRates() {
  const { data: rates, loading, error } = useAsyncData(fetchInterestRates);
  return (
    <LearnLayout title="Know the cost of credit." description="Compare indicative interest rates and understand what happens when you carry a balance." sections={[["rates", "Issuer rates"], ["payments", "Managing interest"], ["questions", "Common questions"]]}>
      <section id="rates" className="learn-section">
        <h2>Credit card interest rates</h2>
        <p>Rates vary by card and cardholder. Check the issuer's current terms before applying.</p>
        {loading ? <Loader label="Loading interest rates..." /> : error ? <ErrorMessage message={error} /> : (rates || []).length === 0 ? <p>Interest rates are unavailable right now. Check the issuer's current card terms.</p> :
          <div className="learn-table-wrap" role="region" aria-label="Issuer interest rates" tabIndex={0}>
            <table className="learn-table"><thead><tr><th scope="col">Bank / issuer</th><th scope="col">Monthly rate</th><th scope="col">Annual rate (APR)</th></tr></thead><tbody>
              {rates.map(rate => <tr key={rate.bank}><th scope="row"><span className="learn-issuer"><BankLogo name={rate.bank} size={24} />{rate.bank}</span></th><td>{rate.monthly}</td><td>{rate.annual}</td></tr>)}
            </tbody></table>
          </div>}
        <p className="learn-source">Indicative rates only. Card variants, issuer terms and your profile can affect the applicable rate.</p>
      </section>
      <section id="payments" className="learn-section"><h2>Managing interest charges</h2><ol className="learn-instructions">{tips.map(tip => <li key={tip}>{tip}</li>)}</ol></section>
      <div id="questions"><FAQSection page="interest-rates" title="Common questions" /></div>
    </LearnLayout>
  );
}
