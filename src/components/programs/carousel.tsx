"use client";
import CarouselItem from "./carouselitem";
import { StaticImageData } from "next/image";
import { motion } from "motion/react";

interface CarouselDataItem {
  name: string;
  icon: StaticImageData;
  borderColor: string;
}

interface CarouselProps {
  data: CarouselDataItem[];
}

const CarouselAnimation = (index: number, length: number) => ({
  initial: { x: 0 },
  animate: { x: "-120%" },
  transition: {
    duration: 20,
    ease: "linear",
    repeat: Infinity,
    delay: (20 / length) * (length - index + 1) * -1,
  },
});

const Carousel = ({ data }: CarouselProps) => {
  const length = data.length;

  return (
    <div className="left-[100%] mt-10 h-28 w-full overflow-hidden md:my-10">
      <div className="w-[1300px] xl:w-full">
        {data.map(({ name, icon, borderColor }, index) => {
          const animation = CarouselAnimation(index, length);
          return (
            <motion.div
              key={index}
              initial={animation.initial}
              animate={animation.animate}
              transition={animation.transition}
            >
              <CarouselItem name={name} icon={icon} borderColor={borderColor} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
