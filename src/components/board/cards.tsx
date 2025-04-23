import { Board } from "@/data/board";
import Card from "@/components/board/card";

const Cards = () => {
  return (
    <div className="grid grid-cols-3 px-5">
      {Board.map(
        ({ name, position, color, shadow, photo, linkedin, github }, index) => (
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
  );
};

export default Cards;
