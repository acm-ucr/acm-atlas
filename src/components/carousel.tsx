import React from "react";
import CarouselItem from "./CarouselItem";

interface CarouselDataItem {
  name: string;
  icon: React.ElementType;
  borderColor: string;
  iconColor: string;
}

interface CarouselProps {
  data: CarouselDataItem[];
}

const Carousel = ({ data }: CarouselProps) => {
  return (
    <div className="relative flex w-screen overflow-hidden py-5">
      <div className="animate-marquee flex items-stretch gap-10 px-10">
        {data.map(({ name, icon, borderColor, iconColor }, index) => (
          <CarouselItem
            key={index}
            name={name}
            icon={icon}
            borderColor={borderColor}
            iconColor={iconColor}
          />
        ))}
      </div>
      <div className="animate-marquee-continuation absolute flex items-stretch gap-10 px-10">
        {data.map(({ name, icon, borderColor, iconColor }, index) => (
          <CarouselItem
            key={`second-${index}`}
            name={name}
            icon={icon}
            borderColor={borderColor}
            iconColor={iconColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
