import Image from "next/image";
import Spark from "@/public/logos/spark.svg";
import Create from "@/public/logos/create.svg";
import Forge from "@/public/logos/forge.svg";
import DAS from "@/public/logos/das.svg";
import BitByte from "@/public/logos/bitbyte.svg";
import WhatWeDo1 from "@/public/about/whatwedo1.webp";
import WhatWeDo2 from "@/public/about/whatwedo2.webp";
import WhatWeDo3 from "@/public/about/whatwedo3.webp";
import WhatWeDo4 from "@/public/about/whatwedo4.webp";
const WhatWeDo = () => {
  return (
    <div className="mx-auto grid w-5/6 grid-cols-2 items-stretch gap-8 pt-[10vh]">
      <div className="flex flex-col items-center justify-center text-center text-acm-gray-500">
        <p className="text-4xl font-bold">WHAT WE DO</p>
        <p className="mt-5 w-5/6 text-2xl font-medium leading-normal">
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
          <Image
            src={WhatWeDo1}
            alt="WhatWeDo1"
            className="h-full w-full rounded-3xl object-cover"
          />
          <Image
            src={WhatWeDo3}
            alt="WhatWeDo3"
            className="row-span-2 h-full w-full rounded-3xl object-cover"
          />
        </div>
        <div className="col-span-3 grid h-full grid-rows-2 gap-4">
          <Image
            src={WhatWeDo2}
            alt="WhatWeDo2"
            className="h-full w-full rounded-3xl object-cover"
          />
          <Image
            src={WhatWeDo4}
            alt="WhatWeDo4"
            className="h-full w-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
