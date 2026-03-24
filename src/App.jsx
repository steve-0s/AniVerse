import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './screens/landing.jsx';
import Home from './screens/home.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
