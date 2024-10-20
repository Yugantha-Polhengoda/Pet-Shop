import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import PetKnowledge1 from "/public/Images/PetKnowledge1.png";
import PetKnowledge2 from "/public/Images/PetKnowledge2.png";
import PetKnowledge3 from "/public/Images/PetKnowledge3.png";

const PetKnowledge = () => {
  return (
    <div>
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-2 sm:px-6">
          <h1 className="mx-2 text-sm sm:text-base font-medium">
            You already know?
          </h1>
          <div className="flex justify-between mx-2">
            <h2 className="text-xl sm:text-2xl font-bold text-[#002A48] mb-6">
              Useful pet knowledge
            </h2>

            <Link href="/collections">
              <button className="hidden sm:flex border border-[#0A3052] text-sm font-medium text-[#0A3052] h-10 px-4 sm:px-8 gap-4 rounded-full items-center hover:bg-[#0A3052] hover:text-white transition">
                View more
                <svg
                  width="7"
                  height="10"
                  viewBox="0 0 7 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 1L5.5 5L1.5 9"
                    stroke="#003459"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6">
            <div className="bg-[#FDFDFD] rounded-lg shadow-lg lg:min-h-[350px] pb-2">
              <Image
                src={PetKnowledge1}
                alt=""
                width={264}
                height={264}
                className="w-full max-h-60 p-2 rounded-2xl"
              />
              <div className="p-2">
                <h3 className="text-base font-bold text-[#002A48]">
                  What is a Pomeranian? How to Identify Pomeranian Dogs
                </h3>
                <div className="sm:flex sm:gap-4 mt-1 items-center space-y-1 sm:space-y-0">
                  <p className="text-xs text-gray-500">
                    The Pomeranian, also known as the Pomeranian (Pom dog), is
                    always in the top of the cutest pets. Not only that, the
                    small, lovely, smart, friendly, and skillful circus dog
                    breed.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#FDFDFD] rounded-lg shadow-lg lg:min-h-[350px] pb-2">
              <Image
                src={PetKnowledge2}
                alt=""
                width={264}
                height={264}
                className="w-full max-h-60 p-2 rounded-2xl"
              />
              <div className="p-2">
                <h3 className="text-base font-bold text-[#002A48]">
                  What is a Pomeranian? How to Identify Pomeranian Dogs
                </h3>
                <div className="sm:flex sm:gap-4 mt-1 items-center space-y-1 sm:space-y-0">
                  <p className="text-xs text-gray-500">
                    The Pomeranian, also known as the Pomeranian (Pom dog), is
                    always in the top of the cutest pets. Not only that, the
                    small, lovely, smart, friendly, and skillful circus dog
                    breed.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#FDFDFD] rounded-lg shadow-lg lg:min-h-[350px] pb-2">
              <Image
                src={PetKnowledge3}
                alt=""
                width={264}
                height={264}
                className="w-full max-h-60 p-2 rounded-2xl"
              />
              <div className="p-2">
                <h3 className="text-base font-bold text-[#002A48]">
                  What is a Pomeranian? How to Identify Pomeranian Dogs
                </h3>
                <div className="sm:flex sm:gap-4 mt-1 items-center space-y-1 sm:space-y-0">
                  <p className="text-xs text-gray-500">
                    The Pomeranian, also known as the Pomeranian (Pom dog), is
                    always in the top of the cutest pets. Not only that, the
                    small, lovely, smart, friendly, and skillful circus dog
                    breed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetKnowledge
