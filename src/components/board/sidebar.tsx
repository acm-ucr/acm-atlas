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
    <div className="fixed top-1/2 left-7 hidden h-[40vh] w-1/18 -translate-y-1/2 bg-gradient-to-b from-white via-[#D9D9D9] to-white px-4 md:flex">
      <div className="flex flex-col gap-5">
        {logos.map(({ image, alt }, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={alt}
              width={100}
              className="hover:scale-105 hover:cursor-pointer hover:opacity-75"
              onClick={() => handleScrollToSection(alt)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
