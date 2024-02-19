"use client"
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
} from "@/components/ui/hover-card"

import axiosInstance from "@/lib/axios-instance";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import Loader from "./Loader";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
type CurrentOppourtunitiesProps = {
  opportunities: JSON // or whatever the type of 'opportunities' is
};
const UPLOADCARE_BASE_URL = "https://ucarecdn.com/";

interface CompanyInterface {
  id: string;

  companyName: string;
  companyDescription: string;
  companyJobTitle:string;
  companyJobDescription:string;
  companyJobType:string;
  companyJobDate: Date;
  companyLocation: string;
  companyLogo: string;
  companyBanner:string;
  companyJobStipend:string;
  companyJobRegistrationLink:string;
}

const CurrentOppourtunities: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [oppurtunities, setOppurtunities] = useState<CompanyInterface[] | null>();

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
    <section
      className=" w-full py-12 md:py-24 lg:py-32  dark:bg-gray-800"
      id="opportunities"
    >
      <div className="container px-4 md:px-6">

        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
          Current Internship Opportunities
        </h2>
        <div className=' '>
      {!oppurtunities?(
       <Card className=" shadow-lg backdrop-blur-lg">
        <CardTitle className="p-3 m-4   flex   justify-center text-xl">Coming Sooner than you expect</CardTitle>
       </Card>
          ):(
            <>
           {oppurtunities.map((oppurtunity: CompanyInterface) => (
      <div key={oppurtunity.id} className={`grid gap-6 mt-8 md:grid-cols-2 grid-cols-1 ${oppurtunities.length === 2 ? 'lg:grid-cols-2' : oppurtunities.length === 1 ? 'lg:grid-cols-1' : 'lg:grid-cols-3'}`}>   
       <Card className="shadow-lg backdrop-blur-lg">
            
              <div className="rounded-sm p-2 m-2" style={{ backgroundImage: `url(${UPLOADCARE_BASE_URL + oppurtunity?.companyBanner+'/'})` }}>
              <Image height={100} width={100}
                src={UPLOADCARE_BASE_URL+ oppurtunity?.companyLogo+'/'}
                alt="company logo"
                className="w-20 h-20 mt-4 rounded-full mx-auto"
              />
              </div>
            
            <CardHeader>
              
              <CardTitle>{oppurtunity?.companyJobTitle}</CardTitle>
              <HoverCard>
  <HoverCardTrigger> <CardDescription>{oppurtunity.companyName}</CardDescription></HoverCardTrigger>
  <HoverCardContent className={`flex items-start m-8 ${oppurtunities.length===1? 'min-w-[70dvw] mt-[-4em] ml-[5em]':'min-w-[30dvw] ml-[30em] mt-[8em]'} `}>
    {oppurtunity?.companyDescription}
  </HoverCardContent>
</HoverCard>
             
              <CardDescription>Stipend: {oppurtunity.companyJobStipend} PM</CardDescription>
              <CardDescription>Location: {oppurtunity.companyJobType}</CardDescription>
            </CardHeader>
            <CardContent className="px-4 text-justify mb-2 -mx-2 overflow-auto no-scrollbar max-h-[10em] min-h-[10em] flex">
             {oppurtunity?.companyJobDescription.toString()}
            </CardContent>
           <div>
           <Button className="m-4"><Link href={oppurtunity.companyJobRegistrationLink}>Register</Link></Button>
           <Button className="m-4 bg-gray-600"><Link href='#'>Read More</Link></Button>
           </div>
          </Card>
          </div>)
           )}
          </>
          )}
         
        </div>
      </div>
    </section>
  );
};

export default CurrentOppourtunities;
