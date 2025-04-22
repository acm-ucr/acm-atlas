import Header from "@/components/about/Header";
import WhyWeDoIt from "@/components/about/whywedoit";
import { WhyWeDoItData } from "@/data/whywedoit";

const Page = () => {
  return (
    <div>
      <Header />
      <WhyWeDoIt
        header={WhyWeDoItData.at(0)?.header}
        pText={WhyWeDoItData.at(0)?.pText}
        images={WhyWeDoItData.at(0)?.images.image1}
      />
    </div>
  );
};

export default Page;
