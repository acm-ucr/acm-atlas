"use client";
import Card from "@/components/events/upcomingevents/card";
import { motion } from "motion/react";
import { DayPicker } from "react-day-picker";
import { TypedGoogleEventProps } from "../calendarcall";
import das from "@/public/eventspage/barchart.svg";
import create from "@/public/eventspage/cursor.svg";
import general from "@/public/eventspage/at.svg";
import forge from "@/public/eventspage/gear.svg";
import spark from "@/public/eventspage/tags.svg";
import bitbyte from "@/public/eventspage/message.svg";
import { StaticImageData } from "next/image";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  events: TypedGoogleEventProps[];
};

type EventProps = CalendarProps & {
  isError: boolean;
  isLoading: boolean;
};

const eventTypeImageMap: Record<string, StaticImageData> = {
  spark,
  forge,
  create,
  das,
  general,
  bitbyte,
};

const eventTypeBgColorMap: Record<string, string> = {
  spark: "bg-acm-yellow-100",
  forge: "bg-acm-gray-100",
  create: "bg-acm-blue-100",
  das: "bg-acm-purple-100",
  general: "bg-acm-blue-600",
  bitbyte: "bg-acm-green-100",
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
  whileInView: "show",
  viewport: { once: true },
};

const Cards = ({ events, isLoading, isError }: EventProps) => {
  if (isLoading)
    return (
      <p className="my-10 flex items-center justify-center text-3xl font-light text-white">
        Loading events...
      </p>
    );

  if (isError)
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
      className="mx-auto mb-10 grid w-3/4 auto-rows-fr grid-cols-1 flex-col gap-y-6 text-3xl md:grid-cols-3 md:gap-5"
      {...eventsVariant}
    >
      {events.map((event, index) => {
        const dateObj = new Date(
          event.start.dateTime || event.start.date || "",
        );
        const formattedDate = dateObj.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });
        const formattedTime = dateObj.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        });
        const image = eventTypeImageMap[event.eventType] || general;
        const bgColor = eventTypeBgColorMap[event.eventType];

        return (
          <motion.div key={index} className="" {...eventsVariant}>
            <Card
              title={event.summary}
              date={formattedDate}
              location={event.location || "No location"}
              startingTime={formattedTime}
              description={event.description || ""}
              bgColor={bgColor}
              textColor={
                event.eventType === "general"
                  ? "text-white"
                  : "text-acm-gray-500"
              }
              image={image}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Cards;
