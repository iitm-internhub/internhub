/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Cx9sQwCmZmi
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/public/images/internhub.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "InternHub - Login",
  description: "IINTM Placement cell",
};

const Login = () => {
  return (
    <div
      key="1"
      className="flex flex-col md:flex-row min-h-screen bg-gray-100 dark:bg-gray-900"
    >
      <aside className="md:w-1/3 bg-black flex flex-col items-center justify-center text-white p-8">
        <div className="mb-8">
          <Image
            alt="Logo"
            className="h-32 w-auto rounded-full"
            src={Logo}
            height={200}
            width={200}
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Welcome Back!</h2>
          <p className="text-gray-200">We&apos;re glad to see you again</p>
        </div>
      </aside>
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="mx-auto max-w-sm space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your email below to login to your account
            </p>
          </div>
          <div>
            <div className="space-y-4">
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
                Login
              </Button>
            </div>
            <Separator className="my-8" />
            <div className="space-y-4">
              <Button className="w-full" variant="outline">
                Login with Google
              </Button>
              <Button className="w-full" variant="outline">
                Login with GitHub
              </Button>
              <Link
                className="inline-block w-full text-center text-sm underline"
                href="#"
              >
                Forgot your password?
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
