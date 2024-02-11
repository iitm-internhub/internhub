"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import logo from "@/public/images/logo-blue.png";
import DarkmodeToggle from "./ToggleDarkmode";
import ProfileButton from "./ProfileButton";
import MobileNavigation from "./MobileNavigation";

import { useAuth } from "../context/auth";

const Header: React.FC = () => {
  const { userId } = useAuth();
  const isAuthenticated = !!userId;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-screen-xl rounded-full">
        <Link className="flex items-center justify-center" href="/">
          <Image
            src={logo}
            alt="internhub_logo"
            height={1000}
            width={1000}
            className="rounded-full sm:h-8 sm:w-8 h-6 w-6"
          />
          <span className="ml-2 sm:text-lg text-sm font-semibold">
            InternHub
          </span>
        </Link>
        <nav className="hidden md:flex gap-4">
          <Link
            className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/events"
          >
            Events
          </Link>
          <Link
            className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/podcasts"
          >
            Podcasts
          </Link>
          <Link
            className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/team"
          >
            Team
          </Link>
          <Link
            className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/contact"
          >
            Contact
          </Link>
        </nav>
        <div className="flex gap-2 items-center justify-center">
          <DarkmodeToggle />
          <div className="md:hidden block">
            <MobileNavigation isLoggedIn={isAuthenticated} />
          </div>
          {isAuthenticated ? (
            <>
              <ProfileButton />
            </>
          ) : (
            <div className="hidden md:flex gap-2">
              <Button asChild size="sm">
                <Link href="/signup">Signup</Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/login">Login</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
