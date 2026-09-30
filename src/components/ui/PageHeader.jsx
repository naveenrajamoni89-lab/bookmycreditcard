import Breadcrumbs from './Breadcrumbs';

/**
 * Standard sub-page header: breadcrumbs + H1 + optional intro paragraph.
 */
export default function PageHeader({ title, description, breadcrumb }) {
  return (
    <div className="pb-page-header">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: 'Credit Cards', to: '/' },
            { label: breadcrumb || title },
          ]}
        />
        <h1 className="pb-page-title">{title}</h1>
        {description && <p className="pb-page-desc">{description}</p>}
      </div>
    </div>
  );
}
