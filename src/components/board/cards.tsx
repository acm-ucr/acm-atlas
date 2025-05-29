import { Board } from "@/data/board";
import Card from "@/components/board/card";
import { motion } from "motion/react";
import React from "react";

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
    <div className="flex flex-col items-center justify-center gap-20 pb-[6vh]">
      {Board.map(({ title, members }, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center text-center"
          ref={sectionRefs[title]}
        >
          <motion.p
            className="text-4xl font-bold text-acm-gray-500"
            {...getTitleAnimation()}
          >
            {title}
          </motion.p>
          <div className="grid grid-cols-2 items-center justify-center gap-y-8 px-5 md:grid-cols-3">
            {members.map(
              (
                { name, position, color, shadow, photo, linkedin, github },
                index,
              ) => (
                <motion.div
                  variants={slidedownanimation}
                  key={index}
                  {...getTitleAnimation()}
                  className="font-libre group flex flex-col items-center text-sm font-bold md:text-2xl 2xl:text-3xl"
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
