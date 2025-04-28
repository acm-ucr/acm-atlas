import CurrOppCard from "./opportunitiescard";
import opportunities from "@/data/opportunities";

const CurrentOpportunities = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <p className="text-6xl font-bold text-gray-600">CURRENT OPPORTUNITIES</p>
      <div className="flex w-[80%] flex-wrap justify-center gap-15">
        {opportunities.map((item, id) => (
          <CurrOppCard
            key={id}
            name={item.name}
            cardBackground={item.card_background}
            appYearAndQuarter={item.year_and_quarter}
            applicationLink={item.application_link}
            link={item.link}
            index={id + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default CurrentOpportunities;
