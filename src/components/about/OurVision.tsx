import Image from "next/image";
const ourvision1 = "aboutUs/ourvision1.webp";
const ourvision2 = "aboutUs/ourvision2.webp";
const ourvision3 = "aboutUs/ourvision3.webp";
const ourvision4 = "aboutUs/ourvision4.webp";

const OurVision = () => {
  return (
    <div className="mx-auto grid w-5/6 grid-cols-2">
      <div className="grid w-auto grid-cols-5">
        <div className="col-span-2 ml-16 grid grid-rows-3 gap-y-6">
          <div className="mt-4 w-auto">
            <Image
              src={ourvision1}
              alt="Image 1"
              width={184}
              height={500}
              className="rounded-3xl"
            />
          </div>
          <div className="row-span-2 -mt-2 w-auto">
            <Image
              src={ourvision3}
              alt="Image 3"
              width={184}
              height={500}
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="col-span-3 m-4 grid grid-rows-2 gap-9">
          <div className="w-auto">
            <Image
              src={ourvision2}
              alt="Image 2"
              width={220}
              height={500}
              className="rounded-3xl"
            />
          </div>
          <div className="mt-[-39] w-auto">
            <Image
              src={ourvision4}
              alt="Image 4"
              width={220}
              height={500}
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div className="text-acm-gray-500 mt-8 flex flex-col items-center text-center">
        <p className="w-auto text-4xl font-bold">OUR VISION</p>
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
