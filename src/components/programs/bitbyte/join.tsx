"use client";

import Link from "next/link";
import getCurrentApps from "@/utils/applications/currentapplications";
import { getAppStatus } from "@/utils/applications/applicationstatus";
import { motion } from "motion/react";

const ButtonAnimation = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  whileHover: { scale: 1.03, opacity: 0.8 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const Join = () => {
  const { data, isLoading } = getCurrentApps();
  const currentApps = data?.currentApps;
  const { status, appLink } = getAppStatus("bitbyte", currentApps ?? []);

  return (
    <div className="mx-auto grid w-10/12 items-center pt-0 md:grid-cols-2 md:pt-20">
      <div className="flex flex-col">
        <p className="mt-8 flex justify-center text-4xl font-semibold text-acm-gray-500 md:mt-0 md:pb-6 md:text-5xl">
          Join Now
        </p>
        <motion.div
          {...ButtonAnimation}
          className="flex justify-center py-4 drop-shadow-lg md:py-0"
        >
          {appLink && appLink !== "/" ? (
            <Link
              href={appLink}
              target="_blank"
              className="rounded-lg bg-acm-green-200 p-2 px-6 text-2xl text-white md:mt-0 md:px-10 md:py-4 md:text-3xl"
            >
              {isLoading ? "Loading..." : status}
            </Link>
          ) : (
            <p className="cursor-not-allowed rounded-lg bg-acm-green-200 p-2 px-6 text-2xl text-white md:mt-0 md:px-10 md:py-4 md:text-3xl">
              {isLoading ? "Loading..." : status}
            </p>
          )}
        </motion.div>
      </div>
      <div>
        <p className="pt-8 text-center text-4xl font-bold md:text-left">
          WHAT WE DO
        </p>
        <p className="pt-4 text-center text-2xl md:text-left">
          We connect multiple students with a mentor to be advised throughout
          one school year. During this period there will be different social and
          activities hosted to help foster a deeper relationship between the
          mentor and mentees.{" "}
        </p>
      </div>
    </div>
  );
};

export default Join;
