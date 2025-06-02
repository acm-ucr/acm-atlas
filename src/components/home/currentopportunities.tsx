"use client";
import CurrOppCard from "./opportunitiescard";
import opportunities from "@/data/opportunities";
import getCurrentApps from "@/utils/applications/currentapplications";
import { getAppStatus } from "@/utils/applications/applicationstatus";

const CurrentOpportunities = () => {
  const { data, isLoading } = getCurrentApps();
  const currentApps = data?.currentApps;

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <p className="text-center text-5xl font-bold text-acm-gray-500 md:text-6xl">
        CURRENT OPPORTUNITIES
      </p>
      <div className="flex w-11/12 flex-wrap justify-center gap-x-16 gap-y-8 2xl:w-4/5">
        {opportunities.map(({ name, card_background, link }, id) => {
          const { status, appLink } = getAppStatus(name, currentApps ?? []);
          return (
            <CurrOppCard
              key={id}
              name={name}
              cardBackground={card_background}
              appYearAndQuarter={isLoading ? "Loading..." : status}
              applicationLink={appLink as string}
              link={link}
              index={id + 1}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CurrentOpportunities;
