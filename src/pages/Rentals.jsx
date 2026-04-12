import DataPage from '../templates/DataPage';
import Eyebrow from '../components/ui/Eyebrow';
import Button from '../components/ui/Button';
import PageMeta from '../components/PageMeta';
import './Rentals.css';

// Daily rental rates from the 2025-26 season pricing table.
// Weekly: Youth ski pkg $30 / snowshoes $15 | Adult ski pkg $50 / snowshoes $25
// Seasonal (*requires membership): 6 & under $50 | Youth ski pkg $80 / snowshoes $25 | Adult ski pkg $120 / snowshoes $50
// Ski pkg includes skis, boots & poles. Partial pkg is 50% of total pkg.
const RENTALS = [
  {
    name: 'Adult ski package',
    detail: 'Ages 19+ — skis, boots & poles (skate or classical)',
    price: '$20/day',
  },
  {
    name: 'Adult snowshoes',
    detail: 'Ages 19+ — adult sizes available',
    price: '$15/day',
  },
  {
    name: 'Youth ski package',
    detail: 'Ages 7–18 — skis, boots & poles',
    price: '$10/day',
  },
  {
    name: 'Youth snowshoes',
    detail: 'Ages 7–18',
    price: '$5/day',
  },
  {
    name: 'Children (6 & under)',
    detail: 'With a paying adult — ski package or snowshoes',
    price: 'Free',
  },
];

function Rentals() {
  return (
    <>
      <PageMeta
        title="Equipment Rentals"
        description="Rent cross-country skis, snowshoes, fat bikes, and mountain bikes at Fort Kent Outdoor Center in northern Maine."
        path="/rentals"
      />
      <DataPage
        crumb={[{ label: 'Visit' }, { label: 'Rentals' }]}
        title={
          <>
            Equipment <em>rentals.</em>
          </>
        }
        lede="Fully stocked with skate and classical ski equipment as well as snowshoes. Rental shop open weekends and holidays from noon to 3 PM."
        main={
          <>
            <Eyebrow>2025–26 season</Eyebrow>
            <h2>Daily pricing</h2>
            <p>
              Weekly and seasonal rates are also available — see our{' '}
              <a
                href="https://www.fortkentoc.org/media/documents/2026passrates.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                full rate sheet
              </a>{' '}
              for details. Ski package includes skis, boots, and poles. Partial package available at
              50% of total package price.
            </p>
            <div className="rentals-table">
              {RENTALS.map((r) => (
                <div className="rentals-table__row" key={r.name}>
                  <div>
                    <div className="rentals-table__name">{r.name}</div>
                    <div className="rentals-table__sub">{r.detail}</div>
                  </div>
                  <div className="rentals-table__price">{r.price}</div>
                </div>
              ))}
            </div>
          </>
        }
        aside={
          <div className="rentals-info">
            <Eyebrow variant="on-dark">Good to know</Eyebrow>
            <h3>Before you rent.</h3>
            <ul>
              <li>Rental shop is open weekends and school holidays, noon to 3 PM.</li>
              <li>Rentals are first-come, first-served.</li>
              <li>A day pass or membership is required separately to use the trails.</li>
              <li>Seasonal rentals require a membership.</li>
              <li>Day passes are also available from the rental shop during open hours.</li>
            </ul>
            <Button variant="on-dark-outline" to="/day-passes">
              Day passes
            </Button>
          </div>
        }
      />
    </>
  );
}

export default Rentals;
