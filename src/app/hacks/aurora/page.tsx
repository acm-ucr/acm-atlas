import Stats from "@/components/hacks/aurora/stats";
import AuroraButtons from "@/components/hacks/aurora/aurorabuttons";
import auroraLogo from "@/public/logos/aurora.svg";
import ProgramHeader from "@/components/programs/programheader";

const Page = () => {
  return (
    <div>
      <ProgramHeader
        header="AURORA"
        subtitle="Software Engineering"
        text="Aurora is not a 10 week program that focuses on developing wireframes on Figma for Spark Projects."
        logo={auroraLogo}
      />
      <Stats />
      <AuroraButtons />
    </div>
  );
};

export default Page;
