import Landing from "@/components/home/landing";
import StatsGrid from "@/components/home/statsgrid";
import FeaturedProjects from "@/components/home/featuredprojects";
import SeeMore from "@/components/home/seemore";
import CurrentOpportunities from "@/components/home/currentopportunities";
import UpcomingEvents from "@/components/events/upcomingevents/upcomingevents";

const Home = () => {
  return (
    <>
      <Landing />
      <StatsGrid />
      <CurrentOpportunities />
      <FeaturedProjects />
      <UpcomingEvents />
      <SeeMore />
    </>
  );
};

export default Home;
