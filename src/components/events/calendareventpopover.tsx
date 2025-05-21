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
  endDate?: {
    dateTime?: string;
    date?: string;
  };
  title: string;
  date: Date;
  location: string;
  description?: string;
  eventType: string;
}

const CalendarEventPopover = ({
  startDate,
  endDate,
  title,
  date,
  location,
  description,
  eventType,
}: CalendarEventPopoverProps) => {
  let eventStartDate = new Date();
  let eventEndDate = new Date();
  let hasStartTime = false;
  let hasEndTime = false;

  if (startDate.dateTime) {
    eventStartDate = new Date(startDate.dateTime);
    hasStartTime = true;
  } else if (startDate.date) {
    eventStartDate = new Date(startDate.date);
  }

  if (endDate?.dateTime) {
    eventEndDate = new Date(endDate.dateTime);
    hasEndTime = true;
  } else if (endDate?.date) {
    eventEndDate = new Date(endDate.date);
  }

  const startHour = eventStartDate.getHours();
  const startMinutes = eventStartDate.getMinutes();
  const formattedStartHour = startHour % 12 || 12;
  const formattedStartMinutes =
    startMinutes < 10 ? `0${startMinutes}` : startMinutes;
  const startHourSuffix = startHour < 12 ? "AM" : "PM";

  let timeRangeDisplay = `${formattedStartHour}:${formattedStartMinutes} ${startHourSuffix}`;
  if (hasEndTime) {
    const endHour = eventEndDate.getHours();
    const endMinutes = eventEndDate.getMinutes();
    const formattedEndHour = endHour % 12 || 12;
    const formattedEndMinutes = endMinutes < 10 ? `0${endMinutes}` : endMinutes;
    const endHourSuffix = endHour < 12 ? "AM" : "PM";
    timeRangeDisplay += ` - ${formattedEndHour}:${formattedEndMinutes} ${endHourSuffix}`;
  }

  return (
    <Popover>
      <PopoverTrigger
        className={`flex w-full cursor-pointer justify-between py-1 ${eventType === "general" ? "bg-acm-blue-700 !text-white" : ""} ${eventType === "spark" ? "bg-acm-yellow-200" : ""} ${eventType === "forge" ? "bg-acm-gray-800" : ""} ${eventType === "create" ? "bg-acm-blue-200" : ""} ${eventType === "das" ? "bg-acm-purple-300" : ""} ${eventType === "bitbyte" ? "!bg-acm-green-500" : ""} text-left hover:opacity-75`}
      >
        <span className="overflow-hidden text-ellipsis whitespace-nowrap px-1 pl-1 text-xs">
          {title}
        </span>
        <span className="pr-1 text-right text-xs">
          {formattedStartHour}:{formattedStartMinutes}
        </span>
      </PopoverTrigger>
      <PopoverContent className="z-50 w-[30vw] border-2 border-black bg-white p-0 shadow-md md:w-[40vw] 2xl:w-[30vw]">
        <div className="grid grid-cols-4 px-4 py-2 text-xl font-semibold">
          <p className="col-span-3">{title}</p>
          <p className="flex justify-end">
            {date.toLocaleString("default", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="rounded-b-xl bg-white px-4 py-3 text-lg">
          <div className="flex">
            {hasStartTime && <p className="mt-1">{timeRangeDisplay}</p>}
          </div>
          <p>{location}</p>
          <div>{description && <p>{description}</p>}</div>
          {eventType}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CalendarEventPopover;
