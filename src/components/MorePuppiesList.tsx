"use client";
import React, { useEffect, useState } from "react";
import MorePuppyCard from "./MorePuppyCard";

const MorePuppiesList = () => {
  const [puppies, setPuppies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPuppies = async () => {
      try {
        const response = await fetch(
          "https://monitor-backend-rust.vercel.app/api/pets"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch puppies");
        }
        const data = await response.json();
        setPuppies(data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPuppies();
  }, []);

  if (loading) return <div>Loading puppies...</div>;
  if (error) return <div>Error: {error}</div>;

  // Get only the first 4 puppies
  const displayedPuppies = puppies.slice(0, 4);

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6">
        <h1 className="mx-2 text-sm sm:text-base font-medium">Whats new?</h1>
        <div className="flex justify-between mx-2">
          <h2 className="text-xl sm:text-2xl font-bold text-[#002A48] mb-6">
            See More Puppies
          </h2>
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
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6">
          {displayedPuppies.map((puppy) => (
            <MorePuppyCard key={puppy.id} puppy={puppy} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MorePuppiesList;
