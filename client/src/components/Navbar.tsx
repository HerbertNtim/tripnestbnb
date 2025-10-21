"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiUser } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white border-b z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-airbnb">
          Trip-Nest
        </Link>

        {/* Center Search (hidden on mobile) */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-80">
          <input
            type="text"
            placeholder="Search destinations"
            className="bg-transparent outline-none flex-1 text-sm text-gray-700"
          />
        </div>

        {/* User Section */}
        <div className="flex items-center space-x-4">
          <button
            className="hidden md:flex items-center gap-2 border border-gray-300 rounded-full px-3 py-2 hover:shadow-md transition"
          >
            <FiUser size={18} />
            <span className="text-sm">Login</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 border border-gray-300 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm px-6 py-4 space-y-3">
          <input
            type="text"
            placeholder="Search destinations"
            className="w-full bg-gray-100 rounded-full px-4 py-2 outline-none"
          />
          <Link href="/login" className="block text-gray-700 font-medium">
            Login
          </Link>
          <Link href="/signup" className="block text-gray-700 font-medium">
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
