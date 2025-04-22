import Image from "next/image";
import BitBytes from "@/public/bitbytes.svg";

const Header = () => {
  return (
    <div className="text-acm-gray-500 relative p-10 text-2xl font-semibold">
      <div className="text-center">
        <p className="flex justify-center p-7 text-5xl font-bold">BIT/BYTES</p>
        <p className="pb-7">Mentorship</p>
      </div>
      <p className="ml-[15%] w-3/8">
        ACM Bit/Byte is a opportunity for students to receive mentorship and
        also give mentorship for academic, professional, and life advice!
      </p>
      <Image className="absolute top-15 right-90" src={BitBytes} alt="Spark" />
    </div>
  );
};

export default Header;
