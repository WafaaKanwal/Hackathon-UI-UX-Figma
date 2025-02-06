import React from 'react'
import Image from 'next/image'

const WhatShopexOffer = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center py-10 gap-8 mt-[-1rem]">
        {/* Heading */}
        <h1 className="text-[2.35rem] leading-[2.35rem] font-bold text-center text-[#151875] flex place-content-center">
          What Shopex Offer!
        </h1>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-[1.3rem] mx-auto px-4 sm:px-0">
          {/* Card 1 */}
          <div className="flex flex-col justify-center items-center w-full sm:w-[260px] h-[310px] bg-[#ffffff] shadow-custom p-6 sm:p-10 gap-4 cursor-pointer">
            <Image
              src={"/images/icon1.png"}
              alt="pro"
              width={65}
              height={65}
            />
            <h1 className="text-[#151875] text-xl text-center">24/7 Support</h1>
            <p className="text-[#1A0B5B] opacity-30 text-base font-medium text-center w-full sm:w-[14rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-center items-center w-full sm:w-[260px] h-[310px] bg-[#ffffff] shadow-custom p-6 sm:p-10 gap-4 cursor-pointer">
            <Image
              src={"/images/icon2.png"}
              alt="pro"
              width={65}
              height={65}
            />
            <h1 className="text-[#151875] text-xl text-center">24/7 Support</h1>
            <p className="text-[#1A0B5B] opacity-30 text-base font-medium text-center w-full sm:w-[14rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-center items-center w-full sm:w-[260px] h-[310px] bg-[#ffffff] shadow-custom p-6 sm:p-10 gap-4 cursor-pointer">
            <Image
              src={"/images/icon3.png"}
              alt="pro"
              width={65}
              height={65}
            />
            <h1 className="text-[#151875] text-xl text-center">24/7 Support</h1>
            <p className="text-[#1A0B5B] opacity-30 text-base font-medium text-center w-full sm:w-[14rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col justify-center items-center w-full sm:w-[260px] h-[310px] bg-[#ffffff] shadow-custom p-6 sm:p-10 gap-4 cursor-pointer">
            <Image
              src={"/images/icon4.png"}
              alt="pro"
              width={65}
              height={65}
            />
            <h1 className="text-[#151875] text-xl text-center">24/7 Support</h1>
            <p className="text-[#1A0B5B] opacity-30 text-base font-medium text-center w-full sm:w-[14rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>
        </div>

        {/* Bottom Margin */}
        <div className='mb-14'></div>
      </div>
    </>
  )
}

export default WhatShopexOffer