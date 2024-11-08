import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './Page/HomePage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/refuge" element={<div>Refuge Page</div>} />
          <Route path="/animaux" element={<div>Animaux Page</div>} />
          <Route path="/adoption" element={<div>Adoption Page</div>} />
          <Route path="/membres" element={<div>Membres Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
