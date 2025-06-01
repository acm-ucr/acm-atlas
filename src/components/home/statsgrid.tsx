"use client";
import StatItem from "@/components/statitem";

const StatsGrid: React.FC = () => {
  return (
    <div>
      <div className="mx-auto hidden w-3/4 justify-center py-12 text-left md:flex">
        <div className="pr-12">
          <StatItem
            end={500}
            label="members"
            duration={0.7}
            color="text-acm-blue-600"
            numberSize="text-4xl md:text-7xl"
            labelSize="text-xl md:text-3xl"
          />
        </div>
        <div className="border-l-2 pl-4 pr-8">
          <StatItem
            end={2500}
            label="alumni"
            duration={0.7}
            color="text-acm-green-500"
            numberSize="text-4xl md:text-7xl"
            labelSize="text-xl md:text-3xl"
          />
        </div>
        <div className="border-l-2 pl-4 pr-12">
          <StatItem
            end={50}
            label="socials"
            duration={0.7}
            color="text-acm-yellow-500"
            numberSize="text-4xl md:text-7xl"
            labelSize="text-xl md:text-3xl"
          />
        </div>
        <div className="border-l-2 pl-4">
          <StatItem
            end={100}
            label="workshops"
            duration={0.7}
            color="text-acm-purple-200"
            numberSize="text-4xl md:text-7xl"
            labelSize="text-xl md:text-3xl"
          />
        </div>
      </div>

      {/* Mobile layout */}
      <div className="mx-auto flex w-full max-w-sm flex-col items-center space-y-6 py-12 md:hidden">
        <div className="mx-auto w-full text-center">
          <StatItem
            end={500}
            label="members"
            duration={0.7}
            color="text-acm-blue-600"
            numberSize="text-4xl md:text-7xl"
            labelSize="text-xl md:text-3xl"
          />
        </div>
        <div className="mx-auto w-full border-t-2 border-gray-300 pt-4 text-center">
          <StatItem
            end={2500}
            label="alumni"
            duration={0.7}
            color="text-acm-green-500"
            numberSize="text-4xl md:text-7xl"
            labelSize="text-xl md:text-3xl"
          />
        </div>
        <div className="mx-auto w-full border-t-2 border-gray-300 pt-4 text-center">
          <StatItem
            end={50}
            label="socials"
            duration={0.7}
            color="text-acm-yellow-500"
            numberSize="text-4xl md:text-7xl"
            labelSize="text-xl md:text-3xl"
          />
        </div>
        <div className="mx-auto w-full border-t-2 border-gray-300 pt-4 text-center">
          <StatItem
            end={100}
            label="workshops"
            duration={0.7}
            color="text-acm-purple-200"
            numberSize="text-4xl md:text-7xl"
            labelSize="text-xl md:text-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default StatsGrid;
