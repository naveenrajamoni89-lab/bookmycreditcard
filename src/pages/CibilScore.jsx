import PageHeader from '../components/ui/PageHeader';

export default function CibilScore() {
  return (
    <>
      <PageHeader
        title="CIBIL Score and Credit Cards"
        description="Understand how your credit history may affect a card application."
        breadcrumb="CIBIL Score"
      />
      <section className="pb-page-section">
        <div className="container">
          <h2 className="pb-page-subheading">What your score shows</h2>
          <p className="pb-page-text">
            A CIBIL Score summarises your credit history. Issuers may consider it alongside other information when reviewing an application; a score alone does not guarantee approval.
          </p>
          <h2 className="pb-page-subheading">What affects it</h2>
          <p className="pb-page-text">
            Payment history, credit use, the age of your credit accounts and recent enquiries can affect your score. Paying bills on time, keeping credit use low and checking your report for errors can help you manage your credit health.
          </p>
        </div>
      </section>
    </>
  );
}
