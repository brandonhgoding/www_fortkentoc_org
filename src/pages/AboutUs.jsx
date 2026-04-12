import { Link } from 'react-router-dom';
import ContentPage from '../templates/ContentPage';
import PageMeta from '../components/PageMeta';

// Board member images
import lauraAudibert from '../assets/images/board-members/laura-audibert.jpg';
import paulKile from '../assets/images/board-members/paul-kile.jpg';
import danielleReardon from '../assets/images/board-members/danielle-reardon.jpg';
import patTheriault from '../assets/images/board-members/pat-theriault.jpg';
import placeholderMember from '../assets/images/board-members/placeholder.png';
import carlTheriault from '../assets/images/board-members/carl-theriault.jpg';
import debHedeen from '../assets/images/board-members/deb-hedeen.jpg';
import benParadis from '../assets/images/board-members/ben-paradis.jpg';
import jimMarquis from '../assets/images/board-members/jim-marquis.jpg';
import thomasAnderson from '../assets/images/board-members/thomas-anderson.jpg';

// Construction / history images
import construction1 from '../assets/images/about/construction-1.jpg';
import construction2 from '../assets/images/about/construction-2.jpg';
import construction4 from '../assets/images/about/construction-4.jpg';
import construction5 from '../assets/images/about/construction-5.jpg';

// Other images
import massStartRace from '../assets/images/about/mass-start-race.jpg';
import lodgeFall from '../assets/images/about/lodge-fall.jpg';

const boardMembers = [
  { name: 'Laura Audibert', role: 'President', image: lauraAudibert },
  { name: 'Paul Kile', role: 'Vice President', image: paulKile },
  { name: 'Danielle Reardon', role: 'Secretary', image: danielleReardon },
  { name: 'Pat Theriault', role: 'Treasurer', image: patTheriault },
  { name: 'Mike Tanguay', role: null, image: placeholderMember },
  { name: 'Carl Theriault', role: null, image: carlTheriault },
  { name: 'Deb Hedeen', role: null, image: debHedeen },
  { name: 'Ben Paradis', role: null, image: benParadis },
  { name: 'Jim Marquis', role: null, image: jimMarquis },
  { name: 'Thomas J Anderson', role: null, image: thomasAnderson },
];

const constructionPhotos = [
  {
    title: 'Original Build Site',
    image: construction1,
    alt: 'Clearing the lot for the original building site',
  },
  { title: 'Building the FKOC walls', image: construction2, alt: 'Framing the lodge walls' },
  { title: 'Adding the FKOC roof', image: construction4, alt: 'Laying the trusses for the roof' },
  { title: 'Adding the FKOC siding', image: construction5, alt: 'Adding siding to the building' },
];

function AboutUs() {
  const toc = [
    { id: 'mission', label: 'Mission' },
    { id: 'history', label: 'History' },
    { id: 'trails', label: 'Trails' },
    { id: 'board', label: 'Board of directors' },
    { id: 'support', label: 'Support' },
  ];

  return (
    <>
      <PageMeta
        title="About Us"
        description="The story of Fort Kent Outdoor Center — promoting healthy outdoor lifestyles in Maine's St. John Valley since 1968."
        path="/about-us"
      />
      <ContentPage
        crumb={[{ label: 'About' }]}
        title={
          <>
            Who <em>we are.</em>
          </>
        }
        lede="A community non-profit organization promoting year-round, outdoor recreational trail activities in the beautiful St. John Valley — minutes from scenic vistas, friendly people, and good, clean, healthy fun."
        toc={toc}
      >
        <section id="mission" className="content-page__section">
          <h2>Our mission.</h2>
          <img
            src={massStartRace}
            alt="Athletes during mass start race"
            style={{
              width: '100%',
              borderRadius: 'var(--radius-md)',
              marginBottom: 'var(--space-md)',
            }}
          />
          <p>
            Our mission at the Fort Kent Outdoor Center is to promote healthy outdoor lifestyles by
            providing a first-rate facility, trail system, and recreational activities for members,
            athletes, and visitors.
          </p>
          <p>
            Located close to downtown{' '}
            <a href="https://fortkentchamber.com/" target="_blank" rel="noopener noreferrer">
              Fort Kent
            </a>{' '}
            and{' '}
            <a
              href="https://www.facebook.com/pages/category/Ski-Resort/Lonesome-Pine-Trails-167467303283851/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lonesome Pine Trails
            </a>{' '}
            alpine ski area, you are minutes away from scenic vistas, friendly people, and good,
            clean, healthy FUN in the beautiful{' '}
            <a
              href="https://visitaroostook.com/story/st-john-valley"
              target="_blank"
              rel="noopener noreferrer"
            >
              St. John Valley
            </a>
            .
          </p>
        </section>

        <section id="history" className="content-page__section">
          <h2>Established in 1999.</h2>
          <p>
            With primary funding from the Libra Foundation, the Outdoor Center was established in
            1999 as a training center for aspiring Nordic and Biathlon athletes, and the host of
            multiple National and International Nordic and Biathlon events.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: 'var(--space-md)',
              marginTop: 'var(--space-md)',
            }}
          >
            {constructionPhotos.map((photo, index) => (
              <figure key={index} style={{ margin: 0 }}>
                <img
                  src={photo.image}
                  alt={photo.alt}
                  style={{ width: '100%', borderRadius: 'var(--radius-md)', display: 'block' }}
                />
                <figcaption
                  style={{
                    fontSize: '0.85rem',
                    marginTop: 'var(--space-xs)',
                    color: 'var(--color-text-muted, #666)',
                  }}
                >
                  {photo.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="trails" className="content-page__section">
          <h2>Diverse trails for all your outdoor needs.</h2>
          <p>
            What began as a Nordic Ski facility has now evolved into a year-round trail system with
            the addition of several miles of snowshoe, hiking, and mountain bike trails. We are
            pleased members and visitors can now enjoy the beauty of the Maine outdoors all year
            long.
          </p>
          <p>
            From climbing Mike&apos;s Mountain, single track biking on the Ridge Runner, skiing down
            Ben&apos;s Incline, snowshoeing the Warrior Trail, learning to shoot and ski, throwing a
            disc to a basket at the top of Lonesome Pine Trails, watching a toddler learn to ski
            with the Jalbert program, to a simple walk through the beautiful woods — there is truly
            something for everyone!
          </p>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-sm)',
            }}
          >
            <li>
              <Link to="/trails#interactive">
                See our online trail map with live grooming updates →
              </Link>
            </li>
            <li>
              <Link to="/trails#conditions">Review our latest Trail Report →</Link>
            </li>
            <li>
              <Link to="/day-passes">Purchase a day pass →</Link>
            </li>
            <li>
              <Link to="/memberships">Become a member →</Link>
            </li>
          </ul>
        </section>

        <section id="board" className="content-page__section">
          <h2>Board of directors.</h2>
          <p>
            Board members are elected to a three-year term by the membership. When a member&apos;s
            term expires, elections take place at our annual Welcome Winter Celebration.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
              gap: 'var(--space-md)',
              marginTop: 'var(--space-md)',
            }}
          >
            {boardMembers.map((member, index) => (
              <figure key={index} style={{ margin: 0, textAlign: 'center' }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: '100%',
                    aspectRatio: '1 / 1',
                    objectFit: 'cover',
                    borderRadius: 'var(--radius-md)',
                    display: 'block',
                  }}
                />
                <figcaption style={{ marginTop: 'var(--space-xs)', fontSize: '0.9rem' }}>
                  <strong>{member.name}</strong>
                  {member.role && (
                    <>
                      <br />
                      <span style={{ color: 'var(--color-text-muted, #666)', fontSize: '0.8rem' }}>
                        {member.role}
                      </span>
                    </>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="support" className="content-page__section">
          <h2>Support &amp; partners.</h2>
          <img
            src={lodgeFall}
            alt="FKOC lodge during fall season"
            style={{
              width: '100%',
              borderRadius: 'var(--radius-md)',
              marginBottom: 'var(--space-md)',
            }}
          />
          <p>
            With a huge boost from the Libra Foundation, the Fort Kent Outdoor Center was built
            primarily for training skiers for Biathlon and recreation. With many thanks to
            uncountable volunteer hours, sponsorships from local businesses, various donations large
            and small, and continued support from Pineland Farms we have introduced many other ways
            for people near and far to embrace the outdoors — Disc Golf, single track biking,
            extended snowshoe trails, Nature Series events, Jalbert Ski Program expansion, and many
            other enhancements to our marvelous gem in the St. John Valley.
          </p>
          <p>
            We are thankful for all donations, large and small! They help us continue to serve as a
            recreation hub for the Greater Fort Kent Area.
          </p>
        </section>
      </ContentPage>
    </>
  );
}

export default AboutUs;
