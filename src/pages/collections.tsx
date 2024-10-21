import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../app/globals.css";

import dropdown_icon from "/public/Images/dropdown_icon.png";
import Navbar from "@/components/Navbar";
import AllPuppiesBanner from "@/components/AllPuppiesBanner";
import Footer from "@/components/Footer";

export default function Collections() {
  const [pets, setPets] = useState([]); 
  const [showFilter, setShowFilter] = useState(false);
  const [filteredPets, setFilteredPets] = useState([]); 
  const [filters, setFilters] = useState({
    gender: [],
    minPrice: '',
    maxPrice: '',
    breed: [],
  });

  
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('https://monitor-backend-rust.vercel.app/api/pets');
        const data = await response.json();
        setPets(data);
        setFilteredPets(data);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    fetchPets();
  }, []);

  
  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFilters((prev) => {
      const newValue = type === 'checkbox'
        ? checked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value)
        : value;

      return {
        ...prev,
        [name]: type === 'checkbox' ? newValue : value,
      };
    });

    
    filterData({
      ...filters,
      [name]: type === 'checkbox' ? (checked ? [...filters[name], value] : filters[name].filter(item => item !== value)) : value,
    });
  };

  
  const filterData = (updatedFilters) => {
    const filtered = pets.filter((pet) => {
      const genderMatch = updatedFilters.gender.length === 0 || updatedFilters.gender.includes(pet.gender);
      const priceInVND = Number(pet.price.replace(/[^0-9.-]+/g, "")); // Convert price string to number
      const priceMatch =
        (updatedFilters.minPrice === '' || priceInVND >= Number(updatedFilters.minPrice)) &&
        (updatedFilters.maxPrice === '' || priceInVND <= Number(updatedFilters.maxPrice.replace(/[^0-9.-]+/g, "")));
      const breedMatch = updatedFilters.breed.length === 0 || updatedFilters.breed.includes(pet.breed);

      return genderMatch && priceMatch && breedMatch;
    });

    setFilteredPets(filtered);
  };

  return (
    <div className="">
      <div className="md:px-10 lg:px-8 xl:px-[130px] mx-auto">
        <Navbar />
        <div className="flex items-center gap-2 text-zinc-500 text-sm pt-2 md:pt-8 sm:p-0 mx-4">
          Home{" "}
          <svg
            width="5"
            height="8"
            viewBox="0 0 5 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L4 4L1 7"
              stroke="#667479"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Collections
        </div>
        <div className="pt-8 pb-10 px-2">
          <AllPuppiesBanner />
        </div>
        <div className="flex flex-col sm:flex-row mx-2.5 gap-1 sm:gap-10 pb-10">
          {/* Filter Options */}
          <div className="min-w-60">
            <div className="flex flex-row-reverse sm:flex-row gap-2 items-center justify-between">
              <div
                onClick={() => setShowFilter(!showFilter)}
                className="flex gap-2 items-center "
              >
                <svg
                  className="sm:hidden"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6.33723V5.59998C20 5.03992 19.9996 4.75993 19.8906 4.54602C19.7948 4.35786 19.6425 4.20487 19.4544 4.10899C19.2405 4 18.9597 4 18.3996 4H5.59961C5.03956 4 4.75981 4 4.5459 4.10899C4.35774 4.20487 4.20487 4.35786 4.10899 4.54602C4 4.75993 4 5.03992 4 5.59998V6.33723C4 6.58182 4 6.70417 4.02763 6.81925C4.05213 6.92129 4.09263 7.0188 4.14746 7.10828C4.20928 7.20916 4.29574 7.29562 4.46859 7.46846L4.46875 7.46863L9.53149 12.5314C9.70444 12.7043 9.79068 12.7908 9.85252 12.8917C9.90735 12.9812 9.94816 13.0787 9.97266 13.1808C10 13.2947 10 13.4156 10 13.6553V13.6627V18.4111C10 19.2683 10 19.697 10.1805 19.9551C10.3382 20.1805 10.5814 20.3311 10.8535 20.3713C11.1651 20.4173 11.5487 20.2256 12.3154 19.8423L13.1154 19.4423C13.4365 19.2817 13.5968 19.2014 13.7141 19.0817C13.8178 18.9758 13.897 18.8481 13.9453 18.708C14 18.5495 14 18.3701 14 18.0111V13.6627C14 13.4181 14 13.2959 14.0276 13.1808C14.0521 13.0787 14.0926 12.9812 14.1475 12.8917C14.2093 12.7908 14.2957 12.7044 14.4685 12.5316L14.4688 12.5314L19.5315 7.46863C19.7044 7.29568 19.7907 7.20919 19.8525 7.10828C19.9073 7.0188 19.9482 6.92129 19.9727 6.81925C20 6.70534 20 6.58431 20 6.34468V6.33723Z"
                    stroke="#002A48"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p className="text-2xl font-bold text-[#003459] flex items-center cursor-pointer gap-2">
                  Filter
                </p>
              </div>
              <div className="flex sm:hidden text-base sm:text-2xl gap-4">
                {/* Pet Sort */}
                <select className="border border-gray-300 rounded-full text-sm p-1 px-2">
                  <option value="relevent">Sort by: Popular</option>
                  <option value="low-high">Sort by: Low to High</option>
                  <option value="high-low">Sort by: High to Low</option>
                </select>
              </div>
            </div>

            {/* Filter contents */}
            <div className={`${showFilter ? "" : "hidden"} sm:block`}>
              <div className="py-3 border-b-2 border-[#e5e5e5]">
                <p className="mb-3 text-sm font-medium">Gender</p>
                <label className="flex gap-2">
                  <input
                    className="w-3"
                    type="checkbox"
                    name="gender"
                    value="Male"
                    onChange={handleFilterChange}
                  />
                  Male
                </label>
                <label className="flex gap-2">
                  <input
                    className="w-3"
                    type="checkbox"
                    name="gender"
                    value="Female"
                    onChange={handleFilterChange}
                  />
                  Female
                </label>
              </div>

              <div className="py-3 mt-2 border-b-2">
                <p className="mb-3 text-sm font-medium">Color</p>
                <label className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    name="breed"
                    value="Pomeranian White"
                    onChange={handleFilterChange}
                  />
                  <div className="bg-[#e2e2e2] w-3.5 h-3.5 rounded-full mb-0.5"></div>
                  White
                </label>
                <label className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    name="breed"
                    value="Poodle Tiny Yellow"
                    onChange={handleFilterChange}
                  />
                  <div className="bg-[#dedc9f] w-3.5 h-3.5 rounded-full mb-0.5"></div>
                  Yellow
                </label>
                <label className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    name="breed"
                    value="Poodle Tiny Sepia"
                    onChange={handleFilterChange}
                  />
                  <div className="bg-[#eb9c25] w-3.5 h-3.5 rounded-full mb-0.5"></div>
                  Sepia
                </label>
                <label className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    name="breed"
                    value="Alaskan Malamute Grey"
                    onChange={handleFilterChange}
                  />
                  <div className="bg-[#a9a9a9] w-3.5 h-3.5 rounded-full mb-0.5"></div>
                  Grey
                </label>
                <label className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    name="breed"
                    value="Pembroke Corgi Tricolor"
                    onChange={handleFilterChange}
                  />
                  <div className="bg-[#776e6e] w-3.5 h-3.5 rounded-full mb-0.5"></div>
                  Tricolor
                </label>
                <label className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    name="breed"
                    value="Pembroke Corgi Cream"
                    onChange={handleFilterChange}
                  />
                  <div className="bg-[#faaeae] w-3.5 h-3.5 rounded-full mb-0.5"></div>
                  Corgi Cream
                </label>
              </div>

              <div className="py-3 mt-2 border-b-2">
                <p className="mb-3 text-sm font-medium">Price</p>
                <input
                  className="px-2 max-w-[115px] bg-transparent  shadow"
                  type="number"
                  name="minPrice"
                  placeholder="Min"
                  value={filters.minPrice}
                  onChange={handleFilterChange}
                />
                <input
                  className="ml-2 px-2 max-w-[115px]  bg-transparent shadow"
                  type="number"
                  name="maxPrice"
                  placeholder="Max"
                  value={filters.maxPrice}
                  onChange={handleFilterChange}
                />
              </div>

              <div className="py-3 border-b-2">
                <p className="mb-3 text-sm font-medium">Breed</p>
                <label className="flex gap-2">
                  <input
                    className="w-3"
                    type="checkbox"
                    name="gender"
                    value="Male"
                    onChange={handleFilterChange}
                  />
                  Small
                </label>
                <label className="flex gap-2">
                  <input
                    className="w-3"
                    type="checkbox"
                    name="gender"
                    value="Female"
                    onChange={handleFilterChange}
                  />
                  Medium
                </label>
                <label className="flex gap-2">
                  <input
                    className="w-3"
                    type="checkbox"
                    name="gender"
                    value="Female"
                    onChange={handleFilterChange}
                  />
                  Large
                </label>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1">
            <div className="flex justify-between text-base sm:text-2xl gap-4 mb-4">
              <h2 className="text-2xl font-bold text-[#003459]">Small Dog</h2>
              {/* Pet Sort */}
              <select className="hidden sm:block border border-gray-300 rounded-full text-sm px-2">
                <option value="relevent">Sort by: Popular</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort by: High to Low</option>
              </select>
            </div>

            {/* Map Products */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-6">
              {filteredPets.map((pet) => (
                <Link href={`/pets/${pet.id}`} key={pet.id}>
                  <div className="bg-[#FDFDFD] rounded-lg shadow-lg lg:min-h-[350px]">
                    <Image
                      src={pet.image}
                      alt={pet.name}
                      width={264}
                      height={264}
                      className="object-cover w-full max-h-60 p-2"
                    />
                    <div className="p-2">
                      <h3 className="text-sm sm:text-base font-bold text-[#002A48]">
                        {pet.id} - {pet.breed}
                      </h3>
                      <div className="flex gap-1 items-center lg:gap-4 mt-1">
                        <p className="text-xs text-gray-500">
                          Gene: {pet.gender}
                        </p>
                        <p>•</p>
                        <p className="text-xs text-gray-500">Age: {pet.age}</p>
                      </div>
                      <p className="text-sm font-bold text-[#002A48]">
                        {pet.price}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
