import React from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import { Grid, List } from "lucide-react";

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
      <div className="mt-[-70px] relative w-full h-[240px] bg-[#F6F5FF]">
        <h1
          className="mt-6 text-[#151875] font-bold ml-[279px] pt-[67px]"
          style={{
            fontSize: "36px",
            lineHeight: "25.78px",
          }}
        >
          Shop List
        </h1>
        <p
          className="mt-5 ml-[282px]"
          style={{
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "14.4px",
            color: "black",
          }}
        >
          Home . Pages <span className="text-[#FB2E86]">. Shop List</span>
        </p>
      </div>

      {/* Title Section */}
      <div className="mt-[110px] w-full flex items-center justify-between px-10">
        <div>
          <h2
            className="text-[#151875]  ml-[230px] font-bold"
            style={{
              fontSize: "22px",
              lineHeight: "25.78px",
            }}
          >
            Ecommerce Accessories & Fashion Items
          </h2>
          <p
            className="mt-2 ml-[233px]"
            style={{
              fontFamily: "Lato",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "14.4px",
              color: "#8A8FB9",
            }}
          >
            About 9,620 results (0.62 seconds)
          </p>
        </div>

        {/* Sort by and Per Page Section */}
        <div className=" w-[20px] whitespace-nowrap flex items-center gap-4 mr-[210px]">
          {/* Per Page */}
          <div className="ml-[-490px] flex items-center">
            <label
              htmlFor="per-page"
              className="mr-2 text-[#3F509E] text-sm font-medium"
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
              className="mr-2 text-sm font-medium text-[#3F509E]"
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
              className="mr-2 text-sm font-medium text-[#3F509E]"
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
                className="w-5 h-5 ml-[-15px] text-[#3F509E] hover:text-blue-500 cursor-pointer"
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
              id="per-page"
              name="per-page"
              className="ml-[14px] w-[115px] h-[25px] border border-[#E7E6EF] p-1 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="flex flex-col items-center gap-8 mt-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[999px] h-[254px] flex items-center gap-6 shadow-sm p-4 bg-[#F6F6FD80] rounded-lg"
          >
            {/* Left Image */}
            <div className="w-[313px] h-[217px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover "
              />
            </div>

            {/* Right Details */}
            <div className="w-[70%] mt-[20px] flex flex-col justify-between">
              {/* Product Name */}
              <h2 className="text-[#151875] text-[19px] font-bold mb-[9px]">
                {product.name}
              </h2>

              {/* Dots Below */}
              <div className="absolute flex justify-center space-x-1 mt-1 ml-[200px]">
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
              <div className="ml-[140px] mt-[-26px] flex items-center gap-1">
                {"★"
                  .repeat(product.rating)
                  .padEnd(5, "☆")
                  .split("")
                  .map((star, index) => (
                    <span
                      key={index}
                      className={`text-${
                        star === "★" ? "yellow-400" : "gray-300"
                      } text-[16px]`}
                    >
                      {star}
                    </span>
                  ))}
              </div>

              {/* Description */}
              <p className="text-[#A9ACC6] mt-3 text-[16px]">
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
                      {" "}
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
                      {" "}
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
            <button className=" px-14 py-2 bg-[#FB4997] text-white text-sm font-medium rounded-sm hover:bg-[#E94085]">
              Next
            </button>
          </Link>
        </div>

        <div className="w-[700px] mt-[120px] ml-[0px]">
          <Image
            src="/images/image 1174.png"
            alt="brands"
            width={1920}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
