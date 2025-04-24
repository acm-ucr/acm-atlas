import Image from "next/image";
import Das from "@/public/logos/das.svg";
import purpleEllipse from "@/public/ellipses/purpleEllipse.svg";

const Header = () => {
  return (
    <div className="text-acm-gray-500 relative pb-10 text-2xl font-semibold">
      <Image className="absolute" src={purpleEllipse} alt="purple" />
      <div className="py-5 text-center">
        <p className="flex justify-center text-5xl font-bold">DAS</p>
        <p className="pb-7">Data Science, AI, Statistics</p>
      </div>
      <p className="ml-[15%] w-3/8">
        ACM DAS is a 10-week program that focuses on developing Data Science
        skills working with Big Data, Machine Learning, and Computational Stats
        projects.{" "}
      </p>
      <Image className="absolute top-[20%] right-[25%]" src={Das} alt="Das" />
    </div>
  );
};

export default Header;
