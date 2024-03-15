"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Loader from "@/components/shared/Loader";

// import About from "@/components/shared/About";
// import Banner from "@/components/shared/Banner";
// import CurrentOppourtunities from "@/components/shared/CurrentOppourtunities";
// import FAQ from "@/components/shared/FAQ";
// import Testimonials from "@/components/shared/Testimonials";

import { useAuth } from "@/components/context/auth";
import Footer from "@/components/shared/Footer";

const EventsCarousel = dynamic(
  () => import("@/components/shared/EventsCarousel")
);
const About = dynamic(() => import("@/components/shared/About"));
const Banner = dynamic(() => import("@/components/shared/Banner"));
const CurrentOppourtunities = dynamic(
  () => import("@/components/shared/CurrentOppourtunities")
);
const FAQ = dynamic(() => import("@/components/shared/FAQ"));
const Testimonials = dynamic(() => import("@/components/shared/Testimonials"));

const Main = () => {
  const { userId } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const isAuth = !!userId;
    setIsAuthenticated(isAuth);
    setIsLoading(false);
  }, [userId]);

  if (isLoading) {
    return (
      <div className="h-lvh flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <main className="bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      {!isLoading && (
        <div>
          {/* {isAuthenticated ? <EventsCarousel /> : <Banner />} */}
          <Banner />
          <About />
          <CurrentOppourtunities />
          <Testimonials />
          <FAQ />
          <div className="mt-32">
            <Footer />
          </div>
        </div>
      )}
    </main>
  );
};

export default Main;
