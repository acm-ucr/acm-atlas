"use client";

import Image from "next/image";
import landingKeys from "@/public/home/landingKeys.svg";
import { motion } from "motion/react";

const TitleAnimation = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  delay: 0,
};

const KeyAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
  delay: 1,
};

const DescAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: 0.2 },
};

const Landing = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-6xl font-semibold text-acm-gray-500 md:overflow-hidden">
      <motion.div {...TitleAnimation}>
        <div className="relative flex flex-col items-center justify-center text-center text-4xl font-semibold text-acm-gray-500 md:mt-10 md:text-6xl">
          <p className="z-10 pt-5 md:py-8 md:pt-0">ASSOCIATION OF</p>
          <p className="z-10">COMPUTING MACHINERY</p>
        </div>
      </motion.div>

      <div className="relative flex flex-col items-center justify-center">
        <motion.div
          {...KeyAnimation}
          className="-z-10 mb-36 flex items-center justify-center md:mb-56"
        >
          <Image
            src={landingKeys}
            alt="landingKeys"
            className="w-11/12 pb-52 pt-5 md:w-full md:pb-0 md:pt-0"
          />
          <div className="absolute -right-48 -top-72 hidden h-1/4 w-1/4 rounded-full bg-acm-blue-700/70 blur-3xl sm:block" />
          <div className="absolute -left-32 top-24 -z-10 h-1/2 w-1/2 rounded-full bg-gradient-to-r from-acm-blue-700/80 to-transparent blur-3xl" />
          <div className="absolute left-32 top-24 -z-10 h-1/2 w-1/2 rounded-full bg-gradient-to-r from-acm-blue-700/80 to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-0 -z-10 h-1/2 w-1/2 rounded-full bg-gradient-to-r from-acm-blue-700/60 to-transparent blur-3xl" />
          <div className="absolute right-0 top-16 -z-10 h-40 w-40 rounded-full bg-acm-green-600/60 blur-2xl md:-right-16 md:bottom-12 md:h-1/2 md:w-1/2 md:blur-3xl" />
          <div className="absolute right-0 top-16 -z-10 h-40 w-40 rounded-full bg-acm-green-600/60 blur-2xl md:-right-52 md:top-96 md:h-1/2 md:w-1/2 md:blur-3xl" />
          <div className="absolute -bottom-20 -left-80 -z-10 h-40 w-40 rounded-full bg-acm-green-600/60 blur-2xl md:h-1/4 md:w-1/4 md:blur-3xl" />
          <div className="absolute -bottom-5 h-1/2 w-1/2 rounded-full bg-acm-blue-700/50 blur-3xl" />

          <div className="absolute left-20 top-48 -z-10 h-48 w-48 rounded-full bg-acm-blue-700 blur-2xl md:hidden" />
          <div className="absolute bottom-24 right-5 -z-10 h-48 w-48 rounded-full bg-acm-blue-700 blur-2xl md:hidden" />
        </motion.div>

        <div className="absolute bottom-0 flex w-full flex-col items-center md:bottom-16">
          <div className="z-10 h-10 w-11/12 rounded-t-2xl bg-white/45 md:h-16">
            <div className="absolute left-8 top-3 h-4 w-4 rounded-full bg-[#F6F6F6]/50 md:left-20 md:top-5 md:h-6 md:w-6 2xl:bg-[#F6F6F6]" />
            <div className="absolute left-14 top-3 h-4 w-4 rounded-full bg-[#F6F6F6]/50 md:left-32 md:top-5 md:h-6 md:w-6 2xl:bg-[#F6F6F6]" />
            <div className="absolute left-20 top-3 h-4 w-4 rounded-full bg-[#F6F6F6]/50 md:left-44 md:top-5 md:h-6 md:w-6 2xl:bg-[#F6F6F6]" />
          </div>
          <div className="z-10 mx-auto grid w-11/12 grid-cols-1 items-center gap-8 rounded-b-2xl bg-white/70 p-3 backdrop-blur-2xl md:bg-white/40 md:px-10 md:py-14">
            <motion.p
              {...DescAnimation}
              className="text-pretty text-center text-lg leading-relaxed text-acm-gray-500 md:text-2xl/10"
            >
              ACM at UCR is the largest student-run technical organization with
              a focus on Computer Science. Our goal is to help our members
              develop their technical and professional skills to help them in
              school and the tech industry. We aim to accomplish our goal by
              providing technical workshops, professional events, and many more
              opportunities for our members to excel.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
