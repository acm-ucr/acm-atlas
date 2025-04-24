import Image from "next/image";
import Spark from "@/public/logos/spark.svg";
import yellowEllipse from "@/public/ellipses/yellowEllipse.svg";

const Header = () => {
  return (
    <div className="text-acm-gray-500 relative pb-10 text-2xl font-semibold">
      <Image className="absolute" src={yellowEllipse} alt="yellow" />
      <div className="py-5 text-center">
        <p className="flex justify-center p-5 text-5xl font-bold">SPARK</p>
        <p className="pb-5">Web Development</p>
      </div>
      <p className="ml-[15%] w-3/8">
        ACM Spark is a 10 week program that focuses on static front-end web
        development for campus organizations / companies.
      </p>
      <Image
        className="absolute top-[20%] right-[25%]"
        src={Spark}
        alt="Spark"
      />
    </div>
  );
};

export default Header;
