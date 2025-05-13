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

const OpportunitiesCard = ({
  name,
  cardBackground,
  appYearAndQuarter,
  link,
  applicationLink,
  index,
}: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative mt-10">
        <Image src={cardBackground} alt="Card background" />
        <p className="absolute left-6 top-6 text-xl text-acm-gray-500">
          0{index}
        </p>
        <div className="absolute bottom-[5.5rem] left-8 flex items-center gap-2">
          <p className="text-xl font-semibold uppercase text-acm-gray-500">
            {name}
          </p>
          <Link href={link} className="rounded-full bg-white px-4 py-1 text-sm">
            Learn more →
          </Link>
        </div>
        <Link
          href={applicationLink}
          className="absolute bottom-5 left-3 rounded-full bg-white px-9 py-2 text-xl font-bold text-acm-gray-500"
        >
          {appYearAndQuarter} APPLICATION
        </Link>
      </div>
    </motion.div>
  );
};

export default OpportunitiesCard;
