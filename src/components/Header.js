// src/components/Header.js

import React, { useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";

const Header = ({ onLinkClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-white body-font bg-gray-900 relative">
      <div className="container mx-auto flex flex-wrap p-5 items-center">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/" passHref>
            <div className="flex items-center text-white cursor-pointer">
              <img
                src="/logo.png"
                alt="Logo"
                className="rounded-full bg-purple-500"
                width={40}
                height={40}
              />
              <span className="ml-3 text-xl font-medium">WHSF</span>
            </div>
          </Link>
          <button
            className="md:hidden ml-auto text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6 transition-transform duration-300"
              viewBox="0 0 24 24"
              style={{
                transform: isMenuOpen ? "rotate(90deg)" : "rotate(0)",
              }}
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <nav className="hidden md:flex md:ml-auto items-center text-base justify-center flex-grow">
          <Link className="mr-5 hover:text-purple-500" href="/" passHref>
            Home
          </Link>
          <Link className="mr-5 hover:text-purple-500" href="/About" passHref>
            About us
          </Link>
          <Link className="mr-5 hover:text-purple-500" href="/Partners" passHref>
            Partners
          </Link>
          <Link className="mr-5 hover:text-purple-500" href="/Contact" passHref>
            Contact us
          </Link>
        </nav>
        <div className="hidden md:flex md:ml-5 items-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe-JQg5-iN8MGvnfQrDXnbAoQiMNjdMewISWMISREc3PAKZiQ/viewform?pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-black border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-base"
          >
            Join us 
          </a>
        </div>
      </div>
      <div className="w-full border-b-2 border-gray-800"></div>
      {isMenuOpen && createPortal(
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg text-black relative" style={{ width: "40%", maxWidth: "500px" }}>
            <button
              className="absolute top-0 right-0 mt-4 mr-4 text-gray-900"
              onClick={toggleMenu}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <nav className="flex flex-col items-center">
              <Link className="mb-4 hover:text-purple-500" href="/" passHref>
                Home
              </Link>
              <Link className="mb-4 hover:text-purple-500" href="/About" passHref>
                About us
              </Link>
              <Link className="mb-4 hover:text-purple-500" href="/Partners" passHref>
                Partners
              </Link>
              <Link className="mb-4 hover:text-purple-500" href="/Contact" passHref>
                Contact us
              </Link>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe-JQg5-iN8MGvnfQrDXnbAoQiMNjdMewISWMISREc3PAKZiQ/viewform?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gray-900 text-white border-0 py-2 px-4 focus:outline-none hover:bg-gray-700 rounded text-base"
              >
                Join us
              </a>
            </nav>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
};

export default Header;
