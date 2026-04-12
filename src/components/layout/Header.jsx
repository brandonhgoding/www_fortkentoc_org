import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/fkoc-logo.jpeg';
import { useWebcam } from '../WebcamContext';
import Button from '../ui/Button';
import { DONATE_URL } from '../../lib/urls';
import './Header.css';

const NAV = [
  {
    id: 'visit',
    label: 'Visit',
    items: [
      { to: '/trails', label: 'Trails & conditions' },
      { to: '/day-passes', label: 'Day passes' },
      { to: '/rentals', label: 'Rentals' },
      { to: '/location', label: 'Location & hours' },
      { to: '/facilities', label: 'Facilities' },
    ],
  },
  {
    id: 'programs',
    label: 'Programs',
    items: [
      { to: '/coaching-programs#fkoc-coaching', label: 'Coaching' },
      { to: '/coaching-programs#ski-program', label: 'Ski training' },
      { to: '/coaching-programs#biathlon-program', label: 'Biathlon training' },
      { to: '/coaching-programs#residence', label: 'Biathlon residence' },
      { to: '/coaching-programs#pg-training', label: 'PG training' },
    ],
  },
  {
    id: 'events',
    label: 'Events',
    to: '/events',
  },
  {
    id: 'about',
    label: 'About',
    items: [
      { to: '/about-us', label: 'Who we are' },
      { to: '/memberships', label: 'Memberships' },
      { to: '/endowment', label: 'Endowment fund' },
      { to: '/policies-and-safety', label: 'Policies & safety' },
    ],
  },
];

function Header() {
  const { openWebcam } = useWebcam();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    }
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  function closeAll() {
    setOpenMenu(null);
    setMobileOpen(false);
  }

  return (
    <header className="nav-header">
      <div
        className="nav-topbar"
        role="status"
        aria-live="polite"
        aria-label="Trail status and conditions"
      >
        <div className="nav-topbar__inner">
          <div className="nav-topbar__status">
            <span className="nav-topbar__pill">
              <span className="nav-topbar__dot" />
              14 of 22 trails open
            </span>
            <span className="nav-topbar__pill nav-topbar__pill--live">
              <span className="nav-topbar__dot" />
              Stadium webcam live
            </span>
          </div>
          <div className="nav-topbar__meta">
            <span>Last groomed · 6h ago</span>
            <span>-4°F</span>
          </div>
        </div>
      </div>

      <nav
        ref={navRef}
        className={`nav-main ${mobileOpen ? 'nav-main--open' : ''}`}
        aria-label="Main navigation"
      >
        <Link to="/" className="nav-brand" onClick={closeAll}>
          <span className="nav-brand__logo">
            <img src={logo} alt="" />
          </span>
          <span>
            <div className="nav-brand__title">Fort Kent Outdoor Center</div>
            <div className="nav-brand__tag">Est. 1968 · Fort Kent · ME</div>
          </span>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="primary-nav-list"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            {mobileOpen ? (
              <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
            ) : (
              <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
            )}
          </svg>
          <span className="sr-only">Toggle menu</span>
        </button>

        <ul className="nav-list" id="primary-nav-list">
          {NAV.map((group) => (
            <li key={group.id} className="nav-item">
              {group.items ? (
                <>
                  <button
                    type="button"
                    className="nav-trigger"
                    aria-haspopup="true"
                    aria-expanded={openMenu === group.id}
                    onClick={() => setOpenMenu(openMenu === group.id ? null : group.id)}
                  >
                    {group.label}
                    <svg className="nav-trigger__arrow" viewBox="0 0 10 10" fill="currentColor">
                      <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.4" fill="none" />
                    </svg>
                  </button>
                  <div
                    className={`nav-dropdown ${openMenu === group.id ? 'nav-dropdown--open' : ''}`}
                  >
                    <ul>
                      {group.items.map((item) => (
                        <li key={item.to + item.label}>
                          <Link to={item.to} onClick={closeAll}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link to={group.to} className="nav-trigger" onClick={closeAll}>
                  {group.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <Button variant="secondary" size="sm" onClick={openWebcam}>
            Live Webcam
          </Button>
          <Button
            variant="support"
            size="sm"
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
