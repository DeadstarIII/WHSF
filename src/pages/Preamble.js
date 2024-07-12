// src/Preamble/page.js
"use client";
import Link from "next/link";
import styles from "../app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function Preamble() {
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
      <title>WHSF - Preamble</title>
      <section
        className="text-gray-400 bg-gray-900 body-font"
        style={{ minHeight: contentHeight }}>
        <div className="container px-5 py-16 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-12 h-12 text-gray-400 mb-6"
              viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-xl text-gray-100">
              We, the students of Wesea (Western SouthEast Asia), coming
              together from the diverse regions of Northeast India and Northern
              parts of West Bengal, Chittagong, Mymensingh, parts of Sylhet in
              Bangladesh, and Kachin, Chin, and Naga areas of Myanmar, united by
              our common heritage and aspirations, solemnly resolve to form the
              Wesean High School Student Forum (WHSF), an autonomous
              organization under the Wesean Student Federation (WSF). This forum
              stands as a beacon of unity, integrity, and fraternity among all
              Wesean high school students. Guided by the undying spirit of
              solidarity, we dedicate ourselves to protecting indigenous rights,
              promoting our rich Wesean culture, and enhancing the educational
              and intellectual prowess of our student body. Resolved to
              dismantle the barriers of ethnonationalism and internal discord,
              we pledge to uphold the values of unity and integrity, fostering
              an environment where every voice is heard and valued. We commit to
              standing against all forms of division and strife among Weseans,
              ensuring a cohesive and harmonious community. As a non-political
              entity, we strive to maintain an inclusive and supportive
              atmosphere focused solely on academic and cultural growth. Through
              this forum, we vow to champion the collective interests of Wesean
              high school students, safeguarding our traditions and rights while
              paving the way for a future replete with academic excellence and
              cultural prosperity. On this historic day, the 25th of April 2024,
              we adopt, enact, and give to ourselves this constitution, binding
              ourselves to these principles for the advancement and unity of all
              Weseans.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-8 mb-6"></span>
            <h2 className="text-gray-400 font-semibold title-font tracking-wider text-lg">
              Wesean High School Student Forum
            </h2>
            <p className="text-gray-500 text-base">
              An autonomous entity under the Wesean Student Federation
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
