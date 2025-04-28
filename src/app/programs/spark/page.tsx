import Header from "@/components/programs/spark/header";
import Joinus from "@/components/programs/joinus";
import Spark1 from "@/public/spark/spark1.webp";
import ProjectGrid from "@/components/programs/spark/projectgrid";
import spark from "@/data/teckstacks/spark";
import {
  SiEslint,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import Carousel from "@/components/carousel";

const icons = {
  SiEslint,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
};

const Page = () => {
  return (
    <div>
      <Header />
      <Joinus
        textColor="text-acm-gray-500"
        backgroundColor="bg-acm-yellow-200"
        image={Spark1}
      />
      <Carousel data={spark} icons={icons} />
      <ProjectGrid />
    </div>
  );
};

export default Page;
