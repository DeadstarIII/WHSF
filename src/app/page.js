// src/app/page.js
"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [contentHeight, setContentHeight] = useState("100vh");

  useEffect(() => {
    const handleResize = () => {
      const headerHeight = document.querySelector("header").offsetHeight;
      const footerHeight = document.querySelector("footer").offsetHeight;
      setContentHeight(`calc(100vh - ${headerHeight}px - ${footerHeight}px)`);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className="text-gray-400 bg-gray-900 body-font"
      style={{ minHeight: contentHeight }}>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10">
          <img
            className="object-cover object-center rounded-lg"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-6xl text-4xl mb-4 font-medium text-white">
            Discover Wesea
          </h1>
          <p className="mb-8 leading-relaxed text-gray-400">
            Wesea, short for Western South East Asia, is a region known for its
            rich cultural diversity, boasting over 220 ethnic groups and a
            multitude of. Explore its vibrant traditions and landscapes.
          </p>
        </div>
      </div>
    </section>
  );
}
