import Image from "next/image";
import Forge from "@/public/forge.svg";

const Header = () => {
  return (
    <div className="text-acm-gray-500 relative p-10 text-2xl font-semibold">
      <div className="text-center">
        <p className="flex justify-center p-7 text-5xl font-bold">FORGE</p>
        <p className="pb-7">Robotics</p>
      </div>
      <p className="ml-[15%] w-3/8">
        ACM Forge is a 10-week, quarter-long program that aims to develop a
        project combining software, electrical, and mechanical engineering
        aspects.
      </p>
      <Image className="absolute top-15 right-90" src={Forge} alt="Spark" />
    </div>
  );
};

export default Header;
