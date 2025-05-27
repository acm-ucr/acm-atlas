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
  pad: string;
  padmd: string;
  pad2xl: string;
}

const CarouselAnimation = {
  style: { width: "max-content" },
  transition: { duration: 20, ease: "linear", repeat: Infinity },
  animate: { x: ["0%", "-50%"] },
};

const Carousel = ({ data }: CarouselProps) => {
  const items = [...data, ...data];

  return (
    <div className="relative mb-10 overflow-hidden">
      <motion.div
        className="flex items-center gap-8"
        style={CarouselAnimation.style}
        animate={CarouselAnimation.animate}
        transition={CarouselAnimation.transition}
      >
        {items.map(({ name, icon, borderColor }, index) => (
          <CarouselItem
            key={index}
            name={name}
            icon={icon}
            borderColor={borderColor}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
