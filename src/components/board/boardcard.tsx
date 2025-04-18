import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";
interface BoardProps {
  position: string;
  shadow: string;
  photo: StaticImageData;
  name: string;
  linkedin: string;
  github: string;
  color: string;
}

const boardcard = ({
  position,
  shadow,
  photo,
  name,
  linkedin,
  github,
  color,
}: BoardProps) => {
  return (
    <div className="flex w-1/6 flex-col text-center">
      <p className={`${color} py-2 text-2xl font-bold`}>{position}</p>
      <div>
        <Image
          className={`${shadow} flex items-center justify-center rounded-full shadow-xl`}
          src={photo}
          alt="photo"
        />
      </div>
      <p className="py-2 text-xl font-bold">{name}</p>
      <div className={`${color}`}>
        <Link className="" href={linkedin}></Link>
        <Link className="" href={github}></Link>
      </div>
    </div>
  );
};

export default boardcard;
