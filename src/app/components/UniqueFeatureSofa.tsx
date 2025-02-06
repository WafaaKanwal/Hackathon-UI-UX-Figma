
import Image from "next/image"

const UniqueFeatureSofa = () => {
  const features = [
    { color: "bg-[#FB2E86]", text: "All frames constructed with hardwood solids and laminates" },
    {
      color: "bg-[#2B2BF5]",
      text: "Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails",
    },
    { color: "bg-[#2BF5CC]", text: "Arms, backs and seats are structurally reinforced" },
  ]

  return (
    <div className="w-full bg-[#F1F0FF] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative w-full max-w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] mx-auto">
              <Image src="/images/Ellipse 63.png" alt="Circle 2" fill className="object-contain" />
              <Image
                src="/images/sofa blue.png"
                alt="Sofa"
                fill
                className="object-contain scale-75 sm:scale-90 lg:scale-100"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <div className="w-full p-4 sm:p-8 rounded-lg">
              {/* Heading */}
              <h2 className="text-[#151875] text-2xl sm:text-3xl lg:text-[2.1rem] font-bold mb-6">
                Unique Features Of Latest & Trending Products
              </h2>

              {/* Feature List */}
              <ul className="space-y-4 mb-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span
                      className={`w-[11px] h-[11px] ${feature.color} rounded-full mr-4 mt-1.5 flex-shrink-0`}
                    ></span>
                    <p className="text-[#ACABC3] text-sm sm:text-[15px] font-medium">{feature.text}</p>
                  </li>
                ))}
              </ul>

              {/* Add to Cart Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center mt-8">
                <button className="bg-[#FB2E86] border text-white px-6 sm:px-8 py-2 sm:py-3 rounded-sm text-sm font-bold hover:bg-[#E94085] mb-4 sm:mb-0">
                  Add To Cart
                </button>
                <div className="sm:ml-5">
                  <p className="text-[#151875] text-sm font-bold">B&B Italian Sofa</p>
                  <p className="text-[#7E81A2] text-sm">$32.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-12 lg:mb-20"></div>
    </div>
  )
}

export default UniqueFeatureSofa

