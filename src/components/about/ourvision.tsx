import Image from "next/image";
import ourvision1 from "@/public/about/ourvision1.webp";
import ourvision2 from "@/public/about/ourvision2.webp";
import ourvision3 from "@/public/about/ourvision3.webp";
import ourvision4 from "@/public/about/ourvision4.webp";

const OurVision = () => {
  return (
    <div className="mx-auto grid w-5/6 grid-cols-2 items-stretch gap-8 pt-[3vh]">
      <div className="image-grid grid h-[600px] w-full gap-4 overflow-hidden transition-all">
        <div className="pic1">
          <Image
            src={ourvision1}
            alt="ourvision1"
            className="h-full max-h-[600px] w-full overflow-hidden rounded-3xl object-cover"
          />
        </div>
        <div className="pic2">
          <Image
            src={ourvision3}
            alt="ourvision3"
            className="h-full max-h-[600px] w-full overflow-hidden rounded-3xl object-cover"
          />
        </div>
        <div className="pic3">
          <Image
            src={ourvision2}
            alt="ourvision2"
            className="h-full max-h-[600px] w-full overflow-hidden rounded-3xl object-cover"
          />
        </div>
        <div className="pic4">
          <Image
            src={ourvision4}
            alt="ourvision4"
            className="h-full max-h-[600px] w-full overflow-hidden rounded-3xl object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center text-acm-gray-500">
        <p className="text-4xl font-bold">OUR VISION</p>
        <p className="mt-5 w-5/6 text-2xl font-medium leading-normal">
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
