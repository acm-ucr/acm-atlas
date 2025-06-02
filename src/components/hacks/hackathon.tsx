import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import StatItem from "../statitem";
import CarouselImages from "@/components/hacks/carousel";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { TbMailFilled } from "react-icons/tb";

interface HackathonProps {
  name: string;
  website: string;
  logo: StaticImageData;
  description: string;
  description2: string;
  subtitle: string;
  bgColor: string;
  textColor: string;
  carouselItems: {
    image: StaticImageData;
    alt: string;
  }[];
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

const Hackathon = ({
  name,
  website,
  logo,
  description,
  description2,
  subtitle,
  bgColor,
  textColor,
  carouselItems,
  devposts,
  stats,
  instagram,
  email,
}: HackathonProps) => {
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
            color="text-black"
            numberSize="text-4xl md:text-7xl"
            labelSize="text-xl md:text-3xl"
          />
        ))}
      </div>
      <Link
        href={website}
        target="_blank"
        className={`${bgColor} mx-auto flex w-1/6 items-center justify-center rounded-lg py-2 text-xl font-semibold text-acm-gray-100`}
      >
        Visit our Website!
      </Link>
      <p className="mx-[10%] py-5 text-left text-3xl font-bold">WHAT WE DO</p>
      <p className="mx-[10%] text-left">{description2}</p>
      <CarouselImages images={carouselItems} />
      <p className="mt-10 text-4xl font-bold">PREVIOUS DEVPOSTS</p>
      <div className="mx-auto mt-6 grid w-1/3 grid-cols-3 gap-4">
        {devposts.map(({ year, link }, idx) => (
          <Link
            key={idx}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full rounded-xl ${bgColor} px-10 py-4 font-medium text-white`}
          >
            {year}
          </Link>
        ))}
      </div>
      <p className="mt-10 text-4xl font-bold">CONTACT US</p>
      <div className="mt-4 flex justify-center gap-6">
        <Link
          href={`mailto:${email}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbMailFilled className={`${textColor}`} size={80} />
        </Link>
        <Link href={instagram} target="_blank" rel="noopener noreferrer">
          <BiLogoInstagramAlt className={`${textColor}`} size={80} />
        </Link>
      </div>
    </div>
  );
};

export default Hackathon;
