  import { StaticImageData } from "next/image";
  import Image from "next/image";
  import Link from "next/link";
  interface HackProps {
    name: string;
    website: string;
    logo: StaticImageData;
    description: string;
  }

  const Hack = ({ name, website, logo, description }: HackProps) => {
    return (
      <div className="text-2xl font-semibold text-acm-gray-200 text-center relative">
        <p className="text-5xl font-bold py-5">{name}</p>
        <p className="text-2xl font-semibold">Hackathon</p>
        <Image src={logo} alt="logo" className="absolute right-[20%]" />
        <p className="ml-[20%] w-1/3 text-left py-10">{description}</p>
        <Link
          href={website}
          className= "mx-auto bg-acm-green-500 text-acm-gray-100 flex w-1/6 items-center justify-center rounded-lg py-2 text-xl font-semibold">
          Visit our Website!
        </Link>
        <div className="text-left mx-[20%]">
          <p className="font-bold text-3xl py-5">WHAT WE DO</p>
          <p>Rose Hack’s mission is to encourage individuals from underrepresented groups in STEM to gain experience, create strong networks, and build amazing projects through their shared passions in Science and Technology.</p>
        </div>
      </div>
    );
  };

  export default Hack;
