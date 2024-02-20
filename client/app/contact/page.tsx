"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axiosInstance from "@/lib/axios-instance";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import EnquiryFormSchema from "@/lib/schemas/enquiry.schema";
import { useState } from "react";
import Loader from "@/components/shared/Loader";
const Contact = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof EnquiryFormSchema>>({
    resolver: zodResolver(EnquiryFormSchema),
    defaultValues: {
      enquirerName: "",
      enquirerEmail: "",
      enquirerDate: new Date(),
      enquirerReason: "",
      enquirerType: "",
      enquirerQuery: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof EnquiryFormSchema>) => {
    setIsLoading(true);
    const {
      enquirerName,
      enquirerEmail,
      enquirerReason,
      enquirerType,
      enquirerQuery,
    } = values;

    try {
      const { data } = await axiosInstance.post("/api/v1/contact/enquiry", {
        fullname: enquirerName,
        email: enquirerEmail,
        regarding: enquirerReason,
        representing: enquirerType,
        message: enquirerQuery,
      });
      const { success, message } = data!;
      if (success === true) {
        toast.success(message);
        router.replace("/");
        return;
      }

      toast.error("something went wrong");
    } catch (error) {
      const err = error as AxiosError;
      const data: any = err?.response?.data;
      toast.error(data?.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex no-scrollbar no-scrollbar h-[100dvh] items-center justify-center  bg-gray-100 mt-8 dark:bg-gray-900 px-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card className="shadow-lg shadow-gray-200 h-full my-8 backdrop-blur-lg opacity-70 dark:bg-[#364157]">
            <CardContent>
              <div className="space-y-8">
                <div className="space-y-2 my-6">
                  <h2 className=" text-3xl font-semibold text-center">
                    Enquiry ? <br />{" "}
                    <p className="text-zinc-500 dark:text-zinc-400">
                      Get in touch with us via filling the form below
                    </p>
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="grid  gap-4">
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="enquirerName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="block text-sm font-medium text-gray-700 dark:text-white">
                              Full Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                className=" dark:text-white"
                                placeholder="John Doe"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="enquirerEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="block text-sm font-medium text-gray-700 dark:text-white">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="dark:text-white mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                              placeholder="someone@gamil.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />{" "}
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="enquirerReason"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Regarding</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            {...field}
                            defaultValue={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select your enquiry  regarding" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="internships">
                                Internships
                              </SelectItem>
                              <SelectItem value="podcast/guest-lectures">
                                Podcasts/Guest Lectures
                              </SelectItem>
                              <SelectItem value="events">Events</SelectItem>
                              <SelectItem value="others">Others</SelectItem>
                            </SelectContent>
                          </Select>{" "}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="enquirerType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Representing</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            {...field}
                            defaultValue={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="What do you represent?" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="orgnisation">
                                Orgnisation
                              </SelectItem>
                              <SelectItem value="individual">
                                Individual
                              </SelectItem>
                              <SelectItem value="others">Other</SelectItem>
                            </SelectContent>
                          </Select>{" "}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="enquirerQuery"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              className="min-h-[100px]"
                              placeholder="message description"
                              {...field}
                              autoComplete="off"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  {isLoading ? (
                    <div className="py-2 grid gap-4 place-items-center">
                      <Loader />
                      <p className="font-medium">Loading</p>
                    </div>
                  ) : (
                    <Button className="bg-gray-800 text-white" type="submit">
                      Send message
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </form>
      </Form>
    </div>
  );
};

export default Contact;
