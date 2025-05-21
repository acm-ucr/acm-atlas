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

export interface EventCardProps {
  date: string;
  month: string;
  title: string;
  description: string;
}

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

      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EVENTS
        }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${tenWeeksAgo}&timeMax=${tenWeeksAhead}`,
      ).then((res) => res.json());

      const allEvents = response.items || [];

      const futureEvents = allEvents
        .filter((item: GoogleEventProps) => {
          const startString = item.start?.dateTime || item.start?.date;
          if (!startString) return false;
          return new Date(startString) >= now;
        })
        .map((item: GoogleEventProps) => {
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
