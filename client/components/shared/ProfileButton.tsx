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
          <DropdownMenuItem>
            <Link href='/profile'>
            Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Upcomming Events</DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        {isAdmin ? (
          <DropdownMenuItem>
            <Link href="/admin">Admin</Link>
          </DropdownMenuItem>
        ) : null}
        <DropdownMenuItem onClick={logout}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileButton;
