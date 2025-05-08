import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import StatItem from "../statitem";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { TbMailFilled } from "react-icons/tb";

interface HackProps {
  name: string;
  website: string;
  logo: StaticImageData;
  description: string;
  description2: string;
  subtitle: string;
  bgColor: string;
  devposts: {
    year: string;
    link: string;
  }[];
  stats: {
    end: number;
    label: string;
  }[];
  instagram: string;
  email: string;
}

const Hack = ({
  name,
  website,
  logo,
  description,
  description2,
  subtitle,
  // bgColor,
  devposts,
  stats,
  // instagram,
  // email,
}: HackProps) => {
  return (
    <div className="relative text-center text-2xl font-semibold text-acm-gray-200">
      <p className="py-5 text-5xl font-bold">{name}</p>
      <p className="text-2xl font-semibold">{subtitle}</p>
      <Image src={logo} alt="logo" className="absolute right-[20%]" />
      <p className="ml-[20%] w-1/3 py-10 text-left">{description}</p>
      <div className="flex justify-around py-10">
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            end={stat.end}
            label={stat.label}
            duration={2}
          />
        ))}
      </div>
      <Link
        href={website}
        target="_blank"
        className="bg-acm-green-500 mx-auto flex w-1/6 items-center justify-center rounded-lg py-2 text-xl font-semibold text-acm-gray-100"
      >
        Visit our Website!
      </Link>
      <div className="mx-[20%] text-left">
        <p className="py-5 text-3xl font-bold">WHAT WE DO</p>
        <p>{description2}</p>
      </div>
      <div className="mt-10 text-3xl font-bold">PREVIOUS DEVPOSTS</div>
      <div className="mt-10 grid grid-cols-3 gap-3">
        {devposts.map(({ year, link }) => (
          <Link
            key={year}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-1/3 rounded-lg bg-acm-green-400 p-3 font-medium text-white">
              {year}
            </button>
          </Link>
        ))}
      </div>
      <div className="mt-10 text-3xl font-bold">CONTACT US</div>
      <div className="mt-4 flex justify-center gap-6">
        <Link href="mailto:${email}">
          <TbMailFilled size={64} />
        </Link>
        <Link href="${instagram}" target="_blank" rel="noopener noreferrer">
          <BiLogoInstagramAlt size={64} />
        </Link>
      </div>
    </div>
  );
};

export default Hack;
