"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import Cards from "./cards";

export type GoogleEventProps = {
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  location?: string;
  description?: string;
  summary: string;
};

export type TypedGoogleEventProps = GoogleEventProps & {
  eventType: string;
};

export interface EventCardProps {
  date: string;
  month: string;
  title: string;
  description: string;
  eventType: string;
}

const calendarSources = [
  { id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EVENTS, eventType: "general" },
  { id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_SPARK, eventType: "spark" },
  { id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_CREATE, eventType: "create" },
  { id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_FORGE, eventType: "forge" },
  { id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_DAS, eventType: "das" },
  { id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_BITBYTE, eventType: "bitbyte" },
];

const UpcomingEvents = () => {
  const { data, isLoading, isError } = useQuery<{
    allEvents: TypedGoogleEventProps[];
    futureEvents: TypedGoogleEventProps[];
  }>({
    queryKey: ["googleCalendarEvents"],
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
              ...item,
              eventType,
            }));
          } catch (err) {
            console.error(`Error fetching ${eventType} events`, err);
            return [];
          }
        }),
      );

      const allEvents: TypedGoogleEventProps[] = results.flat();

      const futureEvents = allEvents
        .filter((item) => {
          const startString = item.start?.dateTime || item.start?.date;
          return startString && new Date(startString) >= now;
        })
        .slice(0, 3);

      return { allEvents, futureEvents };
    },
  });
  return (
    <div>
      <p className="mb-12 mt-4 text-center text-6xl font-bold text-acm-gray-500">
        UPCOMING EVENTS
      </p>
      {!isLoading && data && (
        <Cards
          events={data.futureEvents}
          isLoading={isLoading}
          isError={isError}
        />
      )}
    </div>
  );
};

export default UpcomingEvents;
