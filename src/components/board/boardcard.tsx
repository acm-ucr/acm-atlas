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

const boardcard = ({
  name,
  position,
  color,
  shadow,
  photo,
  linkedin,
  github,
}: BoardProps) => {
  return (
    <div className="flex w-1/6 flex-col items-center text-center">
      <p className={`${color} py-2 text-2xl font-bold`}>{position}</p>
      <div>
        <Image
          className={`${shadow} rounded-full shadow-xl`}
          src={photo}
          alt="photo"
        />
      </div>
      <p className="py-2 text-xl font-bold">{name}</p>
      <div className={`${color} flex flex-row items-center gap-4`}>
        <Link href={linkedin}>
          <FaLinkedin size={50} />
        </Link>
        <Link href={github}>
          <FaGithub size={50} />
        </Link>
      </div>
    </div>
  );
};

export default boardcard;
