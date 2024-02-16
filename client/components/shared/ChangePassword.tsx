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

const ChangePassword = () => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(oldPassword, newPassword);
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
                  className="h-4 w-4"
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
                  className="h-4 w-4"
                  onClick={toggleNewPasswordShow}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button type="submit">Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </div>
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
