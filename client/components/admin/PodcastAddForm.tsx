"use client";

import React, { useEffect, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
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
import podcastFormSchema from "@/lib/schemas/podcast.schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

LR.registerBlocks(LR);

const AddPodcast = () => {
  const [podcastBanner, setPodcastBanner] = useState<string | null>();
  const ctxBannerProviderRef = useRef<
    typeof LR.UploadCtxProvider.prototype & UploadCtxProvider
  >(null);
  const router = useRouter();

  useEffect(() => {
    const handleBannerUpload = (e: CustomEvent<LR.OutputFileEntry>) => {
      if (e.detail) {
        setPodcastBanner(e.detail.uuid);
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
  }, [podcastBanner]);
  const form = useForm<z.infer<typeof podcastFormSchema>>({
    resolver: zodResolver(podcastFormSchema),
    defaultValues: {
      podcastTitle: "",
      podcastDescription: "",
      podcastDate: new Date(),
      podcastYouTubeURL: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof podcastFormSchema>) => {
    try {
      const {
        podcastTitle,
        podcastDescription,
        podcastDate,
        podcastYouTubeURL,
      } = values;

      if (!podcastBanner) {
        toast.error("upload atleast one image");
        return;
      }

      const token = localStorage.getItem("admin_access_token");
      const { data } = await axiosInstance.post(
        "/api/v1/podcast-admin/create",
        {
          podcastTitle,
          podcastDescription,
          podcastDate,
          podcastBanner,
          podcastYouTubeURL,
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
        className="max-w-screen-xl mx-auto my-10"
      >
        <Card className="w-full h-full mx-auto my-auto max-w-3xl shadow-lg dark:shadow-blue-900 backdrop-blur-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl">Add a new podcast</CardTitle>
            <CardDescription>
              Fill out the form below to upload a new podcast episode.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <FormField
                  control={form.control}
                  name="podcastTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Podcast Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="podcast title"
                          {...field}
                          autoComplete="off"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-1.5">
                <FormField
                  control={form.control}
                  name="podcastYouTubeURL"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>YouTube URL</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://www.youtube.com/watch?"
                          {...field}
                          autoComplete="off"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-1.5">
                <FormField
                  control={form.control}
                  name="podcastDate"
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
                />{" "}
              </div>
            </div>
            <div className="space-y-1.5">
              <FormField
                control={form.control}
                name="podcastDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Podcast Description</FormLabel>
                    <FormControl>
                      <Textarea
                        className="min-h-[100px]"
                        placeholder="podcast description"
                        {...field}
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-1.5 flex flex-col">
              <Label>Thumbnail</Label>
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
          </CardContent>
          <CardFooter>
            <Button className="ml-auto">Upload</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default AddPodcast;
