import PageHeader from '../components/layout/PageHeader';
import Section from '../components/ui/Section';
import Eyebrow from '../components/ui/Eyebrow';
import Button from '../components/ui/Button';
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

function Trails() {
  return (
    <div className="trails-page">
      <PageHeader
        crumb={[{ label: 'Visit' }, { label: 'Trails' }]}
        title={
          <>
            Trails &amp; <em>conditions.</em>
          </>
        }
        lede="22 named trails across 40 kilometers. Cross-country ski, skate, snowshoe, and fat-bike routes. Maps are updated seasonally; conditions update daily from our groomer's GPS."
      />

      {/* Live conditions section: nordic-pulse iframe */}
      <Section>
        <div className="trails-page__inner">
          <Eyebrow>Live conditions</Eyebrow>
          <h2 className="trails-page__h2">Today&rsquo;s trail report.</h2>
          <p className="trails-page__lead">
            Our groomer&rsquo;s GPS reports trail conditions to Nordic Pulse throughout the day.
            Check here before you head out.
          </p>
          <div className="trails-page__embed">
            <iframe
              src="https://nordic-pulse.com/ski-areas/US/ME/Fort-Kent-Outdoor-Center/trails?embed=true&header=false&footer=false&tab=abc"
              title="Trail Conditions"
              allowFullScreen
            />
          </div>
        </div>
      </Section>

      {/* Maps section: reuse the existing trails-maps grid */}
      <Section variant="soft">
        <div className="trails-maps">
          <div className="trails-maps__inner">
            <Eyebrow>Printable maps</Eyebrow>
            <h2 className="trails-page__h2">Download or print for the trailhead.</h2>
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

      {/* Nordic Pulse App promo section */}
      <Section variant="dark">
        <div className="trails-page__inner">
          <Eyebrow variant="on-dark">Nordic Pulse App</Eyebrow>
          <h2 className="trails-page__h2 trails-page__h2--on-dark">
            Take trail conditions with you.
          </h2>
          <p className="trails-page__lead trails-page__lead--on-dark">
            Install Nordic Pulse to see live trail conditions, grooming history, and interactive
            maps right on your phone.
          </p>
          <div className="trails-page__app-buttons">
            <Button
              href="https://apps.apple.com/us/app/nordic-pulse/id1625390785"
              variant="on-dark-outline"
              target="_blank"
            >
              App Store
            </Button>
            <Button
              href="https://play.google.com/store/apps/details?id=com.nordicpulse.skier"
              variant="on-dark-outline"
              target="_blank"
            >
              Google Play
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Trails;
