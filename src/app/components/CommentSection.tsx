import { FaUser } from "react-icons/fa"
import { BiSolidMessageRounded } from "react-icons/bi"
import { MdEmail } from "react-icons/md"
import Image from "next/image"

const CommentSection = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 mt-16 px-4 sm:px-6 lg:px-8">
      {/* Cards Section */}
      <div className="space-y-4 mb-10">
        {/* Card 1 */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-8 bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.1),_0px_-4px_10px_rgba(0,0,0,0.1),_4px_0px_10px_rgba(0,0,0,0.1),_-4px_0px_10px_rgba(0,0,0,0.1)] rounded-md p-4 cursor-pointer">
          <Image
            src="/images/Rectangle 59.png"
            alt="Sapien"
            width={96}
            height={96}
            className="w-24 h-24 object-cover rounded-md mr-0 sm:mr-4 mb-4 sm:mb-0"
          />
          <div>
            <h2 className="text-lg font-semibold text-[#151875]">
              Sapien ac
              <span className="text-gray-300 text-sm ml-4">Jan 09 2020</span>
            </h2>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-8 bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.1),_0px_-4px_10px_rgba(0,0,0,0.1),_4px_0px_10px_rgba(0,0,0,0.1),_-4px_0px_10px_rgba(0,0,0,0.1)] rounded-md p-4 cursor-pointer">
          <Image
            src="/images/Rectangle 59 (1).png"
            alt="Augue"
            width={96}
            height={96}
            className="w-24 h-24 object-cover rounded-md mr-0 sm:mr-4 mb-4 sm:mb-0"
          />
          <div>
            <h2 className="text-lg font-semibold text-[#151875]">
              Augue conva
              <span className="text-gray-300 text-sm ml-4">Aug 18 2020</span>
            </h2>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="space-y-4 mt-28">
        {/* Input Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Your Name*"
              className="border-2 border-gray-300 p-2 pl-10 rounded-sm text-sm w-full"
            />
            <span className="absolute left-4 top-2.5 text-gray-400">
              <i className="fas fa-user text-[14px] ">
                <FaUser />
              </i>
            </span>
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="Write Your Email*"
              className="border-2 border-gray-300 p-2 pl-10 rounded-sm text-sm w-full"
            />
            <span className="absolute left-4 top-2.5 text-gray-400">
              <i className="fas fa-envelope text-[14px] ">
                <MdEmail />
              </i>
            </span>
          </div>
        </div>
        <br />
        {/* Textarea */}
        <div className="relative">
          <textarea
            placeholder="Write your comment*"
            rows={10}
            className="border-2 border-gray-300 p-2 pl-10 rounded-sm text-sm w-full"
          ></textarea>
          <span className="absolute left-4 top-2.5 text-gray-400">
            <i className="fas fa-comment text-[14px] ">
              <BiSolidMessageRounded />
            </i>
          </span>
        </div>

        {/* Checkbox */}
        <div className="flex items-start sm:items-center text-sm text-gray-400">
          <input type="checkbox" id="save" className="mr-2 mt-1 sm:mt-0 border-gray-400 focus:ring-0 cursor-pointer" />
          <label htmlFor="save" className="flex-1">
            Save my name, email, and website in this browser for the next time I comment.
          </label>
        </div>
      </div>
      {/* Button */}
      <button className="bg-[#FB2E86] mt-10 text-white text-sm font-semibold py-3 px-4 sm:px-8 rounded-sm hover:bg-pink-600 w-full sm:w-auto">
        Continue Shipping
      </button>
    </div>
  )
}

export default CommentSection


