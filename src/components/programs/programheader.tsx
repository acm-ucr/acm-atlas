import Image from "next/image";
import { StaticImageData } from "next/image";

interface HeaderProps {
  header: string;
  subtitle: string;
  text: string;
  logo: StaticImageData;
  ellipse?: StaticImageData;
}

const ProgramHeader = ({
  header,
  subtitle,
  text,
  logo,
  ellipse,
}: HeaderProps) => {
  return (
    <div className="relative pb-44 text-2xl font-semibold text-acm-gray-500 md:pb-10">
      {ellipse && <Image className="absolute" src={ellipse} alt="ellipse" />}
      <div className="py-5 text-center">
        <p className="flex justify-center p-5 text-6xl font-bold">{header}</p>
        <p className="pb-5">{subtitle}</p>
      </div>
      <p className="ml-[13%] w-3/4 text-center md:ml-[15%] md:w-5/12">{text}</p>
      <Image
        className="absolute right-[30%] mt-5 w-5/12 md:right-[25%] md:top-[20%] md:mt-0 md:w-2/12"
        src={logo}
        alt="logo"
      />
    </div>
  );
};

export default ProgramHeader;
