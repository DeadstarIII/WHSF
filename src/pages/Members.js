import React from "react";
import styles from "../app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Members = () => {
  const members = [
    { name: "Joshua Hmar", role: "President", image: "https://whsf-cdn.vercel.app/assets/joshua.png" },
    {
      name: "Alex Phukon",
      role: "Vice President",
      image: "https://whsf-cdn.vercel.app/assets/deadstar.png",
    },
    {
      name: "Rose Ruongneisong",
      role: "General Secretary",
      image: "https://whsf-cdn.vercel.app/assets/rose.png",
    },
    { name: "Monseng", role: "Speaker", image: "https://whsf-cdn.vercel.app/assets/monseng.png" },
    {
      name: "Emily Schrieber",
      role: "Education Secretary",
      image: "https://whsf-cdn.vercel.app/assets/emily.jpg",
    },

    {
      name: "Minoru Borphukon",
      role: "Public Relations Director",
      image: "https://whsf-cdn.vercel.app/assets/minoru.png",
    },
    {
      name: "Rituraj Dutta",
      role: "Cultural Secretary",
      image: "https://whsf-cdn.vercel.app/assets/rituraj.png",
    },
  ];

  return (
    <>
      <title>WHSF - Members</title>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <section className="text-gray-700 bg-white body-font relative flex-grow">
          <div className="container px-6 pt-4 pb-14 mx-auto">
            {/* Page Title */}
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900">
                Meet Our Team
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
                A team of passionate Wesean highschoolers who are committed to
                driving WHSF's vision forward.
              </p>
            </div>

            {/* Members Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {members.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-xl shadow-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl">
                  {/* Profile Image */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 object-cover rounded-full mb-4 shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-out hover:scale-105"
                  />
                  {/* Member Name */}
                  <h2 className="text-lg font-semibold text-gray-900">
                    {member.name}
                  </h2>
                  {/* Member Role */}
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Members;
