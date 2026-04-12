import PageHeader from '../components/layout/PageHeader';
import './ContentPage.css';

function ContentPage({ crumb, title, lede, toc, children }) {
  return (
    <div className="content-page">
      <PageHeader crumb={crumb} title={title} lede={lede} />
      <div className="content-page__body">
        <div className="content-page__inner">
          {toc && toc.length > 0 ? (
            <div className="content-page__wrap">
              <aside className="content-page__toc">
                <h5>On this page</h5>
                {toc.map((item) => (
                  <a key={item.id} href={`#${item.id}`}>
                    {item.label}
                  </a>
                ))}
              </aside>
              <div className="content-page__main">{children}</div>
            </div>
          ) : (
            <div className="content-page__main">{children}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContentPage;
