import Image from "next/image";
import ourvision1 from "@/public/about/ourvision1.webp";
import ourvision2 from "@/public/about/ourvision2.webp";
import ourvision3 from "@/public/about/ourvision3.webp";
import ourvision4 from "@/public/about/ourvision4.webp";

const OurVision = () => {
  return (
    <div className="mx-auto grid w-5/6 grid-cols-1 items-stretch gap-8 pt-[3vh] md:grid-cols-2">
      <div className="image-grid order-2 grid h-[600px] w-full gap-4 overflow-hidden transition-all">
        <Image
          src={ourvision1}
          alt="ourvision1"
          className="pic1 h-full w-full rounded-3xl object-cover"
        />
        <Image
          src={ourvision3}
          alt="ourvision3"
          className="pic2 h-full w-full rounded-3xl object-cover"
        />
        <Image
          src={ourvision2}
          alt="ourvision2"
          className="pic3 h-full w-full rounded-3xl object-cover"
        />
        <Image
          src={ourvision4}
          alt="ourvision4"
          className="pic4 h-full w-full rounded-3xl object-cover"
        />
      </div>
      <div className="order-1 flex flex-col items-center justify-center text-center text-acm-gray-500">
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
