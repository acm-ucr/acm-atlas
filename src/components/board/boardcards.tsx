import { Board } from "@/data/board";
import BoardCard from "@/components/board/boardcard";

const BoardCards = () => {
  return (
    <div className="px-5">
      {Board.map(
        ({ position, shadow, photo, name, linkedin, github, color }, index) => (
          <BoardCard
            key={index}
            position={position}
            shadow={shadow}
            photo={photo}
            name={name}
            linkedin={linkedin}
            github={github}
            color={color}
          />
        ),
      )}
    </div>
  );
};

export default BoardCards;
