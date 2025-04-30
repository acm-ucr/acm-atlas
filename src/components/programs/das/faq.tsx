import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Do I need any prior experience to join?
        </AccordionTrigger>
        <AccordionContent>
          No experience is required, but any is always welcomed.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          How long does the program take to complete?
        </AccordionTrigger>
        <AccordionContent>
          Projects will last 9-10 weeks in a quarter.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>When do applications come out?</AccordionTrigger>
        <AccordionContent>
          Applications for the following quarter's projects will be released
          between the middle and end of the quarter.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>How do I apply to the program?</AccordionTrigger>
        <AccordionContent>
          You can find the application here, on our Instagram and Discord.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQ;
