"use client";
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

  return (
    <Hack
      name={hack.name}
      website={hack.website}
      logo={hack.logo}
      description={hack.description}
      description2={hack.description2}
      subtitle={hack.subtitle}
      bgColor={hack.bgColor}
      textColor={hack.textColor}
      devposts={hack.devposts}
      stats={hack.stats}
      instagram={hack.instagram}
      email={hack.email}
    />
  );
};

export default Page;

export async function generateStaticParams() {
  return hacks.map((hack) => ({
    hackathon: hack.id,
  }));
}
