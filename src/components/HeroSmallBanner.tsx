import Image from 'next/image';
import React from 'react'

import heroBanner1 from "/public/Images/heroBanner1.png";

const HeroSmallBanner = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse lg:h-[400px] text-center lg:text-right bg-[#F8E6C1] overflow-hidden px-5 rounded-3xl mx-2 md:mx-5 lg:mx-7 xl:mx-[110px]">
      {/* Hero left */}
      <div className="w-full flex item-center justify-center pt-8">
        <div className="text-[#414141]">
          <div className="items-center gap-2">
            <h1 className="text-[34px] md:text-5xl font-extrabold text-[#002A48]">
              One more friend
            </h1>
            <h1 className="sm:text-[36px] font-bold text-[#002A48] mt-2">
              Thousands more fun!
            </h1>
            <p className="max-w-[480px] mt-6 text-sm font-medium">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
            <div className="flex justify-center lg:float-end space-x-2 sm:space-x-4 pt-10">
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
        src={heroBanner1}
        alt="Hero_Banner"
        className="lg:max-w-[485px] xl:w-auto mt-4 lg:mt-10"
      />
    </div>
  );
}

export default HeroSmallBanner
