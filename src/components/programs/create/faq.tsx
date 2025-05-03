import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div>
      <p className="text-acm-gray-500 mt-8 mb-4 text-center text-5xl font-bold">
        FREQUENTLY ASKED QUESTIONS
      </p>
      <Accordion type="single" collapsible className="mx-auto w-3/4">
        <AccordionItem value="item-1">
          <AccordionTrigger>Do I need experience to join?</AccordionTrigger>
          <AccordionContent>No experience needed!</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What design tools will I learn?</AccordionTrigger>
          <AccordionContent>Figma</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            How long does the program take to complete?
          </AccordionTrigger>
          <AccordionContent>
            The program is ten weeks long, beginning at the start of UCR's
            quarter system and ending at its end.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            What topics are covered in the program?
          </AccordionTrigger>
          <AccordionContent>
            Intro to Figma, More Figma, UI/UX basics, web design
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>How do I apply to the program?</AccordionTrigger>
          <AccordionContent>
            When the application season rolls around, submit an application and
            schedule an interview!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            Is the program free, or is there a cost?
          </AccordionTrigger>
          <AccordionContent>The program is free.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>
            Can I use the projects I build in my resume/portfolio?
          </AccordionTrigger>
          <AccordionContent>
            Of course! After all you did design it!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>Who is the program for?</AccordionTrigger>
          <AccordionContent>
            Aspiring designers/anyone who wants to bring out their creative
            side.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
