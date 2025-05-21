"use client";
import { useQuery } from "@tanstack/react-query";
import EventCard from "@/components/events/eventcard";
import { motion } from "framer-motion";

type EventProps = {
  day: string;
  date: string;
  title: string;
  location: string;
  time: string;
  description: string;
};

type ApiEvent = {
  summary?: string;
  description?: string;
  location?: string;
  start: {
    dateTime?: string;
    date?: string;
  };
};

const fetchEvents = async (): Promise<EventProps[]> => {
  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${
      process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
    }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
        &singleEvents=true&orderBy=startTime&timeMin=${new Date().toISOString()}`,
  );
  if (!response.ok) {
    throw new Error("Error fetching events");
  }

  const data = await response.json();

  return (data.items || [])
    .map(({ summary, description, location, start }: ApiEvent) => ({
      day: new Date(
        start.dateTime || start.date || new Date(),
      ).toLocaleDateString(),
      date: new Date(
        start.dateTime || start.date || new Date(),
      ).toLocaleDateString(),
      title: summary || "Unnamed Event",
      location: location || "N/A",
      time: start.dateTime
        ? new Date(start.dateTime)
            .toLocaleTimeString([], { hour: "numeric", hour12: true })
            .replace(/(AM|PM)/i, (match) => match.toLowerCase())
        : "All day",
      description: description || "",
    }))
    .slice(0, 3);
};

const eventsVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
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
      variants={eventsVariant}
      initial="hidden"
      whileInView="show"
    >
      {events.map(({ date, title, location, time, description }, index) => (
        <motion.div
          className="mb-4 flex items-center justify-center"
          key={index}
          variants={eventsVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <EventCard
            day={new Date(date).toLocaleString("en-US", {
              weekday: "short",
            })}
            date={new Date(date).getDate().toString().padStart(2, "0")}
            title={title}
            location={location}
            time={time}
            description={description}
            isInitiallyExpanded={index === 0}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default EventCards;
