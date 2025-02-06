import React from 'react';
import Image from 'next/image';
import { FaCheck } from "react-icons/fa";
import { Lato } from "next/font/google"; // Import Lato font

const lato = Lato({
  weight: ["400", "700"], // You can specify which weights you want
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

const Discountitem = () => {
  return (
    <>
      {/* Heading */}
      <div className='mt-[9rem]'>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#151875] mb-8">
          Discount Item
        </h2>
      </div>

      {/* Navigation Links */}
      <div className="w-full h-auto sm:h-[579px] mt-10">
        <div className='w-full sm:w-[30rem] h-12 mx-auto'>
          <div className={lato.className}>
            <div className="flex flex-wrap gap-4 sm:gap-12 justify-center mt-2 sm:mr-8">
              <a
                href="#"
                className="text-[#151875] text-base sm:text-lg hover:text-[#FB4997] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FB4997] hover:after:w-full after:transition-all after:duration-300"
              >
                Wood Chair
              </a>
              <a
                href="#"
                className="text-[#151875] text-base sm:text-lg hover:text-[#FB4997] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FB4997] hover:after:w-full after:transition-all after:duration-300"
              >
                Plastic Chair
              </a>
              <a
                href="#"
                className="text-[#151875] text-base sm:text-lg hover:text-[#FB4997] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FB4997] hover:after:w-full after:transition-all after:duration-300"
              >
                Sofa Collection
              </a>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full max-w-[1050px] h-auto sm:h-[500px] mt-8 sm:mt-[-3rem] mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between p-4 sm:p-0">
          {/* Text Content */}
          <div className="w-full sm:w-1/2 mt-8 sm:mt-28 p-4 sm:p-8 rounded-lg">
            <h2 className="text-[#151875] text-2xl sm:text-3xl font-bold mb-2">
              20% Discount Of All Products
            </h2>
            <h3 className="text-[#FB4997] text-lg sm:text-xl font-semibold mb-4">
              Eams Sofa Compact
            </h3>
            <p className="text-[#7E81A2] text-sm sm:text-base mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat
              habitasse nec, bibendum condimentum.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 mb-6">
              <div className="flex items-center">
                <span className="text-[#151875] text-xs mr-2"><FaCheck /></span>
                <p className="text-[#7E81A2] text-sm sm:text-base">
                  Material expose like metals
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-[#151875] text-xs mr-2"><FaCheck /></span>
                <p className="text-[#7E81A2] text-sm sm:text-base">
                  Clear lines and geometric figures
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-[#151875] text-xs mr-2"><FaCheck /></span>
                <p className="text-[#7E81A2] text-sm sm:text-base">Simple neutral colours.</p>
              </div>
              <div className="flex items-center">
                <span className="text-[#151875] text-xs mr-2"><FaCheck /></span>
                <p className="text-[#7E81A2] text-sm sm:text-base">
                  Material expose like metals
                </p>
              </div>
            </div>
            <button className="bg-[#FB4997] text-white px-8 sm:px-12 py-2 sm:py-3 rounded-s-sm text-sm sm:text-base font-medium hover:bg-[#E94085]">
              Shop Now
            </button>
          </div>

          {/* Image Content */}
          <div className="w-full sm:w-1/2 relative mt-8 sm:mt-0">
            <div className="relative w-full h-[300px] sm:h-[500px]">
              {/* Circle Image */}
              <Image
                src="/images/64.png"
                alt="Circle 2"
                width={340}
                height={340}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[340px] h-[200px] sm:h-[340px]"
              />
              {/* Sofa Image */}
              <Image
                src="/images/image20.png"
                alt="Sofa"
                width={500}
                height={500}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discountitem;