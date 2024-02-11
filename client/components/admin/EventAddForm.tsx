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

LR.registerBlocks(LR);

const EventAddForm = () => {
  const [eventImageIds, setEventImageIds] = useState<string[]>([]);
  const ctxProviderRef = useRef<
    typeof LR.UploadCtxProvider.prototype & UploadCtxProvider
  >(null);
  const router = useRouter();

  useEffect(() => {
    const handleUpload = (e: CustomEvent<LR.OutputFileEntry>) => {
      if (e.detail) {
        setEventImageIds(
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
  }, [eventImageIds]);

  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      eventTitle: "",
      eventDescription: "",
      eventDate: new Date(),
      eventLocation: "",
      eventRegistrationURL: "",
      eventSpeakers: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof eventFormSchema>) => {
    try {
      const {
        eventTitle,
        eventDescription,
        eventDate,
        eventRegistrationURL,
        eventLocation,
        eventSpeakers,
      } = values;

      if (eventImageIds.length === 0) {
        toast.error("upload atleast one image");
        return;
      }

      const token = localStorage.getItem("admin_access_token");
      const { data } = await axiosInstance.post(
        "/api/v1/event-admin/create",
        {
          eventTitle,
          eventDescription,
          eventImageIds,
          eventDate,
          eventRegistrationURL,
          eventLocation,
          eventSpeakers,
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
        className="space-y-8 mx-4 max-w-screen-xl xl:mx-auto border rounded-xl shadow-sm lg:mt-10 mt-4"
      >
        <div className="p-4">
          <div className="grid gap-6 px-4 sm:grid-cols-2 sm:gap-8">
            <div className="space-y-6 mb-2">
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="eventTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
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
                  name="eventDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          className="min-h-[128px] resize-none"
                          placeholder="event Description for readers"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2 ">
                <FormField
                  control={form.control}
                  name="eventDate"
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
              <div className="space-y-2 flex flex-col">
                <Label>Banner</Label>
                <lr-config
                  ctx-name="my-uploader"
                  pubkey="5c8ef136b5cc8e13744b"
                />
                <lr-file-uploader-regular
                  ctx-name="my-uploader"
                  css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@${LR.PACKAGE_VERSION}/web/lr-file-uploader-regular.min.css`}
                />

                <lr-upload-ctx-provider
                  ref={ctxProviderRef}
                  ctx-name="my-uploader"
                />
              </div>
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="eventLocation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="online / address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          <div className="space-y-6 px-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="eventSpeakers"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Speaker</FormLabel>
                    <FormControl>
                      <Input placeholder="enter speaker's name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="eventRegistrationURL"
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

            <div>
              <div className="flex gap-2.5">
                <Button variant="outline">Cancel</Button>
                <Button>Save</Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default EventAddForm;
