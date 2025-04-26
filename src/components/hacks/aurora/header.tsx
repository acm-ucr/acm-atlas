import Image from "next/image";
import auroraIcon from "@/public/Aurora/auroraicon.webp";

const Header = () => {
  return (
    <div className="flex flex-col justify-center">
      <p className="text-acm-gray-500 flex justify-center pt-22 pb-5 text-7xl font-bold">
        AURORA
      </p>
      <p className="text-acm-gray-500 flex justify-center text-3xl font-medium">
        Software Engineering
      </p>

      <div className="flex justify-center pt-10">
        <p className="text-acm-gray-500 w-[42%] translate-x-[-38%] pb-35 text-left text-[28px] leading-11 font-semibold">
          Aurora is not a 10 week program that focuses on developing wireframes
          on Figma for Spark Projects
        </p>
        <div className="absolute top-[37%] right-[20%]">
          <Image src={auroraIcon} alt="Aurora Logo" width={220} height={220} />
        </div>
      </div>
    </div>
  );
};

export default Header;
