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
    <div className="flex flex-col place-items-center justify-center">
      <p className={` ${color ? color : "text-acm-blue-500"}`}>{position}</p>
      <p className="py-2 text-acm-blue-900">{name}</p>
      <div className="flex gap-2">
        <Link href={linkedin}>
          <FaLinkedin
            className={` ${color ? color : "text-acm-blue-500"} text-4xl`}
          />
        </Link>
        <Link href={github}>
          <FaGithub
            className={` ${color ? color : "text-acm-blue-500"} text-4xl`}
          />
        </Link>
      </div>
    </div>
  );
};

export default Card;
