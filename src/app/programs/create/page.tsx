import Header from "@/components/programs/create/header";
import Joinus from "@/components/programs/joinus";
import Create1 from "@/public/create/create1.webp";
import FAQ from "@/components/programs/create/faq";

const Page = () => {
  return (
    <div>
      <Header />
      <Joinus
        textColor="text-acm-gray-500"
        backgroundColor="bg-acm-blue-200"
        image={Create1}
      />
      <FAQ />
    </div>
  );
};
export default Page;
