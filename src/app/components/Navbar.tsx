import React from 'react'
import Link from 'next/link'
import Homemenu from './Homemenu'

const Navbar = () => {
  return (
    <>
        <div className="flex items-center justify-between mx-auto w-[65%] h-16">
      {/* Logo Section */}
      
      <Link href="/hekto">
      <div className="flex items-center ">
        <h1 className="text-[32px] font-bold text-[#000] ">Hekto</h1>
      </div>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6 mr-24">
        {/* <div className="relative cursor-pointer mr-[14px] text-[#FB2E86] hover:text-[#0D0E43]">
         <Link href="/"> <span>Home</span></Link>
          <svg
            className="absolute right-[-16px] top-[4.5px] w-4 h-4 "
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
        </div> */}


        <Homemenu />
        <Link href="/extra" className="text-[#0D0E43] hover:text-[#FB2E86]">
          Pages
        </Link>
        <Link href="/productdetails" className="text-[#0D0E43] hover:text-[#FB2E86]">
          Products
        </Link>
        <Link href="/blog" className="text-[#0D0E43] hover:text-[#FB2E86]">
          Blog
        </Link>
        <Link href="/shoplist" className="text-[#0D0E43] hover:text-[#FB2E86]">
          Shop
        </Link>
        <Link href="/contact" className="text-[#0D0E43] hover:text-[#FB2E86]">
          Contact
        </Link>
      </div>

      {/* Search Section */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder=""
          className="border border-[#E7E6EF] rounded-l-sm h-9 w-[244px] px-3 focus:outline-none"
        />
        <button className="bg-[#FB2E86] text-white h-9 px-3 rounded-r-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
    </div>
    </>
  )
}

export default Navbar
