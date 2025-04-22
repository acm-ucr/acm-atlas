import Image, { StaticImageData } from "next/image";
import CutOut from "@/public/Home/CutOut.png";
import Link from "next/link";

interface ProjectCardProps {
  project: string;
  image: StaticImageData;
  link: string;
}

const ProjectCard = ({ project, image, link }: ProjectCardProps) => {
  return (
    <Link
      href={link}
      className="relative my-5 flex overflow-hidden rounded-lg p-4"
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div className="bg-acm-gray-100 absolute inset-0 opacity-50 backdrop-blur-sm"></div>
      <div className="z-10">
        <Image
          src={image}
          alt={`${project} Image`}
          className="aspect-[20/15] scale-x-130 scale-y-140 lg:p-2"
        />
        <Image
          src={CutOut}
          alt="CutOut"
          layout="fill"
          className="absolute inset-0 scale-y-105"
        />
        <div className="z-20 mt-5 w-full translate-y-3 rounded-4xl bg-white p-2 lg:-translate-y-3">
          {project}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
