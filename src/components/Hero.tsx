import Image from 'next/image';
import React from 'react'

import Hero_Banner from "/public/Images/hero_image2.png";

const Hero = () => {
  return (
    <div className="relatives z-0 flex flex-col lg:flex-row lg:h-[695px] bg-[#F8E6C1] overflow-hidden px-5 xl:px-[40px] rounded-b-[40px]">
      {/* Hero left */}
      <div className="w-full lg:w-1/2 flex item-center justify-center pt-28 lg:pt-[180px]">
        <div className="text-[#414141]">
          <div className="items-center gap-2">
            <h1 className="text-[34px] md:text-6xl font-extrabold text-[#002A48]">
              One more friend
            </h1>
            <h1 className="sm:text-[46px] font-bold text-[#002A48] mt-2">
              Thousands more fun!
            </h1>
            <p className="max-w-[480px] mt-6 text-base font-medium">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
            <div className="flex space-x-4 pt-10">
              <button className="border border-[#0A3052] text-sm text-[#0A3052] py-2 px-4 sm:px-6 gap-2 rounded-full flex items-center hover:bg-[#0A3052] hover:text-white transition">
                View Intro
                <svg
                  className="w-4 h-4 border border-[#0A3052] rounded-full"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>

              <button className="bg-[#0A3052] text-white py-2 px-6 rounded-full text-sm hover:bg-[#092741] transition">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Left */}
      <Image
        src={Hero_Banner}
        alt="Hero_Banner"
        className="w-auto mt-4 lg:mt-[130px]"
      />
    </div>
  );
}

export default Hero
