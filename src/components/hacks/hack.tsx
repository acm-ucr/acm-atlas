import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import StatItem from "../statitem";
interface HackProps {
  name: string;
  website: string;
  logo: StaticImageData;
  description: string;
}

const Hack = ({ name, website, logo, description }: HackProps) => {
  const stats = [
    { end: 500, label: "Hackers", duration: 2 },
    { end: 2500, label: "Projects", duration: 2 },
    { end: 1000, label: "In Prizes", duration: 2 },
    { end: 24, label: "Hours", duration: 2 },
  ];
  return (
    <div className="text-acm-gray-200 relative text-center text-2xl font-semibold">
      <p className="py-5 text-5xl font-bold">{name}</p>
      <p className="text-2xl font-semibold">Hackathon</p>
      <Image src={logo} alt="logo" className="absolute right-[20%]" />
      <p className="ml-[20%] w-1/3 py-10 text-left">{description}</p>
      <div className="mx-[20%] my-10 flex justify-between">
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            end={stat.end}
            label={stat.label}
            duration={stat.duration}
          />
        ))}
      </div>
      <Link
        href={website}
        className="bg-acm-green-500 text-acm-gray-100 mx-auto flex w-1/6 items-center justify-center rounded-lg py-2 text-xl font-semibold"
      >
        Visit our Website!
      </Link>
      <div className="mx-[20%] text-left">
        <p className="py-5 text-3xl font-bold">WHAT WE DO</p>
        <p>
          Rose Hack’s mission is to encourage individuals from underrepresented
          groups in STEM to gain experience, create strong networks, and build
          amazing projects through their shared passions in Science and
          Technology.
        </p>
      </div>
    </div>
  );
};

export default Hack;
