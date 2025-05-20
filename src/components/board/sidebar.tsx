import Image from "next/image";
import logos from "@/data/logos";

type SectionRefs = {
  [key: string]: React.RefObject<HTMLDivElement | null>;
};

const Sidebar = ({ sectionRefs }: { sectionRefs: SectionRefs }) => {
  const handleScrollToSection = (section: string) => {
    const sectionRef = sectionRefs[section];
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed left-7 top-1/2 hidden h-1/2 w-[7%] -translate-y-1/2 bg-gradient-to-b from-white via-[#D9D9D9] to-white px-4 md:flex md:justify-center">
      <div className="flex flex-col items-center gap-5">
        {logos.map(({ image, alt }, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={alt}
              className="w-16 hover:scale-105 hover:cursor-pointer hover:opacity-75"
              onClick={() => handleScrollToSection(alt)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
