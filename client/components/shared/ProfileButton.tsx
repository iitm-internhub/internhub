"use client";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import LogoutIcon from "@/public/icons/logout-2.svg";
import AdminIcon from "@/public/icons/admin.svg";
import SupportIcon from "@/public/icons/support.svg";
import SettingsIcon from "@/public/icons/settings.svg";
import ProfileIcon from "@/public/icons/profile.svg";
import UpcommingEventIcon from "@/public/icons/events.svg";
import Image from "next/image";

const ProfileButton: React.FC = () => {
  const logout = () => {
    localStorage.removeItem("access_token");
    window.location.reload();
  };
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const admin_access_token = localStorage.getItem("admin_access_token");
    if (admin_access_token) {
      setIsAdmin(true);
    }
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="my_profile" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <div className="flex items-center justify-between">
              <Link href="/profile">Profile</Link>
              <Image
                src={ProfileIcon}
                alt="profile_icon"
                height={1000}
                width={1000}
                className="h-4 w-4"
              />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <div className="flex items-center justify-between">
              <p>Your Biz</p>
              <Image
                src={UpcommingEventIcon}
                alt="event_icon"
                height={1000}
                width={1000}
                className="h-4 w-4"
              />
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <div className="flex items-center justify-between">
            <p>Support</p>
            <Image
              src={SupportIcon}
              alt="support_icon"
              height={1000}
              width={1000}
              className="h-4 w-4"
            />
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <div className="flex items-center justify-between">
            <p>Settings</p>
            <Image
              src={SettingsIcon}
              alt="settings_icon"
              height={1000}
              width={1000}
              className="h-4 w-4"
            />
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {isAdmin ? (
          <DropdownMenuItem className="flex justify-between items-center">
            <Link href="/admin">Admin</Link>
            <Image
              src={AdminIcon}
              alt="admin_icon"
              height={1000}
              width={1000}
              className="h-4 w-4"
            />
          </DropdownMenuItem>
        ) : null}
        <DropdownMenuItem
          onClick={logout}
          className="bg-red-600 text-white mt-1 flex justify-between items-center"
        >
          Log out
          <Image
            src={LogoutIcon}
            alt="logout_icon"
            height={1000}
            width={1000}
            className="h-4 w-4 invert"
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileButton;
