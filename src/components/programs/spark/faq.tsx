import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div>
      <p className="text-acm-gray-500 m-auto text-center text-5xl font-bold">
        FREQUENTLY ASKED QUESTIONS
      </p>
      <Accordion type="single" collapsible className="mx-auto w-3/4">
        <AccordionItem value="item-1">
          <AccordionTrigger>Do I need experience to join?</AccordionTrigger>
          <AccordionContent>
            No experience needed! All content related to the tech stack will be
            covered in weekly meetings by your project lead.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            What programming languages and tools will I learn and use?
          </AccordionTrigger>
          <AccordionContent>
            Next.js, Typescript, TailwindCSS, React Query, Shadcn, Eslint,
            Prettier, Github Actions
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
            Next.js, Git/Github, Tailwindcss styling, mobile responsiveness,
            animations with motion.dev, & more
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
          <AccordionContent>Of course!</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>Who is the program for?</AccordionTrigger>
          <AccordionContent>
            Everyone can apply, regardless of whether you are from UCR or
            another school.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
