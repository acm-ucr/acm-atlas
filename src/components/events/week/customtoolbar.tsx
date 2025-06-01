import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { ToolbarProps, Navigate } from "react-big-calendar";
import type { CalendarEvent } from "../calendarcall";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const CustomToolbar: React.FC<ToolbarProps<CalendarEvent, object>> = ({
  date,
  onNavigate,
  selectedEventTypes,
  setSelectedEventTypes,
}) => {
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-between pb-8 md:flex-row">
      <div className="flex w-full items-center justify-center pb-6 md:justify-start md:space-x-4 md:pb-0">
        <span className="text-acm-gray-900 order-2 w-fit px-4 text-3xl md:order-1 md:px-0 md:text-4xl">
          {monthNames[date.getMonth()]} {date.getFullYear()}
        </span>
        <button
          onClick={() => onNavigate(Navigate.PREVIOUS)}
          className="order-1 text-2xl transition hover:-translate-x-1 md:order-2 md:text-3xl"
        >
          <SlArrowLeft />
        </button>
        <button
          onClick={() => onNavigate(Navigate.NEXT)}
          className="order-3 text-2xl transition hover:translate-x-1 md:text-3xl"
        >
          <SlArrowRight />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-2 pb-4 md:flex md:gap-0 md:space-x-2 md:pb-0">
        <ToggleGroup
          type="multiple"
          value={selectedEventTypes}
          onValueChange={setSelectedEventTypes}
        >
          <ToggleGroupItem
            className="flex w-full items-center justify-center rounded-lg bg-acm-blue-700 px-4 py-2 text-white hover:bg-acm-blue-400 data-[state=on]:bg-acm-blue-500"
            value="general"
          >
            <div>GENERAL</div>
          </ToggleGroupItem>
          <ToggleGroupItem
            className="flex w-full items-center justify-center rounded-lg bg-acm-yellow-200 px-4 py-2 hover:bg-acm-yellow-300 data-[state=on]:bg-acm-yellow-500"
            value="spark"
          >
            <div>SPARK</div>
          </ToggleGroupItem>
          <ToggleGroupItem
            className="flex w-full items-center justify-center rounded-lg bg-acm-blue-200 px-4 py-2 hover:bg-acm-blue-100 data-[state=on]:bg-acm-blue-300"
            value="create"
          >
            <div>CREATE</div>
          </ToggleGroupItem>
          <ToggleGroupItem
            className="flex w-full items-center justify-center rounded-lg bg-acm-gray-800 px-4 py-2 hover:bg-acm-gray-300 data-[state=on]:bg-acm-gray-700"
            value="forge"
          >
            <div>FORGE</div>
          </ToggleGroupItem>
          <ToggleGroupItem
            className="flex w-full items-center justify-center rounded-lg bg-acm-purple-300 px-4 py-2 hover:bg-acm-purple-100 data-[state=on]:bg-acm-purple-200"
            value="das"
          >
            <div>DAS</div>
          </ToggleGroupItem>
          <ToggleGroupItem
            className="flex w-full items-center justify-center rounded-lg bg-acm-green-500 px-4 py-2 hover:bg-acm-green-300 data-[state=on]:bg-acm-green-200"
            value="bitbyte"
          >
            <div>BIT/BYTE</div>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
};

export default CustomToolbar;
