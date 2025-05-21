import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface CalendarEventPopoverProps {
  startDate: {
    dateTime?: string;
    date?: string;
  };
  title: string;
  date: Date;
  location: string;
}

const CalendarEventPopover = ({
  startDate,
  title,
  date,
  location,
}: CalendarEventPopoverProps) => {
  let eventStartDate = new Date();
  let hasStartTime = false;

  if (startDate.dateTime) {
    eventStartDate = new Date(startDate.dateTime);
    hasStartTime = true;
  } else if (startDate.date) {
    eventStartDate = new Date(startDate.date);
  }

  const startHour = eventStartDate.getHours();
  const startMinutes = eventStartDate.getMinutes();
  const formattedStartHour = startHour % 12 || 12;
  const formattedStartMinutes =
    startMinutes < 10 ? `0${startMinutes}` : startMinutes;
  const startHourSuffix = startHour < 12 ? "AM" : "PM";

  return (
    <Popover>
      <PopoverTrigger className="flex w-full cursor-pointer justify-between text-left hover:opacity-75">
        <span className="overflow-hidden text-ellipsis whitespace-nowrap px-1 text-[0.8vw]">
          {title}
        </span>
        <span className="text-right text-[0.8vw]">
          {formattedStartHour}:{formattedStartMinutes}
        </span>
      </PopoverTrigger>
      <PopoverContent className="w-[30vw] overflow-hidden rounded-xl p-0 shadow-md 2xl:w-[25vw]">
        <div className="grid grid-cols-4 border-b-2 px-4 py-2 text-[0.8vw] font-semibold">
          <p className="col-span-3">{title}</p>
          <p className="flex justify-end">
            {date.toLocaleString("default", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="bg-white px-4 py-3 text-[0.8vw]">
          <p>{location}</p>
          {hasStartTime && (
            <p className="mt-1">
              {formattedStartHour}:{formattedStartMinutes} {startHourSuffix}
            </p>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CalendarEventPopover;
