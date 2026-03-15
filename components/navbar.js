import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-purple-700 to-indigo-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide">
          URL_shortNER
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-gray-200 transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-gray-200 transition">
            About
          </Link>

          <Link href="/shorten" className="hover:text-gray-200 transition">
            Shorten
          </Link>

          <Link href="/contact" className="hover:text-gray-200 transition">
            Contact
          </Link>

          {/* CTA Button */}
          <Link
            href="/shorten"
            className="bg-white text-purple-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Try Now
          </Link>

          <Link
            href="https://github.com"
            className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-purple-700 transition"
          >
            GitHub
          </Link>
        </div>
      </div>
    </nav>
  );
}