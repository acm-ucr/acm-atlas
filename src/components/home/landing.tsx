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
      <div className="absolute right-0 -top-32 hidden h-1/6 w-1/6 rounded-full bg-acm-blue-700/60 sm:block blur-3xl"/>
      <motion.div {...TitleAnimation}>
        <div className="relative flex flex-col items-center justify-center text-center text-4xl font-semibold text-acm-gray-500 md:mt-10 md:text-6xl">
          <p className="z-10 pt-5 md:pt-0 md:py-8">ASSOCIATION OF</p>
          <p className="z-10">COMPUTING MACHINERY</p>
        </div>
      </motion.div>

      <div className="relative flex flex-col items-center justify-center">
        <motion.div {...KeyAnimation} className="-z-10 flex items-center justify-center mb-96">
          <Image
            src={landingKeys}
            alt="landingKeys"
            className="w-3/4 md:w-full md:pt-0 pt-5 pb-52 md:pb-0"
          />
          <div className="sm:hidden absolute -left-20 top-32 h-1/2 w-full rounded-full bg-gradient-to-r from-acm-blue-700/60 to-transparent blur-3xl -z-10" />
          <div className="absolute md:left-20 md:top-32 left-10 top-20 md:h-1/2 md:w-1/2 h-40 w-40 bg-acm-blue-700 rounded-full md:bg-gradient-to-r md:from-acm-blue-700/90 md:to-transparent blur-2xl md:blur-3xl -z-10" />
          <div className="sm:hidden rounded-full absolute h-3/4 w-3/4 bg-gradient-to-l from-acm-green-600/60 from--acm-green-600/60 to-transparent -right-16 top-32 blur-3xl -z-10"/>
          <div className="rounded-full absolute md:h-1/2 md:w-1/2 w-40 h-40 bg-acm-green-600/60 md:right-32 md:bottom-12 top-16 right-0 blur-2xl md:blur-3xl -z-10"/>
          <div className="rounded-full h-1/2 w-1/2 absolute bg-acm-blue-700/40 blur-3xl -bottom-5"/>

          <div className="md:hidden absolute left-20 top-48 h-48 w-48 bg-acm-blue-700 rounded-full -z-10 blur-2xl" />
          <div className="md:hidden absolute right-5 bottom-24 h-48 w-48 bg-acm-blue-700 rounded-full -z-10 blur-2xl" />
        </motion.div>

        <div className="absolute md:bottom-20 w-full flex flex-col items-center">
          <div className="z-10 h-10 w-10/12 md:h-16 rounded-t-2xl bg-white/45">
            <div className="absolute md:left-32 md:top-5 md:h-6 md:w-6 left-12 top-3 h-4 w-4 rounded-full bg-[#F6F6F6]/50 2xl:bg-[#F6F6F6]" />
            <div className="absolute md:left-44 md:top-5 md:h-6 md:w-6 left-20 top-3 h-4 w-4 rounded-full bg-[#F6F6F6]/50 2xl:bg-[#F6F6F6]" />
            <div className="absolute md:left-56 md:top-5 md:h-6 md:w-6 left-28 top-3 h-4 w-4 rounded-full bg-[#F6F6F6]/50 2xl:bg-[#F6F6F6]" />
          </div>
          <div className="z-10 mx-auto grid w-5/6 grid-cols-1 items-center gap-8 rounded-b-2xl bg-white/70 md:bg-white/40 p-3 md:px-10 md:py-14 backdrop-blur-2xl">
            <motion.p
              {...DescAnimation}
              className="text-lg text-center text-pretty leading-relaxed text-acm-gray-500 md:text-2xl/10"
            >
              ACM at UCR is the largest student-run technical organization with a
              focus on Computer Science. Our goal is to help our members develop
              their technical and professional skills to help them in school and
              the tech industry. We aim to accomplish our goal by providing
              technical workshops, professional events, and many more
              opportunities for our members to excel.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;