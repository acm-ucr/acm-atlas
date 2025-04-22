import Header from "@/components/programs/create/header";
import JoinNow from "@/components/programs/join-now";
import CREATE1 from "@/public/create1.jpg";

const Page = () => {
  return (
    <div>
      <Header />
      <JoinNow
        textColor="text-acm-gray-500"
        backgroundColor="bg-[#CCEBFD]"
        image={CREATE1}
      />
    </div>
  );
};
export default Page;
