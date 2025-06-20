import ProgramHeader from "@/components/programs/programheader";
import Joinus from "@/components/programs/joinus";
import Forge1 from "@/public/forgepage/forge1.webp";
import FAQ from "@/components/ui/faq";
import Forge from "@/public/logos/forge.svg";
import grayEllipse from "@/public/ellipses/grayEllipse.svg";
import Carousel from "@/components/programs/carousel";
import ForgeTechstack from "@/data/techstacks/forgetechstack";
import WhatWeDo from "@/components/programs/forge/whatwedo";
import Stats from "@/components/programs/forge/stats";
import PhotoGallery from "@/components/programs/forge/photogallery";
import { ForgeFAQ } from "@/data/faq";

const Page = () => {
  return (
    <>
      <ProgramHeader
        header="FORGE"
        subtitle="Robotics"
        text="ACM Forge is a 10-week, quarter-long program that aims to develop a project combining software, electrical, and mechanical engineering aspects."
        logo={Forge}
        ellipse={grayEllipse}
      />
      <Stats />
      <Carousel data={ForgeTechstack} />
      <Joinus
        textColor="text-white"
        backgroundColor="bg-acm-gray-200"
        image={Forge1}
        name={"forge"}
      />
      <WhatWeDo />
      <FAQ faqData={ForgeFAQ} />
      <PhotoGallery />
    </>
  );
};

export default Page;
