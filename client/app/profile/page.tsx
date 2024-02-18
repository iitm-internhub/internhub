"use client";

import { useAuth } from "@/components/context/auth";
import ChangePassword from "@/components/shared/ChangePassword";
import Loader from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Switch } from "@/components/ui/switch";
import axiosInstance from "@/lib/axios-instance";
import { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface User {
  _id?: unknown;
  username: string;
  email: string;
  phone_number: string;
  college: string;
  semester: string;
  course: string;
  batch: string;
  createdAt: Date;
}

const ProfileSettings: React.FC = () => {
  const { userId: userToken } = useAuth();
  const [user, setUser] = useState<User>({
    _id: "",
    username: "",
    email: "",
    phone_number: "",
    college: "",
    semester: "",
    batch: "",
    course: "",
    createdAt: new Date(),
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        setIsLoading(true);
        const { data } = await axiosInstance.get("/api/v1/user/info", {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });

        if (data?.success) {
          toast.success(data?.message);
          setUser(data?.user);
          setIsError(false);
          return;
        }
      } catch (error) {
        const err = error as AxiosError;
        const data: any = err?.response?.data;
        if (data?.message) {
          toast.error(data?.message);
        }

        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (userToken) getUserInfo();
  }, [userToken]);

  if (isLoading) {
    return (
      <div className="mt-10">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <p className="max-w-screen-xl mx-auto my-10 text-center font-bold text-xl">
        Something went wrong
      </p>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="py-8 sm:py-16">
        <div className="container px-4">
          <div className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-4 mb-10">
                <div className="space-y-1.5 px-2">
                  <h2 className="text-2xl font-bold tracking-tight">
                    {user.username.charAt(0).toUpperCase() +
                      user.username.slice(1)}
                    &apos;s Profile
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 font-medium">
                    Account Information |{" "}
                    <span>
                      Joined on: {new Date(user.createdAt).toDateString()}{" "}
                    </span>
                  </p>
                </div>
                <div className="">
                  <div className="grid md:grid-cols-3 grid-cols-2 gap-6 border rounded-sm p-4">
                    <div>
                      <p className="font-medium line-clamp-1">Username</p>
                      <span className="line-clamp-1">
                        {user.username.charAt(0).toUpperCase() +
                          user.username.slice(1)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium line-clamp-1">College</p>
                      <span className="line-clamp-1">{user.college}</span>
                    </div>
                    <div>
                      <p className="font-medium line-clamp-1">Batch</p>
                      <span className="line-clamp-1">{user.batch}</span>
                    </div>
                    <div className="">
                      <p className="font-medium line-clamp-1">Semester</p>
                      <span className="line-clamp-1">{user.semester}</span>
                    </div>
                    <div>
                      <p className="font-medium line-clamp-1">Email</p>
                      <span className="line-clamp-1">{user.email}</span>
                    </div>
                    <div>
                      <p className="font-medium line-clamp-1">Phone number</p>
                      <span className="line-clamp-1">
                        +
                        {user.phone_number.toString().slice(0, 2) +
                          " " +
                          user.phone_number.toString().slice(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* security settings */}

              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>
                    Manage your security preferences.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <ChangePassword />
                    </div>
                    <div>
                      <Button size="sm" disabled asChild>
                        <p>
                          <span>Enable Two-factor </span>{" "}
                          <span className="hidden sm:block ml-1">
                            {" "}
                            Authentication
                          </span>
                        </p>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* nortification settings */}

              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings (coming soon)</CardTitle>
                  <CardDescription>
                    Manage your notification preferences.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <span>Emails</span>
                      <Switch defaultChecked disabled />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Notification</span>
                      <Switch disabled />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
