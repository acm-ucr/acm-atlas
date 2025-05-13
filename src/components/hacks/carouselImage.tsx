import { StaticImageData } from "next/image";
import Image from "next/image";

interface CarouselItem {
  image: StaticImageData;
  alt: string;
}

const CarouselImage = ({ image, alt }: CarouselItem) => {
  return (
    <div className="rounded-2xl">
      <Image src={image} alt={alt} />
    </div>
  );
};

export default CarouselImage;
