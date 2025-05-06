import ProgramHeader from "@/components/programs/programheader";
import Joinus from "@/components/programs/joinus";
import Create1 from "@/public/create/create1.webp";

import FAQ from "@/components/programs/create/faq";

import Create from "@/public/logos/create.svg";
import blueEllipse from "@/public/ellipses/blueEllipse.svg";
import Carousel from "@/components/programs/carousel";
import create from "@/data/techstacks/create";

const Page = () => {
  return (
    <>
      <ProgramHeader
        header="CREATE"
        subtitle="UI/UX Design"
        text="ACM Create is a 10-week, quarter-long program focused on developing wireframes for Spark projects using Figma."
        logo={Create}
        ellipse={blueEllipse}
      />
      <Carousel
        data={create}
        pad={"px-[1vw]"}
        padmd={"md:px-[6vw]"}
        pad2xl={"2xl:px-[10vw]"}
      />
      <Joinus
        textColor="text-acm-gray-500"
        backgroundColor="bg-acm-blue-200"
        image={Create1}
      />
      <FAQ />
    </>
  );
};
export default Page;
