import Image from "next/image";
import BitBytes from "@/public/logos/bitbytes.svg";

const Header = () => {
  return (
    <div className="text-acm-gray-500 relative overflow-hidden p-10 text-2xl font-semibold">
      <div className="bg-acm-green-100 absolute top-0 z-0 h-[60%] w-[30%] rounded-full opacity-50 blur-3xl" />
      <div className="text-center">
        <p className="flex justify-center p-5 text-5xl font-bold">BIT/BYTES</p>
        <p className="pb-5">Mentorship</p>
      </div>
      <p className="ml-[15%] w-3/8">
        ACM Bit/Byte is a opportunity for students to receive mentorship and
        also give mentorship for academic, professional, and life advice!
      </p>
      <Image
        className="absolute top-[20%] right-[25%]"
        src={BitBytes}
        alt="BitBytes"
      />
    </div>
  );
};

export default Header;
