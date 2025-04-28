import Image from "next/image";
import join1 from "@/public/join/join1.webp";
import join2 from "@/public/join/join2.webp";
import join3 from "@/public/join/join3.webp";
import join4 from "@/public/join/join4.webp";
import join5 from "@/public/join/join5.webp";
import join6 from "@/public/join/join6.webp";
import join7 from "@/public/join/join7.webp";
import join8 from "@/public/join/join8.webp";
import join9 from "@/public/join/join9.webp";
import join10 from "@/public/join/join10.webp";
import join11 from "@/public/join/join11.webp";
import join12 from "@/public/join/join12.webp";
import join13 from "@/public/join/join13.webp";
import join14 from "@/public/join/join14.webp";

const Gallery = () => {
  return (
    <div className="mx-20 flex flex-col items-center">
      <p className="text-acm-gray-500 my-16 text-3xl font-bold">GALLERY</p>
      <div className="grid grid-cols-2 gap-8">
        <div className="grid gap-8">
          <Image
            className="col-span-2 row-span-4 grid h-full w-full rounded-3xl object-cover"
            src={join2}
            alt="Round1 Bowling Social"
          />
          <Image
            className="col-span-2 row-span-1 grid h-full w-full rounded-3xl object-cover"
            src={join4}
            alt="Round1 Bowling Social"
          />
        </div>
        <div className="grid gap-8">
          <Image
            className="h-full w-full rounded-3xl object-cover"
            src={join11}
            alt="Group photo at Round1 Bowling social"
          />
        </div>
        <div className="grid gap-8">
          <Image
            className="col-span-2 row-span-1 h-full w-full rounded-3xl object-cover"
            src={join1}
            alt="Group photo at Round1 Bowling social"
          />
          <Image
            className="col-span-2 h-full w-full rounded-3xl object-cover"
            src={join13}
            alt="Group photo at Round1 Bowling social"
          />
        </div>
        <div className="grid gap-8">
          <Image
            className="h-full w-full rounded-3xl object-cover"
            src={join6}
            alt="Group photo at Round1 Bowling social"
          />
          <Image
            className="h-full w-full rounded-3xl object-cover"
            src={join7}
            alt="Group photo at Round1 Bowling social"
          />
          <Image
            className="h-full w-full rounded-3xl object-cover"
            src={join8}
            alt="Group photo at Round1 Bowling social"
          />
          <Image
            className="h-full w-full rounded-3xl object-cover"
            src={join9}
            alt="Group photo at Round1 Bowling social"
          />
          <Image
            className="h-full w-full rounded-3xl object-cover"
            src={join10}
            alt="Group photo at Round1 Bowling social"
          />
          <Image
            className="h-full w-full rounded-3xl object-cover"
            src={join3}
            alt="Group photo at Round1 Bowling social"
          />
          <Image
            className="h-full w-full rounded-3xl object-cover"
            src={join12}
            alt="Group photo at Round1 Bowling social"
          />
          <Image
            className="h-full w-full rounded-3xl object-cover"
            src={join5}
            alt="Group photo at Round1 Bowling social"
          />
          <Image
            className="h-full w-full rounded-3xl object-cover"
            src={join14}
            alt="Group photo at Round1 Bowling social"
          />
        </div>
      </div>
      <button className="bg-acm-blue-700 my-10 rounded-xl px-10 py-1 text-2xl text-white">
        See More
      </button>
    </div>
  );
};

export default Gallery;
