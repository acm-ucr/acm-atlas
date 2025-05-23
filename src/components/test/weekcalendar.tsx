"use client";
import React from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import { useQuery } from "@tanstack/react-query";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Toolbar from "./toolbar";
import CalendarEventPopover from "@/components/events/calendareventpopover";
import "./index.css";
const localizer = momentLocalizer(moment);

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

export type CalendarEvent = {
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  resource: TypedGoogleEventProps;
};

const calendarSources = [
  { id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EVENTS, eventType: "general" },
  { id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_SPARK, eventType: "spark" },
  { id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_CREATE, eventType: "create" },
  { id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_FORGE, eventType: "forge" },
  { id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_DAS, eventType: "das" },
  { id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_BITBYTE, eventType: "bitbyte" },
];

const WeekCalendar = () => {
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

  // DOCUMENTATION WISE THIS MAKES MY TYPED G'CAL EVENTS COMPATIBLE WITH RBC EVENTS
  const calendarEvents = React.useMemo(() => {
    if (!data?.allEvents) return [];
    return data.allEvents
      .map((event) => {
        const startString = event.start?.dateTime || event.start?.date;
        const endString = event.end?.dateTime || event.end?.date;
        if (!startString || !endString) return null;
        return {
          title: event.summary ?? "Untitled Event",
          start: new Date(startString),
          end: new Date(endString),
          allDay: !event.start?.dateTime,
          resource: event,
        };
      })
      .filter(
        (
          e,
        ): e is {
          title: string;
          start: Date;
          end: Date;
          allDay: boolean;
          resource: TypedGoogleEventProps;
        } => e !== null,
      );
  }, [data]);

  const CustomEvent = ({ event }: { event: CalendarEvent }) => {
    const resource = event.resource;
    return (
      <CalendarEventPopover
        startDate={resource.start}
        endDate={resource.end}
        title={event.title}
        date={event.start}
        location={resource.location}
        description={resource.description}
        eventType={resource.eventType}
      />
    );
  };

  return (
    <div>
      {isLoading || !data ? (
        <div>Loading...</div>
      ) : (
        <div className="mx-auto w-10/12">
          <Calendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            titleAccessor="title"
            defaultView={Views.WEEK}
            views={["week"]}
            min={new Date(1970, 1, 1, 8, 0, 0)} // 8:00 AM
            max={new Date(1970, 1, 1, 20, 0, 0)} // 8:00 PM
            date={date}
            onNavigate={setDate}
            timeslots={1}
            components={{
              toolbar: Toolbar,
              event: CustomEvent,
            }}
            eventPropGetter={() => ({
              style: {
                backgroundColor: "transparent",
                border: "none",
                boxShadow: "none",
                padding: 0,
                margin: 0,
              },
            })}
          />
        </div>
      )}
    </div>
  );
};

export default WeekCalendar;
