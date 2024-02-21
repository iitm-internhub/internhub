"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axiosInstance from "@/lib/axios-instance";
import toast from "react-hot-toast";

import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

const VerifyMail = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const token = searchParams.get("token");

  useEffect(() => {
    const verifiyMail = async () => {
      try {
        const { data } = await axiosInstance.post(
          "/api/v1/verify/mail-verification",
          {
            id: id,
            token: token,
          }
        );

        if (data?.success && data?.message) {
          toast.success(data.message);
          router.push("/login");
        } else {
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

  return <div>page</div>;
};

export default VerifyMail;
