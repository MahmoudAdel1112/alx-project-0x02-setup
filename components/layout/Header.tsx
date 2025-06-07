import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center space-x-8">
          <Link
            href="/home"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
          >
            About
          </Link>
          <Link
            href="/posts"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
          >
            Posts
          </Link>
          <Link
            href="/users"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
          >
            users
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
