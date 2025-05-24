import Image from "next/image";
import { StaticImageData } from "next/image";
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
    <div className="w-7/8 mx-auto flex flex-col items-center text-center md:w-1/2">
      <p className={`${color} py-4 text-xl font-bold md:text-2xl`}>
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
        <Link href={linkedin}>
          <FaLinkedin className="text-3xl hover:scale-105 hover:opacity-75 md:text-5xl" />
        </Link>
        <Link href={github}>
          <FaGithub className="text-3xl hover:scale-105 hover:opacity-75 md:text-5xl" />
        </Link>
      </div>
    </div>
  );
};

export default Card;
