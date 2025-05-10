import Image from "next/image";
import left from "@/public/spark/leftmeeting.svg";
import right from "@/public/spark/rightmeeting.svg";

const SparkGrid = () => {
  return (
    <div className="relative inset-0 mx-auto my-16 grid w-11/12 grid-cols-2 place-items-center gap-16">
      <div className="flex w-full justify-end">
        <Image src={left} alt="left" />
      </div>
      <div className="flex flex-col justify-start text-3xl text-acm-gray-500">
        <b className="text-4xl"> WHAT WE DO</b>
        <p className="my-2 w-2/3">
          Participants attend weekly stand-up meetings and work on assigned
          issues throughout the week. Issues will begin with developing the
          website&#39;s overall structure, responsiveness, and end with
          animations.
        </p>
      </div>
      <div className="flex place-content-end text-3xl text-acm-gray-500">
        <p className="w-2/3">
          Weekly meetings are held covering all related tech-stack curriculum
          from TailwindCSS styling to motion.dev animations. By the end of the
          program, a fully functional website is developed by the team.
        </p>
      </div>
      <div className="z-5 absolute right-[90%] top-0 h-[500px] w-[600px] rounded-full bg-acm-yellow-500/40 blur-3xl" />
      <div className="z-5 absolute bottom-0 left-[85%] h-[400px] w-[300px] rounded-full bg-acm-yellow-500/40 blur-3xl" />
      <div className="flex w-full">
        <Image src={right} alt="right" />
      </div>
    </div>
  );
};

export default SparkGrid;
