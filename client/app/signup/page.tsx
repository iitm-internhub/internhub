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
import React from "react";
import signupFormSchema from "@/lib/schemas/signup.schema";
import axiosInstance from "@/lib/axios-instance";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      phone_number: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signupFormSchema>) => {
    const { username, password, email, phone_number } = values;

    try {
      const { data } = await axiosInstance.post("/api/v1/auth/signup", {
        username: username,
        password: password,
        email: email,
        phone_number: phone_number,
      });

      if (data?.success && data?.success === true) {
        const { authToken, message, success } = data;
        localStorage.setItem("access_token", authToken);
        toast.success(message);
        router.push("/");
        return;
      }

      toast.error("something went wrong");
    } catch (error) {
      const err = error as AxiosError;
      const data: any = err.response?.data;
      toast.error(data?.message);
    }
  };

  return (
    <>
      <div className="flex min-h-[93vh] bg-gray-100 dark:bg-[#09090b]">
        <div
          className="w-1/2 bg-cover bg-center dark:opacity-60 lg:block hidden"
          style={{
            backgroundImage: "url('/images/authentication.avif')",
          }}
        />
        <div className="m-auto w-full  sm:max-w-sm max-w-xs  bg-white shadow-md rounded-lg">
          <div className="backdrop-blur-xl p-8   rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 shadow-slate-800 dark:shadow-slate-600">
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
                        <FormLabel className="block text-sm font-medium text-gray-700">
                          Username
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="username"
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
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-sm font-medium text-gray-700">
                          Password
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
                        <FormLabel className="block text-sm font-medium text-gray-700">
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
                <Button className="w-full bg-gray-800 text-white hover:bg-gray-600">
                  Signup
                </Button>
                <div className="text-center">
                  <p className="mt-2 text-sm text-gray-600">
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
