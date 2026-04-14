import DataPage from '../templates/DataPage';
import Eyebrow from '../components/ui/Eyebrow';
import Button from '../components/ui/Button';
import PageMeta from '../components/PageMeta';
import { DAY_PASS_URL } from '../lib/urls';
import './DayPasses.css';

function DayPasses() {
  return (
    <>
      <PageMeta
        title="Day Passes"
        description="Purchase day passes for cross-country skiing, snowshoeing, fat biking, and summer trail access at Fort Kent Outdoor Center."
        path="/day-passes"
      />
      <DataPage
        crumb={[{ label: 'Visit' }, { label: 'Day passes' }]}
        title={
          <>
            Day <em>passes.</em>
          </>
        }
        lede="Passes are available at the lodge during operating hours. Members ski free. Children under 7 are always free. Purchase online or drop your fee in the donation box at any trailhead."
        main={
          <>
            <Eyebrow>2025–26 season</Eyebrow>
            <h2>Get trail ready.</h2>
            <p>
              Purchase your day pass online to go from the parking lot to the trails. Alternatively,
              you can place your day pass fee in our donation box found at each of our trailheads.
            </p>
            <Button
              variant="primary"
              href={DAY_PASS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Purchase a day pass
            </Button>
          </>
        }
        aside={
          <div className="day-passes__info">
            <Eyebrow variant="on-dark">Need equipment?</Eyebrow>
            <h3>Rentals available at the lodge.</h3>
            <p>
              We can provide cross-country skis, snowshoes, and all the essentials you need to
              explore our trails. Stop by the lodge front desk.
            </p>
            <Button variant="on-dark-outline" to="/rentals">
              Rental info
            </Button>
          </div>
        }
      />
    </>
  );
}

export default DayPasses;
