"use client";
import { motion } from "motion/react";
import Link from "next/link";
import ProjectCard from "@/components/home/projectcard";
import Spark1 from "@/public/home/featured/pad.webp";
import Spark2 from "@/public/home/featured/aviatr.webp";
import Spark3 from "@/public/home/featured/saf.webp";
import Create1 from "@/public/home/featured/acm.webp";
import Create2 from "@/public/home/featured/witl.webp";
import Create3 from "@/public/home/featured/nsu.webp";
import Forge1 from "@/public/home/featured/wzchess.webp";
import Forge2 from "@/public/home/featured/drone.webp";
import Forge3 from "@/public/home/featured/blank.webp";

const hoverOver = () => ({
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  duration: { scale: 0.3 },
});

const FeaturedProjects = () => {
  const index1 = 1;
  const index2 = 2;
  const index3 = 3;

  return (
    <div className="mx-auto w-10/12 md:w-11/12">
      <div className="mt-5 flex items-center justify-center">
        <p className="text-center text-5xl font-bold text-acm-gray-500 md:text-6xl">
          FEATURED PROJECTS
        </p>
      </div>
      <div className="mt-10 font-bold text-acm-gray-500">
        <p className="pb-4 text-center text-4xl md:text-left">ACM SPARK</p>
        <div className="grid grid-cols-1 gap-8 text-lg md:grid-cols-3">
          <motion.div {...hoverOver()}>
            <ProjectCard
              project="PHI ALPHA DELTA"
              image={Spark1}
              link="https://pad.ucrhighlanders.org/"
              index={index1}
            />
          </motion.div>
          <motion.div {...hoverOver()}>
            <ProjectCard
              project="AVIAT’R"
              image={Spark2}
              link="https://aviatr.ucrhighlanders.org/"
              index={index2}
            />
          </motion.div>
          <motion.div {...hoverOver()}>
            <ProjectCard
              project="SAF"
              image={Spark3}
              link="https://saf.ucrhighlanders.org/"
              index={index3}
            />
          </motion.div>
        </div>
        <Link
          href="/programs/spark"
          className="mb-8 mt-4 flex text-lg md:justify-end md:text-2xl 2xl:mt-6"
        >
          View All Spark Projects →
        </Link>
        <p className="pb-4 text-center text-4xl md:text-left">ACM CREATE</p>
        <div className="grid grid-cols-1 gap-8 text-lg md:grid-cols-3">
          <motion.div {...hoverOver()}>
            <ProjectCard
              project="ACM"
              image={Create1}
              link="/"
              index={index1}
            />
          </motion.div>
          <motion.div {...hoverOver()}>
            <ProjectCard
              project="WITL"
              image={Create2}
              link="https://witl.ucrhighlanders.org/"
              index={index2}
            />
          </motion.div>
          <motion.div {...hoverOver()}>
            <ProjectCard
              project="NSU"
              image={Create3}
              link="https://nsu.ucrhighlanders.org/"
              index={index3}
            />
          </motion.div>
        </div>
        <Link
          href="/programs/create"
          className="mb-8 mt-4 flex text-lg md:justify-end md:text-2xl 2xl:mt-6"
        >
          View All Create Projects →
        </Link>
        <p className="pb-4 text-center text-4xl md:text-left">ACM FORGE</p>
        <div className="grid grid-cols-1 gap-8 text-lg md:grid-cols-3">
          <motion.div {...hoverOver()}>
            <ProjectCard
              project="WIZARD CHESS"
              image={Forge1}
              link="https://github.com/acm-ucr/wizard-chess"
              index={index1}
            />
          </motion.div>
          <motion.div {...hoverOver()}>
            <ProjectCard
              project="DRONES"
              image={Forge2}
              link="https://github.com/acm-ucr/drones-zephyr"
              index={index2}
            />
          </motion.div>
          <motion.div {...hoverOver()}>
            <ProjectCard
              project="ARMS"
              image={Forge3}
              link="https://github.com/acm-ucr/Arms"
              index={index3}
            />
          </motion.div>
        </div>
        <Link
          href="/programs/forge"
          className="mb-8 mt-4 flex text-lg md:justify-end md:text-2xl 2xl:mt-6"
        >
          View All Forge Projects →
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProjects;
