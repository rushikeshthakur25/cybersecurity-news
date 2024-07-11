import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Cybersecurity News</div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-400">About</Link>
          <Link to="/daily-tips" className="text-white hover:text-gray-400">Daily Cyber Tips</Link>
          <Link to="/hacking-tools" className="text-white hover:text-gray-400">Hacking Tools</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
