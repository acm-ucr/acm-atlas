import Image from "next/image";
import Image1 from "@/public/forgepage/photogallery/image1.webp";
import Image2 from "@/public/forgepage/photogallery/image2.webp";
import Image3 from "@/public/forgepage/photogallery/image3.webp";
import Image4 from "@/public/forgepage/photogallery/image4.webp";
import Image5 from "@/public/forgepage/photogallery/image5.webp";
import Link from "next/link";

const PhotoGallery = () => {
  return (
    <div className="flex flex-col mx-auto w-4/5 px-4 py-8 items-center">
      <p className="my-[6vh] text-center text-5xl font-bold text-acm-gray-500">
        PHOTO GALLERY
      </p>
      <div className="grid grid-cols-2 gap-8">
        <div className="grid h-[60vh] grid-cols-10 grid-rows-2 gap-8">
          <Image
            src={Image2}
            alt="Top-left shot"
            className="col-span-10 h-full w-full rounded-3xl object-cover"
          />
          <Image
            src={Image1}
            alt="Bottom-left small 1"
            className="col-span-4 h-full w-full rounded-3xl object-cover"
          />
          <Image
            src={Image3}
            alt="Bottom-left small 2"
            className="col-span-6 h-full w-full rounded-3xl object-cover"
          />
        </div>
        <div className="grid h-[60vh] grid-rows-10 gap-8">
          <Image
            src={Image5}
            alt="Top-right shot"
            className="row-span-6 h-full w-full rounded-3xl object-cover"
          />

          <Image
            src={Image4}
            alt="Bottom-right shot"
            className="row-span-4 h-full w-full rounded-3xl object-cover"
          />
        </div>
      </div>
      <Link href="/forgephotos" className="my-[6vh] flex justify-center items-center text-5xl w-80 h-20 rounded-3xl bg-acm-yellow-200">See More</Link>
    </div>
  );
};

export default PhotoGallery;
