import Image, { StaticImageData } from "next/image";
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
      className="relative my-5 flex flex-row items-center overflow-hidden rounded-lg p-4"
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
          className="sm:h-[120px] md:h-[130px] lg:h-[200px] xl:h-[280px]"
        />
        <div className="mt-4 w-full rounded-4xl bg-white p-2">{project}</div>
      </div>
    </Link>
  );
};

export default ProjectCard;
