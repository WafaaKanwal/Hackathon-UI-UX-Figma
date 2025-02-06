import React from "react";
import Image from "next/image";

export default function ProductDetails() {
  return (
    <div className="min-h-screen py-10 relative">
 {/* Rectangle Section */}
<div className="relative w-full h-[200px] bg-[#F6F5FF] flex flex-col items-center sm:items-start sm:pl-[283px] sm:mt-[-44px]">
  <h1
    className="text-[#151875] font-bold mt-[67px] text-center sm:text-left"
    style={{
      fontSize: "36px",
      lineHeight: "25.78px",
    }}
  >
    Product Details
  </h1>
  <p
    className="mt-5 text-center sm:text-left"
    style={{
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "14.4px",
      color: "black",
    }}
  >
    Home . Pages <span className="text-[#FB2E86]">. Product Details</span>
  </p>
</div>


      {/* Product Details Rectangle Section */}
      <div className="absolute w-[960px] h-[509px] top-[329px] left-[271px] bg-white rounded-[2px] shadow-xl overflow-hidden shadow-[#F6F4FD]">
        {/* Right Side Product Details */}
        <div className="ml-[570px] mt-[16px] flex flex-col items-start justify-center p-4 w-[60%] h-full">
          <h1 className="text-[#151875] font-bold text-[30px] mb-2">
            Playwood Arm Chair
          </h1>
          <div className="flex items-center gap-1 mb-2">
            <span className="text-yellow-400 text-[14px] font-sans">★★★★☆</span>
            <span>(22) </span>
          </div>
          <div className="flex items-center gap-4 mb-2 mt-3">
            <p className="text-red-500 line-through text-[16px]">$49.00</p>
            <p className="text-[#151875] font-bold text-[16px]">$26.00</p>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <span className="text-[#151875] text-[16px] mt-[10px] font-semibold">
              Color:
            </span>
          </div>
          <p className="mb-4 mt-1 text-[14px]  text-[#A9ACC6]">
            A beautiful playwood arm chair that adds a touch of <br />
            elegance and comfort to any room.
          </p>
          <div className="flex items-center gap-2 ml-[70px]">
            <span className="text-[#151875] py-2 text-[16px] font-semibold">
              Add to Cart
            </span>
            <span className="text-[#151875] text-lg text-[16px] font-semibold">
              &#10084;
            </span>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <span className="text-[#151875] text-[16px] mt-[18px] font-semibold">
              Categories:
            </span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#151875] text-[16px] mt-[11px] font-semibold">
              Tags
            </span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#151875] text-[16px] mt-[9px] font-semibold whitespace-nowrap">
              Share:
            </span>
            <div className="flex gap-2">
              <Image
                src="/images/Group 205.png"
                alt="Facebook"
                width={60}
                height={24}
              />
            </div>
          </div>
        </div>
        {/* Left Side Images */}
        <section className="absolute mt-[-523px]">
          <Image
            src="/images/p4.png"
            alt="Product image 4"
            width={375}
            height={487}
            className="ml-[190px] mt-[]"
          />
        </section>
        <div className="flex items-center justify-center gap-4 ml-[-99px] mt-[-385px] w-[40%] h-full">
          <div className="flex flex-col gap-4 mt-[-300px]">
            <Image
              src="/images/p1.png"
              alt="Product Image 1"
              width={150}
              height={150}
              className="rounded-lg"
            />
            <Image
              src="/images/p2.png"
              alt="Product Image 2"
              width={150}
              height={150}
              className="rounded-lg"
            />
            <Image
              src="/images/p3.png"
              alt="Product Image 3"
              width={150}
              height={150}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="mt-[910px] bg-[#F9F8FE] w-full h-[460px]">
        {/* Section Headings */}
        <div className="flex gap-10 ml-[272px] items-center mb-4 text-[16px]">
        <h4 className="text-lg mt-[79px] font-bold text-[#151875] hover:underline">
  Description
</h4>

          <h4 className="text-lg mt-[79px] font-bold text-[#151875] hover:underline">
            Additional Info
          </h4>
          <h4 className="text-lg mt-[79px] font-bold text-[#151875] hover:underline">
            Reviews
          </h4>
          <h4 className="text-lg mt-[79px] font-bold text-[#151875] hover:underline">Video</h4>
        </div>

        {/* Description */}
        <div className="mb-6 ml-[269px]">
          <h4 className="font-semibold text-[#151875] mb-2 mt-11">
            Varius tempor.
          </h4>
          <p className="text-[13px] text-[#A9ACC6] line-[29px] text-left text-underline-position-from-font text-decoration-skip-ink-none">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
            ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
            varius ac est bibendum.
            <br /> Scelerisque a, risus ac ante. Velit consectetur neque, elit,
            aliquet. Non varius proin sed urna, egestas consequat laoreet diam
            tincidunt. Magna eget faucibus
            <br /> cras justo, tortor sed donec tempus. Imperdiet consequat,
            quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla
            vulputate nunc nec. Dui, massa viverr.
          </p>
        </div>

        {/* More Details */}
        <div className="mb-6 ml-[269px]">
          <h4 className="text-[#151875] mb-2 font-semibold">More details</h4>
          <div className="flex items-start gap-2 mb-2">
            <Image
              src="/images/md-arrow.png"
              alt="Arrow Icon"
              width={16}
              height={16}
            />
            <p className="text-[13px] text-[#A9ACC6] line-[29px] text-left text-underline-position-from-font text-decoration-skip-ink-none whitespace-nowrap">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr.
            </p>
          </div>
          <div className="flex items-start gap-2 mb-2">
            <Image
              src="/images/md-arrow.png"
              alt="Arrow Icon"
              width={16}
              height={16}
            />
            <p className="text-[13px] text-[#A9ACC6] line-[29px] text-left text-underline-position-from-font text-decoration-skip-ink-none whitespace-nowrap">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr.
            </p>
          </div>
          <div className="flex items-start gap-2 mb-2">
            <Image
              src="/images/md-arrow.png"
              alt="Arrow Icon"
              width={16}
              height={16}
            />
            <p className="text-[13px] text-[#A9ACC6] line-[29px] text-left text-underline-position-from-font text-decoration-skip-ink-none whitespace-nowrap">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr.
            </p>
          </div>
          <div className="flex items-start gap-2 mb-2">
            <Image
              src="/images/md-arrow.png"
              alt="Arrow Icon"
              width={16}
              height={16}
            />
            <p className="text-[13px] text-[#A9ACC6] line-[29px] text-left text-underline-position-from-font text-decoration-skip-ink-none whitespace-nowrap">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr.
            </p>
          </div>
        </div>
      </div>




      <div className="mt-[80px] ml-[282px]">
        <h1
          className="text-[#151875] font-bold mt-[97px] mb-4"
          style={{ fontSize: "36px", lineHeight: "25.78px" }}
        >
          Related Products
        </h1>
        <div className="mt-[40px] grid grid-cols-4 gap-4 w-[939px] ">
          {/* Related Product 1 */}
          <div className="bg-white overflow-hidden">
            <Image
              className="w-full object-cover"
              src="/images/r1.png"
              alt="Related Product 1"
              width={400}
              height={300}
            />
            <div className="p-4">
              <h2 className="text-[14px] ml-[-17px] font-semibold">
                Mens Fashion Wear
              </h2>
              <p className="text-gray-500 text-[11px] absolute leading-[15px] mt-[7px] ml-[-17px]  ">
                $25.00
              </p>
              <div className="ml-[147px] absolute mt-[-24px]">
                <span className="text-yellow-400 text-[14px] font-sans">
                  ★★★★☆
                </span>
              </div>
            </div>
          </div>
          {/* Related Product 2 */}
          <div className="bg-white overflow-hidden">
            <Image
              className="w-full  object-cover"
              src="/images/r2.png"
              alt="Related Product 2"
              width={400}
              height={300}
            />
            <div className="p-4">
              <h2 className="text-[14px] ml-[-17px] font-semibold">
                Woman&apos;s Fashion
              </h2>
              <p className="text-gray-500 text-[11px] absolute leading-[15px] mt-[7px] ml-[-17px] ">
                $28.00
              </p>
              <div className="ml-[150px] absolute mt-[-24px]">
                <span className="text-yellow-400 text-[14px] font-sans">
                  ★★★★☆
                </span>
              </div>
            </div>
          </div>
          {/* Related Product 3 */}
          <div className="bg-white overflow-hidden">
            <Image
              className="w-full  object-cover"
              src="/images/r3.png"
              alt="Related Product 3"
              width={400}
              height={300}
            />
            <div className="p-4">
              <h2 className="text-[14px] ml-[-17px] font-semibold">
                Wolx Dummy Fashion{" "}
              </h2>
              <p className="text-gray-500 text-[11px] absolute leading-[15px] mt-[7px] ml-[-17px] ">
                $30.00
              </p>
              <div className="ml-[150px] absolute mt-[-24px]">
                <span className="text-yellow-400 text-[14px] font-sans">
                  ★★★★☆
                </span>
              </div>
            </div>
          </div>
          {/* Related Product 4 */}
          <div className="bg-white overflow-hidden">
            <Image
              className="w-full object-cover"
              src="/images/r4.png"
              alt="Related Product 4"
              width={400}
              height={300}
            />
            <div className="p-4">
              <h2 className="text-[14px] ml-[-17px] font-semibold">
                Top Wall Digital Clock
              </h2>
              <p className="text-gray-500 text-[11px] absolute leading-[15px] mt-[7px] ml-[-17px]  ">
                $35.00
              </p>
              <div className="ml-[150px] absolute mt-[-24px]">
                <span className="text-yellow-400 text-[14px] font-sans">
                  ★★★★☆
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[720px] mt-[100px] ml-[110px]">
          <Image
            src="/images/image 1174.png"
            alt="brands"
            width={1920}
            height={500}
            className="w-[1176px] object-cover"
          />
        </div>
        <div className="h-[115px]"></div>
      </div>
    </div>
  );
}
