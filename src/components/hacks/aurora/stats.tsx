"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import auroraStar from "@/public/logos/aurorastar.webp";

const Stats = () => {
  const [contributors, setContributors] = useState<number | null>(null);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/repos/acm-ucr/aurora/contributors",
        );
        const data = await res.json();
        const totalContributions = data.reduce(
          (sum: number, contributor: any) => {
            return sum + contributor.contributions;
          },
          0,
        );
        setContributors(totalContributions);
      } catch (err) {
        console.error("Failed to fetch contribution count: ", err);
      }
    };
    fetchContributors();
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
          <p className="pb-4 text-6xl font-bold">{contributors}</p>
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
          <p className="pb-4 text-6xl font-bold">623</p>
          <p className="text-2xl font-medium">days since we began</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
