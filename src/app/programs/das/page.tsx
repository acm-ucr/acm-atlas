import Header from "@/components/programs/das/header";
import Joinus from "@/components/programs/joinus";
import Das1 from "@/public/das/das1.webp";
const Page = () => {
  return (
    <div>
      <Header />
      <Joinus
        textColor="text-white"
        backgroundColor="bg-acm-purple-200"
        image={Das1}
      />
    </div>
  );
};

export default Page;
