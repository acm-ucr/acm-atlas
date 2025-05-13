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
        <p className="mt-16 flex justify-center text-3xl font-semibold text-acm-gray-500 md:mt-0 md:pb-6 md:text-5xl">
          JOIN NOW
        </p>
        <div className="flex justify-center py-4 md:py-0">
          <Link
            href="/"
            className={`rounded-lg p-2 text-2xl md:mt-0 md:px-10 md:py-4 md:text-4xl ${textColor} ${backgroundColor}`}
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
