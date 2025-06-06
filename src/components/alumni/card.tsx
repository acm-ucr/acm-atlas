import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface AlumniProps {
  name: string;
  position: string;
  linkedin: string;
  github: string;
  color?: string;
}

const Card = ({ name, position, linkedin, github, color }: AlumniProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <p className={` ${color ? color : "text-acm-blue-500"} font-bold`}>
        {position}
      </p>
      <p className="py-2 font-semibold text-acm-blue-900">{name}</p>
      <div className="flex gap-2">
        {linkedin && (
          <Link href={linkedin}>
            <FaLinkedin
              className={` ${color ? color : "text-acm-blue-500"} text-4xl hover:scale-105 hover:opacity-75`}
            />
          </Link>
        )}
        {github && (
          <Link href={github}>
            <FaGithub
              className={` ${color ? color : "text-acm-blue-500"} text-4xl hover:scale-105 hover:opacity-75`}
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
