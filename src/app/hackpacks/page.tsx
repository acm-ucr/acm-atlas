import { HACKPACKS } from "@/data/user/hackpacks";
import HackpackCard from "@/components/hackpacks/card";

const Page = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 pb-16 pt-16">
      {HACKPACKS.map((hackpack) => (
        <HackpackCard key={hackpack.title} {...hackpack} />
      ))}
    </div>
  );
};

export default Page;
