import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: string;
  image: StaticImageData;
  link: string;
}

const ProjectCard = ({ project, image, link }: ProjectCardProps) => {
  return (
    <Link href={link}>
      <Image src={image} alt={`${project} Image`} />
      <div className="absolute w-100 translate-x-5 -translate-y-20 rounded-3xl bg-white p-3 pl-5 text-2xl font-semibold">
        {project}
      </div>
    </Link>
  );
};

export default ProjectCard;
