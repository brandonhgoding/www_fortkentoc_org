import { Helmet } from 'react-helmet-async';
import heroImage from '../assets/images/about/mass-start-race.jpg';
import discGolfBasket from '../assets/images/home/basketinwoods.jpeg';
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
    'Year-round outdoor recreation in northern Maine — cross-country skiing, biathlon, snowshoeing, hiking, mountain biking, and roller skiing in the St. John Valley. Established 1999.',
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
  sport: ['Cross-country skiing', 'Biathlon', 'Snowshoeing', 'Mountain biking', 'Disc golf'],
};

function Home() {
  return (
    <div className="home-page">
      <PageMeta
        title="Fort Kent Outdoor Center"
        description="Year-round outdoor recreation in northern Maine — cross-country skiing, biathlon, snowshoeing, hiking, mountain biking, and roller skiing in the St. John Valley."
        path="/"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(ORGANIZATION_JSON_LD)}</script>
      </Helmet>
      {/* 01 · HERO */}
      <Hero
        media={<img src={heroImage} alt="Skiers at the Fort Kent Outdoor Center mass start race" />}
        eyebrow="Est. 1999 · Fort Kent, Maine"
        title={
          <>
            Fort Kent&apos;s <em>home</em>
            <br />
            for the outdoors.
          </>
        }
        lede="40 kilometers of groomed cross-country trails, a championship biathlon range, and a lodge powering northern Maine winter sports since 1999."
        buttons={
          <>
            <Button variant="primary" to="/day-passes">
              Buy a day pass
            </Button>
            <Button variant="secondary" to="/trails">
              Trail conditions
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
                background: `linear-gradient(rgba(20,30,44,0.35), rgba(20,30,44,0.8)), url(${discGolfBasket}) center/cover var(--color-midnight)`,
              }}
              role="img"
              aria-label="Disc golf basket in the woods at Fort Kent Outdoor Center"
            >
              <div className="home-feature-art__date">
                <div className="home-feature-art__month">May · 2026</div>
                <div className="home-feature-art__day">30</div>
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
                The Lucien Theriault &quot;Let Them Fly&quot; Disc Golf Tournament &amp; BBQ.
              </h2>
              <p
                style={{
                  color: 'var(--color-ink-soft)',
                  lineHeight: 1.6,
                  maxWidth: '52ch',
                  marginBottom: 'var(--space-lg)',
                }}
              >
                Tournament starts at 10 AM. $20 entry — bring a food-bank donation and save $5.
                Proceeds support the Fort Kent Outdoor Center.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                <Button
                  variant="primary"
                  href="https://udisc.com/events/1st-annual-lucien-theriault-let-them-fly-tournament-and-bbq-YdCNMY/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register on UDisc
                </Button>
                <Button variant="ghost" to="/events">
                  See all events →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 03 · PROGRAMS */}
      <Section>
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
              The Jalbert Biathlon Program introduces local youth to the sport of biathlon,
              combining cross-country skiing and marksmanship in a fun, supportive environment
              focused on skill-building and confidence.
            </Card>
            <Card title="Jalbert Ski Program">
              The Jalbert Youth Ski Program introduces young children to cross-country skiing
              through fun, supportive lessons that build confidence and foundational skills.
            </Card>
            <Card title="Biathlon Residence">
              The Jalbert Biathlon Residence provides housing for athletes training in Fort Kent,
              offering a supportive, community-centered environment within walking distance of the
              trails.
            </Card>
            <Card title="PG Training Program">
              A full-time training program for post-graduate athletes in Nordic skiing and biathlon,
              based at the Fort Kent Outdoor Center.
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
