import { Helmet } from 'react-helmet-async';
import heroImage from '../assets/images/about/lodge-fall.jpg';
import birdingFlyer from '../assets/images/home/birding-workshop-flyer.png';
import Hero from '../components/Hero';
// import TrailStatusStrip from '../components/TrailStatusStrip';
import Section from '../components/ui/Section';
import Eyebrow from '../components/ui/Eyebrow';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import TopoDivider from '../components/ui/TopoDivider';
import PageMeta from '../components/PageMeta';
import { DONATE_URL, FACEBOOK_URL } from '../lib/urls';
import './Home.css';

const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': ['SportsActivityLocation', 'LocalBusiness'],
  name: 'Fort Kent Outdoor Center',
  alternateName: 'FKOC',
  url: 'https://www.fortkentoc.org',
  logo: 'https://www.fortkentoc.org/favicon.svg',
  image: 'https://www.fortkentoc.org/og-default.jpg',
  description:
    'Year-round outdoor recreation in northern Maine — biathlon, hiking, mountain biking, disc golf, and community programming in the St. John Valley. Established 1999.',
  foundingDate: '1999',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '33 Paradis Circle',
    addressLocality: 'Fort Kent',
    addressRegion: 'ME',
    postalCode: '04743',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.234,
    longitude: -68.5895,
  },
  sameAs: [FACEBOOK_URL],
  sport: ['Biathlon', 'Hiking', 'Mountain biking', 'Disc golf'],
};

function Home() {
  return (
    <div className="home-page">
      <PageMeta
        title="Fort Kent Outdoor Center"
        description="Year-round outdoor recreation in northern Maine — biathlon, hiking, mountain biking, disc golf, and community programs in the St. John Valley."
        path="/"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(ORGANIZATION_JSON_LD)}</script>
      </Helmet>
      {/* 01 · HERO */}
      <Hero
        media={<img src={heroImage} alt="The Fort Kent Outdoor Center lodge in autumn" />}
        eyebrow="Est. 1999 · Fort Kent, Maine"
        title={
          <>
            Fort Kent&apos;s <em>home</em>
            <br />
            for the outdoors.
          </>
        }
        lede="A year-round home for outdoor recreation in northern Maine — biathlon range, 40 kilometers of trails, and a lodge anchoring community sport in the St. John Valley since 1999."
        buttons={
          <>
            <Button variant="primary" to="/day-passes">
              Buy a day pass
            </Button>
            <Button variant="secondary" to="/trails">
              Explore the trails
            </Button>
          </>
        }
      />

      {/* Live status strip — hidden until the data sources are wired up */}
      {/*
      <div className="home-status">
        <div className="home-status__inner">
          <TrailStatusStrip />
        </div>
      </div>
      */}

      <TopoDivider />

      {/* 02 · FEATURE EVENT */}
      <Section variant="soft">
        <div className="home-section__inner">
          <div className="home-two-col">
            <div
              className="home-feature-art"
              style={{
                background: `linear-gradient(rgba(20,30,44,0.35), rgba(20,30,44,0.8)), url(${birdingFlyer}) center/cover var(--color-midnight)`,
              }}
              role="img"
              aria-label="Birding Workshop flyer with songbirds — June 13, 2026 at Fort Kent Outdoor Center"
            >
              <div className="home-feature-art__date">
                <div className="home-feature-art__month">Jun · 2026</div>
                <div className="home-feature-art__day">13</div>
              </div>
            </div>
            <div>
              <Eyebrow>Featured event</Eyebrow>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'var(--text-4xl)',
                  fontWeight: 800,
                  color: 'var(--color-brick)',
                  letterSpacing: 'var(--tracking-tight)',
                  margin: '14px 0 16px',
                  lineHeight: 1.04,
                }}
              >
                Birding Workshop at the FKOC.
              </h2>
              <p
                style={{
                  color: 'var(--color-ink-soft)',
                  lineHeight: 1.6,
                  maxWidth: '52ch',
                  marginBottom: 'var(--space-lg)',
                }}
              >
                Saturday, June 13 · 8:00–10:00 AM at the Lodge. No charge — donations
                welcome. Hosted by Amanda DuMusz (Maine Dept. of Inland Fisheries &amp;
                Wildlife) and Shawn Morneault (Aroostook Birders). Bring binoculars, bug
                repellent, and sturdy walking shoes. Open to everyone — register with Laura
                Audibert by June 11.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                <Button
                  variant="primary"
                  href="https://drive.google.com/file/d/1CJRbFrouzs-aCgfrqQEzpFc9TM3qySQZ/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View the flyer
                </Button>
                <Button variant="ghost" to="/events">
                  See all events →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 02b · UPCOMING SUMMER CAMPS */}
      <Section>
        <div className="home-section__inner">
          <Eyebrow>Upcoming summer camps</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'var(--text-4xl)',
              fontWeight: 800,
              color: 'var(--color-brick)',
              letterSpacing: 'var(--tracking-tight)',
              margin: '14px 0 12px',
              lineHeight: 1.04,
            }}
          >
            Biathlon camps return in July.
          </h2>
          <p
            style={{ color: 'var(--color-ink-soft)', lineHeight: 1.6, maxWidth: '52ch', margin: 0 }}
          >
            Two residential camps at FKOC — rollerskiing, range time, and coaching for athletes
            ready to try biathlon.
          </p>
          <div className="home-camps">
            <Card number="Jul 22–24 · 2026" title="U15 Biathlon Camp">
              <p className="home-camps__lede">Come join us for our U15 Biathlon Camp!</p>
              <p className="home-camps__para">
                Camp participants will get to practice their biathlon skills on our full 30 point
                shooting range under the guidance of our experienced coaches. Campers will also get
                lots of time on rollerskis in a safe, car-free environment on our 3km rollerski
                loop. This is a perfect opportunity for athletes to get a strong introduction to
                biathlon. Training will mostly be rollerskiing, but campers should
                also bring running sneakers, and be prepared for some easy runs. Prior shooting
                experience is not needed. Prior rollerski experience recommended, but not required.
                We will provide rifles and ammunition. Detailed schedule, packing list and event
                waiver will be emailed to registrants.
              </p>
              <p className="home-camps__para">
                <strong>Housing:</strong> Bunk beds and cots will be provided in the lodge and wax
                rooms, bring your sleeping bag and pillow
              </p>
              <p className="home-camps__para">
                <strong>Food:</strong> We will provide meals from dinner on July 22 to lunch on July
                24, and a few group snacks, but encourage campers to bring personal snacks. Please
                communicate any allergies/dietary restrictions to us.
              </p>
              <p className="home-camps__cost">
                <strong>Cost: $350</strong>
              </p>
              <Button
                variant="primary"
                href="mailto:info@fortkentoc.org?subject=U15%20Biathlon%20Camp%20Registration"
              >
                Register by email
              </Button>
            </Card>
            <Card number="Jul 26–30 · 2026" title="U18 Biathlon Camp">
              <p className="home-camps__lede">Come join us for our U18 Biathlon Camp!</p>
              <p className="home-camps__para">
                Camp participants will get to hone their biathlon skills on our full 30 point
                shooting range under the guidance of our experienced coaches. Campers will also get
                lots of time on rollerskis in a safe, car-free environment on our 3km rollerski
                loop. This is a perfect opportunity for new athletes to get an introduction to
                biathlon, as well as for experienced biathletes to practice their skills. Prior rollerski experience is required, however, prior shooting experience
                is not. Training will mostly be rollerskiing, but campers should also bring running
                sneakers, and are encouraged to bring mountain or gravel bikes to explore the
                trails during non-rollerski sessions. We will provide a rifle for you if you need
                one, ammunition is included. Detailed schedule, packing list and event waiver will
                be emailed to registrants.
              </p>
              <p className="home-camps__para">
                <strong>Housing:</strong> Bunk beds and cots will be provided in the lodge and wax
                rooms, bring your sleeping bag and pillow
              </p>
              <p className="home-camps__para">
                <strong>Food:</strong> We will provide meals from dinner on July 26 to lunch on July
                30, and a few group snacks, but encourage campers to bring personal snacks. Please
                communicate any allergies/dietary restrictions to us.
              </p>
              <p className="home-camps__cost">
                <strong>Cost: $550</strong>
              </p>
              <Button
                variant="primary"
                href="mailto:info@fortkentoc.org?subject=U18%20Biathlon%20Camp%20Registration"
              >
                Register by email
              </Button>
            </Card>
          </div>
        </div>
      </Section>

      {/* 03 · PROGRAMS */}
      <Section variant="soft">
        <div className="home-section__inner">
          <Eyebrow>Training &amp; coaching</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'var(--text-4xl)',
              fontWeight: 800,
              color: 'var(--color-brick)',
              letterSpacing: 'var(--tracking-tight)',
              margin: '14px 0 12px',
              lineHeight: 1.04,
            }}
          >
            Programs that build athletes from U10 to Olympic.
          </h2>
          <p
            style={{ color: 'var(--color-ink-soft)', lineHeight: 1.6, maxWidth: '52ch', margin: 0 }}
          >
            FKOC has been a pipeline for USA Nordic and Biathlon for decades. These are the programs
            that do the work.
          </p>
          <div className="home-programs">
            <Card title="Jalbert Biathlon Program">
              The Jalbert Biathlon Program introduces local youth to the sport of biathlon in a fun,
              supportive environment focused on skill-building, marksmanship, and confidence.
            </Card>
            <Card title="Biathlon Residence">
              The Jalbert Biathlon Residence provides housing for athletes training in Fort Kent,
              offering a supportive, community-centered environment within walking distance of the
              trails.
            </Card>
            <Card title="PG Training Program">
              A full-time training program for post-graduate athletes in Nordic biathlon, based at
              the Fort Kent Outdoor Center.
            </Card>
          </div>
        </div>
      </Section>

      <TopoDivider />

      {/* 04 · ENDOWMENT */}
      <Section>
        <div className="home-section__inner">
          <div className="home-two-col">
            <div>
              <Eyebrow>The endowment fund</Eyebrow>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'var(--text-4xl)',
                  fontWeight: 800,
                  color: 'var(--color-brick)',
                  letterSpacing: 'var(--tracking-tight)',
                  margin: '14px 0 16px',
                  lineHeight: 1.04,
                }}
              >
                Securing the future of FKOC, dollar by dollar.
              </h2>
              <p
                style={{
                  color: 'var(--color-ink-soft)',
                  lineHeight: 1.6,
                  maxWidth: '52ch',
                  marginBottom: 'var(--space-lg)',
                }}
              >
                In 2024 we launched an endowment fund with the Maine Community Foundation. Our goal
                is $2.4 million to sustain year-round operations, athlete development, and community
                programs for decades to come.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                <Button
                  variant="support"
                  href={DONATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donate now
                </Button>
                <Button variant="ghost" to="/endowment">
                  Read the full story →
                </Button>
              </div>
            </div>
            <div
              style={{
                background:
                  'linear-gradient(rgba(20,30,44,0.72), rgba(20,30,44,0.82)), url("/og-default.jpg") center/cover var(--color-midnight)',
                borderRadius: 'var(--radius-md)',
                aspectRatio: '5/4',
                position: 'relative',
                overflow: 'hidden',
                padding: 'var(--space-xl)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                color: 'var(--color-cream)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'repeating-linear-gradient(115deg, transparent 0 22px, rgba(245,186,20,0.08) 22px 23px)',
                  pointerEvents: 'none',
                }}
              />
              <div style={{ position: 'relative' }}>
                <div className="home-endowment__stat">
                  65<span>%</span>
                </div>
                <div className="home-endowment__label">of $2.4M raised</div>
                <div className="home-endowment__progress">
                  <div className="home-endowment__progress-fill" />
                </div>
                <div className="home-endowment__label" style={{ color: 'rgba(245,186,20,0.65)' }}>
                  $1.56M committed as of 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 05 · COMMUNITY & EVENTS */}
      <Section variant="dark">
        <div className="home-section__inner">
          <Eyebrow variant="on-dark">Community calendar</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'var(--text-4xl)',
              fontWeight: 800,
              color: 'var(--color-cream)',
              letterSpacing: 'var(--tracking-tight)',
              margin: '14px 0 12px',
              lineHeight: 1.04,
            }}
          >
            What&apos;s coming up.
          </h2>
          <p
            style={{
              color: 'var(--color-cream-muted)',
              lineHeight: 1.6,
              maxWidth: '52ch',
              margin: 0,
            }}
          >
            Races, fundraisers, programs, and community workdays. Members and visitors welcome.
          </p>
          <div style={{ marginTop: 'var(--space-xl)' }}>
            <Button variant="on-dark-outline" to="/events">
              view the event calendar →
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Home;
