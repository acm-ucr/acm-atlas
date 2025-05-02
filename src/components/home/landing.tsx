import Image from "next/image";
import Keys from "@/public/home/keys.svg";
import top from "@/public/home/top.svg";
import logo from "@/public/home/acmLogo.svg";

const Landing = () => {
  return (
    <div className="text-acm-gray-500 relative mt-10 flex flex-col items-center justify-center text-6xl font-semibold">
      <p>ASSOCIATION OF</p>
      <p>COMPUTING MACHINERY</p>
      <Image src={Keys} alt="Keys" className="mt-5" />
      <div className="z-999 mt-16 flex w-1/2 grid-cols-2 items-center justify-items-center -space-x-4 rounded-2xl bg-[#F6F6F6] p-20 opacity-100">
        <div className="absolute top-[54%] right-[68%] z-24 h-[25px] w-[25px] rounded-full bg-[#F6F6F6]"></div>
        <div className="absolute top-[54%] right-[70%] z-24 h-[25px] w-[25px] rounded-full bg-[#F6F6F6]"></div>
        <div className="absolute top-[54%] right-[72%] z-24 h-[25px] w-[25px] rounded-full bg-[#F6F6F6]"></div>
        <div className="">
          <Image
            src={top}
            alt=""
            className="absolute top-[51%] right-[25%] w-1/2 rounded-t-2xl py-1"
          />
        </div>
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

      <div className="bg-acm-yellow-200 absolute top-[60%] right-[75%] z-24 h-[450px] w-[450px] rounded-full opacity-90 blur-3xl"></div>
      <div className="bg-acm-blue-700 absolute top-[40%] right-[75%] z-24 h-[450px] w-[450px] rounded-full opacity-70 blur-3xl"></div>
      <div className="bg-acm-blue-700 absolute top-[40%] left-[75%] z-24 h-[400px] w-[420px] rounded-full opacity-70 blur-3xl"></div>
      <div className="bg-acm-blue-700 absolute top-[70%] left-[75%] z-24 h-[400px] w-[420px] rounded-full opacity-70 blur-3xl"></div>
      <div className="bg-acm-blue-700 absolute top-[15%] left-[30%] z-24 h-[300px] w-[300px] rounded-full opacity-50 blur-3xl"></div>
      <div className="bg-acm-green-100 absolute top-[15%] left-[50%] z-24 h-[300px] w-[300px] rounded-full opacity-50 blur-3xl"></div>
    </div>
  );
};
export default Landing;
