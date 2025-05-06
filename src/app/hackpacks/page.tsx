import { HACKPACKS } from "@/data/user/hackpacks";
import HackpackCard from "@/components/HackpackCard";

export default function HackpacksPage() {
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {HACKPACKS.map((hackpack) => (
        <HackpackCard key={hackpack.title} {...hackpack} />
      ))}
    </div>
  );
}