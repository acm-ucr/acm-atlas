import CarouselItem from "./carouselitem";
import { StaticImageData } from "next/image";
interface CarouselDataItem {
  name: string;
  icon: StaticImageData;
  borderColor: string;
}

interface CarouselProps {
  data: CarouselDataItem[];
  pad: string;
  padmd: string;
  pad2xl: string;
}

const Carousel = ({ data, pad, padmd, pad2xl }: CarouselProps) => {
  return (
    <div className="relative hidden overflow-hidden py-[6vh] md:flex">
      <div className="flex w-screen animate-marquee justify-between gap-x-10 px-5">
        {data.map(({ name, icon, borderColor }, index) => (
          <CarouselItem
            key={index}
            name={name}
            icon={icon}
            borderColor={borderColor}
          />
        ))}
      </div>
      <div
        className={`absolute flex w-screen animate-marquee-continuation justify-between gap-x-10 ${pad} ${padmd} ${pad2xl}`}
      >
        {data.map(({ name, icon, borderColor }, idx) => (
          <CarouselItem
            key={idx}
            name={name}
            icon={icon}
            borderColor={borderColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
