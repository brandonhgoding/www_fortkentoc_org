import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function DayPasses() {
  useEffect(() => {
    // Load Stripe pricing table script
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/pricing-table.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://js.stripe.com/v3/pricing-table.js"]',
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="day-passes-page">
      {/* Hero Section */}
      <section className="day-passes-hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="day-passes-hero-content">
              <h1>Explore Our Trails</h1>
              <p>
                Whether you're a casual visitor or a frequent enthusiast, our Daily Trail Passes
                provide a flexible way to enjoy our trails. Membership (Season Pass) or Daily Trail
                Pass required for access. Join us in supporting our non-profit organization and our
                dedicated volunteers who maintain these year-round trails for your enjoyment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Trail Ready Section */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Get Trail Ready!</h2>
            <p className="section-intro">
              Purchase your day pass online to go from the parking lot to the trails.
              <strong> Alternatively</strong> you can place your day pass fee in our donation box
              found at each of our trailheads.
            </p>
          </div>
          <div className="stripe-container">
            <stripe-pricing-table
              pricing-table-id="prctbl_1ScbCQCNUZB7PvDyamhwiHrY"
              publishable-key="pk_live_51K7Op9CNUZB7PvDyrt4Y4E7RoduQLDdUa8S0qfc2fZKdyHLcBbYXUAXAvS5UAzTWjGkIaCuxiTBLqFXYi01Xyb8N00CqrkdT6e"
            />
          </div>
        </div>
      </section>

      {/* Need Equipment Section */}
      <section className="section section-dark section-centered">
        <div className="container">
          <div className="centered-content">
            <h2 className="section-title text-inverse">Need Equipment?</h2>
            <p className="content-text text-light">
              We can provide you with the equipment you need to enjoy all that The Fort Kent Outdoor
              Center has to offer. Try some of our Cross Country Skis, or toss on a pair of
              Snowshoes and enjoy our winter walking trails.
            </p>
            <Link to="/rentals" className="btn btn-primary">
              Rental Info
            </Link>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="section">
        <div className="container">
          <div className="support-content">
            <h2 className="section-title">
              Show your support for <br />
              <small>Fort Kent Outdoor Center</small>
            </h2>
            <p className="content-text">
              We are a non-profit 501-C organization and will put every penny to good use. Our
              beautiful Lodge, Timing Building, Wax Building, groomed trails (paved and carved out
              for different activities) all need volunteer labor as well as funding from
              memberships, sponsorships, and donations large and small. Please consider us for one
              time as well as continuous support. Many thanks to all of our past, present, and
              future sponsors!
            </p>
            <div className="support-buttons">
              <Link to="/endowment" className="btn btn-primary">
                Learn About Our Endowment
              </Link>
              <Link to="/memberships" className="btn btn-outline">
                Become a Member
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DayPasses;
