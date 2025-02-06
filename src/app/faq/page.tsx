import React from "react";
import Image from "next/image";
import faqImage from "/public/images/image 1174.png";

export default function Faq() {
  return (
    <div className="min-h-screen py-10 relative">
      {/* Rectangle Section */}
      <div className="absolute top-0 left-0 w-full h-[200px] bg-[#F6F5FF]">
        <h1
          className="text-[#151875] font-bold text-center sm:text-left sm:ml-[283px] mt-[67px]"
          style={{
            fontSize: "36px",
            lineHeight: "25.78px",
          }}
        >
          Faq
        </h1>
        <p
          className="text-center sm:text-left sm:ml-[286px] mt-5"
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
      <div className="relative mt-[200px] px-4 sm:px-10 lg:flex lg:gap-10">
  {/* Left Column: General Information */}
  <div className="md:ml-[230px] lg:w-1/2">
    <h2 className="text-[#151875] text-2xl text-center sm:text-left font-bold mb-6 mt-[70px]">
      General Information
    </h2>
    <div className="space-y-6">
      {[{ question: "What is your return policy?", answer: "If 30 days have gone by since your purchase, unfortunately,\nwe can not offer you a refund or exchange." },
        { question: "Do you offer international shipping?", answer: "Yes, we ship internationally. Shipping costs will vary depending\non your location and the size of your order." },
        { question: "How can I track my order?", answer: "Once your order is shipped, you will receive a tracking number\nvia email. You can use this to check the order status." },
        { question: "What payment methods do you accept?", answer: "We accept all major credit cards, PayPal, and Apple Pay.\nYou can choose your preferred payment method during the checkout process." }]
        .map((item, index) => (
          <div key={index}>
            <h3 className="text-[#151875] font-semibold text-center sm:text-left mt-9">
              {item.question}
            </h3>
            <p className="text-[#8A8FB9] text-center sm:text-left text-[14px] mt-5 font-lato whitespace-pre-line">
              {item.answer}
            </p>
          </div>
        ))}
    </div>
  </div>

  {/* Right Column: Ask a Question Form */}
  <div className="h-[590px] mt-[70px] lg:mt-10 lg:ml-[-260px] lg:mr-6 mx-auto lg:w-[500px] bg-[#F6F5FF] p-8 rounded-lg shadow-md">
    <h2 className="text-[#151875] text-2xl font-bold mb-6 mt-4">
      Ask a Question
    </h2>
    <form className="space-y-6 mt-16">
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
        className="w-full h-[177px] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
      ></textarea>
      <button
        type="submit"
        className="w-[156px] bg-[#FB2E86] text-white py-3 rounded-md hover:bg-[#e42a75] transition"
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
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
