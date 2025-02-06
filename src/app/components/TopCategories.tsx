import Image from "next/image"

const TopCategories = () => {
  const categories = [
    { image: "/images/image 20.png", name: "Mini LCW Chair", price: "$56.00" },
    { image: "/images/image 1168.png", name: "Mini LCW Chair", price: "$56.00" },
    { image: "/images/image11.png", name: "Mini LCW Chair", price: "$56.00" },
    { image: "/images/image 20.png", name: "Mini LCW Chair", price: "$56.00" },
  ]

  return (
    <div className="max-w-[71.5rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-[5rem]">
        <h2 className="text-[2.35rem] leading-[2.35rem] font-bold text-center text-[#151875] mb-8 mt-[-1rem] flex place-content-center">
          Top Categories
        </h2>
      </div>

      <div className="w-full flex flex-col items-center gap-8 p-8">
        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((category, index) => (
            <div key={index} className="mb-8 sm:mb-0">
              <div className="relative w-[14rem] h-[14rem] flex items-center justify-center group cursor-pointer">
                <div className="absolute inset-0 w-[14.2rem] h-[14.2rem] mt-1 ml-[-.5rem] rounded-full bg-[#7826f3] opacity-0 group-hover:opacity-80 transition-opacity duration-300 -z-10"></div>
                <div className="relative bg-[#F6F7FB] rounded-full w-[14rem] h-[14rem] flex items-center justify-center shadow-custom">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={500}
                    height={500}
                    className="w-[8rem] h-[8rem] object-contain"
                  />
                  <button className="absolute bottom-6 px-3 py-1 bg-[#34D399] text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Shop
                  </button>
                </div>
              </div>
              <div className="text-center mt-6 cursor-pointer">
                <h3 className="text-[#151875] text-sm font-medium">{category.name}</h3>
                <p className="text-[#151875] text-sm">{category.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3 place-content-center">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="w-[10px] h-[10px] border-2 border-[#FB2E86] rounded-lg transform cursor-pointer hover:bg-[#FB2E86]"
          ></div>
        ))}
      </div>
    </div>
  )
}

export default TopCategories
