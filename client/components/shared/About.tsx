import React from "react";
import Suitcase from "@/public/icons/suitcase.svg";
import logo from "@/public/images/logo-blue.png";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section
      className="shadow-lg backdrop-blur-lg dark:bg-[#1f2937] w-full py-12 md:py-24 lg:py-32"
      id="#about"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About the Internhub
              </h2>
              <p className="max-w-[600px]   text-gray-700 dark:text-gray-300 md:text-xl ">
              The Internship Cell at Institute of Innovation in Technology & Management serves as a bridge between academia and industry, facilitating valuable experiential learning opportunities for students across various disciplines. Our primary goal is to provide students with hands-on exposure to real-world work environments, helping them apply classroom knowledge to practical scenarios and develop essential skills for their future careers. Overall, the Internhub Cell strives to empower students to become versatile, adaptable professionals prepared to make meaningful contributions in their chosen fields.
              </p>
            </div>
          </div>
          <div className="  flex items-center justify-center">
            <Image
              alt="logo"
              src={logo}
              className="text-gray-900 shadow-lg  rounded-full md:h-56 md:w-56 h-32 w-32"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
