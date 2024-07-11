// components/Header.js

import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-black text-gray-300">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link className="flex title-font font-medium items-center mb-2 md:mb-0" href="/">
          <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-full" />
          <span className="ml-3 text-xl text-white">WSF</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-white transition duration-200" href="/">Home</Link>
          <Link className="mr-5 hover:text-white transition duration-200" href="/about">About us</Link>
          <Link className="mr-5 hover:text-white transition duration-200" href="#">Initiatives & Events</Link>
          <Link className="mr-5 hover:text-white transition duration-200" href="#">Partners</Link>
        </nav>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe-JQg5-iN8MGvnfQrDXnbAoQiMNjdMewISWMISREc3PAKZiQ/viewform?pli=1" target="_blank">
          <button className="inline-flex items-center bg-white text-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 transition duration-200">
            Join WSF
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
