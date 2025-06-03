"use client";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
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

const TitleAnimation = {
  viewport: { once: true },
  whileInView: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 30 },
  transition: { duration: 0.25, delay: 0.3 },
};

const DescriptionAnimation = {
  viewport: { once: true },
  whileInView: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 30 },
  transition: { duration: 0.25, delay: 0.4 },
};

const LogoAnimation = {
  viewport: { once: true },
  whileInView: { opacity: 1, scale: 1 },
  initial: { opacity: 0, scale: 0.8 },
  transition: { type: "spring", damping: 40, stiffness: 200, delay: 0.25 },
};

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
      <motion.div
        {...LogoAnimation}
        className="mb-5 mt-10 flex items-center justify-center md:order-2 md:mt-0"
      >
        <Image
          src={image}
          alt="program"
          className="w-1/2 drop-shadow-2xl md:w-2/3"
        />
      </motion.div>
      <div className="col-span-2">
        <motion.div
          className="flex flex-wrap justify-center text-center text-2xl font-bold text-acm-gray-500 md:justify-start md:text-left md:text-4xl"
          {...TitleAnimation}
        >
          <p>{header}</p>
          <p className={`${textColor} font-bold`}>&nbsp;{program}&nbsp;</p>
          <p>?</p>
        </motion.div>
        <motion.div
          {...DescriptionAnimation}
          className="w-full text-pretty py-8 text-center text-xl font-semibold text-acm-gray-500 md:w-4/5 md:text-left md:text-2xl"
        >
          <p className="inline">Join</p>
          <p className="inline font-bold">&nbsp;{acm}&nbsp;</p>
          <p className="inline">{pText}</p>
        </motion.div>
        <motion.div
          {...DescriptionAnimation}
          className="mx-auto flex w-[75%] items-center justify-center rounded-lg py-2 text-xl font-semibold text-acm-gray-500 md:mx-0 md:w-1/2 md:justify-start 2xl:w-full 2xl:items-start 2xl:justify-start"
        >
          <Link
            href={link}
            className={`${linkColor} flex items-center justify-center rounded-lg px-4 py-2 text-xl font-semibold text-acm-gray-500`}
          >
            Learn More →
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
