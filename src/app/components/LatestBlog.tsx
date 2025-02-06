import React from 'react';
import Image from 'next/image';

const LatestBlog = () => {
  return (
    <>
      {/* Heading */}
      <div className='mt-28'>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#151875]">
          Latest Blog
        </h1>
      </div>

      {/* Blog Cards */}
      <div className="flex flex-wrap justify-center items-center gap-6 p-8 mt-10">
        {/* Card 1 */}
        <div className="w-full sm:w-[320px] h-auto sm:h-[440px] bg-white border-[2px] border-transparent hover:border-[#7E33E0] rounded-lg shadow-custom cursor-pointer transition-all duration-300">
          <Image
            src="/images/JIUjvqe2ZHg.png"
            alt="Blog Image 1"
            width={500}
            height={500}
            className="w-full h-[200px] sm:h-[250px] object-cover rounded-t-lg"
          />
          <div className="p-4">
            <div className="flex items-center gap-3 text-[#151875] text-sm mb-2">
              <span className="flex items-center gap-1">
                <Image
                  src="/images/Vector.png"
                  alt="Icon"
                  width={500}
                  height={500}
                  className="w-4 h-4"
                />
                SaberAli
              </span>
              <span className="flex items-center gap-1">
                <Image
                  src="/images/uil_calendar-alt.png"
                  alt="Calendar Icon"
                  width={500}
                  height={500}
                  className="w-4 h-4"
                />
                21 August, 2020
              </span>
            </div>
            <h3 className="text-[#151875] hover:text-[#FB4997] text-lg font-bold mb-2">
              Top Essential Trends in 2021
            </h3>
            <p className="text-[#7E81A2] text-sm mb-4">
              More off this less hello samlande lied much over tightly circa horse taped mightly
            </p>
            <a href="#" className="text-[#151875] font-medium hover:underline hover:text-[#FB4997]">
              Read More
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-[320px] h-auto sm:h-[440px] bg-white border-[2px] border-transparent hover:border-[#7E33E0] rounded-lg shadow-custom cursor-pointer transition-all duration-300">
          <Image
            src="/images/2dcYhvbHV-M.png"
            alt="Blog Image 2"
            width={500}
            height={500}
            className="w-full h-[200px] sm:h-[250px] object-cover rounded-t-lg"
          />
          <div className="p-4">
            <div className="flex items-center gap-3 text-[#151875] text-sm mb-2">
              <span className="flex items-center gap-1">
                <Image
                  src="/images/Vector.png"
                  alt="Icon"
                  width={500}
                  height={500}
                  className="w-4 h-4"
                />
                Surfauxion
              </span>
              <span className="flex items-center gap-1">
                <Image
                  src="/images/uil_calendar-alt.png"
                  alt="Calendar Icon"
                  width={500}
                  height={500}
                  className="w-4 h-4"
                />
                21 August, 2020
              </span>
            </div>
            <h3 className="text-[#151875] hover:text-[#FB4997] text-lg font-bold mb-2">
              Top Essential Trends in 2021
            </h3>
            <p className="text-[#7E81A2] text-sm mb-4">
              More off this less hello samlande lied much over tightly circa horse taped mightly
            </p>
            <a href="#" className="text-[#151875] font-medium hover:underline hover:text-[#FB4997]">
              Read More
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-[320px] h-auto sm:h-[440px] bg-white border-[2px] border-transparent hover:border-[#7E33E0] rounded-lg shadow-custom cursor-pointer transition-all duration-300">
          <Image
            src="/images/2dcYhvbHV-M (1).png"
            alt="Blog Image 3"
            width={500}
            height={500}
            className="w-full h-[200px] sm:h-[250px] object-cover rounded-t-lg"
          />
          <div className="p-4">
            <div className="flex items-center gap-3 text-[#151875] text-sm mb-2">
              <span className="flex items-center gap-1">
                <Image
                  src="/images/Vector.png"
                  alt="Icon"
                  width={500}
                  height={500}
                  className="w-4 h-4"
                />
                SaberAli
              </span>
              <span className="flex items-center gap-1">
                <Image
                  src="/images/uil_calendar-alt.png"
                  alt="Calendar Icon"
                  width={500}
                  height={500}
                  className="w-4 h-4"
                />
                21 August, 2020
              </span>
            </div>
            <h3 className="text-[#151875] hover:text-[#FB4997] text-lg font-bold mb-2">
              Top Essential Trends in 2021
            </h3>
            <p className="text-[#7E81A2] text-sm mb-4">
              More off this less hello samlande lied much over tightly circa horse taped mightly
            </p>
            <a href="#" className="text-[#151875] font-medium hover:underline hover:text-[#FB4997]">
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestBlog;