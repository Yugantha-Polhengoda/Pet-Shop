import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <div className="">
      <div className=" z-[999] flex items-center text-center justify-between py-6 gap-6 xl:gap-16">
        <div className="flex items-center sm:space-x-10">
          <div className='sm:hidden'>
            <svg
              width="22"
              height="17"
              viewBox="0 0 22 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.66663 15.1666H20.3333M1.66663 8.49992H20.3333M1.66663 1.83325H20.3333"
                stroke="#00171F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <Link href="/#">
              <h1 className="text-2xl md:text-3xl font-extrabold text-[#103559]">
                Monito
              </h1>
              <span className="ml-2 md:ml-3 text-sm text-[#103559]">
                Pets for Best
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6 md:gap-12 font-bold text-base">
            <a href="/#" className="text-[#1D3C6E] hover:text-[#143257]">
              Home
            </a>
            <a
              href="/collections"
              className="text-[#1D3C6E] hover:text-[#143257]"
            >
              Category
            </a>
            <a href="#" className="text-[#1D3C6E] hover:text-[#143257]">
              About
            </a>
            <a href="#" className="text-[#1D3C6E] hover:text-[#143257]">
              Contact
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-2 xl:gap-6">
          <div className="flex items-center relative">
            <button className="relative lg:absolute text-[#99A2A5] ml-3">
              <svg className="w-5 h-5" fill="" viewBox="0 0 24 24">
                <path d="M21 21l-4.35-4.35a8 8 0 1 0-1.4 1.4L21 21zM10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search something here!"
              className="hidden lg:flex min-w-[180px] xl:w-[280px] pl-10 py-2 md:py-3 text-xs placeholder:text-gray-500 rounded-full focus:outline-none"
            />
          </div>

          <button className="hidden lg:flex bg-[#1D3C6E] text-white px-4 py-2 rounded-full hover:bg-[#143257]">
            Join the community
          </button>

          <div className="hidden md:block">
            <button className="flex items-center space-x-2">
              <span className="w-4 h-4 rounded-full bg-red-600"></span>
              <span className="text-[#1D3C6E]">VND</span>
              <svg
                className="w-4 h-4 text-[#1D3C6E]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </button>

            {/* Dropdown content */}
            <div className="absolute hidden mt-2 w-32 bg-white shadow-lg rounded-md group-hover:flex">
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                USD
              </a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                VND
              </a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                EUR
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar
