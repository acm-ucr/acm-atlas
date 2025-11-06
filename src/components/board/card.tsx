import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
interface BoardProps {
  name: string;
  position: string;
  color: string;
  shadow: string;
  photo: StaticImageData;
  linkedin: string;
  github?: string;
  email?: string;
}

const Card = ({
  name,
  position,
  color,
  shadow,
  photo,
  linkedin,
  github,
  email,
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
      <p className="pb-2 pt-6 text-lg font-bold">{name}</p>
      <div className={`${color} flex flex-row items-center gap-4 pb-8 md:pb-0`}>
        <Link href={linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl hover:scale-105 hover:opacity-75" />
        </Link>
        {github && (
          <Link href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl hover:scale-105 hover:opacity-75" />
          </Link>
        )}
        {email && (
          <Link
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail className="text-3xl hover:scale-105 hover:opacity-75" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
