import { Link } from 'react-router-dom';

/**
 * items: [{ label, to }] - the last item is rendered as plain text.
 */
export default function Breadcrumbs({ items }) {
  return (
    <nav className="pb-breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="pb-breadcrumb-item">
            {isLast || !item.to ? (
              <span className="pb-breadcrumb-current">{item.label}</span>
            ) : (
              <Link to={item.to}>{item.label}</Link>
            )}
            {!isLast && <span className="pb-breadcrumb-sep">›</span>}
          </span>
        );
      })}
    </nav>
  );
}
