import { Link } from 'react-router-dom';
import DataPage from '../templates/DataPage';
import Eyebrow from '../components/ui/Eyebrow';
import Button from '../components/ui/Button';
import StatCard from '../components/ui/StatCard';
import PageMeta from '../components/PageMeta';
import discGolfMapFull from '../assets/images/trails/maps-original/disc-golf.jpg';
import './DiscGolf.css';

const UDISC_URL = 'https://udisc.com/courses/fort-kent-outdoor-center-Zh4t';

const FACTS = [
  { value: '18', label: 'Holes' },
  { value: '63', label: 'Par' },
  { value: '1h 42m', label: 'Avg round' },
  { value: 'Hilly', label: 'Moderate terrain' },
];

function DiscGolf() {
  return (
    <>
      <PageMeta
        title="Disc golf at FKOC"
        description="An 18-hole disc golf course on the Lonesome Pine Trails at Fort Kent Outdoor Center in northern Maine. Two layouts, open May through October, donations welcome."
        path="/disc-golf"
      />
      <DataPage
        crumb={[{ label: 'Visit' }, { label: 'Disc golf' }]}
        title={
          <>
            Disc golf at <em>FKOC.</em>
          </>
        }
        lede="An 18-hole course climbing into the Lonesome Pine Trails. Open May through October, donations welcome."
        main={
          <>
            <Eyebrow>The course</Eyebrow>
            <h2>Course facts</h2>
            <div className="disc-golf-stats">
              {FACTS.map((f) => (
                <StatCard key={f.label} value={f.value} label={f.label} />
              ))}
            </div>
            <p>
              Two tee layouts share the course: <strong>Warrior</strong> (white tees, 4,589 ft,
              intermediate) and <strong>Cadet</strong> (red tees, 1,565 ft, beginner-friendly). The
              round starts at the lodge, climbs into the Lonesome Pine Trails, and returns to the
              parking lot — roughly 2.5 miles of walking in all.{' '}
              <a href={UDISC_URL} target="_blank" rel="noopener noreferrer">
                Full hole-by-hole details on UDisc →
              </a>
            </p>

            <Eyebrow>How it started</Eyebrow>
            <h2>Course history</h2>
            <p>
              The course opened in September 2020, built by volunteers over a single season. Carl
              Theriault and Ben Paradis led the on-the-ground work, clearing fairways and setting
              baskets along trails that had only ever seen skis and snowshoes. What began as an
              off-season idea became a full 18-hole layout in time for fall play.
            </p>
            <p>
              The design came from Matt Sabasteanski, Director of Outdoor Recreation at Pineland
              Farms, where he had already built two championship-grade courses. He routed the holes
              to follow the existing Nordic trails so the two seasons never overlap — discs in the
              warm months, skis once the snow flies — and the same network serves both.
            </p>
            <p>
              The result is a course with a distinction all its own: the northernmost disc golf
              course in the continental United States. Set against the Lonesome Pine Trails and the
              St. John Valley beyond, it is worth the trip as much for the views as for the round.
            </p>

            <Eyebrow>Lay of the land</Eyebrow>
            <h2>Course map</h2>
            <figure className="disc-golf-map">
              <a href={discGolfMapFull} target="_blank" rel="noopener noreferrer">
                <img src={discGolfMapFull} alt="2024 FKOC Disc Golf Map" />
              </a>
              <figcaption>2024 FKOC Disc Golf Map · Open full size</figcaption>
            </figure>
          </>
        }
        aside={
          <div className="disc-golf-info">
            <Eyebrow variant="on-dark">Plan your visit</Eyebrow>
            <h3>Before you throw.</h3>
            <dl className="disc-golf-info__facts">
              <div>
                <dt>Fee</dt>
                <dd>Donations welcome · honor box at trailhead</dd>
              </div>
              <div>
                <dt>Season</dt>
                <dd>May – October</dd>
              </div>
              <div>
                <dt>Hours</dt>
                <dd>Dawn to dusk</dd>
              </div>
            </dl>
            <div className="disc-golf-info__cta">
              <Button variant="primary" to="/location">
                Get directions
              </Button>
              <Button
                variant="on-dark-outline"
                href={UDISC_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on UDisc
              </Button>
              <Link className="disc-golf-info__link" to="/day-passes">
                Get a day pass →
              </Link>
            </div>
            <hr className="disc-golf-info__rule" />
            <Eyebrow variant="on-dark">Good to know</Eyebrow>
            <ul>
              <li>Pay at the trailhead box or scan the QR sign.</li>
              <li>No disc rentals on site — bring your own.</li>
              <li>Carry water and bug spray; service is thin.</li>
            </ul>
          </div>
        }
      />
    </>
  );
}

export default DiscGolf;
