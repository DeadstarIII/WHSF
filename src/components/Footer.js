// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <>
      {/* Divider outside the footer */}
      <div className="w-full border-t border-gray-200"></div>
      <footer className="bg-white text-gray-900 text-center py-6 shadow-md z-0">
        <p>&copy; {new Date().getFullYear()} WHSF</p>
      </footer>
    </>
  );
};

export default Footer;
