import Image from "next/image";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Vel elit euismod",
      originalPrice: "49.00",
      discountedPrice: "26.00",
      image: "/images/1.png",
    },
    {
      id: 2,
      name: "Ultricies condimentum imperdiet",
      originalPrice: "42.00",
      discountedPrice: "26.00",
      image: "/images/2.png",
    },
    {
      id: 3,
      name: "Vitae suspendisse sed",
      originalPrice: "42.00",
      discountedPrice: "26.00",
      image: "/images/3.png",
    },
    {
      id: 4,
      name: "Sed at fermentum",
      originalPrice: "42.00",
      discountedPrice: "26.00",
      image: "/images/4.png",
    },
    {
      id: 5,
      name: "Fusce pellentesque at",
      originalPrice: "34.99",
      discountedPrice: "24.99",
      image: "/images/5.png",
    },
    {
      id: 6,
      name: "Vestibulum magna laoreet",
      originalPrice: "44.99",
      discountedPrice: "34.99",
      image: "/images/6.png",
    },
    {
      id: 7,
      name: "Sollicitudin amet orci",
      originalPrice: "54.99",
      discountedPrice: "44.99",
      image: "/images/7.png",
    },
    {
      id: 8,
      name: "Ultrices mauris sit",
      originalPrice: "64.99",
      discountedPrice: "54.99",
      image: "/images/8.png",
    },
    {
      id: 9,
      name: "Pellentesque condimentum ac",
      originalPrice: "64.99",
      discountedPrice: "54.99",
      image: "/images/9.png",
    },
    {
      id: 10,
      name: "Cras scelerisque velit",
      originalPrice: "64.99",
      discountedPrice: "54.99",
      image: "/images/10.png",
    },
    {
      id: 11,
      name: "Lectus vulputate faucibus",
      originalPrice: "64.99",
      discountedPrice: "54.99",
      image: "/images/11.png",
    },
    {
      id: 12,
      name: "Purus risus, ut",
      originalPrice: "64.99",
      discountedPrice: "54.99",
      image: "/images/12.png",
    },
  ];

  return (
    <div className="min-h-screen py-10">
      {/* Rectangle Section */}
      <div className="absolute mt-[-44px] left-0 w-full h-[220px] bg-[#F6F5FF]">
        <h1
          className="text-[#151875] font-bold ml-[279px] mt-[67px] font-"
          style={{
            fontSize: "36px",
            lineHeight: "25.78px",
          }}
        >
          Shop Grid Default
        </h1>
        <p
          className="mt-5 ml-[282px]"
          style={{
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "14.4px",
            color: "black",
          }}
        >
          Home . Pages{" "}
          <span className="text-[#FB2E86]">. Shop Grid Default</span>
        </p>
      </div>

      {/* Title Section */}
      <div className="absolute mt-[370px] top-4 w-full sm:w-4/5 lg:w-3/4 px-4 sm:px-6 lg:px-8 ml-[250px] flex items-center justify-between">
        <div>
          <h2
            className="text-[#151875] font-bold whitespace-nowrap"
            style={{
              fontSize: "22px",
              lineHeight: "25.78px",
            }}
          >
            Ecommerce Accessories & Fashion Items
          </h2>
          <p
            className="mt-2"
            style={{
              fontFamily: "Lato",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "14.4px",
              color: "#8A8FB9",
            }}
          >
            About 9,620 results (0.62 seconds)
          </p>
        </div>

        {/* Sort by and Per Page Section */}
        <div className=" w-[20px] whitespace-nowrap flex items-center gap-4 mr-[210px]">
          {/* Per Page */}
          <div className="ml-[-380px] flex items-center">
            <label
              htmlFor="per-page"
              className="mr-2 text-[#3F509E] text-sm font-medium"
            >
              Per Page:
            </label>
            <input
              type="number"
              id="per-page"
              name="per-page"
              className="w-[55px] h-[25px] border border-[#E7E6EF] p-1 text-sm"
            />
          </div>

          {/* Sort By */}
          <div className="flex items-center">
            <label
              htmlFor="sort-by"
              className="mr-2 text-sm font-medium text-[#3F509E]"
            >
              Sort By:
            </label>
            <select
              id="sort-by"
              name="sort-by"
              className="border border-[#E7E6EF] w-[110px] h-[25px] p-1 text-sm"
            >
              <option value="relevance">Best Match</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>

          {/* View */}
          <div className="flex items-center">
            <label
              htmlFor="view"
              className="mr-2 text-sm font-medium text-[#3F509E]"
            >
              View:
            </label>
            <div className="flex gap-4">
              {/* Grid View Icon (4 boxes) */}
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

              {/* List View Icon (Boxes Filled) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-[-15px] text-[#3F509E] hover:text-blue-500 cursor-pointer"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* Three filled boxes */}
                <rect x="3" y="5" width="4" height="4" rx="1"></rect>
                <rect x="3" y="11" width="4" height="4" rx="1"></rect>
                <rect x="3" y="17" width="4" height="4" rx="1"></rect>

                {/* Three lines */}
                <line
                  x1="10"
                  y1="7"
                  x2="21"
                  y2="7"
                  stroke="currentColor"
                  strokeWidth="2"
                ></line>
                <line
                  x1="10"
                  y1="13"
                  x2="21"
                  y2="13"
                  stroke="currentColor"
                  strokeWidth="2"
                ></line>
                <line
                  x1="10"
                  y1="19"
                  x2="21"
                  y2="19"
                  stroke="currentColor"
                  strokeWidth="2"
                ></line>
              </svg>
            </div>
            <input
              type="number"
              id="per-page"
              name="per-page"
              className="ml-[14px] w-[115px] h-[25px] border border-[#E7E6EF] p-1 text-sm"
            />
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Product Grid */}
        <div className="mt-[400px] relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center relative"
            >
              {/* Card Container */}
              <div className="bg-gray-100 rounded-lg shadow-md hover:shadow-lg overflow-hidden transition-all duration-300 flex justify-center items-center p-4 w-[210px] h-[250px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="rounded-full object-cover"
                />
              </div>

              {/* Name, Dots, and Prices Below the Card */}
              <h3 className="whitespace-nowrap text-[16px] font-sans font-bold mt-4">
                {product.name}
              </h3>
              <div className="flex justify-center items-center mt-2">
                <Image
                  src="/images/dots-icon.png"
                  alt="Three dots"
                  width={42}
                  height={10}
                />
              </div>
              <div className="flex justify-center gap-4 mt-2">
                <p className="text-red-500 line-through text-[14px]">
                  ${product.originalPrice}
                </p>
                <p className="text-green-600 font-bold text-[14px]">
                  ${product.discountedPrice}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[700px] mt-[100px] ml-[400px]">
        <Image
          src="/images/image 1174.png"
          alt="brands"
          width={1920}
          height={500}
          className="w-full object-cover"
        />
      </div>
    </div>
  );
}
