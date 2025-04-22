import Image from "next/image";
import Spark from "@/public/acmspark.svg";

const Header = () => {
  return (
    <div className="text-acm-gray-500 relative p-10 text-2xl font-semibold">
      <div className="text-center">
        <p className="flex justify-center p-7 text-5xl font-bold">SPARK</p>
        <p className="pb-7">Web Development</p>
      </div>
      <p className="ml-[15%] w-3/8">
        ACM Spark is a 10 week program that focuses on static front-end web
        development for campus organizations / companies.
      </p>
      <Image className="absolute top-15 right-90" src={Spark} alt="Spark" />
    </div>
  );
};

export default Header;
