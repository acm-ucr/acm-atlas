import Card from "./card";
import { HACKPACKS } from "@/data/user/hackpacks";

const Cards = () => (
  <div className="flex w-full justify-center">
    <div className="grid w-full max-w-5xl grid-cols-1 gap-8 pb-16 pt-16 sm:grid-cols-2 lg:grid-cols-3">
      {HACKPACKS.map((hackpack) => (
        <Card key={hackpack.title} {...hackpack} />
      ))}
    </div>
  </div>
);

export default Cards;
