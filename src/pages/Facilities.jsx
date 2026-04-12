import ContentPage from '../templates/ContentPage';
import PageMeta from '../components/PageMeta';

import lodgeInterior from '../assets/images/facilities/lodge-interior.jpg';
import lodgeBunks from '../assets/images/facilities/lodge-bunks.jpg';
import tenthMtnLodge from '../assets/images/facilities/10th-mtn-lodge.jpg';
import waxBuilding from '../assets/images/facilities/wax-building.jpg';
import stadiumTiming from '../assets/images/facilities/stadium-and-timing-building.jpg';
import tenthAerial from '../assets/images/facilities/10th-aerial.jpg';

function Facilities() {
  const toc = [
    { id: 'rentals', label: 'Facility rentals' },
    { id: 'lodge', label: '10th Mountain Lodge' },
    { id: 'wax-building', label: 'Wax building' },
    { id: 'stadium', label: 'Stadium &amp; timing' },
    { id: 'shooting-range', label: 'Shooting range' },
  ];

  return (
    <>
      <PageMeta
        title="Facilities"
        description="Lodge, wax rooms, shooting range, and trail system facilities at Fort Kent Outdoor Center."
        path="/facilities"
      />
      <ContentPage
        crumb={[{ label: 'About' }, { label: 'Facilities' }]}
        title={
          <>
            The <em>facilities.</em>
          </>
        }
        lede="The Fort Kent Outdoor Center is a community managed recreational facility promoting outdoor trail-based activities year round in the beauty of the St. John Valley — right next door to downtown Fort Kent and Lonesome Pine Trails alpine ski area."
        toc={toc}
      >
        <section id="rentals" className="content-page__section">
          <h2>Facility rentals.</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: 'var(--space-md)',
              marginBottom: 'var(--space-md)',
            }}
          >
            <img
              src={lodgeInterior}
              alt="FKOC lodge interior"
              style={{ width: '100%', borderRadius: 'var(--radius-md)', display: 'block' }}
            />
            <img
              src={lodgeBunks}
              alt="Lodge bunks"
              style={{ width: '100%', borderRadius: 'var(--radius-md)', display: 'block' }}
            />
          </div>
          <p>
            The 10th Mountain Lodge located at the Fort Kent Outdoor Center is now available to rent
            year-round for any of your school, non-profit, business, organization, or individual
            event. There are two large rooms available for meetings, retreats, or parties, both
            exhibiting an outstanding view of a world-class recreational facility encompassed in a
            secluded, picturesque natural setting.
          </p>
          <p>
            One meeting room has a cozy fireplace perfect for a winter gathering and seats
            approximately 30, while the conference room seats approximately 50 and is equipped with
            a digital projector and screen for presentations. WiFi is accessible throughout the
            entire facility, and a well-stocked kitchen is also available. Most local caterers are
            familiar with the amenities of our lodge if you wish to hire out the food services for
            your event. There is a restroom upstairs as well as separate Mens and Ladies facilities
            in the lower level.
          </p>
          <p>
            Lodge rentals also include half price trail passes for rental participants. What a
            relaxing, healthy way to end a meeting or seminar!
          </p>
        </section>

        <section id="lodge" className="content-page__section">
          <h2>10th Mountain Lodge.</h2>
          <img
            src={tenthMtnLodge}
            alt="FKOC 10th Mountain Lodge"
            style={{
              width: '100%',
              borderRadius: 'var(--radius-md)',
              marginBottom: 'var(--space-md)',
            }}
          />
          <p>
            The beautiful Tenth Mountain Lodge includes a great-room, kitchen, competition office, a
            fieldstone fireplace, and a unique perspective of the biathlon stadium. On the lower
            level with access to the stadium is the Rental Shop where no-wax and skating skis as
            well as snowshoes are available for rental. Day or season passes can be purchased there
            as well as online.
          </p>
          <p>
            The Rental Shop is open 12:00 – 3:00 on Saturdays and Sundays during the ski/snowshoe
            season and during some events.
          </p>
        </section>

        <section id="wax-building" className="content-page__section">
          <h2>Wax building.</h2>
          <img
            src={waxBuilding}
            alt="Wax building"
            style={{
              width: '100%',
              borderRadius: 'var(--radius-md)',
              marginBottom: 'var(--space-md)',
            }}
          />
          <p>
            A 27-room wax building was built in 2003 and first used during the IBU World Cup in
            March 2004. The lower level is open to the public seven days a week for waxing. Restroom
            facilities are also available here during competitions.
          </p>
        </section>

        <section id="stadium" className="content-page__section">
          <h2>Stadium &amp; timing building.</h2>
          <img
            src={stadiumTiming}
            alt="Stadium and timing building"
            style={{
              width: '100%',
              borderRadius: 'var(--radius-md)',
              marginBottom: 'var(--space-md)',
            }}
          />
          <p>
            The original Timing Building was moved in 2003 when the Stadium Production room was
            built. A two-story addition was added during fall 2007 in anticipation of the upcoming
            World Cup. This building is situated in front of the competition finish area.
          </p>
        </section>

        <section id="shooting-range" className="content-page__section">
          <h2>Shooting range.</h2>
          <img
            src={tenthAerial}
            alt="Aerial view of FKOC facility including the shooting range"
            style={{
              width: '100%',
              borderRadius: 'var(--radius-md)',
              marginBottom: 'var(--space-md)',
            }}
          />
          <p>
            The shooting range is located in the stadium with 30 lanes with mechanical targets with
            night lighting on 10 targets. The site was awarded the International Biathlon Union
            Class B license in November 2002.
          </p>
        </section>
      </ContentPage>
    </>
  );
}

export default Facilities;
