import Hack from "@/components/hacks/hack";
import hacks from "@/data/hackathons";
import NotFound from "@/app/not-found";

const Page = ({ params }: { params: { hackathon: string } }) => {
  const hackathon = hacks.find((hack) => hack.id === params.hackathon);
  if (!hackathon) return <NotFound />;
  const { name, website } = hackathon;
  return <Hack name={name} website={website} />;
};

export default Page;
