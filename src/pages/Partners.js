// src/pages/Events.js
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../app/globals.css"
import { useState, useEffect } from "react";

export default function Events() {
  const [contentHeight, setContentHeight] = useState(0);

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
    <>
      <Header />
      <title>WHSF - Events</title>
      <section className="text-gray-400 bg-gray-900 body-font" style={{ minHeight: contentHeight }}>
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl font-medium title-font text-white mb-12 text-center">Research Programs for High Schoolers</h1>
          <div className="flex flex-wrap -m-4 justify-center">
            <div className="p-4 md:w-2/3 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <p className="leading-relaxed mb-6 text-center">
                  To improve academic intellect and bolster research skills among high schoolers in the Wesean region, WSF's High school wing led by Joshua Hmar (President) has formally partnered with the Northeastern Centre for High School Research, <span className="text-purple-400">NECHR</span>.
                  <br />
                  <br />
                  Based on the understanding, the Forum for Wesean High Schoolers (a wing of WSF) shall nominate 4 students every six months to work on an independent Research project with a NECHR mentor (1 to 1 mentorship). For further information on the program, contact us at <span className="text-purple-400">whsf.enquiry@proton.me</span>.
                  <br />
                  <br />
                  If you would like to apply to this program, send us an email with your resume and a short note on why you would like to join the program.
                </p>
                <a className="inline-flex items-center justify-center w-full">
                  <span className="flex-grow flex flex-col pl-4 text-center">
                    <span className="title-font font-medium text-white">Joshua Hmar</span>
                    <span className="text-gray-500 text-sm">President</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
