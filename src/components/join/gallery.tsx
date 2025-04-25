import Image from "next/image";
import arcades from "@/public/join/gallery/arcades.webp";
import claw from "@/public/join/gallery/claw.webp";
import group from "@/public/join/gallery/group.webp";

const Gallery = () => {
  return (
    <div className="flex w-screen flex-col items-center">
      <p className="text-acm-gray-500 my-16 text-3xl font-bold">GALLERY</p>
      <div className="grid grid-cols-5 gap-8">
        <div className="grid gap-8">
          <Image
            className="h-full w-full rounded-3xl object-cover"
            src={arcades}
            alt="Round1 Bowling Social"
          />
          <Image
            className="h-full w-full rounded-3xl object-cover"
            src={claw}
            alt="Round1 Bowling Social"
          />
        </div>
        <Image
          className="h-full w-full rounded-3xl object-cover"
          src={group}
          alt="Group photo at Round1 Bowling social"
        />
        <div className="grid gap-8">
          <div className="bg-acm-blue-600 h-40 w-40 rounded-3xl object-cover"></div>
          <div className="bg-acm-blue-600 h-40 w-40 rounded-3xl object-cover"></div>
        </div>
        <div className="grid gap-8">
          <div className="bg-acm-blue-600 h-40 w-40 rounded-3xl object-cover"></div>
          <div className="bg-acm-blue-600 h-40 w-40 rounded-3xl object-cover"></div>
          <div className="bg-acm-blue-600 h-40 w-40 rounded-3xl object-cover"></div>
          <div className="bg-acm-blue-600 h-40 w-40 rounded-3xl object-cover"></div>
        </div>
      </div>
      <button className="my-10 bg-acm-blue-700 rounded-xl px-10 py-1 text-2xl text-white">
        See More
      </button>
    </div>
  );
};

export default Gallery;
