import { Link } from 'react-router-dom';
import '../../styles/card-marquee-showcase.css';

const SHOWCASE_CARDS = [
  {
    id: 1,
    name: 'HDFC Infinia Credit Card',
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
    id: 5,
    name: 'Cashback SBI Card',
    bankName: 'SBI Cards',
    route: '/sbi-bank/cashback-sbi-card/',
    image: '/images/cards/5.webp',
  },
  {
    id: 6,
    name: 'HSBC TravelOne Credit Card',
    bankName: 'HSBC Bank',
    route: '/hsbc-bank/travelone-credit-card/',
    image: '/images/cards/6.webp',
  },
  {
    id: 7,
    name: 'Federal Bank Scapia Credit Card',
    bankName: 'Federal Bank',
    route: '/federal-bank/scapia-credit-card/',
    image: '/images/cards/7.webp',
  },
  {
    id: 8,
    name: 'Axis Bank SELECT Credit Card',
    bankName: 'Axis Bank',
    route: '/axis-bank/select-credit-card/',
    image: '/images/cards/8.webp',
  },
  {
    id: 9,
    name: 'Tata Neu Infinity HDFC Bank Card',
    bankName: 'HDFC Bank',
    route: '/hdfc-bank/tata-neu-infinity-hdfc-bank-credit-card/',
    image: '/images/cards/9.webp',
  },
  {
    id: 10,
    name: 'IndianOil RBL Bank XTRA Credit Card',
    bankName: 'RBL Bank',
    route: '/rbl-bank/indianoil-rbl-xtra-credit-card/',
    image: '/images/cards/10.webp',
  },
  {
    id: 11,
    name: 'HDFC Diners Club Black Metal Edition',
    bankName: 'HDFC Bank',
    route: '/hdfc-bank/hdfc-diners-club-black-credit-card/',
    image: '/images/cards/11.webp',
  },
  {
    id: 12,
    name: 'Axis Magnus for Burgundy Credit Card',
    bankName: 'Axis Bank',
    route: '/axis-bank/magnus-burgundy-credit-card/',
    image: '/images/cards/12.webp',
  },
  {
    id: 13,
    name: 'HDFC Millennia Credit Card',
    bankName: 'HDFC Bank',
    route: '/hdfc-bank/millennia-credit-card/',
    image: '/images/cards/13.webp',
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
                    <img
                      src={card.image}
                      alt={`${card.name} by ${card.bankName}`}
                      width="355"
                      height="224"
                      loading="lazy"
                      draggable="false"
                    />
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
