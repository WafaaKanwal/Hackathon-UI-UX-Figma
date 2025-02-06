import Image from "next/image"

export default function Order() {
  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="bg-[#F6F5FF] py-12 mb-12">
        <div className="container mx-auto">
          <h1 className="text-[#151875] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[36px] mb-4 text-center">
            Order Completed
          </h1>
          <p className="text-black text-sm sm:text-base font-medium text-center">
            Home . Pages <span className="text-[#FB2E86]">. Order Completed</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-4xl">
        {/* Images Section */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/tick.png"
            alt="Order Completed"
            width={120}
            height={80}
            className="rounded-full object-cover"
          />
        </div>

        {/* Description and Button Section */}
        <div className="text-center mb-12">
          <h2 className="text-[#151875] font-bold text-2xl sm:text-3xl mb-4">Your Order Is Completed!</h2>
          <p className="text-[#8D92A7] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
            Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will
            receive an email confirmation when your order is completed.
          </p>
          <button className="px-6 py-3 bg-[#FF3EB2] text-white font-semibold rounded-lg hover:bg-[#FB2E86] transition duration-200">
            Continue Shopping
          </button>
        </div>

        {/* Additional Images */}
        <div className="flex justify-between mb-12">
          <Image src="/images/clock 1.png" alt="Processing" width={70} height={70} className="hidden sm:block" />
          <Image src="/images/checklist 1.png" alt="Completed" width={70} height={70} className="hidden sm:block" />
        </div>

        {/* Divider */}
        <div className="border-t-2 border-dashed border-[#D2D1D1] my-12"></div>

        {/* Brands Image */}
        <div className="mb-12">
          <Image
            src="/images/image 1174.png"
            alt="Brands"
            width={1176}
            height={214}
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  )
}
