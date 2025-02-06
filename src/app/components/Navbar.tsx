"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Homemenu from './Homemenu'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-28 xl:px-[13rem] 2xl:px-60 h-auto md:h-16 py-4 md:py-0">
        {/* Logo Section */}
        <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
          <Link href="/hekto">
            <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#000] lg:ml-[-2rem] xl:ml-0 2xl:ml-1">Hekto</h1>
          </Link>
          <button
            className="md:hidden text-[#0D0E43]"
            onClick={toggleSidebar}
            aria-label="Toggle menu"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`
          flex flex-col md:flex-row items-center
          space-y-4 md:space-y-0 md:space-x-3 lg:space-x-3 lg:mr-[3rem] xl:space-x-4 xl:mr-[4rem] 2xl:space-x-6 2xl:mr-[1rem]
          ${isSidebarOpen ? 'block' : 'hidden'} md:flex
          w-full md:w-auto
        `}>
          <div className='2xl:mr-0 xl:mr-1 lg:mr-0 md:mr-2 xs:ml-2 md:ml-0'><Homemenu /></div>
          <Link href="/extra" className="text-[#0D0E43] hover:text-[#FB2E86] text-sm md:text-xs lg:text-base">
            Pages
          </Link>
          <Link href="/productdetails" className="text-[#0D0E43] hover:text-[#FB2E86] text-sm md:text-xs lg:text-base">
            Products
          </Link>
          <Link href="/blog" className="text-[#0D0E43] hover:text-[#FB2E86] text-sm md:text-xs lg:text-base">
            Blog
          </Link>
          <Link href="/shoplist" className="text-[#0D0E43] hover:text-[#FB2E86] text-sm md:text-xs lg:text-base">
            Shop
          </Link>
          <Link href="/contact" className="text-[#0D0E43] hover:text-[#FB2E86] text-sm md:text-xs lg:text-base">
            Contact
          </Link>
        </div>

        {/* Search Section */}
        <div className={`flex items-center w-full md:w-auto mt-4 md:mt-0 ${isSidebarOpen ? 'block' : 'hidden'} md:flex`}>
          <input
            type="text"
            placeholder=""
            className="border border-[#E7E6EF] rounded-l-sm h-8 md:h-9 w-full md:w-[180px] lg:h-9 lg:w-[210px] xl:w-[200px] 2xl:w-[250px] px-3 focus:outline-none"
          />
          <button className="bg-[#FB2E86] text-white h-8 md:h-9 lg:h-9 px-3 rounded-r-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar