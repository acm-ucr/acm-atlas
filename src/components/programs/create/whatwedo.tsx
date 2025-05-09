import Image from "next/image";
import WhatWeDo1 from "@/public/create/whatwedo1.webp";
import WhatWeDo2 from "@/public/create/whatwedo2.webp";

const WhatWeDo = () => {
  return (
    <div className="mx-auto flex flex-col pb-[20vh] pt-[15vh]">
      <div className="z-1 absolute h-full w-full opacity-70 blur-3xl">
        <div className="absolute right-[80%] top-[10%] h-[500px] w-[500px] rounded-full bg-acm-blue-800" />
        <div className="absolute right-[-15%] top-[60%] h-[500px] w-[500px] rounded-full bg-acm-blue-800" />
      </div>
      <div className="z-10 mx-auto grid w-5/6 grid-cols-2 grid-rows-2 items-stretch gap-x-14 gap-y-16">
        <div className="flex items-center justify-center">
          <Image
            src={WhatWeDo1}
            alt="WhatWeDo1"
            className="h-full w-full rounded-3xl object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-left text-acm-gray-500">
          <p className="text-4xl font-bold">WHAT WE DO</p>
          <p className="mt-5 w-9/12 text-2xl font-medium leading-normal">
            Participants attend weekly design meetings and collaborate closely
            with leads and club ambassadors to create a wireframe, from color
            palette to all pages, complete with information and details.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-right text-acm-gray-500">
          <p className="mt-5 w-5/6 text-2xl font-medium leading-normal">
            We also host biweekly workshops on UI/UX principles and Figma
            proficiency, and we are open to anyone interested in learning more
            about design. By the end of the program, the website design will be
            finalized and ready for implementation by Spark in the following
            quarter.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={WhatWeDo2}
            alt="WhatWeDo2"
            className="h-full w-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
