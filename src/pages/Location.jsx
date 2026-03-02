function Location() {
  return (
    <div className="location-page">
      {/* Hero Section */}
      <section className="location-hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="location-hero-content">
              <h1>Location</h1>
              <p>
                Fort Kent is situated on the northern border of Maine in the Saint John River
                valley. The area is known for its ideal winter conditions with ample snow from
                December through April. Rolling hills, lakes, rivers, forests, farms are all scenes
                you experience as you drive over the hills into the valley.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fort Kent Info Section */}
      <section className="section">
        <div className="container">
          <div className="location-info">
            <h2 className="section-title">Fort Kent, Maine</h2>
            <p className="content-text">
              Moose, bears, white-tail deer, raccoons, and multiple species of birds are abundant.
              Nordic and alpine skiing, snowmobiling, ice fishing, and snowshoeing are all popular
              forms of winter recreation. In the summer, golfing, canoeing, fishing, boating,
              swimming, hiking, and biking occupy the residents' free time. Fort Kent and the St
              John Valley region have the small town atmosphere full of fun-loving, hard-working
              people who have embraced outdoor sports.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="map-section">
            <h2 className="section-title text-inverse text-center">Map and Directions</h2>
            <p className="map-address">33 Paradis Circle, Fort Kent, Maine 04743</p>

            <a
              href="https://maps.google.com/maps/dir/Fort+Kent+Outdoor+Center+33+Paradis+Cir+Fort+Kent,+ME+04743/@47.2327378,-68.593596,12z/data=!4m5!4m4!1m0!1m2!1m1!1s0x4cbc5199cfab02e1:0xdfb886e78074d8df"
              target="_blank"
              rel="noopener noreferrer"
              className="directions-btn"
            >
              <div className="directions-btn-text">
                <span className="directions-label">Get Directions on</span>
                <span className="directions-platform">Google Maps</span>
              </div>
            </a>

            <div className="map-container">
              <iframe
                src="https://maps.google.com/maps?q=Fort%20Kent%20Outdoor%20Center&t=m&z=13&output=embed&iwloc=near"
                title="Fort Kent Outdoor Center Map"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Location;
