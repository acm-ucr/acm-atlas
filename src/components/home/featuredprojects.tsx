import Link from "next/link";
import ProjectCard from "../home/ProjectCard";
import Spark1 from "@/public/Home/Spark/pad.webp";
import Spark2 from "@/public/Home/Spark/aviatr.webp";
import Spark3 from "@/public/Home/Spark/saf.webp";
import Create1 from "@/public/Home/Create/acm.webp";
import Create2 from "@/public/Home/Create/witl.webp";
import Create3 from "@/public/Home/Create/nsu.webp";
import Forge1 from "@/public/Home/Forge/wzchess.webp";
import Forge2 from "@/public/Home/Forge/drone.webp";
import Forge3 from "@/public/Home/Forge/blank.webp";

const FeaturedProjects = () => {
  return (
    <div className="m-10">
      <div className="mt-5 flex items-center justify-center">
        <p className="text-acm-gray-500 text-6xl font-bold">
          FEATURED PROJECTS
        </p>
      </div>
      <div className="text-acm-gray-500 mx-10 mt-10 font-bold">
        <p className="pb-3 text-4xl">ACM SPARK</p>
        <div className="grid grid-cols-3 gap-8 text-lg">
          <ProjectCard project="PHI ALPHA DELTA" image={Spark1} link="/" />
          <ProjectCard project="AVIAT’R" image={Spark2} link="/" />
          <ProjectCard project="SAF" image={Spark3} link="/" />
        </div>
        <Link href="/" className="mt-3 flex justify-end text-2xl">
          View All Spark Projects →
        </Link>
        <p className="text-4xl">ACM CREATE</p>
        <div className="grid grid-cols-3 gap-8 text-lg">
          <ProjectCard project="ACM" image={Create1} link="/" />
          <ProjectCard project="WITL" image={Create2} link="/" />
          <ProjectCard project="NSU" image={Create3} link="/" />
        </div>
        <Link href="/" className="mt-3 flex justify-end text-2xl">
          View All Create Projects →
        </Link>
        <p className="text-4xl">ACM FORGE</p>
        <div className="grid grid-cols-3 gap-8 text-lg">
          <ProjectCard project="WIZARD CHESS" image={Forge1} link="/" />
          <ProjectCard project="DRONES" image={Forge2} link="/" />
          <ProjectCard project="ARMS" image={Forge3} link="/" />
        </div>
        <Link href="/" className="mt-3 mb-5 flex justify-end text-2xl">
          View All Forge Projects →
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProjects;
