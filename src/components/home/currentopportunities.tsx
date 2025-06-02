"use client";
import CurrOppCard from "./opportunitiescard";
import opportunities from "@/data/opportunities";
import {
  GoogleEventProps,
  TypedGoogleEventProps,
  calendarSources,
} from "@/components/events/calendarcall";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const CurrentOpportunities = () => {
  const { data, isLoading } = useQuery<{
    currentApps: TypedGoogleEventProps[];
  }>({
    queryKey: ["googleCalendarApplications"],
    queryFn: async () => {
      const now = new Date();
      const tenWeeksAgo = new Date(
        now.getTime() - 60 * 60 * 24 * 7 * 10 * 1000,
      ).toISOString();
      const tenWeeksAhead = new Date(
        now.getTime() + 60 * 60 * 24 * 7 * 10 * 1000,
      ).toISOString();

      const results = await Promise.all(
        calendarSources.map(async ({ id, eventType }) => {
          try {
            const res = await fetch(
              `https://www.googleapis.com/calendar/v3/calendars/${id}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${tenWeeksAgo}&timeMax=${tenWeeksAhead}`,
            );

            if (!res.ok) {
              console.warn(`Failed to fetch ${eventType} calendar`);
              return [];
            }

            const data = await res.json();

            return (data.items || []).map((item: GoogleEventProps) => ({
              description: item.description,
              eventType,
              start: item.start,
              end: item.end,
              location: item.location,
            }));
          } catch (err) {
            console.error(`Error fetching ${eventType} events`, err);
            return [];
          }
        }),
      );

      const allEvents: TypedGoogleEventProps[] = results.flat();
      const currentApps = allEvents.filter((event) =>
        event.description?.includes("Application:"),
      );
      return { currentApps };
    },
  });

  const getAppStatus = (programName: string) => {
    const currentApps = data?.currentApps;

    if (currentApps?.some((event) => event.eventType === programName)) {
      const appStatus = currentApps?.find(
        (event) => event.eventType === programName,
      );
      const startDate = appStatus?.start?.dateTime || appStatus?.start?.date;
      const startAppDate = new Date(startDate as string);
      startAppDate.setHours(0, 0, 0, 0);
      const today = new Date();

      const difference = startAppDate.getTime() - today.getTime();
      const daysApart = Math.ceil(difference / (1000 * 60 * 60 * 24));

      if (daysApart > 0) {
        return { status: `OPENING IN ${daysApart} DAYS`, appLink: "/" };
      }

      const endDate = appStatus?.end?.dateTime || appStatus?.end?.date;
      const endAppDate = new Date(endDate as string);
      endAppDate.setHours(0, 0, 0, 0);
      today.setHours(0, 0, 0, 0);

      if (endAppDate < today) {
        return { status: "APPLICATION CLOSED", appLink: "/" };
      }

      return {
        status: getSeason(appStatus?.start?.dateTime as string),
        link: appStatus?.location,
      };
    } else {
      return { status: "APPLICATION CLOSED", appLink: "/" };
    }
  };

  const getSeason = (startDate: string) => {
    const date = new Date(startDate);

    const year = date.getFullYear().toString().slice(-2);
    const month = date.getMonth() as number;

    if (month >= 2 && month <= 4) {
      return `SPRING '${year}`;
    } else if (month >= 5 && month <= 7) {
      return `SUMMER '${year}`;
    } else if (month >= 8 && month <= 10) {
      return `FALL '${year}`;
    }

    return `WINTER '${year + 1}`;
  };

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <p className="text-center text-5xl font-bold text-acm-gray-500 md:text-6xl">
        CURRENT OPPORTUNITIES
      </p>
      <div className="flex w-11/12 flex-wrap justify-center gap-x-16 gap-y-8 2xl:w-4/5">
        {opportunities.map(({ name, card_background, link }, id) => {
          const { status, appLink } = getAppStatus(name);
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
