interface EventCardProps {
  date: string;
  month: string;
  title: string;
  description: string;
}
const EventCard: React.FC<EventCardProps> = ({
  date,
  month,
  title,
  description,
}) => {
  return (
    <div className="grid grid-cols-4 items-center rounded-lg shadow-lg">
      <div className="flex flex-col items-center">
        <p className="font-seasons text-sm md:text-[1vw]">{month}</p>
        <p className="text-[3.5vw] leading-none">{date}</p>
      </div>
      <div className="col-span-3 rounded-r-lg bg-indigo-200 py-2 pl-2 md:py-4 md:pl-6">
        <p className="text-md mr-[1vw] font-semibold md:text-[1.5vw]">
          {title}
        </p>
        <p className="text-xs text-gray-700 md:text-[0.8vw]">{description}</p>
      </div>
    </div>
  );
};
export default EventCard;
