import Image from "next/image";

const OurVision = () => {
  return (
    <div className="ml-16 grid grid-cols-2">
      <div className="grid w-2/3 grid-cols-5">
        <div className="col-span-2 grid grid-rows-3 gap-6">
          <div className="relative mt-4 aspect-[1/1] w-auto overflow-hidden rounded-xl">
            <Image
              src={"AboutUs/OurVision/1_1.webp"}
              alt="ACM Members attend an in-progress general ACM meeting."
              fill
              quality={85}
            />
          </div>
          <div className="relative row-span-2 h-[49.5%] w-auto overflow-hidden rounded-xl">
            <Image
              src={"AboutUs/OurVision/1_3.webp"}
              alt="A screen presenting ACM VP Jerry Li's LinkedIn is provided to members as the exemplar."
              fill
              quality={85}
            />
          </div>
        </div>
        <div className="col-span-3 m-4 grid grid-rows-2 gap-4">
          <div className="relative aspect-[1/1] w-auto overflow-hidden rounded-xl">
            <Image
              src={"AboutUs/OurVision/1_2.webp"}
              alt="ACM members and UCR students alike attend an ACM workshop on the basics of Python programming at the Pentland Hills Foxhole."
              fill
              quality={85}
            />
          </div>
          <div className="relative mt-[-48] aspect-[15/9] w-auto overflow-hidden rounded-xl">
            <Image
              src={"AboutUs/OurVision/1_4.webp"}
              alt="ACM members attend an intern panel and boba social during the ACM Kickoff Week."
              fill
              quality={85}
            />
          </div>
        </div>
      </div>
      <div className="text-acm-gray-500 flex flex-col items-center text-center">
        <h1 className="w-auto text-4xl font-bold">OUR VISION</h1>
        <p className="mt-8 w-4/5 text-3xl leading-normal font-medium">
          Our Vision is simple: We want to improve our members professionally,
          technically, and personally. We want to help our members grow
          throughout their college career, whether they enter as a first-year
          university student or as a transfer student.
        </p>
      </div>
    </div>
  );
};

export default OurVision;
