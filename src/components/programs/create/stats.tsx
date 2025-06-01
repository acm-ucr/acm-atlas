"use client";
import StatItem from "@/components/statitem";

const StatsGrid: React.FC = () => {
  return (
    <div>
      <div className="mx-auto hidden w-3/4 justify-center py-12 text-left md:flex">
        <div className="pr-12">
          <StatItem
            end={110}
            label="quarterly applications"
            duration={0.7}
            color="text-black"
            numberSize="text-4xl md:text-7xl"
            labelSize="text-xl md:text-3xl"
          />
        </div>
        <div className="border-l-2 pl-4 pr-8">
          <StatItem
            end={45}
            label="total acceptances"
            duration={0.7}
            color="text-black"
            numberSize="text-4xl md:text-7xl"
            labelSize="text-xl md:text-3xl"
          />
        </div>
        <div className="border-l-2 pl-4 pr-12">
          <StatItem
            end={54}
            label="projects"
            duration={0.7}
            color="text-black"
            numberSize="text-4xl md:text-7xl"
            labelSize="text-xl md:text-3xl"
          />
        </div>
      </div>
      <div className="flex flex-col md:hidden">
        <div className="flex justify-center py-12 text-left">
          <div className="pr-12">
            <StatItem
              end={110}
              label="quarterly applications"
              duration={0.7}
              color="text-black"
              numberSize="text-4xl md:text-7xl"
              labelSize="text-xl md:text-3xl"
            />
          </div>
          <div className="border-l-2 pl-4 pr-8">
            <StatItem
              end={45}
              label="total acceptances"
              duration={0.7}
              color="text-black"
              numberSize="text-4xl md:text-7xl"
              labelSize="text-xl md:text-3xl"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="pl-4 pr-12">
            <StatItem
              end={54}
              label="projects"
              duration={0.7}
              color="text-black"
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
