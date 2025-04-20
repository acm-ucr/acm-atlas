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

const BoardCard = ({
  name,
  position,
  color,
  shadow,
  photo,
  linkedin,
  github,
}: BoardProps) => {
  return (
    <div className="mx-auto flex w-1/2 flex-col items-center text-center">
      <p className={`${color} py-4 text-2xl font-bold`}>{position}</p>
      <div>
        <Image className={`${shadow} rounded-full`} src={photo} alt="photo" />
      </div>
      <p className="pt-4 pb-2 text-xl font-bold">{name}</p>
      <div className={`${color} flex flex-row items-center gap-4`}>
        <Link href={linkedin}>
          <FaLinkedin className="text-5xl" />
        </Link>
        <Link href={github}>
          <FaGithub className="text-5xl" />
        </Link>
      </div>
    </div>
  );
};

export default BoardCard;
