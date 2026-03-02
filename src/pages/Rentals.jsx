import { Link } from 'react-router-dom';

const rentalData = {
  headers: ['AGE', 'DAILY RENTALS', 'WEEKLY RENTALS', 'SEASONAL*'],
  rows: [
    {
      age: '6 & under',
      ageNote: '(with adult)',
      daily: { free: true },
      weekly: { free: true },
      seasonal: { single: '$50' },
    },
    {
      age: 'YOUTH (7-18)',
      daily: { skiPkg: '$10', snowshoes: '$5' },
      weekly: { skiPkg: '$30', snowshoes: '$15' },
      seasonal: { skiPkg: '$80', snowshoes: '$25' },
    },
    {
      age: 'ADULT (19+)',
      daily: { skiPkg: '$20', snowshoes: '$15' },
      weekly: { skiPkg: '$50', snowshoes: '$25' },
      seasonal: { skiPkg: '$120', snowshoes: '$50' },
    },
  ],
};

function RentalCell({ data }) {
  if (data.free) {
    return <span className="rental-price-free">Free</span>;
  }
  if (data.single) {
    return <span className="rental-price-single">{data.single}</span>;
  }
  return (
    <div className="rental-price-group">
      <div className="rental-price-item">
        <span className="rental-label">Ski Pkg</span>
        <span className="rental-price">{data.skiPkg}</span>
      </div>
      <div className="rental-price-divider"></div>
      <div className="rental-price-item">
        <span className="rental-label">Snowshoes</span>
        <span className="rental-price">{data.snowshoes}</span>
      </div>
    </div>
  );
}

function Rentals() {
  return (
    <div className="rentals-page">
      {/* Hero Section */}
      <section className="rentals-hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="rentals-hero-content">
              <h1>Rental Equipment</h1>
              <p>
                Fully stocked with Skate & Classical ski equipment as well as snowshoes, our rental
                shop is open weekends and holidays from Noon - 3PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="section">
        <div className="container">
          <div className="rentals-table-wrapper">
            <table className="rentals-table">
              <thead>
                <tr>
                  <th className="col-age">AGE</th>
                  <th className="col-daily">
                    DAILY
                    <br />
                    RENTALS
                  </th>
                  <th className="col-weekly">
                    WEEKLY
                    <br />
                    RENTALS
                  </th>
                  <th className="col-seasonal">
                    SEASONAL*
                    <span className="seasonal-note">*Requires Membership</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rentalData.rows.map((row, index) => (
                  <tr key={index}>
                    <td className="col-age">
                      <span className="age-label">{row.age}</span>
                      {row.ageNote && <span className="age-note">{row.ageNote}</span>}
                    </td>
                    <td className="col-daily">
                      <RentalCell data={row.daily} />
                    </td>
                    <td className="col-weekly">
                      <RentalCell data={row.weekly} />
                    </td>
                    <td className="col-seasonal">
                      <RentalCell data={row.seasonal} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="rentals-footnote">
            Ski Pkg includes skis, boots & poles. Partial pkg is 50% of total pkg.
          </p>

          <div className="rentals-pdf-link">
            Click{' '}
            <a
              href="https://www.fortkentoc.org/media/documents/2026passrates.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              HERE
            </a>{' '}
            to download a pdf to share our rates with friends, families, and co-workers.
          </div>
        </div>
      </section>

      {/* Day Pass CTA Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="centered-content text-center">
            <h2 className="section-title text-inverse">Need a Day Pass?</h2>
            <p className="content-text text-light">
              Just like our rental fees, our memberships and day passes help cover the costs that
              come with maintaining our facility. Day Passes are available for those who would like
              to enjoy playing on our trails for a day or two. Daily Passes are available from the
              Rental Shop on the lower level of the lodge from 12:00PM to 3:00 PM on weekends and
              school holidays, or you can purchase one online.
            </p>
            <Link to="/day-passes" className="btn btn-primary">
              Day Passes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Rentals;
