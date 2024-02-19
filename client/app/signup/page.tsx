"use client";

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

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import signupFormSchema from "@/lib/schemas/signup.schema";
import axiosInstance from "@/lib/axios-instance";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Loader from "@/components/shared/Loader";

const Signup = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [batch, setBatch] = useState<string | null>(null);
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      phone_number: "",
    },
  });
  const { watch } = form;
  const batchSelected = watch("batch");
  useEffect(() => {
    setBatch(batchSelected);
  }, [batchSelected]);
  const onSubmit = async (values: z.infer<typeof signupFormSchema>) => {
    setIsLoading(true);
    const {
      username,
      password,
      email,
      phone_number,
      college,
      batch,
      semester,
    } = values;

    try {
      const { data } = await axiosInstance.post("/api/v1/auth/signup", {
        username: username,
        password: password,
        email: email,
        phone_number: phone_number,
        college: college,
        batch: batch,
        semester: semester,
      });
      if (data?.success && data?.success === true) {
        const { authToken, message } = data;
        localStorage.setItem("access_token", authToken);
        toast.success(message);

        setTimeout(() => {
          window.location.href = "/";
        }, 1 * 1000);

        return;
      }
      toast.error("something went wrong");
    } catch (error) {
      const err = error as AxiosError;
      const data: any = err.response?.data;
      if (data?.message) {
        toast.error(data?.message);
        return;
      }

      toast.error("something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex min-h-[91vh] bg-gray-100 dark:bg-[#09090b]">
        <div
          className="w-1/2 bg-cover  bg-center dark:opacity-60 lg:block hidden"
          style={{
            backgroundImage: "url('/images/authentication.avif')",
          }}
        />
        <div className="dark:bg-[#03112e] dark:text-white m-auto w-full sm:max-w-md md:max-w-lg max-w-xs bg-white shadow-md rounded-lg">
          <div className="backdrop-blur-xl p-8 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 shadow-slate-800 dark:shadow-slate-600">
            <h1 className="text-2xl font-bold text-gray-900 text-center">
              Welcome to InternHub
            </h1>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-8 space-y-4"
              >
                <div>
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="dark:text-white block text-sm font-medium text-gray-700">
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="mt-1 w-full dark:text-white border-gray-300  focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Your Name"
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
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="dark:text-white block text-sm font-medium text-gray-700">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="mt-1 w-full dark:text-white border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="dark:text-white block text-sm font-medium text-gray-700">
                          Password
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            className="mt-1 w-full dark:text-white border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="password"
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
                    name="phone_number"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="dark:text-white block text-sm font-medium text-gray-700">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="+91 "
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
                    name="college"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select
                            {...field}
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="w-full text-black dark:text-white border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                              <SelectValue placeholder="College" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>College</SelectLabel>
                                <SelectItem value="IINTM">
                                  (IINTM) Institute of Innovation in Technology
                                  and Management
                                </SelectItem>
                                <SelectItem value="IITM">
                                  (IITM) Institute of Information Technology and
                                  Management
                                </SelectItem>
                                <SelectItem value="IPITM">
                                  (IPITM) Indraprastha Institute of Technology
                                  and Management
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <FormField
                      control={form.control}
                      name="batch"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              {...field}
                            >
                              <SelectTrigger className="w-full dark:text-white text-black border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                                <SelectValue placeholder="Course" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>Course</SelectLabel>
                                  <SelectItem value="BCA">BCA</SelectItem>
                                  <SelectItem value="BBA">BBA</SelectItem>
                                  <SelectItem value="B.COM">B.COM</SelectItem>
                                  <SelectItem value="B.TECH">B.TECH</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="semester"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              {...field}
                            >
                              <SelectTrigger className="w-full dark:text-white text-black border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                                <SelectValue placeholder="Semester" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>Semester</SelectLabel>
                                  {batch === "B.TECH" ? (
                                    <>
                                      <SelectItem value="SEM_1">
                                        SEM 1
                                      </SelectItem>
                                      <SelectItem value="SEM_2">
                                        SEM 2
                                      </SelectItem>
                                      <SelectItem value="SEM_3">
                                        SEM 3
                                      </SelectItem>
                                      <SelectItem value="SEM_4">
                                        SEM 4
                                      </SelectItem>
                                      <SelectItem value="SEM_5">
                                        SEM 5
                                      </SelectItem>
                                      <SelectItem value="SEM_6">
                                        SEM 6
                                      </SelectItem>
                                      <SelectItem value="SEM_7">
                                        SEM 7
                                      </SelectItem>
                                      <SelectItem value="SEM_8">
                                        SEM 8
                                      </SelectItem>
                                    </>
                                  ) : (
                                    <>
                                      <SelectItem value="SEM_1">
                                        SEM 1
                                      </SelectItem>
                                      <SelectItem value="SEM_2">
                                        SEM 2
                                      </SelectItem>
                                      <SelectItem value="SEM_3">
                                        SEM 3
                                      </SelectItem>
                                      <SelectItem value="SEM_4">
                                        SEM 4
                                      </SelectItem>
                                      <SelectItem value="SEM_5">
                                        SEM 5
                                      </SelectItem>
                                      <SelectItem value="SEM_6">
                                        SEM 6
                                      </SelectItem>
                                    </>
                                  )}
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                {isLoading ? (
                  <div className="py-2 grid place-items-center gap-2">
                    <Loader />
                    <p>Loading..</p>
                  </div>
                ) : (
                  <Button className="w-full bg-gray-800 dark:text-white hover:bg-gray-600">
                    Signup
                  </Button>
                )}
                <div className="text-center">
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
                    Already have an account ?
                    <Link
                      className="font-medium text-blue-600 hover:text-blue-500 ml-2"
                      href="/login"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
