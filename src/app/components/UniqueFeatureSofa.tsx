import React from "react";
import Image from "next/image";

const UniqueFeatureSofa = () => {
  return (
    <>
      {/* Background Container */}
      <div className="w-full h-auto min-h-[579px] bg-[#F1F0FF] py-8">
        {/* Content Container */}
        <div className="w-full max-w-[1050px] h-full mx-auto flex flex-col 2xl:flex-row items-center justify-center gap-8 2xl:gap-0">
          {/* Image Section */}
          <div className="relative w-[300px] h-[300px] 2xl:w-[500px] 2xl:h-[500px]">
            {/* Circle Image */}
            <Image
              src="/images/Ellipse 63.png"
              alt="Circle 2"
              width={500}
              height={500}
              className="absolute w-[300px] h-[300px] ml-[-15px] top-[-40px] 2xl:w-[500px] 2xl:h-[450px] mt-8 2xl:mt-11 2xl:ml-[-1.5rem]"
            />
            {/* Sofa Image */}
            <Image
              src="/images/sofa blue.png"
              alt="Sofa"
              width={500}
              height={500}
              className="absolute w-[350px] h-[350px] ml-[-40px] top-[-30px] 2xl:w-[500px] 2xl:h-[500px]  left-[50px] 2xl:top-[25px] 2xl:left-[50px]"
            />
          </div>

          {/* Text Section */}
          <div className="w-full max-w-[500px] 2xl:w-auto p-4 2xl:p-8 2xl:ml-5 rounded-lg">
            {/* Heading */}
            <h2 className="text-[#151875] text-2xl 2xl:text-[2.1rem] font-bold mb-6 leading-[1.4]">
              Unique Features Of Latest & Trending Products
            </h2>

            {/* Feature List */}
            <ul className="space-y-4 mb-6">
              <li className="flex items-center">
                <span className="w-[11px] h-[11px] bg-[#FB2E86] rounded-full mr-4"></span>
                <p className="text-[#ACABC3] text-sm 2xl:text-[15px] font-medium">
                  All frames constructed with hardwood solids and laminates
                </p>
              </li>
              <li className="flex items-center">
                <span className="w-[11px] h-[11px] bg-[#2B2BF5] rounded-full mr-4"></span>
                <p className="text-[#ACABC3] text-sm 2xl:text-[15px] font-medium">
                  Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails
                </p>
              </li>
              <li className="flex items-center">
                <span className="w-[11px] h-[11px] bg-[#2BF5CC] rounded-full mr-4"></span>
                <p className="text-[#ACABC3] text-sm 2xl:text-[15px] font-medium">
                  Arms, backs and seats are structurally reinforced
                </p>
              </li>
            </ul>

            {/* Add to Cart Section */}
            <div className="flex items-center mt-8">
              <button className="bg-[#FB2E86] border text-white px-6 2xl:px-8 py-2 2xl:py-3 rounded-sm text-sm font-bold hover:bg-[#E94085]">
                Add To Cart
              </button>
              <div className="ml-4 2xl:ml-5">
                <p className="text-[#151875] text-sm font-bold">B&B Italian Sofa</p>
                <p className="text-[#7E81A2] text-sm">$32.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Margin */}
      <div className="mb-12 2xl:mb-[5rem]"></div>
    </>
  );
};

export default UniqueFeatureSofa;