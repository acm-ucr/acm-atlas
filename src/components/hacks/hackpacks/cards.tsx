import Card from "./card";
import { HACKPACKS } from "@/data/hackpacks";

const Cards = () => (
  <div className="mx-auto flex w-11/12 flex-col justify-center">
    <p className="mt-10 py-8 text-center text-4xl md:text-6xl font-bold text-acm-gray-500">
      HACKPACKS
    </p>
    <p className="pb-8 text-2xl md:text-4xl font-bold text-acm-gray-500">
      WHAT ARE HACKPACKS?
    </p>
    <p className="text-lg md:text-2xl text-acm-gray-500">
      Hackpacks are GitHub templates with pre-configured starter code, designed
      to get you up and running fast without the hassle of setup. Whether you're
      at a hackathon or starting a new project, hackpacks provide an
      out-of-the-box foundation so you can focus on building.
    </p>
    <div className="grid grid-cols-1 gap-8 py-16 sm:grid-cols-2 lg:grid-cols-3">
      {HACKPACKS.map((hackpack) => (
        <Card key={hackpack.title} {...hackpack} />
      ))}
    </div>
  </div>
);

export default Cards;
