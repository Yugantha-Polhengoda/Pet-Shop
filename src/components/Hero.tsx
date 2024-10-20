import Image from 'next/image';
import React from 'react';

import Hero_Banner from "/public/Images/hero_image2.png";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row md:h-[920px] lg:h-[695px] bg-[#F8E6C1] overflow-hidden px-5 xl:px-[40px] rounded-b-[40px] relative">
      <svg
        className="absolute rotate-[6deg]"
        width="478"
        height="116"
        viewBox="0 0 478 116"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="-64.3297"
          y="-697"
          width="635"
          height="635"
          rx="99"
          transform="rotate(25.23 -64.3297 -697)"
          fill="#F7DBA7"
        />
      </svg>

      {/* Hero left */}
      <div className="w-full lg:w-1/2 flex items-center justify-center pt-28 md:pt-40 lg:pt-0">
        <div className="text-[#414141]">
          <div className="items-center gap-2">
            <svg
              className="absolute h-5 fill-[#f0d5a7] ml-[270px] md:ml-[550px] xl:ml-[680px] mt-14 md:mt-2"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="-2"
                y="12.6443"
                width="21.4707"
                height="21.4707"
                rx="6"
                transform="rotate(-43.0046 -2 12.6443)"
                fill=""
              />
            </svg>
            <svg
              className="absolute fill-[#f0d5a7] ml-[180px] md:ml-[550px] xl:ml-[650px] mt-16 lg:mt-[85px]"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="-2"
                y="12.6443"
                width="21.4707"
                height="21.4707"
                rx="6"
                transform="rotate(-43.0046 -2 12.6443)"
                fill=""
              />
            </svg>
            <svg
              className="absolute ml-[175px] md:ml-[550px] xl:ml-[650px] mt-[74px] lg:mt-24"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="-2"
                y="12.6443"
                width="21.4707"
                height="21.4707"
                rx="6"
                transform="rotate(-43.0046 -2 12.6443)"
                fill="#002A48"
              />
            </svg>

            <svg
              className="-ml-[17px]"
              width="77"
              height="77"
              viewBox="0 0 77 77"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="22.6029"
                y="-6"
                width="67.1033"
                height="67.1033"
                rx="20"
                transform="rotate(25.23 22.6029 -6)"
                fill="#F7DBA7"
              />
            </svg>
            <h1 className="text-[34px] -mt-[67px] md:text-6xl font-extrabold text-[#002A48]">
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
            <div className="flex space-x-4 pt-10 justify-center lg:justify-normal">
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
          <svg
            className="absolute mt-28 -ml-0"
            width="751"
            height="93"
            viewBox="0 0 751 93"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.4"
              x="438.334"
              y="-38"
              width="635"
              height="635"
              rx="99"
              transform="rotate(56.47 438.334 -38)"
              fill="#F7DBA7"
            />
          </svg>
        </div>
      </div>
      {/* Hero Left */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center mt-4 lg:mt-[130px]">
        <svg
          className="absolute max-w-[500px] sm:max-w-full z-10 mt-20 sm:mt-72 ml-36 sm:-ml-[97px]"
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
          className="absolute max-w-[650px] sm:max-w-full z-10 mt-40 ml-72 sm:ml-0"
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
          src={Hero_Banner}
          alt="Hero_Banner"
          className="w-auto md:w-[400px] lg:w-[600px] mt-4 lg:mt-[130px] z-20"
        />
      </div>
    </div>
  );
}

export default Hero;
