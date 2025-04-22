import Image from "next/image";
import Keys from "@/public/Home/keys.svg";
const Header = () => {
  return (
    <div className="text-acm-gray-500 mt-10 flex flex-col items-center justify-center text-6xl font-semibold">
      <p>ASSOCIATION OF</p>
      <p>COMPUTING MACHINERY</p>
      <Image src={Keys} alt="Keys" className="mt-5" />
    </div>
  );
};

export default Header;
