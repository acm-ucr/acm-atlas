import Image from "next/image";
import left from "@/public/spark/left.webp";
import right from "@/public/spark/right.webp";
const WhatWeDo = () => {
  return (
    <div className="relative my-16 grid grid-cols-1 place-items-center gap-16 overflow-x-clip px-[10%] md:grid-cols-2">
      <Image
        src={left}
        alt="left"
        className="z-20 order-2 flex justify-end md:order-1"
      />
      <div className="z-10 order-1 flex flex-col justify-start text-center text-xl text-acm-gray-500 md:order-2 md:text-left md:text-3xl">
        <p className="pb-2 text-3xl font-bold md:text-5xl"> WHAT WE DO</p>
        <p>
          Participants attend weekly stand-up meetings and work on assigned
          issues throughout the week. Issues will begin with developing the
          website's overall structure, responsiveness, and end with animations.
        </p>
      </div>
      <p className="z-10 order-3 text-center text-xl text-acm-gray-500 md:text-right md:text-3xl">
        Weekly meetings are held covering all related tech-stack curriculum from
        TailwindCSS styling to motion.dev animations. By the end of the program,
        a fully functional website is developed by the team.
      </p>
      <Image src={right} alt="right" className="z-10 order-4" />
      <div className="absolute right-[90%] top-0 z-0 h-[500px] w-[600px] rounded-full bg-acm-yellow-500/40 blur-3xl" />
      <div className="absolute bottom-0 left-[82%] z-0 h-[500px] w-[300px] rounded-full bg-acm-yellow-500/40 blur-3xl" />
    </div>
  );
};

export default WhatWeDo;
