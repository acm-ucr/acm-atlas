import Link from "next/link";
import hacks from "@/data/hackathons";

const UsedIn = () => {
  return (
    <div className="mx-auto mt-12 w-2/3">
      <p className="mb-6 text-left text-4xl font-bold text-acm-gray-500">
        USED IN
      </p>
      <div className="mb-24 grid w-fit grid-cols-2 gap-4">
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
