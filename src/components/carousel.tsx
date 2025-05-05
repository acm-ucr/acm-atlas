import CarouselItem from "./ui/carouselitem";

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
    <div className="relative flex overflow-hidden py-5">
      <div className="animate-marquee flex w-screen justify-between gap-10 px-10">
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
      <div className="animate-marquee-continuation absolute flex w-screen justify-between gap-10 px-[3.5vw] 2xl:px-[4vw]">
        {data.map(({ name, icon, borderColor, iconColor }, idx) => (
          <CarouselItem
            key={idx}
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
