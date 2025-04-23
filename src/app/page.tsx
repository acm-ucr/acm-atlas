import Landing from "@/components/home/landing";
import FeaturedProjects from "@/components/home/featuredprojects";
import Upcoming from "@/components/home/upcoming";
import SeeMoreLink from "@/components/home/seemorelink";

const Home = () => {
  return (
    <div>
      <Landing />
      <FeaturedProjects />
      <Upcoming />
      <SeeMoreLink />
    </div>
  );
};

export default Home;
