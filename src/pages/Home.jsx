import Hero from '../components/Hero';
import TrailStatusStrip from '../components/TrailStatusStrip';
import Section from '../components/ui/Section';
import Eyebrow from '../components/ui/Eyebrow';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import EventCard from '../components/ui/EventCard';
import TopoDivider from '../components/ui/TopoDivider';
import { DONATE_URL } from '../lib/urls';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      {/* 01 · HERO */}
      <Hero
        eyebrow="Est. 1968 · Fort Kent, Maine"
        title={
          <>
            A <em>trailhead</em> for the
            <br />
            North Woods.
          </>
        }
        lede="40 kilometers of groomed cross-country trails, a championship biathlon range, and a lodge at the heart of Maine winter sports for over fifty years."
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

      {/* Live status strip */}
      <div className="home-status">
        <div className="home-status__inner">
          <TrailStatusStrip />
        </div>
      </div>

      <TopoDivider />

      {/* 02 · FEATURE EVENT */}
      <Section variant="soft">
        <div className="home-section__inner">
          <div className="home-two-col">
            <div className="home-feature-art">
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
                <Button variant="ghost" to="/event-calendar">
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
            <Card number="Pgm 01" title="Jalbert Biathlon Program" meta="Year-round">
              Competitive biathlon development from junior to senior national.
            </Card>
            <Card number="Pgm 02" title="Jalbert Ski Program" meta="Year-round">
              Cross-country ski development for junior racers.
            </Card>
            <Card number="Pgm 03" title="Biathlon Residence" meta="Full-time">
              On-site housing for elite athletes in training.
            </Card>
            <Card number="Pgm 04" title="PG Training Program" meta="Post-grad">
              Post-graduate athlete development program.
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
                background: 'var(--color-midnight)',
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
                    'repeating-linear-gradient(115deg, transparent 0 22px, rgba(245,186,20,0.06) 22px 23px)',
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
          <div className="home-events">
            <EventCard
              onDark
              month="May"
              day="30"
              title="Let Them Fly Disc Golf Tournament"
              description="Open to all skill levels. BBQ to follow."
            />
            <EventCard
              onDark
              month="Jun"
              day="14"
              title="Volunteer trail workday"
              description="Spring clean-up, lunch at the lodge after."
            />
            <EventCard
              onDark
              month="Jul"
              day="04"
              title="Independence Day fun run"
              description="3K and 5K, register at the lodge."
            />
          </div>
          <div style={{ marginTop: 'var(--space-xl)' }}>
            <Button variant="on-dark-outline" to="/upcoming-events">
              See full calendar →
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Home;
