import ViewAllLink from "@/components/home/viewalllink";
import Header from "@/components/home/header";
import SeeMoreLink from "@/components/home/seemorelink";
import FeaturedProjects from "@/components/home/featuredprojects";
import Upcoming from "@/components/home/upcoming";
import StatsGrid from "@/components/home/statsgrid";

const Home = () => {
  return (
    <div>
      <Header />
      <StatsGrid />
      <ViewAllLink link="/programs/spark">Spark</ViewAllLink>
      <ViewAllLink link="/programs/create">Create</ViewAllLink>
      <ViewAllLink link="/programs/forge">Forge</ViewAllLink>
      <Upcoming />
      <SeeMoreLink />
      <FeaturedProjects />
    </div>
  );
};

export default Home;
