// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 text-center py-6 shadow-md">
      {/* Divider inside the footer */}
      <div className="w-full border-t border-gray-200 mb-4"></div>
      <p>&copy; {new Date().getFullYear()} WHSF</p>
    </footer>
  );
};

export default Footer;
