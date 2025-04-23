import Image from "next/image";
import Keys from "@/public/home/keys.svg";
import blue from "@/public/home/blueCircle.svg";
import yellow from "@/public/home/yellowCircle.svg";
const Landing = () => {
  return (
    <div className="text-acm-gray-500 mt-10 flex flex-col items-center justify-center text-6xl font-semibold">
      <p>ASSOCIATION OF</p>
      <p>COMPUTING MACHINERY</p>
      <Image src={Keys} alt="Keys" className="mt-5" />
      <div>
        <Image src={blue} alt="bue" />
        <Image src={yellow} alt="yellow" />
      </div>
    </div>
  );
};

export default Landing;
