import Image from "next/image";

const TrendingProducts = () => {
  return (
    <div>
      {/* Trending Products Section */}
      <div className="flex flex-col items-center gap-6 py-6 mt-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#151875]">
          Trending Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center shadow-custom">
            <div className="bg-[#F5F6F8] w-full h-60 flex justify-center items-center">
              <Image
                src={"/images/image11.png"}
                alt="Cantilever Chair"
                width={178}
                height={178}
                className="w-40 h-40 sm:w-48 sm:h-48 object-contain"
              />
            </div>
            <div className="text-center flex flex-col items-center gap-1 my-5 mb-8 text-[#151875]">
              <div className="text-base font-bold">Cantilever Chair</div>
              <div className="flex items-center">
                <span className="text-base font-medium text-[#151875]">$26.00</span>
                <span className="text-sm text-[#1A0B5B] opacity-30 line-through ml-2">$42.00</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center shadow-custom">
            <div className="bg-[#F5F6F8] w-full h-60 flex justify-center items-center">
              <Image
                src={"/images/image12.png"}
                alt="Cantilever Chair"
                width={178}
                height={178}
                className="w-40 h-40 sm:w-48 sm:h-48 object-contain"
              />
            </div>
            <div className="text-center flex flex-col items-center gap-1 my-5 mb-8 text-[#151875]">
              <div className="text-base font-bold">Cantilever Chair</div>
              <div className="flex items-center">
                <span className="text-base font-medium text-[#151875]">$26.00</span>
                <span className="text-sm text-[#1A0B5B] opacity-30 line-through ml-2">$42.00</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center shadow-custom">
            <div className="bg-[#F5F6F8] w-full h-60 flex justify-center items-center">
              <Image
                src={"/images/image13.png"}
                alt="Cantilever Chair"
                width={178}
                height={178}
                className="w-40 h-40 sm:w-48 sm:h-48 object-contain"
              />
            </div>
            <div className="text-center flex flex-col items-center gap-1 my-5 mb-8 text-[#151875]">
              <div className="text-base font-bold">Cantilever Chair</div>
              <div className="flex items-center">
                <span className="text-base font-medium text-[#151875]">$26.00</span>
                <span className="text-sm text-[#1A0B5B] opacity-30 line-through ml-2">$42.00</span>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center shadow-custom">
            <div className="bg-[#F5F6F8] w-full h-60 flex justify-center items-center">
              <Image
                src={"/images/image14.png"}
                alt="Cantilever Chair"
                width={220}
                height={220}
                className="w-40 h-40 sm:w-48 sm:h-48 object-contain"
              />
            </div>
            <div className="text-center flex flex-col items-center gap-1 my-5 mb-8 text-[#151875]">
              <div className="text-base font-bold">Cantilever Chair</div>
              <div className="flex items-center">
                <span className="text-base font-medium text-[#151875]">$26.00</span>
                <span className="text-sm text-[#1A0B5B] opacity-30 line-through ml-2">$42.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Section */}
      <div className="w-full max-w-[71.5rem] mx-auto px-4 sm:px-8 flex flex-col sm:flex-row gap-6 justify-center mt-6">
        {/* Card 1 */}
        <div className="w-full sm:w-[24.5rem] h-64 flex flex-col gap-1 bg-[#FFF6FB] rounded-lg items-center justify-center relative">
          <div className="mt-6 sm:mr-[5rem] text-center sm:text-left">
            <h2 className="text-[#151875] text-xl font-semibold whitespace-nowrap mb-1">
              23% off in all products
            </h2>
            <a
              href="#"
              className="text-[#FB4997] font-semibold border-b border-[#FB4997]"
            >
              Shop Now
            </a>
          </div>
          <div className="sm:ml-40 mt-[-2.5rem]">
            <Image
              src="/images/image15.png"
              alt="Clock"
              width={500}
              height={500}
              className="w-48 h-48"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-[24.5rem] h-64 bg-[#EEEFFB] rounded-lg flex flex-col items-center justify-between relative">
          <div className="mt-[2rem] sm:ml-5 text-center sm:text-left">
            <h2 className="text-[#151875] text-xl font-semibold whitespace-nowrap mb-1">
              23% off in all products
            </h2>
            <a
              href="#"
              className="text-[#FB4997] font-semibold border-b border-[#FB4997]"
            >
              View Collection
            </a>
          </div>
          <div className="sm:ml-16 mt-1">
            <Image
              src="/images/image16.png"
              alt="Clock"
              width={500}
              height={500}
              className="w-[16.5rem] h-[10rem]"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-[18rem] h-64 flex flex-col gap-6">
          {/* Product 1 */}
          <div className="flex justify-left items-center">
            <div className="flex w-[6.5rem] items-center bg-[#F5F6F8] shadow-sm">
              <Image
                src="/images/image17.png"
                alt="Executive Seat Chair"
                width={500}
                height={500}
                className="w-[5rem] h-[4.3rem] object-contain ml-3"
              />
            </div>
            <div className="ml-2">
              <p className="text-[#151875] text-base font-bold">Executive Seat Chair</p>
              <p className="text-[#151875] text-sm line-through">$32.00</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex justify-left items-center">
            <div className="flex w-[6.5rem] items-center bg-[#F5F6F8] shadow-sm">
              <Image
                src="/images/image18.png"
                alt="Executive Seat Chair"
                width={500}
                height={500}
                className="w-[5rem] h-[4.3rem] object-contain ml-3"
              />
            </div>
            <div className="ml-2">
              <p className="text-[#151875] text-base font-bold">Executive Seat Chair</p>
              <p className="text-[#151875] text-sm line-through">$32.00</p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="flex justify-left items-center">
            <div className="flex w-[6.5rem] items-center bg-[#F5F6F8] shadow-sm">
              <Image
                src="/images/image19.png"
                alt="Executive Seat Chair"
                width={500}
                height={500}
                className="w-[5rem] h-[4.3rem] object-contain ml-3"
              />
            </div>
            <div className="ml-2">
              <p className="text-[#151875] text-base font-bold">Executive Seat Chair</p>
              <p className="text-[#151875] text-sm line-through">$32.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;