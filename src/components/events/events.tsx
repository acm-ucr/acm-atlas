"use client";
import { useQuery } from "@tanstack/react-query";
import EventCard from "@/components/events/eventcard";
import { motion } from "framer-motion";
// yueah this entire file is broken
type EventProps = {
  day: string;
  date: string;
  title: string;
  location: string;
  startTime: string;
  endTime: string;
  description: string;
  summary: string;
  eventType: string;
};

type ApiEvent = {
  summary?: string;
  description?: string;
  location?: string;
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
};

const calendarSources = [
  { id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EVENTS, eventType: "general" },
  { id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_SPARK, eventType: "spark" },
  { id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_CREATE, eventType: "create" },
  { id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_FORGE, eventType: "forge" },
  { id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_DAS, eventType: "das" },
  { id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_BITBYTE, eventType: "bitbyte" },
];

const fetchEvents = async (): Promise<EventProps[]> => {
  const allEvents: EventProps[] = [];

  for (const { id, eventType } of calendarSources) {
    const res = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${id}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${new Date().toISOString()}`,
    );

    if (!res.ok) throw new Error(`Error fetching ${eventType} events`);

    const data = await res.json();

    const events = (data.items || []).map(
      ({ summary, description, location, start, end }: ApiEvent) => ({
        day: new Date(
          start.dateTime || start.date || new Date(),
        ).toLocaleDateString(),
        date: new Date(
          start.dateTime || start.date || new Date(),
        ).toLocaleDateString(),
        title: summary || "Unnamed Event",
        location: location || "N/A",
        startTime: start.dateTime
          ? new Date(start.dateTime)
              .toLocaleTimeString([], { hour: "numeric", hour12: true })
              .toLowerCase()
          : "All day",
        endTime: end.dateTime
          ? new Date(end.dateTime)
              .toLocaleTimeString([], { hour: "numeric", hour12: true })
              .toLowerCase()
          : "All day",
        description: description || "No description available",
        summary: summary || "",
        eventType,
      }),
    );

    allEvents.push(...events);
  }

  return allEvents.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
};

const eventsVariant = {
  variants: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  },
  initial: "hidden",
  hileInView: "show",
};

const EventCards = () => {
  const {
    data: events = [],
    error,
    isLoading,
  } = useQuery<EventProps[], Error>({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  if (isLoading)
    return (
      <p className="my-10 flex items-center justify-center text-3xl font-light text-white">
        Loading events...
      </p>
    );

  if (error)
    return (
      <p className="my-10 flex items-center justify-center text-3xl font-light text-white">
        Error fetching events
      </p>
    );

  if (events.length === 0)
    return (
      <p className="my-10 flex items-center justify-center text-3xl font-light text-white">
        No Upcoming Events
      </p>
    );

  return (
    <motion.div
      className="mb-10 flex w-full flex-col gap-2 text-3xl sm:gap-5"
      {...eventsVariant}
    >
      {events.map(
        ({ date, title, location, startTime, description }, index) => (
          <motion.div
            className="mb-4 flex items-center justify-center"
            key={index}
            {...eventsVariant}
            viewport={{ once: true }}
          >
            <EventCard
              day={new Date(date).toLocaleString("en-US", {
                weekday: "short",
              })}
              date={new Date(date).getDate().toString().padStart(2, "0")}
              title={title}
              location={location}
              startTime={startTime}
              description={description}
              isInitiallyExpanded={index === 0}
            />
          </motion.div>
        ),
      )}
    </motion.div>
  );
};

export default EventCards;
