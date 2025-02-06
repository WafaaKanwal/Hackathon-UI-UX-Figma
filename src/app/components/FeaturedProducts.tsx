import Image from "next/image";
import { FC } from "react";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  code: string;
  price: string;
  isLarge?: boolean;
  isSmall?: boolean;
}

const ProductCard: FC<ProductCardProps> = ({
  imageSrc,
  title,
  code,
  price,
  isLarge = false,
  isSmall = false,
}) => {
  return ( 
    <div className="w-full px-2 sm:px-12 md:px-10 lg:px-3 xl:px-6 2xl:px-2">
      <div className="bg-white rounded-lg shadow-xl p-3 flex flex-col items-center relative w-full xs:h-[16rem] sm:w-[12rem] sm:h-[18rem] md:w-[13rem] md:h-[19rem] lg:w-[13rem] lg:h-[19rem] xl:w-[17rem] 2xl:w-[19rem] xl:h-[24rem] 2xl:h-[25rem] max-w-[350px] mx-auto mb-6 group hover:bg-[#2F1AC4] hover:cursor-pointer transition-all duration-300">
        {/* Image Section */}
        <div className="bg-[#F6F7FB] xs:w-[10.1rem] xs:h-[10rem] xs:mt-[-1rem] sm:mt-[-.8rem] sm:w-[12rem] sm:h-[11rem] md:w-[13rem] md:h-[11rem] lg:w-[13.1rem] lg:h-[11.5rem] xl:w-[17rem] 2xl:w-[19rem] xl:h-[24rem] 2xl:h-[15rem] aspect-square flex justify-center items-center mb-3 relative overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="contain"
            className="transition-all duration-300"
          />

          {/* Icons on Top Left of Image Section */}
          <div className="absolute top-2 left-2 flex space-x-2 text-gray-500 group-hover:opacity-100 opacity-0 transition-all duration-300">
            <div className="bg-[#EEEFFB] w-7 h-7 sm:w-8 sm:h-8 rounded-full flex place-content-center">
              <span className="text-lg sm:text-xl text-[#2F1AC4] mt-1.5"><BsCart2 /></span>
            </div>
            <span className="text-lg sm:text-xl text-[#1DB4E7] mt-1.5"><FaRegHeart /></span>
            <span className="text-lg sm:text-xl text-[#1DB4E7] mt-1.5"><IoSearch /></span>
          </div>

          {/* View Details Button at the Bottom of the Image Section */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-[#10B981] whitespace-nowrap text-xs sm:text-sm text-white py-1.5 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View Details
          </div>
        </div>

        {/* Title and Text Section */}
        <div className="w-full group-hover:text-white transition-all duration-300 p-2 flex flex-col items-center">
          <h3 className="text-pink-600 font-semibold text-xs sm:text-sm xl:text-lg mb-1.5 group-hover:text-white transition-all duration-300">
            {title}
          </h3>
          {/* span divs */}
          <div className="flex justify-center mb-2">
            <span className="w-3 h-[0.15rem] sm:w-4 sm:h-[0.2rem] xl:w-6 xl:h-[0.4rem] bg-[#05E6B7] rounded-full mx-0.5"></span>
            <span className="w-3 h-[0.15rem] sm:w-4 sm:h-[0.2rem] xl:w-6 xl:h-[0.4rem] bg-[#F701A8] rounded-full mx-0.5"></span>
            <span className="w-3 h-[0.15rem] sm:w-4 sm:h-[0.2rem] xl:w-6 xl:h-[0.4rem] bg-[#00009D] group-hover:bg-[#FFEAC1] rounded-full mx-0.5"></span>
          </div>
          <p className="text-[10px] sm:text-xs xl:text-lg text-gray-600 mb-1.5 group-hover:text-white transition-all duration-300">
            Code - {code}
          </p>
          <p className="text-xs sm:text-sm xl:text-lg font-light text-gray-800 group-hover:text-white transition-all duration-300">
            ${price}
          </p>
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts: FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-3 sm:px-12 md:px-20 lg:px-12 xl:px-16 2xl:px-0">
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#151875] mb-6">
          Featured Products
        </h2>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-full">
          <ProductCard
            imageSrc="/images/image 1168.png"
            title="Cantilever chair"
            code="Y523201"
            price="42.00"
            isSmall={true}
          />
          <ProductCard
            imageSrc="/images/image 1.png"
            title="Cantilever chair"
            code="Y523201"
            price="42.00"
            isSmall={true}
          />
          <ProductCard
            imageSrc="/images/image 1169.png"
            title="Cantilever chair"
            code="Y523201"
            price="42.00"
            isSmall={true}
          />
          <ProductCard
            imageSrc="/images/image 3.png"
            title="Cantilever chair"
            code="Y523201"
            price="42.00"
            isLarge={true}
          />
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8">
        <span className="xs:w-5 xs:h-[0.3rem] lg:w-10 lg:h-[0.5rem] bg-[#FEBAD7] cursor-pointer hover:bg-[#FB2E86] hover:w-7 rounded-full mx-1"></span>
        <span className="xs:w-5 xs:h-[0.3rem] lg:w-10 lg:h-[0.5rem] bg-[#FEBAD7] cursor-pointer hover:bg-[#FB2E86] hover:w-7 rounded-full mx-1"></span>
        <span className="xs:w-5 xs:h-[0.3rem] lg:w-10 lg:h-[0.5rem] bg-[#FEBAD7] cursor-pointer hover:bg-[#FB2E86] hover:w-7 rounded-full mx-1"></span>
        <span className="xs:w-5 xs:h-[0.3rem] lg:w-10 lg:h-[0.5rem] bg-[#FEBAD7] cursor-pointer hover:bg-[#FB2E86] hover:w-7 rounded-full mx-1"></span>
      </div>
    </div>
  );
};

export default FeaturedProducts;