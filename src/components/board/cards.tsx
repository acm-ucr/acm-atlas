"use client";

import { Board } from "@/data/board";
import Card from "@/components/board/card";

type SectionRefs = {
  [key: string]: React.RefObject<HTMLDivElement | null>;
};

const Cards = ({ sectionRefs }: { sectionRefs: SectionRefs }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-20">
      {Board.map(({ title, members }, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center"
          ref={sectionRefs[title]}
        >
          <p className="text-acm-gray-500 text-4xl font-bold">{title}</p>
          <div className="grid grid-cols-2 items-center justify-center gap-y-8 px-5 md:grid-cols-3">
            {members.map(
              (
                { name, position, color, shadow, photo, linkedin, github },
                index,
              ) => (
                <Card
                  key={index}
                  name={name}
                  position={position}
                  color={color}
                  shadow={shadow}
                  photo={photo}
                  linkedin={linkedin}
                  github={github}
                />
              ),
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
