import Gallery from "@/components/join/gallery";
import Instagram from "@/components/join/instagram";
import Header from "@/components/join/header";
import FAQ from "@/components/ui/faq";
import { JoinFAQ } from "@/data/faq";
const Page = () => {
  return (
    <>
      <Header />
      <FAQ faqData={JoinFAQ} />
      <Instagram />
      <Gallery />
    </>
  );
};

export default Page;
