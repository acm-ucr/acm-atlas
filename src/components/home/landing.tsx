import Image from "next/image";
import Keys from "@/public/home/keys.svg";
import top from "@/public/home/top.svg";
import logo from "@/public/home/acmLogo.svg";

const Landing = () => {
  return (
    <div className="text-acm-gray-500 relative mt-10 flex flex-col items-center justify-center text-6xl font-semibold">
      <p>ASSOCIATION OF</p>
      <p>COMPUTING MACHINERY</p>
      <Image src={Keys} alt="Keys" className="my-16" />
      <div className="z-999 mt-16 mb-10 flex h-[600px] w-[1000px] items-center justify-items-center -space-x-4 rounded-2xl bg-transparent/40 px-20 opacity-100 backdrop-blur-3xl">
        <div className="absolute top-[6%] left-[3%] z-24 h-[25px] w-[25px] rounded-full bg-[#F6F6F6]"></div>
        <div className="absolute top-[6%] left-[8%] z-24 h-[25px] w-[25px] rounded-full bg-[#F6F6F6]"></div>
        <div className="absolute top-[6%] left-[13%] z-24 h-[25px] w-[25px] rounded-full bg-[#F6F6F6]"></div>
        <div className="">
          <Image
            src={top}
            alt=""
            className="absolute top-0 left-0 rounded-t-2xl"
          />
        </div>
        <p className="text-acm-gray-500 relative text-3xl">
          ACM at UCR is the largest student-run technical organization with a
          focus on Computer Science. Our goal is to help our members develop
          their technical and professional skills to help them in school and the
          tech industry. We aim to accomplish our goal by providing technical
          workshops, professional events, and many more opportunities for our
          members to excel.
        </p>
        <Image
          src={logo}
          alt="logo"
          className="ml-10 flex h-[250px] w-[250px]"
        />
      </div>

      <div className="bg-acm-yellow-200 absolute top-[65%] right-[78%] z-24 h-[300px] w-[350px] rounded-full opacity-90 blur-3xl"></div>
      <div className="bg-acm-yellow-200 absolute top-[65%] right-[78%] z-24 h-[300px] w-[400px] rounded-full opacity-90 blur-3xl"></div>
      <div className="bg-acm-yellow-200 absolute top-[75%] right-[78%] z-24 h-[300px] w-[400px] rounded-full opacity-90 blur-3xl"></div>
      <div className="bg-acm-blue-700 absolute top-[45%] right-[76%] z-24 h-[300px] w-[400px] rounded-full opacity-70 blur-3xl"></div>
      <div className="bg-acm-blue-700 absolute top-[69%] left-[76%] z-24 h-[300px] w-[400px] rounded-full opacity-70 blur-3xl"></div>
      <div className="bg-acm-blue-700 absolute top-[45%] left-[76%] z-24 h-[300px] w-[400px] rounded-full opacity-70 blur-3xl"></div>
      <div className="bg-acm-blue-700 absolute top-[25%] left-[30%] z-24 h-[300px] w-[500px] rounded-full opacity-50 blur-3xl"></div>
      <div className="bg-acm-blue-700 absolute top-[25%] right-[50%] z-24 h-[300px] w-[500px] rounded-full opacity-50 blur-3xl"></div>
      <div className="bg-acm-blue-700 absolute top-[25%] right-[25%] z-24 h-[300px] w-[500px] rounded-full opacity-50 blur-3xl"></div>
      <div className="bg-acm-blue-700 absolute top-[85%] right-[25%] z-24 h-[90px] w-[900px] overflow-hidden rounded-full opacity-50 backdrop-blur-3xl"></div>
      <div className="bg-acm-blue-700 absolute top-[25%] left-0 z-24 h-[300px] w-[500px] rounded-full opacity-50 blur-3xl"></div>
      <div className="bg-acm-green-300 absolute top-[25%] left-[50%] z-24 h-[300px] w-[400px] rounded-full opacity-50 blur-3xl"></div>
      <div className="bg-acm-green-300 absolute top-[25%] left-[70%] z-24 h-[300px] w-[400px] rounded-full opacity-50 blur-3xl"></div>
    </div>
  );
};
export default Landing;
