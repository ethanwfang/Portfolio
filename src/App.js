import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/navbar.js';
import Intro from './components/Intro/intro.js';
import Writing from './components/Writing/writing.js'; // Make sure to import your Writing component'
import Portfolio from './components/Portfolio/portfolio.js';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/writing" element={<Writing/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
      </Routes>
    </Router>
  );
}

export default App;
