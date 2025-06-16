import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
interface BoardProps {
  name: string;
  position: string;
  color: string;
  shadow: string;
  photo: StaticImageData;
  linkedin: string;
  github: string;
}

const Card = ({
  name,
  position,
  color,
  shadow,
  photo,
  linkedin,
  github,
}: BoardProps) => {
  return (
    <div className="mx-auto flex w-11/12 flex-col items-center text-center md:w-7/12">
      <p className={`${color} pb-4 pt-8 text-xl font-bold md:pt-4`}>
        {position}
      </p>
      <div>
        <Image
          className={`${shadow} w-[40vw] rounded-full md:w-[30vw]`}
          src={photo}
          alt="photo"
        />
      </div>
      <p className="pb-2 pt-6 text-lg font-bold md:text-xl">{name}</p>
      <div className={`${color} flex flex-row items-center gap-4`}>
        <Link href={linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl hover:scale-105 hover:opacity-75 md:text-5xl" />
        </Link>
        <Link href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-3xl hover:scale-105 hover:opacity-75 md:text-5xl" />
        </Link>
      </div>
    </div>
  );
};

export default Card;
