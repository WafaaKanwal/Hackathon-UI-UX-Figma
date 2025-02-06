import type React from "react"
import Image from "next/image"

const GetLatest: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-full bg-cover bg-center py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 md:mt-20 mb-12 sm:mb-16 md:mb-20"
        style={{ backgroundImage: "url('/images/Rectangle 102.png')" }}
      >
        {/* Text Section */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[#151875] text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
            Get Latest Update By Subscribe <br className="hidden sm:inline" /> Our Newsletter
          </h2>
          <button className="px-8 sm:px-12 py-2 sm:py-3 bg-[#FB4997] text-white text-sm sm:text-base font-medium rounded hover:bg-[#E94085] transition-colors duration-300">
            Shop Now
          </button>
        </div>
      </div>

      {/* Logos Section */}
      <div className="w-full bg-white py-6 px-4 sm:px-6 lg:px-8 overflow-x-auto">
        <div className="max-w-7xl mx-auto">
          <Image
            src="/images/image 1174.png"
            alt="Partner Logos"
            width={1000}
            height={100}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default GetLatest
