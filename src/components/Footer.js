// components/Footer.js

import React from "react";

const Footer = () => {
  return (
    <div>
 <footer className="bg-black text-gray-300 text-center py-6">
      <p>&copy; {new Date().getFullYear()} WHSF. All rights reserved.</p>
    </footer>
    </div>
  );
};
export default Footer;
