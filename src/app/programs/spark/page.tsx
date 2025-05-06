import ProgramHeader from "@/components/programs/programheader";
import Joinus from "@/components/programs/joinus";
import Spark1 from "@/public/spark/spark1.webp";
import spark from "@/data/teckstacks/spark";
import Carousel from "@/components/programs/carousel";
import FAQ from "@/components/programs/spark/faq";
import Spark from "@/public/logos/spark.svg";
import yellowEllipse from "@/public/ellipses/yellowEllipse.svg";
import Projects from "@/components/programs/projects";

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
      <Carousel
        data={spark}
        pad={"px-[1vw]"}
        padmd={"md:px-[2.5vw]"}
        pad2xl={"2xl:px-[8vw]"}
      />
      <Joinus
        textColor="text-acm-gray-500"
        backgroundColor="bg-acm-yellow-200"
        image={Spark1}
      />
      <FAQ />
      <Projects />
    </div>
  );
};

export default Page;
