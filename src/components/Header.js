// src/components/Header.js

import React from "react";
import Link from "next/link";

const Header = ({ onLinkClick }) => {
  return (
    <header
      className="text-gray-400 bg-gray-900 body-font"
      style={{ maxHeight: "12vh" }}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" passHref>
          <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img
              src="/logo.png"
              alt="Logo"
              className="rounded-full bg-purple-500"
              width={40}
              height={40}
            />
            <span className="ml-3 text-xl">WHSF</span>
          </div>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-white" href="/" passHref>
            Home
          </Link>
          <Link className="mr-5 hover:text-white" href="/About" passHref>
            About us
          </Link>
          <Link className="mr-5 hover:text-white" href="/IE" passHref>
            Initiatives & Events
          </Link>
          <Link className="mr-5 hover:text-white" href="/Partners" passHref>
            Partners
          </Link>
          <Link className="mr-5 hover:text-white" href="/Preamble" passHref>
            Preamble
          </Link>
        </nav>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe-JQg5-iN8MGvnfQrDXnbAoQiMNjdMewISWMISREc3PAKZiQ/viewform?pli=1"
          target="_blank"
          rel="noopener noreferrer">
          <button className="inline-flex items-center bg-white text-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 transition duration-200">
            Join WSF
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </a>
      </div>
      <div
        className="w-full border-b-2 border-gray-800"
        style={{ maxHeight: "1vh" }}></div>
    </header>
  );
};

export default Header;
