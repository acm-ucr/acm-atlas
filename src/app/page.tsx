import Landing from "@/components/home/landing";
import StatsGrid from "@/components/home/statsgrid";
import FeaturedProjects from "@/components/home/featuredprojects";
import Upcoming from "@/components/home/upcoming";
import CurrentOpportunities from "@/components/home/currentopportunities";
import SeeMoreLink from "@/components/home/seemorelink";

const Home = () => {
  return (
    <div>
      <Landing />
      <StatsGrid />
      <FeaturedProjects />
      <Upcoming />
      <CurrentOpportunities />
      <SeeMoreLink />
    </div>
  );
};

export default Home;
