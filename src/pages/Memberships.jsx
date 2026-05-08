import IndexPage from '../templates/IndexPage';
import Eyebrow from '../components/ui/Eyebrow';
import Button from '../components/ui/Button';
import PageMeta from '../components/PageMeta';
import massStartRace from '../assets/images/about/mass-start-race.jpg';
import { MEMBERSHIP_URL } from '../lib/urls';
import './Memberships.css';

const TIERS = [
  {
    id: 'adult',
    name: 'Adult',
    price: '$100',
    tag: 'Ages 19+ · Per year',
    perks: [
      'Physical membership card mailed after waiver completion',
      'Year-round trail access for cross-country skiing',
      'Snowshoe trail access',
      'Disc golf course access',
      'Mountain biking trails',
      'Roller-skiing on paved loops',
      'Running and walking trails',
      'Lodge access during ski season',
    ],
  },
  {
    id: 'youth',
    name: 'Youth',
    price: '$50',
    tag: 'Ages 7–18 · Per year',
    perks: [
      'Physical membership card mailed after waiver completion',
      'Year-round trail access for cross-country skiing',
      'Snowshoe trail access',
      'Disc golf course access',
      'Mountain biking trails',
      'Roller-skiing on paved loops',
      'Running and walking trails',
      'Lodge access during ski season',
    ],
  },
  {
    id: 'family',
    name: 'Family',
    price: '$225',
    tag: 'Same household · Best value',
    perks: [
      'Covers all household members',
      'Physical membership cards mailed after waiver completion',
      'Year-round trail access for cross-country skiing',
      'Snowshoe trail access',
      'Disc golf course access',
      'Mountain biking trails',
      'Roller-skiing on paved loops',
      'Running and walking trails',
      'Lodge access during ski season',
    ],
  },
  {
    id: 'student',
    name: 'UMFK Student',
    price: '$50',
    tag: 'Valid student ID required',
    perks: [
      'Physical membership card mailed after waiver completion',
      'Year-round trail access for cross-country skiing',
      'Snowshoe trail access',
      'Disc golf course access',
      'Mountain biking trails',
      'Roller-skiing on paved loops',
      'Running and walking trails',
      'Lodge access during ski season',
    ],
  },
];

function Memberships() {
  return (
    <>
      <PageMeta
        title="Memberships"
        description="Support Fort Kent Outdoor Center with an annual membership — individual, family, and student options."
        path="/memberships"
      />
      <IndexPage
        crumb={[{ label: 'Support' }, { label: 'Memberships' }]}
        title={
          <>
            Become a <em>member.</em>
          </>
        }
        lede="Membership is the lifeblood of the FKOC, providing the primary source of funding that sustains our operations. Memberships run January 1 to December 31 annually and include access to all trails and facilities year-round."
      >
        {TIERS.map((tier) => (
          <div key={tier.id} className="membership-card">
            <Eyebrow>{tier.tag}</Eyebrow>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'var(--text-2xl)',
                fontWeight: 700,
                color: 'var(--color-midnight)',
                margin: 0,
              }}
            >
              {tier.name}
            </h3>
            <div className="membership-card__price">
              {tier.price}
              <span
                style={{
                  fontSize: 'var(--text-base)',
                  fontWeight: 400,
                  color: 'var(--color-ink-soft)',
                }}
              >
                /year
              </span>
            </div>
            <ul className="membership-card__perks">
              {tier.perks.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <Button
              variant="primary"
              size="sm"
              href={MEMBERSHIP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join now
            </Button>
          </div>
        ))}
      </IndexPage>

      {/* Member benefits image */}
      <section style={{ padding: 'var(--space-4xl) 0', background: 'var(--color-birch-soft)' }}>
        <div
          style={{
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '0 var(--space-md)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-3xl)',
            alignItems: 'center',
          }}
        >
          <div>
            <Eyebrow>How to enroll</Eyebrow>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'var(--text-3xl)',
                fontWeight: 800,
                color: 'var(--color-brick)',
                letterSpacing: 'var(--tracking-tight)',
                lineHeight: 1.05,
                margin: 'var(--space-sm) 0 var(--space-md)',
              }}
            >
              Two steps to membership.
            </h2>
            <ol
              style={{
                paddingLeft: 'var(--space-lg)',
                color: 'var(--color-ink-soft)',
                fontSize: 'var(--text-sm)',
                lineHeight: 1.7,
              }}
            >
              <li style={{ marginBottom: 'var(--space-sm)' }}>
                <strong>Sign the waiver</strong> — complete our release form via WaiverSign before
                accessing any facility or trails.{' '}
                <a
                  href="https://app.waiversign.com/e/68b05e9a16bfaf7b2a6b56e5/doc/68b0934d9b73a3001293355d?event=none"
                  rel="noopener noreferrer"
                >
                  Sign the waiver →
                </a>
              </li>
              <li>
                <strong>Complete payment</strong> — select your tier below and pay securely through
                Zeffy. Your membership card will be mailed after completion.
              </li>
            </ol>
          </div>
          <img
            src={massStartRace}
            alt="Athletes at Fort Kent Outdoor Center"
            style={{ width: '100%', borderRadius: 'var(--radius-sm)', display: 'block' }}
          />
        </div>
      </section>

      <section
        id="payment"
        style={{ padding: 'var(--space-4xl) 0', background: 'var(--color-birch)' }}
      >
        <div
          style={{
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '0 var(--space-md)',
          }}
        >
          <Eyebrow>Secure payment</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'var(--text-3xl)',
              fontWeight: 800,
              color: 'var(--color-brick)',
              letterSpacing: 'var(--tracking-tight)',
              lineHeight: 1.05,
              margin: 'var(--space-sm) 0 var(--space-md)',
            }}
          >
            Complete your membership.
          </h2>
          <p
            style={{
              color: 'var(--color-ink-soft)',
              fontSize: 'var(--text-sm)',
              marginBottom: 'var(--space-xl)',
            }}
          >
            Select your membership type on Zeffy to complete your enrollment. Secure payment
            processing powered by Zeffy.
          </p>
          <Button
            variant="primary"
            href={MEMBERSHIP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Purchase membership
          </Button>
        </div>
      </section>

      {/* Day pass alternative */}
      <section
        style={{
          padding: 'var(--space-4xl) 0',
          background: 'var(--color-birch-soft)',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '0 var(--space-md)',
          }}
        >
          <Eyebrow>Not ready to commit?</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'var(--text-3xl)',
              fontWeight: 800,
              color: 'var(--color-midnight)',
              letterSpacing: 'var(--tracking-tight)',
              lineHeight: 1.05,
              margin: 'var(--space-sm) 0 var(--space-md)',
            }}
          >
            Try a day pass first.
          </h2>
          <p
            style={{
              color: 'var(--color-ink-soft)',
              fontSize: 'var(--text-sm)',
              marginBottom: 'var(--space-xl)',
              maxWidth: '40ch',
              margin: '0 auto var(--space-xl)',
            }}
          >
            Day passes are available online or at our trailhead donation boxes.
          </p>
          <Button variant="primary" to="/day-passes">
            View day pass options
          </Button>
        </div>
      </section>
    </>
  );
}

export default Memberships;
