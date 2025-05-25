"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

interface ProjectCardProps {
  project: string;
  image: StaticImageData;
  link: string;
  index: number;
}

const ProjectCard = ({ project, image, link, index }: ProjectCardProps) => {
  const cardAnimate = (index: number) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { y: 0, opacity: 1 },
    transition: { delay: index * 0.2, duration: 0.5 },
    viewport: { once: true },
  });

  return (
    <motion.div {...cardAnimate(index)}>
      <Link href={link} className="relative flex justify-center">
        <Image src={image} alt={`${project} Image`} />
        <div className="absolute bottom-4 w-11/12 rounded-3xl bg-white p-3 pl-0 text-center text-xl font-semibold md:pl-5 md:text-left md:text-2xl">
          {project}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
