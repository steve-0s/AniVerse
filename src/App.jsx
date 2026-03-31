import { Routes, Route } from 'react-router-dom';
import Landing from './screens/landing.jsx';
import Home from './screens/home.jsx';
import AnimePlayer from './screens/anime-player.jsx';
import AnimeWatchScreen from './screens/anime-watch-screen.jsx';
import Browse from './screens/browse.jsx';
import SearchResults from './screens/search-results.jsx';
import Schedule from './screens/schedule.jsx';
import Community from './screens/community.jsx';
import Profile from './screens/profile.jsx';
import NotFound from './screens/not-found.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/community" element={<Community />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/anime/:id" element={<AnimePlayer />} />
      <Route path="/anime/:id/details" element={<AnimeWatchScreen />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
