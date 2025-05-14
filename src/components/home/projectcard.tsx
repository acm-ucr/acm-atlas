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
      <div className="absolute bottom-[1.3vh] w-11/12 rounded-3xl bg-white p-3 pl-5 text-xl font-semibold md:bottom-[2vh] md:text-2xl lg:bottom-[1.7vh]">
        {project}
      </div>
    </Link>
  );
};

export default ProjectCard;
