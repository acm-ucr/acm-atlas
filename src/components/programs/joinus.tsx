import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";

interface ProgramProps {
  textColor: string;
  backgroundColor: string;
  image: StaticImageData;
}

const Joinus = ({ textColor, backgroundColor, image }: ProgramProps) => {
  return (
    <div className="mx-auto grid w-10/12 items-center md:grid-cols-2">
      <div className="flex flex-col">
        <p className="mt-10 flex justify-center pb-6 text-5xl font-semibold text-acm-gray-500 md:mt-0">
          JOIN NOW
        </p>
        <div className="flex justify-center py-8 md:py-0">
          <Link
            href="/"
            className={`rounded-lg p-4 text-4xl md:px-10 md:py-4 ${textColor} ${backgroundColor}`}
          >
            Apply Here!
          </Link>
        </div>
      </div>
      <Image src={image} alt="Join Now" className="rounded-2xl md:w-10/12" />
    </div>
  );
};

export default Joinus;
