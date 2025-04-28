import Image from "next/image";
import stanley from "@/public/stanley.webp";

const WhatWeDo = () => {
  const icons = [
    { icon: "</>" },
    { icon: "📝" },
    { icon: "⚙️" },
    { icon: "📈" },
    { icon: "👥" },
  ];

  return (
    <div className="mx-auto grid w-5/6 grid-cols-2 items-stretch gap-8 pt-[10vh]">
      <div className="text-acm-gray-500 flex h-full flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold">WHAT WE DO</h2>
        <br />
        <p className="mt-5 w-5/6 text-xl leading-normal">
          Every quarter, we focus on improving specific aspects of our members.
          In the Fall, we develop professional resumes, build all-star
          LinkedIns, and offer workshops on Applying Effectively at companies
          from the Big 4 to startups.
        </p>
        <div className="mt-12 flex justify-center gap-8">
          {icons.map((item, index) => (
            <div
              key={index}
              className="flex h-16 w-16 rotate-45 transform items-center justify-center rounded-lg bg-yellow-50"
            >
              <span className="-rotate-45 text-2xl">{item.icon}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid h-[350px] grid-cols-5 gap-4">
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
