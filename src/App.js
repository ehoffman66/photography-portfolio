import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Portraits from './components/Portraits';
import Events from './components/Events';
import Music from './components/Music';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <Routes>
          <Route path="/" element={<Portraits />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portraits" element={<Portraits />} />
          <Route path="/events" element={<Events />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
