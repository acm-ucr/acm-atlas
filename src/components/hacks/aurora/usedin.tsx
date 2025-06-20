import Link from "next/link";
import {
  cutiehack,
  citrushack,
  rosehack,
  designverse,
} from "@/data/hackathons";

const hacks = [cutiehack, citrushack, rosehack, designverse];

const UsedIn = () => {
  return (
    <div className="mx-auto mt-12 w-5/6 px-10">
      <p className="mb-6 text-left text-4xl font-bold text-acm-gray-500">
        USED IN
      </p>
      <div className="mb-24 grid w-fit grid-cols-1 gap-4 md:grid-cols-2">
        {hacks.map(({ name, website, years, bgColor }) => (
          <Link
            key={name}
            href={website}
            target="_blank"
            rel="noopener norefferer"
            className={`flex items-center justify-between rounded-lg p-4 font-semibold text-white ${bgColor}`}
          >
            <span className="mr-3 text-lg">{name}</span>
            <span className="text-sm font-light">{years}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UsedIn;
