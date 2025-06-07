import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
interface CustomEventProps {
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

const CustomEvent = ({
  startDate,
  endDate,
  title,
  date,
  location,
  description,
  eventType,
}: CustomEventProps) => {
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
    <Dialog>
      {" "}
      <DialogTrigger
        className={`flex h-full w-full flex-col rounded-md px-2 py-3 text-left text-xs hover:opacity-75 ${eventType === "general" ? "bg-acm-blue-700" : ""} ${eventType === "spark" ? "bg-acm-yellow-200 text-black" : ""} ${eventType === "forge" ? "bg-acm-gray-800 text-black" : ""} ${eventType === "create" ? "bg-acm-blue-200 text-black" : ""} ${eventType === "das" ? "bg-acm-purple-300 text-black" : ""} ${eventType === "bitbyte" ? "!bg-acm-green-500 text-black" : ""} `}
      >
        <div>{title}</div>
        <div>{hasStartTime && timeRangeDisplay}</div>
        <div>{location ? location : "No location"}</div>
      </DialogTrigger>
      <DialogContent className="z-50 w-fit justify-items-center border-2 border-black bg-white p-0 shadow-md md:w-[40vw] 2xl:w-[30vw] 2xl:justify-items-center">
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
      </DialogContent>
    </Dialog>
  );
};

export default CustomEvent;
