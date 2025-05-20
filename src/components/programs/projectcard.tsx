import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface ProjectCardProps {
  photo: StaticImageData;
  name: string;
  github?: string;
  website: string;
}

const ProjectCard = ({ photo, name, github, website }: ProjectCardProps) => {
  return (
    <div className="mx-auto flex w-11/12 flex-col justify-center rounded-3xl border-4 border-white px-4 py-5 shadow-2xl md:w-11/12 md:px-5 md:py-6">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={photo}
          alt={name}
          className="aspect-[16/9] w-fit rounded-3xl"
        />
      </div>

      <div className="mt-4 flex items-center justify-between text-left">
        <div className="w-8/12 truncate text-xl font-light md:text-3xl">
          {name}
        </div>
        <div className="flex items-center gap-2">
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-3xl"
            >
              <FaGithub />
            </Link>
          )}
          {website && (
            <Link
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-3xl"
            >
              <FaExternalLinkAlt />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
