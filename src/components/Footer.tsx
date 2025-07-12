import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full border-t border-red-800 bg-gradient-to-r from-red-500 to-orange-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
        <Link
          href="/"
          className="text-lg font-bold tracking-wide hover:text-gray-200 transition-colors"
        >
          SAVORLY
        </Link>
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} Savorly. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
