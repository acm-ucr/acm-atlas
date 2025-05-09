import Image from "next/image";
import whywedoit1 from "@/public/about/whywedoit1.webp";
import whywedoit2 from "@/public/about/whywedoit2.webp";
import whywedoit3 from "@/public/about/whywedoit3.webp";
import whywedoit4 from "@/public/about/whywedoit4.webp";

const WhyWeDoIt = () => {
  return (
    <div className="mx-auto grid w-5/6 grid-cols-2 items-center gap-8 py-[10vh]">
      <div className="image-grid grid h-[600px] w-full gap-4 overflow-hidden transition-all">
        <Image
          src={whywedoit1}
          alt="whywedoit1"
          className="pic1 h-full w-full rounded-3xl object-cover"
        />
        <Image
          src={whywedoit3}
          alt="whywedoit3"
          className="pic2 h-full w-full rounded-3xl object-cover"
        />
        <Image
          src={whywedoit2}
          alt="whywedoit2"
          className="pic3 h-full w-full rounded-3xl object-cover"
        />
        <Image
          src={whywedoit4}
          alt="whywedoit4"
          className="pic4 h-full w-full rounded-3xl object-cover"
        />
      </div>
      <div className="text-center">
        <p className="py-5 text-4xl font-bold text-acm-gray-500">
          WHY WE DO IT
        </p>
        <p className="text-2xl leading-10 text-acm-gray-500">
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
