"use client";

import React, { useState } from "react";

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
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import EyeIcon from "@/public/icons/eye.svg";
import EyeSlashIcon from "@/public/icons/eye-slash.svg";
import Image from "next/image";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import axiosInstance from "@/lib/axios-instance";
import { useAuth } from "../context/auth";
import Loader from "./Loader";

const ChangePassword = () => {
  const { userId: userToken } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [oldPassword, setOldPassword] = useState<string | undefined>();
  const [newPassword, setNewPassword] = useState<string | undefined>();

  const [oldPasswordShow, setOldPasswordShow] = useState<boolean>(false);
  const [newPasswordShow, setNewPasswordShow] = useState<boolean>(false);

  const toggleOldPasswordShow = () => {
    setOldPasswordShow(!oldPasswordShow);
  };
  const toggleNewPasswordShow = () => {
    setNewPasswordShow(!newPasswordShow);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!oldPassword || !newPassword) {
      toast.error("password field cannot be empty!");
      return;
    }

    try {
      setIsLoading(true);
      const { data } = await axiosInstance.patch(
        "/api/v1/user/update-password",
        {
          oldPassword,
          newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      if (data?.success) {
        if (data?.message) {
          toast.success(data?.message);
        }

        setTimeout(() => {
          localStorage.removeItem("access_token");
          location.href = "/";
        }, 1 * 1000);
      }
    } catch (error) {
      const err = error as AxiosError;
      const data: any = err?.response?.data;
      toast.error(data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size="sm">Change Password</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm px-6">
          <DrawerHeader>
            <DrawerTitle className="text-center">Change Password</DrawerTitle>
            <DrawerDescription className="text-center">
              Set up a strong password
            </DrawerDescription>
          </DrawerHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="old_password">Old Password</Label>
              <div className="flex justify-between items-center gap-4">
                <Input
                  id="old_password"
                  type={`${oldPasswordShow ? "text" : "password"}`}
                  placeholder="old pass"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setOldPassword(e.target.value);
                  }}
                  autoComplete="false"
                />
                <Image
                  src={oldPasswordShow ? EyeIcon : EyeSlashIcon}
                  alt="show"
                  height={1000}
                  width={1000}
                  className="h-6 w-6 cursor-pointer"
                  onClick={toggleOldPasswordShow}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="new_password">New Password</Label>
              <div className="flex justify-between items-center gap-4">
                <Input
                  id="new_password"
                  type={`${newPasswordShow ? "text" : "password"}`}
                  placeholder="new pass"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setNewPassword(e.target.value);
                  }}
                  autoComplete="false"
                />
                <Image
                  src={newPasswordShow ? EyeIcon : EyeSlashIcon}
                  alt="show"
                  height={1000}
                  width={1000}
                  className="h-6 w-6 cursor-pointer"
                  onClick={toggleNewPasswordShow}
                />
              </div>
            </div>

            {isLoading ? (
              <div className="py-2 grid place-items-center gap-2">
                <Loader />
                <p className="font-medium">Loading..</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                <Button type="submit">Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </div>
            )}
          </form>
          <DrawerFooter className="text-center text-xs gap-0 my-4">
            <span>This act is under supervision.</span>{" "}
            <span>We care your privacy.</span>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ChangePassword;
