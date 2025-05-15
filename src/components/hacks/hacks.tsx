"use client";
import hackathons from "@/data/hackathons";
import WhatWeOffer from "./whatweoffer";
import Aurora from "@/public/logos/aurora.svg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
const Hacks = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="mx-auto flex w-11/12 flex-col justify-center">
        <p className="mt-10 py-8 text-center text-6xl font-bold text-acm-gray-500">
          HACKS
        </p>
        <p className="mx-auto w-3/4 text-center text-2xl font-semibold">
          ACM hosts one current open back-end focused project, three hackathons,
          and one designathon. A hackathon is an event where engineers come
          together to build a project that solves a problem. A designathon is
          similar to a hackathon, but focus on designing a working prototype.
          These hacks provide ACM members with an opportunity to expand their
          skills beyond our programs! Take a look below!
        </p>
        <p className="my-[4vh] text-center text-5xl font-bold">WHAT WE OFFER</p>
      </div>

      <div className="mx-[15%] grid grid-cols-3 pb-8">
        <div className="col-span-2">
          <motion.div
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`pb-4 text-4xl font-bold text-acm-turquoise-300`}
          >
            AURORA
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="w-5/6 py-2 pb-6 text-2xl font-semibold text-acm-gray-500">
              Aurora is an all in one dashboard used to manage and run Hackathon
              competitions.
            </p>

            <Link
              href="/hacks/aurora"
              className="flex w-1/4 items-center justify-center rounded-lg bg-acm-turquoise-200 py-2 text-xl font-semibold text-white"
            >
              Learn More →
            </Link>
          </motion.div>
        </div>

        <motion.div
          viewport={{ once: true }}
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{
            type: "spring",
            damping: 40,
            stiffness: 300,
            delay: 0.5,
          }}
          className="flex items-center justify-center"
        >
          <Image src={Aurora} alt="Aurora" />
        </motion.div>
      </div>

      {hackathons.map(
        ({ description, bgColor, textColor, logo, id, name }, index) => (
          <WhatWeOffer
            key={index}
            name={name}
            bgColor={bgColor}
            description={description}
            textColor={textColor}
            logo={logo}
            link={`/hacks/${id}`}
          />
        ),
      )}
      <div className="mx-[15%] flex flex-col pb-[10%]">
        <p className="pb-4 text-4xl font-bold text-acm-gray-500">
          NOT SURE HOW TO GET HACKING?
        </p>
        <p className="w-5/6 py-2 pb-6 text-2xl font-semibold text-acm-gray-500">
          Check out our hackpacks, a tool you can use during your hackathons
          here at UCR to get started on your project!
        </p>
        <Link
          href="/hacks/hackpacks"
          className="w-1/6 items-center justify-center rounded-lg bg-acm-blue-700 py-2 pl-4 text-xl font-semibold text-white"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
};

export default Hacks;
