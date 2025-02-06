"use client"

import Link from "next/link"
import { FaFacebookF } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import { FaTwitter } from "react-icons/fa"
import OfferProductList from "../components/OfferProductList"
import { IoMdPlay } from "react-icons/io"
import ProductGrid from "../components/ProductGrid"
import { FaArrowLeftLong } from "react-icons/fa6"
import { FaArrowRightLong } from "react-icons/fa6"
import CommentSection from "../components/CommentSection" 
import Image from "next/image"

export default function Blog() {
  // This is just dummy data. Replace with your real data or dynamic fetching.
  const posts = [
    {
      title: "Mauris at orci non vulputate diam tincidunt nec.",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum<br />eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      image: "/images/blog-3.png", // replace with your image
    },
  ]

  // Dummy recent posts
  const recentPosts = [
    {
      title: "It is a long established fact",
      image: "/images/Rectangle 126.png",
      para: "Aug 09 2020",
    },
    {
      title: "It is a long established fact",
      image: "/images/Rectangle 126 (1).png",
      para: "Aug 09 2020",
    },
    {
      title: "It is a long established fact",
      image: "/images/Rectangle 126 (2).png",
      para: "Aug 09 2020",
    },
    {
      title: "It is a long established fact",
      image: "/images/Rectangle 126 (3).png",
      para: "Aug 09 2020",
    },
  ]

  // Dummy products
  const saleProducts = [
    {
      title: "It is a long established fact",
      image: "/images/Rectangle 127.png",
      para: "Aug 09 2020",
    },
    {
      title: "It is a long established fact",
      image: "/images/Rectangle 127 (1).png",
      para: "Aug 09 2020",
    },
    {
      title: "It is a long established fact",
      image: "/images/Rectangle 127 (2).png",
      para: "Aug 09 2020",
    },
  ]

  return (
    <>
      <div className="mt-12">
        {/* Rectangle Section */}
        <div className="absolute mt-[-44px] left-0 w-full h-[200px] bg-[#F6F5FF]">
          <h1
            className="text-[#151875] font-bold ml-4 sm:ml-8 md:ml-16 lg:ml-[283px] mt-[67px]"
            style={{
              fontSize: "36px",
              lineHeight: "25.78px",
            }}
          >
            Single Blog
          </h1>
          <p
            className="mt-5 ml-4 sm:ml-8 md:ml-16 lg:ml-[286px]"
            style={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "14.4px",
              color: "black",
            }}
          >
            Home . Pages <span className="text-[#FB2E86]">. Single Blog</span>
          </p>
        </div>
      </div>

      <div className="min-h-screen bg-white text-gray-700 font-sans mt-[18rem]">
        <div className="container mx-auto px-4 lg:px-0 py-8 flex flex-col lg:flex-row">
          {/* Main Content */}
          <main className="w-full lg:w-3/4 lg:pl-36 lg:mr-[2rem]">
            {posts.map((post, index) => (
              <article key={index} className="mb-12">
                <div className="mb-8 lg:mb-[-17rem] w-full lg:w-[50em] h-auto lg:h-[45rem]">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={500}
                    height={500}
                    className="w-full h-auto lg:h-[26.5rem] rounded-lg"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-3 text-[#151875] text-sm mb-6">
                  <span className="flex items-center gap-1">
                    <Image src="/images/Vector.png" alt="Icon" width={500} height={500} className="w-4 h-4" />
                    <span className="bg-[#FFE7F9] px-4 sm:px-10 py-1">Surf Auxion</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Image
                      src="/images/uil_calendar-alt.png"
                      alt="Calendar Icon"
                      width={500}
                      height={500}
                      className="w-4 h-4"
                    />
                    <span className="bg-[#FFECE2] px-4 sm:px-6 py-1"> 21 August, 2020 </span>
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-[#151875] mb-5">{post.title}</h2>
                <p className="text-gray-400 mb-4 text-sm" dangerouslySetInnerHTML={{ __html: post.excerpt }}></p>
                <p className="text-gray-400 mb-4 text-sm mt-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus
                  consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere
                  malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes,
                  lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                  posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc,
                </p>

                <div className="mx-auto max-w-6xl p-4 lg:ml-[-1rem]">
                  {/* Quote Section */}
                  <div className="mb-8 p-6 border-l-4 border-pink-400 bg-gray-50">
                    <p className="italic text-gray-400 text-lg leading-relaxed">
                      &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet,
                      consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet,
                      consequat toamk risus&quot;
                    </p>
                  </div>

                  {/* Images Section */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {/* Left Image with Play Icon */}
                    <div className="relative">
                      <Image
                        src="/images/Rectangle 70.png"
                        alt="Video Thumbnail"
                        width={500}
                        height={500}
                        className="w-full h-auto object-cover rounded-sm"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
                          <div className="text-[#FC209D] text-2xl">
                            <IoMdPlay />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Image */}
                    <div>
                      <Image
                        src="/images/Rectangle 70 (1).png"
                        alt="Right Image"
                        width={500}
                        height={500}
                        className="w-full h-auto object-cover rounded-sm"
                      />
                    </div>
                  </div>

                  {/* Paragraph Section */}
                  <div className="text-gray-400 leading-relaxed text-sm">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus
                      consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                      posuere malesuada.Lorem ipsum dolor sit amet, consectetur Velit dapibus est, nunc, montes, lacus
                      consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                      posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est,
                      nunc,
                    </p>

                    <ProductGrid />

                    <br />
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus
                      consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                      posuere malesuada.Lorem ipsum dolor sit amet, consectetur Velit dapibus est, nunc, montes, lacus
                      consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                      posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est,
                      nunc,
                    </p>
                    <br />
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus
                      consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                      posuere malesuada.Lorem ipsum dolor sit amet, consectetur Velit dapibus est, nunc, montes, lacus
                      consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                      posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est,
                      nunc,
                    </p>
                  </div>
                </div>

                <div className="flex justify-center items-center mt-12">
                  <div className="flex space-x-3 ml-5">
                    <Link href="#" className="text-white hover:text-[#5625DF]">
                      <div className="w-7 h-7 text-md bg-[#5625DF] hover:bg-white hover:border-2 border-[#5625DF] rounded-3xl flex justify-center items-center ">
                        <FaFacebookF />
                      </div>
                    </Link>
                    <Link href="#" className="text-white hover:text-[#FF27B7]">
                      <div className="w-7 h-7 text-md bg-[#FF27B7] hover:bg-white hover:border-2 border-[#FF27B7] rounded-3xl flex justify-center items-center ">
                        <RiInstagramFill />
                      </div>
                    </Link>
                    <Link href="#" className="text-white hover:text-[#37DAF3]">
                      <div className="w-7 h-7 text-md bg-[#37DAF3] hover:bg-white hover:border-2 border-[#37DAF3] rounded-3xl flex justify-center items-center ">
                        <FaTwitter />
                      </div>
                    </Link>
                  </div>
                </div>
              </article>
            ))}

            {/* Pagination */}
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-md">
              {/* Previous Post */}
              <Link href="#" className="text-[#8A8FB9] flex items-center hover:underline">
                <span className="mr-1">
                  <FaArrowLeftLong />
                </span>
                Previous Post
              </Link>

              {/* Next Post */}
              <Link href="#" className="text-[#8A8FB9] flex items-center hover:underline">
                Next Post
                <span className="ml-1">
                  <FaArrowRightLong />
                </span>
              </Link>
            </div>

            <CommentSection />

            {/* Logos Section */}
            <div className="w-auto h-36 mt-8 bg-white py-20 flex items-center justify-center gap-12 ">
              <Image
                src="/images/image 1174.png"
                alt="Logo 5"
                width={500}
                height={500}
                className="object-contain w-full max-w-[55rem]"
              />
            </div>

            <div className="mt-24"></div>
          </main>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 mt-8 lg:mt-0">
            {/* Search */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-[#151875]">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search For Posts"
                  className="w-full lg:w-[15rem] border border-[#BDBDD8] opacity-80 rounded-sm py-2 px-2"
                />
                <button className="absolute right-3 lg:right-[6.4rem] top-[.6rem] text-gray-400 hover:text-gray-700">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.53 20.47l-4.8-4.8a7.48 7.48 0 001.77-4.87 7.5 7.5 0 10-7.5 7.5 7.48 7.48 0 004.87-1.77l4.8 4.8a.75.75 0 101.06-1.06zM4.5 10.8a6.3 6.3 0 116.3 6.3 6.3 6.3 0 01-6.3-6.3z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-5">
              <h3 className="text-xl font-semibold mb-3 text-[#151875]">Categories</h3>
              <div className="flex flex-wrap gap-2 mt-[-.5rem]">
                <div>
                  <ul className="flex flex-col text-[#151875] w-full sm:w-[8rem]">
                    <li className="hover:text-white text-[14px] flex gap-2 hover:bg-[#F939BF] py-2 px-2 rounded-sm cursor-pointer transition-all">
                      Hobbies (14)
                    </li>
                    <li className="hover:text-white text-[14px] flex gap-2  hover:bg-[#F939BF] py-2 px-2 rounded-sm cursor-pointer transition-all">
                      <span>Women</span> <span>(21)</span>
                    </li>
                    <li className="hover:text-white text-[14px] flex gap-2  hover:bg-[#F939BF] py-2 px-2 rounded-sm cursor-pointer transition-all">
                      <span>Women</span> <span>(21)</span>
                    </li>
                    <li className="hover:text-white text-[14px] flex gap-2  hover:bg-[#F939BF] py-2 px-2 rounded-sm cursor-pointer transition-all">
                      <span>Women</span> <span>(21)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="flex flex-col text-[#151875] w-full sm:w-[8rem]">
                    <li className="hover:text-white text-[14px] flex gap-2 hover:bg-[#F939BF] py-2 px-2 rounded-sm cursor-pointer transition-all">
                      Women (14)
                    </li>
                    <li className="hover:text-white text-[14px] flex gap-2  hover:bg-[#F939BF] py-2 px-2 rounded-sm cursor-pointer transition-all">
                      <span>Women</span> <span>(21)</span>
                    </li>
                    <li className="hover:text-white text-[14px] flex gap-2  hover:bg-[#F939BF] py-2 px-2 rounded-sm cursor-pointer transition-all">
                      <span>Women</span> <span>(21)</span>
                    </li>
                    <li className="hover:text-white text-[14px] flex gap-2  hover:bg-[#F939BF] py-2 px-2 rounded-sm cursor-pointer transition-all">
                      <span>Women</span> <span>(21)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Recent Post */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-[#151875]">Recent Post</h3>
              <ul className="space-y-3 text-[#151875] mt-6">
                {recentPosts.map((r, i) => (
                  <li key={i} className="flex space-x-3 cursor-pointer">
                    <Image
                      src={r.image || "/placeholder.svg"}
                      alt="img"
                      width={500}
                      height={500}
                      className="w-[4.4rem] h-12 object-cover rounded"
                    />
                    <div className="mt-[-8px] flex flex-col space-y-[-8px]">
                      <span className="inline-block pt-2">{r.title}</span>
                      <span className="inline-block pt-2 text-[12px]">{r.para}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sale Product */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-[#151875] mt-4">Sale Product</h3>
              <ul className="space-y-3 text-[#151875] mt-8">
                {saleProducts.map((p, i) => (
                  <li key={i} className="flex space-x-3 cursor-pointer">
                    <Image
                      src={p.image || "/placeholder.svg"}
                      alt="img"
                      width={500}
                      height={500}
                      className="w-[4.4rem] h-12 object-cover rounded"
                    />
                    <div className="mt-[-8px] flex flex-col space-y-[-8px]">
                      <span className="inline-block pt-2">{p.title}</span>
                      <span className="inline-block pt-2 text-[12px]">{p.para}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Offer product */}
            <OfferProductList />

            {/* Follow */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4  text-[#151875]">Follow</h3>
              <div className="flex space-x-3 ml-5">
                <Link href="#" className="text-white hover:text-[#5625DF]">
                  <div className="w-7 h-7 text-md bg-[#5625DF] hover:bg-white hover:border-2 border-[#5625DF] rounded-3xl flex justify-center items-center ">
                    <FaFacebookF />
                  </div>
                </Link>
                <Link href="#" className="text-white hover:text-[#FF27B7]">
                  <div className="w-7 h-7 text-md bg-[#FF27B7] hover:bg-white hover:border-2 border-[#FF27B7] rounded-3xl flex justify-center items-center ">
                    <RiInstagramFill />
                  </div>
                </Link>
                <Link href="#" className="text-white hover:text-[#37DAF3]">
                  <div className="w-7 h-7 text-md bg-[#37DAF3] hover:bg-white hover:border-2 border-[#37DAF3] rounded-3xl flex justify-center items-center ">
                    <FaTwitter />
                  </div>
                </Link>
              </div>
            </div>

            {/* Tags */}
            <h3 className="text-xl font-semibold mb-4  text-[#151875]">Tags</h3>
            <div className="text-center">
              <div className="flex flex-wrap justify-center space-x-4 sm:space-x-12 mr-4 sm:mr-16">
                {/* General */}
                <Link
                  href="#"
                  className="text-[#151875] text-lg  underline decoration-[#151875] hover:text-[#FB2E86] hover:decoration-[#FB2E86] font-medium transition-all"
                >
                  General
                </Link>

                {/* Atsanil (Active) */}
                <Link
                  href="#"
                  className="text-[#151875]  text-lg underline  decoration-[#151875] hover:text-[#FB2E86] hover:decoration-[#FB2E86] font-medium transition-all"
                >
                  Atsanil
                </Link>

                {/* Insas. */}
                <Link
                  href="#"
                  className="text-[#151875] text-lg  underline decoration-[#151875] hover:text-[#FB2E86] hover:decoration-[#FB2E86] font-medium transition-all"
                >
                  Insas.
                </Link>
              </div>

              <div className="flex flex-wrap justify-center space-x-4 sm:space-x-12 mt-6 mr-4 sm:mr-40">
                {/* Bibsaas */}
                <Link
                  href="#"
                  className="text-[#151875] text-lg  underline decoration-[#151875] hover:text-[#FB2E86] hover:decoration-[#FB2E86] font-medium transition-all"
                >
                  Bibsaas
                </Link>

                {/* Nulla. */}
                <Link
                  href="#"
                  className="text-[#151875] text-lg  underline decoration-[#151875] hover:text-[#FB2E86] hover:decoration-[#FB2E86] font-medium transition-all"
                >
                  Nulla.
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}

