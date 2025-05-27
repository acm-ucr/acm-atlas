import join1 from "@/public/joinpage/join1.webp";
import join2 from "@/public/joinpage/join2.webp";
import join3 from "@/public/joinpage/join3.webp";
import join4 from "@/public/joinpage/join4.webp";
import join9 from "@/public/joinpage/join9.webp";
import join10 from "@/public/joinpage/join10.webp";
import join11 from "@/public/joinpage/join11.webp";
import join15 from "@/public/joinpage/join15.webp";
import join16 from "@/public/joinpage/join16.webp";
import Link from "next/link";
import ImageCard from "./imagecard";
const Gallery = () => {
  return (
    <div className="mx-auto flex w-11/12 flex-col items-center md:w-3/4">
      <p className="mb-8 text-4xl font-bold text-acm-gray-500">GALLERY</p>
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-5 grid grid-rows-2 gap-8 md:col-span-2">
          <ImageCard
            image={join2}
            description="Frisbee @ Newport Beach"
            alt="Frisbee @ Newport Beach"
          />
          <ImageCard
            image={join4}
            description="Round 1 Social"
            alt="Round 1 Social"
          />
        </div>
        <div className="col-span-5 md:col-span-3">
          <ImageCard
            image={join11}
            description="Claw Machines @ Round 1"
            alt="Claw Machines @ Round 1"
          />
        </div>
      </div>
      <div className="mt-8 grid grid-cols-5 gap-8">
        <div className="col-span-5 row-span-1 md:col-span-3">
          <ImageCard
            image={join15}
            description="Ice Skating @ LA Kings Icetown"
            alt="Ice Skating @ LA Kings Icetown"
          />
        </div>
        <div className="col-span-5 grid grid-rows-2 gap-8 md:col-span-2">
          <ImageCard
            image={join16}
            description="Ice Skating Group Photo"
            alt="Ice Skating Group Photo"
          />
          <ImageCard
            image={join1}
            description="Newport Beach Social"
            alt="Newport Beach Social"
          />
        </div>
      </div>
      <div className="mt-8 grid grid-cols-5 gap-8">
        <div className="col-span-5 grid grid-rows-2 gap-8 md:col-span-2">
          <ImageCard
            image={join9}
            description="Frisbee @ Newport Beach"
            alt="Frisbee @ Newport Beach"
          />
          <ImageCard
            image={join10}
            description="Ice Skating Social"
            alt="Ice Skating Social"
          />
        </div>
        <div className="col-span-5 md:col-span-3">
          <ImageCard
            image={join3}
            description="Round 1 Social"
            alt="Round 1 Social"
          />
        </div>
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
