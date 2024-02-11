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
import eventFormSchema from "@/lib/schemas/events.schema";
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
import companyFormSchema from "@/lib/schemas/company.schema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

LR.registerBlocks(LR);

const AddCompany = () => {
  const [companyLogo, setCompanyLogo] = useState<string[]>([]);
  const ctxProviderRef = useRef<
    typeof LR.UploadCtxProvider.prototype & UploadCtxProvider
  >(null);
  const router = useRouter();

  useEffect(() => {
    const handleUpload = (e: CustomEvent<LR.OutputFileEntry>) => {
      if (e.detail) {
        setCompanyLogo(
          (prev) => [...prev, e.detail.uuid].filter(Boolean) as string[]
        );
      }
    };

    ctxProviderRef.current?.addEventListener(
      "file-upload-success",
      handleUpload
    );
    const ctxProvRef = ctxProviderRef.current;
    return () => {
      ctxProvRef?.removeEventListener("file-upload-success", handleUpload);
    };
  }, [companyLogo]);
  const form = useForm<z.infer<typeof companyFormSchema>>({
    resolver: zodResolver(companyFormSchema),
    defaultValues: {
      companyName: "",
      companyDescription: "",
      companyJobTitle: "",
      companyJobDescription: "",
      companyJobType: "Remote",
      companyJobDate: new Date(),
      companyLocation: "",
      companyJobRegistrationLink: "",
      companyLogo: { type: "png", size: 1000 },
      companyBanner: { type: "png", size: 1000 },
    },
  });
  const onSubmit = async (values: z.infer<typeof companyFormSchema>) => {
    console.log(values, companyLogo);
    try {
      const {
        companyName,
        companyDescription,
        companyJobTitle,
        companyJobDescription,
        companyJobType,
        companyJobDate,
        companyLocation,
        companyJobRegistrationLink,
        companyLogo,
        companyBanner,
      } = values;

      if (companyLogo.type.length === 0) {
        toast.error("upload atleast one image");
        return;
      }

      const token = localStorage.getItem("admin_access_token");
      const { data } = await axiosInstance.post(
        "/api/v1/company-admin/create",
        {
          companyName,
          companyDescription,
          companyJobTitle,
          companyJobDescription,
          companyJobType,
          companyJobDate,
          companyLocation,
          companyJobRegistrationLink,
          companyLogo,
          companyBanner,
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
        window.location.href = "/admin";
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
        className="mx-auto max-w-3xl space-y-8 shadow-lg backdrop-blur-lg p-3 rounded-md m-3"
      >
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Upload Company Information</h1>
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
                    <Input placeholder="some title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="companyDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-[128px] resize-none"
                      placeholder="Company description for readers"
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
              name="companyLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Location</FormLabel>
                  <FormControl>
                    <Input placeholder="City/State/zip" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="companyJobType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Type</FormLabel>
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
                      <SelectItem value="Remote">Remote</SelectItem>
                      <SelectItem value="On-Site">On-Site</SelectItem>
                      <SelectItem value="Hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-2">
            <FormField
              control={form.control}
              name="companyJobTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Title</FormLabel>
                  <FormControl>
                    <Input placeholder="some title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="companyJobDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-[128px] resize-none"
                      placeholder="Job description in detal given by company"
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
                name="companyJobRegistrationLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Registration URL</FormLabel>
                    <FormControl>
                      <Input placeholder="enter registration url" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="companyJobDate"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <div className="flex items-center justify-between h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring  text-black cursor-pointer">
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
          </div>
          <div className="space-y-2 ">
            <Label>Logo</Label>
            <div>
              <lr-config ctx-name="my-uploader" pubkey="5c8ef136b5cc8e13744b" />
              <lr-file-uploader-regular
                ctx-name="my-uploader"
                css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@${LR.PACKAGE_VERSION}/web/lr-file-uploader-regular.min.css`}
              />

              <lr-upload-ctx-provider
                ref={ctxProviderRef}
                ctx-name="my-uploader"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Banner</Label>
            <div>
              <lr-config ctx-name="my-uploader" pubkey="5c8ef136b5cc8e13744b" />
              <lr-file-uploader-regular
                ctx-name="my-uploader"
                css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@${LR.PACKAGE_VERSION}/web/lr-file-uploader-regular.min.css`}
              />

              <lr-upload-ctx-provider
                ref={ctxProviderRef}
                ctx-name="my-uploader"
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

export default AddCompany;
