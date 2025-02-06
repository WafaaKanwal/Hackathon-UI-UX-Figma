import Image from "next/image"

export default function MyAccount() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-[#F6F5FF] py-12 mb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-[#151875] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[36px] mb-4">My Account</h1>
          <p className="text-black text-sm sm:text-base font-medium">
            Home . Pages <span className="text-[#FB2E86]">. My Account</span>
          </p>
        </div>
      </div>

      {/* Main Section */}
      <main className="container mx-auto px-4 flex flex-col items-center">
        <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 w-full max-w-md mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-2">Login</h2>
          <p className="text-center font-[Lato] text-[#9096B2] text-sm mb-6">
            Please login using account details below.
          </p>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div className="text-left">
              <a href="#" className="text-sm text-gray-500 hover:text-pink-500">
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="bg-pink-500 text-white w-full py-3 rounded-lg font-semibold hover:bg-pink-600 transition duration-300"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-gray-600 text-sm mt-6">
            Don't have an account?{" "}
            <a href="#" className="text-pink-500 hover:underline">
              Create account
            </a>
          </p>
        </div>

        {/* Footer Logos */}
        <div className="w-full max-w-4xl mx-auto mb-12">
          <Image src="/images/image 1174.png" alt="brands" width={800} height={111} className="w-full h-auto" />
        </div>
      </main>
    </div>
  )
}

