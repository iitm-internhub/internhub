"use client";

import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import BookmarkIcon from "@/public/icons/bookmark.svg";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import Link from "next/link";

const colors = [
  "#F9F6FE",
  "#FEF4E3",
  "#F7FCEC",
  "#F9F0F0",
  "#F5F8FE",
  "#FEFCEA",
];

interface OpportunitiesCardProps {
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

const OpportunitiesCard: React.FC<OpportunitiesCardProps> = ({
  companyId,
  stipend,
  title,
  companyName,
  companyImage,
  companyDescription,
  companyJobDescription,
  companyJobType,
  companyJobDate,
  companyLocation,
  companyBanner,
  companyJobRegistrationLink,
}) => {
  const CompanyDetail = {
    companyId,
    stipend,
    title,
    companyName,
    companyImage,
    companyDescription,
    companyJobDescription,
    companyJobType,
    companyJobDate,
    companyLocation,
    companyBanner,
    companyJobRegistrationLink,
  };
  const [bgColor, setBgColor] = useState<string>("#FEFCEA");

  useEffect(() => {
    const randomColor = (min: number, max: number) => {
      const color = colors[Math.floor(Math.random() * (max - min + 1) + min)];
      setBgColor(color);
    };

    randomColor(0, colors.length - 1);
  }, []);
  return (
    <Card className="w-full rounded-lg p-2">
      <CardHeader className="rounded-t-lg" style={{ backgroundColor: bgColor }}>
        <CardTitle className="text-lg dark:text-black font-semibold flex justify-between items-center w-full">
          ₹ {stipend} / month
          <Image
            alt="bookmark"
            src={BookmarkIcon}
            height={1000}
            width={1000}
            className="h-6 w-6 cursor-pointer"
          />
        </CardTitle>
      </CardHeader>
      <CardContent
        className="h-[25vh] grid place-items-center"
        style={{ backgroundColor: bgColor }}
      >
        <HoverCard>
          <HoverCardTrigger>
            <div className="text-4xl text-center dark:text-black">{title}</div>
          </HoverCardTrigger>
          <HoverCardContent className="min-w-[40dvw]">
            {companyJobDescription}
          </HoverCardContent>
        </HoverCard>
      </CardContent>
      <CardFooter>
        <div className="flex items-center justify-between w-full mt-6">
          <div className="flex items-center justify-center gap-4">
            <Image
              alt="companylogo"
              src={companyImage}
              height={1000}
              width={1000}
              className="aspect-square border border-gray-100 rounded-full cursor-pointer text-center h-12 w-12"
            />

            <HoverCard>
              <HoverCardTrigger>
                {" "}
                <span className="font-semibold text-base cursor-pointer line-clamp-1">
                  {companyName}
                </span>
              </HoverCardTrigger>
              <HoverCardContent>{companyDescription}</HoverCardContent>
            </HoverCard>
          </div>
          <Button
            onClick={() =>
              localStorage.setItem("companies", JSON.stringify(CompanyDetail))
            }
            className="text-white"
          >
            <Link href={`/company/${companyId}`}>View</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default OpportunitiesCard;
