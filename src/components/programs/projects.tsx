import Pagination from "@/components/programs/pagination";
import Search from "@/components/programs/search";
import ProjectsGrid from "@/components/programs/projectgrid";
import { Suspense } from "react";
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

const projects = ({ projects }: ProjectGridProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="my-5 text-3xl font-semibold text-acm-gray-500">
        PROJECT GALLERY
      </p>
      <Suspense>
        <Search />
        <ProjectsGrid projects={projects} />
        <Pagination projects={projects} />
      </Suspense>
    </div>
  );
};

export default projects;
