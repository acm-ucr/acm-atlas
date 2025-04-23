import Header from "@/components/programs/spark/header";
import Joinus from "@/components/programs/joinus";
import Spark1 from "@/public/spark/spark1.webp";
import ProjectGrid from "@/components/programs/spark/projectgrid";
const Page = () => {
  return (
    <div>
      <Header />
      <Joinus
        textColor="text-acm-gray-500"
        backgroundColor="bg-acm-yellow-200"
        image={Spark1}
      />
      <ProjectGrid />
    </div>
  );
};

export default Page;
