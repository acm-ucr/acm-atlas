import ArrowLink from "@/components/home/viewalllink";
import Header from "@/components/home/header";

const Home = () => {
  return (
    <div>
      <Header />
      <ArrowLink link="/programs/spark">Spark</ArrowLink>
      <ArrowLink link="/programs/create">Create</ArrowLink>
      <ArrowLink link="/programs/forge">Forge</ArrowLink>
    </div>
  );
};

export default Home;
