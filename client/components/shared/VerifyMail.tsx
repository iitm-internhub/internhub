"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axiosInstance from "@/lib/axios-instance";
import toast from "react-hot-toast";

import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";

const VerifyMail = () => {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const token = searchParams.get("token");

  useEffect(() => {
    const verifiyMail = async () => {
      try {
        const timer = setInterval(() => {
          setProgress((prevProgress) => (prevProgress >= 99 ? 99 : prevProgress + 25));
        }, 250); // 250ms intervals to reach 100% in 1 second
    
        const { data } = await axiosInstance.post(
          "/api/v1/verify/mail-verification",
          {
            id: id,
            token: token,
          }
        );

        if (data?.success && data?.message) {
          setProgress(100)
          toast.success(data.message);
          router.push("/login");
        } else {
          setProgress(90)
          toast.error(data?.message);
          return;
        }
      } catch (error) {
        const err = error as AxiosError;
        const data: any = err.response?.data;
        if (data?.message) {
          toast.error(data?.message);
          return;
        }

        toast.error(err.response?.data as string);
      }
    };


    verifiyMail();
  }, [id, token, router]);

  return ( <Card className="w-full max-w-sm mx-auto">
  <CardHeader className="flex flex-col items-center space-y-2">
    <div>
      <div className="w-8 h-8" />
    </div>
    <CardTitle>Verifying Your Email</CardTitle>
    <CardDescription>Please wait while we verify your email address.</CardDescription>
  </CardHeader>
  <CardContent className="flex flex-col items-center space-y-4">
    <div className="w-full space-y-2">
      <p className="text-xs font-medium leading-none">Progress</p>
      <Progress value={progress} />
    </div>
    <div className="w-full space-y-2">
      <p className="text-xs font-medium leading-none">Status</p>
      <p className="text-xs font-medium">Verifying Your Email</p>
    </div>
  </CardContent>
</Card>);
};

export default VerifyMail;
