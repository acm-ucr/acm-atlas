"use client";
import { EventCardProps } from "./calendarcall";
import Card from "./card";
import * as motion from "motion/react-client";

const Down = {
  initial: { opacity: 0, y: -10 },
  animate: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: custom, ease: "easeOut" },
  }),
};

interface UpcomingEventsProps {
  events: EventCardProps[];
}

const UpcomingEvents = ({ events }: UpcomingEventsProps) => {
  return (
    <div className="flex flex-col items-center">
      <motion.p
        variants={Down}
        viewport={{ once: true }}
        initial="initial"
        whileInView="animate"
        custom={0}
        className="m-4 flex justify-center pt-2 text-3xl leading-none md:text-[4vw]"
      >
        UPCOMING EVENTS
      </motion.p>
      {events.length === 0 ? (
        <motion.p
          variants={Down}
          viewport={{ once: true }}
          initial="initial"
          whileInView="animate"
          custom={0.2}
          className="text-lg text-gray-500 md:mt-4 md:text-2xl"
        >
          No upcoming events
        </motion.p>
      ) : (
        <div className="grid w-10/12 grid-cols-1 flex-wrap justify-center gap-4 md:grid-cols-2">
          {events.map((event, index) => (
            <Card
              key={index}
              date={event.date}
              month={event.month}
              title={event.title}
              description={event.description}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;
