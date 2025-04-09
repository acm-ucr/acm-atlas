import ViewAllLink from "@/components/home/viewalllink";
import Header from "@/components/home/header";

const Home = () => {
  return (
    <div>
      <Header />
      <ViewAllLink link="/programs/spark">Spark</ViewAllLink>
      <ViewAllLink link="/programs/create">Create</ViewAllLink>
      <ViewAllLink link="/programs/forge">Forge</ViewAllLink>
    </div>
  );
};

export default Home;
