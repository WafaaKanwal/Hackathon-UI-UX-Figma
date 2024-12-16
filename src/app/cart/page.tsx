import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Cart() {
  return (
    <div>
      {/* Rectangle Section */}
      <div className="absolute mt-[-304px] left-0 w-full h-[220px] bg-[#F6F5FF]">
        <h1
          className="text-[#151875] font-bold ml-[279px] mt-[67px] font-"
          style={{
            fontSize: "36px",
            lineHeight: "25.78px",
          }}
        >
          Shopping Cart
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
          Home . Pages <span className="text-[#FB2E86]">. Shopping Cart</span>
        </p>
      </div>

      <div className="flex flex-row mt-[310px]">
        <div className="ml-[270px] grid grid-cols-4 gap-2 w-[900px] ">
          {" "}
          {/* Reduced gap from gap-3 to gap-2 */}
          {/* Headings */}
          <div className="font-semibold text-[20px]">Product</div>
          <div className="font-semibold text-[20px]">Price</div>
          <div className="ml-[-90px] font-semibold text-[20px]">Quantity</div>
          <div className="ml-[-120px] font-semibold text-[20px]">Total</div>
          {/* Row 1 */}
          <div className="flex items-center mt-11">
            <Image
              src="/images/cc1.png"
              alt="Product 1"
              width={500} 
              height={500}
              className="w-[83px] h-[87px] object-cover rounded mr-4"
            />
            {/* Cancel Icon */}
            <div className="absolute top-[495px] right-[1158px] w-[17px] h-[17px] flex items-center justify-center bg-black rounded-full cursor-pointer hover:bg-red-700 transition">
              <span className="text-white mt-[-3px] text-[20px] font-">×</span>
            </div>
            <div>
              <p className="text-[14px] font-semibold">Ut diam consequat</p>
              <p className="text-sm text-[#A1A8C1]">Color: Brown</p>
              <p className="text-sm text-[#A1A8C1]">Size: XL</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-[14px] font-semibold">$32.00</p>
          </div>
          <div className="flex items-center">
            <p className="ml-[-60px] text-[14px] font-semibold">1</p>
          </div>
          <div className="flex items-center">
            <p className="ml-[-120px] text-[14px] font-semibold">$32.00</p>
          </div>
          <hr className="col-span-4 w-[620px] border-t border-[#E8E6F1]" />
          {/* Row 2 */}
          <div className="flex items-center">
            <Image
              src="/images/c2.png"
              alt="Product 2"
              width={500} 
              height={500}
              className="w-[83px] h-[87px] object-cover rounded mr-4"
            />
            {/* Cancel Icon */}
            <div className="absolute top-[600px] right-[1158px] w-[17px] h-[17px] flex items-center justify-center bg-black rounded-full cursor-pointer hover:bg-red-700 transition">
              <span className="text-white mt-[-3px] text-[20px] font-">×</span>
            </div>
            <div>
              <p className="text-[14px] font-semibold">Ut diam consequat</p>
              <p className="text-sm text-[#A1A8C1]">Color: Brown</p>
              <p className="text-sm text-[#A1A8C1]">Size: XL</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className=" text-[14px] font-semibold">$28.00</p>
          </div>
          <div className="flex items-center">
            <p className="ml-[-60px] text-[14px] font-semibold">2</p>
          </div>
          <div className="flex items-center">
            <p className="ml-[-125px] text-[14px] font-semibold">$56.00</p>
          </div>
          <hr className="col-span-4 w-[620px] border-t border-[#E8E6F1]" />
          {/* Row 3 */}
          <div className="flex items-center">
            <Image
              src="/images/c3.png"
              alt="Product 3"
              width={500} 
              height={500}
              className="w-[83px] h-[87px] object-cover rounded mr-4"
            />
            {/* Cancel Icon */}
            <div className="absolute top-[700px] right-[1158px] w-[17px] h-[17px] flex items-center justify-center bg-black rounded-full cursor-pointer hover:bg-red-700 transition">
              <span className="text-white mt-[-3px] text-[20px] font-">×</span>
            </div>
            <div>
              <p className="text-[14px] font-semibold">Ut diam consequat</p>
              <p className="text-sm text-[#A1A8C1]">Color: Black</p>
              <p className="text-sm text-[#A1A8C1]">Size: L</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className=" text-[14px] font-semibold">$20.00</p>
          </div>
          <div className="flex items-center">
            <p className="ml-[-60px] text-[14px] font-semibold">1</p>
          </div>
          <div className="flex items-center">
            <p className="ml-[-120px] text-[14px] font-semibold">$20.00</p>
          </div>
          <hr className="col-span-4 w-[620px] border-t border-[#E8E6F1]" />
          {/* Row 4 */}
          <div className="flex items-center">
            <Image
              src="/images/c4.png"
              alt="Product 4"
              width={500} 
              height={500}
              className="w-[83px] h-[87px] object-cover rounded mr-4"
            />
            {/* Cancel Icon */}
            <div className="absolute top-[810px] right-[1158px] w-[17px] h-[17px] flex items-center justify-center bg-black rounded-full cursor-pointer hover:bg-red-700 transition">
              <span className="text-white mt-[-3px] text-[20px] font-">×</span>
            </div>
            <div>
              <p className="text-[14px] font-semibold">Ut diam consequat</p>
              <p className="text-sm text-[#A1A8C1]">Color: White</p>
              <p className="text-sm text-[#A1A8C1]">Size: M</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-[14px] font-semibold">$25.00</p>
          </div>
          <div className="flex items-center">
            <p className="ml-[-60px]  text-[14px] font-semibold">1</p>
          </div>
          <div className="flex items-center">
            <p className="ml-[-120px] text-[14px] font-semibold">$25.00</p>
          </div>
          <hr className="col-span-4 w-[620px] border-t border-[#E8E6F1]" />
          {/* Row 5 */}
          <div className="flex items-center">
            <Image
              src="/images/c5.png"
              alt="Product 5"
              width={500} 
              height={500}
              className="w-[83px] h-[87px] object-cover rounded mr-4"
            />
            {/* Cancel Icon */}
            <div className="absolute top-[910px] right-[1158px] w-[17px] h-[17px] flex items-center justify-center bg-black rounded-full cursor-pointer hover:bg-red-700 transition">
              <span className="text-white mt-[-3px] text-[20px] font-">×</span>
            </div>
            <div>
              <p className="text-[14px] font-semibold">Ut diam consequat</p>
              <p className="text-sm text-[#A1A8C1]">Color: Gray</p>
              <p className="text-sm text-[#A1A8C1]">Size: S</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className=" text-[14px] font-semibold">$18.00</p>
          </div>
          <div className="flex items-center">
            <p className=" ml-[-60px] text-[14px] font-semibold">3</p>
          </div>
          <div className="flex items-center">
            <p className="ml-[-120px] text-[14px] font-semibold">$54.00</p>
          </div>
          <hr className="col-span-4 w-[620px] border-t border-[#E8E6F1]" />
          <button className="bg-[#FB2E86] w-[140px] font-lato mt-7 text-white py-2 px-2 rounded-[2px] hover:bg-[#0d660b] text-[16px] transition ">
            Update Cart
          </button>
          <button className="ml-[255px] bg-[#FB2E86] w-[140px] font-lato mt-7 text-white py-2 px-2 rounded-[2px] hover:bg-[#0d660b] text-[16px] transition ">
            Clear Cart
          </button>
        </div>

        <div className="absolute ml-[1050px] mt-[-140px]">
          <div>
            <h2 className="text-[#151875]  ml-[15px] mt-[140px] text-[20px] whitespace-nowrap font-bold mb-6">
              Cart Total
            </h2>
            <div className="w-[350px] h-[260px] ml-[-90px] mt-[10px] bg-[#F6F5FF] p-8 rounded-[2px]">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-[#1D3178] font-lato">Subtotals:</span>
                  <span className="text-[#15245E]">$325</span>
                </div>
                <div className="border-t border-[#E5E7EB] mt-2"></div>{" "}
                {/* Line divider */}
                <div className="flex justify-between">
                  <span className="text-[#1D3178] font-lato">Totals:</span>
                  <span className="text-[#15245E]">$451.50</span>
                </div>
                <div className="border-t border-[#E5E7EB] mt-2"></div>{" "}
                {/* Line divider */}
                <div className=" flex items-center justify-between text-[12px] text-[#8A91AB]">
                  <span className="w-2 h-2 bg-[green-500] rounded-full"></span>{" "}
                  {/* Green dot */}
                  <p className="mr-[40px]">
                    Shipping & taxes calculated at checkout
                  </p>
                </div>
              </div>
              <Link href="/orderplaced"><button className="bg-[#19D16F] font-lato mt-6 text-white py-2 px-4 rounded-md hover:bg-[#0d660b] text-[14px] transition w-full">
                Proceed To Checkout
              </button></Link>
            </div>
          </div>

          {/* Calculate shipping */}
          <div>
            <h2 className="text-[#151875] text-[20px] whitespace-nowrap ml-[-10px] mt-[30px] font-bold mb-6">
              Calculate Shipping
            </h2>
            <div className="w-[350px] h-[280px] ml-[-90px] bg-[#F6F5FF] p-8  rounded-[2px] mt-[-7px] ">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-[#1D3178] opacity-25 font-lato">
                    Bangladesh
                  </span>
                </div>
                <div className="border-t border-[#E5E7EB] mt-2"></div>{" "}
                {/* Line divider */}
                <div className="flex justify-between">
                  <span className="text-[#1D3178] opacity-25 font-lato">
                    Mirpur Dhaka - 1200
                  </span>
                </div>
                <div className="border-t border-[#E5E7EB] mt-2"></div>{" "}
                {/* Line divider */}
                <div className="flex justify-between">
                  <span className="text-[#1D3178] opacity-25 font-lato">
                    Postal Code
                  </span>
                </div>
                <div className="border-t border-[#E5E7EB] mt-2"></div>{" "}
                {/* Line divider */}
              </div>
              <button className="bg-[#FB2E86] font-lato mt-7 text-white py-2 px-5 rounded-md hover:bg-[#0d660b] text-[14px] transition ">
                Calculate Shipping
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[100px]"> </div>
    </div>
  );
}