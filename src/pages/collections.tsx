import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../app/globals.css";

import dropdown_icon from "/public/Images/dropdown_icon.png"; // Adjusted the import path
import Navbar from "@/components/Navbar";
import AllPuppiesBanner from "@/components/AllPuppiesBanner";

export default function Collections() {
  const [pets, setPets] = useState([]); // Array to hold all pet data
  const [filteredPets, setFilteredPets] = useState([]); // Array to hold filtered pet data
  const [filters, setFilters] = useState({
    gender: [],
    minPrice: '',
    maxPrice: '',
    breed: [],
  });

  // Fetch pet data from API
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('https://monitor-backend-rust.vercel.app/api/pets');
        const data = await response.json();
        setPets(data);
        setFilteredPets(data); // Initialize filtered pets with all pets
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    fetchPets();
  }, []);

  // Handle filter changes
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

    // Immediately filter the pets after setting the filters
    filterData({
      ...filters,
      [name]: type === 'checkbox' ? (checked ? [...filters[name], value] : filters[name].filter(item => item !== value)) : value,
    });
  };

  // Function to filter pets based on selected filters
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
    <div className="md:px-10 lg:px-8 xl:px-[130px] max-w-[1440px] mx-auto">
      <Navbar />
      <div className="pt-8">
        <AllPuppiesBanner />
      </div>
      <div className="flex flex-col sm:flex-row mx-2.5 gap-1 sm:gap-10 pt-10 pb-40">
        {/* Filter Options */}
        <div className="min-w-60">
          <p className="text-2xl font-bold text-[#003459] flex items-center cursor-pointer gap-2">
            Filter
          </p>
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
            <label className="flex gap-2">
              <input
                type="checkbox"
                name="breed"
                value="Pomeranian White"
                onChange={handleFilterChange}
              />
              White
            </label>
            <label className="flex gap-2">
              <input
                type="checkbox"
                name="breed"
                value="Poodle Tiny Yellow"
                onChange={handleFilterChange}
              />
              Yellow
            </label>
            <label className="flex gap-2">
              <input
                type="checkbox"
                name="breed"
                value="Poodle Tiny Sepia"
                onChange={handleFilterChange}
              />
              Sepia
            </label>
            <label className="flex gap-2">
              <input
                type="checkbox"
                name="breed"
                value="Alaskan Malamute Grey"
                onChange={handleFilterChange}
              />
              Grey
            </label>
            <label className="flex gap-2">
              <input
                type="checkbox"
                name="breed"
                value="Pembroke Corgi Tricolor"
                onChange={handleFilterChange}
              />
              Tricolor
            </label>
            <label className="flex gap-2">
              <input
                type="checkbox"
                name="breed"
                value="Pembroke Corgi Cream"
                onChange={handleFilterChange}
              />
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

        {/* Right Side */}
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl gap-4 mb-4">
            <h2 className="text-2xl font-bold text-[#003459]">Small Dog</h2>
            {/* Product Sort */}
            <select className="border border-gray-300 rounded-full text-sm px-2">
              <option value="relevent">Sort by: Relevent</option>
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
  );
};
