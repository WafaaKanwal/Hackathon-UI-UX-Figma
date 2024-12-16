import React from "react";
import Image from "next/image";

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
  ];

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="grid grid-cols-4 gap-6 ">
        {products.map((product, index) => (
          <div key={index} className="text-center cursor-pointer">
            {/* Image */}
            <div>
              <Image
                src={product.image}
                alt={product.name}
                width={500} 
              height={500}
                className="w-full h-60 object-cover rounded-md"
              />
            </div>
            {/* Title */}
            <h2 className="text-lg font-medium mt-4 text-[#000000] text-left ml-6">{product.name}</h2>
            {/* Price */}
            <div className="flex justify-center items-center gap-2 mt-2">
              <span className="text-[#232A69] text-[12px] font-medium">{product.price}</span>
              <span className="text-pink-500 text-[12px] line-through font-medium">
                {product.originalPrice}
              </span>
              <span className="text-yellow-400 ml-3">★ ★ ★ ★ <span className="text-gray-400">★</span></span>
            </div>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
