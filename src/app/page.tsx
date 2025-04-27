import ViewAllLink from "@/components/home/viewalllink";
import Header from "@/components/home/header";
import SeeMoreLink from "@/components/home/seemorelink";
import FeaturedProjects from "@/components/home/featuredprojects";
import Upcoming from "@/components/home/upcoming";
import CurrentOpportunities from "@/components/home/currentopportunities";

const Home = () => {
  return (
    <div>
      <Header />
      <CurrentOpportunities />
      <FeaturedProjects />
      <ViewAllLink link="/programs/spark">Spark</ViewAllLink>
      <ViewAllLink link="/programs/create">Create</ViewAllLink>
      <ViewAllLink link="/programs/forge">Forge</ViewAllLink>
      <Upcoming />
      <SeeMoreLink />
    </div>
  );
};

export default Home;
