"use client";

import React from "react";
import dynamic from "next/dynamic";
import Loader from "@/components/shared/Loader";

import About from "@/components/shared/About";
import Banner from "@/components/shared/Banner";
import CurrentOppourtunities from "@/components/shared/CurrentOppourtunities";
import FAQ from "@/components/shared/FAQ";
import Testimonials from "@/components/shared/Testimonials";

import { useAuth } from "@/components/context/auth";

const EventsCarousel = dynamic(
  () => import("@/components/shared/EventsCarousel"),
  { loading: Loader }
);

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
