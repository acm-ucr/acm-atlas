import Image from "next/image";
import Create from "@/public/create.svg";

const Header = () => {
  return (
    <div className="text-acm-gray-500 relative p-10 text-2xl font-semibold">
      <div className="text-center">
        <p className="flex justify-center p-7 text-5xl font-bold">CREATE</p>
        <p className="pb-7">UI/UX Design</p>
      </div>
      <p className="ml-[15%] w-3/8">
        ACM Create is a 10-week, quarter-long program focused on developing
        wireframes for Spark projects using Figma.
      </p>
      <Image className="absolute top-15 right-90" src={Create} alt="Spark" />
    </div>
  );
};

export default Header;
