import React, { useState } from "react";
import Link from "next/link";

const Header = ({ onLinkClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    if (onLinkClick) onLinkClick();
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        {/* Logo */}
        <Link href="/" passHref>
          <div className="flex items-center space-x-3 cursor-pointer group">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-8 h-8 rounded-full group-hover:brightness-110 transition duration-300"
            />
          </div>
        </Link>

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex space-x-8">
          {["Home", "About", "Initiatives", "Contact", "Members"].map((item) => (
            <Link key={item} href={item === "Home" ? "/" : `/${item}`} passHref>
              <span className="text-sm md:text-base text-gray-600 hover:text-black font-medium transition-all duration-300 relative cursor-pointer">
                {item}
                {/* Underline Effect */}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 hover:w-full"></span>
              </span>
            </Link>
          ))}
        </nav>

        {/* Call-to-Action Button */}
        <div>
          <a
            href="https://eu.frms.link/g1phmty/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 text-sm md:text-base font-medium hover:bg-gray-800 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg rounded-lg">
            Join Us
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden flex flex-col items-center justify-center space-y-1 focus:outline-none"
          onClick={toggleMenu}>
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : "rotate-0"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : "rotate-0"
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-lg transition-transform duration-300 ${
          isMenuOpen ? "transform scale-y-100" : "transform scale-y-0"
        } origin-top`}
      >
        {["Home", "About", "Initiatives", "Contact", "Members"].map((item) => (
          <Link key={item} href={item === "Home" ? "/" : `/${item}`} passHref>
            <div
              className="py-3 px-6 text-gray-600 hover:bg-gray-100 hover:text-black transition duration-300 cursor-pointer"
              onClick={closeMenu}>
              {item}
            </div>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
