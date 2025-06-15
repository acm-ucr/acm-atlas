"use client";
import StatItem from "@/components/statitem";

const StatsGrid: React.FC = () => {
  return (
    <div>
      <div className="mx-auto flex flex-col items-center gap-y-4 py-12 text-center md:flex-row md:justify-center md:text-left">
        <div className="pr-0 text-center md:pr-12 md:text-base">
          <StatItem
            end={500}
            label="members"
            duration={0.7}
            color="text-acm-blue-600"
            numberSize="text-5xl md:text-7xl"
            labelSize="text-2xl md:text-3xl"
          />
        </div>
        <div className="border-0 pl-0 pr-0 pt-4 text-center md:border-l-2 md:pl-4 md:pr-8 md:pt-0 md:text-base">
          <StatItem
            end={2500}
            label="alumni"
            duration={0.7}
            color="text-acm-green-500"
            numberSize="text-5xl md:text-7xl"
            labelSize="text-2xl md:text-3xl"
          />
        </div>
        <div className="border-0 pl-0 pr-0 pt-4 text-center md:border-l-2 md:pl-4 md:pr-12 md:pt-0 md:text-base">
          <StatItem
            end={50}
            label="socials"
            duration={0.7}
            color="text-acm-yellow-500"
            numberSize="text-5xl md:text-7xl"
            labelSize="text-2xl md:text-3xl"
          />
        </div>
        <div className="border-0 pl-0 pt-4 text-center md:border-l-2 md:pl-4 md:pt-0 md:text-base">
          <StatItem
            end={100}
            label="workshops"
            duration={0.7}
            color="text-acm-purple-200"
            numberSize="text-5xl md:text-7xl"
            labelSize="text-2xl md:text-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default StatsGrid;
