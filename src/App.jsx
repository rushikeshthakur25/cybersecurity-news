import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import DailyTips from './pages/DailyTips';
import HackingTools from './pages/HackingTools';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/daily-tips" element={<DailyTips />} />
          <Route path="/hacking-tools" element={<HackingTools />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
