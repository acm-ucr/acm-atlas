import Hack from "@/components/hacks/hack";
import hacks from "@/data/hackathons";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ hackathon: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { hackathon } = await params;

  const hack = hacks.find((h) => h.id === hackathon);
  if (!hack) return notFound();

  return <Hack name={hack.name} website={hack.website} logo={hack.logo} />;
};

export default Page;
