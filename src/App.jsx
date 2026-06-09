import { Routes, Route, Navigate } from 'react-router-dom';
import './styles/base.css';
import './styles/utilities.css';

import AnalyticsListener from './components/AnalyticsListener';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Facilities from './pages/Facilities';
import Trails from './pages/Trails';
import Endowment from './pages/Endowment';
import PoliciesAndSafety from './pages/PoliciesAndSafety';
import CoachingPrograms from './pages/CoachingPrograms';
import DayPasses from './pages/DayPasses';
import Rentals from './pages/Rentals';
import DiscGolf from './pages/DiscGolf';
import MountainBiking from './pages/MountainBiking';
import Memberships from './pages/Memberships';
import Events from './pages/Events';
import Location from './pages/Location';

function App() {
  return (
    <>
      <AnalyticsListener />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="trails" element={<Trails />} />
          <Route path="endowment" element={<Endowment />} />
          <Route path="policies-and-safety" element={<PoliciesAndSafety />} />
          <Route path="coaching-programs" element={<CoachingPrograms />} />
          <Route path="day-passes" element={<DayPasses />} />
          <Route path="rentals" element={<Rentals />} />
          <Route path="disc-golf" element={<DiscGolf />} />
          <Route path="mountain-biking" element={<MountainBiking />} />
          <Route path="memberships" element={<Memberships />} />
          <Route path="events" element={<Events />} />
          <Route path="event-calendar" element={<Navigate to="/events" replace />} />
          <Route path="upcoming-events" element={<Navigate to="/events" replace />} />
          <Route path="location" element={<Location />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
