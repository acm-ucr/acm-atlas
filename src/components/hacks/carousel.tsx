"use client";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useRef, useState, useEffect } from "react";

interface CarouselImageItem {
  image: StaticImageData;
  alt: string;
}

interface CarouselImageProps {
  images: CarouselImageItem[];
}

const CarouselImages = ({ images }: CarouselImageProps) => {
  const marqueeReference = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState("20s");

  useEffect(() => {
    if (marqueeReference.current) {
      const caoruselLength = marqueeReference.current.scrollWidth;
      const speed = 0.012;
      setDuration(`${caoruselLength * speed}s`);
    }
  }, []);

  return (
    <div className="relative hidden w-full overflow-hidden py-[6vh] md:flex">
      <div
        className="flex animate-marquee gap-x-12 px-[2vw]"
        style={{ animationDuration: duration }}
        ref={marqueeReference}
      >
        {images?.map(({ image, alt }, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={alt}
              className="min-h-[20vh] min-w-[20vw] rounded-2xl"
            />
          </div>
        ))}
      </div>
      <div
        className="absolute flex animate-marquee-continuation justify-between gap-x-12 px-[2vw]"
        style={{ animationDuration: duration }}
      >
        {images?.map(({ image, alt }, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={alt}
              className="min-h-[20vh] min-w-[20vw] rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselImages;
