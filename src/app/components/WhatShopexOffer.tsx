import Image from "next/image"

const WhatShopexOffer = () => {
  const offerItems = [
    { icon: "/images/icon1.png", title: "24/7 Support" },
    { icon: "/images/icon2.png", title: "Cash Back" },
    { icon: "/images/icon3.png", title: "Monthly Offer" },
    { icon: "/images/icon4.png", title: "Free Delivery" },
  ]

  return (
    <div className="w-full flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8 gap-8 mt-[-1rem]">
      <h1 className="text-2xl sm:text-3xl md:text-[2.35rem] leading-tight font-bold text-center text-[#151875]">
        What Shopex Offer!
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 w-full max-w-7xl">
        {offerItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center w-full max-w-[260px] h-auto min-h-[310px] bg-white shadow-custom p-6 sm:p-10 gap-4 cursor-pointer mx-auto"
          >
            <Image
              src={item.icon || "/placeholder.svg"}
              alt={item.title}
              width={65}
              height={65}
              className="w-16 h-16 object-contain"
            />
            <h2 className="text-[#151875] text-xl text-center">{item.title}</h2>
            <p className="text-[#1A0B5B] opacity-30 text-base font-medium text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>
        ))}
      </div>

      <div className="mb-14"></div>
    </div>
  )
}

export default WhatShopexOffer

