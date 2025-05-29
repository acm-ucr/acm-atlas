"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";
import { motion } from "motion/react";

interface HeaderProps {
  header: string;
  subtitle: string;
  text: string;
  logo: StaticImageData;
  ellipse?: StaticImageData;
}

const ProgramHeader = ({
  header,
  subtitle,
  text,
  logo,
  ellipse,
}: HeaderProps) => {
  const headerBackground = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.75 },
  };

  const headerTitleAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { ease: "easeInOut", duration: 0.75 },
  };

  const headerDescriptionAnimation = {
    initial: { x: -40, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { ease: "easeInOut", duration: 0.75 },
  };

  const headerLogoAnimation = {
    initial: { opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { ease: "easeInOut", duration: 1 },
  };

  return (
    <div className="relative pb-10 text-2xl font-semibold text-acm-gray-500">
      <motion.div {...headerBackground}>
        {ellipse && (
          <Image className="absolute -z-10" src={ellipse} alt="ellipse" />
        )}
      </motion.div>
      <div className="py-5 text-center">
        <motion.div {...headerTitleAnimation}>
          <p className="flex justify-center p-5 text-6xl font-bold">{header}</p>
          <p className="pb-5">{subtitle}</p>
        </motion.div>
      </div>
      <motion.div {...headerDescriptionAnimation}>
        <p className="ml-[8%] mt-56 w-10/12 text-center leading-relaxed sm:ml-[15%] sm:mt-0 sm:w-5/12 sm:pt-0 sm:text-left">
          {text}
        </p>
      </motion.div>
      <motion.div {...headerLogoAnimation}>
        <Image
          className="absolute right-[26%] top-[28%] hidden sm:right-[10%] sm:top-[40%] sm:block lg:right-[20%] lg:top-[30%]"
          src={logo}
          alt="logo"
        />
        <Image
          className="absolute right-[26%] top-[28%] w-1/2 -translate-y-5 scale-75 sm:hidden"
          src={logo}
          alt="logo"
        />
      </motion.div>
    </div>
  );
};

export default ProgramHeader;
