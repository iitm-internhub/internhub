import React from "react";
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

const ProfileButton: React.FC = () => {
  const logout = () => {
    localStorage.removeItem("access_token");
    window.location.reload();
  };

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
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Upcomming Events</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileButton;
