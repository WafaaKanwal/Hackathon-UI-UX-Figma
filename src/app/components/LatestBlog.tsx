import Image from "next/image"
import type React from "react"

interface BlogCardProps {
  imageSrc: string
  author: string
  date: string
  title: string
  description: string
}

const BlogCard: React.FC<BlogCardProps> = ({ imageSrc, author, date, title, description }) => (
  <div className="w-full max-w-sm mx-auto bg-white border-2 border-transparent hover:border-[#7E33E0] rounded-lg shadow-custom cursor-pointer transition-all duration-300">
    <Image
      src={imageSrc || "/placeholder.svg"}
      alt={`Blog Image - ${title}`}
      width={500}
      height={500}
      className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-lg"
    />
    <div className="p-4">
      <div className="flex flex-wrap items-center gap-3 text-[#151875] text-xs sm:text-sm mb-2">
        <span className="flex items-center gap-1">
          <Image src="/images/Vector.png" alt="Author Icon" width={16} height={16} className="w-3 h-3 sm:w-4 sm:h-4" />
          {author}
        </span>
        <span className="flex items-center gap-1">
          <Image
            src="/images/uil_calendar-alt.png"
            alt="Calendar Icon"
            width={16}
            height={16}
            className="w-3 h-3 sm:w-4 sm:h-4"
          />
          {date}
        </span>
      </div>
      <h3 className="text-[#151875] hover:text-[#FB4997] text-base sm:text-lg font-bold mb-2 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-[#7E81A2] text-xs sm:text-sm mb-4">{description}</p>
      <a
        href="#"
        className="text-[#151875] text-sm sm:text-base font-medium hover:underline hover:text-[#FB4997] transition-colors duration-300"
      >
        Read More
      </a>
    </div>
  </div>
)

const LatestBlog: React.FC = () => {
  const blogPosts: BlogCardProps[] = [
    {
      imageSrc: "/images/JIUjvqe2ZHg.png",
      author: "SaberAli",
      date: "21 August, 2020",
      title: "Top essential Trends in 2021",
      description: "More off this less hello samlande lied much over tightly circa horse taped mightly",
    },
    {
      imageSrc: "/images/2dcYhvbHV-M.png",
      author: "Surfauxion",
      date: "21 August, 2020",
      title: "Top essential trends in 2021",
      description: "More off this less hello samlande lied much over tightly circa horse taped mightly",
    },
    {
      imageSrc: "/images/2dcYhvbHV-M (1).png",
      author: "SaberAli",
      date: "21 August, 2020",
      title: "Top essential Trends in 2021",
      description: "More off this less hello samlande lied much over tightly circa horse taped mightly",
    },
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#151875] mb-8 sm:mb-12">
          Latest Blog
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestBlog

