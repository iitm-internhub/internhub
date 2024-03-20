"use client";

import React, { useEffect, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";

import * as LR from "@uploadcare/blocks";

import CalendarIcon from "@/public/icons/calendar.svg";
import { Label } from "../ui/label";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import axiosInstance from "@/lib/axios-instance";

import { useRouter } from "next/navigation";
import companyStudentFormSchema from "@/lib/schemas/company.student.upload.schema";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

LR.registerBlocks(LR);

const AddCompanyStudent = () => {
  const [companyBanner, setCompanyBanner] = useState<string | null>();
  const ctxLogoProviderRef = useRef<
    typeof LR.UploadCtxProvider.prototype & UploadCtxProvider
  >(null);
  const ctxBannerProviderRef = useRef<
    typeof LR.UploadCtxProvider.prototype & UploadCtxProvider
  >(null);

  const router = useRouter();

  useEffect(() => {
    const handleBannerUpload = (e: CustomEvent<LR.OutputFileEntry>) => {
      if (e.detail) {
        setCompanyBanner(e.detail.uuid);
      }
    };

    ctxBannerProviderRef.current?.addEventListener(
      "file-upload-success",
      handleBannerUpload
    );
    const ctxBannerProvRef = ctxBannerProviderRef.current;
    return () => {
      ctxBannerProvRef?.removeEventListener(
        "file-upload-success",
        handleBannerUpload
      );
    };
  }, [companyBanner]);

  const form = useForm<z.infer<typeof companyStudentFormSchema>>({
    resolver: zodResolver(companyStudentFormSchema),
    defaultValues: {
      companyName: "",
      companyEventConductDate: new Date(),
      companyEventConductType: "Online",
      companyTotalStudentRegistered: 0,
      companyTotalStudentAttended: 0,
      companyTotalStudentAccepted: 0,
    },
  });
  const onSubmit = async (values: z.infer<typeof companyStudentFormSchema>) => {
    try {
      const {
        companyName,
        companyEventConductDate,
        companyEventConductType,
        companyTotalStudentRegistered,
        companyTotalStudentAttended,
        companyTotalStudentAccepted,
      } = values;

      if (!companyBanner) {
        toast.error("upload banner and logo both");
        return;
      }

      const token = localStorage.getItem("company_access_token");
      const { data } = await axiosInstance.post(
        "/api/v1/auth-admin-company/upload",
        {
          companyName,
          companyEventConductDate,
          companyEventConductType,
          companyTotalStudentRegistered,
          companyTotalStudentAttended,
          companyTotalStudentAccepted,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (data?.success) {
        toast.success(data?.message);
        router.push("/");
        window.location.href = "/admin/company-login";
        return;
      }
    } catch (error) {
      const err = error as AxiosError;
      const data: any = err?.response?.data;
      toast.error(data?.message);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto mt-4 max-w-3xl space-y-8 shadow-lg shadow-gray-800 backdrop-blur-lg p-3 rounded-md m-3"
      >
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Upload Conducted Event Information</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Fill in the details below
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input
                      className="dark:text-white"
                      placeholder="some title"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="companyEventConductDate"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Event Conduction Date</FormLabel>
                  <FormControl>
                    <div className="flex dark:text-white items-center justify-between h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring  text-black cursor-pointer">
                      <DatePicker
                        selected={field.value}
                        onChange={(date: Date) => field.onChange(date)}
                        showTimeSelect
                        timeInputLabel="Time:"
                        dateFormat="MM/dd/yyyy h:mm aa"
                        wrapperClassName="datePicker"
                        className="w-full cursor-pointer"
                      />

                      <Image
                        src={CalendarIcon}
                        alt="calendar"
                        width={24}
                        height={24}
                        className="h-4 w-4"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>{" "}
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="companyEventConductType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Conduction Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    {...field}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Online">Online</SelectItem>
                      <SelectItem value="Offline">Offline</SelectItem>
                      <SelectItem value="Hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="companyTotalStudentRegistered"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total Registrations</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="dark:text-white"
                    placeholder="total registered student count"
                    {...field}
                    onChange={(e) => {
                      field.onChange(parseInt(e.target.value));
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="companyTotalStudentAttended"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Student Attended </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="dark:text-white"
                      placeholder="total student attended"
                      {...field}
                      onChange={(e) => {
                        field.onChange(parseInt(e.target.value));
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="companyTotalStudentAccepted"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Accepted</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="dark:text-white"
                      placeholder="total student accepted"
                      {...field}
                      onChange={(e) => {
                        field.onChange(parseInt(e.target.value));
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-2 "></div>
          <div className="space-y-2">
            <Label>Excel Record</Label>
            <div>
              <lr-config
                ctx-name="my-banner-uploader"
                pubkey="5c8ef136b5cc8e13744b"
              />
              <lr-file-uploader-regular
                ctx-name="my-banner-uploader"
                css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@${LR.PACKAGE_VERSION}/web/lr-file-uploader-regular.min.css`}
              />

              <lr-upload-ctx-provider
                ref={ctxBannerProviderRef}
                ctx-name="my-banner-uploader"
              />
            </div>
          </div>
          <div className="flex gap-2.5">
            <Button variant="outline">Cancel</Button>
            <Button>Save</Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default AddCompanyStudent;
