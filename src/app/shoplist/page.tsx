import React from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";


import Link from "next/link";
export default function ShopList() {
  const products = [
    {
      id: 1,
      name: "Accumsan tincidunt",
      image: "/images/s1.png",
      price: "$49.00",
      discountedPrice: "$39.00",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 2,
      name: "In nulla",
      image: "/images/s2.png",
      price: "$59.00",
      discountedPrice: "$45.00",
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 3,
      name: "Vel sem",
      image: "/images/s3.png",
      price: "$75.00",
      discountedPrice: "$65.00",
      rating: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 4,
      name: "Porttitor cum",
      image: "/images/s4.png",
      price: "$99.00",
      discountedPrice: "$85.00",
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 5,
      name: "Nunc in",
      image: "/images/s5.png",
      price: "$120.00",
      discountedPrice: "$99.00",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 6,
      name: "Vitae facilisis",
      image: "/images/s6.png",
      price: "$39.00",
      discountedPrice: "$25.00",
      rating: 2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 7,
      name: "Curabitur lectus",
      image: "/images/s7.png",
      price: "$69.00",
      discountedPrice: "$49.00",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
  ];

  return (
    <div className="min-h-screen py-10">
{/* Rectangle Section */}
<div className="mt-[-40px] relative w-full h-[240px] bg-[#F6F5FF]">
 
 

<h1
  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#151875] font-bold text-center text-[36px]  sm:ml-[-150px] sm:mt-[-20px] sm:text-[36px] md:text-[36px] md:ml-[-220px] md:mt-[-20px] lg:text-[36px] lg:ml-[-340px] xl:text-2xl 2xl:text-[36px] 2xl:mt-[-25px] 2xl:ml-[-410px] leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10 xl:text-[36px] xl:mt-[-20px] xl:ml-[-310px] 2xl:leading-[3rem]"
>
  Shop List
</h1>
<p
  className="absolute top-[70%] left-1/2 transform -translate-x-1/2 text-center text-xs sm:ml-[-150px] sm:mt-[-40px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium leading-5 sm:leading-6 md:leading-7 md:mt-[-40px] md:ml-[-210px] lg:leading-8 lg:ml-[-320px] xl:text-[16px] xl:ml-[-300px] xl:mt-[-50px] xl:leading-9 2xl:ml-[-399px] 2xl:mt-[-50px] 2xl:text-[16px] 2xl:leading-[2.5rem] text-black"
>
  Home . Pages <span className="text-[#FB2E86]">. Shop List</span>
</p>



</div>



      {/* Title Section */}
      <div className="absolute mt-[320px] sm:mt-[340px] md:mt-[350px] top-4 w-full px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between xl:ml-[150px] 2xl:ml-[22px]">
        <div className="xs:mt-[60px] sm:ml-0 mb-4 sm:mb-0 sm:mt-11 md:ml-[58px] md:mt-[0px]  2xl:ml-[222px]">
          <h2
            className=" text-[#151875] font-bold whitespace-normal sm:whitespace-nowrap "
            style={{
              fontSize: "clamp(18px, 4vw, 22px)",
              lineHeight: "1.2",
            }}
          >
            Ecommerce Accessories & Fashion Items
          </h2>
          <p
            className="mt-2 "
            style={{
              fontFamily: "Lato",
              fontSize: "clamp(10px, 2vw, 12px)",
              fontWeight: 400,
              lineHeight: "1.2",
              color: "#8A8FB9",
            }}
          >
            About 9,620 results (0.62 seconds)
          </p>
        </div>

        {/* Sort by and Per Page Section */}
        <div className="mr-[200px]  flex flex-col sm:flex-row items-start sm:items-center sm:mt-[130px] sm:ml-[-367px] gap-4 w-full sm:w-auto md:mt-[13]0px] md:ml-[-350px] lg:ml-[-105px] xl:mr-[1080px] 2xl:ml-[25px] ">
          {/* Per Page */}
          <div className="flex items-center">
            <label
              htmlFor="per-page"
              className="mr-2 text-[#3F509E] text-sm font-medium whitespace-nowrap"
            >
              Per Page:
            </label>
            <input
              type="number"
              id="per-page"
              name="per-page"
              className="w-[55px] h-[25px] border border-[#E7E6EF] p-1 text-sm"
            />
          </div>

          {/* Sort By */}
          <div className="flex items-center">
            <label
              htmlFor="sort-by"
              className="mr-2 text-sm font-medium text-[#3F509E] whitespace-nowrap"
            >
              Sort By:
            </label>
            <select
              id="sort-by"
              name="sort-by"
              className="border border-[#E7E6EF] w-[110px] h-[25px] p-1 text-sm"
            >
              <option value="relevance">Best Match</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>

          {/* View */}
          <div className="flex items-center">
            <label
              htmlFor="view"
              className="mr-2 text-sm font-medium text-[#3F509E] whitespace-nowrap"
            >
              View:
            </label>
            <div className="flex gap-4">
              {/* Grid View Icon (4 boxes) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-[#3F509E] hover:text-blue-500 cursor-pointer"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="3" width="8" height="8" rx="1"></rect>
                <rect x="13" y="3" width="8" height="8" rx="1"></rect>
                <rect x="3" y="13" width="8" height="8" rx="1"></rect>
                <rect x="13" y="13" width="8" height="8" rx="1"></rect>
              </svg>

              {/* List View Icon (Boxes Filled) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-[#3F509E] hover:text-blue-500 cursor-pointer"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* Three filled boxes */}
                <rect x="3" y="5" width="4" height="4" rx="1"></rect>
                <rect x="3" y="11" width="4" height="4" rx="1"></rect>
                <rect x="3" y="17" width="4" height="4" rx="1"></rect>

                {/* Three lines */}
                <line
                  x1="10"
                  y1="7"
                  x2="21"
                  y2="7"
                  stroke="currentColor"
                  strokeWidth="2"
                ></line>
                <line
                  x1="10"
                  y1="13"
                  x2="21"
                  y2="13"
                  stroke="currentColor"
                  strokeWidth="2"
                ></line>
                <line
                  x1="10"
                  y1="19"
                  x2="21"
                  y2="19"
                  stroke="currentColor"
                  strokeWidth="2"
                ></line>
              </svg>
            </div>
            <input
              type="number"
              id="per-page-2"
              name="per-page-2"
              className="ml-2 w-[115px] h-[25px] border border-[#E7E6EF] p-1 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Product List */}
<div className="flex flex-col items-center xs:mt-[250px] sm:gap-8 sm:mt-[250px] sm:px-4 md:px-8 lg:px-16 lg:ml-[-100px] ">
  {products.map((product) => (
    <div
      key={product.id}
      className="w-full max-w-[999px] sm:w-[500px] h-auto md:w-[700px] md:h-[254px] flex flex-col md:flex-row items-center gap-6 shadow-sm p-4 bg-[#F6F6FD80] rounded-lg lg:w-[850px] lg:ml-[93px] 2xl:w-[1141px]"
    >
      {/* Left Image */}
      <div className="w-full sm:w-[411px] sm:ml-0 md:w-[313px] h-[217px]">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Details */}
      <div className="w-full sm:ml-[70px]  md:w-[70%] mt-[20px] flex flex-col justify-between">
        {/* Product Name */}
        <h2 className="text-[#151875] text-[19px] font-bold mb-[9px]">
          {product.name}
        </h2>

        {/* Dots Below */}
        <div className="absolute xs:ml-[190px] sm:ml-[200px] flex justify-center space-x-1 mt-1 md:ml-[200px]">
          <span className="block w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="block w-3 h-3 rounded-full bg-pink-500"></span>
          <span className="block w-3 h-3 rounded-full bg-blue-600"></span>
        </div>

        {/* Prices */}
        <div className="mt-[-2px] flex items-center gap-4">
          <p className="text-red-500 text-[15px] line-through">
            {product.price}
          </p>
          <p className="text-green-600 font-bold">
            {product.discountedPrice}
          </p>
        </div>

        {/* Ratings */}
        <div className="ml-0 xs:ml-[130px] sm:ml-[150px] md:ml-[140px] mt-[-26px] flex items-center gap-1">
          {"★"
            .repeat(product.rating)
            .padEnd(5, "☆")
            .split("")
            .map((star, index) => (
              <span
                key={index}
                className={`${
                  star === "★" ? "text-yellow-400" : "text-gray-300"
                } text-[16px]`}
              >
                {star}
              </span>
            ))}
        </div>

        {/* Description */}
        <p className="sm:mr-[20px] text-[#A9ACC6] mt-3 text-[16px]">
          {product.description}
        </p>

        {/* Icons */}
        <div className="flex items-center gap-7 mt-[16px]">
          {/* Shopping Cart Icon */}
          <div className="relative">
            <span className="text-[#FB2E86] text-xl cursor-pointer">
              <FaShoppingCart />
            </span>
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-lg">
              <span className="text-[#535399]">
                <FaShoppingCart />
              </span>
            </div>
          </div>

          {/* Heart Icon */}
          <div className="relative">
            <span className="text-red-500 text-xl cursor-pointer">
              <FaHeart />
            </span>
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-lg">
              <span className="text-[#535399]">
                <FaHeart />
              </span>
            </div>
          </div>

          {/* Search Icon */}
          <div className="relative">
            <span className="text-blue-600 text-xl cursor-pointer">
              <FaSearchPlus />
            </span>
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-lg">
              <span className="text-[#535399]">
                <FaSearchPlus />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}

  <div className="flex place-content-center mt-10">
    <Link href="/shoplistsidebar">
      <button className="px-14 py-2 bg-[#FB4997] text-white text-sm font-medium rounded-sm hover:bg-[#E94085] lg:ml-[150px]">
        Next
      </button>
    </Link>
  </div>

  <div className="w-full max-w-[700px] mt-[120px] lg:ml-[110px]">
    <Image
      src="/images/image 1174.png"
      alt="brands"
      width={1920}
      height={500}
      className="w-full h-auto"
    />
  </div>
</div>

    </div>
  );
}
