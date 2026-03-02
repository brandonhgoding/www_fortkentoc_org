import { Link } from 'react-router-dom';

import dog1 from '../assets/images/policies/dog-1.png';
import dog2 from '../assets/images/policies/dog-2.png';

const skiingTips = [
  'Make sure you are skiing on a trail where dogs are allowed.',
  "Keep leashes short enough so that they can't become a tripping hazard to someone else who may be skiing nearby. Ideally, your dog should be near your side and slightly ahead of you, but not in front of your skis.",
  'Leashes that have some kind of bungee connection help soften any sudden movement by your dog, both for yourself and for him, in case he is tempted to run toward someone else.',
  'If you want to go hands-free, there is also a leash system that has bungee sections to mitigate the force of any sudden move or stop, and it attaches to a simple webbing waistbelt. It is short enough to give your dog room to move, but not enough to get ahead of your skis or to trip anyone else. See the photos above for examples of these kind of leashes.',
  "Pay attention to your dog's paws, especially when it's cold. Rubbing a salve like vaseline or Musher's Choice will help protect your dog's feet from snow balling up and from chafing and cracking to their paws. Boots can also be helpful if they tolerate them.",
  'Finally, make sure you do not over-exert your dog. Most dogs like to wander at varied speeds, and generally like to sprint in short bursts, and then trot along more slowly in between. Our trails are ideal for dogs in that way, because most trails do have a series of hills where we slow down a little going up, and go quite fast in short bursts of downhill, and then return to a more leisurely pace. Know your dog, and be aware of his age and his limits.',
];

function PoliciesAndSafety() {
  return (
    <div className="policies-page">
      {/* Hero Section */}
      <section className="policies-hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="policies-hero-content">
              <h1>Policies and Safety</h1>
              <p>
                We are an outdoor enthusiast's dream playground! We encourage you to explore all the
                trails but please bear in mind that you are responsible for your own safety. Common
                sense and personal awareness can help reduce the element of risk to you and others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pet Policies Section */}
      <section className="section">
        <div className="container">
          <div className="two-col-grid">
            <div className="content-col">
              <h2 className="section-title">Pet Policies</h2>
              <div className="content-text">
                <p>
                  We love our dogs, and we know there is nothing better than sharing the outdoors
                  with our furry friends! For many, being able to bring your pet along is often the
                  best part of exploring the outdoors, so we welcome your four legged companions;
                  however, we do have a few simple rules to keep everyone and their animals safe and
                  happy.
                </p>
                <p>
                  Here at the Fort Kent Outdoor Center, leashed dogs are always welcome on all of
                  our snowshoe trails! During the summer months, leashed pets are welcome on all
                  trails, but we ask that pets stay off the paved trails as much as possible to
                  minimize conflict with other trail users.
                </p>
                <p>
                  For those of you who would like to ski with your dogs, we also offer a few
                  pet-friendly ski trails. Except during scheduled winter events, members and trail
                  pass holders are welcome to use our pet-friendly ski trails: Parts of the
                  Volunteer Trail, Mickey's Way, and Piste Acadienne beginning at the Red Barn
                  trailhead. Also the lower part of the Green Bean Trail, beginning at the Lonesome
                  Pine trailhead. Dogs are still not allowed on the Lodge Trails.
                </p>
              </div>
            </div>
            <div className="image-col">
              <div className="staggered-images">
                <img src={dog1} alt="Skiing with a dog" className="staggered-img-1" />
                <img src={dog2} alt="Dog and skier" className="staggered-img-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paw Print Banner Section */}
      <section className="section section-dark section-centered">
        <div className="container">
          <div className="centered-content">
            <h2 className="section-title text-inverse">Look for the Paw Print</h2>
            <p className="content-text text-light">
              We have trail signs showing a dog's paw to mark our pet-friendly ski trails!
            </p>
            <Link to="/trails" className="btn btn-primary">
              Trail Maps
            </Link>
          </div>
        </div>
      </section>

      {/* Skiing Tips Section */}
      <section className="section">
        <div className="container">
          <div className="tips-section">
            <h3 className="tips-title">
              Tips and suggestions for cross country skiing with your dogs
            </h3>
            <ul className="tips-list">
              {skiingTips.map((tip, index) => (
                <li key={index} className="tip-item">
                  <span className="tip-number">{index + 1}</span>
                  <span className="tip-text">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PoliciesAndSafety;
