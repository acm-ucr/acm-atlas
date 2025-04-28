import Landing from "@/components/home/landing";
import StatsGrid from "@/components/home/statsgrid";
import FeaturedProjects from "@/components/home/featuredprojects";
import Upcoming from "@/components/home/upcoming";
import SeeMoreLink from "@/components/home/seemorelink";
import WhatWeDo from "@/components/WhatWeDo";

const Home = () => {
  return (
    <div>
      <Landing />
      <StatsGrid />
      <WhatWeDo />
      <FeaturedProjects />
      <Upcoming />
      <SeeMoreLink />
    </div>
  );
};

export default Home;
