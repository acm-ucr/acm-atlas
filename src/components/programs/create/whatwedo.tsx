import Image from "next/image";
import WhatWeDo1 from "@/public/createpage/whatwedo1.webp";
import WhatWeDo2 from "@/public/createpage/whatwedo2.webp";

const WhatWeDo = () => {
  return (
    <div className="relative my-16 grid grid-cols-1 place-items-center gap-16 overflow-x-clip px-[10%] md:grid-cols-2">
      <div className="absolute right-[90%] top-0 z-0 h-[500px] w-[600px] rounded-full bg-acm-blue-200/70 blur-3xl" />

      <Image
        src={WhatWeDo1}
        alt="What We Do 1"
        className="z-20 order-2 rounded-3xl md:order-1"
      />
      <div className="z-10 order-1 flex flex-col justify-start text-center text-xl text-acm-gray-500 md:order-2 md:text-left md:text-3xl">
        <p className="pb-2 text-3xl font-bold md:text-5xl">WHAT WE DO</p>
        <p className="font-medium">
          Participants attend weekly design meetings and collaborate closely
          with leads and club ambassadors to create a wireframe — from color
          palette to all pages — complete with information and details.
        </p>
      </div>

      <p className="z-10 order-3 text-center text-xl font-medium text-acm-gray-500 md:text-right md:text-3xl">
        We also host biweekly workshops on UI/UX principles and Figma
        proficiency, and we are open to anyone interested in learning more about
        design. By the end of the program, the website design will be finalized
        and ready for implementation by Spark in the following quarter.
      </p>
      <Image
        src={WhatWeDo2}
        alt="What We Do 2"
        className="z-10 order-4 rounded-3xl"
      />

      <div className="absolute bottom-0 left-[82%] z-0 h-[500px] w-[300px] rounded-full bg-acm-blue-200/70 blur-3xl" />
    </div>
  );
};

export default WhatWeDo;
