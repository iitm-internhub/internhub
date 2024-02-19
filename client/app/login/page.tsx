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
import React, { useState } from "react";
import loginFormSchema from "@/lib/schemas/login.schema";

import axiosInstance from "@/lib/axios-instance";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

import Loader from "@/components/shared/Loader";

const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
    const { password, email } = values;
    try {
      setIsLoading(true);
      const { data } = await axiosInstance.post("/api/v1/auth/login", {
        email: email,
        password: password,
      });
      const { authToken, success, message, user } = data;
      if (success == true) {
        localStorage.setItem("access_token", authToken);
        localStorage.setItem("user", JSON.stringify(user));
        toast.success(message);

        setTimeout(() => {
          window.location.href = "/";
        }, 1 * 1000);

        return;
      }

      toast.error("something went wrong");
    } catch (error) {
      const err = error as AxiosError;
      const data: any = err?.response?.data;
      if (data?.message) {
        toast.error(data?.message);
        return;
      }

      toast.error(err.response?.data as string);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-[93vh] bg-gray-100 dark:bg-[#09090b]">
      <div
        className="w-1/2 bg-cover bg-center dark:opacity-60 lg:block hidden"
        style={{
          backgroundImage: "url('/images/authentication.avif')",
        }}
      />
      <div className="m-auto w-full dark:bg-[#0a1d45] sm:max-w-sm max-w-xs  bg-white shadow-md rounded-lg">
        <div className="backdrop-blur-xl p-8   rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 shadow-slate-800">
          <h1 className="text-2xl font-bold text-gray-900 text-center">
            Welcome back to InternHub
          </h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-8 space-y-4"
            >
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
                          className="mt-1 w-full dark:text-white rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
                          className="mt-1 w-full dark:text-white rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                          placeholder="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {isLoading ? (
                <div className="py-2 grid place-items-center gap-2">
                  <Loader />
                  <p className="font-medium">Loading..</p>
                </div>
              ) : (
                <Button className="w-full bg-gray-800 text-white hover:bg-gray-600">
                  Login
                </Button>
              )}
              <div className="text-center">
                <p className="dark:text-gray-200 mt-2 text-sm text-gray-600 ">
                  Don&apos;t have an account ?
                  <Link
                    className="font-medium text-blue-600 hover:text-blue-500 ml-2"
                    href="/signup"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
