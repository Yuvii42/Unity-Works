import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import communityIcon from "../assets/image.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className={`p-4 shadow-md transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-blue-600 text-white"}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center space-x-2">
        <img src={communityIcon} alt="Community Icon" className="w-5 h-5 mr-2" />
          <span className="hover:text-gray-300 transition-all duration-200" >Unity-Works</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link to="/" className="hover:text-gray-300 transition-all">Home</Link>
          <Link to="/projects" className="hover:text-gray-300 transition-all">Projects</Link>
          <Link to="/profile" className="hover:text-gray-300 transition-all">Profile</Link>
          <Link to="/admin" className="hover:text-gray-300 transition-all">Admin</Link>
        </div>

        {/* Dark Mode Toggle & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <button onClick={() => setDarkMode(!darkMode)} className="text-lg">
            {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 dark:bg-gray-800 text-center p-4 space-y-4 mt-2 rounded-md">
          <Link to="/" className="block hover:text-gray-300 transition-all" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/projects" className="block hover:text-gray-300 transition-all" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/profile" className="block hover:text-gray-300 transition-all" onClick={() => setIsOpen(false)}>Profile</Link>
          <Link to="/admin" className="block hover:text-gray-300 transition-all" onClick={() => setIsOpen(false)}>Admin</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
