import Image from "next/image";
import Spark from "@/public/logos/spark.svg";
import Create from "@/public/logos/create.svg";
import Forge from "@/public/logos/forge.svg";
import DAS from "@/public/logos/das.svg";
import BitByte from "@/public/logos/bitbyte.svg";
import WhatWeDo1 from "@/public/aboutpage/whatwedo1.webp";
import WhatWeDo2 from "@/public/aboutpage/whatwedo2.webp";
import WhatWeDo3 from "@/public/aboutpage/whatwedo3.webp";
import WhatWeDo4 from "@/public/aboutpage/whatwedo4.webp";
const WhatWeDo = () => {
  return (
    <div className="mx-auto grid w-5/6 grid-cols-1 items-stretch gap-8 pt-[4vh] md:grid-cols-2 md:pt-[10vh]">
      <div className="flex flex-col items-center justify-center text-center text-acm-gray-500">
        <p className="text-4xl font-bold">WHAT WE DO</p>
        <p className="mt-5 w-5/6 text-xl font-medium leading-normal md:text-2xl">
          Every quarter, we focus on improving specific aspects of our members.
          In the Fall, we develop professional resumes, build all-star
          LinkedIns, and offer workshops on Applying Effectively at companies
          from the Big 4 to startups.
        </p>
        <div className="mt-6 flex justify-center gap-8">
          <Image
            src={Spark}
            alt="Spark"
            className="w-[10vw] drop-shadow-lg md:w-[5vw]"
          />
          <Image
            src={Forge}
            alt="Forge"
            className="w-[10vw] drop-shadow-lg md:w-[5vw]"
          />
          <Image
            src={Create}
            alt="Create"
            className="w-[10vw] drop-shadow-lg md:w-[5vw]"
          />
          <Image
            src={DAS}
            alt="DAS"
            className="w-[10vw] drop-shadow-lg md:w-[5vw]"
          />
          <Image
            src={BitByte}
            alt="BitByte"
            className="w-[10vw] drop-shadow-lg md:w-[5vw]"
          />
        </div>
      </div>
      <div className="image-grid grid h-[600px] w-full gap-4 overflow-hidden transition-all">
        <Image
          src={WhatWeDo1}
          alt="whatwedo1"
          className="pic1 h-full w-full rounded-3xl object-cover"
        />
        <Image
          src={WhatWeDo3}
          alt="whatwedo3"
          className="pic2 h-full w-full rounded-3xl object-cover"
        />
        <Image
          src={WhatWeDo2}
          alt="whatwedo2"
          className="pic3 h-full w-full rounded-3xl object-cover"
        />
        <Image
          src={WhatWeDo4}
          alt="whatwedo4"
          className="pic4 h-full w-full rounded-3xl object-cover"
        />
      </div>
    </div>
  );
};

export default WhatWeDo;
