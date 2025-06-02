import {
  Accordion,
  AccordionContent,
  CohortItem,
  CohortTrigger,
} from "@/components/ui/accordion";
import Card from "./card";

interface Alumni {
  name: string;
  position: string;
  linkedin: string;
  github: string;
  color?: string;
}

interface AlumniProps {
  board: Alumni[];
  cohort: string;
}
interface Cohorts {
  cohorts: AlumniProps[];
}

const Dropdown = ({ cohorts }: Cohorts) => {
  return (
    <Accordion type="single" collapsible className="mx-auto mb-[8vh] w-10/12">
      {cohorts.map(({ board, cohort }, index) => (
        <CohortItem value={"item-" + (index + 1)} key={index}>
          <CohortTrigger>{cohort}</CohortTrigger>
          <AccordionContent className="grid grid-cols-1 gap-y-8 border-t-2 border-acm-blue-500 py-8 md:grid-cols-3">
            {board.map(({ name, position, linkedin, github, color }, idx) => (
              <Card
                name={name}
                position={position}
                linkedin={linkedin}
                github={github}
                color={color}
                key={idx}
              />
            ))}
          </AccordionContent>
        </CohortItem>
      ))}
    </Accordion>
  );
};

export default Dropdown;
