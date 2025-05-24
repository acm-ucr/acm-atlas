"use client";

import Image from "next/image";
import Keys from "@/public/home/keys.svg";
import logo from "@/public/home/acmLogo.svg";
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
    <div className="mt-10 flex flex-col items-center justify-center text-6xl font-semibold text-acm-gray-500">
      <motion.div {...TitleAnimation}>
        <div className="mt-10 flex flex-col items-center justify-center text-center text-4xl font-semibold text-acm-gray-500 md:text-6xl">
          <p className="z-10 md:py-8">ASSOCIATION OF</p>
          <p className="z-10">COMPUTING MACHINERY</p>
        </div>
      </motion.div>
      <div className="relative flex flex-col items-center justify-center overflow-x-hidden pt-16">
        <motion.div {...KeyAnimation}>
          <Image src={Keys} alt="Keys" className="z-10 mb-16" />
        </motion.div>
        <div className="relative z-10 mx-auto h-20 w-10/12 rounded-t-2xl bg-white/45 md:w-3/4 2xl:w-1/2">
          <div className="absolute left-8 top-8 h-6 w-6 rounded-full bg-[#F6F6F6]/50 2xl:bg-[#F6F6F6]" />
          <div className="absolute left-20 top-8 h-6 w-6 rounded-full bg-[#F6F6F6]/50 2xl:bg-[#F6F6F6]" />
          <div className="absolute left-32 top-8 h-6 w-6 rounded-full bg-[#F6F6F6]/50 2xl:bg-[#F6F6F6]" />
        </div>
        <div className="z-10 mx-auto grid w-10/12 grid-cols-3 items-center bg-white/40 px-6 py-16 text-center opacity-100 backdrop-blur-3xl md:w-3/4 md:px-20 md:text-left 2xl:w-1/2">
          <p className="col-span-3 text-xl text-acm-gray-500 md:col-span-2 md:text-3xl">
            ACM at UCR is the largest student-run technical organization with a
            focus on Computer Science. Our goal is to help our members develop
            their technical and professional skills to help them in school and
            the tech industry. We aim to accomplish our goal by providing
            technical workshops, professional events, and many more
            opportunities for our members to excel.
          </p>
          <div className="col-span-3 flex h-full w-full items-center justify-center md:col-span-1">
            <Image src={logo} alt="logo" className="mx-auto" />
          </div>
        </div>
        <div className="z-5 absolute bottom-[5%] right-[78%] h-[300px] w-[350px] rounded-full bg-acm-yellow-500/60 blur-3xl" />
        <div className="z-5 absolute bottom-[5%] right-[78%] h-[300px] w-[400px] rounded-full bg-acm-yellow-500/60 blur-3xl" />
        <div className="z-5 absolute bottom-[15%] right-[78%] h-[300px] w-[400px] rounded-full bg-acm-yellow-200/20 blur-3xl" />
        <div className="z-5 absolute bottom-0 right-[76%] h-[300px] w-[400px] rounded-full bg-acm-blue-700/60 blur-3xl" />
        <div className="z-5 absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-acm-blue-700/40 blur-3xl" />
        <div className="z-5 absolute bottom-[15%] left-[76%] h-[300px] w-[400px] rounded-full bg-acm-blue-700/50 blur-3xl" />
        <div className="z-5 absolute bottom-[5%] left-[30%] h-[300px] w-[500px] rounded-full bg-acm-blue-700/40 blur-3xl" />
        <div className="z-5 absolute bottom-[45%] right-[50%] h-[300px] w-[500px] rounded-full bg-acm-blue-700/40 blur-3xl md:bottom-[25%]" />
        <div className="z-5 absolute bottom-[45%] right-[25%] h-[300px] w-[500px] rounded-full bg-acm-blue-700/40 blur-3xl md:bottom-[25%]" />
        <div className="z-5 absolute bottom-[47%] left-0 h-[300px] w-[500px] rounded-full bg-acm-blue-700 opacity-40 blur-3xl md:bottom-[27%]" />
        <div className="z-2 absolute bottom-[55%] left-[90%] h-[300px] w-[350px] rounded-full bg-acm-green-300/25 blur-3xl md:bottom-[35%]" />
        <div className="z-2 absolute bottom-[55%] left-[70%] h-[300px] w-[350px] rounded-full bg-acm-green-300/25 blur-3xl md:bottom-[35%]" />
      </div>
    </div>
  );
};
export default Landing;
