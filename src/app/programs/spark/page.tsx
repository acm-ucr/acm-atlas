import ProgramHeader from "@/components/programs/programheader";
import Joinus from "@/components/programs/joinus";
import Spark1 from "@/public/spark/spark1.webp";
import ProjectGrid from "@/components/programs/spark/projectgrid";
import Spark from "@/public/logos/spark.svg";
import yellowEllipse from "@/public/ellipses/yellowEllipse.svg";

const Page = () => {
  return (
    <div>
      <ProgramHeader
        header="SPARK"
        subtitle="Web Development"
        text="ACM Spark is a 10 week program that focuses on static front-end web development for campus organizations / companies."
        logo={Spark}
        ellipse={yellowEllipse}
      />
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
