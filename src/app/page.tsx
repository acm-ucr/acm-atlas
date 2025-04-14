import ViewAllLink from "@/components/home/viewalllink";
import Header from "@/components/home/header";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import SeeMoreLink from "@/components/home/seemorelink";

const Home = () => {
  return (
    <div>
      <Header />
      <ViewAllLink link="/programs/spark">Spark</ViewAllLink>
      <ViewAllLink link="/programs/create">Create</ViewAllLink>
      <ViewAllLink link="/programs/forge">Forge</ViewAllLink>
      <UpcomingEvents />
      <SeeMoreLink />
    </div>
  );
};

export default Home;
