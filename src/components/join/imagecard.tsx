import Image, { StaticImageData } from "next/image";

interface ImageCard {
  image: StaticImageData;
  alt: string;
  description: string;
}

const ImageCard = ({ image, alt, description }: ImageCard) => {
  return (
    <div className="group relative h-full p-2 text-acm-blue-500 sm:p-0">
      <Image
        src={image}
        alt={alt}
        className="h-full w-full rounded-3xl object-cover"
      />
      <div className="absolute bottom-0 z-10 flex h-1/3 w-full items-end rounded-3xl bg-blue-fade text-right font-bold opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div className="w-full p-4 text-white md:text-3xl">{description}</div>
      </div>
    </div>
  );
};

export default ImageCard;
