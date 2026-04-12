// Coach images
import coachBenParadis from '../assets/images/coaches/ben-paradis.png';
import coachCarlTheriault from '../assets/images/coaches/carl-theriault.jpg';
import coachMattMichaud from '../assets/images/coaches/matt-michaud.jpg';
import coachSarahAshley from '../assets/images/coaches/sarah-ashley.jpg';
import coachTorinLaliberte from '../assets/images/coaches/torin-laliberte.jpg';

// Jalbert House images
import jalbertHouse1 from '../assets/images/jalbert-house/jalbert-house-1.jpg';
import jalbertHouse2 from '../assets/images/jalbert-house/jalbert-house-2.jpg';
import jalbertHouse3 from '../assets/images/jalbert-house/jalbert-house-3.jpg';
import jalbertHouse4 from '../assets/images/jalbert-house/jalbert-house-4.jpg';
import jalbertHouse5 from '../assets/images/jalbert-house/jalbert-house-5.jpg';
import jalbertHouse6 from '../assets/images/jalbert-house/jalbert-house-6.jpg';
import jalbertHouse7 from '../assets/images/jalbert-house/jalbert-house-7.jpg';
import jalbertHouse8 from '../assets/images/jalbert-house/jalbert-house-8.jpg';

// Program images
import jalbertSnowplow from '../assets/images/programs/jalbert-snowplow.jpg';
import jalbertClass from '../assets/images/programs/jalbert-class.jpg';
import jalbertBiathlon from '../assets/images/programs/jalbert-biathlon.jpg';
import eastRegionBiathlon from '../assets/images/programs/east-region-biathlon.jpg';

import PageHeader from '../components/layout/PageHeader';
import Eyebrow from '../components/ui/Eyebrow';
import Button from '../components/ui/Button';
import './CoachingPrograms.css';

const coaches = [
  {
    name: 'Ben Paradis',
    role: 'Youth and Masters Nordic Coach',
    image: coachBenParadis,
    bio: 'Ben Paradis has been coaching Nordic skiing for over 30 years and has never had a bad day skiing. No matter what, skiing puts a smile on his face. Ben is especially adept at analyzing and explaining technique to all age levels, and you will surely come back from a refreshing ski in the brisk air with a smile on your face!',
  },
  {
    name: 'Carl Theriault',
    role: 'Program Director',
    image: coachCarlTheriault,
    bio: 'Carl has been involved with coaching skiing and biathlon for the past 23 years, and is a life long lover of anything you can do on skis! Coordinating training programs, range activities, FKOC development, and the local High School Nordic team fill most his days. When he is not working on ski programs and activities, you can find Carl out traveling, or riding horses, bicycles, and motorcycles.',
  },
  {
    name: 'Matt Michaud',
    role: 'Youth and Masters Biathlon Coach',
    image: coachMattMichaud,
    bio: 'An active skier all his life, Matt spent several years as part of the National Guard Biathlon team, and now focuses on volunteering to help us coach our youth and masters biathletes. Two of his boys are currently active in our programs and you can find Matt occasionally jumping in to a biathlon event demonstrating skills he learned during his years with the guard.',
  },
  {
    name: 'Sarah Ashley',
    role: 'Nordic Coach',
    image: coachSarahAshley,
    bio: 'Sarah Ashley is our wonderful middle school and ladies night coach who is an alumni of our high school ski team and she always finds a way to instill and have fun out in the ski trails with a smile on her face!',
  },
  {
    name: 'Torin La Liberté',
    role: 'Venue Manager / Nordic Coach',
    image: coachTorinLaliberte,
    bio: "Torin La Liberte comes to us after 6 years as the head coach of the Clarkson University Cross Country and Nordic Ski teams. While at Clarkson, Torin's teams tallied two USCSA National Championship titles, an NCAA Skiing Championship appearance, and were a perennial powerhouse in the USCSA. When there's not snow on the ground, you can usually find Torin riding his bike or obsessing over ski wax!",
  },
];

const pgPricing = [
  { title: 'Housing — $300/month', detail: 'Utilities and internet included.' },
  {
    title: 'Coaching/Training — $200/month',
    detail: 'Includes daily training, race support, wax supplies, and Team FKOC uniforms.',
  },
  { title: 'Ammunition — $50/month', detail: 'Biathletes only.' },
  {
    title: 'Training Camps/Events — In Region',
    detail: 'We provide transport, housing, and food. You cover registration costs.',
  },
  {
    title: 'Training Camps/Events — Out of Region',
    detail: 'We provide housing and food. You cover airfare and registration fees.',
  },
];

const residencePhotos = [
  { src: jalbertHouse1, alt: 'Jalbert House front yard' },
  { src: jalbertHouse2, alt: 'Jalbert House bedroom' },
  { src: jalbertHouse3, alt: 'Jalbert House living space' },
  { src: jalbertHouse4, alt: 'Jalbert House dining area' },
  { src: jalbertHouse5, alt: 'Jalbert House kitchen' },
  { src: jalbertHouse6, alt: 'Jalbert House' },
  { src: jalbertHouse7, alt: 'Jalbert House sign' },
  { src: jalbertHouse8, alt: 'Jalbert House parking' },
];

function CoachingPrograms() {
  return (
    <div className="coaching-page">
      <PageHeader
        crumb={[{ label: 'Programs' }]}
        title={
          <>
            Training &amp; <em>coaching.</em>
          </>
        }
        lede="Along with community outings and events for adult members, FKOC offers ongoing educational programming for youth — from U10 development to post-graduate high-performance training."
      />

      {/* Coaching Staff */}
      <section id="fkoc-coaching" className="coaching-page__section">
        <div className="coaching-page__inner">
          <Eyebrow>Coaching staff</Eyebrow>
          <h2 className="coaching-page__h2">The FKOC coaching team.</h2>
          <p
            style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--color-ink-soft)',
              margin: '0 0 var(--space-sm)',
            }}
          >
            Guiding our athletes&rsquo; outdoor journey with expertise and passion.
          </p>
          <div className="coaching-page__coaches">
            {coaches.map((coach) => (
              <div key={coach.name} className="coaching-page__coach">
                <img src={coach.image} alt={coach.name} className="coaching-page__coach-img" />
                <div className="coaching-page__coach-name">{coach.name}</div>
                <div className="coaching-page__coach-role">{coach.role}</div>
                <p className="coaching-page__coach-bio">{coach.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PG Training Program */}
      <section id="pg-training" className="coaching-page__section coaching-page__section--alt">
        <div className="coaching-page__inner">
          <Eyebrow>Post-graduate training</Eyebrow>
          <h2 className="coaching-page__h2">PG training program.</h2>

          <div className="coaching-page__pg-grid">
            <div>
              <div className="coaching-page__pg-block">
                <h3>Description</h3>
                <p>
                  The FKOC Post Graduate program is a high performance training program designed to
                  bring high school graduated Nordic skiers and Biathletes, aged 18–23, to the next
                  level of competitive performance with a dedicated annual full time training
                  program.
                </p>
              </div>
              <div className="coaching-page__pg-block">
                <h3>Coaches</h3>
                <p>
                  Coaching responsibilities are shared between Carl Theriault for biathlon specific
                  training and Charlie Cobb for ski technique, strength and endurance training.
                </p>
              </div>
              <div className="coaching-page__pg-block">
                <h3>Academics</h3>
                <p>
                  Athletes are encouraged to take courses at the{' '}
                  <a href="https://www.umfk.edu/" target="_blank" rel="noopener noreferrer">
                    University of Maine at Fort Kent
                  </a>{' '}
                  to stay intellectually stimulated while training and fulfill early collegiate
                  course requirements. The University offers scholarship programs to all athletes
                  training with the FKOC Post Graduate Program.
                </p>
              </div>
            </div>
            <div>
              <div className="coaching-page__pg-block">
                <h3>Facility</h3>
                <p>
                  Training takes advantage of the excellent facilities at the Fort Kent Outdoor
                  Center — a 3km paved roller skiing loop, a 30-point shooting range, and 25km of
                  Nordic trails that are FIS and IBU homologated. Fort Kent has the longest
                  snow-covered season in the Northeast, usually starting in early November and
                  finishing in late April.
                </p>
              </div>
              <div className="coaching-page__pg-block">
                <h3>Housing</h3>
                <p>
                  We offer two housing options for athletes: our lodge and the Jalbert Biathlon
                  Residence. Coaches check in frequently, but athletes live independently and are
                  expected to maintain their space appropriately.
                </p>
              </div>
            </div>
          </div>

          <div className="coaching-page__pricing">
            <h3>Pricing</h3>
            <ul className="coaching-page__pricing-list">
              {pgPricing.map((item) => (
                <li key={item.title}>
                  <span>
                    <strong>{item.title}</strong> — {item.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="coaching-page__pg-cta">
            <h3>Space is limited.</h3>
            <p>
              The PG Program is limited to the first 5 athletes registered due to housing
              restrictions — so don&rsquo;t delay! Download and submit your application today.
            </p>
            <div className="coaching-page__pg-cta-buttons">
              <Button
                variant="primary"
                href="https://drive.google.com/file/d/17QBqvZnmy7SJ0w_Bzpmnjaaoml3_xr-F/view?usp=drive_web"
                target="_blank"
              >
                Program application
              </Button>
              <Button
                variant="on-dark-outline"
                href="https://drive.google.com/file/d/11mxe4Lqy_ASNxjiu9R74zEMNmluFcoXz/view?usp=drive_web"
                target="_blank"
              >
                Additional information
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Jalbert Biathlon Residence */}
      <section id="residence" className="coaching-page__section">
        <div className="coaching-page__inner">
          <Eyebrow>On-site housing</Eyebrow>
          <h2 className="coaching-page__h2">Jalbert Biathlon Residence.</h2>
          <p
            style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--color-ink-soft)',
              lineHeight: 1.75,
              maxWidth: '65ch',
            }}
          >
            The Post Graduate program is supported by the generous help of Phyllis Jalbert, who has
            provided the &ldquo;Jalbert Biathlon Residence&rdquo; — located within walking distance
            of the FKOC at 42 2nd Ave, about a mile away. There are 5 bedrooms, a spacious living
            room and kitchen, and a common area in the basement. Available to full-time athletes on
            a first come, first served basis.
          </p>
          <div className="coaching-page__gallery">
            {residencePhotos.map((photo) => (
              <img key={photo.alt} src={photo.src} alt={photo.alt} />
            ))}
          </div>
        </div>
      </section>

      {/* Jalbert Ski Program */}
      <section id="ski-program" className="coaching-page__section coaching-page__section--alt">
        <div className="coaching-page__inner">
          <div className="coaching-page__two-col">
            <div>
              <Eyebrow>Nordic skiing</Eyebrow>
              <h2 className="coaching-page__h2">Jalbert Ski Program.</h2>
              <div className="coaching-page__body">
                <p>
                  The Jalbert Youth Ski Program is a great opportunity for children grades K–6 to
                  get outside and learn to cross-country ski! This exciting winter program hosted at
                  the Fort Kent Outdoor Center offers trail passes, ski rentals, and instruction at
                  no cost thanks to Phyllis Jalbert, who has supported the program for many years.
                  Sessions are typically held on Saturday afternoons twice a month (January–March).
                  Dates and details are posted each year once the trails are skiable.
                </p>
                <p>
                  Whether your child comes to just one session or catches Ski Fever and
                  doesn&rsquo;t miss a single one, each session incorporates balance, glide, and
                  uphill and downhill techniques through activities and games.
                </p>
                <p>
                  A dedicated team of FKOC volunteers helps coordinate ski rentals and provide
                  instruction according to ability level and preferred technique. Most participants
                  use classic skis (fish-scale base), though some try skate skiing. Classic
                  technique is the best choice for beginners.
                </p>
                <p>
                  Participants who rented complimentary ski packages through the Jalbert Program
                  will be asked to return their skis, boots, and poles at the last session.
                </p>
                <p>
                  We are always looking for volunteers (ages 15+) to help out inside and outside.
                  Indoor tasks include registration and running the rental shop; outdoor volunteers
                  help with instruction on the snow. If you&rsquo;re interested, please send us a
                  message.
                </p>
              </div>
            </div>
            <div className="coaching-page__stacked-imgs">
              <img src={jalbertSnowplow} alt="Kid skiing" />
              <img src={jalbertClass} alt="Kids taking a ski lesson" />
            </div>
          </div>
        </div>
      </section>

      {/* Jalbert Biathlon Program */}
      <section id="biathlon-program" className="coaching-page__section">
        <div className="coaching-page__inner">
          <div className="coaching-page__two-col">
            <div>
              <Eyebrow>Biathlon</Eyebrow>
              <h2 className="coaching-page__h2">Jalbert Biathlon Program.</h2>
              <div className="coaching-page__body">
                <p>
                  For youth ages 10+ interested in competing in biathlon, the Jalbert Biathlon
                  Program offers instruction at the same time as the Youth Ski Program. The biathlon
                  portion extends beyond the winter months, however — training and events are held
                  throughout the summer for a nominal fee.
                </p>
                <p>
                  Since it began in 2011, the Jalbert Youth Ski &amp; Biathlon Programs have been
                  funded by the generosity and enthusiasm of Fort Kent native Mrs. Phyllis Jalbert.
                  Phyllis is happy to see cross-country skiing and biathlon thriving in our
                  community, and the FKOC is very grateful for her ongoing support.
                </p>
              </div>
            </div>
            <div className="coaching-page__stacked-imgs">
              <img src={jalbertBiathlon} alt="Biathlon racer" />
              <img src={eastRegionBiathlon} alt="Biathlon range" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CoachingPrograms;
