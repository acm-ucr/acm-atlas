import CurrOppCard from "./opportunitiescard";
import opportunities from "@/data/opportunities";

const CurrentOpportunities = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-6xl font-bold text-gray-600">CURRENT OPPORTUNITIES</p>
      <div className="flex w-11/12 flex-wrap justify-center gap-15">
        {opportunities.map(
          (
            { name, card_background, year_and_quarter, application_link, link },
            id,
          ) => (
            <CurrOppCard
              key={id}
              name={name}
              cardBackground={card_background}
              appYearAndQuarter={year_and_quarter}
              applicationLink={application_link}
              link={link}
              index={id + 1}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default CurrentOpportunities;
