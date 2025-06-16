"use client";

import * as React from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import { TypedGoogleEventProps } from "@/components/events/calendarcall";
import CalendarDay from "@/components/events/month/calendarday";
import CalendarTop from "@/components/events/month/calendartop";
import UpcomingEvents from "../events/upcomingevents/upcomingevents";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  events: TypedGoogleEventProps[];
  selectedEventTypes: string[];
  setSelectedEventTypes: (types: string[]) => void;
  allEventTypes: string[];
};

function Calendar({
  className,
  classNames,
  showOutsideDays = false,
  events,
  selectedEventTypes,
  setSelectedEventTypes,
  allEventTypes,
  ...props
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const nextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    newDate.setDate(
      today.getMonth() === newDate.getMonth() &&
        today.getFullYear() === newDate.getFullYear()
        ? today.getDate()
        : 1,
    );
    setCurrentDate(newDate);
  };

  const prevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    newDate.setDate(
      today.getMonth() === newDate.getMonth() &&
        today.getFullYear() === newDate.getFullYear()
        ? today.getDate()
        : 1,
    );
    setCurrentDate(newDate);
  };

  return (
    <div className="flex flex-col">
      <CalendarTop
        currentDate={currentDate}
        onPrevMonth={prevMonth}
        onNextMonth={nextMonth}
        selectedEventTypes={selectedEventTypes}
        setSelectedEventTypes={setSelectedEventTypes}
        allEventTypes={allEventTypes}
      />
      <DayPicker
        month={currentDate}
        showOutsideDays={showOutsideDays}
        formatters={{
          formatWeekdayName: (date) => {
            const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
            return days[date.getDay()];
          },
          formatCaption: () => "",
        }}
        className={`${className} pb-8`}
        classNames={{
          months: "",
          month: "",
          caption: "",
          caption_label: "",
          nav: "space-x-8",
          nav_button: "",
          nav_button_previous: "hidden",
          nav_button_next: "hidden",
          table: "w-full  space-y-1",
          head_row:
            "border border-acm-gray-700 flex mt-[2vw] w-full rounded-t-xl text-center items-center justify-center grid grid-cols-7",
          head_cell: "text-black rounded-md text-md md:text-4xl py-1 md:py-2",
          row: "grid grid-cols-7",
          cell: "border border-acm-gray-700 p-0 bg-white h-[20vh] md:h-[20vh]",
          day: "",
          day_range_end: "",
          day_selected: "",
          day_outside: "",
          day_disabled: "",
          day_range_middle: "",
          day_hidden: "",
          ...classNames,
        }}
        components={{
          IconLeft: () => (
            <div onClick={prevMonth}>
              <SlArrowLeft />
            </div>
          ),
          IconRight: () => (
            <div onClick={nextMonth}>
              <SlArrowRight />
            </div>
          ),
          Day: ({ displayMonth, date }) => (
            <CalendarDay
              date={date}
              displayMonth={displayMonth}
              events={events.filter((event) =>
                selectedEventTypes.includes(event.eventType),
              )}
            />
          ),
        }}
        {...props}
      />
      <UpcomingEvents />
    </div>
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
