import ProjectCard from "../home/ProjectCard";
import ProjectImage from "@/public/Spark/aviatr.webp";
import ProjectImage2 from "@/public/Spark/aag.webp";
import ProjectImage3 from "@/public/Spark/robosub.webp";

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
        <div className="grid grid-cols-3 gap-3 text-lg">
          <ProjectCard project="AVIAT’R" image={ProjectImage} link="/" />
          <ProjectCard project="AAG" image={ProjectImage2} link="/" />
          <ProjectCard project="ROBO SUB" image={ProjectImage3} link="/" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
