import Image from "next/image";
import Forge from "@/public/logos/forge.svg";
import grayEllipse from "@/public/ellipses/grayEllipse.svg";

const Header = () => {
  return (
    <div className="text-acm-gray-500 relative pb-10 text-2xl font-semibold">
      <Image className="absolute" src={grayEllipse} alt="gray" />
      <div className="py-5 text-center">
        <p className="flex justify-center text-5xl font-bold">FORGE</p>
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
