"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent w-full">
      <div className="max-w-screen-xl">
        <div className="flex justify-between items-center py-4 gap-10 mx-4 xl:mx-6">
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="absolute h-6 w-6 z-50"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
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
          <div
            className={`md:flex ${
              isOpen ? "block z-40 absolute bg-white pl-8 " : "hidden"
            } flex-grow lg:items-center lg:w-auto`}
          >
            <nav className="hidden md:flex gap-6 md:gap-12 xl:gap-10 font-bold text-base">
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

          <div className="flex items-center gap-2 md:gap-12 xl:gap-6">
            <div className="flex items-center relative">
              <button className="relative xl:absolute text-[#99A2A5] lg:ml-3">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.6771 21.061L18.4131 16.8283C20.0682 14.763 20.8698 12.1416 20.6529 9.5031C20.436 6.86457 19.2172 4.40946 17.2471 2.64261C15.277 0.875762 12.7054 -0.0685392 10.0609 0.00387725C7.41647 0.0762937 4.90025 1.15992 3.02965 3.03195C1.15904 4.90398 0.0762357 7.42211 0.0038743 10.0686C-0.0684871 12.715 0.875097 15.2886 2.64061 17.2602C4.40612 19.2318 6.85935 20.4515 9.49588 20.6686C12.1324 20.8856 14.7518 20.0835 16.8155 18.4271L21.045 22.6598C21.1519 22.7676 21.279 22.8531 21.419 22.9115C21.5591 22.9699 21.7093 23 21.861 23C22.0128 23 22.163 22.9699 22.303 22.9115C22.4431 22.8531 22.5702 22.7676 22.6771 22.6598C22.8842 22.4453 23 22.1587 23 21.8604C23 21.5621 22.8842 21.2755 22.6771 21.061ZM10.3679 18.4271C8.77668 18.4271 7.22122 17.9549 5.89819 17.0702C4.57516 16.1855 3.54398 14.928 2.93506 13.4569C2.32614 11.9857 2.16681 10.3668 2.47724 8.80501C2.78767 7.24321 3.5539 5.8086 4.67904 4.6826C5.80419 3.5566 7.23771 2.78979 8.79833 2.47912C10.3589 2.16846 11.9766 2.3279 13.4466 2.93729C14.9167 3.54668 16.1732 4.57864 17.0572 5.90267C17.9412 7.2267 18.4131 8.78335 18.4131 10.3757C18.4131 12.5111 17.5655 14.559 16.0567 16.0689C14.5479 17.5788 12.5016 18.4271 10.3679 18.4271Z"
                    fill="#00171F"
                  />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Search something here!"
                className="hidden xl:flex min-w-[180px] xl:w-[280px] pl-10 py-2 md:py-3 text-xs placeholder:text-gray-500 rounded-full focus:outline-none"
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
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  USD
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  VND
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  EUR
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
