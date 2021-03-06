import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MasterTemplate from './templates/MasterTemplate/MasterTemplate';
import Articles from './pages/Articles/Articles';
import NewArticle from './pages/NewArticle/NewArticle';
import Sections from './pages/Sections/Sections';
import NewSection from './pages/NewSection/NewSection';
import Preschoolers from './pages/Preschoolers/Preschoolers';
import Calendar from './pages/Calendar/Calendar';
import NewEvent from './pages/Calendar/subCoponents/NewEvent/NewEvent';
import Schedule from './pages/Schedule/Schedule';
import NewGroup from './pages/Schedule/sub-components/NewGroup/NewGroup';
import NewScheduleRow from './pages/Schedule/sub-components/NewScheduleRow/NewScheduleRow';
import HomePage from './pages/HomePage/HomePage';
import InstructorsAndHelpers from './pages/InstructorsAndHeplers/InstructorsAndHelpers';
import NewPerson from './pages/InstructorsAndHeplers/sub-components/NewPerson/NewPerson';
import InfoPages from './pages/InfoPages/InfoPages';
import NewInfoPage from './pages/InfoPages/sub-components/NewInfoPage/NewInfoPage';
import Galery from './pages/Galery/Galery';
import NewGalery from './pages/Galery/sub-components/NewGalery/NewGalery';
import Motivation from './pages/Motivation/Motivation';
import LoginPage from './pages/LoginPage/LoginPage';
import Settings from './pages/Settings/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/admin' element={<LoginPage />} />
        <Route path='/*' element={<LoginPage />} />

        {/* SETTINGS */}
        <Route path='/admin/ustawienia' element={<Settings />} />

        {/* HOMEPAGE */}
        <Route path='/admin/glowna' element={<HomePage />} />

        {/* ARTICLES */}
        <Route path='/admin/aktualnosci' element={<Articles />} />
        <Route path='/admin/aktualnosci/nowy' element={<NewArticle />} />
        <Route path='/admin/aktualnosci/nowy/:id' element={<NewArticle />} />

        {/* SECTIONS */}
        <Route path='/admin/sekcje' element={<Sections />} />
        <Route path='/admin/sekcje/dodaj' element={<NewSection />} />
        <Route path='/admin/sekcje/dodaj/:id' element={<NewSection />} />

        {/* PRESCHOOLERS */}
        <Route path='/admin/przedszkolaki' element={<Preschoolers />} />

        {/* CALENDAR */}
        <Route path='/admin/kalendarz' element={<Calendar />} />
        <Route path='/admin/kalendarz/nowe-wydarzenie' element={<NewEvent />} />
        <Route
          path='/admin/kalendarz/nowe-wydarzenie/:id'
          element={<NewEvent />}
        />

        {/* SCHEDULE */}
        <Route path='/admin/harmonogram' element={<Schedule />} />
        <Route path='/admin/harmonogram/dodaj' element={<NewGroup />} />
        <Route
          path='/admin/harmonogram/dodaj/:groupId'
          element={<NewGroup />}
        />
        <Route
          path='/admin/harmonogram/dodaj/wiersz/:groupId'
          element={<NewScheduleRow isNewRow={true} />}
        />
        <Route
          path='/admin/harmonogram/dodaj/wiersz/:groupId/:id'
          element={<NewScheduleRow />}
        />

        {/* INSTRUCTORS AND HELPERS */}
        <Route
          path='/admin/instruktorzy-i-pomocnicy'
          element={<InstructorsAndHelpers />}
        />
        <Route
          path='/admin/instruktorzy-i-pomocnicy/dodaj'
          element={<NewPerson />}
        />
        <Route
          path='/admin/instruktorzy-i-pomocnicy/dodaj/:id'
          element={<NewPerson />}
        />

        {/* INFO PAGES */}
        <Route path='/admin/strony-informacyjne' element={<InfoPages />} />
        <Route
          path='/admin/strony-informacyjne/dodaj'
          element={<NewInfoPage />}
        />
        <Route
          path='/admin/strony-informacyjne/dodaj/:id'
          element={<NewInfoPage />}
        />

        {/* GALERIES */}
        <Route path='/admin/galerie' element={<Galery />} />
        <Route path='/admin/galerie/dodaj/:id' element={<NewGalery />} />

        {/* MOTIVATION */}
        <Route path='/admin/motywacja' element={<Motivation />} />
      </Routes>
    </Router>
  );
}

export default App;
