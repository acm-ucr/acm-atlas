import ViewAllLink from "@/components/home/viewalllink";
import Landing from "@/components/home/landing";
import SeeMoreLink from "@/components/home/seemorelink";
import FeaturedProjects from "@/components/home/featuredprojects";
import Upcoming from "@/components/home/upcoming";

const Home = () => {
  return (
    <div>
      <Landing />
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
