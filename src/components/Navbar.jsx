import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import logo from '../images/logo.png';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full bg-transparent backdrop-filter dark:text-white backdrop-blur-lg z-50 ${darkMode ? 'dark' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-10" />
          <span className="text-2xl font-bold">BookAI</span>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="block lg:hidden text-gray "
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className={`hidden lg:flex lg:space-x-8 text-lg ${isOpen ? 'block' : 'hidden'}`}>
          <li><a href="#features" className="hover:text-yellow-300">Features</a></li>
          <li><a href="#how-it-works" className="hover:text-yellow-300">Sample Books</a></li>
          <li><a href="#pricing" className="hover:text-yellow-300">Pricing</a></li>
          <li><a href="#models" className="hover:text-yellow-300">Reviews</a></li>
        </ul>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="space-y-4 text-lg">
            <li><a href="#features" className="block hover:text-yellow-300">Features</a></li>
            <li><a href="#how-it-works" className="block hover:text-yellow-300">Sample Books</a></li>
            <li><a href="#pricing" className="block hover:text-yellow-300">Pricing</a></li>
            <li><a href="#models" className="block hover:text-yellow-300">Reviews</a></li>
          </ul>
        </div>

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
