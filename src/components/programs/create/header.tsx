import Image from "next/image";
import Create from "@/public/logos/create.svg";

const Header = () => {
  return (
    <div className="text-acm-gray-500 relative overflow-hidden p-10 text-2xl font-semibold">
      <div className="bg-acm-blue-200 absolute top-0 z-0 h-[60%] w-[30%] rounded-full opacity-50 blur-3xl" />
      <div className="text-center">
        <p className="flex justify-center p-7 text-5xl font-bold">CREATE</p>
        <p className="pb-7">UI/UX Design</p>
      </div>
      <p className="ml-[15%] w-3/8">
        ACM Create is a 10-week, quarter-long program focused on developing
        wireframes for Spark projects using Figma.
      </p>
      <Image
        className="absolute top-[20%] right-[25%]"
        src={Create}
        alt="Create"
      />
    </div>
  );
};

export default Header;
