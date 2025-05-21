"use client";
import { useSearchParams } from "next/navigation";
import ProjectCard from "@/components/programs/projectcard";
import { StaticImageData } from "next/image";

interface Project {
  photo: StaticImageData;
  name: string;
  keywords?: string[];
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
    .filter(({ name, keywords }) => {
      const searchLower = search.toLowerCase();
      const nameMatch = name.toLowerCase().includes(searchLower);
      const keywordMatch = keywords?.some((kw) =>
        kw.toLowerCase().includes(searchLower),
      );
      return nameMatch || keywordMatch;
    })
    .slice(6 * page, 6 * page + 6);

  return (
    <div className="mx-auto grid w-11/12 grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3">
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
