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
    <div className="mx-[20%] grid grid-cols-3">
      <div className="col-span-2 grid">
        <div className="text-acm-gray-500 mr-[20%] grid grid-flow-col text-4xl font-bold text-nowrap">
          <p className="">{header}</p>
          <p className={`${textColor} font-bold`}>{program}</p>
          <p>?</p>
        </div>

        <div className="text-acm-gray-500 flex text-2xl font-semibold text-balance">
          <p>Join</p>
          <p className="font-bold text-nowrap">&nbsp;{acm}&nbsp;</p>
          <p>{pText}</p>
        </div>
        <Link
          href={link}
          className={`${linkColor} text-acm-gray-500 flex w-1/4 items-center justify-center rounded-lg pt-1 pb-1 text-2xl text-xl font-semibold`}
        >
          Learn More →
        </Link>
      </div>

      <div className="it flex justify-center">
        <Image src={image} alt="acm" width={200} height={200} />
      </div>
    </div>
  );
};

export default WhatWeOffer;
