import Landing from "@/components/home/landing";
import StatsGrid from "@/components/home/statsgrid";
import FeaturedProjects from "@/components/home/featuredprojects";
import SeeMore from "@/components/home/seemore";
import CurrentOpportunities from "@/components/home/currentopportunities";
import Events from "@/components/events/upcomingevents/events";

const Home = () => {
  return (
    <>
      <Landing />
      <StatsGrid />
      <CurrentOpportunities />
      <FeaturedProjects />
      <Events />
      <SeeMore />
    </>
  );
};

export default Home;
