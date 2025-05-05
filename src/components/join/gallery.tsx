import Image from "next/image";
import join1 from "@/public/join/join1.webp";
import join2 from "@/public/join/join2.webp";
import join3 from "@/public/join/join3.webp";
import join4 from "@/public/join/join4.webp";
import join9 from "@/public/join/join9.webp";
import join10 from "@/public/join/join10.webp";
import join11 from "@/public/join/join11.webp";
import join15 from "@/public/join/join15.webp";
import join16 from "@/public/join/join16.webp";
import Link from "next/link";

const Gallery = () => {
  return (
    <div className="mx-auto flex w-3/4 flex-col items-center">
      <p className="mb-8 text-4xl font-bold text-acm-gray-500">GALLERY</p>
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-2 grid grid-rows-2 gap-8">
          <Image
            className="grid h-full w-full rounded-3xl object-cover"
            src={join2}
            alt="Beach"
          />
          <Image
            className="grid h-full w-full rounded-3xl object-cover"
            src={join4}
            alt="Round1Group"
          />
        </div>
        <Image
          className="col-span-3 h-full w-full rounded-3xl object-cover"
          src={join11}
          alt="ClawMachines"
        />
      </div>
      <div className="mt-8 grid grid-cols-5 gap-8">
        <Image
          className="col-span-3 row-span-1 h-full w-full rounded-3xl object-cover"
          src={join15}
          alt="Ice Skating"
        />
        <div className="col-span-2 grid grid-rows-2 gap-8">
          <Image
            className="h-full w-full rounded-3xl object-cover"
            src={join16}
            alt="Ice Skating"
          />
          <Image
            className="h-full w-full rounded-3xl object-cover"
            src={join1}
            alt="Beach"
          />
        </div>
      </div>
      <div className="mt-8 grid grid-cols-5 gap-8">
        <div className="col-span-2 grid grid-rows-2 gap-8">
          <Image
            className="grid h-full w-full rounded-3xl object-cover"
            src={join9}
            alt="Round1 Bowling Social"
          />
          <Image
            className="grid h-full w-full rounded-3xl object-cover"
            src={join10}
            alt="Round1 Bowling Social"
          />
        </div>
        <Image
          className="col-span-3 h-full w-full rounded-3xl object-cover"
          src={join3}
          alt="Group photo at Round1 Bowling social"
        />
      </div>
      <Link
        href="/"
        className="my-8 rounded-2xl bg-acm-blue-700 px-12 py-3 text-3xl font-medium text-white"
      >
        See More
      </Link>
    </div>
  );
};

export default Gallery;
