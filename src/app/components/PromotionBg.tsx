import React from 'react';
import Image from 'next/image';

const PromotionBg = () => {
  return (
    <div className='w-full h-[660px] sm:h-[610px] bg-[#F2F0FF]'>
      <div className="relative flex items-center justify-between px-6">
        {/* Hanging Light */}
        <div>
          <Image
            src="/images/light.png"
            alt="Hanging Light"
            width={500}
            height={500}
            className="absolute top-0 left-[4.5rem] w-[315px] h-[315px] 2xl:block hidden"
          />
        </div>

        {/* Right Section */}
        <div>
          {/* Background Circle 1 */}
          <Image
            src="/images/Ellipse 60.png"
            alt="Circle 1"
            width={500}
            height={500}
            className="absolute top-[35px] left-[55.5rem] w-[520px] h-[520px] z-0 2xl:block hidden"
          />

          {/* Background Circle 2 */}
          <Image
            src="/images/Ellipse 61.png"
            alt="Circle 2"
            width={500}
            height={500}
            className="absolute top-[60px] left-[52.8rem] w-[520px] h-[520px] z-0 2xl:block hidden"
          />

          {/* Sofa Image */}
          <Image
            src="/images/sofa.png"
            alt="Sofa"
            width={500}
            height={500}
            className="w-[500px] h-[500px] absolute top-[80px] left-[53.5rem] z-10 2xl:block hidden"
          />
        </div>

        {/* Left Section */}
        <div className='2xl:block hidden'>
          <div className="w-auto space-y-6 mr-[20.4rem] mt-[10rem]">
            <p className="text-[#FB2E86] font-medium text-[.9rem] mb-[-.5rem]">Best Furniture For Your Castle...</p>
            <h1 className="text-black font-bold text-[42px] leading-tight whitespace-nowrap">
              New Furniture Collection <br /> Trends in 2020
            </h1>
            <p className="text-[#8A8FB9] text-[13px] font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing 
              <br /> in phasellus non in justo.
            </p>
            <button className="bg-[#FB2E86] text-white text-[13px] font-normal px-9 py-3 rounded-sm hover:bg-[#E94085]">
              Shop Now
            </button>
          </div>
        </div>

        {/* Discount Badge */}
        <div className='z-20 text-black mr-[-1rem] 2xl:block hidden'>
          <Image
            src="/images/Vector 14.png"
            alt="Sofa"
            width={500}
            height={500}
            className="mb-[11rem] mr-[6rem] w-[118px] h-[118px]"
          />
          <p className='absolute bottom-[265px] ml-[1.7rem] flex flex-col text-[#ffffff] leading-[2rem] text-3xl font-bold'>
            50% <span>&nbsp;&nbsp;off</span>
          </p>
        </div>
      </div>

      {/* Responsive Design for smaller screens */}
      <div className="2xl:hidden flex flex-col items-center justify-center text-center p-6">
        <div className="space-y-6">
          <p className="text-[#FB2E86] font-medium text-[.9rem]">Best Furniture For Your Castle...</p>
          <h1 className="text-black font-bold text-3xl md:text-4xl leading-tight">
            New Furniture Collection <br /> Trends in 2020
          </h1>
          <p className="text-[#8A8FB9] text-sm font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing 
            in phasellus non in justo.
          </p>
          <button className="bg-[#FB2E86] text-white text-sm font-normal px-9 py-3 rounded-sm hover:bg-[#E94085]">
            Shop Now
          </button>
        </div>

        {/* Sofa Image for smaller screens */}
        <div className="mt-8 relative">
          <Image
            src="/images/sofa.png"
            alt="Sofa"
            width={300}
            height={300}
            className="w-full max-w-[300px] h-auto"
          />
        </div>
      </div>

      {/* Dots for Carousel */}
      <div className='flex gap-3 place-content-center mt-1 md:mt-28'>
        <div className='w-[10px] h-[10px] border-2 border-[#FB2E86] transform rotate-[50deg] cursor-pointer hover:bg-[#FB2E86]'></div>
        <div className='w-[10px] h-[10px] border-2 border-[#FB2E86] transform rotate-[50deg] cursor-pointer hover:bg-[#FB2E86]'></div>
        <div className='w-[10px] h-[10px] border-2 border-[#FB2E86] transform rotate-[50deg] cursor-pointer hover:bg-[#FB2E86]'></div>
      </div>
    </div>
  );
};

export default PromotionBg;