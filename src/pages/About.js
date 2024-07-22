// src/page/About.js
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../app/globals.css";
import Divider from "@/components/Divider";
import Section from "@/components/Section";

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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Section
          title="About Us"
          description="About Us The Wesean High School Student Forum (WHSF) is an autonomous entity under the Wesean Student Federation (WSF). We are dedicated to empowering high school students across the Wesea region by fostering advocacy, education, and leadership. Our primary focus is to create a supportive and dynamic environment where students can thrive academically, personally, and socially, contributing to the betterment of their communities."
          author="Wesean High School Student Forum"
          post="An autonomous entity under the Wesean Student Federation"
        />
        <Divider />
        <Section
          title="Our Vision"
          description="Our Vision We envision a future where Wesean high school students are not only well-educated but also proactive leaders, passionate advocates, and responsible citizens. We aim to cultivate a generation that takes pride in their cultural heritage while being equipped to face global challenges."
          author="Wesean High School Student Forum"
          post="An autonomous entity under the Wesean Student Federation"
        />
        <Divider />
        <Section
          title="WHSF Stance on Drugs, School Dropout, and Riots"
          description="The Wesean High School Student Forum (WHSF) stands firmly against the detrimental influences of drugs, school dropout, and participation in riots among teenagers. As representatives of the Wesean student community, we believe that these issues not only hinder individual growth but also tarnish the collective reputation of our region. Our mission is to foster an environment where students can thrive academically, culturally, and socially, free from the negative impacts of substance abuse and violence."
          author="Monseng"
          post="Vice President"
        />
        <Divider />
        <motion.section
          className="text-gray-400 bg-gray-900 body-font"
          style={{ minHeight: contentHeight }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container px-5 py-16 mx-auto">
            <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block w-12 h-12 text-gray-400 mb-6"
                viewBox="0 0 975.036 975.036"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601 20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </motion.svg>
              <h1 className="text-3xl font-bold text-white mb-6">Preamble</h1>
              <motion.p
                className="leading-relaxed text-xl text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                The Wesean High School Student Forum (WHSF) is dedicated to
                promoting academic excellence, cultural enrichment, and social
                responsibility among high school students in Wesean. Our mission
                is to provide a platform for students to voice their concerns,
                engage in constructive dialogue, and contribute positively to
                their communities.
              </motion.p>
              <motion.p
                className="leading-relaxed text-xl text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                WHSF aims to foster a sense of unity and purpose among students,
                encouraging them to strive for personal growth and to support one
                another in their educational journeys. We believe in the power of
                education to transform lives and communities, and we are committed
                to creating an environment where every student has the opportunity
                to succeed.
              </motion.p>
              <motion.p
                className="leading-relaxed text-xl text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                As members of WHSF, we pledge to uphold the values of integrity,
                respect, and excellence in all our endeavors. We stand together
                against any form of discrimination, violence, or injustice, and we
                work towards building a brighter future for all students in
                Wesean. Through our collective efforts, we aim to inspire positive
                change and to make a lasting impact on our schools and society.
              </motion.p>
              <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-8 mb-6"></span>
              <h2 className="text-gray-400 font-semibold title-font tracking-wider text-lg">
                Wesean High School Student Forum
              </h2>
              <p className="text-gray-500 text-base">
                An autonomous entity under the Wesean Student Federation
              </p>
            </div>
          </div>
        </motion.section>
      </motion.div>
      <Footer />
    </>
  );
}
