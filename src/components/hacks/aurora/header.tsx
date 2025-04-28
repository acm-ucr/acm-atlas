import auroraIcon from "@/public/logos/aurora.svg";
import ProgramHeader from "@/components/programs/programheader";

const Header = () => {
  return (
    <ProgramHeader
      header="AURORA"
      subtitle="Software Engineering"
      text="Aurora is not a 10 week program that focuses on developing wireframes on Figma for Spark Projects."
      logo={auroraIcon}
    />
  );
};

export default Header;
