import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const AdminCompanyPanel: React.FC = () => {
  const companyCardList = [
    {
      companyID: "aa",
      companyTitle: "Company title",
      companyDescription: "desc...",
      companyJobTitle: "Software Engineer",
      companyJobType: "Hybrid",
      companyJobDescription:"desc",
      companyJobDate: "February 10, 2024",
    },
    {
      companyID: "bb",
      companyTitle: "Company title",
      companyDescription: "desc...",
      companyJobTitle: "Software Engineer",
      companyJobDescription:"desc",

      companyJobType: "Hybrid",
      companyJobDate: "February 10, 2024",
    },
  ];
  return (
    <>
      <Link href="/admin/company">
        <Button className="m-2">Add new company</Button>
      </Link>

      {!companyCardList ? (
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
          {companyCardList.map((company) => (
            <Card
              className="w-full  shadow-lg backdrop-blur-lg shadow-[#ccbb82] dark:shadow-blue-900 max-w-sm mx-auto"
              key={company.companyID}
            >
              <div className="relative">
                <div className="aspect-[16/9] rounded-t-lg overflow-hidden">
                  {/* <Image
                  alt="company cover"
                  height="337"
                  src={`${UPLOADCARE_BASE_URL}${company.companyImageIds[0]}/`}
                  style={{
                    aspectRatio: "600/337",
                    objectFit: "cover",
                  }}
                  width="600"
                  className="backdrop-brightness-50 opacity-70"
                /> */}
                </div>
              </div>
              <CardContent className="p-6 max-h-[16vh] min-h-[16vh] overflow-auto no-scrollbar">
                <div className="grid gap-2">
                  <h3 className="text-base font-bold leading-none">
                    {company.companyTitle}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {company.companyJobTitle} 
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
