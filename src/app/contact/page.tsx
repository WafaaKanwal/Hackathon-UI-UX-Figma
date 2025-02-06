import React from "react";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen py-10 relative">
  {/* Rectangle Section */}
<div className="absolute top-0 left-0 w-full h-[200px] bg-[#F6F5FF] flex flex-col items-center justify-center lg:items-start lg:pl-[283px]">
  <h1
    className="text-[#151875] font-bold mt-[10px] text-center lg:text-left"
    style={{
      fontSize: "36px",
      lineHeight: "25.78px",
    }}
  >
    Contact Us
  </h1>
  <p
    className="mt-5 text-center lg:text-left"
    style={{
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "14.4px",
      color: "black",
    }}
  >
    Home . Pages <span className="text-[#FB2E86]">. Contact Us</span>
  </p>
</div>


      {/* Content Section */}
      <div className="relative mt-[260px] px-5 flex flex-col lg:flex-row gap-10">
        {/* Left Side: Information About Us */}
        <div className="lg:w-1/2 lg:ml-[240px]">
          <h2 className=" whitespace-nowrap text-[#151875] text-[36px] font-bold mb-4">
            Information About Us
          </h2>
          <p className="text-[#8A8FB9] mb-6 1ont-lato leading-[25.6px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Mauris tincidunt venenatis magna, ut malesuada arcu pulvinar vitae.
            <br />
            Suspendisse potenti. Sed sit amet dapibus.
          </p>

          {/* Dots Below */}
          <div className="flex justify-center space-x-4 mt-4 lg:ml-0">
            <span className="block w-6 h-6 rounded-full bg-blue-600"></span>
            <span className="block w-6 h-6 rounded-full bg-pink-500"></span>
            <span className="block w-6 h-6 rounded-full bg-blue-400"></span>
          </div>

          <h3 className="text-[#151875] text-[36px] font-bold mb-4 mt-[140px]">
            Get in Touch
          </h3>
          <p className="text-[#8A8FB9] font-lato leading-[25.6px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Iure
            veritatis sint vel, maiores accusantium ut, exercitationem.
          </p>

          {/* Form */}
          <form>
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="flex-1 mt-[40px] px-3 py-2 border rounded w-full"
              />
              <input
                type="email"
                id="email"
                placeholder="Your email"
                className="flex-1 mt-[40px] px-3 py-2 border rounded w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="mt-[15px] px-3 py-2 border rounded w-full"
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                placeholder="Your message"
                className="mt-[15px] px-3 py-2 border rounded w-full h-[166px]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#FB2E86] text-white px-5 py-2 rounded"
            >
              Send Mail
            </button>
          </form>
        </div>

        {/* Right Side: Contact Way */}
        <div className="lg:w-1/2 lg:mr-[160px]">
          <h2 className="text-[#151875] text-[36px] font-bold mb-4">
            Contact Way
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-11 whitespace-nowrap">
            <div className="flex items-start gap-4">
              <span className="text-blue-500 text-5xl">•</span>
              <div>
                <p className="text-[#8A8FB9] text-[14px]">Tel: 877-67-88-99</p>
                <p className="text-[#8A8FB9] text-[14px]">
                  E-Mail: shop@store.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-pink-500 text-5xl">•</span>
              <div>
                <p className="text-[#8A8FB9] text-[14px]">Support Forum</p>
                <p className="text-[#8A8FB9] text-[14px]">For over 24hr</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-orange-500 text-5xl">•</span>
              <div>
                <p className="text-[#8A8FB9] text-[14px]">
                  20 Margaret st, London
                </p>
                <p className="text-[#8A8FB9] text-[14px]">
                  Great britain, 3NM98-LK
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-green-500 text-5xl">•</span>
              <div>
                <p className="text-[#8A8FB9] text-[14px]">
                  Free standard shipping
                </p>
                <p className="text-[#8A8FB9] text-[14px]">on all orders.</p>
              </div>
            </div>
          </div>

          {/* Image Below Contact Way Section */}
          <div className="mt-[100px] flex justify-center">
            <Image
              src="/images/contact.png"
              alt="Contact Us"
              width={500}
              height={500}
              className="rounded-lg w-full lg:w-[750px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
