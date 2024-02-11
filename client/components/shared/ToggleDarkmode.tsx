"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import DarkIcon from "@/public/icons/dark.svg";
import LightIcon from "@/public/icons/light.svg";
import SystemIcon from "@/public/icons/system.svg";
import Image from "next/image";

const DarkmodeToggle: React.FC = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link" size="sm" className="rounded-full">
          <SunIcon className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")} asChild>
          <div className="flex items-center justify-between">
            <p>Light</p>
            <Image
              alt="light"
              src={LightIcon}
              height={1000}
              width={1000}
              className="w-4 h-4"
            />
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} asChild>
          <div className="flex items-center justify-between">
            <p>Dark</p>
            <Image
              alt="dark"
              src={DarkIcon}
              height={1000}
              width={1000}
              className="w-4 h-4"
            />
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} asChild>
          <div className="flex items-center justify-between">
            <p>System</p>
            <Image
              alt="system"
              src={SystemIcon}
              height={1000}
              width={1000}
              className="w-4 h-4"
            />
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DarkmodeToggle;
