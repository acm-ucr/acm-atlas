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
    <div className="fixed top-50 left-7 max-h-[55vh] w-1/18 bg-linear-to-b from-white from-10% via-[#D9D9D9] via-54% to-white to-99% pl-4">
      <div className="flex flex-col gap-5">
        {logos.map(({ image, alt }, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={alt}
              width={100}
              className="hover:cursor-pointer"
              onClick={() => handleScrollToSection(alt)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
