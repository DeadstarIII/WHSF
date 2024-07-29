// components/Footer.js

import React from "react";

const Footer = () => {
  return (
    <div>
      <div
        className="w-full border-b-2 border-gray-800"
        style={{ maxHeight: "1vh" }}></div>
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} WHSF</p>
      </footer>
    </div>
  );
};
export default Footer;
