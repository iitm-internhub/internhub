import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const Testimonials: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="testimonials">
      {/* <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
          Testimonials
        </h2>
        <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
      
        {/* <Card>
          <CardHeader>
            <CardTitle>John Doe</CardTitle>
            <CardDescription>Intern at Google</CardDescription>
          </CardHeader>
          <CardContent>
            The internship experience was transformative. I learned a lot and
            made some great connections.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Jane Smith</CardTitle>
            <CardDescription>Intern at Microsoft</CardDescription>
          </CardHeader>
          <CardContent>
            The internship was a great opportunity to apply what I&apos;ve
            learned in a real-world setting.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Bob Johnson</CardTitle>
            <CardDescription>Intern at Apple</CardDescription>
          </CardHeader>
          <CardContent>
            The internship provided me with valuable insights into the tech
            industry.
          </CardContent>
        </Card> 
        </div>
      </div>
     */}
    </section>
  );
};

export default Testimonials;
