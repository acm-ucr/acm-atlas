import ViewAllLink from "@/components/home/viewalllink";
import Header from "@/components/hacks/Header";
import Upcoming from "@/components/home/upcoming";
import SeeMoreLink from "@/components/home/seemorelink";
import FeaturedProjects from "@/components/home/featuredprojects";
import Landing from "@/components/home/landing";

const Home = () => {
  return (
    <div>
      <Header />
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
