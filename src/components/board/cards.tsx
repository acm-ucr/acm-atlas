import board from "@/data/board";
import Card from "@/components/board/card";
import { motion } from "motion/react";

type SectionRefs = {
  [key: string]: React.RefObject<HTMLDivElement>;
};

const slidedownanimation = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const getTitleAnimation = () => ({
  transition: { duration: 0.5 },
  viewport: { once: true, amount: 0.5 },
  initial: "hidden",
  whileInView: "show",
  whileHover: { scale: 1.05 },
});

const Cards = ({ sectionRefs }: { sectionRefs: SectionRefs }) => {
  return (
    <div className="flex flex-col items-center justify-center pb-[6vh]">
      {board.map(({ title, members }, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center text-center"
          ref={sectionRefs[title]}
        >
          <p className="pt-12 text-4xl font-bold text-acm-gray-500">{title}</p>
          <div className="grid grid-cols-1 items-center justify-center md:grid-cols-3">
            {members.map(
              (
                { name, position, color, shadow, photo, linkedin, github },
                index,
              ) => (
                <motion.div
                  variants={slidedownanimation}
                  key={index}
                  {...getTitleAnimation()}
                >
                  <Card
                    name={name}
                    position={position}
                    color={color}
                    shadow={shadow}
                    photo={photo}
                    linkedin={linkedin}
                    github={github}
                  />
                </motion.div>
              ),
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
