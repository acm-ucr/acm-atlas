import CarouselImage from "@/components/hacks/carouselImage";
import roseHackImages from "@/data/hacks/rosehackimages";

const CarouselImages = () => {
  return (
    <div className="relative hidden overflow-hidden py-[6vh] md:flex">
      <div className="flex w-screen animate-marquee justify-between gap-x-12 px-[1vw]">
        {roseHackImages.map(({ image, alt }, index) => (
          <CarouselImage key={index} image={image} alt={alt} />
        ))}
      </div>
      <div className="absolute flex w-screen animate-marquee-continuation justify-between gap-x-12 px-[2vw]">
        {roseHackImages.map(({ image, alt }, index) => (
          <CarouselImage key={index} image={image} alt={alt} />
        ))}
      </div>
    </div>
  );
};

export default CarouselImages;
