import { Link } from 'react-router-dom';
import { SITE_NAME } from '../data/branding';

const digits = [
  ['00010', '00110', '01010', '10010', '11111', '00010', '00010'],
  ['01110', '11011', '10001', '10001', '10001', '11011', '01110'],
  ['00010', '00110', '01010', '10010', '11111', '00010', '00010'],
];

export default function NotFound() {
  return (
    <section className="card-not-found" aria-labelledby="not-found-heading">
      <title>{`Page not found | ${SITE_NAME}`}</title>
      <div className="card-not-found-intro">
        <p className="card-not-found-label">404 / PAGE NOT FOUND</p>
        <h1 id="not-found-heading">This page isn't in the cards.</h1>
        <p>The link may have moved, but your next credit card is still here.</p>
      </div>

      <div className="card-not-found-mosaic" aria-hidden="true">
        {digits.map((rows, digit) => (
          <div className="card-not-found-digit" key={digit}>
            {rows.join('').split('').map((filled, cell) => filled === '1' ? (
              <img
                key={cell}
                src={`/images/cards/${(digit * 17 + cell) % 62 + 1}.webp`}
                alt=""
                width="86"
                height="54"
                draggable="false"
                style={{ gridArea: `${Math.floor(cell / 5) + 1} / ${cell % 5 + 1}`, '--tilt': `${(cell * 7 + digit * 3) % 9 - 4}deg` }}
              />
            ) : null)}
          </div>
        ))}
      </div>

      <div className="card-not-found-actions">
        <Link to="/explore" className="card-not-found-explore">Explore credit cards <span aria-hidden="true">↗</span></Link>
        <Link to="/" className="card-not-found-home">Back to home</Link>
      </div>
      <p className="card-not-found-note">A little lost. Still full of possibilities.</p>
    </section>
  );
}
