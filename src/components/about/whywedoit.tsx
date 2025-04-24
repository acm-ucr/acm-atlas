import Image from "next/image";
import Image1 from "@/public/WhyWeDoIt/image-1.webp";
import Image2 from "@/public/WhyWeDoIt/image-2.webp";
import Image3 from "@/public/WhyWeDoIt/image-3.webp";
import Image4 from "@/public/WhyWeDoIt/image-4.webp";

interface WhyWeDoItProps {
  header: string;
  pText: string;
}

const WhyWeDoIt = ({ header, pText }: WhyWeDoItProps) => {
  return (
    <div className="my-10 grid w-screen grid-cols-2 items-center gap-8 px-20">
      <div className="grid h-full grid-cols-5 gap-4">
        <div className="col-span-2 grid h-full grid-rows-3 gap-4">
          <Image
            className="h-full w-full rounded-3xl object-cover"
            src={Image1}
            alt="Image1"
          />

          <Image
            className="row-span-2 h-full w-full rounded-3xl object-cover"
            src={Image3}
            alt="Image3"
          />
        </div>
        <div className="col-span-3 grid h-full grid-rows-2 gap-4">
          <Image
            className="h-full w-full rounded-3xl object-cover"
            src={Image2}
            alt="Image2"
          />
          <Image
            className="h-full w-full rounded-3xl object-cover"
            src={Image4}
            alt="Image4"
          />
        </div>
      </div>
      <div className="text-center">
        <p className="text-acm-gray-500 py-5 text-5xl font-bold">{header}</p>
        <p className="text-acm-gray-500 text-3xl leading-10">{pText}</p>
      </div>
    </div>
  );
};

export default WhyWeDoIt;
