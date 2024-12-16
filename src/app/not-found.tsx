import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function notFound() {
  return (
    <>
      {/* Rectangle Section */}
      <div className="mt-[-17px] relative w-full h-[220px] bg-[#F6F5FF]">
        <h1
          className="mt-6 text-[#151875] font-bold ml-[279px] pt-[67px]"
          style={{
            fontSize: "36px",
            lineHeight: "25.78px",
          }}
        >
          404 Not Found
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
          Home . Pages <span className="text-[#FB2E86]">. 404 Not Found</span>
        </p>
      </div>
      <div className="flex place-content-center">
        <Image
          src="/images/Group 197.png"
          alt=""
          width={500}
          height={500}
          className="w-[813px] h-[577px]"
        />
      </div>
      <div className="relative left-[41.9rem] bottom-[2.8rem]">
        <Link href="/">
          <button className="bg-[#FB2E86] text-white text-[13px] font-normal px-14 py-4 rounded  hover:bg-[#E94085] ">
            Back To Home
          </button>
        </Link>
      </div>

      {/* Logos Section */}
      <div className="absolute w-full bg-white py-6 flex items-center justify-center gap-12">
        <Image
          src="/images/image 1174.png"
          alt="Logo 5"
          width={500}
          height={500}
          className=" object-contain w-[55rem] mt-[50px]"
        />
      </div>

      <div className="mt-72"></div>
    </>
  );
}
