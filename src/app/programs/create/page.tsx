import ProgramHeader from "@/components/programs/programheader";
import Joinus from "@/components/programs/joinus";
import Create1 from "@/public/create/create1.webp";
import Create from "@/public/logos/create.svg";
import blueEllipse from "@/public/ellipses/blueEllipse.svg";

const Page = () => {
  return (
    <>
      <ProgramHeader
        header="CREATE"
        subtitle="UI/UX Design"
        text="ACM Create is a 10-week, quarter-long program focused on developing wireframes for Spark projects using Figma."
        logo={Create}
        ellipse={blueEllipse}
      />
      <Joinus
        textColor="text-acm-gray-500"
        backgroundColor="bg-acm-blue-200"
        image={Create1}
      />
    </>
  );
};
export default Page;
