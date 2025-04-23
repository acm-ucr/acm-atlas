import Image from "next/image";
import ourvision1 from "@/public/about/ourvision1.webp";
import ourvision2 from "@/public/about/ourvision2.webp";
import ourvision3 from "@/public/about/ourvision3.webp";
import ourvision4 from "@/public/about/ourvision4.webp";

const OurVision = () => {
  return (
    <div className="mx-auto grid w-5/6 grid-cols-2 items-stretch gap-8 pt-[7vh]">
      <div className="grid h-full grid-cols-5 gap-4">
        <div className="col-span-2 grid h-full grid-rows-3 gap-4">
          <Image
            src={ourvision1}
            alt="ourvision1"
            className="h-full w-full rounded-3xl object-cover"
          />
          <Image
            src={ourvision3}
            alt="ourvision3"
            className="row-span-2 h-full w-full rounded-3xl object-cover"
          />
        </div>
        <div className="col-span-3 grid h-full grid-rows-2 gap-4">
          <Image
            src={ourvision2}
            alt="ourvision2"
            className="h-full w-full rounded-3xl object-cover"
          />
          <Image
            src={ourvision4}
            alt="ourvision4"
            className="h-full w-full rounded-3xl object-cover"
          />
        </div>
      </div>
      <div className="text-acm-gray-500 flex h-full flex-col items-center justify-center text-center">
        <p className="text-4xl font-bold">OUR VISION</p>
        <p className="mt-5 w-5/6 text-2xl leading-normal font-medium">
          Our Vision is simple: We want to improve our members professionally,
          technically, and personally. We want to help our members grow
          throughout their college career, whether they enter as a first-year
          university student or as a transfer student.
        </p>
      </div>
    </div>
  );
};

export default OurVision;
