// Static seed/fallback content for the Credit Cards section.
// This mirrors the Supabase tables (see supabase/schema.sql). When the
// Supabase env vars are missing or a query fails, services fall back to
// the data below so the UI always renders.

// ---------------------------------------------------------------- FAQs ----
export const faqs = [
  {
    page: 'home',
    q: 'What is a credit card?',
    a: 'A credit card is a type of credit facility, issued through a plastic or a virtual card. Consumers can use it for making transactions within their preset credit limit and repay the spent amount by the due date, which usually falls after every 30-45 days.',
  },
  {
    page: 'home',
    q: 'How does a credit card work?',
    a: 'Unlike a debit card, where money is directly debited from your bank account when you make a payment, in the case of a credit card, the money is deducted from the assigned credit limit. In a way, you borrow funds from the issuer to make a payment. Based on the total funds used within a month (statement cycle), the issuer then sends a card statement to the user with the total amount due on the card.',
  },
  {
    page: 'home',
    q: 'What are the benefits of having a credit card?',
    a: 'Some benefits of owning a credit card are increased purchasing power, financial aid in case of emergency, complimentary benefits, rewards, cashback, and lifestyle benefits. Additionally, if used wisely and responsibly, a credit card can also help in improving or building credit score.',
  },
  {
    page: 'home',
    q: 'What is a credit limit and how is it determined?',
    a: 'A credit limit is the total spend capacity issued on your credit card. It is decided by the issuer based on various factors like credit score, credit history, employment type, monthly salary, and existing financial obligations.',
  },
  {
    page: 'home',
    q: 'What is the APR Rate?',
    a: 'APR (Annual Percentage Rate) is the annual interest charged on an unpaid balance on a credit card. This interest rate is calculated including the nominal interest rate plus any fees or additional costs associated with the credit card.',
  },
  {
    page: 'home',
    q: 'How to transfer money from credit card to bank account?',
    a: 'You can transfer money from a credit card to a bank account through various ways, such as net banking or mobile wallets. However, it is not advisable to do so regularly as it attracts cash advance fees and interest from day one.',
  },
  {
    page: 'home',
    q: 'What is the minimum due amount on a credit card?',
    a: 'The minimum due is the minimum amount you have to pay on your credit card bill to avoid late payment fees. This is typically a small percentage of your total outstanding balance, usually around 5% of the total amount due.',
  },
  {
    page: 'home',
    q: 'Can I get a loan against my credit card?',
    a: 'Yes, some credit cards offer a loan facility against your available credit limit, known as a credit card loan. This loan typically has a fixed interest rate and tenure, offering a convenient way to borrow without additional documentation.',
  },
  {
    page: 'home',
    q: 'How can I increase my credit score with a credit card?',
    a: 'Improving your credit score with a credit card requires responsible usage. To build a strong credit score, always pay your credit card bills on time and in full, keep your credit utilization below 30%, and avoid multiple credit card applications in a short period.',
  },
  {
    page: 'home',
    q: 'How to increase my credit card limit?',
    a: 'To increase your credit card limit, contact your card issuer and request a credit limit increase. However, the approval depends on your spending pattern, repayment history, credit score, and income. Regular and responsible card usage often leads to automatic limit increases.',
  },
  {
    page: 'home',
    q: 'Can a cardholder with an existing credit card apply for another one?',
    a: 'Yes, most card issuers allow individuals to have multiple credit cards. However, policies vary between issuers. Before applying for a second credit card, ensure you have a good credit score and can manage multiple card payments responsibly.',
  },
  {
    page: 'home',
    q: 'How to upgrade your credit card?',
    a: 'If you want to upgrade your existing credit card, you can contact your card issuer and request an upgrade. However, the approval depends on your eligibility, spending pattern, and credit history. Some issuers also offer automatic upgrades based on your card usage.',
  },
  {
    page: 'home',
    q: 'Can I use my credit card outside India? What are the charges?',
    a: 'Yes, most credit cards can be used for domestic as well as international transactions. However, a foreign exchange markup fee of around 3.5% is usually charged on international transactions. Some premium cards offer zero or lower forex markup.',
  },
  {
    page: 'home',
    q: 'Is it safe to save my credit card details on websites?',
    a: 'It is generally not recommended to save your credit card details on websites due to the risk of data breaches and fraud. However, with tokenisation, where actual card details are replaced with unique tokens, the security of saved card information has improved significantly.',
  },
  {
    page: 'interest-rates',
    q: 'What is the interest rate on a credit card?',
    a: 'Credit card interest rate, usually expressed as monthly interest rate or Annual Percentage Rate (APR), is the rate charged on the outstanding balance when the total due amount is not paid by the due date. In India it typically ranges from 1.99% to 3.75% per month (23.88% to 45% annually).',
  },
  {
    page: 'interest-rates',
    q: 'When is credit card interest charged?',
    a: 'Interest is charged when you do not pay the total amount due by the due date, withdraw cash using your credit card, or convert purchases into EMIs. No interest is charged if you pay the total outstanding in full every billing cycle.',
  },
  {
    page: 'interest-rates',
    q: 'How can I avoid paying interest on my credit card?',
    a: 'Always pay the total amount due (not just the minimum due) on or before the due date. Utilise the interest-free period of 20-50 days, avoid cash withdrawals on the credit card and set up auto-debit so you never miss a payment.',
  },
  {
    page: 'interest-rates',
    q: 'Is interest charged on the minimum amount due?',
    a: 'If you only pay the minimum amount due, interest is charged on the remaining outstanding balance and on fresh transactions from the transaction date. Paying only the minimum due can quickly build up a large debt.',
  },
  {
    page: 'cibil-score',
    q: 'What CIBIL score is required for a credit card?',
    a: 'Most issuers prefer a CIBIL score of 700 or above for unsecured credit cards. Premium cards may need 750+. Applicants with lower scores can consider secured (FD-backed) credit cards that do not require a credit history.',
  },
  {
    page: 'cibil-score',
    q: 'Can I get a credit card with no credit history?',
    a: 'Yes. If you are new to credit, you can start with a secured credit card issued against a fixed deposit, or entry-level cards offered to salaried professionals. Responsible usage will help you build your credit score.',
  },
  {
    page: 'cibil-score',
    q: 'Does applying for a credit card affect my CIBIL score?',
    a: 'Every direct application triggers a hard enquiry, which may temporarily reduce your score by a few points. Checking pre-approved offers on Book My Credit Card involves a soft enquiry and does not impact your score.',
  },
  {
    page: 'cibil-score',
    q: 'How can I improve my CIBIL score using a credit card?',
    a: 'Pay bills on time and in full, keep credit utilisation under 30%, avoid multiple applications in a short span, and keep old cards active. Consistent, responsible usage steadily improves your score.',
  },
  {
    page: 'eligibility',
    q: 'What is the minimum income required for a credit card?',
    a: 'Income requirements differ by card. Entry-level cards may be available at a monthly income of ₹15,000-₹20,000, while premium cards can require ₹1 lakh or more per month. Secured cards have no income requirement.',
  },
  {
    page: 'eligibility',
    q: 'What is the minimum age for a credit card?',
    a: 'The primary cardholder must usually be at least 18 years old (21 for many issuers). The maximum age is generally 60-65 years. Add-on cards can often be issued to family members aged 18 and above.',
  },
  {
    page: 'eligibility',
    q: 'Which documents are required for a credit card application?',
    a: 'You typically need identity proof (PAN, Aadhaar, passport), address proof (Aadhaar, utility bill, passport), income proof (salary slips, Form 16, ITR or bank statements) and a passport-size photograph.',
  },
  {
    page: 'eligibility',
    q: 'Can self-employed individuals get a credit card?',
    a: 'Yes. Self-employed applicants can get credit cards by submitting income proof such as ITR or audited financials. Issuers may also consider banking relationships and business vintage.',
  },
];

// -------------------------------------------------------- interest rates ----
export const interestRates = [
  { bank: 'HDFC Bank', monthly: '3.6%', annual: '43.2%' },
  { bank: 'SBI Card', monthly: '3.5%', annual: '42%' },
  { bank: 'ICICI Bank', monthly: '3.5% - 3.67%', annual: '42% - 44%' },
  { bank: 'Axis Bank', monthly: '3.6%', annual: '52.86%' },
  { bank: 'Kotak Mahindra Bank', monthly: '3.5%', annual: '42%' },
  { bank: 'YES BANK', monthly: '3.5%', annual: '42%' },
  { bank: 'IDFC FIRST Bank', monthly: '0.75% - 3.65%', annual: '9% - 43.8%' },
  { bank: 'IndusInd Bank', monthly: '3.83%', annual: '46%' },
  { bank: 'American Express', monthly: '3.5%', annual: '42%' },
  { bank: 'RBL Bank', monthly: '3.99%', annual: '47.88%' },
  { bank: 'HSBC Bank', monthly: '3.49%', annual: '41.88%' },
  { bank: 'Standard Chartered Bank', monthly: '3.75%', annual: '45%' },
  { bank: 'AU Small Finance Bank', monthly: '1.99% - 3.59%', annual: '23.88% - 43.08%' },
  { bank: 'Federal Bank', monthly: '0.99% - 3.49%', annual: '11.88% - 41.88%' },
  { bank: 'BOBCARD', monthly: '3.57%', annual: '42.84%' },
  { bank: 'Punjab National Bank', monthly: '2.95%', annual: '35.89%' },
];

// ----------------------------------------------------------- eligibility ----
export const eligibilityCriteria = [
  { criterion: 'Age', salaried: '21 - 60 years', selfEmployed: '21 - 65 years' },
  { criterion: 'Minimum Income', salaried: '₹15,000 - ₹25,000 per month (varies by card)', selfEmployed: 'ITR of ₹3 lakh+ per annum (varies by card)' },
  { criterion: 'Credit Score', salaried: '700 or above preferred', selfEmployed: '700 or above preferred' },
  { criterion: 'Employment', salaried: 'Minimum 6 months with current employer', selfEmployed: 'Business vintage of 1-3 years' },
  { criterion: 'Nationality', salaried: 'Resident Indian / NRI (select cards)', selfEmployed: 'Resident Indian / NRI (select cards)' },
  { criterion: 'Documents', salaried: 'PAN, Aadhaar, salary slips, bank statement', selfEmployed: 'PAN, Aadhaar, ITR, business proof' },
];

// -------------------------------------------------------- CIBIL sections ----
export const cibilSections = [
  {
    title: 'Why your CIBIL score matters for a credit card',
    body: 'Your CIBIL score is a 3-digit number between 300 and 900 that summarises your credit history. Card issuers use it as the first filter while evaluating applications — a higher score signals disciplined repayment behaviour and improves both your approval chances and the credit limit offered.',
  },
  {
    title: 'Ideal CIBIL score for credit card approval',
    body: 'A score of 750 and above is considered excellent and qualifies you for most premium credit cards. Scores between 700-749 are good and eligible for a wide range of cards. Between 650-699 approval is possible but options shrink, and below 650 you should consider a secured card and rebuild your score first.',
  },
  {
    title: 'How to check your CIBIL score for free',
    body: 'You can check your latest CIBIL score for free on Book My Credit Card. Checking your own score is a soft enquiry and never impacts the score. You also get a detailed credit report highlighting the accounts and payment history that drive your score.',
  },
  {
    title: 'Improving a low credit score',
    body: 'Pay every EMI and credit card bill on time, keep total credit utilisation under 30%, avoid applying to multiple lenders in a short window, retain your oldest credit lines and periodically review your credit report for reporting errors and raise disputes where needed.',
  },
];

// ----------------------------------------------------- score band table ----
export const cibilScoreBands = [
  { range: '750 - 900', rating: 'Excellent', approval: 'Very high approval chances, premium cards & higher limits' },
  { range: '700 - 749', rating: 'Good', approval: 'Good approval chances for most credit cards' },
  { range: '650 - 699', rating: 'Fair', approval: 'Limited options, entry-level cards possible' },
  { range: '300 - 649', rating: 'Poor', approval: 'Consider secured (FD-backed) credit cards' },
];

// ---------------------------------------------------------------- reviews ----
export const reviews = [
  {
    name: 'Rahul Sharma',
    location: 'Delhi',
    text: 'Got my HDFC Regalia Gold credit card through Book My Credit Card within a week. The process was completely online and hassle-free. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Priya Mehta',
    location: 'Mumbai',
    text: 'I compared multiple credit cards on Book My Credit Card and found the perfect cashback card for my needs. The comparison tool is very helpful.',
    rating: 5,
  },
  {
    name: 'Amit Kumar',
    location: 'Bangalore',
    text: 'Applied for Axis Atlas credit card and got approved instantly. Great platform for comparing credit cards and their benefits.',
    rating: 4,
  },
  {
    name: 'Sneha Reddy',
    location: 'Hyderabad',
    text: 'Book My Credit Card made it easy to find a lifetime free credit card. The filters helped me narrow down the best options quickly.',
    rating: 5,
  },
];

// ------------------------------------------------------- card collections ----
// Card groups rendered as carousels on the home page.
export const cardCollections = [
  { id: 'pre-approved', title: 'Pre-Approved Credit Cards on Book My Credit Card', showAllLink: false, cardIds: [5, 21, 13, 22, 4, 9] },
  { id: 'new-to-credit', title: 'Cards for New to Credit', showAllLink: true, cardIds: [4, 5, 13, 66, 51, 21] },
  { id: 'rupay', title: 'Rupay Credit Cards', showAllLink: true, cardIds: [4, 9, 30, 67, 10, 18] },
  { id: 'virtual', title: 'Virtual Credit Cards', showAllLink: false, cardIds: [4, 13, 22, 5] },
  { id: 'lounge', title: 'Top 10 Credit Cards for Airport Lounge Access', showAllLink: true, cardIds: [17, 30, 16, 39, 60, 7, 2, 3, 8, 6] },
];

// -------------------------------------------------------- category pages ----
// Config for the "By Category" landing pages (route: /:slug).
export const categoryPages = [
  {
    slug: 'cashback-credit-cards',
    title: 'Cashback Credit Cards',
    categoryId: 'cashback',
    description: 'Cashback credit cards return a percentage of your spends as direct cashback, usually credited against your statement. They are ideal for users who prefer straightforward savings over reward points, especially on online shopping, bill payments and everyday purchases.',
  },
  {
    slug: 'rewards-credit-cards',
    title: 'Rewards Credit Cards',
    categoryId: 'rewards',
    description: 'Rewards credit cards earn points on every transaction that can be redeemed for vouchers, products, air miles or statement credit. Accelerated rewards on select categories help frequent spenders extract maximum value from their cards.',
  },
  {
    slug: 'lifetime-free-credit-cards',
    title: 'Lifetime Free Credit Cards',
    categoryId: 'lifetime-free',
    description: 'Lifetime free credit cards charge no joining or annual fee, ever. They are a great starting point for first-time users and a zero-cost way to enjoy basic rewards, offers and the convenience of credit.',
  },
  {
    slug: 'rupay-credit-cards',
    title: 'RuPay Credit Cards',
    categoryId: 'rupay',
    description: 'RuPay credit cards run on India\u2019s domestic card network and can be linked to UPI apps, letting you scan & pay with your credit card. Many RuPay variants also offer rewards on UPI spends along with the usual card benefits.',
  },
  {
    slug: 'credit-cards-lounge-access',
    title: 'Credit Cards with Lounge Access',
    categoryId: 'lounge-access',
    description: 'These credit cards offer complimentary domestic and international airport lounge visits. Frequent flyers can relax, dine and work at premium lounges without paying per-visit charges.',
  },
  {
    slug: 'onecard-credit-cards',
    title: 'OneCard Credit Cards',
    categoryId: 'onecard',
    description: 'OneCard is a mobile-first metal credit card issued in partnership with leading banks. It offers lifetime free usage, 5X rewards on your top spend categories and complete card control through the OneCard app.',
  },
  {
    slug: 'fuel-credit-cards',
    title: 'Fuel Credit Cards',
    categoryId: 'fuel',
    description: 'Fuel credit cards provide fuel surcharge waivers and accelerated rewards or cashback at petrol pumps. Regular commuters can significantly cut down their monthly fuel expenses with the right co-branded fuel card.',
  },
  {
    slug: 'travel-credit-cards',
    title: 'Travel Credit Cards',
    categoryId: 'travel',
    description: 'Travel credit cards earn air miles or accelerated rewards on flight and hotel bookings, offer airport lounge access, travel insurance and partner discounts \u2014 perfect companions for frequent travellers.',
  },
  {
    slug: 'international-credit-cards',
    title: 'International Credit Cards',
    categoryId: 'international',
    description: 'International credit cards are accepted worldwide and are optimised for overseas usage with benefits like global lounge access, travel insurance and low foreign currency markup fees.',
  },
  {
    slug: 'zero-forex-markup-credit-cards',
    title: 'Zero Forex Markup Credit Cards',
    categoryId: 'zero-forex',
    description: 'Zero forex markup credit cards waive the usual 3.5% foreign exchange fee on international transactions, making them the most economical way to spend abroad or on international websites.',
  },
  {
    slug: 'secured-credit-cards',
    title: 'Secured Credit Cards',
    categoryId: 'secured',
    description: 'Secured credit cards are issued against a fixed deposit, so approval is guaranteed regardless of credit history. They are the easiest way for students, homemakers and new-to-credit users to start building a credit score.',
  },
];

// ------------------------------------------------------------- best cards ----
// Editorial picks for the "Best Credit Cards" page.
export const bestCardPicks = [
  { cardId: 4, tagline: 'Best for Cashback on UPI, Travel & Dining' },
  { cardId: 5, tagline: 'Best for Online Shopping Cashback' },
  { cardId: 13, tagline: 'Best Everyday Cashback Card' },
  { cardId: 2, tagline: 'Best Travel Rewards Card' },
  { cardId: 1, tagline: 'Best Premium Card' },
  { cardId: 3, tagline: 'Best for Vouchers & Milestone Benefits' },
  { cardId: 22, tagline: 'Best for Bill Payments' },
  { cardId: 7, tagline: 'Best Lifetime Free Travel Card' },
  { cardId: 61, tagline: 'Best for Dining & Grocery' },
  { cardId: 46, tagline: 'Best All-Rounder Rewards Card' },
];
