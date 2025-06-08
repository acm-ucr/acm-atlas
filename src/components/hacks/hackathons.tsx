"use client";
import {
  cutiehack,
  citrushack,
  rosehack,
  designverse,
} from "@/data/hackathons";
import WhatWeOffer from "./whatweoffer";
import Aurora from "@/public/logos/aurora.svg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const TitleAnimation = {
  viewport: { once: true },
  whileInView: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: -50 },
  transition: { duration: 0.5, delay: 0.3 },
};

const DescriptionAnimation = {
  viewport: { once: true },
  whileInView: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: -50 },
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

const Hackathons = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="mx-auto flex w-11/12 flex-col justify-center">
        <motion.p
          {...TitleAnimation}
          className="mt-10 py-8 text-center text-6xl font-bold text-acm-gray-500"
        >
          HACKS
        </motion.p>
        <motion.p
          {...DescriptionAnimation}
          className="mx-auto w-3/4 text-center text-2xl font-semibold"
        >
          ACM hosts one current open back-end focused project, three hackathons,
          and one designathon. A hackathon is an event where engineers come
          together to build a project that solves a problem. A designathon is
          similar to a hackathon, but focus on designing a working prototype.
          These hacks provide ACM members with an opportunity to expand their
          skills beyond our programs! Take a look below!
        </motion.p>
        <p className="my-[4vh] text-center text-5xl font-bold">WHAT WE OFFER</p>
      </div>

      <div className="mx-[15%] grid grid-cols-3 pb-8">
        <div className="order-2 col-span-3 md:order-1 md:col-span-2">
          <motion.div
            {...TitleAnimation}
            className={`pb-4 pt-6 text-center text-4xl font-bold text-acm-turquoise-300 md:pt-0 md:text-left`}
          >
            AURORA
          </motion.div>
          <motion.div
            {...DescriptionAnimation}
            className="flex flex-col items-center text-center md:items-start md:text-left"
          >
            <p className="w-5/6 py-2 pb-6 text-2xl font-semibold text-acm-gray-500">
              Aurora is an all in one dashboard used to manage and run Hackathon
              & Designathon competitions.
            </p>

            <Link
              href="/hacks/aurora"
              className="flex w-fit items-center justify-center rounded-lg bg-acm-turquoise-200 px-4 py-2 text-xl font-semibold text-white md:w-1/4 md:px-0"
            >
              Learn More →
            </Link>
          </motion.div>
        </div>

        <motion.div
          {...LogoAnimation}
          className="order-1 col-span-3 flex items-center justify-center md:order-2 md:col-span-1"
        >
          <Image src={Aurora} alt="Aurora" />
        </motion.div>
      </div>

      <WhatWeOffer
        name="CutieHack"
        bgColor={cutiehack.bgColor}
        description={cutiehack.description}
        textColor={cutiehack.textColor}
        logo={cutiehack.logo}
        link="/hacks/cutiehack"
      />
      <WhatWeOffer
        name="CitrusHack"
        bgColor={citrushack.bgColor}
        description={citrushack.description}
        textColor={citrushack.textColor}
        logo={citrushack.logo}
        link="/hacks/citrushack"
      />
      <WhatWeOffer
        name="RoseHack"
        bgColor={rosehack.bgColor}
        description={rosehack.description}
        textColor={rosehack.textColor}
        logo={rosehack.logo}
        link="/hacks/rosehack"
      />
      <WhatWeOffer
        name="Designverse"
        bgColor={designverse.bgColor}
        description={designverse.description}
        textColor={designverse.textColor}
        logo={designverse.logo}
        link="/hacks/designverse"
      />
      <div className="mx-[15%] flex flex-col pb-[10%]">
        <motion.div
          {...TitleAnimation}
          className="pb-4 text-center text-4xl font-bold text-acm-gray-500 md:text-left"
        >
          NOT SURE HOW TO GET HACKING?
        </motion.div>
        <motion.div
          {...DescriptionAnimation}
          className="flex flex-col items-center text-center md:items-start md:text-left"
        >
          <p className="w-5/6 py-2 pb-6 text-2xl font-semibold text-acm-gray-500">
            Check out our hackpacks, a tool you can use during your hackathons here at UCR to
            get started on your project!
          </p>
          <Link
            href="/hacks/hackpacks"
            className="flex w-fit items-center justify-center rounded-lg bg-acm-blue-700 px-4 py-2 text-xl font-semibold text-white"
          >
            Learn More →
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hackathons;
