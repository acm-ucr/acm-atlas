import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface WhatWeOfferProps {
  textColor: string;
  bgColor: string;
  description: string;
  name: string;
  logo: StaticImageData;
  link: string;
}

const WhatWeOffer = ({
  textColor,
  bgColor,
  description,
  name,
  logo,
  link,
}: WhatWeOfferProps) => {
  return (
    <div className="mx-[15%] grid grid-cols-3 pb-8">
      <div className="col-span-2">
        <p className={`${textColor} pb-4 text-4xl font-bold`}>{name}</p>
        <p className="text-acm-gray-500 w-5/6 py-2 pb-6 text-2xl font-semibold">
          {description}
        </p>

        <Link
          href={link}
          className={`${bgColor} flex w-1/4 items-center justify-center rounded-lg py-2 text-xl font-semibold text-white`}
        >
          Learn More →
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <Image src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default WhatWeOffer;
