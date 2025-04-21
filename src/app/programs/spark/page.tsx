import Header from "@/components/programs/spark/header";
import JoinNow from "@/components/programs/join-now";
import ACM from "@/public/acm.webp";
const Page = () => {
  return (
    <div>
      <Header />
      <JoinNow
        textColor="text-acm-gray-500"
        backgroundColor="bg-amber-100"
        image={ACM} //placeholder
      />
    </div>
  );
};

export default Page;
