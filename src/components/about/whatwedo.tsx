import Image from "next/image";
import stanley from "@/public/stanley.webp";
import Spark from "@/public/logos/spark.svg";
import Create from "@/public/logos/create.svg";
import Forge from "@/public/logos/forge.svg";
import DAS from "@/public/logos/das.svg";
import BitByte from "@/public/logos/bitbyte.svg";

const WhatWeDo = () => {
  return (
    <div className="mx-auto grid w-5/6 grid-cols-2 items-stretch gap-8 pt-[10vh]">
      <div className="text-acm-gray-500 flex flex-col items-center justify-center text-center">
        <p className="text-4xl font-bold">WHAT WE DO</p>
        <p className="mt-5 w-5/6 text-2xl leading-normal font-medium">
          Every quarter, we focus on improving specific aspects of our members.
          In the Fall, we develop professional resumes, build all-star
          LinkedIns, and offer workshops on Applying Effectively at companies
          from the Big 4 to startups.
        </p>
        <div className="mt-6 flex justify-center gap-8">
          <Image src={Spark} alt="Spark" className="w-[5vw]" />
          <Image src={Forge} alt="Forge" className="w-[5vw]" />
          <Image src={Create} alt="Create" className="w-[5vw]" />
          <Image src={DAS} alt="DAS" className="w-[5vw]" />
          <Image src={BitByte} alt="BitByte" className="w-[5vw]" />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-2 grid h-full grid-rows-3 gap-4">
          <div className="h-[100px]">
            <Image
              src={stanley}
              alt="stanley1"
              className="h-full w-full rounded-3xl object-cover"
            />
          </div>
          <div className="row-span-2 h-[220px]">
            <Image
              src={stanley}
              alt="stanley2"
              className="h-full w-full rounded-3xl object-cover"
            />
          </div>
        </div>
        <div className="col-span-3 grid h-full grid-rows-2 gap-4">
          <div className="h-[160px]">
            <Image
              src={stanley}
              alt="stanley3"
              className="h-full w-full rounded-3xl object-cover"
            />
          </div>
          <div className="h-[160px]">
            <Image
              src={stanley}
              alt="stanley4"
              className="h-full w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
