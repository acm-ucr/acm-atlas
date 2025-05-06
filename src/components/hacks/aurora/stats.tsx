import Image from "next/image";
import auroraStar from "@/public/logos/aurorastar.webp";

const Stats = () => {
  return (
    <div className="flex flex-col justify-center py-30">
      <div className="text-acm-gray-500 grid translate-x-[15%] [grid-template-columns:280px_250px_400px] gap-10 pb-18">
        <div className="border-acm-gray-100 flex flex-col justify-center border-r-2">
          <p className="pb-4 text-6xl font-bold">4000+</p>
          <p className="text-2xl font-medium">commits</p>
        </div>
        <div className="border-acm-gray-100 flex flex-col justify-center border-r-2">
          <p className="pb-4 text-6xl font-bold">1000+</p>
          <p className="text-2xl font-medium">PRs</p>
        </div>
        <div className="flex flex-col justify-center">
          <p className="pb-4 text-6xl font-bold">950+</p>
          <p className="text-2xl font-medium">issues</p>
        </div>
      </div>
      <div className="text-acm-gray-500 grid translate-x-[15%] [grid-template-columns:210px_175px_350px] gap-10 pb-10">
        <div className="border-acm-gray-100 flex flex-col justify-center border-r-2">
          <p className="pb-4 text-6xl font-bold">73</p>
          <p className="text-2xl font-medium">contributors</p>
        </div>
        <div className="border-acm-gray-100 flex flex-col justify-center border-r-2 pr-20">
          <p className="pb-4 text-6xl font-bold">27</p>
          <div className="flex">
            <p className="pr-5 text-2xl font-medium">stars</p>
            <Image src={auroraStar} alt="Star" width={35} height={35} />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="pb-4 text-6xl font-bold">623</p>
          <p className="text-2xl font-medium">days since we began</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
