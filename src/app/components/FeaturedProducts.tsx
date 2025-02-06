
import Image from "next/image"
import type { FC } from "react"
import { BsCart2 } from "react-icons/bs"
import { FaRegHeart } from "react-icons/fa"
import { IoSearch } from "react-icons/io5"

interface ProductCardProps {
  imageSrc: string
  title: string
  code: string
  price: string
  isLarge?: boolean
  isSmall?: boolean
}

const ProductCard: FC<ProductCardProps> = ({ imageSrc, title, code, price, isLarge = false, isSmall = false }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl mx-auto p-2 sm:p-4 flex flex-col items-center relative w-[150px] sm:w-[250px] h-[235px] sm:h-[450px] mb-4 sm:mb-6 group hover:bg-[#2F1AC4] hover:cursor-pointer transition-all duration-300">
      {/* Image Section */}
      <div className="bg-[#F6F7FB] w-[9.5rem] sm:w-[15.9rem] h-[140px] sm:h-[17rem] mt-[-10px] sm:mt-[-20px] flex justify-center items-center mb-2 sm:mb-4 relative overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            layout="fill"
            objectFit="contain"
            className="transition-all duration-300 !absolute !top-0 !left-0"
          />
        </div>

        {/* Icons on Top Left of Image Section */}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex space-x-2 sm:space-x-3 text-gray-500 group-hover:opacity-100 opacity-0 transition-all duration-300">
          <div className="bg-[#EEEFFB] w-6 sm:w-10 h-6 sm:h-10 rounded-3xl flex place-content-center items-center">
            <span className="text-base sm:text-2xl text-[#2F1AC4]">
              <BsCart2 />
            </span>
          </div>
          <span className="text-base sm:text-2xl text-[#1DB4E7] mt-1 sm:mt-2">
            <FaRegHeart />
          </span>
          <span className="text-base sm:text-2xl text-[#1DB4E7] mt-1 sm:mt-2">
            <IoSearch />
          </span>
        </div>

        {/* View Details Button at the Bottom of the Image Section */}
        <div className="absolute bottom-2 sm:bottom-3 left-1/2 transform -translate-x-1/2 bg-[#10B981] text-[10px] sm:text-sm text-white py-1 sm:py-2 px-2 sm:px-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Details
        </div>
      </div>

      {/* Title and Text Section */}
      <div className="w-full group-hover:text-white transition-all duration-300 p-1 sm:p-4 flex flex-col items-center">
        <h3 className="text-pink-600 font-semibold text-xs sm:text-lg mb-1 sm:mb-2 group-hover:text-white transition-all duration-300">
          {title}
        </h3>
        <div className="flex justify-center mb-1 sm:mb-4">
          <span className="w-2 sm:w-5 h-[0.2rem] sm:h-[0.4rem] bg-[#FB2E86] rounded-full mx-1"></span>
          <span className="w-2 sm:w-5 h-[0.2rem] sm:h-[0.4rem] bg-[#FEBAD7] rounded-full mx-1"></span>
          <span className="w-2 sm:w-5 h-[0.2rem] sm:h-[0.4rem] bg-[#FEBAD7] rounded-full mx-1"></span>
        </div>
        <p className="text-[8px] sm:text-sm text-gray-600 mb-1 sm:mb-2 group-hover:text-white transition-all duration-300">
          Code - {code}
        </p>
        <p className="text-[10px] sm:text-base font-light text-gray-800 group-hover:text-white transition-all duration-300">
          ${price}
        </p>
      </div>
    </div>
  )
}

const FeaturedProducts: FC = () => {
  const products = [
    { imageSrc: "/images/image 1168.png", title: "Cantilever chair", code: "Y523201", price: "42.00", isSmall: true },
    { imageSrc: "/images/image 1.png", title: "Cantilever chair", code: "Y523201", price: "42.00", isSmall: true },
    { imageSrc: "/images/image 1169.png", title: "Cantilever chair", code: "Y523201", price: "42.00", isSmall: true },
    { imageSrc: "/images/image 3.png", title: "Cantilever chair", code: "Y523201", price: "42.00", isLarge: true },
  ]

  return (
    <div className="max-w-screen-xl mx-auto py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-[2.35rem] leading-tight sm:leading-[2.35rem] font-bold text-center text-[#151875] mb-4 sm:mb-8 mt-4 sm:mt-[4.4rem] flex place-content-center">
        Featured Products
      </h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-2 sm:mt-[1rem] mx-auto">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 sm:mt-[3rem]">
        <span className="w-3 sm:w-6 h-[0.3rem] sm:h-[0.4rem] bg-[#FEBAD7] cursor-pointer hover:bg-[#FB2E86] rounded-full mx-1"></span>
        <span className="w-3 sm:w-6 h-[0.3rem] sm:h-[0.4rem] bg-[#FEBAD7] cursor-pointer hover:bg-[#FB2E86] rounded-full mx-1"></span>
        <span className="w-3 sm:w-6 h-[0.3rem] sm:h-[0.4rem] bg-[#FEBAD7] cursor-pointer hover:bg-[#FB2E86] rounded-full mx-1"></span>
        <span className="w-3 sm:w-6 h-[0.3rem] sm:h-[0.4rem] bg-[#FEBAD7] cursor-pointer hover:bg-[#FB2E86] rounded-full mx-1"></span>
      </div>
    </div>
  )
}

export default FeaturedProducts

