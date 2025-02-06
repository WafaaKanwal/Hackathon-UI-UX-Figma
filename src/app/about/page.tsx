import React from "react";
import Image from "next/image";

export default function About() {
  return (  
    <div className="min-h-screen py-10 relative">
      {/* Rectangle Section */}
      <div className="absolute top-0 left-0 w-full h-[150px] md:h-[200px] bg-[#F6F5FF]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-[#151875] font-bold text-2xl md:text-3xl lg:text-4xl pt-8 md:pt-12 lg:pt-16 lg:ml-[50px] 2xl:ml-[200px]">
            About Us
          </h1>
          <p className="mt-2 md:mt-3 lg:mt-4 text-sm md:text-base lg:text-lg lg:ml-[50px] 2xl:ml-[199px] text-black font-medium">
            Home . Pages <span className="text-[#FB2E86]">. About Us</span>
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-[150px] md:mt-[200px] lg:mt-[250px] flex flex-col lg:flex-row gap-8">
        {/* Left Column: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/c1.png"
            alt="About Us"
            width={500}
            height={400}
            className="rounded-lg shadow-lg w-full max-w-[500px] h-auto"
          />
        </div>

        {/* Right Column: Text and Button */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-[#151875] text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Know About Our Ecommerce <br /> Business, History
          </h2>
          <p className="text-[#8A8FB9] mb-6 text-sm md:text-base lg:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo.
          </p>
          <button className="bg-[#FB2E86] text-white py-2 md:py-3 px-4 md:px-6 rounded-md hover:bg-[#e42a75] transition w-full max-w-[150px]">
            Contact Us
          </button>
        </div>
      </div>

      {/* Our Features Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-16 md:mt-20 lg:mt-24">
        <h2 className="text-[#151875] text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">
          Our Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Feature Boxes */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-[#31208A0D] p-6 md:p-8 rounded-lg text-center shadow-md"
            >
              <div className="mb-4">
                <Image
                  src={`/images/f${i + 1}.png`}
                  alt={`Feature ${i + 1} Icon`}
                  width={50}
                  height={50}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-[#151875] text-lg md:text-xl font-semibold mb-2">
                {
                  [
                    "Fast Delivery",
                    "Cash Back",
                    "Quality Product",
                    "24/7 Support",
                  ][i]
                }
              </h3>
              <p className="text-[#8A8FB9] text-sm md:text-base">
                {
                  [
                    "Get your orders delivered at your doorstep swiftly and safely.",
                    "Enjoy amazing cashback offers on every purchase.",
                    "We ensure the best quality products for our customers.",
                    "Our team is available 24/7 to assist you with your queries.",
                  ][i]
                }
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Client Say Section */}
      <div className="w-full bg-[#F6F5FF] py-12 md:py-16 mt-16 md:mt-20 lg:mt-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-[#151875] text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">
            Our Client Say!
          </h2>
          <div className="flex flex-col items-center">
            {/* Client Image */}
            <Image
              src="/images/client.png"
              alt="Client"
              width={120}
              height={120}
              className="rounded-full shadow-lg mb-4"
            />
            {/* Client Name */}
            <h3 className="text-[#151875] text-lg md:text-xl font-semibold">
              Salena Gomez
            </h3>
            <h4 className="text-[#8A8FB9] text-sm md:text-base mt-1">
              Ceo At Webecy Digital
            </h4>
            {/* Client Description */}
            <p className="text-[#8A8FB9] text-sm md:text-base mt-4 max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. It has
              been an absolute pleasure working with this team!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}