"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

interface ProjectCardProps {
  project: string;
  image: StaticImageData;
  link: string;
}

const ProjectCard = ({ project, image, link }: ProjectCardProps) => {
  const cardAnimate = {
    viewport: { once: true },
    whileInView: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 50 },
    transition: { duration: 0.7, delay: 0.2 },
  };

  return (
    <motion.div {...cardAnimate}>
      <Link href={link} className="relative flex justify-center">
        <Image src={image} alt={`${project} Image`} />
        <div className="absolute bottom-4 w-11/12 rounded-3xl bg-white p-3 pl-5 text-2xl font-semibold">
          {project}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
