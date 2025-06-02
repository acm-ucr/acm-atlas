import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqData: FAQItem[];
}

const FAQ = ({ faqData }: FAQProps) => {
  return (
    <div className="mb-[6vh]">
      <p className="my-[6vh] text-center text-5xl font-bold text-acm-gray-500">
        FREQUENTLY ASKED QUESTIONS
      </p>
      <Accordion type="single" collapsible className="mx-auto w-3/4">
        {faqData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
