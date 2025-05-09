import Link from "next/link";
import hacks from "@/data/hackathons";

const UsedIn = () => {
  return (
    <div className="ml-52 mt-12 w-max">
      <div className="mb-6 text-4xl font-bold text-acm-gray-500">USED IN</div>
      <div className="mb-24 grid grid-cols-2 gap-4">
        {hacks
          .filter((hack) => hack.name.toLowerCase() !== "designverse")
          .map(({ name, website, years, bgColor }) => (
            <Link
              key={name}
              href={website}
              target="_blank"
              rel="noopener norefferer"
            >
              <button
                className={`flex items-center justify-between rounded-lg p-4 font-semibold text-white ${bgColor}`}
              >
                <span className="mr-3 text-lg">{name}</span>
                <span className="text-sm font-light">{years}</span>
              </button>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default UsedIn;
