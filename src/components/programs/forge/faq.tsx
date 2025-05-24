import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="mb-[6vh]">
      <p className="my-[6vh] text-center text-5xl font-bold text-acm-gray-500">
        FREQUENTLY ASKED QUESTIONS
      </p>
      <Accordion type="single" collapsible className="mx-auto w-3/4">
        <AccordionItem value="item-1">
          <AccordionTrigger>Do I need experience to join?</AccordionTrigger>
          <AccordionContent>
            No experience needed! Your leads will help you learn the tools
            required for these projects.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            What programming languages and tools will I learn and use?
          </AccordionTrigger>
          <AccordionContent>
            It varies per subteam: CS: Python and Conda, and project-specific
            tools like OpenCV. EE: Soldering, Python and Conda ME: Solidworks
          </AccordionContent>
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
            Our topics are project-dependent. We tend to cover object detection
            and training an object detection model, motor control, and
            integration over CS, EE, and ME.
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
          <AccordionContent>
            The program will have a cost to help fund the purchase of physical
            parts like servos and filament.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>
            Can I use the projects I build in my resume/portfolio?
          </AccordionTrigger>
          <AccordionContent>Of course!</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>Who is the program for?</AccordionTrigger>
          <AccordionContent>Any UCR student can apply!</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
