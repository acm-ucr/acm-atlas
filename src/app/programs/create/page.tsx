import Header from "@/components/programs/create/header";
import Joinus from "@/components/programs/joinus";
import Create1 from "@/public/create/create1.webp";

const Page = () => {
  return (
    <div>
      <Header />
      <Joinus
        textColor="text-acm-gray-500"
        backgroundColor="bg-acm-blue-200"
        image={Create1}
      />
    </div>
  );
};
export default Page;
