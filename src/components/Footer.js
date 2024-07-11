// components/Footer.js

import React from "react";

const Footer = () => {
  return (
    <div>
      <div
        className="w-full border-b-2 border-gray-700"
        style={{ maxHeight: "1vh" }}></div>
      <footer className="bg-black text-gray-300 text-center py-4">
      <p>&copy; {new Date().getFullYear()} WSF. All rights reserved.</p>
    </footer>
    </div>
  );
};
export default Footer;
