

import Image from "next/image"

const ProductGrid = () => {
  const products = [
    {
      image: "/images/Rectangle 63.png",
      name: "Quam sed",
      price: "$32.00",
      originalPrice: "$56.00",
    },
    {
      image: "/images/Rectangle 63 (1).png",
      name: "Tristique sed",
      price: "$32.00",
      originalPrice: "$56.00",
    },
    {
      image: "/images/Rectangle 63 (2).png",
      name: "A etiam",
      price: "$32.00",
      originalPrice: "$56.00",
    },
    {
      image: "/images/Rectangle 63 (3).png",
      name: "Mi nisi",
      price: "$32.00",
      originalPrice: "$56.00",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="text-center cursor-pointer">
            {/* Image */}
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Title */}
            <h2 className="text-lg font-medium mt-4 text-[#000000] text-left ml-0 sm:ml-6">{product.name}</h2>
            {/* Price */}
            <div className="flex flex-wrap justify-center items-center gap-2 mt-2">
              <span className="text-[#232A69] text-[12px] font-medium">{product.price}</span>
              <span className="text-pink-500 text-[12px] line-through font-medium">{product.originalPrice}</span>
              <span className="text-yellow-400 ml-0 sm:ml-3 w-full sm:w-auto">
                ★ ★ ★ ★ <span className="text-gray-400">★</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductGrid
