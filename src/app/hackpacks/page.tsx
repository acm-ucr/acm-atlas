import { HACKPACKS } from "@/data/user/hackpacks";
import HackpackCard from "@/components/HackpackCard";

export default function HackpacksPage() {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {HACKPACKS.map((hackpack) => (
        <HackpackCard key={hackpack.title} {...hackpack} />
      ))}
    </div>
  );
}
