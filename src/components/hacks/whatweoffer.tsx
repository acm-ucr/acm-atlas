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
  initial: { opacity: 0, y: -30 },
  transition: { duration: 0.5, delay: 0.3 },
};

const DescriptionAnimation = {
  viewport: { once: true },
  whileInView: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: -30 },
  transition: { duration: 0.5, delay: 0.4 },
};

const LogoAnimation = {
  viewport: { once: true },
  variants: {
    hidden: { opacity: 0, x: 30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.75, delay: 0.5 } },
  },
  initial: "hidden",
  whileInView: "show",
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
      <div className="order-1 col-span-3 md:order-1 md:col-span-2">
        <motion.div
          {...TitleAnimation}
          className={`${textColor} pb-4 pt-6 text-center text-4xl font-bold md:pt-0 md:text-left`}
        >
          {name}
        </motion.div>
        <motion.div
          {...DescriptionAnimation}
          className="flex flex-col items-center text-center md:items-start md:text-left"
        >
          <p className="w-5/6 py-2 pb-6 text-2xl font-semibold text-acm-gray-500">
            {description}
          </p>
        </motion.div>
        <motion.div
          {...DescriptionAnimation}
          className="flex flex-col items-center text-center md:items-start md:text-left"
        >
          <Link
            href={link}
            className={`${bgColor} flex w-fit items-center justify-center rounded-lg px-2 py-2 text-xl font-semibold text-white md:w-1/4 md:px-0`}
          >
            Learn More →
          </Link>
        </motion.div>
      </div>
      <motion.div
        {...LogoAnimation}
        className="order-0 col-span-3 flex items-center justify-center md:order-2 md:col-span-1"
      >
        <Image src={logo} alt="logo" />
      </motion.div>
    </div>
  );
};
export default WhatWeOffer;
