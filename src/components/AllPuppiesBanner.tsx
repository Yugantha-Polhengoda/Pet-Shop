import Image from 'next/image';
import React from 'react'

import AllPuppies from "/public/Images/AllPuppiesBanner.png";

const AllPuppiesBanner = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse lg:h-[380px] text-center lg:text-right bg-[#F8E6C1] overflow-hidden px-3 rounded-3xl">
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
            <div className="flex justify-center lg:float-end space-x-4 pt-10">
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
      <div className="relative w-full flex justify-center items-center mt- lg:ml-20">
        <svg
          className="absolute max-w-[500px] sm:max-w-full z-10 mt-60 sm:mt-80 ml-20 sm:-ml-[97px]"
          width="702"
          height="413"
          viewBox="0 0 702 413"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="89.2182"
            y="-14"
            width="635"
            height="635"
            rx="99"
            transform="rotate(9.35484 89.2182 -14)"
            fill="#003459"
          />
        </svg>

        <svg
          className=" absolute max-w-[650px] sm:max-w-full z-10 mt-72 md:mt-40 lg:mt-60 ml-72 sm:ml-16  rotate-6"
          width="781"
          height="483"
          viewBox="0 0 781 483"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="238.67"
            y="-32"
            width="635"
            height="635"
            rx="99"
            transform="rotate(25.23 238.67 -32)"
            fill="#F7DBA7"
          />
        </svg>
        <Image
          src={AllPuppies}
          alt="Hero_Banner"
          className="w-auto lg:w-[600px] mt-4 lg:mt-[185px] z-20"
        />
      </div>
    </div>
  );
}

export default AllPuppiesBanner
