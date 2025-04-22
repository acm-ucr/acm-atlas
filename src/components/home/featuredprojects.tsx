import Link from "next/link";
import ProjectCard from "../home/ProjectCard";
import Spark1 from "@/public/Spark/pad.webp";
import Spark2 from "@/public/Spark/aviatr.webp";
import Spark3 from "@/public/Spark/saf.webp";
import Create1 from "@/public/Create/acmhydra.webp";
import Create2 from "@/public/Create/witl.webp";
import Create3 from "@/public/Create/3d.webp";

const FeaturedProjects = () => {
  return (
    <div>
      <div className="mt-5 flex items-center justify-center">
        <p className="text-acm-gray-500 text-6xl font-bold">
          FEATURED PROJECTS
        </p>
      </div>
      <div className="text-acm-gray-500 mx-10 mt-10 font-bold">
        <p className="text-3xl">ACM SPARK</p>
        <div className="grid grid-cols-3 gap-4 text-lg">
          <ProjectCard project="PHI ALPHA DELTA" image={Spark1} link="/" />
          <ProjectCard project="AVIAT’R" image={Spark2} link="/" />
          <ProjectCard project="SAF" image={Spark3} link="/" />
        </div>
        <Link href="/" className="flex justify-end text-lg">
          View All Spark Projects →
        </Link>
        <p className="text-3xl">ACM CREATE</p>
        <div className="grid grid-cols-3 gap-4 text-lg">
          <ProjectCard project="ACM" image={Create1} link="/" />
          <ProjectCard project="WITL" image={Create2} link="/" />
          <ProjectCard project="NSU" image={Create3} link="/" />
        </div>
        <Link href="/" className="flex justify-end text-lg">
          View All Create Projects →
        </Link>
        <p className="text-3xl">ACM FORGE</p>
        <div className="grid grid-cols-3 gap-4 text-lg">
          <ProjectCard project="PHI ALPHA DELTA" image={Spark1} link="/" />
          <ProjectCard project="AVIAT’R" image={Spark2} link="/" />
          <ProjectCard project="SAF" image={Spark3} link="/" />
        </div>
        <Link href="/" className="mb-5 flex justify-end text-lg">
          View All Forge Projects →
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProjects;
