"use client";
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { useQuery } from "@tanstack/react-query";

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
      <p className="mt-10 pt-8 text-center text-6xl font-bold text-acm-gray-500">
        EVENTS
      </p>
      {!isLoading && data && (
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="mx-auto w-11/12 md:w-10/12"
          events={data.allEvents}
        />
      )}
    </div>
  );
};

export default CalendarCall;
