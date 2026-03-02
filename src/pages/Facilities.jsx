import lodgeInterior from '../assets/images/facilities/lodge-interior.jpg';
import lodgeBunks from '../assets/images/facilities/lodge-bunks.jpg';
import tenthMtnLodge from '../assets/images/facilities/10th-mtn-lodge.jpg';
import waxBuilding from '../assets/images/facilities/wax-building.jpg';
import stadiumTiming from '../assets/images/facilities/stadium-and-timing-building.jpg';
import tenthAerial from '../assets/images/facilities/10th-aerial.jpg';

function Facilities() {
  return (
    <div className="facilities-page">
      {/* Hero Section */}
      <section className="facilities-hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="facilities-hero-content">
              <h1>Facility</h1>
              <p>
                The Fort Kent Outdoor Center is a community managed recreational facility promoting
                outdoor trail based activities year round in the beauty of the St John Valley.
                Located right next door to downtown Fort Kent and Lonesome Pines Trails Alpine ski
                area, you are just minutes from getting away from it all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Rentals Section */}
      <section className="section">
        <div className="container">
          <div className="two-col-grid two-col-grid-reverse">
            <div className="content-col">
              <h2 className="section-title">Facility Rentals</h2>
              <div className="content-text">
                <p>
                  The 10th Mountain Lodge located at the Fort Kent Outdoor Center is now available
                  to rent year-round for any of your school, non-profit, business, organization or
                  individual event. There are two large rooms available for meetings, retreats, or
                  parties, both exhibiting an outstanding view of a world-class recreational
                  facility encompassed in a secluded, picturesque natural setting.
                </p>
                <p>
                  One meeting room has a cozy fireplace perfect for a winter gathering and seats
                  approximately 30, while the conference room seats approximately 50 and is equipped
                  with a digital projector and screen for presentations. WiFi is accessible
                  throughout the entire facility, and a well-stocked kitchen is also available. Most
                  local caterers are familiar with the amenities of our lodge if you wish to hire
                  out the food services for your event. There is a restroom upstairs as well as
                  separate Mens and Ladies facilities in the lower level.
                </p>
                <p>
                  Lodge rentals also include half price trail passes for rental participants. What a
                  relaxing, healthy way to end a meeting or seminar!
                </p>
              </div>
            </div>
            <div className="image-col">
              <div className="staggered-images">
                <img src={lodgeInterior} alt="FKOC lodge interior" className="staggered-img-1" />
                <img src={lodgeBunks} alt="Lodge bunks" className="staggered-img-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10th Mountain Lodge Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="two-col-grid">
            <div className="image-col">
              <img src={tenthMtnLodge} alt="FKOC lodge" className="facility-image" />
            </div>
            <div className="content-col">
              <h2 className="section-title text-inverse">10th Mountain Lodge</h2>
              <div className="content-text text-light">
                <p>
                  The beautiful Tenth Mountain lodge includes a great-room, kitchen, competition
                  office, a fieldstone fireplace, and a unique perspective of the biathlon stadium.
                  On the lower level with access to the stadium is the Rental Shop where no-wax and
                  skating skis as well as snowshoes are available for rental. Day or season passes
                  can be purchased there as well as online.
                </p>
                <p>
                  The Rental Shop is open 12:00 – 3:00 on Saturdays and Sundays during the
                  ski/snowshoe season and during some events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wax Building Section */}
      <section className="section">
        <div className="container">
          <div className="two-col-grid two-col-grid-reverse">
            <div className="content-col">
              <h2 className="section-title">Wax Building</h2>
              <p className="content-text">
                A 27-room wax building was built in 2003 and first used during the IBU World Cup in
                March 2004. The lower level is open to the public seven days a week for waxing.
                Restroom facilities are also available here during competitions.
              </p>
            </div>
            <div className="image-col">
              <img src={waxBuilding} alt="Wax building" className="facility-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Stadium and Timing Building Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="two-col-grid">
            <div className="image-col">
              <img
                src={stadiumTiming}
                alt="Stadium and timing building"
                className="facility-image"
              />
            </div>
            <div className="content-col">
              <h2 className="section-title text-inverse">Stadium and Timing Building</h2>
              <p className="content-text text-light">
                The original Timing Building was moved in 2003 when the Stadium Production room was
                built. A two-story addition was added during fall 2007 in anticipation of the
                upcoming World cup. This building is situated in front of the competition finish
                area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shooting Range Section */}
      <section className="section">
        <div className="container">
          <div className="two-col-grid two-col-grid-reverse">
            <div className="content-col">
              <h2 className="section-title">Shooting Range</h2>
              <p className="content-text">
                The shooting range is located in the stadium with 30 lanes with mechanical targets
                with night lighting on 10 targets. The site was awarded the International Biathlon
                Union Class B license in November 2002.
              </p>
            </div>
            <div className="image-col">
              <img src={tenthAerial} alt="Aerial view of facility" className="facility-image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Facilities;
