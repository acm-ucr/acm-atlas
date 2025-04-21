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
    <div className="flex w-full flex-col rounded-3xl border-4 border-white p-4 shadow-2xl">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={photo}
          alt={name}
          fill
          className="rounded-3xl object-cover"
        />
      </div>

      <div className="mt-4 flex items-center justify-between text-left">
        <div className="text-2xl font-light">{name}</div>
        <div className="flex items-center gap-2 text-2xl">
          {github && (
            <Link href={github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </Link>
          )}
          {website && (
            <Link href={website} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
