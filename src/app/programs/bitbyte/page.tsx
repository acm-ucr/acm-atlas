import Join from "@/components/programs/bitbyte/join";
import ProgramHeader from "@/components/programs/programheader";
import BitByte from "@/public/logos/bitbyte.svg";
import greenEllipse from "@/public/ellipses/greenEllipse.svg";
import FAQ from "@/components/ui/faq";
import { BitByteFAQ } from "@/data/faq";
const Page = () => {
  return (
    <>
      <ProgramHeader
        header="BIT/BYTE"
        subtitle="Mentorship"
        text="ACM Bit/Byte is a opportunity for students to receive mentorship and also give mentorship for academic, professional, and life advice!"
        logo={BitByte}
        ellipse={greenEllipse}
      />
      <Join />
      <FAQ faqData={BitByteFAQ} />
    </>
  );
};

export default Page;
