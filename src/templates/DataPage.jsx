import PageHeader from '../components/layout/PageHeader';
import './DataPage.css';

function DataPage({ crumb, title, lede, main, aside }) {
  return (
    <div className="data-page">
      <PageHeader crumb={crumb} title={title} lede={lede} />
      <div className="data-page__body">
        <div className="data-page__inner">
          <div className="data-page__wrap">
            <div className="data-page__main">{main}</div>
            <aside className="data-page__aside">{aside}</aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataPage;
