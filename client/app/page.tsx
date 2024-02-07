"use client";

import { useAuth } from "@/components/context/auth";
import About from "@/components/shared/About";
import Banner from "@/components/shared/Banner";
import CurrentOppourtunities from "@/components/shared/CurrentOppourtunities";
import EventsCarousel from "@/components/shared/EventsCarousel";
import FAQ from "@/components/shared/FAQ";
import Testimonials from "@/components/shared/Testimonials";
import React from "react";

const Main = () => {
  const { userId } = useAuth();
  const isAuthenticated = !!userId;

  return (
    <main>
      <div className="">
        {isAuthenticated ? <EventsCarousel /> : <Banner />}
        <About />
        <CurrentOppourtunities />
        <Testimonials />
        <FAQ />
      </div>
    </main>
  );
};

export default Main;
