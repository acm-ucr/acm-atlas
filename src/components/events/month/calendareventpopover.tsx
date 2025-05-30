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
  location?: string;
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

  let timeRangeDisplay = "";
  if (hasStartTime) {
    timeRangeDisplay = eventStartDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "America/Los_Angeles",
    });
    if (hasEndTime) {
      timeRangeDisplay +=
        " - " +
        eventEndDate.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          timeZone: "America/Los_Angeles",
        });
    }
  }

  return (
    <Popover>
      <div
        className={`mx-1 flex flex-col justify-between rounded-md px-2 py-1 text-xs ${eventType === "general" ? "bg-acm-blue-700 !text-white" : ""} ${eventType === "spark" ? "bg-acm-yellow-200" : ""} ${eventType === "forge" ? "bg-acm-gray-800" : ""} ${eventType === "create" ? "bg-acm-blue-200" : ""} ${eventType === "das" ? "bg-acm-purple-300" : ""} ${eventType === "bitbyte" ? "!bg-acm-green-500" : ""}`}
      >
        <PopoverTrigger className={`cursor-pointer text-left hover:opacity-75`}>
          <span className="overflow-hidden text-ellipsis whitespace-nowrap text-xs font-bold">
            {title}
          </span>
        </PopoverTrigger>
        <span className="text-left text-[90%]">
          {hasStartTime &&
            eventStartDate.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              timeZone: "America/Los_Angeles",
            })}
        </span>
      </div>
      <PopoverContent className="z-50 w-[80vw] border-2 border-black bg-white p-0 shadow-md md:w-[40vw] 2xl:w-[30vw]">
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
            {hasStartTime && <p>{timeRangeDisplay}</p>}
          </div>
          <p>{location}</p>
          {description && <p className="pb-4 pt-8">{description}</p>}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CalendarEventPopover;
