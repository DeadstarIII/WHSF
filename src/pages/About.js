import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../app/globals.css";



export default function About() {
  return (
    <>
    <title>WHSF - About Us</title>
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <section className="text-gray-700 bg-white body-font relative flex-grow">
        <div className="container px-6 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">
              About Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
              Learn about our mission, vision, and the values that guide us in making a difference. At WHSF, we stand for progress, unity, and the well-being of our community.
            </p>
          </div>

          <div className="lg:w-2/3 mx-auto bg-gray-100 p-8 rounded-xl shadow-lg">
            <div className="text-gray-800">
              <h2 className="text-lg font-semibold mb-4">Our Mission</h2>
              <p className="mb-6">
                At WHSF, our mission is to empower communities by fostering sustainable growth and providing access to essential resources. We are committed to guiding individuals toward a brighter and more fulfilling future.
              </p>

              <h2 className="text-lg font-semibold mb-4">Our Vision</h2>
              <p className="mb-6">
                Our vision is to build a society free from the destructive impacts of drug abuse, school dropout, and social unrest. We strive to inspire positive action and unite communities in a shared goal of peace, education, and progress.
              </p>

              <h2 className="text-lg font-semibold mb-4">Taking a Stand</h2>
              <p className="mb-6">
                WHSF actively works against:
              </p>
              <ul className="list-disc ml-5 mb-6">
                <li className="mb-2">
                  <strong>Drug Usage:</strong> We aim to educate and empower individuals to resist the harmful effects of drugs through awareness campaigns and community support programs.
                </li>
                <li className="mb-2">
                  <strong>School Dropout:</strong> Education is a fundamental right, and we are dedicated to ensuring every child stays in school and reaches their potential. We collaborate with schools, families, and local leaders to create pathways to success.
                </li>
                <li className="mb-2">
                  <strong>Riots and Violence:</strong> We advocate for peaceful resolutions to conflict and promote harmony through dialogue, workshops, and community engagement initiatives.
                </li>
              </ul>

              <h2 className="text-lg font-semibold mb-4">Our Values</h2>
              <ul className="list-disc ml-5">
                <li className="mb-2">
                  <strong>Integrity:</strong> We uphold the highest standards of honesty and ethics in all our actions.
                </li>
                <li className="mb-2">
                  <strong>Collaboration:</strong> We believe in the power of working together to achieve common goals.
                </li>
                <li className="mb-2">
                  <strong>Empowerment:</strong> We strive to uplift individuals and communities through our initiatives.
                </li>
                <li className="mb-2">
                  <strong>Resilience:</strong> We face challenges head-on and work tirelessly to overcome obstacles.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  </>
  );
}
