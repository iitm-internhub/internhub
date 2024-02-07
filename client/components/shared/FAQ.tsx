import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FAQ: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="faq">
      <div className="container px-4 md:px-6 flex items-center justify-center flex-col">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid place-items-center w-full my-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How can I apply for an internship?
              </AccordionTrigger>
              <AccordionContent>
                You can apply for internships through our portal. We will guide
                you through the process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                What types of internships are available?
              </AccordionTrigger>
              <AccordionContent>
                We offer a wide range of internships in various fields such as
                software engineering, data science, product design, and more
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can I do an internship during the academic year?
              </AccordionTrigger>
              <AccordionContent>
                The internship provided me with valuable insights into the tech
                industry.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                How can I apply for an internship?
              </AccordionTrigger>
              <AccordionContent>
                You can apply for internships through our portal. We will guide
                you through the process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                What types of internships are available?
              </AccordionTrigger>
              <AccordionContent>
                We offer a wide range of internships in various fields such as
                software engineering, data science, product design, and more
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                Can I do an internship during the academic year?
              </AccordionTrigger>
              <AccordionContent>
                The internship provided me with valuable insights into the tech
                industry.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
