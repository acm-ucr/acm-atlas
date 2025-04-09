import ArrowLink from "@/components/home/arrowlink";
import Header from "@/components/home/header";

const Home = () => {
  return (
    <div>
      <Header />
      <ArrowLink link="/programs/spark">// children</ArrowLink>
      <ArrowLink link="/programs/create">Create</ArrowLink>
      <ArrowLink link="/programs/forge">// Children</ArrowLink>
    </div>
  );
};

export default Home;
