import Image from "next/image";
import React from "react";

const MenuItem = ({ imgSrc, name, description, price }) => {
  return (
    <div className="flex items-center gap-4 py-4">
      {/* Image */}
      <div className="relative w-[60px] h-[60px] xl:w-[72px] xl:h-[72px] rounded-full overflow-hidden">
        <Image
          src={imgSrc}
          fill
          alt=""
          priority
          quality={100}
          className="object-cover"
        />
      </div>
      
      {/* Text */}
      <div className="flex flex-col flex-1 gap-2">
        <div className="flex justify-between items-baseline gap-4">
          {/* Name */}
          <p className="uppercase font-primary font-semibold text-[22px] leading-none text-primary">{name}</p>

          {/* Border */}
          <div className="flex-1 border-b border-dashed border-primary mx-4"></div>

          {/* Price */}
          <p className="leading-none font-primary font-semibold text-[22px] xl:text-[30px] text-primary">
            {price.toFixed(2)}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-secondary">{description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
