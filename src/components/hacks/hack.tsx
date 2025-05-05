import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import StatItem from "../statitem";
interface HackProps {
  name: string;
  website: string;
  logo: StaticImageData;
  description: string;
  description2: string;
  subtitle: string;
  stats: {
    end: number;
    label: string;
  }[];
}

const Hack = ({
  name,
  website,
  logo,
  description,
  description2,
  subtitle,
  stats,
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
        className="mx-auto flex w-1/6 items-center justify-center rounded-lg bg-acm-green-500 py-2 text-xl font-semibold text-acm-gray-100"
      >
        Visit our Website!
      </Link>
      <div className="mx-[20%] text-left">
        <p className="py-5 text-3xl font-bold">WHAT WE DO</p>
        <p>{description2}</p>
      </div>
    </div>
  );
};

export default Hack;
