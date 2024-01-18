import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Portraits from './components/Portraits';
import Places from './components/Places';
import Music from './components/Music';
import Africa from './components/Africa';
import NewYork from './components/NewYork';
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
          <Route path="/places" element={<Places />} />
          <Route path="/music" element={<Music />} />
          <Route path="/africa" element={<Africa />} />
          <Route path="/newyork" element={<NewYork />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
