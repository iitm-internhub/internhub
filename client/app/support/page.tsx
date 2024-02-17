"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
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
import Link from "next/link";

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
import SupportFormSchema from "@/lib/schemas/support.schema";
import { useRouter } from "next/navigation";

const Support = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof SupportFormSchema>>({
    resolver: zodResolver(SupportFormSchema),
    defaultValues: {
      supportUserName: "",
      supportUserEmail: "",
      supportUserDate: new Date(),
      supportUserSubject: "",
      supportUserType: "",
      supportUserMessage: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof SupportFormSchema>) => {
    const {
      supportUserName,
      supportUserEmail,
      supportUserDate,
      supportUserSubject,
      supportUserType,
      supportUserMessage,
    } = values;
    console.log(values);
    try {
      const { data } = await axiosInstance.post("/api/v1/auth/support", {
        supportUserName: supportUserName,
        supportUserEmail: supportUserEmail,
        supportUserDate: supportUserDate,
        supportUserSubject: supportUserSubject,
        supportUserType: supportUserType,
        supportUserMessage: supportUserMessage,
      });
      const { authToken, success, message, user } = data;
      if (success == true) {
        localStorage.setItem("access_token", authToken);
        localStorage.setItem("user", JSON.stringify(user));
        toast.success(message);
        router.replace("/");
        window.location.href = "/";
        return;
      }

      toast.error("something went wrong");
    } catch (error) {
      const err = error as AxiosError;
      const data: any = err?.response?.data;
      toast.error(data?.message);
    }
  };

  return (
    <>
      <Button className="primary m-4">
        <Link href="/profile"> Go back</Link>
      </Button>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card className="w-full h-full mx-auto mt-8  shadow-xl backdrop-blur-lg my-auto max-w-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Contact Us</CardTitle>
              <CardDescription>
                Enter your information below and we'll get back to you as soon
                as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  {" "}
                  <FormField
                    control={form.control}
                    name="supportUserName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-sm font-medium text-gray-700">
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="John Doe"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="supportUserEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-sm font-medium text-gray-700">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="someone@gamil.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="supportUserSubject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-sm font-medium text-gray-700">
                          Subject
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="subject of the message"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="supportUserType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-sm font-medium text-gray-700">
                          Support Type
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          {...field}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select support type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="events">
                              Events Ticket Related
                            </SelectItem>
                            <SelectItem value="payment">
                              Payment Related
                            </SelectItem>
                            <SelectItem value="bug">
                              Technical Bug/Glitch
                            </SelectItem>
                            <SelectItem value="password/email">
                              Password/Email Related
                            </SelectItem>
                            <SelectItem value="others">Others</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-1.5">
                  <FormField
                    control={form.control}
                    name="supportUserMessage"
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
                <Button type="submit">Submit</Button>
              </div>
            </CardContent>
          </Card>
        </form>{" "}
      </Form>
    </>
  );
};
export default Support;
