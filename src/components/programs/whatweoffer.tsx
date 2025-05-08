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
    <div className="grid grid-cols-1 items-center px-4 py-12 md:grid-cols-3 md:px-[15%]">
      <div className="col-span-2">
        <div className="flex flex-wrap justify-center text-center text-2xl font-bold text-acm-gray-500 md:justify-start md:text-left md:text-4xl">
          <p>{header}</p>
          <p className={`${textColor} font-bold`}>&nbsp;{program}&nbsp;</p>
          <p>?</p>
        </div>

        <div className="w-full py-8 text-center text-xl font-semibold text-acm-gray-500 md:w-4/5 md:text-left md:text-2xl">
          <p className="inline">Join</p>
          <p className="inline font-bold">&nbsp;{acm}&nbsp;</p>
          <p className="inline">{pText}</p>
        </div>
        <Link
          href={link}
          className={`${linkColor} flex items-center justify-center rounded-lg py-2 text-xl font-semibold text-acm-gray-500 md:w-1/2 lg:w-1/4`}
        >
          Learn More →
        </Link>
      </div>

      <div className="mt-10 flex items-center justify-center md:mt-0">
        <Image
          src={image}
          alt="program"
          className="flex items-center justify-center"
        />
      </div>
    </div>
  );
};

export default WhatWeOffer;
