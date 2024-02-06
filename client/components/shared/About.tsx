import React from "react";
import Suitcase from "@/public/icons/suitcase.svg";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="about">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About the Internhub
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                The Internhub internship cell of IITM aims to provide its
                students with comprehensive and quality industrial exposure. We
                facilitate summer internships and strive to bring year-round
                internship opportunities for our students.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              alt="suitcase"
              src={Suitcase}
              className="w-24 h-24 text-gray-900 dark:invert"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
