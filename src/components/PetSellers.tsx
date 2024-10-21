import Image from 'next/image';
import React from 'react'

import sheba from "/public/Images/sheba.png";
import whiskas from "/public/Images/whiskas.png";
import bakers from "/public/Images/bakers.png";
import felix from "/public/Images/felix.png";
import goodBoy from "/public/Images/goodBoy.png";
import butches from "/public/Images/butches.png";
import pedigree from "/public/Images/pedigree.png";
import Link from 'next/link';

const PetSellers = () => {
  return (
    <div className="hidden md:block">
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-2 sm:px-6">
          <div className="flex justify-between mx-2">
            <h2 className="sm:text-base font-medium text-[#002A48] mb-6">
              Proud to be part of{" "}
              <span className="text-2xl font-bold">Pet Sellers</span>
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Link>
          </div>
          <div className="flex items-center gap-2 sm:gap-6">
            <div className=" pb-2">
              <Image
                src={sheba}
                alt=""
                width={264}
                height={264}
                className="w-auto max-h-64 p-2 rounded-2xl"
              />
            </div>

            <div className=" pb-2">
              <Image
                src={whiskas}
                alt=""
                width={264}
                height={264}
                className="w-auto max-h-64 p-2 rounded-2xl"
              />
            </div>

            <div className=" pb-2">
              <Image
                src={bakers}
                alt=""
                width={264}
                height={264}
                className="w-auto max-h-28 p-2 rounded-2xl"
              />
            </div>

            <div className=" pb-2">
              <Image
                src={felix}
                alt=""
                width={264}
                height={264}
                className="w-auto max-h-64 p-2 rounded-2xl"
              />
            </div>

            <div className=" pb-2">
              <Image
                src={goodBoy}
                alt=""
                width={264}
                height={264}
                className="w-auto max-h-64 p-2 rounded-2xl"
              />
            </div>

            <div className=" pb-2">
              <Image
                src={butches}
                alt=""
                width={264}
                height={264}
                className="w-auto max-h-64 p-2 rounded-2xl"
              />
            </div>

            <div className=" pb-2">
              <Image
                src={pedigree}
                alt=""
                width={264}
                height={264}
                className="w-auto max-h-64 p-2 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetSellers
