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
    <div className="relative flex overflow-hidden py-[6vh]">
      <div className="animate-marquee flex w-screen justify-between gap-x-10 px-5">
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
        className={`animate-marquee-continuation absolute flex w-screen justify-between gap-x-10 ${pad} ${padmd} ${pad2xl}`}
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
