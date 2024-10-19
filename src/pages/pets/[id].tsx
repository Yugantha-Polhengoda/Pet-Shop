import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../../app/globals.css";
import Navbar from "@/components/Navbar";
import CustomerSwiper from "@/components/CustomerSwiper";
import MorePuppiesList from "@/components/MorePuppiesList";

const PetDetailPage = () => {
  const [pet, setPet] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetchPet(id);
    }
  }, [id]);

  const fetchPet = async (id) => {
    try {
      const response = await fetch(
        `https://monitor-backend-rust.vercel.app/api/pets`
      );
      const data = await response.json();
      const petDetails = data.find((pet) => pet.id === id);
      setPet(petDetails);
    } catch (error) {
      console.error("Error fetching pet details:", error);
    }
  };

  if (!pet) {
    return <div>Loading...</div>;
  }

  return (
    <div className="md:px-10 lg:px-8 xl:px-[130px] max-w-[1440px] mx-auto">
      <div className="hidden sm:block">
        <Navbar />
      </div>
      <div className="flex flex-col md:flex-row sm:p-4 border rounded-lg">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={pet.image}
            alt={pet.breed}
            className="rounded-lg w-screen sm:w-auto sm:h-[70%]"
          />
          {/* Thumbnails */}
          <div className="flex space-x-2 mt-4 px-4">
            <img
              src={pet.image}
              alt={pet.breed}
              className="w-20 h-20 rounded-md cursor-pointer"
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 md:pl-8 p-4">
          <div className="text-zinc-500 text-sm py-2 sm:p-0">
            Home > Dog > {pet.breed} > {pet.breed}
          </div>
          <h1 className="text-3xl font-bold">{pet.breed}</h1>
          <p className="text-xl text-blue-600 font-semibold mt-2">
            {pet.price}
          </p>

          <div className="flex space-x-4 mt-4">
            <button className="bg-[#003459] text-white px-4 py-2 rounded-full">
              Contact Us
            </button>
            <button className="border border-[#003459] text-[#003459] px-4 py-2 rounded-full">
              Chat with Montie
            </button>
          </div>

          <div className="mt-8">
            <div className="flex mt-4 gap-5 border-b py-2">
              <h3 className="font-semibold mr-20 lg:mr-40 w-5 lg:w-20">
                AKU
              </h3>
              <p className="max-w-80 text-left">: #1000078</p>
            </div>
            <div className="flex mt-4 gap-5 border-b py-2">
              <h3 className="font-semibold mr-20 lg:mr-40 w-5 lg:w-20">
                Gender
              </h3>

              <p className="max-w-80 text-left">: Female</p>
            </div>
            <div className="flex mt-4 gap-5 border-b py-2">
              <h3 className="font-semibold mr-20 lg:mr-40 w-5 lg:w-20">
                Size
              </h3>

              <p className="max-w-80 text-left">: Small</p>
            </div>
            <div className="flex mt-4 gap-5 border-b py-2">
              <h3 className="font-semibold mr-20 lg:mr-40 w-5 lg:w-20">
                Color
              </h3>

              <p className="max-w-80 text-left">: Apricot & Tan</p>
            </div>
            <div className="flex mt-4 gap-5 border-b py-2">
              <h3 className="font-semibold mr-20 lg:mr-40 w-5 lg:w-20">
                Vaccinated
              </h3>

              <p className="max-w-80 text-left">: Yes</p>
            </div>
            <div className="flex mt-4 gap-5 border-b py-2">
              <h3 className="font-semibold mr-20 lg:mr-40 w-5 lg:w-20">
                Dewormed
              </h3>

              <p className="max-w-80 text-left">: Yes</p>
            </div>
            <div className="flex mt-4 gap-5 border-b py-2">
              <h3 className="font-semibold mr-20 lg:mr-40 w-5 lg:w-20">
                Cert
              </h3>

              <p className="max-w-80 text-left">: Yes (MKA)</p>
            </div>
            <div className="flex mt-4 gap-5 border-b py-2">
              <h3 className="font-semibold mr-20 lg:mr-40 w-5 lg:w-20">
                Microchip
              </h3>

              <p className="max-w-80 text-left">: Yes</p>
            </div>
            <div className="flex mt-4 gap-5 border-b py-2">
              <h3 className="font-semibold mr-20 lg:mr-40 w-5 lg:w-20">
                Location
              </h3>

              <p className="max-w-80 text-left">: Vietnam</p>
            </div>
            <div className="flex mt-4 gap-5 border-b py-2">
              <h3 className="font-semibold mr-20 lg:mr-40 w-5 lg:w-20">
                Published Date
              </h3>

              <p className="max-w-80 text-left">: 12-Oct-2022</p>
            </div>
            <div className="flex justify-between float-start mt-4 gap-5 border-b py-2">
              <h3 className="font-semibold mr-20 lg:mr-40 w-5 lg:w-20">
                Additional Information
              </h3>

              <p className="max-w-80 text-left">
                : Pure breed Shiba Inu. Good body structure with microchip and
                vaccinated.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <CustomerSwiper />
      </div>
      
      <MorePuppiesList />
    </div>
  );
};

export default PetDetailPage;
