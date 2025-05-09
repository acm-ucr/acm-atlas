import Image from "next/image";
import Keys from "@/public/home/keys.svg";
import top from "@/public/home/top.svg";
import logo from "@/public/home/acmLogo.svg";

const Landing = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center text-6xl font-semibold text-acm-gray-500">
      <p>ASSOCIATION OF</p>
      <p>COMPUTING MACHINERY</p>
      <Image src={Keys} alt="Keys" className="my-16" />
      <div className="z-4 mb-10 mt-16 flex h-[600px] w-[1000px] items-center justify-items-center -space-x-4 rounded-2xl bg-transparent/40 px-20 opacity-100 backdrop-blur-3xl">
        <div className="absolute left-[3%] top-[6%] h-[25px] w-[25px] rounded-full bg-[#F6F6F6]"></div>
        <div className="absolute left-[8%] top-[6%] h-[25px] w-[25px] rounded-full bg-[#F6F6F6]"></div>
        <div className="absolute left-[13%] top-[6%] h-[25px] w-[25px] rounded-full bg-[#F6F6F6]"></div>
        <div>
          <Image
            src={top}
            alt="top"
            className="absolute left-0 top-0 rounded-t-2xl"
          />
        </div>
        <p className="relative text-3xl text-acm-gray-500">
          ACM at UCR is the largest student-run technical organization with a
          focus on Computer Science. Our goal is to help our members develop
          their technical and professional skills to help them in school and the
          tech industry. We aim to accomplish our goal by providing technical
          workshops, professional events, and many more opportunities for our
          members to excel.
        </p>
        <Image src={logo} alt="logo" className="ml-10 flex h-1/2 w-1/2" />
      </div>

      <div className="z-2 absolute right-[78%] top-[65%] h-[300px] w-[350px] rounded-full bg-acm-yellow-200 opacity-90 blur-3xl" />
      <div className="z-2 absolute right-[78%] top-[65%] h-[300px] w-[400px] rounded-full bg-acm-yellow-200 opacity-90 blur-3xl" />
      <div className="z-2 absolute right-[78%] top-[75%] h-[300px] w-[400px] rounded-full bg-acm-yellow-200 opacity-90 blur-3xl" />
      <div className="z-2 absolute right-[76%] top-[45%] h-[300px] w-[400px] rounded-full bg-acm-blue-700 opacity-70 blur-3xl" />
      <div className="z-2 absolute left-[76%] top-[70%] h-[300px] w-[400px] rounded-full bg-acm-blue-700 opacity-70 blur-3xl" />
      <div className="z-2 absolute left-[76%] top-[45%] h-[300px] w-[400px] rounded-full bg-acm-blue-700 opacity-70 blur-3xl" />
      <div className="z-2 absolute left-[30%] top-[25%] h-[300px] w-[500px] rounded-full bg-acm-blue-700 opacity-50 blur-3xl" />
      <div className="z-2 absolute right-[50%] top-[25%] h-[300px] w-[500px] rounded-full bg-acm-blue-700 opacity-50 blur-3xl" />
      <div className="z-2 absolute right-[25%] top-[25%] h-[300px] w-[500px] rounded-full bg-acm-blue-700 opacity-50 blur-3xl" />
      <div className="z-2 absolute right-[25%] top-[85%] h-[90px] w-[900px] overflow-hidden rounded-full bg-acm-blue-700 opacity-50 blur-3xl" />
      <div className="z-2 absolute left-0 top-[25%] h-[300px] w-[500px] rounded-full bg-acm-blue-700 opacity-50 blur-3xl" />
      <div className="z-2 absolute left-[50%] top-[25%] h-[300px] w-[400px] rounded-full bg-acm-green-300 opacity-50 blur-3xl" />
      <div className="z-2 absolute left-[70%] top-[25%] h-[300px] w-[400px] rounded-full bg-acm-green-300 opacity-50 blur-3xl" />
    </div>
  );
};
export default Landing;
