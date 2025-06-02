"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

interface ProgramProps {
  textColor: string;
  backgroundColor: string;
  image: StaticImageData;
}

// Animation variants
const TitleAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: "easeOut", delay: 0.3 },
};

const ButtonAnimation = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  whileHover: { scale: 1.03, opacity: 0.8 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const ImageAnimation = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: 0.3 },
};

const Joinus = ({ textColor, backgroundColor, image }: ProgramProps) => {
  return (
    <div className="mx-auto grid w-10/12 items-center md:grid-cols-2">
      <div className="flex flex-col">
        <motion.p
          {...TitleAnimation}
          className="mb-4 mt-16 flex justify-center text-3xl font-semibold text-acm-gray-500 md:mt-0 md:pb-6 md:text-5xl"
        >
          JOIN NOW
        </motion.p>

        <div className="flex justify-center py-4 md:py-0">
          <motion.div {...ButtonAnimation}>
            <Link
              href="/"
              className={`rounded-lg p-2 text-2xl md:mt-0 md:px-10 md:py-4 md:text-4xl ${textColor} ${backgroundColor}`}
            >
              Apply Here!
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div {...ImageAnimation}>
        <Image src={image} alt="Join Now" className="rounded-2xl md:w-10/12" />
      </motion.div>
    </div>
  );
};

export default Joinus;
