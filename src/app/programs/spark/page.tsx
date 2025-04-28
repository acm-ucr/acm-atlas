import Header from "@/components/programs/spark/header";
import Joinus from "@/components/programs/joinus";
import Spark1 from "@/public/spark/spark1.webp";
import Projects from "@/components/programs/projects";

const Page = () => {
  return (
    <div>
      <Header />
      <Joinus
        textColor="text-acm-gray-500"
        backgroundColor="bg-acm-yellow-200"
        image={Spark1}
      />
      <Projects />
    </div>
  );
};

export default Page;
