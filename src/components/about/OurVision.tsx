import Image from "next/image";
const placeholder = "stanley.webp";

const OurVision = () => {
  return (
    <div className="grid grid-cols-2 items-center gap-4">
      <div className="grid grid-cols-2 gap-x-2 gap-y-4">
        <div className="relative aspect-[3/2] w-2/3 overflow-hidden rounded-xl">
          <Image src={placeholder} alt="Placeholder Image 1" fill />
        </div>
        <div className="relative aspect-[4/3] w-4/5 overflow-hidden rounded-xl">
          <Image src={placeholder} alt="Placeholder Image 2" fill />
        </div>
        <div className="relative aspect-[1/1] w-2/3 overflow-hidden rounded-xl">
          <Image src={placeholder} alt="Placeholder Image 3" fill />
        </div>
        <div className="relative aspect-[16/9] w-4/5 overflow-hidden rounded-xl">
          <Image src={placeholder} alt="Placeholder Image 4" fill />
        </div>
      </div>
      <div className="text-acm-gray-500 flex flex-col items-center text-center">
        <h1 className="w-1/2 text-3xl font-bold">OUR VISION</h1>
        <p className="mt-12 w-2/3 text-2xl font-medium">
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
