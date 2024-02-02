/**
 * v0 by Vercel.
 * @see https://v0.dev/t/k94PnzQ0pti
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/public/images/internhub.jpg";
import GoogleLogo from "@/public/icons/google.svg";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "InternHub - Signup",
  description: "IINTM Placement cell",
};

const Signup = () => {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-1/3 bg-black flex flex-col items-center justify-center">
        <Image
          alt="Logo"
          className="w-32 h-32 mb-8 rounded-full"
          src={Logo}
          height={200}
          width={200}
        />
        <h2 className="text-white text-2xl font-bold">Welcome to InternHub</h2>
        <p className="text-gray-400 mt-4 text-center">
          Join our community of millions. Let&apos;s get started!
        </p>
      </div>
      <div className="w-2/3 mx-auto max-w-[450px] space-y-8 my-28 p-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your information to create an account
          </p>
        </div>
        <div>
          <div className="space-y-4">
            <div className="grid">
              <div className="space-y-2">
                <Label htmlFor="first-name">Username</Label>
                <Input id="first-name" placeholder="Lee" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" required type="password" />
            </div>
            <Button className="w-full" type="submit">
              Sign Up
            </Button>
          </div>
          <Separator className="my-8" />
          <div className="space-y-4">
            <Button
              className="w-full flex items-center justify-center"
              variant="outline"
            >
              <Image
                src={GoogleLogo}
                height={22}
                width={22}
                alt="google logo"
                className="mx-2"
              />
              Sign up with Google
            </Button>
            <div className="mt-4 text-center text-sm">
              Already have an account?
              <Link className="underline ml-1" href="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
