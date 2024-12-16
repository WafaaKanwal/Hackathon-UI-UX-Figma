import React from "react";
import Image from "next/image";

export default function Order() {
  return (
    <div className="min-h-screen py-10 relative">
      {/* Rectangle Section */}
      <div className="absolute mt-[-30px] left-0 w-full h-[215px] bg-[#F6F5FF]">
        <h1
          className="text-[#151875] font-bold ml-[266px] mt-[65px]"
          style={{
            fontSize: "36px",
            lineHeight: "22px",
          }}
        >
          Order Completed
        </h1>
        <p
          className="mt-6 ml-[271px]"
          style={{
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "12px",
            color: "black",
          }}
        >
          Home . Pages <span className="text-[#FB2E86]">. Order Completed</span>
        </p>
      </div>

      {/* Images Section */}
      <div className="absolute left-1/2 transform flex mt-[230px] space-x-4">
        {/* First Image */}
        <Image
          src="/images/tick.png"
          alt="Step 1"
          width={500} 
              height={500}
          className="w-[120px] ml-[-40px] h-[80px] rounded-full object-cover z-10"
        />
      </div>

      {/* Additional Image Section */}
      <div className="absolute top-[300px] ml-[274px]">
        <Image
          src="/images/clock 1.png"
          alt="Additional"
          width={500} 
              height={500}
          className="w-[70px] h-[70px]"
        />
      </div>

      {/* Additional Image Section2 */}
      <div className="absolute mt-[510px] ml-[1199px]">
        <Image
          src="/images/checklist 1.png"
          alt="2"
          width={500} 
              height={500}
          className="w-[70px] h-[70px]"
        />
      </div>

      {/* Description and Button Section */}
      <div className="mt-[80px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="mt-4 text-[#151875] font-bold text-[30px]">
          Your Order Is Completed
        </p>

        <p className="mt-5 text-[#8D92A7] text-[14px] font-lato leading-[24px]">
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 <br /> hours. You will receive an email
          confirmation when your order is completed.
        </p>

        {/* Continue Shopping Button */}
        <button className="mt-7 px-4 py-2 w-[180px] h-[50px] font-lato text-[14px] bg-[#FF3EB2] text-white font-semibold rounded-lg hover:bg-[#FB2E86] transition duration-200">
          Continue Shopping
        </button>
      </div>

      <p className="text-center ml-[310px] absolute mt-[538px] text-[#D2D1D1]">
        ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </p>
      <div className="flex items-center justify-center">
        <div className="mt-[882px] ml-[-900px] absolute h-[214px] w-0 border-r-2 border-dashed border-[#D2D1D1]"></div>
      </div>

      <div className="absolute w-[900px] mt-[660px] ml-[310px]">
        <Image
          src="/images/image 1174.png"
          alt="brands"
          width={1920}
          height={500}
          className="w-[1176px] object-cover"
        />
      </div>

      <div className="h-9"> </div>
    </div>
  );
}
