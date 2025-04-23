import ViewAllLink from "@/components/home/viewalllink";
import Upcoming from "@/components/home/upcoming";
import SeeMoreLink from "@/components/home/seemorelink";
import FeaturedProjects from "@/components/home/featuredprojects";
import Landing from "@/components/home/landing";

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
