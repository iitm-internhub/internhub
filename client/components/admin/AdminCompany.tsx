import React from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const AdminCompanyPanel: React.FC = () => {
  const companyCardList = [
    {
      companyTitle: "Company title",
      companyDescription: "desc...",
      companyJobTItle: "Software Engineer",
      companyJobType: "Hybrid",
      companyJobDate: "February 10, 2024",
    },
    {
      companyTitle: "Company title",
      companyDescription: "desc...",
      companyJobTItle: "Software Engineer",
      companyJobType: "Hybrid",
      companyJobDate: "February 10, 2024",
    },{
      companyTitle: "Company title",
      companyDescription: "desc...",
      companyJobTItle: "Software Engineer",
      companyJobType: "Hybrid",
      companyJobDate: "February 10, 2024",
    },
  ];
  return (
    <>
     <Link href="/admin/company" className="flex w-auto">
        <Button className="w-full my-2">Add New Company</Button>
      </Link>
        <Card key="1" className=" grid mx-auto my-auto grid-cols-1 sm:grid-cols-3 gap-4   max-w-sm sm:max-w-fit rounded-xl border">
      {companyCardList.map((company, index) => (
          <div className="p-6 m-4 grid gap-4 shadow-lg dark:shadow-blue-900 backdrop-blur-lg">
            <div className="flex justify-around gap-4 items-center">
              <Image
                alt="Company logo"
                className="rounded-full"
                height={48}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width={48}
              />
              <div className="grid gap-0.5">
                <h3 className="text-sm font-bold tracking-wide">
                  {company.companyTitle}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {company.companyDescription}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {company.companyJobTItle}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {company.companyJobType}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {company.companyJobDate}
                </p>
              </div>
            </div>
            <hr />
           <div className="w-full justify-around flex">
           <Link href="#">
              <Button size="sm">Read More</Button>
            </Link>
            <Link href="#">
              <Button size="sm" className="bg-blue-600">Edit</Button>
            </Link>
           </div>
          </div>
      ))}
        </Card>
    </>
  );
};

export default AdminCompanyPanel;
