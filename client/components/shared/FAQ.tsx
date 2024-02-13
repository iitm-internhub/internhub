import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Link from "next/link";

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
                You will be apply for internships through our portal . We will
                guide you through the process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                What types of internships will available?
              </AccordionTrigger>
              <AccordionContent>
                We will be offering a wide range of internships in various
                fields some selected by us some suggested by the students.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can I do an internship during the academic year?
              </AccordionTrigger>
              <AccordionContent>
                Short answer it depends, if its during summer duration yes,
                otherwise we will be providing you all with virtual internship
                offers as well.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                Can i get guidance and/or training in field I am intrested in?{" "}
              </AccordionTrigger>
              <AccordionContent>
                We will be having guest lectures and podcast on various topics
                to help you throughout your college journey. We will also
                provide filed specific guidance by our heads and mentors in
                InternHub.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                I want to be a part of Internhub as well, is there a way I
                could contribute?
              </AccordionTrigger>
              <AccordionContent>
                We would be more than happy to have more helping hands, if you
                or someone you know could help us provide more values to the
                students fell free to reach us on{" "}
                <Link
                  className="text-blue-600"
                  href="mailto:internhub.iintm@gmail.com"
                  target="_blank"
                >
                  Email.
                </Link>{" "}
                You could also reach us offline at our campus{" "}
                <Link
                  href="https://maps.app.goo.gl/VXzcHziT2wRfp9jy9"
                  className="text-blue-600"
                >
                  IITM D-27 Janakpuri.
                </Link>
              </AccordionContent>
            </AccordionItem>
            
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
