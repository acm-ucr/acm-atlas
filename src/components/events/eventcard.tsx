import Image, { StaticImageData } from "next/image";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  startintgTime: string;
  description: string;
  bgColor: string;
  textColor?: string;
  image: StaticImageData;
}

const EventCard = ({
  title,
  date,
  location,
  startintgTime,
  description,
  bgColor,
  textColor,
  image,
}: EventCardProps) => {
  return (
    <div
      className={`flex flex-col items-start justify-between w-[18vw] ${bgColor} ${textColor ? textColor : "text-acm-gray-500"} gap-2 rounded-xl py-6 px-4`}
    >
      <div className="flex flex-col">
        <p className="text-5xl font-bold">{title}</p>
          <p className="font-normal text-2xl">{date}</p>
          <p className="font-light text-xl">
            {location} - {startintgTime}
          </p>
      </div>
      <div className="ml-4 flex w-full items-end justify-end">
        <Image src={image} alt="Event Image" />
      </div>
      <div className="flex items-start justify-start">
        <p className="text-xl font-light">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
