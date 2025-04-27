import Header from "@/components/programs/forge/header";
import Joinus from "@/components/programs/joinus";
import Forge1 from "@/public/forge/forge1.webp";

const Page = () => {
  return (
    <div>
      <Header />
      <Joinus
        textColor="text-white"
        backgroundColor="bg-acm-gray-200"
        image={Forge1}
      />
    </div>
  );
};

export default Page;
