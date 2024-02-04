import { Metadata } from "next";
import Image from "next/image";

import dommyPerson from "@/public/images/dommy.jpg";

export const metadata: Metadata = {
  title: "InternHub - Teams",
  description: "IINTM Placement cell",
};

const Teams = () => {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Placement Cell Team
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Meet our dedicated team who are working tirelessly to ensure the
              best placements for our students.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="card">
              <Image
                alt="Team member"
                className="w-full h-80 object-cover"
                height={1000}
                src={dommyPerson}
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width={1000}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">John Doe</h3>
                <p className="text-gray-500">Placement Officer</p>
                <p className="text-gray-500">johndoe@example.com</p>
                <p className="text-gray-500">+1 234 567 890</p>
              </div>
            </div>
            <div className="card">
              <Image
                alt="Team member"
                className="w-full h-80 object-cover"
                height={1000}
                src={dommyPerson}
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width={1000}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Jane Smith</h3>
                <p className="text-gray-500">Placement Coordinator</p>
                <p className="text-gray-500">janesmith@example.com</p>
                <p className="text-gray-500">+1 234 567 890</p>
              </div>
            </div>
            <div className="card">
              <Image
                alt="Team member"
                className="w-full h-80 object-cover"
                height={1000}
                src={dommyPerson}
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width={1000}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Robert Johnson</h3>
                <p className="text-gray-500">Placement Assistant</p>
                <p className="text-gray-500">robertjohnson@example.com</p>
                <p className="text-gray-500">+1 234 567 890</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-2 text-center">
            <h2 className="text-xl font-bold">Contact Us</h2>
            <p className="text-gray-500">placementcell@example.com</p>
            <p className="text-gray-500">+1 234 567 890</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Teams;
