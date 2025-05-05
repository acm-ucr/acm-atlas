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
    <div className="mx-[15%] grid grid-cols-3">
      <div className="col-span-2">
        <div className="flex text-nowrap text-4xl font-bold text-acm-gray-500">
          <p>{header}</p>
          <p className={`${textColor} font-bold`}>&nbsp;{program}&nbsp;</p>
          <p>?</p>
        </div>

        <div className="w-5/6 py-2 text-2xl font-semibold text-acm-gray-500">
          <p className="inline">Join</p>
          <p className="inline font-bold">&nbsp;{acm}&nbsp;</p>
          <p className="inline">{pText}</p>
        </div>
        <Link
          href={link}
          className={`${linkColor} flex w-1/4 items-center justify-center rounded-lg py-2 text-xl font-semibold text-acm-gray-500`}
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
