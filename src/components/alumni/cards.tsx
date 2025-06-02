import alumni from "@/data/alumni";
import Dropdown from "./dropdown";

const Cards = () => {
  return (
    <>
      <p className="mt-10 py-8 text-center text-6xl font-bold text-acm-gray-500">
        OUR ALUMNI
      </p>
      <Dropdown cohorts={alumni} />
    </>
  );
};

export default Cards;
