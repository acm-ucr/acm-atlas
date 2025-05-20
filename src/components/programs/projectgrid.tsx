"use client";
import { useSearchParams } from "next/navigation";
import ProjectCard from "@/components/programs/projectcard";
import { StaticImageData } from "next/image";

interface Project {
  photo: StaticImageData;
  name: string;
  github?: string;
  website: string;
}

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid = ({ projects = [] }: ProjectGridProps) => {
  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get("page") ?? "0");
  const search = searchParams.get("search") ?? "";

  const cards = projects
    .filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()))
    .slice(6 * page, 6 * page + 6);

  return (
    <div className="mx-auto grid w-11/12 grid-cols-3 gap-x-6 gap-y-10">
      {cards.map(({ photo, name, github, website }, index) => (
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
