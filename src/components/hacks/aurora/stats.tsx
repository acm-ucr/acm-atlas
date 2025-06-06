"use client";
import StatItem from "@/components/statitem";
import { useQuery } from "@tanstack/react-query";

const fetchRepoStats = async () => {
  const res = await fetch("https://api.github.com/repos/acm-ucr/aurora");
  if (!res.ok) throw new Error("Failed to fetch repo data");
  const data = await res.json();

  const prsRes = await fetch(
    "https://api.github.com/search/issues?q=repo:acm-ucr/aurora+type:pr+state:closed",
  );
  if (!prsRes.ok) throw new Error("Failed to fetch closed PRs");
  const prsData = await prsRes.json();
  const closedPRs = prsData.total_count;

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

  const issuesRes = await fetch(
    "https://api.github.com/search/issues?q=repo:acm-ucr/aurora+type:issue+state:closed",
  );
  const issuesData = await issuesRes.json();
  const closedIssues = issuesData.total_count;
  let contributors = 0;
  let page = 1;
  while (true) {
    const contributorsRes = await fetch(
      `https://api.github.com/repos/acm-ucr/aurora/contributors?per_page=100&page=${page}`,
    );
    const contributorsData = await contributorsRes.json();
    if (contributorsData.length == 0 || !contributorsData.length) {
      break;
    }
    contributors += contributorsData.length;
    page++;
  }
  return {
    commits: extractCommitCount,
    stars: data.stargazers_count,
    days,
    closedPRs,
    closedIssues,
    contributors,
  };
};

const round = (number: number) => {
  return Math.floor(number / 10) * 10;
};

const Stats: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["repoStats"],
    queryFn: fetchRepoStats,
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError || !data)
    return <p className="text-center">Error loading repo stats.</p>;

  return (
    <div>
      <div className="mx-auto grid w-3/4 grid-cols-3 py-12 text-center md:grid-rows-2">
        <div className="border-r-2 pb-10">
          <StatItem
            end={round(Number(data.commits))}
            label="commits"
            duration={0.7}
            color="text-acm-gray-500"
            numberSize="text-6xl md:text-7xl"
            labelSize="text-2xl md:text-3xl"
          />
        </div>
        <div className="border-r-2 pb-10">
          <StatItem
            end={round(data.closedPRs)}
            label="PRs"
            duration={0.7}
            color="text-acm-gray-500"
            numberSize="text-6xl md:text-7xl"
            labelSize="text-2xl md:text-3xl"
          />
        </div>
        <div className="pb-10">
          <StatItem
            end={round(data.closedIssues)}
            label="issues"
            duration={0.7}
            color="text-acm-gray-500"
            numberSize="text-6xl md:text-7xl"
            labelSize="text-2xl md:text-3xl"
          />
        </div>
        <div className="border-r-2">
          <StatItem
            end={round(data.contributors)}
            label="contributors"
            duration={0.7}
            color="text-acm-gray-500"
            numberSize="text-6xl md:text-7xl"
            labelSize="text-2xl md:text-3xl"
          />
        </div>

        <div className="border-r-2">
          <StatItem
            end={round(data.stars)}
            label="stars ⭐"
            duration={0.7}
            color="text-acm-gray-500"
            numberSize="text-6xl md:text-7xl"
            labelSize="text-2xl md:text-3xl"
          />
        </div>

        <div>
          <StatItem
            end={round(data.days)}
            label="days since we began"
            duration={0.7}
            color="text-acm-gray-500"
            numberSize="text-6xl md:text-7xl"
            labelSize="text-2xl md:text-3xl"
          />
        </div>
      </div>
      {/* Mobile layout */}
    </div>
  );
};

export default Stats;
