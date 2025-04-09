import ViewAllLink from "@/components/home/viewalllink";
import Header from "@/components/home/header";
import SeeMoreLink from "@/components/home/seemore";

const Home = () => {
  return (
    <div>
      <Header />
      <ViewAllLink link="/programs/spark">Spark</ViewAllLink>
      <ViewAllLink link="/programs/create">Create</ViewAllLink>
      <ViewAllLink link="/programs/forge">Forge</ViewAllLink>
      <SeeMoreLink />
    </div>
  );
};

export default Home;
