import ProgramHeader from "@/components/programs/programheader";
import Joinus from "@/components/programs/joinus";
import Das1 from "@/public/daspage/das1.webp";
import FAQ from "@/components/programs/das/faq";
import DAS from "@/public/logos/das.svg";
import purpleEllipse from "@/public/ellipses/purpleEllipse.svg";
import Carousel from "@/components/programs/carousel";
import DASTechstack from "@/data/techstacks/dastechstack";
import WhatWeDo from "@/components/programs/das/whatwedo";

const Page = () => {
  return (
    <>
      <ProgramHeader
        header="DAS"
        subtitle="Data Science, AI, Statistics"
        text="ACM DAS is a 10-week program that focuses on developing Data Science skills working with Big Data, Machine Learning, and Computational Stats projects."
        logo={DAS}
        ellipse={purpleEllipse}
      />
      <Carousel
        data={DASTechstack}
      />
      <Joinus
        textColor="text-white"
        backgroundColor="bg-acm-purple-200"
        image={Das1}
      />
      <WhatWeDo />
      <FAQ />
    </>
  );
};

export default Page;
