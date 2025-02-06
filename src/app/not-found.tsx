import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      {/* Rectangle Section */}
      <div className="relative w-full h-[150px] md:h-[200px] bg-[#F6F5FF]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-8 md:pt-12 lg:pt-16">
          <h1
            className="text-[#151875] font-bold text-2xl md:text-3xl lg:text-4xl lg:ml-[120px] 2xl:ml-[200px]"
            style={{
              lineHeight: "25.78px",
            }}
          >
            404 Not Found
          </h1>
          <p
            className="mt-2 text-sm md:text-base lg:text-lg 2xl:ml-[200px] lg:ml-[120px] lg:mt-[20px] 2xl:mt-[30px] text-black font-medium"
            style={{
              lineHeight: "14.4px",
            }}
          >
            Home . Pages <span className="text-[#FB2E86]">. 404 Not Found</span>
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mt-8 md:mt-12 lg:mt-16">
        <Image
          src="/images/Group 197.png"
          alt="404 Not Found"
          width={500}
          height={500}
          className="w-full max-w-[813px] h-auto"
        />
      </div>

      {/* Button Section */}
      <div className="flex justify-center xs:mt-[-30px] md:mt-[-40px] lg:mt-[-60px]">
        <Link href="/">
          <button className="bg-[#FB2E86] text-white text-sm md:text-base lg:text-lg font-normal px-8 md:px-12 lg:px-14 py-2 md:py-3 lg:py-4 rounded hover:bg-[#E94085] transition">
            Back To Home
          </button>
        </Link>
      </div>

      {/* Logos Section */}
      <div className="w-full bg-white py-6 mt-12 md:mt-16 lg:mt-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-center gap-4 md:gap-6 lg:gap-8">
            <Image
              src="/images/image 1174.png"
              alt="Logo"
              width={500}
              height={500}
              className="w-full max-w-[55rem] h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}