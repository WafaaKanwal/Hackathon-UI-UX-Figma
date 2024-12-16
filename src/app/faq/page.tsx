import React from "react";
import Image from "next/image";
import faqImage from "/public/images/image 1174.png"; // Adjust the path based on your folder structure

export default function Faq() {
  return (
    <div className="min-h-screen py-10 relative">
      {/* Rectangle Section */}
      <div className="absolute mt-[-34px] left-0 w-full h-[200px] bg-[#F6F5FF]">
        <h1
          className="text-[#151875] font-bold ml-[283px] mt-[67px] "
          style={{
            fontSize: "36px",
            lineHeight: "25.78px",
          }}
        >
          Faq
        </h1>
        <p
          className="mt-5 ml-[286px]"
          style={{
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "14.4px",
            color: "black",
          }}
        >
          Home . Pages <span className="text-[#FB2E86]">. Faq</span>
        </p>
      </div>

      {/* Content Section */}
      <div className="relative mt-[200px] px-10 flex gap-10">
        {/* Left Column: General Information */}
        <div className="w-1/2">
          <h2 className="text-[#151875] text-2xl ml-[220px] font-bold mb-6 mt-[70px]">
            General Information
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-[#151875] font-semibold ml-[220px] mt-11">
                What is your return policy?
              </h3>
              <p className="text-[#8A8FB9] ml-[220px] text-[14px] mt-5 font-lato">
                If 30 days have gone by since your purchase, unfortunately,{" "}
                <br /> we can not offer you a refund or exchange.
              </p>
            </div>
            <div>
              <h3 className="text-[#151875] ml-[220px] font-semibold mt-9">
                Do you offer international shipping?
              </h3>
              <p className="text-[#8A8FB9] ml-[220px] text-[14px] mt-5 font-lato">
                Yes, we ship internationally. Shipping costs will vary depending{" "}
                <br /> on your location and the size of your order.
              </p>
            </div>
            <div>
              <h3 className="text-[#151875] ml-[220px] font-semibold mt-9">
                How can I track my order?
              </h3>
              <p className="text-[#8A8FB9] ml-[220px] text-[14px] mt-5 font-lato">
                Once your order is shipped, you will receive a tracking number{" "}
                <br /> via email. You can use this to check the order status.
              </p>
            </div>
            <div>
              <h3 className="text-[#151875] ml-[220px] font-semibold mt-9">
                What payment methods do you accept?
              </h3>
              <p className="text-[#8A8FB9] ml-[220px] text-[14px] mt-5 font-lato">
                We accept all major credit cards, PayPal, and Apple Pay. You can
                choose <br />
                your preferred payment method during the checkout process.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Ask a Question Form */}
        <div className="mt-[70px] ml-[-51px] w-[500px] bg-[#F6F5FF] p-8 rounded-lg shadow-md">
          <h2 className="text-[#151875] text-2xl font-bold mb-6">
            Ask a Question
          </h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
            />
            <textarea
              placeholder="Message"
              className="w-full h-[197px] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#FB2E86] text-white py-3 rounded-md hover:bg-[#e42a75] transition"
            >
              Send Mail
            </button>
          </form>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-24 mb-[-21px] flex justify-center">
        <Image
          src={faqImage}
          alt="FAQ Section Illustration"
          width={1000}
          height={400}
          className="rounded-lg "
        />
      </div>
    </div>
  );
}
