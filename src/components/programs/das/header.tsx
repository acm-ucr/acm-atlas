import Image from "next/image";
import Das from "@/public/das.svg";

const Header = () => {
  return (
    <div className="text-acm-gray-500 relative p-10 text-2xl font-semibold">
      <div className="text-center">
        <p className="flex justify-center p-7 text-5xl font-bold">DAS</p>
        <p className="pb-7">Data Science, AI, Statistics</p>
      </div>
      <p className="ml-[15%] w-3/8">
        ACM DAS is a 10-week program that focuses on developing Data Science
        skills working with Big Data, Machine Learning, and Computational Stats
        projects.{" "}
      </p>
      <Image className="absolute top-15 right-90" src={Das} alt="Spark" />
    </div>
  );
};

export default Header;
