import Image, { StaticImageData } from "next/image";

interface CarouselItemProps {
  name: string;
  icon: StaticImageData;
  borderColor: string;
}

const CarouselItem = ({ name, icon, borderColor }: CarouselItemProps) => {
  return (
    <div
      className={`${borderColor} absolute left-[100%] flex w-64 items-center justify-center rounded-lg border-2 px-5 py-3 pr-14 md:w-80`}
    >
      <Image src={icon} alt="icon" className="w-12 pr-4 md:w-16" />
      <p className="text-xl font-light md:text-3xl">{name}</p>
    </div>
  );
};

export default CarouselItem;
