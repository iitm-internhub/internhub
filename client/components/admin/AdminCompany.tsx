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
    },
  ];
  return (
      {companyCardList.map((company, index) => (
    <Card key="1" className="w-full max-w-sm  rounded-xl border">
        <div className="p-6 grid gap-4 shadow-lg dark:shadow-blue-900 backdrop-blur-lg">
          <div className="flex gap-4 items-center">
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
          <Link href="#">
            <Button size="sm">Read More</Button>
          </Link>
        </div>
    </Card>
      ))}
  );
};

export default AdminCompanyPanel;
