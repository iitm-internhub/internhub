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
import axiosInstance from "@/lib/axios-instance";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

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
    <main>
      {!isLoading && (
        <div>
          {isAuthenticated ? <EventsCarousel /> : <Banner />}
          <About />
          <CurrentOppourtunities  />
          <Testimonials />
          <FAQ />
        </div>
      )}
    </main>
  );
};

export default Main;
