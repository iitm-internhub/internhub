"use client";

import Link from "next/link";
import Image from "next/image";

import Event from "@/public/images/event.jpeg";
import DeleteIcon from "@/public/icons/delete.svg";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

import PlayIcon from "@/public/icons/play.svg";
import DownloadIcon from "@/public/icons/download.svg";
import LocationIcon from "@/public/icons/map.svg";
import CalendarIcon from "@/public/icons/calendar.svg";
import PlusIcon from "@/public/icons/plus.svg";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import axiosInstance from "@/lib/axios-instance";

import Loader from "../shared/Loader";
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
  companyJobRegistrationLink: string;
}
const UPLOADCARE_BASE_URL = "https://ucarecdn.com/";

const AdminCompanyPanel: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [companies, setCompanies] = useState<CompanyInterface[] | null>();
  useEffect(() => {
    const getAllCompanies = async () => {
      try {
        setIsLoading(true);
        const token = localStorage.getItem("admin_access_token");
        const { data } = await axiosInstance.get("/api/v1/company-admin/get", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (data?.companies) {
          setCompanies(data.companies);
        }
      } catch (error) {
        const err = error as AxiosError;
        const data: any = err?.response?.data;
        toast.error(data?.message);
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
          Fetching Companies. Please be patience{" "}
        </p>
      </>
    );
  }

  return (
    <>
      <Link href="/admin/company">
        <Button className="m-2">Add new company</Button>
      </Link>

      {!companies ? (
        <p className="text-center mt-10 font-bold text-xl">
          No company found{" "}
          <Link
            href="/admin/company"
            className="text-blue-500 underline underline-offset-2"
          >
            Add one
          </Link>
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 mb-4 md:grid-cols-3 grid-cols-1 gap-6">
          {companies.map((company) => (
            <Card
              className="w-full  shadow-lg backdrop-blur-lg shadow-[#ccbb82] dark:shadow-blue-900 max-w-sm mx-auto"
              key={company.id}
            >
              <div className="relative">
                <div className="aspect-[16/9] rounded-t-lg overflow-hidden">
                  <Image
                    alt="company cover"
                    height={337}
                    src={`${UPLOADCARE_BASE_URL}${company.companyBanner}/`}
                    style={{
                      aspectRatio: "600/337",
                      objectFit: "cover",
                    }}
                    width={600}
                    className="backdrop-brightness-50"
                  />
                </div>
              </div>
              <CardContent className="p-6 max-h-[16vh] min-h-[16vh] overflow-auto no-scrollbar">
                <div className="grid gap-2">
                  <h3 className="text-base font-bold leading-none">
                    {company.companyName}
                  </h3>
                  <p className="text-sm text-gray-500">
                    <span>
                      Position:&nbsp;
                      {company.companyJobTitle}
                    </span>
                    <p className="text-sm text-gray-500">
                      {company.companyJobDescription}
                    </p>
                  </p>
                </div>
              </CardContent>
              <div className="border-t border-gray-200 dark:border-gray-800">
                <CardFooter className="p-4 grid gap-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">Date:</span>
                    {new Date(company.companyJobDate).toDateString()}
                    {"\n                  "}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">Location:</span>
                    {company.companyJobType}
                    {"\n                  "}
                  </div>

                  <div className="flex gap-2 my-4">
                    <Button size="sm" variant="default">
                      Edit
                    </Button>
                    <Button size="sm" variant="destructive">
                      Delete
                    </Button>
                  </div>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      )}
    </>
  );
};

export default AdminCompanyPanel;
