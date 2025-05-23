"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import auroraStar from "@/public/logos/aurorastar.webp";

const Stats = () => {
  const [daysSinceBegan, setDaysSinceBegan] = useState<number | null>(null);

  useEffect(() => {
    const fetchDaysSinceBegan = async () => {
      try {
        const res = await fetch("https://api.github.com/repos/acm-ucr/aurora");
        if (!res.ok) {
          console.error("Failed to fetch days since began.");
        }
        const data = await res.json();

        const createdDate = new Date(data.created_at);
        const now = new Date();
        const timeDiff = now.getTime() - createdDate.getTime();
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        setDaysSinceBegan(days);
      } catch (error) {
        console.error("Error fetching days since began: ", error);
      }
    };

    fetchDaysSinceBegan();
  }, []);
  return (
    <div className="py-30 flex flex-col justify-center">
      <div className="pb-18 ml-[15%] grid gap-10 text-acm-gray-500 [grid-template-columns:23%_21%_23%]">
        <div className="flex flex-col justify-center border-r-2 border-acm-gray-100">
          <p className="pb-4 text-6xl font-bold">4000+</p>
          <p className="text-2xl font-medium">commits</p>
        </div>
        <div className="flex flex-col justify-center border-r-2 border-acm-gray-100">
          <p className="pb-4 text-6xl font-bold">1000+</p>
          <p className="text-2xl font-medium">PRs</p>
        </div>
        <div className="flex flex-col justify-center">
          <p className="pb-4 text-6xl font-bold">950+</p>
          <p className="text-2xl font-medium">issues</p>
        </div>
      </div>
      <div className="ml-[15%] grid gap-10 pb-10 text-acm-gray-500 [grid-template-columns:17%_14%_25%]">
        <div className="flex flex-col justify-center border-r-2 border-acm-gray-100">
          <p className="pb-4 text-6xl font-bold">73</p>
          <p className="text-2xl font-medium">contributors</p>
        </div>
        <div className="flex flex-col justify-center border-r-2 border-acm-gray-100 pr-20">
          <p className="pb-4 text-6xl font-bold">27</p>
          <div className="flex">
            <p className="pr-5 text-2xl font-medium">stars</p>
            <Image src={auroraStar} alt="Star" className="h-[90%] w-[37%]" />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="pb-4 text-6xl font-bold">{daysSinceBegan}</p>
          <p className="text-2xl font-medium">days since we began</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
