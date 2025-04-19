import ProjectCard from "./projectcard";
import { projectCardDF } from "@/data/projectcard";

const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-x-6 gap-y-10">
      {projectCardDF.map((project, index) => (
        <ProjectCard
          key={index}
          photo={project.photo}
          name={project.name}
          github={project.github}
          website={project.website}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
