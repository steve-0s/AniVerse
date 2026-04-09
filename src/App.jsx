import { Routes, Route } from 'react-router-dom';
import Landing from './features/app/screens/landing.jsx';
import Home from './features/anime/screens/home.jsx';
import AnimePlayer from './features/anime/screens/anime-player.jsx';
import AnimeWatchScreen from './features/anime/screens/anime-details-screen.jsx';
import Browse from './features/anime/screens/browse.jsx';
import SearchResults from './features/anime/screens/search-results.jsx';
import Schedule from './features/anime/screens/schedule.jsx';
import MangaHome from './features/manga/screens/home.jsx';
import MangaBrowse from './features/manga/screens/browse.jsx';
import MangaSearchResults from './features/manga/screens/search-results.jsx';
import MangaSchedule from './features/manga/screens/schedule.jsx';
import MangaReader from './features/manga/screens/manga-reader.jsx';
import MangaDetailsScreen from './features/manga/screens/manga-details-screen.jsx';
import NotFound from './features/app/screens/not-found.jsx';
import SharedCommunity from './shared/screens/community.jsx';
import CommunityPostScreen from './shared/screens/community-post.jsx';
import SharedProfile from './shared/screens/profile.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/community" element={<SharedCommunity />} />
      <Route path="/community/:postId" element={<CommunityPostScreen />} />
      <Route path="/profile" element={<SharedProfile />} />
      <Route path="/anime/:id" element={<AnimePlayer />} />
      <Route path="/anime/:id/details" element={<AnimeWatchScreen />} />
      <Route path="/manga/home" element={<MangaHome />} />
      <Route path="/manga/browse" element={<MangaBrowse />} />
      <Route path="/manga/search" element={<MangaSearchResults />} />
      <Route path="/manga/schedule" element={<MangaSchedule />} />
      <Route path="/manga/community" element={<SharedCommunity />} />
      <Route path="/manga/community/:postId" element={<CommunityPostScreen />} />
      <Route path="/manga/profile" element={<SharedProfile />} />
      <Route path="/manga/:id" element={<MangaReader />} />
      <Route path="/manga/:id/details" element={<MangaDetailsScreen />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
