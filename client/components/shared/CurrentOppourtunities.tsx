"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import axiosInstance from "@/lib/axios-instance";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import Loader from "./Loader";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import OpportunitiesCard from "./OpportunitiesCard";

const UPLOADCARE_BASE_URL = "https://ucarecdn.com/";

interface CompanyInterface {
  id: string;

  companyName: string;
  companyDescription: string;
  companyJobTitle: string;
  companyJobDescription: string;
  companyJobType: string;
  companyJobDate: Date;
  companyLocation: string;
  companyLogo: string;
  companyBanner: string;
  companyJobStipend: string;
  companyJobRegistrationLink: string;
}

const CurrentOppourtunities: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [oppurtunities, setOppurtunities] = useState<
    CompanyInterface[] | null
  >();

  useEffect(() => {
    const getAllCompanies = async () => {
      try {
        setIsLoading(true);
        const { data } = await axiosInstance.get("/api/v1/company/all");

        if (data?.companies) {
          setOppurtunities(data.companies);
        }
      } catch (error) {
        const err = error as AxiosError;
        const data: any = err?.response?.data;
        if (data?.message) {
          toast(data?.message);
          return;
        }
        toast("some went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    getAllCompanies();
  }, []);
  if (isLoading) {
    return (
      <>
        <Loader />
        <p className="font-semibold text-sm text-center my-4">
          Fetching companies. Please be patience{" "}
        </p>
      </>
    );
  }
  return (
    <section className="w-full mt-44" id="opportunities">
      <div className="px-4 md:px-6">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-center">
          Current Internship Opportunities
        </h2>
        <div>
          {!oppurtunities ? (
            <Card className="mt-10">
              <CardTitle className="p-3 m-4 grid place-items-center text-xl">
                Coming Sooner than you expect
              </CardTitle>
            </Card>
          ) : (
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 max-w-screen-xl mx-auto">
              {oppurtunities.map((oppurtunitie: CompanyInterface) => (
                <OpportunitiesCard
                  key={oppurtunitie.id}
                  stipend={oppurtunitie.companyJobStipend}
                  title={oppurtunitie.companyJobTitle}
                  companyImage={
                    UPLOADCARE_BASE_URL + oppurtunitie?.companyLogo + "/"
                  }
                  companyName={oppurtunitie.companyName}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CurrentOppourtunities;
