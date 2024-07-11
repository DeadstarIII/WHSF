// components/Header.js

import Link from 'next/link';
import Image from 'next/image'; // Import next/image for optimized image loading

const Header = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font" style={{maxHeight : '12vh'}}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link className="flex title-font font-medium items-center text-white mb-4 md:mb-0" href="/">
       
            <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-full bg-purple-500" />
            <span className="ml-3 text-xl">WSF</span>
         
        </Link>
        
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-white" href="/">
            Home
          </Link>
          <Link className="mr-5 hover:text-white" href="/about">
           About us
          </Link>
          <Link className="mr-5 hover:text-white" href="#">
            Initiatives & Events
          </Link>
          <Link className="mr-5 hover:text-white" href="#">
          Partners
          </Link>
        </nav>
        
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe-JQg5-iN8MGvnfQrDXnbAoQiMNjdMewISWMISREc3PAKZiQ/viewform?pli=1" target="_blank"><button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Join WSF
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button></a>
      </div>
      <div className="w-full border-b-2 border-gray-800" style={{maxHeight:'1vh'}}></div>

    </header>
  );
};

export default Header;
