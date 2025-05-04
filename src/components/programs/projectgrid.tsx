"use client";
import { useSearchParams } from "next/navigation";
import ProjectCard from "./projectcard";
import spark from "@/data/projects/spark";

const ProjectGrid = () => {
  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get("page") ?? "0");
  const search = searchParams.get("search") ?? "";

  const cards = spark
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
