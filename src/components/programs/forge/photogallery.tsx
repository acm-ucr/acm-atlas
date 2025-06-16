"use client";
import Image from "next/image";
import Image1 from "@/public/forgepage/photogallery/image1.webp";
import Image2 from "@/public/forgepage/photogallery/image2.webp";
import Image3 from "@/public/forgepage/photogallery/image3.webp";
import Image4 from "@/public/forgepage/photogallery/image4.webp";
import Image5 from "@/public/forgepage/photogallery/image5.webp";
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
      <p className="my-[6vh] text-center text-5xl font-bold text-acm-gray-500">
        PHOTO GALLERY
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="grid grid-cols-10 grid-rows-2 gap-8 md:h-[60vh]">
          <Image
            src={Image2}
            alt="Building 1"
            className="col-span-10 h-full w-full rounded-3xl object-cover"
          />
          <Image
            src={Image1}
            alt="Building 2"
            className="col-span-10 h-full w-full rounded-3xl object-cover md:col-span-4"
          />
          <Image
            src={Image3}
            alt="Drones"
            className="col-span-10 h-full w-full rounded-3xl object-cover md:col-span-6"
          />
        </div>
        <div className="grid grid-rows-10 gap-8 md:h-[60vh]">
          <Image
            src={Image5}
            alt="Modeling"
            className="row-span-6 h-full w-full rounded-3xl object-cover"
          />

          <Image
            src={Image4}
            alt="Wizard Chess"
            className="row-span-4 h-full w-full rounded-3xl object-cover"
          />
        </div>
      </div>
      <motion.div {...ButtonAnimation}>
        <Link
          href="/forgephotos"
          className="mt-12 flex items-center justify-center rounded-3xl bg-acm-gray-200 px-16 py-4 text-3xl text-white hover:scale-105 hover:opacity-80 md:text-5xl"
        >
          See More
        </Link>
      </motion.div>
    </div>
  );
};

export default PhotoGallery;
