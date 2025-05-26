import Image from "next/image";
import Das1 from "@/public/daspage/das2.webp";

const WhatWeDo = () => {
  return (
    <div className="relative grid grid-cols-1 items-center overflow-x-clip px-[10%] pt-16 md:grid-cols-2">
      <Image
        src={Das1}
        alt="Join Now"
        className="order-2 rounded-2xl md:order-1 md:w-10/12"
      />
      <div className="z-10 order-1 flex flex-col pb-8 text-center md:pb-0 md:text-left">
        <p className="pb-6 text-4xl font-semibold text-acm-gray-500">
          WHAT WE DO
        </p>
        <p className="order-1 flex justify-center text-2xl font-medium text-acm-gray-500">
          DAS aims to analyze, experiment, and explore data across various of
          fronts and domains! Our goal is to expose you to skills working with
          big data ranging from statistical hypothesis testing to designing
          machine learning models!
        </p>
      </div>
      <div className="z-3 absolute left-[84%] top-[25%] h-[400px] w-[400px] rounded-full bg-[#E8D2FF] opacity-75 blur-3xl" />
    </div>
  );
};

export default WhatWeDo;
