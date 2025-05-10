"use client";
import StatItem from "../statitem";

const StatsGrid: React.FC = () => {
  return (
    <div className="mx-auto flex w-3/4 justify-center py-12 text-left">
      <div className="pr-12">
        <StatItem end={500} label="members" duration={0.7} />
      </div>
      <div className="border-l-2 pl-4 pr-8">
        <StatItem end={2500} label="alumni" duration={0.7} />
      </div>
      <div className="border-l-2 pl-4 pr-12">
        <StatItem end={50} label="socials" duration={0.7} />
      </div>
      <div className="border-l-2 pl-4">
        <StatItem end={100} label="workshops" duration={0.7} />
      </div>
    </div>
  );
};

export default StatsGrid;
