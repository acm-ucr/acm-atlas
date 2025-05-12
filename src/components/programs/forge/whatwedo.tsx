import Image from "next/image";
import Image1 from "@/public/forge/Image1.webp";
import Image2 from "@/public/forge/Image2.webp";
import Image3 from "@/public/forge/Image3.webp";
import Image4 from "@/public/forge/Image4.webp";

const WhatWeDo = () => {
  return (
    <div className="relative flex justify-center pt-10">
      <div className="absolute left-[10%] top-[7%] z-[-1] h-[500px] w-[500px] rounded-full bg-acm-gray-300 opacity-80 blur-3xl" />
      <div className="absolute right-[14%] top-[25%] z-[-1] h-[500px] w-[500px] rounded-full bg-acm-gray-300 opacity-80 blur-3xl" />
      <div className="grid w-3/5 grid-cols-2 grid-rows-4 gap-16 text-3xl font-medium text-acm-gray-500">
        <Image
          className="flex flex-row-reverse rounded-md"
          src={Image1}
          alt="Image of forge members working together"
        />
        <div className="flex flex-col justify-center">
          <p className="pb-5 text-5xl font-bold">WHAT WE DO</p>
          <p>
            Participants will work closely with their peers and leads, engaging
            with other sub-teams to improve teamwork and promote collaboration
            across engineering disciplines.
          </p>
        </div>
        <p className="flex items-center text-right">
          Each week, tasks will be assigned alongside lecture sessions that
          provide technical guidance and resources. A second weekly meeting
          focuses on integration, where sub-teams come together to test, refine,
          and combine their contributions into a cohesive system.
        </p>
        <Image src={Image2} alt="Image of forge members working together" />
        <Image
          className="flex flex-row-reverse"
          src={Image3}
          alt="Image of forge members working together"
        />
        <p className="flex items-center">
          These sessions ensure that software, electronics, and mechanical
          components integrate seamlessly, offering insight into the workflow of
          real-world engineering projects.
        </p>
        <p className="flex items-center text-right">
          By the end of the program, participants will have engineered a
          complete robotics product, gaining practical experience in
          interdisciplinary teamwork and problem-solving.
        </p>
        <Image src={Image4} alt="Image of forge members working together" />
      </div>
    </div>
  );
};

export default WhatWeDo;
