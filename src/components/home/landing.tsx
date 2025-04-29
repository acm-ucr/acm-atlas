import Image from "next/image";
import Keys from "@/public/home/keys.svg";
import blue from "@/public/home/blueCircle.svg";
import yellow from "@/public/home/yellowCircle.svg";
// import middle from "@/public/home/middle.svg";
import green from "@/public/home/green.svg";
import rightEnd from "@/public/home/rightEnd.svg";
import top from "@/public/home/top.svg";
import logo from "@/public/home/acmLogo.svg";
// import dot from "@/public/home/dot.svg";
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
        <Image
          src={top}
          alt="top"
          className="absolute inset-0 top-[54%] left-[15%]"
        />
        <div className="w-[30%]">
          <Image
            src={rightEnd}
            alt="blue"
            className="absolute inset-0 top-[18.5%] left-[51.8%]"
          />
        </div>

        <Image
          src={blue}
          alt="blue"
          className="rounded-b-1/2 absolute inset-0 top-1/3 -left-16 mt-3 w-[40%]"
        />
        <Image
          src={yellow}
          alt="yellow"
          className="absolute inset-0 top-[67%] left-0 mt-2"
        />
        {/* absolute and z-index don't work together :(
       <Image
          src={middle}
          alt="yellow"
          className="absolute inset-0 top-[26%] left-[20%] z-20"
        />
              <Image
          src={dot}
          alt="dot
          className="absolute top-[100%] left-0 w-10"
        />
        */}
        <Image
          src={green}
          alt="green"
          className="absolute inset-0 top-[40%] left-3/4 w-1/4"
        />
      </div>
    </div>
  );
};

export default Landing;
