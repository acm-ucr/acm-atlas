import Image from "next/image";
import { StaticImageData } from "next/image";

interface ProgramProps {
  header: string;
  program: string;
  acm: string;
  pText: string;
  image: StaticImageData;
}

const WhatWeOffer = ({ header, program, acm, pText, image }: ProgramProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-acm-gray-500 p-10 text-5xl font-bold">WHAT WE OFFER</p>
      <div className="grid w-3/4 grid-flow-col">
        <div className="grid grid-flow-row">
          <div className="flex flex-row">
            <p className="text-acm-gray-500 text-4xl font-bold">{header}</p>
            <p className="text-acm-yellow-400 text-4xl font-bold">
              &nbsp;{program}&nbsp;
            </p>
            <p className="text-4xl font-bold"> ? </p>
          </div>
          <div className="grid w-3/4 grid-flow-col pt-3 pb-3">
            <p className="text-acm-gray-500 text-2xl font-semibold"> Join </p>
            <p className="text-acm-gray-500 text-2xl font-bold text-nowrap">
              &nbsp;{acm}&nbsp;
            </p>
            <p className="text-acm-gray-500 text-2xl font-semibold">{pText}</p>
          </div>
          <button className="text-acm-gray-500 bg-acm-yellow-100 w-1/6 rounded-lg p-2 text-xl font-semibold">
            Learn More →
          </button>
        </div>
        <Image src={image} alt="acm" width={200} height={200} />
      </div>
    </div>
  );
};

export default WhatWeOffer;
