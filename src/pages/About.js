// src/page/About.js
"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../app/globals.css";

export default function About() {
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
      <title>WHSF - About Us</title>
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
            <h1 className="text-3xl font-bold text-white mb-6">
              WHSF Stance on Drugs, School Dropout, and Riots
            </h1>
            <p className="leading-relaxed text-xl text-gray-300 mb-8">
              The Wesean High School Student Forum (WHSF) stands firmly against
              the detrimental influences of drugs, school dropout, and
              participation in riots among teenagers. As representatives of the
              Wesean student community, we believe that these issues not only
              hinder individual growth but also tarnish the collective
              reputation of our region. Our mission is to foster an environment
              where students can thrive academically, culturally, and socially,
              free from the negative impacts of substance abuse and violence.
            </p>

            <p className="leading-relaxed text-xl text-gray-300 mb-8">
              Against Drugs: We unequivocally oppose the use of drugs among
              students. Substance abuse not only endangers the health and
              well-being of individuals but also disrupts the academic and
              social fabric of our communities. WHSF is committed to educating
              students about the dangers of drugs and promoting healthy,
              substance-free lifestyles. We support initiatives that provide
              counseling and rehabilitation services to those in need, ensuring
              that every student has the opportunity to achieve their full
              potential. WHSF condemns any organisation that recruit high
              schoolers for so called blockades and riots
            </p>

            <p className="leading-relaxed text-xl text-gray-300 mb-8">
              Preventing School Dropout: Dropping out of school has long-term
              detrimental effects on a student's future prospects and the
              overall development of the community. WHSF strives to keep
              students engaged and motivated in their education by offering
              academic support, mentorship programs, and extracurricular
              activities that make learning a rewarding and fulfilling
              experience. We believe that every student deserves the chance to
              complete their education and pursue their dreams.
            </p>

            <p className="leading-relaxed text-xl text-gray-300">
              Condemning Riots: Participation in riots and violent activities
              not only puts individuals at risk but also fosters a culture of
              fear and instability. WHSF condemns any form of violence and
              encourages students to resolve conflicts through dialogue and
              peaceful means. We advocate for creating safe and inclusive
              environments where every student feels heard and respected. As
              Weseans, we must strive to excel in all areas of life and
              demonstrate to the world the strength and resilience of our
              community.
            </p>

            <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-8 mb-6"></span>
            <h2 className="text-gray-400 font-semibold title-font tracking-wider text-lg">
              Monseng
            </h2>
            <p className="text-gray-500 text-base">Vice President</p>
          </div>
        </div>
      </section>
      <div
        className="w-full border-b-2 border-gray-800"
        style={{ maxHeight: "1vh" }}></div>
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
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601 20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <h1 className="text-3xl font-bold text-white mb-6">Preamble</h1>
            <p className="leading-relaxed text-xl text-gray-300 mb-8">
              The Wesean High School Student Forum (WHSF) is dedicated to
              promoting academic excellence, cultural enrichment, and social
              responsibility among high school students in Wesean. Our mission
              is to provide a platform for students to voice their concerns,
              engage in constructive dialogue, and contribute positively to
              their communities.
            </p>
            <p className="leading-relaxed text-xl text-gray-300 mb-8">
              WHSF aims to foster a sense of unity and purpose among students,
              encouraging them to strive for personal growth and to support one
              another in their educational journeys. We believe in the power of
              education to transform lives and communities, and we are committed
              to creating an environment where every student has the opportunity
              to succeed.
            </p>
            <p className="leading-relaxed text-xl text-gray-300">
              As members of WHSF, we pledge to uphold the values of integrity,
              respect, and excellence in all our endeavors. We stand together
              against any form of discrimination, violence, or injustice, and we
              work towards building a brighter future for all students in
              Wesean. Through our collective efforts, we aim to inspire positive
              change and to make a lasting impact on our schools and society.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-8 mb-6"></span>
            <h2 className="text-gray-400 font-semibold title-font tracking-wider text-lg">
              Wesean High School Student Forum
            </h2>
            <p className="text-gray-500 text-base">An autonomous entity under the Wesean Student Federation</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
