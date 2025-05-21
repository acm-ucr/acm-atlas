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
      <div className="absolute left-[45vw] -translate-y-4 2xl:left-[57vw] 2xl:-translate-y-4">
        <div className="flex gap-2 text-lg">
          <div className="rounded-lg border-4 border-acm-blue-700 p-2">
            GENERAL
          </div>
          <div className="rounded-lg border-4 border-acm-yellow-200 p-2">
            SPARK
          </div>
          <div className="rounded-lg border-4 border-acm-blue-200 p-2">
            CREATE
          </div>
          <div className="rounded-lg border-4 border-acm-gray-800 p-2">
            FORGE
          </div>
          <div className="rounded-lg border-4 border-acm-purple-300 p-2">
            DAS
          </div>
          <div className="rounded-lg border-4 border-acm-green-500 p-2">
            BIT/BYTE
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarTop;
