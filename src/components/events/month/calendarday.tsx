import { TypedGoogleEventProps } from "@/components/events/calendarcall";
import { useState, useEffect } from "react";
import CalendarEventPopover from "./calendareventpopover";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DayProps {
  date: Date;
  displayMonth: Date;
  events: TypedGoogleEventProps[];
}

const CalendarDay = ({ date, events }: DayProps) => {
  const today = new Date();
  const isPastDay = date < new Date(new Date().setHours(0, 0, 0, 0));

  const isToday =
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  const filteredEvents = events.filter((event) => {
    let eventStartDate: Date | null = null;
    let eventEndDate: Date | null = null;

    if (event.start?.dateTime) {
      eventStartDate = new Date(event.start.dateTime);
    } else if (event.start?.date) {
      eventStartDate = new Date(event.start.date);
    }

    if (event.end?.dateTime) {
      eventEndDate = new Date(event.end.dateTime);
    } else if (event.end?.date) {
      eventEndDate = new Date(event.end.date);
    }

    eventStartDate?.setHours(0, 0, 0, 0);
    eventEndDate?.setHours(23, 59, 59, 999);

    return (
      eventStartDate &&
      eventEndDate &&
      date >= eventStartDate &&
      date <= eventEndDate
    );
  });

  const [visibleEventCount, setVisibleEventCount] = useState(2);
  const displayEventCount =
    filteredEvents.length > visibleEventCount
      ? visibleEventCount - 1
      : visibleEventCount;

  useEffect(() => {
    const updateVisibleEventCount = () => {
      if (window.innerHeight > 1440) {
        setVisibleEventCount(4);
      } else if (window.innerHeight > 1080) {
        setVisibleEventCount(3);
      } else {
        setVisibleEventCount(2);
      }
    };

    updateVisibleEventCount();
    window.addEventListener("resize", updateVisibleEventCount);
    return () => window.removeEventListener("resize", updateVisibleEventCount);
  }, []);

  return (
    <div
      className={`flex h-full w-full flex-col gap-y-[0.5vw] ${isToday ? "bg-acm-blue-800 text-acm-blue-700" : ""} ${isPastDay ? "text-acm-gray-600" : ""}`}
    >
      <p className="ml-1 mt-1 flex justify-start text-sm md:ml-2 md:mt-2 md:text-xl">
        {date.getDate()}
      </p>

      {filteredEvents
        .slice(0, displayEventCount)
        .map(
          (
            { start, summary, end, description, location, eventType },
            index,
          ) => (
            <CalendarEventPopover
              key={index}
              startDate={start}
              endDate={end}
              title={summary}
              description={description}
              date={date}
              location={location || "TBD"}
              eventType={eventType}
            />
          ),
        )}

      {filteredEvents.length > visibleEventCount && (
        <Popover>
          <PopoverTrigger className="w-full cursor-pointer hover:opacity-75">
            <p className="bg-cvdsa-red-500 text-[0.8vw] font-semibold">
              {filteredEvents.length - displayEventCount} Other Events
            </p>
          </PopoverTrigger>
          <PopoverContent>
            {filteredEvents
              .slice(displayEventCount)
              .map(
                ({ summary, start, location, description, eventType }, idx) => (
                  <div className="px-[10%] pt-[1vh]" key={idx}>
                    <CalendarEventPopover
                      startDate={start}
                      title={summary}
                      date={date}
                      description={description}
                      location={location || "TBD"}
                      eventType={eventType}
                    />
                  </div>
                ),
              )}
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
};

export default CalendarDay;
