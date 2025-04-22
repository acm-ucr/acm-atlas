import Header from "@/components/programs/forge/header";
import JoinNow from "@/components/programs/join-now";
import FORGE1 from "@/public/forge_1.jpg";
const Page = () => {
  return (
    <div>
      <Header />
      <JoinNow
        textColor="text-white"
        backgroundColor="bg-[#47484A]"
        image={FORGE1}
      />
    </div>
  );
};

export default Page;
