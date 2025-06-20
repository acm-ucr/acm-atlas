"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

interface CardProps {
  name: string;
  cardBackground: string;
  appYearAndQuarter: string;
  link: string;
  applicationLink: string;
  index: number;
}

const dropInAnim = (index: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { y: 0, opacity: 1 },
  transition: { delay: index * 0.2, duration: 0.5 },
  viewport: { once: true },
});

const ButtonAnimation = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  whileHover: { scale: 1.03, opacity: 0.8 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const OpportunitiesCard = ({
  name,
  cardBackground,
  appYearAndQuarter,
  link,
  applicationLink,
  index,
}: CardProps) => {
  const isOpen = () => {
    if (appYearAndQuarter === "Loading...") {
      return "";
    }
    const keywords = ["CLOSED", "OPENING IN"];
    const isClosed = keywords.some((word) =>
      appYearAndQuarter.toUpperCase().includes(word),
    );

    return isClosed ? "" : " APPLICATION";
  };

  return (
    <motion.div {...dropInAnim(index)}>
      <div className="relative mt-10">
        <Image src={cardBackground} alt="Card background" />
        <p className="absolute left-6 top-6 text-xl text-acm-gray-500">
          0{index}
        </p>
        <div className="absolute bottom-[5.5rem] left-8 flex items-center gap-2">
          <p className="text-xl font-semibold uppercase text-acm-gray-500">
            {name}
          </p>
          <motion.div {...ButtonAnimation}>
            <Link
              href={link}
              className="rounded-full bg-white px-4 py-1 text-sm"
            >
              Learn more →
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-5 left-0 flex w-full justify-center">
          <motion.div {...ButtonAnimation}>
            {applicationLink !== "/" ? (
              <Link
                href={applicationLink}
                target="_blank"
                className="rounded-full bg-white px-9 py-2 text-lg font-bold text-acm-gray-500"
              >
                {appYearAndQuarter}
                {isOpen()}
              </Link>
            ) : (
              <p className="cursor-not-allowed rounded-full bg-white px-9 py-2 text-lg font-bold text-acm-gray-500">
                {appYearAndQuarter}
                {isOpen()}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default OpportunitiesCard;
