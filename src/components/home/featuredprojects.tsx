import Link from "next/link";
import ProjectCard from "./projectcard";
import Spark1 from "@/public/home/featured/pad.webp";
import Spark2 from "@/public/home/featured/aviatr.webp";
import Spark3 from "@/public/home/featured/saf.webp";
import Create1 from "@/public/home/featured/acm.webp";
import Create2 from "@/public/home/featured/witl.webp";
import Create3 from "@/public/home/featured/nsu.webp";
import Forge1 from "@/public/home/featured/wzchess.webp";
import Forge2 from "@/public/home/featured/drone.webp";
import Forge3 from "@/public/home/featured/blank.webp";

const FeaturedProjects = () => {
  const index1 = 1;
  const index2 = 2;
  const index3 = 3;

  return (
    <div className="mx-auto w-11/12">
      <div className="mt-5 flex items-center justify-center">
        <p className="text-center text-5xl font-bold text-acm-gray-500 md:text-6xl">
          FEATURED PROJECTS
        </p>
      </div>
      <div className="mx-10 mt-10 font-bold text-acm-gray-500">
        <p className="pb-3 text-center text-4xl md:text-left">ACM SPARK</p>
        <div className="grid grid-cols-1 gap-8 text-lg md:grid-cols-3">
          <ProjectCard
            project="PHI ALPHA DELTA"
            image={Spark1}
            link="/"
            index={index1}
          />
          <ProjectCard
            project="AVIAT’R"
            image={Spark2}
            link="/"
            index={index2}
          />
          <ProjectCard project="SAF" image={Spark3} link="/" index={index3} />
        </div>
        <Link
          href="/"
          className="mb-8 mt-2 flex text-lg md:justify-end md:text-2xl"
        >
          View All Spark Projects →
        </Link>
        <p className="pb-3 text-center text-4xl md:text-left">ACM CREATE</p>
        <div className="grid grid-cols-1 gap-8 text-lg md:grid-cols-3">
          <ProjectCard project="ACM" image={Create1} link="/" index={index1} />
          <ProjectCard project="WITL" image={Create2} link="/" index={index2} />
          <ProjectCard project="NSU" image={Create3} link="/" index={index3} />
        </div>
        <Link
          href="/"
          className="mb-8 mt-2 flex text-lg md:justify-end md:text-2xl"
        >
          View All Create Projects →
        </Link>
        <p className="pb-3 text-center text-4xl md:text-left">ACM FORGE</p>
        <div className="grid grid-cols-1 gap-8 text-lg md:grid-cols-3">
          <ProjectCard
            project="WIZARD CHESS"
            image={Forge1}
            link="/"
            index={index1}
          />
          <ProjectCard
            project="DRONES"
            image={Forge2}
            link="/"
            index={index2}
          />
          <ProjectCard project="ARMS" image={Forge3} link="/" index={index3} />
        </div>
        <Link
          href="/"
          className="mb-8 mt-2 flex text-lg md:justify-end md:text-2xl"
        >
          View All Forge Projects →
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProjects;
