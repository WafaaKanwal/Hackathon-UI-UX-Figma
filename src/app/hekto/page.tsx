import React from "react";
import Image from "next/image";

export default function HektoDemo() {
  return (
    <div className="min-h-screen py-10 relative flex flex-row">
      {/* Rectangle Section */}
      <div className="absolute mt-[-44px] left-0 w-full h-[200px] bg-[#F6F5FF]">
        <h1
          className="text-[#151875] font-bold ml-[262px] mt-[67px] "
          style={{
            fontSize: "36px",
            lineHeight: "25.78px",
          }}
        >
          Hekto Demo
        </h1>
      </div>

      {/*2nd  Section */}
      <div className="mt-[200px] ml-[-20px]">
        <h1
          className="text-[#151875] font-bold ml-[283px] mt-[35px] "
          style={{
            fontSize: "24px",
            lineHeight: "25.78px",
          }}
        >
          Hekto Demo
        </h1>
        <p
          className="mt-4 ml-[283px]"
          style={{
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "14.4px",
            color: "black",
          }}
        >
          Cart/ Information/ Shipping/ Payment
        </p>

        <div className="flex flex-row">
          <div className="h-[880px] w-[640px] mt-5 ml-[278px] bg-[#F8F8FD]">
            <h4 className="absolute ml-8 mt-14 leading-[21px]  font-semibold text-[#1D3178]">
              Contact Information
            </h4>
            <input
              type="text"
              placeholder="Email or mobile phone number"
              className="placeholder-[#C1C8E1] text-[14px] font-lato ml-[32px] mt-[120px] text-black bg-transparent border-none w-full focus:ring-0 focus:outline-none"
            />
            <div className="ml-8 mt-3 w-[570px] h-[2px] bg-[#C1C8E1] "></div>

            <div className="flex items-center ml-[32px] mt-[40px]">
              <input
                type="checkbox"
                className="w-[8px] h-[8px] text-[#19D16F] bg-gray-100 border-gray-300 rounded focus:ring-[#19D16F] focus:ring-2"
              />
              <label className="ml-2 text-[12px] text-[#8A91AB] font-lato">
                Keep me up to date on news and exclusive offers
              </label>
            </div>

            <h4 className="absolute ml-8 mt-[90px] leading-[21px] font-semibold text-[#1D3178]">
              Shipping address
            </h4>

            <div className="flex flex-row mt-[-17px] ">
              <input
                type="text"
                placeholder="First name (optional)"
                className="placeholder-[#C1C8E1] absolute text-[14px] font-lato ml-[32px] mt-[163px] text-black bg-transparent border-none focus:ring-0 focus:outline-none"
              />
              <div className="absolute ml-8 mt-[199px] w-[285px] h-[2px] bg-[#C1C8E1] "></div>

              <input
                type="text"
                placeholder="Last name"
                className="placeholder-[#C1C8E1] absolute text-[14px] font-lato ml-[350px] mt-[163px] text-black bg-transparent border-none focus:ring-0 focus:outline-none"
              />
              <div className="ml-[345px] mt-[199px] w-[259px] h-[2px] bg-[#C1C8E1] "></div>
            </div>

            <input
              type="text"
              placeholder="Address"
              className="placeholder-[#C1C8E1] text-[14px] font-lato ml-[32px] mt-[31px] text-black bg-transparent border-none focus:ring-0 focus:outline-none w-full"
            />
            <div className="ml-8 mt-2 w-[570px] h-[2px] bg-[#C1C8E1] "></div>

            <input
              type="text"
              placeholder="Appaetnentment,suit,e.t.c (optinal)"
              className="placeholder-[#C1C8E1] text-[14px] font-lato ml-[32px] mt-[31px] text-black bg-transparent border-none focus:ring-0 focus:outline-none w-full"
            />
            <div className="ml-8 mt-3 w-[570px] h-[2px] bg-[#C1C8E1] "></div>

            <input
              type="text"
              placeholder="City"
              className="placeholder-[#C1C8E1] text-[14px] font-lato ml-[32px] mt-[35px] text-black bg-transparent border-none focus:ring-0 focus:outline-none w-full"
            />
            <div className="ml-8 mt-3 w-[570px] h-[2px] bg-[#C1C8E1] "></div>

            <div className="flex flex-row mt-[-130px]">
              <input
                type="text"
                placeholder="Bangladesh"
                className="placeholder-[#C1C8E1] absolute text-[14px] font-lato ml-[32px] mt-[163px] text-black bg-transparent border-none focus:ring-0 focus:outline-none"
              />
              <div className="absolute ml-8 mt-[199px] w-[285px] h-[2px] bg-[#C1C8E1] "></div>

              <input
                type="Postal Code"
                placeholder="Last name"
                className="placeholder-[#C1C8E1] absolute text-[14px] font-lato ml-[350px] mt-[163px] text-black bg-transparent border-none focus:ring-0 focus:outline-none"
              />
              <div className="ml-[345px] mt-[199px] w-[259px] h-[2px] bg-[#C1C8E1] "></div>
            </div>

            <button className="ml-[30px] mt-[107px] bg-[#FB2E86] p-3 text-white">
              Continue Shipping
            </button>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4 p-4">
              {/* Row 1 */}
              <div className="flex items-center">
                <Image
                  src="/images/h1.png"
                  alt="Product 1"
                  width={500} 
                  height={500}
                  className="w-[83px] h-[87px] object-cover rounded mr-4"
                />
                <div>
                  <p className="text-[14px] font-semibold">Ut diam consequat</p>
                  <p className="text-sm text-[#A1A8C1]">Color:Brown</p>
                  <p className="text-sm text-[#A1A8C1]">Size:XL</p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="ml-[55px] text-[14px] font-semibold">$32.00</p>
              </div>
              <hr className="col-span-2 w-[350px] border-t border-[#E8E6F1]" />

              {/* Row 2 */}
              <div className="flex items-center">
                <Image
                  src="/images/h2.png"
                  alt="Product 2"
                  width={500} 
                  height={500}
                  className="w-[83px] h-[87px] object-cover rounded mr-4"
                />
                <div>
                  <p className="text-[14px] font-semibold">Ut diam consequat</p>
                  <p className="text-sm text-[#A1A8C1]">Color:Brown</p>
                  <p className="text-sm text-[#A1A8C1]">Size:XL</p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="ml-[55px] text-[14px] font-semibold">$32.00</p>
              </div>
              <hr className="col-span-2 w-[350px] border-t border-[#E8E6F1]" />

              {/* Row 3 */}
              <div className="flex items-center">
                <Image
                  src="/images/h3.png"
                  alt="Product 3"
                  width={500} 
                  height={500}
                  className="w-[83px] h-[87px] object-cover rounded mr-4"
                />
                <div>
                  <p className="text-[14px] font-semibold">Ut diam consequat</p>
                  <p className="text-sm text-[#A1A8C1]">Color:Brown</p>
                  <p className="text-sm text-[#A1A8C1]">Size:XL</p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="ml-[55px] text-[14px] font-semibold">$32.00</p>
              </div>
              <hr className="col-span-2 w-[350px] border-t border-[#E8E6F1]" />

              {/* Row 4 */}
              <div className="flex items-center">
                <Image
                  src="/images/h4.png"
                  alt="Product 4"
                  width={500} 
                  height={500}
                  className="w-[83px] h-[87px] object-cover rounded mr-4"
                />
                <div>
                  <p className="text-[14px] font-semibold">Ut diam consequat</p>
                  <p className="text-sm text-[#A1A8C1]">Color:Brown</p>
                  <p className="text-sm text-[#A1A8C1]">Size:XL</p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="ml-[55px] text-[14px] font-semibold">$32.00</p>
              </div>
              <hr className="col-span-2 w-[350px] border-t border-[#E8E6F1]" />

              {/* Row 5 */}
              <div className="flex items-center">
                <Image
                  src="/images/h5.png"
                  alt="Product 5"
                  width={500} 
                  height={500}
                  className="w-[83px] h-[87px] object-cover rounded mr-4"
                />
                <div>
                  <p className="text-[14px] font-semibold">Ut diam consequat</p>
                  <p className="text-sm text-[#A1A8C1]">Color:Brown</p>
                  <p className="text-sm text-[#A1A8C1]">Size:XL</p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="ml-[55px] text-[14px] font-semibold">$32.00</p>
              </div>
              <hr className="col-span-2 w-[350px] border-t border-[#E8E6F1]" />
            </div>

            <div>
              <div className="w-[350px] h-[270px] ml-[19px] mt-[30px] bg-[#F4F4FC] p-8 rounded-[3px]">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-[#1D3178] font-lato">Subtotals:</span>
                    <span className="text-[#15245E] text[16px]">‎£219.00</span>
                  </div>
                  <div className="border-t border-[#E5E7EB] mt-2"></div>{" "}
                  {/* Line divider */}
                  <div className="flex justify-between">
                    <span className="text-[#1D3178] font-lato">Totals:</span>
                    <span className="text-[#15245E]">‎£325.00</span>
                  </div>
                  <div className="border-t border-[#E5E7EB] mt-2"></div>{" "}
                  {/* Line divider */}
                  <div className=" flex items-center justify-between text-[12px] text-[#8A91AB]">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>{" "}
                    {/* Green dot */}
                    <p className="mr-[40px] mt-[17px]">
                      Shipping & taxes calculated at checkout
                    </p>
                  </div>
                </div>
                <button className="bg-[#19D16F] font-lato mt-6 text-white py-2 px-4 rounded-md hover:bg-[#0d660b] text-[14px] transition w-full">
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white h-[150px]"></div>
      </div>
    </div>
  );
}
