"use client";
import React from "react";
import CountUp from "react-countup";
const StatsGrid: React.FC = () => {
  return (
    <div className="mx-auto grid w-3/4 grid-cols-4 text-left">
      <div className="flex flex-col">
        <div className="text-acm-gray-500 text-6xl font-bold">
          <CountUp start={0} end={500} duration={0.7} />+
        </div>
        <div className="text-acm-gray-500 text-2xl">members</div>
      </div>

      <div className="flex flex-col border-l border-gray-300 px-2">
        <div className="text-acm-gray-500 pl-2 text-6xl leading-tight font-bold">
          <CountUp start={0} end={2500} duration={0.7} />+
        </div>
        <div className="text-acm-gray-500 pl-2 text-2xl leading-tight">
          alumni
        </div>
      </div>

      <div className="flex flex-col border-l border-gray-300 px-2">
        <div className="text-acm-gray-500 pl-2 text-6xl leading-tight font-bold">
          <CountUp start={0} end={50} duration={0.7} />+
        </div>
        <div className="text-acm-gray-500 pl-2 text-2xl leading-tight">
          socials
        </div>
      </div>

      <div className="flex flex-col border-l border-gray-300 px-2">
        <div className="text-acm-gray-500 pl-2 text-6xl leading-tight font-bold">
          <CountUp start={0} end={100} duration={0.7} />+
        </div>
        <div className="text-acm-gray-500 pl-2 text-2xl leading-tight">
          workshops
        </div>
      </div>
    </div>
  );
};

export default StatsGrid;
