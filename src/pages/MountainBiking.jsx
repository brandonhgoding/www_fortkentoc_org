import { Link } from 'react-router-dom';
import DataPage from '../templates/DataPage';
import Eyebrow from '../components/ui/Eyebrow';
import Button from '../components/ui/Button';
import StatCard from '../components/ui/StatCard';
import PageMeta from '../components/PageMeta';
import mtbMapFull from '../assets/images/trails/maps-original/mtbike-trails.jpg';
import './MountainBiking.css';

const TRAILFORKS_URL = 'https://www.trailforks.com/region/fort-kent-outdoor-center-32149/';

const FACTS = [
  // Figures per Trailforks region page (Fort Kent Outdoor Center), confirmed 2026-06-09.
  { value: '15 mi', label: 'Singletrack' },
  { value: '23', label: 'Trails' },
  { value: 'All', label: 'Skill levels' },
  { value: '100%', label: 'Volunteer-built' },
];

function MountainBiking() {
  return (
    <>
      <PageMeta
        title="Mountain biking at FKOC"
        description="Volunteer-built singletrack mountain bike trails on the Lonesome Pine Trails at Fort Kent Outdoor Center in northern Maine. All skill levels, open the snow-free season, day pass or membership required."
        path="/mountain-biking"
      />
      <DataPage
        crumb={[{ label: 'Visit' }, { label: 'Mountain biking' }]}
        title={
          <>
            Mountain biking at <em>FKOC.</em>
          </>
        }
        lede="Volunteer-built singletrack winding through the Lonesome Pine Trails. Open the snow-free season, all skill levels welcome."
        main={
          <>
            <Eyebrow>The trails</Eyebrow>
            <h2>Trail facts</h2>
            <div className="mtb-stats">
              {FACTS.map((f) => (
                <StatCard key={f.label} value={f.value} label={f.label} />
              ))}
            </div>
            <p>
              The network is singletrack threaded across the same hill as the Nordic trails, and the
              two seasons share it — mountain bikes through the warm months, cross-country skis once
              the snow flies. The riding spans everything from mellow beginner loops to technical
              blue and black lines with jumps, like <strong>Trial &amp; Error</strong> and the{' '}
              <strong>Green Bean Loop</strong>.{' '}
              <a href={TRAILFORKS_URL} target="_blank" rel="noopener noreferrer">
                Full trail map &amp; GPS on Trailforks →
              </a>
            </p>

            <Eyebrow>How it grew</Eyebrow>
            <h2>Trail history</h2>
            <p>
              The trail system grew out of a simple goal: get more people onto the hill year-round.
              What began as a handful of routes carved alongside the existing ski trails has become a
              full singletrack network — built and maintained one hundred percent by volunteers, with
              new trail always under construction. Board member Carl Theriault has helped shepherd the
              effort since the early days.
            </p>
            <p>
              The result threads through the existing Nordic and Lonesome Pine trail system, so a
              single hill carries two sports across the year. Riders find a real spread of
              difficulty, from gentle loops good for a first time on dirt to steeper, more technical
              descents and built features. Word has traveled — riders now make the trip from as far
              as Edmundston and Bangor to ride here.
            </p>
            {/* TODO: confirm Wednesday group rides are still happening before re-enabling */}
            {/* <p>
              It is also a community as much as a trail system. Every Wednesday a group ride heads out
              from the lodge, open to all skill levels with no requirement to join, led by biathlon
              coach Charlie Cobb. New riders are welcome, and going out with a group is the easiest
              way to learn the network — and the safest way to ride the technical lines.
            </p> */}

            <Eyebrow>Lay of the land</Eyebrow>
            <h2>Trail map</h2>
            <figure className="mtb-map">
              <a href={mtbMapFull} target="_blank" rel="noopener noreferrer">
                <img src={mtbMapFull} alt="FKOC Mountain Bike Trail Map" />
              </a>
              <figcaption>FKOC Mountain Bike Trail Map · Open full size</figcaption>
            </figure>
          </>
        }
        aside={
          <div className="mtb-info">
            <Eyebrow variant="on-dark">Plan your ride</Eyebrow>
            <h3>Before you ride.</h3>
            <dl className="mtb-info__facts">
              <div>
                <dt>Pass</dt>
                <dd>Day pass or membership required</dd>
              </div>
              <div>
                <dt>Season</dt>
                <dd>Snow-free months</dd>
              </div>
              {/* TODO: confirm Wednesday group rides are still happening before re-enabling */}
              {/* <div>
                <dt>Group rides</dt>
                <dd>Wednesdays · all levels</dd>
              </div> */}
            </dl>
            <div className="mtb-info__cta">
              <Button variant="primary" to="/location">
                Get directions
              </Button>
              <Button
                variant="on-dark-outline"
                href={TRAILFORKS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Trailforks
              </Button>
              <Link className="mtb-info__link" to="/day-passes">
                Get a day pass →
              </Link>
            </div>
            <hr className="mtb-info__rule" />
            <Eyebrow variant="on-dark">Good to know</Eyebrow>
            <ul>
              <li>No bike rentals on site — bring your own.</li>
              <li>Helmet recommended; ride technical trails with a group.</li>
              <li>Trails are shared with hikers — yield and call your pass.</li>
              <li>Carry water and bug spray; service is thin.</li>
            </ul>
          </div>
        }
      />
    </>
  );
}

export default MountainBiking;
