import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FFEDD5] pt-12 pb-6 rounded-t-[40px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="bg-[#103559] rounded-xl p-6 flex flex-col lg:flex-row justify-between items-center gap-4">
          <h2 className="text-white text-lg lg:text-2xl font-bold lg:max-w-[389px]">
            Register Now So You Don't Miss Our Programs
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg bg-white ">
            <input
              type="email"
              placeholder="Enter your Email"
              className="rounded-lg px-4 py-3 text-gray-700 placeholder:text-gray-500 w-full border xl:w-[500px]"
            />
            <button className="bg-[#1D3C6E] hover:bg-[#143257] text-white px-6 py-3 rounded-lg md:min-w-44">
              Subscribe Now
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between">
          {/* Navigation Links */}
          <nav className="flex justify-center space-x-6 text-gray-800 mt-8">
            <Link href="/#">
              <h1 className="hover:text-[#1D3C6E]">Home</h1>
            </Link>
            <Link href="/collections">
              <h1 className="hover:text-[#1D3C6E]">Category</h1>
            </Link>
            <Link href="/about">
              <h1 className="hover:text-[#1D3C6E]">About</h1>
            </Link>
            <Link href="/contact">
              <h1 className="hover:text-[#1D3C6E]">Contact</h1>
            </Link>
          </nav>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mt-6">
            <Link href="/#">
              <h1 className="text-gray-800 hover:text-[#1D3C6E]">
                <FaFacebookF size={20} />
              </h1>
            </Link>
            <Link href="/#">
              <h1 className="text-gray-800 hover:text-[#1D3C6E]">
                <FaTwitter size={20} />
              </h1>
            </Link>
            <Link href="/#">
              <h1 className="text-gray-800 hover:text-[#1D3C6E]">
                <FaInstagram size={20} />
              </h1>
            </Link>
            <Link href="/#">
              <h1 className="text-gray-800 hover:text-[#1D3C6E]">
                <FaYoutube size={20} />
              </h1>
            </Link>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 flex flex-col lg:flex-row justify-between items-center text-center text-gray-600 border-t pt-5 border-gray-300">
          {/* Monito Pets for Best */}
          <div className="order-1 lg:order-2 mb-4 lg:mb-0">
            <Link href="/#">
              <h1 className="text-2xl md:text-3xl font-extrabold text-[#103559]">
                Monito
              </h1>
              <span className="ml-2 md:ml-3 text-sm text-[#103559]">
                Pets for Best
              </span>
            </Link>
          </div>

          {/* Copyright Text */}
          <p className="order-2 lg:order-3">
            © 2022 Monito. All rights reserved.
          </p>

          {/* Terms and Privacy Links */}
          <div className="order-3 lg:order-none flex space-x-4 mt-4 lg:mt-0">
            <Link href="/terms">
              <h1 className="hover:text-[#1D3C6E]">Terms of Service</h1>
            </Link>
            <Link href="/privacy">
              <h1 className="hover:text-[#1D3C6E]">Privacy Policy</h1>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
