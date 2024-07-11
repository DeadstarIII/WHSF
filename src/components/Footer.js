// components/Footer.js

import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} WSF. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default Footer