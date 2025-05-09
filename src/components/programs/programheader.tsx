import Image from "next/image";
import { StaticImageData } from "next/image";

interface HeaderProps {
  header: string;
  subtitle: string;
  text: string;
  logo: StaticImageData;
  ellipse: StaticImageData;
}

const ProgramHeader = ({
  header,
  subtitle,
  text,
  logo,
  ellipse,
}: HeaderProps) => {
  return (
    <div className="relative pb-10 text-2xl font-semibold text-acm-gray-500">
      <Image className="absolute" src={ellipse} alt="green" />
      <div className="py-5 text-center">
        <p className="flex justify-center p-5 text-5xl font-bold">{header}</p>
        <p className="pb-5">{subtitle}</p>
      </div>
      <p className="ml-[15%] w-5/12">{text}</p>
      <Image className="absolute right-[25%] top-[20%]" src={logo} alt="logo" />
    </div>
  );
};

export default ProgramHeader;
