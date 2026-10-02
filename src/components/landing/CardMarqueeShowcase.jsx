import { Link } from 'react-router-dom';
import '../../styles/card-marquee-showcase.css';

const SHOWCASE_CARDS = [
  {
    id: 1,
    name: 'HDFC Infinia Metal Edition',
    bankName: 'HDFC Bank',
    route: '/hdfc-bank/infinia-credit-card/',
    image: '/images/cards/1.webp',
  },
  {
    id: 2,
    name: 'Axis Atlas Credit Card',
    bankName: 'Axis Bank',
    route: '/axis-bank/atlas-credit-card/',
    image: '/images/cards/2.webp',
  },
  {
    id: 3,
    name: 'HDFC Regalia Gold Credit Card',
    bankName: 'HDFC Bank',
    route: '/hdfc-bank/hdfc-regalia-gold-credit-card/',
    image: '/images/cards/3.webp',
  },
  {
    id: 11,
    name: 'HDFC Diners Club Black Metal Edition',
    bankName: 'HDFC Bank',
    route: '/hdfc-bank/hdfc-diners-club-black-credit-card/',
    image: '/images/cards/11.webp',
  },
  {
    id: 13,
    name: 'HDFC Millennia Credit Card',
    bankName: 'HDFC Bank',
    route: '/hdfc-bank/millennia-credit-card/',
    image: '/images/cards/13.webp',
  },
  {
    id: 15,
    name: 'American Express Platinum Card',
    bankName: 'American Express',
    route: '/amex-bank/american-express-platinum-card/',
    image: '/images/cards/15.webp',
  },
  {
    id: 21,
    name: 'Flipkart Axis Bank Credit Card',
    bankName: 'Axis Bank',
    route: '/axis-bank/flipkart-axis-bank-credit-card/',
    image: '/images/cards/21.webp',
  },
  {
    id: 22,
    name: 'Axis Bank ACE Credit Card',
    bankName: 'Axis Bank',
    route: '/axis-bank/ace-credit-card/',
    image: '/images/cards/22.webp',
  },
  {
    id: 23,
    name: 'Swiggy HDFC Bank Credit Card',
    bankName: 'HDFC Bank',
    route: '/hdfc-bank/swiggy-blck-hdfc-credit-card/',
    image: '/images/cards/23.webp',
  },
  {
    id: 25,
    name: 'Airtel Axis Bank Credit Card',
    bankName: 'Axis Bank',
    route: '/axis-bank/airtel-axis-bank-credit-card/',
    image: '/images/cards/25.webp',
  },
  {
    id: 27,
    name: 'IDFC FIRST Private Credit Card',
    bankName: 'IDFC FIRST Bank',
    route: '/idfc-first-bank/idfc-first-private-credit-card/',
    image: '/images/cards/27.webp',
  },
  {
    id: 8,
    name: 'Axis Bank SELECT Credit Card',
    bankName: 'Axis Bank',
    route: '/axis-bank/select-credit-card/',
    image: '/images/cards/8.webp',
  },
];

export default function CardMarqueeShowcase() {
  return (
    <section className="cmq-section" aria-label="Featured Credit Cards Marquee Showcase">
      <div className="cmq-row">
        <div className="cmq-track" id="card-marquee-track">
          {[0, 1].map((setIndex) => (
            <div className="cmq-set" key={`set-${setIndex}`} aria-hidden={setIndex === 1}>
              {SHOWCASE_CARDS.map((card, idx) => {
                const globalIndex = setIndex * SHOWCASE_CARDS.length + idx;
                const bobDelay = (-(idx * 1.3)).toFixed(1) + 's';
                const inDelay = (globalIndex * 0.08).toFixed(2) + 's';

                return (
                  <Link
                    key={`${card.id}-${setIndex}`}
                    to={card.route}
                    className="cmq-card"
                    title={`View ${card.name} (${card.bankName})`}
                    style={{
                      '--d': bobDelay,
                      '--e': inDelay,
                    }}
                    tabIndex={setIndex === 1 ? -1 : 0}
                  >
                    <div className="cmq-card-inner">
                      <img
                        src={card.image}
                        alt={`${card.name} by ${card.bankName}`}
                        width="355"
                        height="224"
                        loading="lazy"
                        draggable="false"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
