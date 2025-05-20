import Image from "next/image";
import { StaticImageData } from "next/image";

interface CarouselImageItem {
  image: StaticImageData;
  alt: string;
}

interface CarouselImageProps {
  images: CarouselImageItem[];
}

const CarouselImages = ({ images }: CarouselImageProps) => {
  return (
    <div className="relative hidden w-full overflow-hidden py-[6vh] md:flex">
      <div className="flex animate-marquee gap-x-12 px-[2vw]">
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
      <div className="absolute -ml-6 flex animate-marquee-continuation justify-between gap-x-12 px-[2vw]">
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
