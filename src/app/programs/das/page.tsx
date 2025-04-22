import Header from "@/components/programs/das/header";
import JoinNow from "@/components/programs/join-now";
import DAS2 from "@/public/DAS_2.webp";

const Page = () => {
  return (
    <div>
      <Header />
      <JoinNow
        textColor="text-white"
        backgroundColor="bg-[#B889EA]"
        image={DAS2}
      />
    </div>
  );
};

export default Page;
