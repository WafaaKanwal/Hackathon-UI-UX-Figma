import Image from "next/image"
import { FaCheck } from "react-icons/fa"
import { Lato } from "next/font/google"

const lato = Lato({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
})

const Discountitem = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-24 sm:mt-36">
        <h2 className="text-3xl sm:text-[2.35rem] leading-tight sm:leading-[2.35rem] font-bold text-center text-[#151875] mb-8 flex place-content-center">
          Discount Item
        </h2>
      </div>
      <div className="w-full mt-10">
        <div className="w-full max-w-[30rem] h-12 mx-auto">
          <div className={lato.className}>
            <div className="flex flex-wrap gap-6 sm:gap-12 justify-center mt-2">
              <a
                href="#"
                className="text-[#151875] text-base sm:text-[18px] hover:text-[#FB4997] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FB4997] hover:after:w-full after:transition-all after:duration-300"
              >
                Wood Chair
              </a>
              <a
                href="#"
                className="text-[#151875] text-base sm:text-[18px] hover:text-[#FB4997] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FB4997] hover:after:w-full after:transition-all after:duration-300"
              >
                Plastic Chair
              </a>
              <a
                href="#"
                className="text-[#151875] text-base sm:text-[18px] hover:text-[#FB4997] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FB4997] hover:after:w-full after:transition-all after:duration-300"
              >
                Sofa Collection
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center mt-8 lg:mt-[-3rem]">
          <div className="w-full lg:w-1/2 mt-8 lg:mt-28 p-4 lg:p-8 rounded-lg">
            <h2 className="text-[#151875] text-2xl sm:text-[2.1rem] font-bold mb-2">20% Discount Of All Products</h2>
            <h3 className="text-[#FB4997] text-lg font-semibold mb-4">Eams Sofa Compact</h3>
            <p className="text-[#7E81A2] text-sm mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum
              condimentum.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 mb-6">
              <div className="flex items-center">
                <span className="text-[#151875] text-xs mr-2">
                  <FaCheck />
                </span>
                <p className="text-[#7E81A2] text-sm">Material expose like metals</p>
              </div>
              <div className="flex items-center">
                <span className="text-[#151875] text-xs mr-2">
                  <FaCheck />
                </span>
                <p className="text-[#7E81A2] text-sm">Clear lines and geometric figures</p>
              </div>
              <div className="flex items-center">
                <span className="text-[#151875] text-xs mr-2">
                  <FaCheck />
                </span>
                <p className="text-[#7E81A2] text-sm">Simple neutral colours.</p>
              </div>
              <div className="flex items-center">
                <span className="text-[#151875] text-xs mr-2">
                  <FaCheck />
                </span>
                <p className="text-[#7E81A2] text-sm">Material expose like metals</p>
              </div>
            </div>
            <button className="bg-[#FB4997] text-white px-8 sm:px-12 py-3 rounded-sm text-sm font-medium hover:bg-[#E94085]">
              Shop Now
            </button>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-16">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
              <Image
                src="/images/64.png"
                alt="Circle 2"
                width={340}
                height={340}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] sm:w-[70%] lg:w-[80%]"
              />
              <Image
                src="/images/image20.png"
                alt="Sofa"
                width={500}
                height={500}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] sm:w-[90%] lg:w-[100%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discountitem

