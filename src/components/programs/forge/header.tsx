import Image from "next/image";
import Forge from "@/public/logos/forge.svg";

const Header = () => {
  return (
    <div className="text-acm-gray-500 relative overflow-hidden p-10 text-2xl font-semibold">
      <div className="bg-acm-gray-400 absolute top-0 z-0 h-[60%] w-[30%] rounded-full opacity-50 blur-3xl" />
      <div className="text-center">
        <p className="flex justify-center p-5 text-5xl font-bold">FORGE</p>
        <p className="pb-5">Robotics</p>
      </div>
      <p className="ml-[15%] w-3/8">
        ACM Forge is a 10-week, quarter-long program that aims to develop a
        project combining software, electrical, and mechanical engineering
        aspects.
      </p>
      <Image
        className="absolute top-[20%] right-[25%]"
        src={Forge}
        alt="Forge"
      />
    </div>
  );
};

export default Header;
