import ProgramHeader from "@/components/programs/programheader";
import Joinus from "@/components/programs/joinus";
import Das1 from "@/public/das/das1.webp";

import FAQ from "@/components/programs/das/faq";

import Das from "@/public/logos/das.svg";
import purpleEllipse from "@/public/ellipses/purpleEllipse.svg";

const Page = () => {
  return (
    <div>
      <ProgramHeader
        header="DAS"
        subtitle="Data Science, AI, Statistics"
        text="ACM DAS is a 10-week program that focuses on developing Data Science skills working with Big Data, Machine Learning, and Computational Stats projects."
        logo={Das}
        ellipse={purpleEllipse}
      />
      <Joinus
        textColor="text-white"
        backgroundColor="bg-acm-purple-200"
        image={Das1}
      />

      <FAQ />
    </div>
  );
};

export default Page;
