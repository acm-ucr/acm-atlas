import Pagination from "./pagination";
import Search from "./search";
import ProjectsGrid from "./projectgrid";
import { Suspense } from "react";
// interface ProjectsProps {
//     data: ;
// }
//Implement so that this component takes in data then
// creates a pagination with a search bar
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
