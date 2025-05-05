// app/hacks/[hackathon]/page.tsx
import Hack from "@/components/hacks/hack";
import hacks from "@/data/hackathons";
import { notFound } from "next/navigation";

interface PageProps {
  params: { hackathon: string };
}

const Page = ({ params }: PageProps) => {
  const { hackathon } = params;
  const hack = hacks.find((h) => h.id === hackathon);

  if (!hack) return notFound();

  return (
    <Hack
      name={hack.name}
      website={hack.website}
      logo={hack.logo}
      description={hack.description}
      description2={hack.description2}
      subtitle={hack.subtitle}
      stats={hack.stats}
    />
  );
};

export default Page;

export async function generateStaticParams() {
  return hacks.map((hack) => ({
    hackathon: hack.id,
  }));
}
