"use client";
import StatItem from "@/components/statitem";

const StatsGrid: React.FC = () => {
  return (
    <div>
      <div className="mx-auto hidden w-3/4 justify-center py-12 text-left md:flex">
        <div className="pr-12">
          <StatItem
            end={200}
            label="quarterly applications"
            duration={0.7}
            color="text-acm-gray-500"
            numberSize="text-4xl md:text-7xl"
            labelSize="text-xl md:text-3xl"
          />
        </div>
        <div className="border-l-2 pl-4 pr-8">
          <StatItem
            end={80}
            label="total acceptances"
            duration={0.7}
            color="text-acm-gray-500"
            numberSize="text-4xl md:text-7xl"
            labelSize="text-xl md:text-3xl"
          />
        </div>
        <div className="border-l-2 pl-4 pr-12">
          <StatItem
            end={40}
            label="projects"
            duration={0.7}
            color="text-acm-gray-500"
            numberSize="text-4xl md:text-7xl"
            labelSize="text-xl md:text-3xl"
          />
        </div>
        <div className="border-l-2 pl-4">
          <StatItem
            end={7}
            label="different schools"
            duration={0.7}
            color="text-acm-gray-500"
            numberSize="text-4xl md:text-7xl"
            labelSize="text-xl md:text-3xl"
          />
        </div>
      </div>

      {/* Mobile layout */}
      <div className="flex flex-col items-center text-center md:hidden">
        <div className="flex flex-col text-center">
          <div className="pb-4">
            <StatItem
              end={200}
              label="quarterly applications"
              duration={0.7}
              color="text-acm-gray-500"
              numberSize="text-4xl md:text-7xl"
              labelSize="text-xl md:text-3xl"
            />
          </div>
          <div className="pb-4">
            <StatItem
              end={80}
              label="total acceptances"
              duration={0.7}
              color="text-acm-gray-500"
              numberSize="text-4xl md:text-7xl"
              labelSize="text-xl md:text-3xl"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="pb-4">
            <StatItem
              end={40}
              label="projects"
              duration={0.7}
              color="text-acm-gray-500"
              numberSize="text-4xl md:text-7xl"
              labelSize="text-xl md:text-3xl"
            />
          </div>
          <div>
            <StatItem
              end={7}
              label="different schools"
              duration={0.7}
              color="text-acm-gray-500"
              numberSize="text-4xl md:text-7xl"
              labelSize="text-xl md:text-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsGrid;
