interface CalendarTopProps {
  currentDate: Date;
}

const CalendarTop = ({ currentDate }: CalendarTopProps) => {
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUNE",
    "JULY",
    "AUG",
    "SEPT",
    "OCT",
    "NOV",
    "DEC",
  ];

  return (
    <div>
      <div className="absolute left-[13vw] w-[20vw] translate-y-[-1.5vw] text-[3vw]">
        {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
      </div>
      <div className="absolute left-[42vw] -translate-y-2 2xl:left-[57vw] 2xl:-translate-y-4">
        <div className="flex gap-x-2 text-lg">
          <div className="flex items-center justify-center rounded-lg bg-acm-blue-700 px-4 py-2 text-white">
            GENERAL
          </div>
          <div className="flex items-center justify-center rounded-lg bg-acm-yellow-200 px-4 py-2">
            SPARK
          </div>
          <div className="flex items-center justify-center rounded-lg bg-acm-blue-200 px-4 py-2">
            CREATE
          </div>
          <div className="flex items-center justify-center rounded-lg bg-acm-gray-800 px-4 py-2 text-white">
            FORGE
          </div>
          <div className="flex items-center justify-center rounded-lg bg-acm-purple-300 px-4 py-2 text-white">
            DAS
          </div>
          <div className="flex items-center justify-center rounded-lg bg-acm-green-500 px-4 py-2 text-white">
            BIT/BYTE
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarTop;
