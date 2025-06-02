import Image from "next/image";
import { StaticImageData } from "next/image";

interface CarouselItemProps {
  name: string;
  icon: StaticImageData;
  borderColor: string;
}

const CarouselItem = ({ name, icon, borderColor }: CarouselItemProps) => {
  return (
    <div
      className={`${borderColor} absolute left-[100%] flex items-center justify-start rounded-lg border-2 px-5 py-3 pr-14`}
    >
      <Image src={icon} alt="icon" className="w-16 pr-4" />
      <p className="text-3xl font-light">{name}</p>
    </div>
  );
};

export default CarouselItem;
