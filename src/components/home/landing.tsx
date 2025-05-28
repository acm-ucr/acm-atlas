"use client";

import Image from "next/image";
import landingBG from "@/public/home/landingBG.svg";
import landingEllipse from "@/public/home/landingEllipse.svg";
import doubleEllipse1 from "@/public/home/doubleEllipse1.svg";
import doubleEllipse2 from "@/public/home/doubleEllipse2.svg";
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

const Landing = () => {
  return (
    <div className="relative mt-10 flex flex-col items-center justify-center text-6xl font-semibold text-acm-gray-500">
      <Image
        src={landingEllipse}
        alt="landingEllipse"
        className="absolute -top-10 right-0 hidden sm:block"
      />
      <motion.div {...TitleAnimation}>
        <div className="relative flex flex-col items-center justify-center text-center text-4xl font-semibold text-acm-gray-500 md:mt-10 md:text-6xl">
          <p className="z-10 md:py-8">ASSOCIATION OF</p>
          <p className="z-10">COMPUTING MACHINERY</p>
        </div>
      </motion.div>
      <div className="relative flex flex-col items-center justify-center md:overflow-hidden">
        <motion.div {...KeyAnimation} className="-z-10 h-full w-full">
          <Image
            src={landingBG}
            alt="landingBG"
            className="w-screen object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white to-transparent md:hidden md:h-1/6" />
          <div>
            <Image
              src={doubleEllipse1}
              alt="doubleEllipse1"
              className="absolute -bottom-20 left-20 md:hidden"
            />
            <Image
              src={doubleEllipse2}
              alt="doubleEllipse2"
              className="absolute right-10 top-28 md:hidden"
            />
          </div>
        </motion.div>
        <div className="md:absolute md:bottom-28">
          <div className="relative z-10 mx-auto h-12 w-10/12 rounded-t-2xl bg-white/40 md:h-20 2xl:w-4/5">
            <div className="absolute left-4 top-3 h-6 w-6 rounded-full bg-[#F6F6F6]/50 md:left-8 md:top-8 2xl:bg-white" />
            <div className="absolute left-12 top-3 h-6 w-6 rounded-full bg-[#F6F6F6]/50 md:left-20 md:top-8 2xl:bg-white" />
            <div className="absolute left-20 top-3 h-6 w-6 rounded-full bg-[#F6F6F6]/50 md:left-32 md:top-8 2xl:bg-white" />
          </div>
          <div className="z-10 mx-auto w-10/12 items-center rounded-b-2xl bg-white/65 px-3 py-3 text-center md:rounded-none md:px-20 md:text-left 2xl:w-4/5">
            <p className="col-span-3 mx-[5%] text-pretty py-3 text-center text-lg text-acm-gray-500 md:col-span-2 md:mx-auto md:py-12 md:text-3xl">
              ACM at UCR is the largest student-run technical organization with
              a focus on Computer Science. Our goal is to help our members
              develop their technical and professional skills to help them in
              school and the tech industry. We aim to accomplish our goal by
              providing technical workshops, professional events, and many more
              opportunities for our members to excel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
