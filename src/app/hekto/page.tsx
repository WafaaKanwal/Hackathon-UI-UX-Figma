import React from "react";
import Image from "next/image";

export default function HektoDemo() {
  return (
    <div className="min-h-screen py-10 relative flex flex-col lg:flex-row">
      {/* Rectangle Section */}
      <div className="absolute top-0 left-0 w-full h-[150px] md:h-[200px] bg-[#F6F5FF]">
        <h1
          className="text-[#151875] font-bold text-2xl md:text-3xl lg:text-4xl pt-8 md:pt-12 lg:pt-16 ml-4 md:ml-8 lg:ml-16 xl:ml-32 2xl:ml-64"
          style={{
            lineHeight: "25.78px",
          }}
        >
          Hekto Demo
        </h1>
      </div>

      {/* 2nd Section */}
      <div className="mt-[150px] md:mt-[200px] lg:mt-[250px] flex flex-col lg:flex-row gap-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        {/* Left Column: Form Section */}
        <div className="w-full lg:w-1/2 bg-[#F8F8FD] p-6 md:p-8 lg:p-12 rounded-lg shadow-md">
          <h1
            className="text-[#151875] font-bold text-xl md:text-2xl lg:text-3xl"
            style={{
              lineHeight: "25.78px",
            }}
          >
            Hekto Demo
          </h1>
          <p
            className="mt-2 text-sm md:text-base lg:text-lg text-black font-medium"
            style={{
              lineHeight: "14.4px",
            }}
          >
            Cart/ Information/ Shipping/ Payment
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <h4 className="text-[#1D3178] font-semibold text-lg md:text-xl lg:text-2xl">
                Contact Information
              </h4>
              <input
                type="text"
                placeholder="Email or mobile phone number"
                className="placeholder-[#C1C8E1] text-sm md:text-base lg:text-lg font-lato mt-4 text-black bg-transparent border-none w-full focus:ring-0 focus:outline-none"
              />
              <div className="w-full h-[2px] bg-[#C1C8E1] mt-2"></div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-[#19D16F] bg-gray-100 border-gray-300 rounded focus:ring-[#19D16F] focus:ring-2"
              />
              <label className="ml-2 text-sm md:text-base lg:text-lg text-[#8A91AB] font-lato">
                Keep me up to date on news and exclusive offers
              </label>
            </div>

            <div>
              <h4 className="text-[#1D3178] font-semibold text-lg md:text-xl lg:text-2xl">
                Shipping address
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <input
                    type="text"
                    placeholder="First name (optional)"
                    className="placeholder-[#C1C8E1] text-sm md:text-base lg:text-lg font-lato text-black bg-transparent border-none w-full focus:ring-0 focus:outline-none"
                  />
                  <div className="w-full h-[2px] bg-[#C1C8E1] mt-2"></div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="placeholder-[#C1C8E1] text-sm md:text-base lg:text-lg font-lato text-black bg-transparent border-none w-full focus:ring-0 focus:outline-none"
                  />
                  <div className="w-full h-[2px] bg-[#C1C8E1] mt-2"></div>
                </div>
              </div>

              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Address"
                  className="placeholder-[#C1C8E1] text-sm md:text-base lg:text-lg font-lato text-black bg-transparent border-none w-full focus:ring-0 focus:outline-none"
                />
                <div className="w-full h-[2px] bg-[#C1C8E1] mt-2"></div>
              </div>

              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  className="placeholder-[#C1C8E1] text-sm md:text-base lg:text-lg font-lato text-black bg-transparent border-none w-full focus:ring-0 focus:outline-none"
                />
                <div className="w-full h-[2px] bg-[#C1C8E1] mt-2"></div>
              </div>

              <div className="mt-4">
                <input
                  type="text"
                  placeholder="City"
                  className="placeholder-[#C1C8E1] text-sm md:text-base lg:text-lg font-lato text-black bg-transparent border-none w-full focus:ring-0 focus:outline-none"
                />
                <div className="w-full h-[2px] bg-[#C1C8E1] mt-2"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <input
                    type="text"
                    placeholder="Country"
                    className="placeholder-[#C1C8E1] text-sm md:text-base lg:text-lg font-lato text-black bg-transparent border-none w-full focus:ring-0 focus:outline-none"
                  />
                  <div className="w-full h-[2px] bg-[#C1C8E1] mt-2"></div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="placeholder-[#C1C8E1] text-sm md:text-base lg:text-lg font-lato text-black bg-transparent border-none w-full focus:ring-0 focus:outline-none"
                  />
                  <div className="w-full h-[2px] bg-[#C1C8E1] mt-2"></div>
                </div>
              </div>
            </div>

            <button className="bg-[#FB2E86] text-white py-2 px-4 rounded-md hover:bg-[#e42a75] transition w-full text-sm md:text-base lg:text-lg">
              Continue Shipping
            </button>
          </div>
        </div>

        {/* Right Column: Product Summary Section */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 gap-4 p-4">
            {/* Product Rows */}
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src={`/images/h${i + 1}.png`}
                    alt={`Product ${i + 1}`}
                    width={83}
                    height={87}
                    className="w-[83px] h-[87px] object-cover rounded mr-4"
                  />
                  <div>
                    <p className="text-sm md:text-base lg:text-lg font-semibold">
                      Ut diam consequat
                    </p>
                    <p className="text-sm text-[#A1A8C1]">Color: Brown</p>
                    <p className="text-sm text-[#A1A8C1]">Size: XL</p>
                  </div>
                </div>
                <p className="text-sm md:text-base lg:text-lg font-semibold">
                  $32.00
                </p>
              </div>
            ))}
          </div>

          {/* Totals Section */}
          <div className="w-full bg-[#F4F4FC] p-6 md:p-8 lg:p-12 rounded-lg shadow-md mt-8">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-[#1D3178] font-lato">Subtotals:</span>
                <span className="text-[#15245E]">£219.00</span>
              </div>
              <div className="border-t border-[#E5E7EB] mt-2"></div>
              <div className="flex justify-between">
                <span className="text-[#1D3178] font-lato">Totals:</span>
                <span className="text-[#15245E]">£325.00</span>
              </div>
              <div className="border-t border-[#E5E7EB] mt-2"></div>
              <div className="flex items-center justify-between text-sm md:text-base lg:text-lg text-[#8A91AB]">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <p className="ml-2">Shipping & taxes calculated at checkout</p>
              </div>
            </div>
            <button className="bg-[#19D16F] font-lato mt-6 text-white py-2 px-4 rounded-md hover:bg-[#0d660b] transition w-full text-sm md:text-base lg:text-lg">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}