import React from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";

export default function SideBar() {
  const products = [
    {
      id: 1,
      name: "Accumsan tincidunt",
      image: "/images/a.png",
      price: "$49.00",
      discountedPrice: "$39.00",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 2,
      name: "Sodales sit",
      image: "/images/b.png",
      price: "$59.00",
      discountedPrice: "$45.00",
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 3,
      name: "Nibh varius",
      image: "/images/c.png",
      price: "$75.00",
      discountedPrice: "$65.00",
      rating: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 4,
      name: "Mauris quis",
      image: "/images/d.png",
      price: "$99.00",
      discountedPrice: "$85.00",
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 5,
      name: "Morbi sagittis",
      image: "/images/e.png",
      price: "$120.00",
      discountedPrice: "$99.00",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 6,
      name: "Ultricies venenatis",
      image: "/images/f.png",
      price: "$39.00",
      discountedPrice: "$25.00",
      rating: 2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 7,
      name: "Scelerisque dignissim",
      image: "/images/g.png",
      price: "$69.00",
      discountedPrice: "$49.00",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
  ];

  return (
    <div className="min-h-screen py-10">
      {/* Sidebar */}
      <div className="w-64 h-screen p-6 absolute left-0 top-0 mt-[527px] ml-[209px] ">
        <h2
          className="text-[20px] font-bold leading-[30px] text-center underline decoration-2 decoration-[#151875] underline-offset-4"
          style={{
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Product Brand
        </h2>
        <ul className="mt-6 whitespace-nowrap ml-[38px] space-y-2 ">
          {[
            "Coaster Furniture",
            "Fusion Dot High Fashion",
            "Unique Furniture Restor",
            "Dream Furniture Flipping",
            "Young Repurposed",
            "Green DIY Furniture",
          ].map((brand, index) => (
            <li key={index}>
              <label className="flex items-center space-x-3 cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    className="peer w-5 h-5 appearance-none bg-[#E5E0FC] border border-gray-300 checked:bg-[#603EFF] focus:ring-2 focus:ring-[#603EFF] transition-all duration-200"
                  />
                  {/* Tick Icon */}
                  <svg
                    className="absolute top-1 left-1 w-3 h-3 text-[#603EFF] pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 16.2l-5.6-5.6a1 1 0 10-1.4 1.4l7 7a1 1 0 001.4 0l13-13a1 1 0 00-1.4-1.4L9 16.2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span
                  className="font-lato text-[16px] font-normal leading-[30px] text-center text-[#7E81A2]"
                  style={{
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                  }}
                >
                  {brand}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Discount offer */}

      <div className="w-64 h-screen p-6 absolute left-0 top-0 mt-[855px] ml-[209px] ">
        <h2
          className=" text-[20px] font-bold leading-[30px] text-center underline decoration-2 decoration-[#151875] underline-offset-4"
          style={{
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Discount Offer
        </h2>
        <ul className="mt-6 whitespace-nowrap ml-[38px] space-y-2 ">
          {["20% Cashback", "5% Cashback Offer", "25% Discount Offer"].map(
            (brand, index) => (
              <li key={index}>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="peer w-5 h-5 appearance-none bg-[#FFDBF1] border border-gray-300 checked:bg-[#FF3EB2] focus:ring-2 focus:ring-[#FF3EB2] transition-all duration-200"
                    />
                    {/* Tick Icon */}
                    <svg
                      className="absolute top-1 left-1 w-3 h-3 text-[#FF3EB2] pointer-events-none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 16.2l-5.6-5.6a1 1 0 10-1.4 1.4l7 7a1 1 0 001.4 0l13-13a1 1 0 00-1.4-1.4L9 16.2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span
                    className="font-lato text-[16px] font-normal leading-[30px] text-center text-[#7E81A2]"
                    style={{
                      textUnderlinePosition: "from-font",
                      textDecorationSkipInk: "none",
                    }}
                  >
                    {brand}
                  </span>
                </label>
              </li>
            )
          )}
        </ul>
      </div>
      {/* Rating Item */}
      <div className="w-64 h-screen p-6 absolute left-0 top-0 mt-[1070px] ml-[209px]">
        <h2
          className=" ml-[-28px] text-[20px] font-bold leading-[30px] text-center underline decoration-2 decoration-[#151875] underline-offset-4"
          style={{
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Rating Item
        </h2>
        <ul className="mt-6 space-y-4 ml-[38px] ">
          {[
            { stars: 5, reviews: 234 },
            { stars: 4, reviews: 1726 },
            { stars: 3, reviews: 256 },
            { stars: 2, reviews: 25 },
          ].map((item, index) => (
            <li key={index} className="flex items-center space-x-3">
              <label className="flex items-center cursor-pointer relative">
                <input
                  type="checkbox"
                  className="peer w-5 h-5 appearance-none bg-[#FFF6DA] border border-gray-300 checked:bg-[#FFF6DA] focus:ring-2 focus:ring-[#FFCC2E] transition-all duration-200"
                />
                {/* Tick Icon */}
                <svg
                  className="ml-[4px] mt-1 absolute top-0 left-0 w-3 h-3 text-[#FFCC2E] opacity-100"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 16.2l-5.6-5.6a1 1 0 10-1.4 1.4l7 7a1 1 0 001.4 0l13-13a1 1 0 00-1.4-1.4L9 16.2z"
                    clipRule="evenodd"
                  />
                </svg>
                {/* Star Icons */}
                <div className="flex items-center space-x-1 ml-2">
                  {[...Array(5)].map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill={starIndex < item.stars ? "#FFD700" : "#E0E0E0"} // Yellow for filled stars, gray for empty
                      className="w-4 h-4"
                    >
                      <path d="M12 .587l3.668 7.572L24 9.748l-6 5.85 1.42 8.302L12 18.898l-7.42 3.902L6 15.598 0 9.748l8.332-1.59z" />
                    </svg>
                  ))}
                </div>
              </label>
              <span className="ml-2 text-sm text-gray-500">
                ({item.reviews})
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories*/}

      <div className="w-64 h-screen p-6 absolute left-0 top-0 mt-[1313px] ml-[209px] ">
        <h2
          className="ml-[-40px]  text-[20px] font-bold leading-[30px] text-center underline decoration-2 decoration-[#151875] underline-offset-4"
          style={{
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Categories
        </h2>
        <ul className="mt-6 whitespace-nowrap ml-[38px] space-y-2 ">
          {[
            "Prestashop",
            "Magento",
            "Bigcommerce",
            "osCommerce",
            "3dcart",
            "Bags",
            "Accessories",
            "Jewellery",
            "Watches",
          ].map((brand, index) => (
            <li key={index}>
              <label className="flex items-center space-x-3 cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    className="peer w-5 h-5 appearance-none bg-[#FFDBF1] border border-gray-300 checked:bg-[#FF3EB2] focus:ring-2 focus:ring-[#FF3EB2] transition-all duration-200"
                  />
                  {/* Tick Icon */}
                  <svg
                    className="absolute top-1 left-1 w-3 h-3 text-[#FF3EB2] pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 16.2l-5.6-5.6a1 1 0 10-1.4 1.4l7 7a1 1 0 001.4 0l13-13a1 1 0 00-1.4-1.4L9 16.2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span
                  className="font-lato text-[16px] font-normal leading-[30px] text-center text-[#7E81A2]"
                  style={{
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                  }}
                >
                  {brand}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Filter */}
      <div className="w-64 h-screen p-6 absolute left-0 top-0 mt-[1760px] ml-[209px]">
        <h2
          className="ml-[-40px] text-[20px] font-bold leading-[30px] text-center underline decoration-2 decoration-[#151875] underline-offset-4"
          style={{
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Price Filter
        </h2>
        <ul className="mt-6 whitespace-nowrap ml-[38px] space-y-2">
          {[
            "$0.00 - $150.00",
            "$150.00 - $350.00",
            "$150.00 - $504.00",
            "$450.00 +",
          ].map((brand, index) => (
            <li key={index}>
              <label className="flex items-center space-x-3 cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    className="peer w-5 h-5 appearance-none bg-[#FFDBF1] border border-gray-300 checked:bg-[#FF3EB2] focus:ring-2 focus:ring-[#FF3EB2] transition-all duration-200"
                  />
                  {/* Tick Icon */}
                  <svg
                    className="absolute top-1 left-1 w-3 h-3 text-[#FF3EB2] pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 16.2l-5.6-5.6a1 1 0 10-1.4 1.4l7 7a1 1 0 001.4 0l13-13a1 1 0 00-1.4-1.4L9 16.2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span
                  className="font-lato text-[16px] font-normal leading-[30px] text-center text-[#7E81A2]"
                  style={{
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                  }}
                >
                  {brand}
                </span>
              </label>
            </li>
          ))}
        </ul>
        <div className="mt-4 ml-[35px] flex items-center border border-gray-300 p-2 rounded-md relative">
          <input
            type="text"
            className="w-full h-[20px] text-[12px] p-2 outline-none"
            placeholder="$10.00 - $20000.00"
          />
          <svg
            className="absolute right-2 top-2 w-4 h-4 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M21 21l-4.25-4.25M14 11a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
          </svg>
        </div>
      </div>

      {/* Filter By Color*/}
      <div className="w-64 h-screen p-6 absolute left-0 top-0 mt-[2070px] ml-[221px]">
        <h2
          className="ml-[-40px] text-[20px] font-bold leading-[30px] text-center underline decoration-2 decoration-[#151875] underline-offset-4"
          style={{
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Filter By Color
        </h2>
        <ul className="mt-6 ml-[15px] flex space-x-2">
          <li className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="font-lato text-[16px] font-normal text-[#7E81A2]">
              Blue
            </span>
          </li>
          <li className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <span className="font-lato text-[16px] font-normal text-[#7E81A2]">
              Orange
            </span>
          </li>
          <li className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#A52A2A]"></div>{" "}
            {/* Brown Color */}
            <span className="font-lato text-[16px] font-normal text-[#7E81A2]">
              Brown
            </span>
          </li>
        </ul>
        <ul className="mt-6 ml-[15px] flex space-x-2">
          <li className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="font-lato text-[16px] font-normal text-[#7E81A2]">
              Green
            </span>
          </li>
          <li className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span className="font-lato text-[16px] font-normal text-[#7E81A2]">
              Purple
            </span>
          </li>
          <li className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#2ddff7]"></div>{" "}
            {/* Brown Color */}
            <span className="font-lato text-[16px] font-normal text-[#7e9ba2]">
              Sky
            </span>
          </li>
        </ul>
      </div>

      {/* Rectangle Section */}
      <div className="mt-[-70px] relative w-full h-[240px] bg-[#F6F5FF]">
        <h1
          className="mt-6 text-[#151875] font-bold ml-[279px] pt-[67px]"
          style={{ fontSize: "36px", lineHeight: "25.78px" }}
        >
          Shop List Sidebar
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
          Home . Pages{" "}
          <span className="text-[#FB2E86]">. Shop Left Sidebar</span>
        </p>
      </div>

      {/* Title Section */}
      <div className="mt-[110px] w-full flex items-center justify-between px-10">
        <div>
          <h2
            className="text-[#151875]  ml-[230px] font-bold"
            style={{ fontSize: "22px", lineHeight: "25.78px" }}
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
      <div className="flex flex-col items-center ml-[310px] gap-8 mt-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[777px] h-[254px] flex items-center gap-6 shadow-sm p-4 rounded-lg"
          >
            {/* Left Image */}
            <div className="w-[30%] h-full">
              <Image
                src={product.image}
                alt={product.name}
                width={500} 
              height={500}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Details */}
            <div className="w-[70%] mt-[20px] flex flex-col justify-between">
              {/* Product Name */}
              <h2 className="text-[#151875] text-[20px] font-bold mb-[9px]">
                {product.name}
              </h2>

              {/* Dots Below */}
              <div className="absolute flex justify-center space-x-1 mt-1 ml-[200px]">
                <span className="block w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="block w-3 h-3 rounded-full bg-pink-500"></span>
                <span className="block w-3 h-3 rounded-full bg-blue-600"></span>
              </div>

              {/* Prices */}
              <div className="flex items-center gap-4">
                <p className="text-red-500 line-through">{product.price}</p>
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
                    {" "}
                    <FaHeart />
                  </span>
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <span className="text-[#535399]">
                      {" "}
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
      </div>
    </div>
  );
}
