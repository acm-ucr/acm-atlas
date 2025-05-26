import Image from "next/image";
import Image1 from "@/public/forgepage/image1.webp";
import Image2 from "@/public/forgepage/image2.webp";
import Image3 from "@/public/forgepage/image3.webp";
import Image4 from "@/public/forgepage/image4.webp";

const WhatWeDo = () => {
  return (
    <div className="relative flex justify-center pt-10">
      <div className="absolute left-0 top-[5%] z-[-1] h-[400px] w-[400px] rounded-full bg-acm-gray-300 opacity-80 blur-3xl" />
      <div className="absolute right-0 top-[30%] z-[-1] h-[400px] w-[400px] rounded-full bg-acm-gray-300 opacity-80 blur-3xl" />
      <div className="grid grid-cols-1 gap-16 px-[10%] text-xl font-medium text-acm-gray-500 md:grid-cols-2 md:text-3xl lg:px-[5%]">
        <Image src={Image1} alt="Image1" className="order-2 md:order-1" />
        <div className="order-1 flex flex-col justify-center text-center md:order-2 md:text-left">
          <p className="pb-5 text-3xl font-bold md:text-5xl">WHAT WE DO</p>
          <p>
            Participants will work closely with their peers and leads, engaging
            with other sub-teams to improve teamwork and promote collaboration
            across engineering disciplines.
          </p>
        </div>
        <p className="order-3 flex items-center text-center md:text-right">
          Each week, tasks will be assigned alongside lecture sessions that
          provide technical guidance and resources. A second weekly meeting
          focuses on integration, where sub-teams come together to test, refine,
          and combine their contributions into a cohesive system.
        </p>
        <Image src={Image2} alt="Image2" className="order-4" />
        <Image src={Image3} alt="Image3" className="order-6 md:order-5" />
        <p className="order-5 flex items-center text-center md:order-6 md:text-left">
          These sessions ensure that software, electronics, and mechanical
          components integrate seamlessly, offering insight into the workflow of
          real-world engineering projects.
        </p>
        <p className="order-7 flex items-center text-center md:text-right">
          By the end of the program, participants will have engineered a
          complete robotics product, gaining practical experience in
          interdisciplinary teamwork and problem-solving.
        </p>
        <Image src={Image4} alt="Image4" className="order-8" />
      </div>
    </div>
  );
};

export default WhatWeDo;
