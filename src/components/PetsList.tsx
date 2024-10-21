"use client";

import React, { useEffect, useState } from "react";
import PetCard from "./PetsCard";
import Link from "next/link";

const PetsList = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch(
          "https://monitor-backend-rust.vercel.app/api/pets"
        );
        const data = await response.json();
        setPets(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching pets:", error);
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6">
        <h1 className="mx-2 text-sm sm:text-base font-medium">Whats new?</h1>
        <div className="flex justify-between mx-2">
          <h2 className="text-xl sm:text-2xl font-bold text-[#002A48] mb-6">
            Take A Look At Some Of Our Pets
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
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6">
          {pets.map((pet) => (
            <Link href={`/pets/${pet.id}`}>
              <PetCard key={pet.id} pet={pet} />
            </Link>
          ))}
        </div>
      </div>
      <div className="px-2 mt-5">
        <Link href="/collections">
          <button className="flex sm:hidden border border-[#0A3052] text-sm font-medium text-[#0A3052] w-full h-12 px-4 gap-4 rounded-full items-center justify-center hover:bg-[#0A3052] hover:text-white transition">
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
    </div>
  );
};

export default PetsList;
