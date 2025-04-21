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
      className={`flex w-[18vw] flex-col items-start justify-start ${bgColor} ${textColor ? textColor : "text-acm-gray-500"} gap-3 rounded-xl p-4`}
    >
      <div className="flex flex-col">
        <p className="text-5xl font-bold">{title}</p>
        <div className="text-2xl">
          <p className="font-normal">{date}</p>
          <p className="font-light">
            {location} - {startintgTime}
          </p>
        </div>
      </div>
      <div className="ml-4 flex w-full items-end justify-end">
        <Image src={image} alt="Event" className="" />
      </div>
      <div className="mr-5 flex w-full items-start justify-start text-xl font-light">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
