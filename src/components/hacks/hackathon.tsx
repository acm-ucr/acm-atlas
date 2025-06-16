"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import StatItem from "../statitem";
import CarouselImages from "@/components/hacks/carousel";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { TbMailFilled } from "react-icons/tb";
import { motion } from "motion/react";

interface HackathonProps {
  name: string;
  website: string;
  logo: StaticImageData;
  description: string;
  description2: string;
  subtitle: string;
  bgColor: string;
  textColor: string;
  carouselItems: {
    image: StaticImageData;
    alt: string;
  }[];
  devposts: {
    year: string;
    link: string;
  }[];
  stats: {
    end: number;
    label: string;
  }[];
  instagram: string;
  email: string;
}

const Hackathon = ({
  name,
  website,
  logo,
  description,
  description2,
  subtitle,
  bgColor,
  textColor,
  carouselItems,
  devposts,
  stats,
  instagram,
  email,
}: HackathonProps) => {
  return (
    <div className="relative text-center text-2xl font-semibold text-acm-gray-200">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="pb-10 text-acm-gray-500"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="py-5 text-center"
        >
          <p className="mt-10 flex justify-center pb-[3vh] pt-4 text-6xl font-bold md:mt-10 md:py-8">
            {name}
          </p>
          <p className="pb-5 text-2xl font-semibold">{subtitle}</p>
        </motion.div>
        <motion.p
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="ml-[8%] mt-56 w-10/12 text-center leading-relaxed sm:ml-[15%] sm:mt-0 sm:w-5/12 sm:pt-0 sm:text-left"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          <Image
            className="absolute right-[26%] top-[10%] w-1/2 drop-shadow-2xl sm:right-[10%] sm:top-[40%] md:right-[20%] md:top-[3%] md:w-1/6 2xl:w-[14%]"
            src={logo}
            alt="logo"
          />
        </motion.div>
      </motion.div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 py-10 md:grid-cols-4">
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            end={stat.end}
            label={stat.label}
            duration={2}
            color="text-acm-gray-500"
            numberSize="text-4xl md:text-7xl"
            labelSize="text-xl md:text-3xl"
          />
        ))}
      </div>

      <Link
        href={website}
        target="_blank"
        className={`${bgColor} mx-auto flex w-2/3 items-center justify-center rounded-lg py-2 text-xl font-semibold text-white md:w-1/6`}
      >
        Visit our Website!
      </Link>
      <p className="mx-[10%] py-5 text-left text-3xl font-bold">WHAT WE DO</p>
      <p className="mx-[10%] text-left">{description2}</p>
      <CarouselImages images={carouselItems} />
      <p className="mt-10 text-4xl font-bold">PREVIOUS DEVPOSTS</p>
      <div className="mx-auto mt-6 grid w-5/6 grid-cols-2 gap-4 md:w-1/3 md:grid-cols-3">
        {devposts.map(({ year, link }, idx) => (
          <Link
            key={idx}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full rounded-xl ${bgColor} px-10 py-4 font-medium text-white`}
          >
            {year}
          </Link>
        ))}
      </div>
      <p className="mt-10 text-4xl font-bold">CONTACT US</p>
      <div className="mt-4 flex justify-center gap-6">
        <Link
          href={`mailto:${email}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbMailFilled className={`${textColor}`} size={80} />
        </Link>
        <Link href={instagram} target="_blank" rel="noopener noreferrer">
          <BiLogoInstagramAlt className={`${textColor}`} size={80} />
        </Link>
      </div>
    </div>
  );
};

export default Hackathon;
