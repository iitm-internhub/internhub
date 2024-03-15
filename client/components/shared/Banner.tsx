import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Banner: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center flex-col">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Welcome to the IITM Internship Cell
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Connecting students with industry leaders for unparalleled
              internship experiences.
            </p>
          </div>
          <Button asChild>
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
