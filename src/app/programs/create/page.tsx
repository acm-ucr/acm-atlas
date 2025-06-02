import ProgramHeader from "@/components/programs/programheader";
import Joinus from "@/components/programs/joinus";
import Create1 from "@/public/createpage/create1.webp";
import FAQ from "@/components/ui/faq";
import Create from "@/public/logos/create.svg";
import blueEllipse from "@/public/ellipses/blueEllipse.svg";
import Carousel from "@/components/programs/carousel";
import CreateTechstack from "@/data/techstacks/createtechstack";
import WhatWeDo from "@/components/programs/create/whatwedo";
import Projects from "@/components/programs/projects";
import CreateProjects from "@/data/projects/createprojects";
import Stats from "@/components/programs/create/stats";
import { CreateFAQ } from "@/data/faq";

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
      <Stats />
      <Carousel data={CreateTechstack} />
      <Joinus
        textColor="text-acm-gray-500"
        backgroundColor="bg-acm-blue-200"
        image={Create1}
      />
      <WhatWeDo />
      <FAQ faqData={CreateFAQ} />
      <Projects projects={CreateProjects} />
    </>
  );
};
export default Page;
