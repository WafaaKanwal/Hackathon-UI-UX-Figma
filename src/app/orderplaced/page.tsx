import React from "react";
import Image from "next/image";

export default function Order() {
  return (
    <div className="min-h-screen py-10 relative">
      {/* Rectangle Section */}
      <div className="absolute mt-[-30px] left-0 w-full h-[215px] bg-[#F6F5FF]">
        <h1
          className="text-[#151875] font-bold xs:ml-[30px] xs:mt-[80px] sm:ml-[30px] sm:mt-[80px] md:mt-[80px] md:ml-[130px] lg:ml-[185px] xl:ml-[266px] lg:mt-[65px]"
          style={{
            fontSize: "36px",
            lineHeight: "22px",
          }}
        >
          Order Completed
        </h1>
        <p
          className="xs:ml-[35px] xs:mt-[20px] sm:ml-[35px] sm:mt-[20px] md:mt-[20px] md:ml-[135px] lg:mt-6 lg:ml-[190px] xl:ml-[271px]"
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
      <div className="absolute left-1/2 transform flex xs:mt-[15rem] sm:mt-[20rem] md:mt-[20rem] lg:mt-[20rem] xl:mt-[20rem] 2xl:mt-[230px] 2xl:space-x-4">
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
      <div className="absolute xs:mt-[25rem] xs:ml-[25px] sm:mt-[25rem] sm:ml-[25px]  md:mt-[25rem] md:ml-[5rem] lg:mt-[25rem] lg:ml-[4.7rem] xl:mt-[25rem] xl:ml-[9.7rem] 2xl:mt-[300px] 2xl:ml-[274px]">
        <Image
          src="/images/clock 1.png"
          alt="Additional"
          width={500} 
              height={500}
          className="w-[70px] h-[70px]"
        />
      </div>

      {/* Additional Image Section2 */}
      <div className="absolute xs:mt-[41rem] xs:ml-[32rem] sm:mt-[41rem] sm:ml-[32rem] md:mt-[40rem] md:ml-[41rem] lg:mt-[40rem] lg:ml-[56rem] xl:mt-[40rem] xl:ml-[65rem] 2xl:mt-[510px] 2xl:ml-[1199px]">
        <Image
          src="/images/checklist 1.png"
          alt="2"
          width={500} 
              height={500}
          className="w-[70px] h-[70px]"
        />
      </div>

      {/* Description and Button Section */}
      <div className="xs:mt-[33rem] sm:mt-[33rem] md:mt-[32rem] lg:mt-[32rem] xl:mt-[32rem] 2xl:mt-[80px] absolute 2xl:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
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

      <p className="text-center xs:mt-[43rem] sm:mt-[43rem] md:mt-[42rem] lg:mt-[42rem] lg:ml-[7rem] xl:ml-[12rem] xl:mt-[42rem] 2xl:ml-[310px] absolute 2xl:mt-[538px] text-[#D2D1D1]">
        ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </p>
      <div className="flex items-center justify-center">
        <div className="xs:mt-[73rem] xs:ml-[-530px] sm:mt-[73rem] sm:ml-[-530px] md:ml-[-540px] md:mt-[72rem] lg:mt-[72rem] lg:ml-[-800px] xl:ml-[-900px] xl:mt-[72rem] 2xl:mt-[882px] 2xl:ml-[-900px] absolute h-[214px] w-0 border-r-2 border-dashed border-[#D2D1D1]"></div>
      </div>

      <div className="absolute xs:mt-[53rem] sm:mt-[53rem] md:mt-[53rem] lg:mt-[53rem] xl:ml-[105px] xl:mt-[53rem] 2xl:w-[900px] 2xl:mt-[660px] 2xl:ml-[310px]">
        <Image
          src="/images/image 1174.png"
          alt="brands"
          width={1920}
          height={500}
          className=" xl:w-[1000px] 2xl:w-[1176px] object-cover"
        />
      </div>

      <div className="h-9"> </div>
    </div>
  );
}
