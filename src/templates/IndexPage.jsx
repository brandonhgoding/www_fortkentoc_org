import PageHeader from '../components/layout/PageHeader';
import './IndexPage.css';

function IndexPage({ crumb, title, lede, filters, children }) {
  return (
    <div className="index-page">
      <PageHeader crumb={crumb} title={title} lede={lede} />
      <div className="index-page__body">
        <div className="index-page__inner">
          {filters && filters.length > 0 && (
            <div className="index-page__filters" role="tablist" aria-label="Filter">
              {filters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  className={`index-page__chip ${f.active ? 'index-page__chip--on' : ''}`}
                  onClick={f.onClick}
                >
                  {f.label}
                </button>
              ))}
            </div>
          )}
          <div className="index-page__grid">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
