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
        <AccordionTrigger>Are there any requirements?</AccordionTrigger>
        <AccordionContent>
          No, there aren't any hard requirements for being a mentor or mentee.
          However, we recommend that a mentor have some prior academic or
          professional experience.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How long does it last?</AccordionTrigger>
        <AccordionContent>
          We will have supporting activities throughout the school year.
          However, this relationship can extend well beyond in the future!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQ;
