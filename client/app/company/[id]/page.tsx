"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface CompanyDetailInterface {
  companyId: string;
  stipend: string;
  title: string;
  companyImage: string;
  companyName: string;
  companyDescription: string;
  companyJobDescription: string;
  companyJobType: string;
  companyJobDate: Date;
  companyLocation: string;
  companyBanner: string;
  companyJobRegistrationLink: string;
}
const CompanyDetail = () => {
  const [CompanyDetails, setCompanyDetails] =
    useState<CompanyDetailInterface | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCompanies = localStorage.getItem("companies");
      if (storedCompanies) {
        setCompanyDetails(JSON.parse(storedCompanies));
      }
    }

    // Return a cleanup function
    return () => {
      if (typeof window !== "undefined") {
        localStorage.removeItem("companies");
      }
    };
  }, []);
  return (
    <>
      {CompanyDetails ? (
        <>
          <div className="min-w-full flex flex-col items-center gap-4 ">
            <div className="">
              <div className="w-full grid place-items-center">
                <Image
                  alt="[companyLogo]"
                  className="mx-auto rounded-full h-[120px] lg:top-[14em] top-[9.6em] w-[120px] z-10 absolute"
                  height={1000}
                  width={1000}
                  src={CompanyDetails?.companyImage}
                />
              </div>
              <Image
                alt="[companyBanner]"
                className="mx-auto aspect-video max-h-[40dvh] min-w-[90dvw] rounded-xl object-cover object-center "
                src={CompanyDetails?.companyBanner}
                height={1000}
                width={1000}
              />
            </div>

            <div className="space-y-2 w-full max-w-screen-xl mx-auto px-10 mt-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                About {CompanyDetails?.companyName}
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {CompanyDetails?.companyDescription}
              </p>
            </div>
          </div>

          <div className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
                <div className="flex flex-col gap-4 rounded-md p-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    {CompanyDetails?.title}
                  </h2>
                  <p className="">
                    {CompanyDetails.companyJobType} <br /> Registarion Date:{" "}
                    {new Date(CompanyDetails.companyJobDate).toDateString()}
                  </p>
                  <div className="prose max-w-none">
                    {CompanyDetails.companyJobDescription
                      .split("\n")
                      .map((line: string, index: number) => (
                        <p key={index} className="text-sm">
                          {line
                            .split(". ")
                            .map((sentence: string, sentenceIndex: number) => (
                              <React.Fragment key={sentenceIndex}>
                                {sentence}
                                {sentenceIndex < line.length - 1 && " "}
                              </React.Fragment>
                            ))}
                          {index <
                            CompanyDetails.companyJobDescription.split("\n")
                              .length -
                              1 && <br />}
                        </p>
                      ))}{" "}
                  </div>
                  <div className="flex items-center space-x-2">
                    <p className="text-sm">
                      Stipend: ₹{CompanyDetails.stipend} / month
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild>
                <Link href={CompanyDetails?.companyJobRegistrationLink}>
                  Register
                </Link>
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default CompanyDetail;
