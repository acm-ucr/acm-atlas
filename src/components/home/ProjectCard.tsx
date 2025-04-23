import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: string;
  image: StaticImageData;
  link: string;
}

const ProjectCard = ({ project, image, link }: ProjectCardProps) => {
  return (
    <Link href={link} className="relative flex justify-center">
      <Image src={image} alt={`${project} Image`} />
      <div className="absolute bottom-0 w-11/12 -translate-y-4 rounded-3xl bg-white p-3 pl-5 text-2xl font-semibold">
        {project}
      </div>
    </Link>
  );
};

export default ProjectCard;
