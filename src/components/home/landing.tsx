import Image from "next/image";
import Keys from "@/public/home/keys.svg";

import logo from "@/public/home/acmLogo.svg";

const Landing = () => {
  return (
    <div className="text-acm-gray-500 mt-10 flex flex-col items-center justify-center text-6xl font-semibold">
      <p>ASSOCIATION OF</p>
      <p>COMPUTING MACHINERY</p>
      <Image src={Keys} alt="Keys" className="mt-5" />

      <div className="grid w-1/2 grid-cols-2 items-center justify-items-center -space-x-4 rounded-lg bg-[#FCFCFC] p-20">
        <p className="text-acm-gray-500 relative text-xl">
          ACM at UCR is the largest student-run technical organization with a
          focus on Computer Science. Our goal is to help our members develop
          their technical and professional skills to help them in school and the
          tech industry. We aim to accomplish our goal by providing technical
          workshops, professional events, and many more opportunities for our
          members to excel.
        </p>

        <Image src={logo} alt="logo" className="" />
      </div>
    </div>
  );
};

export default Landing;
