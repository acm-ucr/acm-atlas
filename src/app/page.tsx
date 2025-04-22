import ViewAllLink from "@/components/home/viewalllink";
import Header from "@/components/home/header";
import SeeMoreLink from "@/components/home/seemorelink";
import FeaturedProjects from "@/components/home/featuredprojects";
import Upcoming from "@/components/home/upcoming";
import WhatWeDo from "@/components/WhatWeDo";

// In your page component:
<WhatWeDo />;

const Home = () => {
  return (
    <div>
      <Header />
      <ViewAllLink link="/programs/spark">Spark</ViewAllLink>
      <ViewAllLink link="/programs/create">Create</ViewAllLink>
      <ViewAllLink link="/programs/forge">Forge</ViewAllLink>
      <Upcoming />
      <SeeMoreLink />
      <FeaturedProjects />
      <WhatWeDo />
    </div>
  );
};

export default Home;
