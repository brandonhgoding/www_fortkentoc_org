import { Link } from 'react-router-dom';

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

// Construction images
import construction1 from '../assets/images/about/construction-1.jpg';
import construction2 from '../assets/images/about/construction-2.jpg';
import construction4 from '../assets/images/about/construction-4.jpg';
import construction5 from '../assets/images/about/construction-5.jpg';

// Other images
import massStartRace from '../assets/images/about/mass-start-race.jpg';
import lodgeFall from '../assets/images/about/lodge-fall.jpg';

const ArrowIcon = () => (
  <svg className="icon-arrow" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const boardMembers = [
  {
    name: 'Laura Audibert',
    role: 'President',
    image: lauraAudibert,
  },
  {
    name: 'Paul Kile',
    role: 'Vice President',
    image: paulKile,
  },
  {
    name: 'Danielle Reardon',
    role: 'Secretary',
    image: danielleReardon,
  },
  {
    name: 'Pat Theriault',
    role: 'Treasurer',
    image: patTheriault,
  },
  {
    name: 'Mike Tanguay',
    role: null,
    image: placeholderMember,
  },
  {
    name: 'Carl Theriault',
    role: null,
    image: carlTheriault,
  },
  {
    name: 'Deb Hedeen',
    role: null,
    image: debHedeen,
  },
  {
    name: 'Ben Paradis',
    role: null,
    image: benParadis,
  },
  {
    name: 'Jim Marquis',
    role: null,
    image: jimMarquis,
  },
  {
    name: 'Thomas J Anderson',
    role: null,
    image: thomasAnderson,
  },
];

const constructionPhotos = [
  {
    title: 'Original Build Site',
    image: construction1,
    alt: 'Clearing the lot for the original building site',
  },
  {
    title: 'Building the FKOC walls',
    image: construction2,
    alt: 'Framing the lodge walls',
  },
  {
    title: 'Adding the FKOC roof',
    image: construction4,
    alt: 'Laying the trusses for the roof',
  },
  {
    title: 'Adding the FKOC siding',
    image: construction5,
    alt: 'Adding siding to the building',
  },
];

function AboutUs() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="about-hero-content">
              <h1>Who We Are</h1>
              <p>
                We are a community non-profit organization promoting year-round, outdoor
                recreational trail activities in the beautiful{' '}
                <a
                  href="https://visitaroostook.com/story/st-john-valley"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  St. John Valley
                </a>
                . Located close to downtown{' '}
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
                clean, healthy FUN!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container">
          <div className="two-col-grid">
            <div className="image-col">
              <img
                src={massStartRace}
                alt="Athletes during mass start race"
                className="about-image"
              />
            </div>
            <div className="content-col">
              <h2 className="section-title">Our Mission</h2>
              <p className="content-text">
                Our mission at the Fort Kent Outdoor Center is to promote healthy outdoor lifestyles
                by providing a first-rate facility, trail system, and recreational activities for
                members, athletes, and visitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title text-inverse">Established in 1999</h2>
          <p className="content-text text-light history-intro">
            With primary funding from the Libra Foundation, the Outdoor Center was established in
            1999 as a training center for aspiring Nordic and Biathlon athletes, and the host of
            multiple National and International Nordic and Biathlon events.
          </p>
          <div className="construction-grid">
            {constructionPhotos.map((photo, index) => (
              <article key={index} className="construction-card">
                <img src={photo.image} alt={photo.alt} />
                <h3>{photo.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trails Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Diverse Trails For All Your Outdoor Needs</h2>
          <p className="content-text trails-intro">
            What began as a Nordic Ski facility has now evolved into a year round trail system with
            the addition of several miles of snowshoe, hiking and mountain bike trails. We are
            pleased members and visitors can now enjoy the beauty of the Maine outdoors all year
            long.
          </p>
          <div className="link-cards-grid">
            <Link to="/trails#interactive" className="link-card">
              <span>See our online trail map with live grooming updates</span>
              <ArrowIcon />
            </Link>
            <Link to="/trails#conditions" className="link-card">
              <span>Review our latest Trail Report</span>
              <ArrowIcon />
            </Link>
            <Link to="/day-passes" className="link-card">
              <span>Purchase a day pass</span>
              <ArrowIcon />
            </Link>
            <Link to="/memberships" className="link-card">
              <span>Become a member</span>
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Fun Section */}
      <section className="section section-dark section-centered">
        <div className="container">
          <div className="centered-content">
            <h2 className="section-title text-inverse">Lots of Outdoor Fun</h2>
            <p className="content-text text-light">
              From climbing Mike's Mountain, single track biking on the Ridge Runner, skiing down
              Ben's Incline, snowshoeing the Warrior Trail, learning to shoot and ski, throwing a
              disc to a basket at the top of Lonesome Pine Trails, watch a toddler learn to ski with
              the Jalbert program, to a simple walk through the beautiful woods, there is truly
              something for everyone!
            </p>
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Board of Directors</h2>
            <p className="content-text">
              Board members are elected to a three-year term by the membership. When a member's term
              expires, elections take place at our annual Welcome Winter Celebration.
            </p>
          </div>
          <div className="board-grid">
            {boardMembers.map((member, index) => (
              <div key={index} className="board-card">
                <img src={member.image} alt={member.name} />
                <div className="board-card-overlay">
                  <p className="board-name">{member.name}</p>
                  {member.role && <p className="board-role">{member.role}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="centered-content">
            <h2 className="section-title text-inverse support-title">Support</h2>
            <p className="content-text text-light">
              With a huge boost from the Libra Foundation, the Fort Kent Outdoor Center was built
              primarily for training skiers for Biathlon and recreation. With many thanks to
              uncountable volunteer hours, sponsorships from local businesses, various donations
              large and small, and continued support from Pineland Farms we have introduced many
              other ways for people near and far to embrace the outdoors such as Disc Golf, single
              track biking, extended snowshoe trails, Nature Series events, Jalbert Ski Program
              expansion, and many other enhancements to our marvelous gem in the St. John Valley. We
              are thankful for all donations, large and small! They help us continue to serve as a
              recreation hub for the Greater Fort Kent Area.
            </p>
            <div className="support-image-wrapper">
              <img src={lodgeFall} alt="FKOC lodge during fall season" className="support-image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
