import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Carticon from './Carticon'

const Navbar = () => {
  const user = false;

  return (
    <nav className="w-full border-b border-red-800 bg-gradient-to-r from-red-400 via-red-500 to-red-700  text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:py-6">
        {/* Left Links */}
        <div className="hidden md:flex gap-8 flex-1 text-sm md:text-base">
          <Link href="/" className="hover:text-gray-200 transition-colors">
            Homepage
          </Link>
          <Link href="/menu" className="hover:text-gray-200 transition-colors">
            Menu
          </Link>
          <Link href="/contact" className="hover:text-gray-200 transition-colors">
            Contact
          </Link>
        </div>

        {/* Logo */}
        <div className="flex-1 text-center">
          <Link
            href="/"
            className="text-2xl md:text-3xl font-extrabold tracking-widest text-white"
          >
            SAVORLY
          </Link>
        </div>

        {/* Menu icon on mobile */}
        <div className="md:hidden">
          <Menu />
        </div>

        {/* Right Links */}
        <div className="hidden md:flex gap-6 items-center justify-end flex-1">
          <Carticon />
          {!user ? (
            <Link href="/login" className="hover:text-gray-200 transition-colors">
              Login
            </Link>
          ) : (
            <Link href="/orders" className="hover:text-gray-200 transition-colors">
              Orders
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
