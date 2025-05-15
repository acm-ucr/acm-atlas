import ProjectCard from "../projectcard";
import spark from "@/data/projects/spark";

const ProjectGrid = () => {
  return (
    <div className="mx-auto grid w-11/12 grid-cols-1 gap-y-7 md:grid-cols-3 md:gap-x-6 md:gap-y-10">
      {spark.map(({ photo, name, github, website }, index) => (
        <ProjectCard
          key={index}
          photo={photo}
          name={name}
          github={github}
          website={website}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
