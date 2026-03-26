import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './screens/landing.jsx';
import Home from './screens/home.jsx';
import AnimePlayer from './screens/anime-player.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/anime/:id" element={<AnimePlayer />} />
    </Routes>
  );
};

export default App;
