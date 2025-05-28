"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import auroraStar from "@/public/logos/aurorastar.webp";

const fetchRepoStats = async () => {
  const res = await fetch("https://api.github.com/repos/acm-ucr/aurora");
  if (!res.ok) throw new Error("Failed to fetch repo data");
  const data = await res.json();

  const createdAt = new Date(data.created_at);
  const now = new Date();
  const timeDiff = now.getTime() - createdAt.getTime();
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  const commitsRes = await fetch(
    "https://api.github.com/repos/acm-ucr/aurora/commits?per_page=1",
  );
  const linkHeader = commitsRes.headers.get("Link");
  const extractHeader = linkHeader?.match(/&page=(\d+)>; rel="last"/);
  const extractCommitCount = extractHeader?.at(1);

  return {
    commits: extractCommitCount,
    stars: data.stargazers_count,
    days,
  };
};

const Stats = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["repoStats"],
    queryFn: fetchRepoStats,
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError || !data) return <p>Error loading repo stats.</p>;

  return (
    <div className="py-30 flex flex-col justify-center">
      <div className="pb-18 ml-[15%] grid gap-10 text-acm-gray-500 [grid-template-columns:23%_21%_23%]">
        <div className="flex flex-col justify-center border-r-2 border-acm-gray-100">
          <p className="pb-4 text-6xl font-bold">{data.commits}</p>
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
          <p className="pb-4 text-6xl font-bold">{data.stars}</p>
          <div className="flex">
            <p className="pr-5 text-2xl font-medium">stars</p>
            <Image src={auroraStar} alt="Star" className="h-[90%] w-[37%]" />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="pb-4 text-6xl font-bold">{data.days}</p>
          <p className="text-2xl font-medium">days since we began</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
