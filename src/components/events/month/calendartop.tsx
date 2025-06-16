import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface CalendarTopProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  selectedEventTypes: string[];
  setSelectedEventTypes: (types: string[]) => void;
}

const CalendarTop = ({
  currentDate,
  onPrevMonth,
  onNextMonth,
  selectedEventTypes,
  setSelectedEventTypes,
}: CalendarTopProps) => {
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
    <div className="mx-auto flex w-10/12 flex-col items-center justify-between md:flex-row">
      <div className="flex w-full items-center justify-center pb-6 md:justify-start md:space-x-4 md:pb-0">
        <span className="text-acm-gray-900 order-2 w-fit px-4 text-3xl md:order-1 md:px-0 md:text-4xl">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </span>
        <button
          onClick={onPrevMonth}
          className="order-1 text-2xl transition hover:-translate-x-1 md:order-2 md:text-3xl"
        >
          <SlArrowLeft />
        </button>
        <button
          onClick={onNextMonth}
          className="order-3 text-2xl transition hover:translate-x-1 md:text-3xl"
        >
          <SlArrowRight />
        </button>
      </div>
      <div>
        <ToggleGroup
          type="multiple"
          value={selectedEventTypes}
          onValueChange={setSelectedEventTypes}
          className="grid grid-cols-3 gap-2 pb-4 md:flex md:gap-0 md:space-x-2 md:pb-0"
        >
          <ToggleGroupItem
            className="flex w-full items-center justify-center rounded-lg bg-acm-blue-400 px-4 py-2 text-white data-[state=on]:bg-acm-blue-700 data-[state=on]:text-white"
            value="general"
          >
            <div>GENERAL</div>
          </ToggleGroupItem>
          <ToggleGroupItem
            className="flex w-full items-center justify-center rounded-lg bg-acm-yellow-100 px-4 py-2 text-acm-gray-400 data-[state=on]:bg-acm-yellow-200 data-[state=on]:text-acm-gray-500"
            value="spark"
          >
            <div>SPARK</div>
          </ToggleGroupItem>
          <ToggleGroupItem
            className="flex w-full items-center justify-center rounded-lg bg-acm-blue-200 px-4 py-2 text-acm-gray-400 data-[state=on]:bg-acm-blue-100 data-[state=on]:text-acm-gray-500"
            value="create"
          >
            <div>CREATE</div>
          </ToggleGroupItem>
          <ToggleGroupItem
            className="flex w-full items-center justify-center rounded-lg bg-acm-gray-800 px-4 py-2 text-acm-gray-400 data-[state=on]:bg-acm-gray-400 data-[state=on]:text-white"
            value="forge"
          >
            <div>FORGE</div>
          </ToggleGroupItem>
          <ToggleGroupItem
            className="flex w-full items-center justify-center rounded-lg bg-acm-purple-300 px-4 py-2 text-acm-gray-400 data-[state=on]:bg-acm-purple-200 data-[state=on]:text-acm-gray-500"
            value="das"
          >
            <div>DAS</div>
          </ToggleGroupItem>
          <ToggleGroupItem
            className="flex w-full items-center justify-center rounded-lg bg-acm-green-100 px-4 py-2 text-acm-gray-400 data-[state=on]:bg-acm-green-500 data-[state=on]:text-acm-gray-500"
            value="bitbyte"
          >
            <div>BIT/BYTE</div>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
};

export default CalendarTop;
