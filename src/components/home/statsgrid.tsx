"use client";
import StatItem from "../statitem";

const StatsGrid: React.FC = () => {
  return (
    <div className="mx-auto grid w-3/4 grid-cols-4 text-left">
      <StatItem end={500} label="members" duration={0.7} />
      <StatItem end={2500} label="alumni" duration={0.7} />
      <StatItem end={50} label="socials" duration={0.7} />
      <StatItem end={100} label="workshops" duration={0.7} />
    </div>
  );
};

export default StatsGrid;
