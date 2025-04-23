import Image from "next/image";
const ourvision1 = "AboutUs/our_vision1.webp";
const ourvision2 = "AboutUs/our_vision2.webp";
const ourvision3 = "AboutUs/our_vision3.webp";
const ourvision4 = "AboutUs/our_vision4.webp";

const OurVision = () => {
  return (
    <div className="mx-auto grid w-3/4 grid-cols-2">
      <div className="grid w-auto grid-cols-5 gap-x-4">
        <div className="col-span-2 grid grid-rows-3 gap-y-6">
          <div className="relative mt-4 aspect-[1/1] w-auto overflow-hidden rounded-4xl">
            <Image
              src={ourvision1}
              alt="Image 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative row-span-2 h-[52.5%] w-auto overflow-hidden rounded-4xl">
            <Image
              src={ourvision3}
              alt="Image 3"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="col-span-3 m-4 grid grid-rows-2 gap-4">
          <div className="relative aspect-[1/1] w-auto overflow-hidden rounded-4xl">
            <Image
              src={ourvision2}
              alt="Image 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative mt-[-48] aspect-[15/9] w-auto overflow-hidden rounded-4xl">
            <Image
              src={ourvision4}
              alt="Image 4"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="text-acm-gray-500 mt-24 flex flex-col items-center text-center">
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
