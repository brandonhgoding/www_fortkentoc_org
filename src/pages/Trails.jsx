import { useState } from 'react';
import IndexPage from '../templates/IndexPage';
import Section from '../components/ui/Section';
import Eyebrow from '../components/ui/Eyebrow';
import Card from '../components/ui/Card';
import './Trails.css';

// Map thumbnails
import snowshoeMapThumb from '../assets/images/trails/maps-thumbnails/snowshoe-map.jpg';
import mtbikeMapThumb from '../assets/images/trails/maps-thumbnails/mtbike-trails.jpg';
import discGolfMapThumb from '../assets/images/trails/maps-thumbnails/disc-golf.jpg';
import nordicMapThumb from '../assets/images/trails/maps-thumbnails/nordic-ski.jpg';
import biathlon25kmThumb from '../assets/images/trails/maps/map-13.jpg';
import biathlon4kmThumb from '../assets/images/trails/maps-thumbnails/biathlon-4km.jpg';
import biathlon2kmThumb from '../assets/images/trails/maps-thumbnails/biathlon-2km.jpg';
import biathlon3kmThumb from '../assets/images/trails/maps-thumbnails/biathlon-3km.jpg';
import biathlon33kmThumb from '../assets/images/trails/maps-thumbnails/biathlon-3-3km.jpg';
import biathlon15kmThumb from '../assets/images/trails/maps-thumbnails/biathlon-1-5km.jpg';
import biathlonCompositeThumb from '../assets/images/trails/maps-thumbnails/biathlon-composite.jpg';
import biathlon1kmThumb from '../assets/images/trails/maps-thumbnails/biathlon-1km.jpg';

// Map full size
import snowshoeMapFull from '../assets/images/trails/maps-original/snowshoe-map.jpeg';
import mtbikeMapFull from '../assets/images/trails/maps-original/mtbike-trails.jpg';
import discGolfMapFull from '../assets/images/trails/maps-original/disc-golf.jpg';
import nordicMapFull from '../assets/images/trails/maps-original/nordic-ski.jpg';
import biathlon25kmFull from '../assets/images/trails/maps-original/biathlon-2-5km.jpg';
import biathlon4kmFull from '../assets/images/trails/maps-original/biathlon-4km.jpg';
import biathlon2kmFull from '../assets/images/trails/maps-original/biathlon-2km.jpg';
import biathlon3kmFull from '../assets/images/trails/maps-original/biathlon-3km.jpg';
import biathlon33kmFull from '../assets/images/trails/maps-original/biathlon-3-3km.jpg';
import biathlon15kmFull from '../assets/images/trails/maps-original/biathlon-1-5km.jpg';
import biathlonCompositeFull from '../assets/images/trails/maps-original/biathlon-composite.jpg';
import biathlon1kmFull from '../assets/images/trails/maps-original/biathlon-1km.jpg';

// NOTE: The original Trails.jsx had no individual trail data array — it used embedded
// iframes from nordic-pulse.com and downloadable map images. The TRAILS array below
// uses the three representative trails provided in the plan scaffold. These should be
// updated with real trail data when available from the FKOC groomer's system.
const TRAILS = [
  {
    id: 1,
    name: 'Meadow Loop',
    difficulty: 'Beginner',
    distanceKm: 2.1,
    types: ['classic'],
    status: 'open',
    description:
      'Flat classic trail through the stadium meadow. Great first ski for beginners and children.',
  },
  {
    id: 2,
    name: 'Jalbert Run',
    difficulty: 'Intermediate',
    distanceKm: 5.4,
    types: ['classic', 'skate'],
    status: 'open',
    description:
      'Rolling forest trail with moderate climbs. Skate and classic lanes. Named for the Jalbert family.',
  },
  {
    id: 3,
    name: 'Stadium Sprint',
    difficulty: 'Advanced',
    distanceKm: 1.6,
    types: ['skate'],
    status: 'limited',
    description: 'Fast laps around the race stadium. Lit after dark Tuesday and Thursday nights.',
  },
];

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'classic', label: 'Classic' },
  { id: 'skate', label: 'Skate' },
  { id: 'snowshoe', label: 'Snowshoe' },
  { id: 'beginner', label: 'Beginner' },
];

function Trails() {
  const [activeFilter, setActiveFilter] = useState('all');

  const visibleTrails = TRAILS.filter((t) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'beginner') return t.difficulty === 'Beginner';
    return t.types.includes(activeFilter);
  });

  const filters = FILTERS.map((f) => ({
    ...f,
    active: f.id === activeFilter,
    onClick: () => setActiveFilter(f.id),
  }));

  return (
    <>
      <IndexPage
        crumb={[{ label: 'Visit' }, { label: 'Trails' }]}
        title={
          <>
            Trail maps &amp; <em>conditions.</em>
          </>
        }
        lede="22 named trails across 40 kilometers. Cross-country, skate, snowshoe, and fat-bike routes. Maps are updated seasonally; conditions update daily from our groomer's GPS."
        filters={filters}
      >
        {visibleTrails.map((trail, i) => (
          <Card
            key={trail.id}
            number={`Trail ${String(i + 1).padStart(2, '0')} · ${trail.difficulty}`}
            title={trail.name}
            meta={`${trail.distanceKm} km · ${trail.status.toUpperCase()}`}
          >
            {trail.description}
          </Card>
        ))}
      </IndexPage>

      <Section variant="flush">
        <div className="trails-maps">
          <div className="trails-maps__inner">
            <Eyebrow>Printable maps</Eyebrow>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'var(--text-3xl)',
                fontWeight: 800,
                color: 'var(--color-brick)',
                margin: '14px 0 0',
                lineHeight: 1.05,
              }}
            >
              Download or print for the trailhead.
            </h2>
            <div className="trails-maps__grid">
              <figure className="trails-maps__item">
                <a href={snowshoeMapFull} target="_blank" rel="noopener noreferrer">
                  <img src={snowshoeMapThumb} alt="2025 Snowshoe Map" />
                </a>
                <figcaption>Snowshoe Trails</figcaption>
              </figure>
              <figure className="trails-maps__item">
                <a href={mtbikeMapFull} target="_blank" rel="noopener noreferrer">
                  <img src={mtbikeMapThumb} alt="Mountain Bike Trails Map" />
                </a>
                <figcaption>Mountain Bike Trails</figcaption>
              </figure>
              <figure className="trails-maps__item">
                <a href={discGolfMapFull} target="_blank" rel="noopener noreferrer">
                  <img src={discGolfMapThumb} alt="2024 FKOC Disc Golf Map" />
                </a>
                <figcaption>Disc Golf</figcaption>
              </figure>
              <figure className="trails-maps__item">
                <a href={nordicMapFull} target="_blank" rel="noopener noreferrer">
                  <img src={nordicMapThumb} alt="2024 FKOC Trail Map" />
                </a>
                <figcaption>FKOC Nordic Ski Map</figcaption>
              </figure>
              <figure className="trails-maps__item">
                <a href={biathlon25kmFull} target="_blank" rel="noopener noreferrer">
                  <img src={biathlon25kmThumb} alt="2.5 Km Biathlon Course" />
                </a>
                <figcaption>2.5 Km Biathlon Course</figcaption>
              </figure>
              <figure className="trails-maps__item">
                <a href={biathlon4kmFull} target="_blank" rel="noopener noreferrer">
                  <img src={biathlon4kmThumb} alt="4.0 Km Biathlon Course" />
                </a>
                <figcaption>4.0 Km Biathlon Course</figcaption>
              </figure>
              <figure className="trails-maps__item">
                <a href={biathlon2kmFull} target="_blank" rel="noopener noreferrer">
                  <img src={biathlon2kmThumb} alt="2.0 Biathlon Course" />
                </a>
                <figcaption>2.0 Biathlon Course</figcaption>
              </figure>
              <figure className="trails-maps__item">
                <a href={biathlon3kmFull} target="_blank" rel="noopener noreferrer">
                  <img src={biathlon3kmThumb} alt="3.0 Km Biathlon Course" />
                </a>
                <figcaption>3.0 Km Biathlon Course</figcaption>
              </figure>
              <figure className="trails-maps__item">
                <a href={biathlon33kmFull} target="_blank" rel="noopener noreferrer">
                  <img src={biathlon33kmThumb} alt="3.3 Biathlon Course" />
                </a>
                <figcaption>3.3 Biathlon Course</figcaption>
              </figure>
              <figure className="trails-maps__item">
                <a href={biathlon15kmFull} target="_blank" rel="noopener noreferrer">
                  <img src={biathlon15kmThumb} alt="1.5 Km Biathlon Course" />
                </a>
                <figcaption>1.5 Km Biathlon Course</figcaption>
              </figure>
              <figure className="trails-maps__item">
                <a href={biathlonCompositeFull} target="_blank" rel="noopener noreferrer">
                  <img src={biathlonCompositeThumb} alt="Composite Biathlon Course" />
                </a>
                <figcaption>Composite Biathlon Course</figcaption>
              </figure>
              <figure className="trails-maps__item">
                <a href={biathlon1kmFull} target="_blank" rel="noopener noreferrer">
                  <img src={biathlon1kmThumb} alt="1.0Km Biathlon Course" />
                </a>
                <figcaption>1.0 Km Biathlon Course</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

export default Trails;
