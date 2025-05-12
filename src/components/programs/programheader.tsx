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
    <div className="relative pb-10 text-2xl font-semibold text-acm-gray-500">
      {ellipse && <Image className="absolute" src={ellipse} alt="ellipse" />}
      <div className="py-5 text-center">
        <p className="flex justify-center p-5 text-6xl font-bold">{header}</p>
        <p className="pb-5">{subtitle}</p>
      </div>
      <p className="ml-[8%] mt-60 w-10/12 text-center leading-relaxed sm:ml-[15%] sm:mt-0 sm:w-5/12 sm:pt-0 sm:text-left">
        {text}
      </p>
      <Image
        className="absolute right-[26%] top-[28%] sm:right-[10%] sm:top-[40%] lg:right-[20%] lg:top-[30%]"
        src={logo}
        alt="logo"
      />
    </div>
  );
};

export default ProgramHeader;
