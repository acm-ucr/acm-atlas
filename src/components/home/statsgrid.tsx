import React from "react";

const StatsGrid: React.FC = () => {
  return (
    <div className="mx-auto grid grid-cols-4 text-center">
      <div className="flex flex-col">
        <div className="text-acm-gray-500 text-6xl font-bold">500+</div>
        <div className="text-4x1 text-acm-gray-500">members</div>
      </div>

      <div className="flex flex-col border-l border-gray-300 px-2">
        <div className="text-acm-gray-500 text-6xl leading-tight font-bold">
          2500+
        </div>
        <div className="text-4x1 text-acm-gray-500 leading-tight">alumni</div>
      </div>

      <div className="flex flex-col border-l border-gray-300 px-2">
        <div className="text-acm-gray-500 text-6xl leading-tight font-bold">
          50+
        </div>
        <div className="text-4x1 text-acm-gray-500 leading-tight">socials</div>
      </div>

      <div className="flex flex-col border-l border-gray-300 px-2">
        <div className="text-acm-gray-500 text-6xl leading-tight font-bold">
          100+
        </div>
        <div className="text-4x1 text-acm-gray-500 leading-tight">
          workshops
        </div>
      </div>
    </div>
  );
};

export default StatsGrid;
