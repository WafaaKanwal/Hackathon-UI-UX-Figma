import Image from "next/image"
import Link from "next/link"

export default function ProductDetails() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <div className="bg-[#F6F5FF] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[#151875] font-bold text-3xl sm:text-4xl md:text-5xl mb-4">Product Details</h1>
          <p className="text-sm sm:text-base font-medium">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            . Pages <span className="text-[#FB2E86]">. Product Details</span>
          </p>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Side Images */}
            <div className="md:w-1/2 p-4">
              <div className="flex flex-col items-center">
                <Image
                  src="/images/p4.png"
                  alt="Product image 4"
                  width={375}
                  height={487}
                  className="w-full h-auto mb-4"
                />
                <div className="flex gap-4 justify-center">
                  {["/images/p1.png", "/images/p2.png", "/images/p3.png"].map((src, index) => (
                    <Image
                      key={index}
                      src={src || "/placeholder.svg"}
                      alt={`Product Image ${index + 1}`}
                      width={100}
                      height={100}
                      className="rounded-lg"
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Right Side Product Details */}
            <div className="md:w-1/2 p-4 flex flex-col justify-center">
              <h1 className="text-[#151875] font-bold text-2xl sm:text-3xl mb-2">Playwood Arm Chair</h1>
              <div className="flex items-center gap-1 mb-2">
                <span className="text-yellow-400 text-sm">★★★★☆</span>
                <span className="text-sm">(22)</span>
              </div>
              <div className="flex items-center gap-4 mb-2">
                <p className="text-red-500 line-through">$49.00</p>
                <p className="text-[#151875] font-bold">$26.00</p>
              </div>
              <p className="text-[#151875] font-semibold mb-2">Color:</p>
              <p className="mb-4 text-sm text-[#A9ACC6]">
                A beautiful playwood arm chair that adds a touch of elegance and comfort to any room.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <button className="bg-[#FB2E86] text-white px-4 py-2 rounded hover:bg-[#E94085] transition-colors duration-300">
                  Add to Cart
                </button>
                <button className="text-[#151875] text-2xl">❤</button>
              </div>
              <p className="text-[#151875] font-semibold mb-2">Categories:</p>
              <p className="text-[#151875] font-semibold mb-2">Tags:</p>
              <div className="flex items-center gap-4">
                <span className="text-[#151875] font-semibold">Share:</span>
                <Image src="/images/Group 205.png" alt="Social Share" width={60} height={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-[#F9F8FE] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 mb-8">
            {["Description", "Additional Info", "Reviews", "Video"].map((item) => (
              <h4 key={item} className="text-lg font-bold text-[#151875] cursor-pointer">
                {item}
              </h4>
            ))}
          </div>
          <div className="mb-6">
            <h4 className="font-semibold text-[#151875] mb-2">Varius tempor.</h4>
            <p className="text-sm text-[#A9ACC6]">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend
              habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur
              neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget
              faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo
              netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
            </p>
          </div>
          <div>
            <h4 className="text-[#151875] mb-2 font-semibold">More details</h4>
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-start gap-2 mb-2">
                <Image src="/images/md-arrow.png" alt="Arrow Icon" width={16} height={16} />
                <p className="text-sm text-[#A9ACC6]">
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus
                  dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#151875] font-bold text-2xl sm:text-3xl md:text-4xl mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { src: "/images/r1.png", title: "Mens Fashion Wear", price: "$25.00" },
              { src: "/images/r2.png", title: "Women's Fashion", price: "$28.00" },
              { src: "/images/r3.png", title: "Wolx Dummy Fashion", price: "$30.00" },
              { src: "/images/r4.png", title: "Top Wall Digital Clock", price: "$35.00" },
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={product.src || "/placeholder.svg"}
                  alt={`Related Product ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-sm font-semibold mb-1">{product.title}</h3>
                  <p className="text-gray-500 text-xs">{product.price}</p>
                  <div className="mt-2">
                    <span className="text-yellow-400 text-sm">★★★★☆</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brands Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Image
            src="/images/image 1174.png"
            alt="Brands"
            width={1000}
            height={100}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  )
}

