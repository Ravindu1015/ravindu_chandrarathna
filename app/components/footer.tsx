"use client";
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Ravindu Prabashwara Chandrarathna. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
