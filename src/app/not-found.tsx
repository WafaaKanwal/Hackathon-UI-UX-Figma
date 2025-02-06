import Link from "next/link"
import Image from "next/image"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Rectangle Section */}
      <div className="relative w-full bg-[#F6F5FF] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[#151875] font-bold text-3xl sm:text-4xl md:text-5xl mb-4">404 Not Found</h1>
          <p className="text-sm sm:text-base font-medium">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            . Pages <span className="text-[#FB2E86]">. 404 Not Found</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <Image
          src="/images/Group 197.png"
          alt="404 Illustration"
          width={813}
          height={577}
          className="w-full max-w-2xl h-auto mb-8"
        />
        {/* <Link href="/">
          <button className="bg-[#FB2E86] text-white text-sm sm:text-base font-normal px-8 sm:px-14 py-3 sm:py-4 rounded hover:bg-[#E94085] transition-colors duration-300">
            Back To Home
          </button>
        </Link> */}
      </div>

      {/* Logos Section */}
      <div className="w-full bg-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Image
            src="/images/image 1174.png"
            alt="Partner Logos"
            width={1040}
            height={60}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  )
}























// import Link from "next/link";
// import React from "react";
// import Image from "next/image";

// export default function notFound() {
//   return (
//     <>
//       {/* Rectangle Section */}
//       <div className="mt-[-17px] relative w-full h-[220px] bg-[#F6F5FF]">
//         <h1
//           className="mt-6 text-[#151875] font-bold ml-[279px] pt-[67px]"
//           style={{
//             fontSize: "36px",
//             lineHeight: "25.78px",
//           }}
//         >
//           404 Not Found
//         </h1>
//         <p
//           className="mt-5 ml-[282px]"
//           style={{
//             fontSize: "16px",
//             fontWeight: 500,
//             lineHeight: "14.4px",
//             color: "black",
//           }}
//         >
//           Home . Pages <span className="text-[#FB2E86]">. 404 Not Found</span>
//         </p>
//       </div>
//       <div className="flex place-content-center">
//         <Image
//           src="/images/Group 197.png"
//           alt=""
//           width={500}
//           height={500}
//           className="w-[813px] h-[577px]"
//         />
//       </div>
//       <div className="relative left-[41.9rem] bottom-[2.8rem]">
//         <Link href="/">
//           <button className="bg-[#FB2E86] text-white text-[13px] font-normal px-14 py-4 rounded  hover:bg-[#E94085] ">
//             Back To Home
//           </button>
//         </Link>
//       </div>

//       {/* Logos Section */}
//       <div className="absolute w-full bg-white py-6 flex items-center justify-center gap-12">
//         <Image
//           src="/images/image 1174.png"
//           alt="Logo 5"
//           width={500}
//           height={500}
//           className=" object-contain w-[65rem] mt-[50px]"
//         />
//       </div>

//       <div className="mt-72"></div>
//     </>
//   );
// }
