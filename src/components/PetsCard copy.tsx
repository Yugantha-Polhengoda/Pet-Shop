import Image from "next/image";
import React from "react";

const PetCard = ({ pet }) => {
  return (
    <div className="bg-[#FDFDFD] rounded-lg shadow-lg overflow-hidden w-[290px] h-[378px]">
      <Image
        src={pet.image}
        alt={pet.name}
        width={264}
        height={264}
        className="object- w-full h-60 p-2"
      />
      <div className="p-2">
        <h3 className="text-base font-bold text-[#002A48]">
          {pet.id} - {pet.breed}
        </h3>
        <div className="flex gap-4 mt-1">
          <p className="text-xs text-gray-500">Gene: {pet.gender}</p>•
          <p className="text-xs text-gray-500">Age: {pet.age}</p>
        </div>
        <p className="text-sm font-bold text-[#002A48]">{pet.price}</p>
      </div>
    </div>
  );
};

export default PetCard;
