"use client";

import * as React from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { GoogleEventProps } from "@/components/events/calendarcall";
import CalendarDay from "@/components/events/calendarday";
import CalendarTop from "@/components/events/calendartop";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  events: GoogleEventProps[];
};

function Calendar({
  className,
  classNames,
  showOutsideDays = false,
  events,
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
    <div className="flex justify-center py-[5vh] md:py-[10vh]">
      <CalendarTop currentDate={currentDate} />
      <DayPicker
        showOutsideDays={showOutsideDays}
        formatters={{
          formatWeekdayName: (date) => {
            const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
            return days[date.getDay()];
          },
          formatCaption: () => "",
        }}
        className={className}
        classNames={{
          months:
            "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
          month: "space-y-[0.5vw]",
          caption:
            "justify-center flex pl-[43.5vw] pt-[0.5vh] items-center relative mb-[3vh] ",
          caption_label: "font-bold text-[2.5vw] ",
          nav: "space-x-[0.5vw] flex items-center",
          nav_button: cn("h-[2vw] w-[2vw] bg-transparent p-0"),
          nav_button_previous: "absolute left-[18vw] translate-y-1",
          nav_button_next: "absolute left-[23vw] translate-y-1",
          table: "w-full border-collapse space-y-1",
          head_row:
            "border-2 border-black flex font-seasons mt-[2vw] w-full rounded-t-3xl text-center items-center justify-center gap-x-[0.9vw]",
          head_cell: "text-black rounded-md w-[9.7vw] text-[2.3vw]",
          row: "grid grid-cols-7",
          cell: "border p-0 bg-white",
          day: "p-0",
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
              <SlArrowLeft className="text-[2.5vw]" />
            </div>
          ),
          IconRight: () => (
            <div onClick={nextMonth}>
              <SlArrowRight className="text-[2.5vw]" />
            </div>
          ),
          Day: ({ displayMonth, date }) => (
            <CalendarDay
              date={date}
              displayMonth={displayMonth}
              events={events}
            />
          ),
        }}
        {...props}
      />
    </div>
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
