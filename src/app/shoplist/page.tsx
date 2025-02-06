import Image from "next/image"
import { FaShoppingCart, FaHeart, FaSearchPlus } from "react-icons/fa"
import Link from "next/link"

export default function ShopList() {
  const products = [
    {
      id: 1,
      name: "Accumsan tincidunt",
      image: "/images/s1.png",
      price: "$49.00",
      discountedPrice: "$39.00",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 2,
      name: "In nulla",
      image: "/images/s2.png",
      price: "$59.00",
      discountedPrice: "$45.00",
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 3,
      name: "Vel sem",
      image: "/images/s3.png",
      price: "$75.00",
      discountedPrice: "$65.00",
      rating: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 4,
      name: "Porttitor cum",
      image: "/images/s4.png",
      price: "$99.00",
      discountedPrice: "$85.00",
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 5,
      name: "Nunc in",
      image: "/images/s5.png",
      price: "$120.00",
      discountedPrice: "$99.00",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 6,
      name: "Vitae facilisis",
      image: "/images/s6.png",
      price: "$39.00",
      discountedPrice: "$25.00",
      rating: 2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 7,
      name: "Curabitur lectus",
      image: "/images/s7.png",
      price: "$69.00",
      discountedPrice: "$49.00",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
  ]

  return (
    <div className="min-h-screen py-10">
      {/* Rectangle Section */}
      <div className="relative w-full h-[240px] bg-[#F6F5FF] mb-8">
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#151875] font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-[36px] leading-tight">
          Shop List
        </h1>
        <p className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-sm sm:text-base font-medium text-black">
          Home . Pages <span className="text-[#FB2E86]">. Shop List</span>
        </p>
      </div>

      {/* Title Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <h2 className="text-[#151875] font-bold text-xl sm:text-2xl mb-2">Ecommerce Accessories & Fashion Items</h2>
            <p className="text-[#8A8FB9] text-sm">About 9,620 results (0.62 seconds)</p>
          </div>

          {/* Sort by and Per Page Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4 sm:mt-0">
            {/* Per Page */}
            <div className="flex items-center">
              <label htmlFor="per-page" className="mr-2 text-[#3F509E] text-sm font-medium whitespace-nowrap">
                Per Page:
              </label>
              <input
                type="number"
                id="per-page"
                name="per-page"
                className="w-16 h-8 border border-[#E7E6EF] p-1 text-sm"
              />
            </div>

            {/* Sort By */}
            <div className="flex items-center">
              <label htmlFor="sort-by" className="mr-2 text-sm font-medium text-[#3F509E] whitespace-nowrap">
                Sort By:
              </label>
              <select id="sort-by" name="sort-by" className="border border-[#E7E6EF] w-32 h-8 p-1 text-sm">
                <option value="relevance">Best Match</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
              </select>
            </div>

            {/* View */}
            <div className="flex items-center">
              <label htmlFor="view" className="mr-2 text-sm font-medium text-[#3F509E] whitespace-nowrap">
                View:
              </label>
              <div className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-[#3F509E] hover:text-blue-500 cursor-pointer"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="3" width="8" height="8" rx="1"></rect>
                  <rect x="13" y="3" width="8" height="8" rx="1"></rect>
                  <rect x="3" y="13" width="8" height="8" rx="1"></rect>
                  <rect x="13" y="13" width="8" height="8" rx="1"></rect>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-[#3F509E] hover:text-blue-500 cursor-pointer"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="5" width="4" height="4" rx="1"></rect>
                  <rect x="3" y="11" width="4" height="4" rx="1"></rect>
                  <rect x="3" y="17" width="4" height="4" rx="1"></rect>
                  <line x1="10" y1="7" x2="21" y2="7" stroke="currentColor" strokeWidth="2"></line>
                  <line x1="10" y1="13" x2="21" y2="13" stroke="currentColor" strokeWidth="2"></line>
                  <line x1="10" y1="19" x2="21" y2="19" stroke="currentColor" strokeWidth="2"></line>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full max-w-4xl flex flex-col sm:flex-row items-center gap-6 shadow-sm p-4 bg-[#F6F6FD80] rounded-lg"
            >
              {/* Left Image */}
              <div className="w-full sm:w-1/3">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              {/* Right Details */}
              <div className="w-full sm:w-2/3 flex flex-col justify-between">
                <div>
                  <h2 className="text-[#151875] text-xl font-bold mb-2">{product.name}</h2>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex space-x-1">
                      <span className="block w-3 h-3 rounded-full bg-yellow-500"></span>
                      <span className="block w-3 h-3 rounded-full bg-pink-500"></span>
                      <span className="block w-3 h-3 rounded-full bg-blue-600"></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-red-500 text-sm line-through">{product.price}</p>
                      <p className="text-green-600 font-bold">{product.discountedPrice}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    {"★"
                      .repeat(product.rating)
                      .padEnd(5, "☆")
                      .split("")
                      .map((star, index) => (
                        <span key={index} className={`${star === "★" ? "text-yellow-400" : "text-gray-300"} text-lg`}>
                          {star}
                        </span>
                      ))}
                  </div>
                  <p className="text-[#A9ACC6] text-sm mb-4">{product.description}</p>
                </div>
                <div className="flex items-center gap-6">
                  {[FaShoppingCart, FaHeart, FaSearchPlus].map((Icon, index) => (
                    <div key={index} className="relative cursor-pointer group">
                      <Icon className="text-2xl text-[#535399] group-hover:text-[#FB2E86] transition-colors duration-300" />
                      <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Icon className="text-sm text-[#535399]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link href="/shoplistsidebar">
            <button className="px-14 py-2 bg-[#FB4997] text-white text-sm font-medium rounded-sm hover:bg-[#E94085] transition-colors duration-300">
              Next
            </button>
          </Link>
        </div>

        <div className="w-full max-w-4xl mx-auto mt-20">
          <Image src="/images/image 1174.png" alt="brands" width={1920} height={500} className="w-full h-auto" />
        </div>
      </div>
    </div>
  )
}
