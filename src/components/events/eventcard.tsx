import Image, { StaticImageData } from "next/image";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  startingTime: string;
  description: string;
  bgColor: string;
  textColor?: string;
  image: StaticImageData;
}

const EventCard = ({
  title,
  date,
  location,
  startingTime,
  description,
  bgColor,
  textColor,
  image,
}: EventCardProps) => {
  return (
    <div
      className={`flex h-[56vh] w-1/5 flex-col items-start justify-between ${bgColor} ${textColor ? textColor : "text-acm-gray-500"} gap-2 rounded-xl px-5 py-6`}
    >
      <div className="flex flex-col">
        <p className="text-5xl font-bold">{title}</p>
        <p className="text-2xl font-normal">{date}</p>
        <p className="text-xl font-light">
          {location} - {startingTime}
        </p>
      </div>
      <div className="ml-5 flex w-full items-end justify-end">
        <Image src={image} alt="Event Image" />
      </div>
      <div className="flex items-start justify-start">
        <p className="text-xl font-light">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
