"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import getCurrentApps from "@/utils/applications/currentapplications";
import { getAppStatus } from "@/utils/applications/applicationstatus";
import { motion } from "motion/react";

interface ProgramProps {
  textColor: string;
  backgroundColor: string;
  image: StaticImageData;
  name: string;
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

const Joinus = ({ textColor, backgroundColor, image, name }: ProgramProps) => {
  const { data, isLoading } = getCurrentApps();
  const currentApps = data?.currentApps;
  const { status, appLink } = getAppStatus(name, currentApps ?? []);

  return (
    <div className="mx-auto grid w-10/12 items-center md:grid-cols-2">
      <div className="flex flex-col">
        <motion.p
          {...TitleAnimation}
          className="mb-4 mt-16 flex justify-center text-3xl font-semibold text-acm-gray-500 md:mt-0 md:pb-6 md:text-5xl"
        >
          JOIN NOW
        </motion.p>

        <motion.div
          {...ButtonAnimation}
          className="flex justify-center py-4 drop-shadow-lg md:py-0"
        >
          {appLink && appLink !== "/" ? (
            <Link
              href={appLink}
              target="_blank"
              className={`rounded-lg p-2 text-2xl md:mt-0 md:px-10 md:py-4 md:text-3xl ${textColor} ${backgroundColor}`}
            >
              {isLoading ? "Loading..." : status} APPLICATION
            </Link>
          ) : (
            <p
              className={`cursor-not-allowed rounded-lg p-2 text-2xl md:mt-0 md:px-10 md:py-4 md:text-3xl ${textColor} ${backgroundColor}`}
            >
              {isLoading ? "Loading..." : status}
            </p>
          )}
        </motion.div>
      </div>

      <motion.div {...ImageAnimation}>
        <Image src={image} alt="Join Now" className="rounded-2xl md:w-10/12" />
      </motion.div>
    </div>
  );
};

export default Joinus;
