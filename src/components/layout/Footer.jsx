import { Link } from 'react-router-dom';
import Eyebrow from '../ui/Eyebrow';
import Coordinates from '../graphics/Coordinates';
import { DONATE_URL, FACEBOOK_URL } from '../../lib/urls';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Eyebrow variant="on-dark">Est. 1999</Eyebrow>
            <div className="mark">Fort Kent Outdoor Center</div>
            <p>
              Promoting healthy outdoor lifestyles through a first-rate facility, trail system, and
              recreational programs in the St. John River Valley of Maine.
            </p>
            <Coordinates onDark />
          </div>

          <div className="site-footer__col">
            <h5>Visit</h5>
            <ul>
              <li>
                <Link to="/trails">Trail maps</Link>
              </li>
              <li>
                <Link to="/day-passes">Day passes</Link>
              </li>
              <li>
                <Link to="/rentals">Rentals</Link>
              </li>
              <li>
                <Link to="/location">Location</Link>
              </li>
              <li>
                <Link to="/facilities">Facilities</Link>
              </li>
            </ul>
          </div>

          <div className="site-footer__col">
            <h5>Programs</h5>
            <ul>
              <li>
                <Link to="/coaching-programs#fkoc-coaching">Coaching</Link>
              </li>
              <li>
                <Link to="/coaching-programs#ski-program">Ski training</Link>
              </li>
              <li>
                <Link to="/coaching-programs#biathlon-program">Biathlon training</Link>
              </li>
              <li>
                <Link to="/coaching-programs#residence">Biathlon residence</Link>
              </li>
              <li>
                <Link to="/coaching-programs#pg-training">PG training</Link>
              </li>
            </ul>
          </div>

          <div className="site-footer__col">
            <h5>Support</h5>
            <ul>
              <li>
                <Link to="/memberships">Memberships</Link>
              </li>
              <li>
                <Link to="/endowment">Endowment fund</Link>
              </li>
              <li>
                <a href={DONATE_URL} target="_blank" rel="noopener noreferrer">
                  Donate
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <div>© {year} · Fort Kent Outdoor Center · 501(c)(3)</div>
          <div>
            <Link to="/policies-and-safety">Policies & safety</Link>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
