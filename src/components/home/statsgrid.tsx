"use client";
import StatItem from "../statitem";

const StatsGrid: React.FC = () => {
  return (
    <div>
      <div className="mx-auto hidden w-3/4 justify-center py-12 text-left md:flex">
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
      <div className="flex flex-col md:hidden">
        <div className="flex justify-center py-12 text-left">
          <div className="pr-12">
            <StatItem end={500} label="members" duration={0.7} />
          </div>
          <div className="border-l-2 pl-4 pr-8">
            <StatItem end={2500} label="alumni" duration={0.7} />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="pl-4 pr-12">
            <StatItem end={50} label="socials" duration={0.7} />
          </div>
          <div className="border-l-2 pl-4">
            <StatItem end={100} label="workshops" duration={0.7} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsGrid;
