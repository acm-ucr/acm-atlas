import WhyWeDoIt from "@/components/about/whywedoit";
import { WhyWeDoItData } from "@/data/whywedoit";

const Page = () => {
  return (
    <div>
      <WhyWeDoIt
        header={WhyWeDoItData.at(0)?.header}
        pText={WhyWeDoItData.at(0)?.pText}
      />
    </div>
  );
};

export default Page;
