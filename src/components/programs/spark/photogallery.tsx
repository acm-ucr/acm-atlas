import Image from "next/image";
import Image1 from "@/public/sparkpage/photogallery/image1.webp";
import Image2 from "@/public/sparkpage/photogallery/image2.webp";
import Image3 from "@/public/sparkpage/photogallery/image3.webp";
import Image4 from "@/public/sparkpage/photogallery/image4.webp";
import Image5 from "@/public/sparkpage/photogallery/image5.webp";
import Link from "next/link";
import { motion } from "motion/react";

const ButtonAnimation = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  whileHover: { scale: 1.03, opacity: 0.8 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const PhotoGallery = () => {
  return (
    <div className="mx-auto flex w-4/5 flex-col items-center px-4 py-8">
      <p className="mb-[6vh] text-center text-5xl font-bold text-acm-gray-500">
        PHOTO GALLERY
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="grid grid-cols-10 grid-rows-2 gap-8 md:h-[60vh]">
          <Image
            src={Image1}
            alt="Top-left shot"
            className="col-span-10 h-full w-full rounded-3xl object-cover"
          />
          <Image
            src={Image3}
            alt="Bottom-left small 1"
            className="col-span-10 h-full w-full rounded-3xl object-cover md:col-span-4"
          />
          <Image
            src={Image4}
            alt="Bottom-left small 2"
            className="col-span-10 h-full w-full rounded-3xl object-cover md:col-span-6"
          />
        </div>
        <div className="grid grid-rows-10 gap-8 md:h-[60vh]">
          <Image
            src={Image2}
            alt="Top-right shot"
            className="row-span-10 h-full w-full rounded-3xl object-cover md:row-span-6"
          />
          <Image
            src={Image5}
            alt="Bottom-right shot"
            className="row-span-10 h-full w-full rounded-3xl object-cover md:row-span-4"
          />
        </div>
      </div>
      <motion.div {...ButtonAnimation}>
        <Link
          href="/sparkphotos"
          className="hover:opacity-8 mt-12 flex w-fit items-center justify-center rounded-3xl bg-acm-yellow-200 px-16 py-4 text-3xl text-black hover:scale-105 md:text-5xl"
        >
          See More
        </Link>
      </motion.div>
    </div>
  );
};

export default PhotoGallery;
