import Pagination from "./pagination";
import Search from "./search";
import ProjectsGrid from "./projectgrid";
import { Suspense } from "react";

const projects = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-acm-gray-500 my-5 text-3xl font-semibold">
        PROJECT GALLERY
      </p>
      <Suspense>
        <Search />
        <ProjectsGrid />
        <Pagination />
      </Suspense>
    </div>
  );
};

export default projects;
