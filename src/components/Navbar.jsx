import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import logo from '../images/logo.png';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };
// text-gray-900 dark:text-white
  return (
    <nav className="fixed w-full bg-transparent backdrop-filter dark:text-white backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src= {logo}  alt="Logo" className="h-10" />
          <span className="text-2xl font-bold">BookAI</span>
        </div>
        <ul className="flex  space-x-8 text-lg">
          <li><a href="#features" className="hover:text-yellow-300">Features</a></li>
          <li><a href="#how-it-works" className="hover:text-yellow-300">How It Works</a></li>
          <li><a href="#pricing" className="hover:text-yellow-300">Pricing</a></li>
          <li><a href="#models" className="hover:text-yellow-300">Models</a></li>
        </ul>
        <div className="flex items-center space-x-4">
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg"
            onClick={toggleDarkMode}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <a href="/login" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Login / Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
