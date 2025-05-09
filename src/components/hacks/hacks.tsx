import hackathons from "@/data/hackathons";
import WhatWeOffer from "./whatweoffer";
import Link from "next/link";
const Hacks = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="mx-auto flex w-11/12 flex-col justify-center">
        <p className="mt-[9vh] mb-[5vh] text-center text-6xl font-bold">
          HACKS
        </p>
        <p className="mx-auto w-3/4 text-center text-2xl font-semibold">
          ACM hosts one current open back-end focused project, three hackathons,
          and one designathon. A hackathon is an event where engineers come
          together to build a project that solves a problem. A designathon is
          similar to a hackathon, but focus on designing a working prototype.
          These hacks provide ACM members with an opportunity to expand their
          skills beyond our programs! Take a look below!
        </p>
        <p className="my-[4vh] text-center text-5xl font-bold">WHAT WE OFFER</p>
      </div>
      {hackathons.map(
        ({ description, bgColor, textColor, logo, id, name }, index) => (
          <WhatWeOffer
            key={index}
            name={name}
            bgColor={bgColor}
            description={description}
            textColor={textColor}
            logo={logo}
            link={`/hacks/${id}`}
          />
        ),
      )}
      <div className="mx-[15%] flex flex-col pb-[10%]">
        <p className="text-acm-gray-500 pb-4 text-4xl font-bold">
          NOT SURE HOW TO GET HACKING?
        </p>
        <p className="text-acm-gray-500 w-5/6 py-2 pb-6 text-2xl font-semibold">
          Check out our hackpacks, a tool you can use during your hackathons
          here at UCR to get started on your project!
        </p>
        <Link
          href="/hacks/hackpacks"
          className="bg-acm-blue-700 w-1/6 items-center justify-center rounded-lg py-2 pl-4 text-xl font-semibold text-white"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
};

export default Hacks;
