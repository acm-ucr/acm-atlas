"use client";
import React from "react";
import { Calendar as UICalendar } from "@/components/ui/calendar";
import {
  Calendar as RBCalendar,
  momentLocalizer,
  Views,
} from "react-big-calendar";
import moment from "moment";
import { useQuery } from "@tanstack/react-query";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./week/customtoolbar";
import CustomEventPopover from "./week/customevent";
import CustomDayHeader from "./week/customdayheader";
import "./week/index.css";

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

const localizer = momentLocalizer(moment);

const CalendarCall = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [isMonth, setIsMonth] = React.useState<boolean>(true);
  const [selectedEventTypes, setSelectedEventTypes] = React.useState<string[]>(
    calendarSources.map((source) => source.eventType),
  );

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

  // Convert Google events to react-big-calendar events
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

  // Custom event renderer for react-big-calendar
  const CustomEvent = ({ event }: { event: CalendarEvent }) => {
    const resource = event.resource;
    return (
      <CustomEventPopover
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
      <p className="mt-10 pt-8 text-center text-6xl font-bold text-acm-gray-500">
        EVENTS
      </p>
      <div className="mx-auto my-12 grid w-11/12 grid-cols-2 rounded-xl bg-acm-gray-100 px-4 py-2 text-3xl md:w-1/3">
        <button
          onClick={() => setIsMonth(false)}
          className={`my-1 rounded-lg px-4 py-2 transition-colors duration-200 ${
            !isMonth
              ? "bg-white text-acm-blue-500"
              : "bg-transparent text-acm-gray-500"
          }`}
        >
          WEEK
        </button>
        <button
          onClick={() => setIsMonth(true)}
          className={`my-1 rounded-lg px-4 py-2 transition-colors duration-200 ${
            isMonth
              ? "bg-white text-acm-blue-500"
              : "bg-transparent text-acm-gray-500"
          }`}
        >
          MONTH
        </button>
      </div>
      {isLoading || !data ? (
        <div className="flex min-h-screen items-center justify-center">
          Loading...
        </div>
      ) : isMonth ? (
        <UICalendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="mx-auto w-11/12 md:w-10/12"
          events={data.allEvents.filter((event) =>
            selectedEventTypes.includes(event.eventType),
          )}
          selectedEventTypes={selectedEventTypes}
          setSelectedEventTypes={setSelectedEventTypes}
        />
      ) : (
        <div className="rounded-calendar-top mx-auto h-[150vh] w-10/12 pb-8">
          <RBCalendar
            localizer={localizer}
            events={calendarEvents.filter((event) =>
              selectedEventTypes.includes(event.resource.eventType),
            )}
            startAccessor="start"
            endAccessor="end"
            titleAccessor="title"
            defaultView={Views.WEEK}
            views={["week"]}
            min={new Date(1970, 1, 1, 8, 0, 0)} // 8:00 AM
            max={new Date(1970, 1, 1, 20, 0, 0)} // 8:00 PM
            date={date}
            onNavigate={setDate}
            components={{
              toolbar: (props) => (
                <CustomToolbar
                  {...props}
                  selectedEventTypes={selectedEventTypes}
                  setSelectedEventTypes={setSelectedEventTypes}
                />
              ),
              event: CustomEvent,
              header: CustomDayHeader,
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

export default CalendarCall;
