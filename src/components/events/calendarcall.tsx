"use client";
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { useQuery } from "@tanstack/react-query";
import UpcomingEvents from "./upcomingevents";

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

type TypedGoogleEvent = GoogleEventProps & {
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

const CalendarCall = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const { data, isLoading } = useQuery<{
    allEvents: GoogleEventProps[];
    futureEvents: EventCardProps[];
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

      const allEvents: TypedGoogleEvent[] = results.flat();

      const futureEvents = allEvents
        .filter((item) => {
          const startString = item.start?.dateTime || item.start?.date;
          return startString && new Date(startString) >= now;
        })
        .map((item) => {
          const startString = item.start?.dateTime || item.start?.date;
          if (!startString) return null;

          const startDate = new Date(startString);
          const month = startDate
            .toLocaleString("default", { month: "short" })
            .toUpperCase();
          const day = startDate.getDate().toString();

          return {
            month,
            date: day,
            title: item.summary,
            description: item.description || "No description available.",
            eventType: item.eventType,
          };
        })
        .filter(Boolean)
        .slice(0, 2) as EventCardProps[];

      return { allEvents, futureEvents };
    },
  });

  return (
    <div className="min-h-screen">
      <p className="mt-10 py-8 text-center text-6xl font-bold text-acm-gray-500">
        EVENTS
      </p>
      {!isLoading && data && (
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="mx-[2%] w-11/12 md:mx-[15%] md:w-9/12"
          events={data.allEvents}
        />
      )}
      {!isLoading && data && <UpcomingEvents events={data.futureEvents} />}
    </div>
  );
};

export default CalendarCall;
