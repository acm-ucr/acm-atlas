import Image from "next/image";
import BitByte from "@/public/logos/bitbyte.svg";
import greenEllipse from "@/public/ellipses/greenEllipse.svg";

const Header = () => {
  return (
    <div className="text-acm-gray-500 relative pb-10 text-2xl font-semibold">
      <Image className="absolute" src={greenEllipse} alt="green" />
      <div className="py-5 text-center">
        <p className="flex justify-center p-5 text-5xl font-bold">BIT/BYTE</p>
        <p className="pb-5">Mentorship</p>
      </div>
      <p className="ml-[15%] w-3/8">
        ACM Bit/Byte is a opportunity for students to receive mentorship and
        also give mentorship for academic, professional, and life advice!
      </p>
      <Image
        className="absolute top-[20%] right-[25%]"
        src={BitByte}
        alt="BitByte"
      />
    </div>
  );
};

export default Header;
