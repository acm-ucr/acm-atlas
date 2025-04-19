import { Board } from "@/data/board";
import BoardCard from "@/components/board/boardcard";

const BoardCards = () => {
  return (
    <div className="grid grid-cols-3 px-5">
      {Board.map(
        ({ name, position, color, shadow, photo, linkedin, github }, index) => (
          <BoardCard
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
      {Board.map(
        ({ name, position, color, shadow, photo, linkedin, github }, index) => (
          <BoardCard
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
      {Board.map(
        ({ name, position, color, shadow, photo, linkedin, github }, index) => (
          <BoardCard
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
  );
};

export default BoardCards;
