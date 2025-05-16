import Image from "next/image";
import Das1 from "@/public/das/DAS_1.webp";

const GridContent = () => {
  return (
    <div className="mx-auto grid w-10/12 grid-cols-12 items-center pt-16">
      <Image
        src={Das1}
        alt="Join Now"
        className="col-span-7 w-10/12 rounded-2xl"
      />
      <div className="col-span-5 flex flex-col">
        <p className="pb-6 text-5xl font-semibold text-acm-gray-500">
          WHAT WE DO
        </p>
        <p className="flex w-9/12 justify-center text-3xl font-medium text-acm-gray-500">
          DAS aims to analyze, experiment, and explore data across various of
          fronts and domains! Our goal is to expose you to skills working with
          big data ranging from statistical hypothesis testing to designing
          machine learning models!
        </p>
      </div>
      <div className="z-4 absolute left-[84%] top-[125%] h-[400px] w-[400px] rounded-full bg-[#E8D2FF] opacity-75 blur-3xl" />
    </div>
  );
};

export default GridContent;
