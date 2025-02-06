"use client";
import React, { useState } from "react";
import Link from "next/link";

const DropdownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className="relative inline-block text-left z-50"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      {/* Home Link */}
      <div className="bg-white py-4 px-0 ml-[-2rem] cursor-pointer text-[#FB2E86] hover:text-[#7E33E0]">
        <Link href="/">
          <span className="cursor-pointer ">
            Home
          </span>
          <svg
            className="absolute right-[-16px] top-[0px] mt-[1.2rem] w-4 h-4 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </Link>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div
          className="absolute left-[-5rem] mt-[-1rem] w-56 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 z-50"
          onMouseEnter={() => setIsDropdownOpen(true)} // Keep menu open
          onMouseLeave={() => setIsDropdownOpen(false)} // Close on leave
        >
          <ul className="text-gray-600">
          <li className="hover:bg-[#7E33E0] hover:text-white px-4 py-2">
              <Link href="/hekto">
                <span className="block">Hekto</span>
              </Link>
            </li>
            <li className="hover:bg-[#7E33E0] hover:text-white px-4 py-2">
              <Link href="/about">
                <span className="block">About us</span>
              </Link>
            </li>
            <li className="hover:bg-[#7E33E0] hover:text-white px-4 py-2">
              <Link href="/account">
                <span className="block">Account</span>
              </Link>
            </li>
            <li className="hover:bg-[#7E33E0] hover:text-white px-4 py-2">
              <Link href="/shoplist">
                <span className="block">Shoplist</span>
              </Link>
            </li>
            <li className="hover:bg-[#7E33E0] hover:text-white px-4 py-2">
              <Link href="/singleblog">
                <span className="block">Single Blog</span>
              </Link>
            </li>
            <li className="hover:bg-[#7E33E0] hover:text-white px-4 py-2">
              <Link href="/shoplistsidebar">
                <span className="block">Shop list sidebar</span>
              </Link>
            </li>
            
            <li className="hover:bg-[#7E33E0] hover:text-white px-4 py-2 ">
              <Link href="/faq">
                <span className="block">Faq</span>
              </Link>
            </li>
            <li className="hover:bg-[#7E33E0] hover:text-white px-4 py-2">
              <Link href="/grid">
                <span className="block">Grid</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
