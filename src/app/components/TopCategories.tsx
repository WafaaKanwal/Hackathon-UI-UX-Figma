import React from 'react';
import Image from 'next/image';

const TopCategories = () => {
  return (
    <>
      {/* Heading */}
      <div className='mt-[-2rem]'>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#151875] mb-8">
          Top Categories
        </h2>
      </div>

      {/* Chair Items Section */}
      <div className="w-full flex flex-col items-center gap-8 p-4 sm:p-8">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {/* Chair Item 1 */}
          <div className="w-full sm:w-[14rem] h-[14rem] flex flex-col items-center group cursor-pointer">
            <div className="relative w-[10rem] h-[10rem] sm:w-[14rem] sm:h-[14rem] flex items-center justify-center">
              {/* Purple Arc (Behind Entire Circle) */}
              <div className="absolute inset-0 w-[10.2rem] h-[10.2rem] sm:w-[14.2rem] sm:h-[14.2rem] mt-1 ml-[-.5rem] rounded-full bg-[#7826f3] opacity-0 group-hover:opacity-80 transition-opacity duration-300 -z-10"></div>

              {/* Main Circle */}
              <div className="relative bg-[#F6F7FB] rounded-full w-[10rem] h-[10rem] sm:w-[14rem] sm:h-[14rem] flex items-center justify-center shadow-custom">
                {/* Product Image */}
                <Image
                  src="/images/image 20.png"
                  alt="Mini LCW Chair"
                  width={500}
                  height={500}
                  className="w-[6rem] h-[6rem] sm:w-[8rem] sm:h-[8rem] object-contain"
                />

                {/* View Shop Button */}
                <button className="absolute bottom-4 sm:bottom-6 px-3 py-1 bg-[#34D399] text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Shop
                </button>
              </div>
            </div>
            <div className="text-center mt-4 sm:mt-6 cursor-pointer">
              <h3 className="text-[#151875] text-sm font-medium">Mini LCW Chair</h3>
              <p className="text-[#151875] text-sm">$56.00</p>
            </div>
          </div>

          {/* Chair Item 2 */}
          <div className="w-full sm:w-[14rem] h-[14rem] flex flex-col items-center group cursor-pointer">
            <div className="relative w-[10rem] h-[10rem] sm:w-[14rem] sm:h-[14rem] flex items-center justify-center">
              {/* Purple Arc (Behind Entire Circle) */}
              <div className="absolute inset-0 w-[10.2rem] h-[10.2rem] sm:w-[14.2rem] sm:h-[14.2rem] mt-1 ml-[-.5rem] rounded-full bg-[#7826f3] opacity-0 group-hover:opacity-80 transition-opacity duration-300 -z-10"></div>

              {/* Main Circle */}
              <div className="relative bg-[#F6F7FB] rounded-full w-[10rem] h-[10rem] sm:w-[14rem] sm:h-[14rem] flex items-center justify-center shadow-custom">
                {/* Product Image */}
                <Image
                  src="/images/image 1168.png"
                  alt="Mini LCW Chair"
                  width={500}
                  height={500}
                  className="w-[6rem] h-[6rem] sm:w-[8rem] sm:h-[8rem] object-contain"
                />

                {/* View Shop Button */}
                <button className="absolute bottom-4 sm:bottom-6 px-3 py-1 bg-[#34D399] text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Shop
                </button>
              </div>
            </div>
            <div className="text-center mt-4 sm:mt-6 cursor-pointer">
              <h3 className="text-[#151875] text-sm font-medium">Mini LCW Chair</h3>
              <p className="text-[#151875] text-sm">$56.00</p>
            </div>
          </div>

          {/* Chair Item 3 */}
          <div className="w-full sm:w-[14rem] h-[14rem] flex flex-col items-center group cursor-pointer">
            <div className="relative w-[10rem] h-[10rem] sm:w-[14rem] sm:h-[14rem] flex items-center justify-center">
              {/* Purple Arc (Behind Entire Circle) */}
              <div className="absolute inset-0 w-[10.2rem] h-[10.2rem] sm:w-[14.2rem] sm:h-[14.2rem] mt-1 ml-[-.5rem] rounded-full bg-[#7826f3] opacity-0 group-hover:opacity-80 transition-opacity duration-300 -z-10"></div>

              {/* Main Circle */}
              <div className="relative bg-[#F6F7FB] rounded-full w-[10rem] h-[10rem] sm:w-[14rem] sm:h-[14rem] flex items-center justify-center shadow-custom">
                {/* Product Image */}
                <Image
                  src="/images/image11.png"
                  alt="Mini LCW Chair"
                  width={500}
                  height={500}
                  className="w-[6rem] h-[6rem] sm:w-[8rem] sm:h-[8rem] object-contain"
                />

                {/* View Shop Button */}
                <button className="absolute bottom-4 sm:bottom-6 px-3 py-1 bg-[#34D399] text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Shop
                </button>
              </div>
            </div>
            <div className="text-center mt-4 sm:mt-6 cursor-pointer">
              <h3 className="text-[#151875] text-sm font-medium">Mini LCW Chair</h3>
              <p className="text-[#151875] text-sm">$56.00</p>
            </div>
          </div>

          {/* Chair Item 4 */}
          <div className="w-full sm:w-[14rem] h-[14rem] flex flex-col items-center group cursor-pointer">
            <div className="relative w-[10rem] h-[10rem] sm:w-[14rem] sm:h-[14rem] flex items-center justify-center">
              {/* Purple Arc (Behind Entire Circle) */}
              <div className="absolute inset-0 w-[10.2rem] h-[10.2rem] sm:w-[14.2rem] sm:h-[14.2rem] mt-1 ml-[-.5rem] rounded-full bg-[#7826f3] opacity-0 group-hover:opacity-80 transition-opacity duration-300 -z-10"></div>

              {/* Main Circle */}
              <div className="relative bg-[#F6F7FB] rounded-full w-[10rem] h-[10rem] sm:w-[14rem] sm:h-[14rem] flex items-center justify-center shadow-custom">
                {/* Product Image */}
                <Image
                  src="/images/image 20.png"
                  alt="Mini LCW Chair"
                  width={500}
                  height={500}
                  className="w-[6rem] h-[6rem] sm:w-[8rem] sm:h-[8rem] object-contain"
                />

                {/* View Shop Button */}
                <button className="absolute bottom-4 sm:bottom-6 px-3 py-1 bg-[#34D399] text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Shop
                </button>
              </div>
            </div>
            <div className="text-center mt-4 sm:mt-6 cursor-pointer">
              <h3 className="text-[#151875] text-sm font-medium">Mini LCW Chair</h3>
              <p className="text-[#151875] text-sm">$56.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dots for Carousel */}
      <div className='flex gap-3 place-content-center mt-8'>
        <div className='w-[10px] h-[10px] border-2 border-[#FB2E86] rounded-lg transform cursor-pointer hover:bg-[#FB2E86]'></div>
        <div className='w-[10px] h-[10px] border-2 border-[#FB2E86] rounded-lg transform cursor-pointer hover:bg-[#FB2E86]'></div>
        <div className='w-[10px] h-[10px] border-2 border-[#FB2E86] rounded-lg transform cursor-pointer hover:bg-[#FB2E86]'></div>
      </div>
    </>
  );
};

export default TopCategories;