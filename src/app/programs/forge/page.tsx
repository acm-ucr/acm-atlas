import ProgramHeader from "@/components/programs/programheader";
import Joinus from "@/components/programs/joinus";
import Forge1 from "@/public/forgepage/forge1.webp";
import FAQ from "@/components/programs/forge/faq";
import Forge from "@/public/logos/forge.svg";
import grayEllipse from "@/public/ellipses/grayEllipse.svg";
import Carousel from "@/components/programs/carousel";
import ForgeTechstack from "@/data/techstacks/forgetechstack";
import WhatWeDo from "@/components/programs/forge/whatwedo";

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
      <Carousel data={ForgeTechstack} />
      <Joinus
        textColor="text-white"
        backgroundColor="bg-acm-gray-200"
        image={Forge1}
      />
      <WhatWeDo />
      <FAQ />
    </>
  );
};

export default Page;
