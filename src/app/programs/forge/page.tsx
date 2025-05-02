import ProgramHeader from "@/components/programs/programheader";
import Joinus from "@/components/programs/joinus";
import Forge1 from "@/public/forge/forge1.webp";
import Forge from "@/public/logos/forge.svg";
import grayEllipse from "@/public/ellipses/grayEllipse.svg";

const Page = () => {
  return (
    <>
      <ProgramHeader
        header="FORGE"
        subtitle="Robotics"
        text="ACM Forge is a 10-week, quarter-long program that aims to develop a project combining software, electrical, and mechanical engineering aspects."
        logo={Forge}
        ellipse={grayEllipse}
      />
      <Joinus
        textColor="text-white"
        backgroundColor="bg-acm-gray-200"
        image={Forge1}
      />
    </>
  );
};

export default Page;
