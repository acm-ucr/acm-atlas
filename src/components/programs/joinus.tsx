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
    <div className="mx-auto grid w-10/12 grid-cols-2 items-center">
      <div className="flex flex-col">
        <p className="flex justify-center pb-6 text-5xl font-semibold text-acm-gray-500">
          JOIN NOW
        </p>
        <div className="flex justify-center">
          <Link
            href="/"
            className={`rounded-lg px-10 py-4 text-4xl ${textColor} ${backgroundColor}`}
          >
            Apply Here!
          </Link>
        </div>
      </div>
      <Image src={image} alt="Join Now" className="w-10/12 rounded-2xl" />
    </div>
  );
};

export default Joinus;
