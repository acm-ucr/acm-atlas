import hackathons from "@/data/hackathons";
import Link from "next/link";
const Hacks = () => {
  return (
    <div className="flex flex-col gap-4">
      {hackathons.map(({ id, name }, index) => (
        <Link key={index} href={`/hacks/${id}`}>
          {name}
        </Link>
      ))}
    </div>
  );
};

export default Hacks;
