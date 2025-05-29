"use client";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  title: string;
  date: string;
  location: string;
  startingTime: string;
  description: string;
  bgColor: string;
  textColor?: string;
  image: StaticImageData;
}

const Card = ({
  title,
  date,
  location,
  startingTime,
  description,
  bgColor,
  textColor,
  image,
}: CardProps) => {
  return (
    <div
      className={`flex h-full flex-col items-start overflow-clip ${bgColor} ${textColor ? textColor : "text-acm-gray-500"} gap-2 rounded-xl px-5 py-6`}
    >
      <div className="flex flex-col">
        <p className="text-3xl font-bold">{title}</p>
        <p className="text-xl font-normal">{date}</p>
        <p className="text-lg font-light">
          {location} - {startingTime}
        </p>
      </div>
      <div className="ml-5 flex w-full justify-end py-4">
        <Image src={image} alt="image" />
      </div>
      <div className="flex items-start justify-start">
        <p className="text-lg font-light">{description}</p>
      </div>
    </div>
  );
};

export default Card;
