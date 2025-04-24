import Image from "next/image";
import Create from "@/public/logos/create.svg";
import blueEllipse from "@/public/ellipses/blueEllipse.svg";

const Header = () => {
  return (
    <div className="text-acm-gray-500 relative pb-10 text-2xl font-semibold">
      <Image className="absolute" src={blueEllipse} alt="blue" />
      <div className="py-5 text-center">
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
