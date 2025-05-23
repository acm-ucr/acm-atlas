import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

interface CalendarTopProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const CalendarTop = ({
  currentDate,
  onPrevMonth,
  onNextMonth,
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
      <div className="grid grid-cols-3 gap-2 pb-4 md:flex md:gap-0 md:space-x-2 md:pb-0">
        <div className="flex w-full items-center justify-center rounded-lg bg-acm-blue-700 px-4 py-2 text-white">
          GENERAL
        </div>
        <div className="flex w-full items-center justify-center rounded-lg bg-acm-yellow-200 px-4 py-2">
          SPARK
        </div>
        <div className="flex w-full items-center justify-center rounded-lg bg-acm-blue-200 px-4 py-2">
          CREATE
        </div>
        <div className="flex w-full items-center justify-center rounded-lg bg-acm-gray-800 px-4 py-2">
          FORGE
        </div>
        <div className="flex w-full items-center justify-center rounded-lg bg-acm-purple-300 px-4 py-2">
          DAS
        </div>
        <div className="flex w-full items-center justify-center rounded-lg bg-acm-green-500 px-4 py-2">
          BIT/BYTE
        </div>
      </div>
    </div>
  );
};

export default CalendarTop;
