import { StaticImageData } from "next/image";
import Image from "next/image";
interface HackProps {
  name: string;
  website: string;
  logo: StaticImageData;
}

const Hack = ({ name, website, logo }: HackProps) => {
  return (
    <div>
      <p>{name}</p>
      <p>{website}</p>
      <Image src={logo} alt="logo" />
    </div>
  );
};

export default Hack;
