import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
     
     <div className="bg-[#EEEFFB] border-t-2 w-full mt-24 px-[8rem] pt-10">
  <div className="max-w-[1536px] mx-auto px-8 py-12 flex justify-between gap-12">
    {/* Left Section */}
    <div>
      <h2 className="text-[#151875] text-2xl font-bold mb-4">Hekto</h2>
      <div className="flex items-center gap-4 mb-6">
        <input
          type="email"
          placeholder="Enter Email Address"
          className="w-[250px] py-2 px-3 rounded-md border border-[#E0E0E0] bg-white text-[#7E81A2] text-sm focus:outline-none focus:ring focus:ring-[#7E33E0]"
        />
        <button className="px-10 py-2 bg-[#FB4997] text-white text-sm font-medium rounded-sm hover:bg-[#E94085]">
          Sign Up
        </button>
      </div>
      <p className="text-[#7E81A2] text-sm mb-1">Contact Info</p>
      <p className="text-[#7E81A2] text-sm">
        17 Princess Road, London, Greater London NW1 8JR, UK
      </p>
    </div>

    {/* Categories Section */}
    <div>
      <h3 className="text-[#151875] text-lg font-bold mb-4">Categories</h3>
      <ul className="text-[#7E81A2] text-sm space-y-3">
        <li>Laptops & Computers</li>
        <li>Cameras & Photography</li>
        <li>Smart Phones & Tablets</li>
        <li>Video Games & Consoles</li>
        <li>Waterproof Headphones</li>
      </ul>
    </div>

    {/* Customer Care Section */}
    <div>
      <h3 className="text-[#151875] text-lg font-bold mb-4">Customer Care</h3>
      <ul className="text-[#7E81A2] text-sm space-y-3">
        <li>My Account</li>
        <li>Discount</li>
        <li>Returns</li>
        <li>Orders History</li>
        <li>Order Tracking</li>
      </ul>
    </div>

    {/* Pages Section */}
    <div>
      <h3 className="text-[#151875] text-lg font-bold mb-4">Pages</h3>
      <ul className="text-[#7E81A2] text-sm space-y-3">
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
<div className="bg-[#EEEFFB] py-4 px-[16rem]">
  <div className="max-w-[1536px] mx-auto flex justify-between items-center px-8">
    {/* Footer Text */}
    <p className="text-[#7E81A2] text-sm">©Webecy - All Rights Reserved</p>

    {/* Social Media Icons */}
    <div className="flex gap-4">
      <a href="#" className="bg-[#151875] text-white flex justify-center items-center  rounded-xl w-6 h-6 hover:text-[#7E33E0]">
        <FaFacebookF size={13} />
      </a>
      <a href="#" className="bg-[#151875] text-white flex justify-center items-center  rounded-xl w-6 h-6 hover:text-[#7E33E0]">
        <FaInstagram size={13} />
      </a>
      <a href="#" className="bg-[#151875] text-white flex justify-center items-center  rounded-xl w-6 h-6 hover:text-[#7E33E0]">
        <FaTwitter size={13} />
      </a>
    </div>
  </div>
</div>
{/* End of Bottom Section */}



    </>
  )
}

export default Footer


// <footer className="text-gray-600 body-font bg-[#E7E4F8]">
// <div className="container px-5 py-24 mx-auto mt-[40px]">
//   <div className="flex flex-wrap md:text-left text-center order-first">


//   <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//       <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
//       Hekto
//       </h2>
//       <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
//         <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
//           <label
//             htmlFor="footer-field"
//             className="leading-7 text-sm text-gray-600"
//           >
//           </label>
//           <input
//             type="text"
//             id="footer-field"
//             placeholder='Enter Email Address'
//             name="footer-field"
//             className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-xs outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//           />
//         </div>
//         <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
//           Sign-Up
//         </button>
//       </div>
//       <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
//       Contact Info
//         <br className="lg:block hidden" />
//         17 Princess Road, London, Greater London NW1 8JR, UK
//       </p>
//     </div>

//     <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//       <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3 ml-6">
//         CATEGORIES
//       </h2>
//       <nav className="list-none mb-10">
//         <li>
//           <a className="text-gray-600 hover:text-gray-800  ml-6">Laptops & Computers</a>
//         </li>
//         <li>
//           <a className="text-gray-600 hover:text-gray-800 ml-6">Cameras & Photography</a>
//         </li>
//         <li>
//           <a className="text-gray-600 hover:text-gray-800 ml-6">Smart Phones & Tablets</a>
//         </li>
//         <li>
//           <a className="text-gray-600 hover:text-gray-800 ml-6">Video Games & Consoles</a>
//         </li>
//         <li>
//           <a className="text-gray-600 hover:text-gray-800 ml-6">Waterproof Headphones</a>
//         </li>
//       </nav>
//     </div>
//     <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//       <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
//       Customer Care
//       </h2>
//       <nav className="list-none mb-10">
//         <li>
//           <a className="text-gray-600 hover:text-gray-800">My Account</a>
//         </li>
//         <li>
//           <a className="text-gray-600 hover:text-gray-800">Discount</a>
//         </li>
//         <li>
//           <a className="text-gray-600 hover:text-gray-800">Returns</a>
//         </li>
//         <li>
//           <a className="text-gray-600 hover:text-gray-800">Orders History</a>
//         </li>
//         <li>
//           <a className="text-gray-600 hover:text-gray-800">Order Tracking</a>
//         </li>
//       </nav>
//     </div>
//     <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//       <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
//       Pages
//       </h2>
//       <nav className="list-none mb-10">
//         <li>
//           <a className="text-gray-600 hover:text-gray-800">Blog</a>
//         </li>
//         <li>
//           <a className="text-gray-600 hover:text-gray-800">Browse the Shop</a>
//         </li>
//         <li>
//           <a className="text-gray-600 hover:text-gray-800">Category</a>
//         </li>
//         <li>
//           <a className="text-gray-600 hover:text-gray-800">Pre-Built Pages</a>
//         </li>
//         <li>
//           <a className="text-gray-600 hover:text-gray-800">Visual Composer Elements</a>
//         </li>
//         <li>
//           <a className="text-gray-600 hover:text-gray-800">WooCommerce Pages</a>
//         </li>
//       </nav>
//     </div>
    
//   </div>
// </div>
// <div className="bg-[#E7E4F8]">
//   <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
    
//     <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
//       © 2024 Hekto —
//       <a
//         href="https://twitter.com/knyttnev"
//         rel="noopener noreferrer"
//         className="text-gray-600 ml-1"
//         target="_blank"
//       >
//         @Right Reserved
//       </a>
//     </p>
//     <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
//    <div className='text-3xl text-gray-900" '><FaFacebook  /></div> 
//     <div className='text-3xl ml-3 text-gray-900'><RxInstagramLogo /></div>
//       <div className='text-3xl ml-3 text-gray-900'><FaLinkedin  /></div>

//   </span>
//   </div>
// </div>
// </footer>
