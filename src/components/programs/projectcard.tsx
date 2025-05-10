import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface ProjectCardProps {
  photo: StaticImageData;
  name: string;
  github: string;
  website: string;
}

const ProjectCard = ({ photo, name, github, website }: ProjectCardProps) => {
  return (
    <div className="flex w-[29vw] flex-col justify-center rounded-[2vw] border-4 border-white px-[1.6vw] py-[2vw] shadow-2xl">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={photo}
          alt={name}
          fill
          className="rounded-[2vw] object-cover"
        />
      </div>

      <div className="mt-4 flex items-center justify-between text-left">
        <div className="w-[19vw] truncate text-[2.3vw] font-light">{name}</div>
        <div className="flex items-center gap-2 text-[1.6vw]">
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[2.2vw]"
            >
              <FaGithub />
            </Link>
          )}
          {website && (
            <Link
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[2.2vw]"
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
