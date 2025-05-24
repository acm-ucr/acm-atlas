"use client";
import { motion } from "motion/react";
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

const TitleAnimation = {
  viewport: { once: true },
  whileInView: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 30 },
  transition: { duration: 0.5, delay: 0.3 },
};

const DescriptionAnimation = {
  viewport: { once: true },
  whileInView: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 30 },
  transition: { duration: 0.5, delay: 0.4 },
};

const LogoAnimation = {
  viewport: { once: true },
  whileInView: { opacity: 1, scale: 1 },
  initial: { opacity: 0, scale: 0.8 },
  transition: { type: "spring", damping: 40, stiffness: 200, delay: 0.5 },
};

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
        <motion.div
          {...TitleAnimation}
          className={`${textColor} pb-4 text-4xl font-bold`}
        >
          {name}
        </motion.div>
        <motion.div {...DescriptionAnimation}>
          <p className="w-5/6 py-2 pb-6 text-2xl font-semibold text-acm-gray-500">
            {description}
          </p>
          <Link
            href={link}
            className={`${bgColor} flex w-1/4 items-center justify-center rounded-lg py-2 text-xl font-semibold text-white`}
          >
            Learn More →
          </Link>
        </motion.div>
      </div>
      <motion.div
        {...LogoAnimation}
        className="flex items-center justify-center"
      >
        <Image src={logo} alt="logo" />
      </motion.div>
    </div>
  );
};
export default WhatWeOffer;
