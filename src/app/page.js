// src/app/page.js

"use client"; // This is a client component

import { useEffect, useState } from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import styles from '../css/home.css'; // Import CSS file

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Ensure component is mounted before rendering

  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-y-hidden" style={{ minHeight: 'calc(100vh - 8rem)' }}>
      {/* Assuming 8rem accounts for both header and footer heights */}
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Wesea
          </h1>
          <p className="mb-8 leading-relaxed text-gray-400">
            Wesea, short for Western South East Asia. It is known for its rich cultural diversity, boasting over 220 ethnic groups and a multitude of Tibeto-Burman languages. The region is predominantly Christian, reflecting its religious diversity and cultural richness.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded animate-fade-in"
            src="https://dummyimage.com/720x600"
            alt="Wesea"
            width={720}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
