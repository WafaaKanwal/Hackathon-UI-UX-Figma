import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-[#EEEFFB] border-t-2 w-full mt-24 px-4 sm:px-6 md:px-8 lg:px-18 xl:px-44 pt-10 ">
        <div className="max-w-[1536px] mx-auto py-12 flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 ">
          {/* Left Section */}
          <div className="w-full lg:w-1/4">
            <h2 className="text-[#151875] text-xl sm:text-2xl font-bold mb-4">Hekto</h2>
            <div className="flex items-center mb-6">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full sm:w-[350px] py-2 px-8 rounded-md border border-[#E0E0E0] bg-white text-[#7E81A2] text-xs sm:text-sm focus:outline-none focus:ring focus:ring-[#7E33E0]"
              />
              <button className="px-4 sm:px-10 py-2 bg-[#FB4997] text-white text-xs sm:text-sm font-medium rounded-sm hover:bg-[#E94085] whitespace-nowrap">
                Sign Up
              </button>
            </div>
            <p className="text-[#7E81A2] text-xs sm:text-sm mb-1">Contact Info</p>
            <p className="text-[#7E81A2] text-xs sm:text-sm">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>

          {/* Categories Section */}
          <div className="w-full sm:w-1/2 lg:w-1/5  lg:ml-36">
            <h3 className="text-[#151875] text-base sm:text-lg font-bold mb-4">Categories</h3>
            <ul className="text-[#7E81A2] md:text-[16px] lg:text-[12px] space-y-3">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>

          {/* Customer Care Section */}
          <div className="w-full sm:w-1/2 lg:w-1/5">
            <h3 className="text-[#151875] text-base sm:text-lg font-bold mb-4">Customer Care</h3>
            <ul className="text-[#7E81A2] md:text-[16px] lg:text-[12px] space-y-3">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>

          {/* Pages Section */}
          <div className="w-full sm:w-1/2 lg:w-1/5">
            <h3 className="text-[#151875] text-base sm:text-lg font-bold mb-4">Pages</h3>
            <ul className="text-[#7E81A2] md:text-[16px] lg:text-[12px] space-y-3">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>Visual Composer Elements</li>
              <li>WooCommerce Pages</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#E7E4F8] py-4 px-4 sm:px-6 md:px-8 lg:px-48 xl:px-64">
        <div className="max-w-[1536px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Footer Text */}
          <p className="text-[#7E81A2] text-xs sm:text-sm">©Webecy - All Rights Reserved</p>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="#" className="bg-[#151875] text-white flex justify-center items-center rounded-xl w-5 h-5 sm:w-6 sm:h-6 hover:text-[#7E33E0]">
              <FaFacebookF size={12} />
            </a>
            <a href="#" className="bg-[#151875] text-white flex justify-center items-center rounded-xl w-5 h-5 sm:w-6 sm:h-6 hover:text-[#7E33E0]">
              <FaInstagram size={12} />
            </a>
            <a href="#" className="bg-[#151875] text-white flex justify-center items-center rounded-xl w-5 h-5 sm:w-6 sm:h-6 hover:text-[#7E33E0]">
              <FaTwitter size={12} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer