import Image from "next/image";
import React from "react";

import heroBanner1 from "/public/Images/heroBanner1.png";

const HeroSmallBanner = () => {
  return (
    <div className="relative z-10 flex flex-col lg:flex-row-reverse lg:h-[400px] text-center lg:text-right lg:bg-[#003459] bg-[#0A3052] overflow-hidden px-2 lg:pr-20 rounded-3xl mx-2 md:mx-5 lg:mx-7 xl:mx-[110px] max-w-[1440px]">
      {/* Hero left */}
      <div className="relative items-center w-full flex item-center justify-center pt-8 lg:pt-14">
        <svg
          className="lg:hidden absolute h-[410px] w-[450px] md:h-[500px] md:w-[800px] top-0 -mt-20 md:-mt-20 lg:mt-0 mr-2 md:ml-5 lg:ml-20 xl:ml-40 z-10 rotate-6 md:rotate-12 lg:rotate-6"
          width="382"
          height="375"
          viewBox="0 0 382 375"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="-79.3745"
            y="-354"
            width="605.027"
            height="635"
            rx="75"
            transform="rotate(11.4104 -79.3745 -354)"
            fill="#FCEED5"
          />
        </svg>

        <svg
          className="hidden lg:block absolute lg:h-[410px] top-0 lg:ml-20 xl:ml-44 z-10"
          width="642"
          height="378"
          viewBox="0 0 642 378"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="238.67"
            y="-360"
            width="782.292"
            height="635"
            rx="99"
            transform="rotate(25.23 238.67 -360)"
            fill="#FCEED5"
          />
        </svg>

        <div className="text-[#414141] xl:ml-60 z-10 lg:mb-16">
          <div className="items-center gap-2">
            <h1 className="text-[34px] md:text-5xl font-extrabold text-[#002A48]">
              One more friend
            </h1>
            <h1 className="sm:text-[36px] font-bold text-[#002A48] mt-2">
              Thousands more fun!
            </h1>
            <p className="max-w-[480px] mt-6 text-xs font-medium">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
            <div className="flex justify-center lg:float-end space-x-2 sm:space-x-4 pt-5 sm:pt-10">
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

      <svg
        className="absolute md:hidden sm:block lg:block fill-[#003459] lg:fill-[#0A3052] -z-10 lg:mr-24 xl:mr-56 h-[600px] lg:h-[810px] transform -translate-x-1/2 z-5 bottom-0 lg:bottom-auto ml-40 -rotate-6 lg:rotate-[182deg]"
        width="642"
        height="378"
        viewBox="0 0 642 378"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="238.67"
          y="-360"
          width="782.292"
          height="635"
          rx="99"
          transform="rotate(25.23 238.67 -360)"
          fill=""
        />
      </svg>

      {/* Hero Image */}
      <Image
        src={heroBanner1}
        alt="Hero_Banner"
        className="relative lg:max-w-[485px] xl:w-auto mt-4 lg:mt-14 z-10"
      />
    </div>
  );
};

export default HeroSmallBanner;
