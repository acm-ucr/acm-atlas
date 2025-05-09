import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";

interface ProgramProps {
  header: string;
  program: string;
  acm: string;
  pText: string;
  textColor: string;
  linkColor: string;
  image: StaticImageData;
  link: string;
}

const WhatWeOffer = ({
  header,
  program,
  acm,
  pText,
  textColor,
  linkColor,
  image,
  link,
}: ProgramProps) => {
  return (
    <div className="mx-[15%] my-16 grid grid-cols-3">
      <div className="col-span-2">
        <div className="text-acm-gray-500 flex text-5xl font-bold text-nowrap">
          <p>{header}</p>
          <p className={`${textColor} font-bold`}>&nbsp;{program}&nbsp;</p>
          <p>?</p>
        </div>

        <div className="text-acm-gray-500 w-5/6 py-12 text-3xl font-semibold">
          <p className="inline">Join</p>
          <p className="inline font-bold">&nbsp;{acm}&nbsp;</p>
          <p className="inline">{pText}</p>
        </div>
        <Link
          href={link}
          className={`${linkColor} text-acm-gray-500 flex items-center justify-center rounded-lg py-2 text-xl font-semibold md:w-1/2 lg:w-1/4`}
        >
          Learn More →
        </Link>
      </div>

      <div className="flex justify-center">
        <Image src={image} alt="program" />
      </div>
    </div>
  );
};

export default WhatWeOffer;
