import Image from "next/image";
import whywedoit1 from "@/public/about/whywedoit1.webp";
import whywedoit2 from "@/public/about/whywedoit2.webp";
import whywedoit3 from "@/public/about/whywedoit3.webp";
import whywedoit4 from "@/public/about/whywedoit4.webp";

const WhyWeDoIt = () => {
  return (
    <div className="mx-auto my-10 grid w-5/6 grid-cols-2 items-center gap-8">
      <div className="grid h-full grid-cols-5 gap-4">
        <div className="col-span-2 grid h-full grid-rows-3 gap-4">
          <Image
            className="h-full w-full rounded-3xl object-cover"
            src={whywedoit1}
            alt="Image1"
          />
          <Image
            className="row-span-2 h-full w-full rounded-3xl object-cover"
            src={whywedoit2}
            alt="Image3"
          />
        </div>
        <div className="col-span-3 grid h-full grid-rows-2 gap-4">
          <Image
            className="h-full w-full rounded-3xl object-cover"
            src={whywedoit3}
            alt="Image2"
          />
          <Image
            className="h-full w-full rounded-3xl object-cover"
            src={whywedoit4}
            alt="Image4"
          />
        </div>
      </div>
      <div className="text-center">
        <p className="text-acm-gray-500 py-5 text-5xl font-bold">
          WHY WE DO IT
        </p>
        <p className="text-acm-gray-500 text-3xl leading-10">
          We want UCR to become a premier institution for Computer Science and
          Engineering. University courses provide a good foundation, but we
          strive to build upon that. But more importantly, we want our members
          to make a positive difference in the world through software.
        </p>
      </div>
    </div>
  );
};

export default WhyWeDoIt;
