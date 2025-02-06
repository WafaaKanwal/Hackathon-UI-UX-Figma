import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Cart() {
  return (
    <div>
  {/* Rectangle Section */}
<div className="absolute mt-[-314px] left-0 w-full h-[220px] bg-[#F6F5FF]">
  <h1
    className="text-[#151875] font-bold xs:ml-[30px] ml-[279px] mt-[67px] sm:ml-[100px] md:ml-[100px] lg:ml-[200px] xl:ml-[159px] 2xl:ml-[270px]"
    style={{
      fontSize: "36px",
      lineHeight: "25.78px",
      // Responsive font sizes
    }}
  >
    Shopping Cart
  </h1>
  <p
    className="xs:ml-[31px] mt-5 ml-[282px] sm:ml-[50px] md:ml-[100px] lg:ml-[150px] xl:ml-[162px] 2xl:ml-[274px]"
    style={{
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "14.4px",
      color: "black",
      // Responsive font sizes
    }}
  >
    Home . Pages <span className="text-[#FB2E86]">. Shopping Cart</span>
  </p>
</div>


      <div className="flex flex-row mt-[310px]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-9 lg:px-8 xl:ml-28 2xl:px-[330px] 2xl:ml-[-50px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
        {/* Headings */}
        <div className="font-semibold text-[#1D3178] 2xl:text-[20px] sm:text-xl lg:text-2xl col-span-1 sm:col-span-2  lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 2xl:mb-11">
          <div>Product</div>
          <div className="hidden md:block  lg:block xl:ml-11 2xl:ml-14">Price</div>
          <div className="hidden  lg:block 2xl:ml-[35px]">Quantity</div>
          <div className="hidden  lg:block 2xl:ml-[55px]">Total</div>
        </div>
        
        {/* Cart Items */}
        {[1, 2, 3, 4, 5].map((item, index) => (
          <React.Fragment key={index}>
            <div className="col-span-1 sm:col-span-2 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 items-center py-4 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Image
                    src={`/images/c${item}.png`}
                    alt={`Product ${item}`}
                    width={113}
                    height={107}
                    className="object-cover rounded"
                  />
                  <button className="absolute -top-2 -left-2 w-6 h-6 bg-black hover:bg-red-700 rounded-full text-white flex items-center justify-center transition">
                    &times;
                  </button>
                </div>
                <div>
                  <p className="text-sm font-semibold">Ut diam consequat</p>
                  <p className="text-xs text-gray-500">Color: Brown</p>
                  <p className="text-xs text-gray-500">Size: XL</p>
                </div>
              </div>
              <div className="flex items-center justify-between sm:justify-start lg:justify-between mt-2 sm:mt-0">
                <span className="lg:hidden font-medium ">Price:</span>
                <span className="text-sm text-blue-900 font-medium xl:ml-12 2xl:ml-14">${(20 + index * 3).toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between sm:justify-start lg:justify-between mt-2 sm:mt-0">
                <span className="lg:hidden font-medium ">Quantity:</span>
                <div className="flex items-center space-x-2 2xl:ml-[35px]">
                  <button className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-600 rounded">-</button>
                  <span className="text-sm font-semibold">{index + 1}</span>
                  <button className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-600 rounded">+</button>
                </div>
              </div>
              <div className="flex items-center justify-between sm:justify-start lg:justify-between mt-2 sm:mt-0">
                <span className="lg:hidden font-medium">Total:</span>
                <span className="text-sm text-blue-900 font-medium 2xl:ml-14">${((20 + index * 3) * (index + 1)).toFixed(2)}</span>
              </div>
            </div>
          </React.Fragment>
        ))}
        
        {/* Buttons */}
        <div className=" col-span-1 sm:col-span-2  lg:col-span-4 flex flex-col sm:flex-row justify-between items-center mt-6 space-y-4 sm:space-y-0 sm:space-x-4 ">
          <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded text-sm transition w-full sm:w-auto">
            Update Cart
          </button>
          <button className=" bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded md: text-sm transition w-full sm:w-auto ">
            Clear Cart
          </button>
        </div>
      </div>
    </div>



    <div className="absolute xs:mt-[1650px] xs:h-[30%] xs:w-[90%] xs:ml-[20px] w-full md:mt-[73rem] md:ml-5 lg:w-auto lg:absolute lg:mr-[330px] lg:right-0 lg:top-0 xl:ml-[1050px] xl:mr-[450px] xl:mt-[77rem] space-y-8 lg:space-y-0 2xl:mt-[280px] 2xl:mr-[250px]">
      {/* Cart Total */}
      <div className="w-full lg:w-[350px]">
        <h2 className="text-[#151875] text-[20px] font-bold mb-6 lg:ml-[15px] lg:mt-[140px] 2xl:ml-[115px]">
          Cart Totals
        </h2>
        <div className="w-full lg:w-[350px] h-auto lg:h-[260px] bg-[#F6F5FF] p-4 lg:p-8 rounded-[2px]">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-[#1D3178] font-lato">Subtotals:</span>
              <span className="text-[#15245E]">$325</span>
            </div>
            <div className="border-t border-[#E5E7EB] mt-2"></div>
            <div className="flex justify-between">
              <span className="text-[#1D3178] font-lato">Totals:</span>
              <span className="text-[#15245E]">$451.50</span>
            </div>
            <div className="border-t border-[#E5E7EB] mt-2"></div>
            <div className="flex items-center justify-between text-[12px] text-[#8A91AB]">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <p className="flex-1 ml-2">
                Shipping & taxes calculated at checkout
              </p>
            </div>
          </div>
          <Link href="/orderplaced">
            <button className="bg-[#19D16F] font-lato mt-6 text-white py-2 px-4 rounded-md hover:bg-[#0d660b] text-[14px] transition w-full">
              Proceed To Checkout
            </button>
          </Link>
        </div>
      </div>

      {/* Calculate shipping */}
      <div className="w-full lg:w-[350px]">
        <h2 className="text-[#151875] text-[20px] font-bold mb-6 lg:mt-11 2xl:mt-11 2xl:ml-[80px]">
          Calculate Shipping
        </h2>
        <div className="w-full lg:w-[350px] h-auto lg:h-[280px] bg-[#F6F5FF] p-4 lg:p-8 rounded-[2px]">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-[#1D3178] opacity-25 font-lato">
                Bangladesh
              </span>
            </div>
            <div className="border-t border-[#E5E7EB] mt-2"></div>
            <div className="flex justify-between">
              <span className="text-[#1D3178] opacity-25 font-lato">
                Mirpur Dhaka - 1200
              </span>
            </div>
            <div className="border-t border-[#E5E7EB] mt-2"></div>
            <div className="flex justify-between">
              <span className="text-[#1D3178] opacity-25 font-lato">
                Postal Code
              </span>
            </div>
            <div className="border-t border-[#E5E7EB] mt-2"></div>
          </div>
          <button className="bg-[#FB2E86] font-lato mt-7 text-white py-2 px-5 rounded-md hover:bg-[#0d660b] text-[14px] transition w-full lg:w-auto">
            Calculate Shipping
          </button>
        </div>

      </div>


    </div>



      </div>
      <div className="h-[700px]"> </div>
    </div>
  );
}