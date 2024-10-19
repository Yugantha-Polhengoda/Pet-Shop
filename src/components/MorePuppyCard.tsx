import React from "react";
import Image from "next/image";

const MorePuppyCard = ({ puppy }) => {
  return (
    <div className="bg-[#FDFDFD] rounded-lg shadow-lg lg:min-h-[350px]">
      <Image
        src={puppy.image}
        alt={puppy.name}
        width={264}
        height={264}
        className="w-full max-h-60 p-2 rounded-2xl"
      />
      <div className="p-2">
        <h3 className="text-base font-bold text-[#002A48]">
          {puppy.id} - {puppy.breed}
        </h3>
        <div className="sm:flex sm:gap-4 mt-1 items-center space-y-1 sm:space-y-0">
          <p className="text-xs text-gray-500">Gene: {puppy.gender}</p>
          <p className="hidden sm:block">•</p>
          <p className="text-xs text-gray-500">Age: {puppy.age}</p>
        </div>
        <p className="text-sm font-bold text-[#002A48] mt-1">{puppy.price}</p>
      </div>
    </div>
  );
};

export default MorePuppyCard;
