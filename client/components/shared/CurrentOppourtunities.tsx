import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const CurrentOppourtunities: React.FC = () => {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      id="opportunities"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
          Current Internship Opportunities
        </h2>
        <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Software Engineer Intern</CardTitle>
              <CardDescription>Google Inc.</CardDescription>
            </CardHeader>
            <CardContent>
              Work on next-generation technologies to deliver high-quality
              software for Google&apos;s platforms.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Data Science Intern</CardTitle>
              <CardDescription>Microsoft Corp.</CardDescription>
            </CardHeader>
            <CardContent>
              Leverage data-driven insights to improve product performance and
              user experience.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Product Design Intern</CardTitle>
              <CardDescription>Apple Inc.</CardDescription>
            </CardHeader>
            <CardContent>
              Collaborate with cross-functional teams to deliver innovative
              product designs.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CurrentOppourtunities;
