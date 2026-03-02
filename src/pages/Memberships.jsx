import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import massStartRace from '../assets/images/about/mass-start-race.jpg';

const CheckIcon = () => (
  <svg className="benefit-icon" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const membershipTiers = [
  {
    name: 'Adult',
    description: 'Ages 19+',
    price: '$100',
    period: '/year',
  },
  {
    name: 'Youth',
    description: 'Ages 7-18',
    price: '$50',
    period: '/year',
  },
  {
    name: 'Family',
    description: 'Same household',
    price: '$225',
    period: '/year',
    featured: true,
  },
  {
    name: 'UMFK Student',
    description: 'Valid student ID required',
    price: '$50',
    period: '/year',
  },
];

const benefits = [
  'Physical membership card mailed after waiver completion',
  'Year-round trail access for cross-country skiing',
  'Snowshoe trail access',
  'Disc golf course access',
  'Mountain biking trails',
  'Roller-skiing on paved loops',
  'Running and walking trails',
  'Lodge access daily during ski season (through late April)',
];

const activities = [
  { name: 'Nordic Skiing', icon: '⛷️' },
  { name: 'Snowshoeing', icon: '🥾' },
  { name: 'Disc Golf', icon: '🥏' },
  { name: 'Mountain Biking', icon: '🚵' },
  { name: 'Roller Skiing', icon: '🎿' },
  { name: 'Trail Running', icon: '🏃' },
];

function Memberships() {
  useEffect(() => {
    // Load Stripe pricing table script
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/pricing-table.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(
        'script[src="https://js.stripe.com/v3/pricing-table.js"]',
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="memberships-page">
      {/* Hero Section */}
      <section className="memberships-hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="memberships-hero-content">
              <h1>Become a Member</h1>
              <p>
                Membership is the lifeblood of the FKOC, providing the primary source of funding
                that sustains our operations. Join our community and enjoy year-round access to
                world-class trails and facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Info Section */}
      <section className="section">
        <div className="container">
          <div className="membership-intro">
            <h2 className="section-title text-center">Annual Memberships</h2>
            <p className="section-intro text-center">
              Memberships run from <strong>January 1 to December 31</strong> annually. Your
              membership supports trail maintenance, facility operations, and community programming.
            </p>
          </div>

          {/* Activities Grid */}
          <div className="activities-grid">
            {activities.map((activity, index) => (
              <div key={index} className="activity-badge">
                <span className="activity-icon">{activity.icon}</span>
                <span className="activity-name">{activity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title text-center">Membership Options</h2>
          <div className="membership-tiers-grid">
            {membershipTiers.map((tier, index) => (
              <div
                key={index}
                className={`membership-tier-card ${tier.featured ? 'tier-featured' : ''}`}
              >
                {tier.featured && <div className="tier-badge">Best Value</div>}
                <h3 className="tier-title">{tier.name}</h3>
                <p className="tier-description">{tier.description}</p>
                <div className="tier-price">
                  <span className="price-amount">{tier.price}</span>
                  <span className="price-period">{tier.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section">
        <div className="container">
          <div className="two-col-grid">
            <div className="content-col">
              <h2 className="section-title">Member Benefits</h2>
              <ul className="benefits-list">
                {benefits.map((benefit, index) => (
                  <li key={index} className="benefit-item">
                    <CheckIcon />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="image-col">
              <img
                src={massStartRace}
                alt="Athletes at Fort Kent Outdoor Center"
                className="benefits-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Process Section */}
      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title text-inverse text-center">How to Enroll</h2>
          <div className="enrollment-steps">
            <div className="enrollment-step">
              <div className="step-number">1</div>
              <h3>Complete Waiver</h3>
              <p>
                Sign our release form via WaiverSign. This is required before accessing any facility
                or trails.
              </p>
              <a
                href="https://app.waiversign.com/e/68b05e9a16bfaf7b2a6b56e5/doc/68b0934d9b73a3001293355d?event=none"
                target="_self"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
              >
                Sign Waiver
              </a>
            </div>
            <div className="step-divider">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <div className="enrollment-step">
              <div className="step-number">2</div>
              <h3>Complete Payment</h3>
              <p>
                Process your membership payment securely through Stripe. Your membership card will
                be mailed after completion.
              </p>
              <a href="#payment" className="btn btn-primary">
                Pay Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="section" id="payment">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Complete Your Membership</h2>
            <p className="section-intro">
              Select your membership type below to complete your enrollment. Secure payment
              processing powered by Stripe.
            </p>
          </div>
          <div className="stripe-container">
            <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
            <stripe-pricing-table
              pricing-table-id="prctbl_1ScawpCNUZB7PvDyMKHEwRED"
              publishable-key="pk_live_51K7Op9CNUZB7PvDyrt4Y4E7RoduQLDdUa8S0qfc2fZKdyHLcBbYXUAXAvS5UAzTWjGkIaCuxiTBLqFXYi01Xyb8N00CqrkdT6e"
            ></stripe-pricing-table>
          </div>
        </div>
      </section>

      {/* Day Pass Alternative */}
      <section className="section section-alt">
        <div className="container">
          <div className="centered-content text-center">
            <h2 className="section-title">Not Ready for a Membership?</h2>
            <p className="content-text">
              Try our trails with a day pass first! Day passes are available for purchase online or
              at our trailhead donation boxes.
            </p>
            <Link to="/day-passes" className="btn btn-primary">
              View Day Pass Options
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Memberships;
