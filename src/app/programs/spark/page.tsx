import Header from "@/components/programs/spark/header";
import JoinNow from "@/components/programs/join-now";
import SPARK1 from "@/public/spark_1.jpg";
const Page = () => {
  return (
    <div>
      <Header />
      <JoinNow
        textColor="text-acm-gray-500"
        backgroundColor="bg-amber-100"
        image={SPARK1}
      />
    </div>
  );
};

export default Page;
